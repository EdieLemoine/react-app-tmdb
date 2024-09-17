'use client';

import React, { useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { createGetMovieOptions } from '@/lib/client/query/options/createGetMovieOptions';
import { useMovie } from '@/hooks/query/useMovie';
import { QueryProvider } from '@/components/provider/QueryProvider';
import { Button } from '@/components/common/Button/Button';
import { Movie } from '@/app/[type]/[id]/_Movie';

function MoviePage({ id }: { id: number }) {
  const query = useMovie(id);

  return query.data && <Movie movie={query.data} />;
}

export default function Page() {
  const params = useParams();
  const idParam = params.id;
  const router = useRouter();

  if (!idParam) {
    throw new Error('No id param');
  }

  const options = createGetMovieOptions(Number(idParam));

  const backButtonHandler = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <QueryProvider prefetch={options}>
      <div className="mb-4">
        <Button onClick={backButtonHandler}>&larr; Back</Button>
      </div>

      <MoviePage id={Number(idParam)} />
    </QueryProvider>
  );
}
