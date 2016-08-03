const Game = require("./game.js");

function GameView(game, ctx) {
  this.game = game;
  this.ctx = ctx;
  this.lastUpdateTime = 0;
}

GameView.prototype.start = function () {
  this.bindKeyHandlers();
  const animateCallback = (time) => {
    const timeElapsed = time - this.lastUpdateTime;
    this.lastUpdateTime = time;

    this.game.step(timeElapsed / 16.6666666666);
    this.game.draw(this.ctx);

    requestAnimationFrame(animateCallback);
  };

  animateCallback(16.666666666);
};

GameView.prototype.bindKeyHandlers = function () {
  global.key("a", () => this.game.ship.power([-1, 0]));
  global.key("d", () => this.game.ship.power([1, 0]));
  global.key("w", () => this.game.ship.power([0, -1]));
  global.key("s", () => this.game.ship.power([0, 1]));
  global.key("space", () => this.game.ship.fireBullet());
};

module.exports = GameView;
