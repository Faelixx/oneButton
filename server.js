// Server side information here

const express = require('express');

const PORT = 1337;
const app = express();

const http = require('http');
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});