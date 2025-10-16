'use client'

import { NextStudio } from 'next-sanity/studio'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from '@/sanity/schemaTypes'
import { structure } from '@/sanity/structure'

const config = defineConfig({
  name: 'pathmark-advisory',
  title: 'Pathmark Advisory',
  projectId: 'ch79hnv9',
  dataset: 'production',
  basePath: '/studio',
  plugins: [
    structureTool({ structure }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})

export default function StudioWrapper() {
  return <NextStudio config={config} />
}
