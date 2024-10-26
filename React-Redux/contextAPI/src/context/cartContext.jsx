import { createContext, useContext, useState } from 'react';

const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (quantity, options, id) => {
    setCart([...cart, { options, quantity, id }]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((el) => el.id !== id));
  };

  return (
    <cartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </cartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(cartContext);
};
