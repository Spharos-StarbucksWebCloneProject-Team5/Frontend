"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layouts/MainLayout.tsx":
/*!*******************************************!*\
  !*** ./components/layouts/MainLayout.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _modals_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/Modal */ \"./components/modals/Modal.tsx\");\n/* harmony import */ var _widgets_SubNavigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../widgets/SubNavigation */ \"./components/widgets/SubNavigation.tsx\");\n/* harmony import */ var _state_cartState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/state/cartState */ \"./state/cartState.ts\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n//react\n\nvar _s = $RefreshSig$();\n\n//next\n\n\n\n//component\n\n\n\n//recoil\n\n// import { bottomNavData } from '../../datas/navData'\nfunction MainLayout(props) {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    console.log(router.pathname);\n    // const cartPathName:String = '/cart';\n    // const [ isCart, setIsCart ] = useState<Boolean>(false)\n    const [navBottomData, setNavBottomData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [isModal, setIsModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // 회원가입 모달창 테스트\n    // const [isLoginView, setIsLoginView] = useState<Boolean>(false)\n    // const [ isSignupView, setIsSignupView ] = useState<Boolean>(false)\n    const cartCnt = (0,recoil__WEBPACK_IMPORTED_MODULE_8__.useRecoilValue)(_state_cartState__WEBPACK_IMPORTED_MODULE_7__.cartState);\n    const [headerMenus, setHeaderMenus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [subCategory, setSubCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const handleFilter = (name)=>{\n        setSubCategory(category === null || category === void 0 ? void 0 : category.filter((item)=>item.name === name));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // if(router.pathname === cartPathName) {\n        //   setIsCart(true)\n        // }\n        fetch(\"http://localhost:3001/nav\").then((res)=>res.json()).then((data)=>setNavBottomData(data));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modals_Modal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                isModal: isModal,\n                setIsModal: setIsModal\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"StarBucks Clone Site\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: \"StarBucks, Clone, Site\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"author\",\n                        content: \"Jason Ahn\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"assets/css/style.css\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"StarBucks Clone Site\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"header-top\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"menu-icon\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"menu.html\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"assets/images/icons/menu.svg\",\n                                            alt: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 38\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"온라인 스토어\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"assets/images/icons/search.svg\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"cart-badge\",\n                                                        children: cartCnt\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                                        lineNumber: 82,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        src: \"assets/images/icons/shopping-cart.svg\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                                        lineNumber: 83,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                onClick: ()=>setIsModal(\"login\"),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"assets/images/icons/user.svg\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 57\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this),\n                        router.pathname === \"/\" || router.pathname === \"/event\" || router.pathname === \"/best\" || router.pathname === \"/mypage\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"header-bottom\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    children: navBottomData && navBottomData.map((nav)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: router.pathname === nav.link ? \"active\" : \"\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                href: nav.link,\n                                                children: nav.name\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                                lineNumber: 101,\n                                                columnNumber: 27\n                                            }, this)\n                                        }, nav.id, false, {\n                                            fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 25\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 15\n                        }, this) : \"\",\n                        router.pathname === \"/event\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_widgets_SubNavigation__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                            lineNumber: 112,\n                            columnNumber: 15\n                        }, this) : router.pathname === \"/best\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_widgets_SubNavigation__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 17\n                        }, this) : \"\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: props.children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MainLayout, \"Cr/NkykU9jnxlJKXISuWpuCcQg8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        recoil__WEBPACK_IMPORTED_MODULE_8__.useRecoilValue\n    ];\n});\n_c = MainLayout;\nvar _c;\n$RefreshReg$(_c, \"MainLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y0FBY3NDLEdBQUcsQ0FBQ0wsQ0FBQUEsb0JBQ2pDLDhEQUFDRTs0Q0FFQ1IsV0FBVy9CLE9BQU9HLFFBQVEsS0FBS2tDLElBQUlYLElBQUksR0FBRyxXQUFXLEVBQUU7c0RBRXZELDRFQUFDbEMsa0RBQUlBO2dEQUFDb0MsTUFBTVMsSUFBSVgsSUFBSTswREFBR1csSUFBSXJCLElBQUk7Ozs7OzsyQ0FIMUJxQixJQUFJTSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQVVyQixFQUFFO3dCQUdOM0MsT0FBT0csUUFBUSxLQUFLLHlCQUNsQiw4REFBQ1IsOERBQWFBOzs7O21DQUVkSyxPQUFPRyxRQUFRLEtBQUssd0JBQ2xCLDhEQUFDUiw4REFBYUE7Ozs7bUNBQ1osRUFBRTs7Ozs7Ozs7Ozs7OzBCQVVkLDhEQUFDbUM7Z0JBQUlDLFdBQVU7MEJBQ1poQyxNQUFNNkMsUUFBUTs7Ozs7Ozs7QUFJdkIsQ0FBQztHQTVHdUI5Qzs7UUFFUEwsa0RBQVNBO1FBY1JJLGtEQUFjQTs7O0tBaEJSQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dHMvTWFpbkxheW91dC50c3g/NzRjNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvL3JlYWN0XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG4vL25leHRcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuLy9jb21wb25lbnRcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uL21vZGFscy9Nb2RhbCdcclxuaW1wb3J0IFN1Yk5hdmlnYXRpb24gZnJvbSAnLi4vd2lkZ2V0cy9TdWJOYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgeyBib3R0b21OYXZNZW51VHlwZSwgYm90dG9tU3ViQ2F0ZWdvcnlMaXN0LCBib3R0b21TdWJOYXZNZW51VHlwZSB9IGZyb20gJ0AvdHlwZXMvbmF2TWVudVR5cGUnXHJcbmltcG9ydCB7IGNhcnRTdGF0ZSB9IGZyb20gJ0Avc3RhdGUvY2FydFN0YXRlJ1xyXG5pbXBvcnQgeyBmaWx0ZXJNZW51VHlwZSwgZmlsdGVyU3ViQ2F0ZWdvcnlUeXBlIH0gZnJvbSAnQC90eXBlcy9oZWFkZXIvZmlsdGVyVHlwZSdcclxuaW1wb3J0IFNpZ251cCBmcm9tICcuLi9tb2RhbHMvU2lnbnVwJ1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vbW9kYWxzL0xvZ2luJ1xyXG5cclxuLy9yZWNvaWxcclxuaW1wb3J0IHsgdXNlUmVjb2lsVmFsdWUgfSBmcm9tICdyZWNvaWwnXHJcblxyXG4vLyBpbXBvcnQgeyBib3R0b21OYXZEYXRhIH0gZnJvbSAnLi4vLi4vZGF0YXMvbmF2RGF0YSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5MYXlvdXQocHJvcHM6IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc29sZS5sb2cocm91dGVyLnBhdGhuYW1lKVxyXG5cclxuICAvLyBjb25zdCBjYXJ0UGF0aE5hbWU6U3RyaW5nID0gJy9jYXJ0JztcclxuICAvLyBjb25zdCBbIGlzQ2FydCwgc2V0SXNDYXJ0IF0gPSB1c2VTdGF0ZTxCb29sZWFuPihmYWxzZSlcclxuXHJcbiAgY29uc3QgW25hdkJvdHRvbURhdGEsIHNldE5hdkJvdHRvbURhdGFdID0gdXNlU3RhdGU8Ym90dG9tTmF2TWVudVR5cGVbXT4oKVxyXG4gIGNvbnN0IFtpc01vZGFsLCBzZXRJc01vZGFsXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIilcclxuXHJcblxyXG4gIC8vIO2ajOybkOqwgOyehSDrqqjri6zssL0g7YWM7Iqk7Yq4XHJcbiAgLy8gY29uc3QgW2lzTG9naW5WaWV3LCBzZXRJc0xvZ2luVmlld10gPSB1c2VTdGF0ZTxCb29sZWFuPihmYWxzZSlcclxuICAvLyBjb25zdCBbIGlzU2lnbnVwVmlldywgc2V0SXNTaWdudXBWaWV3IF0gPSB1c2VTdGF0ZTxCb29sZWFuPihmYWxzZSlcclxuXHJcbiAgY29uc3QgY2FydENudCA9IHVzZVJlY29pbFZhbHVlKGNhcnRTdGF0ZSlcclxuXHJcbiAgY29uc3QgW2hlYWRlck1lbnVzLCBzZXRIZWFkZXJNZW51c10gPSB1c2VTdGF0ZTxib3R0b21TdWJOYXZNZW51VHlwZVtdPigpXHJcbiAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZTxmaWx0ZXJNZW51VHlwZVtdPigpXHJcbiAgY29uc3QgW3N1YkNhdGVnb3J5LCBzZXRTdWJDYXRlZ29yeV0gPSB1c2VTdGF0ZTxmaWx0ZXJTdWJDYXRlZ29yeVR5cGVbXT4oKVxyXG5cclxuICBjb25zdCBoYW5kbGVGaWx0ZXIgPSAobmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXRTdWJDYXRlZ29yeShjYXRlZ29yeT8uZmlsdGVyKChpdGVtOiBmaWx0ZXJNZW51VHlwZSkgPT4gaXRlbS5uYW1lID09PSBuYW1lKSlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBpZihyb3V0ZXIucGF0aG5hbWUgPT09IGNhcnRQYXRoTmFtZSkge1xyXG4gICAgLy8gICBzZXRJc0NhcnQodHJ1ZSlcclxuICAgIC8vIH1cclxuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvbmF2JylcclxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4gc2V0TmF2Qm90dG9tRGF0YShkYXRhKSlcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIGlzTW9kYWw9e2lzTW9kYWx9XHJcbiAgICAgICAgc2V0SXNNb2RhbD17c2V0SXNNb2RhbH1cclxuICAgICAgLz5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlN0YXJCdWNrcyBDbG9uZSBTaXRlXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiU3RhckJ1Y2tzLCBDbG9uZSwgU2l0ZVwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJKYXNvbiBBaG5cIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiYXNzZXRzL2Nzcy9zdHlsZS5jc3NcIiAvPlxyXG4gICAgICAgIDx0aXRsZT5TdGFyQnVja3MgQ2xvbmUgU2l0ZTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdG9wXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1pY29uXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIm1lbnUuaHRtbFwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9pY29ucy9tZW51LnN2Z1wiIGFsdD1cIlwiIC8+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGgxPuyYqOudvOyduCDsiqTthqDslrQ8L2gxPlxyXG4gICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvaWNvbnMvc2VhcmNoLnN2Z1wiIC8+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdjYXJ0LWJhZGdlJz57Y2FydENudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9pY29ucy9zaG9wcGluZy1jYXJ0LnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldElzTW9kYWwoXCJsb2dpblwiKX0+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL2ljb25zL3VzZXIuc3ZnXCIgLz48L2xpPlxyXG4gICAgICAgICAgICAgICAgey8qIDxsaSBvbkNsaWNrPXsoKT0+c2V0SXNTaWdudXBWaWV3KHRydWUpfT48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvaWNvbnMvdXNlci5zdmdcIiAvPjwvbGk+ICovfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gJy8nIHx8IHJvdXRlci5wYXRobmFtZSA9PT0gJy9ldmVudCcgfHwgcm91dGVyLnBhdGhuYW1lID09PSAnL2Jlc3QnIHx8IHJvdXRlci5wYXRobmFtZSA9PT0gJy9teXBhZ2UnID9cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYXZCb3R0b21EYXRhICYmIG5hdkJvdHRvbURhdGEubWFwKG5hdiA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bmF2LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSBuYXYubGluayA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bmF2Lmxpbmt9PntuYXYubmFtZX08L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09ICcvZXZlbnQnID9cclxuICAgICAgICAgICAgICA8U3ViTmF2aWdhdGlvbiAvPlxyXG4gICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09ICcvYmVzdCcgP1xyXG4gICAgICAgICAgICAgICAgPFN1Yk5hdmlnYXRpb24gLz5cclxuICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgey8qIHtcclxuICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9saXN0dmlld1wiID8ge1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSAqL31cclxuXHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkIiwiTGluayIsInVzZVJvdXRlciIsIk1vZGFsIiwiU3ViTmF2aWdhdGlvbiIsImNhcnRTdGF0ZSIsInVzZVJlY29pbFZhbHVlIiwiTWFpbkxheW91dCIsInByb3BzIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsInBhdGhuYW1lIiwibmF2Qm90dG9tRGF0YSIsInNldE5hdkJvdHRvbURhdGEiLCJpc01vZGFsIiwic2V0SXNNb2RhbCIsImNhcnRDbnQiLCJoZWFkZXJNZW51cyIsInNldEhlYWRlck1lbnVzIiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsInN1YkNhdGVnb3J5Iiwic2V0U3ViQ2F0ZWdvcnkiLCJoYW5kbGVGaWx0ZXIiLCJuYW1lIiwiZmlsdGVyIiwiaXRlbSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwibWV0YSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsInRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiaW1nIiwic3JjIiwiYWx0IiwiaDEiLCJuYXYiLCJ1bCIsImxpIiwicCIsIm9uQ2xpY2siLCJtYXAiLCJpZCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layouts/MainLayout.tsx\n"));

/***/ })

});