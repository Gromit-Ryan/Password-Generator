// Assignment code here
// Variables used
var userPrompt = [false, false, false, false];
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialChar = "!@#$%^&*"
var userPass = 1;
var random;
var i = 0;
    
    // The function for generating the password
    var generatePassword = function () {
      // The user prompts for determining what the user wants
      // The starting values are false, so the options the user wants will change to true.
      userPrompt[1] = confirm(`Would you like lowercase letters in your password?`);
      userPrompt[2] = confirm(`Would you like uppercase letters in your password?`);
      userPrompt[3] = confirm(`Would you like numbers in your password?`);
      userPrompt[4] = confirm(`Would you like special characters in your password?`);

      // This prompt will continue asking for a number between 8 and 128 until it gets it
      do {
      lengthPassword = parseInt(window.prompt("please enter a number between 8 and 128."), 10);
      } while (isNaN(lengthPassword) || lengthPassword < 8 || lengthPassword > 128);
    
      //Used for debug purposes
      console.log(lengthPassword);
      console.log(typeof lengthPassword);
    
      //While the number inputted is larger than the integer number it will continue repeating
      while (lengthPassword > i) {
        //This will randomly select a number between 1 and 4
        // That way it randomly selects a random letter, number, or special character
        random = Math.floor(Math.random() * userPrompt.length)
        // I used if else statements since I want to select what goes next in the password generator
        // to be random, so what I did is assign each user prompt to a different if. A number is
        // assigned randomly and the if statement will check if the number and if the userPrompt
        // that correlates with that number is true.
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
    