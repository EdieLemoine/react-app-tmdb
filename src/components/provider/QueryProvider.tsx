'use client';

import { useEffect, useState } from 'react';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider, type UseQueryOptions } from '@tanstack/react-query';
import { type ChildrenProps } from '@/types/common.types';
import { getQueryClient } from '@/lib/client/query/getQueryClient';
import { Loader } from '@/components/Loader';

type Props = {
  prefetch?: UseQueryOptions;
};

export const QueryProvider = function ({ children, prefetch }: Props & ChildrenProps) {
  const queryClient = getQueryClient();
  const [loading, setLoading] = useState(!!prefetch);

  useEffect(() => {
    if (!prefetch || !queryClient) {
      return;
    }

    void queryClient.prefetchQuery(prefetch).then(() => {
      setLoading(false);
    });
  }, [prefetch, queryClient]);

  if (loading) {
    return <Loader />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
