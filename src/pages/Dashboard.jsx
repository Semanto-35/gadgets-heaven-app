
import { Helmet } from "react-helmet-async";
import { NavLink, Outlet, useLocation } from "react-router-dom";



const Dashboard = () => {
  const location = useLocation()

  return (
    <div>
      <Helmet>
        <title>Dashboard - My Gadgets Heaven</title>
      </Helmet>
      <div className="py-8 px-4 bg-[#9538E2]">
        <div className="text-center">
          <h3 className="font-bold text-xl md:text-3xl text-white mb-4">Dashboard</h3>
          <p className="text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
          <div className="mt-4 space-x-6">
            <NavLink style={({ isActive }) => ({
              color: (isActive || location.pathname === '/dashboard') && '#9538E2',
              fontWeight: (isActive || location.pathname === '/dashboard') && 'bold',
              backgroundColor: (isActive || location.pathname === '/dashboard') && 'white'
            })} className="btn text-white btn-outline w-32 text-lg rounded-3xl"
              to="/dashboard/cart">
              Cart
            </NavLink>
            <NavLink style={({ isActive }) => ({
              color: isActive && "#9538E2",
              fontWeight: isActive && "bold",
              backgroundColor: isActive && "white"
            })} className="btn text-white btn-outline w-32 text-lg rounded-3xl" to='/dashboard/wishlist'>Wishlist</NavLink>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;