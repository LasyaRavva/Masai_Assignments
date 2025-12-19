import { useState } from 'react'
import TodosList from './TodosList'
import './App.css'

function App() {
  const [showTodos, setShowTodos] = useState(true)

  const toggleTodos = () => {
    setShowTodos(!showTodos)
  }

  return (
    <>
      <h1>Todo App with Cleanup</h1>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button onClick={toggleTodos} style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}>
          {showTodos ? 'Unmount Todos' : 'Mount Todos'}
        </button>
      </div>
      {showTodos && <TodosList />}
    </>
  )
}

export default App
