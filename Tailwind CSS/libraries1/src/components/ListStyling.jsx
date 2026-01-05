// 4. List Styling
function ListStyling() {
  return (
    <div className="p-8">
      <h3 className="text-4xl font-bold mb-8 text-gray-800 flex items-center gap-3">
        <span className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg"></span>
        List Styling
      </h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-2xl font-bold mb-4 text-gray-700">Basic List</h4>
          <ul className="list-disc list-inside pl-5 space-y-4 text-gray-700 text-lg">
            <li className="hover:text-blue-600 hover:translate-x-2 transition-all cursor-pointer">
              ✨ Feature-rich components
            </li>
            <li className="hover:text-blue-600 hover:translate-x-2 transition-all cursor-pointer">
              🎨 Beautiful gradient effects
            </li>
            <li className="hover:text-blue-600 hover:translate-x-2 transition-all cursor-pointer">
              📱 Fully responsive design
            </li>
            <li className="hover:text-blue-600 hover:translate-x-2 transition-all cursor-pointer">
              ⚡ Lightning fast performance
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-bold mb-4 text-gray-700">Styled List</h4>
          <ul className="space-y-3">
            <li className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all cursor-pointer transform hover:scale-105 shadow-sm text-lg font-semibold">🚀 Easy to customize</li>
            <li className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg hover:from-purple-100 hover:to-purple-200 transition-all cursor-pointer transform hover:scale-105 shadow-sm text-lg font-semibold">🎯 Utility-first approach</li>
            <li className="p-4 bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg hover:from-pink-100 hover:to-pink-200 transition-all cursor-pointer transform hover:scale-105 shadow-sm text-lg font-semibold">💎 Modern UI patterns</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ListStyling;
