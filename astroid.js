const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");
const Ship = require("./ship.js");
const Bullet = require("./bullet.js");

function Astroid(options) {
  options['color'] = Astroid.COLOR;
  options['radius'] = Astroid.RADIUS;
  options['vel'] = Util.randomVec(Astroid.SPEED);
  MovingObject.call(this, options);
}

MovingObject.prototype.collideWith = function (otherObject) {
  if (otherObject instanceof Ship){
    otherObject.relocate();
<<<<<<< HEAD
  } else if (otherObject instanceof Bullet){
=======
  }else if (otherObject instanceof Bullet){
>>>>>>> origin/master
    this.game.remove(this);
  }
};

Util.inherits(Astroid, MovingObject);

Astroid.COLOR = "#777777";
<<<<<<< HEAD
Astroid.RADIUS = 20;
=======
Astroid.RADIUS = 30;
>>>>>>> origin/master
Astroid.SPEED = 3;

module.exports = Astroid;
