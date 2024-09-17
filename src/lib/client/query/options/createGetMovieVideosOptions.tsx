import { type UseQueryOptions } from '@tanstack/react-query';
import { type IMovieVideos } from '@/types/query.types';
import { getApi } from '@/lib/client/getApi';
import { ENDPOINT_MOVIE_VIDEOS } from '@/lib/client/endpoints';
import { QUERY_KEY_MOVIES } from '@/lib/client/constants';

export const createGetMovieVideosOptions = (id: number) => {
  const key = [QUERY_KEY_MOVIES, id, 'videos'] as const;

  return Object.freeze({
    queryKey: key,
    queryFn: ({ queryKey }) => {
      const [, id] = queryKey as typeof key;
      const api = getApi();

      return api.get(ENDPOINT_MOVIE_VIDEOS.replace(':id', id.toString()) as '/movies/:id/videos');
    },
  } satisfies UseQueryOptions<IMovieVideos>);
};
