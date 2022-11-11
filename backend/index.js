import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

const app =express()
const port =8800

dotenv.config();
// conncting to database
const connectToMongo = () => {
  mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to DBf");
  })
    .catch((err) => {
      throw err;
    });
};
app.listen(port,()=>{
    console.log("working")
    connectToMongo();
})