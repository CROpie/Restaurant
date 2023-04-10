/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ \"./node_modules/css-loader/dist/runtime/sourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --main-color: blue;\\n}\\n\\n/* common */\\n\\n* {\\n    margin: 0px;\\n    padding: 0px 0.5rem;\\n    box-sizing: border-box;\\n    font-family: system-ui;\\n}\\n\\nbody {\\n    background-color: black;\\n}\\n\\n#header {\\n    display: flex;\\n    justify-content: center;\\n    padding: 0.5rem;\\n    margin-bottom: 1rem;\\n    gap: 1.5rem;\\n    background-color: black;\\n}\\n\\n.header-button,\\n.input-button {\\n    border: 2px solid var(--main-color);\\n    border-radius: 10px;\\n    color: white;\\n    background-color: black;\\n    padding: 0.5rem;\\n}\\n\\n.header-button:hover,\\n.input-button:hover {\\n    background-color: rgb(200, 179, 235);\\n    color: black;\\n}\\n\\n.header-button {\\n    font-size: 1.5rem;\\n    width: 15ch;\\n}\\n\\n#footer {\\n    background-color: black;\\n    color: white;\\n    font-size: 0.5rem;\\n}\\n\\n.longtext {\\n    text-align: justify;\\n    font-size: 1.5rem;\\n    margin-bottom: 1rem;\\n}\\n\\n/* indexPage */\\n\\n/* introPage (welcomePage) */\\n\\n.introPage {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    background-color: black;\\n}\\n\\n.introPage > * {\\n    color: white;\\n}\\n\\n#logo {\\n    height: 206px;\\n    width: 206px;\\n}\\n\\n.title {\\n    font-size: 2.5rem;\\n}\\n\\n.tagline {\\n    font-size: 1.5rem;\\n    margin-bottom: 2rem;\\n}\\n\\n#info-container {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n    align-items: center;\\n    justify-content: center;\\n    margin-left: 10%;\\n    margin-right: 10%;\\n    gap: 1rem;\\n    width: clamp(500px, 100%, 1000px);\\n}\\n\\n.open-times {\\n    white-space: pre-line;\\n    font-size: 2rem;\\n}\\n\\n#info-container > * {\\n}\\n\\n.atmosphere-pic {\\n    width: max(250px, 100%);\\n    margin-bottom: 0.5rem;\\n}\\n\\n/* selectionPage (menuPage) */\\n\\n.selection-page {\\n    color: white;\\n}\\n\\n#selection-title {\\n    margin-bottom: 1rem;\\n    text-align: center;\\n}\\n\\n#beer-container {\\n    display: grid;\\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\\n    gap: 1rem;\\n\\n}\\n\\n#beer-container > *:hover {\\n    box-shadow: 0 0 35px 1px var(--main-color);\\n    border-radius: 10px;\\n}\\n\\n#beer-container > * {\\n    border: 3px solid black;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    flex: 0;\\n    padding: 0.5rem;\\n    gap: 0.5rem;\\n\\n}\\n\\n.beer-image {\\n    height: 231px;\\n    width: 100px;\\n}\\n\\n.beer-title {\\n    font-size: 24px;\\n    color: var(--main-color);\\n\\n}\\n\\n.beer-text {\\n    text-align: justify;\\n}\\n/* contactPage */\\n\\n.contact-page {\\n    color: white;\\n    margin-left: 10%;\\n    margin-right: 10%;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n\\n.contact-title {\\n    margin-bottom: 1rem;\\n}\\n\\n#form-container {\\n    border: 2px solid blue;\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n    grid-template-rows: 1fr 1fr 1fr;\\n    gap: 0.5rem;\\n    margin-bottom: 2rem;\\n    flex: 1;\\n    width: max(500px, 100%);\\n}\\n\\n.input-div {\\n    margin-bottom: 0.5rem;\\n    width: 100%;\\n}\\n\\n.input-div > * {\\n    padding: 0.5rem;\\n    width: 90%;\\n}\\n\\n.button-div {\\n    grid-column: 1 / span 2;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n.input-button {\\n    width: 50%;\\n    padding: 0.5rem;\\n}\\n\\n#google-map {\\n    margin-bottom: 2rem;\\n    max-width: 763px;\\n    flex: 1;\\n}\\n\\n.details {\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://./src/style.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,kBAAkB;AACtB;;AAEA,WAAW;;AAEX;IACI,WAAW;IACX,mBAAmB;IACnB,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,mBAAmB;IACnB,WAAW;IACX,uBAAuB;AAC3B;;AAEA;;IAEI,mCAAmC;IACnC,mBAAmB;IACnB,YAAY;IACZ,uBAAuB;IACvB,eAAe;AACnB;;AAEA;;IAEI,oCAAoC;IACpC,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA,cAAc;;AAEd,4BAA4B;;AAE5B;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;IAChB,iBAAiB;IACjB,SAAS;IACT,iCAAiC;AACrC;;AAEA;IACI,qBAAqB;IACrB,eAAe;AACnB;;AAEA;AACA;;AAEA;IACI,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA,6BAA6B;;AAE7B;IACI,YAAY;AAChB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,2DAA2D;IAC3D,SAAS;;AAEb;;AAEA;IACI,0CAA0C;IAC1C,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,OAAO;IACP,eAAe;IACf,WAAW;;AAEf;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,wBAAwB;;AAE5B;;AAEA;IACI,mBAAmB;AACvB;AACA,gBAAgB;;AAEhB;IACI,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,8BAA8B;IAC9B,+BAA+B;IAC/B,WAAW;IACX,mBAAmB;IACnB,OAAO;IACP,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;IACrB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,UAAU;AACd;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,OAAO;AACX;;AAEA;AACA\",\"sourcesContent\":[\":root {\\n    --main-color: blue;\\n}\\n\\n/* common */\\n\\n* {\\n    margin: 0px;\\n    padding: 0px 0.5rem;\\n    box-sizing: border-box;\\n    font-family: system-ui;\\n}\\n\\nbody {\\n    background-color: black;\\n}\\n\\n#header {\\n    display: flex;\\n    justify-content: center;\\n    padding: 0.5rem;\\n    margin-bottom: 1rem;\\n    gap: 1.5rem;\\n    background-color: black;\\n}\\n\\n.header-button,\\n.input-button {\\n    border: 2px solid var(--main-color);\\n    border-radius: 10px;\\n    color: white;\\n    background-color: black;\\n    padding: 0.5rem;\\n}\\n\\n.header-button:hover,\\n.input-button:hover {\\n    background-color: rgb(200, 179, 235);\\n    color: black;\\n}\\n\\n.header-button {\\n    font-size: 1.5rem;\\n    width: 15ch;\\n}\\n\\n#footer {\\n    background-color: black;\\n    color: white;\\n    font-size: 0.5rem;\\n}\\n\\n.longtext {\\n    text-align: justify;\\n    font-size: 1.5rem;\\n    margin-bottom: 1rem;\\n}\\n\\n/* indexPage */\\n\\n/* introPage (welcomePage) */\\n\\n.introPage {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    background-color: black;\\n}\\n\\n.introPage > * {\\n    color: white;\\n}\\n\\n#logo {\\n    height: 206px;\\n    width: 206px;\\n}\\n\\n.title {\\n    font-size: 2.5rem;\\n}\\n\\n.tagline {\\n    font-size: 1.5rem;\\n    margin-bottom: 2rem;\\n}\\n\\n#info-container {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n    align-items: center;\\n    justify-content: center;\\n    margin-left: 10%;\\n    margin-right: 10%;\\n    gap: 1rem;\\n    width: clamp(500px, 100%, 1000px);\\n}\\n\\n.open-times {\\n    white-space: pre-line;\\n    font-size: 2rem;\\n}\\n\\n#info-container > * {\\n}\\n\\n.atmosphere-pic {\\n    width: max(250px, 100%);\\n    margin-bottom: 0.5rem;\\n}\\n\\n/* selectionPage (menuPage) */\\n\\n.selection-page {\\n    color: white;\\n}\\n\\n#selection-title {\\n    margin-bottom: 1rem;\\n    text-align: center;\\n}\\n\\n#beer-container {\\n    display: grid;\\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\\n    gap: 1rem;\\n\\n}\\n\\n#beer-container > *:hover {\\n    box-shadow: 0 0 35px 1px var(--main-color);\\n    border-radius: 10px;\\n}\\n\\n#beer-container > * {\\n    border: 3px solid black;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    flex: 0;\\n    padding: 0.5rem;\\n    gap: 0.5rem;\\n\\n}\\n\\n.beer-image {\\n    height: 231px;\\n    width: 100px;\\n}\\n\\n.beer-title {\\n    font-size: 24px;\\n    color: var(--main-color);\\n\\n}\\n\\n.beer-text {\\n    text-align: justify;\\n}\\n/* contactPage */\\n\\n.contact-page {\\n    color: white;\\n    margin-left: 10%;\\n    margin-right: 10%;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n\\n.contact-title {\\n    margin-bottom: 1rem;\\n}\\n\\n#form-container {\\n    border: 2px solid blue;\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n    grid-template-rows: 1fr 1fr 1fr;\\n    gap: 0.5rem;\\n    margin-bottom: 2rem;\\n    flex: 1;\\n    width: max(500px, 100%);\\n}\\n\\n.input-div {\\n    margin-bottom: 0.5rem;\\n    width: 100%;\\n}\\n\\n.input-div > * {\\n    padding: 0.5rem;\\n    width: 90%;\\n}\\n\\n.button-div {\\n    grid-column: 1 / span 2;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n.input-button {\\n    width: 50%;\\n    padding: 0.5rem;\\n}\\n\\n#google-map {\\n    margin-bottom: 2rem;\\n    max-width: 763px;\\n    flex: 1;\\n}\\n\\n.details {\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NyYy9zdHlsZS5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsaURBQWlELHlCQUF5QixHQUFHLHVCQUF1QixrQkFBa0IsMEJBQTBCLDZCQUE2Qiw2QkFBNkIsR0FBRyxVQUFVLDhCQUE4QixHQUFHLGFBQWEsb0JBQW9CLDhCQUE4QixzQkFBc0IsMEJBQTBCLGtCQUFrQiw4QkFBOEIsR0FBRyxvQ0FBb0MsMENBQTBDLDBCQUEwQixtQkFBbUIsOEJBQThCLHNCQUFzQixHQUFHLGdEQUFnRCwyQ0FBMkMsbUJBQW1CLEdBQUcsb0JBQW9CLHdCQUF3QixrQkFBa0IsR0FBRyxhQUFhLDhCQUE4QixtQkFBbUIsd0JBQXdCLEdBQUcsZUFBZSwwQkFBMEIsd0JBQXdCLDBCQUEwQixHQUFHLG9FQUFvRSxvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsR0FBRyxvQkFBb0IsbUJBQW1CLEdBQUcsV0FBVyxvQkFBb0IsbUJBQW1CLEdBQUcsWUFBWSx3QkFBd0IsR0FBRyxjQUFjLHdCQUF3QiwwQkFBMEIsR0FBRyxxQkFBcUIsb0JBQW9CLHFDQUFxQywwQkFBMEIsOEJBQThCLHVCQUF1Qix3QkFBd0IsZ0JBQWdCLHdDQUF3QyxHQUFHLGlCQUFpQiw0QkFBNEIsc0JBQXNCLEdBQUcseUJBQXlCLEdBQUcscUJBQXFCLDhCQUE4Qiw0QkFBNEIsR0FBRyx1REFBdUQsbUJBQW1CLEdBQUcsc0JBQXNCLDBCQUEwQix5QkFBeUIsR0FBRyxxQkFBcUIsb0JBQW9CLGtFQUFrRSxnQkFBZ0IsS0FBSywrQkFBK0IsaURBQWlELDBCQUEwQixHQUFHLHlCQUF5Qiw4QkFBOEIsb0JBQW9CLDZCQUE2QiwwQkFBMEIsY0FBYyxzQkFBc0Isa0JBQWtCLEtBQUssaUJBQWlCLG9CQUFvQixtQkFBbUIsR0FBRyxpQkFBaUIsc0JBQXNCLCtCQUErQixLQUFLLGdCQUFnQiwwQkFBMEIsR0FBRyxzQ0FBc0MsbUJBQW1CLHVCQUF1Qix3QkFBd0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIsR0FBRyxvQkFBb0IsMEJBQTBCLEdBQUcscUJBQXFCLDZCQUE2QixvQkFBb0IscUNBQXFDLHNDQUFzQyxrQkFBa0IsMEJBQTBCLGNBQWMsOEJBQThCLEdBQUcsZ0JBQWdCLDRCQUE0QixrQkFBa0IsR0FBRyxvQkFBb0Isc0JBQXNCLGlCQUFpQixHQUFHLGlCQUFpQiw4QkFBOEIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsR0FBRyxtQkFBbUIsaUJBQWlCLHNCQUFzQixHQUFHLGlCQUFpQiwwQkFBMEIsdUJBQXVCLGNBQWMsR0FBRyxjQUFjLEdBQUcsT0FBTyxnRkFBZ0YsWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sV0FBVyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLGdDQUFnQyx5QkFBeUIsR0FBRyx1QkFBdUIsa0JBQWtCLDBCQUEwQiw2QkFBNkIsNkJBQTZCLEdBQUcsVUFBVSw4QkFBOEIsR0FBRyxhQUFhLG9CQUFvQiw4QkFBOEIsc0JBQXNCLDBCQUEwQixrQkFBa0IsOEJBQThCLEdBQUcsb0NBQW9DLDBDQUEwQywwQkFBMEIsbUJBQW1CLDhCQUE4QixzQkFBc0IsR0FBRyxnREFBZ0QsMkNBQTJDLG1CQUFtQixHQUFHLG9CQUFvQix3QkFBd0Isa0JBQWtCLEdBQUcsYUFBYSw4QkFBOEIsbUJBQW1CLHdCQUF3QixHQUFHLGVBQWUsMEJBQTBCLHdCQUF3QiwwQkFBMEIsR0FBRyxvRUFBb0Usb0JBQW9CLDZCQUE2QiwwQkFBMEIsOEJBQThCLEdBQUcsb0JBQW9CLG1CQUFtQixHQUFHLFdBQVcsb0JBQW9CLG1CQUFtQixHQUFHLFlBQVksd0JBQXdCLEdBQUcsY0FBYyx3QkFBd0IsMEJBQTBCLEdBQUcscUJBQXFCLG9CQUFvQixxQ0FBcUMsMEJBQTBCLDhCQUE4Qix1QkFBdUIsd0JBQXdCLGdCQUFnQix3Q0FBd0MsR0FBRyxpQkFBaUIsNEJBQTRCLHNCQUFzQixHQUFHLHlCQUF5QixHQUFHLHFCQUFxQiw4QkFBOEIsNEJBQTRCLEdBQUcsdURBQXVELG1CQUFtQixHQUFHLHNCQUFzQiwwQkFBMEIseUJBQXlCLEdBQUcscUJBQXFCLG9CQUFvQixrRUFBa0UsZ0JBQWdCLEtBQUssK0JBQStCLGlEQUFpRCwwQkFBMEIsR0FBRyx5QkFBeUIsOEJBQThCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGNBQWMsc0JBQXNCLGtCQUFrQixLQUFLLGlCQUFpQixvQkFBb0IsbUJBQW1CLEdBQUcsaUJBQWlCLHNCQUFzQiwrQkFBK0IsS0FBSyxnQkFBZ0IsMEJBQTBCLEdBQUcsc0NBQXNDLG1CQUFtQix1QkFBdUIsd0JBQXdCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLEdBQUcsb0JBQW9CLDBCQUEwQixHQUFHLHFCQUFxQiw2QkFBNkIsb0JBQW9CLHFDQUFxQyxzQ0FBc0Msa0JBQWtCLDBCQUEwQixjQUFjLDhCQUE4QixHQUFHLGdCQUFnQiw0QkFBNEIsa0JBQWtCLEdBQUcsb0JBQW9CLHNCQUFzQixpQkFBaUIsR0FBRyxpQkFBaUIsOEJBQThCLG9CQUFvQiwwQkFBMEIsOEJBQThCLEdBQUcsbUJBQW1CLGlCQUFpQixzQkFBc0IsR0FBRyxpQkFBaUIsMEJBQTBCLHVCQUF1QixjQUFjLEdBQUcsY0FBYyxHQUFHLG1CQUFtQjtBQUN4d1E7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzPzI3YTQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tbWFpbi1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLyogY29tbW9uICovXFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHggMC41cmVtO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBnYXA6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5oZWFkZXItYnV0dG9uLFxcbi5pbnB1dC1idXR0b24ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbjpob3ZlcixcXG4uaW5wdXQtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMTc5LCAyMzUpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5oZWFkZXItYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHdpZHRoOiAxNWNoO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAwLjVyZW07XFxufVxcblxcbi5sb25ndGV4dCB7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4vKiBpbmRleFBhZ2UgKi9cXG5cXG4vKiBpbnRyb1BhZ2UgKHdlbGNvbWVQYWdlKSAqL1xcblxcbi5pbnRyb1BhZ2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmludHJvUGFnZSA+ICoge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNsb2dvIHtcXG4gICAgaGVpZ2h0OiAyMDZweDtcXG4gICAgd2lkdGg6IDIwNnB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLnRhZ2xpbmUge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuI2luZm8tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IGNsYW1wKDUwMHB4LCAxMDAlLCAxMDAwcHgpO1xcbn1cXG5cXG4ub3Blbi10aW1lcyB7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4jaW5mby1jb250YWluZXIgPiAqIHtcXG59XFxuXFxuLmF0bW9zcGhlcmUtcGljIHtcXG4gICAgd2lkdGg6IG1heCgyNTBweCwgMTAwJSk7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLyogc2VsZWN0aW9uUGFnZSAobWVudVBhZ2UpICovXFxuXFxuLnNlbGVjdGlvbi1wYWdlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jc2VsZWN0aW9uLXRpdGxlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jYmVlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gICAgZ2FwOiAxcmVtO1xcblxcbn1cXG5cXG4jYmVlci1jb250YWluZXIgPiAqOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDM1cHggMXB4IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jYmVlci1jb250YWluZXIgPiAqIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXg6IDA7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZ2FwOiAwLjVyZW07XFxuXFxufVxcblxcbi5iZWVyLWltYWdlIHtcXG4gICAgaGVpZ2h0OiAyMzFweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4uYmVlci10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcblxcbn1cXG5cXG4uYmVlci10ZXh0IHtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuLyogY29udGFjdFBhZ2UgKi9cXG5cXG4uY29udGFjdC1wYWdlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QtdGl0bGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4jZm9ybS1jb250YWluZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICBmbGV4OiAxO1xcbiAgICB3aWR0aDogbWF4KDUwMHB4LCAxMDAlKTtcXG59XFxuXFxuLmlucHV0LWRpdiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5pbnB1dC1kaXYgPiAqIHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uYnV0dG9uLWRpdiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmlucHV0LWJ1dHRvbiB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuI2dvb2dsZS1tYXAge1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICBtYXgtd2lkdGg6IDc2M3B4O1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4uZGV0YWlscyB7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUEsV0FBVzs7QUFFWDtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLG1DQUFtQztJQUNuQyxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBOztJQUVJLG9DQUFvQztJQUNwQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUEsY0FBYzs7QUFFZCw0QkFBNEI7O0FBRTVCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtBQUNBOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6Qjs7QUFFQSw2QkFBNkI7O0FBRTdCO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkRBQTJEO0lBQzNELFNBQVM7O0FBRWI7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxlQUFlO0lBQ2YsV0FBVzs7QUFFZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHdCQUF3Qjs7QUFFNUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQSxnQkFBZ0I7O0FBRWhCO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsT0FBTztBQUNYOztBQUVBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLW1haW4tY29sb3I6IGJsdWU7XFxufVxcblxcbi8qIGNvbW1vbiAqL1xcblxcbioge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4IDAuNXJlbTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgZ2FwOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbixcXG4uaW5wdXQtYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLmhlYWRlci1idXR0b246aG92ZXIsXFxuLmlucHV0LWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDE3OSwgMjM1KTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB3aWR0aDogMTVjaDtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xcbn1cXG5cXG4ubG9uZ3RleHQge1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLyogaW5kZXhQYWdlICovXFxuXFxuLyogaW50cm9QYWdlICh3ZWxjb21lUGFnZSkgKi9cXG5cXG4uaW50cm9QYWdlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5pbnRyb1BhZ2UgPiAqIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jbG9nbyB7XFxuICAgIGhlaWdodDogMjA2cHg7XFxuICAgIHdpZHRoOiAyMDZweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi50YWdsaW5lIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbiNpbmZvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiBjbGFtcCg1MDBweCwgMTAwJSwgMTAwMHB4KTtcXG59XFxuXFxuLm9wZW4tdGltZXMge1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuI2luZm8tY29udGFpbmVyID4gKiB7XFxufVxcblxcbi5hdG1vc3BoZXJlLXBpYyB7XFxuICAgIHdpZHRoOiBtYXgoMjUwcHgsIDEwMCUpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi8qIHNlbGVjdGlvblBhZ2UgKG1lbnVQYWdlKSAqL1xcblxcbi5zZWxlY3Rpb24tcGFnZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3NlbGVjdGlvbi10aXRsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2JlZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxuICAgIGdhcDogMXJlbTtcXG5cXG59XFxuXFxuI2JlZXItY29udGFpbmVyID4gKjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAzNXB4IDFweCB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI2JlZXItY29udGFpbmVyID4gKiB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4OiAwO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGdhcDogMC41cmVtO1xcblxcbn1cXG5cXG4uYmVlci1pbWFnZSB7XFxuICAgIGhlaWdodDogMjMxcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLmJlZXItdGl0bGUge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG5cXG59XFxuXFxuLmJlZXItdGV4dCB7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcbi8qIGNvbnRhY3RQYWdlICovXFxuXFxuLmNvbnRhY3QtcGFnZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0LXRpdGxlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuI2Zvcm0tY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgZmxleDogMTtcXG4gICAgd2lkdGg6IG1heCg1MDBweCwgMTAwJSk7XFxufVxcblxcbi5pbnB1dC1kaXYge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaW5wdXQtZGl2ID4gKiB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLmJ1dHRvbi1kaXYge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5pbnB1dC1idXR0b24ge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbiNnb29nbGUtbWFwIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgbWF4LXdpZHRoOiA3NjNweDtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmRldGFpbHMge1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js!./src/style.css\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcz8yNGZiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/runtime/api.js\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (item) {\n  var content = item[1];\n  var cssMapping = item[3];\n  if (!cssMapping) {\n    return content;\n  }\n  if (typeof btoa === \"function\") {\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    var sourceMapping = \"/*# \".concat(data, \" */\");\n    return [content].concat([sourceMapping]).join(\"\\n\");\n  }\n  return [content].join(\"\\n\");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcz9hZjEyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/runtime/sourceMaps.js\n");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGUuY3NzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/style.css\n");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzPzJkYmEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\n");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzP2IyMTQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/style-loader/dist/runtime/insertBySelector.js\n");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanM/ZGU2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/style-loader/dist/runtime/insertStyleElement.js\n");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzP2RkY2UiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\n");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcz9lNDc5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/style-loader/dist/runtime/styleDomAPI.js\n");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcz8xZGRlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/style-loader/dist/runtime/styleTagTransform.js\n");

/***/ }),

/***/ "./src/beerImages sync \\.(png%7Cjpe?g%7Csvg)$":
/*!******************************************************************!*\
  !*** ./src/beerImages/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./beer_amberale.png": "./src/beerImages/beer_amberale.png",
	"./beer_daidaiale.png": "./src/beerImages/beer_daidaiale.png",
	"./beer_espressostout.png": "./src/beerImages/beer_espressostout.png",
	"./beer_extrahighxh.png": "./src/beerImages/beer_extrahighxh.png",
	"./beer_hitachinonestlager.png": "./src/beerImages/beer_hitachinonestlager.png",
	"./beer_japaneseclassicale.png": "./src/beerImages/beer_japaneseclassicale.png",
	"./beer_nipponia.png": "./src/beerImages/beer_nipponia.png",
	"./beer_nonale.png": "./src/beerImages/beer_nonale.png",
	"./beer_paleale.png": "./src/beerImages/beer_paleale.png",
	"./beer_realgingerale.png": "./src/beerImages/beer_realgingerale.png",
	"./beer_redriceale.png": "./src/beerImages/beer_redriceale.png",
	"./beer_saisondujapan.png": "./src/beerImages/beer_saisondujapan.png",
	"./beer_sweetstout.png": "./src/beerImages/beer_sweetstout.png",
	"./beer_weizen.png": "./src/beerImages/beer_weizen.png",
	"./beer_whiteale.png": "./src/beerImages/beer_whiteale.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/beerImages sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _contactImages_templateMap_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactImages/templateMap.png */ \"./src/contactImages/templateMap.png\");\n\n\nconst contactPage = () => {\n    const contentDiv = document.querySelector('#content');\n    contentDiv.classList.add('contact-page');\n\n    const title = document.createElement('h1');\n    title.textContent = 'Contact Us';\n    title.classList.add('contact-title');\n    contentDiv.appendChild(title);\n\n    const contactText = document.createElement('div');\n    contactText.classList.add('longtext');\n    contactText.textContent =\n        'Please call, email, or fill out your details below to make a reservation. Walk-ins are possible, but if busy, there is plenty of space outside to loiter while you wait.';\n    contentDiv.appendChild(contactText);\n\n    // form ->\n    const formContainer = document.createElement('div');\n    formContainer.setAttribute('id', 'form-container');\n    contentDiv.appendChild(formContainer);\n\n    // name\n    const inputDiv0 = document.createElement('div');\n    inputDiv0.classList.add('input-div');\n    formContainer.appendChild(inputDiv0);\n\n    const nameTitle = document.createElement('div');\n    nameTitle.classList.add('input-title');\n    nameTitle.textContent = '*Name: ';\n    inputDiv0.appendChild(nameTitle);\n\n    const nameInput = document.createElement('input');\n    nameInput.setAttribute('type', 'text');\n    nameInput.classList.add('input');\n    inputDiv0.appendChild(nameInput);\n\n    // phone\n    const inputDiv1 = document.createElement('div');\n    inputDiv1.classList.add('input-div');\n    formContainer.appendChild(inputDiv1);\n\n    const phoneTitle = document.createElement('div');\n    phoneTitle.classList.add('input-title');\n    phoneTitle.textContent = '*Phone: ';\n    inputDiv1.appendChild(phoneTitle);\n\n    const phoneInput = document.createElement('input');\n    phoneInput.setAttribute('type', 'number');\n    phoneInput.classList.add('input');\n    inputDiv1.appendChild(phoneInput);\n\n    // email\n    const inputDiv2 = document.createElement('div');\n    inputDiv2.classList.add('input-div');\n    formContainer.appendChild(inputDiv2);\n\n    const emailTitle = document.createElement('div');\n    emailTitle.classList.add('input-title');\n    emailTitle.textContent = '*Email: ';\n    inputDiv2.appendChild(emailTitle);\n\n    const emailInput = document.createElement('input');\n    emailInput.setAttribute('type', 'email');\n    emailInput.classList.add('input');\n    inputDiv2.appendChild(emailInput);\n\n    // request\n    const inputDiv3 = document.createElement('div');\n    inputDiv3.classList.add('input-div');\n    formContainer.appendChild(inputDiv3);\n\n    const requestTitle = document.createElement('div');\n    requestTitle.classList.add('input-title');\n    requestTitle.textContent = '*Expected Arrival ';\n    inputDiv3.appendChild(requestTitle);\n\n    const requestInput = document.createElement('input');\n    emailInput.setAttribute('type', 'text');\n    requestInput.setAttribute('placeholder', 'Date/Time');\n    requestInput.classList.add('input');\n    inputDiv3.appendChild(requestInput);\n\n    // button\n    const inputDiv4 = document.createElement('div');\n    inputDiv4.classList.add('input-div');\n    inputDiv4.classList.add('button-div');\n    formContainer.appendChild(inputDiv4);\n\n    const formButton = document.createElement('button');\n    formButton.setAttribute('type', 'button');\n    formButton.classList.add('input-button');\n    formButton.textContent = 'Submit';\n    inputDiv4.appendChild(formButton);\n\n    // form <-\n\n    const googleMap = document.createElement('img');\n    googleMap.src = _contactImages_templateMap_png__WEBPACK_IMPORTED_MODULE_0__;\n    googleMap.setAttribute('id', 'google-map');\n    contentDiv.appendChild(googleMap);\n\n    const descriptionContainer = document.createElement('div');\n    contentDiv.appendChild(descriptionContainer);\n\n    const address = document.createElement('div');\n    address.classList.add('details');\n    address.textContent = '47 beer st Antarctica';\n    contentDiv.appendChild(address);\n\n    const phone = document.createElement('div');\n    phone.classList.add('details');\n    phone.textContent = '1234-4747-6789';\n    contentDiv.appendChild(phone);\n\n    const email = document.createElement('div');\n    email.classList.add('details');\n    email.textContent = 'OP@OnlyPorters.com.ant';\n    contentDiv.appendChild(email);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFjdFBhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEQ7O0FBRTFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esb0JBQW9CLDJEQUFXO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29udGFjdFBhZ2UuanM/Y2U3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGVtcGxhdGVNYXAgZnJvbSAnLi9jb250YWN0SW1hZ2VzL3RlbXBsYXRlTWFwLnBuZyc7XG5cbmNvbnN0IGNvbnRhY3RQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1wYWdlJyk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyc7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnY29udGFjdC10aXRsZScpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgY29udGFjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0VGV4dC5jbGFzc0xpc3QuYWRkKCdsb25ndGV4dCcpO1xuICAgIGNvbnRhY3RUZXh0LnRleHRDb250ZW50ID1cbiAgICAgICAgJ1BsZWFzZSBjYWxsLCBlbWFpbCwgb3IgZmlsbCBvdXQgeW91ciBkZXRhaWxzIGJlbG93IHRvIG1ha2UgYSByZXNlcnZhdGlvbi4gV2Fsay1pbnMgYXJlIHBvc3NpYmxlLCBidXQgaWYgYnVzeSwgdGhlcmUgaXMgcGxlbnR5IG9mIHNwYWNlIG91dHNpZGUgdG8gbG9pdGVyIHdoaWxlIHlvdSB3YWl0Lic7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjb250YWN0VGV4dCk7XG5cbiAgICAvLyBmb3JtIC0+XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb3JtLWNvbnRhaW5lcicpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG5cbiAgICAvLyBuYW1lXG4gICAgY29uc3QgaW5wdXREaXYwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5wdXREaXYwLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWRpdicpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXREaXYwKTtcblxuICAgIGNvbnN0IG5hbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWVUaXRsZS5jbGFzc0xpc3QuYWRkKCdpbnB1dC10aXRsZScpO1xuICAgIG5hbWVUaXRsZS50ZXh0Q29udGVudCA9ICcqTmFtZTogJztcbiAgICBpbnB1dERpdjAuYXBwZW5kQ2hpbGQobmFtZVRpdGxlKTtcblxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgbmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG4gICAgaW5wdXREaXYwLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cbiAgICAvLyBwaG9uZVxuICAgIGNvbnN0IGlucHV0RGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlucHV0RGl2MS5jbGFzc0xpc3QuYWRkKCdpbnB1dC1kaXYnKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0RGl2MSk7XG5cbiAgICBjb25zdCBwaG9uZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGhvbmVUaXRsZS5jbGFzc0xpc3QuYWRkKCdpbnB1dC10aXRsZScpO1xuICAgIHBob25lVGl0bGUudGV4dENvbnRlbnQgPSAnKlBob25lOiAnO1xuICAgIGlucHV0RGl2MS5hcHBlbmRDaGlsZChwaG9uZVRpdGxlKTtcblxuICAgIGNvbnN0IHBob25lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHBob25lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xuICAgIHBob25lSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXQnKTtcbiAgICBpbnB1dERpdjEuYXBwZW5kQ2hpbGQocGhvbmVJbnB1dCk7XG5cbiAgICAvLyBlbWFpbFxuICAgIGNvbnN0IGlucHV0RGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlucHV0RGl2Mi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1kaXYnKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0RGl2Mik7XG5cbiAgICBjb25zdCBlbWFpbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZW1haWxUaXRsZS5jbGFzc0xpc3QuYWRkKCdpbnB1dC10aXRsZScpO1xuICAgIGVtYWlsVGl0bGUudGV4dENvbnRlbnQgPSAnKkVtYWlsOiAnO1xuICAgIGlucHV0RGl2Mi5hcHBlbmRDaGlsZChlbWFpbFRpdGxlKTtcblxuICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2VtYWlsJyk7XG4gICAgZW1haWxJbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dCcpO1xuICAgIGlucHV0RGl2Mi5hcHBlbmRDaGlsZChlbWFpbElucHV0KTtcblxuICAgIC8vIHJlcXVlc3RcbiAgICBjb25zdCBpbnB1dERpdjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbnB1dERpdjMuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZGl2Jyk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dERpdjMpO1xuXG4gICAgY29uc3QgcmVxdWVzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmVxdWVzdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2lucHV0LXRpdGxlJyk7XG4gICAgcmVxdWVzdFRpdGxlLnRleHRDb250ZW50ID0gJypFeHBlY3RlZCBBcnJpdmFsICc7XG4gICAgaW5wdXREaXYzLmFwcGVuZENoaWxkKHJlcXVlc3RUaXRsZSk7XG5cbiAgICBjb25zdCByZXF1ZXN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICByZXF1ZXN0SW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEYXRlL1RpbWUnKTtcbiAgICByZXF1ZXN0SW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXQnKTtcbiAgICBpbnB1dERpdjMuYXBwZW5kQ2hpbGQocmVxdWVzdElucHV0KTtcblxuICAgIC8vIGJ1dHRvblxuICAgIGNvbnN0IGlucHV0RGl2NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlucHV0RGl2NC5jbGFzc0xpc3QuYWRkKCdpbnB1dC1kaXYnKTtcbiAgICBpbnB1dERpdjQuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWRpdicpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXREaXY0KTtcblxuICAgIGNvbnN0IGZvcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBmb3JtQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBmb3JtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWJ1dHRvbicpO1xuICAgIGZvcm1CdXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICBpbnB1dERpdjQuYXBwZW5kQ2hpbGQoZm9ybUJ1dHRvbik7XG5cbiAgICAvLyBmb3JtIDwtXG5cbiAgICBjb25zdCBnb29nbGVNYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBnb29nbGVNYXAuc3JjID0gdGVtcGxhdGVNYXA7XG4gICAgZ29vZ2xlTWFwLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ29vZ2xlLW1hcCcpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZ29vZ2xlTWFwKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkcmVzcy5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzJyk7XG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICc0NyBiZWVyIHN0IEFudGFyY3RpY2EnO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cbiAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBob25lLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMnKTtcbiAgICBwaG9uZS50ZXh0Q29udGVudCA9ICcxMjM0LTQ3NDctNjc4OSc7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChwaG9uZSk7XG5cbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVtYWlsLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMnKTtcbiAgICBlbWFpbC50ZXh0Q29udGVudCA9ICdPUEBPbmx5UG9ydGVycy5jb20uYW50JztcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGVtYWlsKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RQYWdlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contactPage.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _introPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./introPage */ \"./src/introPage.js\");\n/* harmony import */ var _selectionPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectionPage */ \"./src/selectionPage.js\");\n/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage */ \"./src/contactPage.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\nconst body = document.querySelector('body');\n\nlet contentDiv = document.createElement('div');\ncontentDiv.setAttribute('id', 'content');\nbody.appendChild(contentDiv);\n\nconst headerDiv = document.createElement('div');\nheaderDiv.setAttribute('id', 'header');\nbody.appendChild(headerDiv);\n\n// remove then re-add contentDiv\n// removing contentDiv also deletes the associated class(s)\n// this is handy because each page can set its own class for css purposes\nconst resetContentDiv = () => {\n    const removeDiv = document.querySelector('#content');\n    removeDiv.remove();\n    contentDiv = document.createElement('div');\n    contentDiv.setAttribute('id', 'content');\n    body.appendChild(contentDiv);\n};\n\nconst selectIntroPage = () => {\n    resetContentDiv();\n    (0,_introPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\nconst selectSelectionPage = () => {\n    resetContentDiv();\n    (0,_selectionPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\nconst selectContactPage = () => {\n    resetContentDiv();\n    (0,_contactPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n};\n\nconst button1 = document.createElement('button');\nbutton1.textContent = 'Welcome';\nbutton1.addEventListener('click', selectIntroPage);\nbutton1.classList.add('header-button');\nheaderDiv.appendChild(button1);\n\nconst button2 = document.createElement('button');\nbutton2.textContent = 'Beer Selection';\nbutton2.addEventListener('click', selectSelectionPage);\nbutton2.classList.add('header-button');\nheaderDiv.appendChild(button2);\n\nconst button3 = document.createElement('button');\nbutton3.textContent = 'Contact Us';\nbutton3.addEventListener('click', selectContactPage);\nbutton3.classList.add('header-button');\nheaderDiv.appendChild(button3);\n\n/* figure out how to do Footer properly...\n\nconst footerDiv = document.createElement('div');\nfooterDiv.setAttribute('id', 'footer');\nbody.appendChild(footerDiv);\nfooterDiv.textContent = 'No copywrite 2023 OP Only Porters';\n*/\n\nselectIntroPage();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBb0M7QUFDUTtBQUNKO0FBQ25COztBQUVyQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHNEQUFTO0FBQ2I7O0FBRUE7QUFDQTtBQUNBLElBQUksMERBQWE7QUFDakI7O0FBRUE7QUFDQTtBQUNBLElBQUksd0RBQVc7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbnRyb1BhZ2UgZnJvbSAnLi9pbnRyb1BhZ2UnO1xuaW1wb3J0IHNlbGVjdGlvblBhZ2UgZnJvbSAnLi9zZWxlY3Rpb25QYWdlJztcbmltcG9ydCBjb250YWN0UGFnZSBmcm9tICcuL2NvbnRhY3RQYWdlJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5sZXQgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGVudERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcbmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XG5cbmNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaGVhZGVyRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyJyk7XG5ib2R5LmFwcGVuZENoaWxkKGhlYWRlckRpdik7XG5cbi8vIHJlbW92ZSB0aGVuIHJlLWFkZCBjb250ZW50RGl2XG4vLyByZW1vdmluZyBjb250ZW50RGl2IGFsc28gZGVsZXRlcyB0aGUgYXNzb2NpYXRlZCBjbGFzcyhzKVxuLy8gdGhpcyBpcyBoYW5keSBiZWNhdXNlIGVhY2ggcGFnZSBjYW4gc2V0IGl0cyBvd24gY2xhc3MgZm9yIGNzcyBwdXJwb3Nlc1xuY29uc3QgcmVzZXRDb250ZW50RGl2ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlbW92ZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgcmVtb3ZlRGl2LnJlbW92ZSgpO1xuICAgIGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XG59O1xuXG5jb25zdCBzZWxlY3RJbnRyb1BhZ2UgPSAoKSA9PiB7XG4gICAgcmVzZXRDb250ZW50RGl2KCk7XG4gICAgaW50cm9QYWdlKCk7XG59O1xuXG5jb25zdCBzZWxlY3RTZWxlY3Rpb25QYWdlID0gKCkgPT4ge1xuICAgIHJlc2V0Q29udGVudERpdigpO1xuICAgIHNlbGVjdGlvblBhZ2UoKTtcbn07XG5cbmNvbnN0IHNlbGVjdENvbnRhY3RQYWdlID0gKCkgPT4ge1xuICAgIHJlc2V0Q29udGVudERpdigpO1xuICAgIGNvbnRhY3RQYWdlKCk7XG59O1xuXG5jb25zdCBidXR0b24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5idXR0b24xLnRleHRDb250ZW50ID0gJ1dlbGNvbWUnO1xuYnV0dG9uMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdEludHJvUGFnZSk7XG5idXR0b24xLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1idXR0b24nKTtcbmhlYWRlckRpdi5hcHBlbmRDaGlsZChidXR0b24xKTtcblxuY29uc3QgYnV0dG9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuYnV0dG9uMi50ZXh0Q29udGVudCA9ICdCZWVyIFNlbGVjdGlvbic7XG5idXR0b24yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0U2VsZWN0aW9uUGFnZSk7XG5idXR0b24yLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1idXR0b24nKTtcbmhlYWRlckRpdi5hcHBlbmRDaGlsZChidXR0b24yKTtcblxuY29uc3QgYnV0dG9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuYnV0dG9uMy50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJztcbmJ1dHRvbjMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RDb250YWN0UGFnZSk7XG5idXR0b24zLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1idXR0b24nKTtcbmhlYWRlckRpdi5hcHBlbmRDaGlsZChidXR0b24zKTtcblxuLyogZmlndXJlIG91dCBob3cgdG8gZG8gRm9vdGVyIHByb3Blcmx5Li4uXG5cbmNvbnN0IGZvb3RlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZm9vdGVyRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyJyk7XG5ib2R5LmFwcGVuZENoaWxkKGZvb3RlckRpdik7XG5mb290ZXJEaXYudGV4dENvbnRlbnQgPSAnTm8gY29weXdyaXRlIDIwMjMgT1AgT25seSBQb3J0ZXJzJztcbiovXG5cbnNlbGVjdEludHJvUGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/introPage.js":
/*!**************************!*\
  !*** ./src/introPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction importAll(directory) {\n    const images = {};\n    directory.keys().forEach((image) => {\n        const newImage = {};\n        newImage.name = image.slice(2, -4); // removes ./ and .jpg\n        newImage.url = directory(image);\n        images[newImage.name] = newImage;\n    });\n    console.log(images);\n    return images;\n}\n\nconst introPage = () => {\n    const images = importAll(\n        __webpack_require__(\"./src/welcomeImages sync \\\\.(png%7Cjpe?g%7Csvg)$\")\n    );\n\n    const contentDiv = document.querySelector('#content');\n    contentDiv.classList.add('introPage');\n\n    const logo = document.createElement('img');\n    logo.src = images.teddybear.url;\n    logo.setAttribute('id', 'logo');\n    contentDiv.appendChild(logo);\n\n    const title = document.createElement('h1');\n    title.textContent = \"OP's Only Porter Brewery\";\n    title.classList.add('title');\n    contentDiv.appendChild(title);\n\n    const tagline = document.createElement('div');\n    tagline.textContent = 'come down and have a porter why not';\n    tagline.classList.add('tagline');\n    contentDiv.appendChild(tagline);\n\n    const infoContainer = document.createElement('div');\n    infoContainer.setAttribute('id', 'info-container');\n    contentDiv.appendChild(infoContainer);\n\n    const atmospherePic0 = document.createElement('img');\n    atmospherePic0.src = images.atmosphere1.url;\n    atmospherePic0.classList.add('atmosphere-pic');\n    infoContainer.appendChild(atmospherePic0);\n\n    const description0 = document.createElement('div');\n    description0.textContent =\n        \"Fresh from his kitchen in suburban Japan comes a range of beverages sure to tickle your fancy. Despite the name, beers other than porters are available! Strictly no sours though. Yuck. Each batch is hand-crafted on a 6L scale, with new beers appearing weekly. If you miss out on a good one, don't fret! I'm sure it will become available again at some stage, probably.\";\n    description0.classList.add('longtext');\n    infoContainer.appendChild(description0);\n\n    const description1 = document.createElement('div');\n    description1.textContent =\n        'Opening Hours:\\nMon: 17:00-23:59\\nTue: 17:00-23:59\\nWed: Closed\\nThu: Closed\\nFri: 12:00-25:00\\nSat: 12:00-late\\nSun: 12:00-17:00';\n    description1.classList.add('longtext');\n    description1.classList.add('open-times');\n    infoContainer.appendChild(description1);\n\n    const atmospherePic1 = document.createElement('img');\n    atmospherePic1.src = images.porterImage.url;\n    atmospherePic1.classList.add('atmosphere-pic');\n    infoContainer.appendChild(atmospherePic1);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (introPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW50cm9QYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSx1RUFBK0Q7QUFDdkU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ludHJvUGFnZS5qcz8wYjdjIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGltcG9ydEFsbChkaXJlY3RvcnkpIHtcbiAgICBjb25zdCBpbWFnZXMgPSB7fTtcbiAgICBkaXJlY3Rvcnkua2V5cygpLmZvckVhY2goKGltYWdlKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0ltYWdlID0ge307XG4gICAgICAgIG5ld0ltYWdlLm5hbWUgPSBpbWFnZS5zbGljZSgyLCAtNCk7IC8vIHJlbW92ZXMgLi8gYW5kIC5qcGdcbiAgICAgICAgbmV3SW1hZ2UudXJsID0gZGlyZWN0b3J5KGltYWdlKTtcbiAgICAgICAgaW1hZ2VzW25ld0ltYWdlLm5hbWVdID0gbmV3SW1hZ2U7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coaW1hZ2VzKTtcbiAgICByZXR1cm4gaW1hZ2VzO1xufVxuXG5jb25zdCBpbnRyb1BhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgaW1hZ2VzID0gaW1wb3J0QWxsKFxuICAgICAgICByZXF1aXJlLmNvbnRleHQoJy4vd2VsY29tZUltYWdlcycsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pXG4gICAgKTtcblxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZCgnaW50cm9QYWdlJyk7XG5cbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbG9nby5zcmMgPSBpbWFnZXMudGVkZHliZWFyLnVybDtcbiAgICBsb2dvLnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9nbycpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobG9nbyk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIk9QJ3MgT25seSBQb3J0ZXIgQnJld2VyeVwiO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCB0YWdsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFnbGluZS50ZXh0Q29udGVudCA9ICdjb21lIGRvd24gYW5kIGhhdmUgYSBwb3J0ZXIgd2h5IG5vdCc7XG4gICAgdGFnbGluZS5jbGFzc0xpc3QuYWRkKCd0YWdsaW5lJyk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0YWdsaW5lKTtcblxuICAgIGNvbnN0IGluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5mby1jb250YWluZXInKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGluZm9Db250YWluZXIpO1xuXG4gICAgY29uc3QgYXRtb3NwaGVyZVBpYzAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBhdG1vc3BoZXJlUGljMC5zcmMgPSBpbWFnZXMuYXRtb3NwaGVyZTEudXJsO1xuICAgIGF0bW9zcGhlcmVQaWMwLmNsYXNzTGlzdC5hZGQoJ2F0bW9zcGhlcmUtcGljJyk7XG4gICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChhdG1vc3BoZXJlUGljMCk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbjAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbjAudGV4dENvbnRlbnQgPVxuICAgICAgICBcIkZyZXNoIGZyb20gaGlzIGtpdGNoZW4gaW4gc3VidXJiYW4gSmFwYW4gY29tZXMgYSByYW5nZSBvZiBiZXZlcmFnZXMgc3VyZSB0byB0aWNrbGUgeW91ciBmYW5jeS4gRGVzcGl0ZSB0aGUgbmFtZSwgYmVlcnMgb3RoZXIgdGhhbiBwb3J0ZXJzIGFyZSBhdmFpbGFibGUhIFN0cmljdGx5IG5vIHNvdXJzIHRob3VnaC4gWXVjay4gRWFjaCBiYXRjaCBpcyBoYW5kLWNyYWZ0ZWQgb24gYSA2TCBzY2FsZSwgd2l0aCBuZXcgYmVlcnMgYXBwZWFyaW5nIHdlZWtseS4gSWYgeW91IG1pc3Mgb3V0IG9uIGEgZ29vZCBvbmUsIGRvbid0IGZyZXQhIEknbSBzdXJlIGl0IHdpbGwgYmVjb21lIGF2YWlsYWJsZSBhZ2FpbiBhdCBzb21lIHN0YWdlLCBwcm9iYWJseS5cIjtcbiAgICBkZXNjcmlwdGlvbjAuY2xhc3NMaXN0LmFkZCgnbG9uZ3RleHQnKTtcbiAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uMCk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbjEudGV4dENvbnRlbnQgPVxuICAgICAgICAnT3BlbmluZyBIb3VyczpcXG5Nb246IDE3OjAwLTIzOjU5XFxuVHVlOiAxNzowMC0yMzo1OVxcbldlZDogQ2xvc2VkXFxuVGh1OiBDbG9zZWRcXG5Gcmk6IDEyOjAwLTI1OjAwXFxuU2F0OiAxMjowMC1sYXRlXFxuU3VuOiAxMjowMC0xNzowMCc7XG4gICAgZGVzY3JpcHRpb24xLmNsYXNzTGlzdC5hZGQoJ2xvbmd0ZXh0Jyk7XG4gICAgZGVzY3JpcHRpb24xLmNsYXNzTGlzdC5hZGQoJ29wZW4tdGltZXMnKTtcbiAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uMSk7XG5cbiAgICBjb25zdCBhdG1vc3BoZXJlUGljMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGF0bW9zcGhlcmVQaWMxLnNyYyA9IGltYWdlcy5wb3J0ZXJJbWFnZS51cmw7XG4gICAgYXRtb3NwaGVyZVBpYzEuY2xhc3NMaXN0LmFkZCgnYXRtb3NwaGVyZS1waWMnKTtcbiAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGF0bW9zcGhlcmVQaWMxKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGludHJvUGFnZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/introPage.js\n");

/***/ }),

/***/ "./src/selectionPage.js":
/*!******************************!*\
  !*** ./src/selectionPage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction importAll(directory) {\n    const images = [];\n    directory.keys().forEach((image, index) => {\n        const newImage = {};\n        newImage.name = image.slice(7, -4); // removes ./beer_ and .png - wont work with .jpeg\n        newImage.url = directory(image);\n        newImage.price = '600yen'; // set a default price\n        newImage.text =\n            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';\n        images[index] = newImage;\n    });\n    return images;\n}\n\n// modified https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack\nconst selectionPage = () => {\n    const images = importAll(\n        __webpack_require__(\"./src/beerImages sync \\\\.(png%7Cjpe?g%7Csvg)$\")\n    );\n\n    // Change the prices of the beers from the default of 600, have to do it manually?\n    // Could make an array of prices then add them in, but probably less clear.\n    // Alternatively the image filename could be beername_price.png then use slice to get the data\n    images[1].price = '500yen';\n    images[2].price = '800yen';\n\n    const setUpElement = (elementType, classType, dataName) => {\n        const newElement = document.createElement(`${elementType}`);\n        newElement.classList.add(`${classType}`);\n        newElement.textContent = dataName;\n        return newElement;\n    };\n\n    const contentDiv = document.querySelector('#content');\n    contentDiv.classList.add('selection-page');\n\n    const title = document.createElement('h1');\n    title.setAttribute('id', 'selection-title');\n    title.textContent = 'Check out these beers';\n    contentDiv.appendChild(title);\n\n    const beerContainer = document.createElement('div');\n    beerContainer.setAttribute('id', 'beer-container');\n    contentDiv.appendChild(beerContainer);\n\n    images.forEach((image) => {\n        const beerDiv = document.createElement('div');\n        beerContainer.appendChild(beerDiv);\n\n        const beerTitle = setUpElement('div', 'beer-title', image.name);\n        beerDiv.appendChild(beerTitle);\n\n        const newImage = document.createElement('img');\n        newImage.classList.add('beer-image');\n        newImage.src = image.url;\n        beerDiv.appendChild(newImage);\n\n        beerDiv.appendChild(setUpElement('div', 'beer-price', image.price));\n        beerDiv.appendChild(setUpElement('div', 'beer-text', image.text));\n    });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectionPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VsZWN0aW9uUGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvRUFBNEQ7QUFDcEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRCxZQUFZO0FBQ2pFLG9DQUFvQyxVQUFVO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLGlFQUFlLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc2VsZWN0aW9uUGFnZS5qcz83ODUwIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGltcG9ydEFsbChkaXJlY3RvcnkpIHtcbiAgICBjb25zdCBpbWFnZXMgPSBbXTtcbiAgICBkaXJlY3Rvcnkua2V5cygpLmZvckVhY2goKGltYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdJbWFnZSA9IHt9O1xuICAgICAgICBuZXdJbWFnZS5uYW1lID0gaW1hZ2Uuc2xpY2UoNywgLTQpOyAvLyByZW1vdmVzIC4vYmVlcl8gYW5kIC5wbmcgLSB3b250IHdvcmsgd2l0aCAuanBlZ1xuICAgICAgICBuZXdJbWFnZS51cmwgPSBkaXJlY3RvcnkoaW1hZ2UpO1xuICAgICAgICBuZXdJbWFnZS5wcmljZSA9ICc2MDB5ZW4nOyAvLyBzZXQgYSBkZWZhdWx0IHByaWNlXG4gICAgICAgIG5ld0ltYWdlLnRleHQgPVxuICAgICAgICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0Lic7XG4gICAgICAgIGltYWdlc1tpbmRleF0gPSBuZXdJbWFnZTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW1hZ2VzO1xufVxuXG4vLyBtb2RpZmllZCBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80MjExODI5Ni9keW5hbWljYWxseS1pbXBvcnQtaW1hZ2VzLWZyb20tYS1kaXJlY3RvcnktdXNpbmctd2VicGFja1xuY29uc3Qgc2VsZWN0aW9uUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBpbWFnZXMgPSBpbXBvcnRBbGwoXG4gICAgICAgIHJlcXVpcmUuY29udGV4dCgnLi9iZWVySW1hZ2VzJywgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLylcbiAgICApO1xuXG4gICAgLy8gQ2hhbmdlIHRoZSBwcmljZXMgb2YgdGhlIGJlZXJzIGZyb20gdGhlIGRlZmF1bHQgb2YgNjAwLCBoYXZlIHRvIGRvIGl0IG1hbnVhbGx5P1xuICAgIC8vIENvdWxkIG1ha2UgYW4gYXJyYXkgb2YgcHJpY2VzIHRoZW4gYWRkIHRoZW0gaW4sIGJ1dCBwcm9iYWJseSBsZXNzIGNsZWFyLlxuICAgIC8vIEFsdGVybmF0aXZlbHkgdGhlIGltYWdlIGZpbGVuYW1lIGNvdWxkIGJlIGJlZXJuYW1lX3ByaWNlLnBuZyB0aGVuIHVzZSBzbGljZSB0byBnZXQgdGhlIGRhdGFcbiAgICBpbWFnZXNbMV0ucHJpY2UgPSAnNTAweWVuJztcbiAgICBpbWFnZXNbMl0ucHJpY2UgPSAnODAweWVuJztcblxuICAgIGNvbnN0IHNldFVwRWxlbWVudCA9IChlbGVtZW50VHlwZSwgY2xhc3NUeXBlLCBkYXRhTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHtlbGVtZW50VHlwZX1gKTtcbiAgICAgICAgbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzVHlwZX1gKTtcbiAgICAgICAgbmV3RWxlbWVudC50ZXh0Q29udGVudCA9IGRhdGFOYW1lO1xuICAgICAgICByZXR1cm4gbmV3RWxlbWVudDtcbiAgICB9O1xuXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29udGVudERpdi5jbGFzc0xpc3QuYWRkKCdzZWxlY3Rpb24tcGFnZScpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0aW9uLXRpdGxlJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnQ2hlY2sgb3V0IHRoZXNlIGJlZXJzJztcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGJlZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiZWVyQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYmVlci1jb250YWluZXInKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGJlZXJDb250YWluZXIpO1xuXG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XG4gICAgICAgIGNvbnN0IGJlZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYmVlckNvbnRhaW5lci5hcHBlbmRDaGlsZChiZWVyRGl2KTtcblxuICAgICAgICBjb25zdCBiZWVyVGl0bGUgPSBzZXRVcEVsZW1lbnQoJ2RpdicsICdiZWVyLXRpdGxlJywgaW1hZ2UubmFtZSk7XG4gICAgICAgIGJlZXJEaXYuYXBwZW5kQ2hpbGQoYmVlclRpdGxlKTtcblxuICAgICAgICBjb25zdCBuZXdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBuZXdJbWFnZS5jbGFzc0xpc3QuYWRkKCdiZWVyLWltYWdlJyk7XG4gICAgICAgIG5ld0ltYWdlLnNyYyA9IGltYWdlLnVybDtcbiAgICAgICAgYmVlckRpdi5hcHBlbmRDaGlsZChuZXdJbWFnZSk7XG5cbiAgICAgICAgYmVlckRpdi5hcHBlbmRDaGlsZChzZXRVcEVsZW1lbnQoJ2RpdicsICdiZWVyLXByaWNlJywgaW1hZ2UucHJpY2UpKTtcbiAgICAgICAgYmVlckRpdi5hcHBlbmRDaGlsZChzZXRVcEVsZW1lbnQoJ2RpdicsICdiZWVyLXRleHQnLCBpbWFnZS50ZXh0KSk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWxlY3Rpb25QYWdlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/selectionPage.js\n");

/***/ }),

/***/ "./src/welcomeImages sync \\.(png%7Cjpe?g%7Csvg)$":
/*!*********************************************************************!*\
  !*** ./src/welcomeImages/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./atmosphere1.jpg": "./src/welcomeImages/atmosphere1.jpg",
	"./bearface.png": "./src/welcomeImages/bearface.png",
	"./porterImage.jpg": "./src/welcomeImages/porterImage.jpg",
	"./teddybear.png": "./src/welcomeImages/teddybear.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/welcomeImages sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./src/beerImages/beer_amberale.png":
/*!******************************************!*\
  !*** ./src/beerImages/beer_amberale.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "32f6184d16f096116816.png";

/***/ }),

/***/ "./src/beerImages/beer_daidaiale.png":
/*!*******************************************!*\
  !*** ./src/beerImages/beer_daidaiale.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "861415e0092fb80bb7ed.png";

/***/ }),

/***/ "./src/beerImages/beer_espressostout.png":
/*!***********************************************!*\
  !*** ./src/beerImages/beer_espressostout.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e2350402534dd078eabc.png";

/***/ }),

/***/ "./src/beerImages/beer_extrahighxh.png":
/*!*********************************************!*\
  !*** ./src/beerImages/beer_extrahighxh.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c85c8e8a953981489352.png";

/***/ }),

/***/ "./src/beerImages/beer_hitachinonestlager.png":
/*!****************************************************!*\
  !*** ./src/beerImages/beer_hitachinonestlager.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bf7b1900c7a73990cea0.png";

/***/ }),

/***/ "./src/beerImages/beer_japaneseclassicale.png":
/*!****************************************************!*\
  !*** ./src/beerImages/beer_japaneseclassicale.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "774314859e64b16c4a86.png";

/***/ }),

/***/ "./src/beerImages/beer_nipponia.png":
/*!******************************************!*\
  !*** ./src/beerImages/beer_nipponia.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "623480e03c4117bd8de8.png";

/***/ }),

/***/ "./src/beerImages/beer_nonale.png":
/*!****************************************!*\
  !*** ./src/beerImages/beer_nonale.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1baca8a348e614ccebab.png";

/***/ }),

/***/ "./src/beerImages/beer_paleale.png":
/*!*****************************************!*\
  !*** ./src/beerImages/beer_paleale.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "57b13ddae73ccc6389c6.png";

/***/ }),

/***/ "./src/beerImages/beer_realgingerale.png":
/*!***********************************************!*\
  !*** ./src/beerImages/beer_realgingerale.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f7e08b053379d9551a66.png";

/***/ }),

/***/ "./src/beerImages/beer_redriceale.png":
/*!********************************************!*\
  !*** ./src/beerImages/beer_redriceale.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f695999d140176647227.png";

/***/ }),

/***/ "./src/beerImages/beer_saisondujapan.png":
/*!***********************************************!*\
  !*** ./src/beerImages/beer_saisondujapan.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "493f7b2e1f050a8a9495.png";

/***/ }),

/***/ "./src/beerImages/beer_sweetstout.png":
/*!********************************************!*\
  !*** ./src/beerImages/beer_sweetstout.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "672c88c5330fe645bb5b.png";

/***/ }),

/***/ "./src/beerImages/beer_weizen.png":
/*!****************************************!*\
  !*** ./src/beerImages/beer_weizen.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "11bbbb23ef5bd1806738.png";

/***/ }),

/***/ "./src/beerImages/beer_whiteale.png":
/*!******************************************!*\
  !*** ./src/beerImages/beer_whiteale.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "211c181d01c5293d5afb.png";

/***/ }),

/***/ "./src/contactImages/templateMap.png":
/*!*******************************************!*\
  !*** ./src/contactImages/templateMap.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cdd22b08269e280d3579.png";

/***/ }),

/***/ "./src/welcomeImages/atmosphere1.jpg":
/*!*******************************************!*\
  !*** ./src/welcomeImages/atmosphere1.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d057bcadec1ca1e32cb2.jpg";

/***/ }),

/***/ "./src/welcomeImages/bearface.png":
/*!****************************************!*\
  !*** ./src/welcomeImages/bearface.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "198a7f40e10520c27b64.png";

/***/ }),

/***/ "./src/welcomeImages/porterImage.jpg":
/*!*******************************************!*\
  !*** ./src/welcomeImages/porterImage.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "da0fb8d4740f14a1fe8b.jpg";

/***/ }),

/***/ "./src/welcomeImages/teddybear.png":
/*!*****************************************!*\
  !*** ./src/welcomeImages/teddybear.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "42c62a312b8b3d6d3983.png";

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
/******/ 				scriptUrl = document.currentScript.src;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;