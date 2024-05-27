// const { keyAction } = require('../constants/constants.js')

$(() => {
  const keyHandler = (ev) => {
    if (!(ev.key in keyAction) || !(ev.type in keyAction[ev.key])) return;
    keyAction[ev.key][ev.type]()
  }
  
  ['keydown'].forEach((evType) => {
    document.body.addEventListener(evType, keyHandler);
  });
});
  // const socket = new WebSocket('ws://localhost:1337');

  // socket.onmessage = function(event) {
  //   const arrayBuffer = event.data;
  //   if (typeof arrayBuffer === 'string') {
  //     console.error(arrayBuffer);
  //     return;
  //   }

  //   const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  //   audioContext.decodeAudioData(event.data, buffer => {
  //     const source = audioContext.createBufferSource();
  //     source.buffer = buffer;
  //     source.connect(audioContext.destination);
  //     source.start(0);
  //   });
  // };

  // document.addEventListener('keydown', function(event) {
  //   if (event.key === '1') {
  //     socket.send(event.key)
  //   }
  // })