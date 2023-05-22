"use strict";
document.querySelector("h1").textContent = "Lets gooo... Lets play!!!";
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
console.log(secretNumber);
document.querySelector(".middle").value = secretNumber;
document.querySelector(".input2").addEventListener("click", function () {
  let input1 = Number(document.querySelector(".input1").value);
  if (!input1) {
    document.querySelector("#message1").textContent = "No Number!!!";
  } else if (input1 === secretNumber) {
    document.querySelector("#message1").textContent = "Correct Number";
  } else if (input1 < secretNumber) {
    document.querySelector("#message1").textContent = "Too Low!!!";
    score--;
    document.querySelector("#message2").textContent = score;
  } else if (input1 > secretNumber) {
    document.querySelector("#message1").textContent = "Too High!!!";
    score--;
    document.querySelector("#message2").textContent = score;
  }
});
