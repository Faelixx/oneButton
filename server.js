// Server side information here

const express = require('express');
const WebSocket = require('ws');
const fs = require('fs')
const path = require('path')
const http = require('http');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const PORT = 1337;

const soundPath = path.join(__dirname, 'public/audio', 'tiger-shot.mp3');
console.log('Loading sound from: ', soundPath);

const sounds = {
  '1': fs.readFileSync(soundPath),
}

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
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

