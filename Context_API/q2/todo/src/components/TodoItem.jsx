import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext.jsx'

export default function TodoItem({ todo }) {
  const { deleteTodo } = useContext(TodoContext)

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <span style={{ flex: 1 }}>{todo.title}</span>
      <button onClick={() => deleteTodo(todo.id)} style={{ padding: '6px 10px' }}>
        Delete
      </button>
    </div>
  )
}
