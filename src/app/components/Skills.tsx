import { Database, Code2, LineChart, ShieldCheck, Globe, Terminal } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: "Data Analytics",
      icon: <LineChart className="text-blue-500" />,
      skills: ["Python", "SQL", "Excel", "Data Visualization", "Power BI"]
    },
    {
      title: "Software Development",
      icon: <Code2 className="text-green-500" />,
      skills: ["JavaScript", "TypeScript", "React", "Tailwind CSS", "Vite"]
    },
    {
      title: "Backend & Tools",
      icon: <Terminal className="text-purple-500" />,
      skills: ["Node.js", "Git", "GitHub", "CLI", "REST APIs"]
    },
    {
      title: "Cybersecurity",
      icon: <ShieldCheck className="text-red-500" />,
      skills: ["Network Security", "Ethical Hacking", "Encryption", "Vulnerability Assessment"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Technical Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}