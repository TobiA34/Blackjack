
// let sumEl = document.getElementById("sum-el")

// //Random number between 2 and 11
// let firstCard = Math.floor(Math.random() * 11) + 2;

// let secondCard =  Math.floor(Math.random() * 11) + 2;

// let sum = firstCard + secondCard

// if (sum < 21) {
//   sumEl.textContent = "Do you want to draw a new card? 😊"
// } else if (sum === 21) {
//     sumEl.textContent = "You have won the game 🥳"
// } else {
//     sumEl.textContent = "You have lost the game 😭"

// }
// // sumEl.textContent = sum

// console.log(sum)

// let age = 22

// if (age < 21) {
//     console.log("You can not enter the club!")
// } else {
//     console.log("welcome")
// }

// let age = 100

// if (age < 100) {
//   console.log("Not elegible")
// } else if( age === 100) {
//     console.log("Here is your birthday card from the king")
// } else {
//         console.log("Not elegible, you have already gotten one!")
// }
// console.log(4===3) //false
// console.log(5 > 12) //true
// console.log(12 > 12) //false
// console.log(3 > 0) //true
// console.log(3 < 0) //false
// console.log(3 >= 3) //true
// console.log(11 <= 11) //true
// console.log(3 <= 2) //false


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
    "All good. Been working on my portfolio lately."
]
let newMessage = "Same here!"

messages.push(newMessage)
console.log(messages)

messages.pop()
console.log(messages)


// ---------------------------------------------------------------------------------------------------------------------

let firstCard = 10
let secondCard = 11
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let isAlive = true
let message = ""
let messageEL = document.getElementById("message-el");
//let sumEL = document.getElementById("sum-el");
 let sumEL = document.querySelector("#sum-el");
 let cardsEl = document.querySelector("#cards-el");


 function startGame() {
    renderGame()
}

function renderGame() {
     cardsEl.textContent = "Cards: " + cards[0] + " - " + cards[1];
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
    let card = Math.floor(Math.random() * 11) + 2;
    cards.push(card)
    console.log(cards)
    sum += card
    renderGame()
}

