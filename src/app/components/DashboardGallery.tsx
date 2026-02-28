export function DashboardGallery() {
  const dashboards = [
    { 
      title: "E-commerce Sales Insights", 
      image: "/dashboard1.png", 
      desc: "Built with Power BI to track monthly revenue trends." 
    },
    { 
      title: "Customer Sentiment Analysis", 
      image: "/dashboard2.png", 
      desc: "Tableau dashboard visualizing social media data trends." 
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Data Visualizations</h2>
        <p className="text-gray-600 mb-12 text-lg">Detailed dashboards built to translate complex data into business decisions.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dashboards.map((dash, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <img 
                src={dash.image} 
                alt={dash.title} 
                className="w-full aspect-video object-cover"
                // This fallback shows a clean placeholder if the image is missing
                onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/600x400?text=Dashboard+Coming+Soon"; }}
              />
              <div className="p-6 text-left">
                <h3 className="font-bold text-xl mb-2">{dash.title}</h3>
                <p className="text-gray-600 text-sm">{dash.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}