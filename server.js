// Server side information here

const express = require('express');

const PORT = 1337;
const app = express();

const http = require('http');
const server = http.createServer(app);

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(express.json());

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.render("index");
});