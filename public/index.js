const formEL = document.querySelector(".submit");
const inputWrapper = document.querySelectorAll(".form-wrapper");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const errorMessageContainer = document.querySelectorAll(".error");
const svgIcon = document.querySelectorAll(".svg-icon");

// Creating an empty array to store all input fields
const loopedInputs = [];
const errorMessages = [];
const svgIcons = [];

// Iterating over to be able to access them individually and pushing them into an empty array
inputWrapper.forEach((input, index) => {
  loopedInputs.push(input);
});

errorMessageContainer.forEach((errorMessage, index) => {
  errorMessages.push(errorMessage);
});

svgIcon.forEach((svg, index) => {
  svgIcons.push(svg);
});

formEL.addEventListener("click", (e) => {
  e.preventDefault();
  if (firstNameInput.value.trim() === "") {
    createErrorMessage();
  } else {
    removeErrorMessage();
  }
});

function createErrorMessage() {
  loopedInputs[0].style.border = "1px solid red";
  if (errorMessages[0])
    errorMessages[0].textContent = `${phrases[0]} cannot be empty`;
  svgIcons[0].classList.remove("hidden");
}

function removeErrorMessage() {
  loopedInputs[0].style.border = "1px solid rgb(156 163 175)";
  errorMessages[0].textContent = "";
  svgIcons[0].classList.add("hidden");
}
