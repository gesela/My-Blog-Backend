const  express = require("express");
const  mongoose = require("mongoose");


const app = express();

app.use("/api/user",require('./routes/users'))



mongoose.connect(
    "mongodb+srv://Teddy:Thymega@cluster0.lmm2b.mongodb.net/?retryWrites=true&w=majority"
)
.then(()=>app.listen(5000))
.then(()=>
console.log("connected to database and listening to port 5000")
)
.catch((e)=> console.log(e))