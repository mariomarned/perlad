import Link from 'next/link';
import { SectionTitle } from './ui/SectionTitle';
import { BlogCard } from './blog/BlogCard';
import { ArrowRight, Newspaper } from 'lucide-react';
import type { BlogPost } from '@/sanity/types';

interface BlogProps {
  accentColor?: string;
  posts?: BlogPost[];
}

export const Blog = ({ accentColor = '#94C11F', posts = [] }: BlogProps) => {
  const hasPosts = Array.isArray(posts) && posts.length > 0;

  return (
    <section id="blog" className="py-24 px-6 bg-brand-warm relative overflow-hidden">
      <div className="honeycomb-bg absolute inset-0 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionTitle
            sub="Conoce las últimas tendencias e innovaciones en empaques sostenibles"
            accentColor={accentColor}
          >
            Blog & Actualidad
          </SectionTitle>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-white hover:bg-brand-dark text-brand-dark hover:text-white border border-gray-200 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm self-start md:self-auto hover:shadow-md"
          >
            <span>Ver todos los artículos</span>
            <ArrowRight className="w-4 h-4 text-accent" />
          </Link>
        </div>

        {hasPosts ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[0, 1, 2].map((i) => (
              <div
                key={`empty-${i}`}
                className="flex flex-col items-center justify-center gap-4 rounded-3xl bg-white/60 backdrop-blur-sm border-2 border-dashed border-gray-300 p-10 min-h-[400px] text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
                  <Newspaper className="w-8 h-8 text-gray-400" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                    Espacio para artículo
                  </h4>
                  <p className="text-xs text-gray-400 max-w-[220px]">
                    Los artículos creados en Sanity aparecerán aquí automáticamente.
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
