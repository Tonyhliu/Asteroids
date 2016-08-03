const Game = require("./game.js");
const GameView = require("./game_view.js");

document.addEventListener("DOMContentLoaded", function(event) {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");

  const bgImg = new Image();
  bgImg.onload = function () {
    const game = new Game(bgImg);
    const gv = new GameView(game, ctx);
    gv.renderStart();
  };
  bgImg.src = 'myImage.png';
});
