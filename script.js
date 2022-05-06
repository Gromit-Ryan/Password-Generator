// Assignment code here
var userPrompt = [false, false, false, false];
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialChar = "!@#$%^&*"
var userPass = 1;
var random;
var randomNum;
var i = 0;
    
    var generatePassword = function () {
      userPrompt[1] = confirm(`Would you like lowercase letters in your password?`);
      userPrompt[2] = confirm(`Would you like uppercase letters in your password?`);
      userPrompt[3] = confirm(`Would you like numbers in your password?`);
      userPrompt[4] = confirm(`Would you like special characters in your password?`);

      do {
      lengthPassword = parseInt(window.prompt("please enter a number between 8 and 128."), 10);
      } while (isNaN(lengthPassword) || lengthPassword < 8 || lengthPassword > 128);
    
      console.log(lengthPassword);
      console.log(typeof lengthPassword);
    
      while (lengthPassword > i) {
        random = Math.floor(Math.random() * userPrompt.length)
        if (userPrompt[random] && random == 1) {
            random = Math.floor(Math.random() * upperCase.length)
            userPass = userPass + upperCase.charAt(random);
            i++;
        } else if (userPrompt[random] && random == 2) {
            random = Math.floor(Math.random() * lowerCase.length)
            userPass = userPass + lowerCase.charAt(random);
            i++;
        } else if (userPrompt[random] && random == 3) {
            random = Math.floor(Math.random() * numbers.length)
            userPass = userPass + numbers.charAt(random);
            i++;
        } else if (userPrompt[random] && random == 4) {
            random = Math.floor(Math.random() * specialChar.length)
            userPass = userPass + specialChar.charAt(random);
            i++;
        } 
      }
      console.log(userPass);
    }
    // Get references to the #generate element
    var generateBtn = document.querySelector("#generate");
    
    // Write password to the #password input
    function writePassword() {
        generatePassword()
      var password = userPass;
      var passwordText = document.querySelector("#password");
    
      passwordText.value = password;
    
    }
    
    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);   
    