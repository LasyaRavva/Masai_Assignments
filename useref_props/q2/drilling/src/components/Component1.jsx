import Component2 from './Component2'


function Component1({ a, b, c, d, e, f }) {
  return (
    <div>
      <h3>Component1</h3>
      <Component2 a={a} b={b} c={c} d={d} e={e} f={f} />
    </div>
  )
}

export default Component1
