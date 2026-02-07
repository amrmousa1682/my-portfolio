import { Link } from '@/i18n/navigation';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-4 text-center">
      <h1 className="text-8xl font-bold text-white/20">404</h1>
      <h2 className="text-2xl font-bold text-white">Page not found</h2>
      <p className="text-white/60 max-w-md">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
