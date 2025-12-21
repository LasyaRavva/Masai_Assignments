import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Component5 from './Component5'

function Component4() {
  const { c, d } = useContext(AppContext)

  return (
    <div style={{ border: '2px solid purple', padding: '20px', margin: '10px' }}>
      <h3>Component4 (Consumer)</h3>
      <h4>This is prop c: {c}</h4>
      <h4>This is prop d: {d}</h4>
      <Component5 />
    </div>
  )
}

export default Component4
