import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Component6 from './Component6'

function Component5() {

  const { f } = useContext(AppContext)

  return (
    <div style={{ border: '2px solid red', padding: '20px', margin: '10px' }}>
      <h3>Component5 (Consumer)</h3>
      <h4>This is prop f: {f}</h4>
      <Component6 />
    </div>
  )
}

export default Component5
