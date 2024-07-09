export const ContactLinks = {
  slug: 'contactLinks',
  labels: {
    singular: 'ContactLink',
    plural: 'ContactLinks',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'contactLinks',
      label: 'Contact Links',
      type: 'array',
      fields: [
        {
          name: 'name',
          label: 'Name',
          type: 'text',
        },
        {
          name: 'icon',
          label: 'Icon',
          type: 'upload',
          relationTo: 'icons',
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
