"use strict";
let counterValue = 0;
const displayCounterValue = document.querySelector("#value");
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

function addingValue() {
  counterValue += 1;
  displayCounterValue.textContent = counterValue;
}
function subtractingValue() {
  counterValue -= 1;
  displayCounterValue.textContent = counterValue;
}

incrementBtn.addEventListener("click", addingValue);
decrementBtn.addEventListener("click", subtractingValue);
