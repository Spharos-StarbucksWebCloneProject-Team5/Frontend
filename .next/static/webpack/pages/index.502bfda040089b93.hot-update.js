"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_widgets_RecommandWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/widgets/RecommandWidget */ \"./components/widgets/RecommandWidget.tsx\");\n/* harmony import */ var _components_widgets_ChunsikWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/widgets/ChunsikWidget */ \"./components/widgets/ChunsikWidget.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [eventListData, setEventListData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const [chunsikListData, setChunsikListData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        fetch(\"http://localhost:3001/main-event-list\").then((res)=>res.json()).then((data)=>setEventListData(data));\n        fetch(\"http://localhost:3001/chunsik-event\").then((res)=>res.json()).then((data)=>setChunsikListData(data));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\교육생17\\\\.vscode\\\\next\\\\pages\\\\index.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\교육생17\\\\.vscode\\\\next\\\\pages\\\\index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"event-banner\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"event-banner\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"event-banner__item\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"event-banner__item__img\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"assets/images/banner/banner01.png\",\n                                width: \"100%\",\n                                height: \"100%\",\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\교육생17\\\\.vscode\\\\next\\\\pages\\\\index.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\교육생17\\\\.vscode\\\\next\\\\pages\\\\index.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\교육생17\\\\.vscode\\\\next\\\\pages\\\\index.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\교육생17\\\\.vscode\\\\next\\\\pages\\\\index.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\교육생17\\\\.vscode\\\\next\\\\pages\\\\index.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            eventListData && eventListData.map((event)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_widgets_RecommandWidget__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    title: event.title,\n                    eventId: event.eventId\n                }, event.id, false, {\n                    fileName: \"C:\\\\Users\\\\교육생17\\\\.vscode\\\\next\\\\pages\\\\index.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, undefined)),\n            chunsikListData && chunsikListData.map((event)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_widgets_ChunsikWidget__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    title: event.title,\n                    eventId: event.eventId\n                }, event.id, false, {\n                    fileName: \"C:\\\\Users\\\\교육생17\\\\.vscode\\\\next\\\\pages\\\\index.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, undefined))\n        ]\n    }, void 0, true);\n};\n_s(Home, \"E97EcponMgMZJZiAYJXCKhkE44U=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEI7QUFFc0M7QUFDSjtBQUNuQjtBQUczQyxNQUFNSyxPQUEyQixJQUFNOztJQUVyQyxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHSCwrQ0FBUUE7SUFDbEQsTUFBTSxDQUFDSSxpQkFBaUJDLG1CQUFtQixHQUFHTCwrQ0FBUUE7SUFFdERELGdEQUFTQSxDQUFDLElBQU07UUFDZE8sTUFBTSx5Q0FDSEMsSUFBSSxDQUFDQyxDQUFBQSxNQUFPQSxJQUFJQyxJQUFJLElBQ3BCRixJQUFJLENBQUNHLENBQUFBLE9BQVFQLGlCQUFpQk87UUFFakNKLE1BQU0sdUNBQ0hDLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSSxJQUNwQkYsSUFBSSxDQUFDRyxDQUFBQSxPQUFRTCxtQkFBbUJLO0lBQ3JDLEdBQUcsRUFBRTtJQUVMLHFCQUNFOzswQkFDRSw4REFBQ2Qsa0RBQUlBOzBCQUNILDRFQUFDZTs4QkFBTTs7Ozs7Ozs7Ozs7MEJBRVQsOERBQUNDO2dCQUFRQyxJQUFHOzBCQUNWLDRFQUFDQztvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDQztnQ0FBSUMsS0FBSTtnQ0FBb0NDLE9BQU07Z0NBQU9DLFFBQU87Z0NBQU9DLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTWxGbEIsaUJBQWlCQSxjQUFjbUIsR0FBRyxDQUFDQyxDQUFBQSxzQkFDakMsOERBQUN6QiwyRUFBZUE7b0JBRWRjLE9BQU9XLE1BQU1YLEtBQUs7b0JBQ2xCWSxTQUFTRCxNQUFNQyxPQUFPO21CQUZqQkQsTUFBTVQsRUFBRTs7Ozs7WUFPakJULG1CQUFtQkEsZ0JBQWdCaUIsR0FBRyxDQUFDQyxDQUFBQSxzQkFDckMsOERBQUN4Qix5RUFBYUE7b0JBRVphLE9BQU9XLE1BQU1YLEtBQUs7b0JBQ2xCWSxTQUFTRCxNQUFNQyxPQUFPO21CQUZqQkQsTUFBTVQsRUFBRTs7Ozs7OztBQVF6QjtHQWpETVo7S0FBQUE7QUFtRE4sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgTmV4dFBhZ2VXaXRoTGF5b3V0IH0gZnJvbSAnLi9fYXBwJ1xuaW1wb3J0IFJlY29tbWFuZFdpZGdldCBmcm9tICdAL2NvbXBvbmVudHMvd2lkZ2V0cy9SZWNvbW1hbmRXaWRnZXQnXG5pbXBvcnQgQ2h1bnNpa1dpZGdldCBmcm9tICdAL2NvbXBvbmVudHMvd2lkZ2V0cy9DaHVuc2lrV2lkZ2V0J1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWFpbkV2ZW50TGlzdFR5cGUgfSBmcm9tICdAL3R5cGVzL2ZldGNoRGF0YVR5cGUnXG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlV2l0aExheW91dCA9ICgpID0+IHtcblxuICBjb25zdCBbZXZlbnRMaXN0RGF0YSwgc2V0RXZlbnRMaXN0RGF0YV0gPSB1c2VTdGF0ZTxtYWluRXZlbnRMaXN0VHlwZVtdPigpXG4gIGNvbnN0IFtjaHVuc2lrTGlzdERhdGEsIHNldENodW5zaWtMaXN0RGF0YV0gPSB1c2VTdGF0ZTxtYWluRXZlbnRMaXN0VHlwZVtdPigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL21haW4tZXZlbnQtbGlzdCcpXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4gc2V0RXZlbnRMaXN0RGF0YShkYXRhKSlcblxuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvY2h1bnNpay1ldmVudCcpXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4gc2V0Q2h1bnNpa0xpc3REYXRhKGRhdGEpKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHNlY3Rpb24gaWQ9XCJldmVudC1iYW5uZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC1iYW5uZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50LWJhbm5lcl9faXRlbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC1iYW5uZXJfX2l0ZW1fX2ltZ1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvYmFubmVyL2Jhbm5lcjAxLnBuZ1wiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAge1xuICAgICAgICBldmVudExpc3REYXRhICYmIGV2ZW50TGlzdERhdGEubWFwKGV2ZW50ID0+IChcbiAgICAgICAgICA8UmVjb21tYW5kV2lkZ2V0XG4gICAgICAgICAgICBrZXk9e2V2ZW50LmlkfVxuICAgICAgICAgICAgdGl0bGU9e2V2ZW50LnRpdGxlfVxuICAgICAgICAgICAgZXZlbnRJZD17ZXZlbnQuZXZlbnRJZH1cbiAgICAgICAgICAvPlxuICAgICAgICApKVxuICAgICAgfVxuICAgICAge1xuICAgICAgICBjaHVuc2lrTGlzdERhdGEgJiYgY2h1bnNpa0xpc3REYXRhLm1hcChldmVudCA9PiAoXG4gICAgICAgICAgPENodW5zaWtXaWRnZXRcbiAgICAgICAgICAgIGtleT17ZXZlbnQuaWR9XG4gICAgICAgICAgICB0aXRsZT17ZXZlbnQudGl0bGV9XG4gICAgICAgICAgICBldmVudElkPXtldmVudC5ldmVudElkfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdLCJuYW1lcyI6WyJIZWFkIiwiUmVjb21tYW5kV2lkZ2V0IiwiQ2h1bnNpa1dpZGdldCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZSIsImV2ZW50TGlzdERhdGEiLCJzZXRFdmVudExpc3REYXRhIiwiY2h1bnNpa0xpc3REYXRhIiwic2V0Q2h1bnNpa0xpc3REYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJ0aXRsZSIsInNlY3Rpb24iLCJpZCIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwibWFwIiwiZXZlbnQiLCJldmVudElkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});