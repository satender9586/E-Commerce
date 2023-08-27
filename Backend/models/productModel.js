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
    }

}, { timestamps: true })

export default mongoose.model("product", productModel)