import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';
import { dataset, projectId, isSanityConfigured } from './env';

const imageBuilder = isSanityConfigured()
  ? createImageUrlBuilder({
      projectId,
      dataset,
    })
  : null;

const DEFAULT_FALLBACK_IMAGE = '/assets/imgcategorias/packingboard.jpg';

export const urlForImage = (source: Image | string | any): string => {
  if (!source) {
    return DEFAULT_FALLBACK_IMAGE;
  }

  if (typeof source === 'string') {
    return source;
  }

  // If source has a direct url property (like in mock data or custom objects)
  if (typeof source?.asset?.url === 'string') {
    return source.asset.url;
  }

  // If source itself has a url property
  if (typeof source?.url === 'string') {
    return source.url;
  }

  if (!imageBuilder || !source?.asset) {
    return DEFAULT_FALLBACK_IMAGE;
  }

  try {
    const ref = source.asset._ref || source.asset._id || (typeof source.asset === 'string' ? source.asset : null);
    if (ref && typeof ref === 'string' && !ref.startsWith('image-')) {
      return DEFAULT_FALLBACK_IMAGE;
    }

    const url = imageBuilder.image(source).auto('format').fit('max').url();
    return url || DEFAULT_FALLBACK_IMAGE;
  } catch (error) {
    console.warn('Failed to build image URL from Sanity source:', error);
    return DEFAULT_FALLBACK_IMAGE;
  }
};

