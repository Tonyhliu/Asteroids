const Ship = require("./ship.js");
const Bullet = require("./bullet.js");
const Astroid = require("./astroid.js");

function Game (bgImg) {
  this.asteroids = [];
  this.bullets = [];
  this.asteroidsToRemove = [];
  this.bulletsToRemove = [];
  this.addAsteroids();
  this.ship = new Ship({"pos": this.randomPosition(), "game": this});
  this.bgImg = bgImg;
}

Game.prototype.addAsteroids = function () {
  for(let i = 0; i < Game.NUM_ASTEROIDS; i++){
    const newAst = new Astroid({"pos":this.randomPosition(), "game":this});
    this.asteroids.push(newAst);
  }
};

Game.prototype.randomPosition = function () {
  return [Math.random() * Game.DIM_X, Math.random() * Game.DIM_Y];
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  ctx.drawImage(this.bgImg, 0, 0);
  // this.allObjects().forEach(obj => obj.draw(ctx));
  this.allObjects().forEach(obj => {
    if (obj === this.ship) {
      obj.drawShip(ctx);
    } else {
      obj.draw(ctx);
    }
  });
};

Game.prototype.moveObjects = function(delta) {
  const allObjs = this.allObjects();
  for (let i = 0; i < allObjs.length; i++ ) {
    allObjs[i].move(delta);
  }
};

Game.prototype.wrap = function (pos) {
  const wrappedPos = pos.slice();
  if (pos[0] < 0){
    wrappedPos[0] += Game.DIM_X;
  }else if (pos[0] >= Game.DIM_X){
    wrappedPos[0] -= Game.DIM_X;
  }
  if (pos[1] < 0){
    wrappedPos[1] += Game.DIM_Y;
  }else if (pos[1] >= Game.DIM_Y){
    wrappedPos[1] -= Game.DIM_Y;
  }
  return wrappedPos;
};

Game.prototype.checkCollisons = function () {
  const allObjs = this.allObjects();

  for (let i = 0; i < allObjs.length - 1; i++) {
    for (let j = i + 1; j < allObjs.length; j++) {
      if (allObjs[i].isCollidedWith(allObjs[j])){
        allObjs[i].collideWith(allObjs[j]);
        allObjs[j].collideWith(allObjs[i]);
      }
    }
  }
  this.removeObjects();
};

Game.prototype.removeObjects = function () {
  this.asteroidsToRemove.forEach( asteroid => {
    const i = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(i, 1);
  });
  this.bulletsToRemove.forEach( bullet => {
    const i = this.bullets.indexOf(bullet);
    this.bullets.splice(i, 1);
  });
  this.asteroidsToRemove = [];
  this.bulletsToRemove = [];
};

Game.prototype.renderGameOver = function () {
  $('.retry').html("You win! Try again?");
  $('.retry').on('click', this.reloadPage.bind(this));
};

Game.prototype.reloadPage = function () {
  document.location.reload();
};

Game.prototype.step = function (delta) {
  this.moveObjects(delta);
  this.checkCollisons();

  if (this.asteroids.length <= 0) {
    this.renderGameOver();
  }
};

Game.prototype.remove = function (object) {
  if (object instanceof Bullet){
    this.bulletsToRemove.push(object);
  }else if (object instanceof Astroid){
    this.asteroidsToRemove.push(object);
  }
};

Game.prototype.allObjects = function() {
  return this.asteroids.concat(this.bullets).concat([this.ship]);
};

Game.prototype.isOutOfBounds = function (pos) {
  return (pos[0] < 0 || pos[0] >= Game.DIM_X || pos[1] < 0 || pos[1] >= Game.DIM_Y);
};



Game.DIM_X = 1100;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 17;

module.exports = Game;
