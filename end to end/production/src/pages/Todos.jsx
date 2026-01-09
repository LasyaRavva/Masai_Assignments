import { useEffect, useMemo, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import TodoDetail from '../components/TodoDetail'
import Footer from '../components/Footer'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import {
  subscribeToTodos,
  addTodo,
  toggleTodoStatus,
  updateTodoTitle,
  deleteTodo,
} from '../services/todo.service'

export default function TodosPage() {
  const { user, logout } = useAuth()
  const [todos, setTodos] = useState([])
  const [selectedId, setSelectedId] = useState(null)
  const [filter, setFilter] = useState('all')
  const [newTitle, setNewTitle] = useState('')

  useEffect(() => {
    if (!user) return
    const unsub = subscribeToTodos(user.uid, setTodos)
    return () => unsub()
  }, [user])

  useEffect(() => {
    if (todos.length && !selectedId) setSelectedId(todos[0].id)
  }, [todos, selectedId])

  const filtered = useMemo(() => {
    if (filter === 'completed') return todos.filter((t) => t.completed)
    if (filter === 'pending') return todos.filter((t) => !t.completed)
    return todos
  }, [todos, filter])

  const selected = todos.find((t) => t.id === selectedId) || null

  const handleAdd = async () => {
    if (!newTitle.trim()) return
    await addTodo(user.uid, newTitle.trim())
    setNewTitle('')
  }

  const handleToggle = async (completed) => {
    if (!selected) return
    await toggleTodoStatus(selected.id, completed)
  }

  const handleDelete = async () => {
    if (!selected) return
    await deleteTodo(selected.id)
    setSelectedId(null)
  }

  const handleUpdate = async (title) => {
    if (!selected) return
    if (!title.trim()) return
    await updateTodoTitle(selected.id, title.trim())
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar
        filter={filter}
        onFilterChange={setFilter}
        isAuthenticated={!!user}
        onAuthClick={logout}
      />
      <div className="flex flex-1">
        <Sidebar todos={filtered} selectedId={selectedId} onSelect={setSelectedId} />
        <main className="flex-1">
          <div className="border-b border-gray-200 bg-white p-4 flex gap-2">
            <Input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Add a new todo"
            />
            <Button onClick={handleAdd}>Add</Button>
          </div>
          <TodoDetail
            todo={selected}
            onToggle={handleToggle}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        </main>
      </div>
      <Footer />
    </div>
  )
}
