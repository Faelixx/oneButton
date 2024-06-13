// Create an img as the first frame
// Then replace the img with a gif on
// keydown

const p1 = document.getElementById("p1");

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
}

const resetImg = () => {
  replaceImg(p1, '');
}

const createReplaceActions = (imgSrc, duration, imgId) => {
  const actions = {
    idPlaying: false,
    timeoutID: null,

    cancel() {
      clearTimeout(this.timeoutID);
      this.isPlaying = false;
    },
    replaceDown() {
      if (!this.isPlaying) {
        this.isPlaying = true;
        resetImg();
        replaceImg(p1, imgSrc);
        imgId.classList.add('flashing-animation');
      }
    },
    replaceUp() {
      if (typeof this.timeoutID === "number") {
        this.cancel();
      }
  
          this.timeoutID = setTimeout(() => {
            replaceImg(p1, '');
            this.isPlaying = false;
            imgId.classList.remove('flashing-animation');
          }, duration);
    },
    replaceClick() {
      if (!this.isPlaying) {
        this.isPlaying = true;
        replaceImg(p1, imgSrc);
        imgId.classList.add('flashing-animation');
      }
    },
  }
  actions.cancel = actions.cancel.bind(actions);
  actions.replaceDown = actions.replaceDown.bind(actions);
  actions.replaceUp = actions.replaceUp.bind(actions);
  
  return actions;
}

const replaceImgActions = {
  tigerShot: createReplaceActions(imgs.sagat.tigerShot, 1000, imgIds['tiger-shot']),
  tigerDp: createReplaceActions(imgs.sagat.tigerDp, 1300, imgIds['tiger-uppercut']),
  tigerKDp: createReplaceActions(imgs.sagat.tigerKDp, 500, imgIds['tiger-knee']),
  sagatTaunt: createReplaceActions(imgs.sagat.sagatTaunt, 900, imgIds['sagat-taunt']),
  ryuHadouken: createReplaceActions(imgs.ryu.ryuHadouken, 1300, imgIds['ryu-hadouken']),
  ryuDp: createReplaceActions(imgs.ryu.ryuDp, 1300, imgIds['ryu-shoryuken']),
  ryuTatsu: createReplaceActions(imgs.ryu.ryuTatsu, 1300, imgIds['ryu-tatsu']),
  ryuTaunt: createReplaceActions(imgs.ryu.ryuTaunt, 1300, imgIds['ryu-taunt']),
  chunKiko: createReplaceActions(imgs.chun.chunKiko, 1300, imgIds['chun-kiko']),
  chunOh: createReplaceActions(imgs.chun.chunOh, 1300, imgIds['chun-oh']),
  chunKick: createReplaceActions(imgs.chun.chunKick, 1300, imgIds['chun-kick']),
  chunTaunt: createReplaceActions(imgs.chun.chunTaunt, 1300, imgIds['chun-taunt']),
  danYahoo: createReplaceActions(imgs.dan.danYahoo, 1300, imgIds['dan-yahoo']),
  danSuper: createReplaceActions(imgs.dan.danSuper, 2300,imgIds['dan-super']),
  danVictory: createReplaceActions(imgs.dan.danVictory, 1300, imgIds['dan-victory']),
  danFather: createReplaceActions(imgs.dan.danFather, 800, imgIds['dan-father']),
};

const bindButtonEvents = () => {
  const buttons = document.querySelectorAll('[data-action]');
  buttons.forEach(button => {
    const actionName = button.getAttribute('data-action');
    const action = replaceImgActions[actionName];

    if (action) {
      button.addEventListener('mousedown', action.replaceDown)
      button.addEventListener('mouseup', action.replaceUp)
    }
  });
};

// Key commands


const imgAction = { 

  '1': 'tigerShot',
  '2': 'tigerDp',
  '3': 'tigerKDp',
  '4': 'sagatTaunt',
  //
  'q': 'ryuHadouken',
  'w': 'ryuDp',
  'e': 'ryuTatsu',
  'r': 'ryuTaunt',
  //
  'a': 'chunKiko',
  's': 'chunOh',
  'd': 'chunKick',
  'f': 'chunTaunt',
  //
  'z': 'danYahoo',
  'x': 'danSuper',
  'c': 'danVictory',
  'v': 'danFather',
  //
}

const bindKeyEvents = () => {
  document.addEventListener('keydown', (ev) => {
    const action = imgAction[ev.key];
    if (action && replaceImgActions[action]) {
      replaceImgActions[action].replaceDown();
    }
  });
  
  document.addEventListener('keyup', (ev) => {
    const action = imgAction[ev.key];
    if (action && replaceImgActions[action]) {
      replaceImgActions[action].replaceUp();
    }
  });
}
document.addEventListener('DOMContentLoaded', () => {
  bindButtonEvents();
  bindKeyEvents();
});