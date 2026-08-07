'use client';

import { useState } from 'react';
import CourseCard from '../ui/CourseCard';

export default function CourseSearch({ initialCourses }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = initialCourses.filter((course) => {
    const query = searchQuery.toLowerCase();
    return (
      course.title.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query) ||
      course.category.toLowerCase().includes(query)
    );
  });

  return (
    <div>
      {/* Search Bar */}
      <div className="mb-10 max-w-2xl mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-4 py-4 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg transition-colors shadow-sm"
            placeholder="Search for courses, skills, or categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6 text-gray-600 font-medium">
        Showing {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'}
      </div>

      {/* Course Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No courses found</h3>
          <p className="text-gray-500">We couldn't find any courses matching "{searchQuery}". Try adjusting your search.</p>
        </div>
      )}
    </div>
  );
}
