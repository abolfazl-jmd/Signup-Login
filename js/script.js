const signInContainer = document.querySelector(".sign_in_container");
const signUpSwitchBtn = document.querySelector(".panel__right--btn");
const logInSwitchBtn = document.querySelector(".panel__left--btn");

logInSwitchBtn.addEventListener("click", function (e) {
  e.preventDefault();

  signInContainer.classList.add("switchActive");
});

signUpSwitchBtn.addEventListener("click", function (e) {
  e.preventDefault();

  signInContainer.classList.remove("switchActive");
});

const signInTextSwitch = document.querySelector(".signin_text");
const signUpTextSwitch = document.querySelector(".signup_text");
const loginForm = document.querySelector(".signin__container");
const signUpForm = document.querySelector(".signup__container");

signInTextSwitch.addEventListener("click", function () {
  signUpForm.style.display = "none";
  loginForm.style.display = "block";
});

signUpTextSwitch.addEventListener("click", function () {
  loginForm.style.display = "none";
  signUpForm.style.display = "block";
});
