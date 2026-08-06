import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-2xl tracking-tight text-blue-400 hover:text-blue-300 transition-colors">
              StudentPortal
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="hover:text-white text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
              <Link href="/courses" className="hover:text-white text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Courses</Link>
              <Link href="/instructors" className="hover:text-white text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Instructors</Link>
              <Link href="/contact" className="hover:text-white text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
