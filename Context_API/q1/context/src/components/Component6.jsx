import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Component6() {

  const { e } = useContext(AppContext)

  return (
    <div style={{ border: '2px solid teal', padding: '20px', margin: '10px' }}>
      <h3>Component6 (Consumer - Deepest)</h3>
      <h4>This is prop e: {e}</h4>
    </div>
  )
}

export default Component6
