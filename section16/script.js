const generateButton = document.getElementById('generateButton');
const randomNumberDisplay = document.getElementById('randomNumber');

function generateRandomNumber() {
  const randomNum = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
  randomNumberDisplay.textContent = `Random Number: ${randomNum}`;
}

generateButton.addEventListener('click', generateRandomNumber);
