!function(e){function n(n){for(var i,a,o=n[0],_=n[1],l=n[2],p=0,d=[];p<o.length;p++)a=o[p],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(i in _)Object.prototype.hasOwnProperty.call(_,i)&&(e[i]=_[i]);for(c&&c(n);d.length;)d.shift()();return r.push.apply(r,l||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],i=!0,o=1;o<t.length;o++){var _=t[o];0!==s[_]&&(i=!1)}i&&(r.splice(n--,1),e=a(a.s=t[0]))}return e}var i={},s={homepage:0},r=[];function a(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=i,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)a.d(t,i,function(n){return e[n]}.bind(null,i));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="";var o=window.webpackJsonp=window.webpackJsonp||[],_=o.push.bind(o);o.push=n,o=o.slice();for(var l=0;l<o.length;l++)n(o[l]);var c=_;r.push(["./src/assets/scripts/homepage/index.js","vendors"]),t()}({"./src/assets/scripts/homepage/index.js":
/*!**********************************************!*\
  !*** ./src/assets/scripts/homepage/index.js ***!
  \**********************************************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _intro_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro/index */ \"./src/assets/scripts/homepage/intro/index.js\");\n// import './gallery';\n// import './donation';\n// import './news';\n// import './accordion';\n// import './animation';\n\n\n\n//# sourceURL=webpack:///./src/assets/scripts/homepage/index.js?")},"./src/assets/scripts/homepage/intro/index.js":
/*!****************************************************!*\
  !*** ./src/assets/scripts/homepage/intro/index.js ***!
  \****************************************************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/assets/scripts/homepage/intro/utils.js\");\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation */ \"./src/assets/scripts/homepage/intro/navigation.js\");\n/* harmony import */ var _slideshow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slideshow */ \"./src/assets/scripts/homepage/intro/slideshow.js\");\n\n\n\n\n// Preload all images\nObject(_utils__WEBPACK_IMPORTED_MODULE_0__[\"preloadImages\"])('.slide__img').then(() => {\n  // remove loader (loading class)\n  document.body.classList.remove('loading');\n  // initialize the slideshow and navigation\n  const slideshow = new _slideshow__WEBPACK_IMPORTED_MODULE_2__[\"Slideshow\"](document.querySelector('.slideshow'));\n  const navigation = new _navigation__WEBPACK_IMPORTED_MODULE_1__[\"Navigation\"](document.querySelector('.slides-nav'));\n  // navigation events\n  navigation.DOM.ctrls.next.addEventListener('click', () => slideshow.next());\n  navigation.DOM.ctrls.prev.addEventListener('click', () => slideshow.prev());\n  // set the initial navigation current slide value\n  navigation.updateCurrent(slideshow.current);\n  // set the navigation total number of slides\n  navigation.DOM.total.innerHTML =\n    slideshow.current < 10 ? `0${slideshow.slidesTotal}` : slideshow.slidesTotal;\n  // when a new slide is shown, update the navigation current slide value\n  slideshow.on('updateCurrent', position => navigation.updateCurrent(position));\n});\n\n\n//# sourceURL=webpack:///./src/assets/scripts/homepage/intro/index.js?")},"./src/assets/scripts/homepage/intro/navigation.js":
/*!*********************************************************!*\
  !*** ./src/assets/scripts/homepage/intro/navigation.js ***!
  \*********************************************************/
/*! exports provided: Navigation */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Navigation\", function() { return Navigation; });\nclass Navigation {\n    constructor(el) {\n        this.DOM = {el};\n        this.DOM.ctrls = {\n            next: this.DOM.el.querySelector('.slides-nav__button--next'),\n            prev: this.DOM.el.querySelector('.slides-nav__button--prev')\n        };\n        this.DOM.current = this.DOM.el.querySelector('.slides-nav__index-current');\n        this.DOM.total = this.DOM.el.querySelector('.slides-nav__index-total');\n    }\n    // updates the current value\n    updateCurrent(position) {\n        this.DOM.current.innerHTML = position < 10 ? `0${position+1}` : position;\n    }\n}\n\n//# sourceURL=webpack:///./src/assets/scripts/homepage/intro/navigation.js?")},"./src/assets/scripts/homepage/intro/slide.js":
/*!****************************************************!*\
  !*** ./src/assets/scripts/homepage/intro/slide.js ***!
  \****************************************************/
/*! exports provided: Slide */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Slide\", function() { return Slide; });\nclass Slide {\n    constructor(el) {\n        this.DOM = {el};\n        this.DOM.imgWrap = this.DOM.el.querySelector('.slide__img-wrap');\n        this.DOM.img = this.DOM.imgWrap.querySelector('.slide__img');\n        this.DOM.headline = this.DOM.el.querySelector('.slides__caption-headline');\n        this.DOM.text = this.DOM.headline.querySelectorAll('.text-row > span');\n        this.DOM.link = this.DOM.el.querySelector('.slides__caption-link');\n    }\n}\n\n//# sourceURL=webpack:///./src/assets/scripts/homepage/intro/slide.js?")},"./src/assets/scripts/homepage/intro/slideshow.js":
/*!********************************************************!*\
  !*** ./src/assets/scripts/homepage/intro/slideshow.js ***!
  \********************************************************/
/*! exports provided: Slideshow */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Slideshow\", function() { return Slideshow; });\n/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide */ \"./src/assets/scripts/homepage/intro/slide.js\");\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! events */ \"./node_modules/webpack/node_modules/events/events.js\");\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\n\n\n\nclass Slideshow extends events__WEBPACK_IMPORTED_MODULE_1__[\"EventEmitter\"] {\n  constructor(el) {\n    super();\n    // the main wrapper <div class=\"slideshow\">\n    this.DOM = { el };\n    // the slides\n    this.DOM.slides = [...this.DOM.el.querySelectorAll('.slide')];\n    // array of Slide obj instances\n    this.slides = [];\n    this.DOM.slides.forEach(slide => this.slides.push(new _slide__WEBPACK_IMPORTED_MODULE_0__[\"Slide\"](slide)));\n    // total number of Slides\n    this.slidesTotal = this.slides.length;\n    // current position\n    this.current = 0;\n    // some settings, like the clip paths\n    this.config = {\n      clipPath: {\n        initial: 'circle(55% at 70% 50%)',\n        final: 'circle(15% at 70% 50%)',\n        hover: 'circle(20% at 30% 50%)',\n      },\n    };\n    this.init();\n  }\n  init() {\n    // start with the first slide as the current slide\n    this.DOM.slides[this.current].classList.add('slide--current');\n    // set the initial clip path\n    gsap__WEBPACK_IMPORTED_MODULE_2__[\"gsap\"].set(this.slides[this.current].DOM.imgWrap, { clipPath: this.config.clipPath.initial });\n    // when hovering over the \"explore\" link on each slide, we animate the clip path from this.config.clipPath.initial to this.config.clipPath.hover\n    for (const slide of this.slides) {\n      slide.DOM.link.addEventListener('mouseenter', () => {\n        gsap__WEBPACK_IMPORTED_MODULE_2__[\"gsap\"].killTweensOf(slide.DOM.imgWrap);\n        gsap__WEBPACK_IMPORTED_MODULE_2__[\"gsap\"].to(slide.DOM.imgWrap, {\n          duration: 1,\n          ease: 'expo',\n          clipPath: this.config.clipPath.hover,\n        });\n      });\n      slide.DOM.link.addEventListener('mouseleave', () => {\n        gsap__WEBPACK_IMPORTED_MODULE_2__[\"gsap\"].killTweensOf(slide.DOM.imgWrap);\n        gsap__WEBPACK_IMPORTED_MODULE_2__[\"gsap\"].to(slide.DOM.imgWrap, {\n          duration: 1,\n          ease: 'expo',\n          clipPath: this.config.clipPath.initial,\n        });\n      });\n    }\n  }\n  // navigate to the next slide\n  next() {\n    this.navigate('next');\n  }\n  // navigate to the previous slide\n  prev() {\n    this.navigate('prev');\n  }\n  navigate(direction) {\n    // if animating do nothing\n    if (this.isAnimating) {\n      return false;\n    }\n    this.isAnimating = true;\n    // get the current slide\n    const currentSlide = this.slides[this.current];\n    // update current\n    if (direction === 'next') {\n      this.current = this.current < this.slidesTotal - 1 ? this.current + 1 : 0;\n    } else {\n      this.current = this.current > 0 ? this.current - 1 : this.slidesTotal - 1;\n    }\n    // now get the upcoming slide\n    const upcomingSlide = this.slides[this.current];\n\n    // animate things...\n    gsap__WEBPACK_IMPORTED_MODULE_2__[\"gsap\"]\n      .timeline({\n        // add class current to the upcoming slide (pointer events related)\n        onStart: () => upcomingSlide.DOM.el.classList.add('slide--current'),\n        // and remove that class from the currentSlide when the animation ends\n        onComplete: () => {\n          this.isAnimating = false;\n          currentSlide.DOM.el.classList.remove('slide--current');\n        },\n      })\n      .addLabel('start', 0)\n      // set the initial styles for the upcoming slide imgWrap: clip path and translateY position\n      .set(\n        upcomingSlide.DOM.imgWrap,\n        {\n          y: direction === 'next' ? '100%' : '-100%',\n          clipPath: this.config.clipPath.final,\n        },\n        'start',\n      )\n      // also set the opacity of the upcoming slide to 1\n      .set(upcomingSlide.DOM.el, { opacity: 1 }, 'start')\n      // set the initial styles for the upcoming slide img: translateY position\n      // same for the texts and link elements\n      .set(upcomingSlide.DOM.img, { y: direction === 'next' ? '-50%' : '50%' }, 'start')\n      .set(upcomingSlide.DOM.text, { y: direction === 'next' ? '100%' : '-100%' }, 'start')\n      .set(upcomingSlide.DOM.link, { opacity: 0 }, 'start')\n      // animate the clip path from this.config.clipPath.initial to this.config.clipPath.final\n      .to(\n        currentSlide.DOM.imgWrap,\n        {\n          duration: 1,\n          ease: 'power3',\n          clipPath: this.config.clipPath.final,\n          rotation: 0.001, // bugfix\n        },\n        'start',\n      )\n      // animate the current slide texts out\n      .to(\n        currentSlide.DOM.text,\n        {\n          duration: 1,\n          ease: 'power3',\n          y: direction === 'next' ? '-100%' : '100%',\n        },\n        'start',\n      )\n      // animate the current slide link out\n      .to(\n        currentSlide.DOM.link,\n        {\n          duration: 0.5,\n          ease: 'power3',\n          opacity: 0,\n        },\n        'start',\n      )\n      // move the current slide away\n      .to(\n        currentSlide.DOM.imgWrap,\n        {\n          duration: 1,\n          ease: 'power2.inOut',\n          y: direction === 'next' ? '-100%' : '100%',\n          rotation: 0.001,\n        },\n        'start+=0.6',\n      )\n      .to(\n        currentSlide.DOM.img,\n        {\n          duration: 1,\n          ease: 'power2.inOut',\n          y: direction === 'next' ? '50%' : '-50%',\n        },\n        'start+=0.6',\n      )\n      // and the upcoming slide in\n      .to(\n        upcomingSlide.DOM.imgWrap,\n        {\n          duration: 1,\n          ease: 'power2.inOut',\n          y: '0%',\n          rotation: 0.001,\n        },\n        'start+=0.6',\n      )\n      .to(\n        upcomingSlide.DOM.img,\n        {\n          duration: 1,\n          ease: 'power2.inOut',\n          y: '0%',\n        },\n        'start+=0.6',\n      )\n      // animate the upcoming slide clip path to the initial shape\n      .to(\n        upcomingSlide.DOM.imgWrap,\n        {\n          duration: 1.5,\n          ease: 'expo.inOut',\n          clipPath: this.config.clipPath.initial,\n        },\n        'start+=1.2',\n      )\n      // animate the upcoming slide texts in\n      .to(\n        upcomingSlide.DOM.text,\n        {\n          duration: 1.5,\n          ease: 'expo.inOut',\n          y: '0%',\n          rotation: 0.001,\n          stagger: direction === 'next' ? 0.1 : -0.1,\n        },\n        'start+=1.1',\n      )\n      // animate the upcoming slide link in\n      .to(\n        upcomingSlide.DOM.link,\n        {\n          duration: 1,\n          ease: 'expo.in',\n          opacity: 1,\n        },\n        'start+=1.4',\n      );\n\n    // update the slideshow current value\n    this.emit('updateCurrent', this.current);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/assets/scripts/homepage/intro/slideshow.js?")},"./src/assets/scripts/homepage/intro/utils.js":
/*!****************************************************!*\
  !*** ./src/assets/scripts/homepage/intro/utils.js ***!
  \****************************************************/
/*! exports provided: preloadImages */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preloadImages", function() { return preloadImages; });\nconst imagesLoaded = __webpack_require__(/*! imagesloaded */ "./node_modules/imagesloaded/imagesloaded.js");\n\n// Preload images\nconst preloadImages = (selector = \'img\') => {\n  return new Promise(resolve => {\n    imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve);\n  });\n};\n\n\n\n\n//# sourceURL=webpack:///./src/assets/scripts/homepage/intro/utils.js?')}});