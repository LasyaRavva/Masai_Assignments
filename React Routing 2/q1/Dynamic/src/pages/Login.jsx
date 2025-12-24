import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const VALID_EMAIL = 'admin@gmail.com'
const VALID_PASSWORD = 'admin@123'

const Login = ({ isLoggedIn, onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/todos', { replace: true })
    }
  }, [isLoggedIn, navigate])

  const handleSubmit = (event) => {
    event.preventDefault()
    setError('')

    const isValidUser = email === VALID_EMAIL && password === VALID_PASSWORD

    if (!isValidUser) {
      setError('Invalid email or password')
      return
    }

    onLogin()
    navigate('/todos')
  }

  return (
    <section className="page auth-page">
      <h1>Login</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            placeholder="admin@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="admin@123"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
        {error ? <p className="error">{error}</p> : null}
      </form>
    </section>
  )
}

export default Login
