import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext.jsx'
import TodoItem from './TodoItem.jsx'

export default function TodoList() {
  const { todos } = useContext(TodoContext)

  if (!todos.length) {
    return <p style={{ opacity: 0.7, marginTop: 16 }}>No todos yet. Add one above.</p>
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0, marginTop: 16 }}>
      {todos.map((todo) => (
        <li key={todo.id} style={{ marginBottom: 8 }}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  )
}
