// Generating Random Dice Numbers

let randomNumber1 = Math.floor(Math.random() * 6 + 1);

let randomNumber2 = Math.floor(Math.random() * 6 + 1);

//Setting the Dice Number to match the URL of the Dice Images

let randomDiceImageOne = "img/dice" + +randomNumber1 + ".jpg";

let randomDiceImageTwo = "img/dice" + randomNumber2 + ".jpg";

// Reload Button that Refresh Page

let button = document.getElementById("reloadBtn");
button.addEventListener("click", function () {
  window.location.reload();
});

//Dice Number 1 and 2 Matching Exact Random Number

let image1 = document
  .querySelectorAll("img")[0]
  .setAttribute("src", randomDiceImageOne);

let image2 = document
  .querySelectorAll("img")[1]
  .setAttribute("src", randomDiceImageTwo);

//Conditional that Determines what Text should be displayed to the Players.

if (randomNumber1 == randomNumber2) {
  document.getElementById("winner").textContent = "Tie, Roll Dice";
} else if (randomNumber1 > randomNumber2) {
  document.getElementById("winner").textContent = "Player 1 Wins!";
} else {
  document.getElementById("winner").textContent = "Player 2 Wins!";
}
