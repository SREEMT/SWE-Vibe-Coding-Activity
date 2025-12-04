import { createDeck } from "./deck.js";


let playerDeck = [];
let cpuDeck = [];
// Holds all cards involved in a WAR
let warPot = [];


function initGame() {
const deck = createDeck();
playerDeck = deck.slice(0, 26);
cpuDeck = deck.slice(26);
updateCounts();
}


function playRound() {
if (playerDeck.length === 0 || cpuDeck.length === 0) {
document.getElementById("result").textContent =
playerDeck.length === 0 ? "CPU Wins the Game!" : "Player Wins the Game!";
return;
}



const playerCard = playerDeck.shift();
const cpuCard = cpuDeck.shift();


document.getElementById("player-card").textContent =
`${playerCard.label}${playerCard.suit}`;
document.getElementById("cpu-card").textContent =
`${cpuCard.label}${cpuCard.suit}`;


if (playerCard.rank > cpuCard.rank) {
playerDeck.push(playerCard, cpuCard);
document.getElementById("result").textContent = "Player wins round";
} else if (cpuCard.rank > playerCard.rank) {
cpuDeck.push(playerCard, cpuCard);
document.getElementById("result").textContent = "CPU wins round";
} else {
// Tie — move tied cards into warPot
addToWarPot(playerCard, cpuCard);

document.getElementById("result").textContent = "WAR!";
logWarPot(); // optional for debugging
}


updateCounts();
}


function updateCounts() {
document.getElementById("counts").textContent =
`Player: ${playerDeck.length} cards | CPU: ${cpuDeck.length} cards`;
}

// Add cards to the WAR pot
function addToWarPot(...cards) {
  warPot.push(...cards);
}

// Give pot to winner and clear pot
function awardWarPotTo(deck) {
  deck.push(...warPot);
  warPot = []; // reset pot
}

// Check pot contents (optional, for debugging)
function logWarPot() {
  console.log("WAR POT:", warPot);
}
// ends here



document.getElementById("play-btn").addEventListener("click", playRound);




initGame();