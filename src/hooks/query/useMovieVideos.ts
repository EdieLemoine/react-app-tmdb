'use client';

import { useQuery } from '@tanstack/react-query';
import { createGetMovieVideosOptions } from '@/lib/client/query/options/createGetMovieVideosOptions';

export const useMovieVideos = (id: number) => {
  return useQuery(createGetMovieVideosOptions(id));
};
