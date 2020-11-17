webpackHotUpdate_N_E("pages/index",{

/***/ "./frontend/Main/components/MiniGallery.jsx":
/*!**************************************************!*\
  !*** ./frontend/Main/components/MiniGallery.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Services_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Services.scss */ "./frontend/Main/styles/Services.scss");
/* harmony import */ var _styles_Services_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Services_scss__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "D:\\Development\\Practice\\Senoritasonrisas\\frontend\\Main\\components\\MiniGallery.jsx",
    _this = undefined;




var MiniGallery = function MiniGallery(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Services_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ServicesContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Services_scss__WEBPACK_IMPORTED_MODULE_2___default.a.TitleContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Services_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Title,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: data.titleImage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Services_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Subtitle,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: _styles_Services_scss__WEBPACK_IMPORTED_MODULE_2___default.a[data.titleText.color],
          children: data.titleText.text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Services_scss__WEBPACK_IMPORTED_MODULE_2___default.a.CollectionContainer,
      children: data.list.map(function (item) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Services_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ElementGallery,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_Services_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ImageContainer,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: item.image
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_Services_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Title,
            children: item.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_Services_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Body,
            children: item.body
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 29
          }, _this)]
        }, item.title, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 25
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, _this);
};

_c = MiniGallery;
/* harmony default export */ __webpack_exports__["default"] = (MiniGallery);

var _c;

$RefreshReg$(_c, "MiniGallery");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnJvbnRlbmQvTWFpbi9jb21wb25lbnRzL01pbmlHYWxsZXJ5LmpzeCJdLCJuYW1lcyI6WyJNaW5pR2FsbGVyeSIsImRhdGEiLCJzdHlsZXMiLCJTZXJ2aWNlc0NvbnRhaW5lciIsIlRpdGxlQ29udGFpbmVyIiwiVGl0bGUiLCJ0aXRsZUltYWdlIiwiU3VidGl0bGUiLCJ0aXRsZVRleHQiLCJjb2xvciIsInRleHQiLCJDb2xsZWN0aW9uQ29udGFpbmVyIiwibGlzdCIsIm1hcCIsIml0ZW0iLCJFbGVtZW50R2FsbGVyeSIsIkltYWdlQ29udGFpbmVyIiwiaW1hZ2UiLCJ0aXRsZSIsIkJvZHkiLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzlCLHNCQUNJO0FBQUssYUFBUyxFQUFFQyw0REFBTSxDQUFDQyxpQkFBdkI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRUQsNERBQU0sQ0FBQ0UsY0FBdkI7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUVGLDREQUFNLENBQUNHLEtBQXZCO0FBQUEsK0JBQ0k7QUFBSyxhQUFHLEVBQUVKLElBQUksQ0FBQ0s7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBSUk7QUFBSyxpQkFBUyxFQUFFSiw0REFBTSxDQUFDSyxRQUF2QjtBQUFBLCtCQUNJO0FBQUksbUJBQVMsRUFBRUwsNERBQU0sQ0FBQ0QsSUFBSSxDQUFDTyxTQUFMLENBQWVDLEtBQWhCLENBQXJCO0FBQUEsb0JBQ0tSLElBQUksQ0FBQ08sU0FBTCxDQUFlRTtBQURwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBV0k7QUFBSyxlQUFTLEVBQUVSLDREQUFNLENBQUNTLG1CQUF2QjtBQUFBLGdCQUVLVixJQUFJLENBQUNXLElBQUwsQ0FBVUMsR0FBVixDQUFjLFVBQUFDLElBQUksRUFBSTtBQUNuQiw0QkFDSTtBQUFLLG1CQUFTLEVBQUVaLDREQUFNLENBQUNhLGNBQXZCO0FBQUEsa0NBRUk7QUFBSyxxQkFBUyxFQUFFYiw0REFBTSxDQUFDYyxjQUF2QjtBQUFBLG1DQUNJO0FBQUssaUJBQUcsRUFBRUYsSUFBSSxDQUFDRztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBS0k7QUFBSyxxQkFBUyxFQUFFZiw0REFBTSxDQUFDRyxLQUF2QjtBQUFBLHNCQUErQlMsSUFBSSxDQUFDSTtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLGVBTUk7QUFBSyxxQkFBUyxFQUFFaEIsNERBQU0sQ0FBQ2lCLElBQXZCO0FBQUEsc0JBQThCTCxJQUFJLENBQUNNO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTko7QUFBQSxXQUE0Q04sSUFBSSxDQUFDSSxLQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBV0gsT0FaQTtBQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQThCSCxDQS9CRDs7S0FBTWxCLFc7QUFpQ1NBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk5MTIxZWJjZjUzNzhlMDI2Y2M5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1NlcnZpY2VzLnNjc3MnXHJcbmNvbnN0IE1pbmlHYWxsZXJ5ID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2VydmljZXNDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRpdGxlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLnRpdGxlSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU3VidGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlc1tkYXRhLnRpdGxlVGV4dC5jb2xvcl19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS50aXRsZVRleHQudGV4dH1cclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvbGxlY3Rpb25Db250YWluZXJ9PlxyXG5cclxuICAgICAgICAgICAgICAgIHtkYXRhLmxpc3QubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRWxlbWVudEdhbGxlcnl9IGtleT17aXRlbS50aXRsZX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbWFnZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGl0bGV9PntpdGVtLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Cb2R5fT57aXRlbS5ib2R5fTwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNaW5pR2FsbGVyeVxyXG4iXSwic291cmNlUm9vdCI6IiJ9