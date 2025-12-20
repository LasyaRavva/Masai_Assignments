/**
 * Component6 - Final Component (End of props drilling chain)
 * 
 * This is the DEEPEST level component that receives prop 'e'.
 * It only uses prop 'e' and has no children to pass props to.
 * The prop 'e' was originally passed from App and drilled through:
 * App → Component1 → Component2 → Component3 → Component4 → Component5 → Component6
 * 
 * Props used: e
 * Props drilled further: none (final destination)
 */
function Component6({ e }) {
  return (
    <div>
      <h3>Component6</h3>
      {/* Finally display prop e at the deepest level */}
      <h4>This is prop e: {String(e)}</h4>
    </div>
  )
}

export default Component6
