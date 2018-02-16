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

	var _city = __webpack_require__(1);

	var _city2 = _interopRequireDefault(_city);

	var _cityView = __webpack_require__(3);

	var _cityView2 = _interopRequireDefault(_cityView);

	var _cityPresenter = __webpack_require__(4);

	var _cityPresenter2 = _interopRequireDefault(_cityPresenter);

	var _multimodule = __webpack_require__(5);

	var obj = _interopRequireWildcard(_multimodule);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function () {

	  var presenter = new _cityPresenter2.default();
	  presenter.initialize();
	  console.log(new obj.default() + " " + new obj.Mod2() + " " + new obj.Mod3());
	})();
	// import {mod1,mod2,mod3} from './util/multimodule'

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _listenernotify = __webpack_require__(2);

	var _listenernotify2 = _interopRequireDefault(_listenernotify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Model = function () {
	    function Model() {
	        _classCallCheck(this, Model);

	        this.cities = [];
	        this.cityAdded = new _listenernotify2.default();
	        this.cityRemoved = new _listenernotify2.default();
	    }

	    _createClass(Model, [{
	        key: "add",
	        value: function add(name) {
	            this.cities.push(name);
	            debugger;
	            this.cityAdded.notify(this.cities);
	        }
	    }, {
	        key: "remove",
	        value: function remove(index) {
	            this.cities.splice(index, 1);
	            this.cityRemoved.notify(this.cities);
	        }
	    }]);

	    return Model;
	}();

	// export default new Model();


	exports.default = Model;

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
	            debugger;
	            this.observers.push(cb);
	        }
	    }, {
	        key: "notify",
	        value: function notify(newCity) {
	            debugger;
	            this.observers.forEach(function (cb) {
	                cb(newCity);
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

	var _city = __webpack_require__(1);

	var _city2 = _interopRequireDefault(_city);

	var _cityPresenter = __webpack_require__(4);

	var _cityPresenter2 = _interopRequireDefault(_cityPresenter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var View = function View(elements) {
	    _classCallCheck(this, View);

	    this.elements = elements;
	    // this.model= Model;
	    // this.controller=new Controller();
	};

	exports.default = new View({ addBtn: document.querySelector('#addBtn'),
	    removeBtn: document.querySelector('#removeBtn'),
	    cityList: document.querySelector('#cityList')
	});

	// initialize(){
	//     this.model.cityAdded.attach((cityList)=>{
	//         this.render(cityList)
	//     })
	//     this.model.cityRemoved.attach((cityList)=>{
	//         this.render(cityList)
	//     })

	//     this.elements.addBtn.addEventListener('click',()=>{
	//         let newCity=prompt('Enter a New City');
	//         if(newCity){
	//             this.controller.add(newCity);
	//         }
	//     })
	//     this.elements.removeBtn.addEventListener('click',()=>{
	//         let index=
	//         this.elements.cityList.options.selectedIndex;
	//         if(index!=-1){
	//             this.controller.remove(index);
	//         }
	//     })       
	// }
	// render(newCityList){
	//     this.elements.cityList.innerHTML='';
	//     for(let city of newCityList){
	//         this.elements.cityList.appendChild(new Option(city,city))
	//     }
	// }

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _city = __webpack_require__(1);

	var _city2 = _interopRequireDefault(_city);

	var _cityView = __webpack_require__(3);

	var _cityView2 = _interopRequireDefault(_cityView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Presenter = function () {
	    function Presenter() {
	        _classCallCheck(this, Presenter);

	        this.model = new _city2.default();
	        this.view = _cityView2.default;
	    }

	    _createClass(Presenter, [{
	        key: 'initialize',
	        value: function initialize() {
	            var _this = this;

	            this.model.cityAdded.attach(function (cityList) {
	                debugger;
	                _this.render(cityList);
	            });
	            this.model.cityRemoved.attach(function (cityList) {
	                debugger;
	                _this.render(cityList);
	            });

	            this.view.elements.addBtn.addEventListener('click', function () {
	                var newCity = prompt('Enter a New City');
	                if (newCity) {
	                    _this.model.add(newCity);
	                }
	            });
	            this.view.elements.removeBtn.addEventListener('click', function () {
	                var index = _this.view.elements.cityList.options.selectedIndex;
	                if (index != -1) {
	                    _this.model.remove(index);
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render(newCityList) {
	            this.view.elements.cityList.innerHTML = '';
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = newCityList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var city = _step.value;

	                    this.view.elements.cityList.appendChild(new Option(city, city));
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

	    return Presenter;
	}();

	exports.default = Presenter;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	exports.default = Mod1 = function Mod1() {
	    console.log('Mod1');
	};

	// export default class Mod1{
	//     constructor(){
	//         console.log('Mod1')
	//     }
	// }


	var Mod2 = exports.Mod2 = function Mod2() {
	    _classCallCheck(this, Mod2);

	    console.log('Mod2');
	};
	// let  mod3=()=>{
	//     console.log('Mod3');
	// }


	var Mod3 = exports.Mod3 = function Mod3() {
	    _classCallCheck(this, Mod3);

	    console.log('Mod3');
	};
	// export default Mod1;

	// export default { mod1,mod2,mod3}

/***/ })
/******/ ]);