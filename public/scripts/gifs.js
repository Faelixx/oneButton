// Create an img as the first frame
// Then replace the img with a gif on 
// keydown

$(() => {
  const tigerShotImg = document.getElementById("tiger-shot");

  const testFunc = () => alert('test');

  if (tigerShotImg) {
    tigerShotImg.addEventListener('click', testFunc);
  }

})

