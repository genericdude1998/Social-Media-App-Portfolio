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

        if(authenticateUser(username, password)){
            const token = generateJWT(username);
            res.cookie('Mock_JWT_token', token);
            res.send('sent a JWT token via cookie');
        }
        else{
            res.send('Failed Authentication');
        }
    })
}

function authenticateUser(username,password){
    if(username && password){
        return username === 'Adam' && password === 1234 ? true:false
    }
}

function generateJWT(username){
    return jwt.sign(username, credentials.cookieSecret);
}

module.exports = devServer;