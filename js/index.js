import {
  firstNameHandler,
  lastNameHandler,
  emailHandler,
  passwordHandler,
} from "./handlers/handlers.js";

const formEL = document.querySelector(".submit");
const inputWrapper = document.querySelectorAll(".form-wrapper");
export const firstNameInput = document.getElementById("firstName");
export const lastNameInput = document.getElementById("lastName");
export const passwordInput = document.getElementById("password");
export const emailInput = document.getElementById("email");
export const errorMessageContainer = document.querySelectorAll(".error");
export const svgIcon = document.querySelectorAll(".svg-icon");

// Creating an empty array to store all input fields
export const loopedInputs = [];
export const errorMessages = [];
export const svgIcons = [];

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
  firstNameHandler();
  lastNameHandler();
  emailHandler();
  passwordHandler();
});
