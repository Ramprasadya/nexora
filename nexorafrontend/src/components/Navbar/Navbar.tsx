import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
// import { ShopContext } from "../context/ShopContext"
import { ChevronDown, Menu, ShoppingCart } from "lucide-react"




const Navbar = () => {
  const [visible, setvisible] = useState<boolean>(false)
//   const { getCartCount,} = useContext(ShopContext)

  return (
    <div className='flex items-center justify-between py-5 font-medium' >
      <NavLink to="/"  className='text-[16px] bg-white' ><span className="text-[20px]" >Nexora</span></NavLink>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to="/" className="flex flex-col items-center gap-1 text-[16px]" >
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
        </NavLink>
        <div  className="flex flex-col items-center gap-1 text-[16px]" >
          <p>About</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden' />
        </div>
        <div  className="flex flex-col items-center gap-1 text-[16px]" >
          <p>Contact</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
        </div>
      <div className="flex items-center gap-6">
        <Link to="/cart" className="relative" >
          <ShoppingCart className="w-7 min-w-7" />
        </Link>
        <Menu onClick={() => setvisible(true)} className=" w-5 cursor-pointer sm:hidden" />
      </div>
      </ul>
      {/* Mobile Navabr  */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`} >
        <div className="flex flex-col text-gray-700" >
          <div onClick={() => setvisible(false)} className="flex items-center gap-2 p-3" >
            <ChevronDown className="h-4 rotate-90 mt-[3px]" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setvisible(false)} className="py-2 pl-6 border-b" to="/" >Home</NavLink>
          <NavLink onClick={() => setvisible(false)} className="py-2 pl-6 border-b" to="/about" >About</NavLink>
          <NavLink onClick={() => setvisible(false)} className="py-2 pl-6 border-b" to="/contact" >Contact</NavLink>
        </div>
      </div>
    </div>

  )
}

export default Navbar