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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _modals_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/Modal */ \"./components/modals/Modal.tsx\");\n/* harmony import */ var _widgets_SubNavigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../widgets/SubNavigation */ \"./components/widgets/SubNavigation.tsx\");\n/* harmony import */ var _state_cartState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/state/cartState */ \"./state/cartState.ts\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n//react\n\nvar _s = $RefreshSig$();\n\n//next\n\n\n\n//component\n\n\n\n//recoil\n\n// import { bottomNavData } from '../../datas/navData'\nfunction MainLayout(props) {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    console.log(router.pathname);\n    // const cartPathName:String = '/cart';\n    // const [ isCart, setIsCart ] = useState<Boolean>(false)\n    const [navBottomData, setNavBottomData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [isModal, setIsModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // 회원가입 모달창 테스트\n    // const [isLoginView, setIsLoginView] = useState<Boolean>(false)\n    // const [ isSignupView, setIsSignupView ] = useState<Boolean>(false)\n    const cartCnt = (0,recoil__WEBPACK_IMPORTED_MODULE_8__.useRecoilValue)(_state_cartState__WEBPACK_IMPORTED_MODULE_7__.cartState);\n    const [headerMenus, setHeaderMenus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [subCategory, setSubCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const handleFilter = (name)=>{\n        setSubCategory(category === null || category === void 0 ? void 0 : category.filter((item)=>item.name === name));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // if(router.pathname === cartPathName) {\n        //   setIsCart(true)\n        // }\n        fetch(\"http://localhost:3001/nav\").then((res)=>res.json()).then((data)=>setNavBottomData(data));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modals_Modal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                isModal: isModal,\n                setIsModal: setIsModal\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"StarBucks Clone Site\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: \"StarBucks, Clone, Site\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"author\",\n                        content: \"Jason Ahn\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"assets/css/style.css\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"StarBucks Clone Site\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"header-top\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"menu-icon\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"menu.html\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"assets/images/icons/menu.svg\",\n                                            alt: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 38\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"온라인 스토어\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"assets/images/icons/search.svg\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"cart-badge\",\n                                                        children: cartCnt\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                                        lineNumber: 82,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        src: \"assets/images/icons/shopping-cart.svg\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                                        lineNumber: 83,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                onClick: ()=>setIsModal(\"login\"),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"assets/images/icons/user.svg\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 57\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this),\n                        router.pathname === \"/\" || router.pathname === \"/event\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"header-bottom\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    children: navBottomData && navBottomData.map((nav)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: router.pathname === nav.link ? \"active\" : \"\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                href: nav.link,\n                                                children: nav.name\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                                lineNumber: 101,\n                                                columnNumber: 27\n                                            }, this)\n                                        }, nav.id, false, {\n                                            fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 25\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 15\n                        }, this) : \"\",\n                        router.pathname === \"/event\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_widgets_SubNavigation__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                            lineNumber: 166,\n                            columnNumber: 15\n                        }, this) : router.pathname === \"/best\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_widgets_SubNavigation__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                            lineNumber: 169,\n                            columnNumber: 17\n                        }, this) : \"\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: props.children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\교육생17\\\\git\\\\Nextjs\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                lineNumber: 180,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MainLayout, \"Cr/NkykU9jnxlJKXISuWpuCcQg8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        recoil__WEBPACK_IMPORTED_MODULE_8__.useRecoilValue\n    ];\n});\n_c = MainLayout;\nvar _c;\n$RefreshReg$(_c, \"MainLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcvQixPQUFPRyxRQUFRLEtBQUtrQyxJQUFJWCxJQUFJLEdBQUcsV0FBVyxFQUFFO3NEQUV2RCw0RUFBQ2xDLGtEQUFJQTtnREFBQ29DLE1BQU1TLElBQUlYLElBQUk7MERBQUdXLElBQUlyQixJQUFJOzs7Ozs7MkNBSDFCcUIsSUFBSU0sRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0FnRWYsRUFBRTt3QkFHWjNDLE9BQU9HLFFBQVEsS0FBSyx5QkFDbEIsOERBQUNSLDhEQUFhQTs7OzttQ0FFZEssT0FBT0csUUFBUSxLQUFLLHdCQUNsQiw4REFBQ1IsOERBQWFBOzs7O21DQUNaLEVBQUU7Ozs7Ozs7Ozs7OzswQkFVZCw4REFBQ21DO2dCQUFJQyxXQUFVOzBCQUNaaEMsTUFBTTZDLFFBQVE7Ozs7Ozs7O0FBSXZCLENBQUM7R0FsS3VCOUM7O1FBRVBMLGtEQUFTQTtRQWNSSSxrREFBY0E7OztLQWhCUkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXRzL01haW5MYXlvdXQudHN4Pzc0YzYiXSwic291cmNlc0NvbnRlbnQiOlsiLy9yZWFjdFxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuLy9uZXh0XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbi8vY29tcG9uZW50XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9tb2RhbHMvTW9kYWwnXHJcbmltcG9ydCBTdWJOYXZpZ2F0aW9uIGZyb20gJy4uL3dpZGdldHMvU3ViTmF2aWdhdGlvbidcclxuaW1wb3J0IHsgYm90dG9tTmF2TWVudVR5cGUsIGJvdHRvbVN1YkNhdGVnb3J5TGlzdCwgYm90dG9tU3ViTmF2TWVudVR5cGUgfSBmcm9tICdAL3R5cGVzL25hdk1lbnVUeXBlJ1xyXG5pbXBvcnQgeyBjYXJ0U3RhdGUgfSBmcm9tICdAL3N0YXRlL2NhcnRTdGF0ZSdcclxuaW1wb3J0IHsgZmlsdGVyTWVudVR5cGUsIGZpbHRlclN1YkNhdGVnb3J5VHlwZSB9IGZyb20gJ0AvdHlwZXMvaGVhZGVyL2ZpbHRlclR5cGUnXHJcbmltcG9ydCBTaWdudXAgZnJvbSAnLi4vbW9kYWxzL1NpZ251cCdcclxuaW1wb3J0IExvZ2luIGZyb20gJy4uL21vZGFscy9Mb2dpbidcclxuXHJcbi8vcmVjb2lsXHJcbmltcG9ydCB7IHVzZVJlY29pbFZhbHVlIH0gZnJvbSAncmVjb2lsJ1xyXG5cclxuLy8gaW1wb3J0IHsgYm90dG9tTmF2RGF0YSB9IGZyb20gJy4uLy4uL2RhdGFzL25hdkRhdGEnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluTGF5b3V0KHByb3BzOiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnNvbGUubG9nKHJvdXRlci5wYXRobmFtZSlcclxuXHJcbiAgLy8gY29uc3QgY2FydFBhdGhOYW1lOlN0cmluZyA9ICcvY2FydCc7XHJcbiAgLy8gY29uc3QgWyBpc0NhcnQsIHNldElzQ2FydCBdID0gdXNlU3RhdGU8Qm9vbGVhbj4oZmFsc2UpXHJcblxyXG4gIGNvbnN0IFtuYXZCb3R0b21EYXRhLCBzZXROYXZCb3R0b21EYXRhXSA9IHVzZVN0YXRlPGJvdHRvbU5hdk1lbnVUeXBlW10+KClcclxuICBjb25zdCBbaXNNb2RhbCwgc2V0SXNNb2RhbF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpXHJcblxyXG5cclxuICAvLyDtmozsm5DqsIDsnoUg66qo64us7LC9IO2FjOyKpO2KuFxyXG4gIC8vIGNvbnN0IFtpc0xvZ2luVmlldywgc2V0SXNMb2dpblZpZXddID0gdXNlU3RhdGU8Qm9vbGVhbj4oZmFsc2UpXHJcbiAgLy8gY29uc3QgWyBpc1NpZ251cFZpZXcsIHNldElzU2lnbnVwVmlldyBdID0gdXNlU3RhdGU8Qm9vbGVhbj4oZmFsc2UpXHJcblxyXG4gIGNvbnN0IGNhcnRDbnQgPSB1c2VSZWNvaWxWYWx1ZShjYXJ0U3RhdGUpXHJcblxyXG4gIGNvbnN0IFtoZWFkZXJNZW51cywgc2V0SGVhZGVyTWVudXNdID0gdXNlU3RhdGU8Ym90dG9tU3ViTmF2TWVudVR5cGVbXT4oKVxyXG4gIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGU8ZmlsdGVyTWVudVR5cGVbXT4oKVxyXG4gIGNvbnN0IFtzdWJDYXRlZ29yeSwgc2V0U3ViQ2F0ZWdvcnldID0gdXNlU3RhdGU8ZmlsdGVyU3ViQ2F0ZWdvcnlUeXBlW10+KClcclxuXHJcbiAgY29uc3QgaGFuZGxlRmlsdGVyID0gKG5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0U3ViQ2F0ZWdvcnkoY2F0ZWdvcnk/LmZpbHRlcigoaXRlbTpmaWx0ZXJNZW51VHlwZSkgPT4gaXRlbS5uYW1lID09PSBuYW1lKSlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBpZihyb3V0ZXIucGF0aG5hbWUgPT09IGNhcnRQYXRoTmFtZSkge1xyXG4gICAgLy8gICBzZXRJc0NhcnQodHJ1ZSlcclxuICAgIC8vIH1cclxuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvbmF2JylcclxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4gc2V0TmF2Qm90dG9tRGF0YShkYXRhKSlcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIGlzTW9kYWw9e2lzTW9kYWx9XHJcbiAgICAgICAgc2V0SXNNb2RhbD17c2V0SXNNb2RhbH1cclxuICAgICAgLz5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlN0YXJCdWNrcyBDbG9uZSBTaXRlXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiU3RhckJ1Y2tzLCBDbG9uZSwgU2l0ZVwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJKYXNvbiBBaG5cIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiYXNzZXRzL2Nzcy9zdHlsZS5jc3NcIiAvPlxyXG4gICAgICAgIDx0aXRsZT5TdGFyQnVja3MgQ2xvbmUgU2l0ZTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdG9wXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1pY29uXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIm1lbnUuaHRtbFwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9pY29ucy9tZW51LnN2Z1wiIGFsdD1cIlwiIC8+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGgxPuyYqOudvOyduCDsiqTthqDslrQ8L2gxPlxyXG4gICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvaWNvbnMvc2VhcmNoLnN2Z1wiIC8+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdjYXJ0LWJhZGdlJz57Y2FydENudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9pY29ucy9zaG9wcGluZy1jYXJ0LnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHNldElzTW9kYWwoXCJsb2dpblwiKX0+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL2ljb25zL3VzZXIuc3ZnXCIgLz48L2xpPlxyXG4gICAgICAgICAgICAgICAgey8qIDxsaSBvbkNsaWNrPXsoKT0+c2V0SXNTaWdudXBWaWV3KHRydWUpfT48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvaWNvbnMvdXNlci5zdmdcIiAvPjwvbGk+ICovfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gJy8nIHx8IHJvdXRlci5wYXRobmFtZSA9PT0gJy9ldmVudCcgP1xyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG5hdkJvdHRvbURhdGEgJiYgbmF2Qm90dG9tRGF0YS5tYXAobmF2ID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtuYXYuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT09IG5hdi5saW5rID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtuYXYubGlua30+e25hdi5uYW1lfTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgLy8gOlxyXG4gICAgICAgICAgICAgIC8vIHJvdXRlci5wYXRobmFtZSA9PT0gJy9ldmVudCcgP1xyXG4gICAgICAgICAgICAgIC8vICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgLy8gICAgIDxuYXY+XHJcbiAgICAgICAgICAgICAgLy8gICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC8vICAgICAgICAgICBuYXZCb3R0b21EYXRhICYmIG5hdkJvdHRvbURhdGEubWFwKG5hdiA9PiAoXHJcbiAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICBrZXk9e25hdi5pZH1cclxuICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSBuYXYubGluayA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgIC8vICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e25hdi5saW5rfT57bmF2Lm5hbWV9PC9MaW5rPlxyXG4gICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgLy8gICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLy8gICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAvLyAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgLy8gICA8L2Rpdj5cclxuICAgICAgICAgICAgICAvLyAgIDpcclxuICAgICAgICAgICAgICAvLyAgIHJvdXRlci5wYXRobmFtZSA9PT0gJy9iZXN0JyA/XHJcbiAgICAgICAgICAgICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgIC8vICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgICAgLy8gICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgLy8gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBuYXZCb3R0b21EYXRhICYmIG5hdkJvdHRvbURhdGEubWFwKG5hdiA9PiAoXHJcbiAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAga2V5PXtuYXYuaWR9XHJcbiAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09PSBuYXYubGluayA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtuYXYubGlua30+e25hdi5uYW1lfTwvTGluaz5cclxuICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAvLyAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8vICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAvLyAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAvLyAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgLy8gICAgIDpcclxuICAgICAgICAgICAgICAvLyAgICAgcm91dGVyLnBhdGhuYW1lID09PSAnL215cGFnZScgP1xyXG4gICAgICAgICAgICAgIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgIC8vICAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgICAvLyAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgIG5hdkJvdHRvbURhdGEgJiYgbmF2Qm90dG9tRGF0YS5tYXAobmF2ID0+IChcclxuICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAga2V5PXtuYXYuaWR9XHJcbiAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT09IG5hdi5saW5rID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtuYXYubGlua30+e25hdi5uYW1lfTwvTGluaz5cclxuICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8vICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIC8vICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgLy8gICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gJy9ldmVudCcgP1xyXG4gICAgICAgICAgICAgIDxTdWJOYXZpZ2F0aW9uIC8+XHJcbiAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gJy9iZXN0JyA/XHJcbiAgICAgICAgICAgICAgICA8U3ViTmF2aWdhdGlvbiAvPlxyXG4gICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB7Lyoge1xyXG4gICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2xpc3R2aWV3XCIgPyB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9ICovfVxyXG5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJMaW5rIiwidXNlUm91dGVyIiwiTW9kYWwiLCJTdWJOYXZpZ2F0aW9uIiwiY2FydFN0YXRlIiwidXNlUmVjb2lsVmFsdWUiLCJNYWluTGF5b3V0IiwicHJvcHMiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwicGF0aG5hbWUiLCJuYXZCb3R0b21EYXRhIiwic2V0TmF2Qm90dG9tRGF0YSIsImlzTW9kYWwiLCJzZXRJc01vZGFsIiwiY2FydENudCIsImhlYWRlck1lbnVzIiwic2V0SGVhZGVyTWVudXMiLCJjYXRlZ29yeSIsInNldENhdGVnb3J5Iiwic3ViQ2F0ZWdvcnkiLCJzZXRTdWJDYXRlZ29yeSIsImhhbmRsZUZpbHRlciIsIm5hbWUiLCJmaWx0ZXIiLCJpdGVtIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJtZXRhIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJpbWciLCJzcmMiLCJhbHQiLCJoMSIsIm5hdiIsInVsIiwibGkiLCJwIiwib25DbGljayIsIm1hcCIsImlkIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layouts/MainLayout.tsx\n"));

/***/ })

});