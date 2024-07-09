export const Textlinks = {
  slug: 'textLinks',
  labels: {
    singular: 'Textlink',
    plural: 'Textlinks',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'textLinks',
      label: 'Text Links',
      type: 'array',
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
        },
        {
          name: 'link',
          label: 'Link',
          type: 'text',
        },
      ],
    },
  ],
}
