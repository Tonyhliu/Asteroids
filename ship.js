const MovingObject = require("./moving_object.js");
const Bullet = require("./bullet.js");
const Util = require("./utils.js");

function Ship (options) {
  options['radius'] = Ship.RADIUS;
  options['color'] = Ship.COLOR;
  options['vel'] = [0, 0];
  MovingObject.call(this, options);
}

Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function () {
  this.pos = this.game.randomPosition();
  this.vel = [0, 0];
};

Ship.prototype.power = function (impulse) {
  this.vel[0] += impulse[0];
  this.vel[1] += impulse[1];
};

Ship.prototype.fireBullet = function () {
  const bulletPos = this.pos.slice();
  const bulletVel = Util.scaleVec(this.vel, 10);
  const bullet = new Bullet({"pos":bulletPos, "vel":bulletVel, "game":this.game});
  this.game.bullets.push(bullet);
};

Ship.RADIUS = 20;
Ship.COLOR = "#FF0000";


module.exports = Ship;
