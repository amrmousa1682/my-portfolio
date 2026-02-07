'use client';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-4 text-center">
      <div className="text-6xl">⚠️</div>
      <h2 className="text-2xl font-bold text-white">Something went wrong</h2>
      <p className="text-white/60 max-w-md">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-colors cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
}
