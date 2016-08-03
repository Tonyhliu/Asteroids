const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");

function Bullet (options) {
  options['color'] = Bullet.COLOR;
  options['radius'] = Bullet.RADIUS;
  MovingObject.call(this, options);
}

Util.inherits(Bullet, MovingObject);

Bullet.prototype.collideWith = function (otherObject) {

};

Bullet.prototype.isWrappable = false;

<<<<<<< HEAD
Bullet.COLOR = "#00EE00";
=======
Bullet.COLOR = "#0000FF";
>>>>>>> origin/master
Bullet.RADIUS = 5;

module.exports = Bullet;
