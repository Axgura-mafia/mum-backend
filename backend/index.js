const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const mongoose = require("mongoose");
// "mongodb+srv://chimdi:chimdindu2@cluster0.5zspaed.mongodb.net/?retryWrites=true&w=majority" || 'mongodb://localhost:27017/users'
mongoose.connect("mongodb+srv://chimdi:chimdindu2@cluster0.5zspaed.mongodb.net/?retryWrites=true&w=majority");
const port = process.env.PORT || 9099;
const db = mongoose.connection
db.on("error",(err)=>{console.log(err)})
db.once("open",()=> console.log("Connected to database"));
app.get("/",(req,res)=>{
    res.json({
        message:"Welcome to Mum's shop",
        status:200
    });
})
app.listen(port, () => {
    console.log(`Run up on :) http://localhost:${port}`);
   }) 