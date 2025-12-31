import { useState, lazy, Suspense } from 'react'
import './App.css'

// Lazy load the HeavyComponent
// This component will only be loaded when it's needed
const HeavyComponent = lazy(() => import('./HeavyComponent'))

function App() {
  const [counter, setCounter] = useState(0)
  const [showHeavyComponent, setShowHeavyComponent] = useState(false)

  const incrementCounter = () => {
    console.log('⚡ Counter incremented - Parent re-rendered');
    setCounter(prev => prev + 1)
  }

  const toggleHeavyComponent = () => {
    setShowHeavyComponent(prev => !prev)
  }

  return (
    <div className="app">
      <header className="header">
        <h1>⚛️ React Performance Optimization</h1>
        <p className="subtitle">Demonstrating React.memo & Lazy Loading</p>
      </header>

      <div className="counter-section">
        <h2>Counter Demo</h2>
        <div className="counter-display">
          <span className="counter-value">{counter}</span>
        </div>
        <button onClick={incrementCounter} className="btn btn-primary">
          Increment Counter
        </button>
        <p className="hint">
          Click to increment - Heavy component won't re-render! 🎯
        </p>
      </div>

      <div className="control-section">
        <button onClick={toggleHeavyComponent} className="btn btn-secondary">
          {showHeavyComponent ? 'Hide' : 'Load'} Heavy Component
        </button>
        <p className="hint">
          {!showHeavyComponent && "Click to lazy load the heavy component 🚀"}
        </p>
      </div>

      {showHeavyComponent && (
        <Suspense fallback={
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading Heavy Component...</p>
          </div>
        }>
          <HeavyComponent />
        </Suspense>
      )}

      <div className="instructions">
        <h3>📋 Instructions:</h3>
        <ol>
          <li>Open the browser console (F12)</li>
          <li>Click "Load Heavy Component" to lazy load it</li>
          <li>Notice the console log showing the component rendered</li>
          <li>Click "Increment Counter" multiple times</li>
          <li>Check console - Heavy Component does NOT re-render! ✅</li>
        </ol>
      </div>
    </div>
  )
}

export default App
