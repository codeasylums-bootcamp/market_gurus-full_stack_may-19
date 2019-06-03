const http = require('http'); // this http package imported provides some functionalty for spinning up a server
const app = require('./app');
const port = 3020;

const server = http.createServer(app);  

server.listen(port); // starts listening on the port


