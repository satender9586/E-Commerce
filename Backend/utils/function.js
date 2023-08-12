import nodemailer from "nodemailer"



export const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    service: 'gmail',
    auth: {
        user: 'sksatenderkumar59@gmail.com',
        pass: 'nlfggpdqwoojbdoe',
    },
});