const http =require('http');
const app = require('./app')

const port = process.env.port || 3000;

const server =http.createServer(app);

server.listen(4200, function() {
    console.log("Example app listening on port 3000!");

});

module.exports= server;