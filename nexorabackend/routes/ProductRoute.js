import express from 'express'
import { AddProduct, AddToCart, CartCheckout, CartUpdate, GetProduct, RemoveFromCart, TotalCartAmount } from '../controllers/Product.js';
const ProductRoute = express.Router();

ProductRoute.post("/addProduct",AddProduct)
ProductRoute.get("/product", GetProduct)
// Cart Routes
ProductRoute.post("/cart",AddToCart)
ProductRoute.delete("/cart/:id", RemoveFromCart)
ProductRoute.get("/cart", TotalCartAmount)
ProductRoute.post("/checkout", CartCheckout)
ProductRoute.post("/update", CartUpdate)

export default ProductRoute;