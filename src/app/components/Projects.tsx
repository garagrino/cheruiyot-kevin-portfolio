import { Database, BarChart3, FileCode } from 'lucide-react';

export function Projects() {
  const dataProjects = [
    {
      title: "Market Trend Analysis",
      tech: "Python, SQL, Power BI",
      desc: "Cleaned and analyzed 10k+ rows of retail data to identify seasonal buying patterns.",
      link: "#"
    },
    {
      title: "Web Scraping Dashboard",
      tech: "BeautifulSoup, Pandas, Tableau",
      desc: "Automated data collection from real estate sites to track price fluctuations in Juja.",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Data Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {dataProjects.map((p, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-blue-500 transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl"><Database size={24} /></div>
                <span className="text-sm font-mono text-blue-600">{p.tech}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
              <p className="text-gray-600 mb-6">{p.desc}</p>
              <a href={p.link} className="font-bold text-blue-600 hover:underline inline-flex items-center gap-2">
                View Case Study <BarChart3 size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}