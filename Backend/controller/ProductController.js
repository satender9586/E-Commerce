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

const getSingleProduct = async (req, res) => {
    try {
        const id = req.params.id; // Use req.params.id instead of req.param.id
        const product = await productModel.findById(id).lean(); // Use await here to wait for the query to complete
        if (!product) {
            return res.status(404).json({ error: "Product not available" }); // Use 404 status for resource not found
        }

        res.json(product);
    } catch (error) {
        console.log("Error from single product id", error);
        res.status(500).json({ error: "Internal server error" }); // Use 500 status for internal server error
    }
};

export { addProduct, getAllProduct, getSingleProduct };
