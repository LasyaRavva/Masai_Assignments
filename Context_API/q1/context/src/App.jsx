import './App.css'
import Component1 from './components/Component1'

function App() {
  return (
    <div className="app">
      <h1>Context API Demo - Solving Props Drilling</h1>
      <p style={{ marginBottom: '20px' }}>
        Notice how Component2 doesn't receive or pass any props, yet deeply nested 
        components can access the data they need!
      </p>
      <Component1 />
    </div>
  )
}

export default App
