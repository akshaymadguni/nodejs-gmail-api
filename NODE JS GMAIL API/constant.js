const express = require("express");
require("dotenv").config();

const auth = {
        type:"OAuth2",
        user:"akshay@azblock.in",
        client_Id:process.env.CLIENT_ID,
        client_Serete:process.env.CLIENT_SECRETE,
        refreshToken: process.env.REFRESH_TOKEN,
};

const mailOptions = {
        from:"akshay@azblock.in",
        to:"akshay@azblock.in",
        subject:"GMAIL API USING NODE JS",
};

module.exports{
    auth,
    mailOptions,
};