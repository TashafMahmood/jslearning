// SIMPLE CALCULATE FUNCTION
const addBtn = document.getElementById("add-btn");
const firstNumber = document.getElementById("first-number");
const secondNumber = document.getElementById("second-number");
const answer = document.getElementById("calc-answer");

//ADD BUTTON USING PURE DOM
addBtn.addEventListener("click", () => {
  if (firstNumber.value !== "" && secondNumber.value !== "") {
    answer.innerHTML =
      parseInt(firstNumber.value) + parseInt(secondNumber.value);
    firstNumber.value = "";
    secondNumber.value = "";
  } else {
    alert("Enter the number plz");
  }
});

function deleteBtn() {
  const answer = document.getElementById("calc-answer");
  if (firstNumber.value !== "" && secondNumber.value !== "") {
    answer.innerHTML =
      parseInt(firstNumber.value) - parseInt(secondNumber.value);
    firstNumber.value = "";
    secondNumber.value = "";
  } else {
    alert("Enter the number plz");
  }
}
function multiplyBtn() {
  const answer = document.getElementById("calc-answer");
  if (firstNumber.value !== "" && secondNumber.value !== "") {
    answer.innerHTML =
      parseInt(firstNumber.value) * parseInt(secondNumber.value);
    firstNumber.value = "";
    secondNumber.value = "";
  } else {
    alert("Enter the number plz");
  }
}

function divideBtn() {
  const answer = document.getElementById("calc-answer");
  if (firstNumber.value !== "" && secondNumber.value !== "") {
    answer.innerHTML =
      parseInt(firstNumber.value) / parseInt(secondNumber.value);
    firstNumber.value = "";
    secondNumber.value = "";
  } else {
    alert("Enter the number plz");
  }
}

// CALCULATE THE SQUARE OF A NUMBER
function calculateSquare() {
  const inputElement = document.getElementById("numberInput");
  const number = parseFloat(inputElement.value);
  if (!isNaN(number)) {
    const square = number * number;
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "The square of " + number + " is " + square;
  } else {
    alert("Please enter a valid number.");
  }
}


// Set the value as object
function submitDataAsObject(){
    const firstname = document.getElementById('obj-firstname')
    const lastname = document.getElementById('obj-lastname')
    const phone = document.getElementById('obj-phone')

    alert({firstname: firstname, lastname: lastname, phone:phone})
}