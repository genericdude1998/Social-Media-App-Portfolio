const credentials = require('./credentials.js');
const jwt = require('jsonwebtoken');

const devServer = (devServer) => {
    const app = devServer.app;
    
    app.use(require('cookie-parser')(credentials.cookieSecret));

    app.get('/', (req,res) => {
        const token = generateJWT('sample_username');
        res.cookie('test_JWT_Token', token);
        res.send('sent a JWT token via cookie');
    })
}

function generateJWT(username){
    return jwt.sign(username, credentials.cookieSecret);
}

module.exports = devServer;