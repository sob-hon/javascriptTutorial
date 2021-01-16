// Write a isValidPassword function
function isValidPassword(password, username){
    if ((password.length >= 8) && (password.includes(" ") === false) && 
    (password.includes(username)) === false) {
        return true;
    }
    return false;   
}
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

let pass1 = isValidPassword('89Fjj1nms', 'dogLuvr');  //true
let pass2 = isValidPassword('dogLuvr123!', 'dogLuvr') //false
let pass3 = isValidPassword('hello1', 'dogLuvr') //false

console.log(`pass1 is ${pass1}\npass2 is ${pass2}\npass3 is ${pass3}`);