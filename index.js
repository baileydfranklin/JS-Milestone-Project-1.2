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

function startGame(){

    console.log('The game has started'); // Test if Button is working
    element3.parentNode.removeChild(startGameContainer); // Remove Start Button after 'click'

    element2.parentNode.removeChild(headerContainer); // Remove header container after 'click'
    // element1.parentNode.removeChild(headerContainer); // Remove header container after 'click'



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
    addScoreBoareds()



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
    h3PlayerScore.setAttribute('id', 'playerScore')
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
    h3ComputerScore.setAttribute('id', 'computerScore')
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

    //////////     GAME PLAY / PLAYER'S TURN     //////////////////////////////////////////////////////////////////////////////////////////////////////

    const hitButton = document.createElement("button");
    hitButton.setAttribute('id', 'hitButton');
    const hitButtonText = document.createTextNode("Hit (me)");
    hitButton.appendChild(hitButtonText);
    const element6 = document.getElementById("inGameContainer");
    element6.appendChild(hitButton);

    hitButton.addEventListener('click', hit) // Hit button function

    const stayButton = document.createElement("button");
    stayButton.setAttribute('id', 'stayButton');
    const stayButtonText = document.createTextNode("Stay");
    stayButton.appendChild(stayButtonText);
    const element7 = document.getElementById("inGameContainer");
    element7.appendChild(stayButton);

    stayButton.addEventListener('click', stay) // Stay button function

    function hit() {
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
        console.log(`${playerCount} Player's hand value after hit 1`); // Display player's total hand value after hit 1

        if (playerCount > 21) {
            hitButton.style.backgroundColor = 'gray'
            hitButton.setAttribute('id', 'bustHitButton')

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

                restartButton.addEventListener('click', startGame) // Hit button function
            }
            endGame()
        }
    }
    function stay() {
        computerHiddenCard.setAttribute('id', 'displayStayCard1')

        computerCount += computerCard2.value;
        console.log(`${computerCount} Computer's total after second card is Flipped`)
    
        if(computerCount < playerCount && computerCount < 21){
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
    
        }
    }
}

///   NEED HELP WITH   ///
// - Display total hand value
// - Totalling up Computer's hand value
// - Loop 'Hit' button function
// - Make 'Restart Game' button work



///   TO DO   ///
// - Animate cards as they get dealt out
// - Change 'Hit' and 'Stay' buttons to animated Suits