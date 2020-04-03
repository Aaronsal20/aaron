const http =require('http');
const app = require('./app')


const server =http.createServer(app);

app.listen( app.get( 'port' ), function() {
    console.log( 'Node server is running on port ' + app.get( 'port' ));
    });

module.exports= server;