'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export function usePagination() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [page, setPage] = useState(Number(searchParams.get('page') ?? 1));

  // update the URL query string when the page changes
  useEffect(() => {
    const mutableSearchParams = new URLSearchParams(searchParams);

    mutableSearchParams.set('page', String(page));

    const url = window.location.pathname + '?' + mutableSearchParams.toString();

    router.replace(url);
  }, [page, router, searchParams]);

  return {
    page,
    setPage,
  };
}
