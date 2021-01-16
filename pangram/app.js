// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!
function isPangram(sentence) {
    const lowerSen = sentence.toLowerCase(); 
    let alphabet = "abcdefghijklmnopqrstuxyz"
    for (const char of alphabet) {
        if (lowerSen.indexOf(char) === -1){
            return false;
        }
    }
    return true;
}
let sen1 = isPangram('The five boxing wizards jump quickly') //true
let sen2 = isPangram('The five boxing wizards jump quick') //false

console.log(`The five boxing wizards jump quickly is a pangram: ${sen1}
            The five boxing wizards jump quick is a pangram: ${sen2}`);