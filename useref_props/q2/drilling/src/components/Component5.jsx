import Component6 from './Component6'

/**
 * Component5 - Third Component to USE props
 * 
 * Receives 2 props: e, f (from Component4)
 * USES prop 'f' to display content.
 * PASSES prop 'e' further down to Component6 (the final component).
 * 
 * Props used: f
 * Props drilled further: e
 */
function Component5({ e, f }) {
  return (
    <div>
      <h3>Component5</h3>
      {/* Display prop f here */}
      <h4>This is prop f: {String(f)}</h4>
      {/* Final drill: pass prop e to Component6 */}
      <Component6 e={e} />
    </div>
  )
}

export default Component5
