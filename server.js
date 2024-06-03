// Server side information here

const express = require('express');
const WebSocket = require('ws');
const path = require('path')
const http = require('http');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const PORT = 1337;


app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.render("index");
});

wss.on('connection', ws => {
  ws.on('message', message => {
    const sound = sounds[message];
    if (sound) {
      ws.send(sound), { binary: true };
    } else {
      ws.send('Sound not found')
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

