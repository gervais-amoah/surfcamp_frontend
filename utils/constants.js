export const API_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://127.0.0.1:1337/api';
export const IMG_URL =
  process.env.NEXT_PUBLIC_STRAPI_GALLERY_URL || 'http://127.0.0.1:1337';

export const REVALIDATE_TIME = 60 * 60 * 24; // 24 hours
