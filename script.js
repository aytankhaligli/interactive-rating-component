"use strict";
const thanks = document.querySelector(".thanks-container");
const rate = document.querySelector(".container");
const text = document.querySelector(".rate");
const button = document.querySelectorAll(".number");
const submit = document.querySelector(".submit");
const error = document.querySelector(".error");

let selectedNote;

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedNote = btn.textContent;
  });
});

submit.addEventListener("click", () => {
  if (!selectedNote) {
    error.classList.remove("hidden");
  } else {
    thanks.classList.remove("hidden");
    rate.classList.add("hidden");
    text.textContent = `You selected ${selectedNote} out of 5`;
  }
});
