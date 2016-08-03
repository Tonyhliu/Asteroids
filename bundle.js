/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Game = __webpack_require__(1);
	const GameView = __webpack_require__(7);
	
	document.addEventListener("DOMContentLoaded", function(event) {
	  const canvas = document.getElementById("game-canvas");
	  const ctx = canvas.getContext("2d");
	
	  const bgImg = new Image();
	  bgImg.onload = function () {
	    const game = new Game(bgImg);
	    const gv = new GameView(game, ctx);
	    gv.start();
	  };
	  bgImg.src = 'myImage.png';
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const Ship = __webpack_require__(2);
<<<<<<< HEAD
	const Bullet = __webpack_require__(5);
	const Astroid = __webpack_require__(6);
	
	function Game (bgImg) {
	  this.asteroids = [];
	  this.bullets = [];
	  this.asteroidsToRemove = [];
=======
	const Bullet = __webpack_require__(4);
	const Astroid = __webpack_require__(5);
	
	function Game (bgImg) {
	  this.astroids = [];
	  this.bullets = [];
	  this.astroidsToRemove = [];
>>>>>>> origin/master
	  this.bulletsToRemove = [];
	  this.addAsteroids();
	  this.ship = new Ship({"pos": this.randomPosition(), "game":this});
	  this.bgImg = bgImg;
	}
	
	Game.prototype.addAsteroids = function () {
	  for(let i = 0; i < Game.NUM_ASTEROIDS; i++){
	    const newAst = new Astroid({"pos":this.randomPosition(), "game":this});
<<<<<<< HEAD
	    this.asteroids.push(newAst);
=======
	    this.astroids.push(newAst);
>>>>>>> origin/master
	  }
	};
	
	Game.prototype.randomPosition = function () {
	  return [Math.random() * Game.DIM_X, Math.random() * Game.DIM_Y];
	};
	
	Game.prototype.draw = function (ctx) {
	  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
	  ctx.drawImage(this.bgImg, 0, 0);
	  this.allObjects().forEach(obj => obj.draw(ctx));
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
<<<<<<< HEAD
	  this.asteroidsToRemove.forEach( asteroid => {
	    const i = this.asteroids.indexOf(asteroid);
	    this.asteroids.splice(i, 1);
=======
	  this.astroidsToRemove.forEach( asteroid => {
	    const i = this.astroids.indexOf(asteroid);
	    this.astroids.splice(i, 1);
>>>>>>> origin/master
	  });
	  this.bulletsToRemove.forEach( bullet => {
	    const i = this.bullets.indexOf(bullet);
	    this.bullets.splice(i, 1);
	  });
<<<<<<< HEAD
	  this.asteroidsToRemove = [];
	  this.bulletsToRemove = [];
	
	  if (this.asteroids.length === 0) {
	    alert("Game Over!");
	    document.location.reload();
	  }
=======
	  this.astroidsToRemove = [];
	  this.bulletsToRemove = [];
>>>>>>> origin/master
	};
	
	Game.prototype.step = function (delta) {
	  this.moveObjects(delta);
	  this.checkCollisons();
	};
	
	Game.prototype.remove = function (object) {
	  if (object instanceof Bullet){
	    this.bulletsToRemove.push(object);
	  }else if (object instanceof Astroid){
<<<<<<< HEAD
	    this.asteroidsToRemove.push(object);
=======
	    this.astroidsToRemove.push(object);
>>>>>>> origin/master
	  }
	};
	
	Game.prototype.allObjects = function() {
<<<<<<< HEAD
	  return this.asteroids.concat(this.bullets).concat([this.ship]);
=======
	  return this.astroids.concat(this.bullets).concat([this.ship]);
>>>>>>> origin/master
	};
	
	Game.prototype.isOutOfBounds = function (pos) {
	  return (pos[0] < 0 || pos[0] >= Game.DIM_X || pos[1] < 0 || pos[1] >= Game.DIM_Y);
	};
	
	
	
	Game.DIM_X = 1200;
<<<<<<< HEAD
	Game.DIM_Y = 600;
	Game.NUM_ASTEROIDS = 20;
=======
	Game.DIM_Y = 900;
	Game.NUM_ASTEROIDS = 25;
>>>>>>> origin/master
	
	module.exports = Game;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	const MovingObject = __webpack_require__(3);
<<<<<<< HEAD
	const Bullet = __webpack_require__(5);
	const Util = __webpack_require__(4);
=======
	const Bullet = __webpack_require__(4);
	const Util = __webpack_require__(6);
>>>>>>> origin/master
	
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
	
<<<<<<< HEAD
	Ship.RADIUS = 15;
	Ship.COLOR = "white";
=======
	Ship.RADIUS = 20;
	Ship.COLOR = "#FF0000";
>>>>>>> origin/master
	
	
	module.exports = Ship;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

<<<<<<< HEAD
	const Util = __webpack_require__(4)
=======
	const Util = __webpack_require__(6)
>>>>>>> origin/master
	
	function MovingObject (options) {
	  this.game = options["game"];
	  this.pos = options["pos"];
	  this.vel = options["vel"];
	  this.radius = options["radius"];
	  this.color = options["color"];
	}
	
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


/***/ },
/* 4 */
<<<<<<< HEAD
/***/ function(module, exports) {

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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	const MovingObject = __webpack_require__(3);
	const Util = __webpack_require__(4);
=======
/***/ function(module, exports, __webpack_require__) {

	const MovingObject = __webpack_require__(3);
	const Util = __webpack_require__(6);
>>>>>>> origin/master
	
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


/***/ },
<<<<<<< HEAD
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	const MovingObject = __webpack_require__(3);
	const Util = __webpack_require__(4);
	const Ship = __webpack_require__(2);
	const Bullet = __webpack_require__(5);
=======
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	const MovingObject = __webpack_require__(3);
	const Util = __webpack_require__(6);
	const Ship = __webpack_require__(2);
	const Bullet = __webpack_require__(4);
>>>>>>> origin/master
	
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


/***/ },
<<<<<<< HEAD
=======
/* 6 */
/***/ function(module, exports) {

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


/***/ },
>>>>>>> origin/master
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {const Game = __webpack_require__(1);
	
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map