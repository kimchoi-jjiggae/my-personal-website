// const h2 = document.createElement("h2");
// h2.textContent = "This content added by JavaScript";
// document.querySelector("body").appendChild(h2);

const toggleButton = document.getElementsByClassName(`toggle-button`)[0]
const navBarLinks = document.getElementsByClassName(`navBar-links`)[0]

toggleButton.addEventListener(`click`, function () {
    navBarLinks.classList.toggle(`active`)
})