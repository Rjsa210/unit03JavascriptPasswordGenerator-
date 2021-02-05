// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Prompt user for password criteria

// prompt for character length (slider)

//prompt for character times (radio Buttons)

//input repeated on confirm menu

//password generated to text


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
