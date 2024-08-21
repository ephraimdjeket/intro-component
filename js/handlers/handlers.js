import {
  firstNameInput,
  lastNameInput,
  loopedInputs,
  passwordInput,
  errorMessages,
  svgIcons,
  emailInput,
  errorMessageContainer,
  svgIcon,
} from "../index.js";

export function firstNameHandler() {
  if (firstNameInput.value.trim() === "") {
    loopedInputs[0].style.border = "1px solid red";
    errorMessages[0].textContent = "First Name cannot be empty";
    svgIcons[0].classList.remove("hidden");
  } else {
    loopedInputs[0].style.border = "1px solid rgb(156 163 175)";
    errorMessages[0].textContent = "";
    svgIcons[0].classList.add("hidden");
  }
}

export function lastNameHandler() {
  if (lastNameInput.value.trim() === "") {
    loopedInputs[1].style.border = "1px solid red";
    errorMessages[1].textContent = "Last Name cannot be empty";
    svgIcons[1].classList.remove("hidden");
  } else {
    loopedInputs[1].style.border = "1px solid rgb(156 163 175)";
    errorMessages[1].textContent = "";
    svgIcons[1].classList.add("hidden");
  }
}

export function passwordHandler() {
  if (passwordInput.value.trim() === "") {
    loopedInputs[3].style.border = "1px solid red";
    errorMessages[3].textContent = "Password cannot be empty";
    svgIcons[3].classList.remove("hidden");
  } else {
    loopedInputs[3].style.border = "1px solid rgb(156 163 175)";
    errorMessages[3].textContent = "";
    svgIcons[3].classList.add("hidden");
  }
}

export function emailHandler() {
  if (
    emailInput.value.trim() === "" ||
    emailInput.value === "email@example.com"
  ) {
    loopedInputs[2].style.border = "1px solid red";
    emailInput.value = "email@example.com";
    emailInput.style.color = "#FF7979";
    errorMessages[2].textContent = "Looks like this is not an email";
    svgIcons[2].classList.remove("hidden");
  } else {
    loopedInputs[2].style.border = "1px solid rgb(156 163 175)";
    emailInput.style.color = "#3D3B48";
    errorMessages[2].textContent = "";
    svgIcons[2].classList.add("hidden");
  }
}
