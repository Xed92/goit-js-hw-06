const listCategoryEl = document.querySelector("#categories");

const itemCategoryEl = listCategoryEl.querySelectorAll("li.item");

console.log(
  `Number of categories: ${listCategoryEl.querySelectorAll("li.item").length}`
);

itemCategoryEl.forEach((e, i) => {
  const titleCategory = e.querySelector("h2").textContent;
  const quatityCategory = e.querySelectorAll("li").length;
  console.log(`Category:${titleCategory}`);
  console.log(`Elements:${quatityCategory}`);
});
