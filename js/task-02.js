"use strict";
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingrEl = ingredients.map((element) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = element;
  return itemEl;
});
const ingredientsEl = document.querySelector("#ingredients");

ingredientsEl.append(...ingrEl);
console.log(ingrEl);
