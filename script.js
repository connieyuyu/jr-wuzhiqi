// Timer
let time = document.querySelector(".timer__time");
let btn = document.querySelector(".timer__btn");
btn.addEventListener("click", function () {
  var counter = 600;
  setInterval(function () {
    counter--;
    if (counter >= 0) {
      time.innerText = `Count: ${counter}`;
    }
    if (counter === 0) {
      alert("sorry, out of time");
      clearInterval(counter);
    }
  }, 1000);
});

// Create wuzhiqi board
let N = 8;
let grid = document.createElement("div");
grid.classList.add("grid");
let board = document.querySelector(".board");
for (let i = 0; i < N * N; i++) {
  let newGrid = grid.cloneNode();
  newGrid.addEventListener("click", handleClick);
  board.appendChild(newGrid);
}

// Create wuzhiqi background
let gridBackground = document.createElement("div");
gridBackground.classList.add("grid__background");
let boardBackground = document.querySelector(".board__background");
for (let i = 0; i < N * N; i++) {
  let newGrid = gridBackground.cloneNode();
  boardBackground.appendChild(newGrid);
}

var i = 0;
function handleClick(e) {
  let source = e.target;
  if (
    source.classList.contains("black") ||
    source.classList.contains("white")
  ) {
    return;
  }
  source.classList.add(i % 2 === 0 ? "black" : "white");
  i++;
}
