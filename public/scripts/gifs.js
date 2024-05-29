// Create an img as the first frame
// Then replace the img with a gif on 
// keydown

const imgIds = {
  //Sagat
  tigerShot: document.getElementById('tiger-shot'),
  tigerDp: document.getElementById('tiger-uppercut'),
  tigerKDp: document.getElementById('tiger-knee'),
  sagatTaunt: document.getElementById('sagat-taunt'),
  //Ryu
  ryuHadouken: document.getElementById('ryu-hadouken'),
  ryuDp: document.getElementById('ryu-shoryuken'),
  ryuTatsu: document.getElementById('ryu-tastu'),
  ryuTaunt: document.getElementById('ryu-taunt'),
  //Chun-Li
  chunKiko: document.getElementById('chun-kiko'),
  chunOh: document.getElementById('chun-oh'),
  chunKick: document.getElementById('chun-kick'),
  chunTaunt: document.getElementById('chun-taunt'),
  //Dan
  danYahoo: document.getElementById('dan-yahoo'),
  danSuper: document.getElementById('dan-super'),
  danVictory: document.getElementById('dan-victory'),
  danFather: document.getElementById('dan-father'),
  
}

const imgs = {
  sagat: {
    still: "images/stills/sagat-taunt.gif",
    tigerShot: "images/2.gif",
    tigerDp: "images/sagat-dp.gif",
    tigerKDp: "images/tigerKnee.gif",
    sagatTaunt: "images/sagat-taunt.gif"
  },
  ryu: {
    still: "images/stills/Ryu-still.gif",
    ryuHadouken: "images/ryu/Ryuhadoken-1.gif",
    ryuDp: "images/ryu/ryu-shoryuken.gif",
    ryuTatsu: "images/ryu/tatsu.gif",
    ryuTaunt: "images/ryu/Ryugif-1.gif",
  },
  chun: {
    still: "images/stills/chun-still.png",
    chunKiko: "images/chun/chun-kiko.gif",
    chunOh: "images/chun/chun-oh.gif",
    chunKick: "images/chun/chun-kick.gif",
    chunTaunt: "images/chun/chun-taunt.gif",
  },
  dan: {
    still: "images/stills/dan-still.gif",
    danYahoo: "images/dan/dan-yahoo.gif",
    danSuper: "images/dan/dan-super.gif",
    danVictory : "images/dan/mvc2-dan3.gif",
    danFather : "images/dan/dan-cry.gif",
  }
}

const replaceImg = (img, newSrc) => {
  img.src = newSrc;
  console.log("Image changed!");
}

const replaceImgAction = {
  isPlaying: false,

  cancel() {
    clearTimeout(this.timeoutID);
    this.isPlaying = false;
  },

  tigerShotReplaceDown() {
    if (!this.isPlaying){
      this.isPlaying = true;
      replaceImg(imgIds.tigerShot, imgs.sagat.tigerShot);
    }
  },

  tigerShotReplaceUp() {
    if (typeof this.timeoutID === "number") {
      this.cancel();
    }

    this.timeoutID = setTimeout(() => {
      replaceImg(imgIds.tigerShot, imgs.sagat.still);
      this.isPlaying = false;
    }, 1000)

  },

  //

  tigerDpReplaceDown() {
    if (!this.isPlaying){
      this.isPlaying = true;
      replaceImg(imgIds.tigerDp, imgs.sagat.tigerDp);
    }
  },

  tigerDpReplaceUp() {
    if (typeof this.timeoutID === "number") {
      this.cancel();
    }

    this.timeoutID = setTimeout(() => {
      replaceImg(imgIds.tigerDp, imgs.sagat.still);
      this.isPlaying = false;
    }, 1300)

  },

  //

};


const imgAction = {
  1: { 
    keydown: replaceImgAction.tigerShotReplaceDown,
    keyup: replaceImgAction.tigerShotReplaceUp
    },
  2: { 
    keydown: replaceImgAction.tigerDpReplaceDown,
    keyup: replaceImgAction.tigerDpReplaceUp
    }
};

replaceImgAction.tigerShotReplaceDown = replaceImgAction.tigerShotReplaceDown.bind(replaceImgAction);
replaceImgAction.tigerShotReplaceUp = replaceImgAction.tigerShotReplaceUp.bind(replaceImgAction);
replaceImgAction.cancel = replaceImgAction.cancel.bind(replaceImgAction);

replaceImgAction.tigerDpReplaceDown = replaceImgAction.tigerDpReplaceDown.bind(replaceImgAction);
replaceImgAction.tigerDpReplaceUp = replaceImgAction.tigerDpReplaceUp.bind(replaceImgAction);
replaceImgAction.cancel = replaceImgAction.cancel.bind(replaceImgAction);