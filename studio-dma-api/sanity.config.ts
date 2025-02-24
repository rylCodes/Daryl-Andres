import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'dma-api',

  projectId: 's03qwo1e',
  dataset: 'true',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
