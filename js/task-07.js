const controleSizeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

controleSizeEl.addEventListener("input", handelTextSize);

function handelTextSize() {
  textEl.style.fontSize = controleSizeEl.value + "px";
}
