import { client } from './client';
import { BlogPost, Category } from './types';
import { mockPosts, mockCategories } from './mockData';

export const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  readTime,
  featured,
  mainImage,
  "category": category->{
    title,
    slug
  },
  "author": author->{
    name,
    role,
    image
  }
}`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  readTime,
  featured,
  mainImage,
  body,
  seoTitle,
  seoDescription,
  "category": category->{
    title,
    slug
  },
  "author": author->{
    name,
    role,
    image,
    bio
  }
}`;

export const CATEGORIES_QUERY = `*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug,
  description
}`;

export const POST_SLUGS_QUERY = `*[_type == "post" && defined(slug.current)][].slug.current`;

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!client) {
    return mockPosts;
  }
  try {
    const posts = await client.fetch<BlogPost[]>(POSTS_QUERY, {}, { next: { revalidate: 60 } });
    return posts && posts.length > 0 ? posts : mockPosts;
  } catch (error) {
    console.warn('Error fetching posts from Sanity, falling back to mock data:', error);
    return mockPosts;
  }
}

export async function getRecentPosts(limit: number = 3): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.slice(0, limit);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!client) {
    const found = mockPosts.find((p) => {
      const currentSlug = typeof p.slug === 'string' ? p.slug : p.slug.current;
      return currentSlug === slug;
    });
    return found || null;
  }
  try {
    const post = await client.fetch<BlogPost | null>(
      POST_BY_SLUG_QUERY,
      { slug },
      { next: { revalidate: 60 } }
    );
    if (post) return post;
    const found = mockPosts.find((p) => {
      const currentSlug = typeof p.slug === 'string' ? p.slug : p.slug.current;
      return currentSlug === slug;
    });
    return found || null;
  } catch (error) {
    console.warn(`Error fetching post ${slug} from Sanity, falling back to mock data:`, error);
    const found = mockPosts.find((p) => {
      const currentSlug = typeof p.slug === 'string' ? p.slug : p.slug.current;
      return currentSlug === slug;
    });
    return found || null;
  }
}

export async function getAllCategories(): Promise<Category[]> {
  if (!client) {
    return mockCategories;
  }
  try {
    const categories = await client.fetch<Category[]>(CATEGORIES_QUERY, {}, { next: { revalidate: 3600 } });
    return categories && categories.length > 0 ? categories : mockCategories;
  } catch (error) {
    console.warn('Error fetching categories from Sanity, falling back to mock data:', error);
    return mockCategories;
  }
}

export async function getAllPostSlugs(): Promise<string[]> {
  if (!client) {
    return mockPosts.map((p) => (typeof p.slug === 'string' ? p.slug : p.slug.current));
  }
  try {
    const slugs = await client.fetch<string[]>(POST_SLUGS_QUERY, {}, { next: { revalidate: 60 } });
    return slugs && slugs.length > 0
      ? slugs
      : mockPosts.map((p) => (typeof p.slug === 'string' ? p.slug : p.slug.current));
  } catch {
    return mockPosts.map((p) => (typeof p.slug === 'string' ? p.slug : p.slug.current));
  }
}
