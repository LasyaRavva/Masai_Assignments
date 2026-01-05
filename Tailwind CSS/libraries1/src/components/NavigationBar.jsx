// 8. Navigation Bar
function NavigationBar() {
  return (
    <div className="p-8">
      <h3 className="text-4xl font-bold mb-8 text-gray-800 flex items-center gap-3">
        <span className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg"></span>
        Navigation Bar
      </h3>
      <div className="space-y-6">
        <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between flex-col md:flex-row gap-6">
            <div className="text-3xl font-bold">Brand Logo</div>
            <ul className="flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0 text-center">
              <li>
                <a href="#" className="hover:text-yellow-300 transition-all font-bold hover:scale-110 inline-block text-xl">🏠 Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300 transition-all font-bold hover:scale-110 inline-block text-xl">📖 About</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300 transition-all font-bold hover:scale-110 inline-block text-xl">🎨 Services</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300 transition-all font-bold hover:scale-110 inline-block text-xl">📞 Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        
        <nav className="bg-white border-2 border-gray-200 p-8 rounded-2xl shadow-lg">
          <ul className="flex flex-col md:flex-row md:justify-center md:space-x-8 space-y-4 md:space-y-0">
            <li>
              <a href="#" className="block px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all text-center font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-lg">Home</a>
            </li>
            <li>
              <a href="#" className="block px-8 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all text-center font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-lg">Products</a>
            </li>
            <li>
              <a href="#" className="block px-8 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-all text-center font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-lg">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavigationBar;
