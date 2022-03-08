// import functions and grab DOM elements
const leftContainer = document.getElementById('left-cup-container');
const centerContainer = document.getElementById('center-cup-container');
const rightContainer = document.getElementById('right-cup-container');

const leftButton = document.getElementById('left-button');
const centerButton = document.getElementById('center-button');
const rightButton = document.getElementById('right-button');

const leftCupImg = document.getElementById('left-cup');
const centerCupImg = document.getElementById('center-cup');
const rightCupImg = document.getElementById('right-cup');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

const resetButton = document.getElementById('reset');

// console.log(resetButton);\
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
    leftContainer.classList.remove('bingo', 'over-here', 'nope');
    centerContainer.classList.remove('bingo', 'over-here', 'nope');
    rightContainer.classList.remove('bingo', 'over-here', 'nope');
    leftCupImg.src = 'assets/cup.png';
    centerCupImg.src = 'assets/cup.png';
    rightCupImg.src = 'assets/cup.png';
}

function handleGuess(userGuess, correctSpot) {
    resetStyles();
    const changeImg = document.getElementById(`${correctSpot}-cup`);
    changeImg.src = 'assets/cup-with-ball.png';
    total++;
    if (userGuess === correctSpot) {
        const correctContainer = document.getElementById(`${correctSpot}-cup-container`);
        correctContainer.classList.add('bingo');
        wins++;
    }
    if (userGuess !== correctSpot) {
        const correctContainer = document.getElementById(`${correctSpot}-cup-container`);
        correctContainer.classList.add('over-here');const guessContainer = document.getElementById(`${userGuess}-cup-container`);
        guessContainer.classList.add('nope');
    }
    winsEl.textContent = wins;
    totalEl.textContent = total;
    lossesEl.textContent = total - wins;
}

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

leftButton.addEventListener('click', () => {
    let correctSpot = getRandomItem(hidingPlaces);
    handleGuess('left', correctSpot);
});

centerButton.addEventListener('click', () => {
    let correctSpot = getRandomItem(hidingPlaces);
    handleGuess('center', correctSpot);
});

rightButton.addEventListener('click', () => {
    let correctSpot = getRandomItem(hidingPlaces);
    handleGuess('right', correctSpot);
});

resetButton.addEventListener('click', () => {
    resetStyles();
    total = 0;
    wins = 0;
    winsEl.textContent = wins;
    totalEl.textContent = total;
    lossesEl.textContent = total - wins;
});