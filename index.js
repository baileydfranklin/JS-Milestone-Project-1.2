const deck = [
    {
        name: "AC", value: 10, Image: '/assets/AC.png'
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

const h2 = document.createElement("h2"); // h2 RULES
const h2Text = document.createTextNode("Rules: Blackjack hands are scored by their point total. The hand with the highest total wins as long as it doesn't exceed 21; a hand with a higher total than 21 is said to bust. You automatically lose. Cards 2 through 10 are worth their face value, and face cards (Jack, Queen, King) are also worth 10. Good luck!")
h2.appendChild(h2Text);
const element2 = document.getElementById("headerContainer");
element2.appendChild(h2);

document.getElementById("headerContainer").style.textAlign = "center"; // CSS Center Text within headerContainer

/////     START GAME CONTAINER     /////
const startButton = document.createElement("button");
startButton.setAttribute('id', 'startButton');
const startButtonText = document.createTextNode("Start Game");
startButton.appendChild(startButtonText);
const element3 = document.getElementById("startGameContainer");
element3.appendChild(startButton);

startButton.addEventListener('click', startGame) // Start game function

let numberOfGames = 1;
let hitCount = 0;

function startGame(){
    hitCount = 0;
    if(numberOfGames == 1){ // To allow the game to recall the startGame() Function
    console.log('The game has started'); // Test if Button is working
    element3.parentNode.removeChild(startGameContainer); // Remove Start Button after 'click'
    element2.parentNode.removeChild(headerContainer); // Remove header container after 'click'
    console.log(`Number of games = ${numberOfGames}`)
    }
    console.log(`Number of games = ${numberOfGames}`)

    function addDeck(){
    let deckPile1 = document.createElement('img');
    deckPile1.src = 'assets/.faceDownCard.jfif';
    let id_name1 = 'deckPile1';
    deckPile1.setAttribute("id", id_name1);
    document.getElementById('inGameContainer').appendChild(deckPile1);

    let deckPile2 = document.createElement('img');
    deckPile2.src = 'assets/.faceDownCard.jfif';
    let id_name2 = 'deckPile2';
    deckPile2.setAttribute("id", id_name2);
    document.getElementById('inGameContainer').appendChild(deckPile2);

    let deckPile3 = document.createElement('img');
    deckPile3.src = 'assets/.faceDownCard.jfif';
    let id_name3 = 'deckPile3';
    deckPile3.setAttribute("id", id_name3);
    document.getElementById('inGameContainer').appendChild(deckPile3);

    let deckPile4 = document.createElement('img');
    deckPile4.src = 'assets/.faceDownCard.jfif';
    let id_name4 = 'deckPile4';
    deckPile4.setAttribute("id", id_name4);
    document.getElementById('inGameContainer').appendChild(deckPile4);

    let deckPile5 = document.createElement('img');
    deckPile5.src = 'assets/.faceDownCard.jfif';
    let id_name5 = 'deckPile5';
    deckPile5.setAttribute("id", id_name5);
    document.getElementById('inGameContainer').appendChild(deckPile5);
    
    console.log('addImage Function for the Displayed Deck is working') // Test if addImage Function is working
    };
    addDeck()



    function addScoreBoareds(){
        let scoreBoard1 = document.createElement('img');
        scoreBoard1.src = 'assets/.scoreboard.jpg';
        let id_name6 = 'scoreBoard1';
        scoreBoard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(scoreBoard1);

        let scoreBoard2 = document.createElement('img');
        scoreBoard2.src = 'assets/.scoreboard.jpg';
        let id_name7 = 'scoreBoard2';
        scoreBoard2.setAttribute("id", id_name7);
        document.getElementById('inGameContainer').appendChild(scoreBoard2);
    }
    // addScoreBoareds()



    //////////     DEALING CODE STARTS HERE     //////////
    function dealCards1(deck){
        let randomCard = Math.floor(Math.random()*deck.length);
        let dealtCard1 = deck[randomCard];

        return dealtCard1;
    }
    let playerCard1 = dealCards1(deck);
    console.log(`${playerCard1} Player's first dealt card`) // Test if random card was selected

    if(playerCard1.name == deck[0].name){ // PLAYER CARD 1
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/AC.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[1].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/2C.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[2].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/3C.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[3].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/4C.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[4].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/5C.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[5].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/6C.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[6].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/7C.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[7].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/8C.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[8].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/9C.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[9].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/10C.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[10].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/JC.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[11].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/QC.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[12].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/KC.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[13].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/AD.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[14].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/2D.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[15].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/3D.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[16].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/4D.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[17].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/5D.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[18].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/6D.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[19].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/7D.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[20].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/8D.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[21].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/9D.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[22].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/10D.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[23].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/JD.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[24].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/QD.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[25].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/KD.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[26].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/AH.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[27].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/2H.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[28].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/3H.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[29].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/4H.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[30].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/5H.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[31].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/6H.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[32].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/7H.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[33].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/8H.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[34].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/9H.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[35].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/10H.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[36].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/JH.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[37].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/QH.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[38].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/KH.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[39].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/AS.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[40].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/2S.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[41].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/3S.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[42].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/4S.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[43].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/5S.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[44].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/6S.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[45].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/7S.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[46].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/8S.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[47].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/9S.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[48].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/10S.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[49].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/JS.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[50].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/QS.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }else if(playerCard1.name == deck[51].name){
        let displayPlayerCard1 = document.createElement('img');
        displayPlayerCard1.src = 'assets/QS.png';
        let id_name6 = 'displayPlayerCard1';
        displayPlayerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard1);
    }

    let playerCount = playerCard1.value;
    console.log(`${playerCount} Player's total hand value after first dealt card`) // Test if player count is adding up correctly

    const h3PlayerScore = document.createElement("h3"); // h3 PLAYER DISPLAY COUNTER
    h3PlayerScore.setAttribute('id', 'playerScore1')
    const h3Text1 = document.createTextNode(playerCount);
    h3PlayerScore.appendChild(h3Text1);
    const element4 = document.getElementById("inGameContainer");
    element4.appendChild(h3PlayerScore);

    function dealCards2(deck){
        let randomCard = Math.floor(Math.random()*deck.length);
        let dealtCard2 = deck[randomCard];

        return dealtCard2;
    }
    let computerCard1 = dealCards2(deck);
    console.log(`${computerCard1} Computer's first dealt card`) // Test if random card was selected

    if(computerCard1.name == deck[0].name){ // COMPUTER CARD 1
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/AC.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[1].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/2C.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[2].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/3C.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[3].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/4C.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[4].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/5C.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[5].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/6C.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[6].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/7C.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[7].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/8C.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[8].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/9C.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[9].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/10C.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[10].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/JC.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[11].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/QC.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[12].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/KC.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[13].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/AD.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[14].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/2D.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[15].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/3D.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[16].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/4D.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[17].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/5D.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[18].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/6D.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[19].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/7D.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[20].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/8D.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[21].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/9D.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[22].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/10D.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[23].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/JD.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[24].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/QD.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[25].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/KD.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[26].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/AH.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[27].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/2H.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[28].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/3H.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[29].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/4H.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[30].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/5H.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[31].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/6H.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[32].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/7H.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[33].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/8H.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[34].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/9H.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[35].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/10H.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[36].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/JH.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[37].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/QH.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[38].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/KH.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[39].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/AS.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[40].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/2S.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[41].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/3S.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[42].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/4S.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[43].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/5S.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[44].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/6S.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[45].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/7S.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[46].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/8S.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[47].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/9S.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[48].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/10S.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[49].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/JS.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[50].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/QS.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }else if(computerCard1.name == deck[51].name){
        let displayComputerCard1 = document.createElement('img');
        displayComputerCard1.src = 'assets/QS.png';
        let id_name6 = 'displayComputerCard1';
        displayComputerCard1.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard1);
    }

    let computerCount = computerCard1.value;
    console.log(`${computerCount} Computer's total hand value after first dealt card`) // Test if computer count is adding up correctly

    const h3ComputerScore = document.createElement("h3"); // h3 COMPUTER DISPLAY COUNTER
    h3ComputerScore.setAttribute('id', 'computerScore1')
    const h3Text2 = document.createTextNode(computerCount);
    h3ComputerScore.appendChild(h3Text2);
    const element5 = document.getElementById("inGameContainer");
    element5.appendChild(h3ComputerScore);

    function dealCards3(deck){
        let randomCard = Math.floor(Math.random()*deck.length);
        let dealtCard3 = deck[randomCard];

        return dealtCard3;
    }
    let playerCard2 = dealCards3(deck);
    console.log(`${playerCard2} Player's value of second card dealt`) // Test if random card was selected

    if(playerCard2.name == deck[0].name){ // PLAYER CARD 2
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/AC.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[1].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/2C.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[2].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/3C.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[3].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/4C.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[4].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/5C.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[5].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/6C.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[6].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/7C.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[7].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/8C.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[8].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/9C.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[9].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/10C.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[10].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/JC.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[11].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/QC.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[12].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/KC.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[13].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/AD.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[14].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/2D.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[15].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/3D.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[16].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/4D.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[17].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/5D.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[18].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/6D.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[19].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/7D.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[20].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/8D.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[21].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/9D.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[22].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/10D.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[23].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/JD.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[24].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/QD.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[25].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/KD.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[26].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/AH.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[27].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/2H.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[28].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/3H.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[29].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/4H.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[30].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/5H.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[31].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/6H.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[32].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/7H.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[33].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/8H.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[34].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/9H.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[35].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/10H.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[36].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/JH.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[37].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/QH.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[38].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/KH.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[39].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/AS.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[40].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/2S.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[41].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/3S.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[42].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/4S.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[43].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/5S.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[44].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/6S.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[45].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/7S.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[46].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/8S.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[47].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/9S.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[48].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/10S.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[49].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/JS.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[50].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/QS.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }else if(playerCard2.name == deck[51].name){
        let displayPlayerCard2 = document.createElement('img');
        displayPlayerCard2.src = 'assets/QS.png';
        let id_name6 = 'displayPlayerCard2';
        displayPlayerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayPlayerCard2);
    }

    playerCount += playerCard2.value;
    console.log(`${playerCount} Player's total hand value after second card is dealt`) // Test if player count is adding up correctly

    //ADD IN PLAYERS TOTAL CARD VALUE AFTER SECOND CARD IS DRAWN HERE

    function dealCards4(deck){
        let randomCard = Math.floor(Math.random()*deck.length);
        let dealtCard4 = deck[randomCard];

        return dealtCard4;
    }
    let computerCard2 = dealCards4(deck);
    console.log(`${computerCard2} Computer's value of second card dealt`) // Test if random card was selected

    if(computerCard2.name == deck[0].name){ // COMPUTER CARD 2
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/AC.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[1].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/2C.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[2].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/3C.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[3].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/4C.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[4].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/5C.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[5].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/6C.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[6].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/7C.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[7].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/8C.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[8].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/9C.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[9].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/10C.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[10].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/JC.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[11].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/QC.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[12].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/KC.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[13].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/AD.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[14].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/2D.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[15].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/3D.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[16].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/4D.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[17].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/5D.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[18].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/6D.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[19].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/7D.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[20].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/8D.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[21].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/9D.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[22].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/10D.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[23].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/JD.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[24].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/QD.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[25].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/KD.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[26].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/AH.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[27].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/2H.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[28].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/3H.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[29].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/4H.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[30].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/5H.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[31].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/6H.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[32].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/7H.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[33].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/8H.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[34].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/9H.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[35].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/10H.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[36].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/JH.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[37].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/QH.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[38].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/KH.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[39].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/AS.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[40].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/2S.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[41].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/3S.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[42].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/4S.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[43].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/5S.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[44].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/6S.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[45].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/7S.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[46].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/8S.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[47].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/9S.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[48].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/10S.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[49].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/JS.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[50].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/QS.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }else if(computerCard2.name == deck[51].name){
        let displayComputerCard2 = document.createElement('img');
        displayComputerCard2.src = 'assets/QS.png';
        let id_name6 = 'displayComputerCard2';
        displayComputerCard2.setAttribute("id", id_name6);
        document.getElementById('inGameContainer').appendChild(displayComputerCard2);
    }
    
    let computerHiddenCard = document.createElement('img');
    computerHiddenCard.src = 'assets/.faceDownCard.jfif';
    let id_name7 = 'computerHiddenCard';
    computerHiddenCard.setAttribute("id", id_name7);
    document.getElementById('inGameContainer').appendChild(computerHiddenCard);

    console.log('addImage Function for the Displayed Deck is working'); // Test if addImage Function is working

    //////////     GAME PLAY / PLAYER'S TURN STARTS HERE     //////////////////////////////////////////////////////////////////////////////////////////////////////

    const hitButton = document.createElement("button");
    hitButton.setAttribute('id', 'hitButton');
    const hitButtonText = document.createTextNode("Hit");
    hitButton.appendChild(hitButtonText);
    const element6 = document.getElementById("inGameContainer");
    element6.appendChild(hitButton);

    hitButton.addEventListener('click', hit) // HIT BUTTON EVENT LISTENER

    const stayButton = document.createElement("button");
    stayButton.setAttribute('id', 'stayButton');
    const stayButtonText = document.createTextNode("Stay");
    stayButton.appendChild(stayButtonText);
    const element7 = document.getElementById("inGameContainer");
    element7.appendChild(stayButton);

    stayButton.addEventListener('click', stay) // STAY BUTTON EVENT LISTENER

    function hit() {
        hitCount = 1;
        function dealHit1(deck) {
            let randomCard = Math.floor(Math.random() * deck.length);
            let dealHit1 = deck[randomCard];

            return dealHit1;
        }
        let hitCard1 = dealHit1(deck);
        console.log(hitCard1) // Test if random card was selected

        if (hitCard1.name == deck[0].name) { // HIT FUNCTION
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/AC.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[1].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/2C.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[2].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/3C.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[3].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/4C.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[4].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/5C.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[5].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/6C.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[6].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/7C.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[7].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/8C.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[8].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/9C.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[9].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/10C.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[10].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/JC.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[11].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/QC.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[12].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/KC.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[13].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/AD.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[14].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/2D.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[15].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/3D.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[16].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/4D.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[17].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/5D.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[18].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/6D.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[19].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/7D.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[20].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/8D.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[21].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/9D.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[22].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/10D.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[23].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/JD.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[24].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/QD.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[25].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/KD.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[26].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/AH.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[27].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/2H.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[28].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/3H.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[29].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/4H.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[30].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/5H.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[31].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/6H.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[32].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/7H.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[33].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/8H.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[34].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/9H.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[35].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/10H.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[36].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/JH.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[37].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/QH.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[38].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/KH.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[39].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/AS.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[40].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/2S.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[41].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/3S.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[42].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/4S.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[43].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/5S.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[44].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/6S.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[45].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/7S.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[46].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/8S.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[47].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/9S.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[48].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/10S.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[49].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/JS.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[50].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/QS.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        } else if (hitCard1.name == deck[51].name) {
            let displayHitCard1 = document.createElement('img');
            displayHitCard1.src = 'assets/QS.png';
            let id_name6 = 'displayHitCard1';
            displayHitCard1.setAttribute("id", id_name6);
            document.getElementById('inGameContainer').appendChild(displayHitCard1);
        }

        playerCount += hitCard1.value; // Player's total hand value after hit 1
        console.log(`${playerCount} Player's hand value after hit 1`); 
        
        if (playerCount > 21) {

            function endGame() {
                const h3 = document.createElement("h3"); // h3
                h3.setAttribute('id', 'endGameText')
                const h3Text = document.createTextNode("BUST! You lose.");
                h3.appendChild(h3Text);
                const element8 = document.getElementById("inGameContainer");
                element8.appendChild(h3);

                const restartButton = document.createElement("button");
                restartButton.setAttribute('id', 'restartButton');
                const restartButtonText = document.createTextNode("Restart");
                restartButton.appendChild(restartButtonText);
                const element9 = document.getElementById("inGameContainer");
                element9.appendChild(restartButton);

                hitButton.removeEventListener('click', hit)
                stayButton.removeEventListener('click', stay)

                restartButton.addEventListener('click', restartGame5) // Hit button function
            }
            endGame()
        }else if(playerCount < 21){

            hitButton.setAttribute('id', 'deleteHitButton1')
            // document.getElementById('hitButton').remove();

            const hitButton2 = document.createElement("button");
            hitButton2.setAttribute('id', 'hitButton2');
            const hitButton2Text = document.createTextNode("Hit");
            hitButton2.appendChild(hitButton2Text);
            const element6 = document.getElementById("inGameContainer");
            element6.appendChild(hitButton2);
        
            hitButton2.addEventListener('click', hit2) // HIT BUTTON EVENT LISTENER

            function hit2(){
                hitCount = 2;
                function dealHit2(deck) {
                    let randomCard = Math.floor(Math.random() * deck.length);
                    let dealHit2 = deck[randomCard];
        
                    return dealHit2;
                }
                let hitCard2 = dealHit2(deck);
                console.log(hitCard2) // Test if random card was selected
        
                if (hitCard2.name == deck[0].name) { // HIT FUNCTION
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/AC.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[1].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/2C.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[2].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/3C.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[3].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/4C.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[4].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/5C.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[5].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/6C.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[6].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/7C.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[7].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/8C.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[8].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/9C.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[9].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/10C.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[10].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/JC.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[11].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/QC.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[12].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/KC.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[13].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/AD.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[14].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/2D.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[15].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/3D.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[16].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/4D.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[17].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/5D.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[18].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/6D.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[19].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/7D.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[20].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/8D.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[21].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/9D.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[22].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/10D.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[23].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/JD.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[24].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/QD.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[25].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/KD.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[26].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/AH.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[27].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/2H.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[28].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/3H.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[29].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/4H.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[30].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/5H.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[31].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/6H.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[32].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/7H.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[33].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/8H.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[34].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/9H.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[35].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/10H.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[36].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/JH.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[37].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/QH.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[38].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/KH.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[39].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/AS.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[40].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/2S.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[41].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/3S.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[42].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/4S.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[43].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/5S.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[44].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/6S.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[45].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/7S.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[46].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/8S.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[47].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/9S.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[48].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/10S.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[49].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/JS.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[50].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/QS.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                } else if (hitCard2.name == deck[51].name) {
                    let displayHitCard2 = document.createElement('img');
                    displayHitCard2.src = 'assets/QS.png';
                    let id_name6 = 'displayHitCard2';
                    displayHitCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayHitCard2);
                }

                playerCount += hitCard2.value; // Player's total hand value after hit 1
                console.log(`${playerCount} Player's hand value after hit 2`);

                if (playerCount > 21) {
                    function endGame() {
                        const h3 = document.createElement("h3"); // h3
                        h3.setAttribute('id', 'endGameText')
                        const h3Text = document.createTextNode("BUST! You lose.");
                        h3.appendChild(h3Text);
                        const element8 = document.getElementById("inGameContainer");
                        element8.appendChild(h3);

                        const restartButton = document.createElement("button");
                        restartButton.setAttribute('id', 'restartButton');
                        const restartButtonText = document.createTextNode("Restart");
                        restartButton.appendChild(restartButtonText);
                        const element9 = document.getElementById("inGameContainer");
                        element9.appendChild(restartButton);

                        hitButton.removeEventListener('click', hit)
                        stayButton.removeEventListener('click', stay)

                        restartButton.addEventListener('click', restartGame6) // Hit button function
                    }
                    endGame()
                }else if (playerCount < 21) {
                    hitButton2.setAttribute('id', 'deleteHitButton2')

                    const hitButton3 = document.createElement("button");
                    hitButton3.setAttribute('id', 'hitButton3');
                    const hitButton3Text = document.createTextNode("Hit");
                    hitButton3.appendChild(hitButton3Text);
                    const element6 = document.getElementById("inGameContainer");
                    element6.appendChild(hitButton3);

                    hitButton3.addEventListener('click', hit3) // HIT BUTTON EVENT LISTENER
                }

                function hit3() {
                    hitCount = 3;
                    function dealHit3(deck) {
                        let randomCard = Math.floor(Math.random() * deck.length);
                        let dealHit3 = deck[randomCard];

                        return dealHit3;
                    }
                    let hitCard3 = dealHit3(deck);
                    console.log(hitCard3) // Test if random card was selected

                    if(hitCard3.name == deck[0].name) { // HIT FUNCTION
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/AC.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[1].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/2C.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[2].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/3C.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[3].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/4C.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[4].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/5C.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[5].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/6C.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[6].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/7C.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[7].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/8C.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[8].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/9C.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[9].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/10C.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[10].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/JC.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[11].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/QC.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[12].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/KC.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[13].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/AD.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[14].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/2D.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[15].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/3D.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[16].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/4D.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[17].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/5D.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[18].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/6D.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[19].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/7D.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[20].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/8D.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[21].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/9D.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[22].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/10D.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[23].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/JD.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[24].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/QD.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[25].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/KD.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[26].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/AH.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[27].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/2H.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[28].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/3H.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[29].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/4H.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[30].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/5H.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[31].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/6H.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[32].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/7H.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[33].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/8H.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[34].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/9H.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[35].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/10H.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[36].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/JH.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[37].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/QH.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[38].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/KH.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[39].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/AS.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[40].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/2S.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[41].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/3S.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[42].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/4S.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[43].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/5S.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[44].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/6S.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[45].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/7S.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[46].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/8S.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[47].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/9S.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[48].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/10S.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[49].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/JS.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[50].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/QS.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    } else if (hitCard3.name == deck[51].name) {
                        let displayHitCard3 = document.createElement('img');
                        displayHitCard3.src = 'assets/QS.png';
                        let id_name6 = 'displayHitCard3';
                        displayHitCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayHitCard3);
                    }

                    playerCount += hitCard3.value; // Player's total hand value after hit 1
                    console.log(`${playerCount} Player's hand value after hit 2`);

                    if(playerCount > 21){
                        function endGame() {
                            const h3 = document.createElement("h3"); // h3
                            h3.setAttribute('id', 'endGameText')
                            const h3Text = document.createTextNode("BUST! You lose.");
                            h3.appendChild(h3Text);
                            const element8 = document.getElementById("inGameContainer");
                            element8.appendChild(h3);
    
                            const restartButton = document.createElement("button");
                            restartButton.setAttribute('id', 'restartButton');
                            const restartButtonText = document.createTextNode("Restart");
                            restartButton.appendChild(restartButtonText);
                            const element9 = document.getElementById("inGameContainer");
                            element9.appendChild(restartButton);

                            hitButton.removeEventListener('click', hit)
                            stayButton.removeEventListener('click', stay)
    
                            restartButton.addEventListener('click', restartGame7) // Hit button function
                        }
                        endGame()
                    }else if(playerCount < 21){
                        // Add code to hit again. Hopefully I don't need to add this
                    }
                }// HIT 3 FUNTION
            } // HIT2 FUNCTION
        }// IF ELSE STATEMENTS FOR HIT1 FUNCTION
    }// HIT1 FUNCTION
        function stay() {
            computerHiddenCard.setAttribute('id', 'displayStayCard1')

            computerCount += computerCard2.value;
            console.log(`${computerCount} Computer's total after second card is Flipped`)

            if (computerCount < playerCount && computerCount < 21) {
                function dealStay1(deck) {
                    let randomCard = Math.floor(Math.random() * deck.length);
                    let dealStay1 = deck[randomCard];

                    return dealStay1;
                }
                let stayCard1 = dealStay1(deck);
                console.log(stayCard1) // Test if random card was selected

                if (stayCard1.name == deck[0].name) { // STAY FUNCTION
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/AC.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[1].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/2C.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[2].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/3C.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[3].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/4C.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[4].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/5C.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[5].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/6C.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[6].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/7C.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[7].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/8C.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[8].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/9C.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[9].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/10C.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[10].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/JC.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[11].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/QC.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[12].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/KC.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[13].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/AD.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[14].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/2D.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[15].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/3D.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[16].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/4D.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[17].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/5D.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[18].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/6D.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[19].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/7D.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[20].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/8D.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[21].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/9D.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[22].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/10D.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[23].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/JD.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[24].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/QD.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[25].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/KD.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[26].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/AH.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[27].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/2H.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[28].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/3H.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[29].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/4H.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[30].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/5H.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[31].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/6H.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[32].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/7H.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[33].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/8H.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[34].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/9H.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[35].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/10H.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[36].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/JH.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[37].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/QH.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[38].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/KH.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[39].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/AS.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[40].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/2S.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[41].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/3S.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[42].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/4S.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[43].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/5S.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[44].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/6S.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[45].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/7S.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[46].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/8S.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[47].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/9S.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[48].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/10S.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[49].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/JS.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[50].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/QS.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                } else if (stayCard1.name == deck[51].name) {
                    let displayStayCard2 = document.createElement('img');
                    displayStayCard2.src = 'assets/QS.png';
                    let id_name6 = 'displayStayCard2';
                    displayStayCard2.setAttribute("id", id_name6);
                    document.getElementById('inGameContainer').appendChild(displayStayCard2);
                }

                computerCount += stayCard1.value;
                console.log(`${computerCount} Computer's total value with 3 cards`)

                if (computerCount < 21 && computerCount < playerCount) {
                    function dealStay2(deck) {
                        let randomCard = Math.floor(Math.random() * deck.length);
                        let dealStay2 = deck[randomCard];

                        return dealStay2;
                    }
                    let stayCard2 = dealStay2(deck);
                    console.log(stayCard2) // Test if random card was selected

                    if (stayCard2.name == deck[0].name) { // STAY FUNCTION
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/AC.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[1].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/2C.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[2].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/3C.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[3].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/4C.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[4].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/5C.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[5].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/6C.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[6].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/7C.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[7].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/8C.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[8].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/9C.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[9].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/10C.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[10].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/JC.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[11].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/QC.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[12].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/KC.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[13].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/AD.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[14].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/2D.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[15].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/3D.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[16].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/4D.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[17].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/5D.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[18].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/6D.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[19].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/7D.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[20].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/8D.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[21].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/9D.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[22].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/10D.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[23].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/JD.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[24].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/QD.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[25].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/KD.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[26].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/AH.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[27].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/2H.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[28].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/3H.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[29].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/4H.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[30].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/5H.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[31].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/6H.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[32].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/7H.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[33].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/8H.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[34].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/9H.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[35].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/10H.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[36].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/JH.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[37].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/QH.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[38].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/KH.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[39].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/AS.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[40].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/2S.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[41].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/3S.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[42].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/4S.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[43].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/5S.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[44].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/6S.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[45].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/7S.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[46].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/8S.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[47].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/9S.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[48].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/10S.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[49].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/JS.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[50].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/QS.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    } else if (stayCard2.name == deck[51].name) {
                        let displayStayCard3 = document.createElement('img');
                        displayStayCard3.src = 'assets/QS.png';
                        let id_name6 = 'displayStayCard3';
                        displayStayCard3.setAttribute("id", id_name6);
                        document.getElementById('inGameContainer').appendChild(displayStayCard3);
                    }

                    computerCount += stayCard2.value;
                    console.log(`${computerCount} Computer's total value with 4 cards`)

                    if (computerCount < 21 && computerCount < playerCount) {
                        function dealStay3(deck) {
                            let randomCard = Math.floor(Math.random() * deck.length);
                            let dealStay3 = deck[randomCard];

                            return dealStay3;
                        }
                        let stayCard3 = dealStay2(deck);
                        console.log(stayCard3) // Test if random card was selected

                        if (stayCard3.name == deck[0].name) { // STAY FUNCTION
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/AC.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[1].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/2C.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[2].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/3C.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[3].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/4C.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[4].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/5C.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[5].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/6C.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[6].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/7C.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[7].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/8C.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[8].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/9C.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[9].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/10C.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[10].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/JC.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[11].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/QC.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[12].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/KC.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[13].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/AD.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[14].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/2D.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[15].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/3D.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[16].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/4D.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[17].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/5D.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[18].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/6D.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[19].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/7D.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[20].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/8D.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[21].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/9D.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[22].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/10D.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[23].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/JD.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[24].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/QD.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[25].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/KD.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[26].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/AH.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[27].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/2H.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[28].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/3H.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[29].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/4H.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[30].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/5H.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[31].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/6H.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[32].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/7H.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[33].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/8H.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[34].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/9H.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[35].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/10H.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[36].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/JH.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[37].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/QH.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[38].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/KH.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[39].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/AS.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[40].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/2S.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[41].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/3S.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[42].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/4S.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[43].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/5S.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[44].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/6S.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[45].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/7S.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[46].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/8S.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[47].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/9S.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[48].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/10S.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[49].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/JS.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[50].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/QS.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        } else if (stayCard3.name == deck[51].name) {
                            let displayStayCard4 = document.createElement('img');
                            displayStayCard4.src = 'assets/QS.png';
                            let id_name6 = 'displayStayCard4';
                            displayStayCard4.setAttribute("id", id_name6);
                            document.getElementById('inGameContainer').appendChild(displayStayCard4);
                        }

                        computerCount += stayCard3.value;
                        console.log(`${computerCount} Computer's total value with 5 cards`)

                        if (computerCount < 21 && computerCount < playerCount) {
                            // Code is here for computer to draw 6th card. Very unlikely though.
                        } else if (computerCount < 21 && computerCount > playerCount) {
                            function endGame() {
                                const h3 = document.createElement("h3"); // h3
                                h3.setAttribute('id', 'endGameText')
                                const h3Text = document.createTextNode("The Computer won! You lost this round.");
                                h3.appendChild(h3Text);
                                const element8 = document.getElementById("inGameContainer");
                                element8.appendChild(h3);

                                const restartButton = document.createElement("button");
                                restartButton.setAttribute('id', 'restartButton');
                                const restartButtonText = document.createTextNode("Restart");
                                restartButton.appendChild(restartButtonText);
                                const element9 = document.getElementById("inGameContainer");
                                element9.appendChild(restartButton);

                                hitButton.removeEventListener('click', hit)
                                stayButton.removeEventListener('click', stay)

                                restartButton.addEventListener('click', restartGame4) // Hit button function
                            }
                            endGame()
                        } else if (computerCount < 21 && computerCount == playerCount) {
                            function endGame() {
                                const h3 = document.createElement("h3"); // h3
                                h3.setAttribute('id', 'endGameText')
                                const h3Text = document.createTextNode("It is a draw.");
                                h3.appendChild(h3Text);
                                const element8 = document.getElementById("inGameContainer");
                                element8.appendChild(h3);

                                const restartButton = document.createElement("button");
                                restartButton.setAttribute('id', 'restartButton');
                                const restartButtonText = document.createTextNode("Restart");
                                restartButton.appendChild(restartButtonText);
                                const element9 = document.getElementById("inGameContainer");
                                element9.appendChild(restartButton);

                                hitButton.removeEventListener('click', hit)
                                stayButton.removeEventListener('click', stay)

                                restartButton.addEventListener('click', restartGame4) // Hit button function
                            }
                            endGame()
                        } else if (computerCount == 21) {
                            function endGame() {
                                const h3 = document.createElement("h3"); // h3
                                h3.setAttribute('id', 'endGameText')
                                const h3Text = document.createTextNode("The Computer won! You lost this round.");
                                h3.appendChild(h3Text);
                                const element8 = document.getElementById("inGameContainer");
                                element8.appendChild(h3);

                                const restartButton = document.createElement("button");
                                restartButton.setAttribute('id', 'restartButton');
                                const restartButtonText = document.createTextNode("Restart");
                                restartButton.appendChild(restartButtonText);
                                const element9 = document.getElementById("inGameContainer");
                                element9.appendChild(restartButton);

                                hitButton.removeEventListener('click', hit)
                                stayButton.removeEventListener('click', stay)

                                restartButton.addEventListener('click', restartGame4) // Hit button function
                            }
                            endGame()
                        } else if (computerCount > 21) {
                            function endGame() {
                                const h3 = document.createElement("h3"); // h3
                                h3.setAttribute('id', 'endGameText')
                                const h3Text = document.createTextNode("The Computer Busted!  You win!");
                                h3.appendChild(h3Text);
                                const element8 = document.getElementById("inGameContainer");
                                element8.appendChild(h3);

                                const restartButton = document.createElement("button");
                                restartButton.setAttribute('id', 'restartButton');
                                const restartButtonText = document.createTextNode("Restart");
                                restartButton.appendChild(restartButtonText);
                                const element9 = document.getElementById("inGameContainer");
                                element9.appendChild(restartButton);

                                hitButton.removeEventListener('click', hit)
                                stayButton.removeEventListener('click', stay)

                                restartButton.addEventListener('click', restartGame4) // Hit button function
                            } // Else If Computer goes over 21
                            endGame()
                        }

                    } else if (computerCount < 21 && computerCount > playerCount) {
                        function endGame() {
                            const h3 = document.createElement("h3"); // h3
                            h3.setAttribute('id', 'endGameText')
                            const h3Text = document.createTextNode("The Computer won! You lost this round.");
                            h3.appendChild(h3Text);
                            const element8 = document.getElementById("inGameContainer");
                            element8.appendChild(h3);

                            const restartButton = document.createElement("button");
                            restartButton.setAttribute('id', 'restartButton');
                            const restartButtonText = document.createTextNode("Restart");
                            restartButton.appendChild(restartButtonText);
                            const element9 = document.getElementById("inGameContainer");
                            element9.appendChild(restartButton);

                            hitButton.removeEventListener('click', hit)
                            stayButton.removeEventListener('click', stay)

                            restartButton.addEventListener('click', restartGame3) // Hit button function
                        }
                        endGame()
                    } else if (computerCount == playerCount) {
                        function endGame() {
                            const h3 = document.createElement("h3"); // h3
                            h3.setAttribute('id', 'endGameText')
                            const h3Text = document.createTextNode("It is a draw.");
                            h3.appendChild(h3Text);
                            const element8 = document.getElementById("inGameContainer");
                            element8.appendChild(h3);

                            const restartButton = document.createElement("button");
                            restartButton.setAttribute('id', 'restartButton');
                            const restartButtonText = document.createTextNode("Restart");
                            restartButton.appendChild(restartButtonText);
                            const element9 = document.getElementById("inGameContainer");
                            element9.appendChild(restartButton);

                            hitButton.removeEventListener('click', hit)
                            stayButton.removeEventListener('click', stay)

                            restartButton.addEventListener('click', restartGame3) // Hit button function
                        }
                        endGame()
                    } else if (computerCount > 21) {
                        function endGame() {
                            const h3 = document.createElement("h3"); // h3
                            h3.setAttribute('id', 'endGameText')
                            const h3Text = document.createTextNode("The Computer Busted!  You win!");
                            h3.appendChild(h3Text);
                            const element8 = document.getElementById("inGameContainer");
                            element8.appendChild(h3);

                            const restartButton = document.createElement("button");
                            restartButton.setAttribute('id', 'restartButton');
                            const restartButtonText = document.createTextNode("Restart");
                            restartButton.appendChild(restartButtonText);
                            const element9 = document.getElementById("inGameContainer");
                            element9.appendChild(restartButton);

                            hitButton.removeEventListener('click', hit)
                            stayButton.removeEventListener('click', stay)

                            restartButton.addEventListener('click', restartGame3) // Hit button function
                        } // Else If Computer goes over 21
                        endGame()
                    } else if (computerCount == 21) {
                        function endGame() {
                            const h3 = document.createElement("h3"); // h3
                            h3.setAttribute('id', 'endGameText')
                            const h3Text = document.createTextNode("The Computer won! You lost this round.");
                            h3.appendChild(h3Text);
                            const element8 = document.getElementById("inGameContainer");
                            element8.appendChild(h3);

                            const restartButton = document.createElement("button");
                            restartButton.setAttribute('id', 'restartButton');
                            const restartButtonText = document.createTextNode("Restart");
                            restartButton.appendChild(restartButtonText);
                            const element9 = document.getElementById("inGameContainer");
                            element9.appendChild(restartButton);

                            hitButton.removeEventListener('click', hit)
                            stayButton.removeEventListener('click', stay)

                            restartButton.addEventListener('click', restartGame3) // Hit button function
                        }
                        endGame()
                    }

                } else if (computerCount > 21) {
                    function endGame() {
                        const h3 = document.createElement("h3"); // h3
                        h3.setAttribute('id', 'endGameText')
                        const h3Text = document.createTextNode("The Computer Busted!  You win!");
                        h3.appendChild(h3Text);
                        const element8 = document.getElementById("inGameContainer");
                        element8.appendChild(h3);

                        const restartButton = document.createElement("button");
                        restartButton.setAttribute('id', 'restartButton');
                        const restartButtonText = document.createTextNode("Restart");
                        restartButton.appendChild(restartButtonText);
                        const element9 = document.getElementById("inGameContainer");
                        element9.appendChild(restartButton);

                        hitButton.removeEventListener('click', hit)
                        stayButton.removeEventListener('click', stay)

                        restartButton.addEventListener('click', restartGame2) // Hit button function
                    } // Else If Computer goes over 21
                    endGame()
                } else if (computerCount < 21 && computerCount == playerCount) {
                    function endGame() {
                        const h3 = document.createElement("h3"); // h3
                        h3.setAttribute('id', 'endGameText')
                        const h3Text = document.createTextNode("It is a draw.");
                        h3.appendChild(h3Text);
                        const element8 = document.getElementById("inGameContainer");
                        element8.appendChild(h3);

                        const restartButton = document.createElement("button");
                        restartButton.setAttribute('id', 'restartButton');
                        const restartButtonText = document.createTextNode("Restart");
                        restartButton.appendChild(restartButtonText);
                        const element9 = document.getElementById("inGameContainer");
                        element9.appendChild(restartButton);

                        hitButton.removeEventListener('click', hit)
                        stayButton.removeEventListener('click', stay)

                        restartButton.addEventListener('click', restartGame2) // Hit button function
                    }
                    endGame()
                } else if (computerCount < 21 && computerCount > playerCount) {
                    function endGame() {
                        const h3 = document.createElement("h3"); // h3
                        h3.setAttribute('id', 'endGameText')
                        const h3Text = document.createTextNode("The Computer won! You lost this round.");
                        h3.appendChild(h3Text);
                        const element8 = document.getElementById("inGameContainer");
                        element8.appendChild(h3);

                        const restartButton = document.createElement("button");
                        restartButton.setAttribute('id', 'restartButton');
                        const restartButtonText = document.createTextNode("Restart");
                        restartButton.appendChild(restartButtonText);
                        const element9 = document.getElementById("inGameContainer");
                        element9.appendChild(restartButton);

                        hitButton.removeEventListener('click', hit)
                        stayButton.removeEventListener('click', stay)

                        restartButton.addEventListener('click', restartGame2) // Hit button function
                    }
                    endGame()
                } else if (computerCount == 21) {
                    function endGame() {
                        const h3 = document.createElement("h3"); // h3
                        h3.setAttribute('id', 'endGameText')
                        const h3Text = document.createTextNode("The Computer won! You lost this round.");
                        h3.appendChild(h3Text);
                        const element8 = document.getElementById("inGameContainer");
                        element8.appendChild(h3);

                        const restartButton = document.createElement("button");
                        restartButton.setAttribute('id', 'restartButton');
                        const restartButtonText = document.createTextNode("Restart");
                        restartButton.appendChild(restartButtonText);
                        const element9 = document.getElementById("inGameContainer");
                        element9.appendChild(restartButton);

                        hitButton.removeEventListener('click', hit)
                        stayButton.removeEventListener('click', stay)

                        restartButton.addEventListener('click', restartGame2) // Hit button function
                    }
                    endGame()
                }
            } else if (computerCount < 21 && computerCount == playerCount) {
                function endGame() {
                    const h3 = document.createElement("h3"); // h3
                    h3.setAttribute('id', 'endGameText')
                    const h3Text = document.createTextNode("It is a draw. Try again?");
                    h3.appendChild(h3Text);
                    const element8 = document.getElementById("inGameContainer");
                    element8.appendChild(h3);

                    const restartButton = document.createElement("button");
                    restartButton.setAttribute('id', 'restartButton');
                    const restartButtonText = document.createTextNode("Restart");
                    restartButton.appendChild(restartButtonText);
                    const element9 = document.getElementById("inGameContainer");
                    element9.appendChild(restartButton);

                    hitButton.removeEventListener('click', hit)
                    stayButton.removeEventListener('click', stay)

                    restartButton.addEventListener('click', restartGame1) // Hit button function
                }
                endGame()
            } else if (computerCount < 21 && computerCount > playerCount) {
                function endGame() {
                    const h3 = document.createElement("h3"); // h3
                    h3.setAttribute('id', 'endGameText')
                    const h3Text = document.createTextNode("The Computer won! You lost this round.");
                    h3.appendChild(h3Text);
                    const element8 = document.getElementById("inGameContainer");
                    element8.appendChild(h3);

                    const restartButton = document.createElement("button");
                    restartButton.setAttribute('id', 'restartButton');
                    const restartButtonText = document.createTextNode("Restart");
                    restartButton.appendChild(restartButtonText);
                    const element9 = document.getElementById("inGameContainer");
                    element9.appendChild(restartButton);

                    hitButton.removeEventListener('click', hit)
                    stayButton.removeEventListener('click', stay)

                    restartButton.addEventListener('click', restartGame1) // Hit button function

                }
                endGame()
            }
        } // STAY FUNCTION CLOSE BRACKET
    } // START GAME FUNCTION CLOSE BRACKET

function restartGame1() { // RESTARTS THE GAME
    numberOfGames++

    document.getElementById('inGameContainer').removeChild(displayPlayerCard1);
    document.getElementById('inGameContainer').removeChild(displayPlayerCard2);
    document.getElementById('inGameContainer').removeChild(displayComputerCard1);
    document.getElementById('inGameContainer').removeChild(displayComputerCard2);

    document.getElementById('deckPile1').remove();
    document.getElementById('deckPile2').remove();
    document.getElementById('deckPile3').remove();
    document.getElementById('deckPile4').remove();
    document.getElementById('deckPile5').remove();

    if(hitCount == 1){
        document.getElementById('inGameContainer').removeChild(displayHitCard1);
    }else if(hitCount == 2){
        document.getElementById('inGameContainer').removeChild(displayHitCard1);
        document.getElementById('inGameContainer').removeChild(displayHitCard2);
    }else if(hitCount == 3){
        document.getElementById('inGameContainer').removeChild(displayHitCard1);
        document.getElementById('inGameContainer').removeChild(displayHitCard2);
        document.getElementById('inGameContainer').removeChild(displayHitCard3);
    }

    if (hitCount == 0) {
        document.getElementById('hitButton').remove()
    } else if (hitCount == 1) {
        document.getElementById('hitButton2').remove()
    } else if (hitCount == 2) {
        document.getElementById('hitButton3').remove()
    } else if (hitCount == 3) {
        document.getElementById('hitButton4').remove()
    }

    document.getElementById('stayButton').remove()

    document.getElementById('restartButton').remove()
    document.getElementById('endGameText').remove()

    startGame();
}
function restartGame2() { // RESTARTS THE GAME
    numberOfGames++

    document.getElementById('inGameContainer').removeChild(displayPlayerCard1);
    document.getElementById('inGameContainer').removeChild(displayPlayerCard2);
    document.getElementById('inGameContainer').removeChild(displayComputerCard1);
    document.getElementById('inGameContainer').removeChild(displayComputerCard2);

    document.getElementById('deckPile1').remove();
    document.getElementById('deckPile2').remove();
    document.getElementById('deckPile3').remove();
    document.getElementById('deckPile4').remove();
    document.getElementById('deckPile5').remove();

    document.getElementById('inGameContainer').removeChild(displayStayCard2)

    if(hitCount == 1){
        document.getElementById('inGameContainer').removeChild(displayHitCard1);
    }else if(hitCount == 2){
        document.getElementById('inGameContainer').removeChild(displayHitCard1);
        document.getElementById('inGameContainer').removeChild(displayHitCard2);
    }else if(hitCount == 3){
        document.getElementById('inGameContainer').removeChild(displayHitCard1);
        document.getElementById('inGameContainer').removeChild(displayHitCard2);
        document.getElementById('inGameContainer').removeChild(displayHitCard3);
    }

    if (hitCount == 0) {
        document.getElementById('hitButton').remove()
    } else if (hitCount == 1) {
        console.log(`HIT COUNT = ${hitCount}`)
        document.getElementById('hitButton2').remove()
    } else if (hitCount == 2) {
        document.getElementById('hitButton3').remove()
    } else if (hitCount == 3) {
        document.getElementById('hitButton4').remove()
    }

    document.getElementById('stayButton').remove()

    document.getElementById('restartButton').remove()
    document.getElementById('endGameText').remove()

    startGame();
}
function restartGame3() { // RESTARTS THE GAME
    numberOfGames++

    document.getElementById('inGameContainer').removeChild(displayPlayerCard1);
    document.getElementById('inGameContainer').removeChild(displayPlayerCard2);
    document.getElementById('inGameContainer').removeChild(displayComputerCard1);
    document.getElementById('inGameContainer').removeChild(displayComputerCard2);

    document.getElementById('deckPile1').remove();
    document.getElementById('deckPile2').remove();
    document.getElementById('deckPile3').remove();
    document.getElementById('deckPile4').remove();
    document.getElementById('deckPile5').remove();

    document.getElementById('inGameContainer').removeChild(displayStayCard2)
    document.getElementById('inGameContainer').removeChild(displayStayCard3)

    if(hitCount == 1){
        document.getElementById('inGameContainer').removeChild(displayHitCard1);
    }else if(hitCount == 2){
        document.getElementById('inGameContainer').removeChild(displayHitCard1);
        document.getElementById('inGameContainer').removeChild(displayHitCard2);
    }else if(hitCount == 3){
        document.getElementById('inGameContainer').removeChild(displayHitCard1);
        document.getElementById('inGameContainer').removeChild(displayHitCard2);
        document.getElementById('inGameContainer').removeChild(displayHitCard3);
    }

    if (hitCount == 0) {
        document.getElementById('hitButton').remove()
    } else if (hitCount == 1) {
        console.log(`HIT COUNT = ${hitCount}`)
        document.getElementById('hitButton2').remove()
    } else if (hitCount == 2) {
        document.getElementById('hitButton2').remove()
    } else if (hitCount == 3) {
        document.getElementById('hitButton4').remove()
    }

    document.getElementById('stayButton').remove()

    document.getElementById('restartButton').remove()
    document.getElementById('endGameText').remove()

    startGame();
}
function restartGame4() { // RESTARTS THE GAME
    numberOfGames++

    document.getElementById('inGameContainer').removeChild(displayPlayerCard1);
    document.getElementById('inGameContainer').removeChild(displayPlayerCard2);
    document.getElementById('inGameContainer').removeChild(displayComputerCard1);
    document.getElementById('inGameContainer').removeChild(displayComputerCard2);

    document.getElementById('deckPile1').remove();
    document.getElementById('deckPile2').remove();
    document.getElementById('deckPile3').remove();
    document.getElementById('deckPile4').remove();
    document.getElementById('deckPile5').remove();

    document.getElementById('inGameContainer').removeChild(displayStayCard2)
    document.getElementById('inGameContainer').removeChild(displayStayCard3)
    document.getElementById('inGameContainer').removeChild(displayStayCard4)

    if(hitCount == 1){
        document.getElementById('inGameContainer').removeChild(displayHitCard1);
    }else if(hitCount == 2){
        document.getElementById('inGameContainer').removeChild(displayHitCard1);
        document.getElementById('inGameContainer').removeChild(displayHitCard2);
    }else if(hitCount == 3){
        document.getElementById('inGameContainer').removeChild(displayHitCard1);
        document.getElementById('inGameContainer').removeChild(displayHitCard2);
        document.getElementById('inGameContainer').removeChild(displayHitCard3);
    }

    if (hitCount == 0) {
        document.getElementById('hitButton').remove()
    } else if (hitCount == 1) {
        document.getElementById('hitButton2').remove()
    } else if (hitCount == 2) {
        document.getElementById('hitButton3').remove()
    } else if (hitCount == 3) {
        document.getElementById('hitButton4').remove()
    }

    document.getElementById('stayButton').remove()

    document.getElementById('restartButton').remove()
    document.getElementById('endGameText').remove()

    startGame();
}
function restartGame5() { // RESTARTS THE GAME
    numberOfGames++

    document.getElementById('inGameContainer').removeChild(displayPlayerCard1);
    document.getElementById('inGameContainer').removeChild(displayPlayerCard2);
    document.getElementById('inGameContainer').removeChild(displayComputerCard1);
    document.getElementById('inGameContainer').removeChild(displayComputerCard2);

    document.getElementById('inGameContainer').removeChild(computerHiddenCard);

    document.getElementById('inGameContainer').removeChild(displayHitCard1);

    document.getElementById('hitButton').remove()
    document.getElementById('stayButton').remove()

    document.getElementById('restartButton').remove()
    document.getElementById('endGameText').remove()

    document.getElementById('deckPile1').remove();
    document.getElementById('deckPile2').remove();
    document.getElementById('deckPile3').remove();
    document.getElementById('deckPile4').remove();
    document.getElementById('deckPile5').remove();

    startGame();
}
function restartGame6() { // RESTARTS THE GAME
    numberOfGames++

    document.getElementById('inGameContainer').removeChild(displayPlayerCard1);
    document.getElementById('inGameContainer').removeChild(displayPlayerCard2);
    document.getElementById('inGameContainer').removeChild(displayComputerCard1);
    document.getElementById('inGameContainer').removeChild(displayComputerCard2);

    document.getElementById('inGameContainer').removeChild(computerHiddenCard);

    document.getElementById('inGameContainer').removeChild(displayHitCard1);
    document.getElementById('inGameContainer').removeChild(displayHitCard2);

    document.getElementById('hitButton2').remove()
    document.getElementById('stayButton').remove()

    document.getElementById('restartButton').remove()
    document.getElementById('endGameText').remove()

    document.getElementById('deckPile1').remove();
    document.getElementById('deckPile2').remove();
    document.getElementById('deckPile3').remove();
    document.getElementById('deckPile4').remove();
    document.getElementById('deckPile5').remove();

    startGame();
}
function restartGame7() { // RESTARTS THE GAME
    numberOfGames++

    document.getElementById('inGameContainer').removeChild(displayPlayerCard1);
    document.getElementById('inGameContainer').removeChild(displayPlayerCard2);
    document.getElementById('inGameContainer').removeChild(displayComputerCard1);
    document.getElementById('inGameContainer').removeChild(displayComputerCard2);

    document.getElementById('inGameContainer').removeChild(computerHiddenCard);

    document.getElementById('inGameContainer').removeChild(displayHitCard1);
    document.getElementById('inGameContainer').removeChild(displayHitCard2);
    document.getElementById('inGameContainer').removeChild(displayHitCard3);

    document.getElementById('hitButton3').remove()
    document.getElementById('stayButton').remove()

    document.getElementById('restartButton').remove()
    document.getElementById('endGameText').remove()

    document.getElementById('deckPile1').remove();
    document.getElementById('deckPile2').remove();
    document.getElementById('deckPile3').remove();
    document.getElementById('deckPile4').remove();
    document.getElementById('deckPile5').remove();

    startGame();
}
