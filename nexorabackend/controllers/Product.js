import ProductModel from "../models/ProductModel.js";

const AddProduct = async (req, res) => {
  const { name, price } = req.body;
  try {
    const product = new ProductModel({
      name,
      price: Number(price),
    });
    await product.save();
    res.json({ success: true, message: "Product Added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
const GetProduct = async (req, res) => {
  try {
    const product = await ProductModel.find({});
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Cart ...................---------------

const AddToCart = async (req, res) => {
  const { productId } = req.body;
  try {
    const ProductData = await ProductModel.findById({ _id: productId });
    if (ProductData.quantity > 0) {
      ProductData.quantity += 1;
    } else if (!ProductData.quantity) {
      ProductData.quantity = 1;
    }
    await ProductModel.findByIdAndUpdate(productId, {
      quantity: ProductData.quantity,
    });
    res.json({ success: true, message: "Product added to cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const RemoveFromCart = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModel.findById({ _id: id });
    product.quantity = 0;
    await ProductModel.findByIdAndUpdate(id, { quantity: product.quantity });
    res.json({ success: true, message: "Product removed from cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const TotalCartAmount = async (req, res) => {
  try {
    const products = await ProductModel.find({});

    let total = 0;

    for (let i = 0; i < products.length; i++) {
      const item = products[i];
      const quantity = item.quantity || 0;
      const price = item.price || 0;

      total += price * quantity;
    }

    res.json({ success: true, total });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const CartCheckout = async (req, res) => {
  const { Orders } = req.body;
  // console.log(Orders);

  try {
    const products = await ProductModel.find({});

    let total = 0;
    for (const item of Orders?.CartItems) {
      const product = products.find((p) => p._id.toString() === item._id);
      // console.log(product);

      if (product) total += product.price * item.quantity;
    }
    const receipt = {
      detail: Orders.Detail,
      total,
      timestamp: new Date().toISOString(),
    };

    res.json({ success: true, receipt });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const CartUpdate = async (req, res) => {
  const { ProductId, quantity } = req.body;
  try {
    const ProductData = await ProductModel.find({ _id: ProductId });
    ProductData.quantity = quantity;
    await ProductModel.findByIdAndUpdate(ProductId, {
      quantity: ProductData.quantity,
    });
    res.json({ success: true, message: "Cart Count Updated......" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export {
  AddProduct,
  GetProduct,
  AddToCart,
  RemoveFromCart,
  TotalCartAmount,
  CartCheckout,
  CartUpdate,
};
