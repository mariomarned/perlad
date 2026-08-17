import { defineField, defineType } from 'sanity';

export const post = defineType({
  name: 'post',
  title: 'Entrada de Blog',
  type: 'document',
  groups: [
    { name: 'content', title: 'Contenido Principal', default: true },
    { name: 'media', title: 'Imágenes' },
    { name: 'seo', title: 'SEO y Metadatos' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Título del Artículo',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required().error('El título es obligatorio'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL del artículo)',
      type: 'slug',
      group: 'content',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required().error('Genera o escribe el slug para la URL'),
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumen Breve (Extracto)',
      description: 'Texto introductorio de 1 a 2 oraciones para las tarjetas y vista previa.',
      type: 'text',
      rows: 3,
      group: 'content',
      validation: (rule) => rule.required().max(260).warning('Mantén el resumen en menos de 260 caracteres para mejor visualización'),
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'reference',
      to: { type: 'category' },
      group: 'content',
      validation: (rule) => rule.required().error('Selecciona una categoría'),
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: { type: 'author' },
      group: 'content',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de Publicación',
      type: 'datetime',
      group: 'content',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Tiempo de Lectura Estimado',
      description: 'Ej: 4 min lectura',
      type: 'string',
      group: 'content',
      initialValue: '4 min lectura',
    }),
    defineField({
      name: 'featured',
      title: '¿Destacar en cabecera del Blog?',
      type: 'boolean',
      group: 'content',
      initialValue: false,
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen de Portada',
      type: 'image',
      group: 'media',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto Alternativo',
          description: 'Importante para accesibilidad y SEO en Google.',
        },
      ],
      validation: (rule) => rule.required().error('La imagen de portada es obligatoria'),
    }),
    defineField({
      name: 'body',
      title: 'Cuerpo del Artículo',
      type: 'blockContent',
      group: 'content',
    }),
    // SEO Group
    defineField({
      name: 'seoTitle',
      title: 'Título SEO Personalizado (Opcional)',
      type: 'string',
      group: 'seo',
      description: 'Si se deja vacío, se utilizará el título principal.',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta Descripción SEO (Opcional)',
      type: 'text',
      rows: 2,
      group: 'seo',
      description: 'Si se deja vacío, se utilizará el resumen del artículo.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      category: 'category.title',
    },
    prepare(selection) {
      const { author, category } = selection;
      return {
        ...selection,
        subtitle: `${category ? `[${category}] ` : ''}${author ? `por ${author}` : ''}`,
      };
    },
  },
});
