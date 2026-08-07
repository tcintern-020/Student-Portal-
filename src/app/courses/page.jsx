import CourseSearch from '@/components/features/CourseSearch';
import SectionTitle from '@/components/ui/SectionTitle';
import { courses } from '@/data/courses';

export default function CoursesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionTitle 
        title="Explore Our Courses" 
        subtitle="Choose from our catalog of expert-led courses and start learning today. Use the search bar below to find what you're looking for." 
      />
      
      <CourseSearch initialCourses={courses} />
    </div>
  );
}
