import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('feedback')
  const [formData, setFormData] = useState({ name: '', email: '', feedback: '' })
  const [submissions, setSubmissions] = useState([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [todos, setTodos] = useState([])
  const [todoInput, setTodoInput] = useState('')

  const images = [
    'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&h=400&fit=crop'
  ]

  // Feedback Form Handlers
  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.feedback) {
      setSubmissions((prev) => [...prev, { ...formData, id: Date.now() }])
      setFormData({ name: '', email: '', feedback: '' })
    }
  }

  // Image Slideshow Handlers
  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  // Todo Handlers
  const handleAddTodo = () => {
    if (todoInput.trim()) {
      setTodos((prev) => [...prev, { id: Date.now(), text: todoInput, completed: false }])
      setTodoInput('')
    }
  }

  const handleToggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const handleTodoKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center mb-2 text-slate-900">
          ShadCN/UI Components Demo
        </h1>
        <p className="text-center text-slate-600 mb-6 text-sm">
          Practice building apps with shadcn/ui components
        </p>

        {/* Navigation Tabs */}
        <div className="flex gap-2 justify-center mb-8 flex-wrap">
          {[
            { id: 'feedback', label: 'Feedback Form' },
            { id: 'slideshow', label: 'Image Slideshow' },
            { id: 'todo', label: 'Todo List' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg w-full">
          {activeTab === 'feedback' && (
            <div className="w-full p-2">
              <div className="rounded-lg border border-slate-200 bg-white p-2 mb-3">
                <h2 className="text-2xl font-semibold mb-6">Feedback Form</h2>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="mt-1 w-full h-10 rounded-md border border-slate-300 bg-white px-3 py-2 text-base"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="mt-1 w-full h-10 rounded-md border border-slate-300 bg-white px-3 py-2 text-base"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Feedback</label>
                    <textarea
                      name="feedback"
                      placeholder="Enter your feedback"
                      value={formData.feedback}
                      onChange={handleFormChange}
                      className="mt-1 w-full min-h-[80px] rounded-md border border-slate-300 bg-white px-3 py-2 text-base"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full h-10 rounded-md bg-slate-900 text-white hover:bg-slate-800 font-medium"
                  >
                    Submit Feedback
                  </button>
                </form>
              </div>

              {submissions.length > 0 && (
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Submitted Feedback</h3>
                  <div className="space-y-4">
                    {submissions.map((submission) => (
                      <div
                        key={submission.id}
                        className="rounded-lg border border-slate-200 bg-white p-6"
                      >
                        <p className="font-semibold">
                          <span className="text-slate-600">Name:</span> {submission.name}
                        </p>
                        <p className="font-semibold">
                          <span className="text-slate-600">Email:</span> {submission.email}
                        </p>
                        <p className="font-semibold">
                          <span className="text-slate-600">Feedback:</span> {submission.feedback}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'slideshow' && (
            <div className="w-full p-2">
              <div className="rounded-lg border border-slate-200 bg-white p-2">
                <h2 className="text-2xl font-semibold mb-6">Image Slideshow</h2>
                <div className="relative bg-slate-100 rounded-lg overflow-hidden">
                  <img
                    src={images[currentImageIndex]}
                    alt={`Slide ${currentImageIndex + 1}`}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                </div>
                <div className="flex gap-4 justify-between mt-6">
                  <button
                    onClick={goToPrevious}
                    className="px-6 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 font-medium"
                  >
                    ← Previous
                  </button>
                  <div className="flex gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-slate-800' : 'bg-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={goToNext}
                    className="px-6 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 font-medium"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'todo' && (
            <div className="w-full p-2">
              <div className="rounded-lg border border-slate-200 bg-white p-2">
                <h2 className="text-2xl font-semibold mb-3">Todo List</h2>
                <div className="flex gap-2 mb-6">
                  <input
                    type="text"
                    placeholder="Add a new todo..."
                    value={todoInput}
                    onChange={(e) => setTodoInput(e.target.value)}
                    onKeyPress={handleTodoKeyPress}
                    className="flex-1 h-10 rounded-md border border-slate-300 bg-white px-3 py-2 text-base"
                  />
                  <button
                    onClick={handleAddTodo}
                    className="px-6 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 font-medium"
                  >
                    Add
                  </button>
                </div>

                {todos.length > 0 ? (
                  <div className="space-y-2">
                    {todos.map((todo) => (
                      <div
                        key={todo.id}
                        className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200 hover:bg-slate-100"
                      >
                        <input
                          type="checkbox"
                          checked={todo.completed}
                          onChange={() => handleToggleTodo(todo.id)}
                          className="h-4 w-4 rounded border-slate-300 cursor-pointer accent-slate-900"
                        />
                        <span
                          className={`flex-1 ${
                            todo.completed
                              ? 'line-through text-slate-400'
                              : 'text-slate-900'
                          }`}
                        >
                          {todo.text}
                        </span>
                        <button
                          onClick={() => handleDeleteTodo(todo.id)}
                          className="px-3 h-8 rounded text-white bg-red-500 hover:bg-red-600 text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-slate-400 py-8">
                    No todos yet. Add one to get started!
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
