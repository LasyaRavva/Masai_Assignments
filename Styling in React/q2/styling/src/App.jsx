import { useState } from 'react'
import './App.css'

function App() {
  const [isRed, setIsRed] = useState(true)

  const toggleColor = () => {
    setIsRed(!isRed)
  }

  const divStyle = {
    backgroundColor: isRed ? 'red' : 'blue',
    padding: '40px',
    borderRadius: '8px',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
    minHeight: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  return (
    <>
      <h1>Conditional Styling - Color Toggle</h1>
      <div style={divStyle}>
        This div color is {isRed ? 'RED' : 'BLUE'}
      </div>
      <button onClick={toggleColor}>
        Toggle Color
      </button>
    </>
  )
}

export default App
