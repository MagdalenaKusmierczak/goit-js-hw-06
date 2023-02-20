function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputValue = document.querySelector("#controls>input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
console.log(inputValue);

function createBoxes(amount) {
  const newElements = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const boxSize = `${30 + 10 * i}px`;
    box.style.height = boxSize;
    box.style.width = boxSize;
    box.style.background = getRandomHexColor();
    newElements.push(box);
  }
  return newElements;
}

createBtn.addEventListener("click", () => {
  let newBoxes = createBoxes(inputValue.value);
  boxes.append(...newBoxes);
});
destroyBtn.addEventListener("click", () => {
  inputValue.value = "";
  boxes.innerHTML = "";
});

// Napisz skrypt tworzenia i usuwania kolekcji elementów.
// Użytkownik wprowadza liczbę elementów do input i naciska
// przycisk Utwórz, co rozpoczyna tworzenie się kolekcji.Po
//  naciśnięciu przycisku Usuń, kolekcja elementów zostaje
// usunięta.
// Utwórz funkcję createBoxes(amount), która bierze jeden
// parametr - liczbę.Funkcja tworzy tyle < div >, ile ukazano
// w amount i dodaje je do div#boxes.

// Wymiary pierwszego <div> - 30px na 30px.
// Każdy następny element powinien być szerszy i wyższy od
//  poprzedniego o 10px.
// Wszystkie elementy powinny mieć losowy kolor tła w
// formacie NEX.Użyj gotowej funkcji getRandomHexColor aby
// otrzymać kolor.
