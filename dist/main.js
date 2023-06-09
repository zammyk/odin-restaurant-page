/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContact\": () => (/* binding */ loadContact)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n\n\nfunction loadContact(node) {\n  node.removeAttribute(\"class\");\n  [\"container\", \"flex-col\"].forEach(function (className) {\n    node.classList.add(className);\n  });\n  node.appendChild((0,_helper__WEBPACK_IMPORTED_MODULE_0__.elementFactory)(\"div\", [\"phone\"], \"☎️ +91 123 456 7890\", []));\n  node.appendChild((0,_helper__WEBPACK_IMPORTED_MODULE_0__.elementFactory)(\"div\", [\"address\"], \"🏠 4 Privet Drive\", []));\n  node.appendChild(\n    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createImage)(\"./../assets/restaurant-location.png\", \"Restaurant Location\")\n  );\n}\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createImage\": () => (/* binding */ createImage),\n/* harmony export */   \"elementFactory\": () => (/* binding */ elementFactory)\n/* harmony export */ });\nfunction elementFactory(type, classes, text, children) {\n  const ele = document.createElement(type);\n\n  if (classes.length > 0) {\n    classes.forEach((cls) => {\n      ele.classList.add(cls);\n    });\n  }\n\n  if (text != \"\") ele.textContent = text;\n\n  if (children.length > 0) {\n    children.forEach((child) => {\n      ele.appendChild(child);\n    });\n  }\n\n  return ele;\n}\n\nfunction createImage(src, alt) {\n  const img = document.createElement(\"img\");\n  img.src = src;\n  img.alt = alt;\n  return img;\n}\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/helper.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHome\": () => (/* binding */ loadHome)\n/* harmony export */ });\nconst heading = document.createElement(\"div\");\nheading.classList.add(\"heading\");\nheading.textContent = \"Cantinae's Pizzaria\";\n\nconst about = document.createElement(\"div\");\nabout.classList.add(\"about\");\nabout.textContent =\n  \"We serve pizza's like you've never had before.\\nEat it like you mean it!\";\n\nconst img = document.createElement(\"img\");\nimg.src = \"./../assets/chef.jpg\";\nimg.alt = \"Chef Image\";\n\nconst imgContainer = document.createElement(\"div\");\nimgContainer.classList.add(\"image-container\");\nimgContainer.appendChild(img);\n\nconst link = document.createElement(\"a\");\nlink.href = \"https://bit.ly/3dV6cFr\";\nlink.textContent = \"Order Now!\";\n\nconst linkDiv = document.createElement(\"div\");\nlinkDiv.classList.add(\"link\");\nlinkDiv.appendChild(link);\n\nfunction loadHome(node) {\n  node.removeAttribute(\"class\");\n  [\"container\", \"flex-col\"].forEach(function (className) {\n    node.classList.add(className);\n  });\n  node.appendChild(heading);\n  node.appendChild(about);\n  node.appendChild(imgContainer);\n  node.appendChild(linkDiv);\n}\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction deleteAllChildren(node) {\n  while (node.firstChild != null) node.removeChild(node.firstChild);\n}\n\nconst contentContainer = document.getElementById(\"content\").children[0];\nconst home = document.getElementById(\"home\");\nconst menu = document.getElementById(\"menu\");\nconst contact = document.getElementById(\"contact\");\n\nlet currPage = home;\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)(contentContainer);\nhome.addEventListener(\"click\", (event) => {\n  if (currPage === home) return;\n  currPage = home;\n  deleteAllChildren(contentContainer);\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)(contentContainer);\n});\nmenu.addEventListener(\"click\", (event) => {\n  if (currPage === menu) return;\n  currPage = menu;\n  deleteAllChildren(contentContainer);\n  (0,_menu__WEBPACK_IMPORTED_MODULE_1__.loadMenu)(contentContainer);\n});\ncontact.addEventListener(\"click\", (event) => {\n  if (currPage === contact) return;\n  currPage = contact;\n  deleteAllChildren(contentContainer);\n  (0,_contact__WEBPACK_IMPORTED_MODULE_2__.loadContact)(contentContainer);\n});\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenu\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n\n\nfunction createCard(name, price, description) {\n  const nameEle = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.elementFactory)(\"div\", [\"item-name\"], name, []);\n  const priceEle = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.elementFactory)(\"div\", [\"item-price\"], price, []);\n  const descriptionEle = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.elementFactory)(\n    \"div\",\n    [\"item-description\"],\n    description,\n    []\n  );\n\n  const card = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.elementFactory)(\"div\", [\"card\"], \"\", [\n    nameEle,\n    priceEle,\n    descriptionEle,\n  ]);\n  return card;\n}\n\nfunction createFieldSet(legendName, children) {\n  const legend = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.elementFactory)(\"legend\", [], legendName, []);\n  children.push(legend);\n  const fieldset = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.elementFactory)(\"fieldset\", [\"flex-col\"], \"\", children);\n  return fieldset;\n}\n\nfunction createImageContainer(src, alt, name) {\n  const img = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createImage)(src, alt);\n  const title = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.elementFactory)(\"div\", [\"name\"], name, []);\n  const imgContainer = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.elementFactory)(\"div\", [\"image-container\"], \"\", [\n    img,\n    title,\n  ]);\n  return imgContainer;\n}\n\nfunction loadMenu(node) {\n  node.removeAttribute(\"class\");\n  [\"container\", \"grid\", \"remove-top-padding\", \"no-gap\"].forEach(function (\n    className\n  ) {\n    node.classList.add(className);\n  });\n  const items = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.elementFactory)(\"div\", [\"items\", \"flex-col\"], \"\", [\n    createFieldSet(\"Pizza\", [\n      createCard(\n        \"Pepperoni\",\n        69,\n        \"Tomato sauce, mozarella, pork pepperoni, parmesan\"\n      ),\n      createCard(\n        \"Margherita\",\n        69,\n        \"Tomato sauce, mozarella, cheddar, parmesan, basil\"\n      ),\n      createCard(\n        \"Pesto Besto\",\n        69,\n        \"Basil pesto, mozarella, cherry tomatoes, courgette, mushrooms, caramelized onions, parmesan, fresh basil\"\n      ),\n      createCard(\n        \"Chicken Chilli Freak\",\n        69,\n        \"Chilli freak sauce, mozarella, cheddar, pulled chicken, chillies, jalapeño, minty yoghurt, lime\"\n      ),\n    ]),\n    createFieldSet(\"Pizza\", [\n      createCard(\n        \"Brocolli Caesar\",\n        69,\n        \"Romaine lettuce, brocolli, croutons, red onions, toasted hazelnuts, parmesan, caesar dressing\"\n      ),\n      createCard(\"Caprese\", 69, \"Mixed tomatoes, baby mozarella, basil\"),\n      createCard(\n        \"Jamie's Waldorf\",\n        69,\n        \"Romaine and radicchio lettuce, rocket grapes, apples, celery, walnuts, feta dressing\"\n      ),\n    ]),\n    createFieldSet(\"Pizza\", [\n      createCard(\"Garlic Bread\", 69, \"Sundried tomatoes & olive tapenade\"),\n      createCard(\n        \"Tomato Bruschetta\",\n        69,\n        \"Slow roasted cherry tomatoes, whipped ricotta, basil, garlic\"\n      ),\n      createCard(\n        \"Pizza Puffs\",\n        69,\n        \"Fried pizza dough with Tomato dipping sauce\"\n      ),\n    ]),\n  ]);\n  const images = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.elementFactory)(\"div\", [\"images\", \"flex-col\"], \"\", [\n    createImageContainer(\"./../assets/pizza-pepperoni.jpg\", \"ALT\", \"some name\"),\n    createImageContainer(\"./../assets/pizza-pepperoni.jpg\", \"ALT\", \"some name\"),\n    createImageContainer(\"./../assets/pizza-pepperoni.jpg\", \"ALT\", \"some name\"),\n    createImageContainer(\"./../assets/pizza-pepperoni.jpg\", \"ALT\", \"some name\"),\n  ]);\n  node.appendChild(items);\n  node.appendChild(images);\n}\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;