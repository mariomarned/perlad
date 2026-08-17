import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { getAllPosts, getAllCategories } from '@/sanity/queries';
import { BlogListClient } from './BlogListClient';

export const revalidate = 60; // ISR revalidate every 60 seconds

export const metadata: Metadata = {
  title: 'Blog & Tendencias en Empaques Sostenibles — Perlad',
  description:
    'Artículos, guías técnicas y novedades sobre cartón panal, soluciones de empaque ecológico, innovación industrial y reducción de huella de carbono.',
  openGraph: {
    title: 'Blog & Tendencias en Empaques Sostenibles — Perlad',
    description:
      'Artículos, guías técnicas y novedades sobre cartón panal, soluciones de empaque ecológico y sostenibilidad.',
    url: 'https://perlad.com/blog',
    type: 'website',
  },
};

export default async function BlogPage() {
  const accentColor = '#94C11F';
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
  ]);

  return (
    <main className="min-h-screen bg-brand-warm flex flex-col">
      <Header activeSection="blog" forceBackground={true} accentColor={accentColor} />

      <div className="pt-32 pb-24 px-6 relative overflow-hidden flex-1">
        <div className="honeycomb-bg absolute inset-0 opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle
            sub="Conocimiento, innovación y tendencias en empaques sostenibles"
            accentColor={accentColor}
          >
            Blog & Novedades
          </SectionTitle>

          <div className="mt-10">
            <BlogListClient initialPosts={posts} categories={categories} />
          </div>
        </div>
      </div>

      <Footer accentColor={accentColor} />
    </main>
  );
}
