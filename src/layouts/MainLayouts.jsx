

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CartProvider from "../components/CartProvider";
import WishlistProvider from "../components/WishlistProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from "react-helmet-async";


const MainLayouts = () => {
  return (
    <div>
      <HelmetProvider>
        <CartProvider>
          <WishlistProvider>
            <ToastContainer></ToastContainer>
            <Navbar></Navbar>
            <div className="min-h-screen">
              <Outlet></Outlet>
            </div>
            <Footer></Footer>
          </WishlistProvider>
        </CartProvider>
      </HelmetProvider>
    </div>
  );
};

export default MainLayouts;