const express = require('express');
const app = express();
const router =require('./src/Routes/api');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const mongoose = require('mongoose');
require("dotenv").config();
const cors = require('cors');

mongoose.connect('mongodb://127.0.0.1:27017/projectstructure', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


// Routing Implement
//app.use("/api/v1",router)

// Undefined Route Implement
app.use("*",(req,res)=>{
    res.status(404).json({status:"error",data:"Not Found"})
})

module.exports=app;