import { type PaginatedResponse } from '@/types/tmdb.types';
import { type IMovieCredits, type IMovieFull, type IMovieVideos, type SearchResultByType } from '@/types/query.types';
import { createApi, type RequestResults } from '@/lib/shared/createApi';
import { API_BASE_URL_TMDB } from '@/lib/server/constants';
import { type SearchType } from '@/lib/client/constants';

interface ITmdbApiEndpoints extends RequestResults {
  '/movie/:id': IMovieFull;
  '/movie/:id/credits': IMovieCredits;
  '/movie/:id/videos': IMovieVideos;
  '/movie/popular': PaginatedResponse<IMovieFull>;
  '/search/movie': PaginatedResponse<SearchResultByType<SearchType.Movies>>;
}

const instance = (() => {
  const headers = {
    Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
  };

  const api = createApi<ITmdbApiEndpoints>(API_BASE_URL_TMDB, headers);

  const getMovie = async (id: number) => api.get(`/movie/${id}` as '/movies/:id');
  const getMovieCredits = async (id: number) => api.get(`/movie/${id}/credits` as '/movies/:id/credits');
  const getMovieVideos = async (id: number) => api.get(`/movie/${id}/videos` as '/movies/:id/videos');
  const getMovies = async (parameters: { page: number }) => api.get('/movie/popular', parameters);
  const searchMovies = async (parameters: { query: string; page: number }) => api.get('/search/movie', parameters);

  return { getMovie, getMovieCredits, getMovieVideos, getMovies, searchMovies };
})();

export const getTmdbApi = () => instance;
