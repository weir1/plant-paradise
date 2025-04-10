import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import Header from './components/Header.jsx';
import LandingPage from './components/LandingPage.jsx';
import ProductList from './components/ProductList.jsx';
import ShoppingCart from './components/ShoppingCart.jsx';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/products" element={<ProductList />} />
            <Route exact path="/cart" element={<ShoppingCart />} />
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App; 