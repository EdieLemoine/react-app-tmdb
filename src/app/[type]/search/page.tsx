'use client';

import { useEffect } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
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

  const type = params.type as SearchType | null;
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query || !type) {
      router.push('/not-found');
    }
  }, [query, type, router]);

  if (!query || !type) {
    return null;
  }

  return (
    <QueryProvider>
      <Heading1>Search results for &ldquo;{query}&rdquo;</Heading1>

      <SearchResults
        type={type}
        query={query}
      />
    </QueryProvider>
  );
}
