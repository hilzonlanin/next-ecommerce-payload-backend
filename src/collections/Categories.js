// import { TwoColumn } from '../blocks/TwoColumn'
// import { Hero } from '../blocks/Hero'
// import { TitleDescription } from '../blocks/TitleDescription'
// import { SimpleRichText } from "../blocks/SimpleRichText";

export const Categories = {
  slug: 'categories',
  labels: {
    singular: 'Category',
    plural: 'Categories',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
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
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
