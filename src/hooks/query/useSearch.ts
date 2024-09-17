'use client';

import { useQuery } from '@tanstack/react-query';
import { createSearchOptions } from '@/lib/client/query/options/createSearchOptions';
import { type SearchType } from '@/lib/client/constants';

export const useSearch = ({ type, query, page }: { type: SearchType; query: string; page: number }) => {
  return useQuery(createSearchOptions({ type, query, page }));
};
