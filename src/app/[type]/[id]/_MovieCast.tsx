import { useMemo } from 'react';
import { type ICast } from '@/types/query.types';
import { createImageUrl } from '@/lib/client/createImageUrl';
import { useMovieCredits } from '@/hooks/query/useMovieCredits';
import { Image } from '@/components/common/Image/Image';
import { GridLoader } from '@/components/GridLoader';
import { ErrorMessage } from '@/components/ErrorMessage';

function MovieCastMember({ cast }: { cast: ICast }) {
  const imageUrl = useMemo(() => {
    return createImageUrl(`w200${cast.profile_path}`);
  }, [cast.profile_path]);

  function renderImage() {
    if (!cast.profile_path) {
      return (
        <div className="bg-gray-300 dark:bg-gray-700 flex-grow">
          <span className="flex items-center justify-center w-full h-full text-4xl text-gray-500 dark:text-gray-300">
            ?
          </span>
        </div>
      );
    }

    return (
      <Image
        className="object-cover"
        src={imageUrl}
        alt={cast.name}
        width={150}
        height={150}
      />
    );
  }

  return (
    <div className="border p-2 rounded-lg bg-gray-100 border:gray-200 dark:bg-gray-800 dark:border-gray-700 flex flex-col">
      <div className="m-auto max-w-32 w-full h-48 overflow-hidden flex mx-auto">{renderImage()}</div>

      <b>{cast.name}</b>
      <span className="text-gray-500 dark:text-gray-300">{cast.character}</span>
    </div>
  );
}

export function MovieCast({ id }: { id: number }) {
  const { data, error, isError, isLoading } = useMovieCredits(id);

  const filteredCast = useMemo(() => {
    if (!data) {
      return [];
    }

    return data.cast.filter((cast) => cast.known_for_department === 'Acting');
  }, [data]);

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  if (isLoading) {
    return <GridLoader />;
  }

  if (filteredCast.length === 0) {
    return <div>No cast found</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {filteredCast.map((cast) => {
        return (
          <MovieCastMember
            key={cast.id}
            cast={cast}
          />
        );
      })}
    </div>
  );
}
