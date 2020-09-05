const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");



//USING ALL THE TOOLS
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());


const productRouter = require("./routes/productRoute");


//CONNECTING TO DB
mongoose.connect('mongodb://127.0.0.1:27017/FLORDEFLOR', 
{ useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established successful");
})

//CONNECTING TO THE ROUTES
app.use("/products", productRouter);


//LISTENING TO THE CONNECTION
app.listen(port, () => {
    console.log(`Server is running on port: ${port}` );
});