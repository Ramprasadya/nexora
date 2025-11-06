import mongoose, { Mongoose, Schema } from 'mongoose'

const ProductSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    quantity:{
        type:Number
    },
    date:{
        type: Date,
        default:Date.now()
    }
})

const ProductModel =  mongoose.model("product", ProductSchema);

export default ProductModel;