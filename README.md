# React Redux Shopping Cart

A simple shopping cart implementation using React and Redux Toolkit. This project demonstrates the use of Redux for state management in a React application.

## Features

- Add items to cart
- Remove items from cart
- Update item quantities
- Calculate total price
- Responsive design

## Technical Implementation

The project uses the following key features:

- React for UI components
- Redux Toolkit for state management
- Modern ES6+ JavaScript
- CSS for styling

### Key Components

- `CartSlice.jsx`: Implements Redux reducers for cart operations
  - `addItem`: Adds a new item or increments quantity
  - `removeItem`: Removes an item from the cart
  - `updateQuantity`: Updates the quantity of an item

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   npm run dev
   ```

## Project Structure

```
React_Redux_Cart/
├── src/
│   ├── components/
│   │   ├── Cart.js
│   │   └── Cart.css
│   │   
│   ├── redux/
│   │   ├── CartSlice.jsx
│   │   └── store.js
│   │   
│   ├── App.js
│   │   
│   ├── App.css
│   │   
│   ├── index.js
│   │   
│   └── index.css
│   
└── public/
    └── index.html
```

## Technologies Used

- React
- Redux Toolkit
- React Redux

## Usage

```javascript
// Import the actions
import { addItem, removeItem, updateQuantity } from './CartSlice';

// Add item to cart
dispatch(addItem({
  id: '1',
  name: 'Product',
  price: 29.99
}));

// Remove item from cart
dispatch(removeItem('1'));

// Update item quantity
dispatch(updateQuantity({
  id: '1',
  quantity: 3
}));
``` 