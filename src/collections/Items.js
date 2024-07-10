// import { TwoColumn } from '../blocks/TwoColumn'
// import { Hero } from '../blocks/Hero'
// import { TitleDescription } from '../blocks/TitleDescription'
// import { SimpleRichText } from "../blocks/SimpleRichText";

export const Items = {
  slug: 'items',
  labels: {
    singular: 'Item',
    plural: 'Items',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
    },
    {
      name: 'price',
      label: 'Price',
      type: 'number',
      required: true,
    },
    {
      name: 'media',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: 'true',
        },
      ],
    },
  ],
}
