import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Component4 from './Component4'

function Component3() {
  const { a, b } = useContext(AppContext)

  return (
    <div style={{ border: '2px solid orange', padding: '20px', margin: '10px' }}>
      <h3>Component3 (Consumer)</h3>
      <h4>This is prop a: {a}</h4>
      <h4>This is prop b: {b}</h4>
      <Component4 />
    </div>
  )
}

export default Component3
