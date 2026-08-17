import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/sanity/types';
import { urlForImage } from '@/sanity/image';
import { Hexagon } from '../ui/Hexagon';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const slug = typeof post.slug === 'string' ? post.slug : post.slug?.current || '';
  const categoryTitle = typeof post.category === 'object' ? post.category?.title : post.category || 'General';
  const imageUrl = urlForImage(post.mainImage);

  // Format date in Spanish
  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('es-ES', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : '';

  if (featured) {
    return (
      <Link
        href={`/blog/${slug}`}
        className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 mb-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-7 h-72 lg:h-[420px] relative overflow-hidden bg-gray-900">
            <Image
              src={imageUrl}
              alt={post.mainImage?.alt || post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
            <div className="absolute top-4 left-4 bg-brand-dark/90 backdrop-blur-md text-accent text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-accent/20 flex items-center gap-1.5">
              <Hexagon size={6} bg="#94C11F" />
              Destacado
            </div>
          </div>

          <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-accent-dark font-bold text-xs uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full">
                  {categoryTitle}
                </span>
                <span className="text-gray-400 text-xs">{formattedDate}</span>
                {post.readTime && (
                  <>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </>
                )}
              </div>

              <h2 className="font-display text-2xl lg:text-3xl font-bold text-brand-dark mb-4 group-hover:text-accent transition-colors leading-tight">
                {post.title}
              </h2>

              <p className="text-gray-600 text-sm lg:text-base leading-relaxed line-clamp-3 mb-6">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              {post.author ? (
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center font-bold text-xs">
                    {post.author.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-dark">{post.author.name}</p>
                    {post.author.role && (
                      <p className="text-[11px] text-gray-400">{post.author.role}</p>
                    )}
                  </div>
                </div>
              ) : (
                <span className="text-xs text-gray-400 font-medium">Perlad Editorial</span>
              )}

              <span className="inline-flex items-center gap-1.5 text-accent-dark group-hover:text-accent font-bold text-xs uppercase tracking-wider group-hover:translate-x-1 transition-all">
                Leer artículo
                <span className="text-base">→</span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
    >
      <div className="h-56 relative overflow-hidden bg-gray-100">
        <Image
          src={imageUrl}
          alt={post.mainImage?.alt || post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-108"
        />
        <div className="honeycomb-bg absolute inset-0 opacity-15 pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
        
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-accent-dark text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-gray-100 shadow-sm">
          {categoryTitle}
        </div>
      </div>

      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3 text-xs text-gray-400">
          <span>{formattedDate}</span>
          {post.readTime && (
            <>
              <span>•</span>
              <span>{post.readTime}</span>
            </>
          )}
        </div>

        <h3 className="font-display text-xl font-bold text-brand-dark mb-3 group-hover:text-accent transition-colors line-clamp-2 leading-snug">
          {post.title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto pt-5 border-t border-gray-100">
          <span className="text-xs text-gray-500 font-medium">
            {post.author?.name || 'Perlad'}
          </span>
          <span className="inline-flex items-center gap-1 text-accent-dark group-hover:text-accent font-bold text-xs uppercase tracking-wider group-hover:translate-x-1 transition-all">
            Leer más →
          </span>
        </div>
      </div>
    </Link>
  );
};
