import { type ReactElement, type ReactNode, useMemo } from 'react';
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

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  const totalPages = data?.total_pages ?? 0;

  const paginationButtons = useMemo(() => {
    const hasMorePages = page < totalPages;

    const previousButtonHandler = () => {
      setPage((old) => Math.max(old - 1, 1));
    };

    const nextButtonHandler = () => {
      setPage((old) => Math.min(old + 1, totalPages));
    };

    return (
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
  }, [page, setPage, totalPages, isPlaceholderData]);

  const renderContent = () => {
    if ((isPending || isFetching) && !isPlaceholderData) {
      return LoadingComponent ? <LoadingComponent /> : <Loader />;
    }

    if (!isFetching && data?.results && data.results.length === 0) {
      return <div>No results found</div>;
    }

    return <div className={wrapperClass}>{data?.results.map((result) => children(result))}</div>;
  };

  return (
    <div>
      {paginationButtons}
      {renderContent()}
      {paginationButtons}
    </div>
  );
}
