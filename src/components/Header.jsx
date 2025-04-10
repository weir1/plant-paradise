import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Plant Paradise</Link>
      </div>
      <nav className="nav-links">
        <Link to="/products">Products</Link>
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart />
          {cartTotalQuantity > 0 && <span className="cart-count">{cartTotalQuantity}</span>}
        </Link>
      </nav>
    </header>
  );
};

export default Header; 