import { useState } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import TodoDetails from './pages/TodoDetails'
import Todos from './pages/Todos'
import './App.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem('isLoggedIn') === 'true',
  )

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true')
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
  }

  return (
    <div className="app-shell">
      <nav className="top-nav">
        <Link className="brand" to="/">
          RouteLab
        </Link>
        <div className="nav-actions">
          <Link to="/">Home</Link>
          <Link to="/todos">Todos</Link>
          {isLoggedIn ? (
            <button type="button" className="ghost" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link className="primary-link" to="/login">
              Login
            </Link>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login isLoggedIn={isLoggedIn} onLogin={handleLogin} />}
        />

        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
          <Route path="/todos" element={<Todos onLogout={handleLogout} />} />
          <Route path="/todos/:todoId" element={<TodoDetails />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
