const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", function (req, res) {
    console.log("GET")
    res.send("Hello Get")
})

app.post("/", function (req,res) {
    res.send(req.body)
})

app.listen(port)