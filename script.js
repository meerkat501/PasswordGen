var generateBtn = document.querySelector("#generate");

function writePassword() {
  
  const length = parseInt(prompt("Enter password length (8-128):"));
  const useLowercase = confirm("Include lowercase characters?");
  const useUppercase = confirm("Include uppercase characters?");
  const useNumeric = confirm("Include numeric characters?");
  const useSpecial = confirm("Include special characters?");

  var password = generatePassword(length, useLowercase, useUppercase, useNumeric, useSpecial);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword(length, useLowercase, useUppercase, useNumeric, useSpecial) {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numeric = '0123456789';
  const special = '!@#$%^&*()-_=+[]{}|;:,.<>?';

  let characterPool = '';
  if (useLowercase) characterPool += lowercase;
  if (useUppercase) characterPool += uppercase;
  if (useNumeric) characterPool += numeric;
  if (useSpecial) characterPool += special;

  if (characterPool === '' || !length || length < 8 || length > 128) {
      return 'Error: Invalid criteria!';
  }

  let password = '';
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      password += characterPool[randomIndex];
  }

  return password;
}