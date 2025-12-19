import { useState, useEffect } from 'react'
import TodoCard from './TodoCard'

function TodosList() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch todos on component mount
    const fetchTodos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        setTodos(data.slice(0, 15)) // Get first 15 todos
        setLoading(false)
      } catch (error) {
        console.error('Error fetching todos:', error)
        setLoading(false)
      }
    }

    fetchTodos()

    // Cleanup function - runs when component unmounts
    return () => {
      alert('cleanup worked')
    }
  }, [])

  if (loading) {
    return <p>Loading todos...</p>
  }

  return (
    <div style={{
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto',
    }}>
      <h2>Todo List (First 15 Todos)</h2>
      <div>
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            userId={todo.userId}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
      </div>
    </div>
  )
}

export default TodosList
