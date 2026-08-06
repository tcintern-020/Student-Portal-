import CourseCard from '@/components/ui/CourseCard';

// Static data for courses
export const courses = [
  {
    id: 1,
    title: 'Modern Web Development with Next.js',
    slug: 'web-development',
    category: 'Web Dev',
    price: '$99',
    description: 'Master React and Next.js by building production-ready applications from scratch.',
  },
  {
    id: 2,
    title: 'AI Engineering and Machine Learning',
    slug: 'ai-engineering',
    category: 'AI / ML',
    price: '$129',
    description: 'Learn to build intelligent applications using Python, TensorFlow, and modern AI tools.',
  },
  {
    id: 3,
    title: 'UI/UX Design Masterclass',
    slug: 'ui-ux-design',
    category: 'Design',
    price: '$79',
    description: 'A comprehensive guide to designing beautiful, user-friendly interfaces.',
  },
  {
    id: 4,
    title: 'Advanced Cloud Architecture',
    slug: 'cloud-architecture',
    category: 'Cloud',
    price: '$149',
    description: 'Scale your applications globally using AWS and modern cloud-native patterns.',
  }
];

export default function CoursesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Our Courses</h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Choose from our catalog of expert-led courses and start learning today.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
