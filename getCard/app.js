// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

function getCard() {
    const val = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
    const shape = ["clubs","spades", "hearts", "diamonds"];
    let valRand = Math.floor((Math.random() * val.length));
    let suitRand = Math.floor((Math.random() * shape.length));
    return {
        value: val[valRand],
        suit: shape[suitRand]
    }
}

console.log(getCard()); 

