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

// capitol and lowercase letters
var lowercase_letters = "abcdefghijklmnopqrstuvwxyz";
var uppercase_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function random_let_gen(alpa_string) {
  // Generate random character from the english alphabet
  var alpha = alpa_string;
  var randCharNum = Math.floor(Math.random() * alpha.length);
  var randChar = alpha[randCharNum];
  return randChar;
}


function random_char_gen() {
  // Generate random character from the english alphabet
  // wht is needed `,\,|
  // creates a full list of all special characters
  var char_list = `~!@#$%^&*()-_=+\|]}[{'";:,<.>/?}]` + "`";
  // generate random special characters
  var randChar_Num = Math.floor(Math.random() * char_list.length);
  var randChar = char_list[randChar_Num];
  return randChar;
}

function check_criteria(choos_fintion) {
  // Checks the criteria given
  // lowercase, uppercase, numeric, and/or special characters

  function getLength() {
    // Gets the length of the password
    var get_length = prompt("How many characters would you like");
    if (get_length < 8 || get_length > 128) {
      alert("Password must be between 8 and 128 characters");
      getLength();
    } else {
      return get_length;
    }
  }

  function getCase() { }
  function getNums() { }
  function getSchar() { }

  if (choos_fintion == 0) {
    return getLength();
  } else if (choos_fintion == 1) {
    return getCase();
  } else if (choos_fintion == 2) {
    return getSchar();
  } else if (choos_fintion == 3) {
    return getNums();
  } else { }
}

function generatePassword(length) {
  // Generates the password from the criteria
  var password = "";
  for (var i = 0; i < length; i++) {
    password += random_let_gen(lowercase_letters);
  }
  return password;
}
// Write password to the #password input
function writePassword() {
  password = generatePassword();
}
// Write password to the #password input
function writePassword() {

  var password = generatePassword(check_criteria(0));

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// TODO: Make the popups work for the other criteria
// figure out how the <= works
