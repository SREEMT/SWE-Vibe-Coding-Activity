// Create and shuffle deck
export function createDeck() {
const suits = ["♠", "♥", "♦", "♣"];
const values = [
{ label: "2", rank: 2 },
{ label: "3", rank: 3 },
{ label: "4", rank: 4 },
{ label: "5", rank: 5 },
{ label: "6", rank: 6 },
{ label: "7", rank: 7 },
{ label: "8", rank: 8 },
{ label: "9", rank: 9 },
{ label: "10", rank: 10 },
{ label: "J", rank: 11 },
{ label: "Q", rank: 12 },
{ label: "K", rank: 13 },
{ label: "A", rank: 14 }
];


const deck = [];


for (let suit of suits) {
for (let v of values) {
deck.push({ ...v, suit });
}
}


return shuffle(deck);
}


export function shuffle(array) {
for (let i = array.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[array[i], array[j]] = [array[j], array[i]];
}
return array;
}