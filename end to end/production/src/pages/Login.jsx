import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await login(email, password)
      navigate('/todos')
    } catch (err) {
      setError(err.message || 'Login failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm rounded-xl bg-white p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300">
        <h1 className="mb-6 text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Welcome Back</h1>
        {error && <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-600">{error}</div>}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="h-11" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Password</label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="h-11" />
          </div>
          <Button type="submit" className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg mt-2">Sign In</Button>
        </div>
        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account? <Link to="/signup" className="text-blue-600 hover:text-blue-700 font-semibold hover:underline">Sign up</Link>
        </div>
      </form>
    </div>
  )
}
