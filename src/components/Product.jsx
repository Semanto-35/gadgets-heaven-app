import { Link } from "react-router-dom";


const Product = ({product}) => {
  const {product_title, price, product_image, product_id} = product;

  return (
    <div>
      <div className="space-y-6 p-6 border rounded-2xl shadow-xl">
        <div className="flex justify-center rounded-2xl h-60">
          <img className="h-full rounded-2xl" src={product_image} alt="" />
        </div>
        <div>
          <h4 className="text-2xl font-semibold">{product_title}</h4>
          <p className="mt-3 text-xl font-medium text-[#09080F]/60">Price: ${price}</p>
          <Link to={`/details/${product_id}`} className="btn btn-outline text-lg rounded-3xl text-[#9538E2] font-semibold mt-4">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Product;