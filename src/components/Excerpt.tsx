import Link from 'next/link';

export function Excerpt({ text, limit = 100 }: { text: string; limit?: number }) {
  const isExcerpt = text.length > limit;

  if (!isExcerpt) {
    return <p>{text}</p>;
  }

  return (
    <p>
      {text.slice(0, limit - 3)}...&nbsp;
      <Link href="#">Read More</Link>
    </p>
  );
}
