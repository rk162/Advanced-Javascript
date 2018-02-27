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

	var _websocketclient = __webpack_require__(1);

	var _websocketclient2 = _interopRequireDefault(_websocketclient);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	new _websocketclient2.default().connect();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var WebSocketClient = function () {
	    function WebSocketClient() {
	        _classCallCheck(this, WebSocketClient);

	        this.ws = new WebSocket('ws://localhost:8080');
	    }

	    _createClass(WebSocketClient, [{
	        key: 'connect',
	        value: function connect() {
	            var _this = this;

	            $('form').addEventListener('submit', function () {
	                var name = $('#name').value;
	                var message = $('#message').value;
	                _this.ws.send(JSON.stringify({ name: name, message: message }));
	                return false;
	            });
	            this.ws.onmessage = function (e) {
	                var li = $('<li></li>');
	                li.append(document.createTextNode(e.data));
	                $('#messages').append(li);
	            };
	            this.ws.oneror = function (e) {
	                var li = $('<li></li>');
	                var span = $('<span></span>')(span).append('Error' + e.data);
	                li.append(span);
	                $('#messages').append(li);
	            };
	        }
	    }]);

	    return WebSocketClient;
	}();

	exports.default = WebSocketClient;

/***/ })
/******/ ]);