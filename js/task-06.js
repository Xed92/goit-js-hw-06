const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (e) => {
  if (
    e.target.value.trim().length !== Number(inputEl.getAttribute("data-length"))
  ) {
    return inputEl.classList.add("invalid");
  } else {
    inputEl.classList.remove("invalid");
    return inputEl.classList.add("valid");
  }
});
