import { Download } from 'lucide-react';
import { downloadResume } from '../utils/downloadResume';

export function Resume() {
  return (
    <section id="resume" className="py-20 bg-blue-600 text-white text-center px-6">
      <h2 className="text-3xl font-bold mb-6">Professional Background</h2>
      <p className="mb-8 opacity-90 text-lg">
        Ready to discuss how I can help your team with data and code?
      </p>
      
      <button 
        onClick={downloadResume} 
        className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition inline-flex items-center gap-2 shadow-lg"
      >
        <Download size={20} /> Download CV
      </button>
    </section>
  );
}