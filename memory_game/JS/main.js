//&&
var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
};
//unclear on the correct syntax for the following if statement
function flipCards(cardId){
if (cardsInPlay.length===2 && cardsInPlay[0]===cardsInPlay[1]) {
	alert("You found a match!");
} else {alert("Sorry, try again.")}
//are the following three placed correctly in this function? 
console.log("User flipped" + cards[cardId]);
cardsInPlay.push(cards[cardId]);
checkForMatch();
};
flipCards(0);
flipCards(2);
