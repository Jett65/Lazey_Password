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

function getCase() {
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
  var include = 2;
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

function getspecialChars() {
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
function generatePassword() {
  // Generates the password from the criteria
  var password = "";
  // var length = getLength();
  var length = 8
  var include_caps = getCase();
  var include_nums = getNums();
  var include_special = getspecialChars();

  // adds the include_ so they work with the cases
  var resoles = (include_caps+include_nums+include_special)

  switch (resoles) {
    // console.log("yes")
    // console.log("no")
    case 0:
      // lowercase only
      // no no no
      for (var i = 0; i < length; i++) {
        password += random_let_gen(lowercase_letters);
      }
      return password;
      break;
    case 1:
      // include uppercase letters
      // yos no no
      for (var i = 0; i < length; i++) {
        // 0: lowercase letter
        // 1; upper case letter
        var select = Math.floor(Math.random() * 2)
        console.log(select)
        if (select == 0){
          password += random_let_gen(lowercase_letters);
        } else{
          password += random_let_gen(uppercase_letters);
        } 
      }
      return password
      break;
    case 2:
      // include numbers 
      // no yos no
      for (var i = 0; i < length; i++) {
        // 0: lowercase letter
        // 1; number
        var select = Math.floor(Math.random() * 2)
        if (select == 0){
          password += random_let_gen(lowercase_letters);
        } else{
          password += random_num_gen();
        } 
      }
      return password
      break;
    case 3:
      // include capitol letters and numbers
      // yes yes no 
      break;
    case 4:
      // include special characters
      // no no yes   
      break;
    case 5:
      // include capitol letters and special characters
      // yes no yes    
      break;
    case 6:
      // include numbers and special characters
      // no yes yes    
      break;
    case 7:
      // include capitol letters and numbers and special characters
      // yes yes yes   
      break;
    default:
      console.log("Broken")
      break;
  }

}
// Write password to the #password input
function writePassword() {
  password = generatePassword();
}
// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// TODO: make the rest of the cases work for password generation
