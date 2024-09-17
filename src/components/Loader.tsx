export function Loader() {
  return (
    <div className="flex items-center justify-center w-full h-full animate-pulse">
      <div className="flex space-x-2">
        <div
          className="w-5 h-5 bg-pink-700 rounded-full animate-bounce"
          style={{ animationDelay: '-300ms' }}
        />
        <div
          className="w-5 h-5 bg-rose-700 rounded-full animate-bounce"
          style={{ animationDelay: '-150ms' }}
        />
        <div className="w-5 h-5 bg-indigo-700 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}
