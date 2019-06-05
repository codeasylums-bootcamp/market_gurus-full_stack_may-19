const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const merchantModel =require('../models/merchantModel');


router.get('/',function(req,res){
    res.send("Merchant's Home").status(200);
    console.log("hello world from merchants router");
});

router.post('/',function(req,res){
    const newMerchant = new merchantModel({
        _id : new mongoose.Types.ObjectId(),
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    });

    merchantModel.find({email : req.body.email})
    .exec()
    .then(users=>{
        if(users.length>0){
            res.send("Account already exists").status(400);
        }
        else{
            newMerchant.save();
            res.send("Account created").status(201);
        }
    })
    .catch(err=>{
        console.log(err);
    })
});



module.exports = router;