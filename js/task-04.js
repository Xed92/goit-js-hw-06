let counterValue = 0;
let step = 1;

const counterValueEl = document.querySelector("#value");
const btnDecrement = document.querySelector("button[data-action='decrement']");
const btnIncrement = document.querySelector("button[data-action='increment']");

btnIncrement.addEventListener("click", handelBtnIncrement);
btnDecrement.addEventListener("click", handelBtnDecrement);

function handelBtnIncrement() {
  counterValue += step;
  counterValueEl.textContent = counterValue;
}
function handelBtnDecrement() {
  counterValue -= step;
  counterValueEl.textContent = counterValue;
}
