import express from "express";
import { registercontroller, loginController } from "../controller/authcontroller.js"

const router = express.Router();

// REGISTER || POST METHOD
router.post("/register", registercontroller);

// LOGIN || POSR MERHOD
router.post("/login", loginController)

export default router;