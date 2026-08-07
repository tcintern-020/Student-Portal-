import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle 
        title="Get in Touch" 
        subtitle="Have questions about our courses or platform? We're here to help."
      />

      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-8 sm:p-10">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-gray-50 focus:bg-white"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-gray-50 focus:bg-white"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-gray-50 focus:bg-white resize-none"
              placeholder="How can we help you today?"
            ></textarea>
          </div>
          <Button type="button" className="w-full mt-4">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
