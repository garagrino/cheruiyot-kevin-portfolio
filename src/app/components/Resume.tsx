import { Download, FileText, Award, Briefcase } from 'lucide-react';

export function Resume() {
  const highlights = [
    { icon: <Briefcase size={20} />, text: "Software Engineering Student at Zetech University" },
    { icon: <Award size={20} />, text: "Certified in Data Analytics & Python" },
    { icon: <FileText size={20} />, text: "Available for Internships & Freelance Projects" }
  ];

  return (
    <section id="resume" className="py-20 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Professional Background</h2>
        <p className="text-blue-100 text-lg mb-10">
          I combine technical software development skills with deep data insights to build functional, data-driven applications.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, i) => (
            <div key={i} className="bg-blue-700/50 p-6 rounded-2xl flex flex-col items-center gap-3 backdrop-blur-sm border border-blue-500/30">
              <div className="text-blue-200">{item.icon}</div>
              <p className="text-sm font-medium">{item.text}</p>
            </div>
          ))}
        </div>

        {/* This link triggers the download from your /public folder */}
        <a 
          href="/Cheruiyot_Kevin_Resume.pdf" 
          download="Cheruiyot_Kevin_Resume.pdf"
          className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
        >
          <Download size={24} />
          Download Full CV
        </a>
        
        <p className="mt-6 text-blue-200 text-sm italic">
          *Ensure your PDF is named "Cheruiyot_Kevin_Resume.pdf" in the public folder.
        </p>
      </div>
    </section>
  );
}