import { useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { CartContext } from "./CartProvider";
import { WishlistContext } from "./WishlistProvider";
import { toast } from "react-toastify";


const DetailsCard = () => {
  const { id } = useParams()
  const allProduct = useLoaderData()

  const newProduct = allProduct.find(product => product.product_id === id);

  const { product_title, price, availability, specification, description, rating, product_image } = newProduct;


  const { addToCart, clickedAddToCart } = useContext(CartContext);
  const { addToWishlist, clickedWishlist } = useContext(WishlistContext);

  const handleAddToCart = (productId) => {
    if (!clickedAddToCart(productId)) {
      addToCart(newProduct);
      toast.success("Added to cart!", {
        position: "top-center",
        autoClose: 5000,
      });
      return;
    }
    toast.warning("Already Added to cart!", {
      position: "top-center",
      autoClose: 5000,
    })
  };

  const handleAddToWishlist = (productId) => {
    if (!clickedWishlist(productId)) {
      addToWishlist(newProduct);
      toast.info("Added to wishlist!", {
        position: "top-center",
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="-mt-52 mb-12 md:mb-14 lg:mb-20 bg-white rounded-2xl">
      <div className="card md:card-side gap-6 p-6 rounded-2xl shadow-xl">
        <figure className="flex md:w-1/2 justify-center items-center  rounded-2xl lg:h-[553px]">
          <img className="h-full w-full object-cover rounded-2xl" src={product_image} alt="" />
        </figure>
        <div className="md:w-1/2">
          <h4 className="text-2xl md:text-3xl font-bold">{product_title}</h4>
          <p className="mt-3 text-xl font-semibold text-[#09080F]/80">Price: ${price}</p>
          <button style={availability ? { color: '#309C08' } : { color: 'crimson' }} className="btn btn-sm btn-outline rounded-3xl mt-4">{availability ? 'In Stock' : 'Out of Stock'}</button>
          <p className="text-lg text-[#09080F]/60 my-4">{description}</p>
          <div>
            <h4 className="font-bold text-lg mb-3">Specification:</h4>
            {
              specification.map((spa, index) => <li className="list-decimal text-[#09080F]/60" key={index}>{spa}</li>
              )
            }
          </div>
          <div className="space-y-3 my-4">
            <h4 className="font-bold text-lg">Rating ⭐</h4>
            <div className="flex items-center gap-4">
              <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
              </div>
              <button className="btn btn-sm rounded-3xl">{rating}</button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => handleAddToCart(id)} className="btn bg-[#9538E2] rounded-3xl text-white text-lg">
              Add To Card
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
            <button disabled={clickedWishlist(id)} onClick={() => handleAddToWishlist(id)} className="btn btn-circle">
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
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;