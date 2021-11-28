const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fullname:String,
    email:String,
    age:Number,
});


module.exports = mongoose.model("users",userSchema);