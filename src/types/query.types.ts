import { type SearchType } from '@/lib/client/constants';

export interface IGenre {
  id: number;
  name: string;
}

export interface IProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface IProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface ISpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface IBelongsToCollection {
  backdrop_path: string;
  id: number;
  name: string;
  poster_path: string;
}

export interface IMovieBase {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovieFull extends IMovieBase {
  belongs_to_collection?: IBelongsToCollection | null;
  budget: number;
  genres: IGenre[];
  homepage: string;
  imdb_id: string;
  production_companies: IProductionCompany[];
  production_countries: IProductionCountry[];
  revenue: number;
  runtime: number;
  spoken_languages: ISpokenLanguage[];
  status: string;
  tagline: string;
}

export interface IMovieSearch extends IMovieBase {
  genre_ids: number[];
}

export interface ICast {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
}

export interface ICrew {
  adult: boolean;
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
}

export interface IMovieCredits {
  cast: ICast[];
  crew: ICrew[];
  id: number;
}

export interface IVideoResult {
  id: string;
  iso_3166_1: string;
  iso_639_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
}

export interface IMovieVideos {
  id: number;
  results: IVideoResult[];
}

export type SearchResultByType<T extends SearchType> = T extends SearchType.Movies ? IMovieSearch : unknown;
