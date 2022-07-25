// Assignment Code
const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");
//ascii character codes are here
const charLower = arrayFirstToLast(97, 122);
const charUpper = arrayFirstToLast(65, 90);
const charNum = arrayFirstToLast(48, 57);
const charSpecial = arrayFirstToLast(33, 47)
  .concat(arrayFirstToLast(58, 64))
  .concat(arrayFirstToLast(97, 122))
  .concat(arrayFirstToLast(123, 126));

// Write password to the #password input
function writePassword() {
  let ifTruePrompts = prompts();
  if (ifTruePrompts) {
    let password = generatePassword();
    //Need to have passwordText.value include numbers, text and special characters.
    passwordText.value = password;
  } else {
    passwordText.value = "";
  }
}

//array for ascii character codes
function arrayFirstToLast(first, last) {
  const asciiArry = [];
  for (let i = first; i <= last; i++) {
    asciiArry.push(i);
  }
  return asciiArry;
}

// code to actually generate password soon
function generatePassword(charLength, charTypes) {
  charPass = [];
  for (var i = 0; i < charLength; i++) {
    var charRandomCode =
      charTypes[Math.floor(Math.random() * charTypes.length)];
    password += charRandomCode[charTypes];
  }
  return password;
}

// prompt user on specifications for pass
function prompts() {
  let charTypes = [];
  let charLength = parseInt(
    window.prompt(
      "How many characters would you like to have in your password? (6 - 64)"
    )
  );

  if (isNaN(charLength) || charLength < 6 || charLength > 64) {
    alert("Please try again");
  }
  if (confirm("Do you want Uppercase letters in your password?")) {
    charTypes = charTypes.concat(charUpper);
  }
  if (confirm("Do you want numbers in your password?")) {
    charTypes = charTypes.concat(charNum);
  }
  if (confirm("Do you want special characters in your password?")) {
    charTypes = charTypes.concat(charSpecial);
  }

  generatePassword(charLength, charTypes);
  return true;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
