import Component3 from './Component3'

function Component2() {
  return (
    <div style={{ border: '2px solid green', padding: '20px', margin: '10px' }}>
      <h3>Component2 (Middleman)</h3>
      <p>This component is unaware of any data - no props received!</p>
      <Component3 />
    </div>
  )
}

export default Component2
