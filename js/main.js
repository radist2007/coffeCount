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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlLmNzcz9kYWFlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vc3JjL2Nzcy9zdHlsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/css/style.css\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/main.js */ \"./src/js/main.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\ndocument.addEventListener('DOMContentLoaded', function() {\n\tconsole.log(\"Materialcss\");\n\tvar el    = document.querySelector('#tabs');\n\tvar elems = document.querySelectorAll('.sidenav');\n\tvar instances = M.Sidenav.init(elems, { });\n    var instance = M.Tabs.init(el, {});\n\tvar instance = M.Carousel.init({\n\t\tfullWidth: true,\n\t\tindicators: true\n\t});\n\n\tvar elems = document.querySelectorAll('.fixed-action-btn');\n\tvar instances = M.FloatingActionButton.init(elems, {});\n\n\tvar elems = document.querySelectorAll('.collapsible');\n\tvar instances = M.Collapsible.init(elems, {});\n});\n\n  document.addEventListener('DOMContentLoaded', function() {\n\t\t\t    });\n\n  // Or with jQuery\n  //\n  //   $(document).ready(function(){\n  //       $('.fixed-action-btn').floatingActionButton();\n  //         });\n\n  // Or with jQuery\n  //\n  //   $('.carousel.carousel-slider').carousel({\n  //       fullWidth: true,\n  //           indicators: true\n  //             });\n\n  // Or with jQuery\n  //\n  //   $(document).ready(function(){\n  //       $('.sidenav').sidenav();\n  //         });\n  //\n\n\n    // Or with jQuery\n\t//\n\t//   $(document).ready(function(){\n\t//       $('.tabs').tabs();\n\t//         });\n\t//               \nconsole.log(\"index.js\");\n\nvar main = new _js_main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"hm...\");\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnQzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsRUFBRTtBQUMxQyxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQSw2Q0FBNkM7QUFDN0MsQ0FBQzs7QUFFRDtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLGVBQWUsbURBQUk7OztBQUdNIiwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1haW4gZnJvbSAnLi9qcy9tYWluLmpzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuXHRjb25zb2xlLmxvZyhcIk1hdGVyaWFsY3NzXCIpO1xuXHR2YXIgZWwgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFicycpO1xuXHR2YXIgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZW5hdicpO1xuXHR2YXIgaW5zdGFuY2VzID0gTS5TaWRlbmF2LmluaXQoZWxlbXMsIHsgfSk7XG4gICAgdmFyIGluc3RhbmNlID0gTS5UYWJzLmluaXQoZWwsIHt9KTtcblx0dmFyIGluc3RhbmNlID0gTS5DYXJvdXNlbC5pbml0KHtcblx0XHRmdWxsV2lkdGg6IHRydWUsXG5cdFx0aW5kaWNhdG9yczogdHJ1ZVxuXHR9KTtcblxuXHR2YXIgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZml4ZWQtYWN0aW9uLWJ0bicpO1xuXHR2YXIgaW5zdGFuY2VzID0gTS5GbG9hdGluZ0FjdGlvbkJ1dHRvbi5pbml0KGVsZW1zLCB7fSk7XG5cblx0dmFyIGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbGxhcHNpYmxlJyk7XG5cdHZhciBpbnN0YW5jZXMgPSBNLkNvbGxhcHNpYmxlLmluaXQoZWxlbXMsIHt9KTtcbn0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcblx0XHRcdCAgICB9KTtcblxuICAvLyBPciB3aXRoIGpRdWVyeVxuICAvL1xuICAvLyAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gIC8vICAgICAgICQoJy5maXhlZC1hY3Rpb24tYnRuJykuZmxvYXRpbmdBY3Rpb25CdXR0b24oKTtcbiAgLy8gICAgICAgICB9KTtcblxuICAvLyBPciB3aXRoIGpRdWVyeVxuICAvL1xuICAvLyAgICQoJy5jYXJvdXNlbC5jYXJvdXNlbC1zbGlkZXInKS5jYXJvdXNlbCh7XG4gIC8vICAgICAgIGZ1bGxXaWR0aDogdHJ1ZSxcbiAgLy8gICAgICAgICAgIGluZGljYXRvcnM6IHRydWVcbiAgLy8gICAgICAgICAgICAgfSk7XG5cbiAgLy8gT3Igd2l0aCBqUXVlcnlcbiAgLy9cbiAgLy8gICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAvLyAgICAgICAkKCcuc2lkZW5hdicpLnNpZGVuYXYoKTtcbiAgLy8gICAgICAgICB9KTtcbiAgLy9cblxuXG4gICAgLy8gT3Igd2l0aCBqUXVlcnlcblx0Ly9cblx0Ly8gICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXHQvLyAgICAgICAkKCcudGFicycpLnRhYnMoKTtcblx0Ly8gICAgICAgICB9KTtcblx0Ly8gICAgICAgICAgICAgICBcbmNvbnNvbGUubG9nKFwiaW5kZXguanNcIik7XG5cbnZhciBtYWluID0gbmV3IE1haW4oXCJobS4uLlwiKTtcblxuXG5pbXBvcnQgJy4vY3NzL3N0eWxlLmNzcyc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/js/controller.js":
/*!******************************!*\
  !*** ./src/js/controller.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./src/js/helpers.js\");\n\n\nclass Controller {\n\t\n\tconstructor(model, view) {\n\t\tconsole.log(\"Controller.js\");\n\t\tthis._model = model;\n\t\tthis._view  = view;\n\n\t\tthis._view.setViewCoffe = this._model._state.count;\n\t\tthis._view.setViewDays = this._model._state.days;\n\t\tthis._view.setAvrDay();\n\t\tthis._view.setAvrTea();\n\n\t\tthis._view.setViewAvrCoffeeForDay();\n\n\t\tview.on('add', this.addCoffee.bind(this));\n\t\tview.on('del', this.delCoffee.bind(this));\n\n\t}\n\n\taddCoffee() {\n\t\tconsole.log(\"Controller.addCoffee\");\n\t\tthis._model.addCoffee();\n\t\tthis._view.addCoffee();\n\t}\n\n\tdelCoffee() {\n\t\tconsole.log(\"Controller.delCoffee\");\n\t\tthis._model.delCoffee();\n\t\tthis._view.delCoffee();\n\t}\n\t\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controller);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29udHJvbGxlci5qcz9mOTAwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBNEM7O0FBRTVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVlLHlFQUFVLEVBQUMiLCJmaWxlIjoiLi9zcmMvanMvY29udHJvbGxlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJy4vaGVscGVycy5qcyc7XG5cbmNsYXNzIENvbnRyb2xsZXIge1xuXHRcblx0Y29uc3RydWN0b3IobW9kZWwsIHZpZXcpIHtcblx0XHRjb25zb2xlLmxvZyhcIkNvbnRyb2xsZXIuanNcIik7XG5cdFx0dGhpcy5fbW9kZWwgPSBtb2RlbDtcblx0XHR0aGlzLl92aWV3ICA9IHZpZXc7XG5cblx0XHR0aGlzLl92aWV3LnNldFZpZXdDb2ZmZSA9IHRoaXMuX21vZGVsLl9zdGF0ZS5jb3VudDtcblx0XHR0aGlzLl92aWV3LnNldFZpZXdEYXlzID0gdGhpcy5fbW9kZWwuX3N0YXRlLmRheXM7XG5cdFx0dGhpcy5fdmlldy5zZXRBdnJEYXkoKTtcblx0XHR0aGlzLl92aWV3LnNldEF2clRlYSgpO1xuXG5cdFx0dGhpcy5fdmlldy5zZXRWaWV3QXZyQ29mZmVlRm9yRGF5KCk7XG5cblx0XHR2aWV3Lm9uKCdhZGQnLCB0aGlzLmFkZENvZmZlZS5iaW5kKHRoaXMpKTtcblx0XHR2aWV3Lm9uKCdkZWwnLCB0aGlzLmRlbENvZmZlZS5iaW5kKHRoaXMpKTtcblxuXHR9XG5cblx0YWRkQ29mZmVlKCkge1xuXHRcdGNvbnNvbGUubG9nKFwiQ29udHJvbGxlci5hZGRDb2ZmZWVcIik7XG5cdFx0dGhpcy5fbW9kZWwuYWRkQ29mZmVlKCk7XG5cdFx0dGhpcy5fdmlldy5hZGRDb2ZmZWUoKTtcblx0fVxuXG5cdGRlbENvZmZlZSgpIHtcblx0XHRjb25zb2xlLmxvZyhcIkNvbnRyb2xsZXIuZGVsQ29mZmVlXCIpO1xuXHRcdHRoaXMuX21vZGVsLmRlbENvZmZlZSgpO1xuXHRcdHRoaXMuX3ZpZXcuZGVsQ29mZmVlKCk7XG5cdH1cblx0XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/controller.js\n");

/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/*! exports provided: createElement, EventEmitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EventEmitter\", function() { return EventEmitter; });\nfunction createElement(tag, props, ...children) {\n\tconst element = document.createElement(tag);\n\n\tObject.keys(props).forEach(key => element[key] = props[key]);\n\n\tchildren.forEach(child => {\n\t\tif (typeof child === 'string') {\n\t\t\tchild = document.createTextNode(child);\n\t\t}\n\n\t\telement.appendChild(child);\n\t});\n\n\treturn element;\n}\n\nclass EventEmitter {\n\tconstructor() {\n\t\tthis.events = {};\n\t}\n\n\ton(type, callback)  {\n\t\tthis.events[type] = this.events[type] || [];\n\t\tthis.events[type].push(callback);\n\t}\n\n\temit(type, arg) {\n\t\tif (this.events[type]) {\n\t\t\tthis.events[type].forEach(callback => callback(arg));\n\t\t}\n\t}\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy5qcz9kZWE0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV1QyIsImZpbGUiOiIuL3NyYy9qcy9oZWxwZXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIHByb3BzLCAuLi5jaGlsZHJlbikge1xuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXG5cdE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGtleSA9PiBlbGVtZW50W2tleV0gPSBwcm9wc1trZXldKTtcblxuXHRjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcblx0XHRpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykge1xuXHRcdFx0Y2hpbGQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZCk7XG5cdFx0fVxuXG5cdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG5cdH0pO1xuXG5cdHJldHVybiBlbGVtZW50O1xufVxuXG5jbGFzcyBFdmVudEVtaXR0ZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmV2ZW50cyA9IHt9O1xuXHR9XG5cblx0b24odHlwZSwgY2FsbGJhY2spICB7XG5cdFx0dGhpcy5ldmVudHNbdHlwZV0gPSB0aGlzLmV2ZW50c1t0eXBlXSB8fCBbXTtcblx0XHR0aGlzLmV2ZW50c1t0eXBlXS5wdXNoKGNhbGxiYWNrKTtcblx0fVxuXG5cdGVtaXQodHlwZSwgYXJnKSB7XG5cdFx0aWYgKHRoaXMuZXZlbnRzW3R5cGVdKSB7XG5cdFx0XHR0aGlzLmV2ZW50c1t0eXBlXS5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrKGFyZykpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgeyBjcmVhdGVFbGVtZW50LCBFdmVudEVtaXR0ZXIgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/helpers.js\n");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.js */ \"./src/js/model.js\");\n/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.js */ \"./src/js/view.js\");\n/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller.js */ \"./src/js/controller.js\");\n\n\n\n\n\n\nclass Main {\n\t\n\tconstructor(word) {\n\t\tconsole.log(\"Main.js\");\n\n\t\tthis._model = new _model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\t\tthis._view = new _view_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\t\tthis._controller = new _controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this._model, this._view);\n\t}\n\t\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWE7O0FBRXVCO0FBQ0Q7QUFDTTs7QUFFekM7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsaURBQUs7QUFDekIsbUJBQW1CLGdEQUFJO0FBQ3ZCLHlCQUF5QixzREFBVTtBQUNuQzs7QUFFQTs7QUFFZSxtRUFBSSxFQUFDIiwiZmlsZSI6Ii4vc3JjL2pzL21haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBNb2RlbCAgICAgIGZyb20gJy4vbW9kZWwuanMnO1xuaW1wb3J0IFZpZXcgICAgICAgZnJvbSAnLi92aWV3LmpzJztcbmltcG9ydCBDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlci5qcyc7XG5cbmNsYXNzIE1haW4ge1xuXHRcblx0Y29uc3RydWN0b3Iod29yZCkge1xuXHRcdGNvbnNvbGUubG9nKFwiTWFpbi5qc1wiKTtcblxuXHRcdHRoaXMuX21vZGVsID0gbmV3IE1vZGVsKCk7XG5cdFx0dGhpcy5fdmlldyA9IG5ldyBWaWV3KCk7XG5cdFx0dGhpcy5fY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKHRoaXMuX21vZGVsLCB0aGlzLl92aWV3KTtcblx0fVxuXHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

/***/ }),

/***/ "./src/js/model.js":
/*!*************************!*\
  !*** ./src/js/model.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Model {\n\tconstructor() {\n\t\tconsole.log(\"Model.js\");\n\t\t\n\t\tlet coffeCount = localStorage.getItem('coffe');\n\n\t\tlet startDate = new Date(\"Septemper 1 2019\");\n\t\tlet today = new Date();\n\t    let Difference_In_Time = today.getTime() - startDate.getTime(); \n\t\tlet Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);\n\t\tlet days = Math.floor(Difference_In_Days)\n\n\t\tthis._state = {\n\t\t\t'days': days,\t\n\t\t\t'count': localStorage.getItem('coffe'),\n\t\t};\t\n\t\tconsole.log(this._state);\n\t}\n\n\tgetCoffeeFromCookie() {\n\t\tlet coffeCount = localStorage.getItem('coffe');\n\t\tconsole.log(\"coffe in localStorage: \" + coffeCount);\n\t\tthis._state.count = coffeCount;\n\t\treturn this._state._count;\n\t}\n\n\taddCoffee() {\n\t\tlet coffeCount = localStorage.getItem('coffe');\n\t\tconsole.log(coffeCount);\n\t\tcoffeCount ++ ;\n\t\tconsole.log(coffeCount);\n\t\tlocalStorage.setItem('coffe', coffeCount)\n\t}\n\n\tdelCoffee() {\n\t\tlet coffeCount = localStorage.getItem('coffe');\n\t\tconsole.log(coffeCount);\n\t\tcoffeCount -- ;\n\t\tconsole.log(coffeCount);\n\t\tlocalStorage.setItem('coffe', coffeCount)\n\t}\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Model);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kZWwuanM/M2Y0NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esb0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEk7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZSxvRUFBSyxFQUFDIiwiZmlsZSI6Ii4vc3JjL2pzL21vZGVsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTW9kZWwge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRjb25zb2xlLmxvZyhcIk1vZGVsLmpzXCIpO1xuXHRcdFxuXHRcdGxldCBjb2ZmZUNvdW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvZmZlJyk7XG5cblx0XHRsZXQgc3RhcnREYXRlID0gbmV3IERhdGUoXCJTZXB0ZW1wZXIgMSAyMDE5XCIpO1xuXHRcdGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cdCAgICBsZXQgRGlmZmVyZW5jZV9Jbl9UaW1lID0gdG9kYXkuZ2V0VGltZSgpIC0gc3RhcnREYXRlLmdldFRpbWUoKTsgXG5cdFx0bGV0IERpZmZlcmVuY2VfSW5fRGF5cyA9IERpZmZlcmVuY2VfSW5fVGltZSAvICgxMDAwICogMzYwMCAqIDI0KTtcblx0XHRsZXQgZGF5cyA9IE1hdGguZmxvb3IoRGlmZmVyZW5jZV9Jbl9EYXlzKVxuXG5cdFx0dGhpcy5fc3RhdGUgPSB7XG5cdFx0XHQnZGF5cyc6IGRheXMsXHRcblx0XHRcdCdjb3VudCc6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb2ZmZScpLFxuXHRcdH07XHRcblx0XHRjb25zb2xlLmxvZyh0aGlzLl9zdGF0ZSk7XG5cdH1cblxuXHRnZXRDb2ZmZWVGcm9tQ29va2llKCkge1xuXHRcdGxldCBjb2ZmZUNvdW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvZmZlJyk7XG5cdFx0Y29uc29sZS5sb2coXCJjb2ZmZSBpbiBsb2NhbFN0b3JhZ2U6IFwiICsgY29mZmVDb3VudCk7XG5cdFx0dGhpcy5fc3RhdGUuY291bnQgPSBjb2ZmZUNvdW50O1xuXHRcdHJldHVybiB0aGlzLl9zdGF0ZS5fY291bnQ7XG5cdH1cblxuXHRhZGRDb2ZmZWUoKSB7XG5cdFx0bGV0IGNvZmZlQ291bnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29mZmUnKTtcblx0XHRjb25zb2xlLmxvZyhjb2ZmZUNvdW50KTtcblx0XHRjb2ZmZUNvdW50ICsrIDtcblx0XHRjb25zb2xlLmxvZyhjb2ZmZUNvdW50KTtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29mZmUnLCBjb2ZmZUNvdW50KVxuXHR9XG5cblx0ZGVsQ29mZmVlKCkge1xuXHRcdGxldCBjb2ZmZUNvdW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvZmZlJyk7XG5cdFx0Y29uc29sZS5sb2coY29mZmVDb3VudCk7XG5cdFx0Y29mZmVDb3VudCAtLSA7XG5cdFx0Y29uc29sZS5sb2coY29mZmVDb3VudCk7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvZmZlJywgY29mZmVDb3VudClcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGVsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/model.js\n");

/***/ }),

/***/ "./src/js/view.js":
/*!************************!*\
  !*** ./src/js/view.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./src/js/helpers.js\");\n\n\nclass View extends _helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"EventEmitter\"] {\n\n\tconstructor() {\n\t\tsuper();\n\n\t\tconsole.log(\"View.js\");\n\n\t\tthis._count;\n\t\tthis._totalAmount;\n\t\tthis._days;\n\t\tthis._avrDay;\n\t\tthis._avrTea;\n\t\tthis._gramInCoffee = 20;\n\t\tthis._gramOfMilkInCoffee = 50;\n\t\tthis._lastTime;\n\t\tthis._countElem       = document.getElementById('count');\n\t\tthis._totalAmountElem = document.getElementById('totalAmount');\n\t\tthis._daysElem   = document.getElementById('days');\n\t\tthis._avrDayElem = document.getElementById('avrDay');\n\t\tthis._avrTeaElem = document.getElementById('avrTea');\n\t\tthis._coffeeForDay = document.getElementById('coffeeForDay');\n\t\tthis._lastTimeElem = document.getElementById('lastTime');\n\t\tconsole.log(this._lastTimeElem);\n\n\t\tthis.addCoffBtn  = document.getElementById('addBtn');\n\t\tthis.delCoffBtn  = document.getElementById('delBtn');\n\n\t\tthis.addCoffBtn.addEventListener('click', this.handleAddCoff.bind(this));\n\t\tthis.delCoffBtn.addEventListener('click', this.handleDelCoff.bind(this));\n\n\n\t}\n\n\thandleAddCoff(){\n\t\tconsole.log(\"add\");\n\t\tthis.emit('add', 1);\n\t\t\n\t}\n\thandleDelCoff(){\n\t\tconsole.log(\"del\");\n\t\tthis.emit('del', 1);\n\t\t\n\t}\n\n\tset setViewCoffe(val){\n\t\tthis._count = val;\n\t\tthis._countElem.innerHTML = this._count;\n\t\tthis.setTotalAmount();\n\t}\n\n\tset setViewDays(val) {\n\t\tthis._days = val;\n\t\tthis._daysElem.innerHTML = this._days;\n\t}\n\n\tsetViewAvrCoffeeForDay() {\n\t\tlet temp = this._gramInCoffee + this._gramOfMilkInCoffee;\n\t\ttemp = Math.round(temp * this._avrDay * 100) / 100;\n\t\tthis._coffeeForDay.innerHTML = temp;\n\t}\n\n\tsetAvrDay() {\n\t\tthis._avrDay = this._count / this._days;\n\t\tthis._avrDay = Math.round(this._avrDay * 100) / 100;\n\t\tthis._avrDayElem.innerHTML = this._avrDay;\n\t}\n\n\tsetAvrTea() {\n\t\tthis._avrTea = (10 * (this._avrDay)*20) / 100 ;\n\t\tthis._avrTea = Math.round(this._avrTea * 100) / 100;\n\t\tthis._avrTeaElem.innerHTML = this._avrTea;\n\t}\n\n\tsetTotalAmount() {\n\t\tthis._totalAmount = this._count * 20;\n\t\tthis._totalAmountElem.innerHTML = this._totalAmount;\n\t}\n\n\tsetLastTime() {\n\t\tlet temp = new Date();\n\t\tthis._lastTimeElem.innerHTML = new Date();\n\t}\n\n\taddCoffee(){\n\t\tthis._count++;\n\t\tthis._countElem.innerHTML = this._count;\n\t\tthis.setAvrDay();\n\t\tthis.setAvrTea();\n\t\tthis.setTotalAmount();\n\t\tthis.setLastTime()\n\t}\n\n\tdelCoffee(){\n\t\tthis._count--;\n\t\tthis._countElem.innerHTML = this._count;\n\t\tthis.setAvrDay();\n\t\tthis.setAvrTea();\n\t\tthis.setTotalAmount();\n\t}\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (View);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvdmlldy5qcz8wY2UxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBMkQ7O0FBRTNELG1CQUFtQix3REFBWTs7QUFFL0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWUsbUVBQUksRUFBQyIsImZpbGUiOiIuL3NyYy9qcy92aWV3LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcblxuY2xhc3MgVmlldyBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdGNvbnNvbGUubG9nKFwiVmlldy5qc1wiKTtcblxuXHRcdHRoaXMuX2NvdW50O1xuXHRcdHRoaXMuX3RvdGFsQW1vdW50O1xuXHRcdHRoaXMuX2RheXM7XG5cdFx0dGhpcy5fYXZyRGF5O1xuXHRcdHRoaXMuX2F2clRlYTtcblx0XHR0aGlzLl9ncmFtSW5Db2ZmZWUgPSAyMDtcblx0XHR0aGlzLl9ncmFtT2ZNaWxrSW5Db2ZmZWUgPSA1MDtcblx0XHR0aGlzLl9sYXN0VGltZTtcblx0XHR0aGlzLl9jb3VudEVsZW0gICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnQnKTtcblx0XHR0aGlzLl90b3RhbEFtb3VudEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxBbW91bnQnKTtcblx0XHR0aGlzLl9kYXlzRWxlbSAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RheXMnKTtcblx0XHR0aGlzLl9hdnJEYXlFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F2ckRheScpO1xuXHRcdHRoaXMuX2F2clRlYUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZyVGVhJyk7XG5cdFx0dGhpcy5fY29mZmVlRm9yRGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvZmZlZUZvckRheScpO1xuXHRcdHRoaXMuX2xhc3RUaW1lRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXN0VGltZScpO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuX2xhc3RUaW1lRWxlbSk7XG5cblx0XHR0aGlzLmFkZENvZmZCdG4gID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEJ0bicpO1xuXHRcdHRoaXMuZGVsQ29mZkJ0biAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsQnRuJyk7XG5cblx0XHR0aGlzLmFkZENvZmZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUFkZENvZmYuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5kZWxDb2ZmQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVEZWxDb2ZmLmJpbmQodGhpcykpO1xuXG5cblx0fVxuXG5cdGhhbmRsZUFkZENvZmYoKXtcblx0XHRjb25zb2xlLmxvZyhcImFkZFwiKTtcblx0XHR0aGlzLmVtaXQoJ2FkZCcsIDEpO1xuXHRcdFxuXHR9XG5cdGhhbmRsZURlbENvZmYoKXtcblx0XHRjb25zb2xlLmxvZyhcImRlbFwiKTtcblx0XHR0aGlzLmVtaXQoJ2RlbCcsIDEpO1xuXHRcdFxuXHR9XG5cblx0c2V0IHNldFZpZXdDb2ZmZSh2YWwpe1xuXHRcdHRoaXMuX2NvdW50ID0gdmFsO1xuXHRcdHRoaXMuX2NvdW50RWxlbS5pbm5lckhUTUwgPSB0aGlzLl9jb3VudDtcblx0XHR0aGlzLnNldFRvdGFsQW1vdW50KCk7XG5cdH1cblxuXHRzZXQgc2V0Vmlld0RheXModmFsKSB7XG5cdFx0dGhpcy5fZGF5cyA9IHZhbDtcblx0XHR0aGlzLl9kYXlzRWxlbS5pbm5lckhUTUwgPSB0aGlzLl9kYXlzO1xuXHR9XG5cblx0c2V0Vmlld0F2ckNvZmZlZUZvckRheSgpIHtcblx0XHRsZXQgdGVtcCA9IHRoaXMuX2dyYW1JbkNvZmZlZSArIHRoaXMuX2dyYW1PZk1pbGtJbkNvZmZlZTtcblx0XHR0ZW1wID0gTWF0aC5yb3VuZCh0ZW1wICogdGhpcy5fYXZyRGF5ICogMTAwKSAvIDEwMDtcblx0XHR0aGlzLl9jb2ZmZWVGb3JEYXkuaW5uZXJIVE1MID0gdGVtcDtcblx0fVxuXG5cdHNldEF2ckRheSgpIHtcblx0XHR0aGlzLl9hdnJEYXkgPSB0aGlzLl9jb3VudCAvIHRoaXMuX2RheXM7XG5cdFx0dGhpcy5fYXZyRGF5ID0gTWF0aC5yb3VuZCh0aGlzLl9hdnJEYXkgKiAxMDApIC8gMTAwO1xuXHRcdHRoaXMuX2F2ckRheUVsZW0uaW5uZXJIVE1MID0gdGhpcy5fYXZyRGF5O1xuXHR9XG5cblx0c2V0QXZyVGVhKCkge1xuXHRcdHRoaXMuX2F2clRlYSA9ICgxMCAqICh0aGlzLl9hdnJEYXkpKjIwKSAvIDEwMCA7XG5cdFx0dGhpcy5fYXZyVGVhID0gTWF0aC5yb3VuZCh0aGlzLl9hdnJUZWEgKiAxMDApIC8gMTAwO1xuXHRcdHRoaXMuX2F2clRlYUVsZW0uaW5uZXJIVE1MID0gdGhpcy5fYXZyVGVhO1xuXHR9XG5cblx0c2V0VG90YWxBbW91bnQoKSB7XG5cdFx0dGhpcy5fdG90YWxBbW91bnQgPSB0aGlzLl9jb3VudCAqIDIwO1xuXHRcdHRoaXMuX3RvdGFsQW1vdW50RWxlbS5pbm5lckhUTUwgPSB0aGlzLl90b3RhbEFtb3VudDtcblx0fVxuXG5cdHNldExhc3RUaW1lKCkge1xuXHRcdGxldCB0ZW1wID0gbmV3IERhdGUoKTtcblx0XHR0aGlzLl9sYXN0VGltZUVsZW0uaW5uZXJIVE1MID0gbmV3IERhdGUoKTtcblx0fVxuXG5cdGFkZENvZmZlZSgpe1xuXHRcdHRoaXMuX2NvdW50Kys7XG5cdFx0dGhpcy5fY291bnRFbGVtLmlubmVySFRNTCA9IHRoaXMuX2NvdW50O1xuXHRcdHRoaXMuc2V0QXZyRGF5KCk7XG5cdFx0dGhpcy5zZXRBdnJUZWEoKTtcblx0XHR0aGlzLnNldFRvdGFsQW1vdW50KCk7XG5cdFx0dGhpcy5zZXRMYXN0VGltZSgpXG5cdH1cblxuXHRkZWxDb2ZmZWUoKXtcblx0XHR0aGlzLl9jb3VudC0tO1xuXHRcdHRoaXMuX2NvdW50RWxlbS5pbm5lckhUTUwgPSB0aGlzLl9jb3VudDtcblx0XHR0aGlzLnNldEF2ckRheSgpO1xuXHRcdHRoaXMuc2V0QXZyVGVhKCk7XG5cdFx0dGhpcy5zZXRUb3RhbEFtb3VudCgpO1xuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlldztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/view.js\n");

/***/ })

/******/ });