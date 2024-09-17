import { useMemo } from 'react';

export function Rating({ rating, count }: { rating: number; count: number }) {
  const ratingString = useMemo(() => {
    return rating.toFixed(1);
  }, [rating]);

  const stars = useMemo(() => {
    const num = Math.round(rating);

    if (num % 2 === 0) {
      return num / 2;
    }

    return (num - 1) / 2;
  }, [rating]);

  return (
    <div>
      <span>
        {Array.from({ length: 5 }).map((_, index) => {
          const star = index + 1;
          const isFull = star <= stars;

          return (
            <span
              key={`star-${star}`}
              className="text-yellow-400"
            >
              {isFull ? '★' : '☆'}
            </span>
          );
        })}
      </span>
      &nbsp;
      <span>
        {ratingString} ({count} votes)
      </span>
    </div>
  );
}
