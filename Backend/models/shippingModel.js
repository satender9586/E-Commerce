import mongoose from "mongoose";

const shippingSchema = mongoose.Schema({
    // user:{
    //     type : mongoose.Schema.Types.ObjectId,
    //     required : true,
    //     ref : "user",
    // },
    shippingAddress:{
        fullName : {
            type:String,
            required : true,
        },
        phoneNo:{           
            type:Number,
            required:true
        },
        state:{
            type:String,
            required:true
        },
        address:{           
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        pinCode:{
            type:Number,
            required:true
        },
        landMark:{           
            type:String,
            required:true
        }
    }
},{timestamps:true})

export default shipping= mongoose.model("shipping",shippingSchema);
