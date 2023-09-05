import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import booksRoutes from "./Routes/Books.js"
import cors from "cors"

const app =express()

dotenv.config();
const port =process.env.PORT || 8800
// conncting to database
const connectToMongo = () => {
  mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to DB");
  })
    .catch((err) => {
      throw err;
    });
};
app.use(express.json());
app.use(cors());
app.use("/api/books",booksRoutes)
app.listen(port,()=>{
   
    connectToMongo();
})