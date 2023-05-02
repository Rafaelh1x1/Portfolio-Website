"use strict";

// DECLARE VARIABLES

const openNavEl = document.querySelector(".open-nav");
const closeNavEl = document.querySelector(".close-nav");
const miniSection = document.getElementById("mini-section");
const miniSectionItem = document.querySelector(".mini-section");
const vw = document.body.clientWidth;
// ANIMATE ON SCROLL

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("flicker-in-1");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// MOBILE NAVIGATION STUFF

openNavEl.addEventListener("click", function () {
  openNavEl.style.display = "none";
  closeNavEl.style.display = "block";
  miniSection.style.display = "flex";
  miniSection.style.marginBottom = "0";
  miniSectionItem.classList.add("flicker-in-1");
});

closeNavEl.addEventListener("click", function () {
  openNavEl.style.display = "block";
  closeNavEl.style.display = "none";
  miniSection.style.display = "none";
  miniSectionItem.classList.remove("flicker-in-1");
});

openNavEl.addEventListener("mouseover", function () {
  openNavEl.style.color = "#101810";
  openNavEl.style.backgroundColor = "#416241";
});

openNavEl.addEventListener("mouseout", function () {
  openNavEl.style.color = "#416241";
  openNavEl.style.backgroundColor = "#101810";
});

closeNavEl.addEventListener("mouseover", function () {
  closeNavEl.style.color = "#101810";
  closeNavEl.style.backgroundColor = "#416241";
});

closeNavEl.addEventListener("mouseout", function () {
  closeNavEl.style.color = "#416241";
  closeNavEl.style.backgroundColor = "#101810";
});

// SCREEN SIZE CHANGES
// if (vw < 742) {
//   openNavEl.classList.add("hidden");
// } else if (vw > 742) {
//   openNavEl.classList.remove("hidden");
// }
