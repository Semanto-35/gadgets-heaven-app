import { useContext } from "react";
import { WishlistContext } from "./WishlistProvider";
import { CartContext } from "./CartProvider";
import { toast } from "react-toastify";


const Wishlist = () => {

  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart, clickedAddToCart } = useContext(CartContext);

  const handleRemoveBtn = (id) => {
    removeFromWishlist(id)
    toast.warning("Removed From wishlist!", {
      position: "top-center",
      autoClose: 5000,
    });
  };

  const removeWishlist = (product) =>{
    if (clickedAddToCart(product.product_id)) {
      toast.warning("Allready Added to Cart!", {
        position: "top-center",
        autoClose: 5000,
      });
      return;
    }
    addToCart(product);
    removeFromWishlist(product.product_id);
    toast.info("Removed From wishlist and added to Cart!", {
      position: "top-center",
      autoClose: 5000,
    });
  }

  return (
    <div>
      <div className="mt-12 mb-8 px-4">
        <h3 className="font-bold text-2xl">WishList</h3>
      </div>
      {
        wishlist.length > 0 && (
          <div className="mb-12 px-4 md:mb-16 lg:mb-24">
            {wishlist.map((product) => (
              <div className="border rounded-2xl p-8 mb-8 flex flex-col md:flex-row gap-8 justify-between items-center shadow-xl" key={product.product_id}>
                <div className="card md:card-side items-center gap-8">
                  <figure className="w-44">
                    <img className="w-full h-full object-cover" src={product.product_image} alt="" />
                  </figure>
                  <div className="flex flex-col justify-between gap-4">
                    <h3 className="font-bold text-2xl">{product.product_title}</h3>
                    <p className="text-lg text-[#09080F]/60"><span className="font-semibold text-xl">Description:</span> {product.description}</p>
                    <p className="text-xl font-semibold text-[#09080F]/60">Price: ${product.price}</p>
                    <button onClick={() => removeWishlist(product)} className="btn bg-[#9538E2] text-white rounded-3xl text-lg w-52">Add to Card</button>
                  </div>
                </div>
                <div>
                  <button onClick={() => handleRemoveBtn(product.product_id)} className="btn btn-circle btn-outline text-red-700">
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
                        d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )
      }
    </div>
  );
};

export default Wishlist;