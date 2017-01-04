(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React"), require("ReactDOM")) : factory(root["React"], root["ReactDOM"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
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

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var LeiaMais_1 = __webpack_require__(3);
	var webparts = document.getElementsByClassName('webpart-script-example');
	for (var i = 0; i < webparts.length; i++) {
	    var description = webparts[i].getAttribute('data-description').toString();
	    ReactDOM.render(React.createElement(LeiaMais_1.LeiaMais, {description: description}), webparts[i]);
	}
	
	//# sourceMappingURL=index.js.map


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var LeiaMais = (function (_super) {
	    __extends(LeiaMais, _super);
	    function LeiaMais(props) {
	        _super.call(this, props);
	        this.state = {
	            'displayText': '',
	            'en-US': 'Read the publications from our professionals of the practice area: {area}',
	            'pt-BR': 'Veja as publicações produzidas por nossos profissionais da área de {area}',
	        };
	    }
	    LeiaMais.prototype.setText = function () {
	        this.lang = document.querySelector('html').attributes.getNamedItem('lang').value;
	        var hash = decodeURIComponent(window.location.hash).slice(1).split(':');
	        this.hashvalue = hash[1] || '';
	    };
	    LeiaMais.prototype.componentWillMount = function () {
	        this.setText();
	    };
	    LeiaMais.prototype.render = function () {
	        return (React.createElement("div", {id: "leia-mais"}, React.createElement("p", null, this.state[this.lang].replace('{area}', this.hashvalue).replace(/\*/gi, ''))));
	    };
	    return LeiaMais;
	}(React.Component));
	exports.LeiaMais = LeiaMais;
	
	//# sourceMappingURL=LeiaMais.js.map


/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-app.js.map