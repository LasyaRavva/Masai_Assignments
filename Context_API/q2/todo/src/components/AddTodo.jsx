import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext.jsx'

export default function AddTodo() {
  const { addTodo } = useContext(TodoContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const title = form.title.value
    addTodo(title)
    form.reset()
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8 }}>
      <input
        name="title"
        placeholder="Enter todo"
        aria-label="Todo title"
        style={{ flex: 1, padding: '8px 10px' }}
      />
      <button type="submit" style={{ padding: '8px 14px' }}>Add</button>
    </form>
  )
}
