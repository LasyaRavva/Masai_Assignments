import Component4 from './Component4'

function Component3({ a, b, c, d, e, f }) {
  return (
    <div>
      <h3>Component3</h3>
      <h4>This is prop a: {String(a)}</h4>
      <h4>This is prop b: {String(b)}</h4>
      
      <Component4 c={c} d={d} e={e} f={f} />
    </div>
  )
}

export default Component3
