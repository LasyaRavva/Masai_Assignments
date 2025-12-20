import Component5 from './Component5'


function Component4({ c, d, e, f }) {
  return (
    <div>
      <h3>Component4</h3>
      <h4>This is prop c: {String(c)}</h4>
      <h4>This is prop d: {String(d)}</h4>
      <Component5 e={e} f={f} />
    </div>
  )
}

export default Component4
