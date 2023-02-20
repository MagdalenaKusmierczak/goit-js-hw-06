function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const spanText = document.querySelector(".color");
const changeBtn = document.querySelector(".change-color");

const handleClick = () => {
  spanText.textContent = getRandomHexColor();
  body.style.backgroundColor = `${spanText.textContent}`;
};

changeBtn.addEventListener("click", handleClick);

// Napisz skrypt, który zmienia kolor tła elementu < body >
//   poprzez style inline po kliknięciu na button.change -
//     color i wprowadza wartość koloru do span.color.
// Aby wygenerować losowy kolor użyj funkcji getRandomHexColor.
