// Assignment Code
var generateBtn = document.querySelector("#generate");
// Temporary password placeholder
var passwordtemp = "temporary password";

// Random generators
function random_num_gen() {
  // Generate random number 0 to 9
  var randInt = Math.floor(Math.random() * 10);
  return randInt;
}

function random_char_gen() {
  // Generate random character from the english alphabet
  var alpha = "abcdefghijklmnopqrstuvwxyz"
  var randCharNum = Math.floor(Math.random() *alpha.length);
  var randChar = alpha[randCharNum];
  return randChar;
}

function random_specialChar_gen() {
  // Generate random character from the english alphabet
  // wht is needed `,\,|
  // creates a full list of all special characters
  var origin_specialChar_list = `~!@#$%^&*()-_=+\|]}[{'";:,<.>/?}]`;
  var addChar = "`";
  var specialChar_list = origin_specialChar_list + addChar;
  // generate random special characters
  var randspecialChar_Num = Math.floor(Math.random() *specialChar_list.length);
  var randspecialChar = specialChar_list[randspecialChar_Num];
  return randspecialChar

}

// Write password to the #password input
function writePassword() {
  password = generatePassword();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
<<<<<<< HEAD

// TODO: Make the password generator 
// TODO: Find out how to display the prompts
=======
>>>>>>> 149b710485c9d130a29eb23f657bd1e0636f4bb6
