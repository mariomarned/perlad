'use client';

import { PortableText, PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/image';

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const imageUrl = urlForImage(value);
      return (
        <figure className="my-10 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
          <div className="relative w-full h-80 md:h-[450px]">
            <Image
              src={imageUrl}
              alt={value.alt || 'Imagen de artículo Perlad'}
              fill
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="p-4 text-center text-xs text-gray-500 font-sans italic bg-gray-50/70 border-t border-gray-100">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-dark mt-12 mb-6 tracking-tight flex items-center gap-3">
        <span className="w-2.5 h-6 bg-accent rounded-sm inline-block flex-shrink-0" />
        <span>{children}</span>
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-xl md:text-2xl font-bold text-brand-dark mt-8 mb-4">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-display text-lg font-semibold text-brand-dark mt-6 mb-3">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 font-sans">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 pl-6 pr-4 py-4 border-l-4 border-accent bg-accent/5 rounded-r-xl text-brand-dark font-sans italic text-lg md:text-xl leading-relaxed shadow-sm">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-3 mb-6 text-gray-700 font-sans text-base md:text-lg pl-2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-700 font-sans text-base md:text-lg pl-2">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-brand-dark">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 text-accent font-mono text-sm px-2 py-1 rounded">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-accent-dark hover:text-accent font-medium underline decoration-accent/40 hover:decoration-accent transition-colors"
        >
          {children}
        </a>
      );
    },
  },
};

export function PortableTextRenderer({ value }: { value: any }) {
  if (!value) return null;
  return (
    <div className="article-body">
      <PortableText value={value} components={components} />
    </div>
  );
}
