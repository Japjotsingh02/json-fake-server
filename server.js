const jsonServer = require('json-server');
// const clone = require('clone');
const data = require('./db.json');
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(router);
server.listen(process.env.PORT || 8000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server;