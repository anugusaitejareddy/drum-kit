function playSound(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.add("playing");
}

function removePlaying(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.remove("playing");
}

window.addEventListener("keydown", playSound);
window.addEventListener("keyup", removePlaying);
