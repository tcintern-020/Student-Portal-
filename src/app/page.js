import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">Unlock Your Potential</h1>
        <p className="text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto opacity-90">
          Learn from industry experts and master the skills you need to build the future.
        </p>
        <Button href="/courses" variant="secondary" className="text-lg">
          Explore Courses
        </Button>
      </section>
      
      {/* Features Section */}
      <section className="py-24 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Why Choose Us?" 
          subtitle="We offer the best learning experience with features designed to help you succeed."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 text-3xl font-bold">📚</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Expert-Led Courses</h3>
            <p className="text-gray-600 leading-relaxed">Learn from professionals with real-world experience and proven track records.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
            <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6 text-3xl font-bold">🚀</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Accelerated Learning</h3>
            <p className="text-gray-600 leading-relaxed">Fast-track your career with practical, hands-on projects you can show off.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 text-3xl font-bold">🌍</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Global Community</h3>
            <p className="text-gray-600 leading-relaxed">Join a vibrant community of passionate students from all over the world.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
