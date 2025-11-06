import { useContext, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import CartTotal from "./CartTotal";


const Order = () => {
    const {productData, CheckoutCart, navigate} = useContext(ShopContext)
    let CartItem = productData.filter((item:any) => item.quantity > 0);
     const [formData, setFormData] = useState<any>({
    firstName: "",
    lastName:"",
    email: "",
  })
  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onSubmitHandler =async(e:any)=>{
    e.preventDefault()
    let Orders = {
      CartItems:CartItem,
      Detail:formData
    }
   await CheckoutCart(Orders)
   navigate("/reciept")
  }
     
  return (
    <div>
         <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t " >
      {/* --------- Left Side -------- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]" >
        <div className="text-xl sm:text-2xl my-3" >
          <p> Delivery Information </p>
        </div>
        <div className="flex gap-3" >
          <input required onChange={onChangeHandler} name="firstName" value={formData.firstName} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First Name" />
          <input required onChange={onChangeHandler} name="lastName" value={formData.lastName} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last Name" />
        </div>
        <input required onChange={onChangeHandler} name="email" value={formData.email} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="email" placeholder="Email Address" />
       
        
      </div>
      {/* -------- Right Side ------- */}
      
        <div className=" min-w-80" >
          <CartTotal/>
           <div className="w-full text-end mt-8" >
            <button type="submit" className="bg-violet-600 text-white px-16 py-3 text-sm cursor-pointer" >Place Order</button>
          </div>
        </div>
     
    </form>
    </div>
  )
}

export default Order