// 7. Input Form
function InputForm() {
  return (
    <div className="p-8">
      <h3 className="text-4xl font-bold mb-8 text-gray-800 flex items-center gap-3">
        <span className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg"></span>
        Input Form
      </h3>
      <div className="max-w-2xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 p-10 rounded-2xl shadow-xl">
        <form className="space-y-8">
          <div>
            <label className="block text-lg font-bold text-gray-700 mb-3">Full Name</label>
            <input 
              type="text" 
              placeholder="Enter your full name"
              className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm hover:shadow-md text-lg"
            />
          </div>
          <div>
            <label className="block text-lg font-bold text-gray-700 mb-3">Email Address</label>
            <input 
              type="email" 
              placeholder="your.email@example.com"
              className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all shadow-sm hover:shadow-md text-lg"
            />
          </div>
          <div>
            <label className="block text-lg font-bold text-gray-700 mb-3">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all shadow-sm hover:shadow-md text-lg"
            />
          </div>
          <div>
            <label className="block text-lg font-bold text-gray-700 mb-3">Message</label>
            <textarea 
              rows="5"
              placeholder="Tell us about your project..."
              className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm hover:shadow-md resize-none text-lg"
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full px-8 py-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 active:from-blue-700 active:via-purple-700 active:to-pink-700 transition-all shadow-lg hover:shadow-xl font-bold text-xl transform hover:-translate-y-0.5"
          >
            Submit Form ✨
          </button>
        </form>
      </div>
    </div>
  );
}

export default InputForm;
