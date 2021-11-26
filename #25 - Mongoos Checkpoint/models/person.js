//Creation of a Person Prototype
const mongoose = require("mongoose");
const connection = require("../util/database");

const person = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age: Number,
    favoriteFoods:[String]
});


const Person = connection.model("Person",person);
module.exports = Person;