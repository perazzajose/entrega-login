const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const loginForm = document.querySelector(".formbox.login");
const registerForm = document.querySelector(".formbox.register");

registerLink.addEventListener("click", () => {
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
});

loginLink.addEventListener("click", () => {
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
});

registerForm.classList.add("hidden");
