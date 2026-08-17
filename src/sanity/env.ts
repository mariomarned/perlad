export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-11';

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';

export const useCdn = process.env.NODE_ENV === 'production';

export const isSanityConfigured = () => {
  return Boolean(projectId && projectId !== 'your_project_id_here' && projectId.length > 3);
};
