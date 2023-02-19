"use strict";
const listItems = document.querySelectorAll(".item");
const numberOfItems = listItems.length;
console.log(`Number of categories: ${numberOfItems}`);

listItems.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
