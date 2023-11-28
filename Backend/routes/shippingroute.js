import express from "express"
import {Shippingcontroller } from "../controller/Shippingcontroller.js"
const router = express.Router();


// post api for get address
router.post("/getShippingaddress",Shippingcontroller)
    

export default router