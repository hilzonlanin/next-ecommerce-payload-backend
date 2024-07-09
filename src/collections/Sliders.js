import { TwoColumn } from '../blocks/TwoColumn'
import { Hero } from '../blocks/Hero'
import { TitleDescription } from '../blocks/TitleDescription'
// import { SimpleRichText } from "../blocks/SimpleRichText";

export const Sliders = {
  slug: 'sliders',
  labels: {
    singular: 'Slider',
    plural: 'Sliders',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
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
      name: 'url',
      label: 'Url',
      type: 'text',
      required: true,
    },
    {
      name: 'bg',
      label: 'Background Class',
      type: 'text',
      required: true,
    },
    {
      name: 'img',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
