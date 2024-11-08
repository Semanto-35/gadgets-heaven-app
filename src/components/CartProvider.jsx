import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext()
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart]);

  const addToCart = (product) => {
    const currentTotal = cart.reduce((total, item) => total + item.price, 0);
    if (currentTotal + product.price > 1000) {
        toast.error("Cannot add item. Cart total exceeds $1000.");
        return;
    }
    setCart([...cart, product]);;
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.product_id !== id));
  };

  const clickedAddToCart = (productId) => cart.some(item => item.product_id === productId);

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, clickedAddToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;