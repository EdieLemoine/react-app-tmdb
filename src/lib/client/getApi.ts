import { type PaginatedResponse } from '@/types/tmdb.types';
import {
  type IMovieCredits,
  type IMovieFull,
  type IMovieSearch,
  type IMovieVideos,
  type SearchResultByType,
} from '@/types/query.types';
import { createApi, type RequestResults } from '@/lib/shared/createApi';
import { type SearchType } from '@/lib/client/constants';

interface BackendApiResults extends RequestResults {
  '/movies': PaginatedResponse<IMovieSearch>;
  '/movies/:id': IMovieFull;
  '/movies/:id/credits': IMovieCredits;
  '/movies/:id/videos': IMovieVideos;
  '/movies/search': PaginatedResponse<SearchResultByType<SearchType.Movies>>;
}

const instance = (() => createApi<BackendApiResults>(process.env.NEXT_PUBLIC_API_BASE_URL ?? ''))();

export const getApi = () => instance;
