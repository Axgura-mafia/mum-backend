require("dotenv").config();
const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const axios = require("axios");
const request = require("request");
const {product_detailss,order_detailss, payment_detailss} = require("../Model/index");
//add a product,
//edit a product,
//delete a product,
//get all product
//get product info
//
router.post("/product-details",async(req,res)=>{
    let {name,rate,quantity,brand,category,price,description,sizes,color,image,weight} = req.body;
    price = Number(price);
    try{
       if(name == "" || rate == "" || quantity == "" || brand == "" || category == ""){

       }else if(typeof price  !== "number"){

       }else{
        let ide = uuid.v4();
        const product_details = new product_detailss({
            name,
            rate,
            sold_out:false,
            quantity,
            sold:"0",
            brand,
            category,
            ide,
            price,
            description,
            sizes,
            color,
            image,
            weight
        });
        product_details.save().then(corn=>{
            res.status(201).json({
                message:"New Product Added",
                status:201
            })
        }).catch(err=>{
            res.status(401).json({
                message:`Product err: ${err.message}`,
                status:err.status
            })
        })
       }

    }catch(err){
        res.status(err.status).json({
            message:err.message,
            status:err.status
        })
    }
    
})