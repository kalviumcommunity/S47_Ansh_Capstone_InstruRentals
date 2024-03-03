const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    username:{
        type : String,
        required : true,
        minlenght : [5, "Username must be atleast 5 characters"],
        maxlenght : 20,
    },
    email :{
        type : String,
        required : [true, "Email is required"],
        unique : [true, "Email already exists"],
    },
    password:{
        type : String,
        required : true,
        min : [6, "Password must be at least 6 characters."]
    },
})

const UserModel = mongoose.model("users",userSchema);
module.exports = UserModel;
