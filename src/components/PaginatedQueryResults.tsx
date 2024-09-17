import { type ReactElement, type ReactNode, useCallback, useMemo } from 'react';
import { type UseQueryResult } from '@tanstack/react-query';
import { type PaginatedResponse } from '@/types/tmdb.types';
import { Button } from '@/components/common/Button/Button';
import { Loader } from '@/components/Loader';
import { ErrorMessage } from '@/components/ErrorMessage';

interface PaginatedQueryResultsProps<TData = unknown> {
  LoadingComponent?: () => ReactElement;
  children: (result: TData) => ReactNode;
  page: number;
  query: UseQueryResult<PaginatedResponse<TData>>;
  setPage: (value: number | ((old: number) => number)) => void;
  wrapperClass?: string;
}

export function PaginatedQueryResults<TData = unknown>({
  query,
  children,
  wrapperClass,
  page,
  setPage,
  LoadingComponent,
}: PaginatedQueryResultsProps<TData>) {
  const { isPending, isFetching, isError, error, data, isPlaceholderData } = query;

  const totalPages = useMemo(() => data?.total_pages ?? 0, [data?.total_pages]);

  const hasMorePages = useMemo(() => {
    return page < totalPages;
  }, [totalPages, page]);

  const previousButtonHandler = useCallback(() => {
    setPage((old) => Math.max(old - 1, 1));
  }, [setPage]);

  const nextButtonHandler = useCallback(() => {
    setPage((old) => Math.min(old + 1, totalPages));
  }, [setPage, totalPages]);

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  const paginationButtons = (
    <div className="py-3">
      <span>
        Page {page}/{totalPages}
      </span>

      <div className="flex gap-2">
        <Button
          onClick={previousButtonHandler}
          disabled={page === 1}
        >
          Previous
        </Button>

        <Button
          onClick={nextButtonHandler}
          disabled={isPlaceholderData || !hasMorePages}
        >
          Next
        </Button>
      </div>
    </div>
  );

  const renderContent = () => {
    if (isPending || isFetching) {
      return LoadingComponent ? <LoadingComponent /> : <Loader />;
    }

    if (!isFetching && data?.results && data.results.length === 0) {
      return <div>No results found</div>;
    }

    return <div className={wrapperClass}>{data.results.map((result) => children(result))}</div>;
  };

  return (
    <div>
      {paginationButtons}
      {renderContent()}
      {paginationButtons}
    </div>
  );
}
