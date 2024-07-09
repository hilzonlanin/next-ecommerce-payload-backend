import { TwoColumn } from '../blocks/TwoColumn'
import { Hero } from '../blocks/Hero'
import { TitleDescription } from '../blocks/TitleDescription'
// import { SimpleRichText } from "../blocks/SimpleRichText";

export const Products = {
  slug: 'products',
  labels: {
    singular: 'Product',
    plural: 'Products',
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
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'blocks',
      blocks: [Hero, TwoColumn, TitleDescription],
    },
  ],
}
