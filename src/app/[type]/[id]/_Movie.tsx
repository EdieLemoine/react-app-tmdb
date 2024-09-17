import { type IMovieFull } from '@/types/query.types';
import { useMovieData } from '@/hooks/useMovieData';
import { Image } from '@/components/common/Image/Image';
import { Heading1, Heading2 } from '@/components/common/Headings/Headings';
import { Badge } from '@/components/common/Badge/Badge';
import { Rating } from '@/components/Rating';
import { MovieVideos } from '@/app/[type]/[id]/_MovieVideos';
import { MovieCast } from '@/app/[type]/[id]/_MovieCast';

export function Movie({ movie }: { movie: IMovieFull }) {
  const data = useMovieData(movie);

  return (
    <>
      <Heading1>
        {data.title} {data.release_year && <>({data.release_year})</>}
      </Heading1>

      {data.original_title ? <b className="text-gray-600">Original title: {data.original_title}</b> : null}

      <Rating
        rating={data.vote_average}
        count={data.vote_count}
      />

      <div className="block md:hidden max-w-64">
        <Image
          src={data.poster_src_large}
          alt={data.poster_alt}
          className="rounded-lg"
          width={500}
          height={600}
        />
      </div>

      <div className="flex gap-6">
        <div className="md:w-3/5">
          <Heading2>Details</Heading2>

          <div className="grid grid-cols-[fit-content(200px)_1fr] gap-2">
            <b>Release date:</b>
            <span>{data.release_date}</span>

            <b>Runtime:</b>
            <span>{data.runtime} minutes</span>

            <b>Language:</b>
            <span>{data.original_language}</span>

            <b>Age rating:</b>
            <span>{data.age_rating}</span>

            <b>Genres:</b>
            <div className="flex flex-wrap gap-2">
              {data.genres.map((genre) => (
                <Badge key={genre.id}>{genre.name}</Badge>
              ))}
            </div>
          </div>

          <Heading2>Summary</Heading2>
          <p>{data.overview}</p>
        </div>

        <div className="ml-auto hidden md:block md:w-2/5">
          <Image
            className="max-w-96 mx-auto w-full rounded-lg"
            src={data.poster_src_large}
            alt={data.poster_alt}
            width={500}
            height={600}
          />
        </div>
      </div>

      <div>
        <Heading2>Videos</Heading2>

        <MovieVideos id={data.id}></MovieVideos>
      </div>

      <div>
        <Heading2>Cast</Heading2>

        <MovieCast id={data.id} />
      </div>
    </>
  );
}
