"use strict";

const openNavEl = document.querySelector(".open-nav");
const closeNavEl = document.querySelector(".close-nav");
const miniSection = document.getElementById("mini-section");
const miniSectionItem = document.querySelector(".mini-section");

openNavEl.addEventListener("click", function () {
  openNavEl.style.display = "none";
  closeNavEl.style.display = "block";
  miniSection.style.display = "flex";
  miniSection.style.marginBottom = "0";
  miniSectionItem.classList.add("flicker-in-1");

  console.log("poop");
});

closeNavEl.addEventListener("click", function () {
  openNavEl.style.display = "block";
  closeNavEl.style.display = "none";
  miniSection.style.display = "none";
  miniSectionItem.classList.remove("flicker-in-1");
  console.log("poop");
});
