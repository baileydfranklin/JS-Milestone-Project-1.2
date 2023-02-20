const deck = [
    {
        name: "AC", value: 10
    },
    {
        name: "2C", value: 2
    },
    {
        name: "3C", value: 3
    },
    {
        name: "4C", value: 4
    },
    {
        name: "5C", value: 5
    },
    {
        name: "6C", value: 6
    },
    {
        name: "7C", value: 7
    },
    {
        name: "8C", value: 8
    },
    {
        name: "9C", value: 9
    },
    {
        name: "10C", value: 10
    },
    {
        name: "JC", value: 10
    },
    {
        name: "QC", value: 10
    },
    {
        name: "KC", value: 10
    },
    {
        name: "AD", value: 10
    },
    {
        name: "2D", value: 2
    },
    {
        name: "3D", value: 3
    },
    {
        name: "4D", value: 4
    },
    {
        name: "5D", value: 5
    },
    {
        name: "6D", value: 6
    },
    {
        name: "7D", value: 7
    },
    {
        name: "8D", value: 8
    },
    {
        name: "9D", value: 9
    },
    {
        name: "10D", value: 10
    },
    {
        name: "JD", value: 10
    },
    {
        name: "QD", value: 10
    },
    {
        name: "KD", value: 10
    },
    {
        name: "AH", value: 10
    },
    {
        name: "2H", value: 2
    },
    {
        name: "3H", value: 3
    },
    {
        name: "4H", value: 4
    },
    {
        name: "5H", value: 5
    },
    {
        name: "6H", value: 6
    },
    {
        name: "7H", value: 7
    },
    {
        name: "8H", value: 8
    },
    {
        name: "9H", value: 9
    },
    {
        name: "10H", value: 10
    },
    {
        name: "JH", value: 10
    },
    {
        name: "QH", value: 10
    },
    {
        name: "KH", value: 10
    },
    {
        name: "AS", value: 10
    },
    {
        name: "2S", value: 2
    },
    {
        name: "3S", value: 3
    },
    {
        name: "4S", value: 4
    },
    {
        name: "5S", value: 5
    },
    {
        name: "6S", value: 6
    },
    {
        name: "7S", value: 7
    },
    {
        name: "8S", value: 8
    },
    {
        name: "9S", value: 9
    },
    {
        name: "10S", value: 10
    },
    {
        name: "JS", value: 10
    },
    {
        name: "QS", value: 10
    },
    {
        name: "KS", value: 10
    },
];
//////////     ^^^DECK^^^     //////////



/////     HEADER CONTAINER     /////
const h1 = document.createElement("h1"); // h1
const h1Text = document.createTextNode("Ready To Play Some Black Jack?!");
h1.appendChild(h1Text);
const element1 = document.getElementById("headerContainer");
element1.appendChild(h1);

const h4 = document.createElement("h4"); // h4 RULES
const h4Text = document.createTextNode("Rules: Blackjack hands are scored by their point total. The hand with the highest total wins as long as it doesn't exceed 21; a hand with a higher total than 21 is said to bust. Cards 2 through 10 are worth their face value, and face cards (jack, queen, king) are also worth 10.")
h4.appendChild(h4Text);
const element2 = document.getElementById("headerContainer");
element2.appendChild(h4);

document.getElementById("headerContainer").style.textAlign = "center"; // CSS Center Text within headerContainer



/////     START GAME CONTAINER     /////
const startButton = document.createElement("button");
startButton.setAttribute('id', 'startButton');
const startButtonText = document.createTextNode("Start Game");
startButton.appendChild(startButtonText);
const element3 = document.getElementById("startGameContainer");
element3.appendChild(startButton);


let userHand = [];




























// console.log(Math.random()*deck.length)

// let userHand = []
// userHand.push(deck[0])

// deck.shift()
// console.log(deck)
// console.log(userHand)