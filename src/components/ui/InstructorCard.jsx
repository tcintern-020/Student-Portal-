export default function InstructorCard({ instructor }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center">
      <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 mb-4 flex items-center justify-center text-white text-3xl font-bold">
        {instructor.name.charAt(0)}
      </div>
      <h3 className="text-lg font-bold text-gray-900">{instructor.name}</h3>
      <p className="text-indigo-600 font-medium text-sm mb-2">{instructor.role}</p>
      <p className="text-gray-600 text-sm">{instructor.bio}</p>
      
      <div className="mt-4 flex space-x-3">
        {/* Social placeholders */}
        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-indigo-100 hover:text-indigo-600 cursor-pointer transition-colors">
          in
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-indigo-100 hover:text-indigo-600 cursor-pointer transition-colors">
          tw
        </div>
      </div>
    </div>
  );
}
