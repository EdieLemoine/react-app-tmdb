import { useMemo } from 'react';
import { type IMovieBase } from '@/types/query.types';
import { createImageUrl } from '@/lib/client/createImageUrl';

type IMovieData<Movie extends IMovieBase> = Omit<Movie, 'original_language' | 'original_title'> & {
  age_rating: string;
  original_language: string;
  original_title: string | null;
  poster_alt: string;
  poster_src_large: string;
  poster_src_sm: string;
  release_year: number | null;
};

export const useMovieData = <Movie extends IMovieBase>(movie: Movie): IMovieData<Movie> => {
  const releaseYear = useMemo(() => {
    if (!movie.release_date) {
      return null;
    }

    return new Date(movie.release_date).getFullYear();
  }, [movie.release_date]);

  const posterSrcSm = createImageUrl(`w200${movie.poster_path}`);
  const posterSrcLarge = createImageUrl(`w500${movie.poster_path}`);
  const posterAlt = `${movie.title} poster`;
  const ageRating = movie.adult ? '18+' : 'All ages';
  const originalTitle = movie.original_title !== movie.title ? movie.original_title : null;

  return {
    ...movie,
    age_rating: ageRating,
    original_title: originalTitle,
    poster_alt: posterAlt,
    poster_src_large: posterSrcLarge,
    poster_src_sm: posterSrcSm,
    release_year: releaseYear,
    vote_average: movie.vote_average ?? 0,
    vote_count: movie.vote_count ?? 0,
  };
};
