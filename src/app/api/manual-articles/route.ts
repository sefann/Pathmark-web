import { NextRequest, NextResponse } from 'next/server';
import { Article } from '@/types/insights';
import fs from 'fs/promises';
import path from 'path';

const MANUAL_ARTICLES_FILE = path.join(process.cwd(), 'src/data/manual-articles.ts');

// Helper function to read current manual articles
async function readManualArticles(): Promise<Article[]> {
  try {
    const fileContent = await fs.readFile(MANUAL_ARTICLES_FILE, 'utf-8');
    
    // Extract the array from the file content
    const match = fileContent.match(/export const manualArticles: Article\[\] = (\[[\s\S]*?\]);/);
    if (match) {
      // This is a simplified approach - in production, you'd want a proper database
      // For now, we'll return the existing articles from the import
      const { manualArticles } = await import('@/data/manual-articles');
      return manualArticles;
    }
    return [];
  } catch (error) {
    console.error('Error reading manual articles:', error);
    return [];
  }
}

// Helper function to write manual articles back to file
async function writeManualArticles(articles: Article[]): Promise<void> {
  try {
    const articlesString = articles.map(article => `  {
    id: '${article.id}',
    title: '${article.title.replace(/'/g, "\\'")}',
    link: '${article.link}',
    description: '${article.description.replace(/'/g, "\\'")}',
    category: '${article.category}',
    source: 'Pathmark Advisory',
    pubDate: '${article.pubDate}',
    author: '${article.author?.replace(/'/g, "\\'") || 'Pathmark Team'}',
    image: ${article.image ? `\`${article.image.replace(/`/g, '\\`')}\`` : 'undefined'},
    isManual: true,
    featured: ${article.featured || false}
  }`).join(',\n');

    const fileContent = `import { Article } from '@/types/insights';

export const manualArticles: Article[] = [
${articlesString}
];
`;

    await fs.writeFile(MANUAL_ARTICLES_FILE, fileContent, 'utf-8');
  } catch (error) {
    console.error('Error writing manual articles:', error);
    throw new Error('Failed to save articles');
  }
}

export async function GET(request: NextRequest) {
  try {
    // Get user from headers (set by middleware)
    const userHeader = request.headers.get('x-admin-user');
    const user = userHeader ? JSON.parse(userHeader) : null;

    const articles = await readManualArticles();
    return NextResponse.json({ 
      success: true, 
      articles,
      user 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, category, author, link, image, featured } = body;

    // Validate required fields
    if (!title || !description || !category || !link) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newArticle: Article = {
      id: `pathmark-manual-${Date.now()}`,
      title,
      description,
      category,
      source: 'Pathmark Advisory',
      pubDate: new Date().toISOString(),
      author: author || 'Pathmark Team',
      link,
      image: image || undefined,
      isManual: true,
      featured: featured || false
    };

    const currentArticles = await readManualArticles();
    const updatedArticles = [newArticle, ...currentArticles];
    
    await writeManualArticles(updatedArticles);

    return NextResponse.json({ success: true, article: newArticle });
  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create article' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, title, description, category, author, link, image, featured } = body;

    if (!id || !title || !description || !category || !link) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const currentArticles = await readManualArticles();
    const articleIndex = currentArticles.findIndex(article => article.id === id);

    if (articleIndex === -1) {
      return NextResponse.json(
        { success: false, error: 'Article not found' },
        { status: 404 }
      );
    }

    const updatedArticle: Article = {
      ...currentArticles[articleIndex],
      title,
      description,
      category,
      author: author || 'Pathmark Team',
      link,
      image: image || undefined,
      featured: featured || false
    };

    currentArticles[articleIndex] = updatedArticle;
    await writeManualArticles(currentArticles);

    return NextResponse.json({ success: true, article: updatedArticle });
  } catch (error) {
    console.error('Error updating article:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update article' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Article ID is required' },
        { status: 400 }
      );
    }

    const currentArticles = await readManualArticles();
    const filteredArticles = currentArticles.filter(article => article.id !== id);

    if (filteredArticles.length === currentArticles.length) {
      return NextResponse.json(
        { success: false, error: 'Article not found' },
        { status: 404 }
      );
    }

    await writeManualArticles(filteredArticles);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting article:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete article' },
      { status: 500 }
    );
  }
}
