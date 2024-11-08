import { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext()

const WishlistProvider = ({ children }) => {

  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem("wishlist")) || []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
  }, [wishlist]);

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

  const clickedWishlist = (productId) => wishlist.some(item => item.product_id === productId);

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter((item) => item.product_id !== productId));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, clickedWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;