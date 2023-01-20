/ Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Create Variables
var passwordLength;
var yesLower;
var yesUpper;
var yesNumber;
var yesSpecialChar;
var userChoices;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Prompt user for password length and console log it.
  passwordLength = prompt("How many characters would you like your password? Choose between 8 and 128");
  console.log("Password length:" + passwordLength);
  // Create an if statement to make sure they put in a value that meets OUR criteria
  if(!passwordLength) {
    alert("Please define the password's length -> try again.");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Your password must be between 8 and 128 characters long...");
    console.log("Password length:" + passwordLength);
  } else { 
    yesLower = confirm("Would you like to include lower case letters?");
    console.log("Lowercase? " + yesLower);
    yesUpper = confirm("Will this contain upper case letters?");
    console.log("Uppercase? " + yesUpper);
    yesNumber = confirm("Will this contain numbers?");
    console.log("Numbers? " + yesNumber);
    yesSpecialChar = confirm("Will this contain special characters?");
    console.log("Special Characters? " + yesSpecialChar);
  }
}

// I need to finish...