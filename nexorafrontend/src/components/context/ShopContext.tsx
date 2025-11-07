import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext<any>(null);
const ShopContextProvider = (props: any) => {
  const currency = "₹ ";
  const deliveryFee = 10;
  const navigate = useNavigate();
  const [productData, setProductData] = useState<any[]>([]);
  const [reciept, setReciept] = useState<object>({});
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [update, setUpdate] = useState<boolean>(false);
  const ServerUrl = "http://localhost:4000";
  const getProductData = async () => {
    try {
      const response = await axios.get(`${ServerUrl}/api/product`);
      // console.log(response.data);

      if (response.data.success) {
        setProductData(response.data.product);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductData();
  }, [update]);

  const AddToCart = async (id: any) => {
    try {
      const response = await axios.post(`${ServerUrl}/api/cart`, {
        productId: id,
      });
      setUpdate((prev) => !prev);
      console.log(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const GetCartTotal = async () => {
    try {
      const response = await axios.get(`${ServerUrl}/api/cart`);
      setCartTotal(response.data.total);
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteFromCart = async (id: any) => {
    try {
      const response = await axios.delete(`${ServerUrl}/api/cart/${id}`);
      setUpdate((prev) => !prev);
      console.log(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const CheckoutCart =async(Orders:any)=>{
    try {
      // console.log(CartItem);
      const response = await axios.post(`${ServerUrl}/api/checkout`,{Orders})
     console.log(response);
     setReciept(response.data.receipt)
    } catch (error) {
      console.log(error);
      
    }
  }

  const UpdateQuantity=async( ProductId:any, quantity:any)=>{
     try {
       const resposne = await axios.post(`${ServerUrl}/api/update`, {ProductId, quantity})
       console.log(resposne.data.message);
       setUpdate((prev) => !prev);
     } catch (error) {
       console.log(error);
     }
  }

  useEffect(() => {
    GetCartTotal();
  }, [cartTotal, update]);

  const value = {
    productData,
    currency,
    navigate,
    AddToCart,
    cartTotal,
    DeleteFromCart,
    CheckoutCart,
    reciept,
    deliveryFee,
    UpdateQuantity
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
