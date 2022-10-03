// Assignment Code
var generateBtn = document.querySelector("#generate");
// capitol and lowercase letters
var lowercase_letters = "abcdefghijklmnopqrstuvwxyz";
var uppercase_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Temporary password placeholder
var passwordtemp = "temporary password";


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
  var include = 1;
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
  var include = 1;
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
  var include = 1;
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
function generatePassword(lower, upper, nums, special, length) {
  // randomly generate a password
  // lower: 1 upper: 2 numbers: 4 special: 8
  var password = "";
  for (var i = 0; i > length; i++) {
    if (lower == 1) {
      // if include lowercase letters
      password += random_let_gen(lowercase_letters);
    } else { }
    if (upper == 1) {
      // if include uppercase letters
      password += random_let_gen(uppercase_letters);
    } else { }
    if (nums == 1) {
      // if include numbers
      password += random_num_gen();
    } else { }
    if (special == 1) {
      // if include special characters
      password += random_char_gen();
    } else { }
  }
  console.log(password);
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

// TODO: make the rest of the cases work for password generation