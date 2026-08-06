import Link from 'next/link';

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-100 group">
      <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
        {/* Placeholder for course image - in a real app this would be next/image */}
        <div className="flex items-center justify-center h-full text-white opacity-80 group-hover:scale-105 transition-transform duration-500">
          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold tracking-wide uppercase text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">{course.category || 'General'}</span>
          <span className="font-bold text-gray-900">{course.price || 'Free'}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{course.description}</p>
        <div className="mt-auto">
          <Link 
            href={`/courses/${course.slug}`}
            className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors focus:ring-4 focus:ring-indigo-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
