'use client';

import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { createSearchOptions } from '@/lib/client/query/options/createSearchOptions';
import { type SearchType } from '@/lib/client/constants';

export const useSearch = ({ type, query, page }: { type: SearchType; query: string; page: number }) => {
  const options = useMemo(() => createSearchOptions({ type, query, page }), [type, query, page]);

  return useQuery(options);
};
