import { useContext, useState } from "react";
import { CartContext } from "./CartProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const Cart = () => {

  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [sortByPrice, setSortByPrice] = useState(false);
  const navigate = useNavigate()
  const sortedCart = [...cart].sort((a, b) => b.price - a.price);

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  const handleRemoveBtn = (id) => {
    removeFromCart(id)
    toast.warning("Removed From cart!", {
      position: "top-center",
      autoClose: 5000,
    });
  };

  const modalOpen = () => {
    if (totalPrice <= 0) {
      toast.warning("Please Add Item to Purchase", {
        position: 'top-center',
        autoClose: 5000,
      });
      return;
    }
    document.getElementById('my_modal_5').showModal()
  }
  const modalClose = () => {
    clearCart()
    toast.success("Purchase successful!", {
      position: 'top-center',
      autoClose: 5000,
    });
    navigate('/')
  }

  return (
    <div>
      <div className="mt-8 md:mt-12 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 px-4">
        <h3 className="font-bold text-2xl">Cart</h3>
        <div className="flex justify-between items-center md:gap-6">
          <h3 className="font-bold text-lg md:text-2xl mr-2">Total cost: ${totalPrice}</h3>
          <div className="md:space-x-2">
            <button onClick={() => setSortByPrice(true)} className="rounded-3xl btn btn-outline btn-sm md:btn-md md:text-lg  text-[#9538E2]">
              Sort by Price
              <i className="fa-solid fa-sliders fa-rotate-90 fa-xs"></i>
            </button>
            <button disabled={cart.length === 0 || totalPrice <= 0} onClick={modalOpen} className="btn btn-sm md:btn-md md:text-lg text-white rounded-3xl bg-gradient-to-b from-[#9538E2] to-pink-400">Purchase</button>
          </div>
          <dialog id="my_modal_5" className="modal modal-middle">
            <div className="modal-box w-80 md:w-96 text-center space-y-2">
              <div className="flex justify-center">
                <img src="https://i.ibb.co/HYhtp62/Group.png" alt="" />
              </div>
              <h3 className="font-bold text-lg md:text-2xl">Payment Successfully</h3>
              <hr />
              <p className="">Thanks for purchasing.</p>
              <p>Total: ${totalPrice}</p>
              <button onClick={modalClose} className="btn btn-block rounded-3xl text-lg font-bold">Close</button>
            </div>
          </dialog>
        </div>
      </div>
      <div className="mb-12 px-4 md:mb-16 lg:mb-24">
        {
          sortByPrice ? (
            sortedCart.map((product) => (
              <div className="border rounded-2xl p-8 mb-8 flex flex-col md:flex-row gap-8 justify-between items-center shadow-xl" key={product.product_id}>
                <div className="border card md:card-side items-center gap-8">
                  <figure className="border w-36">
                    <img className="border w-full h-full object-cover" src={product.product_image} alt="" />
                  </figure>
                  <div className="flex flex-col justify-between gap-4">
                    <h3 className="font-bold text-2xl">{product.product_title}</h3>
                    <p className="text-lg text-[#09080F]/60">{product.description}</p>
                    <p className="text-xl font-semibold text-[#09080F]/60">Price: ${product.price}</p>
                  </div>
                </div>
                <div onClick={() => handleRemoveBtn(product.product_id)} className="border">
                  <button className="btn btn-circle btn-outline text-red-700">
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
            ))
          ) : (
            cart.map((product) => (
              <div className="border rounded-2xl p-8 mb-8 flex flex-col md:flex-row gap-8 justify-between items-center shadow-xl" key={product.product_id}>
                <div className="card md:card-side items-center gap-8">
                  <figure className="w-36">
                    <img className="w-full h-full object-cover" src={product.product_image} alt="" />
                  </figure>
                  <div className="flex flex-col justify-between gap-4">
                    <h3 className="font-bold text-2xl">{product.product_title}</h3>
                    <p className="text-lg text-[#09080F]/60">{product.description}</p>
                    <p className="text-xl font-semibold text-[#09080F]/60">Price: ${product.price}</p>
                  </div>
                </div>
                <div onClick={() => handleRemoveBtn(product.product_id)}>
                  <button className="btn btn-circle btn-outline text-red-700">
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
            ))
          )
        }
      </div>
    </div>
  );
};

export default Cart;