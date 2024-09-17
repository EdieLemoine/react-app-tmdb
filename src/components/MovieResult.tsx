'use client';
import { type FC, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { type IMovieSearch } from '@/types/query.types';
import { useMovieData } from '@/hooks/useMovieData';
import { Image } from '@/components/common/Image/Image';
import { Heading2 } from '@/components/common/Headings/Headings';
import { Button } from '@/components/common/Button/Button';
import { Rating } from '@/components/Rating';
import { Excerpt } from '@/components/Excerpt';

export const MovieResult: FC<{ movie: IMovieSearch }> = ({ movie }) => {
  const router = useRouter();
  const data = useMovieData(movie);

  const openDetails = useCallback(() => {
    router.push(`/movies/${movie?.id}`);
  }, [router, movie?.id]);

  return (
    <div
      key={movie.id}
      className="border rounded-2xl p-4 bg-white shadow-md flex flex-col dark:bg-gray-800 dark:text-white dark:border-gray-700"
    >
      <Heading2>
        {data.title} {data.release_year && <>({data.release_year})</>}
      </Heading2>

      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="flex-grow flex flex-col">
          <Rating
            rating={data.vote_average}
            count={data.vote_count}
          />

          <div className="grid grid-cols-[fit-content(200px)_1fr] gap-2">
            <b className="font-bold">Released:</b>
            <span> {data.release_date}</span>
          </div>

          <Excerpt text={data.overview} />

          <Button
            className="mt-auto"
            onClick={openDetails}
          >
            View Details
          </Button>
        </div>

        <Image
          src={data.poster_src_sm}
          alt={data.poster_alt}
          width={200}
          height={300}
        />
      </div>
    </div>
  );
};
