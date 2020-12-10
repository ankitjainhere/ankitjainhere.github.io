// const line1 = document.querySelector("line1");
// const line2 = document.querySelector("line3");
// const line3 = document.querySelector("line3");

const menuBtn = document.querySelector(".hamburger");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const fullPgNav = document.querySelector(".full-pg-nav");
const fullPgNavItem = document.querySelectorAll(".full-pg-nav-item");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    header.classList.add("hide");
    nav.classList.add("show");
    fullPgNav.classList.add("show");
    
    fullPgNavItem.forEach(item => {
      item.classList.add('show');
    });
    
    menuOpen = true;
  } else {
    header.classList.remove("hide");
    nav.classList.remove("show");
    fullPgNav.classList.remove("show");
    
    fullPgNavItem.forEach(item => {
      item.classList.remove('show');
    });
    
    menuOpen = false;
  }
});

const fpnavItems = document.querySelectorAll(".full-pg-nav .navItem");
fpnavItems.forEach((item) => {
  item.addEventListener("click", () => {
    line1.classList.remove("rotate");
    line2.classList.remove("rotate");
    line3.classList.remove("rotate");
    setTimeout(() => {
      line1.classList.remove("collapse");
      line2.classList.remove("collapse");
      line3.classList.remove("collapse");
    }, 100);
    header.classList.remove("hide");
    nav.classList.remove("show");
    fullPgNav.classList.remove("show");
    menuOpen = false;
    hamOpen = false;
  });
});

const loader = document.querySelector(".loader");
const welcomeLinks = document.querySelectorAll("#links a");
welcomeLinks.forEach(link => {
  link.addEventListener("click", () => {
    loader.classList.add("show");
    setTimeout(() => {
      loader.classList.add("fade");
      setTimeout(() => {
        loader.classList.remove("show");
        loader.classList.remove("fade");
      }, 1700);
    }, 1000);
  });
})


// Spalsh Screen
const body = document.querySelector("body");
const splashScreen = document.querySelector(".splash-screen");
const splashLogo = document.querySelector(".splash-logo");
header.style.position = "unset";
splashLogo.classList.add("zoomColorFadein");

body.style.overflow = "hidden";
setTimeout(() => {
  header.style.position = "sticky";
  splashScreen.style.opacity = 0;
  body.style.overflow = "auto";
}, 2000);

setTimeout(() => {
  splashScreen.style.display = "none";
}, 2500);
