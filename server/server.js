const credentials = require('./credentials.js');
const express = require('express');
const jwt = require('jsonwebtoken');
const posts = require('./posts.js');
const users = require('./users');
const commentsByPost = require('./comments.js');

var token;


const devServer = (devServer) => {
    const app = devServer.app;

    app.use(require('cookie-parser')(credentials.cookieSecret));
    app.use(express.json());

    app.post('/login', (req,res) => {
        const username = req.body.username;
        const password = req.body.password;

        if(authenticateUserLogin(username, password)){
            token = generateJWT(username);
            res.json(token);
        }
        else{
            res.send(401, {errorMessage: 'username or password are wrong please try again!'});
        }
    });

    app.post('/newPost', (req,res) => {
        const content = req.body.content;
        const newPost = {id: posts.lenght + 1, name: 'Me', content: content, date: new Date().toLocaleString()}
        posts.module.push(newPost);
        res.send(newPost);
    })

    app.get('/posts', (req,res) => {
        const userToken = req.cookies.token;
        console.log(`${userToken} used to access posts`);
        if(userToken && userToken === token){
            res.json(posts.module);
        }
        else{
            res.send(401, 'not Authorised!')
        }
    })

    app.get('/users/:id', (req,res) => {
        const userToken = req.cookies.token;
        const userId = req.params.id;

        console.log(`${userToken} used to access users`);
        if(userToken && userToken === token){
            res.json(users.module[userId]);
        }
        else{
            res.send(401, 'not Authorised!')
        }
    })

    app.get('/comments/:postId', (req,res) => {
        const userToken = req.cookies.token;
        const postId = req.params.postId;

        console.log(`${userToken} used to access posts`);
        if(userToken && userToken === token){
            res.json(commentsByPost.filter(comment => comment.postId == postId));
        }
        else{
            res.send(401, 'not Authorised!')
        }
    })
}

function authenticateUserLogin(username,password){
    if(username && password){
        return username === 'Adam' && password === '1234' ? true:false
    }
}

function generateJWT(username){
    return jwt.sign(username, credentials.cookieSecret);
}

module.exports = devServer;