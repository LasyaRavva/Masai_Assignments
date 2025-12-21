import { AppContext } from '../context/AppContext'
import Component2 from './Component2'

function Component1() {
  const contextValues = {
    a: "Alpha",
    b: "Beta",
    c: "Gamma",
    d: "Delta",
    e: "Epsilon",
    f: "Phi"
  }

  return (
    <AppContext.Provider value={contextValues}>
      <div style={{ border: '2px solid blue', padding: '20px', margin: '10px' }}>
        <h3>Component1 (Provider)</h3>
        <p>Provides context values to all descendants</p>
        <Component2 />
      </div>
    </AppContext.Provider>
  )
}

export default Component1
