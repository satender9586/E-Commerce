import productModel from "../models/productModel.js"; // Make sure the path to your model is correct

const addProduct = async (req, res) => {
    try {
        const { name, price, image, descrip } = req.body;

        if (!name || !price || !image || !descrip) {

            return res.status(400).json({ error: "All Fields Are Mandatory" });
        }

        const newProduct = new productModel({ name, price, image, descrip });
        await newProduct.save();

        return res.status(201).json({ message: "Product added Successfully", product: newProduct });
    } catch (error) {
        console.error("Error adding product:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

const getAllProduct = async (req, res) => {
    try {
        const products = await productModel.find();
        return res.status(200).json({ message: "Get All Products", products });
    } catch (error) {
        res.status(500).json({ error: "Internal server error", details: error });
    }
};

export { addProduct, getAllProduct };
