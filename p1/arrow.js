const matrix = [[1,1,0,1,1,0,0,0,0],[1,1,1,1,1,1,0,0,0],[0,1,1,0,1,1,0,0,0],[1,1,0,1,1,0,1,1,0],[1,1,1,1,1,1,1,1,1],[0,1,1,0,1,1,0,1,1],[0,0,0,1,1,0,1,1,0],[0,0,0,1,1,1,1,1,1],[0,0,0,0,1,1,0,1,1]]
let off = "#000"
let on = "#fff"
let colors = ["#fff", "#aaa", "#555", "#000"]

let win = [0,0,0,0,0,0,0,0,0]
let game = [0,0,0,0,0,0,0,0,0]

function arrowGameClick(index, update = true) {
  let win = true
  matrix[index].forEach((add, i) => {
    game[i] += add;
    if (game[i] > 3) game[i] = 0
    if (game[i] != 0) win = false;
  })
  if (update) updateArrowGame();
  if (win && update) {
    playsnd("win");
    Win()
  }
}

function updateArrowGame() {
  game.forEach((state, index) => {
    console.log(`${index}: ${state}`)
    const slot = document.getElementById(`arrg${index}`)
    slot.style.backgroundColor = colors[game[index]]
  })
}

function Win() {
  let coins = localStorage.getItem("coins") | 0;
  localStorage.setItem("coins", coins+50);
  document.getElementById('arrowgamediv').style.display = "none";
  document.getElementById('mainmenu').style.display = "grid";
}

function startArrowGame() {
  hideDB()
  document.getElementById("arrowgamediv").style.display = "grid";
  game = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < 1000; i++) {
    arrowGameClick(Math.floor(Math.min(Math.random() * 9,8)), false)
  }
  updateArrowGame()
}
