import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/schemas';
import { projectId, dataset, apiVersion } from './src/sanity/env';

export default defineConfig({
  basePath: '/studio',
  name: 'perlad_studio',
  title: 'Perlad — Panel de Contenidos',

  projectId: projectId || 'demo-project-id',
  dataset: dataset || 'production',

  plugins: [
    structureTool({
      title: 'Contenido',
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],

  schema: {
    types: schemaTypes,
  },
});
