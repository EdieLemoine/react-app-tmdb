'use client';

import { useQuery } from '@tanstack/react-query';
import { type IMovieFull } from '@/types/query.types';
import { createGetMovieOptions } from '@/lib/client/query/options/createGetMovieOptions';

export const useMovie = (id: number) => {
  return useQuery<IMovieFull>(createGetMovieOptions(id));
};
