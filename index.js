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

const h4 = document.createElement("h4"); // h4 RULES
const h4Text = document.createTextNode("Rules: Blackjack hands are scored by their point total. The hand with the highest total wins as long as it doesn't exceed 21; a hand with a higher total than 21 is said to bust. You automatically lose. Cards 2 through 10 are worth their face value, and face cards (Jack, Queen, King) are also worth 10. Good luck!")
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



    //start hands here
    function dealCards(deck){
        let randomCard = Math.floor(Math.random()*deck.length);
        let dealtCard1 = deck[randomCard];

        return dealtCard1;
    }
    let playerCard1 = dealCards(deck);
    console.log(playerCard1) // Test if random card was selected

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

    // if("AC" == deck[0].name){
    //     let displayPlayerCard1 = document.createElement('img');
    //     displayPlayerCard1.src = 'assets/AC.png';
    //     let id_name6 = 'displayPlayerCard1';
    //     displayPlayerCard1.setAttribute("id", id_name6);
    //     document.getElementById('inGameContainer').appendChild(displayPlayerCard1);

    //     console.log('If statement is working');
    // }
    
    // playerCard1 = deck[0].name; // Using for reference
    // console.log(playerCard1) // Using for reference
    // console.log(deck[0].name) // Using for reference
}



let userHand = [];



// console.log(Math.random()*deck.length)

// let userHand = []
// userHand.push(deck[0])

// deck.shift()
// console.log(deck)
// console.log(userHand)