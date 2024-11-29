import { Snackbar } from '@mui/material';
import React, { createContext, useState, useContext } from 'react';

// Create a context for the cart
const CartContext = createContext();

// Provider to manage the cart state
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState('');

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    setMessage(`${product.name} added to the cart!`);
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter(item => item.id !== productId));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
      <Snackbar
        open={Boolean(message)}
        onClose={() => setMessage("")}
        message={message}
        autoHideDuration={1200}
      />
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};
