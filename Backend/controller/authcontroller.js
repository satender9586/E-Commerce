import { comparePassword, hashPassword } from "../helper/authhelper.js";
import userModels from "../models/userModels.js"
import JWT from "jsonwebtoken";

const registercontroller = async (req, res) => {

    try {
        const { name, email, password, phone, address } = req.body;
        // validation
        if (!name || !email || !password || !phone || !address) {
            return res.send({ error: "All Feild Are Mendatory" })
        }
        // check user0
        const existinuser = await userModels.findOne({ email })
        if (existinuser) {
            res.status(200).send({
                success: true,
                message: "Already Register Please Login"
            })
        }

        // Registration User

        const hashedPasswrod = await hashPassword(password)
        // save user Data

        const user = await new userModels({ name, email, phone, address, password: hashedPasswrod }).save()
        res.status(201).send({
            success: true,
            message: "User Register SuccesFully",
            user
        })


    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in Registeration"
        })
    }
}



const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid email or password. All fields are mandatory."
            });
        }

        // check user
        const user = await userModels.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email is not registered."
            });
        }

        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(200).send({
                success: false,
                message: "Invalid password."
            });
        }

        // token
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
        res.status(200).send({
            success: true,
            message: "Login successfully.",
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
            },
            token,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in LOGIN.",
            error
        });
    }
};


export { registercontroller, loginController }