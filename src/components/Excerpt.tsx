import { useMemo } from 'react';
import Link from 'next/link';

export function Excerpt({ text, limit = 100 }: { text: string; limit?: number }) {
  const isExcerpt = useMemo(() => {
    return text.length > limit;
  }, [text, limit]);

  return (
    <p>
      {isExcerpt ? `${text.slice(0, limit - 3)}...` : text}
      {isExcerpt && <Link href="#">Read More</Link>}
    </p>
  );
}
