import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const TodoDetails = () => {
  const { todoId } = useParams()
  const [todo, setTodo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${todoId}`,
        )
        if (!response.ok) {
          throw new Error('Todo not found')
        }
        const data = await response.json()
        setTodo(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchTodo()
  }, [todoId])

  if (loading) {
    return <p className="status">Loading todo...</p>
  }

  if (error) {
    return <p className="status error">{error}</p>
  }

  return (
    <section className="page">
      <Link className="back-link" to="/todos">
        ← Back to todos
      </Link>
      <div className="detail-card">
        <p className="eyebrow">Todo ID: {todo.id}</p>
        <h1>{todo.title}</h1>
        <p className={todo.completed ? 'badge done' : 'badge pending'}>
          {todo.completed ? 'Completed' : 'Not Completed'}
        </p>
      </div>
    </section>
  )
}

export default TodoDetails
