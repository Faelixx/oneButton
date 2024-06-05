// Create an img as the first frame
// Then replace the img with a gif on 
// keydown

const p1 = document.getElementById("p1");

const imgs = {
  sagat: {
    still: "images/stills/256x128/sagat.png",
    tigerShot: "images/2.gif",
    tigerDp: "images/sagat-dp.gif",
    tigerKDp: "images/tigerKnee.gif",
    sagatTaunt: "images/sagat-taunt.gif"
  },
  ryu: {
    still: "images/stills/256x128/ryu.png",
    ryuHadouken: "images/ryu/Ryuhadoken-1.gif",
    ryuDp: "images/ryu/ryu-shoryuken.gif",
    ryuTatsu: "images/ryu/tatsu.gif",
    ryuTaunt: "images/ryu/Ryugif-1.gif",
  },
  chun: {
    still: "images/stills/256x128/chun.png",
    chunKiko: "images/chun/chun-kiko.gif",
    chunOh: "images/chun/chun-oh.gif",
    chunKick: "images/chun/chun-kick.gif",
    chunTaunt: "images/chun/chun-taunt.gif",
  },
  dan: {
    still: "images/stills/256x128/dan.png",
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

const createReplaceActions = (imgSrc, duration) => {
  return {
    replaceDown() {
      if (!this.isPlaying) {
        this.isPlaying = true;
        replaceImg(p1, imgSrc);
      }
    },

    replaceUp() {
      if (typeof this.timeoutID === "number") {
        this.cancel();
      }

          this.timeoutID = setTimeout(() => {
            replaceImg(p1, '');
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
  tigerShot: createReplaceActions(imgs.sagat.tigerShot, 1000),
  tigerDp: createReplaceActions(imgs.sagat.tigerDp, 1300),
  tigerKDp: createReplaceActions(imgs.sagat.tigerKDp, 500),
  sagatTaunt: createReplaceActions(imgs.sagat.sagatTaunt, 900),
};
const ryuActions = {
  ryuHadouken: createReplaceActions(imgs.ryu.ryuHadouken, 1300),
  ryuDp: createReplaceActions(imgs.ryu.ryuDp, 1300),
  ryuTatsu: createReplaceActions(imgs.ryu.ryuTatsu, 1300),
  ryuTaunt: createReplaceActions(imgs.ryu.ryuTaunt, 1300),

};
const chunActions = {
  chunKiko: createReplaceActions(imgs.chun.chunKiko, 1300),
  chunOh: createReplaceActions(imgs.chun.chunOh, 1300),
  chunKick: createReplaceActions(imgs.chun.chunKick, 1300),
  chunTaunt: createReplaceActions(imgs.chun.chunTaunt, 1300),
};
const danActions = {
  danYahoo: createReplaceActions(imgs.dan.danYahoo, 1300),
  danSuper: createReplaceActions(imgs.dan.danSuper, 2300),
  danVictory: createReplaceActions(imgs.dan.danVictory, 1300),
  danFather: createReplaceActions(imgs.dan.danFather, 800),
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