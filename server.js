const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // file name of your database
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; // You can change the port

server.use(middlewares);
server.use(router);

// server.listen(port);
server.listen(port)
