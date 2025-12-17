import { useState } from 'react'

function Calculator() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [operation, setOperation] = useState('add')
  const [results, setResults] = useState([])

  const performAction = () => {
    const a = parseFloat(num1)
    const b = parseFloat(num2)

    if (isNaN(a) || isNaN(b)) {
      setResults(prev => [...prev, 'Please enter valid numbers'])
      return
    }

    let result
    let symbol
    switch (operation) {
      case 'add':
        result = a + b
        symbol = '+'
        break
      case 'subtract':
        result = a - b
        symbol = '-'
        break
      case 'multiply':
        result = a * b
        symbol = '×'
        break
      default:
        result = 'Unknown operation'
        symbol = '?'
    }

    const entry = `${a} ${symbol} ${b} = ${result}`
    setResults(prev => [...prev, entry])
  }

  return (
    <div className="calc-card">
      <div className="calc-controls">
        <input
          className="calc-input"
          type="number"
          step="any"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="First number"
        />

        <select
          className="calc-select"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
        </select>

        <input
          className="calc-input"
          type="number"
          step="any"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Second number"
        />
      </div>

      <button className="calc-button" onClick={performAction}>
        Perform Action
      </button>

      <div className="calc-results">
        <h4>Results</h4>
        <ul>
          {results.map((r, idx) => (
            <li key={idx} className="calc-result-item">{r}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Calculator
