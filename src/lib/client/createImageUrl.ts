const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';

export const createImageUrl = (path: string): string => `${IMAGE_BASE_URL}${path}`;
