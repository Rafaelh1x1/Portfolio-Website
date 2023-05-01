"use strict";

const openNavEl = document.querySelector(".open-nav");
const closeNavEl = document.querySelector(".close-nav");
const miniSection = document.querySelector(".mini-section");

openNavEl.addEventListener("click", function () {
  openNavEl.style.display = "none";
  closeNavEl.style.display = "block";
  miniSection.style.display = "block";
});
