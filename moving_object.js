const Util = require("./utils.js")

function MovingObject (options) {
  this.game = options["game"];
  this.pos = options["pos"];
  this.vel = options["vel"];
  this.radius = options["radius"];
  this.color = options["color"];
}

MovingObject.prototype.drawShip = function(ctx) {
  const shipImg = new Image();
  shipImg.src = "http://res.cloudinary.com/dcbb8bnvk/image/upload/v1470523570/spaceship_pxguzq.png";
  ctx.drawImage(shipImg, this.pos[0] - 10, this.pos[1], 40, 40);
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    20,
    0,
    2 * Math.PI,
    false
  );
};

MovingObject.prototype.draw = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );
  ctx.fill();
};

MovingObject.prototype.move = function (delta) {
  this.pos[0] += this.vel[0] * delta;
  this.pos[1] += this.vel[1] * delta;
  if (this.game.isOutOfBounds(this.pos)){
    if (this.isWrappable){
      this.pos = this.game.wrap(this.pos);
    }else{
      this.game.remove(this);
    }
  }
};

MovingObject.prototype.isCollidedWith = function (otherObject) {
  return (Util.distance(this.pos, otherObject.pos) < (this.radius + otherObject.radius));
};

MovingObject.prototype.collideWith = function (otherObject) {

};

MovingObject.prototype.isWrappable = true;


module.exports = MovingObject;
