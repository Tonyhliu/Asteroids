const Util = {};

Util.inherits = function (ChildClass, ParentClass){
  function Surrogate () {}
  Surrogate.prototype = ParentClass.prototype;
  ChildClass.prototype = new Surrogate();
  ChildClass.prototype.constructor = ChildClass;
};

Util.randomVec = function(length) {
  const x = Math.random() * length;
  const y = Math.sqrt((length*length) - (x*x));
  return [x, y];
};

Util.distance = function (vect1, vect2) {
  return Math.sqrt(Math.pow((vect1[0] - vect2[0]), 2) + Math.pow((vect1[1] - vect2[1]), 2));
};

Util.scaleVec = function (vect, length) {
  const scaled = vect.slice();
  const scalar = length / Util.distance(vect, [0, 0]);
  scaled[0] *= scalar;
  scaled[1] *= scalar;
  return scaled;
};

module.exports = Util;
