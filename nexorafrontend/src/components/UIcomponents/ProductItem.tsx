import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"



interface myProps{
    id:any,
    name:string,
    price: string | number

}

const ProductItem = ({id,name,price}:myProps) => {
    const {currency, navigate, AddToCart} = useContext(ShopContext)
    // console.log(id)
  return (
    <>
   <div className="border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow bg-white text-gray-800 w-full max-w-xs">
  <div>
    <p className="text-lg font-medium text-gray-900">{name}</p>
    <p className="text-sm text-gray-500 mt-1">
      {currency}
      <span className="text-gray-800 font-semibold ml-1">{price}</span>
    </p>
  </div>
  <button
    onClick={() => {
      AddToCart(id);
      navigate("/cart");
    }}
    className="w-full mt-5 cursor-pointer py-2 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 active:scale-[0.98] transition-all duration-200"
  >
    Add To Cart
  </button>
</div>

    </>
  )
}

export default ProductItem