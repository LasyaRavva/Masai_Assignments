// 9. Responsive Grid Layout
function ResponsiveGrid() {
  const cards = [
    { id: 1, title: "Design", description: "Beautiful UI/UX", icon: "🎨", color: "from-blue-500 to-blue-600" },
    { id: 2, title: "Development", description: "Clean code", icon: "⚡", color: "from-purple-500 to-purple-600" },
    { id: 3, title: "Marketing", description: "Reach audience", icon: "📱", color: "from-pink-500 to-pink-600" },
    { id: 4, title: "Analytics", description: "Track metrics", icon: "📊", color: "from-green-500 to-green-600" },
    { id: 5, title: "Support", description: "24/7 assistance", icon: "💬", color: "from-yellow-500 to-yellow-600" },
    { id: 6, title: "Security", description: "Data protection", icon: "🔒", color: "from-red-500 to-red-600" },
  ];

  return (
    <div className="p-8">
      <h3 className="text-4xl font-bold mb-8 text-gray-800 flex items-center gap-3">
        <span className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg"></span>
        Responsive Grid Layout
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map(card => (
          <div key={card.id} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-transparent hover:border-blue-200">
            <div className={`w-20 h-20 bg-gradient-to-r ${card.color} rounded-2xl flex items-center justify-center text-5xl mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
              {card.icon}
            </div>
            <h4 className="text-3xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">{card.title}</h4>
            <p className="text-gray-600 text-xl mb-4">{card.description}</p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <a href="#" className="text-blue-500 hover:text-blue-700 font-bold text-lg inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResponsiveGrid;
