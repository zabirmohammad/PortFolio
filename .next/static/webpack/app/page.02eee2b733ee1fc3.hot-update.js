"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/project.tsx":
/*!********************************!*\
  !*** ./components/project.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Project; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Project(param) {\n    let { title, description, tags, imageUrl } = param;\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll)({\n        target: ref,\n        offset: [\n            \"0 1\",\n            \"1.33 1\"\n        ]\n    });\n    const scaleProgess = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        0.8,\n        1\n    ]);\n    const opacityProgess = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        0.6,\n        1\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n        ref: ref,\n        style: {\n            scale: scaleProgess,\n            opacity: opacityProgess\n        },\n        className: \"group mb-3 sm:mb-8 last:mb-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"bg-gray-100 max-w-[56rem] max-h-[16rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[65%] flex flex-col h-full sm:group-even:ml-[18rem]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-lg font-medium\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\zabir_portfolio\\\\components\\\\project.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-2 leading-relaxed text-gray-700 dark:text-white/70\",\n                            children: authors\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\zabir_portfolio\\\\components\\\\project.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex flex-wrap mt-4 gap-2 sm:mt-auto\",\n                            children: tags.map((tag, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70\",\n                                    children: tag\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\zabir_portfolio\\\\components\\\\project.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\zabir_portfolio\\\\components\\\\project.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\zabir_portfolio\\\\components\\\\project.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    src: imageUrl,\n                    alt: \"Project I worked on\",\n                    quality: 95,\n                    className: \"absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl   transition    group-hover:scale-[1.04]   group-hover:-translate-x-3   group-hover:translate-y-3   group-hover:-rotate-2      group-even:group-hover:translate-x-3   group-even:group-hover:translate-y-3   group-even:group-hover:rotate-2      group-even:right-[initial] group-even:-left-40\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\zabir_portfolio\\\\components\\\\project.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\zabir_portfolio\\\\components\\\\project.tsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\zabir_portfolio\\\\components\\\\project.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Project, \"bUn7Yqu7iysk+L6Z0DhRIR4HchU=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform\n    ];\n});\n_c = Project;\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcHJvamVjdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUUrQjtBQUVBO0FBQ2lDO0FBSWpELFNBQVNLLFFBQVEsS0FLakI7UUFMaUIsRUFDOUJDLEtBQUssRUFDTEMsV0FBVyxFQUNYQyxJQUFJLEVBQ0pDLFFBQVEsRUFDSyxHQUxpQjs7SUFNOUIsTUFBTUMsTUFBTVYsNkNBQU1BLENBQWlCO0lBQ25DLE1BQU0sRUFBRVcsZUFBZSxFQUFFLEdBQUdSLHdEQUFTQSxDQUFDO1FBQ3BDUyxRQUFRRjtRQUNSRyxRQUFRO1lBQUM7WUFBTztTQUFTO0lBQzNCO0lBQ0EsTUFBTUMsZUFBZVYsMkRBQVlBLENBQUNPLGlCQUFpQjtRQUFDO1FBQUc7S0FBRSxFQUFFO1FBQUM7UUFBSztLQUFFO0lBQ25FLE1BQU1JLGlCQUFpQlgsMkRBQVlBLENBQUNPLGlCQUFpQjtRQUFDO1FBQUc7S0FBRSxFQUFFO1FBQUM7UUFBSztLQUFFO0lBRXJFLHFCQUNFLDhEQUFDVCxpREFBTUEsQ0FBQ2MsR0FBRztRQUNUTixLQUFLQTtRQUNMTyxPQUFPO1lBQ0xDLE9BQU9KO1lBQ1BLLFNBQVNKO1FBQ1g7UUFDQUssV0FBVTtrQkFFViw0RUFBQ0M7WUFBUUQsV0FBVTs7OEJBQ2pCLDhEQUFDSjtvQkFBSUksV0FBVTs7c0NBQ2IsOERBQUNFOzRCQUFHRixXQUFVO3NDQUF1QmQ7Ozs7OztzQ0FDckMsOERBQUNpQjs0QkFBRUgsV0FBVTtzQ0FDVkk7Ozs7OztzQ0FFSCw4REFBQ0M7NEJBQUdMLFdBQVU7c0NBQ1haLEtBQUtrQixHQUFHLENBQUMsQ0FBQ0MsS0FBS0Msc0JBQ2QsOERBQUNDO29DQUNDVCxXQUFVOzhDQUdUTzttQ0FGSUM7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBUWIsOERBQUMzQixrREFBS0E7b0JBQ0o2QixLQUFLckI7b0JBQ0xzQixLQUFJO29CQUNKQyxTQUFTO29CQUNUWixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQWdCcEI7R0E3RHdCZjs7UUFPTUYsb0RBQVNBO1FBSWhCQyx1REFBWUE7UUFDVkEsdURBQVlBOzs7S0FaYkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0LnRzeD83Y2U1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHByb2plY3RzRGF0YSB9IGZyb20gXCJAL2xpYi9kYXRhXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBtb3Rpb24sIHVzZVNjcm9sbCwgdXNlVHJhbnNmb3JtIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbnR5cGUgUHJvamVjdFByb3BzID0gKHR5cGVvZiBwcm9qZWN0c0RhdGEpW251bWJlcl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KHtcclxuICB0aXRsZSxcclxuICBkZXNjcmlwdGlvbixcclxuICB0YWdzLFxyXG4gIGltYWdlVXJsLFxyXG59OiBQcm9qZWN0UHJvcHMpIHtcclxuICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VTY3JvbGwoe1xyXG4gICAgdGFyZ2V0OiByZWYsXHJcbiAgICBvZmZzZXQ6IFtcIjAgMVwiLCBcIjEuMzMgMVwiXSxcclxuICB9KTtcclxuICBjb25zdCBzY2FsZVByb2dlc3MgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMV0sIFswLjgsIDFdKTtcclxuICBjb25zdCBvcGFjaXR5UHJvZ2VzcyA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAxXSwgWzAuNiwgMV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXZcclxuICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgc2NhbGU6IHNjYWxlUHJvZ2VzcyxcclxuICAgICAgICBvcGFjaXR5OiBvcGFjaXR5UHJvZ2VzcyxcclxuICAgICAgfX1cclxuICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgbWItMyBzbTptYi04IGxhc3Q6bWItMFwiXHJcbiAgICA+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIG1heC13LVs1NnJlbV0gbWF4LWgtWzE2cmVtXSBib3JkZXIgYm9yZGVyLWJsYWNrLzUgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gc206cHItOCByZWxhdGl2ZSBzbTpoLVsyMHJlbV0gaG92ZXI6YmctZ3JheS0yMDAgdHJhbnNpdGlvbiBzbTpncm91cC1ldmVuOnBsLTggZGFyazp0ZXh0LXdoaXRlIGRhcms6Ymctd2hpdGUvMTAgZGFyazpob3ZlcjpiZy13aGl0ZS8yMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNCBwYi03IHB4LTUgc206cGwtMTAgc206cHItMiBzbTpwdC0xMCBzbTptYXgtdy1bNjUlXSBmbGV4IGZsZXgtY29sIGgtZnVsbCBzbTpncm91cC1ldmVuOm1sLVsxOHJlbV1cIj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtXCI+e3RpdGxlfTwvaDM+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIGxlYWRpbmctcmVsYXhlZCB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC13aGl0ZS83MFwiPlxyXG4gICAgICAgICAgICB7YXV0aG9yc31cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBtdC00IGdhcC0yIHNtOm10LWF1dG9cIj5cclxuICAgICAgICAgICAge3RhZ3MubWFwKCh0YWcsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibGFjay9bMC43XSBweC0zIHB5LTEgdGV4dC1bMC43cmVtXSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgZGFyazp0ZXh0LXdoaXRlLzcwXCJcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3RhZ31cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPXtpbWFnZVVybH1cclxuICAgICAgICAgIGFsdD1cIlByb2plY3QgSSB3b3JrZWQgb25cIlxyXG4gICAgICAgICAgcXVhbGl0eT17OTV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBoaWRkZW4gc206YmxvY2sgdG9wLTggLXJpZ2h0LTQwIHctWzI4LjI1cmVtXSByb3VuZGVkLXQtbGcgc2hhZG93LTJ4bFxyXG4gICAgICAgIHRyYW5zaXRpb24gXHJcbiAgICAgICAgZ3JvdXAtaG92ZXI6c2NhbGUtWzEuMDRdXHJcbiAgICAgICAgZ3JvdXAtaG92ZXI6LXRyYW5zbGF0ZS14LTNcclxuICAgICAgICBncm91cC1ob3Zlcjp0cmFuc2xhdGUteS0zXHJcbiAgICAgICAgZ3JvdXAtaG92ZXI6LXJvdGF0ZS0yXHJcblxyXG4gICAgICAgIGdyb3VwLWV2ZW46Z3JvdXAtaG92ZXI6dHJhbnNsYXRlLXgtM1xyXG4gICAgICAgIGdyb3VwLWV2ZW46Z3JvdXAtaG92ZXI6dHJhbnNsYXRlLXktM1xyXG4gICAgICAgIGdyb3VwLWV2ZW46Z3JvdXAtaG92ZXI6cm90YXRlLTJcclxuXHJcbiAgICAgICAgZ3JvdXAtZXZlbjpyaWdodC1baW5pdGlhbF0gZ3JvdXAtZXZlbjotbGVmdC00MFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVJlZiIsIkltYWdlIiwibW90aW9uIiwidXNlU2Nyb2xsIiwidXNlVHJhbnNmb3JtIiwiUHJvamVjdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0YWdzIiwiaW1hZ2VVcmwiLCJyZWYiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJ0YXJnZXQiLCJvZmZzZXQiLCJzY2FsZVByb2dlc3MiLCJvcGFjaXR5UHJvZ2VzcyIsImRpdiIsInN0eWxlIiwic2NhbGUiLCJvcGFjaXR5IiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsImgzIiwicCIsImF1dGhvcnMiLCJ1bCIsIm1hcCIsInRhZyIsImluZGV4IiwibGkiLCJzcmMiLCJhbHQiLCJxdWFsaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/project.tsx\n"));

/***/ })

});