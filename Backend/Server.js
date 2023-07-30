const express = require("express");
const app = express()

const PORT = 9089;

app.get("/", (req, res) => {
    console.log("Hello World")
})

app.listen(PORT, (req, res) => {
    console.log("Server Is Runnin on ", PORT)
})