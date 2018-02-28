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
	        calorieTotal: document.querySelector('#total-calories'),
	        addButton: document.querySelector('#add-button'),
	        updateButton: document.getElementById('update-button'),
	        deleteButton: document.getElementById('delete-button'),
	        itemName: document.getElementById('item-name'),
	        calorieValue: document.getElementById('calorie-value'),
	        menuTable: document.getElementById('menu-table'),
	        tableHead: document.getElementById('table-head'),
	        total: document.getElementById('total-calories'),
	        clearButton: document.getElementById('clear-all')
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

	var _MealCtrl = __webpack_require__(2);

	var _MealCtrl2 = _interopRequireDefault(_MealCtrl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var View = function () {
	    function View(elements) {
	        _classCallCheck(this, View);

	        this.elements = elements;
	        this.controller = _MealCtrl2.default;
	        this.total = 0;
	        this.targetId;
	    }

	    _createClass(View, [{
	        key: "initialize",
	        value: function initialize() {
	            var _this = this;

	            _MealCtrl2.default.DataStorage.itemChanged.attach(function (meals) {
	                _this.render(meals);
	            });
	            window.onload = function () {
	                _this.render(_MealCtrl2.default.items);
	            };
	            this.elements.addButton.addEventListener('click', function (e) {
	                if (_this.elements.itemName.value != "" && _this.elements.calorieValue != "") {
	                    _this.controller.addMeal(_this.elements.itemName.value, _this.elements.calorieValue.value);
	                    // this.model.itemAdded.notify(newMeal);
	                    _this.elements.itemName.value = "";
	                    _this.elements.calorieValue.value = "";
	                }
	            });

	            this.elements.updateButton.addEventListener('click', function () {
	                if (_this.elements.itemName.value != "" && _this.elements.calorieValue != "") {
	                    _this.controller.updateMeal(_this.targetId, _this.elements.itemName.value, _this.elements.calorieValue.value);
	                }
	            });
	            this.elements.deleteButton.addEventListener('click', function () {
	                if (_this.elements.itemName.value != "" && _this.elements.calorieValue.value != "") {
	                    _this.controller.removeMeal(_this.targetId);
	                }
	            });
	            this.elements.clearButton.addEventListener('click', function () {
	                _this.elements.addButton.style = "display:inline";
	                _this.elements.updateButton.style = "display:none";
	                _this.elements.deleteButton.style = "display:none";
	                _this.controller.clearMeals();
	            });
	        }
	    }, {
	        key: "render",
	        value: function render(newMeals) {
	            var _this2 = this;

	            this.total = 0;
	            this.elements.menuTable.innerHTML = "";
	            if (newMeals.length == 0) {
	                this.elements.itemName.value = "";
	                this.elements.calorieValue = "";
	                this.elements.menuTable.innerHTML = "";
	                this.total = 0;
	                this.elements.calorieTotal.innerHTML = this.total;
	            }

	            newMeals.forEach(function (item) {
	                var subHead = document.getElementById("subheading");
	                var tdata = document.createElement("tr");
	                var tItem = document.createElement("td");
	                var tCalorie = document.createElement("td");
	                var action = document.createElement("td");
	                var editbtn = document.createElement("button");
	                editbtn.innerHTML = "Edit";
	                _this2.elements.menuTable.appendChild(tdata);
	                tdata.appendChild(tItem);
	                tdata.appendChild(tCalorie);
	                tdata.appendChild(action);
	                action.appendChild(editbtn);
	                tItem.innerHTML = item.itemName;
	                tCalorie.innerHTML = item.calorieValue;
	                _this2.total = _this2.total + parseInt(item.calorieValue);
	                _this2.elements.calorieTotal.innerHTML = _this2.total;

	                editbtn.addEventListener("click", function (event) {
	                    document.querySelectorAll(".editButton").forEach(function (entry) {
	                        entry.disabled = true;
	                    });
	                    _this2.targetId = event.currentTarget.id;
	                    _this2.elements.addButton.style = "display:none";
	                    _this2.elements.updateButton.style = "display:inline";
	                    _this2.elements.deleteButton.style = "display:inline";
	                    _this2.elements.calorieValue = "";
	                });
	                document.querySelectorAll(".editButton").forEach(function (entry) {
	                    entry.disabled = false;
	                });
	                // this.elements.deleteButton.addEventListener('click', (d) => {
	                //     this.elements.menuTable.deleteRow(index);
	                //     this.elements.updateButton.style.display = "none";
	                //     this.elements.deleteButton.style.display = "none";
	                //     this.elements.addButton.style.display = "block";
	                //     this.elements.itemName.value = "";
	                //     this.elements.calorieValue.value = "";
	                //     this.controller.delete(this.elements.itemName.value, this.elements.calorieValue.value);
	                // });

	                // this.elements.updateButton.addEventListener('click', (c) => {
	                //     this.elements.updateButton.style.display = "none";
	                //     this.elements.deleteButton.style.display = "none";
	                //     this.elements.addButton.style.display = "block";
	                //     e.target.disabled = false;
	                //     e.target.parentNode.parentNode.childNodes[0].innerHTML = this.elements.itemName.value;
	                //     e.target.parentNode.parentNode.childNodes[1].innerHTML = this.elements.calorieValue.value;
	                //     this.controller.update(this.elements.itemName.value, this.elements.calorieValue.value);
	                // });
	            });
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

	var _mealstorage = __webpack_require__(3);

	var _mealstorage2 = _interopRequireDefault(_mealstorage);

	var _meal = __webpack_require__(5);

	var _meal2 = _interopRequireDefault(_meal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MealController = function () {
	    function MealController() {
	        _classCallCheck(this, MealController);

	        this.DataStorage = _mealstorage2.default;
	        this.items = this.DataStorage.getMeals();
	        this.currentMeal = null;
	        this.totalCalories = 0;
	    }

	    _createClass(MealController, [{
	        key: "addMeal",
	        value: function addMeal(name, calories) {
	            var ID = void 0;
	            if (this.items.length > 0) {
	                ID = this.items[this.items.length - 1].id + 1;
	            } else ID = 0;

	            var newMeal = new _meal2.default(ID, name, calories);
	            this.items.push(newMeal);
	            _mealstorage2.default.storeMeal(newMeal);
	            return newMeal;
	        }
	    }, {
	        key: "updateMeal",
	        value: function updateMeal(id, name, calorie) {
	            this.items.forEach(function (item) {
	                if (item.id == id) {
	                    item.meal = name;
	                    item.calorie = calorie;
	                    _mealstorage2.default.updateMeal(item);
	                }
	            });
	        }

	        // updateMeal(id,name,calorie){
	        //     let newMeal = new Model(id,name,calorie);
	        //     DataStorage.updateMeal(newMeal);
	        // }

	    }, {
	        key: "removeMeal",
	        value: function removeMeal(id) {
	            this.items.forEach(function (item) {
	                if (item.id == id) {
	                    _mealstorage2.default.removeMeal(item);
	                }
	            });
	        }
	    }, {
	        key: "clearMeals",
	        value: function clearMeals() {
	            this.items.forEach(function (item) {
	                _mealstorage2.default.removeMeal(item);
	            });
	        }
	    }]);

	    return MealController;
	}();

	exports.default = new MealController();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _listenernotify = __webpack_require__(4);

	var _listenernotify2 = _interopRequireDefault(_listenernotify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DataStorage = function () {
	    function DataStorage() {
	        _classCallCheck(this, DataStorage);

	        this.itemChanged = new _listenernotify2.default();
	    }

	    _createClass(DataStorage, [{
	        key: 'storeMeal',
	        value: function storeMeal(meal) {
	            var items = void 0;
	            if (localStorage.getItem('meals') === null) {
	                items = [];
	                items.push(meal);
	                localStorage.setItem('meals', JSON.stringify(items));
	            } else {
	                items = JSON.parse(localStorage.getItem('meals'));
	                items.push(meal);
	                localStorage.setItem('meals', JSON.stringify(items));
	            }
	            this.itemChanged.notify(items);
	        }
	    }, {
	        key: 'updateMeal',
	        value: function updateMeal(meal) {
	            var meals = JSON.parse(localStorage.getItem('meals'));
	            meals.forEach(function (existingmeal) {
	                if (existingmeal.id === meal.id) {
	                    Object.assign(existingmeal, meal);
	                    localStorage.setItem('meals', JSON.stringify(meals));
	                }
	            });
	            this.itemChanged.notify(meals);
	        }
	    }, {
	        key: 'removeMeal',
	        value: function removeMeal(meal) {
	            var meals = JSON.parse(localStorage.getItem('meals'));
	            var ids = meals.map(function (items) {
	                return items.id;
	            });
	            meals.forEach(function (existingmeal) {

	                if (existingmeal.id === meal.id) {

	                    meals.splice(ids.indexOf(meal.id), 1);
	                }
	                localStorage.setItem('meals', JSON.stringify(meals));
	            });
	            this.itemChanged.notify(meals);
	        }
	    }, {
	        key: 'getMeals',
	        value: function getMeals() {
	            var items = void 0;
	            if (localStorage.getItem('meals') === null) {
	                items = [];
	            } else {
	                items = JSON.parse(localStorage.getItem('meals'));
	            }
	            return items;
	        }
	    }]);

	    return DataStorage;
	}();

	exports.default = new DataStorage();

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Observer = function () {
	    function Observer() {
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
	        value: function notify(meals) {

	            this.observers.forEach(function (cb) {
	                cb(meals);
	            });
	        }
	    }]);

	    return Observer;
	}();

	exports.default = Observer;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Model = function Model(id, meal, calorie) {
	    _classCallCheck(this, Model);

	    this.id = id;
	    this.meal = meal;
	    this.calorie = calorie;
	};

	exports.default = Model;

/***/ })
/******/ ]);