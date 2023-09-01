import express from "express";
import { addProduct, getAllProduct, getSingleProduct, getProductCategory } from "../controller/ProductController.js"


const router = express.Router();

// Add Product || POST METHOD
router.post("/addProduct", addProduct);


// Get All Product || GET METHOD

router.get("/products", getAllProduct)

// Get Sigl Product Base on Id || GET METHOD

router.get("/singleproduct/:id", getSingleProduct)

// Get  CategoryProduct Base on Category || GET METHOD

router.get("/categoryproduct/:id", getProductCategory)

export default router;