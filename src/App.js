import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './redux/CartSlice';
import Cart from './components/Cart';
import './App.css';

const products = [
  { id: 1, name: 'Product 1', price: 19.99 },
  { id: 2, name: 'Product 2', price: 29.99 },
  { id: 3, name: 'Product 3', price: 39.99 },
];

function App() {
  const dispatch = useDispatch();

  return (
    <div className="app">
      <div className="products">
        <h2>Products</h2>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button onClick={() => dispatch(addItem(product))}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <Cart />
    </div>
  );
}

export default App; 