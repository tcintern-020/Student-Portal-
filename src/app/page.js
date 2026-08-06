import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">Unlock Your Potential</h1>
        <p className="text-xl md:text-2xl font-light mb-10 max-w-3xl mx-auto opacity-90">
          Learn from industry experts and master the skills you need to build the future.
        </p>
        <Link 
          href="/courses" 
          className="bg-white text-indigo-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all transform hover:-translate-y-1"
        >
          Explore Courses
        </Link>
      </section>
      
      {/* Features Section */}
      <section className="py-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl font-bold">📚</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Expert-Led Courses</h3>
            <p className="text-gray-600">Learn from professionals with real-world experience.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl font-bold">🚀</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Accelerated Learning</h3>
            <p className="text-gray-600">Fast-track your career with practical projects.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl font-bold">🌍</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Global Community</h3>
            <p className="text-gray-600">Join students from all over the world.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
