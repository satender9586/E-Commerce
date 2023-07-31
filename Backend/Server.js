
import express from "express";
const app = express();
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./Config/db.js"
import authroutes from "./routes/authroutes.js"

dotenv.config();
const PORT = 9089;

connectDB()
// middleware
app.use(express.json());
app.use(morgan('dev'))

// routes

app.use("/api/v1/auth", authroutes)


app.get("/", (req, res) => {

})

app.listen((process.env.PORT_NUMBER || PORT), (req, res) => {
    console.log("Server Is Running on ", process.env.PORT_NUMBER || PORT)
})