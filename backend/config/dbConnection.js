const mongoose = require("mongoose");

require("dotenv").config();

const connectDb = () =>{
    try{
        mongoose.connect(process.env.DATABASE_URL,{
            useNewUrlParser: true,
    useUnifiedTopology: true,
        })
        console.log("MongoDB Connected");
    }
    catch(err){
        console.log(err);
    }
}
module.exports = connectDb;
