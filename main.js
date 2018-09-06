let suits = ['\u2665', '\u2663', '\u2666', '\u2660'];
let values = ['K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2', 'A'];


let shuffleDeckButton = document.getElementById('shuffle-deck-button')

let playerHand1 = [];
let playerHand2 = [];
let playerHand3 = [];
let playerHand4 = [];

let template = document.getElementById("blank");
let stack = document.getElementById("stack")

let cleanDeck = createDeck();
let shuffledDeck = createDeck();
shuffleDeck(shuffledDeck)


function createDeck() {
    let deck = [];
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
        for (let valueIdx = 0; valueIdx< values.length; valueIdx ++) {
            let card = {
                suit: suits[suitIdx],
                value: values[valueIdx]
            };
            deck.push(card);
        }
    }
    return deck;
}


function shuffleDeck(deck) {
    for (let i = 0; i < deck.length; i ++){
        let swapIdx = Math.trunc(Math.random() * deck.length);
        let tmp = deck[swapIdx];
        deck[swapIdx] = deck[i];
        deck[i] = tmp;
        
    }
    console.log(shuffledDeck)
}

function dealCards(shuffledDeck) {
    for (let i = shuffledDeck.length; i > 0; i-=4){
        playerHand1.push(shuffledDeck.shift());
        playerHand2.push(shuffledDeck.shift());
        playerHand3.push(shuffledDeck.shift());
        playerHand4.push(shuffledDeck.shift());
        console.log(playerHand1)
        console.log(playerHand2)
        console.log(playerHand3)
        console.log(playerHand4)
};
}


function renderCard(card) {
    let newCard = template.cloneNode(true);
    newCard.id = card.suit + card.value;
    newCard.getElementsByTagName("div")[0].innerHTML = card.value ;
    newCard.getElementsByTagName("div")[1].innerHTML = card.suit;
    newCard.style.display = 'inline-block';
    if (card.suitLetter == "\u2665" || card.suitLetter == "\u2666") {
        newCard.className = newCard.className + " red";
    }
    stack.appendChild(newCard);
}