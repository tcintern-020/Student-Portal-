import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="text-indigo-600 font-bold text-9xl mb-4">404</div>
      <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">Page Not Found</h1>
      <p className="text-xl text-gray-500 mb-8 max-w-md">
        Oops! We couldn't find the page you're looking for. It might have been moved or deleted.
      </p>
      <Link 
        href="/" 
        className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        Go Back Home
      </Link>
    </div>
  );
}
