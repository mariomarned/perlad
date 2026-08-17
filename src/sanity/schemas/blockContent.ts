import { defineArrayMember, defineType } from 'sanity';

export const blockContent = defineType({
  title: 'Contenido del Artículo',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Párrafo Normal', value: 'normal' },
        { title: 'Título Principal (H2)', value: 'h2' },
        { title: 'Subtítulo (H3)', value: 'h3' },
        { title: 'Sección Menor (H4)', value: 'h4' },
        { title: 'Cita Destacada', value: 'blockquote' },
      ],
      lists: [
        { title: 'Viñetas (Bullet)', value: 'bullet' },
        { title: 'Numerada', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Negrita (Strong)', value: 'strong' },
          { title: 'Cursiva (Emphasis)', value: 'em' },
          { title: 'Código', value: 'code' },
          { title: 'Subrayado', value: 'underline' },
        ],
        annotations: [
          {
            title: 'Enlace Web (URL)',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (rule) =>
                  rule.uri({
                    allowRelative: true,
                    scheme: ['https', 'http', 'mailto', 'tel'],
                  }),
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto Alternativo (Accesibilidad & SEO)',
          description: 'Describe brevemente qué se ve en la imagen.',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Pie de foto',
        },
      ],
    }),
  ],
});
