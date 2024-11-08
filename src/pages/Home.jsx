import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Helmet } from "react-helmet-async";




const Home = () => {

  return (
    <div>
      <Helmet>
        <title>Home - My Gadgets Heaven</title>
      </Helmet>
      <Header></Header>
      <div className="mt-8 md:mt-12 lg:mt-20">
        <h3 className="font-bold text-2xl md:text-4xl text-center">Explore Cutting-Edge Gadgets</h3>
        <div className="mt-8 md:mt-12 mx-4">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;