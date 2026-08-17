import { defineField, defineType } from 'sanity';

export const author = defineType({
  name: 'author',
  title: 'Autor',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'role',
      title: 'Cargo / Especialidad',
      type: 'string',
      placeholder: 'Ej. Especialista en Empaques Sostenibles',
    }),
    defineField({
      name: 'image',
      title: 'Fotografía / Avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Biografía breve',
      type: 'text',
      rows: 3,
    }),
  ],
});
