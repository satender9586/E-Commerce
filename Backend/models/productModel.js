import mongoose from "mongoose";



const productModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,

    },
    descrip: {
        type: String,
        required: true
    },
    catogary: {
        type: String,
        required: true
    },
    about: {
        type: String
    }

}, { timestamps: true })

export default mongoose.model("product", productModel)