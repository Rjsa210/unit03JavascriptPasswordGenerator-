# unit03JavascriptPasswordGenerator
The goal of this project is to complete a web based application that allows users to input criteria in order to generate strong passwords. 

The website functions as such:

  1. The user begins the process by clicking the "generate" button.
    [Figure 1](Assets/screenshots/begin.jpg) 
  1. The user is prompted to enter a character length between 8 - 128. entering anything other than a  number between 8 - 128 will return a error and the process will restart. [Figure 2](Assets/screenshots/characterLength.jpg)
  1. The user is asked to confirm lowercase, uppercase, numurals and special characters in that order. When confirmed, an array containing each character set is pushed to the array that will be used to generate the password. [Figure 3](Assets/screenshots/confirmLowercase.jpg) [Figure 4](Assets/screenshots/confirmUppercase.jpg) [Figure 5](Assets/screenshots/confirmNumerals.jpg) [Figure 6](Assets/screenshots/confirmSpecial)
  1. Final confirmation is offered for user approval [Figure 7](Assets/screenshots/confirmSelections.jpg)
  1. Upon approval the password is generated form the charset array and printed to the text area [Figure 8](Assets/screenshots/passwordDisplay.jpg)


### Issues

Because the Math.random function pulls randomly from an array, there is the limited potential to miss entire charactersets even though they are included in the source array. For example, if you choose a low character count and include all character sets, there is the possibility of not having any numerals because there are only 10 numerals in the  character pool. I would like to be able to avoid this with a function to check the password and re-generate if it does not meet the user inputs. Unfortunately I was not able to create such a function. I need more practice.

The nature of the javascript pop up boxes is rather limiting on user feedback, if I was to continue this project, I would design an interface that allowed the user to select criteria on the website before submitting. Also I have read about some cryptographic functions that can generate very secure passwords that don't rely on random number generators.


### Visit the site [Javascript Password Generator](https://rjsa210.github.io/unit03JavascriptPasswordGenerator-/)







