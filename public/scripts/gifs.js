// Create an img as the first frame
// Then replace the img with a gif on 
// keydown

// document.addEventListener('keydown', (event) => {
//   const tigerShot = document.getElementById("tiger-shot");

//   const specificKey = 'a';

//   if (event.key === specificKey) {
//     tigerShot.src = '';
//   };
// });

// document.addEventListener('keyup', (event) => {
//   const tigerShotImg = document.getElementById("tiger-shot");

//   const specificKey = 'a';

//   if (event.key === specificKey) {
//     tigerShotImg.src = '/images/sagat.gif'
//   }
// })

const replaceImg = (img, newSrc) => {
  img.src = '';
  console.log("Image changed!");
}

const replaceImgAction = {
  tigerShotReplace() {
    replaceImg(document.getElementById("tiger-shot"));
  },
}

const imgAction = {
  'a': { keydown: replaceImgAction.tigerShotReplace }
}
