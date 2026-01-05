// 3. Responsive Text
function ResponsiveText() {
  return (
    <div className="p-8">
      <h3 className="text-4xl font-bold mb-8 text-gray-800 flex items-center gap-3">
        <span className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg"></span>
        Responsive Text
      </h3>
      <div className="space-y-6">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Responsive Gradient Heading
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl leading-relaxed">
          This text scales beautifully across different screen sizes. Try resizing your browser to see it in action!
        </p>
        <div className="flex flex-wrap gap-3 text-base md:text-lg">
          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold">text-3xl on mobile</span>
          <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-semibold">text-5xl on tablets</span>
          <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full font-semibold">text-7xl on desktop</span>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveText;
