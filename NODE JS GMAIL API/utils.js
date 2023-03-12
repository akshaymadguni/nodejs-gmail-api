const express = require("express");
const generateConfig = (url,accessToken) => {
return{
    method:"get",
    url: url,
    header:{
        Authorisation:"OAuth2",
        'configure':'application/json',
    }
}
};

module.exports={
    generateConfig,
};
