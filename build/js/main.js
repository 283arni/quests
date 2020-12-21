/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ie_fix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/ie-fix */ "./js/utils/ie-fix.js");
/* harmony import */ var _utils_ios_vh_fix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/ios-vh-fix */ "./js/utils/ios-vh-fix.js");
/* harmony import */ var _modules_init_modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/init-modals */ "./js/modules/init-modals.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/form */ "./js/modules/form.js");
/* harmony import */ var _modules_location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/location */ "./js/modules/location.js");
/* harmony import */ var _modules_quests__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/quests */ "./js/modules/quests.js");
/* harmony import */ var _modules_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/table */ "./js/modules/table.js");






 // Utils
// ---------------------------------

Object(_utils_ie_fix__WEBPACK_IMPORTED_MODULE_0__["ieFix"])();
Object(_utils_ios_vh_fix__WEBPACK_IMPORTED_MODULE_1__["iosVhFix"])(); // Modules
// ---------------------------------

Object(_modules_init_modals__WEBPACK_IMPORTED_MODULE_2__["initModals"])();
Object(_modules_form__WEBPACK_IMPORTED_MODULE_3__["default"])();
Object(_modules_location__WEBPACK_IMPORTED_MODULE_4__["default"])();
Object(_modules_quests__WEBPACK_IMPORTED_MODULE_5__["default"])();
Object(_modules_table__WEBPACK_IMPORTED_MODULE_6__["default"])();

/***/ }),

/***/ "./js/modules/form.js":
/*!****************************!*\
  !*** ./js/modules/form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var KeyName = {
    TAB: 'Tab',
    ENTER: 'Enter'
  };
  var modal = document.querySelector('.modal_feedback');
  var fieldName = modal.querySelector('#name');
  var errorName = modal.querySelector('#error-name');
  var fieldMail = modal.querySelector('#mail');
  var errorMail = modal.querySelector('#error-mail');
  var textarea = modal.querySelector('#text');
  var submitBtn = modal.querySelector('button');
  var checkbox = modal.querySelector('#check');
  var checkboxLabel = modal.querySelector('#check-label');
  var errorCheck = modal.querySelector('#error-check');
  var closeBtn = modal.querySelector('.modal__close-btn');

  var loopForm = function loopForm() {
    closeBtn.addEventListener('keydown', function (e) {
      e.preventDefault();

      if (e.key === KeyName.TAB) {
        fieldName.focus();
      }

      if (e.key === KeyName.ENTER) {
        closeBtn.click();
      }
    });
  };

  var removeStandartValidation = function removeStandartValidation(element) {
    element.removeAttribute('required');
    element.removeAttribute('minlength');
  };

  var validateElementFail = function validateElementFail(element, errorField, text) {
    if (element) {
      element.style.border = '1px solid #f2890f';
    }

    errorField.textContent = text;
    errorField.style.display = 'inline';
  };

  var validateElementSuccess = function validateElementSuccess(element, errorField) {
    if (element) {
      element.style.border = '1px solid #2CDB52';
    }

    errorField.style.display = 'none';
  };

  var validateForm = function validateForm() {
    var isValid = true;
    var isAt = fieldMail.value.indexOf('@') < 0;

    if (fieldName.value.length <= 3) {
      validateElementFail(fieldName, errorName, 'Введите свое имя');
      isValid = false;
    } else {
      validateElementSuccess(fieldName, errorName);
    }

    if (fieldMail.value.length <= 6 || isAt) {
      validateElementFail(fieldMail, errorMail, 'Введён некорректный e-mail, попробуйте заново');
      isValid = false;
    } else {
      validateElementSuccess(fieldMail, errorMail);
    }

    if (!checkbox.checked) {
      validateElementFail(null, errorCheck, 'Нужно принять соглашение');
      isValid = false;
    } else {
      validateElementSuccess(null, errorCheck);
    }

    return isValid;
  };

  submitBtn.disabled = true;
  removeStandartValidation(fieldName);
  removeStandartValidation(fieldMail);
  loopForm();
  modal.addEventListener('change', function () {
    validateForm();

    if (validateForm()) {
      submitBtn.disabled = false;
      return;
    }

    submitBtn.disabled = true;
  });
  submitBtn.addEventListener('click', function () {
    var question = {
      name: fieldName.value,
      mail: fieldMail.value,
      text: textarea.value
    };
    localStorage.setItem('question', JSON.stringify(question));
  });
  checkboxLabel.addEventListener('keydown', function (e) {
    if (e.key === KeyName.ENTER) {
      checkboxLabel.click();
    }
  });
});

/***/ }),

/***/ "./js/modules/init-modals.js":
/*!***********************************!*\
  !*** ./js/modules/init-modals.js ***!
  \***********************************/
/*! exports provided: initModals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initModals", function() { return initModals; });
/* harmony import */ var _utils_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/modal */ "./js/utils/modal.js");

var modals = document.querySelectorAll('.modal');
var modalFeedback = document.querySelector('.modal_feedback');
var modalFeedbackBtns = document.querySelectorAll('[data-modal="feedback"]');
var modalSuccess = document.querySelector('.modal_location');
var modalSuccessBtns = document.querySelectorAll('[data-modal="location"]'); // аргументы setupModal(modal, closeCallback, modalBtns, openCallback, noPrevDefault, preventScrollLock)
// возможна инициализация только с первыми аргументом,
// если вам нужно открывать модалку в другом месте под какими-нибудь условиями

var initModals = function initModals() {
  // фикс для редких случаев, когда модалка появляется при загрузке страницы
  window.addEventListener('load', function () {
    if (modals.length) {
      modals.forEach(function (el) {
        setTimeout(function () {
          el.classList.remove('modal_preload');
        }, 100);
      });
    }
  });

  if (modalFeedback && modalFeedbackBtns.length) {
    Object(_utils_modal__WEBPACK_IMPORTED_MODULE_0__["setupModal"])(modalFeedback, false, modalFeedbackBtns, false, false);
  }

  if (modalSuccess && modalSuccessBtns.length) {
    Object(_utils_modal__WEBPACK_IMPORTED_MODULE_0__["setupModal"])(modalSuccess, false, modalSuccessBtns);
  }
};



/***/ }),

/***/ "./js/modules/location.js":
/*!********************************!*\
  !*** ./js/modules/location.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var modal = document.querySelector('.modal_location');
  var closeBtn = modal.querySelector('.modal__close-btn');
  var locationBtn = modal.querySelector('.modal__location-content button');
  var cities = modal.querySelectorAll('li');

  var removeActiveClass = function removeActiveClass() {
    var _iterator = _createForOfIteratorHelper(cities),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var city = _step.value;
        city.classList.remove('active');
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  var loopLocation = function loopLocation() {
    closeBtn.addEventListener('keydown', function (e) {
      e.preventDefault();

      if (e.key === 'Tab') {
        locationBtn.focus();
      }

      if (e.key === 'Enter') {
        closeBtn.click();
      }
    });
  };

  loopLocation();

  var _iterator2 = _createForOfIteratorHelper(cities),
      _step2;

  try {
    var _loop = function _loop() {
      var city = _step2.value;
      city.addEventListener('click', function () {
        removeActiveClass();
        city.classList.add('active');
      });
      city.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          city.click();
        }
      });
    };

    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
});

/***/ }),

/***/ "./js/modules/quests.js":
/*!******************************!*\
  !*** ./js/modules/quests.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var container = document.querySelector('.swiper-container');
  var Swiper = window.Swiper;
  var swiperTabs = null;

  if (document.documentElement.clientWidth < 768) {
    swiperTabs = new Swiper(container, {
      slidesPerView: 'auto'
    });
  }

  return swiperTabs;
});

/***/ }),

/***/ "./js/modules/table.js":
/*!*****************************!*\
  !*** ./js/modules/table.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var EnterKey = 'Enter';
  var table = document.querySelector('.table') || null;

  if (!table) {
    return;
  }

  var dateBtn = table.querySelector('#choose-date');
  var paymentBtn = table.querySelector('#payment');
  var date = table.querySelector('#date');
  var info = table.querySelector('#info');
  var samples = table.querySelector('#samples');
  var times = table.querySelector('#times');
  var labels = table.querySelectorAll('label');
  dateBtn.addEventListener('click', function () {
    date.style.display = 'inline';
    samples.style.display = 'flex';
    times.style.display = 'flex';
  });

  var _iterator = _createForOfIteratorHelper(labels),
      _step;

  try {
    var _loop = function _loop() {
      var labelCheck = _step.value;
      labelCheck.addEventListener('click', function () {
        if (!labelCheck.control.disabled) {
          paymentBtn.style.display = 'inline-block';

          if (document.documentElement.clientWidth > 360) {
            info.style.display = 'flex';
            return;
          }

          info.style.display = 'inline-block';
        }
      });
      labelCheck.addEventListener('keydown', function (e) {
        if (e.key === EnterKey) {
          labelCheck.click();
        }
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});

/***/ }),

/***/ "./js/utils/ie-fix.js":
/*!****************************!*\
  !*** ./js/utils/ie-fix.js ***!
  \****************************/
/*! exports provided: ieFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ieFix", function() { return ieFix; });
/* eslint-disable */
var ieFix = function ieFix() {
  // Polyfills
  //---------------------------------
  // forEach
  // CustomEvent
  // includes
  // matches
  // closest
  // prepend
  // append
  // before
  // remove
  // startsWith
  // forEach
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;

      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  } // CustomEvent


  (function () {
    if (typeof window.CustomEvent === 'function') return false;

    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  })(); // includes


  if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
      value: function value(searchElement, fromIndex) {
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        var o = Object(this);
        var len = o.length >>> 0;

        if (len === 0) {
          return false;
        }

        var n = fromIndex | 0;
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

        function sameValueZero(x, y) {
          return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
        }

        while (k < len) {
          if (sameValueZero(o[k], searchElement)) {
            return true;
          }

          k++;
        }

        return false;
      }
    });
  } // matches


  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s);
      var i = matches.length; // eslint-disable-next-line no-empty

      while (--i >= 0 && matches.item(i) !== this) {}

      return i > -1;
    };
  } // closest


  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;

      do {
        if (el.matches(s)) {
          return el;
        }

        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);

      return null;
    };
  } // prepend


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("prepend")) {
        return;
      }

      Object.defineProperty(item, "prepend", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function prepend() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.insertBefore(docFrag, this.firstChild);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]); // append


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("append")) {
        return;
      }

      Object.defineProperty(item, "append", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function append() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.appendChild(docFrag);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]); // before


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("before")) {
        return;
      }

      Object.defineProperty(item, "before", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function before() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.parentNode.insertBefore(docFrag, this);
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]); // remove


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("remove")) {
        return;
      }

      Object.defineProperty(item, "remove", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function remove() {
          if (this.parentNode !== null) {
            this.parentNode.removeChild(this);
          }
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]); // startsWith


  if (!String.prototype.startsWith) {
    // eslint-disable-next-line no-extend-native
    Object.defineProperty(String.prototype, "startsWith", {
      value: function value(search, rawPos) {
        var pos = rawPos > 0 ? rawPos | 0 : 0;
        return this.substring(pos, pos + search.length) === search;
      }
    });
  } // Fixes
  //---------------------------------
  // ie download


  var ie11Download = function ie11Download(el) {
    if (el.href === "") {
      throw Error("The element has no href value.");
    }

    var filename = el.getAttribute("download");

    if (filename === null || filename === "") {
      var tmp = el.href.split("/");
      filename = tmp[tmp.length - 1];
    }

    el.addEventListener("click", function (evt) {
      evt.preventDefault();
      var xhr = new XMLHttpRequest();

      xhr.onloadstart = function () {
        xhr.responseType = "blob";
      };

      xhr.onload = function () {
        navigator.msSaveOrOpenBlob(xhr.response, filename);
      };

      xhr.open("GET", el.href, true);
      xhr.send();
    });
  };

  if (window.navigator.msSaveBlob) {
    var downloadLinks = document.querySelectorAll("a[download]");

    if (downloadLinks.length) {
      downloadLinks.forEach(function (el) {
        ie11Download(el);
      });
    }
  } // ie svg focus fix


  var unfocusableSvg = function unfocusableSvg() {
    if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
      return;
    }

    var svg = document.querySelectorAll('svg');
    svg.forEach(function (el) {
      el.setAttribute('focusable', 'false');
    });
  };

  unfocusableSvg(); //ie footer nailing

  var ieFooterNailing = function ieFooterNailing() {
    var main = document.querySelector('main');
    var header = document.querySelector('.header');
    var footer = document.querySelector('.footer');
    var headerH;
    var footerH;
    var mainHMin;

    if (!main || !(!!window.MSInputMethodContext && !!document.documentMode)) {
      return;
    }

    var mainHeight = function mainHeight() {
      // eslint-disable-next-line no-unused-expressions
      header ? headerH = header.getBoundingClientRect().height : headerH = 0; // eslint-disable-next-line no-unused-expressions

      footer ? footerH = footer.getBoundingClientRect().height : footerH = 0;
      mainHMin = window.innerHeight;
      main.style.minHeight = mainHMin - (headerH + footerH) + 'px';
    };

    document.addEventListener('loadDOMContentLoaded', mainHeight());
    window.addEventListener('resize', mainHeight);
  };

  ieFooterNailing();
};



/***/ }),

/***/ "./js/utils/ios-vh-fix.js":
/*!********************************!*\
  !*** ./js/utils/ios-vh-fix.js ***!
  \********************************/
/*! exports provided: iosVhFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iosVhFix", function() { return iosVhFix; });
var isIos = function isIos() {
  return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) // iPad on iOS 13 detection
  || navigator.userAgent.includes('Mac') && 'ontouchend' in document;
};

var iosVhFix = function iosVhFix() {
  if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
    if (isIos()) {
      var vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
      window.addEventListener('resize', function () {
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
      });
    }
  }
};



/***/ }),

/***/ "./js/utils/modal.js":
/*!***************************!*\
  !*** ./js/utils/modal.js ***!
  \***************************/
/*! exports provided: setupModal, openModal, closeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupModal", function() { return setupModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony import */ var _scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll-lock */ "./js/utils/scroll-lock.js");

var fieldName = document.querySelector('#name');
var closeBtnLocal = document.querySelector('.modal_location .modal__close-btn');

var focusElement = function focusElement(element) {
  setTimeout(function () {
    element.focus();
  }, 300);
};

var openModal = function openModal(modal, callback, preventScrollLock) {
  modal.classList.add('modal_active');

  if (callback) {
    callback();
  }

  if (!preventScrollLock) {
    Object(_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["disableScrolling"])();
  }
};

var closeModal = function closeModal(modal, callback, preventScrollLock) {
  modal.classList.remove('modal_active');

  if (callback) {
    callback();
  }

  if (!preventScrollLock) {
    setTimeout(_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["enableScrolling"], 300);
  }
};

var onEscPress = function onEscPress(evt, modal, callback) {
  var isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

  if (isEscKey && modal.classList.contains('modal_active')) {
    evt.preventDefault();
    closeModal(modal, callback);
  }
};

var setModalListeners = function setModalListeners(modal, closeCallback, preventScrollLock) {
  var overlay = modal.querySelector('.modal__overlay');
  var closeBtn = modal.querySelector('.modal__close-btn');
  closeBtn.addEventListener('click', function () {
    closeModal(modal, closeCallback, preventScrollLock);
  });
  overlay.addEventListener('click', function () {
    closeModal(modal, closeCallback, preventScrollLock);
  });
  document.addEventListener('keydown', function (evt) {
    onEscPress(evt, modal, closeCallback, preventScrollLock);
  });
};

var setupModal = function setupModal(modal, closeCallback, modalBtns, openCallback, noPrevDefault, preventScrollLock) {
  if (modalBtns) {
    modalBtns.forEach(function (btn) {
      btn.addEventListener('click', function (evt) {
        if (!noPrevDefault) {
          evt.preventDefault();
        }

        openModal(modal, openCallback, preventScrollLock);

        if (btn.dataset.modal === 'feedback') {
          focusElement(fieldName);
        }

        if (btn.dataset.modal === 'location') {
          focusElement(closeBtnLocal);
        }
      });
    });
  }

  setModalListeners(modal, closeCallback, preventScrollLock);
};



/***/ }),

/***/ "./js/utils/scroll-lock.js":
/*!*********************************!*\
  !*** ./js/utils/scroll-lock.js ***!
  \*********************************/
/*! exports provided: disableScrolling, enableScrolling */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableScrolling", function() { return disableScrolling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableScrolling", function() { return enableScrolling; });
var body = document.querySelector('body'); // eslint-disable-next-line consistent-return

var getScrollbarWidth = function getScrollbarWidth() {
  var outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  outer.style.msOverflowStyle = 'scrollbar';
  body.appendChild(outer);
  var inner = document.createElement('div');
  outer.appendChild(inner);
  var scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
  outer.parentNode.removeChild(outer);

  if (body.offsetHeight > window.innerHeight) {
    return scrollbarWidth;
  }
};

var getBodyScrollTop = function getBodyScrollTop() {
  return self.pageYOffset || document.documentElement && document.documentElement.ScrollTop || body && body.scrollTop;
};

var disableScrolling = function disableScrolling(noScrollbar) {
  if (!noScrollbar) {
    var scrollWidth = getScrollbarWidth();
    body.setAttribute('style', "padding-right: ".concat(scrollWidth, "px;"));
  }

  body.dataset.scrollY = "".concat(getBodyScrollTop());
  body.style.top = "-".concat(body.dataset.scrollY, "px");
  body.classList.add('scroll-lock');
};

var enableScrolling = function enableScrolling() {
  body.removeAttribute('style');
  body.classList.remove('scroll-lock');
  window.scrollTo(0, +body.dataset.scrollY);
};



/***/ })

/******/ });
//# sourceMappingURL=main.js.map