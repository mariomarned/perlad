import { client } from './client';
import { BlogPost, Category } from './types';

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
  if (!client) return [];
  try {
    const posts = await client.fetch<BlogPost[]>(POSTS_QUERY, {}, { next: { revalidate: 60 } });
    return posts || [];
  } catch (error) {
    console.warn('Error fetching posts from Sanity:', error);
    return [];
  }
}

export async function getRecentPosts(limit: number = 3): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.slice(0, limit);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!client) return null;
  try {
    const post = await client.fetch<BlogPost | null>(
      POST_BY_SLUG_QUERY,
      { slug },
      { next: { revalidate: 60 } }
    );
    return post || null;
  } catch (error) {
    console.warn(`Error fetching post ${slug} from Sanity:`, error);
    return null;
  }
}

export async function getAllCategories(): Promise<Category[]> {
  if (!client) return [];
  try {
    const categories = await client.fetch<Category[]>(CATEGORIES_QUERY, {}, { next: { revalidate: 3600 } });
    return categories || [];
  } catch (error) {
    console.warn('Error fetching categories from Sanity:', error);
    return [];
  }
}

export async function getAllPostSlugs(): Promise<string[]> {
  if (!client) return [];
  try {
    const slugs = await client.fetch<string[]>(POST_SLUGS_QUERY, {}, { next: { revalidate: 60 } });
    return slugs || [];
  } catch (error) {
    console.warn('Error fetching post slugs from Sanity:', error);
    return [];
  }
}
