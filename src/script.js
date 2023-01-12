const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
let cards;
let interval;
let firstCard = false;
let secondCard = false;

const items = [
  { name: "bee", image: "/src/images/bee.png" },
  { name: "crocodile", image: "/src/images/crocodile.png" },
  { name: "macaw", image: "/src/images/macaw.png" },
  { name: "gorilla", image: "/src/images/gorilla.png" },
  { name: "tiger", image: "/src/images/tiger.png" },
  { name: "monkey", image: "/src/images/monkey.png" },
  { name: "chameleon", image: "/src/images/chameleon.png" },
  { name: "piranha", image: "/src/images/piranha.png" },
  { name: "anaconda", image: "/src/images/anaconda.png" },
  { name: "sloth", image: "/src/images/sloth.png" },
  { name: "cockatoo", image: "/src/images/cockatoo.png" },
  { name: "toucan", image: "/src/images/toucan.png" },
];

let seconds = 0,
  minutes = 0;
let movesCount = 0,
  winCount = 0;

const timeGenerator = () => {
  seconds += 1;
  if (seconds >= 60) {
    minutes += 1;
    seconds = 0;
  }
  let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
  let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
  timeValue.innerHTML = `<span>Time: </span>${minutesValue}:${secondsValue}`;
};

const movesCounter = () => {
  movesCount += 1;
  moves.innerHTML = `<span>Moves: </span>${movesCount}`;
};

const generateRandom = (size = 4) => {
  let tempArray = [...items];
  let cardValues = [];
  size = (size * size) / 2;
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    cardValues.push(tempArray[randomIndex]);
    tempArray.splice(randomIndex, 1);
  }
  return cardValues;
};
