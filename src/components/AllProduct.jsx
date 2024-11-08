
import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import { useEffect, useState } from "react";


const AllProduct = () => {

  const allProduct = useLoaderData()
  const { category } = useParams()


  const [products, setProducts] = useState([])
  const [clicked, setClicked] = useState(false)
  useEffect(() => {
    if (category) {
      const newProducts = [...allProduct].filter(product => product.category === category)
      setProducts(newProducts)
    }
    else {
      setProducts(allProduct.slice(0, 12))
      if (clicked) {
        setProducts(allProduct)
      }
    }
  }, [category, allProduct]);

  const viewAll = () => {
    setClicked(!clicked)
    if (category === undefined) {
      setProducts(allProduct)
    }
  }

  return (
    <div className="mb-12 md:mb-16 lg:mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          products.map(product => <Product key={product.product_id} product={product}></Product>)
        }
      </div>
      <div className="mt-8">
        <button style={(category || clicked) ? { display: 'none' } : { display: 'block' }} onClick={viewAll} className="btn text-lg rounded-3xl bg-[#9538E2] text-white">View ALL</button>
      </div>
    </div>
  );
};

export default AllProduct;