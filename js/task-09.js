function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const widget = document.querySelector("div.widget");
const bodyColorName = document.querySelector("span.color");
const btnChangeColor = document.querySelector("button.change-color");

widget.addEventListener("click", handelChangeColor);

function handelChangeColor() {
  //  widget.style.backgroundColor = getRandomHexColor();
  bodyEl.style.backgroundColor = getRandomHexColor();
  bodyColorName.textContent = getRandomHexColor();
}
