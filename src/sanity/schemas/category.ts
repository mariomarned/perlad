import { defineField, defineType } from 'sanity';

export const category = defineType({
  name: 'category',
  title: 'Categoría',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nombre de la Categoría',
      type: 'string',
      validation: (rule) => rule.required().error('El nombre es obligatorio'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (Identificador URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción breve',
      type: 'text',
      rows: 3,
    }),
  ],
});
