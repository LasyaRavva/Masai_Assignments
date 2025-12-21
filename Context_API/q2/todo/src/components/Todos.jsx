import { useState, useCallback } from 'react'
import { TodoContext } from '../context/TodoContext.jsx'
import AddTodo from './AddTodo.jsx'
import TodoList from './TodoList.jsx'

export default function Todos() {
  const [todos, setTodos] = useState([])

  const addTodo = useCallback((title) => {
    const trimmed = title.trim()
    if (!trimmed) return
    const newTodo = { id: Date.now(), title: trimmed }
    setTodos((prev) => [newTodo, ...prev])
  }, [])

  const deleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      <div style={{ maxWidth: 480, margin: '40px auto', fontFamily: 'system-ui' }}>
        <h2 style={{ textAlign: 'center' }}>Todo (Context API)</h2>
        <AddTodo />
        <TodoList />
      </div>
    </TodoContext.Provider>
  )
}
