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

	var _appView = __webpack_require__(1);

	var _appView2 = _interopRequireDefault(_appView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function () {
	    var view = new _appView2.default({
	        calorieTotal: document.querySelector('#total'),
	        addButton: document.querySelector('#add-button'),
	        editButton: document.querySelector('#edit-button'),
	        updateButton: document.getElementById('update-button'),
	        deleteButton: document.getElementById('delete-button'),
	        itemName: document.getElementById('item-name'),
	        calorieValue: document.getElementById('calorie-value'),
	        menuTable: document.getElementById('menu-table')
	    });
	    view.initialize();
	})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _meals = __webpack_require__(2);

	var _meals2 = _interopRequireDefault(_meals);

	var _cityCtrl = __webpack_require__(4);

	var _cityCtrl2 = _interopRequireDefault(_cityCtrl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var View = function () {
	    function View(elements) {
	        _classCallCheck(this, View);

	        this.elements = elements;
	        this.model = _meals2.default;
	        this.controller = new _cityCtrl2.default();
	    }

	    _createClass(View, [{
	        key: "initialize",
	        value: function initialize() {
	            var _this = this;

	            this.model.itemAdded.attach(function (itemName, calorieValue, calorieTotal) {
	                _this.render(itemName, calorieValue, calorieTotal);
	            });
	            this.elements.addButton.addEventListener('click', function (e) {
	                if (_this.elements.itemName.value != "" && _this.elements.calorieValue.value != "") {
	                    _this.controller.add(_this.itemName, _this.elements.calorieValue.value, _this.elements.calorieTotal);
	                    _this.elements.itemName = "";
	                    _this.elements.calorieValue = "";
	                }
	            });
	        }
	    }, {
	        key: "render",
	        value: function render(itemName, calorieValue, calorieTotal) {
	            var subHead = document.getElementById("subheading");
	            var tdata = document.createElement("tr");
	            var tItem = document.createElement("td");
	            var tCalorie = document.createElement("td");
	            var action = document.createElement("td");
	            var edit = document.createElement("button");
	            edit.innerHTML = "Edit";
	            this.elements.menuTable.appendChild(tdata);
	            tdata.appendChild(tItem);
	            tdata.appendChild(tCalorie);
	            tdata.appendChild(action);
	            action.appendChild(edit);
	            tItem.innerHTML = itemName;
	            tCalorie.innerHTML = calorieValue;
	            this.elements.subHead.innerHTML = "Total Calories : " + calorieTotal.value;
	        }
	    }]);

	    return View;
	}();

	exports.default = View;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _listenernotify = __webpack_require__(3);

	var _listenernotify2 = _interopRequireDefault(_listenernotify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Meals = function () {
	    function Meals(itemName, calorieValue, calorieTotal) {
	        _classCallCheck(this, Meals);

	        this.itemName = itemName;
	        this.calorieValue = calorieValue;
	        this.calorieTotal = 0;
	        this.total = new _listenernotify2.default();
	        this.itemAdded = new _listenernotify2.default();
	        this.itemEditable = new _listenernotify2.default();
	        this.itemUpdated = new _listenernotify2.default();
	        this.itemDeleted = new _listenernotify2.default();
	        this.clearAll = new _listenernotify2.default();
	    }

	    _createClass(Meals, [{
	        key: "add",
	        value: function add(itemName, calorieValue, calorieTotal) {
	            this.calorieTotal += parseInt(this.calorieValue);
	            this.total.notify(itemName, calorieValue, calorieTotal);
	        }
	    }]);

	    return Meals;
	}();

	exports.default = new Meals();

/***/ }),
/* 3 */
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
	        value: function notify(itemName, calorieValue, calorieTotal) {

	            this.observers.forEach(function (cb) {
	                cb(itemName, calorieValue, calorieTotal);
	            });
	        }
	    }]);

	    return Observer;
	}();

	exports.default = Observer;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _meals = __webpack_require__(2);

	var _meals2 = _interopRequireDefault(_meals);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	    function Controller() {
	        _classCallCheck(this, Controller);

	        this.model = _meals2.default;
	    }

	    _createClass(Controller, [{
	        key: "add",
	        value: function add(itemName, calorieValue, calorieTotal) {
	            this.model.add(itemName, calorieValue, calorieTotal);
	        }
	    }]);

	    return Controller;
	}();

	exports.default = Controller;

/***/ })
/******/ ]);