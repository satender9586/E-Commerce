import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,

    },
    role: {
        type: Number,
        default: 0
    },
    otp: {
        type: Number,
        require: true
    },
    isverify: {
        type: Boolean,
        required: true,
    },
    otptime: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.model('users', userSchema);
