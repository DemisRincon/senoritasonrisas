webpackHotUpdate_N_E("pages/index",{

/***/ "./frontend/Main/components/index.jsx":
/*!********************************************!*\
  !*** ./frontend/Main/components/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Main.scss */ "./frontend/Main/styles/Main.scss");
/* harmony import */ var _styles_Main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Main_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AboutMe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AboutMe */ "./frontend/Main/components/AboutMe.jsx");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header */ "./frontend/Main/components/header.jsx");
/* harmony import */ var _MiniGallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MiniGallery */ "./frontend/Main/components/MiniGallery.jsx");
/* harmony import */ var _constants_services_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/services.json */ "./frontend/Main/constants/services.json");
var _constants_services_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../constants/services.json */ "./frontend/Main/constants/services.json", 1);
/* harmony import */ var _constants_store_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/store.json */ "./frontend/Main/constants/store.json");
var _constants_store_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../constants/store.json */ "./frontend/Main/constants/store.json", 1);


var _jsxFileName = "D:\\Development\\Practice\\Senoritasonrisas\\frontend\\Main\\components\\index.jsx",
    _this = undefined;









var MainComponent = function MainComponent() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Main_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Main,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_header__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_AboutMe__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MiniGallery__WEBPACK_IMPORTED_MODULE_5__["default"], {
      data: _constants_services_json__WEBPACK_IMPORTED_MODULE_6__
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MiniGallery__WEBPACK_IMPORTED_MODULE_5__["default"], {
      data: _constants_services_json__WEBPACK_IMPORTED_MODULE_6__
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, _this);
};

_c = MainComponent;
/* harmony default export */ __webpack_exports__["default"] = (MainComponent);

var _c;

$RefreshReg$(_c, "MainComponent");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./frontend/Main/constants/store.json":
/*!********************************************!*\
  !*** ./frontend/Main/constants/store.json ***!
  \********************************************/
/*! exports provided: titleImage, titleText, list, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"titleImage\":\"/images/title.png\",\"titleText\":{\"text\":\"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, molestias. Provident totam dolorum atque nulla beatae perferendis accusamus animi nihil dolores sapiente soluta, magnam nesciunt quo? Maxime distinctio nulla minima.\",\"color\":\"Black\"},\"list\":[{\"image\":\"/images/logo.png\",\"title\":\"Articulo 1\",\"body\":\"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, molestias. Provident totam dolorum atque nulla beatae perferendis accusamus animi nihil dolores sapiente soluta, magnam nesciunt quo? Maxime distinctio nulla minima.\"},{\"image\":\"/images/logo.png\",\"title\":\"Articulo 2\",\"body\":\"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, molestias. Provident totam dolorum atque nulla beatae perferendis accusamus animi nihil dolores sapiente soluta, magnam nesciunt quo? Maxime distinctio nulla minima.\"},{\"image\":\"/images/logo.png\",\"title\":\"Articulo 3\",\"body\":\"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, molestias. Provident totam dolorum atque nulla beatae perferendis accusamus animi nihil dolores sapiente soluta, magnam nesciunt quo? Maxime distinctio nulla minima.\"}]}");

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnJvbnRlbmQvTWFpbi9jb21wb25lbnRzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJNYWluQ29tcG9uZW50Iiwic3R5bGVzIiwiTWFpbiIsInNlcnZpY2VzRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEIsc0JBQ0k7QUFBSyxhQUFTLEVBQUVDLHdEQUFNLENBQUNDLElBQXZCO0FBQUEsNEJBQ0kscUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUkscUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBR0kscUVBQUMsb0RBQUQ7QUFBYSxVQUFJLEVBQUVDLHFEQUFZQTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEosZUFJSSxxRUFBQyxvREFBRDtBQUFhLFVBQUksRUFBRUEscURBQVlBO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVFILENBVEQ7O0tBQU1ILGE7QUFXU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjBkNjdjMTI1YjNiYjkzM2VjZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTWFpbi5zY3NzJ1xyXG5pbXBvcnQgQWJvdXRNZSBmcm9tICcuL0Fib3V0TWUnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInXHJcbmltcG9ydCBNaW5pR2FsbGVyeSBmcm9tICcuL01pbmlHYWxsZXJ5J1xyXG5pbXBvcnQgc2VydmljZXNEYXRhIGZyb20gJy4uL2NvbnN0YW50cy9zZXJ2aWNlcy5qc29uJ1xyXG5pbXBvcnQgc3RvcmVEYXJhIGZyb20gJy4uL2NvbnN0YW50cy9zdG9yZS5qc29uJ1xyXG5jb25zdCBNYWluQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1haW59PlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxBYm91dE1lIC8+XHJcbiAgICAgICAgICAgIDxNaW5pR2FsbGVyeSBkYXRhPXtzZXJ2aWNlc0RhdGF9Lz5cclxuICAgICAgICAgICAgPE1pbmlHYWxsZXJ5IGRhdGE9e3NlcnZpY2VzRGF0YX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluQ29tcG9uZW50XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=