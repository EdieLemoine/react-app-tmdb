'use client';

import { type FormEvent, useCallback, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/components/common/Input/Input';

export function SearchForm({ type }: { type: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(() => searchParams.get('query') || '');

  const onSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      if (!query) {
        return;
      }

      const params = new URLSearchParams();

      params.set('query', query);

      router.push(`/${type}/search?${params.toString()}`);
    },
    [router, query, type],
  );

  return (
    <form onSubmit={onSubmit}>
      <Input
        placeholder="Search for a movie"
        value={query}
        required
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
