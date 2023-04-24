"use strict";

const helloEl = document.getElementById("hi");

helloEl.addEventListener("click", function () {
  helloEl.classList.add("big-hello");
});
