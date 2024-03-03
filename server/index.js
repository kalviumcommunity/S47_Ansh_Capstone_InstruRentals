const express = require("express")
const cors = require('cors');
const mongoose = require("mongoose");
const app = express()
const PORT = process.env.PORT || 8058;
require('dotenv').config();
const UserModel = require('./models/User')

app.use(express.json())
app.use(cors())

const uri = process.env.URI

mongoose.connect(uri)
    .then(()=>{
        console.log("Connected to Mongodb")
        app.get('/',(req,res)=>{
            UserModel.find({})
            .then(users=> res.json(users))
        })

        app.post('/createUser', (req,res)=>{
            let {username,email,password} = req.body;
            UserModel.create({username,email,password})
                .then((user) => res.json(user))
                .catch((err)=> res.json(err))
        })
     })



app.listen("8058",(err)=>{
    if (err){
        console.log(err);
    }
})