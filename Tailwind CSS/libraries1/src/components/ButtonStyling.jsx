// 1. Button Styling Component
function ButtonStyling() {
  return (
    <div className="p-8">
      <h3 className="text-4xl font-bold mb-8 text-gray-800 flex items-center gap-3">
        <span className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg"></span>
        Button Styling
      </h3>
      <div className="flex flex-wrap gap-6">
        <button className="px-10 py-4 rounded-xl bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition-all duration-200 font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-lg">
          Click Me
        </button>
        <button className="px-10 py-4 rounded-xl bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-lg">
          Primary Button
        </button>
        <button className="px-10 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 active:from-purple-700 active:to-pink-700 transition-all duration-200 font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-lg">
          Gradient Button
        </button>
      </div>
    </div>
  );
}

export default ButtonStyling;
