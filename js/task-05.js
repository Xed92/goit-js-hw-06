const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (e) => {
  if (inputEl.value === "") {
    nameEl.textContent = "Anonymous";
  } else {
    nameEl.textContent = e.currentTarget.value;
  }
});
