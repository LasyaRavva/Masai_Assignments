import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Todos = ({ onLogout }) => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos?_limit=10',
        )
        if (!response.ok) {
          throw new Error('Could not load todos')
        }
        const data = await response.json()
        setTodos(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchTodos()
  }, [])

  const handleLogout = () => {
    onLogout()
    navigate('/login')
  }

  if (loading) {
    return <p className="status">Loading todos...</p>
  }

  if (error) {
    return <p className="status error">{error}</p>
  }

  return (
    <section className="page">
      <header className="page-header">
        <div>
          <p className="eyebrow">Protected</p>
          <h1>Your Todos</h1>
        </div>
        <button className="ghost" type="button" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <div className="todo-grid">
        {todos.map((todo) => (
          <Link key={todo.id} className="todo-card" to={`/todos/${todo.id}`}>
            <p className="todo-id">#{todo.id}</p>
            <p className="todo-title">{todo.title}</p>
            <span className={todo.completed ? 'badge done' : 'badge pending'}>
              {todo.completed ? 'Completed' : 'Not Completed'}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Todos
