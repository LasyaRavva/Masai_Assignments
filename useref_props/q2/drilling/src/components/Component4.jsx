import Component5 from './Component5'

/**
 * Component4 - Second Component to USE props
 * 
 * Receives 4 props: c, d, e, f (from Component3)
 * USES props 'c' and 'd' to display content.
 * PASSES props 'e' and 'f' further down to Component5.
 * 
 * Props used: c, d
 * Props drilled further: e, f
 */
function Component4({ c, d, e, f }) {
  return (
    <div>
      <h3>Component4</h3>
      {/* Display props c and d here */}
      <h4>This is prop c: {String(c)}</h4>
      <h4>This is prop d: {String(d)}</h4>
      {/* Continue drilling props e and f down to Component5 */}
      <Component5 e={e} f={f} />
    </div>
  )
}

export default Component4
