const chooseForm = document.getElementsByClassName("hero-section__form-choose")[0];
const loginForm = document.getElementsByClassName("hero-section__form-login")[0];
const registerForm = document.getElementsByClassName("hero-section__form-register")[0];
const loginButtons = document.getElementsByClassName("hero-button__show-login");
const registerButtons = document.getElementsByClassName("hero-button__show-register");
const chooseFormButtons = document.getElementsByClassName("hero-button__show-choose");

const showLoginForm = () => {
  chooseForm.style.display = "none";
  loginForm.style.display= "flex";
  registerForm.style.display= "none";
};

const showRegisterForm = () => {
  chooseForm.style.display = "none";
  loginForm.style.display= "none";
  registerForm.style.display= "flex";
};

const showChooseForm = () => {
  chooseForm.style.display = "flex";
  loginForm.style.display= "none";
  registerForm.style.display= "none";
};

for (let i = 0; i < chooseFormButtons.length; i++) {
  chooseFormButtons[i].onclick = showChooseForm;
}
for (let i = 0; i < loginButtons.length; i++) {
  loginButtons[i].onclick = showLoginForm;
}
for (let i = 0; i < registerButtons.length; i++) {
  registerButtons[i].onclick = showRegisterForm;
}
