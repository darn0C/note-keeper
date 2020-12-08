const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const uri = process.env.ATLAS_URI;

app.get("/", function (req, res) {
    console.log("GET")
    res.send("Hello Get")
})

app.post("/", function (req,res) {
    res.send(req.body)
})

app.listen(port)