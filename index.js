//Arrays
let featuredPosts= [
    "Check out my netflix", 
    "Here's code for my project",
    "I've relaunched my portfoloio"
]

let experience = ["Ceo at Scrimba", "Frontend developr at Xeneta", "People counter for Norstat", "Ceo at Scrimba"]

console.log(experience[1])
console.log(experience[2])
console.log(experience[0])

let tobi = ["Tobi Adegoroye",23, true]
 
let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "👋"
]
let newMessage = "Same here!"

messages.push(newMessage)
console.log(messages)

messages.pop()
console.log(messages)

// for(let count = 10; count <= 20; count += 1) {
//     console.log(count)
// }

// for(let i = 10; i < 101; i+=10){
//     console.log(i);
// }

for( i = 0; i < messages.length; i++) {
    console.log(messages[i])
}

let cardsN = [7 , 3, 9]

for(i = 0; i<cardsN.length; i++) {
    console.log(cardsN[i])
}

let greetingEl = document.getElementById("greeting-el");

let sentence = ["Hello", "my", "name", "is", "Tobi"]

for(i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "
}

let playerTime1 = 102
let player2Time = 107

function getFastestRaceTime(){
    if (playerTime1 < player2Time) {
        return playerTime1
    } else if (player2Time < playerTime1){
        return player2Time
    } else {
        return playerTime1
    }
}

let fastestRace = getFastestRaceTime()

console.log(fastestRace)


function totalRaceTime() {
    return playerTime1 + player2Time
}

let totalTime = totalRaceTime()
console.log(totalTime)



function rollDice() {
let randomN = Math.floor(Math.random() * 6) + 1
return randomN
}

let roll = rollDice()
console.log(roll)


let likeDocumentaries = true
let likesStartups = false

if (likeDocumentaries === true || likesStartups === true) {
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like")
}

// objects

 
 
// ---------------------------------------------------------------------------------------------------------------------

 let player = {
     playerName : "Tobi",
     playerChips : 145,
     sayHello: function(){
        console.log("Hola")
     }
 }

 player.sayHello()

let cards = []
let sum = 0
let isAlive = false
let message = ""
let messageEL = document.getElementById("message-el");
 let sumEL = document.querySelector("#sum-el");
 let cardsEl = document.querySelector("#cards-el");
 let randomNumber = getRandomCard()



 let playerEl = document.getElementById("player-el")
 playerEl.textContent = player.playerName + ": $" + player.playerChips



 function getRandomCard() {
    let random = Math.floor(Math.random() * 13) + 1
    if (random > 10) {
        return 10
    } else if (random === 1) {
        return 11
    } else {
      return random
    }
 }

 function startGame() {
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {
     for(i = 0; i < cards.length; i++){
     cardsEl.textContent += cards[i] + " - ";

     }
     sumEL.textContent = "Sum:  " + sum;

    let hasBlackJack = false

    if(sum <= 20) {
        message = "Do you want to draw a new card";
    } else if (sum === 21) {
        message = "Wohoo! You've got a blackjack!";
        hasBlackJack = true
    } else {
            message = "your out of the game!";
            isAlive = false
    }

    messageEL.textContent = message;
}


function newGame() {
    if(isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }

}

