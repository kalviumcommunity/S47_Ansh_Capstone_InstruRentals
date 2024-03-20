import express from 'express'
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app = express();
const PORT = process.env.PORT || 3000;
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
dotenv.config()
app.use(express.json());
app.use(cors());

const uri = process.env.URI;

mongoose
  .connect(uri)
  .then(()=>{
    console.log("Connected to MongoDB");
  })
  .catch((err)=>{
    console.log(err);
  })

app.listen(3000,()=>{
  console.log("Server is listening on port 3000.");
})


app.use("/api/user", userRoutes);

app.use("/api/auth",authRoutes);
