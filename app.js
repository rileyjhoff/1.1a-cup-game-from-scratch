// import functions and grab DOM elements
const leftContainer = document.getElementById('left-cup-container');
const centerContainer = document.getElementById('center-cup-container');
const rightContainer = document.getElementById('right-cup-container');

const leftButton = document.getElementById('left-button');
const centerButton = document.getElementById('center-button');
const rightButton = document.getElementById('right-button');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

// console.log(leftContainer, centerContainer, rightContainer);
// console.log(leftButton, centerButton, rightButton);
// console.log(winsEl, lossesEl, totalEl);

// let state
let total = 0;
let wins = 0;

const hidingPlaces = [
    'left',
    'center',
    'right'
];
// console.log(hidingPlaces);

// functions

function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
// console.log(getRandomItem(hidingPlaces));

function resetStyles() {
    leftContainer.classList.remove('bingo', 'nope');
    centerContainer.classList.remove('bingo', 'nope');
    rightContainer.classList.remove('bingo', 'nope');
}

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
