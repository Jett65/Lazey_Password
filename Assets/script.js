// Assignment Code
var generateBtn = document.querySelector("#generate");
// capitol and lowercase letters
var lowercase_letters = "abcdefghijklmnopqrstuvwxyz";
var uppercase_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Random generators
function random_num_gen() {
  // Generate random number 0 to 9
  var randInt = Math.floor(Math.random() * 10);
  return randInt;
}

function random_let_gen(alpa_string) {
  // Generate random character from the english alphabet
  // requires one of the _letters strings
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


// Checks the criteria 
function getLength() {
  // Gets the length of the password
  while (true) {
    var get_length = prompt("How many characters would you like");
    if (get_length == null) {
      break;
    } else if (get_length < 8 || get_length > 128) {
      alert("Password must be between 8 and 128 characters");
    } else {
      return get_length;
      break;
    }
  }
}

function getLowerCase() {
  // Gets wether or not the user wants capitol letters
  var include = 1;
  var exclude = 0;

  while (true) {
    var get_case = prompt("would you like to include lowercase letters (Enter [Y] or [N])");
    if (get_case == null) {
      return exclude;
      break;
    } else if (get_case.toUpperCase() == "Y" || get_case.toUpperCase() == "YES") {
      return include;
      break;
    } else if (get_case.toUpperCase() == "N" || get_case.toUpperCase() == "NO") {
      return exclude;
      break;
    } else {
      alert("You must Enter Y or N");
    }
  }
}
function getUpperCase() {
  // Gets wether or not the user wants capitol letters
  var include = 2;
  var exclude = 0;

  while (true) {
    var get_case = prompt("would you like to include capitol letters (Enter [Y] or [N])");
    if (get_case == null) {
      return exclude;
      break;
    } else if (get_case.toUpperCase() == "Y" || get_case.toUpperCase() == "YES") {
      return include;
      break;
    } else if (get_case.toUpperCase() == "N" || get_case.toUpperCase() == "NO") {
      return exclude;
      break;
    } else {
      alert("You must Enter Y or N");
    }
  }
}

function getNums() {
  var include = 3;
  var exclude = 0;

  while (true) {
    var get_nums = prompt("would you like to include numbers (Enter [Y] or [N])");
    if (get_nums == null) {
      return exclude;
      break;
    } else if (get_nums.toUpperCase() == "Y" || get_nums.toUpperCase() == "YES") {
      return include;
      break;
    } else if (get_nums.toUpperCase() == "N" || get_nums.toUpperCase() == "NO") {
      return exclude;
      break;
    } else {
      alert("You must Enter Y or N");
    }
  }
}

function getSpecialChars() {
  var include = 4;
  var exclude = 0;

  while (true) {
    var get_specialChar = prompt("would you like to include special characters (Enter [Y] or [N])");
    if (get_specialChar == null) {
      return exclude;
      break;
    } else if (get_specialChar.toUpperCase() == "Y" || get_specialChar.toUpperCase() == "YES") {
      return include;
      break;
    } else if (get_specialChar.toUpperCase() == "N" || get_specialChar.toUpperCase() == "NO") {
      return exclude;
      break;
    } else {
      alert("You must Enter Y or N");
    }
  }
}


// Generates password
function generatePassword(length, lower, upper, nums, special) {
  // randomly generate a password
  var password = "";
  var prams_list = [lower, upper, nums, special];
  var include_list = [];
  for (var i = 0; i < 4; i++) {
    if (prams_list[i] >= 1) {
      include_list.push(prams_list[i]);
    } else {} 
  }

  // generate random password based on criteria
  for (var i = 0; i < length; i++) {
    var select = Math.floor(Math.random() * include_list.length);
    if (include_list[select] == 1) {
      password += random_let_gen(lowercase_letters);
    } else if (include_list[select] == 2) {
      password += random_let_gen(uppercase_letters);
    } else if (include_list[select] == 3) {
      password += random_num_gen();
    } else if (include_list[select] == 4) {
      password += random_char_gen();
    } else {}
  }
  return password;
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword(
    getLength(),
    getLowerCase(),
    getUpperCase(),
    getNums(),
    getSpecialChars()
  );

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// TODO: make the page not crash