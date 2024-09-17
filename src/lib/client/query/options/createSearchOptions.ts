import { keepPreviousData, type UseQueryOptions } from '@tanstack/react-query';
import { type PaginatedResponse } from '@/types/tmdb.types';
import { type SearchResultByType } from '@/types/query.types';
import { getApi } from '@/lib/client/getApi';
import { ENDPOINT_SEARCH } from '@/lib/client/endpoints';
import { INITIAL_DATA_PAGINATED_RESPONSE, QUERY_KEY_SEARCH, type SearchType } from '@/lib/client/constants';

export const createSearchOptions = <T extends SearchType>({
  type,
  query,
  page = 1,
}: {
  type: T;
  query: string;
  page?: number;
}) => {
  const key = [QUERY_KEY_SEARCH, type, query, page] as const;

  return Object.freeze({
    queryKey: key,
    queryFn: ({ queryKey }) => {
      const [, typeParam, queryParam, pageParam] = queryKey as typeof key;
      const api = getApi();

      return api.get(ENDPOINT_SEARCH.replace(':type', typeParam) as '/movies/search', {
        query: queryParam,
        page: Number(pageParam ?? 1),
      });
    },
    initialData: INITIAL_DATA_PAGINATED_RESPONSE,
    placeholderData: keepPreviousData,
  } satisfies UseQueryOptions<PaginatedResponse<SearchResultByType<SearchType.Movies>>>);
};
