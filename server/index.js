import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app = express();
const PORT = process.env.PORT || 3000;
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import payRoutes from './routes/payment.route.js'
import Instrument from './models/instrument.model.js';
dotenv.config()
app.use(express.json());
app.use(cors())
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
const uri = process.env.URI;

mongoose
  .connect(uri)
  .then((data)=>{
    console.log("Connected to MongoDB");
  })
  .catch((err)=>{
    console.log(err);
  })
  app.get('/instruments', async (req, res) => {
    try {
      // Query MongoDB to fetch all instruments
      const instruments = await Instrument.find({});
      res.json({ success: true, data: instruments });
    } catch (error) {
      console.error("Error fetching instrument data:", error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  })
app.listen(3000,()=>{
  console.log("Server is listening on port 3000.");
})


app.use("/api/user", userRoutes);

app.use("/api/auth",authRoutes);

app.use("/api/payment",payRoutes);


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});