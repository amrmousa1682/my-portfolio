export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-white/20"></div>
          <div className="absolute inset-0 rounded-full border-2 border-t-white animate-spin"></div>
        </div>
        <p className="text-sm text-white/50 animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
