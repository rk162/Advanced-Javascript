/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _testmodAes = __webpack_require__(1);

	var _testmodAes2 = _interopRequireDefault(_testmodAes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.log(_testmodAes2.default.methodA().getDay()); // require js which uses AMD (Asynchronous Module Definition)
	// const iife=require('./moduleA/testmodA');

	// ES 2015 way of importing modules

	console.log(_testmodAes2.default.methodB().getMonth());

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var MyApp = MyApp || {};
	MyApp.sapient = {};
	MyApp.sapient.nitro = {};
	MyApp.sapient.nitro = function (ns) {
	    'use strict';

	    ns.methodA = function () {
	        return {
	            getDay: function getDay() {
	                return new Date().getDay();
	            }
	        };
	    };
	    ns.methodB = function () {
	        return {
	            getMonth: function getMonth() {
	                return new Date().getMonth();
	            }
	        };
	    };
	    // Closures to expose private members as public interfaces
	    return {
	        ns: ns
	    };
	}(MyApp.sapient.nitro || {});

	exports.default = MyApp.sapient.nitro;

/***/ })
/******/ ]);