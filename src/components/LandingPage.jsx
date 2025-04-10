import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Plant Paradise</h1>
        <p>
          Welcome to Plant Paradise, your premier destination for beautiful and healthy house plants. 
          We carefully select and nurture each plant in our collection to ensure you receive the 
          highest quality greenery for your home. With our expert care guides and dedicated customer 
          service, we make it easy to bring the beauty of nature into your living space.
        </p>
        <Link to="/products" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage; 