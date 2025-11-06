import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Cart = () => {
  const { productData, currency, cartTotal, DeleteFromCart, navigate} = useContext(ShopContext);
  let CartItem = productData.filter((item:any) => item.quantity > 0);
  
 const deliveryFee = 10;
  return (
    <div className="pt-5 sm:pt-14 border-t">
      {
        CartItem.length > 0 ? (
            <h1 className="text-[16px] font-bold" >Your Cart items</h1>
        ):(
            <h1 className="text-[16px] font-bold" >Nothing to display here </h1>
        )
      }
      {CartItem.map((item: any, index: any) => {
        return (
          <div className="text-gray-700  border p-2 mt-2 flex justify-between items-center " key={index}>
            <div>
              <p className="pt-3 pb-1 text-[16px]">{item.name}</p>
              <p className="text-[16px] font-medium">
                {currency}
                {item.price}
              </p>
            </div>
            <div>
              Quantity: {item.quantity}
            </div>
            <button onClick={()=> DeleteFromCart(item._id)} className="py-2 px-3 bg-violet-600 text-white cursor-pointer" >Delete</button>
          </div>
        );
      })}
      {
        CartItem.length > 0 && (

      <div className="flex justify-end" >
        <div className="flex flex-col gap-2 mt-4 text-sm sm:text-[16px] w-1/3" >
            <h1 className="my-2 font-bold" >Cart Totals</h1>
           <div className="flex justify-between" >
             <p>Subtotal</p>
             <p>{currency} {cartTotal}.00 </p>
           </div>
           <hr />
           <div className="flex justify-between" >
               <p>Shipping Fee</p>
               <p>{currency}{deliveryFee}</p>
           </div>
           <hr />
            <div className="flex justify-between" >
                <b>Total</b>
                <b>{currency}{ cartTotal ===0 ? 0 : cartTotal+deliveryFee}</b>
            </div>
       <button className="w-full py-2 px-4 bg-violet-600 text-white mt-4 cursor-pointer" onClick={()=> navigate("/order")} >Checkout</button>
       </div>
      </div>
        )
      }
    </div>
  );
};

export default Cart;
