'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { SearchType } from '@/lib/client/constants';
import { SearchForm } from '@/components/SearchForm';
import { Heading1 } from '../common/Headings/Headings';
import { ThemeToggle } from './ThemeToggle';

export function AppHeader() {
  return (
    <header className="grid auto-cols-auto grid-flow-col justify-between px-6 items-center bg-emerald-500 dark:bg-emerald-950">
      <div className="flex">
        <Link
          href="/"
          className="unstyled"
        >
          <Heading1 className="my-auto font-serif text-emerald-900 dark:text-emerald-300">TMDB</Heading1>
        </Link>
      </div>

      <Suspense>
        <SearchForm type={SearchType.Movies} />
      </Suspense>

      <ThemeToggle />
    </header>
  );
}
