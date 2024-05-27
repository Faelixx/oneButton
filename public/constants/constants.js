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
    },
  dpSagat() {
      playSound('sagat-dp');
    },
  dkSagat() {
      playSound('sagat-dk');
    },
  worstSagat() {
      playSound('sagat-worst');
    },
    //
  hadoukenRyu() {
      playSound('ryu-hadouken');
    },
  monkeyRyu() {
      playSound('ryu-monkey');
    },
  shoryukenRyu() {
      playSound('ryu-shoryuken');
    },
  seriousRyu() {
      playSound('ryu-serious');
    },
    //
  kikokenChun() {
      playSound('chun-kikoken');
    },
  hizonchiuChun() {
      playSound('chun-hizonchiu');
    },
  dodgeChun() {
      playSound('chun-dodge');
    },
  weakChun() {
      playSound('chun-weak');
    },
    //
    wooDan() {
      playSound('dan-woohoo');
    },
  vicDan() {
      playSound('dan-victory');
    },
  backDan() {
      playSound('dan-back');
    },
  daddyDan() {
      playSound('dan-father');
    },
    //
}

const keyAction = {
  1: { keydown: oneShot.tigerShot },
  2: { keydown: oneShot.dpSagat },
  3: { keydown: oneShot.dkSagat },
  4: { keydown: oneShot.worstSagat },
  'q': { keydown: oneShot.hadoukenRyu },
  'w': { keydown: oneShot.shoryukenRyu },
  'e': { keydown: oneShot.monkeyRyu },
  'r': { keydown: oneShot.seriousRyu },
  'a': { keydown: oneShot.kikokenChun },
  's': { keydown: oneShot.hizonchiuChun },
  'd': { keydown: oneShot.dodgeChun },
  'f': { keydown: oneShot.weakChun },
  'z': { keydown: oneShot.wooDan },
  'x': { keydown: oneShot.backDan },
  'c': { keydown: oneShot.vicDan },
  'v': { keydown: oneShot.daddyDan },
};