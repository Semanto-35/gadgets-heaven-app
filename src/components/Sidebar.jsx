import { NavLink, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="h-fit border shadow-xl rounded-3xl p-6 flex md:flex-col flex-wrap gap-6">
        <NavLink style={({ isActive }) => ({
          color: isActive && "white",
          fontWeight: isActive && "bold",
          backgroundColor: isActive && '#9538E2'
        })} className="btn rounded-3xl" to='/'>All Product</NavLink>
        <NavLink style={({ isActive }) => ({
          color: isActive && "white",
          fontWeight: isActive && "bold",
          backgroundColor: isActive && '#9538E2'
        })} className="btn rounded-3xl" to={`/category/Smartphones`}>Smart Phone</NavLink>
        <NavLink style={({ isActive }) => ({
          color: isActive && "white",
          fontWeight: isActive && "bold",
          backgroundColor: isActive && '#9538E2'
        })} className="btn rounded-3xl" to={`/category/Laptops`}>Laptops</NavLink>
        <NavLink style={({ isActive }) => ({
          color: isActive && "white",
          fontWeight: isActive && "bold",
          backgroundColor: isActive && '#9538E2'
        })} className="btn rounded-3xl" to={`/category/Smartwatches`}>Smart Watches</NavLink>
        <NavLink style={({ isActive }) => ({
          color: isActive && "white",
          fontWeight: isActive && "bold",
          backgroundColor: isActive && '#9538E2'
        })} className="btn rounded-3xl" to={`/category/Chargers`}>Chargers</NavLink>
        <NavLink style={({ isActive }) => ({
          color: isActive && "white",
          fontWeight: isActive && "bold",
          backgroundColor: isActive && '#9538E2'
        })} className="btn rounded-3xl" to={`/category/Powerbanks`}>Power Banks</NavLink>
      </div>
      <div className="w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Sidebar;