"use strict";
const rangeInput = document.querySelector("#font-size-control");
const outputText = document.querySelector("#text");

rangeInput.addEventListener("input", () => {
  const rangeValue = rangeInput.value;
  outputText.style.fontSize = `${rangeValue}px`;
});

// Napisz skrypt, który reaguje na zmianę wartości input#font - size - control
//     (zdarzenie input) i zmienia styl inline span#text aktualizując właściwość
// font - size.W rezultacie, podczas przeciągania paska przesuwania będzie
// zmieniał się rozmiar tekstu.
