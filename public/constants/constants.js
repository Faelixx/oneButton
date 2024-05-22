const tigerShotSound = new Audio();
tigerShotSound.src = "../audio/tiger-shot.mp3";

const oneShot = {
  tigerShot() { tigerShotSound.play(); },
  tigerShotStop() { tigerShotSound.stop(); }
};

const keyAction = {
  1: { keydown: oneShot.tigerShot }
};
