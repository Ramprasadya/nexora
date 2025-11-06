import  { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const CartTotal = () => {
    const {deliveryFee, currency, cartTotal} = useContext(ShopContext)
  return (
    <div className="flex justify-end w-full" >
        <div className="flex flex-col gap-2 mt-4 text-sm sm:text-[16px] w-full" >
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
       </div>
      </div>
  )
}

export default CartTotal