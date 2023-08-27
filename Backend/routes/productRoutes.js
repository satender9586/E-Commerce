import express from "express";
import { addProduct, getAllProduct } from "../controller/ProductController.js"


const router = express.Router();

// Add Product || POST METHOD
router.post("/addProduct", addProduct);


// Get All Product || GET METHOD

router.get("/products", getAllProduct)

export default router;