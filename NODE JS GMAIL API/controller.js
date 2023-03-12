const express=require("express");
const axios=require("axios");
const nodemailer=require("nodemailer");
const {google}=require("googleapis");
require("dotenv").config();

const {generateConfig} = require("./utils");
const CONSTANTS = require("./constant");


const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REFRESH_TOKEN,
);

oAuth2Client.setCredentials({refresh_token:process.env.REFRESH_TOKEN});

async function readMailAndRespond(req,res){
    try{
        const url = 'https://google.gmailapis.com/gmail/v1/users/akshay@azblock.in/${req.prams.messageID}';
        const { token } = await OAuth2Client.getAccessToken();
        const config = generateConfig(url,accessToken);
        const responce = await axios(config);
        let data = await responce.data;
        console.log(data);
        const accessToken = await OAuth2
        Client.getAccessToken();
        
        const transpoart = nodemailer.Createtranspoart({
            service: "gmail",
            auth:{
                ...CONSTANT.mailOptions,
                accessToken:accessToken, 
            },
        });
        
        const mailOptions = { 
                ...CONSTANT.mailOptions,
                text:"Greetings, mail user is out of station, will be eager to  respond you soon!",
            };

            const result = await transoprt.sendMail(mailOptions);
            res.send(result);
            console.log(result);

        } catch (error){
        console.log(error);
        res.send(error);
    }

};

module.exports={
    readMailAndRespond,
};
