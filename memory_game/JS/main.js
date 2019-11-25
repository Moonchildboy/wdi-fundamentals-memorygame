//&&
var cards = [
	{
	rank: 'queen',
	suit: 'hearts',
	cardImage: "images/queen-of-hearts.png"
	},
	{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: "images/queen-of-diamonds.png"
	},
	{
	rank: 'king',
	suit: 'hearts',
	cardImage: "images/king-of-hearts.png"
	},
	{
	rank: 'king',
	suit: 'diamonds',
	cardImage: "images/king-of-diamonds.png"
	}
];
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
//are the following placed correctly in this function? 
console.log("User flipped" + cards[cardId]);
cardsInPlay.push(cards[].rank);//come back to this
cardsInPlay.push(cards[cardId].suit);
console.log(suit);
cardsInPlay.push(cards[cardId].cardImage);
console.log(cardImage);
checkForMatch();
};
flipCards(0);
flipCards(2);
