'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useMovie } from '@/hooks/query/useMovie';
import { QueryProvider } from '@/components/provider/QueryProvider';
import { Button } from '@/components/common/Button/Button';
import { ErrorMessage } from '@/components/ErrorMessage';
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
    const error = new Error('No id provided');

    return <ErrorMessage error={error} />;
  }

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <QueryProvider>
      <div className="mb-4">
        <Button onClick={backButtonHandler}>&larr; Back</Button>
      </div>

      <MoviePage id={Number(idParam)} />
    </QueryProvider>
  );
}
