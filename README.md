# Plant Paradise - React Redux Shopping Cart

A modern e-commerce plant shop built with React and Redux Toolkit. This project demonstrates the implementation of a shopping cart with full state management capabilities.

## Features

- Landing page with company information and background image
- Product listing page with categorized plants
- Shopping cart with full functionality
  - Add/Remove items
  - Update quantities
  - Calculate totals
- Responsive design
- Modern UI/UX

## Technologies Used

- React 18
- Redux Toolkit
- React Router DOM
- React Icons
- Vite

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── LandingPage.jsx
│   ├── ProductList.jsx
│   └── ShoppingCart.jsx
├── redux/
│   └── store.js
├── CartSlice.jsx
├── data/
│   └── plants.js
└── App.js
```

## Cart Functionality

The cart implements three main reducer functions:
- `addItem`: Adds a new item to the cart or increments quantity
- `removeItem`: Removes an item from the cart
- `updateQuantity`: Updates the quantity of an existing item

## License

MIT 