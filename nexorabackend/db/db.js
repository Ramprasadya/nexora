import mongoose from 'mongoose'

const connectDB=async()=>{
    const MONGO_URI = process.env.MONGO_URI
    try {
        await mongoose.connect(MONGO_URI)
        console.log("DB Connection success")
    } catch (error) {
        console.log(error)
    }
}

export {connectDB};