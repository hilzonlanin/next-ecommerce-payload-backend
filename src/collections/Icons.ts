import type { CollectionConfig } from 'payload/types'
export const Icons: CollectionConfig = {
  slug: "icons",
  labels: {
    singular: "Icon",
    plural: "Icons",
  },
  access: {
    read: () => true,
  },
  upload: true,
  fields: [
    {
      name: "alt",
      label: "Alt",
      type: "text",
      required: true,
    },
  ],
}
