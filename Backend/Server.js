const express = require("express");
const app = express()
const dotenv = require("dotenv")
const morgan = require("morgan")
const connectDB = require("./Config/db")

dotenv.config();
const PORT = 9089;

connectDB()
// middleware
app.use(express.json());
app.use(morgan('dev'))

app.get("/", (req, res) => {
    console.log("Hello World")
})

app.listen((process.env.PORT_NUMBER || PORT), (req, res) => {
    console.log("Server Is Running on ", process.env.PORT_NUMBER || PORT)
})