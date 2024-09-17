import { Simulate } from 'react-dom/test-utils';
import React from 'react';
import { type IVideoResult } from '@/types/query.types';
import { useMovieVideos } from '@/hooks/query/useMovieVideos';
import { Loader } from '@/components/Loader';
import { ErrorMessage } from '@/components/ErrorMessage';

function MovieVideo({ video }: { video: IVideoResult }) {
  return (
    <div className="border p-2 rounded-lg bg-gray-100 border:gray-200 dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-2">
      <b>{video.name}</b>
      <span>
        {video.type} – {video.site}
      </span>

      <iframe
        className="aspect-video"
        src={`https://www.youtube.com/embed/${video.key}`}
        allowFullScreen
      />
    </div>
  );
}

export function MovieVideos({ id }: { id: number }) {
  const { isFetching, data, isError, error } = useMovieVideos(id);

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  if (isFetching) {
    return <Loader />;
  }

  if (data?.results.length === 0) {
    return <div>No videos found</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {data?.results.map((video) => (
        <MovieVideo
          key={video.key}
          video={video}
        />
      ))}
    </div>
  );
}
