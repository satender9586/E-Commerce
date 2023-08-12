import mongoose, { model } from "mongoose";

const SignupOtpGenerate = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    otp: { type: Number, required: true }
}, { timestamps: true })

export default mongoose.model("otp", SignupOtpGenerate)