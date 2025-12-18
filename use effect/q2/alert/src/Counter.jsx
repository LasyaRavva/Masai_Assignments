import { useState, useEffect } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count !== 0 && count % 3 === 0) {
      alert(`The current number ${count} is divisible by 3`)
    }
  }, [count])

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h2>Counter Application</h2>
        <div className="counter-display">
          <h3>{count}</h3>
        </div>
        <button onClick={() => setCount(count + 1)} className="increment-btn">
          Increment Count
        </button>
      </div>
    </div>
  )
}

export default Counter
