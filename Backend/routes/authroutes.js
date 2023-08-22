import express from "express";
import { registercontroller, loginController, otpverify, resendotp } from "../controller/authcontroller.js"


const router = express.Router();

// REGISTER || POST METHOD
router.post("/register", registercontroller);

// LOGIN || POSR MERHOD
router.post("/login", loginController)

// OTP-Verify || POST METHOD
router.post("/otp-verify", otpverify)

// Resend-OTP || POST METHOD
router.post("/resend-otp", resendotp)

export default router;