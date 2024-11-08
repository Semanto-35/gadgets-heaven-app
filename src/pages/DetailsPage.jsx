
import { Helmet } from "react-helmet-async";
import DetailsCard from "../components/DetailsCard";


const DetailsPage = () => {
  return (
    <div>
      <Helmet>
        <title>Details - Home - My Gadgets Heaven</title>
      </Helmet>
      <div className="pt-8 pb-60 px-4 bg-[#9538E2]">
        <div className="text-center">
          <h3 className="font-bold text-2xl md:text-3xl text-white mb-4">Product Details</h3>
          <p className="text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        </div>
      </div>
      <div className="min-h-screen w-11/12 mx-auto">
        <DetailsCard></DetailsCard>
      </div>
    </div>
  );
};

export default DetailsPage;