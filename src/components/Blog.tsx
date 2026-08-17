'use client';

import Link from 'next/link';
import { SectionTitle } from './ui/SectionTitle';
import { BlogCard } from './blog/BlogCard';
import { mockPosts } from '@/sanity/mockData';
import { ArrowRight } from 'lucide-react';

interface BlogProps {
  accentColor?: string;
}

export const Blog = ({ accentColor = '#94C11F' }: BlogProps) => {
  const recentPosts = mockPosts.slice(0, 3);

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};
