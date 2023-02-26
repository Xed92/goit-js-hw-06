"use strict";
const body = document.body;

const listCategoryEl = body.querySelector("#categories");

const itemCategoryEl1 = listCategoryEl.querySelector("li.item");
const itemCategoryEl2 = itemCategoryEl1.nextElementSibling;
const itemCategoryEl3 = itemCategoryEl2.nextElementSibling;

console.log(
  `Number of categories: ${listCategoryEl.querySelectorAll("li.item").length}`
);

console.log(`Category: ${itemCategoryEl1.children[0].textContent}`);

console.log(`Elements: ${itemCategoryEl1.querySelectorAll("li").length}`);

console.log(`Category: ${itemCategoryEl2.children[0].textContent}`);

console.log(`Elements: ${itemCategoryEl2.querySelectorAll("li").length}`);

console.log(`Category: ${itemCategoryEl3.children[0].textContent}`);

console.log(`Elements: ${itemCategoryEl3.querySelectorAll("li").length}`);
