let randomNumber1 = Math.floor(Math.random() * 6 + 1);

let randomNumber2 = Math.floor(Math.random() * 6 + 1);

let randomDiceImageOne = "img/dice" + +randomNumber1 + ".jpg";

let randomDiceImageTwo = "img/dice" + randomNumber2 + ".jpg";

let button = document.getElementById("reloadBtn");
button.addEventListener("click", function () {
  window.location.reload();
});

let image1 = document
  .querySelectorAll("img")[0]
  .setAttribute("src", randomDiceImageOne);

let image2 = document
  .querySelectorAll("img")[1]
  .setAttribute("src", randomDiceImageTwo);

if (randomNumber1 == randomNumber2) {
  document.getElementById("winner").textContent = "Tie, Roll Dice";
} else if (randomNumber1 > randomNumber2) {
  document.getElementById("winner").textContent = "Player 1 Wins!";
} else {
  document.getElementById("winner").textContent = "Player 2 Wins!";
}
