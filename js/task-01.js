"use strict";
const listItems = document.querySelectorAll(".item");
const numberOfItems = listItems.length;
console.log(`Number of categories: ${numberOfItems}`);

// listItems.forEach((element) => {
//   console.log(`Category: ${element.firstElementChild.textContent}`);
//   console.log(`Elements: ${element.lastElementChild.children.length}`);
// });

listItems.forEach((element) => {
  const header = element.querySelector("h2");
  const listElements = element.querySelectorAll("li");
  console.log(`Category: ${header.textContent}`);
  console.log(`Elements: ${listElements.length}`);
});
