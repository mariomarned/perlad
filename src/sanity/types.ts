export interface Category {
  _id?: string;
  title: string;
  slug: { current: string } | string;
  description?: string;
}

export interface Author {
  _id?: string;
  name: string;
  role?: string;
  image?: any;
  bio?: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string } | string;
  excerpt: string;
  publishedAt: string;
  readTime?: string;
  featured?: boolean;
  mainImage: any;
  category?: Category | { title: string; slug: string };
  author?: Author;
  body?: any;
  seoTitle?: string;
  seoDescription?: string;
}
