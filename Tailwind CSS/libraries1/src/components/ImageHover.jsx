// 2. Image with Hover Effect
function ImageHover() {
  return (
    <div className="p-8">
      <h3 className="text-4xl font-bold mb-8 text-gray-800 flex items-center gap-3">
        <span className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg"></span>
        Image with Hover Effect
      </h3>
      <div className="flex flex-wrap gap-8">
        <div className="group relative w-80 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
          <img 
            src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=300&fit=crop" 
            alt="Sample" 
            className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <p className="text-white font-bold text-2xl">Hover to Scale</p>
          </div>
        </div>
        <div className="group relative w-80 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
          <img 
            src="https://images.unsplash.com/photo-1682687221038-404cb8830901?w=400&h=300&fit=crop" 
            alt="Sample 2" 
            className="w-full h-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <p className="text-white font-bold text-2xl">With Rotation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageHover;
