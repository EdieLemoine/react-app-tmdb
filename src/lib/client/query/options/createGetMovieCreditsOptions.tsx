import { type UseQueryOptions } from '@tanstack/react-query';
import { type IMovieCredits } from '@/types/query.types';
import { getApi } from '@/lib/client/getApi';
import { ENDPOINT_MOVIE_CREDITS } from '@/lib/client/endpoints';
import { QUERY_KEY_MOVIES } from '@/lib/client/constants';

export const createGetMovieCreditsOptions = (id: number) => {
  const key = [QUERY_KEY_MOVIES, id, 'credits'] as const;

  return Object.freeze({
    queryKey: key,
    queryFn: ({ queryKey }) => {
      const [, id] = queryKey as typeof key;
      const api = getApi();

      return api.get(ENDPOINT_MOVIE_CREDITS.replace(':id', id.toString()) as '/movies/:id/credits');
    },
  } satisfies UseQueryOptions<IMovieCredits>);
};
