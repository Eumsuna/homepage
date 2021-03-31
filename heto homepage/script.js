const bars = document.querySelector(".fa-bars");
const mainMenu = document.querySelector(".main_menu");
const slide = document.querySelector(".slide");

bars.addEventListener("click", () => {
    mainMenu.classList.toggle("on");
    slide.classList.toggle("on");
});