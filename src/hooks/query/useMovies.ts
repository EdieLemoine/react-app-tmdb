'use client';

import { useQuery } from '@tanstack/react-query';
import { createGetPopularMoviesOptions } from '@/lib/client/query/options/createGetPopularMoviesOptions';

export const useMovies = (page: number = 1) => {
  return useQuery(createGetPopularMoviesOptions(page));
};
