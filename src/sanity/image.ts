import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';
import { dataset, projectId, isSanityConfigured } from './env';

const imageBuilder = isSanityConfigured()
  ? createImageUrlBuilder({
      projectId,
      dataset,
    })
  : null;

export const urlForImage = (source: Image | string | any) => {
  if (typeof source === 'string') {
    return source;
  }
  if (!imageBuilder || !source?.asset) {
    return typeof source?.asset?.url === 'string' ? source.asset.url : '/assets/imgcategorias/packingboard.jpg';
  }
  return imageBuilder.image(source).auto('format').fit('max').url();
};
