const tigerShotSound = new Audio();
tigerShotSound.src = "../audio/tiger-shot.mp3";

const oneShot = {
  tigerShot() { tigerShotSound.play(); },
};

const keyAction = {
  q: { keydown: oneShot.tigerShot }
};
