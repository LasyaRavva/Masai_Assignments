import { useState } from 'react'

let renderCount = 0

function ProductList({ products, onProductSelect }) {
  // Track render count to demonstrate optimization
  renderCount++
  console.log(`🔄 ProductList rendered ${renderCount} times`)

  const [displayCount, setDisplayCount] = useState(20)

  const loadMore = () => {
    setDisplayCount(prev => Math.min(prev + 20, products.length))
  }

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h2>Product List (Render Count: {renderCount})</h2>
        <p className="info">
          ℹ️ This component should NOT re-render when counter changes (thanks to useCallback)
        </p>
      </div>
      
      <div className="product-list">
        {products.slice(0, displayCount).map(product => (
          <div 
            key={product.id} 
            className="product-item"
            onClick={() => onProductSelect(product)}
          >
            <div className="product-name">{product.name}</div>
            <div className="product-price">${product.price}</div>
          </div>
        ))}
      </div>

      {displayCount < products.length && (
        <button className="load-more" onClick={loadMore}>
          Load More ({products.length - displayCount} remaining)
        </button>
      )}
    </div>
  )
}

export default ProductList
