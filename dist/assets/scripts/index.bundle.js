!function(e){function n(n){for(var r,s,a=n[0],c=n[1],l=n[2],p=0,u=[];p<a.length;p++)s=a[p],Object.prototype.hasOwnProperty.call(_,s)&&_[s]&&u.push(_[s][0]),_[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(i&&i(n);u.length;)u.shift()();return t.push.apply(t,l||[]),o()}function o(){for(var e,n=0;n<t.length;n++){for(var o=t[n],r=!0,a=1;a<o.length;a++){var c=o[a];0!==_[c]&&(r=!1)}r&&(t.splice(n--,1),e=s(s.s=o[0]))}return e}var r={},_={index:0},t=[];function s(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=r,s.d=function(e,n,o){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)s.d(o,r,function(n){return e[n]}.bind(null,r));return o},s.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=n,a=a.slice();for(var l=0;l<a.length;l++)n(a[l]);var i=c;t.push(["./src/assets/scripts/index-app.js","vendors"]),o()}({"./src/assets/scripts/common/footer.js":
/*!*********************************************!*\
  !*** ./src/assets/scripts/common/footer.js ***!
  \*********************************************/
/*! no static exports found */function(module,exports){eval("const footer = document.querySelector('footer');\n\nconst initFooter = () => {\n  const footerUpRef = document.querySelector('.footer-up');\n\n  function scrollToTop(e) {\n    // Scroll to top logic\n    e.preventDefault();\n    window.scrollTo({\n      behavior: 'smooth',\n      top: 0,\n    });\n  }\n\n  footerUpRef.addEventListener('click', scrollToTop);\n};\n\nif (footer) {\n  initFooter();\n}\n\n\n//# sourceURL=webpack:///./src/assets/scripts/common/footer.js?")},"./src/assets/scripts/common/header.js":
/*!*********************************************!*\
  !*** ./src/assets/scripts/common/header.js ***!
  \*********************************************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"./node_modules/gsap/ScrollTrigger.js\");\n\n\n\n{\n  const headerRef = document.querySelector('.header');\n  const menuRef = document.getElementById('menu');\n  const toggleBtnRef = document.getElementById('toggle-menu');\n\n  gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__[\"ScrollTrigger\"]);\n  window.addEventListener('scroll', evt => {\n    scrollFunction();\n  });\n  function scrollFunction() {\n    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {\n      headerRef.classList.add('bg-header');\n      headerRef.classList.remove('on');\n      toggleBtnRef.classList.remove('on');\n    } else {\n      headerRef.classList.remove('bg-header');\n    }\n  }\n\n  const toggleMenu = () => {\n    toggleBtnRef.classList.toggle('on');\n    headerRef.classList.toggle('on');\n  };\n\n  toggleBtnRef.addEventListener('click', toggleMenu);\n}\n\n\n//# sourceURL=webpack:///./src/assets/scripts/common/header.js?")},"./src/assets/scripts/index-app.js":
/*!*****************************************!*\
  !*** ./src/assets/scripts/index-app.js ***!
  \*****************************************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");\n/* harmony import */ var _common_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/header */ "./src/assets/scripts/common/header.js");\n/* harmony import */ var _common_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/footer */ "./src/assets/scripts/common/footer.js");\n/* harmony import */ var _common_footer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_common_footer__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n// import { preloader } from \'./common/loader\';\n\nglobal.gsap = gsap__WEBPACK_IMPORTED_MODULE_0__["default"];\nglobal.axios = axios__WEBPACK_IMPORTED_MODULE_1___default.a;\n\n// window.addEventListener(\'load\', () => {\n//   setTimeout(() => {\n//     preloader.remove();\n//   }, 100);\n// });\n\n/*\n * form handlers end\n */\n// function disableScroll() {\n//   const containersScroll = document.querySelectorAll(\'[data-disable-page-scroll]\');\n//   containersScroll.forEach(block => {\n//     block.addEventListener(\'mouseenter\', () => {\n//       locoScroll.stop();\n//     });\n//     block.addEventListener(\'mouseleave\', () => {\n//       locoScroll.start();\n//     });\n//   });\n// }\n\n// document.addEventListener(\'DOMContentLoaded\', () => {\n//   // disableScroll();\n//   window.locoScroll.update();\n// });\n\n/** ******************************* */\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))\n\n//# sourceURL=webpack:///./src/assets/scripts/index-app.js?')}});