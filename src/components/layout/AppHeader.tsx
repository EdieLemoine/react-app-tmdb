'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { SearchType } from '@/lib/client/constants';
import { SearchForm } from '@/components/SearchForm';
import { ThemeToggle } from './ThemeToggle';

export function AppHeader() {
  return (
    <header className="flex px-6 py-2 gap-2 bg-emerald-500 dark:bg-emerald-950 flex-col sm:flex-row items-center justify-between">
      <div className="inline-flex">
        <Link
          href="/"
          className="unstyled"
        >
          <h1 className="text-3xl my-auto font-serif text-emerald-900 dark:text-emerald-300">TMDB</h1>
        </Link>
      </div>

      <Suspense>
        <SearchForm type={SearchType.Movies} />
      </Suspense>

      <div className="my-auto sm:self-end">
        <ThemeToggle />
      </div>
    </header>
  );
}
