// @ts-nocheck
import { mongooseAdapter } from '@payloadcms/db-mongodb'
// import { payloadCloud } from '@payloadcms/plugin-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload/config'
// import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { s3Storage } from '@payloadcms/storage-s3'
import { Pages } from './collections/Pages'
import { Products } from './collections/Products'
import { Header } from './globals/Header'
import { Copyright } from './globals/Copyright'
import { Icons } from './collections/Icons'
import { ContactLinks } from './globals/ContactLinks'
import { Textlinks } from './globals/TextLinks'
import { Sliders } from './collections/Sliders'
import { Items } from './collections/Items'
import { Categories } from './collections/Categories'
import { ItemTest } from './collections/ItemTest'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.NODE_ENV == "production" ? process.env.PAYLOAD_PUBLIC_SERVER_URL : "http://localhost:3000",
  admin: {
    user: Users.slug,
  },
  collections: [Users, Pages, Products, Media, Icons, Sliders, Items, Categories],
  globals: [Header, Copyright, Textlinks, ContactLinks],
  editor: lexicalEditor({}),
  // plugins: [payloadCloud()], // TODO: Re-enable when cloud supports 3.0
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),

  plugins: [
    s3Storage({
      collections: {
        media: {
          prefix: 'media',
        },
        icons: {
          prefix: 'icons',
        }
      },
      bucket: process.env.S3_BUCKET,
      config: {
        forcePathStyle: true,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        },
        region: process.env.S3_REGION,
        endpoint: process.env.S3_ENDPOINT,
      },
    }),
  ]
  // Sharp is now an optional dependency -
  // if you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.

  // This is temporary - we may make an adapter pattern
  // for this before reaching 3.0 stable

  // sharp,
})
