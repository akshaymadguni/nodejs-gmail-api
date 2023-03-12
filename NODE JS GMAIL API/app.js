const express = require("express");
const router = requie("./routers");
require("dotenv").config();

const app=express();

app.listen(process.env.PORT,() => {
  console.log("Listnign Port"+ process.env.PORT) ; 
});

app.get('/',async (req,res)=> {
    res.send("Welcome, Its running");
});

app.use('/api',routers);