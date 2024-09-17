import { keepPreviousData, type UseQueryOptions } from '@tanstack/react-query';
import { type PaginatedResponse } from '@/types/tmdb.types';
import { type SearchResultByType } from '@/types/query.types';
import { getApi } from '@/lib/client/getApi';
import { ENDPOINT_MOVIES } from '@/lib/client/endpoints';
import { QUERY_KEY_MOVIES, QUERY_KEY_SEARCH, type SearchType } from '@/lib/client/constants';

export const createGetPopularMoviesOptions = (page: number = 1) => {
  const key = [QUERY_KEY_SEARCH, page] as const;

  return Object.freeze({
    queryKey: [QUERY_KEY_MOVIES, page],
    queryFn: ({ queryKey }) => {
      const [, pageParam] = queryKey as typeof key;

      const api = getApi();

      return api.get(ENDPOINT_MOVIES, { page: Number(pageParam ?? 1) });
    },
    placeholderData: keepPreviousData,
  } satisfies UseQueryOptions<PaginatedResponse<SearchResultByType<SearchType.Movies>>>);
};
