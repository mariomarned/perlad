'use client';

import { useState, useMemo } from 'react';
import { BlogPost, Category } from '@/sanity/types';
import { BlogCard } from '@/components/blog/BlogCard';
import { Search, X } from 'lucide-react';

interface BlogListClientProps {
  initialPosts: BlogPost[];
  categories: Category[];
}

export function BlogListClient({ initialPosts, categories }: BlogListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      // Category match
      let categorySlug = '';
      if (post.category) {
        const cat: any = post.category;
        if (typeof cat === 'string') {
          categorySlug = cat;
        } else if (typeof cat.slug === 'string') {
          categorySlug = cat.slug;
        } else if (cat.slug?.current) {
          categorySlug = cat.slug.current;
        } else if (cat.title) {
          categorySlug = cat.title;
        }
      }

      const matchesCategory =
        selectedCategory === 'all' ||
        categorySlug.toLowerCase() === selectedCategory.toLowerCase();

      // Search query match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt?.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [initialPosts, selectedCategory, searchQuery]);

  const featuredPost = useMemo(() => {
    if (selectedCategory !== 'all' || searchQuery.trim() !== '') return null;
    return filteredPosts.find((p) => p.featured) || filteredPosts[0] || null;
  }, [filteredPosts, selectedCategory, searchQuery]);

  const regularPosts = useMemo(() => {
    if (featuredPost) {
      return filteredPosts.filter((p) => p._id !== featuredPost._id);
    }
    return filteredPosts;
  }, [filteredPosts, featuredPost]);

  return (
    <div className="space-y-10">
      {/* Filters & Search Controls */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-accent text-brand-dark shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Todos ({initialPosts.length})
          </button>

          {categories.map((cat) => {
            const catSlug = typeof cat.slug === 'string' ? cat.slug : cat.slug.current;
            const isSelected = selectedCategory === catSlug;
            return (
              <button
                key={cat._id || catSlug}
                onClick={() => setSelectedCategory(catSlug)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-accent text-brand-dark shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Buscar artículos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-accent focus:bg-white transition-all text-brand-dark placeholder-gray-400"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-dark"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      {filteredPosts.length === 0 ? (
        <div className="bg-white rounded-2xl p-16 text-center border border-gray-100 shadow-sm max-w-xl mx-auto my-12">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 text-accent-dark">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="font-display text-xl font-bold text-brand-dark mb-2">
            No se encontraron artículos
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            No hay publicaciones que coincidan con los filtros o término de búsqueda seleccionado.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="bg-brand-dark text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-accent hover:text-brand-dark transition-colors"
          >
            Restablecer filtros
          </button>
        </div>
      ) : (
        <>
          {/* Featured Post */}
          {featuredPost && <BlogCard post={featuredPost} featured={true} />}

          {/* Grid of Regular Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
