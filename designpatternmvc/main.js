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

	"use strict";

	var _address = __webpack_require__(1);

	var _address2 = _interopRequireDefault(_address);

	var _cityView = __webpack_require__(3);

	var _cityView2 = _interopRequireDefault(_cityView);

	var _cityCtrl = __webpack_require__(4);

	var _cityCtrl2 = _interopRequireDefault(_cityCtrl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function () {

	    var view = new _cityView2.default({
	        street: document.querySelector('#street'),
	        city: document.querySelector('#city'),
	        newstreet: document.querySelector('#newstreet'),
	        newcity: document.querySelector('#newcity'),
	        newaddress: document.querySelector('#newaddress')
	    });
	    var controller = new _cityCtrl2.default();
	    view.initialize();
	})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _listenernotify = __webpack_require__(2);

	var _listenernotify2 = _interopRequireDefault(_listenernotify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Address = function () {
	    function Address(city, street) {
	        _classCallCheck(this, Address);

	        this.city = city;
	        this.street = street;
	        this.checked = new _listenernotify2.default();
	        this.unchecked = new _listenernotify2.default();
	    }

	    _createClass(Address, [{
	        key: 'check',
	        value: function check(newcity, newstreet) {
	            this.city.value = newcity.value;
	            this.street.value = newstreet.value;
	            this.checked.notify(this.city, this.street);
	        }
	    }, {
	        key: 'uncheck',
	        value: function uncheck(newcity, newstreet) {
	            this.newcity.value = '';
	            this.newstreet.value = '';
	            this.unchecked.notify(this.newcity, this.newstreet);
	        }
	    }]);

	    return Address;
	}();

	exports.default = new Address();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Observer = function () {
	    function Observer(observers) {
	        _classCallCheck(this, Observer);

	        this.observers = [];
	    }

	    _createClass(Observer, [{
	        key: "attach",
	        value: function attach(cb) {

	            this.observers.push(cb);
	        }
	    }, {
	        key: "notify",
	        value: function notify(newaddress) {

	            this.observers.forEach(function (cb) {
	                cb(newaddress);
	            });
	        }
	    }]);

	    return Observer;
	}();

	exports.default = Observer;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _address = __webpack_require__(1);

	var _address2 = _interopRequireDefault(_address);

	var _cityCtrl = __webpack_require__(4);

	var _cityCtrl2 = _interopRequireDefault(_cityCtrl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var View = function () {
	    function View(elements) {
	        _classCallCheck(this, View);

	        this.elements = elements;
	        this.address = _address2.default;
	        this.controller = new _cityCtrl2.default();

	        ({
	            street: document.querySelector('#street'),
	            city: document.querySelector('#city'),
	            newstreet: document.querySelector('#newstreet'),
	            newcity: document.querySelector('#newcity'),
	            newaddress: document.querySelector('#newaddress'),
	            checkbox: document.querySelector('#checkbox')
	        });
	    }

	    _createClass(View, [{
	        key: "initialize",
	        value: function initialize() {
	            var _this = this;

	            this.address.checked.attach(function (city) {
	                _this.render(city);
	            });
	            this.address.checked.attach(function (street) {
	                _this.render(street);
	            });
	            this.elements.checkbox.addEventListener('change', function () {
	                if (_this.checked) {
	                    _this.controller.check(newcity, newstreet);
	                } else {
	                    _this.controller.uncheck(newcity, newstreet);
	                }
	            });
	        }
	    }, {
	        key: "render",
	        value: function render(newcity, newstreet) {
	            this.elements.newaddress.innerHTML = '';
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = newaddress[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var address = _step.value;

	                    this.elements.newaddress.appendChild(new _address2.default(city, street));
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }]);

	    return View;
	}();

	exports.default = View;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _address = __webpack_require__(1);

	var _address2 = _interopRequireDefault(_address);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	    function Controller(address) {
	        _classCallCheck(this, Controller);

	        this.address = _address2.default;
	    }

	    _createClass(Controller, [{
	        key: "check",
	        value: function check(newcity, newstreet) {
	            this.address.check(newcity, newstreet);
	        }
	    }, {
	        key: "uncheck",
	        value: function uncheck(newcity, newstreet) {
	            this.address.uncheck(newcity, newstreet);
	        }
	    }]);

	    return Controller;
	}();

	exports.default = Controller;

/***/ })
/******/ ]);