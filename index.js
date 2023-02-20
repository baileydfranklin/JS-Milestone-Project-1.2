import { deck } from '/deck.js';

console.log(Math.random()*deck.length)


let userHand = []
userHand.push(deck[0])

deck.shift()
console.log(deck)
console.log(userHand)