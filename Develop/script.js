// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

 var passwordText = document.querySelector("#password");
 if (prompts) {
 let password = generatePassword();
//Need to have passwordText.value include numbers, text and special characters.
   passwordText.value = password;
 } else {
  passwordText.value = '';
 }
}

//array that will contain all password types 
  var allPassword = []

   //array for ascii character codes
  function arrayFirstToLast (first, last)  {
    var pass = [];
    for (let i = first; i <= last; i++) {
      pass.push(i);
    }
    return pass;
  };

  //ascii character codes are here
  var charLower = arrayFirstToLast(97, 122);
  var charUpper = arrayFirstToLast(65, 90);
  var charNum = arrayFirstToLast(48, 57);
  var charSpecial = arrayFirstToLast(33, 47)
    .concat(arrayFirstToLast(58, 64))
    .concat(arrayFirstToLast(97, 122))
    .concat(arrayFirstToLast(123, 126));
  console.log(charUpper, charLower, charNum, charSpecial);
// code to actually generate password soon
function generatePassword() {
  var password = "";
  var everyPass = [];
  for (var i = 0; i < charLength; i++) {
    //trying to find out what to put here
    var randomChar = allPassword[Math.floor(Math.random() * charLength) ];
    password += randomChar;
    everyPass.push(randomChar)


  }
  return everyPass.join('');
}
var charLength = 6;
// prompt user on specifications for pass
function prompts() {
 charLength = parseInt(window.prompt("How many characters would you like to have in your password? (6 - 64)"));

  if(isNaN(charLength) || charLength < 6 || charLength > 64) {
    alert("Please try again");
    return false;
  }
 if  (confirm("Do you want Uppercase letters in your password?")) {
  allPassword = allPassword.concat(charUpper);
 }
 if (confirm("Do you want numbers in your password?")) {
  allPassword = allPassword.concat(charNum);
 }
 if (confirm("Do you want special characters in your password?")) {
  allPassword = allPassword.concat(charSpecial);
 }
 return true;
}


  
  




  
   //character code generation
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
