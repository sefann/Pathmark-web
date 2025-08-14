# Pathmark Advisory - Sanity CMS Integration

This document explains how to set up and use the Sanity CMS integration for managing insights and articles on the Pathmark Advisory website.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Sanity Project

1. Go to [sanity.io](https://sanity.io) and create a new project
2. Copy your project ID and dataset name
3. Create a `.env.local` file with your Sanity credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
```

### 3. Initialize Sanity Studio

```bash
npx sanity init
```

### 4. Start Development Server

```bash
npm run dev
```

## 📝 How to Use Sanity Studio

### Accessing the CMS

1. **Local Development**: Visit `http://localhost:3000/studio`
2. **Production**: Visit `https://yourdomain.com/studio`

### Creating Your First Insight

1. **Log into Sanity Studio** at `/studio`
2. **Click "Create new"** and select "Insight"
3. **Fill in the required fields**:
   - **Title**: The main headline of your article
   - **Slug**: Auto-generated from title (URL-friendly)
   - **Cover Image**: Upload a featured image
   - **Author**: Select or create an author
   - **Published At**: Set the publication date
   - **Excerpt**: Brief summary (max 200 characters)
   - **Body**: Rich text content using the editor
   - **Categories**: Select relevant categories
   - **Tags**: Add relevant tags
   - **Status**: Choose Draft, Published, or Scheduled

### Scheduling Posts

1. **Set Status** to "Scheduled"
2. **Set Scheduled For** date and time
3. **Save** the insight
4. The post will automatically appear when the scheduled time arrives

### Managing Authors

1. **Go to "Author"** in the sidebar
2. **Create new author** with:
   - Name
   - Profile image
   - Bio
   - Role
   - Email

### Managing Categories

1. **Go to "Category"** in the sidebar
2. **Create categories** with:
   - Title
   - Description
   - Color (for visual distinction)

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity project ID | Yes |
| `NEXT_PUBLIC_SANITY_DATASET` | Dataset name (usually 'production') | Yes |
| `SANITY_API_TOKEN` | API token for write access | Optional |
| `NEXT_PUBLIC_SANITY_USE_CDN` | Use CDN for faster loading | Optional |

### Sanity Schema

The CMS includes these content types:

- **Insight**: Main article content
- **Author**: Author profiles
- **Category**: Article categories
- **Block Content**: Rich text editor

## 📱 Features

### ✅ Implemented Features

- **Rich Text Editor**: Full formatting capabilities
- **Image Management**: Optimized image handling
- **Scheduled Publishing**: Set future publish dates
- **Category Filtering**: Organize content by categories
- **Author Profiles**: Complete author information
- **SEO Optimization**: Meta tags and Open Graph
- **Responsive Design**: Mobile-friendly interface
- **Pagination**: Load more content as needed
- **Search & Filter**: Find content easily
- **Social Sharing**: Share articles easily

### 🎯 Content Management

- **Draft Mode**: Save without publishing
- **Scheduled Posts**: Set future publication dates
- **Featured Posts**: Highlight important content
- **Tags System**: Organize with tags
- **Image Optimization**: Automatic image processing
- **Content Validation**: Required field validation

## 🔒 Security

### Studio Access

The Sanity Studio is accessible at `/studio` and includes:

- **Authentication**: Sanity's built-in auth system
- **Role-based Access**: Control who can edit content
- **API Security**: Secure API endpoints

### Best Practices

1. **Use Environment Variables**: Never commit API tokens
2. **Regular Backups**: Sanity provides automatic backups
3. **Content Validation**: Use required fields
4. **Image Optimization**: Sanity handles image processing

## 🚀 Deployment

### Hostinger Setup

1. **Upload your code** to Hostinger
2. **Set environment variables** in Hostinger dashboard
3. **Build and deploy**:
   ```bash
   npm run build
   npm start
   ```

### Environment Variables on Hostinger

1. **Go to Hostinger Dashboard**
2. **Navigate to your domain settings**
3. **Add environment variables**:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN`

## 📊 Content Workflow

### Recommended Process

1. **Draft in Sanity Studio** or external editor
2. **Add images and formatting** using rich text editor
3. **Set categories and tags** for organization
4. **Schedule or publish** immediately
5. **Monitor performance** through Sanity analytics

### Content Guidelines

- **Title**: Keep under 60 characters for SEO
- **Excerpt**: 150-200 characters for preview
- **Images**: Use high-quality, optimized images
- **Categories**: Use consistent category names
- **Tags**: Use relevant, searchable tags

## 🔧 Troubleshooting

### Common Issues

1. **Studio not loading**:
   - Check environment variables
   - Verify project ID and dataset
   - Clear browser cache

2. **Images not displaying**:
   - Check image upload in Sanity
   - Verify image URL generation
   - Check CORS settings

3. **Content not updating**:
   - Check publication status
   - Verify scheduled dates
   - Clear Next.js cache

### Support

- **Sanity Documentation**: [docs.sanity.io](https://docs.sanity.io)
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **Project Issues**: Check GitHub repository

## 📈 Performance

### Optimization Features

- **CDN Integration**: Fast content delivery
- **Image Optimization**: Automatic resizing and compression
- **Caching**: Efficient data caching
- **Lazy Loading**: Optimized image loading
- **SEO Optimization**: Meta tags and structured data

### Monitoring

- **Sanity Analytics**: Track content performance
- **Google Analytics**: Monitor website traffic
- **Performance Metrics**: Page load times and Core Web Vitals

## 🎯 Next Steps

### Potential Enhancements

1. **Comments System**: Add user comments
2. **Newsletter Integration**: Email subscribers
3. **Advanced Search**: Full-text search
4. **Related Posts**: Automatic suggestions
5. **Social Media Integration**: Auto-post to social platforms
6. **Analytics Dashboard**: Content performance metrics

### Maintenance

1. **Regular Updates**: Keep dependencies updated
2. **Content Audits**: Review and update old content
3. **Performance Monitoring**: Track loading times
4. **Security Updates**: Regular security patches

---

**Need Help?** Contact the development team or refer to the Sanity documentation for detailed guides.
