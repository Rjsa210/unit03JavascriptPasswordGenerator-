// Assignment Code
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
/* items to keep track of
character length
character types
*/

var charLength;
var lowerCase;
var upperCase;
var numerals;
var specialChars;
var charSet;

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


var generatePassword = function() {
  charSet = [];
  if (lowerCase === true) {
    charSet.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
  }
  if (upperCase === true) {
    charSet.push ("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
  }
  if (numerals === true) {
    charSet.push("0","1","2","3","4","5","6","7","8","9");
  }
  if (specialChars === true) {
    charSet.push("~","!","@","#","$","%","^","&","*","(",")","_","+","-","=","`","\\",",","|","{","}","[","]","\.","\,","<",">","?");
  }
  console.log(charSet);
  }
//Prompt user for password criteria

// prompt for character length 
var lengthPrompt = function () {
  charLength = prompt("Select password character length (min 8 - max 128)", "Type number here");
  charLength = Math.floor(charLength);
  if (isNaN(charLength)) {
    alert("Input must be a whole number");
    return;
  } else if (charLength < 8 || charLength > 128) {
    alert("Number must be between 8 - 128");
    return;
  } else {
    typeConfirm();
  }
}
//prompt for character typses (radio Buttons)
var typeConfirm = function () {
  lowerCase = confirm("Would you like to use lowercase characters?");
  upperCase = confirm("Would you like to use UPPERCASE characters?");
  numerals = confirm("Would you like to use numarals? i.e. 12345 ");
  specialChars = confirm("Would you like to use special characters? i.e. !@#$%");
  if (!lowerCase && !upperCase && !numerals && !specialChars) {
    alert("You must choose at least one character type.");
    return;
  } else {//input repeated on confirm menu
    confirm("You have selected - Password Length: " + charLength + " Lowercase Letters: " + lowerCase + " Uppercase Letters: " + upperCase + " Numerals: " + numerals + " Special Characters: " + specialChars + " ...Are you ready to generate?");
  }
  generatePassword();
  }



//password generated to text
//define what characters to use based on if statement



// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
