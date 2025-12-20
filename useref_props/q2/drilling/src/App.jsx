import './App.css'
import Component1 from './components/Component1'

/**
 * App Component - Root Component
 * 
 * This component passes 6 different props (a, b, c, d, e, f) down the component tree.
 * These props will "drill" through multiple levels of components, even though many
 * components in between don't actually use them - they just pass them along.
 */
function App() {
  return (
    <div className="app">
      <h2>Props Drilling Demo</h2>
      <p>Showing how props pass through unused components.</p>
      {/* Passing all 6 props starting the drill */}
      <Component1 a="Alpha" b="Beta" c="Gamma" d="Delta" e="Epsilon" f="Phi" />
    </div>
  )
}

export default App
