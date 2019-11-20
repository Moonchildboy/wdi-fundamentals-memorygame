//&&
var cards = ["queen","queen","king","king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User filpped" + cardsInPlay)
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User filpped" + " " + cardsInPlay)
if (cardsInPlay.length===2 && cardsInPlay[0]===cardsInPlay[1]) {
	alert("You found a match!");
} else {alert("Sorry, try again.")}