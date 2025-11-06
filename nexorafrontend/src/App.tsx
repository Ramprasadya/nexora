import { Route, Routes } from "react-router-dom"
import Homepage from "./components/Website/Homepage"
import Navbar from "./components/Navbar/Navbar"
import Cart from "./components/UIcomponents/Cart"
import Order from "./components/UIcomponents/Order"
import Reciept from "./components/UIcomponents/Reciept"


function App() {


  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] " >
    <Navbar/>
     <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/order" element={<Order/>} />
      <Route path="/reciept" element={<Reciept/>} />
     </Routes>
    </div>
  )
}

export default App
