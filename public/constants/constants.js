// const tigerShotSound = new Audio();
// tigerShotSound.src = "../audio/tiger-shot.mp3";

// const oneShot = {
//   tigerShot() { tigerShotSound.play(); },
//   tigerShotStop() { tigerShotSound.stop(); }
// };

// const keyAction = {
//   1: { keydown: oneShot.tigerShot }
// };

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

let tigerShotBuffer;
fetch('../audio/tiger-shot.mp3')
.then(res => res.arrayBuffer())
.then(data => audioContext.decodeAudioData(data))
.then(buffer => tigerShotBuffer = buffer)
.catch(e => console.error('Error loading audio file: ', e));

function playSound(buffer) {
  const source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.connect(audioContext.destination);
  source.start(0);
}

const oneShot = {
  tigerShot() {
    if (tigerShotBuffer) {
      playSound(tigerShotBuffer);
    } else {
      console.error('Audio buffer not ready');
    }
  }
}

const keyAction = {
  1: { keydown: oneShot.tigerShot },
  2: { keydown: oneShot.tigerShot },
  3: { keydown: oneShot.tigerShot },
  4: { keydown: oneShot.tigerShot },
  'q': { keydown: oneShot.tigerShot },
  'w': { keydown: oneShot.tigerShot },
  'e': { keydown: oneShot.tigerShot },
  'r': { keydown: oneShot.tigerShot },
  'a': { keydown: oneShot.tigerShot },
  's': { keydown: oneShot.tigerShot },
  'd': { keydown: oneShot.tigerShot },
  'f': { keydown: oneShot.tigerShot },
  'z': { keydown: oneShot.tigerShot },
  'x': { keydown: oneShot.tigerShot },
  'c': { keydown: oneShot.tigerShot },
  'v': { keydown: oneShot.tigerShot },
};