import { useState } from 'react'
import './App.css'
import ButtonStyling from './components/ButtonStyling'
import ImageHover from './components/ImageHover'
import ResponsiveText from './components/ResponsiveText'
import ListStyling from './components/ListStyling'
import CardComponent from './components/CardComponent'
import TableStyling from './components/TableStyling'
import InputForm from './components/InputForm'
import NavigationBar from './components/NavigationBar'
import ResponsiveGrid from './components/ResponsiveGrid'
import MiniResponsivePage from './components/MiniResponsivePage'

function App() {
  const [showMiniPage, setShowMiniPage] = useState(false)

  if (showMiniPage) {
    return (
      <div>
        <div className="fixed top-6 left-6 z-50">
          <button 
            onClick={() => setShowMiniPage(false)}
            className="group px-8 py-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white rounded-2xl hover:from-gray-700 hover:via-gray-800 hover:to-gray-900 shadow-2xl font-bold transform hover:scale-105 transition-all duration-300 border-2 border-white/10"
          >
            <span className="flex items-center gap-3">
              <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
              Back to Components
            </span>
          </button>
        </div>
        <MiniResponsivePage />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-16 px-4 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -right-4 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block mb-4">
            <span className="text-7xl animate-bounce">✨</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 drop-shadow-2xl">
            Tailwind CSS Basics Exploration
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-8 opacity-95">
            ✨ Exploring Tailwind CSS utilities with styled UI elements ✨
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-lg font-semibold border border-white/30">Responsive</span>
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-lg font-semibold border border-white/30">Modern</span>
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-lg font-semibold border border-white/30">Beautiful</span>
          </div>
        </div>
      </header>

      {/* Toggle Button */}
      <div className="container mx-auto px-4 py-10">
        <div className="text-center">
          <button 
            onClick={() => setShowMiniPage(true)}
            className="group relative px-12 py-6 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white rounded-2xl hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 shadow-2xl hover:shadow-emerald-500/50 font-bold text-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
            <span className="relative flex items-center gap-3">
              <span className="text-3xl">🚀</span>
              View Complete Mini Responsive Page
              <span className="text-3xl group-hover:translate-x-2 transition-transform">→</span>
            </span>
          </button>
          <p className="mt-6 text-gray-600 text-xl">Click to see all components combined in one beautiful page</p>
        </div>
      </div>

      {/* Individual Components */}
      <main className="container mx-auto px-4 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-4">
            Component Showcase
          </h2>
          <p className="text-gray-600 text-2xl">Explore each Tailwind CSS component individually</p>
        </div>
        <div className="grid grid-cols-1 gap-10">
          {/* Component 1 */}
          <div className="bg-white rounded-3xl shadow-2xl hover:shadow-blue-200 transition-all duration-300 border border-gray-100">
            <ButtonStyling />
          </div>

          {/* Component 2 */}
          <div className="bg-white rounded-3xl shadow-2xl hover:shadow-purple-200 transition-all duration-300 border border-gray-100">
            <ImageHover />
          </div>

          {/* Component 3 */}
          <div className="bg-white rounded-3xl shadow-2xl hover:shadow-pink-200 transition-all duration-300 border border-gray-100">
            <ResponsiveText />
          </div>

          {/* Component 4 */}
          <div className="bg-white rounded-3xl shadow-2xl hover:shadow-blue-200 transition-all duration-300 border border-gray-100">
            <ListStyling />
          </div>

          {/* Component 5 */}
          <div className="bg-white rounded-3xl shadow-2xl hover:shadow-purple-200 transition-all duration-300 border border-gray-100">
            <CardComponent />
          </div>

          {/* Component 6 */}
          <div className="bg-white rounded-3xl shadow-2xl hover:shadow-pink-200 transition-all duration-300 border border-gray-100">
            <TableStyling />
          </div>

          {/* Component 7 */}
          <div className="bg-white rounded-3xl shadow-2xl hover:shadow-blue-200 transition-all duration-300 border border-gray-100">
            <InputForm />
          </div>

          {/* Component 8 */}
          <div className="bg-white rounded-3xl shadow-2xl hover:shadow-purple-200 transition-all duration-300 border border-gray-100">
            <NavigationBar />
          </div>

          {/* Component 9 */}
          <div className="bg-white rounded-3xl shadow-2xl hover:shadow-pink-200 transition-all duration-300 border border-gray-100">
            <ResponsiveGrid />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-12 px-4 mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-6">
            <span className="text-5xl">✨</span>
          </div>
          <p className="text-2xl font-semibold mb-3">
            ✨ Tailwind CSS Assignment - All components are responsive and beautifully styled ✨
          </p>
          <p className="text-gray-400 text-xl mb-8">
            Created with love using Tailwind CSS utilities
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all transform hover:scale-110 text-2xl">
              📘
            </a>
            <a href="#" className="w-14 h-14 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all transform hover:scale-110 text-2xl">
              🐦
            </a>
            <a href="#" className="w-14 h-14 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all transform hover:scale-110 text-2xl">
              📷
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

