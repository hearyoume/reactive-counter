// TODO: Do what must be done
let count = 0;

function updateDisplay() {
  document.getElementById("count-display").textContent = count;
}

function setCount(newCount) {
  count = newCount;
  updateDisplay();
}

document.getElementById("increment").addEventListener("click", () => {
  setCount(count + 1);
});

document.getElementById("decrement").addEventListener("click", () => {
  setCount(count - 1);
});

document.querySelector("#double").addEventListener("click", () => {
  setCount(count * 2);
});

document.getElementById("reset").addEventListener("click", () => {
  setCount(0);
});

updateDisplay(); // Show initial count
