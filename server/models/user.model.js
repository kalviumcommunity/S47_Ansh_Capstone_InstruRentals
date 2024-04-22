import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    items: [{ type:String, ref: 'Product' }],
    quantity: [{ type: Number, required: true }], 
    totalPrice: { type: Number, required: true },
}, { timestamps: true });

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    profilePicture:{
        type:String,
        default:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    orders: [orderSchema],
}, {timestamps:true});

const User = mongoose.model("User",userSchema);

export default User;

