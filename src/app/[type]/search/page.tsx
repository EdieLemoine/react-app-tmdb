'use client';

import { useMemo } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { createSearchOptions } from '@/lib/client/query/options/createSearchOptions';
import { type SearchType } from '@/lib/client/constants';
import { usePagination } from '@/hooks/usePagination';
import { useSearch } from '@/hooks/query/useSearch';
import { QueryProvider } from '@/components/provider/QueryProvider';
import { Heading1 } from '@/components/common/Headings/Headings';
import { PaginatedQueryResults } from '@/components/PaginatedQueryResults';
import { MovieResult } from '@/components/MovieResult';
import { GridLoader } from '@/components/GridLoader';

function SearchResults<Type extends SearchType>({ type, query }: { type: Type; query: string }) {
  const { page, setPage } = usePagination();

  const search = useSearch({ type, query, page });

  return (
    <PaginatedQueryResults
      page={page}
      setPage={setPage}
      query={search}
      wrapperClass="grid gap-2 lg:gap-4 grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3"
      LoadingComponent={GridLoader}
    >
      {(item) => (
        <MovieResult
          key={item.id}
          movie={item}
        />
      )}
    </PaginatedQueryResults>
  );
}

export default function Page() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  const type = useMemo(() => params.type as SearchType | null, [params]);
  const query = useMemo(() => searchParams.get('query'), [searchParams]);

  const options = useMemo(() => {
    if (!query || !type) {
      return null;
    }

    return createSearchOptions({ type, query });
  }, [type, query]);

  if (!query || !type || !options) {
    router.push('/not-found');

    return null;
  }

  return (
    <QueryProvider prefetch={options}>
      <Heading1>Search results for &ldquo;{query}&rdquo;</Heading1>

      <SearchResults
        type={type}
        query={query}
      />
    </QueryProvider>
  );
}
