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

/***/ "./app/assets/scripts/App.js":
/*!***********************************!*\
  !*** ./app/assets/scripts/App.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ \"./app/assets/styles/styles.css\");\n/* harmony import */ var _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/MobileMenu */ \"./app/assets/scripts/modules/MobileMenu.js\");\n \r\n \r\n// if(module.hot){\r\n//     module.hot.accept();\r\n// }\r\n\r\n\r\nlet mobileMenu = new _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_1__.default();\r\n\n\n//# sourceURL=webpack://platinum-travel-sites/./app/assets/scripts/App.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/MobileMenu.js":
/*!**************************************************!*\
  !*** ./app/assets/scripts/modules/MobileMenu.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass MobileMenu{\r\n    constructor(){\r\n        this.menuIcon = document.querySelector(\".site-header__menu-icon\");\r\n        this.menuContent = document.querySelector(\".site-header__menu-content\");\r\n        this.events();\r\n    }\r\n\r\n    events(){\r\n        this.menuIcon.addEventListener(\"click\", () => this.toggleTheMenu() );\r\n    }\r\n\r\n    toggleTheMenu(){\r\n        this.menuContent.classList.toggle(\"site-header__menu-content--is-visible\");\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileMenu);\n\n//# sourceURL=webpack://platinum-travel-sites/./app/assets/scripts/modules/MobileMenu.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./app/assets/styles/styles.css":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./app/assets/styles/styles.css ***!
  \**********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../app/assets/images/testimonials-bg.jpg */ \"./app/assets/images/testimonials-bg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\n\\n/* Document\\n   ========================================================================== */\\n\\n/**\\n * 1. Correct the line height in all browsers.\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\n */\\n\\nhtml {\\n  line-height: 1.15; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n}\\n\\n/* Sections\\n   ========================================================================== */\\n\\n/**\\n * Remove the margin in all browsers.\\n */\\n\\nbody {\\n  margin: 0;\\n}\\n\\n/**\\n * Render the `main` element consistently in IE.\\n */\\n\\nmain {\\n  display: block;\\n}\\n\\n/**\\n * Correct the font size and margin on `h1` elements within `section` and\\n * `article` contexts in Chrome, Firefox, and Safari.\\n */\\n\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0;\\n}\\n\\n/* Grouping content\\n   ========================================================================== */\\n\\n/**\\n * 1. Add the correct box sizing in Firefox.\\n * 2. Show the overflow in Edge and IE.\\n */\\n\\nhr {\\n  box-sizing: content-box; /* 1 */\\n  height: 0; /* 1 */\\n  overflow: visible; /* 2 */\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\npre {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/* Text-level semantics\\n   ========================================================================== */\\n\\n/**\\n * Remove the gray background on active links in IE 10.\\n */\\n\\na {\\n  background-color: transparent;\\n}\\n\\n/**\\n * 1. Remove the bottom border in Chrome 57-\\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n */\\n\\nabbr[title] {\\n  border-bottom: none; /* 1 */\\n  text-decoration: underline; /* 2 */\\n  -webkit-text-decoration: underline dotted;\\n          text-decoration: underline dotted; /* 2 */\\n}\\n\\n/**\\n * Add the correct font weight in Chrome, Edge, and Safari.\\n */\\n\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\ncode,\\nkbd,\\nsamp {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/**\\n * Add the correct font size in all browsers.\\n */\\n\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/**\\n * Prevent `sub` and `sup` elements from affecting the line height in\\n * all browsers.\\n */\\n\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/* Embedded content\\n   ========================================================================== */\\n\\n/**\\n * Remove the border on images inside links in IE 10.\\n */\\n\\nimg {\\n  border-style: none;\\n}\\n\\n/* Forms\\n   ========================================================================== */\\n\\n/**\\n * 1. Change the font styles in all browsers.\\n * 2. Remove the margin in Firefox and Safari.\\n */\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit; /* 1 */\\n  font-size: 100%; /* 1 */\\n  line-height: 1.15; /* 1 */\\n  margin: 0; /* 2 */\\n}\\n\\n/**\\n * Show the overflow in IE.\\n * 1. Show the overflow in Edge.\\n */\\n\\nbutton,\\ninput { /* 1 */\\n  overflow: visible;\\n}\\n\\n/**\\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\\n * 1. Remove the inheritance of text transform in Firefox.\\n */\\n\\nbutton,\\nselect { /* 1 */\\n  text-transform: none;\\n}\\n\\n/**\\n * Correct the inability to style clickable types in iOS and Safari.\\n */\\n\\nbutton,\\n[type=\\\"button\\\"],\\n[type=\\\"reset\\\"],\\n[type=\\\"submit\\\"] {\\n  -webkit-appearance: button;\\n}\\n\\n/**\\n * Remove the inner border and padding in Firefox.\\n */\\n\\nbutton::-moz-focus-inner,\\n[type=\\\"button\\\"]::-moz-focus-inner,\\n[type=\\\"reset\\\"]::-moz-focus-inner,\\n[type=\\\"submit\\\"]::-moz-focus-inner {\\n  border-style: none;\\n  padding: 0;\\n}\\n\\n/**\\n * Restore the focus styles unset by the previous rule.\\n */\\n\\nbutton:-moz-focusring,\\n[type=\\\"button\\\"]:-moz-focusring,\\n[type=\\\"reset\\\"]:-moz-focusring,\\n[type=\\\"submit\\\"]:-moz-focusring {\\n  outline: 1px dotted ButtonText;\\n}\\n\\n/**\\n * Correct the padding in Firefox.\\n */\\n\\nfieldset {\\n  padding: 0.35em 0.75em 0.625em;\\n}\\n\\n/**\\n * 1. Correct the text wrapping in Edge and IE.\\n * 2. Correct the color inheritance from `fieldset` elements in IE.\\n * 3. Remove the padding so developers are not caught out when they zero out\\n *    `fieldset` elements in all browsers.\\n */\\n\\nlegend {\\n  box-sizing: border-box; /* 1 */\\n  color: inherit; /* 2 */\\n  display: table; /* 1 */\\n  max-width: 100%; /* 1 */\\n  padding: 0; /* 3 */\\n  white-space: normal; /* 1 */\\n}\\n\\n/**\\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n */\\n\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/**\\n * Remove the default vertical scrollbar in IE 10+.\\n */\\n\\ntextarea {\\n  overflow: auto;\\n}\\n\\n/**\\n * 1. Add the correct box sizing in IE 10.\\n * 2. Remove the padding in IE 10.\\n */\\n\\n[type=\\\"checkbox\\\"],\\n[type=\\\"radio\\\"] {\\n  box-sizing: border-box; /* 1 */\\n  padding: 0; /* 2 */\\n}\\n\\n/**\\n * Correct the cursor style of increment and decrement buttons in Chrome.\\n */\\n\\n[type=\\\"number\\\"]::-webkit-inner-spin-button,\\n[type=\\\"number\\\"]::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/**\\n * 1. Correct the odd appearance in Chrome and Safari.\\n * 2. Correct the outline style in Safari.\\n */\\n\\n[type=\\\"search\\\"] {\\n  -webkit-appearance: textfield; /* 1 */\\n  outline-offset: -2px; /* 2 */\\n}\\n\\n/**\\n * Remove the inner padding in Chrome and Safari on macOS.\\n */\\n\\n[type=\\\"search\\\"]::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/**\\n * 1. Correct the inability to style clickable types in iOS and Safari.\\n * 2. Change font properties to `inherit` in Safari.\\n */\\n\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button; /* 1 */\\n  font: inherit; /* 2 */\\n}\\n\\n/* Interactive\\n   ========================================================================== */\\n\\n/*\\n * Add the correct display in Edge, IE 10+, and Firefox.\\n */\\n\\ndetails {\\n  display: block;\\n}\\n\\n/*\\n * Add the correct display in all browsers.\\n */\\n\\nsummary {\\n  display: list-item;\\n}\\n\\n/* Misc\\n   ========================================================================== */\\n\\n/**\\n * Add the correct display in IE 10+.\\n */\\n\\ntemplate {\\n  display: none;\\n}\\n\\n/**\\n * Add the correct display in IE 10.\\n */\\n\\n[hidden] {\\n  display: none;\\n}\\n\\nbody {\\r\\n  font-family: \\\"Roboto\\\", sans-serif;\\r\\n  color: #333;\\r\\n}\\n\\nimg {\\r\\n  max-width: 100%;\\r\\n  height: auto;\\r\\n}\\n\\n* {\\r\\n  box-sizing: border-box;\\r\\n}\\n\\na {\\r\\n  color: #d59541;\\r\\n}\\n\\n.large-hero {\\r\\n  border-bottom: 10px solid #2f5572;\\r\\n  position: relative;\\r\\n}\\n\\n.large-hero__image {\\r\\n    display: block;\\r\\n  }\\n\\n.large-hero__text-content {\\r\\n    position: absolute;\\r\\n    top: 50%;\\r\\n    transform: translateY(-50%);\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    text-align: center;\\r\\n  }\\n\\n.large-hero__title {\\r\\n    font-weight: 300;\\r\\n    color: #2f5572;\\r\\n    margin: 0;\\r\\n    font-size: 2rem;\\r\\n  }\\n\\n@media (min-width: 530px) {\\n\\n.large-hero__title {\\r\\n      font-size: 4.8rem\\r\\n  }\\r\\n  }\\n\\n.large-hero__subtitle {\\r\\n    font-weight: 300;\\r\\n    color: #2f5572;\\r\\n    font-size: 1.1rem;\\r\\n    margin: 0;\\r\\n  }\\n\\n@media (min-width: 530px) {\\n\\n.large-hero__subtitle {\\r\\n      font-size: 2.9rem\\r\\n  }\\r\\n  }\\n\\n.large-hero__description {\\r\\n    color: #fff;\\r\\n    font-size: 1.2rem;\\r\\n    font-weight: 100;\\r\\n    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);\\r\\n    max-width: 30rem;\\r\\n    margin-left: auto;\\r\\n    margin-right: auto;\\r\\n  }\\n\\n@media (min-width: 530px) {\\n\\n.large-hero__description {\\r\\n      font-size: 1.875rem\\r\\n  }\\r\\n  }\\n\\n.btn {\\r\\n  background-color: #2f5572;\\r\\n  color: #fff;\\r\\n  text-decoration: none;\\r\\n  padding: 0.75rem 1.2rem;\\r\\n  display: inline-block;\\r\\n}\\n\\n.btn--orange {\\r\\n    background-color: #d59541;\\r\\n  }\\n\\n.btn--large {\\r\\n    padding: 1.1 rem 1.9rem;\\r\\n  }\\n\\n@media (min-width: 530px) {\\n\\n.btn--large {\\r\\n      font-size: 1.25rem\\r\\n  }\\r\\n  }\\n\\n/* #Бүх блокуудаа хийх*/\\n\\n.wrapper {\\n  overflow: hidden;\\n  padding-left: 18px;\\n  padding-right: 18px;\\n  max-width: 1600px;\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\n.wrapper--medium {\\n    max-width: 1300px;\\n  }\\n\\n.wrapper--no-padding-until-medium {\\n    padding-left: 0;\\n    padding-right: 0;\\n  }\\n\\n@media (min-width: 800px) {\\n\\n.wrapper--no-padding-until-medium {\\n      padding-left: 18px;\\n      padding-right: 18px\\n  }\\r\\n  }\\n\\n.wrapper--no-padding-until-large {\\n    padding-left: 0;\\n    padding-right: 0;\\n  }\\n\\n@media (min-width: 1010px) {\\n\\n.wrapper--no-padding-until-large {\\n      padding-left: 18px;\\n      padding-right: 18px\\n  }\\r\\n  }\\n\\n.wrapper .wrapper {\\n    padding-left: 0;\\n    padding-right: 0;\\n  }\\n\\n.wrapper--b-margin {\\n    margin-bottom: 1rem;\\n  }\\n\\n@media (min-width: 530px) {\\n\\n.wrapper--b-margin {\\n      margin-bottom: 4rem\\n  }\\r\\n  }\\n\\n.page-section {\\r\\n  padding: 0.1rem 0;\\r\\n}\\n\\n@media (min-width: 800px) {\\n\\n.page-section {\\r\\n    padding: 4.5rem 0;\\r\\n}\\r\\n  }\\n\\n.page-section--blue {\\r\\n    background-color: #2f5572;\\r\\n    color: #fff;\\r\\n  }\\n\\n.page-section--testimonials {\\r\\n    background-color: #e0e6ef;\\r\\n  }\\n\\n@media (min-width: 1010px) {\\n\\n.page-section--testimonials {\\r\\n      background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat top\\r\\n        center/cover\\r\\n  }\\r\\n  }\\n\\n.headline {\\r\\n  font-weight: 300;\\r\\n  font-size: 2rem;\\r\\n  color: #2f5572;\\r\\n}\\n\\n@media (min-width: 530px) {\\n\\n.headline {\\r\\n    font-size: 2.875rem;\\r\\n}\\r\\n  }\\n\\n.headline--centered {\\r\\n    text-align: center;\\r\\n  }\\n\\n.headline--orange {\\r\\n    color: #d59541;\\r\\n  }\\n\\n.headline--small {\\r\\n    font-size: 1.4rem;\\r\\n  }\\n\\n@media (min-width: 530px) {\\n\\n.headline--small {\\r\\n      font-size: 1.875rem\\r\\n  }\\r\\n  }\\n\\n.headline--narrow {\\r\\n    max-width: 500px;\\r\\n    margin-left: auto;\\r\\n    margin-right: auto;\\r\\n  }\\n\\n.headline--light {\\r\\n    font-weight: 100;\\r\\n  }\\n\\n.headline--b-margin-small {\\r\\n    margin-bottom: 0.5em;\\r\\n  }\\n\\n.headline--b-margin-large {\\r\\n    margin-bottom: 1.6em;\\r\\n  }\\n\\n.headline--no-t-margin {\\r\\n    margin-top: 0;\\r\\n  }\\n\\n.row::after {\\r\\n    content: \\\"\\\";\\r\\n    clear: both;\\r\\n    display: table;\\r\\n  }\\n\\n.row--t-padding {\\n    padding-top: 80px;\\n  }\\n\\n.row--gutters {\\n    margin-right: -65px;\\n  }\\n\\n.row--gutters > div {\\n    padding-right: 65px;\\n  }\\n\\n.row--gutters-small {\\n    margin-right: -45px;\\n  }\\n\\n.row--gutters-small > div {\\n    padding-right: 45px;\\n  }\\n\\n.row--gutters-large {\\n    margin-right: -80px;\\n  }\\n\\n.row--gutters-large > div {\\n    margin-right: 80px;\\n  }\\n\\n/*Хамгийн жижиг дэлгэцнээр medium хүртэл энийг ашиглана.*/\\n\\n.row__b-margin-until-medium {\\n    margin-bottom: 1rem;\\n  }\\n\\n@media (min-width: 800px) {\\n    .row__b-margin-until-medium {\\n      margin-bottom: 0;\\n    }\\n    .row__medium-4 {\\n      float: left;\\n      width: 33.33%;\\n    }\\n\\n    .row__medium-4--larger {\\n      width: 37%;\\n    }\\n\\n    .row__medium-6 {\\n      float: left;\\n      width: 50%;\\n    }\\n\\n    .row__medium-8 {\\n      float: left;\\n      width: 66.67%;\\n    }\\n    .row__medium-8--smaller {\\n      width: 63%;\\n    }\\r\\n  }\\n\\n@media (min-width: 1010px) {\\n    .row__b-margin-until-large {\\n      margin-bottom: 0;\\n    }\\n    .row__large-4 {\\n      float: left;\\n      width: 33.33%;\\n    }\\n\\n    .row__large-4--larger {\\n      width: 37%;\\n    }\\n\\n    .row__large-6 {\\n      float: left;\\n      width: 50%;\\n    }\\n\\n    .row__large-8 {\\n      float: left;\\n      width: 66.67%;\\n    }\\n    .row__large-8--smaller {\\n      width: 63%;\\n    }\\r\\n  }\\n\\n/*Ижил өндөртэй блокуудын стайл*/\\n\\n@media (min-width: 800px) {\\n\\n.row--equal-height-at-medium {\\n      display: flex;\\n  }\\r\\n  }\\n\\n.row--equal-height-at-medium > div {\\n      float: none;\\n      display: flex;\\n    }\\n\\n@media (min-width: 1010px) {\\n\\n.row--equal-height-at-large {\\n      display: flex;\\n  }\\r\\n  }\\n\\n.row--equal-height-at-large > div {\\n      float: none;\\n      display: flex;\\n    }\\n\\n.generic-content-container p {\\n    line-height: 1.65;\\n    margin: 0 0 1.8rem 0;\\n    font-weight: 300;\\n  }\\n\\n@media (min-width: 530px) {\\n\\n.generic-content-container p {\\n      font-size: 1.1rem\\n  }\\r\\n  }\\n\\n/* параграфикийн лигк дотрохыг bold болгох*/\\n\\n.generic-content-container p a {\\n    font-weight: 700;\\n  }\\n\\n.section-title {\\n  font-size: 2rem;\\n  font-weight: 300;\\n  text-align: center;\\n}\\n\\n@media (min-width: 530px) {\\n\\n.section-title {\\n    font-size: 3.5rem;\\n}\\r\\n  }\\n\\n.section-title strong {\\n    font-weight: 500;\\n  }\\n\\n.section-title--icon {\\n    display: block;\\n    margin-left: auto;\\n    margin-right: auto;\\n    margin-bottom: 0.6rem;\\n  }\\n\\n@media (min-width: 530px) {\\n\\n.section-title--icon {\\n      position: relative;\\n      top: 10px;\\n      margin-right: 1.5rem;\\n      margin-left: 0;\\n      margin-bottom: 0;\\n      display: inline-block\\n  }\\r\\n  }\\n\\n.section-title--blue {\\n    color: #2f5572;\\n  }\\n\\n.feature-item {\\n  position: relative;\\n  padding-bottom: 2.5rem;\\n}\\n\\n@media (min-width: 530px) {\\n\\n.feature-item {\\n    padding-left: 95px;\\n}\\r\\n  }\\n\\n.feature-item__icon {\\n    display: block;\\n    margin: 0 auto;\\n  }\\n\\n@media (min-width: 530px) {\\n\\n.feature-item__icon {\\n      position: absolute;\\n      left: 0\\n  }\\r\\n  }\\n\\n.feature-item__title {\\n    font-size: 1.6rem;\\n    font-weight: 300;\\n    margin-top: 0.8rem;\\n    margin-bottom: 0.8rem;\\n    text-align: center;\\n  }\\n\\n@media (min-width: 530px) {\\n\\n.feature-item__title {\\n      font-size: 1.85rem;\\n      text-align: left\\n  }\\r\\n  }\\n\\n.testimonial {\\r\\n  background-color: rgba(255, 255, 255, 0.8);\\r\\n  padding: 0 18px 1px 18px;\\r\\n  margin-bottom: 98px;\\r\\n}\\n\\n@media (min-width: 1010px) {\\n\\n.testimonial {\\r\\n    margin-bottom: 0;\\r\\n    padding: 0 2rem 1px 2rem;\\r\\n}\\r\\n  }\\n\\n.testimonial--last {\\r\\n    margin-bottom: 0;\\r\\n  }\\n\\n.testimonial__photo {\\r\\n    border-radius: 50%;\\r\\n    overflow: hidden;\\r\\n    width: 160px;\\r\\n    height: 160px;\\r\\n    margin: 0 auto -80px auto;\\r\\n    position: relative;\\r\\n    top: -80px;\\r\\n    border: 6px solid rgba(255, 255, 255, 0.8);\\r\\n  }\\n\\n.testimonial__title {\\r\\n    color: #2f5572;\\r\\n    text-align: center;\\r\\n    font-size: 1.5rem;\\r\\n    font-weight: 500;\\r\\n    margin: 0%;\\r\\n  }\\n\\n.testimonial__subtitle {\\r\\n    color: #d59541;\\r\\n    text-align: center;\\r\\n    font-size: 0.9rem;\\r\\n    font-weight: 400;\\r\\n    margin: 0.25rem 0 1rem 0;\\r\\n  }\\n\\n.site-footer {\\r\\n  background-color: #2f5572;\\r\\n  color: #fff;\\r\\n  padding: 0.5rem 0;\\r\\n  text-align: center;\\r\\n}\\n\\n.site-footer__text {\\r\\n    display: block;\\r\\n    margin-bottom: 1rem;\\r\\n  }\\n\\n@media (min-width: 800px) {\\n\\n.site-footer__text {\\r\\n      display: inline;\\r\\n      margin-bottom: 0;\\r\\n      margin-right: 1.5rem;\\r\\n      font-weight: 400\\r\\n  }\\r\\n  }\\n\\n.site-header {\\r\\n  position: absolute;\\r\\n  padding: 10px 0;\\r\\n  width: 100%;\\r\\n  z-index: 2;\\r\\n}\\n\\n@media (min-width: 800px) {\\n\\n.site-header {\\r\\n    background-color: rgba(47, 85, 114, 0.3);\\r\\n}\\r\\n  }\\n\\n.site-header__btn-container {\\r\\n    float: right;\\r\\n  }\\n\\n.site-header__logo {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 50%;\\r\\n    transform: translateX(-50%);\\r\\n    background-color: #2f5572;\\r\\n    padding: 15px 28px;\\r\\n  }\\n\\n@media (min-width: 800px) {\\n\\n.site-header__logo {\\r\\n      left: auto;\\r\\n      transform: translateX(0);\\r\\n      padding: 25px 35px\\r\\n  }\\r\\n  }\\n\\n.site-header__menu-icon {\\r\\n    width: 20px;\\r\\n    height: 20px;\\r\\n    background-color: #fff;\\r\\n    position: absolute;\\r\\n    top: 10px;\\r\\n    right: 10px;\\r\\n  }\\n\\n@media (min-width: 800px) {\\n\\n.site-header__menu-icon {\\r\\n      display: none\\r\\n  }\\r\\n  }\\n\\n.site-header__menu-content {\\r\\n    display: none;\\r\\n  }\\n\\n@media (min-width: 800px) {\\n\\n.site-header__menu-content {\\r\\n      display: block;\\r\\n  }\\r\\n  }\\n\\n.site-header__menu-content--is-visible {\\r\\n      display: block;\\r\\n    }\\n\\n.primary-nav--pull-right {\\r\\n    float: right;\\r\\n  }\\n\\n.primary-nav ul {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n  }\\n\\n.primary-nav ul::after {\\r\\n    content: \\\"\\\";\\r\\n    clear: both;\\r\\n    display: table;\\r\\n  }\\n\\n.primary-nav li {\\r\\n    list-style: none;\\r\\n    float: left;\\r\\n    padding-right: 20px;\\r\\n  }\\n\\n.primary-nav a {\\r\\n    color: #fff;\\r\\n    text-decoration: none;\\r\\n    font-weight: 300;\\r\\n    display: block;\\r\\n    padding: 12px 0;\\r\\n  }\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://platinum-travel-sites/./app/assets/styles/styles.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://platinum-travel-sites/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://platinum-travel-sites/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./app/assets/styles/styles.css":
/*!**************************************!*\
  !*** ./app/assets/styles/styles.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./app/assets/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://platinum-travel-sites/./app/assets/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://platinum-travel-sites/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://platinum-travel-sites/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://platinum-travel-sites/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://platinum-travel-sites/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://platinum-travel-sites/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://platinum-travel-sites/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./app/assets/images/testimonials-bg.jpg":
/*!***********************************************!*\
  !*** ./app/assets/images/testimonials-bg.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b8a3023904d43d8fc1f9.jpg\";\n\n//# sourceURL=webpack://platinum-travel-sites/./app/assets/images/testimonials-bg.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/assets/scripts/App.js");
/******/ 	
/******/ })()
;