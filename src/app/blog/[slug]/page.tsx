import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hexagon } from '@/components/ui/Hexagon';
import { PortableTextRenderer } from '@/components/blog/PortableTextRenderer';
import { ShareButtons } from '@/components/blog/ShareButtons';
import { BlogCard } from '@/components/blog/BlogCard';
import { getPostBySlug, getAllPosts, getAllPostSlugs } from '@/sanity/queries';
import { urlForImage } from '@/sanity/image';
import { ChevronRight, Calendar, Clock, ArrowLeft, Send } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export const revalidate = 60; // ISR

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Artículo no encontrado — Perlad',
    };
  }

  const title = post.seoTitle || `${post.title} — Perlad`;
  const description = post.seoDescription || post.excerpt;
  const imageUrl = urlForImage(post.mainImage);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.publishedAt,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.mainImage?.alt || post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const accentColor = '#94C11F';
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => {
      const currentSlug = typeof p.slug === 'string' ? p.slug : p.slug.current;
      return currentSlug !== params.slug;
    })
    .slice(0, 3);

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : '';

  const categoryTitle =
    typeof post.category === 'object' ? post.category?.title : post.category || 'General';

  const imageUrl = urlForImage(post.mainImage);
  const articleUrl = `https://perlad.com/blog/${params.slug}`;

  // JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: imageUrl,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: post.author?.name || 'Perlad',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Perlad',
      logo: {
        '@type': 'ImageObject',
        url: 'https://perlad.com/assets/logo-perlad.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
  };

  return (
    <main className="min-h-screen bg-brand-warm flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header activeSection="blog" forceBackground={true} accentColor={accentColor} />

      <article className="pt-28 pb-20 px-6 flex-1">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-accent transition-colors">
              Inicio
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-400 flex-shrink-0" />
            <Link href="/blog" className="hover:text-accent transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-400 flex-shrink-0" />
            <span className="text-gray-900 font-medium truncate max-w-xs">{post.title}</span>
          </nav>

          {/* Article Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="bg-accent/15 text-accent-dark font-bold text-xs uppercase tracking-widest px-3.5 py-1 rounded-full">
                {categoryTitle}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <Calendar className="w-3.5 h-3.5 text-accent-dark" />
                <span>{formattedDate}</span>
              </div>
              {post.readTime && (
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Clock className="w-3.5 h-3.5 text-accent-dark" />
                  <span>{post.readTime}</span>
                </div>
              )}
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-dark leading-tight tracking-tight mb-6">
              {post.title}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sans font-light">
              {post.excerpt}
            </p>

            {/* Author bar */}
            {post.author && (
              <div className="flex items-center gap-3.5 mt-8 pt-6 border-t border-gray-100">
                <div className="w-11 h-11 rounded-full bg-brand-dark text-white flex items-center justify-center font-bold text-sm">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-brand-dark">{post.author.name}</h4>
                  {post.author.role && (
                    <p className="text-xs text-gray-500">{post.author.role}</p>
                  )}
                </div>
              </div>
            )}
          </header>

          {/* Main Cover Image */}
          <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] rounded-3xl overflow-hidden shadow-xl mb-12 bg-gray-900 border border-gray-100">
            <Image
              src={imageUrl}
              alt={post.mainImage?.alt || post.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Article Body Content */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-14 shadow-sm border border-gray-100">
            <PortableTextRenderer value={post.body} />

            {/* Social Share Bar */}
            <ShareButtons title={post.title} url={articleUrl} />

            {/* Author Bio Box */}
            {post.author && post.author.bio && (
              <div className="bg-brand-warm rounded-2xl p-6 border border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left my-8">
                <div className="w-14 h-14 rounded-full bg-accent text-brand-dark flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-base text-brand-dark mb-1">
                    Sobre {post.author.name}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{post.author.bio}</p>
                </div>
              </div>
            )}
          </div>

          {/* Conversion CTA Box */}
          <div className="mt-12 bg-[#121212] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl border border-accent/20">
            <div className="honeycomb-bg absolute inset-0 opacity-15 pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-lg text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-3 py-1 rounded-full text-accent text-xs font-bold uppercase tracking-wider mb-3">
                  <Hexagon size={6} bg="#94C11F" />
                  Asesoría Personalizada
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3">
                  ¿Quieres implementar empaque de cartón panal en tu empresa?
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Desarrollamos soluciones a medida que reducen costos de transporte, eliminan trámites fitosanitarios y cuidan el planeta.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Link
                  href="/#contacto"
                  className="bg-accent hover:bg-accent-dark text-[#0D0D0D] font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-widest text-center transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  Cotizar Ahora
                </Link>
                <Link
                  href="/catalogos"
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider text-center transition-colors border border-white/10"
                >
                  Ver Catálogos
                </Link>
              </div>
            </div>
          </div>

          {/* Related Articles Section */}
          {relatedPosts.length > 0 && (
            <div className="mt-20">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-display text-2xl font-bold text-brand-dark">
                  Artículos Relacionados
                </h3>
                <Link
                  href="/blog"
                  className="text-xs font-bold uppercase tracking-wider text-accent-dark hover:text-accent flex items-center gap-1 transition-colors"
                >
                  Ver todos →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((rPost) => (
                  <BlogCard key={rPost._id} post={rPost} />
                ))}
              </div>
            </div>
          )}

          {/* Back to Blog link */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-dark text-sm font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a todas las publicaciones
            </Link>
          </div>
        </div>
      </article>

      <Footer accentColor={accentColor} />
    </main>
  );
}
