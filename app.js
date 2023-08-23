"use-strict";

const quoteNumber = document.querySelector(".advice-number");
const quoteText = document.querySelector(".advice-text");
const dice = document.querySelector(".dice");

dice.addEventListener("click", function (e) {
  e.preventDefault;
  try {
    const data = async function () {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      console.log(data);
      quoteNumber.innerHTML = `#${data.slip.id}`;
      quoteText.innerHTML = `"${data.slip.advice}"`;
    };
    data();
  } catch (error) {
    console.error(error);
  }
});
