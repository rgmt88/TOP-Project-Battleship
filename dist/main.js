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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Reset some basic styling */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Arial', sans-serif;\n    background-color: #ffffff; /* White background */\n    color: #333333; /* Dark gray text color */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    height: 100vh;\n    padding: 20px;\n}\n\nh1 {\n    font-size: 2.5rem;\n    color: #333333; /* Dark gray title color */\n    margin-bottom: 20px;\n}\n\n.container {\n    display: flex;\n    justify-content: space-around;\n    align-items: flex-start;\n    width: 80%;\n    margin-bottom: 30px;\n}\n\n.label {\n    text-align: center;\n    font-weight: bold;\n    margin-bottom: 10px;\n    font-size: 1.2rem;\n    color: #333333;\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(10, 30px);\n    grid-template-rows: repeat(10, 30px);\n    gap: 1px;\n    border: 1px solid #4f4f4f; /* Dark gray border */\n    overflow: hidden;\n}\n\n.board div {\n    width: 30px;\n    height: 30px;\n    border: 1px solid #333333; /* Darker gray border for grid cells */\n    background-color: #f0f0f0; /* Light gray background for grid cells */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 0.3s;\n}\n\n.board div:hover {\n    cursor: pointer;\n    background-color: #cccccc; /* Slightly darker gray on hover */\n}\n\n.board .ship-cell {\n    background-color: #525252; /* Dark gray to represent the ship */\n    border: 1px solid #333333; /* A bit darker border for better visibility */\n}\n\n.board .hit-cell {\n    background-color: red; /* Red to represent a hit */\n}\n\n.board .miss-cell {\n    background-color: #00aaff; /* Blue to represent a miss, like the ocean */\n}\n\n.ships {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 20px;\n}\n\n.ship-grid {\n    display: grid;\n    gap: 1px;\n    margin-bottom: 20px;\n}\n\n#playerCarrierGrid, #opponentCarrierGrid {\n    grid-template-columns: repeat(5, 30px); /* Aircraft Carrier: 5 cells */\n}\n\n#playerBattleshipGrid, #opponentBattleshipGrid {\n    grid-template-columns: repeat(4, 30px); /* Battleship: 4 cells */\n}\n\n#playerCruiserGrid, #opponentCruiserGrid {\n    grid-template-columns: repeat(3, 30px); /* Cruiser: 3 cells */\n}\n\n#playerDestroyerGrid, #opponentDestroyerGrid {\n    grid-template-columns: repeat(2, 30px); /* Destroyer: 2 cells */\n}\n\n#playerSubmarineGrid, #opponentSubmarineGrid {\n    grid-template-columns: repeat(1, 30px); /* Submarine: 1 cell */\n}\n\n.ship-grid div {\n    width: 30px;\n    height: 30px;\n    border: 1px solid #4f4f4f; /* Border for ship grid cells */\n    background-color: #f0f0f0; /* Dark gray for ship grid cells */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 0.3s;\n}\n\n.ship-grid .sunk-cell {\n    background-color: red;\n    opacity: 0.8;\n}\n\n.ship-grid div.hit {\n    background-color: #ff4d6d; /* Red color to indicate a hit */\n}\n\n.ship-grid div:hover {\n    cursor: default; /* No hover effect on ship grids for now */\n}\n\n/* Optional: Adding some animation for hits */\n.ship-grid div.hit {\n    animation: hit 0.5s ease-in-out;\n}\n\n@keyframes hit {\n    0% {\n        transform: scale(1);\n    }\n    50% {\n        transform: scale(1.2);\n        background-color: #ff4d6d;\n    }\n    100% {\n        transform: scale(1);\n        background-color: #ff4d6d;\n    }\n}\n\n/* Responsive Design */\n@media (max-width: 768px) {\n    .container {\n        flex-direction: column;\n        align-items: center;\n        width: 100%;\n    }\n\n    .board, .ship-grid {\n        grid-template-columns: repeat(10, 24px);\n        grid-template-rows: repeat(10, 24px);\n    }\n\n    .board div, .ship-grid div {\n        width: 24px;\n        height: 24px;\n    }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-project-battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-project-battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-project-battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-project-battleship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-project-battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-project-battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-project-battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-project-battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-project-battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-project-battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/attackModule.js":
/*!*****************************!*\
  !*** ./src/attackModule.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkIfGameOver: () => (/* binding */ checkIfGameOver),\n/* harmony export */   computerTurn: () => (/* binding */ computerTurn),\n/* harmony export */   playerAttack: () => (/* binding */ playerAttack),\n/* harmony export */   setupPlayerAttack: () => (/* binding */ setupPlayerAttack)\n/* harmony export */ });\n/* harmony import */ var _playersGrid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playersGrid.js */ \"./src/playersGrid.js\");\n\nfunction setupPlayerAttack(player, playerBoardId, opponent, opponentBoardId) {\n  var opponentBoard = document.getElementById(opponentBoardId);\n  opponentBoard.addEventListener('click', function (event) {\n    var x = parseInt(event.target.dataset.x, 10);\n    var y = parseInt(event.target.dataset.y, 10);\n    if (!event.target.classList.contains('hit-cell') && !event.target.classList.contains('miss-cell')) {\n      playerAttack(x, y, player, playerBoardId, opponent, opponentBoardId);\n    }\n  });\n}\nfunction playerAttack(x, y, player, playerBoardId, opponent, opponentBoardId) {\n  // Player performs the attack on the opponent\n  var result = player.attack(x, y, opponent.board);\n\n  // Update the opponent's board to reflect the result of the attack\n  (0,_playersGrid_js__WEBPACK_IMPORTED_MODULE_0__.playersRenderGrid)(opponent, opponentBoardId);\n\n  // Check if the game is over after the player's attack\n  if (checkIfGameOver(player, opponent)) return;\n\n  // If the player's attack was a hit, they get another turn\n  if (result === 'hit') {\n    // Allow the player to click and attack again\n    return;\n  }\n\n  // If the player's attack was a miss, let the PC (opponent) take a turn after a short delay\n  if (result === 'miss') {\n    setTimeout(function () {\n      computerTurn(opponent, player, playerBoardId);\n    }, 1000); // Give a slight delay before attack\n  }\n}\nfunction computerTurn(opponent, player, playerBoardId) {\n  var result = opponent.randomAttack(player.board);\n\n  // Update the player's board to reflect the result of the PC's attack\n  (0,_playersGrid_js__WEBPACK_IMPORTED_MODULE_0__.playersRenderGrid)(player, playerBoardId);\n\n  // Check if the game is over after the PC's attack\n  if (checkIfGameOver(player, opponent)) return;\n\n  // If the PC hits, it gets another turn\n  if (result === 'hit') {\n    setTimeout(function () {\n      computerTurn(opponent, player, playerBoardId);\n    }, 1000); // Optional delay to simulate thinking time\n  }\n}\n/*so the only thing i think is missing is here \"function computerTurn(opponent, player, playerBoardId) {\n   const result = opponent.randomAttack(player.board);\n   \n   // Update the player's board to reflect the result of the PC's attack\n   playersRenderGrid(player, playerBoardId);\n   \n   // Check if the game is over after the PC's attack\n   if (checkIfGameOver(player, opponent)) return;\n    // If the PC hits, it gets another turn\n   if (result === 'hit') {\n       setTimeout(() => {\n           computerTurn(opponent, player, playerBoardId);\n       }, 1000); // Optional delay to simulate thinking time\n   }\n}\" what happens if the pc misses? */\n\nfunction checkIfGameOver(player, opponent) {\n  if (player.board.allShipsSunk()) {\n    alert('Game Over! The PC wins!');\n    return true;\n  } else if (opponent.board.allShipsSunk()) {\n    alert('Congratulations! You win!');\n    return true;\n  }\n  return false;\n}\n\n\n//# sourceURL=webpack://top-project-battleship/./src/attackModule.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameboard: () => (/* binding */ gameboard)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(r, e) { var t = \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && \"number\" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t[\"return\"] || t[\"return\"](); } finally { if (u) throw o; } } }; }\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\nfunction gameboard() {\n  var gridSize = 10;\n  var ships = [];\n  var missedAttacks = [];\n  var hitCoordinates = [];\n  var occupiedCoordinates = new Set();\n  function isWithinBounds(coordinates) {\n    return coordinates.every(function (_ref) {\n      var _ref2 = _slicedToArray(_ref, 2),\n        x = _ref2[0],\n        y = _ref2[1];\n      return x >= 0 && x < gridSize && y >= 0 && y < gridSize;\n    });\n  }\n  function isOverlapping(coordinates) {\n    return coordinates.some(function (_ref3) {\n      var _ref4 = _slicedToArray(_ref3, 2),\n        x = _ref4[0],\n        y = _ref4[1];\n      return occupiedCoordinates.has(\"\".concat(x, \",\").concat(y));\n    });\n  }\n  return {\n    placeShip: function placeShip(ship, coordinates) {\n      if (!isWithinBounds(coordinates)) {\n        throw new Error(\"Ship placement is out of bounds\");\n      }\n      if (isOverlapping(coordinates)) {\n        throw new Error(\"Ship placement overlaps with another ship\");\n      }\n      ships.push({\n        ship: ship,\n        coordinates: coordinates\n      });\n      coordinates.forEach(function (_ref5) {\n        var _ref6 = _slicedToArray(_ref5, 2),\n          x = _ref6[0],\n          y = _ref6[1];\n        return occupiedCoordinates.add(\"\".concat(x, \",\").concat(y));\n      });\n    },\n    receiveAttack: function receiveAttack(x, y) {\n      var alreadyAttacked = hitCoordinates.some(function (_ref7) {\n        var _ref8 = _slicedToArray(_ref7, 2),\n          hitX = _ref8[0],\n          hitY = _ref8[1];\n        return hitX === x && hitY == y;\n      }) || missedAttacks.some(function (_ref9) {\n        var _ref10 = _slicedToArray(_ref9, 2),\n          missX = _ref10[0],\n          missY = _ref10[1];\n        return missX === x && missY === y;\n      });\n      if (alreadyAttacked) {\n        return \"already attacked\";\n      }\n      var hitShip = null;\n      for (var _i = 0, _ships = ships; _i < _ships.length; _i++) {\n        var _ships$_i = _ships[_i],\n          ship = _ships$_i.ship,\n          coordinates = _ships$_i.coordinates;\n        var _iterator = _createForOfIteratorHelper(coordinates),\n          _step;\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var _step$value = _slicedToArray(_step.value, 2),\n              coordX = _step$value[0],\n              coordY = _step$value[1];\n            if (coordX === x && coordY === y) {\n              ship.hit();\n              hitCoordinates.push([x, y]);\n              hitShip = ship;\n              break;\n            }\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n        if (hitShip) break;\n      }\n      if (!hitShip) {\n        missedAttacks.push([x, y]);\n      }\n      return hitShip ? \"hit\" : \"miss\";\n    },\n    allShipsSunk: function allShipsSunk() {\n      return ships.every(function (_ref11) {\n        var ship = _ref11.ship;\n        return ship.isSunk();\n      });\n    },\n    getMissedAttacks: function getMissedAttacks() {\n      return missedAttacks;\n    },\n    getHitCoordinates: function getHitCoordinates() {\n      return hitCoordinates;\n    },\n    getShips: function getShips() {\n      return ships;\n    }\n  };\n}\n\n\n//# sourceURL=webpack://top-project-battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _playersGrid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playersGrid.js */ \"./src/playersGrid.js\");\n/* harmony import */ var _infoShipGrid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./infoShipGrid.js */ \"./src/infoShipGrid.js\");\n/* harmony import */ var _placeShips_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./placeShips.js */ \"./src/placeShips.js\");\n/* harmony import */ var _attackModule_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attackModule.js */ \"./src/attackModule.js\");\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function (event) {\n  // Create player and opponent instances\n  var playerInstance = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.player)();\n  var opponentInstance = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.player)(true);\n\n  // Initial grid rendering\n  (0,_playersGrid_js__WEBPACK_IMPORTED_MODULE_2__.playersRenderGrid)(playerInstance, 'playerBoard');\n  (0,_playersGrid_js__WEBPACK_IMPORTED_MODULE_2__.playersRenderGrid)(opponentInstance, 'opponentBoard');\n\n  // Place ships and update the grid\n  (0,_placeShips_js__WEBPACK_IMPORTED_MODULE_4__.placeShips)(playerInstance, 'playerBoard');\n  (0,_placeShips_js__WEBPACK_IMPORTED_MODULE_4__.placeShips)(opponentInstance, 'opponentBoard');\n\n  // Update ship grids to reflect initial placement\n  (0,_infoShipGrid_js__WEBPACK_IMPORTED_MODULE_3__.updateShipGrids)(playerInstance, true);\n  (0,_infoShipGrid_js__WEBPACK_IMPORTED_MODULE_3__.updateShipGrids)(opponentInstance, false);\n  (0,_attackModule_js__WEBPACK_IMPORTED_MODULE_5__.setupPlayerAttack)(playerInstance, 'playerBoard', opponentInstance, 'opponentBoard');\n});\n\n//# sourceURL=webpack://top-project-battleship/./src/index.js?");

/***/ }),

/***/ "./src/infoShipGrid.js":
/*!*****************************!*\
  !*** ./src/infoShipGrid.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateShipGrids: () => (/* binding */ updateShipGrids)\n/* harmony export */ });\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\nfunction createShipGrid(shipGridElement, length) {\n  var isSunk = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  var hitIndexes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];\n  var isPlayer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;\n  // Clear existing grid\n  shipGridElement.innerHTML = '';\n  for (var i = 0; i < length; i++) {\n    var cell = document.createElement('div');\n    // Assign a unique index to each cell\n    cell.dataset.index = i;\n    if (isSunk) {\n      // Add a class to represent a sunk ship\n      cell.classList.add('sunk-cell');\n    }\n    if (isPlayer && hitIndexes.includes(i)) {\n      // Add a class to represent a hit part of the ship, but only for the player\n      cell.classList.add('hit-cell');\n    }\n    shipGridElement.appendChild(cell);\n  }\n}\nfunction updateShipGrids(player) {\n  var isPlayer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n  var prefix = isPlayer ? 'player' : 'opponent';\n  var shipGrids = [{\n    elementId: \"\".concat(prefix, \"CarrierGrid\"),\n    length: 5\n  }, {\n    elementId: \"\".concat(prefix, \"BattleshipGrid\"),\n    length: 4\n  }, {\n    elementId: \"\".concat(prefix, \"CruiserGrid\"),\n    length: 3\n  }, {\n    elementId: \"\".concat(prefix, \"DestroyerGrid\"),\n    length: 2\n  }, {\n    elementId: \"\".concat(prefix, \"SubmarineGrid\"),\n    length: 1\n  }];\n  var ships = player.board.getShips();\n  ships.forEach(function (shipData, index) {\n    var ship = shipData.ship,\n      coordinates = shipData.coordinates;\n    var isSunk = ship.isSunk();\n\n    // Determine which parts of the ship have been hit\n    var hitIndexes = coordinates.reduce(function (acc, _ref, idx) {\n      var _ref2 = _slicedToArray(_ref, 2),\n        x = _ref2[0],\n        y = _ref2[1];\n      if (player.board.getHitCoordinates().some(function (_ref3) {\n        var _ref4 = _slicedToArray(_ref3, 2),\n          hitX = _ref4[0],\n          hitY = _ref4[1];\n        return hitX === x && hitY === y;\n      })) {\n        acc.push(idx);\n      }\n      return acc;\n    }, []);\n    var _shipGrids$index = shipGrids[index],\n      elementId = _shipGrids$index.elementId,\n      length = _shipGrids$index.length;\n    var shipGridElement = document.getElementById(elementId);\n    createShipGrid(shipGridElement, length, isSunk, hitIndexes, isPlayer);\n  });\n}\n\n\n//# sourceURL=webpack://top-project-battleship/./src/infoShipGrid.js?");

/***/ }),

/***/ "./src/placeShips.js":
/*!***************************!*\
  !*** ./src/placeShips.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   placeShips: () => (/* binding */ placeShips)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _playersGrid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playersGrid.js */ \"./src/playersGrid.js\");\n\n\nfunction placeShips(player, boardId) {\n  var carrier = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.ship)(5);\n  var battleship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.ship)(4);\n  var cruiser = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.ship)(3);\n  var destroyer = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.ship)(2);\n  var submarine = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.ship)(1);\n\n  // Place ships on the board\n  player.board.placeShip(carrier, [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5]]);\n  player.board.placeShip(battleship, [[1, 1], [1, 2], [1, 3], [1, 4]]);\n  player.board.placeShip(cruiser, [[2, 1], [2, 2], [2, 3]]);\n  player.board.placeShip(destroyer, [[3, 1], [3, 2]]);\n  player.board.placeShip(submarine, [[4, 0]]);\n\n  // Display ships on the player's grid\n  (0,_playersGrid_js__WEBPACK_IMPORTED_MODULE_1__.playersRenderGrid)(player, boardId);\n}\n\n\n//# sourceURL=webpack://top-project-battleship/./src/placeShips.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   player: () => (/* binding */ player)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n\nfunction player() {\n  var isComputer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n  var board = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.gameboard)();\n  function attack(x, y, opponentGameboard) {\n    return opponentGameboard.receiveAttack(x, y);\n  }\n  function randomAttack(opponentGameboard) {\n    var x, y, attackResult;\n    do {\n      x = Math.floor(Math.random() * 10);\n      y = Math.floor(Math.random() * 10);\n      attackResult = attack(x, y, opponentGameboard);\n    } while (attackResult === \"already attacked\");\n    return attackResult;\n  }\n  return {\n    board: board,\n    attack: attack,\n    randomAttack: isComputer ? randomAttack : null\n  };\n}\n\n\n//# sourceURL=webpack://top-project-battleship/./src/player.js?");

/***/ }),

/***/ "./src/playersGrid.js":
/*!****************************!*\
  !*** ./src/playersGrid.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   playersRenderGrid: () => (/* binding */ playersRenderGrid)\n/* harmony export */ });\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\nfunction playersRenderGrid(player, boardId) {\n  var boardElement = document.getElementById(boardId);\n  // Clear existing grid\n  boardElement.innerHTML = '';\n  var isOpponentBoard = boardId === 'opponentBoard';\n  var _loop = function _loop(i) {\n    var _loop2 = function _loop2(j) {\n      var cell = document.createElement('div');\n      cell.dataset.x = i;\n      cell.dataset.y = j;\n\n      // Check if there's a ship at this coordinate\n      var hasShip = player.board.getShips().some(function (_ref) {\n        var coordinates = _ref.coordinates;\n        return coordinates.some(function (_ref2) {\n          var _ref3 = _slicedToArray(_ref2, 2),\n            x = _ref3[0],\n            y = _ref3[1];\n          return x === i && y === j;\n        });\n      });\n\n      // Check if there's a hit at this coordinate\n      var isHit = player.board.getHitCoordinates().some(function (_ref4) {\n        var _ref5 = _slicedToArray(_ref4, 2),\n          x = _ref5[0],\n          y = _ref5[1];\n        return x === i && y === j;\n      });\n\n      // Check if there's a missed attack at this coordinate\n      var isMiss = player.board.getMissedAttacks().some(function (_ref6) {\n        var _ref7 = _slicedToArray(_ref6, 2),\n          x = _ref7[0],\n          y = _ref7[1];\n        return x === i && y === j;\n      });\n      if (hasShip && !isOpponentBoard) {\n        // Add ship class only if it's not the opponent's board\n        cell.classList.add('ship-cell');\n      }\n      if (isHit) {\n        // Add hit class\n        cell.classList.add('hit-cell');\n      }\n      if (isMiss) {\n        // Add miss class\n        cell.classList.add('miss-cell');\n      }\n      boardElement.appendChild(cell);\n    };\n    for (var j = 0; j < 10; j++) {\n      _loop2(j);\n    }\n  };\n  for (var i = 0; i < 10; i++) {\n    _loop(i);\n  }\n}\n\n\n//# sourceURL=webpack://top-project-battleship/./src/playersGrid.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ship: () => (/* binding */ ship)\n/* harmony export */ });\nfunction ship(length) {\n  var shipLength = length;\n  var hits = 0;\n  return {\n    length: shipLength,\n    hit: function hit() {\n      if (hits < shipLength) {\n        hits++;\n        return hits;\n      } else {\n        throw new Error(\"Maximum hits reached\");\n      }\n      ;\n    },\n    getHits: function getHits() {\n      return hits;\n    },\n    isSunk: function isSunk() {\n      return hits === shipLength;\n    }\n  };\n}\n\n\n//# sourceURL=webpack://top-project-battleship/./src/ship.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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