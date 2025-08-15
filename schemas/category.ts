import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'category',
  title: 'Service Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'The name of the Pathmark service this insight relates to',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Service Description',
      type: 'text',
      rows: 3,
      description: 'Brief description of this service area',
    }),
    defineField({
      name: 'icon',
      title: 'Service Icon',
      type: 'string',
      options: {
        list: [
          { title: '🏢 Consulting', value: 'consulting' },
          { title: '🏗️ Construction', value: 'construction' },
          { title: '⚡ Energy', value: 'energy' },
          { title: '💰 Finance', value: 'finance' },
          { title: '🏛️ Government', value: 'government' },
          { title: '⛏️ Mining', value: 'mining' },
          { title: '🌱 Renewable Energy', value: 'renewable-energy' },
          { title: '💻 Technology', value: 'technology' },
          { title: '🌍 Investment Africa', value: 'investment-africa' },
          { title: '🇳🇬 Nigerian Investment', value: 'nigerian-investment' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'color',
      title: 'Brand Color',
      type: 'string',
      options: {
        list: [
          { title: '🔵 Primary Blue', value: 'primary' },
          { title: '🟢 Success Green', value: 'success' },
          { title: '🟡 Warning Yellow', value: 'warning' },
          { title: '🔴 Danger Red', value: 'danger' },
          { title: '🟣 Purple', value: 'purple' },
          { title: '🟠 Orange', value: 'orange' },
          { title: '🔷 Indigo', value: 'indigo' },
          { title: '🟦 Sky Blue', value: 'sky' },
          { title: '🟩 Emerald', value: 'emerald' },
          { title: '🩷 Pink', value: 'pink' },
        ],
      },
      initialValue: 'primary',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Service',
      type: 'boolean',
      initialValue: false,
      description: 'Mark this as a featured service category',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
      description: 'Order in which this category appears in lists (lower numbers first)',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        { field: 'featured', direction: 'desc' },
        { field: 'title', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
      icon: 'icon',
      color: 'color',
      featured: 'featured',
    },
    prepare(selection) {
      const { title, description, icon, color, featured } = selection;
      const iconEmoji = icon ? icon.split(' ')[0] : '📄';
      const colorClass = color || 'primary';
      
      return {
        title: `${iconEmoji} ${title}${featured ? ' ⭐' : ''}`,
        subtitle: description,
        media: () => (
          <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: getColorValue(colorClass),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            borderRadius: '4px'
          }}>
            {iconEmoji}
          </div>
        ),
      };
    },
  },
});

// Helper function to get color values
function getColorValue(color: string): string {
  const colors: { [key: string]: string } = {
    primary: '#3B82F6',
    success: '#10B981',
    warning: '#F59E0B',
    danger: '#EF4444',
    purple: '#8B5CF6',
    orange: '#F97316',
    indigo: '#6366F1',
    sky: '#0EA5E9',
    emerald: '#059669',
    pink: '#EC4899',
  };
  return colors[color] || '#3B82F6';
}
