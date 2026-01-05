// 5. Card Component
function CardComponent() {
  return (
    <div className="p-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Card Component
            </h2>
            <p className="text-xl text-gray-600">Beautiful card designs with images and buttons</p>
          </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="group bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
          <div className="relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=400&h=250&fit=crop" 
              alt="Card" 
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">New</div>
          </div>
          <div className="p-6">
            <h4 className="text-3xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">Modern Design</h4>
            <p className="text-lg text-gray-600 mb-6 line-clamp-3">
              Experience beautifully crafted card components with smooth animations and hover effects.
            </p>
            <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg font-bold text-lg">
              Learn More →
            </button>
          </div>
        </div>

        <div className="group bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
          <div className="relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=400&h=250&fit=crop" 
              alt="Card" 
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-3 right-3 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Featured</div>
          </div>
          <div className="p-6">
            <h4 className="text-3xl font-bold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors">Responsive Layout</h4>
            <p className="text-lg text-gray-600 mb-6">
              Cards that adapt perfectly to any screen size with elegant responsive behavior.
            </p>
            <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all shadow-md hover:shadow-lg font-bold text-lg">
              Explore Now →
            </button>
          </div>
        </div>

        <div className="group bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
          <div className="relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1682687220795-796d3f6f7000?w=400&h=250&fit=crop" 
              alt="Card" 
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-3 right-3 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Popular</div>
          </div>
          <div className="p-6">
            <h4 className="text-3xl font-bold mb-3 text-gray-800 group-hover:text-pink-600 transition-colors">Tailwind Magic</h4>
            <p className="text-lg text-gray-600 mb-6">
              Harness the power of Tailwind CSS utilities for rapid development and stunning results.
            </p>
            <button className="w-full px-4 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all shadow-md hover:shadow-lg font-bold text-lg">
              Get Started →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
