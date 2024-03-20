import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        type : String,
        required : true,
        unique : true
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
},{timestamps:true})

const UserModel = mongoose.model("User",userSchema);


export default UserModel;