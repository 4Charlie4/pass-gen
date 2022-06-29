// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

//Need to have passwordText.value include numbers, text and special characters.

  passwordText.value = password;

};

var lowerChar = randomPass(97, 122);
//var upperChar = randomPass()
//var specialChar = randomPass()
//var numbers = randomPass()

 function generatePassword() {
  lowerChar()

  var passwordTypeUpper = window.confirm("Do you want your password to have numbers in it?");
  var passwordTypeNumbers = window.confirm("Do you want your password to have numbers in it?");
  var passwordTypeSpecial = window.confirm("Do you want your password to have special characters in it?");
   
  }
 function randomPass(first, last){
    var pass = []
    for (var i = first; i<= last; i++) {
      pass.push(i);
      return pass
    }
 };

 











// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
