import React, { Suspense } from 'react';
import { Heading1 } from '@/components/common/Headings/Headings';
import { PopularMovies } from '@/app/_PopularMovies';

export default function Home() {
  return (
    <div>
      <Heading1>Popular movies</Heading1>

      <Suspense>
        <PopularMovies />
      </Suspense>
    </div>
  );
}
