import { type UseQueryOptions } from '@tanstack/react-query';
import { type IMovieFull } from '@/types/query.types';
import { getApi } from '@/lib/client/getApi';
import { ENDPOINT_MOVIE } from '@/lib/client/endpoints';
import { QUERY_KEY_MOVIES } from '@/lib/client/constants';

export const createGetMovieOptions = (id: number) => {
  const key = [QUERY_KEY_MOVIES, id] as const;

  return Object.freeze({
    queryKey: key,
    queryFn: ({ queryKey }) => {
      const [, id] = queryKey as typeof key;
      const api = getApi();

      return api.get(ENDPOINT_MOVIE.replace(':id', id.toString()) as '/movies/:id');
    },
  } satisfies UseQueryOptions<IMovieFull>);
};
