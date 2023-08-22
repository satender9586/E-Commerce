import { comparePassword, hashPassword } from "../helper/authhelper.js";
import userModels from "../models/userModels.js"
import JWT from "jsonwebtoken";
import otpgenerator from "otp-generator"
import otpgeneratModel from "../models/otpgeneratModel.js";
import { transporter } from "../utils/function.js";
import { generatresendotp } from "../utils/function.js";


// New User Register First Time Api


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
        // Send OTP via email
        let otp = data()
        try {
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
            otp,
            isverify: false,
            otptime: Date.now()
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


// OTP Vrify After That user will create successfully

const otpverify = async (req, res) => {
    const { email, otp } = req.body;
    try {
        const user = await userModels.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid OTP" });
        }

        const currentTime = Date.now();
        const signupTime = currentTime - user.otptime;
        if (signupTime >= 30000) {
            return res.status(401).json({ message: "otp expired" });
        }
        if (user.otp == otp) {
            user.isverify = true;
            user.otp = undefined;
            await user.save();
        } else {
            return res.status(401).json({ message: "You Enter Invalid otp" });
        }



        res.status(200).json({ message: "OTP verified successfully" });
    } catch (error) {
        console.log("Error From verify api", error);
        res.status(500).json({ message: "Something is wrong", error });
    }
};


// Resetn Otp In case last opt expire

const resendotp = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await userModels.findOne({ email });

        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid Email id" });
        }

        if (user.isverify) {
            return res.status(400).json({ success: false, message: "Email is Already Verified" });
        }

        // Find any existing OTP document for the email
        const existingOTP = await otpgeneratModel.findOne({ email });

        let otp;
        if (existingOTP) {
            // If an existing OTP document exists, update its OTP value
            otp = generatresendotp();
            existingOTP.otp = otp;
            await existingOTP.save();
            user.otp = otp;
            user.otptime = Date.now()
            await user.save()
        } else {
            // If no existing OTP document, create a new one
            otp = generatresendotp();
            const newOtp = new otpgeneratModel({ email, otp });
            await newOtp.save();


        }

        const mailOptions = {
            from: 'sksatenderkumar59@gmail.com',
            to: email,
            subject: 'Re-Send OTP for Registration',
            text: `Your Resend OTP for registration is: ${otp}`,
        };

        try {
            // Use your defined transporter here
            const info = await transporter.sendMail(mailOptions);

            console.log('Email sent:', info.response);

            return res.status(200).json({
                success: true,
                message: "OTP sent successfully",
            });

        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({
                success: false,
                message: "Error sending OTP email",
            });
        }

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error in server",
        });
    }
};


// Login User Api

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


export { registercontroller, loginController, otpverify, resendotp }