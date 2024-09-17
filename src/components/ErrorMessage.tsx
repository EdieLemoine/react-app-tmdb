export function ErrorMessage({ error }: { error: Error }) {
  return <div className="text-red-950 bg-red-300 dark:bg-red-700 dark:text-red-50 px-3 py-2">{error.message}</div>;
}
