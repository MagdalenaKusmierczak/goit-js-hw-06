const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
const listItems = [];
ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li");
  listItem.className = "item";
  listItem.textContent = ingredient;
  listItems.push(listItem);
});
list.append(...listItems);
