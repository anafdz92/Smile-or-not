"use strict";

const buttonUpload = document.querySelector(".js-change-button");
const face = document.querySelector(".js-face");
const container = document.querySelector(".js-container");

function handleUpdateClick(ev) {
  //cara
  const selectValue = document.querySelector(".js-options").value;
  face.innerHTML = selectValue;
  //fondo
  const randomNumber = parseInt(Math.random() * 100);
  console.log(randomNumber);
  if (randomNumber % 2 === 0) {
    container.style.background = "#ffcc00";
  } else {
    container.style.background = "#ff9900";
  }
}

buttonUpload.addEventListener("click", handleUpdateClick);
