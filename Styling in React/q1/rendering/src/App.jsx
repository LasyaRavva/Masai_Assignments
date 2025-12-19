import { useState } from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import './App.css'

function App() {
  const [status, setStatus] = useState(false)

  const toggleStatus = () => {
    setStatus(!status)
  }

  return (
    <>
      <h1>Conditional Rendering - Status Toggle</h1>
      <div className="card">
        <button onClick={toggleStatus}>Toggle Status</button>
        {status ? <ComponentA /> : <ComponentB />}
      </div>
    </>
  )
}

export default App
