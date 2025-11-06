import express from 'express'
import { AddProduct, AddToCart, CartCheckout, GetProduct, RemoveFromCart, TotalCartAmount } from '../controllers/Product.js';
const ProductRoute = express.Router();

ProductRoute.post("/addProduct",AddProduct)
ProductRoute.get("/product", GetProduct)
// Cart Routes
ProductRoute.post("/cart",AddToCart)
ProductRoute.delete("/cart/:id", RemoveFromCart)
ProductRoute.get("/cart", TotalCartAmount)
ProductRoute.post("/checkout", CartCheckout)

export default ProductRoute;