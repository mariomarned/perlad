import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn, isSanityConfigured } from './env';

export const client = isSanityConfigured()
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      perspective: 'published',
    })
  : null;
