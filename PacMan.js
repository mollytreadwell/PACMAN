// pos is the PacMan image position variable- it is set to 0 initially
var pos = 0;
//pageWidth is the width of the webpage. This is later used to calculate when Pac-Man needs to turn around. 
let pageWidth = window.innerWidth;
//This array contains all the PacMan movement images
const pacArray = [
  ['PacMan1.png', 'PacMan2.png'],
  ['PacMan3.png', 'PacMan4.png'],
];

// this variable defines what direction should PacMan go into:
// 0 = left to right
// 1 = right to left (reverse)
var direction = 0;

// This variable helps determine which PacMan image should be displayed. It flips between values 0 and 1
var focus = 0;

// This function makes the image go no further than the browser page width before turning around.
function checkPageBounds(direction, imgWidth) {
if(direction === 0 && pos > pageWidth) {
  direction = 1;
} if(direction === 0 && pos <= 0) {
  direction = 0;
}
return direction;
}

// This function is called on mouse click. Every time it is called, it updates the PacMan image, position and direction on the screen.
function Run() {
  let img = document.getElementById('PacMan');
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 20;
    img.style.left = pos + 'px';
  } else {
    pos += 20;
    img.style.left = pos + 'px';
  }
}

setInterval(Run, 200);



//Please do not change
module.exports = checkPageBounds;
