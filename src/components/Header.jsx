import { useNavigate } from "react-router-dom";
import Banner from "./Banner";



const Header = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="bg-[#9538E2] text-center rounded-b-3xl pt-8 pb-40 lg:pb-64 px-4 md:px-10">
        <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
        <p className="text-white mt-6">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        <button onClick={()=>navigate('/dashboard')} className="btn btn-sm md:btn-md rounded-3xl md:text-xl text-[#9538E2] mt-8">Shop Now</button>
      </div>
      <Banner></Banner>
    </div>
  );
};

export default Header;