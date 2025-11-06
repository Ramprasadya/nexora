
import { useContext } from "react"
import ProductItem from "../UIcomponents/ProductItem"
import { ShopContext } from "../context/ShopContext"

const Homepage = () => {
  const {productData} = useContext(ShopContext)
  // console.log(productData)
  return (
    <div>
       {/* Rendering product  */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 mt-5 pt-5 sm:pt-14 border-t" >
       {
        productData.map((item:any,index:number)=>(
            <ProductItem key={index} id={item._id} name={item.name} price={item.price}   />
        ))
       }
      </div>
      
    </div>
  )
}

export default Homepage