import express from "express";
import mongoose from "mongoose";
const app = express();

mongoose.connect(
    "mongodb+srv://Teddy:Thymega@cluster0.lmm2b.mongodb.net/?retryWrites=true&w=majority"
).then(()=>app.listen(5000))
.then(()=>
console.log("connected to database and listening to port 5000")
)
.catch((e)=> console.log(e))