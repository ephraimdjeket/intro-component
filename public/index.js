const formEL = document.querySelector(".submit");
const inputWrapper = document.querySelectorAll(".form-wrapper");
const firstNameInput = document.getElementById("firstName");
const errorMessageContainer = document.querySelectorAll(".error");

// Creating an empty array to store all input fields
const loopedInputs = [];
const errorMessages = [];

// Iterating over to be able to access them individually and pushing them into an empty array
inputWrapper.forEach((input, index) => {
  loopedInputs.push(input);
});

errorMessageContainer.forEach((errorMessage, index) => {
  errorMessages.push(errorMessage);
});

formEL.addEventListener("click", (e) => {
  e.preventDefault();
  if (firstNameInput.value.trim() === "") {
    loopedInputs[0].style.border = "1px solid red";
    errorMessages[0].textContent = "First Name cannot be empty";
  }
});
