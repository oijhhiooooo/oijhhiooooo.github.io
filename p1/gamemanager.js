function playsnd(snd) {
  const sound = new Audio(`/sounds/${snd}.mp3`);
  sound.play()
}

function hideAllGames() {
  document.getElementById('arrowgamediv').style.display = "none"
}

function hideDB() {
  document.getElementById('mainmenu').style.display = "none"
}


setInterval(() => {
  document.getElementById("coins").innerHTML = localStorage.getItem("coins")
}, 100)
