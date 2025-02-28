const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDb = require("./config/dbConnection");

const PORT = process.env.PORT || 5000;

require("dotenv").config();

const app = express();
connectDb();
app.use(cors());
app.use(express.json());
app.use("/contacts", require("./routes/routes"));
app.get("/", (req, res) =>{
    res.send("Contacts API is running...");
})


app.listen(PORT, () => console.log(`Server is runnning on ${PORT}`));