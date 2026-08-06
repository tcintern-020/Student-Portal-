import Link from 'next/link';
import { notFound } from 'next/navigation';
import { courses } from '../page';

// Generate static routes for GitHub Pages
export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CourseDetailsPage({ params }) {
  // Await params in Next.js 15+
  const resolvedParams = await params;
  const course = courses.find((c) => c.slug === resolvedParams.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <Link href="/courses" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center transition-colors">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Courses
        </Link>
      </div>
      
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="h-64 bg-gradient-to-r from-blue-600 to-indigo-800 relative">
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wide uppercase mb-3">
              {course.category}
            </span>
            <h1 className="text-4xl font-bold">{course.title}</h1>
          </div>
        </div>
        
        <div className="p-8">
          <div className="flex justify-between items-center mb-8 pb-8 border-b border-gray-100">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Price</p>
              <p className="text-3xl font-bold text-gray-900">{course.price}</p>
            </div>
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Enroll Now
            </button>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {course.description}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
