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
function submitDataAsObject() {
  const firstname = document.getElementById("obj-firstname");
  const lastname = document.getElementById("obj-lastname");
  const phone = document.getElementById("obj-phone");

  if (firstname.value !== "" && lastname.value !== "" && phone.value !== "") {
    alert(
      JSON.stringify({
        firstname: firstname.value,
        lastname: lastname.value,
        phone: phone.value,
      })
    );
    firstname.value = "";
    lastname.value = "";
    phone.value = "";
  } else {
    alert("Fields cannot be empty");
  }
}

function submitDataAsArray() {
  const firstname = document.getElementById("arr-firstname");
  const arrList = document.getElementById('array_list')
  const arr = []
  arr.push(firstname.value)

  arrList.innerHTML = arr
}

function votingEligibility(){
  const age = document.getElementById('ageforvoting')
  if(age.value>=18 && age.value<=120){
    alert('YOU ARE ELIGIBLE TO VOTE')
    age.value=""
  }else if(age.value<18 && age.value>=1){
    alert('YOU ARE NOT ELIGIBLE TO VOTE')
    age.value=""
  }else{
    alert('INVALID INPUT')
    age.value=""
  }
}

// SWITCH CASE LOGIC
document.addEventListener("DOMContentLoaded", function () {
  const fruitSelect = document.getElementById("fruitSelect");
  const fruitInfo = document.getElementById("fruitInfo");

  fruitSelect.addEventListener("change", function () {
      const selectedFruit = fruitSelect.value;
      
      switch (selectedFruit) {
          case "apple":
              fruitInfo.textContent = "Apples are a popular fruit.";
              break;
          case "banana":
              fruitInfo.textContent = "Bananas are rich in potassium.";
              break;
          case "cherry":
              fruitInfo.textContent = "Cherries are small, red fruits.";
              break;
          case "orange":
              fruitInfo.textContent = "Oranges are a good source of vitamin C.";
              break;
          case "pear":
              fruitInfo.textContent = "Pears are a sweet and juicy fruit.";
              break;
          default:
              fruitInfo.textContent = "Please select a fruit.";
      }
  });
});
