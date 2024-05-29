// Create an img as the first frame
// Then replace the img with a gif on 
// keydown

const getElementsByIds = (ids) => {
  return ids.reduce((acc, id) => {
    acc[id] = document.getElementById(id);
    return acc;
  }, {});
};

const imgIds = getElementsByIds([
  'tiger-shot', 'tiger-uppercut', 'tiger-knee', 'sagat-taunt', 
  'ryu-hadouken', 'ryu-shoryuken', 'ryu-tatsu', 'ryu-taunt',
  'chun-kiko', 'chun-oh', 'chun-kick', 'chun-taunt',
  'dan-yahoo', 'dan-super', 'dan-victory', 'dan-father'
]);

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

const createReplaceActions = (imgId, imgSrc, stillImgSrc, duration) => {
  return {
    replaceDown() {
      if (!this.isPlaying) {
        this.isPlaying = true;
        replaceImg(imgId, imgSrc);
      }
    },

    replaceUp() {
      if (typeof this.timeoutID === "number") {
        this.cancel();
      }

          this.timeoutID = setTimeout(() => {
            replaceImg(imgId, stillImgSrc);
            this.isPlaying = false;
          }, duration);
    }
  }
}

const replaceImgAction = {
  isPlaying: false,

  cancel() {
    clearTimeout(this.timeoutID);
    this.isPlaying = false;
  },
};

const sagatActions = {
  tigerShot: createReplaceActions(imgIds['tiger-shot'], imgs.sagat.tigerShot, imgs.sagat.still, 1000),
  tigerDp: createReplaceActions(imgIds['tiger-uppercut'], imgs.sagat.tigerDp, imgs.sagat.still, 1300),
  tigerKDp: createReplaceActions(imgIds['tiger-knee'], imgs.sagat.tigerKDp, imgs.sagat.still, 500),
  sagatTaunt: createReplaceActions(imgIds['sagat-taunt'], imgs.sagat.sagatTaunt, imgs.sagat.still, 900),
};
const ryuActions = {
  ryuHadouken: createReplaceActions(imgIds['ryu-hadouken'], imgs.ryu.ryuHadouken, imgs.ryu.still, 1300),
  ryuDp: createReplaceActions(imgIds['ryu-shoryuken'], imgs.ryu.ryuDp, imgs.ryu.still, 1300),
  ryuTatsu: createReplaceActions(imgIds['ryu-tatsu'], imgs.ryu.ryuTatsu, imgs.ryu.still, 1300),
  ryuTaunt: createReplaceActions(imgIds['ryu-taunt'], imgs.ryu.ryuTaunt, imgs.ryu.still, 1300),

};
const chunActions = {
  chunKiko: createReplaceActions(imgIds['chun-kiko'], imgs.chun.chunKiko, imgs.chun.still, 1300),
  chunOh: createReplaceActions(imgIds['chun-oh'], imgs.chun.chunOh, imgs.chun.still, 1300),
  chunKick: createReplaceActions(imgIds['chun-kick'], imgs.chun.chunKick, imgs.chun.still, 1300),
  chunTaunt: createReplaceActions(imgIds['chun-taunt'], imgs.chun.chunTaunt, imgs.chun.still, 1300),
};
const danActions = {
  danYahoo: createReplaceActions(imgIds['dan-yahoo'], imgs.dan.danYahoo, imgs.dan.still, 1300),
  danSuper: createReplaceActions(imgIds['dan-super'], imgs.dan.danSuper, imgs.dan.still, 2300),
  danVictory: createReplaceActions(imgIds['dan-victory'], imgs.dan.danVictory, imgs.dan.still, 1300),
  danFather: createReplaceActions(imgIds['dan-father'], imgs.dan.danFather, imgs.dan.still, 800),
};

Object.assign(replaceImgAction, sagatActions);
for (const key in replaceImgAction) {
  if (typeof replaceImgAction[key] === 'function') {
    replaceImgAction[key] = replaceImgAction[key].bind(replaceImgAction);
  }
}

Object.assign(replaceImgAction, ryuActions);
for (const key in replaceImgAction) {
  if (typeof replaceImgAction[key] === 'function') {
    replaceImgAction[key] = replaceImgAction[key].bind(replaceImgAction);
  }
}

Object.assign(replaceImgAction, chunActions);
for (const key in replaceImgAction) {
  if (typeof replaceImgAction[key] === 'function') {
    replaceImgAction[key] = replaceImgAction[key].bind(replaceImgAction);
  }
}

Object.assign(replaceImgAction, danActions);
for (const key in replaceImgAction) {
  if (typeof replaceImgAction[key] === 'function') {
    replaceImgAction[key] = replaceImgAction[key].bind(replaceImgAction);
  }
}


const imgAction = {
  //
  1: { 
    keydown: replaceImgAction.tigerShot.replaceDown.bind(replaceImgAction),
    keyup: replaceImgAction.tigerShot.replaceUp.bind(replaceImgAction)
    },
  2: { 
    keydown: replaceImgAction.tigerDp.replaceDown.bind(replaceImgAction),
    keyup: replaceImgAction.tigerDp.replaceUp.bind(replaceImgAction)
    },
  3: { 
    keydown: replaceImgAction.tigerKDp.replaceDown.bind(replaceImgAction),
    keyup: replaceImgAction.tigerKDp.replaceUp.bind(replaceImgAction)
    },
  4: { 
    keydown: replaceImgAction.sagatTaunt.replaceDown.bind(replaceImgAction),
    keyup: replaceImgAction.sagatTaunt.replaceUp.bind(replaceImgAction)
    },
  //
  'q': { 
    keydown: replaceImgAction.ryuHadouken.replaceDown.bind(replaceImgAction),
    keyup: replaceImgAction.ryuHadouken.replaceUp.bind(replaceImgAction)
    },
  'w': { 
    keydown: replaceImgAction.ryuDp.replaceDown.bind(replaceImgAction),
    keyup: replaceImgAction.ryuDp.replaceUp.bind(replaceImgAction)
    },
  'e': { 
    keydown: replaceImgAction.ryuTatsu.replaceDown.bind(replaceImgAction),
    keyup: replaceImgAction.ryuTatsu.replaceUp.bind(replaceImgAction)
    },
  'r': { 
    keydown: replaceImgAction.ryuTaunt.replaceDown.bind(replaceImgAction),
    keyup: replaceImgAction.ryuTaunt.replaceUp.bind(replaceImgAction)
    },
  //
  'a': { 
    keydown: replaceImgAction.chunKiko.replaceDown.bind(replaceImgAction),
    keyup: replaceImgAction.chunKiko.replaceUp.bind(replaceImgAction)
    },
  's': { 
    keydown: replaceImgAction.chunOh.replaceDown.bind(replaceImgAction),
    keyup: replaceImgAction.chunOh.replaceUp.bind(replaceImgAction)
    },
  'd': { 
    keydown: replaceImgAction.chunKick.replaceDown.bind(replaceImgAction),
    keyup: replaceImgAction.chunKick.replaceUp.bind(replaceImgAction)
    },
  'f': { 
    keydown: replaceImgAction.chunTaunt.replaceDown.bind(replaceImgAction),
    keyup: replaceImgAction.chunTaunt.replaceUp.bind(replaceImgAction)
    },
  //
  'z': { 
    keydown: replaceImgAction.danYahoo.replaceDown.bind(replaceImgAction),
    keyup: replaceImgAction.danYahoo.replaceUp.bind(replaceImgAction)
    },
  'x': { 
    keydown: replaceImgAction.danSuper.replaceDown.bind(replaceImgAction),
    keyup: replaceImgAction.danSuper.replaceUp.bind(replaceImgAction)
    },
  'c': { 
    keydown: replaceImgAction.danVictory.replaceDown.bind(replaceImgAction),
    keyup: replaceImgAction.danVictory.replaceUp.bind(replaceImgAction)
    },
  'v': { 
    keydown: replaceImgAction.danFather.replaceDown.bind(replaceImgAction),
    keyup: replaceImgAction.danFather.replaceUp.bind(replaceImgAction)
    },
  //
};

replaceImgAction.cancel = replaceImgAction.cancel.bind(replaceImgAction);