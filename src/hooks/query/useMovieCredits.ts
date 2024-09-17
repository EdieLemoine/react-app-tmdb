'use client';

import { useQuery } from '@tanstack/react-query';
import { createGetMovieCreditsOptions } from '@/lib/client/query/options/createGetMovieCreditsOptions';

export const useMovieCredits = (id: number) => {
  return useQuery(createGetMovieCreditsOptions(id));
};
