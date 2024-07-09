export const Copyright = {
  slug: 'copyright',
  labels: {
    singular: 'Copyright',
    plural: 'Copyrights',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'text',
      label: 'Text',
      type: 'text',
    },
  ],
}
