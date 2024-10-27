import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { deskTool } from 'sanity/desk'

export default defineConfig({
  name: 'default',
  title: 'sanity_client_demo',

  projectId: '943cdfdf',
  dataset: 'production',

  plugins: [
    deskTool(), // Adds the default Studio tool
    visionTool(), // Optional: Enables the Vision tool for GROQ queries
  ],

  schema: {
    types: schemaTypes,
  },
})
