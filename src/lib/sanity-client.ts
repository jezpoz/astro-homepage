import SanityClient from '@sanity/client';
import ImageBuilder from '@sanity/image-url'

const sanityConfig = {
  projectId: import.meta.env.SECRET_SANITY_PROJECTID,
  dataset: import.meta.env.SECRET_SANITY_DATASET,
  apiVersion: import.meta.env.SECRET_SANITY_API_VERSION,
  useCdn: import.meta.env.SECRET_SANITY_USE_CDN,
}

export const client = SanityClient(sanityConfig);
export const imageBuilder = ImageBuilder(client);