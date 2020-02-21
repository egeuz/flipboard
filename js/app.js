const cols = 5;
const rows = 5;

//HELPER METHODS
const generateBoard = () => {
  document.getElementById("board").innerHTML = flip(cols * rows).map(n => `<div class="block ${getColor(n)}"></div>`).join('');
  // console.log(getSeed(flip(cols * rows)));
}
const rng = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const flip = n => new Array(25).fill(0).map(n => rng(0, 1));
const getColor = n => n ? "black" : "white";
//get a number seed from the combination of 25 0/1 binary flips
const getSeed = arr => parseInt(arr.join(''), 2);

//RUNTIME
window.addEventListener("DOMContentLoaded", generateBoard);
document.getElementById("reroll").addEventListener("click", generateBoard);

//SETINTERVAL VERSION
setInterval(generateBoard, 1000);


//GENERATE THE POSSIBILITY OF THE NUMBER
