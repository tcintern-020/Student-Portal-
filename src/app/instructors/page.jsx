import InstructorCard from '@/components/ui/InstructorCard';

const instructors = [
  {
    id: 1,
    name: 'Sarah Drasner',
    role: 'Lead Web Instructor',
    bio: 'Former VP at Netlify, Vue Core team member, and award-winning speaker.',
  },
  {
    id: 2,
    name: 'Andrew Ng',
    role: 'AI / ML Specialist',
    bio: 'Pioneer in Machine Learning and online education. Founder of DeepLearning.AI.',
  },
  {
    id: 3,
    name: 'Gary Simon',
    role: 'UI/UX Expert',
    bio: 'Over 20 years of experience in design and frontend development.',
  },
];

export default function InstructorsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Meet Our Instructors</h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Learn directly from industry leaders who bring real-world experience to the classroom.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor.id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
}
