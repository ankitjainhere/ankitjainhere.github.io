const menuBtn = document.querySelector(".menu_icon");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const fullPgNav = document.querySelector(".full-pg-nav");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    header.classList.add("hide");
    nav.classList.add("show");
    fullPgNav.classList.add("show");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    header.classList.remove("hide");
    nav.classList.remove("show");
    fullPgNav.classList.remove("show");
    menuOpen = false;
  }
});
const navItem = document.querySelector(".home");
navItem.addEventListener("click", () => {
  menuBtn.classList.remove("open");
  header.classList.remove("hide");
  nav.classList.remove("show");
  fullPgNav.classList.remove("show");
  menuOpen = false;
});
