/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Game = __webpack_require__(/*! ./game.js */ \"./js/game.js\");\n\nvar game = new Game();\n\ndocument.addEventListener('keydown', function(event){\n    game.turnFurry(event);\n});\n\ngame.showFurry();\ngame.showCoin();\ngame.startGame();\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/coin.js":
/*!********************!*\
  !*** ./js/coin.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Coin() {\r\n    this.x = Math.floor(Math.random() * 10);\r\n    this.y = Math.floor(Math.random() * 10);\r\n}\r\n\r\nmodule.exports = Coin;\r\n\n\n//# sourceURL=webpack:///./js/coin.js?");

/***/ }),

/***/ "./js/furry.js":
/*!*********************!*\
  !*** ./js/furry.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Furry() {\r\n    this.x = 0;\r\n    this.y = 0;\r\n    this.direction = \"right\";\r\n}\r\n\r\nmodule.exports = Furry;\r\n\n\n//# sourceURL=webpack:///./js/furry.js?");

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Coin = __webpack_require__(/*! ./coin.js */ \"./js/coin.js\");\r\nvar Furry = __webpack_require__(/*! ./furry.js */ \"./js/furry.js\");\r\n\r\nfunction Game() {\r\n    this.board = document.getElementById('board').getElementsByTagName('div');\r\n    this.furry = new Furry();\r\n    this.coin = new Coin();\r\n\r\n    this.score = 0;\r\n    this.idSetInterval;\r\n\r\n    this.index = function(x, y) {\r\n        return x + (y * 10);\r\n    }\r\n\r\n    this.updateScore = function() {\r\n        this.score++;\r\n        document.getElementById('score')\r\n            .getElementsByTagName('div')[0]\r\n            .getElementsByTagName('strong')[0]\r\n            .innerText = this.score;\r\n    }\r\n\r\n    this.hideVisibleCoin = function() {\r\n        this.board[this.index(this.coin.x, this.coin.y)].classList.remove('coin');\r\n    }\r\n\r\n    this.checkCoinCollision = function() {\r\n        if(this.furry.x == this.coin.x && this.furry.y == this.coin.y) {\r\n            this.updateScore();\r\n            this.hideVisibleCoin();\r\n            this.coin = new Coin();\r\n            this.showCoin();\r\n        }\r\n    }\r\n\r\n    this.hideVisibleFurry = function() {\r\n        var objects = document.querySelector('.furry');\r\n        if(objects == undefined || objects == null || objects.length == 0) {\r\n            return;\r\n        }\r\n        objects.classList.remove('furry');\r\n    }\r\n\r\n    this.showFurry = function() {\r\n        this.hideVisibleFurry();\r\n        var field = this.board[this.index(this.furry.x, this.furry.y)];\r\n        if(field != undefined) {\r\n            field.classList.add('furry')\r\n        }\r\n    }\r\n\r\n    this.showCoin = function() {\r\n        var field = this.board[this.index(this.coin.x, this.coin.y)];\r\n        if(field != undefined) {\r\n            field.classList.add('coin')\r\n        }\r\n    }\r\n\r\n    this.moveFurry = function() {\r\n        switch(this.furry.direction) {\r\n            case \"right\":\r\n                this.furry.x++;\r\n                break;\r\n            case \"left\":\r\n                this.furry.x--;\r\n                break;\r\n            case \"up\":\r\n                this.furry.y++;\r\n                break;\r\n            case \"down\":\r\n                this.furry.y--;\r\n                break;\r\n        }\r\n        this.checkCoinCollision();\r\n        this.showFurry();\r\n        this.gameOver();\r\n    }\r\n\r\n    this.turnFurry = function(event) {\r\n        switch(event.keyCode){\r\n            case 37:\r\n                this.furry.direction = 'left';\r\n                break;\r\n            case 39:\r\n                this.furry.direction = 'right';\r\n                break;\r\n            case 38:\r\n                this.furry.direction = 'down';\r\n                break;\r\n            case 40:\r\n                this.furry.direction = 'up';\r\n                break;\r\n            default:\r\n                break;\r\n        }\r\n    }\r\n\r\n    this.startGame = function() {\r\n        var self = this;\r\n        this.idSetInterval = setInterval(function() {\r\n            self.moveFurry();\r\n        }, 250);\r\n    }\r\n\r\n    this.showOverallScore = function() {\r\n        var element = document.getElementById('over');\r\n        element.classList.remove('invisible');\r\n        element.innerText = \"GAME OVER! YOU SCORED \"+this.score+\" POINTS!\";\r\n    }\r\n\r\n    this.gameOver = function() {\r\n        if (this.furry.x < 0 || this.furry.x > 9\r\n            || this.furry.y < 0 || this.furry.y > 9)\r\n        {\r\n            clearInterval(this.idSetInterval);\r\n            this.hideVisibleFurry();\r\n            this.showOverallScore();\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = Game;\r\n\n\n//# sourceURL=webpack:///./js/game.js?");

/***/ }),

/***/ 0:
/*!*************************!*\
  !*** multi ./js/app.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./js/app.js */\"./js/app.js\");\n\n\n//# sourceURL=webpack:///multi_./js/app.js?");

/***/ })

/******/ });