import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, Input, Button, Checkbox } from '../ui/index.js'

export function TodoList() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const handleAddTodo = () => {
    if (input.trim()) {
      setTodos((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: input,
          completed: false
        }
      ])
      setInput('')
    }
  }

  const handleToggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo()
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Todo List</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Add a new todo..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <Button onClick={handleAddTodo}>Add</Button>
          </div>

          {todos.length > 0 ? (
            <div className="space-y-2">
              {todos.map((todo) => (
                <div
                  key={todo.id}
                  className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors"
                >
                  <Checkbox
                    checked={todo.completed}
                    onChange={() => handleToggleTodo(todo.id)}
                  />
                  <span
                    className={`flex-1 ${
                      todo.completed
                        ? 'line-through text-slate-400'
                        : 'text-slate-900'
                    }`}
                  >
                    {todo.text}
                  </span>
                  <Button
                    onClick={() => handleDeleteTodo(todo.id)}
                    variant="destructive"
                    size="sm"
                    className="bg-red-500 hover:bg-red-600 text-white h-8 px-3"
                  >
                    Delete
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-slate-400 py-8">No todos yet. Add one to get started!</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
