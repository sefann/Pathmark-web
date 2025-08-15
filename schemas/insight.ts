import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'insight',
  title: 'Pathmark Insight',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Article Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
      description: 'Compelling title for your insight article',
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      description: 'URL-friendly version of the title (auto-generated)',
    }),
    defineField({
      name: 'coverImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
        metadata: ['dimensions', 'palette'],
      },
      validation: (Rule) => Rule.required(),
      description: 'High-quality image that represents your article (recommended: 1200x630px)',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (Rule) => Rule.required(),
      description: 'Select the author of this insight',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publication Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      description: 'When this article should be published',
    }),
    defineField({
      name: 'scheduledFor',
      title: 'Scheduled Publication',
      type: 'datetime',
      description: 'Schedule this article for future publication (optional)',
    }),
    defineField({
      name: 'serviceCategory',
      title: 'Primary Service',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
      description: 'Select the main Pathmark service this insight relates to',
    }),
    defineField({
      name: 'additionalServices',
      title: 'Related Services',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
      description: 'Other Pathmark services this insight might relate to (optional)',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Keywords to help categorize and search for this article',
    }),
    defineField({
      name: 'excerpt',
      title: 'Article Summary',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.max(300),
      description: 'Brief summary of the article (appears in previews and search results)',
    }),
    defineField({
      name: 'body',
      title: 'Article Content',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
      description: 'The main content of your insight article',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Article',
      type: 'boolean',
      initialValue: false,
      description: 'Mark this as a featured article (appears prominently on the insights page)',
    }),
    defineField({
      name: 'status',
      title: 'Publication Status',
      type: 'string',
      options: {
        list: [
          { title: '📝 Draft', value: 'draft' },
          { title: '✅ Published', value: 'published' },
          { title: '⏰ Scheduled', value: 'scheduled' },
          { title: '🔒 Private', value: 'private' },
        ],
      },
      initialValue: 'draft',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Custom title for search engines (optional - defaults to article title)',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 2,
      description: 'Custom description for search engines (optional - defaults to excerpt)',
    }),
    defineField({
      name: 'readingTime',
      title: 'Estimated Reading Time',
      type: 'number',
      description: 'Estimated reading time in minutes (auto-calculated if left empty)',
    }),
  ],
  orderings: [
    {
      title: 'Publication Date (Newest)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Publication Date (Oldest)',
      name: 'publishedAtAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }],
    },
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        { field: 'featured', direction: 'desc' },
        { field: 'publishedAt', direction: 'desc' },
      ],
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'coverImage',
      status: 'status',
      publishedAt: 'publishedAt',
      serviceCategory: 'serviceCategory.title',
      featured: 'featured',
    },
    prepare(selection) {
      const { author, status, serviceCategory, featured } = selection;
      const statusEmoji = {
        draft: '📝',
        published: '✅',
        scheduled: '⏰',
        private: '🔒',
      }[status] || '📝';
      
      return {
        ...selection,
        title: `${featured ? '⭐ ' : ''}${selection.title}`,
        subtitle: `${statusEmoji} ${status} • ${serviceCategory || 'No Service'} • ${author ? `by ${author}` : 'No Author'}`,
      };
    },
  },
});
