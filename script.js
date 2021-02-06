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

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

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
  } else {
    confirm("You have selected - Password Length: " + charLength + " Lowercase Letters: " + lowerCase + " Uppercase Letters: " + upperCase + " Numerals: " + numerals + " Special Characters: " + specialChars + " ...Are you ready to generate?");
  }
}
//input repeated on confirm menu

//password generated to text


// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
