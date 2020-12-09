const hamburger = document.querySelector(".hamburger");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");

let hamOpen = false;

hamburger.addEventListener("click", () => {
  if (!hamOpen) {
    hamOpen = true;
    line1.classList.add("collapse");
    line2.classList.add("collapse");
    line3.classList.add("collapse");
    setTimeout(() => {
      line1.classList.add("rotate");
      line2.classList.add("rotate");
      line3.classList.add("rotate");
    }, 100);
  } else {
    hamOpen = false;

    line1.classList.remove("rotate");
    line2.classList.remove("rotate");
    line3.classList.remove("rotate");
    setTimeout(() => {
      line1.classList.remove("collapse");
      line2.classList.remove("collapse");
      line3.classList.remove("collapse");
    }, 100);
  }
});

hamburger.addEventListener("mouseover", () => {
  line1.classList.add("marginplus");
  line2.classList.add("marginplus");
  line3.classList.add("marginplus");
});

hamburger.addEventListener("mouseout", () => {
  line1.classList.remove("marginplus");
  line2.classList.remove("marginplus");
  line3.classList.remove("marginplus");
});
