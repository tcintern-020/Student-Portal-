import Link from 'next/link';
import { notFound } from 'next/navigation';
import { courses } from '@/data/courses';
import CourseCard from '@/components/ui/CourseCard';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';

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

  // Find related courses in the same category, excluding the current course
  const relatedCourses = courses
    .filter((c) => c.category === course.category && c.id !== course.id)
    .slice(0, 3); // Limit to 3

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/courses" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Courses
          </Link>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-16">
          <div className="h-64 bg-gradient-to-r from-blue-600 to-indigo-800 relative">
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wide uppercase mb-3">
                {course.category}
              </span>
              <h1 className="text-4xl font-bold">{course.title}</h1>
            </div>
          </div>
          
          <div className="p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 pb-8 border-b border-gray-100 gap-4">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Price</p>
                <p className="text-3xl font-bold text-gray-900">{course.price}</p>
              </div>
              <Button>Enroll Now</Button>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {course.description}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Courses Section */}
      {relatedCourses.length > 0 && (
        <div className="mt-20 pt-10 border-t border-gray-100">
          <SectionTitle 
            title="Related Courses" 
            subtitle="Explore other courses you might be interested in."
            centered={false}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedCourses.map((relatedCourse) => (
              <CourseCard key={relatedCourse.id} course={relatedCourse} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
