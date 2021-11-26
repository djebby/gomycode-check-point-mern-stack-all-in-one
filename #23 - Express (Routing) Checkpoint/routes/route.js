const express = require("express");
const router = express.Router();


router.get("/services",(req,res)=>{
    res.render("OurServices");
});


router.get("/contact",(req,res)=>{
    res.render("ContactUs");
});


module.exports = router;