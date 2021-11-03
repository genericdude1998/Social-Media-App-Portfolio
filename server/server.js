const credentials = require('./credentials.js');
const jwt = require('jsonwebtoken');

const devServer = (devServer) => {
    const app = devServer.app;
    
    app.use(require('cookie-parser')(credentials.cookieSecret));

    app.get('/', (req,res) => {
        res.cookie('test_cookie', 'test_value');
        res.send();
    })
}

module.exports = devServer;