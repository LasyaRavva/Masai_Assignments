import { useState, useMemo, useCallback } from 'react'
import ProductList from './ProductList'
import './App.css'

const generateProducts = () => {
  const products = []
  for (let i = 1; i <= 1000; i++) {
    products.push({
      id: i,
      name: `Product ${i}`,
      price: Math.floor(Math.random() * 1000) + 10
    })
  }
  return products
}

function App() {
  const [counter, setCounter] = useState(0)
  const [products] = useState(generateProducts())
  const [selectedProduct, setSelectedProduct] = useState(null)

  // useMemo: Calculate total price only when products change
  // Without useMemo, this would recalculate on every render (including counter updates)
  const totalPrice = useMemo(() => {
    console.log('🔄 Calculating total price...')
    return products.reduce((sum, product) => sum + product.price, 0)
  }, [products])

  // useCallback: Memoize the selection handler to prevent ProductList re-renders
  // Without useCallback, a new function is created on every render, causing ProductList to re-render
  const handleProductSelect = useCallback((product) => {
    console.log('✅ Product selected:', product.name)
    setSelectedProduct(product)
  }, [])

  const incrementCounter = () => {
    setCounter(prev => prev + 1)
  }

  return (
    <div className="app">
      <h1>React Performance Optimization</h1>
      
      <div className="stats">
        <div className="stat-card">
          <h2>Total Products: {products.length}</h2>
          <h2>Total Price: ${totalPrice.toLocaleString()}</h2>
        </div>
        
        <div className="stat-card">
          <h2>Counter: {counter}</h2>
          <button onClick={incrementCounter}>
            Increment Counter
          </button>
          <p className="info">
            ℹ️ Click this button and check console - total price should NOT recalculate
          </p>
        </div>
      </div>

      {selectedProduct && (
        <div className="selected-product">
          <h3>Selected Product:</h3>
          <p><strong>{selectedProduct.name}</strong> - ${selectedProduct.price}</p>
        </div>
      )}

      <ProductList 
        products={products} 
        onProductSelect={handleProductSelect}
      />

      <div className="optimization-notes">
        <h3>Optimization Notes:</h3>
        <ul>
          <li>✅ <strong>useMemo</strong>: Total price is only calculated when products array changes</li>
          <li>✅ <strong>useCallback</strong>: Product selection handler maintains same reference across renders</li>
          <li>🔍 <strong>Open console</strong> to see when calculations happen</li>
        </ul>
      </div>
    </div>
  )
}

export default App
