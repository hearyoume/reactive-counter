import Button from "./components/button";
import Count from "./components/count";
import state from "./state";

let count = 0;

const app = document.querySelector("#app");

function render() {
  app.innerHTML = `  ${Count(state.getState().count)}
    <div class="flex justify-center">
      ${Button("+1", "increment")}
      ${Button("-1", "decrement")}
    </div>`;
}

state.subscribe(render);
render();

document.addEventListener("click", (event) => {
  if (event.target.id === "increment")
    state.setState({ count: state.getState().count + 1 });
  else if (event.target.id === "decrement")
    state.setState({ count: state.getState().count - 1 });
});

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
