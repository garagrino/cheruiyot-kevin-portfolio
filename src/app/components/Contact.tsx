import { Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
        <p className="text-gray-600 mb-8 text-lg">Open for freelance projects and data analyst roles.</p>
        <a href="mailto:cheruiyotkevin399@gmail.com" className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition shadow-lg">
          <Mail size={20} /> cheruiyotkevin399@gmail.com
        </a>
      </div>
    </section>
  );
}