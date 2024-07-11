import { TwoColumn } from '../blocks/TwoColumn'
import { Hero } from '../blocks/Hero'
import { TitleDescription } from '../blocks/TitleDescription'
// import { SimpleRichText } from "../blocks/SimpleRichText";

export const ProductPages = {
  slug: 'productpages',
  labels: {
    singular: 'Product Page',
    plural: 'Product Pages',
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
