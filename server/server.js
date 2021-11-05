const credentials = require('./credentials.js');
const express = require('express');
const jwt = require('jsonwebtoken');

const devServer = (devServer) => {
    const app = devServer.app;
    
    app.use(require('cookie-parser')(credentials.cookieSecret));
    app.use(express.json());

    app.post('/login', (req,res) => {
        const username = req.body.username;
        const password = req.body.password;

        if(authenticateUserLogin(username, password)){
            const token = generateJWT(username);
            res.json(token);
        }
        else{
            res.send(401, {error: 'bad login'});
        }
    })
}

function authenticateUserLogin(username,password){
    if(username && password){
        return username === 'Adam' && password === 1234 ? true:false
    }
}

function generateJWT(username){
    return jwt.sign(username, credentials.cookieSecret);
}

module.exports = devServer;