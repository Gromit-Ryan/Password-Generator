// Assignment code here
var userPrompt = {
    var: lengthPassword,
    var: lowerCase,
    var: upperCase,
    var: numeric,
    var: specialCharacter
    }
    
    var generatePassword = function () {
      lowerCase = confirm(`Would you like lowercase letters in your password?`);
      upperCase = confirm(`Would you like uppercase letters in your password?`);
      numeric = confirm(`Would you like numbers in your password?`);
      specialCharacter = confirm(`Would you like special characters in your password?`);
    
      console.log(lowerCase);
      console.log(typeof lowerCase);
      console.log(upperCase);
      console.log(typeof upperCase);
      console.log(numeric);
      console.log(typeof numeric);
      console.log(specialCharacter);
      console.log(typeof specialCharacter);
    
      do {
      lengthPassword = parseInt(window.prompt("please enter a number between 8 and 128."), 10);
      } while (isNaN(lengthPassword) || lengthPassword < 8 || lengthPassword > 128);
    
      console.log(lengthPassword);
      console.log(typeof lengthPassword);
    
      console.log(userPrompt)
    }
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
    