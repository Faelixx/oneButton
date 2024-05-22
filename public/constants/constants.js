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
const sounds = {};

function loadSound(soundName, soundPath) {
  fetch(soundPath)
  .then(res => res.arrayBuffer())
  .then(data => audioContext.decodeAudioData(data))
  .then(buffer => sounds[soundName] = buffer)
  .catch(e => console.error('Error loading audio file: ', e));
}

loadSound('tigerShot', '../audio/tiger-shot.mp3');
loadSound('sagat-dp', '../audio/sagat-dp.mp3');
loadSound('sagat-dk', '../audio/sagat-dk.mp3');
loadSound('sagat-worst', '../audio/sagat-worst.mp3');

loadSound('ryu-hadouken', '../audio/ryu-hadouken.mp3');
loadSound('ryu-monkey', '../audio/ryu-monkey.mp3');
loadSound('ryu-shoryuken', '../audio/ryu-shoryuken.mp3');
loadSound('ryu-serious', '../audio/ryu-serious.mp3');

loadSound('chun-kikoken', '../audio/chun-kikoken.mp3');
loadSound('chun-hizonchiu', '../audio/chun-hizonchiu.mp3');
loadSound('chun-dodge', '../audio/chun-dodge.mp3');
loadSound('chun-weak', '../audio/chun-weak.mp3');

loadSound('dan-woohoo', '../audio/dan-woohoo.mp3');
loadSound('dan-victory', '../audio/dan-victory.mp3');
loadSound('dan-back', '../audio/dan-back.mp3');
loadSound('dan-father', '../audio/dan-father.mp3');

function playSound(soundName) {
  const buffer = sounds[soundName];
  if (buffer) {
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);
    source.start(0);
  } else {
    console.error(`Sound '${soundName}' not found`)
  }
}

const oneShot = {
  tigerShot() {
      playSound('tigerShot');
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