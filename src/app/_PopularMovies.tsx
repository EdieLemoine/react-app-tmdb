'use client';

import { usePagination } from '@/hooks/usePagination';
import { useMovies } from '@/hooks/query/useMovies';
import { QueryProvider } from '@/components/provider/QueryProvider';
import { PaginatedQueryResults } from '@/components/PaginatedQueryResults';
import { MovieResult } from '@/components/MovieResult';
import { GridLoader } from '@/components/GridLoader';

function PopularMoviesList() {
  // It's kind of suboptimal to have to include this hook as well as use the PaginatedQueryResults, but no more time to refactor.
  const { page, setPage } = usePagination();
  const movies = useMovies(page);

  return (
    <PaginatedQueryResults
      page={page}
      setPage={setPage}
      query={movies}
      wrapperClass="grid gap-2 lg:gap-4 grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3"
      LoadingComponent={GridLoader}
    >
      {(movie) => (
        <MovieResult
          key={movie.id}
          movie={movie}
        />
      )}
    </PaginatedQueryResults>
  );
}

export function PopularMovies() {
  return (
    <QueryProvider>
      <PopularMoviesList />
    </QueryProvider>
  );
}
