import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CartContext } from "./CartProvider";
import { WishlistContext } from "./WishlistProvider";


const Navbar = () => {

  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext)
  const location = useLocation();

  const backgroundColor = location.pathname === '/' && '#9538E2';
  const color = location.pathname === '/' && 'white';
  const borderTopLeftRadius = location.pathname === '/' && '24px';
  const borderTopRightRadius = location.pathname === '/' && '24px'; borderTopLeftRadius;

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div style={{ backgroundColor, color, borderTopLeftRadius, borderTopRightRadius }} className="navbar sticky top-0 z-50 backdrop-blur-xl bg-white/45 px-4">
      <div className="navbar-start">
        <Link to='/'>
        <h3 className="text-xl font-bold">Gadget Heaven</h3>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/statistics'>Statistics</NavLink></li>
          <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
          <li><NavLink to='/about'>About Us</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end gap-2 md:gap-4">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn bg-white btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="badge badge-sm indicator-item">{cart.length}</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
            <div className="card-body">
              <span className="text-lg text-[#9538E2] font-bold">{cart.length} Items</span>
              <span className="text-info text-lg">Subtotal: ${totalPrice}</span>
              <div className="card-actions">
                <Link to='/dashboard/cart' className="btn text-lg text-white bg-[#9538E2] btn-block rounded-3xl">
                  View Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="btn bg-white btn-circle">
          <Link to='/dashboard/wishlist'>
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="badge badge-sm indicator-item">{wishlist.length}</span>
            </div>
          </Link>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn bg-white btn-circle lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/statistics'>Statistics</NavLink></li>
            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
            <li><NavLink to='/about'>About Us</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;