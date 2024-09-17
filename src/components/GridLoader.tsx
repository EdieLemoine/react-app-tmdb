export function GridLoader() {
  return (
    <div className="grid gap-2 lg:gap-4 grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="bg-gray-300 dark:bg-gray-900 h-96 w-full animate-pulse rounded-2xl"
        />
      ))}
    </div>
  );
}
