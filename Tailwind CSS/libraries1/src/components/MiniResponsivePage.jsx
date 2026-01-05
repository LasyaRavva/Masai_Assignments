// 10. Mini Responsive Page (Combining All)
import ButtonStyling from './ButtonStyling';
import ImageHover from './ImageHover';
import ResponsiveText from './ResponsiveText';
import ListStyling from './ListStyling';
import CardComponent from './CardComponent';
import TableStyling from './TableStyling';
import InputForm from './InputForm';
import ResponsiveGrid from './ResponsiveGrid';

function MiniResponsivePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white p-6 sticky top-0 z-50 shadow-2xl backdrop-blur-lg">
        <div className="container mx-auto flex items-center justify-between flex-col md:flex-row gap-4">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            TailwindCSS
          </div>
          <ul className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 text-center">
            <li>
              <a href="#home" className="hover:text-blue-400 transition-all font-bold text-lg hover:scale-110 inline-block">🏠 Home</a>
            </li>
            <li>
              <a href="#features" className="hover:text-purple-400 transition-all font-bold text-lg hover:scale-110 inline-block">✨ Features</a>
            </li>
            <li>
              <a href="#team" className="hover:text-pink-400 transition-all font-bold text-lg hover:scale-110 inline-block">👥 Team</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-400 transition-all font-bold text-lg hover:scale-110 inline-block">📧 Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-pulse">
            <span className="bg-gradient-to-r from-yellow-200 via-pink-200 to-blue-200 text-transparent bg-clip-text">
              Welcome to Tailwind CSS Showcase
            </span>
          </h1>
          <p className="text-2xl md:text-3xl mb-12 max-w-3xl mx-auto font-light">
            ✨ Explore the power of utility-first CSS framework with beautiful, responsive components ✨
          </p>
          <div className="flex justify-center mb-8">
            <img 
              src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&h=500&fit=crop" 
              alt="Hero" 
              className="rounded-2xl shadow-2xl max-w-full h-auto transition-all duration-500 hover:scale-105 hover:rotate-1 border-4 border-white/20"
            />
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-10 py-5 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-all font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-xl">
              Get Started →
            </button>
            <button className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white hover:text-blue-600 transition-all font-bold shadow-xl transform hover:-translate-y-1 text-xl">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section - 3 Cards in Grid */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Our Amazing Features
            </h2>
            <p className="text-gray-600 text-2xl max-w-2xl mx-auto">
              Discover what makes our platform the best choice for your projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop" 
                  alt="Responsive Design" 
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Popular
                </div>
              </div>
              <div className="p-8">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-lg">
                  📱
                </div>
                <h3 className="text-3xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">Responsive Design</h3>
                <p className="text-gray-600 mb-6 text-xl">
                  Built with mobile-first approach ensuring perfect display on all devices and screen sizes.
                </p>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg font-bold text-lg">
                  Learn More →
                </button>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop" 
                  alt="Utility Classes" 
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Featured
                </div>
              </div>
              <div className="p-8">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-lg">
                  ⚡
                </div>
                <h3 className="text-3xl font-bold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors">Utility Classes</h3>
                <p className="text-gray-600 mb-6 text-xl">
                  Leverage powerful utility classes for rapid UI development and consistent styling.
                </p>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all shadow-md hover:shadow-lg font-bold text-lg">
                  Explore Now →
                </button>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400&h=250&fit=crop" 
                  alt="Modern UI" 
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Trending
                </div>
              </div>
              <div className="p-8">
                <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-lg">
                  🎨
                </div>
                <h3 className="text-3xl font-bold mb-3 text-gray-800 group-hover:text-pink-600 transition-colors">Modern UI</h3>
                <p className="text-gray-600 mb-6 text-xl">
                  Create beautiful, modern interfaces with minimal custom CSS and maximum flexibility.
                </p>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl hover:from-pink-600 hover:to-pink-700 transition-all shadow-md hover:shadow-lg font-bold text-lg">
                  Get Started →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table Section */}
      <section id="team" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Our Team Members
            </h2>
            <p className="text-gray-600 text-2xl max-w-2xl mx-auto">
              Meet the talented people behind our success
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl shadow-2xl">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <th className="px-8 py-5 text-left font-bold text-xl">Name</th>
                  <th className="px-8 py-5 text-left font-bold text-xl">Email</th>
                  <th className="px-8 py-5 text-left font-bold text-xl">Role</th>
                  <th className="px-8 py-5 text-left font-bold text-xl">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-gray-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all">
                  <td className="px-8 py-5 font-bold text-gray-800 text-lg">John Doe</td>
                  <td className="px-8 py-5 text-gray-600 text-lg">john@example.com</td>
                  <td className="px-8 py-5">
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-base font-bold shadow-md">👨‍💻 Developer</span>
                  </td>
                  <td className="px-8 py-5">
                    <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-base font-bold">● Active</span>
                  </td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all">
                  <td className="px-8 py-5 font-bold text-gray-800 text-lg">Jane Smith</td>
                  <td className="px-8 py-5 text-gray-600 text-lg">jane@example.com</td>
                  <td className="px-8 py-5">
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full text-base font-bold shadow-md">🎨 Designer</span>
                  </td>
                  <td className="px-8 py-5">
                    <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-base font-bold">● Active</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all">
                  <td className="px-8 py-5 font-bold text-gray-800 text-lg">Mike Johnson</td>
                  <td className="px-8 py-5 text-gray-600 text-lg">mike@example.com</td>
                  <td className="px-8 py-5">
                    <span className="px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full text-base font-bold shadow-md">👔 Manager</span>
                  </td>
                  <td className="px-8 py-5">
                    <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-base font-bold">● Away</span>
                  </td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all">
                  <td className="px-8 py-5 font-bold text-gray-800 text-lg">Sarah Williams</td>
                  <td className="px-8 py-5 text-gray-600 text-lg">sarah@example.com</td>
                  <td className="px-8 py-5">
                    <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full text-base font-bold shadow-md">📊 Analyst</span>
                  </td>
                  <td className="px-8 py-5">
                    <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-base font-bold">● Active</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Get In Touch
            </h2>
            <p className="text-gray-600 text-lg">
              Have a question? We'd love to hear from you. Send us a message!
            </p>
          </div>
          <form className="bg-white p-10 rounded-2xl shadow-2xl space-y-6 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                <input 
                  type="text" 
                  placeholder="John"
                  className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                <input 
                  type="text" 
                  placeholder="Doe"
                  className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                placeholder="john.doe@example.com"
                className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:bg-white transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
              <input 
                type="tel" 
                placeholder="+1 (555) 123-4567"
                className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent focus:bg-white transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
              <textarea 
                rows="5"
                placeholder="Tell us about your project or inquiry..."
                className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all resize-none"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full px-8 py-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 active:from-blue-700 active:via-purple-700 active:to-pink-700 transition-all font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Send Message ✨
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">TailwindCSS</h3>
              <p className="text-gray-400 text-lg">Building beautiful, responsive interfaces with utility-first CSS.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-xl">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors text-lg">Home</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors text-lg">Features</a></li>
                <li><a href="#team" className="text-gray-400 hover:text-white transition-colors text-lg">Team</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors text-lg">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-xl">Connect With Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all transform hover:scale-110 text-xl">
                  📘
                </a>
                <a href="#" className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all transform hover:scale-110 text-xl">
                  🐦
                </a>
                <a href="#" className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all transform hover:scale-110 text-xl">
                  📷
                </a>
                <a href="#" className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-all transform hover:scale-110 text-xl">
                  ▶️
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-xl">
              © 2026 Tailwind CSS Showcase. All rights reserved.
            </p>
            <p className="text-gray-500 text-lg mt-2">
              Built with ❤️ using Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MiniResponsivePage;
