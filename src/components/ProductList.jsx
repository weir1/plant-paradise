import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../CartSlice';
import { plants } from '../data/plants';
import './ProductList.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(plants.map((plant) => plant.category))];
  
  const filteredPlants = selectedCategory === 'All'
    ? plants
    : plants.filter((plant) => plant.category === selectedCategory);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isItemInCart = (plantId) => {
    return cartItems.some((item) => item.id === plantId);
  };

  return (
    <div className="product-list-container">
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="products-grid">
        {filteredPlants.map((plant) => (
          <div key={plant.id} className="product-card">
            <img src={plant.image} alt={plant.name} className="product-image" />
            <h3>{plant.name}</h3>
            <p className="category">{plant.category}</p>
            <p className="price">${plant.price.toFixed(2)}</p>
            <button
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(plant)}
              disabled={isItemInCart(plant.id)}
            >
              {isItemInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList; 