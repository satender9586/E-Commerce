import { comparePassword, hashPassword } from "../helper/authhelper.js";
import userModels from "../models/userModels.js"
import JWT from "jsonwebtoken";
import otpgenerator from "otp-generator"
import otpgeneratModel from "../models/otpgeneratModel.js";
import { transporter } from "../utils/function.js";





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


        // Generate OTP
        const data = function generateotp() {
            let otp = ''
            const digit = "1234567890"

            for (let i = 0; i <= 5; i++) {
                const rendomdigit = Math.floor(Math.random() * digit.length)
                otp += rendomdigit;
            }
            return otp;
        }

        let otp = data()

        try {


            // Send OTP via email
            const mailOptions = {
                from: 'sksatenderkumar59@gmail.com',
                to: email,
                subject: 'OTP for Registration',
                text: `Your OTP for registration is: ${otp}`,
            };
            try {
                const info = await transporter.sendMail(mailOptions);
                console.log('Email sent:', info.response);
                // // Save OTP to OTP collection
                const newOtp = await new otpgeneratModel({ email, otp }).save();

            } catch (error) {
                console.error('Error sending email:', error);
            }

        } catch (error) {
            console.error(error);
            res.status(500).send({
                success: false,
                message: "Error in Registration",
            });
        }

        // Hash password
        const hashedPassword = await hashPassword(password);


        // Save user data
        const user = await new userModels({
            name,
            email,
            phone,
            address,
            password: hashedPassword,
        }).save();

        res.status(201).send({
            success: true,
            message: "User Registered Successfully. Please verify your email.",
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Registration",
        });
    }
};





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