import Component3 from './Component3'

function Component2(props) {
  const { a, b, c, d, e, f } = props
  
  return (
    <div>
      <h3>Component2</h3>
      <Component3 a={a} b={b} c={c} d={d} e={e} f={f} />
    </div>
  )
}

export default Component2
