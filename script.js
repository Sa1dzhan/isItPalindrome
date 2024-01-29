const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

function checkPalindrome(){
  if (!textInput.value) {
    alert("Please input a value");
    return;
  }

  const cleanInput = cleanInputString(textInput.value);
  const label = document.createElement("label");

  while (resultDiv.firstChild) {
    resultDiv.removeChild(resultDiv.firstChild);
  }

  for (let i = 0; i < cleanInput.length / 2; i++) {
    if (cleanInput.charAt(i) !== cleanInput.charAt(cleanInput.length - 1 - i)) {
      label.innerHTML = `<strong>${textInput.value}</strong> is not a palindrome`;
      resultDiv.appendChild(label);
      return;
    }
  }

  label.innerHTML = `<strong>${textInput.value}</strong> is a palindrome`;
  resultDiv.appendChild(label);
}

function cleanInputString(str) {
  const regex = /[^a-zA-Z0-9]/g;
  return str.replace(regex, '').toLowerCase();
}

checkButton.addEventListener("click", checkPalindrome);