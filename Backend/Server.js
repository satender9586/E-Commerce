const express = require("express");
const app = express()
const dotenv=require("dotenv")

dotenv.config();
const PORT = 9089;

console.log()

app.get("/", (req, res) => {
    console.log("Hello World")
})

app.listen((process.env.PORT_NUMBER||PORT), (req, res) => {
    console.log("Server Is Runnin on ", process.env.PORT_NUMBER||PORT)
})