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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./template/js/admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@confere-stores/widget-avise-me/cms.config.js":
/*!********************************************************************!*\
  !*** ./node_modules/@confere-stores/widget-avise-me/cms.config.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package.json */ "./node_modules/@confere-stores/widget-avise-me/package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./package.json */ "./node_modules/@confere-stores/widget-avise-me/package.json", 1);


/* harmony default export */ __webpack_exports__["default"] = (() => ({
  label: 'Plugin Avise-me',
  fields: [
    {
      name: 'pkg',
      widget: 'hidden',
      default: _package_json__WEBPACK_IMPORTED_MODULE_0__["name"]
    },
    {
      label: 'Ativar',
      hint: 'Habilitar notificações de ofertas',
      name: 'active',
      widget: 'boolean'
    },
    {
      name: 'desktopOnly',
      widget: 'hidden',
      default: false
    },
    {
      label: 'Opções',
      name: 'options',
      widget: 'object',
      hint: 'Personalizações do widget',
      fields: [
        {
          label: 'Habilitar "avise-me quando chegar"',
          hint: 'Notifica clientes cadastrados quando produtos sem estoque ficam disponíveis novamente',
          name: 'enableOutOfStock',
          widget: 'boolean',
          default: true
        },
        {
          label: 'Habilitar alerta de preço',
          hint: 'Notificações de redução de preço',
          name: 'enablePriceChange',
          widget: 'boolean',
          default: true
        },
        {
          name: 'popupOptions',
          widget: 'hidden',
          default: 'location=yes,height=400,width=320,status=yes'
        }
      ]
    },
    {
      name: 'productSlots',
      widget: 'hidden',
      default: 'src/append/product-slots'
    }
  ]
}));


/***/ }),

/***/ "./node_modules/@confere-stores/widget-avise-me/package.json":
/*!*******************************************************************!*\
  !*** ./node_modules/@confere-stores/widget-avise-me/package.json ***!
  \*******************************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, browser, bugs, bundleDependencies, deprecated, description, homepage, jsdelivr, keywords, license, main, module, name, repository, scripts, unpkg, version, webpackOutput, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"@confere-stores/widget-avise-me\",\"_id\":\"@confere-stores/widget-avise-me@1.2.0\",\"_inBundle\":false,\"_integrity\":\"sha512-yB/kTMA6tQ5MaQdCDsdhzkKp42a6OgZR70OQNsSiJraki9ntwKYmNB3IUKO/w3eSDKc9qUkXLef5IoVzRyws7Q==\",\"_location\":\"/@confere-stores/widget-avise-me\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"tag\",\"registry\":true,\"raw\":\"@confere-stores/widget-avise-me\",\"name\":\"@confere-stores/widget-avise-me\",\"escapedName\":\"@confere-stores%2fwidget-avise-me\",\"scope\":\"@confere-stores\",\"rawSpec\":\"\",\"saveSpec\":null,\"fetchSpec\":\"latest\"},\"_requiredBy\":[\"#USER\",\"/\"],\"_resolved\":\"https://npm.pkg.github.com/download/@confere-stores/widget-avise-me/1.2.0/e10685bddfce09cc61045c1dc10fae7d897203af10c80a44684c39bf366a1223\",\"_shasum\":\"238ceb2f61a4ad8c611be3edcfa199cfbd089bd0\",\"_spec\":\"@confere-stores/widget-avise-me\",\"_where\":\"/home/gmazurco/Projects/storefront-template\",\"author\":{\"name\":\"E-Com Club\",\"email\":\"ti@e-com.club\"},\"browser\":\"dist/widget-avise-me.min.js\",\"bugs\":{\"url\":\"https://github.com/confere-stores/widget-avise-me/issues\"},\"bundleDependencies\":false,\"deprecated\":false,\"description\":\"Plugin para lojas da confere shop notificar clientes sobre promoções e estoque\",\"homepage\":\"https://github.com/confere-stores/widget-avise-me/tree/master/#readme\",\"jsdelivr\":\"dist/public/widget-avise-me.var.min.js\",\"keywords\":[\"ecomplus\",\"storefront\",\"widget\",\"notifications\"],\"license\":\"MIT\",\"main\":\"dist/widget-avise-me.min.js\",\"module\":\"src/index.js\",\"name\":\"@confere-stores/widget-avise-me\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/confere-stores/widget-avise-me.git\"},\"scripts\":{\"build\":\"cross-env NODE_ENV=production webpack\",\"serve\":\"webpack-dev-server\"},\"unpkg\":\"dist/public/widget-avise-me.var.min.js\",\"version\":\"1.2.0\",\"webpackOutput\":{\"library\":\"widgetAviseMe\",\"filename\":\"widget-avise-me.min.js\"}}");

/***/ }),

/***/ "./node_modules/@ecomplus/client/package.json":
/*!****************************************************!*\
  !*** ./node_modules/@ecomplus/client/package.json ***!
  \****************************************************/
/*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, browser, browserslist, bugs, dependencies, description, devDependencies, homepage, husky, jsdelivr, keywords, license, main, module, name, optionalDependencies, peerDependencies, publishConfig, repository, scripts, unpkg, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_args\":[[\"@ecomplus/client@2.2.1\",\"/home/gmazurco/Projects/storefront-template\"]],\"_from\":\"@ecomplus/client@2.2.1\",\"_id\":\"@ecomplus/client@2.2.1\",\"_inBundle\":false,\"_integrity\":\"sha512-Hhq1MgzSlTWJ0Y/PZc5YkPhOmDsuIdrcrX8erzdBlrKDdApXoKD2pxC+KtlU2En141rFwwWzYdjJCp683nKFEA==\",\"_location\":\"/@ecomplus/client\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"version\",\"registry\":true,\"raw\":\"@ecomplus/client@2.2.1\",\"name\":\"@ecomplus/client\",\"escapedName\":\"@ecomplus%2fclient\",\"scope\":\"@ecomplus\",\"rawSpec\":\"2.2.1\",\"saveSpec\":null,\"fetchSpec\":\"2.2.1\"},\"_requiredBy\":[\"/\",\"/@ecomplus/passport-client\",\"/@ecomplus/search-engine\",\"/@ecomplus/storefront-app\",\"/@ecomplus/storefront-components\",\"/@ecomplus/storefront-renderer\",\"/@ecomplus/storefront-router\"],\"_resolved\":\"https://registry.npmjs.org/@ecomplus/client/-/client-2.2.1.tgz\",\"_spec\":\"2.2.1\",\"_where\":\"/home/gmazurco/Projects/storefront-template\",\"author\":{\"name\":\"E-Com Club\",\"email\":\"ti@e-com.club\"},\"browser\":\"dist/ecom-client.min.js\",\"browserslist\":[\"last 1 version\",\"not dead\",\"> 0.2%\"],\"bugs\":{\"url\":\"https://github.com/ecomplus/client/issues\"},\"dependencies\":{\"axios\":\"^0.21.1\",\"core-js\":\"3.x\"},\"description\":\"JS client for E-Com Plus REST APIs\",\"devDependencies\":{\"@babel/core\":\"^7.13.10\",\"@babel/preset-env\":\"^7.13.10\",\"@commitlint/cli\":\"^12.0.1\",\"@commitlint/config-conventional\":\"^12.0.1\",\"@ecomplus/utils\":\"^1.4.1\",\"babel-loader\":\"^8.2.2\",\"core-js\":\"^3.9.1\",\"docdash\":\"^1.2.0\",\"husky\":\"^4.3.8\",\"jsdoc\":\"^3.6.6\",\"standard\":\"^16.0.3\",\"standard-version\":\"^9.1.1\",\"webpack\":\"^4.46.0\",\"webpack-cli\":\"^3.3.12\",\"webpack-dev-server\":\"^3.11.2\"},\"homepage\":\"https://github.com/ecomplus/client#readme\",\"husky\":{\"hooks\":{\"commit-msg\":\"commitlint -E HUSKY_GIT_PARAMS\"}},\"jsdelivr\":\"dist/ecom-client.polyfill.min.js\",\"keywords\":[\"ecomplus\",\"ecommerce-apis\",\"js-client\",\"rest-apis\",\"jamstack\",\"headless-ecommerce\"],\"license\":\"MIT\",\"main\":\"dist/ecom-client.node.js\",\"module\":\"src/index.js\",\"name\":\"@ecomplus/client\",\"optionalDependencies\":{\"core-js\":\"3.x\"},\"peerDependencies\":{\"@ecomplus/utils\":\"1.x\"},\"publishConfig\":{},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/ecomplus/client.git\"},\"scripts\":{\"build\":\"node ./build/bin.js\",\"doc\":\"rm -rf ./docs/*; jsdoc ./src -r ./README.md -d ./docs -t ./node_modules/docdash\",\"release\":\"rm -rf ./dist; npm ddp && standard-version && node ./build/bin.js\",\"serve\":\"webpack-dev-server\"},\"unpkg\":\"dist/ecom-client.polyfill.min.js\",\"version\":\"2.2.1\"}");

/***/ }),

/***/ "./node_modules/@ecomplus/client/src/ecom-client.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ecomplus/client/src/ecom-client.js ***!
  \**********************************************************/
/*! exports provided: _self, store, platform, search, graphs, modules, passport, storefront */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_self__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/self */ "./node_modules/@ecomplus/client/src/lib/self.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_self", function() { return _lib_self__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _methods_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/store */ "./node_modules/@ecomplus/client/src/methods/store.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "store", function() { return _methods_store__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _methods_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/platform */ "./node_modules/@ecomplus/client/src/methods/platform.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "platform", function() { return _methods_platform__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _methods_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods/search */ "./node_modules/@ecomplus/client/src/methods/search.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "search", function() { return _methods_search__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _methods_graphs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./methods/graphs */ "./node_modules/@ecomplus/client/src/methods/graphs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "graphs", function() { return _methods_graphs__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _methods_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./methods/modules */ "./node_modules/@ecomplus/client/src/methods/modules.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modules", function() { return _methods_modules__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _methods_passport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./methods/passport */ "./node_modules/@ecomplus/client/src/methods/passport.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "passport", function() { return _methods_passport__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _methods_storefront__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./methods/storefront */ "./node_modules/@ecomplus/client/src/methods/storefront.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storefront", function() { return _methods_storefront__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/**
 * @namespace ecomClient
 * @description
 * TL;DR: You're probably wanting to use
 * [Store API]{@link ecomClient.store}.
 * <br>
 * Although, we have methods to run requests for
 * almost all E-Com Plus APIs below.
 */










/***/ }),

/***/ "./node_modules/@ecomplus/client/src/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@ecomplus/client/src/index.js ***!
  \****************************************************/
/*! exports provided: default, _self, store, platform, search, graphs, modules, passport, storefront */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ecom-client */ "./node_modules/@ecomplus/client/src/ecom-client.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_self", function() { return _ecom_client__WEBPACK_IMPORTED_MODULE_0__["_self"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "store", function() { return _ecom_client__WEBPACK_IMPORTED_MODULE_0__["store"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "platform", function() { return _ecom_client__WEBPACK_IMPORTED_MODULE_0__["platform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "search", function() { return _ecom_client__WEBPACK_IMPORTED_MODULE_0__["search"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "graphs", function() { return _ecom_client__WEBPACK_IMPORTED_MODULE_0__["graphs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modules", function() { return _ecom_client__WEBPACK_IMPORTED_MODULE_0__["modules"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "passport", function() { return _ecom_client__WEBPACK_IMPORTED_MODULE_0__["passport"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storefront", function() { return _ecom_client__WEBPACK_IMPORTED_MODULE_0__["storefront"]; });

/*!
 * @ecomplus/client
 * (c) E-Com Club <ti@e-com.club>
 * Released under the MIT License.
 */

/**
 * JS client for E-Com Plus REST APIs.
 * {@link https://github.com/ecomclub/ecomplus-client GitHub}
 *
 * @module @ecomplus/client
 * @author E-Com Club <ti@e-com.club>
 * @return {@link ecomClient}
 * @see ecomClient
 *
 * @example
 * // ES import
 * import ecomClient from '@ecomplus/client'
 *
 * @example
 * // With CommonJS
 * const ecomClient = require('@ecomplus/client')
 *
 * @example
 * <!-- Global `ecomClient` from CDN on browser -->
 * <script src="https://cdn.jsdelivr.net/npm/@ecomplus/client/dist/ecom-client.polyfill.min.js"></script>
 */

/* harmony default export */ __webpack_exports__["default"] = (_ecom_client__WEBPACK_IMPORTED_MODULE_0__); // named exports off all methods



/***/ }),

/***/ "./node_modules/@ecomplus/client/src/lib/axios.js":
/*!********************************************************!*\
  !*** ./node_modules/@ecomplus/client/src/lib/axios.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 // axios HTTP client
// https://github.com/axios/axios
// create an instance using the config defaults provided by the library

const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  // up to 60s timeout
  timeout: 60000
}); // always JSON for request with body data

if (!instance.defaults.headers) {
  instance.defaults.headers = {};
}

const {
  headers
} = instance.defaults;
['post', 'patch', 'put'].forEach(method => {
  if (!headers[method]) {
    headers[method] = {};
  }

  headers[method]['Content-Type'] = 'application/json';
});
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/@ecomplus/client/src/lib/constants.js":
/*!************************************************************!*\
  !*** ./node_modules/@ecomplus/client/src/lib/constants.js ***!
  \************************************************************/
/*! exports provided: IS_BROWSER, API_STORE, API_STORE_CACHE, API_PASSPORT, API_SEARCH, API_MODULES, API_STOREFRONT, API_GRAPHS, API_PLATFORM, API_PLATFORM_CACHE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_BROWSER", function() { return IS_BROWSER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_STORE", function() { return API_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_STORE_CACHE", function() { return API_STORE_CACHE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_PASSPORT", function() { return API_PASSPORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_SEARCH", function() { return API_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_MODULES", function() { return API_MODULES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_STOREFRONT", function() { return API_STOREFRONT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_GRAPHS", function() { return API_GRAPHS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_PLATFORM", function() { return API_PLATFORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_PLATFORM_CACHE", function() { return API_PLATFORM_CACHE; });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ "./node_modules/@ecomplus/client/src/lib/env.js");

const IS_BROWSER = Boolean(typeof window === 'object' && window !== null && window.document);
const API_STORE = _env__WEBPACK_IMPORTED_MODULE_0__["default"].ECOMCLIENT_API_STORE || 'https://api.e-com.plus/v1/';
const API_STORE_CACHE = _env__WEBPACK_IMPORTED_MODULE_0__["default"].ECOMCLIENT_API_STORE_CACHE || 'https://ioapi.ecvol.com/:id/v1/';
const API_PASSPORT = _env__WEBPACK_IMPORTED_MODULE_0__["default"].ECOMCLIENT_API_PASSPORT || 'https://passport.e-com.plus/v1/';
const API_SEARCH = _env__WEBPACK_IMPORTED_MODULE_0__["default"].ECOMCLIENT_API_SEARCH || 'https://apx-search.e-com.plus/api/v1/';
const API_MODULES = _env__WEBPACK_IMPORTED_MODULE_0__["default"].ECOMCLIENT_API_MODULES || 'https://apx-mods.e-com.plus/api/v1/';
const API_STOREFRONT = _env__WEBPACK_IMPORTED_MODULE_0__["default"].ECOMCLIENT_API_STOREFRONT || 'https://iostorefront.ecvol.com/api/v1/';
const API_GRAPHS = _env__WEBPACK_IMPORTED_MODULE_0__["default"].ECOMCLIENT_API_GRAPHS || 'https://apx-graphs.e-com.plus/api/v1/';
const API_PLATFORM = _env__WEBPACK_IMPORTED_MODULE_0__["default"].ECOMCLIENT_API_PLATFORM || 'https://e-com.plus/api/v1/';
const API_PLATFORM_CACHE = _env__WEBPACK_IMPORTED_MODULE_0__["default"].ECOMCLIENT_API_PLATFORM_CACHE || 'https://io.ecvol.com/api/v1/';

/***/ }),

/***/ "./node_modules/@ecomplus/client/src/lib/env.js":
/*!******************************************************!*\
  !*** ./node_modules/@ecomplus/client/src/lib/env.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony default export */ __webpack_exports__["default"] = (typeof window === 'object' && window || typeof process === 'object' && process && process.env || {});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/@ecomplus/client/src/lib/request.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ecomplus/client/src/lib/request.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env */ "./node_modules/@ecomplus/client/src/lib/env.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@ecomplus/client/src/lib/constants.js");
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./axios */ "./node_modules/@ecomplus/client/src/lib/axios.js");



 // set delay between requests by API

const delays = {};
delays[_constants__WEBPACK_IMPORTED_MODULE_2__["API_STORE"]] = delays[_constants__WEBPACK_IMPORTED_MODULE_2__["API_MODULES"]] = delays[_constants__WEBPACK_IMPORTED_MODULE_2__["API_PLATFORM"]] = 250;
delays[_constants__WEBPACK_IMPORTED_MODULE_2__["API_STOREFRONT"]] = 400;
delays[_constants__WEBPACK_IMPORTED_MODULE_2__["API_GRAPHS"]] = 570;
delays[_constants__WEBPACK_IMPORTED_MODULE_2__["API_PASSPORT"]] = 1070; // count current scheduled requests by API

const scheduledRequests = {};
let concurrentRequests = 0; // store APIs on idle after 503 response

const waitingApis = []; // check for debug option

const checkEnvVar = prop => _env__WEBPACK_IMPORTED_MODULE_1__["default"][prop] === true || _env__WEBPACK_IMPORTED_MODULE_1__["default"][prop] === 'true';

const debug = checkEnvVar('ECOMCLIENT_DEBUG');

const request = (config, api, delay = 170, scheduleTime) => {
  if (debug) {
    console.log(`[ecomClient]: (${scheduleTime} ~ ${Date.now()}) send ${config.method} ${config.url}`);
  }

  if (checkEnvVar('ECOMCLIENT_NOTIMEOUT') && config.timeout) {
    // reset request timeout
    config.timeout = 0;
  }

  return new Promise((resolve, reject) => {
    concurrentRequests++;
    _axios__WEBPACK_IMPORTED_MODULE_3__["default"].request(config).then(resolve).catch(err => {
      if (debug) {
        err.message = `[ecomClient]: ${err.message}`;
        console.error(err);
      } // handle 503 errors here


      const {
        response
      } = err;

      if (response && response.status === 503) {
        // service unavailable, probably blocked by proxy
        if (api) {
          // add API to idle
          waitingApis.push(api);
        } // retry with new promise
        // wait and resend request


        return setTimeout(() => {
          if (api) {
            // unset API idle
            const index = waitingApis.indexOf(api);

            if (index > -1) {
              waitingApis.splice(index, 1);
            }
          } // new axios request without error handler


          _axios__WEBPACK_IMPORTED_MODULE_3__["default"].request(config).then(resolve).catch(reject);
        }, delay >= 170 ? delay : 170);
      }

      reject(err);
    }).finally(() => {
      concurrentRequests--;
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (axiosConfig => {
  const {
    url,
    method,
    baseURL,
    timeout
  } = axiosConfig;

  if (url.indexOf('.json') === -1) {
    // all APIs endpoints have JSON extension
    axiosConfig.url = url.replace(/^([^?]+)(\?.*)?$/, '$1.json$2');
  }

  let uri = _axios__WEBPACK_IMPORTED_MODULE_3__["default"].getUri(axiosConfig);

  if (!uri.startsWith('http')) {
    // complete absolute URI
    if (baseURL.slice(-1) === '/' && uri.charAt(0) === '/') {
      // prevent duplicated bars
      uri = uri.substr(1);
    }

    uri = baseURL + uri;
  }

  if (debug) {
    console.log(`[ecomClient]: ${method && method.toUpperCase() || 'GET'} '${uri}'`);
  }

  let api, delay;

  for (api in delays) {
    if (delays[api] !== undefined && uri.indexOf(api) === 0) {
      // API matched
      // delayed request
      delay = delays[api];
      break;
    }
  }

  if (!delay) {
    // minimum 50ms delay
    delay = 50;
  } // scheduled request
  // set request queue position based on current API scheduled requests
  // there's no delay when queue is 0 (first request)


  const queue = scheduledRequests[api] || 0;
  scheduledRequests[api] = queue + 1; // returns promise resolved with request after timeout

  return new Promise((resolve, reject) => {
    let retries = 0;

    const schedule = () => {
      // calculate final delay with API queue and concurrent requests multipliers
      const requestDelay = delay * queue + concurrentRequests * 2.5;
      let scheduleTime;

      if (debug) {
        scheduleTime = Date.now();
        console.log(`[ecomClient]: (${scheduleTime}) request delay ${requestDelay}ms`);
      }

      setTimeout(() => {
        if (waitingApis.indexOf(api) <= -1) {
          // send request and reset scheduled requests count
          scheduledRequests[api]--;
          request(axiosConfig, api, delay, scheduleTime).then(resolve).catch(err => {
            // retry server errors for requests without timeout
            if (!timeout && retries < 2 && err.response && err.response.status >= 500) {
              setTimeout(schedule, Math.max(delay, 600));
              return retries++;
            }

            reject(err);
          });
        } else {
          // API on idle due to 503 response
          // schedule request again
          schedule();
        }
      }, requestDelay);
    };

    schedule();
  });
});

/***/ }),

/***/ "./node_modules/@ecomplus/client/src/lib/self.js":
/*!*******************************************************!*\
  !*** ./node_modules/@ecomplus/client/src/lib/self.js ***!
  \*******************************************************/
/*! exports provided: default, version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../package.json */ "./node_modules/@ecomplus/client/package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../package.json */ "./node_modules/@ecomplus/client/package.json", 1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _package_json__WEBPACK_IMPORTED_MODULE_0__["version"]; });

 // exports info about the package

/* harmony default export */ __webpack_exports__["default"] = (_package_json__WEBPACK_IMPORTED_MODULE_0__["name"] + '@' + _package_json__WEBPACK_IMPORTED_MODULE_0__["version"]);


/***/ }),

/***/ "./node_modules/@ecomplus/client/src/methods/graphs.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ecomplus/client/src/methods/graphs.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../lib/constants */ "./node_modules/@ecomplus/client/src/lib/constants.js");
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../lib/request */ "./node_modules/@ecomplus/client/src/lib/request.js");


 // returns axios request promise

const graphs = ({
  url,
  storeId = _ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__["_config"].get('store_id'),
  axiosConfig
}) => Object(_lib_request__WEBPACK_IMPORTED_MODULE_2__["default"])({
  // set 5s default timeout for graphs requests on browser
  timeout: _lib_constants__WEBPACK_IMPORTED_MODULE_1__["IS_BROWSER"] ? 5000 : 30000,
  ...axiosConfig,
  url,
  baseURL: _lib_constants__WEBPACK_IMPORTED_MODULE_1__["API_GRAPHS"],
  headers: {
    'X-Store-ID': storeId
  }
});
/**
 * @method
 * @memberof ecomClient
 * @name graphs
 * @description Send HTTP GET request to
 * [E-Com Plus Graphs REST API]{@link https://developers.e-com.plus/docs/api/#/graphs/}.
 *
 * @param {object} cfg - Request config options
 * @param {string} cfg.url - API endpoint to request or absolute URI
 * @param {number} [cfg.storeId=_config.get('store_id')] - E-Com Plus Store ID number
 * @param {object} [cfg.axiosConfig] - Additional
 * [axios config]{@link https://github.com/axios/axios#request-config} settings
 *
 * @returns {Promise<response|error>}
 * Axios request promise resolved with
 * [response]{@link https://github.com/axios/axios#response-schema}
 * or rejected with
 * [error]{@link https://github.com/axios/axios#handling-errors}.
 *
 * @example

// TODO

 */


/* harmony default export */ __webpack_exports__["default"] = (graphs);

/***/ }),

/***/ "./node_modules/@ecomplus/client/src/methods/modules.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ecomplus/client/src/methods/modules.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../lib/constants */ "./node_modules/@ecomplus/client/src/lib/constants.js");
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../lib/request */ "./node_modules/@ecomplus/client/src/lib/request.js");


 // returns axios request promise

const modules = ({
  url,
  method = 'get',
  data,
  storeId = _ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__["_config"].get('store_id'),
  axiosConfig
}) => Object(_lib_request__WEBPACK_IMPORTED_MODULE_2__["default"])({
  data,
  ...axiosConfig,
  url,
  baseURL: _lib_constants__WEBPACK_IMPORTED_MODULE_1__["API_MODULES"],
  method,
  headers: {
    'X-Store-ID': storeId
  }
});
/**
 * @method
 * @memberof ecomClient
 * @name modules
 * @description Send HTTP request to
 * [E-Com Plus Modules REST API]{@link https://developers.e-com.plus/docs/api/#/modules/}.
 *
 * @param {object} cfg - Request config options
 * @param {string} cfg.url - API endpoint to request or absolute URI
 * @param {string} [cfg.method='get'] - Request method (HTTP verb)
 * @param {object} [cfg.data] - Request body object
 * @param {number} [cfg.storeId=_config.get('store_id')] - E-Com Plus Store ID number
 * @param {object} [cfg.axiosConfig] - Additional
 * [axios config]{@link https://github.com/axios/axios#request-config} settings
 *
 * @returns {Promise<response|error>}
 * Axios request promise resolved with
 * [response]{@link https://github.com/axios/axios#response-schema}
 * or rejected with
 * [error]{@link https://github.com/axios/axios#handling-errors}.
 *
 * @example

// TODO

 */


/* harmony default export */ __webpack_exports__["default"] = (modules);

/***/ }),

/***/ "./node_modules/@ecomplus/client/src/methods/passport.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ecomplus/client/src/methods/passport.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../lib/constants */ "./node_modules/@ecomplus/client/src/lib/constants.js");
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../lib/request */ "./node_modules/@ecomplus/client/src/lib/request.js");




const passport = ({
  url,
  customerId,
  accessToken,
  method = 'get',
  data,
  storeId = _ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__["_config"].get('store_id'),
  axiosConfig
}) => {
  let baseURL = _lib_constants__WEBPACK_IMPORTED_MODULE_1__["API_PASSPORT"];

  if (!url.startsWith('http') && !url.startsWith('/' + storeId)) {
    // set Store ID on URL
    baseURL += storeId;
  }

  let headers;

  if (customerId && accessToken) {
    headers = {
      'X-My-ID': customerId,
      'X-Access-Token': accessToken
    };
  } // returns axios request promise


  return Object(_lib_request__WEBPACK_IMPORTED_MODULE_2__["default"])({
    data,
    ...axiosConfig,
    url,
    baseURL,
    method,
    // setup authentication headers
    headers
  });
};
/**
 * @method
 * @memberof ecomClient
 * @name passport
 * @description Send HTTP request to
 * [E-Com Plus Passport REST API]{@link https://developers.e-com.plus/docs/api/#/passport/}
 * with customer login authentication.
 *
 * @param {object} cfg - Request config options
 * @param {string} cfg.url - API endpoint to request or absolute URI
 * @param {string} [cfg.customerId] - My ID for authenticated request
 * @param {string} [cfg.accessToken] - Access token for authenticated request
 * @param {string} [cfg.method='get'] - Request method (HTTP verb)
 * @param {object} [cfg.data] - Request body object
 * @param {number} [cfg.storeId=_config.get('store_id')] - E-Com Plus Store ID number
 * @param {object} [cfg.axiosConfig] - Additional
 * [axios config]{@link https://github.com/axios/axios#request-config} settings
 *
 * @returns {Promise<response|error>}
 * Axios request promise resolved with
 * [response]{@link https://github.com/axios/axios#response-schema}
 * or rejected with
 * [error]{@link https://github.com/axios/axios#handling-errors}.
 *
 * @example

// TODO

 */


/* harmony default export */ __webpack_exports__["default"] = (passport);

/***/ }),

/***/ "./node_modules/@ecomplus/client/src/methods/platform.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ecomplus/client/src/methods/platform.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../lib/constants */ "./node_modules/@ecomplus/client/src/lib/constants.js");
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../lib/request */ "./node_modules/@ecomplus/client/src/lib/request.js");




const platform = ({
  url,
  storeId = _ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__["_config"].get('store_id'),
  axiosConfig
}) => {
  let timeout, baseURL;

  if (!/\?/.test(url) && (!axiosConfig || !axiosConfig.params)) {
    // prefer using cache API host
    timeout = 2500;
    baseURL = _lib_constants__WEBPACK_IMPORTED_MODULE_1__["API_PLATFORM_CACHE"];
  } else {
    // set 5s default timeout on browser
    timeout = _lib_constants__WEBPACK_IMPORTED_MODULE_1__["IS_BROWSER"] ? 5000 : 30000;
    baseURL = _lib_constants__WEBPACK_IMPORTED_MODULE_1__["API_PLATFORM"];
  } // returns axios request promise


  return Object(_lib_request__WEBPACK_IMPORTED_MODULE_2__["default"])({
    timeout,
    ...axiosConfig,
    url,
    baseURL
  }).catch(err => {
    const {
      response
    } = err;

    if (response && baseURL === _lib_constants__WEBPACK_IMPORTED_MODULE_1__["API_PLATFORM_CACHE"]) {
      // retry with live Main API
      const {
        status
      } = response;

      if (!status || status < 100 || status >= 500) {
        // resend request with same params
        return platform(url, storeId, axiosConfig);
      }
    } // chain promise catch


    throw err;
  });
};
/**
 * @method
 * @memberof ecomClient
 * @name platform
 * @description Send HTTP GET request to
 * [E-Com Plus Platform REST API]{@link https://developers.e-com.plus/docs/api/#/platform/}.
 *
 * @param {object} cfg - Request config options
 * @param {string} cfg.url - API endpoint to request or absolute URI
 * @param {number} [cfg.storeId=_config.get('store_id')] - E-Com Plus Store ID number
 * @param {object} [cfg.axiosConfig] - Additional
 * [axios config]{@link https://github.com/axios/axios#request-config} settings
 *
 * @returns {Promise<response|error>}
 * Axios request promise resolved with
 * [response]{@link https://github.com/axios/axios#response-schema}
 * or rejected with
 * [error]{@link https://github.com/axios/axios#handling-errors}.
 *
 * @example

// TODO

 */


/* harmony default export */ __webpack_exports__["default"] = (platform);

/***/ }),

/***/ "./node_modules/@ecomplus/client/src/methods/search.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ecomplus/client/src/methods/search.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../lib/constants */ "./node_modules/@ecomplus/client/src/lib/constants.js");
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../lib/request */ "./node_modules/@ecomplus/client/src/lib/request.js");


 // returns axios request promise

const search = ({
  url,
  method = 'get',
  data,
  storeId = _ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__["_config"].get('store_id'),
  axiosConfig
}) => Object(_lib_request__WEBPACK_IMPORTED_MODULE_2__["default"])({
  data,
  // set 10s default timeout for search requests on browser
  timeout: _lib_constants__WEBPACK_IMPORTED_MODULE_1__["IS_BROWSER"] ? 10000 : 30000,
  ...axiosConfig,
  url,
  baseURL: _lib_constants__WEBPACK_IMPORTED_MODULE_1__["API_SEARCH"],
  method,
  headers: {
    'X-Store-ID': storeId
  }
});
/**
 * @method
 * @memberof ecomClient
 * @name search
 * @description Send HTTP request to
 * [E-Com Plus Search REST API]{@link https://developers.e-com.plus/docs/api/#/search/}.
 *
 * @param {object} cfg - Request config options
 * @param {string} cfg.url - API endpoint to request or absolute URI
 * @param {string} [cfg.method='get'] - Request method (HTTP verb)
 * @param {object} [cfg.data] - Request body object
 * @param {number} [cfg.storeId=_config.get('store_id')] - E-Com Plus Store ID number
 * @param {object} [cfg.axiosConfig] - Additional
 * [axios config]{@link https://github.com/axios/axios#request-config} settings
 *
 * @returns {Promise<response|error>}
 * Axios request promise resolved with
 * [response]{@link https://github.com/axios/axios#response-schema}
 * or rejected with
 * [error]{@link https://github.com/axios/axios#handling-errors}.
 *
 * @example

// Simple search request (ELS URI Search)
ecomClient.search({ url: '/items.json?q=sku:123' })
  .then(response => console.log(response.data))
  .catch(error => {
    console.error(error)
    if (error.response) {
      console.log(error.response)
    }
  })

 * @example

// Complex search request (ELS Request Body Search)
const data = {
  query: {
    bool: {
      must: {
        multi_match: {
          query: 'tshirt',
          fields: [ 'name', 'keywords' ]
        }
      }
    }
  }
}
ecomClient.search({ url: '/items.json', method: 'post', data })
  .then(({ data, status }) => console.log(status, data))
  .catch(error => console.error(error))

 */


/* harmony default export */ __webpack_exports__["default"] = (search);

/***/ }),

/***/ "./node_modules/@ecomplus/client/src/methods/store.js":
/*!************************************************************!*\
  !*** ./node_modules/@ecomplus/client/src/methods/store.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../lib/constants */ "./node_modules/@ecomplus/client/src/lib/constants.js");
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../lib/request */ "./node_modules/@ecomplus/client/src/lib/request.js");



 // save Store Cache API status

let isCacheOnline = true;

const store = ({
  url,
  authenticationId,
  accessToken,
  method = 'get',
  data,
  storeId = _ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["_config"].get('store_id'),
  axiosConfig
}) => {
  let timeout, baseURL, headers; // first check if it's a public request

  if (method.toLowerCase() === 'get' && !authenticationId) {
    // less timeout for public requests
    if (isCacheOnline && !/\?/.test(url) && (!axiosConfig || !axiosConfig.params)) {
      // use cache API host
      timeout = _lib_constants__WEBPACK_IMPORTED_MODULE_2__["IS_BROWSER"] ? 2500 : 10000; // Store ID on URL

      baseURL = _lib_constants__WEBPACK_IMPORTED_MODULE_2__["API_STORE_CACHE"].replace(':id', storeId);
    } else {
      // set 5s default timeout on browser
      timeout = _lib_constants__WEBPACK_IMPORTED_MODULE_2__["IS_BROWSER"] ? 5000 : 30000;
      baseURL = _lib_constants__WEBPACK_IMPORTED_MODULE_2__["API_STORE"]; // Store ID on header

      headers = {
        'X-Store-ID': storeId
      };
    }
  } else {
    baseURL = _lib_constants__WEBPACK_IMPORTED_MODULE_2__["API_STORE"]; // setup authentication headers

    headers = {
      'X-Store-ID': storeId,
      'X-My-ID': authenticationId,
      'X-Access-Token': accessToken
    };
  } // returns axios request promise


  return Object(_lib_request__WEBPACK_IMPORTED_MODULE_3__["default"])({
    data,
    timeout,
    ...axiosConfig,
    url,
    baseURL,
    method,
    headers
  }).catch(err => {
    const {
      response
    } = err;

    if (response && baseURL === _lib_constants__WEBPACK_IMPORTED_MODULE_2__["API_STORE_CACHE"]) {
      // retry with live Store API
      const {
        status
      } = response;

      if (!status || status < 100 || status >= 500) {
        isCacheOnline = false;
        setTimeout(() => {
          isCacheOnline = true;
        }, 30000); // resend request with same params

        return store(url, authenticationId, accessToken, method, data, storeId, axiosConfig);
      }
    } // chain promise catch


    throw err;
  });
};
/**
 * @method
 * @memberof ecomClient
 * @name store
 * @description Send HTTP request to
 * [E-Com Plus Store REST API]{@link https://developers.e-com.plus/docs/api/#/store/}.
 *
 * @param {object} cfg - Request config options
 * @param {string} cfg.url - API endpoint to request or absolute URI
 * @param {string} [cfg.authenticationId] - My ID for authenticated request
 * @param {string} [cfg.accessToken] - Access token for authenticated request
 * @param {string} [cfg.method='get'] - Request method (HTTP verb)
 * @param {object} [cfg.data] - Request body object
 * @param {number} [cfg.storeId=_config.get('store_id')] - E-Com Plus Store ID number
 * @param {object} [cfg.axiosConfig] - Additional
 * [axios config]{@link https://github.com/axios/axios#request-config} settings
 *
 * @returns {Promise<response|error>}
 * Axios request promise resolved with
 * [response]{@link https://github.com/axios/axios#response-schema}
 * or rejected with
 * [error]{@link https://github.com/axios/axios#handling-errors}.
 *
 * @example

// Simple GET request (public)
ecomClient.store({ url: '/products.json' })
  .then(response => console.log(response.data))
  .catch(error => {
    console.error(error)
    if (error.response) {
      console.log(error.response)
    }
  })

 * @example

// Authenticated request
const authenticationId = 'myAuthenticationId'
const accessToken = 'myAccessToken'
ecomClient.store({
  url: '/products.json',
  authenticationId,
  accessToken,
  method: 'post',
  data: { sku: '123', name: 'Sample Prduct 123' }
})
  .then(({ data, status }) => console.log(status, data))
  .catch(error => console.error(error))

 */


/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./node_modules/@ecomplus/client/src/methods/storefront.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ecomplus/client/src/methods/storefront.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../lib/constants */ "./node_modules/@ecomplus/client/src/lib/constants.js");
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../lib/request */ "./node_modules/@ecomplus/client/src/lib/request.js");





const storefront = ({
  url,
  storeId = _ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["_config"].get('store_id'),
  axiosConfig
}) => {
  if (url.charAt(0) === '/') {
    // prevent duplicated bars
    url = url.substr(1);
  }

  if (!/^\/?[0-9]+@?/.test(url) && storeId) {
    // force endpoint starting with Store ID
    url = storeId + '@' + url;
  } // replace / with $ on slug to escape URL


  url = '/' + url.replace(/\//g, '$'); // returns axios request promise

  return Object(_lib_request__WEBPACK_IMPORTED_MODULE_3__["default"])({
    // set 5s default timeout for Storefront API requests on browser
    timeout: _lib_constants__WEBPACK_IMPORTED_MODULE_2__["IS_BROWSER"] ? 5000 : 30000,
    ...axiosConfig,
    url,
    baseURL: _lib_constants__WEBPACK_IMPORTED_MODULE_2__["API_STOREFRONT"]
  });
};
/**
 * @method
 * @memberof ecomClient
 * @name storefront
 * @description Send HTTP GET request to
 * [E-Com Plus Storefront REST API]{@link https://developers.e-com.plus/docs/api/#/storefront/}.
 *
 * @param {object} cfg - Request config options
 * @param {string} cfg.url - API endpoint to request or absolute URI
 * @param {number} [cfg.storeId=_config.get('store_id')] - E-Com Plus Store ID number
 * @param {object} [cfg.axiosConfig] - Additional
 * [axios config]{@link https://github.com/axios/axios#request-config} settings
 *
 * @returns {Promise<response|error>}
 * Axios request promise resolved with
 * [response]{@link https://github.com/axios/axios#response-schema}
 * or rejected with
 * [error]{@link https://github.com/axios/axios#handling-errors}.
 *
 * @example

// TODO

 */


/* harmony default export */ __webpack_exports__["default"] = (storefront);

/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/constructor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/constructor.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var _methods_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/fetch */ "./node_modules/@ecomplus/search-engine/src/methods/fetch.js");
/* harmony import */ var _methods_reset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/reset */ "./node_modules/@ecomplus/search-engine/src/methods/reset.js");
/* harmony import */ var _methods_set_search_term__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods/set-search-term */ "./node_modules/@ecomplus/search-engine/src/methods/set-search-term.js");
/* harmony import */ var _methods_set_page_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./methods/set-page-number */ "./node_modules/@ecomplus/search-engine/src/methods/set-page-number.js");
/* harmony import */ var _methods_set_page_size__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./methods/set-page-size */ "./node_modules/@ecomplus/search-engine/src/methods/set-page-size.js");
/* harmony import */ var _methods_set_sort_order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./methods/set-sort-order */ "./node_modules/@ecomplus/search-engine/src/methods/set-sort-order.js");
/* harmony import */ var _methods_merge_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./methods/merge-filter */ "./node_modules/@ecomplus/search-engine/src/methods/merge-filter.js");
/* harmony import */ var _methods_remove_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./methods/remove-filter */ "./node_modules/@ecomplus/search-engine/src/methods/remove-filter.js");
/* harmony import */ var _methods_set_spec__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./methods/set-spec */ "./node_modules/@ecomplus/search-engine/src/methods/set-spec.js");
/* harmony import */ var _methods_set_category_names__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./methods/set-category-names */ "./node_modules/@ecomplus/search-engine/src/methods/set-category-names.js");
/* harmony import */ var _methods_set_category_ids__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./methods/set-category-ids */ "./node_modules/@ecomplus/search-engine/src/methods/set-category-ids.js");
/* harmony import */ var _methods_set_brand_names__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./methods/set-brand-names */ "./node_modules/@ecomplus/search-engine/src/methods/set-brand-names.js");
/* harmony import */ var _methods_set_brand_ids__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./methods/set-brand-ids */ "./node_modules/@ecomplus/search-engine/src/methods/set-brand-ids.js");
/* harmony import */ var _methods_set_skus__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./methods/set-skus */ "./node_modules/@ecomplus/search-engine/src/methods/set-skus.js");
/* harmony import */ var _methods_set_product_ids__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./methods/set-product-ids */ "./node_modules/@ecomplus/search-engine/src/methods/set-product-ids.js");
/* harmony import */ var _methods_set_price_range__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./methods/set-price-range */ "./node_modules/@ecomplus/search-engine/src/methods/set-price-range.js");
/* harmony import */ var _methods_get_items__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./methods/get-items */ "./node_modules/@ecomplus/search-engine/src/methods/get-items.js");
/* harmony import */ var _methods_get_total_count__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./methods/get-total-count */ "./node_modules/@ecomplus/search-engine/src/methods/get-total-count.js");
/* harmony import */ var _methods_get_term_suggestions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./methods/get-term-suggestions */ "./node_modules/@ecomplus/search-engine/src/methods/get-term-suggestions.js");
/* harmony import */ var _methods_get_brands__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./methods/get-brands */ "./node_modules/@ecomplus/search-engine/src/methods/get-brands.js");
/* harmony import */ var _methods_get_categories__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./methods/get-categories */ "./node_modules/@ecomplus/search-engine/src/methods/get-categories.js");
/* harmony import */ var _methods_get_price_range__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./methods/get-price-range */ "./node_modules/@ecomplus/search-engine/src/methods/get-price-range.js");
/* harmony import */ var _methods_get_specs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./methods/get-specs */ "./node_modules/@ecomplus/search-engine/src/methods/get-specs.js");
/**
 * JS lib to handle products search with E-Com Plus stores.
 * {@link https://github.com/ecomclub/search-engine GitHub}
 *
 * @module @ecomplus/search-engine
 * @author E-Com Club <ti@e-com.club>
 * @return {@link EcomSearch}
 * @see EcomSearch
 *
 * @example
 * // ES import default
 * import EcomSearch from '@ecomplus/search-engine'
 *
 * @example
 * // With CommonJS
 * const EcomSearch = require('@ecomplus/search-engine')
 *
 * @example
 * <!-- Global `EcomSearch` from CDN on browser -->
 * <script src="https://cdn.jsdelivr.net/npm/@ecomplus/search-engine/dist/ecom-search.var.min.js"></script>
 *
 * @example
 * <!-- Bundle from CDN with `ecomUtils`, `ecomClient`, `_.cloneDeep` and `_.merge` -->
 * <script src="https://cdn.jsdelivr.net/npm/@ecomplus/search-engine/dist/ecom-search.bundle.min.js"></script>
 */
























const _key = 'ecomSeachHistory';

const _storage = typeof window === 'object' && window.localStorage;

/* harmony default export */ __webpack_exports__["default"] = (function (storeId, storageKey = _key, localStorage = _storage) {
  const self = this;
  /**
   * Respective Store ID number.
   * @name EcomSearch#storeId
   * @type {number}
   */

  this.storeId = storeId || _ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__["$ecomConfig"].get('store_id');
  /**
   * Item key to handle persistent [search history]{@link EcomSearch#history} data
   * with [localStorage]{@link EcomSearch#localStorage}.
   * @name EcomSearch#storageKey
   * @type {string|null}
   */

  this.storageKey = storageKey;
  /**
   * [Storage interface]{@link https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage}.
   * @name EcomSearch#localStorage
   * @type {object}
   */

  this.localStorage = localStorage;
  /**
   * Search terms history.
   * @name EcomSearch#history
   * @type {array<string>}
   */

  this.history = [];
  /**
   * Current
   * [Query DSL]{@link https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-body.html}
   * for [Search API]{@link https://developers.e-com.plus/docs/api/#/search/items/items}
   * request body.
   * <br>
   * You can edit this object to manually set Query DSL properties,
   * or you can use instance methods listed below.
   * @name EcomSearch#dsl
   * @type {object}
   */

  this.dsl = {};
  /**
   * Last search result object obtained with the
   * [fetch method]{@link EcomSearch#fetch}.
   * @name EcomSearch#result
   * @type {result|undefined}
   */

  this.result = undefined; // instance methods

  this.fetch = (isSimpleSearch, axiosConfig) => Object(_methods_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])(self, isSimpleSearch, axiosConfig);

  this.reset = () => Object(_methods_reset__WEBPACK_IMPORTED_MODULE_2__["default"])(self);

  this.setSearchTerm = term => Object(_methods_set_search_term__WEBPACK_IMPORTED_MODULE_3__["default"])(self, term);

  this.setPageNumber = page => Object(_methods_set_page_number__WEBPACK_IMPORTED_MODULE_4__["default"])(self, page);

  this.setPageSize = limit => Object(_methods_set_page_size__WEBPACK_IMPORTED_MODULE_5__["default"])(self, limit);

  this.setSortOrder = enumOrder => Object(_methods_set_sort_order__WEBPACK_IMPORTED_MODULE_6__["default"])(self, enumOrder);

  this.mergeFilter = (filter, occur) => Object(_methods_merge_filter__WEBPACK_IMPORTED_MODULE_7__["default"])(self, filter, occur);

  this.removeFilter = (field, occur) => Object(_methods_remove_filter__WEBPACK_IMPORTED_MODULE_8__["default"])(self, field, occur);

  this.setSpec = (gridId, textOptions) => Object(_methods_set_spec__WEBPACK_IMPORTED_MODULE_9__["default"])(self, gridId, textOptions);

  this.setCategoryNames = categoryNames => Object(_methods_set_category_names__WEBPACK_IMPORTED_MODULE_10__["default"])(self, categoryNames);

  this.setCategoryIds = categoryIds => Object(_methods_set_category_ids__WEBPACK_IMPORTED_MODULE_11__["default"])(self, categoryIds);

  this.setBrandNames = brandNames => Object(_methods_set_brand_names__WEBPACK_IMPORTED_MODULE_12__["default"])(self, brandNames);

  this.setBrandIds = brandIds => Object(_methods_set_brand_ids__WEBPACK_IMPORTED_MODULE_13__["default"])(self, brandIds);

  this.setSkus = skus => Object(_methods_set_skus__WEBPACK_IMPORTED_MODULE_14__["default"])(self, skus);

  this.setProductIds = productIds => Object(_methods_set_product_ids__WEBPACK_IMPORTED_MODULE_15__["default"])(self, productIds);

  this.setPriceRange = (minPrice, maxPrice) => Object(_methods_set_price_range__WEBPACK_IMPORTED_MODULE_16__["default"])(self, minPrice, maxPrice);

  this.getItems = result => Object(_methods_get_items__WEBPACK_IMPORTED_MODULE_17__["default"])(self, result);

  this.getTotalCount = result => Object(_methods_get_total_count__WEBPACK_IMPORTED_MODULE_18__["default"])(self, result);

  this.getTermSuggestions = result => Object(_methods_get_term_suggestions__WEBPACK_IMPORTED_MODULE_19__["default"])(self, result);

  this.getBrands = result => Object(_methods_get_brands__WEBPACK_IMPORTED_MODULE_20__["default"])(self, result);

  this.getCategories = result => Object(_methods_get_categories__WEBPACK_IMPORTED_MODULE_21__["default"])(self, result);

  this.getPriceRange = result => Object(_methods_get_price_range__WEBPACK_IMPORTED_MODULE_22__["default"])(self, result);

  this.getSpecs = result => Object(_methods_get_specs__WEBPACK_IMPORTED_MODULE_23__["default"])(self, result); // preset query object


  Object(_methods_reset__WEBPACK_IMPORTED_MODULE_2__["default"])(self);

  if (localStorage && storageKey) {
    // try to preset search history from storage
    const history = localStorage.getItem(storageKey);

    if (typeof history === 'string') {
      self.history = history.split('||');
    }
  }
});
/**
 * Construct a new search engine instance object.
 * @class EcomSearch
 * @param {number} [storeId=$ecomConfig.get('store_id')] - Preset Store ID number
 * @param {string|null} [storageKey='ecomSeachHistory'] - Item key to persist search history data
 * @param {object} [localStorage=window.localStorage] -
 * [Local Storage interface]{@link https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage}
 *
 * @example

const search = new EcomSearch()

 *
 * @example

// Defining Store ID other than the configured on `$ecomConfig`
const storeId = 2000
const search = new EcomSearch(storeId)

 */

/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/index.js ***!
  \***********************************************************/
/*! exports provided: default, EcomSearch, dslMiddlewares, addGlobalFilter, setSalesChannel, setWarehouse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ "./node_modules/@ecomplus/search-engine/src/constructor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EcomSearch", function() { return _constructor__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _lib_dsl_middlewares__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/dsl-middlewares */ "./node_modules/@ecomplus/search-engine/src/lib/dsl-middlewares.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dslMiddlewares", function() { return _lib_dsl_middlewares__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _modifiers_add_global_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/add-global-filter */ "./node_modules/@ecomplus/search-engine/src/modifiers/add-global-filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addGlobalFilter", function() { return _modifiers_add_global_filter__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _modifiers_set_sales_channel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/set-sales-channel */ "./node_modules/@ecomplus/search-engine/src/modifiers/set-sales-channel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setSalesChannel", function() { return _modifiers_set_sales_channel__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _modifiers_set_warehouse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/set-warehouse */ "./node_modules/@ecomplus/search-engine/src/modifiers/set-warehouse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setWarehouse", function() { return _modifiers_set_warehouse__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/*!
 * @ecomplus/search-engine
 * (c) E-Com Club <ti@e-com.club>
 * Released under the MIT License.
 */





_constructor__WEBPACK_IMPORTED_MODULE_0__["default"].dslMiddlewares = _lib_dsl_middlewares__WEBPACK_IMPORTED_MODULE_1__["default"];
_constructor__WEBPACK_IMPORTED_MODULE_0__["default"].addGlobalFilter = _modifiers_add_global_filter__WEBPACK_IMPORTED_MODULE_2__["default"];
_constructor__WEBPACK_IMPORTED_MODULE_0__["default"].setSalesChannel = _modifiers_set_sales_channel__WEBPACK_IMPORTED_MODULE_3__["default"];
_constructor__WEBPACK_IMPORTED_MODULE_0__["default"].setWarehouse = _modifiers_set_warehouse__WEBPACK_IMPORTED_MODULE_4__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_constructor__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/lib/common-aggregation.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/lib/common-aggregation.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (({
  aggregations
}, field) => {
  // abstraction to get buckets array from result aggregations
  let buckets;

  if (aggregations && aggregations[field]) {
    buckets = aggregations[field].buckets;
  }

  return Array.isArray(buckets) && buckets || [];
});

/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/lib/common-filter.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/lib/common-filter.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((self, field, prop, value, occur) => {
  // abstraction to set or remove filter by field IDs/names
  const newProp = field !== null ? `${field}.${prop}` : prop;

  if (Array.isArray(value)) {
    // setup new filter object
    const filter = {
      terms: {}
    };
    filter.terms[newProp] = value; // remove concurrent filter and merge the new

    let concurrentProp;

    if (field !== null) {
      concurrentProp = `${field}.${prop === '_id' ? 'name' : '_id'}`;
    } else {
      // product SKUs or IDs
      concurrentProp = prop === '_id' ? 'sku' : '_id';
    }

    return self.removeFilter(concurrentProp, occur).mergeFilter(filter, occur);
  } else if (value === null) {
    // just remove respective filter
    return self.removeFilter(newProp, occur);
  }

  return self;
});

/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/lib/dsl-middlewares.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/lib/dsl-middlewares.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const middlewares = [];
/* harmony default export */ __webpack_exports__["default"] = (middlewares);

/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/lib/dsl.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/lib/dsl.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  query: {
    bool: {
      // condition: only visible products
      filter: [{
        term: {
          visible: true
        }
      }]
    }
  },
  sort: [// available && quantity >= min_quantity
  {
    in_stock: {
      order: 'desc'
    }
  }, {
    ad_relevance: {
      order: 'desc'
    }
  }, '_score'],
  aggs: {
    brands: {
      terms: {
        field: 'brands.name'
      }
    },
    categories: {
      terms: {
        field: 'categories.name'
      }
    },
    // ref.: https://github.com/elastic/elasticsearch/issues/5789
    specs: {
      nested: {
        path: 'specs'
      },
      aggs: {
        grid: {
          terms: {
            field: 'specs.grid',
            size: 30
          },
          aggs: {
            text: {
              terms: {
                field: 'specs.text'
              }
            }
          }
        }
      }
    },
    // Metric Aggregations
    min_price: {
      min: {
        field: 'price'
      }
    },
    max_price: {
      max: {
        field: 'price'
      }
    },
    avg_price: {
      avg: {
        field: 'price'
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/methods/fetch.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/methods/fetch.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecomplus_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/client */ "./node_modules/@ecomplus/client/src/index.js");
/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.clonedeep */ "./node_modules/lodash.clonedeep/index.js");
/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_clonedeep__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_dsl_middlewares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../lib/dsl-middlewares */ "./node_modules/@ecomplus/search-engine/src/lib/dsl-middlewares.js");



/* harmony default export */ __webpack_exports__["default"] = ((self, isSimpleSearch, axiosConfig) => {
  // mount axios req options for complex or simpĺe search
  const {
    storeId
  } = self;
  const reqOptions = {
    url: '/items.json',
    storeId,
    axiosConfig
  }; // prepare search DSL

  let dsl = lodash_clonedeep__WEBPACK_IMPORTED_MODULE_1__(self.dsl);
  _lib_dsl_middlewares__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(fn => {
    if (typeof fn === 'function') {
      const _dsl = fn(dsl);

      if (_dsl) {
        dsl = _dsl;
      }
    }
  });

  if (isSimpleSearch === true) {
    // https://www.elastic.co/guide/en/elasticsearch/reference/6.3/search-uri-request.html
    const {
      query
    } = dsl;
    reqOptions.url += '?q=';

    if (query && query.bool && Array.isArray(query.bool.filter)) {
      // parse query filters to string
      let queryString = '';
      query.bool.filter.forEach(({
        term,
        terms
      }, i) => {
        if (i > 0) {
          queryString += ' AND ';
        }

        const condition = term || terms;

        if (condition) {
          const field = Object.keys(condition)[0];
          const value = condition[field];
          queryString += `${field}:${Array.isArray(value) ? `("${value.join('" "')}")` : value}`;
        }
      });
      reqOptions.url += encodeURIComponent(queryString);
    } // handle pagination


    ;
    ['from', 'size'].forEach(field => {
      if (dsl[field]) {
        reqOptions.url += `&${field}=${dsl[field]}`;
      }
    });
  } else {
    reqOptions.method = 'post';
    reqOptions.data = dsl;

    if (isSimpleSearch && !axiosConfig) {
      // fallback for old reference with `fetch(axiosConfig)`
      reqOptions.axiosConfig = isSimpleSearch;
    }
  } // request Search API and return promise


  return Object(_ecomplus_client__WEBPACK_IMPORTED_MODULE_0__["search"])(reqOptions).then(({
    data
  }) => {
    // save last result on instance
    self.result = data;
    const {
      dsl,
      history,
      localStorage,
      storageKey
    } = self;

    if (data.hits.total && dsl && dsl.suggest) {
      const {
        text
      } = dsl.suggest;

      if (text) {
        // add search term to history
        const index = history.indexOf(text);

        if (index > -1) {
          // prevent duplicated term
          history.splice(index, 1);
        }

        history.unshift(text);

        if (localStorage && storageKey) {
          localStorage.setItem(storageKey, history.slice(0, 20).join('||'));
        }
      }
    } // resolving with response data


    return data;
  });
});
/**
 * @typedef {object} result
 * @property {object} hits - Elasticsearch hits object
 * @property {number} hits.total - Total number of products found
 * @property {array<object>} hits.hits - List of resultant items
 * @property {object} aggregations - Elasticsearch aggregations results
 * @property {object} suggest - Search term suggestions object
 * @property {number} took - Request time in milliseconds
 */

/**
 * @method
 * @name EcomSearch#fetch
 * @description Send POST request to
 * [E-Com Plus Search API]{@link https://developers.e-com.plus/docs/api/#/search/items/items}
 * and returns promise resolved with search result.
 *
 * @param {boolean} [isSimpleSearch=false] - Handle simple (and faster) search without sort and aggregations
 * @param {object} [axiosConfig] - Additional
 * [axios config]{@link https://github.com/axios/axios#request-config} object
 *
 * @returns {Promise<result|error>}
 *
 * @example

// Run search request
search.fetch()
  .then(result => {
    console.log(result.took)
    console.log(`${result.hits.total} items found:`)
    console.log(result.hits.hits)
  })
  .catch(error => {
    console.error(error)
    if (error.response) {
      console.log(error.response)
    }
  })

 */

/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/methods/get-brands.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/methods/get-brands.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_common_aggregation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../lib/common-aggregation */ "./node_modules/@ecomplus/search-engine/src/lib/common-aggregation.js");
 // get brand options from aggregations result

/* harmony default export */ __webpack_exports__["default"] = ((self, result) => Object(_lib_common_aggregation__WEBPACK_IMPORTED_MODULE_0__["default"])(result || self.result || {}, 'brands'));
/**
 * @typedef {object} aggregation
 * @property {string} key - Brand/category/option name
 * @property {number} doc_count - How many items match with the respective key
 */

/**
 * @method
 * @name EcomSearch#getBrands
 * @description List brand options matched from search result object.
 *
 * @param {result} [result=self.result] - Search result object
 * @returns {array<aggregation>}
 *
 * @example

// Run search request and list brand aggregations
await search.fetch()
search.getBrands().forEach(aggBrand => {
  console.log(`we have ${aggBrand.doc_count} items with brand ${aggBrand.key}`)
})

 */

/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/methods/get-categories.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/methods/get-categories.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_common_aggregation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../lib/common-aggregation */ "./node_modules/@ecomplus/search-engine/src/lib/common-aggregation.js");
 // get category options from aggregations result

/* harmony default export */ __webpack_exports__["default"] = ((self, result) => Object(_lib_common_aggregation__WEBPACK_IMPORTED_MODULE_0__["default"])(result || self.result || {}, 'categories'));
/**
 * @method
 * @name EcomSearch#getCategories
 * @description List category options matched from search result object.
 *
 * @param {result} [result=self.result] - Search result object
 * @returns {array<aggregation>}
 *
 * @example

// Run search request and list category aggregations
await search.fetch()
search.getCategories().forEach(aggCategory => {
  console.log(`we have ${aggCategory.doc_count} items with category ${aggCategory.key}`)
})

 */

/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/methods/get-items.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/methods/get-items.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((self, result) => {
  // map list of item objets from search result
  if (!result) {
    result = self.result;
  }

  return Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__["searchedItems"])(result);
});
/**
 * @method
 * @name EcomSearch#getItems
 * @description List items from search result object.
 *
 * @param {result} [result=self.result] - Search result object
 * @returns {array<object>}
 *
 * @example

// Run search request and list result items
await search.fetch()
search.getItems().forEach(item => {
  console.log(item)
  console.log(item.name)
})

 * @example

// You can also pass search result object as param
search.fetch().then(result => search.getItems(result).forEach(({ sku }) => console.log(sku)))

 */

/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/methods/get-price-range.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/methods/get-price-range.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((self, result) => {
  // get price aggregations from result object
  if (!result) {
    result = self.result || {};
  }

  const {
    aggregations
  } = result;
  return aggregations ? {
    min: aggregations.min_price && aggregations.min_price.value || 0,
    avg: aggregations.avg_price && aggregations.avg_price.value || 0,
    max: aggregations.max_price && aggregations.max_price.value || 0
  } : {
    min: 0,
    avg: 0,
    max: 0
  };
});
/**
 * @method
 * @name EcomSearch#getPriceRange
 * @description Get minimum, maximum and average item prices
 * from search result object.
 *
 * @param {result} [result=self.result] - Search result object
 * @returns {prices}
 *
 * @example

// Run search request and get resultant price range
search.fetch().then(() => {
  const { min, avg, max } = search.getPriceRange()
  console.log(`prices => min: ${min}; max: ${max}; avg: ${avg}`)
})

 */

/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/methods/get-specs.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/methods/get-specs.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((self, result) => {
  // get specs nested aggregations from result object
  if (!result) {
    result = self.result || {};
  }

  if (result.aggregations) {
    const {
      specs
    } = result.aggregations;

    if (specs && specs.grid && Array.isArray(specs.grid.buckets)) {
      // map nested buckets
      return specs.grid.buckets.map(bucket => ({
        key: bucket.key,
        doc_count: bucket.doc_count,
        options: bucket.text && bucket.text.buckets || []
      }));
    }
  }

  return [];
});
/**
 * @typedef {object} spec
 * @property {string} key - Specification grid ID
 * @property {number} doc_count - How many items has the respective grid
 * @property {array<aggregation>} options - List of matched grid options
 */

/**
 * @method
 * @name EcomSearch#getSpecs
 * @description List specification grids and options
 * matched from search result object.
 *
 * @param {result} [result=self.result] - Search result object
 * @returns {array<spec>}
 *
 * @example

// Run search request and list spec options
await search.fetch()
search.getSpecs().forEach(aggSpec => {
  console.log(`${aggSpec.doc_count} items with grid ${aggSpec.key} and the following options:`)
  aggSpec.options.forEach(aggOption => {
    console.log(`${aggOption.key} (${aggOption.doc_count})`)
  })
})

 */

/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/methods/get-term-suggestions.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/methods/get-term-suggestions.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((self, result) => {
  // get search term suggestions from result object
  if (!result) {
    result = self.result || {};
  }

  return result.suggest && result.suggest.words || [];
});
/**
 * @typedef {object} suggest
 * @property {string} text - The original keyword from search term
 * @property {number} offset - Position where the keyword starts on search term
 * @property {number} length - Original keyword length
 * @property {array<suggestion>} options - Suggested options to replace original keyword
 */

/**
 * @typedef {object} suggestion
 * @property {string} text - The suggested keyword
 * @property {number} score - Match score up to 1
 * @property {number} freq - How many items match with the suggested keyword
 */

/**
 * @method
 * @name EcomSearch#getTermSuggestions
 * @description Get list of keyword suggestions based on current
 * search term from result object.
 *
 * @param {result} [result=self.result] - Search result object
 * @returns {array<suggest>}
 *
 * @example

// Run search request with wrong term and get suggestions
search.setSearchTerm('smartprone applo').fetch()
  .then(() => {
    search.getTermSuggestions().forEach(({ text, options }) => {
      const bestOption = options[0]
      // Check match score to suggest term replace
      if (bestOption.score >= 0.83) {
        console.log(`should replace '${text}' by '${bestOption.text}' on search term`)
      }
    })
  })
  .catch(error => {
    console.error(error)
    if (error.response) {
      console.log(error.response)
    }
  })

 */

/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/methods/get-total-count.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/methods/get-total-count.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((self, result) => {
  // return total matched items
  if (!result) {
    result = self.result || {};
  }

  return result.hits ? result.hits.total : undefined;
});
/**
 * @method
 * @name EcomSearch#getTotalCount
 * @description Get total number of products found from search result object.
 *
 * @param {result} [result=self.result] - Search result object
 * @returns {number}
 *
 * @example

// Run search request and count total items matched
search.fetch().then(() => console.log(search.getTotalCount()))

 * @example

// You can also pass search result object as param
try {
  const result = await search.fetch()
  if (search.getTotalCount(result) > 0) {
    // Listing result items as logic example here
    console.log(search.getItems(result))
  }
} catch (error) {
  console.error(error)
}

 */

/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/methods/merge-filter.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/methods/merge-filter.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.merge */ "./node_modules/lodash.merge/index.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);


const getNestedRule = (filter, occur) => {
  // treat nested query object
  // look './set-specs.js' as example
  const query = filter && filter.nested && filter.nested.query;

  if (query && query.bool && Array.isArray(query.bool[occur])) {
    return query.bool[occur].find(rule => rule.term);
  }

  return undefined;
};

/* harmony default export */ __webpack_exports__["default"] = ((self, filter, occur = 'filter') => {
  const type = Object.keys(filter)[0]; // merge general filter to current Query DSL
  // ensure query.bool.filter is array

  lodash_merge__WEBPACK_IMPORTED_MODULE_0__(self.dsl, {
    query: {
      bool: {
        [occur]: []
      }
    }
  });
  const filters = self.dsl.query.bool[occur]; // check if new filter object should be added or replace other

  let rule;

  switch (type) {
    case 'terms':
    case 'term':
    case 'multi_match':
    case 'range':
      if (typeof filter[type] === 'object' && filter[type] !== null) {
        const field = Object.keys(filter[type])[0];

        for (let i = 0; i < filters.length; i++) {
          // check if is the same field
          const rule = filters[i][Object.keys(filters[i])[0]];

          if (typeof rule === 'object' && rule !== null && Object.keys(rule)[0] === field) {
            // replace filter object
            filters[i] = filter;
            return self;
          }
        }
      }

      break;

    case 'nested':
      rule = getNestedRule(filter, occur);

      if (rule) {
        // check field and key value for nested object filter
        const field = Object.keys(rule.term)[0];
        const key = rule.term[field]; // run root filters list first

        for (let i = 0; i < filters.length; i++) {
          const rule = getNestedRule(filters[i], occur); // check field and key value

          if (rule && rule.term[field] === key) {
            // replace filter object
            filters[i] = filter;
            return self;
          }
        }
      }

  } // add new filter object to current list


  filters.push(filter);
  return self;
});
/**
 * @method
 * @name EcomSearch#mergeFilter
 * @description Add/update a filter object on current
 * Query DSL filters list for next search request.
 *
 * @param {object} filter - A valid object for Query DSL
 * [filter context]{@link https://www.elastic.co/guide/en/elasticsearch/reference/current/query-filter-context.html}
 * @param {string} [occur='filter'] - Occurrence type for
 * [boolean query]{@link https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-bool-query.html}
 * @returns {self}
 *
 * @example

// Add custom filter by product quantity
search.mergeFilter({
  term: {
    quantity: 0
  }
})

 * @example

// Set filter by SKUs and run search request
const filter = { terms: { sku: ['nb-apl-1203', 'hd-csr-303'] } }
search.mergeFilter(filter).fetch()

 */

/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/methods/remove-filter.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/methods/remove-filter.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((self, field, occur = 'filter') => {
  // remove filter for current product field
  const filters = self.dsl.query && self.dsl.query.bool && self.dsl.query.bool[occur];

  if (Array.isArray(filters)) {
    for (let i = 0; i < filters.length; i++) {
      const filter = filters[i];

      if (filter.nested && filter.nested.path === field || filter[Object.keys(filter)[0]][field]) {
        // remove filters array element
        filters.splice(i, 1);
        break;
      }
    }
  }

  return self;
});
/**
 * @method
 * @name EcomSearch#removeFilter
 * @description Remove a filter object on current
 * Query DSL filters list for next search request.
 *
 * @param {string} field - A valid
 * [item field]{@link https://developers.e-com.plus/docs/api/#/search/items/items}
 * with dot notation for nested properties
 * @param {string} [occur='filter'] - Occurrence type for
 * [boolean query]{@link https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-bool-query.html}
 * @returns {self}
 *
 * @example

// Remove filter by brand IDs and all specification filters
search.removeFilter('brands._id').removeFilter('specs')

 * @example

// Remove filter by category names and run seach request
search.removeFilter('categories.name').fetch()

 */

/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/methods/reset.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/methods/reset.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_dsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../lib/dsl */ "./node_modules/@ecomplus/search-engine/src/lib/dsl.js");
/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.clonedeep */ "./node_modules/lodash.clonedeep/index.js");
/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_clonedeep__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (self => {
  // reset Query DSL
  self.dsl = lodash_clonedeep__WEBPACK_IMPORTED_MODULE_1__(_lib_dsl__WEBPACK_IMPORTED_MODULE_0__["default"]); // unset result

  self.result = undefined; // reset default page limit and sort by views

  return self.setPageSize().setSortOrder();
});
/**
 * @method
 * @name EcomSearch#reset
 * @description Reset default
 * [Query DSL]{@link https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-body.html}
 * for [Search API]{@link https://developers.e-com.plus/docs/api/#/search/items/items}
 * request body and unset instance result.
 *
 * @returns {self}
 *
 * @example

// Reset instance `dsl` and `result`
search.reset()

 */

/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/methods/set-brand-ids.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/methods/set-brand-ids.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_common_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../lib/common-filter */ "./node_modules/@ecomplus/search-engine/src/lib/common-filter.js");
 // handle filter by brand IDs

/* harmony default export */ __webpack_exports__["default"] = ((self, brandIds) => Object(_lib_common_filter__WEBPACK_IMPORTED_MODULE_0__["default"])(self, 'brands', '_id', brandIds));
/**
 * @method
 * @name EcomSearch#setBrandIds
 * @description Defines list of brand IDs to match on next search request,
 * filtering product results by brand.
 *
 * @param {array<string>|null} brandIds - List of brand ObjectIDs (`_id`)
 * @returns {self}
 *
 * @example

// Set filter by brand ID and run search request
search.setBrandIds([ '5c703b35c626be23430d5030' ]).fetch()

 * @example

// Remove filter by brand ID
search.setBrandIds(null)

 */

/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/methods/set-brand-names.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/methods/set-brand-names.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_common_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../lib/common-filter */ "./node_modules/@ecomplus/search-engine/src/lib/common-filter.js");
 // handle filter by brand names

/* harmony default export */ __webpack_exports__["default"] = ((self, brandNames) => Object(_lib_common_filter__WEBPACK_IMPORTED_MODULE_0__["default"])(self, 'brands', 'name', brandNames));
/**
 * @method
 * @name EcomSearch#setBrandNames
 * @description Defines list of brand names to match on next search request,
 * filtering product results by brand.
 *
 * @param {array<string>|null} brandNames - List of brand names
 * @returns {self}
 *
 * @example

// Set filter by brands and run search request
search.setBrandNames([ 'Corsair', 'Apple' ]).fetch()

 * @example

// Remove filter by brand names
search.setBrandNames(null)

 */

/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/methods/set-category-ids.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/methods/set-category-ids.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_common_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../lib/common-filter */ "./node_modules/@ecomplus/search-engine/src/lib/common-filter.js");
 // handle filter by category IDs

/* harmony default export */ __webpack_exports__["default"] = ((self, categoryIds) => Object(_lib_common_filter__WEBPACK_IMPORTED_MODULE_0__["default"])(self, 'categories', '_id', categoryIds, 'must'));
/**
 * @method
 * @name EcomSearch#setCategoryIds
 * @description Defines list of category IDs to match on next search request,
 * filtering product results by category.
 *
 * @param {array<string>|null} categoryIds - List of category ObjectIDs (`_id`)
 * @returns {self}
 *
 * @example

// Set filter by category IDs for next search
search.setCategoryIds([ '5c7009fdc626be23430d4f82', '5c700a53c626be23430d4f88' ])

 * @example

// Remove filter by category IDs and run search request
search.setCategoryIds(null).fetch()

 */

/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/methods/set-category-names.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/methods/set-category-names.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_common_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../lib/common-filter */ "./node_modules/@ecomplus/search-engine/src/lib/common-filter.js");
 // handle filter by category names

/* harmony default export */ __webpack_exports__["default"] = ((self, categoryNames) => Object(_lib_common_filter__WEBPACK_IMPORTED_MODULE_0__["default"])(self, 'categories', 'name', categoryNames, 'must'));
/**
 * @method
 * @name EcomSearch#setCategoryNames
 * @description Defines list of category names to match on next search request,
 * filtering product results by category.
 *
 * @param {array<string>|null} categoryNames - List of category names
 * @returns {self}
 *
 * @example

// Set filter by categories and run search request
search.setCategoryNames([ 'Headset', 'Monitores Gamer' ]).fetch()

 * @example

// Remove filter by category names
search.setCategoryNames(null)

 */

/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/methods/set-page-number.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/methods/set-page-number.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((self, page = 1) => {
  self.dsl.from = self.dsl.size * (page - 1);
  return self;
});
/**
 * @method
 * @name EcomSearch#setPageNumber
 * @description Defines next page number for
 * search request (paginate results) starting from 1.
 *
 * @param {number} [page=1] - Integer page number
 * @returns {self}
 *
 * @example

// Configure to get second page of results and run search request
search.setPageNumber(2).fetch()

* @example

// Set back to page number 1
// It's the default preseted page number
search.setPageNumber()

 */

/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/methods/set-page-size.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/methods/set-page-size.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((self, limit = 24) => {
  self.dsl.size = limit;
  return self;
});
/**
 * @method
 * @name EcomSearch#setPageSize
 * @description Defines maximum number of result items for next search request.
 *
 * @param {number} [limit=24] - Integer max result size
 * @returns {self}
 *
 * @example

// Set page size 20 and run search request
search.setPageSize(20).fetch()

* @example

// Set to 24 the maxium results for next search
// It's the default preseted page size
search.setPageSize()

 */

/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/methods/set-price-range.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/methods/set-price-range.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((self, minPrice, maxPrice) => {
  // price ranges
  const price = {};

  if (typeof minPrice === 'number' && !isNaN(minPrice)) {
    price.gte = minPrice;
  }

  if (typeof maxPrice === 'number' && !isNaN(maxPrice)) {
    price.lte = maxPrice;
  } // add/update filter


  return self.mergeFilter({
    range: {
      price
    }
  });
});
/**
 * @method
 * @name EcomSearch#setPriceRange
 * @description Defines range filter to match with product price
 * for next search request.
 *
 * @param {number|null} minPrice - Minimun price value
 * @param {number|null} maxPrice - Maximun price value
 * @returns {self}
 *
 * @example

// Set filter by price range and run search request
search.setPriceRange(10, 22.5).fetch()

 * @example

// Remove filter by product price for next search
search.setPriceRange(null, null)

 */

/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/methods/set-product-ids.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/methods/set-product-ids.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_common_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../lib/common-filter */ "./node_modules/@ecomplus/search-engine/src/lib/common-filter.js");
 // handle filter by product IDs

/* harmony default export */ __webpack_exports__["default"] = ((self, productIds) => Object(_lib_common_filter__WEBPACK_IMPORTED_MODULE_0__["default"])(self, null, '_id', productIds));
/**
 * @method
 * @name EcomSearch#setProductIds
 * @description Defines list of product IDs to match on next search request.
 *
 * @param {array<string>|null} productIds - List of product ObjectIDs (`_id`)
 * @returns {self}
 *
 * @example

// Set filter by ID and run search request
search.setProductIds([ '5c703c40c626be23430d5033' ]).fetch()

 * @example

// Remove filter by product ID
search.setProductIds(null)

 */

/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/methods/set-search-term.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/methods/set-search-term.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.merge */ "./node_modules/lodash.merge/index.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((self, term) => {
  // match name and/or keyword with term
  // https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-multi-match-query.html
  self.mergeFilter({
    multi_match: {
      query: term,
      fields: ['name', 'keywords']
    }
  }, 'must');
  lodash_merge__WEBPACK_IMPORTED_MODULE_0__(self.dsl, {
    // handle terms suggestion
    // 'did you mean?'
    // https://www.elastic.co/guide/en/elasticsearch/reference/current/search-suggesters.html
    suggest: {
      text: term,
      words: {
        term: {
          field: 'name'
        }
      }
    }
  });
  return self;
});
/**
 * @method
 * @name EcomSearch#setSearchTerm
 * @description Defines term to match with product name
 * and/or keywords on next search request.
 *
 * @param {string} term - Term to be searched
 * @returns {self}
 *
 * @example

// Set new search term
search.setSearchTerm('smartphone')

 * @example

// Set new term and run search request
search.setSearchTerm('notebook').fetch()

 */

/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/methods/set-skus.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/methods/set-skus.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_common_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../lib/common-filter */ "./node_modules/@ecomplus/search-engine/src/lib/common-filter.js");
 // handle filter by product SKUs

/* harmony default export */ __webpack_exports__["default"] = ((self, skus) => Object(_lib_common_filter__WEBPACK_IMPORTED_MODULE_0__["default"])(self, null, 'sku', skus));
/**
 * @method
 * @name EcomSearch#setSkus
 * @description Defines list of product SKUs to match on next search request.
 *
 * @param {array<string>|null} skus - List of product SKUs
 * @returns {self}
 *
 * @example

// Set filter by SKUs for next search
search.setSkus(['nb-apl-1203', 'hd-csr-303'])

 * @example

// Remove filter by SKU and run search request
search.setSkus(null).fetch()

 */

/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/methods/set-sort-order.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/methods/set-sort-order.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_dsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../lib/dsl */ "./node_modules/@ecomplus/search-engine/src/lib/dsl.js");

/* harmony default export */ __webpack_exports__["default"] = ((self, enumOrder) => {
  // get default sort array
  const sort = _lib_dsl__WEBPACK_IMPORTED_MODULE_0__["default"].sort.slice();
  let timestamp; // defines most common sorting options

  switch (enumOrder) {
    case 'sales':
      // sort by sales after relevance
      sort.splice(2, 0, {
        sales: {
          order: 'desc'
        }
      });
      break;

    case 'news':
      // sort by hex ID after relevance replacing score sort
      sort[sort.length - 1] = {
        _id: {
          order: 'desc'
        }
      };
      break;

    case 'lowest_price':
    case 'highest_price':
      // sort by price after stock and before relevance
      sort.splice(1, 0, {
        price: {
          order: enumOrder === 'lowest_price' ? 'asc' : 'desc'
        }
      });
      break;

    case 'offers':
      // sort by percentage offer price
      timestamp = Date.now();
      sort.splice(1, 0, {
        _script: {
          type: 'number',
          script: {
            lang: 'painless',
            source: "doc['price'].value > 0 && doc['base_price'].value > 0" + " && (doc['price_effective_date.start'].empty || " + `doc['price_effective_date.start'].date.millis <= ${timestamp}L)` + " && (doc['price_effective_date.end'].empty || " + `doc['price_effective_date.end'].date.millis >= ${timestamp}L)` + " ? doc['base_price'].value / doc['price'].value : 0"
          },
          order: 'desc'
        }
      });
      break;

    case 'views':
    case '':
    case undefined:
    case null:
      // default sort by views after preseted sorting options
      sort.push({
        views: {
          order: 'desc'
        }
      });
      break;

    default:
      // alphabetical order by 'slug', 'sku' or any
      sort.splice(1, 0, {
        [enumOrder]: {
          order: 'asc'
        }
      });
  } // set instance query sort


  self.dsl.sort = sort;
  return self;
});
/**
 * @method
 * @name EcomSearch#setSortOrder
 * @description Defines most common sorting options and set
 * on instance query for next search request.
 *
 * @param {('sales'|'news'|'lowest_price'|'highest_price'|'offers'|'slug'|'sku'|'views')} [enumOrder='views'] -
 * Sort option enum or valid asc sortable item field
 * @returns {self}
 *
 * @example

// Set sort by top selling products and run search request
search.setSortOrder('sales').fetch()

* @example

// Sort next search result starting by most popular products
// It's the default preseted sort order (views)
search.setSortOrder()

 */

/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/methods/set-spec.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/methods/set-spec.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((self, gridId, textOptions) => {
  // nested ELS object
  // http://nocf-www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-nested-query.html
  if (Array.isArray(textOptions)) {
    // add/update filter
    return self.mergeFilter({
      nested: {
        path: 'specs',
        query: {
          bool: {
            filter: [{
              term: {
                'specs.grid': gridId
              }
            }, {
              terms: {
                'specs.text': textOptions
              }
            }]
          }
        }
      }
    });
  }

  if (textOptions === null) {
    // remove filter for current grid
    const filters = self.dsl.query && self.dsl.query.bool && self.dsl.query.bool.filter;

    if (Array.isArray(filters)) {
      for (let i = 0; i < filters.length; i++) {
        if (filters[i] && filters[i].nested) {
          const {
            path,
            query
          } = filters[i].nested;

          if (path === 'specs' && query && query.bool) {
            // search from grid ID on nested filters
            const rules = query.bool.filter;

            if (Array.isArray(rules) && rules.find(({
              term
            }) => term && term['specs.grid'] === gridId)) {
              // grid ID found
              // remove filters array element
              filters.splice(i, 1);
              return self;
            }
          }
        }
      }
    }
  }

  return self;
});
/**
 * @method
 * @name EcomSearch#setSpec
 * @description Add, update or remove search filter
 * by product specification based on grid ID and list of text options to match.
 *
 * @param {string} gridId - Grid ID such as 'size'
 * @param {array|null} textOptions - List of chosen options such as `['M', 'G']`
 * or null to clear current grid filter
 * @returns {self}
 *
 * @example

// Set filter by size specification and run search request
search.setSpec('size', ['M', 'G']).fetch()
// Update size options and search again
search.setSpec('size', ['P', 'M', 'G']).fetch()

 * @example

// Remove filter by size for next search
search.setSpec('size', null)

 */

/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/modifiers/add-global-filter.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/modifiers/add-global-filter.js ***!
  \*********************************************************************************/
/*! exports provided: default, addGlobalFilter, dslMiddlewares */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addGlobalFilter", function() { return addGlobalFilter; });
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.merge */ "./node_modules/lodash.merge/index.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_dsl_middlewares__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../lib/dsl-middlewares */ "./node_modules/@ecomplus/search-engine/src/lib/dsl-middlewares.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dslMiddlewares", function() { return _lib_dsl_middlewares__WEBPACK_IMPORTED_MODULE_1__["default"]; });




const addGlobalFilter = (field, value) => {
  _lib_dsl_middlewares__WEBPACK_IMPORTED_MODULE_1__["default"].push(dsl => {
    lodash_merge__WEBPACK_IMPORTED_MODULE_0__(dsl, {
      query: {
        bool: {
          filter: [{
            term: {
              [field]: value
            }
          }]
        }
      }
    });
  });
};
/**
 * @method
 * @name addGlobalFilter
 * @description Add custom fetch DSL middleware with simple term filter for all instances.
 * @param {string} field - Item field to filter with dot notation
 * @param {string|number|boolean} value - Searched field value
 *
 * @example
 * import { addGlobalFilter } from '@ecomplus/search-engine'
 * addGlobalFilter('channel_id', 123)
 */


/* harmony default export */ __webpack_exports__["default"] = (addGlobalFilter);


/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/modifiers/set-sales-channel.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/modifiers/set-sales-channel.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_global_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-global-filter */ "./node_modules/@ecomplus/search-engine/src/modifiers/add-global-filter.js");

/* harmony default export */ __webpack_exports__["default"] = (channelId => Object(_add_global_filter__WEBPACK_IMPORTED_MODULE_0__["default"])('channel_id', channelId));
/**
 * @method
 * @name setSalesChannel
 * @description Set channel ID for searches in all instances.
 * @param {number} channelId - Sales channel ID
 *
 * @example
 * import { setSalesChannel } from '@ecomplus/search-engine'
 * setSalesChannel(123)
 */

/***/ }),

/***/ "./node_modules/@ecomplus/search-engine/src/modifiers/set-warehouse.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ecomplus/search-engine/src/modifiers/set-warehouse.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_dsl_middlewares__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../lib/dsl-middlewares */ "./node_modules/@ecomplus/search-engine/src/lib/dsl-middlewares.js");

/* harmony default export */ __webpack_exports__["default"] = (warehouseCode => {
  _lib_dsl_middlewares__WEBPACK_IMPORTED_MODULE_0__["default"].push(dsl => {
    if (!dsl.sort) {
      dsl.sort = [];
    }

    dsl.sort.splice(1, 0, {
      'warehouses.in_stock': {
        order: 'desc',
        nested: {
          path: 'warehouses',
          filter: {
            term: {
              'warehouses.code': warehouseCode
            }
          }
        }
      }
    });
  });
});
/**
 * @method
 * @name setWarehouse
 * @description Set warehouse (multi CD) code for searches in all instances.
 * @param {string} warehouseCode - Warehouse code
 *
 * @example
 * import { setWarehouse } from '@ecomplus/search-engine'
 * setWarehouse('MG')
 */

/***/ }),

/***/ "./node_modules/@ecomplus/storefront-router/src/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-router/src/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var _methods_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/map */ "./node_modules/@ecomplus/storefront-router/src/methods/map.js");
/* harmony import */ var _methods_resolve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/resolve */ "./node_modules/@ecomplus/storefront-router/src/methods/resolve.js");
/* harmony import */ var _methods_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods/list */ "./node_modules/@ecomplus/storefront-router/src/methods/list.js");
/* harmony import */ var _methods_setup_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./methods/setup-store */ "./node_modules/@ecomplus/storefront-router/src/methods/setup-store.js");
/**
 * Universal JS router for E-Com Plus storefront.
 * {@link https://github.com/ecomclub/storefront-router GitHub}
 *
 * @module @ecomplus/storefront-router
 * @author E-Com Club <ti@e-com.club>
 * @return {@link EcomRouter}
 * @see EcomRouter
 *
 * @example
 * // ES import default
 * import EcomRouter from '@ecomplus/storefront-router'
 *
 * @example
 * // With CommonJS
 * const EcomRouter = require('@ecomplus/storefront-router')
 *
 * @example
 * <!-- Global `EcomRouter` from CDN on browser -->
 * <script src="https://cdn.jsdelivr.net/npm/@ecomplus/storefront-router/dist/ecom-router.var.min.js"></script>
 *
 * @example
 * <!-- Bundle from CDN with `ecomUtils` and `ecomClient` -->
 * <script
 *   src="https://cdn.jsdelivr.net/npm/@ecomplus/storefront-router/dist/ecom-router.bundle.min.js"
 * ></script>
 */





/* harmony default export */ __webpack_exports__["default"] = (function (storeId, location = typeof window === 'object' && window.location) {
  const self = this;
  /**
   * Respective Store ID number
   * @name EcomRouter#storeId
   * @type {number}
   */

  this.storeId = storeId || _ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__["$ecomConfig"].get('store_id');
  /**
   * [Location interface]{@link https://developer.mozilla.org/en-US/docs/Web/API/Location}
   * @name EcomRouter#location
   * @type {object}
   */

  this.location = location;

  this.map = function () {
    return Object(_methods_map__WEBPACK_IMPORTED_MODULE_1__["default"])(self, arguments);
  };

  this.resolve = function () {
    return Object(_methods_resolve__WEBPACK_IMPORTED_MODULE_2__["default"])(self, arguments);
  };

  this.list = function () {
    return Object(_methods_list__WEBPACK_IMPORTED_MODULE_3__["default"])(self, arguments);
  };

  this.setupStore = function () {
    return Object(_methods_setup_store__WEBPACK_IMPORTED_MODULE_4__["default"])(self, arguments);
  };
});
/**
 * Construct a new storefront router object.
 * @class EcomRouter
 * @param {number} [storeId=_config.get('store_id')] - Preset Store ID number
 * @param {object} [location=window.location] -
 * [Location interface]{@link https://developer.mozilla.org/en-US/docs/Web/API/Location}
 *
 * @example

const router = new EcomRouter()

 *
 * @example

// Defining Store ID and using custom location interface
const storeId = 2000
const router = new EcomRouter(storeId, DOM.location)
// P.S.: You may want to use custom location when using jsdom on Node.js for example

 */

/***/ }),

/***/ "./node_modules/@ecomplus/storefront-router/src/methods/list.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-router/src/methods/list.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecomplus_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/client */ "./node_modules/@ecomplus/client/src/index.js");

/* harmony default export */ __webpack_exports__["default"] = (self => new Promise((resolve, reject) => {
  const {
    storeId
  } = self; // list slugs for each resource

  const promises = [];
  const routes = [];
  ['products', 'categories', 'collections', 'brands'].forEach(resource => {
    promises.push(Object(_ecomplus_client__WEBPACK_IMPORTED_MODULE_0__["store"])({
      url: `/${resource}.json`,
      storeId
    }).then(response => {
      const {
        result
      } = response.data;

      if (Array.isArray(result)) {
        result.forEach(({
          _id,
          slug,
          name,
          sku
        }) => {
          if (slug) {
            // check it this path is not already in use
            const path = '/' + slug;

            if (!routes.find(route => route.path === path)) {
              // add new route object
              routes.push({
                resource,
                _id,
                path,
                name,
                sku
              });
            }
          }
        });
      }
    }));
  }); // resolve when all promises are done

  Promise.all(promises).then(() => resolve(routes)).catch(reject);
}));
/**
 * @method
 * @name EcomRouter#list
 * @description List all storefront routes for product, categories, brands and collections.
 *
 * @returns {Promise<route[]|error>}
 *
 * @example

// Listing all routes, then resolving to get each document body
router.list()
  .then(routes => {
    routes.forEach(route => {
      console.log(route.path)
      console.log(route.resource)
      console.log(route._id)
      if (route.name) {
        console.log('Not a product', route.name)
      }
      router.resolve(route)
        .then(context => {
          console.log(context.body)
        })
        .catch(error => { throw error })
    })
  })
  .catch(error => {
    console.error(error)
    if (error.response) {
      console.log(error.response)
    }
  })

 */

/***/ }),

/***/ "./node_modules/@ecomplus/storefront-router/src/methods/map.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-router/src/methods/map.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ecomplus_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ecomplus/client */ "./node_modules/@ecomplus/client/src/index.js");



const map = (self, [path]) => {
  if (!path) {
    // get pathname from current location interface
    path = self.location.pathname;
  } // map page resource and object based on slug


  const slug = typeof path === 'string' ? path.slice(1) : null; // replace / with $ on slug to escape URL

  const url = '/' + self.storeId + '@' + slug.replace(/\//g, '$') + '.json'; // send request to E-Com Plus Storefront API

  return Object(_ecomplus_client__WEBPACK_IMPORTED_MODULE_1__["storefront"])({
    url
  }).then(response => {
    // { "GET": "[resource]@[id]" }
    const val = response.data.GET;

    if (val) {
      const [resource, resourceId] = val.split('@');

      if (resourceId) {
        // returns object with resource info on promise chain
        return {
          path,
          resource,
          _id: resourceId
        };
      }
    } // throw error to handle promise catch


    const err = new Error('Resource not found, invalid slug or store ID'); // simulate axios error object

    err.response = response;
    throw err;
  });
};
/**
 * @typedef {object} route
 * @property {string} path - Route URL pathname
 * @property {string} resource - Route resource type from
 * [E-Com Plus Store API]{@link https://developers.e-com.plus/docs/api/#/store/}
 * @property {string} _id - Route document Object ID from
 * [E-Com Plus Store API]{@link https://developers.e-com.plus/docs/api/#/store/}
 * @property {string} [name] - Route document name (not set on products)
 */

/**
 * @method
 * @name EcomRouter#map
 * @description Get page resource and object ID based on URL pathname.
 *
 * @param {string} [path=location.pathname] - URL pathname
 * @returns {Promise<route|error>}
 *
 * @example

// Mapping resource and object ID from current location pathname
router.map()
  .then(route => {
    console.log(route.path)
    console.log(route.resource)
    console.log(route._id)
  })
  .catch(error => {
    console.error(error)
    if (error.response) {
      console.log(error.response)
    }
  })

 * @example

// Specifying some URL pathname
router.map('/monitores')
  .then(route => console.log(route))
  .catch(error => console.error(error))

 */


/* harmony default export */ __webpack_exports__["default"] = (map);

/***/ }),

/***/ "./node_modules/@ecomplus/storefront-router/src/methods/resolve.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-router/src/methods/resolve.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecomplus_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/client */ "./node_modules/@ecomplus/client/src/index.js");


const resolve = (self, [route]) => new Promise((resolve, reject) => {
  // handle new route
  const {
    storeId
  } = self;
  const {
    resource,
    _id
  } = route;

  if (resource && _id) {
    // get current page object from Store API
    Object(_ecomplus_client__WEBPACK_IMPORTED_MODULE_0__["store"])({
      url: `/${resource}/${_id}.json`,
      storeId
    }).then(({
      data
    }) => {
      // save object body on context
      resolve({
        resource,
        body: data
      });
    }).catch(reject);
  } else {
    // skip request and just reject with new error
    const err = new Error('Invalid route resource or object ID');
    err.response = {};
    reject(err);
  }
});
/**
 * @typedef {object} context
 * @property {string} resource - Context resource type from
 * [E-Com Plus Store API]{@link https://developers.e-com.plus/docs/api/#/store/}
 * @property {object} body - Context
 * [Store API]{@link https://developers.e-com.plus/docs/api/#/store/}
 * document body for respective route
 */

/**
 * @method
 * @name EcomRouter#resolve
 * @description Get [Store API]{@link https://developers.e-com.plus/docs/api/#/store/}
 * document body based on route resource and Object ID.
 * <br><br>
 * <b>Tip</b>: Although resolve can be used standalone,
 * you may want to use [map]{@link EcomRouter#map} method first.
 *
 * @param {route} route - Route object to get respective document body
 * @returns {Promise<context|error>}
 *
 * @example

// Get document body for current URL pathname
router.map()
  .then(route => {
    router.resolve(route)
      .then(context => {
        console.log(context)
        console.log(context.resource)
        console.log(context.body)
        console.log(context.body._id)
        console.log(context.body.name)
      })
      .catch(error => { throw error })
  })
  .catch(error => {
    console.error(error)
    if (error.response) {
      console.log(error.response)
    }
  })

 */


/* harmony default export */ __webpack_exports__["default"] = (resolve);

/***/ }),

/***/ "./node_modules/@ecomplus/storefront-router/src/methods/setup-store.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-router/src/methods/setup-store.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var _ecomplus_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ecomplus/client */ "./node_modules/@ecomplus/client/src/index.js");




const setupStore = (self, [domain, updateConfig = true]) => {
  if (!domain) {
    // get domain from current location interface
    domain = self.location.hostname;
  }

  const url = '/domains/' + domain + '.json'; // send request to E-Com Plus Platform API

  return Object(_ecomplus_client__WEBPACK_IMPORTED_MODULE_2__["platform"])({
    url
  }).then(({
    data
  }) => {
    if (updateConfig) {
      // set Store IDs on config
      ;
      ['store_id', 'store_object_id', 'channel_id'].forEach(prop => _ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["_config"].set(prop, data[prop])); // check for default sales channel language

      const lang = data.default_lang;

      if (lang) {
        // set default lang and country codes
        _ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["_config"].set('lang', lang);

        _ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["_config"].set('country_code', lang.replace(/^[a-z]{2}_/, '').toUpperCase());

        if (lang === 'pt_br') {
          // also change default currency
          _ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["_config"].set('currency', 'BRL');

          _ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["_config"].set('currency_symbol', 'R$');
        }
      }
    } // update instance Store ID


    self.storeId = data.store_id; // returns channel info object on promise chain

    return data;
  });
};
/**
 * @typedef {object} channel
 * @property {number} store_id - Sales channel Store ID
 * @property {string} store_object_id - Sales channel Store Object ID
 * @property {number} channel_id - Sales channel ID number
 * @property {string} [default_lang] - Sales channel default language code
 */

/**
 * @method
 * @name EcomRouter#setupStore
 * @description Get Store IDs and default lang (and set on `_config`) based on domain name.
 *
 * @param {string} [domain=location.hostname] - Sales channel domain name
 * @param {boolean} [updateConfig=true] - Update global configs from `ecomUtils._config`
 * @returns {Promise<channel|error>}
 *
 * @example

// Using current location URL
router.setupStore()
  .then(channel => {
    console.log(channel.store_id)
    console.log(channel.store_object_id)
    console.log(channel)
  })
  .catch(error => {
    console.error(error)
    if (error.response) {
      console.log(error.response)
    }
  })

 * @example

// Specifying domain name and disabling `ecomUtils._config` update
router.setupStore('shop-plus.e-com.plus', false)
  .then(channel => console.log(channel))
  .catch(error => console.error(error))

 */


/* harmony default export */ __webpack_exports__["default"] = (setupStore);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/package.json":
/*!***************************************************!*\
  !*** ./node_modules/@ecomplus/utils/package.json ***!
  \***************************************************/
/*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, browser, browserslist, bugs, dependencies, description, devDependencies, homepage, husky, jsdelivr, keywords, license, main, module, name, optionalDependencies, publishConfig, repository, scripts, sideEffects, unpkg, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_args\":[[\"@ecomplus/utils@1.4.1\",\"/home/gmazurco/Projects/storefront-template\"]],\"_from\":\"@ecomplus/utils@1.4.1\",\"_id\":\"@ecomplus/utils@1.4.1\",\"_inBundle\":false,\"_integrity\":\"sha512-siIMZu5qjwwtvFTqt/F29i/SkzZcIFrb/6WcmUJToh4HiBoJVx8H/id2WQRQf7EzcL9c0uYMWX6DNIN/DymvcA==\",\"_location\":\"/@ecomplus/utils\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"version\",\"registry\":true,\"raw\":\"@ecomplus/utils@1.4.1\",\"name\":\"@ecomplus/utils\",\"escapedName\":\"@ecomplus%2futils\",\"scope\":\"@ecomplus\",\"rawSpec\":\"1.4.1\",\"saveSpec\":null,\"fetchSpec\":\"1.4.1\"},\"_requiredBy\":[\"/\",\"/@ecomplus/storefront-renderer\"],\"_resolved\":\"https://registry.npmjs.org/@ecomplus/utils/-/utils-1.4.1.tgz\",\"_spec\":\"1.4.1\",\"_where\":\"/home/gmazurco/Projects/storefront-template\",\"author\":{\"name\":\"E-Com Club\",\"email\":\"ti@e-com.club\"},\"browser\":\"dist/ecom-utils.min.js\",\"browserslist\":[\"last 1 version\",\"not dead\",\"> 0.2%\"],\"bugs\":{\"url\":\"https://github.com/ecomplus/utils/issues\"},\"dependencies\":{\"core-js\":\"^3.6.5\"},\"description\":\"JS utility functions to E-Com Plus (not only) related apps\",\"devDependencies\":{\"@babel/core\":\"^7.9.6\",\"@babel/preset-env\":\"^7.9.6\",\"@commitlint/cli\":\"^8.3.5\",\"@commitlint/config-conventional\":\"^8.3.4\",\"babel-loader\":\"^8.1.0\",\"copy-webpack-plugin\":\"^6.0.1\",\"core-js\":\"^3.6.5\",\"docdash\":\"^1.2.0\",\"husky\":\"^4.2.5\",\"jsdoc\":\"^3.6.4\",\"standard\":\"^14.3.4\",\"standard-version\":\"^8.0.0\",\"webpack\":\"^4.43.0\",\"webpack-cli\":\"^3.3.11\",\"webpack-dev-server\":\"^3.11.0\"},\"homepage\":\"https://github.com/ecomplus/utils#readme\",\"husky\":{\"hooks\":{\"commit-msg\":\"commitlint -E HUSKY_GIT_PARAMS\"}},\"jsdelivr\":\"dist/ecom-utils.polyfill.min.js\",\"keywords\":[\"ecomplus\",\"ecommerce-apps\",\"ecommerce\",\"utility-functions\",\"storefront\",\"javascript-utils\"],\"license\":\"MIT\",\"main\":\"dist/ecom-utils.node.min.js\",\"module\":\"src/index.js\",\"name\":\"@ecomplus/utils\",\"optionalDependencies\":{\"core-js\":\"^3.6.5\"},\"publishConfig\":{},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/ecomplus/utils.git\"},\"scripts\":{\"build\":\"node ./build/bin.js\",\"doc\":\"rm -rf ./docs/*; jsdoc ./src -r ./README.md -d ./docs -t ./node_modules/docdash\",\"release\":\"rm -rf ./dist; npm ddp && standard-version && node ./build/bin.js\",\"serve\":\"webpack-dev-server\"},\"sideEffects\":false,\"unpkg\":\"dist/ecom-utils.polyfill.min.js\",\"version\":\"1.4.1\"}");

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/ecom-utils.js":
/*!********************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/ecom-utils.js ***!
  \********************************************************/
/*! exports provided: _self, _config, $ecomConfig, i18n, name, alphabeticalSort, price, onPromotion, formatMoney, formatDate, findByProperty, findBySlug, findByName, filterByParentSlug, fullName, minQuantity, inStock, searchedItems, recommendedIds, categoriesList, specValues, specTextValue, specValueByText, variationsGrids, gridTitle, img, imgSizes, nickname, phone, birthDate, parsePhone, parseDate, lineAddress, objectIdPad, randomObjectId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$ecomConfig", function() { return $ecomConfig; });
/* harmony import */ var _lib_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/globals */ "./node_modules/@ecomplus/utils/src/lib/globals.js");
/* harmony import */ var _lib_self__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/self */ "./node_modules/@ecomplus/utils/src/lib/self.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_self", function() { return _lib_self__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/config */ "./node_modules/@ecomplus/utils/src/lib/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_config", function() { return _lib_config__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _methods_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods/i18n */ "./node_modules/@ecomplus/utils/src/methods/i18n.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return _methods_i18n__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _methods_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./methods/name */ "./node_modules/@ecomplus/utils/src/methods/name.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "name", function() { return _methods_name__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _methods_alphabetical_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./methods/alphabetical-sort */ "./node_modules/@ecomplus/utils/src/methods/alphabetical-sort.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alphabeticalSort", function() { return _methods_alphabetical_sort__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _methods_price__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./methods/price */ "./node_modules/@ecomplus/utils/src/methods/price.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "price", function() { return _methods_price__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _methods_on_promotion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./methods/on-promotion */ "./node_modules/@ecomplus/utils/src/methods/on-promotion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onPromotion", function() { return _methods_on_promotion__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _methods_format_money__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./methods/format-money */ "./node_modules/@ecomplus/utils/src/methods/format-money.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatMoney", function() { return _methods_format_money__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _methods_format_date__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./methods/format-date */ "./node_modules/@ecomplus/utils/src/methods/format-date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return _methods_format_date__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _methods_find_by_property__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./methods/find-by-property */ "./node_modules/@ecomplus/utils/src/methods/find-by-property.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findByProperty", function() { return _methods_find_by_property__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _methods_find_by_slug__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./methods/find-by-slug */ "./node_modules/@ecomplus/utils/src/methods/find-by-slug.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findBySlug", function() { return _methods_find_by_slug__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _methods_find_by_name__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./methods/find-by-name */ "./node_modules/@ecomplus/utils/src/methods/find-by-name.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findByName", function() { return _methods_find_by_name__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _methods_filter_by_parent_slug__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./methods/filter-by-parent-slug */ "./node_modules/@ecomplus/utils/src/methods/filter-by-parent-slug.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterByParentSlug", function() { return _methods_filter_by_parent_slug__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _methods_full_name__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./methods/full-name */ "./node_modules/@ecomplus/utils/src/methods/full-name.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fullName", function() { return _methods_full_name__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _methods_min_quantity__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./methods/min-quantity */ "./node_modules/@ecomplus/utils/src/methods/min-quantity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minQuantity", function() { return _methods_min_quantity__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _methods_in_stock__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./methods/in-stock */ "./node_modules/@ecomplus/utils/src/methods/in-stock.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inStock", function() { return _methods_in_stock__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _methods_searched_items__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./methods/searched-items */ "./node_modules/@ecomplus/utils/src/methods/searched-items.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "searchedItems", function() { return _methods_searched_items__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _methods_recommended_ids__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./methods/recommended-ids */ "./node_modules/@ecomplus/utils/src/methods/recommended-ids.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recommendedIds", function() { return _methods_recommended_ids__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _methods_categories_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./methods/categories-list */ "./node_modules/@ecomplus/utils/src/methods/categories-list.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "categoriesList", function() { return _methods_categories_list__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _methods_spec_values__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./methods/spec-values */ "./node_modules/@ecomplus/utils/src/methods/spec-values.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "specValues", function() { return _methods_spec_values__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _methods_spec_text_value__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./methods/spec-text-value */ "./node_modules/@ecomplus/utils/src/methods/spec-text-value.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "specTextValue", function() { return _methods_spec_text_value__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _methods_spec_value_by_text__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./methods/spec-value-by-text */ "./node_modules/@ecomplus/utils/src/methods/spec-value-by-text.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "specValueByText", function() { return _methods_spec_value_by_text__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _methods_variations_grids__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./methods/variations-grids */ "./node_modules/@ecomplus/utils/src/methods/variations-grids.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variationsGrids", function() { return _methods_variations_grids__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _methods_grid_title__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./methods/grid-title */ "./node_modules/@ecomplus/utils/src/methods/grid-title.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridTitle", function() { return _methods_grid_title__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _methods_img__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./methods/img */ "./node_modules/@ecomplus/utils/src/methods/img.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "img", function() { return _methods_img__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _methods_img_sizes__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./methods/img-sizes */ "./node_modules/@ecomplus/utils/src/methods/img-sizes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "imgSizes", function() { return _methods_img_sizes__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _methods_nickname__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./methods/nickname */ "./node_modules/@ecomplus/utils/src/methods/nickname.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nickname", function() { return _methods_nickname__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _methods_phone__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./methods/phone */ "./node_modules/@ecomplus/utils/src/methods/phone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "phone", function() { return _methods_phone__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _methods_birth_date__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./methods/birth-date */ "./node_modules/@ecomplus/utils/src/methods/birth-date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "birthDate", function() { return _methods_birth_date__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _methods_parse_phone__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./methods/parse-phone */ "./node_modules/@ecomplus/utils/src/methods/parse-phone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePhone", function() { return _methods_parse_phone__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _methods_parse_date__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./methods/parse-date */ "./node_modules/@ecomplus/utils/src/methods/parse-date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseDate", function() { return _methods_parse_date__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _methods_line_address__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./methods/line-address */ "./node_modules/@ecomplus/utils/src/methods/line-address.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lineAddress", function() { return _methods_line_address__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _methods_object_id_pad__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./methods/object-id-pad */ "./node_modules/@ecomplus/utils/src/methods/object-id-pad.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objectIdPad", function() { return _methods_object_id_pad__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _methods_random_object_id__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./methods/random-object-id */ "./node_modules/@ecomplus/utils/src/methods/random-object-id.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "randomObjectId", function() { return _methods_random_object_id__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/**
 * @namespace ecomUtils
 */



































/**
 * Global config values for E-Com Plus apps.
 * @name ecomUtils#$ecomConfig
 * @see $ecomConfig
 * @type {object}
 * @example
 * ecomUtils.$ecomConfig.get('store_id')
 * // => 1011
 */

const $ecomConfig = _lib_globals__WEBPACK_IMPORTED_MODULE_0__["root"].$ecomConfig || _lib_config__WEBPACK_IMPORTED_MODULE_2__["default"];


/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/index.js ***!
  \***************************************************/
/*! exports provided: default, _self, _config, $ecomConfig, i18n, name, alphabeticalSort, price, onPromotion, formatMoney, formatDate, findByProperty, findBySlug, findByName, filterByParentSlug, fullName, minQuantity, inStock, searchedItems, recommendedIds, categoriesList, specValues, specTextValue, specValueByText, variationsGrids, gridTitle, img, imgSizes, nickname, phone, birthDate, parsePhone, parseDate, lineAddress, objectIdPad, randomObjectId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/globals */ "./node_modules/@ecomplus/utils/src/lib/globals.js");
/* harmony import */ var _ecom_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ecom-utils */ "./node_modules/@ecomplus/utils/src/ecom-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_self", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["_self"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_config", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["_config"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$ecomConfig", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["$ecomConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "name", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["name"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alphabeticalSort", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["alphabeticalSort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "price", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["price"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onPromotion", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["onPromotion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatMoney", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["formatMoney"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["formatDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findByProperty", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["findByProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findBySlug", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["findBySlug"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findByName", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["findByName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterByParentSlug", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["filterByParentSlug"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fullName", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["fullName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minQuantity", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["minQuantity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inStock", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["inStock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "searchedItems", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["searchedItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recommendedIds", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["recommendedIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "categoriesList", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["categoriesList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "specValues", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["specValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "specTextValue", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["specTextValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "specValueByText", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["specValueByText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variationsGrids", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["variationsGrids"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridTitle", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["gridTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "img", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["img"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "imgSizes", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["imgSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nickname", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["nickname"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "phone", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["phone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "birthDate", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["birthDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePhone", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["parsePhone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseDate", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["parseDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lineAddress", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["lineAddress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objectIdPad", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["objectIdPad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "randomObjectId", function() { return _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["randomObjectId"]; });

/*!
 * @ecomplus/utils
 * (c) E-Com Club <ti@e-com.club>
 * Released under the MIT License.
 */

/**
 * JS utility functions for E-Com Plus (not only) related apps.
 * {@link https://github.com/ecomclub/ecomplus-utils GitHub}
 *
 * @module @ecomplus/utils
 * @author E-Com Club <ti@e-com.club>
 * @return {@link ecomUtils}
 * @see ecomUtils
 * @see $ecomConfig
 *
 * @example
 * // Import all utility methods with ES
 * import ecomUtils from '@ecomplus/utils'
 *
 * @example
 * // Named ES imports with some sample methods
 * import {
 *   i18n,
 *   formatMoney,
 *   minQuantity,
 *   price,
 *   // ...
 * } from '@ecomplus/utils'
 *
 * @example
 * // Import only config object
 * import { $ecomConfig } from '@ecomplus/utils'
 *
 * @example
 * // With CommonJS
 * const ecomUtils = require('@ecomplus/utils')
 *
 * @example
 * // CommonJS require standalone methods
 * const i18n = require('@ecomplus/utils/dist/methods/i18n')
 * const formatMoney = require('@ecomplus/utils/dist/methods/format-money')
 * // ...
 * // require(`@ecomplus/utils/dist/methods/${kebab-case-method-name}`)
 *
 * @example
 * <!-- Globals `ecomUtils` and `$ecomConfig` from CDN on browser -->
 * <script src="https://cdn.jsdelivr.net/npm/@ecomplus/utils/dist/ecom-utils.polyfill.min.js"></script>
 */



if (_lib_globals__WEBPACK_IMPORTED_MODULE_0__["root"].$ecomConfig === undefined) {
  _lib_globals__WEBPACK_IMPORTED_MODULE_0__["root"].$ecomConfig = _ecom_utils__WEBPACK_IMPORTED_MODULE_1__["$ecomConfig"];
}

/* harmony default export */ __webpack_exports__["default"] = (_ecom_utils__WEBPACK_IMPORTED_MODULE_1__); // named exports off all methods



/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/lib/config.js":
/*!********************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/lib/config.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals */ "./node_modules/@ecomplus/utils/src/lib/globals.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@ecomplus/utils/src/lib/constants.js");


 // check for predefined config options

const getConfig = prop => {
  if (typeof document === 'object' && document) {
    // DOM object
    // try to get config from HTML meta tags
    const metas = document.getElementsByTagName('meta');

    for (let i = 0; i < metas.length; i++) {
      // parse prop name to kebab case and check meta tag name
      if (metas[i].getAttribute('name') === prop.replace(/_/g, '-')) {
        const val = metas[i].getAttribute('content'); // returns int for Store ID or string for others

        return prop === 'ecom_store_id' ? parseInt(val, 10) : val;
      }
    }
  } // try to get config prop from env (global) object


  return _globals__WEBPACK_IMPORTED_MODULE_1__["env"][prop.toUpperCase()];
};
/**
 * @namespace $ecomConfig
 * @description
 * General config values for E-Com Plus apps.
 * It tries to get values from metatags or `window` on browser,
 * or `proccess.env` on Node.js environments,
 * when undefineds it uses
 * [predefined constants]{@link https://github.com/ecomclub/ecomplus-utils/blob/master/src/lib/constants.js}.
 * <br><br>
 * Check all common config properties on
 * [`src/lib/config.js`]{@link https://github.com/ecomclub/ecomplus-utils/blob/master/src/lib/config.js}
 * file.
 *
 * @example

// Preset config on browser with HTML meta tags
<meta name="ecom-store-id" content="1011">
<meta name="ecom-store-object-id" content="5b1abe30a4d4531b8fe40725">
<meta name="ecom-lang" content="pt_br">

* @example

// Preset config on browser with JS window
window.ECOM_STORE_ID = 1011
window.ECOM_STORE_OBJECT_ID = '5b1abe30a4d4531b8fe40725'
window.ECOM_LANG = 'pt_br'

 * @example

// Preset config on Node.js env
process.env.ECOM_STORE_ID = 1011
process.env.ECOM_STORE_OBJECT_ID = '5b1abe30a4d4531b8fe40725'
process.env.ECOM_LANG = 'pt_br'

 */
// setup config object


const config = {};
['lang', 'currency', 'currency_symbol', 'country_code', 'store_id', 'store_object_id'].forEach(prop => {
  config[prop] = getConfig('ecom_' + prop);
}); // exports fuctions to get and set config props

/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * @memberof $ecomConfig
   * @description Get the stored value for specified config property.
   * @param {string} prop - Configuration property
   * @example
   * $ecomConfig.get('store_id')
   * // => 1011
   * $ecomConfig.get('currency')
   * // => 'USD'
   * $ecomConfig.get('currency_symbol')
   * // => '$'
   */
  get(prop) {
    // try to get stored value from config object first
    const value = config[prop];

    if (value !== undefined && value !== null && value !== '') {
      return value;
    } else {
      // return default value from constants
      switch (prop) {
        case 'lang':
          return _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_LANG"];

        case 'currency':
          return _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CURRENCY"];

        case 'currency_symbol':
          return _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CURRENCY_SYMBOL"];

        case 'country_code':
          return _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_COUNTRY_CODE"];

        case 'store_id':
          return _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_STORE_ID"];

        case 'store_object_id':
          return _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_STORE_OBJECT_ID"];
        // 'channel_id', 'page_resource', 'page_object_id'
      }
    }

    return null;
  },

  /**
   * @memberof $ecomConfig
   * @description Save the value for specified config property.
   * @param {string} prop - Configuration property
   * @param {string} value - New prop value
   * @example
   * $ecomConfig.set('store_id', 1012)
   */
  set(prop, value) {
    // save prop value on config object
    config[prop] = value;
  }

});

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/lib/constants.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/lib/constants.js ***!
  \***********************************************************/
/*! exports provided: DEFAULT_LANG, DEFAULT_CURRENCY, DEFAULT_CURRENCY_SYMBOL, DEFAULT_COUNTRY_CODE, DEFAULT_STORE_ID, DEFAULT_STORE_OBJECT_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LANG", function() { return DEFAULT_LANG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CURRENCY", function() { return DEFAULT_CURRENCY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CURRENCY_SYMBOL", function() { return DEFAULT_CURRENCY_SYMBOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_COUNTRY_CODE", function() { return DEFAULT_COUNTRY_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_STORE_ID", function() { return DEFAULT_STORE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_STORE_OBJECT_ID", function() { return DEFAULT_STORE_OBJECT_ID; });
const DEFAULT_LANG = 'en_us';
const DEFAULT_CURRENCY = 'USD';
const DEFAULT_CURRENCY_SYMBOL = '$';
const DEFAULT_COUNTRY_CODE = 'US';
const DEFAULT_STORE_ID = 1011;
const DEFAULT_STORE_OBJECT_ID = '5b1abe30a4d4531b8fe40725';

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/lib/globals.js":
/*!*********************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/lib/globals.js ***!
  \*********************************************************/
/*! exports provided: root, env */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "env", function() { return env; });
let env, root;

if (typeof window === 'object' && window) {
  // browser env
  root = env = window;
} else if (typeof process === 'object' && process.env) {
  // Node.js env
  root = global;
  env = process.env;
} else {
  /* global self */
  // fallback to empty config object
  root = env = typeof self === 'object' && self || {};
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/lib/self.js":
/*!******************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/lib/self.js ***!
  \******************************************************/
/*! exports provided: default, version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../package.json */ "./node_modules/@ecomplus/utils/package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../package.json */ "./node_modules/@ecomplus/utils/package.json", 1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _package_json__WEBPACK_IMPORTED_MODULE_0__["version"]; });

 // exports info about the package

/* harmony default export */ __webpack_exports__["default"] = (_package_json__WEBPACK_IMPORTED_MODULE_0__["name"] + '@' + _package_json__WEBPACK_IMPORTED_MODULE_0__["version"]);


/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/alphabetical-sort.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/alphabetical-sort.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const alphabeticalSort = list => {
  if (Array.isArray(list)) {
    // try to sort by name or title
    return list.sort((a, b) => {
      if (a && b) {
        if (a.name) {
          // products, categories, brand...
          return a.name < b.name ? -1 : 1;
        } else if (a.title) {
          // grids
          return a.title < b.title ? -1 : 1;
        }
      } // fallback


      return a < b ? -1 : 1;
    });
  }

  if (typeof list === 'object' && list !== null) {
    // suppose to be a 'list all' request body
    return alphabeticalSort(list.results);
  }

  console.error(new Error('`list` should be an array')); // always return an array

  return [];
};
/**
 * @method
 * @memberof ecomUtils
 * @name alphabeticalSort
 * @description Sort list of objects alphabetically by name ot title property.
 * @param {array|object} list - Array of objects (products, brands...) or list body with 'results'
 * @returns {array}
 *
 * @example
 * // Sample array with name or title's property
 * ecomUtils.alphabeticalSort(['product', 'category'])
 * // => ["category", "product"]
 * ecomUtils.alphabeticalSort(['Matheus', 'Vitor', 'Ana', 'Clara', 'Bruna'])
 * // => ["Ana", "Bruna", "Clara", "Matheus", "Vitor"]
 * // Can be an array of objects like:
 * const brand1 = {name: 'zara'}
 * const brand2 = {name: 'Thermaltake'}
 * const brand3 = {name: 'AeroCool'}
 * const brand4 = {name: 'Fortrek'}
 * const array = [brand1, brand2, brand3, brand4]
 * ecomUtils.alphabeticalSort(array)
 * // => [{name: "AeroCool"}, {name: "Fortrek"}, {name: "Thermaltake"}, {name: "Thermaltake"}, {name: "zara"}]
 */


/* harmony default export */ __webpack_exports__["default"] = (alphabeticalSort);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/birth-date.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/birth-date.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _format_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format-date */ "./node_modules/@ecomplus/utils/src/methods/format-date.js");


const birthDate = customer => {
  if (typeof customer === 'object' && customer !== null) {
    let birth = customer.birth_date || customer;

    if (birth) {
      let {
        day,
        month,
        year
      } = birth;

      if (day && month && year) {
        // has complete customer birth date
        // mount Date object and return formatted date string
        return Object(_format_date__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(year, month - 1, day));
      }
    }
  } // returns empty string by default


  return '';
};
/**
 * @method
 * @memberof ecomUtils
 * @name birthDate
 * @description Returns birth date formatted string from customer body object.
 * @param {object} customer - Customer body object or birth date object with day, month and year
 * @returns {string}
 *
 * @example
 * // costumer will be the parameter of this function and as result will return his birth date
 * // const customer = object (body customer)
 * // customer can be like:
 * const costumer = { main_email: 'joejonh@me.com', birth_date: { year: 1990, month: 10, day: 1 } }
 * ecomUtils.birthDate(costumer)
 * // => "10/1/1990"
 */


/* harmony default export */ __webpack_exports__["default"] = (birthDate);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/categories-list.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/categories-list.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const categoriesList = product => {
  let categoryTree;

  if (typeof product === 'object' && product !== null) {
    // try to get categories from product body object
    if (product.category_tree) {
      categoryTree = product.category_tree;
    } else if (Array.isArray(product.categories) && product.categories[0]) {
      // use the first category from list
      return [product.categories[0].name];
    }
  } else {
    // category tree string received as param ?
    categoryTree = product;
  }

  if (typeof categoryTree === 'string') {
    const categories = categoryTree.split('>');

    for (let i = 0; i < categories.length; i++) {
      // remove white spaces from names
      categories[i] = categories[i].trim();
    } // list of category names


    return categories;
  } // fallback returning empty array


  return [];
};
/**
 * @method
 * @memberof ecomUtils
 * @name categoriesList
 * @description Parse category tree string to list of categories names.
 * @param {object|string} product - Product object body or category tree string
 * @returns {array}
 *
 * @example
 * // Can be a category tree, like:
 * const categoryTree = 'Quarto > Cama > Travesseiros'
 * // So use categoryTree is parameter of function categoriesList, like:
 * ecomUtils.categoriesList(categoryTree)
 * // => ["Quarto", "Cama", "Travesseiros"]
 * // Or can be a product body object like:
 * const product = { name: 'Ultimate', categories: [{name: 'Cadeira Gamer'},{name: 'Periféricos'}]}
 * ecomUtils.categoriesList(product)
 * => ["Cadeira Gamer"]
 */


/* harmony default export */ __webpack_exports__["default"] = (categoriesList);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/filter-by-parent-slug.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/filter-by-parent-slug.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const filterByParentSlug = (categories, slug) => {
  // for categories
  // returns array of macthed category objects
  try {
    return categories.filter(category => category.parent && category.parent.slug === slug);
  } catch (err) {
    // not an array ?
    console.error(err);
    return [];
  }
};
/**
 * @method
 * @memberof ecomUtils
 * @name filterByParentSlug
 * @description Filter categories list by parent category slug.
 * @param {array} categories - List of category objects
 * @param {string} slug - Parent category slug value
 * @returns {array}
 *
 * @example
 * // Full object ref.: https://developers.e-com.plus/docs/api/#/store/categories/
 * const categories = []
 * categories.push({ name: 'PCs', slug: 'pcs', parent: { name: 'Info', slug: 'info' } })
 * categories.push({ name: 'Shirts', slug: 'shirts', parent: { name: 'Clothes', slug: 'clothes' } })
 * categories.push({ name: 'Info', slug: 'info' })
 * ecomUtils.filterByParentSlug(categories, 'info')
 * // => [ { name: 'PCs', slug: 'pcs', parent: { name: 'Info', slug: 'info' } } ]
 */


/* harmony default export */ __webpack_exports__["default"] = (filterByParentSlug);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/find-by-name.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/find-by-name.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./name */ "./node_modules/@ecomplus/utils/src/methods/name.js");
/* harmony import */ var _find_by_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./find-by-property */ "./node_modules/@ecomplus/utils/src/methods/find-by-property.js");



const findByName = (list, title) => {
  // try to find by name property first
  const objByName = Object(_find_by_property__WEBPACK_IMPORTED_MODULE_1__["default"])(list, 'name', title);

  if (objByName) {
    // found
    return objByName;
  } // try to find by transalated name or title prop


  const newList = list.map(obj => {
    return obj && {
      name: Object(_name__WEBPACK_IMPORTED_MODULE_0__["default"])(obj)
    };
  });
  return Object(_find_by_property__WEBPACK_IMPORTED_MODULE_1__["default"])(newList, 'name', title);
};
/**
 * @method
 * @memberof ecomUtils
 * @name findByName
 * @description Find object from list by name or title value.
 * @param {array} list - List of nested objects
 * @param {string} title - Object (category, brand, product...) name or title value
 * @returns {object|undefined}
 *
 * @example
 * const listOfNested = [{"name": "Ultimate Blaster", "sku": "MHP4824"}, {"name": "Xiaomi","sku": "smtp-xomi-9746"}]
 * ecomUtils.findByName(listOfNested, 'Ultimate Blaster')
 * // => {name: "Ultimate Blaster", sku: "MHP4824"}
 */


/* harmony default export */ __webpack_exports__["default"] = (findByName);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/find-by-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/find-by-property.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const findByProperty = (list, prop, value) => {
  // must be an array
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      let obj = list[i];

      if (obj && obj[prop] === value) {
        // object found
        return obj;
      }
    }
  }

  return undefined;
};
/**
 * @method
 * @memberof ecomUtils
 * @name findByProperty
 * @description Find object from list by some property value.
 * @param {array} list - List of nested objects
 * @param {string} prop - Property name
 * @param {mixed} value - Property value to be matched
 * @returns {object|undefined}
 *
 * @example
 * // Find on list of generic objects
 * ecomUtils.findByProperty([ { a: 1, b: 1 }, { a: 2 } ], 'a', 1)
 * // => { a: 1, b: 1 }
 * ecomUtils.findByProperty([ { a: 1 }, { a: 1, b: 1 }, { a: 0 } ], 'a', 1)
 * // => { a: 1 }
 * ecomUtils.findByProperty([ { a: 0, b: 0 }, { a: 1 } ], 'a', 3)
 * // => undefined
 */


/* harmony default export */ __webpack_exports__["default"] = (findByProperty);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/find-by-slug.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/find-by-slug.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _find_by_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find-by-property */ "./node_modules/@ecomplus/utils/src/methods/find-by-property.js");
 // just filter a list of documents by 'slug' property

const findBySlug = (list, slug) => Object(_find_by_property__WEBPACK_IMPORTED_MODULE_0__["default"])(list, 'slug', slug);
/**
 * @method
 * @memberof ecomUtils
 * @name findBySlug
 * @description Find object from list by slug value.
 * @param {array} list - List of nested objects
 * @param {string} slug - Object (category, brand, product...) slug value
 * @returns {object|undefined}
 *
 * @example
 * // Find on list of brands, categories, products, any...
 * ecomUtils.findBySlug([ { name: 'Nike', slug: 'nike' }, { name: 'Puma', slug: 'puma' } ], 'nike')
 * // => { name: 'Nike', slug: 'nike' }
 * ecomUtils.findBySlug([ { slug: 'a' }, { slug: 'b' } ], 'b')
 * // => { slug: 'b' }
 * ecomUtils.findBySlug([ { slug: 'a' }, { slug: 'b' } ], 'c')
 * // => undefined
 */


/* harmony default export */ __webpack_exports__["default"] = (findBySlug);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/format-date.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/format-date.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../lib/config */ "./node_modules/@ecomplus/utils/src/lib/config.js");



const formatDate = (date, lang = _lib_config__WEBPACK_IMPORTED_MODULE_1__["default"].get('lang'), options) => {
  if (typeof date === 'object' && date !== null) {
    if (typeof date.getTime !== 'function') {
      // expected to be a body (product, category, brand...) object
      date = new Date(date.datetime || date.updated_at || date.created_at);
    }
  } else {
    // parse to Date object
    date = new Date(date);
  }

  if (!isNaN(date.getTime())) {
    try {
      // return locale date string
      // lang code format: pt-br, en-us...
      return date.toLocaleDateString(lang.replace('_', '-'), options);
    } catch (err) {
      console.error(err);
    }
  } // fallback returning empty string by default


  return '';
};
/**
 * @method
 * @memberof ecomUtils
 * @name formatDate
 * @description Parse date to locale formatted string.
 * @param {string|object} date - Date object or ISO string, or body object (order, product...)
 * @param {string} [lang=$ecomConfig.get('lang')] - Snake case language code, eg.: 'en_us', 'pt_br'
 * @param {object} [options] - Options object for `toLocaleDateString` function
 * @returns {string}
 *
 * @example
 * const notification = { datetime: '2019-06-19T03:35:52.811Z', content: {api_event: {resource: 'orders'}}}
 * ecomUtils.formatDate(notification, 'pt-br')
 * // => "19/06/2019"
 */


/* harmony default export */ __webpack_exports__["default"] = (formatDate);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/format-money.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/format-money.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../lib/config */ "./node_modules/@ecomplus/utils/src/lib/config.js");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./price */ "./node_modules/@ecomplus/utils/src/methods/price.js");




const formatMoney = (value, currency = _lib_config__WEBPACK_IMPORTED_MODULE_1__["default"].get('currency'), lang = _lib_config__WEBPACK_IMPORTED_MODULE_1__["default"].get('lang')) => {
  // price to number
  if (typeof value === 'object') {
    if (value !== null) {
      // suppose to be product object
      value = Object(_price__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
    }
  } else if (typeof value === 'string') {
    value = parseFloat(value);
  }

  if (currency) {
    try {
      // format price string
      // lang code format: pt-br, en-us...
      return value.toLocaleString(lang.replace('_', '-'), {
        style: 'currency',
        currency
      });
    } catch (err) {
      console.error(err);
    }
  } // fallback using configured currency symbol


  const moneyPrefix = (currency || _lib_config__WEBPACK_IMPORTED_MODULE_1__["default"].get('currency_symbol')) + ' ';
  return typeof value === 'number' ? moneyPrefix + value : '';
};
/**
 * @method
 * @memberof ecomUtils
 * @name formatMoney
 * @description Parse price number to formatted currency string.
 * @param {number|object} value - Price number or body object (product or variation)
 * @param {string|null} [currency=$ecomConfig.get('currency')] - Currency code such as 'BRL'
 * @param {string} [lang=$ecomConfig.get('lang')] - Snake case language code, eg.: 'en_us', 'pt_br'
 * @returns {string}
 *
 * @example
 * // With number as value
 * ecomUtils.formatMoney(10.6)
 * // => $10.60
 * ecomUtils.formatMoney(10.6, 'BRL')
 * // => R$10.60
 * ecomUtils.formatMoney(10.6, 'BRL', 'pt_br')
 * // => R$ 10,60
 *
 * @example
 * // With product, variation or cart item object as value
 * // Full object ref.: https://developers.e-com.plus/docs/api/#/store/products/
 * ecomUtils.formatMoney({ sku: 'TEST', name: 'Test', price: 140.56 })
 * // => $140.56
 *
 * @example
 * // You can also set the configured lang and currency first
 * $ecomConfig.set('lang', 'pt_br')
 * $ecomConfig.set('currency', 'BRL')
 * $ecomConfig.set('currency_symbol', 'R$')
 * // Then call `formatMoney` without expliciting currency and lang
 * ecomUtils.formatMoney(10.6)
 * // => R$ 10,60
 */


/* harmony default export */ __webpack_exports__["default"] = (formatMoney);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/full-name.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/full-name.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const fullName = customer => {
  // customer full name string
  let name = '';

  if (customer) {
    const nameObj = customer.name;

    if (nameObj && nameObj.given_name) {
      // concat customer name parts
      name += nameObj.given_name;

      if (nameObj.middle_name) {
        name += ' ' + nameObj.middle_name;
      }

      if (nameObj.family_name) {
        name += ' ' + nameObj.family_name;
      }
    }
  } // returns empty string when name is undefined


  return name;
};
/**
 * @method
 * @memberof ecomUtils
 * @name fullName
 * @description Returns user full name from customer object.
 * @param {object} customer - Customer body object
 * @returns {string}
 *
 * @example
 * const customer = { 'name': { 'given_name': 'Jonh', 'family_name': 'Lock' }, 'display_name': 'Locky' }
 * ecomUtils.fullName(customer)
 * // => 'Jonh Lock'
 */


/* harmony default export */ __webpack_exports__["default"] = (fullName);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/grid-title.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/grid-title.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../lib/config */ "./node_modules/@ecomplus/utils/src/lib/config.js");
/* harmony import */ var _name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./name */ "./node_modules/@ecomplus/utils/src/methods/name.js");



const gridTitle = (gridId, grids, lang = _lib_config__WEBPACK_IMPORTED_MODULE_0__["default"].get('lang')) => {
  let grid;

  if (Array.isArray(grids)) {
    // match the grid by ID
    grid = grids.find(grid => grid.grid_id === gridId);
  } else {
    console.error('`grids` must be array to get grid title');
  } // returns grid name or fallback to received grid ID by default


  return grid ? Object(_name__WEBPACK_IMPORTED_MODULE_1__["default"])(grid, lang) : gridId;
};
/**
 * @method
 * @memberof ecomUtils
 * @name gridTitle
 * @description Returns grid title by grid ID and lang.
 * @param {string} gridId - The unique ID of the grid ('colors', 'size'...)
 * @param {array} grids - List of grid objects
 * @param {string} [lang=$ecomConfig.get('lang')] - Snake case language code, eg.: 'en_us', 'pt_br'
 * @returns {string}
 *
 * @example
 * const gridId = 'canais'
 * const grid1 = {title: 'Canais', grid_id: 'canais'}
 * const grid2 = {title: 'Cores', grid_id: 'colors'}
 * const grid3 = {title: 'Tamanho', grid_id: 'size'}
 * const grids = [ grid1, grid2, grid3 ]
 * const lang = 'pt_br'
 * ecomUtils.gridTitle(gridId, grids, lang)
 * // => "Canais"
 */


/* harmony default export */ __webpack_exports__["default"] = (gridTitle);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/i18n.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/i18n.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../lib/constants */ "./node_modules/@ecomplus/utils/src/lib/constants.js");
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../lib/config */ "./node_modules/@ecomplus/utils/src/lib/config.js");



const i18n = (dictionary, lang = _lib_config__WEBPACK_IMPORTED_MODULE_1__["default"].get('lang')) => {
  if (typeof dictionary === 'object' && dictionary !== null) {
    const prop = Object.keys(dictionary)[0];

    if (/^[a-z]{2}(_[a-z]{2})?$/.test(prop)) {
      // supposed to be object of languages options
      return dictionary[lang] || dictionary[_lib_constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_LANG"]] || dictionary[prop];
    } else {
      // recursive
      const localDictionary = Array.isArray(dictionary) ? [] : {};

      for (const prop in dictionary) {
        if (dictionary[prop] !== undefined) {
          localDictionary[prop] = i18n(dictionary[prop], lang);
        }
      }

      return localDictionary;
    }
  }

  return dictionary;
};
/**
 * @method
 * @memberof ecomUtils
 * @name i18n
 * @description Get translated string by lang code from dictionary object.
 * @param {object} dictionary - Dictionary object containing string in multiple langs
 * @param {string} [lang=$ecomConfig.get('lang')] - Snake case language code, eg.: 'en_us', 'pt_br'
 * @returns {string|object}
 *
 * @example
 * // With simple dictionary objects
 * ecomUtils.i18n({ en_us: 'Hello', pt_br: 'Olá' })
 * // => 'Hello'
 * ecomUtils.i18n({ en_us: 'Hello', pt_br: 'Olá' }, 'pt_br')
 * // => 'Olá'
 *
 * @example
 * // With nested objects
 * ecomUtils.i18n({ hello: { en_us: 'Hello', pt_br: 'Olá' }})
 * // => { hello: 'Hello' }
 * ecomUtils.i18n({ hello: { en_us: 'Hello', pt_br: 'Olá' }, world: { en_us: 'World' }}, 'pt_br')
 * // => { hello: 'Olá', world: 'World' }
 * ecomUtils.i18n({ en_us: { hello: 'Hello', world: 'World' }, pt_br: { hello: 'Olá' }}, 'pt_br')
 * // => { hello: 'Olá' }
 *
 * @example
 * // You can also set the configured lang first
 * $ecomConfig.set('lang', 'pt_br')
 * // Then call `i18n` without expliciting lang
 * ecomUtils.i18n({ en_us: 'Hello', pt_br: 'Olá' })
 * // => Olá
 */


/* harmony default export */ __webpack_exports__["default"] = (i18n);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/img-sizes.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/img-sizes.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const imgSizes = img => {
  // defaul sizes object with zeros
  let sizes = {
    width: 0,
    height: 0
  };
  let sizeString;

  if (typeof img === 'object' && img !== null) {
    sizeString = img.size;
  } else {
    // expect to receive img as size string
    sizeString = img;
  }

  if (typeof sizeString === 'string') {
    sizeString.split('x').forEach((value, index) => {
      // parse width and height to numbers
      value = parseFloat(value);

      if (!isNaN(value)) {
        sizes[index === 0 ? 'width' : 'height'] = value;
      }
    });
  } // returns object with width and height


  return sizes;
};
/**
 * @method
 * @memberof ecomUtils
 * @name imgSizes
 * @description Splits image size string and returns object with 'width' and 'height'.
 * @param {object|string} img - Image object body or size string
 * @returns {object}
 *
 * @example
 * // Using a img sizes string as parameter
 * const size = '200x50'
 * ecomUtils.imgSizes(size)
 * // => {width: 200, height: 50}
 * // Using a img sizes object as parameter
 * const sizeObj = {size: '1000x1000'}
 * ecomUtils.imgSizes(sizeObj)
 * // => {width: 1000, height: 1000}
 */


/* harmony default export */ __webpack_exports__["default"] = (imgSizes);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/img.js":
/*!*********************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/img.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../lib/config */ "./node_modules/@ecomplus/utils/src/lib/config.js");


const img = (product, pictureId, size) => {
  if (!size) {
    size = _lib_config__WEBPACK_IMPORTED_MODULE_0__["default"].get('default_img_size') || 'normal';
  }

  if (product) {
    // product object has 'pictures'
    // cart item object has 'picture'
    let {
      pictures,
      picture
    } = product;

    if (!picture) {
      if (!pictures) {
        if (Array.isArray(product)) {
          // received list of pictures ?
          pictures = product;
        } else {
          // received picture object ?
          picture = product;
        }
      }
    }

    if (Array.isArray(pictures)) {
      // select one img object from product pictures
      picture = pictureId && pictures.filter(pic => pic._id === pictureId)[0] || pictures[0];
    }

    let img;

    if (typeof picture === 'object' && picture !== null) {
      img = picture[size];

      if (!img) {
        // try predefined any size
        let sizes;

        switch (size) {
          case 'small':
            sizes = ['normal', 'big'];
            break;

          case 'normal':
            sizes = ['big', 'zoom', 'small'];
            break;

          case 'big':
            sizes = ['zoom', 'normal'];
            break;

          case 'zoom':
            sizes = ['big'];
            break;

          default:
            sizes = ['big', 'zoom', 'normal', 'small'];
        }

        for (let i = 0; i < sizes.length; i++) {
          const size = sizes[i];

          if (picture[size]) {
            return picture[size];
          }
        } // last try with custom sizes


        for (const size in picture) {
          if (picture[size] && picture[size].url) {
            return picture[size];
          }
        }
      }
    }

    return img;
  }

  return undefined;
};
/**
 * @method
 * @memberof ecomUtils
 * @name img
 * @description Returns img object (with url and alt) from product body or pictures list.
 * @param {object|array} product - Product body object or list of picture objects
 * @param {string} [pictureId] - ObjectID of preferred picture to find in the list
 * @param {string} [size=$ecomConfig.get('default_img_size')] - Preferred image size
 * (generally `normal`) to find on picture object
 * @returns {object|undefined}
 *
 * @example
 * const product = { 'pictures': [ { 'small': { 'url': 'https://ecom.com/imgs/100px/64gb.jpg'}, 'big': { 'url': 'https://ecom.com/imgs/700px/64gb.jpg' }, '_id': '694890155127368133600000' }, { 'small': { 'url': 'https://ecom.com/imgs/100px/e-5-64gb.jpg' }, 'big': { 'url': 'https://ecom.com/imgs/700px/e-5-64gb.jpg' }, '_id': '694890155127368133600001' }, { 'small': { 'url': 'https://ecom.com/imgs/100px/5-64gb.jpg' }, 'big': { 'url': 'https://ecom.com/imgs/700px/5-64gb.jpg' }, '_id': '694890155127368133600002' } ], 'name': 'Smartphone Xiaomi' }
 * const id = '694890155127368133600001'
 * const size = 'big'
 * ecomUtils.img(product, id, size)
 * // => {url: 'https://ecom.com/imgs/700px/e-5-64gb.jpg'}
 */


/* harmony default export */ __webpack_exports__["default"] = (img);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/in-stock.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/in-stock.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _min_quantity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./min-quantity */ "./node_modules/@ecomplus/utils/src/methods/min-quantity.js");
 // check inventory
// true if no stock control or available in stock

const inStock = product => !product.hasOwnProperty('quantity') || product.quantity >= Object(_min_quantity__WEBPACK_IMPORTED_MODULE_0__["default"])(product);
/**
 * @method
 * @memberof ecomUtils
 * @name inStock
 * @description Check if item has stock equal or greater than minimum quantity.
 * @param {object} product - Body object (product or variation)
 * @returns {boolean}
 *
 * @example
 * // Full object ref.: https://developers.e-com.plus/docs/api/#/store/products/
 * const product = { sku: 'TEST', name: 'Test', price: 10 }
 * ecomUtils.inStock(product)
 * // => true
 * product.quantity = 5
 * ecomUtils.inStock(product)
 * // => true
 * product.min_quantity = 10
 * ecomUtils.inStock(product)
 * // => false
 * ecomUtils.inStock({ quantity: 1, min_quantity: 2 })
 * // => false
 * ecomUtils.inStock({ quantity: 0 })
 * // => false
 * ecomUtils.inStock({ quantity: 1, min_quantity: 1 })
 * // => true
 * ecomUtils.inStock({ quantity: 1 })
 * // => true
 */


/* harmony default export */ __webpack_exports__["default"] = (inStock);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/line-address.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/line-address.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../lib/config */ "./node_modules/@ecomplus/utils/src/lib/config.js");


const lineAddress = (address, noNumberString, lang = _lib_config__WEBPACK_IMPORTED_MODULE_0__["default"].get('lang')) => {
  // parse to full address string
  if (address) {
    let addresses = address.addresses;

    if (Array.isArray(addresses)) {
      // customer body object received as param
      address = addresses.filter(addr => addr.default)[0] || addresses[0];
    }

    if (typeof address === 'object' && address !== null) {
      if (address.line_address) {
        return address.line_address;
      } // concat address object properties


      let {
        street,
        number,
        complement,
        borough,
        city
      } = address;
      let province = address.province_code || address.province;
      let lineAddress;

      if (street) {
        lineAddress = street + ', ' + number || // address without number
        noNumberString || (lang === 'pt_br' ? 'S/N' : '-');

        if (complement) {
          lineAddress += ' - ' + complement;
        }

        if (borough) {
          lineAddress += ', ' + borough;
        }
      } else if (borough) {
        lineAddress = borough;
      } // add city and state


      if (city) {
        lineAddress += ' | ' + city;
      }

      if (province) {
        lineAddress += ' | ' + province;
      }

      return lineAddress;
    }
  } // fallback returning empty string


  return '';
};
/**
 * @method
 * @memberof ecomUtils
 * @name lineAddress
 * @description Returns full address string from customer object.
 * @param {object} address - Address object or customer body object
 * @param {string} [noNumberString] - String to show when address has no number
 * @param {string} [lang=$ecomConfig.get('lang')] - Snake case language code, eg.: 'en_us', 'pt_br'
 * @returns {string}
 *
 * @example
 * const address = { 'zip': '35800-999', 'name': 'Jonh Lock', 'street': 'Rua Europa', 'number': 900, 'borough': 'Santa Lucia', 'city': 'Bom Despacho', 'province_code': 'MG'}
 * const lang = 'pt_br'
 * ecomUtils.lineAddress(address, lang)
 * // => 'Rua Europa, 900, Santa Lucia | Bom Despacho | MG'
 */


/* harmony default export */ __webpack_exports__["default"] = (lineAddress);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/min-quantity.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/min-quantity.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const minQuantity = product => product && product.min_quantity || 1;
/**
 * @method
 * @memberof ecomUtils
 * @name minQuantity
 * @description Returns the minimum quantity to add to cart.
 * @param {object} product - Body object (product or variation)
 * @returns {number}
 *
 * @example
 * // With min quantity specified
 * // Full object ref.: https://developers.e-com.plus/docs/api/#/store/products/
 * const product = { sku: 'TEST', name: 'Test', price: 10, min_quantity: 10 }
 * ecomUtils.minQuantity(product)
 * // => 10
 * product.min_quantity = 0
 * ecomUtils.minQuantity(product)
 * // => 0
 *
 * @example
 * // 1 by default when min quantity is undefined
 * ecomUtils.minQuantity({ sku: 'TEST', name: 'Test' })
 * // => 1
 * ecomUtils.minQuantity({})
 * // => 1
 */


/* harmony default export */ __webpack_exports__["default"] = (minQuantity);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/name.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/name.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../lib/config */ "./node_modules/@ecomplus/utils/src/lib/config.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n */ "./node_modules/@ecomplus/utils/src/methods/i18n.js");



const name = (body, lang = _lib_config__WEBPACK_IMPORTED_MODULE_0__["default"].get('lang')) => {
  // prefer translated item name
  if (lang && body.i18n && body.i18n[lang]) {
    return body.i18n[lang];
  } else {
    return body.name || body.title || Object(_i18n__WEBPACK_IMPORTED_MODULE_1__["default"])(body.i18n, lang) || '';
  }
};
/**
 * @method
 * @memberof ecomUtils
 * @name name
 * @description Returns object name by lang.
 * @param {object} body - Object (product, category, brand, grid...) body
 * @param {string} [lang=$ecomConfig.get('lang')] - Snake case language code, eg.: 'en_us', 'pt_br'
 * @returns {string}
 *
 * @example
 * // Sample object with name and translations
 * const product = { name: 'Test', i18n: { en_us: 'Test', pt_br: 'Teste' } }
 * ecomUtils.name(product)
 * // => 'Test'
 * ecomUtils.name(product, 'pt_br')
 * // => 'Teste'
 *
 * @example
 * // Without translations
 * ecomUtils.name({ name: 'Hello' })
 * // => 'Hello'
 * ecomUtils.name({ name: 'Hello' }, 'pt_br')
 * // => 'Hello'
 * ecomUtils.name({ title: 'Mundo' }, 'en_us')
 * // => 'Mundo'
 *
 * @example
 * // You can also set the configured lang first
 * $ecomConfig.set('lang', 'pt_br')
 * // Then call `name` without expliciting lang
 * ecomUtils.name({ name: 'Test', i18n: { en_us: 'Test', pt_br: 'Teste' } })
 * // => 'Teste'
 */


/* harmony default export */ __webpack_exports__["default"] = (name);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/nickname.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/nickname.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const nickname = customer => {
  // customer name to display
  if (customer) {
    if (customer.display_name) {
      return customer.display_name;
    } else if (customer.name && customer.name.given_name) {
      // try to use the "first name" of this user
      return customer.name.given_name;
    }
  } // returns empty string when name is undefined


  return '';
};
/**
 * @method
 * @memberof ecomUtils
 * @name nickname
 * @description Returns user name to display from customer object.
 * @param {object} customer - Customer body object
 * @returns {string}
 *
 * @example
 * const customer = { 'name': { 'given_name': 'Jonh', 'family_name': 'Lock' }, 'display_name': 'Locky' }
 * ecomUtils.nickname(customer)
 * // => 'Locky'
 */


/* harmony default export */ __webpack_exports__["default"] = (nickname);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/object-id-pad.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/object-id-pad.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// mix and return base ID with index
const objectIdPad = (id, index) => id.substring(0, 24 - index.length) + index;
/**
 * @method
 * @memberof ecomUtils
 * @name objectIdPad
 * @description Merge received ObjectID string with new index.
 * @param {string} id - Base ID string, 24 digits hexadecimal
 * @param {string} index - The index to be inserted on the end of base ID, creating new ObjectID
 * @returns {string}
 *
 * @example
 * const id = '5ce59fbf887ef430f1f6ed29'
 * const index = '5'
 * ecomUtils.objectIdPad(id, index)
 * // => '5ce59fbf887ef430f1f6ed25'
 */


/* harmony default export */ __webpack_exports__["default"] = (objectIdPad);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/on-promotion.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/on-promotion.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const onPromotion = product => {
  if (typeof product !== 'object' || product === null) {
    // prevent fatal error
    console.error(new Error('`product` must be an object'));
    return false;
  }

  let promoDates = product.price_effective_date;

  if (promoDates) {
    let now = new Date();

    if (promoDates.start) {
      // start date and time in ISO 8601
      if (new Date(promoDates.start) > now) {
        return false;
      }
    }

    if (promoDates.end) {
      // promotion end date and time in ISO 8601
      if (new Date(promoDates.end) < now) {
        return false;
      }
    }
  } // default to no promotion


  return !!(product.base_price > product.price);
};
/**
 * @method
 * @memberof ecomUtils
 * @name onPromotion
 * @description Check if item has promotional price.
 * @param {object} product - Item (product or variation) body object
 * @returns {boolean}
 *
 * @example
 * // Simple test with no promotion date range
 * // Full object ref.: https://developers.e-com.plus/docs/api/#/store/products/
 * ecomUtils.onPromotion({ sku: 'TEST', name: 'Test', price: 140.56 })
 * // => false
 * ecomUtils.onPromotion({ price: 100, base_price: 110 })
 * // => true
 * ecomUtils.onPromotion({ price: 190, base_price: 170 })
 * // => false
 *
 * @example
 * // With date range
 * const product = { sku: 'abc', price: 20.9, base_price: 30.9, price_effective_date: {} }
 * product.price_effective_date.start = '2019-06-01T16:03:45.035Z'
 * ecomUtils.onPromotion(product)
 * // => true
 * product.price_effective_date.end = '2019-06-10T16:03:45.035Z'
 * ecomUtils.onPromotion(product)
 * // => false
 * product.price_effective_date.end = '2021-08-12T00:00:00.000Z'
 * ecomUtils.onPromotion(product)
 * // => true
 * product.price_effective_date.start = '2021-01-01T00:00:00.000Z'
 * ecomUtils.onPromotion(product)
 * // => false
 */


/* harmony default export */ __webpack_exports__["default"] = (onPromotion);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/parse-date.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/parse-date.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../lib/config */ "./node_modules/@ecomplus/utils/src/lib/config.js");



const parsePhone = (dateStr, countryCode = _lib_config__WEBPACK_IMPORTED_MODULE_1__["default"].get('country_code')) => {
  // parse country formatted date string to { day, month, year }
  let day, month, year;

  if (typeof dateStr === 'string') {
    const dateNumber = (start, ln) => parseInt(dateStr.substr(start, ln), 10); // fix date string to digits only first


    dateStr = dateStr.replace(/[\D]/g, '');

    if (countryCode === 'BR') {
      day = dateNumber(0, 2);
      month = dateNumber(2, 2);
      year = dateNumber(4, 4);
    } else {
      day = dateNumber(6, 2);
      month = dateNumber(4, 2);
      year = dateNumber(0, 4);
    }
  }

  return {
    day,
    month,
    year
  };
};
/**
 * @method
 * @memberof ecomUtils
 * @name parseDate
 * @description Returns customer birth date object from string.
 * @param {string} dateStr - Formatted date string
 * @param {string} [countryCode=$ecomConfig.get('country_code')] - Country ISO 3166-1 alpha-2 code
 * @returns {object}
 *
 * @example
 * // Date string is fixed to digits only and parsed to E-Com Plus APIs date object
 * ecomUtils.parseDate('1990-01-12')
 * // => { day: 12, month: 1, year: 1990 }
 * ecomUtils.parseDate('10/02/1997', 'BR')
 * // => { day: 10, month: 2, year: 1997 }
 *
 * @example
 * // You can also set the configured country code first
 * $ecomConfig.set('country_code', 'BR')
 * // Then call `parseDate` without expliciting country code again
 * ecomUtils.parseDate('10/02/1997')
 * // => { day: 10, month: 2, year: 1997 }
 */


/* harmony default export */ __webpack_exports__["default"] = (parsePhone);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/parse-phone.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/parse-phone.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);


const parsePhone = phoneStr => {
  // parse phone string to { number, country_code }
  const phoneObj = {};

  if (typeof phoneStr === 'string') {
    // fix string to only digits first
    phoneStr = phoneStr.replace(/[^\d+]/g, '');

    if (phoneStr.charAt(0) === '+') {
      phoneObj.country_code = parseInt(phoneStr.substr(1, 2), 10);
      phoneObj.number = phoneStr.substr(3);
    } else {
      phoneObj.number = phoneStr;
    }
  }

  return phoneObj;
};
/**
 * @method
 * @memberof ecomUtils
 * @name parsePhone
 * @description Returns customer phone object from string.
 * @param {string} phoneStr - Phone string
 * @returns {object}
 *
 * @example
 * // Phone string is fixed and parsed to object with `number`
 * ecomUtils.parsePhone('31992980000')
 * // => { number: '31992980000' }
 * ecomUtils.parsePhone('31 99298-1000')
 * // => { number: '31992981000' }
 *
 * @example
 * // Country code is optional and identified by + signal
 * ecomUtils.parsePhone('+55 31992980000')
 * // => { country_code: 55, number: '31992980000' }
 */


/* harmony default export */ __webpack_exports__["default"] = (parsePhone);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/phone.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/phone.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const phone = customer => {
  // empty string by default
  let phoneString = '';

  if (typeof customer === 'object' && customer !== null) {
    let phone = Array.isArray(customer.phones) // use first customer phone by default
    ? customer.phones[0] : customer;

    if (phone && phone.number) {
      if (phone.country_code) {
        phoneString = `+${phone.country_code} `;
      }

      phoneString += phone.number;
    }
  }

  return phoneString;
};
/**
 * @method
 * @memberof ecomUtils
 * @name phone
 * @description Returns phone string from customer body or phone object.
 * @param {object} customer - Customer body object or phone object with number property
 * @returns {string}
 *
 * @example
 * const customer = { 'number': '31992980000'}
 * ecomUtils.phone(customer)
 * // => '31992980000'
 */


/* harmony default export */ __webpack_exports__["default"] = (phone);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/price.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/price.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _on_promotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./on-promotion */ "./node_modules/@ecomplus/utils/src/methods/on-promotion.js");


const price = product => Object(_on_promotion__WEBPACK_IMPORTED_MODULE_0__["default"])(product) // promotional sale price
? product.price : product // test final price for cart item object
? typeof product.final_price === 'number' ? product.final_price // use the maximum value between sale and base price
: Math.max(product.base_price || 0, product.price || 0) // default to zero
: 0;
/**
 * @method
 * @memberof ecomUtils
 * @name price
 * @description Returns current price from item object.
 * @param {object} product - Item (product or variation) body object
 * @returns {number}
 *
 * @example
 * // Prices with no promotion date range
 * // Full object ref.: https://developers.e-com.plus/docs/api/#/store/products/
 * ecomUtils.price({ sku: 'TEST', name: 'Test', price: 140.56 })
 * // => 140.56
 * ecomUtils.price({ price: 100, base_price: 110 })
 * // => 100
 * ecomUtils.price({ price: 190, base_price: 170 })
 * // => 190
 * ecomUtils.price({})
 * // => 0
 *
 * @example
 * // With promotion date range
 * const product = { sku: 'abc', price: 20.9, base_price: 30.9, price_effective_date: {} }
 * product.price_effective_date.start = '2021-01-01T00:00:00.000Z'
 * ecomUtils.price(product)
 * // => 30.9
 * product.price_effective_date.start = '2019-06-01T16:03:45.035Z'
 * ecomUtils.price(product)
 * // => 20.9
 * product.price_effective_date.end = '2019-06-10T16:03:45.035Z'
 * ecomUtils.price(product)
 * // => 30.9
 */


/* harmony default export */ __webpack_exports__["default"] = (price);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/random-object-id.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/random-object-id.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const randomObjectId = () => {
  // generate 24 chars hexadecimal string
  // return unique and valid MongoDB ObjectId pattern
  let objectId = Math.floor(Math.random() * 1000000).toString() + Date.now(); // pad zeros

  while (objectId.length < 24) {
    objectId += '0';
  }

  return objectId;
};
/**
 * @method
 * @memberof ecomUtils
 * @name randomObjectId
 * @description Generate a random object id with 24 chars hexadecimal string.
 * @returns {string}
 *
 * @example
 * ecomUtils.randomObjectId()
 * // => '561025156443695764000000'
 */


/* harmony default export */ __webpack_exports__["default"] = (randomObjectId);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/recommended-ids.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/recommended-ids.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const recommendedIds = result => {
  let data;

  if (typeof result === 'object' && result !== null) {
    if (Array.isArray(result)) {
      data = result;
    } else if (result.results && result.results[0]) {
      // Neo4j response body
      data = result.results[0].data;
    }
  } // setup ids list


  let ids = [];

  if (Array.isArray(data)) {
    // map ids array from Neo4j data list
    data.forEach(({
      row
    }) => {
      ids.push(row[0]);
    });
  }

  return ids;
};
/**
 * @method
 * @memberof ecomUtils
 * @name recommendedIds
 * @description Returns array of product IDs from Graphs API response.
 * @param {object|array} result - Recommend/related products response body
 * @returns {array}
 *
 * @example

// Full Graphs API response samples:
// https://developers.e-com.plus/docs/api/#/graphs/products/recommended
const result = { results: [ { columns: [], data: [] } ] }
result.results[0].data.push(
  { row: [ 'a00000000000000000000001' ], meta: [ null ] },
  { row: [ 'a00000000000000000000002' ], meta: [ null ] },
  { row: [ 'a00000000000000000000006' ], meta: [ null ] }
)
ecomUtils.recommendedIds(result)
// => [ 'a00000000000000000000001', 'a00000000000000000000002', 'a00000000000000000000006' ]

 */


/* harmony default export */ __webpack_exports__["default"] = (recommendedIds);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/searched-items.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/searched-items.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const searchedItems = result => {
  let hits;

  if (typeof result === 'object' && result !== null) {
    if (Array.isArray(result)) {
      hits = result;
    } else if (result.hits) {
      // ELS response body
      hits = result.hits.hits || result.hits;
    }
  } // setup items list
  // array of nested objects


  let items = [];

  if (Array.isArray(hits)) {
    // map items array from ELS hits list
    hits.forEach(({
      _id,
      _source
    }) => {
      items.push(Object.assign({}, _source, {
        _id
      }));
    });
  }

  return items;
};
/**
 * @method
 * @memberof ecomUtils
 * @name searchedItems
 * @description Returns array of items (products) from Search API response.
 * @param {object|array} result - Search response body or ELS hits array
 * @returns {array}
 *
 * @example
 * // Full Search API response samples:
 * // https://developers.e-com.plus/docs/api/#/search/items/items
 * const result = { took: 6, hits: { total: 2, hits: [] } }
 * result.hits.hits.push({ _id: '123', _source: { sku: 'TEST', name: 'Test' } })
 * result.hits.hits.push({ _id: '456', _source: { sku: 'SMP', name: 'Smp' } })
 * ecomUtils.searchedItems(result)
 * // => [ { _id: '123', sku: 'TEST', name: 'Test' }, { _id: '456', sku: 'SMP', name: 'Smp' } ]
 * // Same passing the `hits` array as param
 * ecomUtils.searchedItems(result.hits.hits)
 * // => [ { _id: '123', sku: 'TEST', name: 'Test' }, { _id: '456', sku: 'SMP', name: 'Smp' } ]
 */


/* harmony default export */ __webpack_exports__["default"] = (searchedItems);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/spec-text-value.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/spec-text-value.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spec_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spec-values */ "./node_modules/@ecomplus/utils/src/methods/spec-values.js");


const specTextValue = (product, gridId, grids, delimiter = ', ') => {
  // using text property of each spec object
  let values = Object(_spec_values__WEBPACK_IMPORTED_MODULE_0__["default"])(product, gridId, grids);

  if (values.length) {
    let valuesString = values[0].text;

    for (let i = 1; i < values.length; i++) {
      valuesString += delimiter + values[i].text;
    }

    return valuesString;
  } // specification not found


  return null;
};
/**
 * @method
 * @memberof ecomUtils
 * @name specTextValue
 * @description Parse specifications array of nested objects to string.
 * @param {object|array} product - Product body or array of variation objects
 * @param {string} gridId - Grid ID string such as 'color'
 * @param {array} [grids] - List of grid objects
 * @param {string} [delimiter=', '] - Delimiter between each specification
 * @returns {array|null}
 *
 * @example
 * const product = { 'name': 'Cruzeiro 2019', 'variations': [ { 'name': 'Cruzeiro 2019 / P / azul', 'specifications': { 'colors': [ { 'text': 'azul', 'value': '#3300ff' }, { 'text': 'vermelho', 'value': '#ff0000' } ] } } ] }
 * const gridId = 'colors'
 * const delimiter = ','
 * const grid1 = { 'grid_id': 'size', 'title': 'Tamanho', 'options': [ { 'text': 'P', 'option_id': 'pp' } ] }
 * const grid2 = { 'title': 'Cores', 'grid_id': 'colors', 'options': [ { 'text': 'vermelho', 'option_id': 'vermelho', 'colors': [ '#ff0000' ] }, { 'text': 'azul', 'option_id': 'azul', 'colors': [ '#3300ff' ] } ] }
 * const grid3 = { 'title': 'Conector', 'grid_id': 'conector', 'options': [ { 'text': 'USB', 'option_id': 'usb' } ] }
 * const grids = [ grid1, grid2, grid3 ]
 * ecomUtils.specValues(product, gridId, grids, delimiter)
 * // => [{text: 'vermelho', value: '#ff0000'}, {text: 'azul', value: '#3300ff'}]
 */


/* harmony default export */ __webpack_exports__["default"] = (specTextValue);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/spec-value-by-text.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/spec-value-by-text.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spec_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spec-values */ "./node_modules/@ecomplus/utils/src/methods/spec-values.js");


const specValueByText = (product, specText, gridId, grids) => {
  const values = Object(_spec_values__WEBPACK_IMPORTED_MODULE_0__["default"])(product, gridId, grids);

  for (let i = 0; i < values.length; i++) {
    if (values[i].text === specText) {
      return values[i].value;
    }
  } // any spec found for received grid and option text


  return undefined;
};
/**
 * @method
 * @memberof ecomUtils
 * @name specValueByText
 * @description Get value property of spec object based on respective text.
 * @param {object|array} product - Product body or array of variation objects
 * @param {string} specText - Spec object text property such as 'Blue'
 * @param {string} gridId - Grid ID string such as 'color'
 * @param {array} [grids] - List of grid objects
 * @returns {string|undefined}
 *
 * @example
 * const product = { 'name': 'Cruzeiro 2018', 'variations': [ { 'name': 'Cruzeiro 2018 / P / azul', 'specifications': { 'colors': [ { 'text': 'azul', 'value': '#3300ff' }, { 'text': 'vermelho', 'value': '#ff0000' } ] } } ] }
 * const gridId = 'colors'
 * const specText = 'vermelho'
 * const grid1 = { 'grid_id': 'size', 'title': 'Tamanho', 'options': [ { 'text': 'P', 'option_id': 'pp' } ] }
 * const grid2 = { 'title': 'Cores', 'grid_id': 'colors', 'options': [ { 'text': 'vermelho', 'option_id': 'vermelho', 'colors': [ '#ff0000' ] }, { 'text': 'azul', 'option_id': 'azul', 'colors': [ '#3300ff' ] } ] }
 * const grid3 = { 'title': 'Conector', 'grid_id': 'conector', 'options': [ { 'text': 'USB', 'option_id': 'usb' } ] }
 * const grids = [ grid1, grid2, grid3 ]
 * ecomUtils.specValueByText(product, specText, gridId , grids)
 * // => '#ff0000'
 */


/* harmony default export */ __webpack_exports__["default"] = (specValueByText);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/spec-values.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/spec-values.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const specValues = (product, gridId, grids) => {
  if (typeof product !== 'object' || product === null) {
    // nothing to do
    // returns empty array by default
    return [];
  }

  let values = [];

  if (typeof product === 'object' && product !== null) {
    if (Array.isArray(product)) {
      if (product.length) {
        if (product[0].specifications) {
          // variations array sent as product param
          product.forEach(variation => {
            values = values.concat(specValues(variation, gridId, grids));
          });
        } else if (product[0].text) {
          // spec values list sent as product param
          values = product;
        }
      }
    } else {
      // probably the product object from instance data
      // work for product or specific variation product
      const {
        specifications
      } = product;

      if (specifications) {
        for (const id in specifications) {
          if (specifications[id] && id === gridId) {
            // specification found
            values = specifications[gridId];
          }
        }
      }

      if (values && !values.length && Array.isArray(grids) && grids.length) {
        // try with grids list from preloaded data
        let specs, grid; // match the grid by ID

        if (grids && (grid = grids.find(grid => grid.grid_id === gridId)) && grid.options) {
          // mounts specs array from grid options list
          specs = grid.options.map(option => {
            // try color RGB value or use default option ID
            let value;

            if (option.colors && option.colors.length) {
              value = option.colors[0];
            } else {
              value = option.option_id;
            } // spec options with text and value


            return {
              text: option.text,
              value
            };
          });
        }

        return specValues(specs, gridId);
      }
    }
  }

  return values;
};
/**
 * @method
 * @memberof ecomUtils
 * @name specValues
 * @description Returns array of spec objects for specified grid.
 * @param {object|array} product - Product body or array of variation objects
 * @param {string} gridId - Grid ID string such as 'color'
 * @param {array} [grids] - List of grid objects
 * @returns {array}
 *
 * @example
 * const product = { 'name': 'Cruzeiro 2019', 'variations': [ { 'name': 'Cruzeiro 2019 / P / azul', 'specifications': { 'colors': [ { 'text': 'azul', 'value': '#3300ff' } ] } } ] }
 * const gridId = 'colors'
 * const grid1 = { 'grid_id': 'size', 'title': 'Tamanho', 'options': [ { 'text': 'P', 'option_id': 'pp' } ] }
 * const grid2 = { 'title': 'Cores', 'grid_id': 'colors', 'options': [ { 'text': 'vermelho', 'option_id': 'vermelho', 'colors': [ '#ff0000' ] }, { 'text': 'azul', 'option_id': 'azul', 'colors': [ '#3300ff' ] } ] }
 * const grid3 = { 'title': 'Conector', 'grid_id': 'conector', 'options': [ { 'text': 'USB', 'option_id': 'usb' } ] }
 * const grids = [ grid1, grid2, grid3 ]
 * ecomUtils.specValues(product, gridId, grids)
 * // => [{text: "vermelho", value: "#ff0000"}, {text: "azul", value: "#3300ff"}]
 */


/* harmony default export */ __webpack_exports__["default"] = (specValues);

/***/ }),

/***/ "./node_modules/@ecomplus/utils/src/methods/variations-grids.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ecomplus/utils/src/methods/variations-grids.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spec_text_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spec-text-value */ "./node_modules/@ecomplus/utils/src/methods/spec-text-value.js");


const variationsGrids = (product, filterGrids, inStockOnly, delimiter) => {
  let grids = {};

  if (product && Array.isArray(product.variations)) {
    product.variations.forEach(variation => {
      if (inStockOnly && variation.quantity <= 0) {
        // out of stock
        return;
      }

      let specifications = variation.specifications; // abstraction to get spec text value

      let specValue = grid => Object(_spec_text_value__WEBPACK_IMPORTED_MODULE_0__["default"])(variation, grid, delimiter);

      if (specifications) {
        // check if current variation specs match with filters
        if (filterGrids) {
          for (let filter in filterGrids) {
            if (filterGrids.hasOwnProperty(filter)) {
              if (!specifications[filter] || specValue(filter) !== filterGrids[filter]) {
                // does not match filtered grid
                // skip current variation
                return;
              }
            }
          }
        } // get values from each variation spec


        for (let grid in specifications) {
          if (specifications.hasOwnProperty(grid)) {
            let text = specValue(grid);

            if (!grids.hasOwnProperty(grid)) {
              grids[grid] = [];
            } else if (grids[grid].indexOf(text) !== -1) {
              // current spec value has already been added
              continue;
            }

            grids[grid].push(text);
          }
        }
      }
    });
  } // returns parsed grid object


  return grids;
};
/**
 * @method
 * @memberof ecomUtils
 * @name variationsGrids
 * @description Parse variations specifications to one object only.
 * @param {object} product - Product body object
 * @param {object} [filterGrids] - Filter object with grids and searched values
 * @param {boolean} [inStockOnly] - True to consider only variations with positive stock quantity
 * @param {string} [delimiter=', '] - Delimiter between each specification
 * @returns {object}
 *
 * @example
 * // Only param product
 * const product = { 'name': 'Cruzeiro 2019', 'variations': [
 * { 'name': 'Cruzeiro 2019 / P', 'quantity': 10, 'specifications': { 'size': [ { 'text': 'P', 'value': 's' } ] } },
 * { 'name': 'Cruzeiro 2019 / M', 'quantity': 10, 'specifications': { 'size': [ { 'text': 'M', 'value': 'm' } ] } },
 * { 'name': 'Cruzeiro 2019 / G', 'specifications': { 'size': [ { 'text': 'G', 'value': 'l' } ] }, 'quantity': 0 }
 * ] }
 * ecomUtils.variationsGrids(product)
 * // => {size: [ 'P', 'M', 'G' ]}
 * // You can also check for product stock to get only variations with available quantity
 * // Same product above
 * const inStockOnly = true
 * ecomUtils.variationsGrids(product, {}, inStockOnly)
 * // => {size: [ 'P', 'M' ]}
 */


/* harmony default export */ __webpack_exports__["default"] = (variationsGrids);

/***/ }),

/***/ "./node_modules/@ecomplus/widget-analytics/cms.config.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-analytics/cms.config.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package.json */ "./node_modules/@ecomplus/widget-analytics/package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./package.json */ "./node_modules/@ecomplus/widget-analytics/package.json", 1);

/* harmony default export */ __webpack_exports__["default"] = (() => ({
  label: 'Google Analytics',
  fields: [{
    name: 'pkg',
    widget: 'hidden',
    default: _package_json__WEBPACK_IMPORTED_MODULE_0__["name"]
  }, {
    label: 'Ativar',
    hint: 'Instalar o acompanhamento to GA',
    name: 'active',
    widget: 'boolean'
  }, {
    label: 'Apenas em desktops',
    name: 'desktopOnly',
    hint: 'Desativa o widget em dispositivos móveis',
    widget: 'boolean'
  }, {
    name: 'enableCheckout',
    widget: 'hidden',
    default: true
  }, {
    label: 'Opções',
    name: 'options',
    widget: 'object',
    hint: 'Personalizações do widget',
    fields: [{
      label: 'ID do acompanhamento',
      name: 'gaTrackingId',
      widget: 'string'
    }]
  }, {
    name: 'headAppend',
    widget: 'hidden',
    default: 'src/append/head'
  }]
}));

/***/ }),

/***/ "./node_modules/@ecomplus/widget-analytics/package.json":
/*!**************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-analytics/package.json ***!
  \**************************************************************/
/*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, browser, bugs, dependencies, description, homepage, jsdelivr, keywords, license, main, module, name, peerDependencies, repository, scripts, unpkg, version, webpackOutput, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_args\":[[\"@ecomplus/widget-analytics@1.1.7\",\"/home/gmazurco/Projects/storefront-template\"]],\"_from\":\"@ecomplus/widget-analytics@1.1.7\",\"_id\":\"@ecomplus/widget-analytics@1.1.7\",\"_inBundle\":false,\"_integrity\":\"sha512-AGKAvEeCfD/tA05hf8xaYQqMmFngXykFwR4MvYvLhkXflQtE7z4wBXQDRu7lDRf8yKsTZ1bJiQdT2gCN0V89aQ==\",\"_location\":\"/@ecomplus/widget-analytics\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"version\",\"registry\":true,\"raw\":\"@ecomplus/widget-analytics@1.1.7\",\"name\":\"@ecomplus/widget-analytics\",\"escapedName\":\"@ecomplus%2fwidget-analytics\",\"scope\":\"@ecomplus\",\"rawSpec\":\"1.1.7\",\"saveSpec\":null,\"fetchSpec\":\"1.1.7\"},\"_requiredBy\":[\"/\"],\"_resolved\":\"https://registry.npmjs.org/@ecomplus/widget-analytics/-/widget-analytics-1.1.7.tgz\",\"_spec\":\"1.1.7\",\"_where\":\"/home/gmazurco/Projects/storefront-template\",\"author\":{\"name\":\"E-Com Club\",\"email\":\"ti@e-com.club\"},\"browser\":\"dist/widget-analytics.min.js\",\"bugs\":{\"url\":\"https://github.com/ecomplus/storefront/issues\"},\"dependencies\":{\"@ecomplus/widget-tag-manager\":\"^1.5.1\"},\"description\":\"Storefront plugin to handle GA Universal Analytics\",\"homepage\":\"https://github.com/ecomplus/storefront/tree/master/@ecomplus/widget-analytics#readme\",\"jsdelivr\":\"dist/public/widget-analytics.var.min.js\",\"keywords\":[\"ecomplus\",\"storefront\",\"ga\",\"gtag\",\"google-analytics\",\"universal-analytics\",\"ga-enhanced-ecommerce\"],\"license\":\"MIT\",\"main\":\"dist/widget-analytics.min.js\",\"module\":\"src/index.js\",\"name\":\"@ecomplus/widget-analytics\",\"peerDependencies\":{\"core-js\":\"3.x\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/ecomplus/storefront.git\",\"directory\":\"@ecomplus/widget-analytics\"},\"scripts\":{\"build\":\"cross-env NODE_ENV=production webpack\",\"serve\":\"webpack-dev-server\"},\"unpkg\":\"dist/public/widget-analytics.var.min.js\",\"version\":\"1.1.7\",\"webpackOutput\":{\"library\":\"widgetAnalytics\",\"filename\":\"widget-analytics.min.js\"}}");

/***/ }),

/***/ "./node_modules/@ecomplus/widget-compre-confie/cms.config.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-compre-confie/cms.config.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package.json */ "./node_modules/@ecomplus/widget-compre-confie/package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./package.json */ "./node_modules/@ecomplus/widget-compre-confie/package.json", 1);

/* harmony default export */ __webpack_exports__["default"] = (() => ({
  label: 'Avaliações Compre & Confie',
  fields: [{
    name: 'pkg',
    widget: 'hidden',
    default: _package_json__WEBPACK_IMPORTED_MODULE_0__["name"]
  }, {
    label: 'Ativar',
    hint: 'Instalar selo Compre & Confie',
    name: 'active',
    widget: 'boolean'
  }, {
    label: 'Apenas em desktops',
    name: 'desktopOnly',
    hint: 'Desativa o widget em dispositivos móveis',
    widget: 'boolean'
  }, {
    name: 'enableCheckout',
    widget: 'hidden',
    default: true
  }, {
    name: 'disablePages',
    widget: 'hidden',
    default: true
  }, {
    label: 'Opções',
    name: 'options',
    widget: 'object',
    hint: 'Personalizações do widget',
    fields: [{
      label: 'Store Id Compre & Confie',
      name: 'compreConfieStoreId',
      widget: 'string',
      hint: 'ID da loja que é informado pelo Compre & Confie'
    }]
  }, {
    name: 'stampsAppend',
    widget: 'hidden',
    default: 'src/append/stamps'
  }]
}));

/***/ }),

/***/ "./node_modules/@ecomplus/widget-compre-confie/package.json":
/*!******************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-compre-confie/package.json ***!
  \******************************************************************/
/*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, browser, bugs, description, homepage, jsdelivr, keywords, license, main, module, name, peerDependencies, repository, scripts, unpkg, version, webpackOutput, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_args\":[[\"@ecomplus/widget-compre-confie@1.1.6\",\"/home/gmazurco/Projects/storefront-template\"]],\"_from\":\"@ecomplus/widget-compre-confie@1.1.6\",\"_id\":\"@ecomplus/widget-compre-confie@1.1.6\",\"_inBundle\":false,\"_integrity\":\"sha512-G3Vog+xG9Hjo9GBkZpCkIuD9iD7at1uC6vvGVw7AeaBTfO3V6XX/KvA/zspIb8llWSQfAQwtdHNx30M7RgJRVQ==\",\"_location\":\"/@ecomplus/widget-compre-confie\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"version\",\"registry\":true,\"raw\":\"@ecomplus/widget-compre-confie@1.1.6\",\"name\":\"@ecomplus/widget-compre-confie\",\"escapedName\":\"@ecomplus%2fwidget-compre-confie\",\"scope\":\"@ecomplus\",\"rawSpec\":\"1.1.6\",\"saveSpec\":null,\"fetchSpec\":\"1.1.6\"},\"_requiredBy\":[\"/\"],\"_resolved\":\"https://registry.npmjs.org/@ecomplus/widget-compre-confie/-/widget-compre-confie-1.1.6.tgz\",\"_spec\":\"1.1.6\",\"_where\":\"/home/gmazurco/Projects/storefront-template\",\"author\":{\"name\":\"E-Com Club\",\"email\":\"ti@e-com.club\"},\"browser\":\"dist/widget-compre-confie.min.js\",\"bugs\":{\"url\":\"https://github.com/ecomplus/storefront/issues\"},\"description\":\"Storefront plugin for Compre & Confie\",\"homepage\":\"https://github.com/ecomplus/storefront/tree/master/@ecomplus/widget-compre-confie#readme\",\"jsdelivr\":\"dist/public/widget-compre-confie.var.min.js\",\"keywords\":[\"ecomplus\",\"storefront\",\"widget\",\"compre-confie\",\"evaluate\"],\"license\":\"MIT\",\"main\":\"dist/widget-compre-confie.min.js\",\"module\":\"src/index.js\",\"name\":\"@ecomplus/widget-compre-confie\",\"peerDependencies\":{\"@ecomplus/passport-client\":\"^1.0.10\",\"@ecomplus/utils\":\"^1.4.1\",\"core-js\":\"3.x\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/ecomplus/storefront.git\",\"directory\":\"@ecomplus/widget-compre-confie\"},\"scripts\":{\"build\":\"cross-env NODE_ENV=production webpack\",\"serve\":\"webpack-dev-server\"},\"unpkg\":\"dist/public/widget-compre-confie.var.min.js\",\"version\":\"1.1.6\",\"webpackOutput\":{\"library\":\"widgetCompreConfie\",\"filename\":\"widget-compre-confie.min.js\"}}");

/***/ }),

/***/ "./node_modules/@ecomplus/widget-ebit/cms.config.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ecomplus/widget-ebit/cms.config.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package.json */ "./node_modules/@ecomplus/widget-ebit/package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./package.json */ "./node_modules/@ecomplus/widget-ebit/package.json", 1);

/* harmony default export */ __webpack_exports__["default"] = (() => ({
  label: 'Avaliações Ebit',
  fields: [{
    name: 'pkg',
    widget: 'hidden',
    default: _package_json__WEBPACK_IMPORTED_MODULE_0__["name"]
  }, {
    label: 'Ativar',
    hint: 'Instalar Ebit',
    name: 'active',
    widget: 'boolean'
  }, {
    label: 'Apenas em desktops',
    name: 'desktopOnly',
    hint: 'Desativa o widget em dispositivos móveis',
    widget: 'boolean'
  }, {
    name: 'enableCheckout',
    widget: 'hidden',
    default: true
  }, {
    name: 'disablePages',
    widget: 'hidden',
    default: true
  }, {
    label: 'Opções',
    name: 'options',
    widget: 'object',
    hint: 'Personalizações do widget',
    fields: [{
      label: 'Store Id Ebit',
      name: 'ebitStoreId',
      widget: 'string',
      hint: 'Store Id que está no e-mail de boas-vindas do Ebit'
    }]
  }, {
    name: 'stampsAppend',
    widget: 'hidden',
    default: 'src/append/stamps'
  }]
}));

/***/ }),

/***/ "./node_modules/@ecomplus/widget-ebit/package.json":
/*!*********************************************************!*\
  !*** ./node_modules/@ecomplus/widget-ebit/package.json ***!
  \*********************************************************/
/*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, browser, bugs, description, homepage, jsdelivr, keywords, license, main, module, name, peerDependencies, repository, scripts, unpkg, version, webpackOutput, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_args\":[[\"@ecomplus/widget-ebit@1.1.12\",\"/home/gmazurco/Projects/storefront-template\"]],\"_from\":\"@ecomplus/widget-ebit@1.1.12\",\"_id\":\"@ecomplus/widget-ebit@1.1.12\",\"_inBundle\":false,\"_integrity\":\"sha512-Z3Ku5H3q+LwvlYhWrKZ5of84GV7YdrZGjYa5W9+BGVV6CLnic+JebkgCo+mSYephVcSE9IYKIXAOLhOgOOQOMA==\",\"_location\":\"/@ecomplus/widget-ebit\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"version\",\"registry\":true,\"raw\":\"@ecomplus/widget-ebit@1.1.12\",\"name\":\"@ecomplus/widget-ebit\",\"escapedName\":\"@ecomplus%2fwidget-ebit\",\"scope\":\"@ecomplus\",\"rawSpec\":\"1.1.12\",\"saveSpec\":null,\"fetchSpec\":\"1.1.12\"},\"_requiredBy\":[\"/\"],\"_resolved\":\"https://registry.npmjs.org/@ecomplus/widget-ebit/-/widget-ebit-1.1.12.tgz\",\"_spec\":\"1.1.12\",\"_where\":\"/home/gmazurco/Projects/storefront-template\",\"author\":{\"name\":\"E-Com Club\",\"email\":\"ti@e-com.club\"},\"browser\":\"dist/widget-ebit.min.js\",\"bugs\":{\"url\":\"https://github.com/ecomplus/storefront/issues\"},\"description\":\"Storefront plugin for Ebit\",\"homepage\":\"https://github.com/ecomplus/storefront/tree/master/@ecomplus/widget-ebit#readme\",\"jsdelivr\":\"dist/public/widget-ebit.var.min.js\",\"keywords\":[\"ecomplus\",\"storefront\",\"widget\",\"ebit\",\"evaluate\"],\"license\":\"MIT\",\"main\":\"dist/widget-ebit.min.js\",\"module\":\"src/index.js\",\"name\":\"@ecomplus/widget-ebit\",\"peerDependencies\":{\"@ecomplus/passport-client\":\"^1.0.10\",\"@ecomplus/utils\":\"^1.4.1\",\"core-js\":\"3.x\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/ecomplus/storefront.git\",\"directory\":\"@ecomplus/widget-ebit\"},\"scripts\":{\"build\":\"cross-env NODE_ENV=production webpack\",\"serve\":\"webpack-dev-server\"},\"unpkg\":\"dist/public/widget-ebit.var.min.js\",\"version\":\"1.1.12\",\"webpackOutput\":{\"library\":\"widgetEbit\",\"filename\":\"widget-ebit.min.js\"}}");

/***/ }),

/***/ "./node_modules/@ecomplus/widget-fb-pixel/cms.config.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-fb-pixel/cms.config.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package.json */ "./node_modules/@ecomplus/widget-fb-pixel/package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./package.json */ "./node_modules/@ecomplus/widget-fb-pixel/package.json", 1);

/* harmony default export */ __webpack_exports__["default"] = (() => ({
  label: 'Facebook Pixel',
  fields: [{
    name: 'pkg',
    widget: 'hidden',
    default: _package_json__WEBPACK_IMPORTED_MODULE_0__["name"]
  }, {
    label: 'Ativar',
    hint: 'Instalar o pixel do Facebook',
    name: 'active',
    widget: 'boolean'
  }, {
    label: 'Apenas em desktops',
    name: 'desktopOnly',
    hint: 'Desativa o widget em dispositivos móveis',
    widget: 'boolean'
  }, {
    name: 'enableCheckout',
    widget: 'hidden',
    default: true
  }, {
    label: 'Opções',
    name: 'options',
    widget: 'object',
    hint: 'Personalizações do widget',
    fields: [{
      label: 'ID do pixel',
      name: 'fbqContainerId',
      widget: 'string'
    }, {
      label: 'Desabilitar evento de compra',
      name: 'disablePurchase',
      required: false,
      widget: 'boolean',
      hint: 'Contar as conversões somente via Facebook Conversions API'
    }, {
      name: 'debug',
      widget: 'hidden',
      default: false
    }]
  }, {
    name: 'headAppend',
    widget: 'hidden',
    default: 'src/append/head'
  }, {
    name: 'bodyAppend',
    widget: 'hidden',
    default: 'src/append/body'
  }]
}));

/***/ }),

/***/ "./node_modules/@ecomplus/widget-fb-pixel/package.json":
/*!*************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-fb-pixel/package.json ***!
  \*************************************************************/
/*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, browser, bugs, description, homepage, jsdelivr, keywords, license, main, module, name, peerDependencies, repository, scripts, unpkg, version, webpackOutput, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_args\":[[\"@ecomplus/widget-fb-pixel@1.3.1\",\"/home/gmazurco/Projects/storefront-template\"]],\"_from\":\"@ecomplus/widget-fb-pixel@1.3.1\",\"_id\":\"@ecomplus/widget-fb-pixel@1.3.1\",\"_inBundle\":false,\"_integrity\":\"sha512-dbYjVfQyJwZgxSlQFt7n7qnst+z+2mzDBLzxpt3hF110CKY7MqnQeBvJ9aN3FsYxJeOWUfDdgXwFjDL/7e00fA==\",\"_location\":\"/@ecomplus/widget-fb-pixel\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"version\",\"registry\":true,\"raw\":\"@ecomplus/widget-fb-pixel@1.3.1\",\"name\":\"@ecomplus/widget-fb-pixel\",\"escapedName\":\"@ecomplus%2fwidget-fb-pixel\",\"scope\":\"@ecomplus\",\"rawSpec\":\"1.3.1\",\"saveSpec\":null,\"fetchSpec\":\"1.3.1\"},\"_requiredBy\":[\"/\"],\"_resolved\":\"https://registry.npmjs.org/@ecomplus/widget-fb-pixel/-/widget-fb-pixel-1.3.1.tgz\",\"_spec\":\"1.3.1\",\"_where\":\"/home/gmazurco/Projects/storefront-template\",\"author\":{\"name\":\"E-Com Club\",\"email\":\"ti@e-com.club\"},\"browser\":\"dist/widget-fb-pixel.min.js\",\"bugs\":{\"url\":\"https://github.com/ecomplus/storefront/issues\"},\"description\":\"Storefront plugin to handle Facebook Pixel events\",\"homepage\":\"https://github.com/ecomplus/storefront/tree/master/@ecomplus/widget-fb-pixel#readme\",\"jsdelivr\":\"dist/public/widget-fb-pixel.var.min.js\",\"keywords\":[\"ecomplus\",\"storefront\",\"fb-pixel\",\"fbq\",\"facebook\",\"facebook-ads\"],\"license\":\"MIT\",\"main\":\"dist/widget-fb-pixel.min.js\",\"module\":\"src/index.js\",\"name\":\"@ecomplus/widget-fb-pixel\",\"peerDependencies\":{\"@ecomplus/shopping-cart\":\">=1 <3\",\"@ecomplus/utils\":\"^1.4.1\",\"core-js\":\"3.x\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/ecomplus/storefront.git\",\"directory\":\"@ecomplus/widget-fb-pixel\"},\"scripts\":{\"build\":\"cross-env NODE_ENV=production webpack\",\"serve\":\"webpack-dev-server\"},\"unpkg\":\"dist/public/widget-fb-pixel.var.min.js\",\"version\":\"1.3.1\",\"webpackOutput\":{\"library\":\"widgetFbPixel\",\"filename\":\"widget-fb-pixel.min.js\"}}");

/***/ }),

/***/ "./node_modules/@ecomplus/widget-gmc-ratings/cms.config.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-gmc-ratings/cms.config.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package.json */ "./node_modules/@ecomplus/widget-gmc-ratings/package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./package.json */ "./node_modules/@ecomplus/widget-gmc-ratings/package.json", 1);

/* harmony default export */ __webpack_exports__["default"] = (() => ({
  label: 'GMC avaliações do consumidor',
  fields: [{
    name: 'pkg',
    widget: 'hidden',
    default: _package_json__WEBPACK_IMPORTED_MODULE_0__["name"]
  }, {
    label: 'Ativar',
    hint: 'Instalar GMC avaliações',
    name: 'active',
    widget: 'boolean'
  }, {
    label: 'Apenas em desktops',
    name: 'desktopOnly',
    hint: 'Desativa o widget em dispositivos móveis',
    widget: 'boolean'
  }, {
    name: 'enableCheckout',
    widget: 'hidden',
    default: true
  }, {
    name: 'disablePages',
    widget: 'hidden',
    default: true
  }, {
    label: 'Opções',
    name: 'options',
    widget: 'object',
    hint: 'Personalizações do widget',
    fields: [{
      label: 'Google Merchant ID',
      name: 'gmcMerchantId',
      widget: 'number',
      hint: 'Seu Merchant ID disponível no Google Merchant Center'
    }, {
      label: 'Posição do selo',
      name: 'badgePosition',
      widget: 'select',
      options: [{
        label: 'Flutuante à esquerda',
        value: 'BOTTOM_LEFT'
      }, {
        label: 'Flutuante à direita',
        value: 'BOTTOM_RIGHT'
      }, {
        label: 'Fixo no rodapé',
        value: 'INLINE'
      }]
    }, {
      label: 'Posição do modal de solicitação',
      name: 'dialogPosition',
      widget: 'select',
      options: [{
        label: 'No centro da página',
        value: 'CENTER_DIALOG'
      }, {
        label: 'Canto inferior esquerdo',
        value: 'BOTTOM_LEFT_DIALOG'
      }, {
        label: 'Canto inferior direito',
        value: 'BOTTOM_RIGHT_DIALOG'
      }, {
        label: 'Canto superior esquerdo',
        value: 'TOP_LEFT_DIALOG'
      }, {
        label: 'Canto superior direito',
        value: 'TOP_RIGHT_DIALOG'
      }, {
        label: 'Parte inferior',
        value: 'BOTTOM_TRAY'
      }]
    }]
  }, {
    name: 'stampsAppend',
    widget: 'hidden',
    default: 'src/append/stamps'
  }]
}));

/***/ }),

/***/ "./node_modules/@ecomplus/widget-gmc-ratings/package.json":
/*!****************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-gmc-ratings/package.json ***!
  \****************************************************************/
/*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, browser, bugs, description, homepage, jsdelivr, keywords, license, main, module, name, peerDependencies, repository, scripts, unpkg, version, webpackOutput, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_args\":[[\"@ecomplus/widget-gmc-ratings@1.2.15\",\"/home/gmazurco/Projects/storefront-template\"]],\"_from\":\"@ecomplus/widget-gmc-ratings@1.2.15\",\"_id\":\"@ecomplus/widget-gmc-ratings@1.2.15\",\"_inBundle\":false,\"_integrity\":\"sha512-enJSDdOx4yBR02OvsmyZIl/s4nOUmKEHPoDn5WTgGX495y9n+lL4C/opY/RuCn2+Val6ja/k+DZbvpDDJk4pOQ==\",\"_location\":\"/@ecomplus/widget-gmc-ratings\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"version\",\"registry\":true,\"raw\":\"@ecomplus/widget-gmc-ratings@1.2.15\",\"name\":\"@ecomplus/widget-gmc-ratings\",\"escapedName\":\"@ecomplus%2fwidget-gmc-ratings\",\"scope\":\"@ecomplus\",\"rawSpec\":\"1.2.15\",\"saveSpec\":null,\"fetchSpec\":\"1.2.15\"},\"_requiredBy\":[\"/\"],\"_resolved\":\"https://registry.npmjs.org/@ecomplus/widget-gmc-ratings/-/widget-gmc-ratings-1.2.15.tgz\",\"_spec\":\"1.2.15\",\"_where\":\"/home/gmazurco/Projects/storefront-template\",\"author\":{\"name\":\"E-Com Club\",\"email\":\"ti@e-com.club\"},\"browser\":\"dist/widget-gmc-ratings.min.js\",\"bugs\":{\"url\":\"https://github.com/ecomplus/storefront/issues\"},\"description\":\"Storefront plugin for GMC customer ratings\",\"homepage\":\"https://github.com/ecomplus/storefront/tree/master/@ecomplus/widget-gmc-ratings#readme\",\"jsdelivr\":\"dist/public/widget-gmc-ratings.var.min.js\",\"keywords\":[\"ecomplus\",\"storefront\",\"widget\",\"gmc\",\"customer-ratings\",\"evaluate\"],\"license\":\"MIT\",\"main\":\"dist/widget-gmc-ratings.min.js\",\"module\":\"src/index.js\",\"name\":\"@ecomplus/widget-gmc-ratings\",\"peerDependencies\":{\"@ecomplus/client\":\"^2.2.1\",\"@ecomplus/passport-client\":\"^1.0.10\",\"@ecomplus/utils\":\"^1.4.1\",\"core-js\":\"3.x\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/ecomplus/storefront.git\",\"directory\":\"@ecomplus/widget-gmc-ratings\"},\"scripts\":{\"build\":\"cross-env NODE_ENV=production webpack\",\"serve\":\"webpack-dev-server\"},\"unpkg\":\"dist/public/widget-gmc-ratings.var.min.js\",\"version\":\"1.2.15\",\"webpackOutput\":{\"library\":\"widgetGmcRatings\",\"filename\":\"widget-gmc-ratings.min.js\"}}");

/***/ }),

/***/ "./node_modules/@ecomplus/widget-minicart/cms.config.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-minicart/cms.config.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package.json */ "./node_modules/@ecomplus/widget-minicart/package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./package.json */ "./node_modules/@ecomplus/widget-minicart/package.json", 1);

/* harmony default export */ __webpack_exports__["default"] = (() => ({
  label: 'Minicart',
  fields: [{
    name: 'pkg',
    widget: 'hidden',
    default: _package_json__WEBPACK_IMPORTED_MODULE_0__["name"]
  }, {
    label: 'Ativar',
    hint: 'Prévia do carrinho de compras em sidebar na lateral direita do site',
    name: 'active',
    widget: 'boolean'
  }, {
    label: 'Apenas em desktops',
    name: 'desktopOnly',
    hint: 'Desativa o widget em dispositivos móveis',
    widget: 'boolean'
  }]
}));

/***/ }),

/***/ "./node_modules/@ecomplus/widget-minicart/package.json":
/*!*************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-minicart/package.json ***!
  \*************************************************************/
/*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, browser, bugs, dependencies, description, homepage, jsdelivr, keywords, license, main, module, name, peerDependencies, repository, scripts, unpkg, version, webpackOutput, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_args\":[[\"@ecomplus/widget-minicart@1.0.0-beta.95\",\"/home/gmazurco/Projects/storefront-template\"]],\"_from\":\"@ecomplus/widget-minicart@1.0.0-beta.95\",\"_id\":\"@ecomplus/widget-minicart@1.0.0-beta.95\",\"_inBundle\":false,\"_integrity\":\"sha512-2DsgfEk84ETMUkdpFe9PjKAmtxQphtK/p908P7dTKuBeX2evruy65MrTgz1dtLdTk8L48p8Yb2pgK46HfFCX+w==\",\"_location\":\"/@ecomplus/widget-minicart\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"version\",\"registry\":true,\"raw\":\"@ecomplus/widget-minicart@1.0.0-beta.95\",\"name\":\"@ecomplus/widget-minicart\",\"escapedName\":\"@ecomplus%2fwidget-minicart\",\"scope\":\"@ecomplus\",\"rawSpec\":\"1.0.0-beta.95\",\"saveSpec\":null,\"fetchSpec\":\"1.0.0-beta.95\"},\"_requiredBy\":[\"/\"],\"_resolved\":\"https://registry.npmjs.org/@ecomplus/widget-minicart/-/widget-minicart-1.0.0-beta.95.tgz\",\"_spec\":\"1.0.0-beta.95\",\"_where\":\"/home/gmazurco/Projects/storefront-template\",\"author\":{\"name\":\"E-Com Club\",\"email\":\"ti@e-com.club\"},\"browser\":\"dist/widget-minicart.min.js\",\"bugs\":{\"url\":\"https://github.com/ecomplus/storefront/issues\"},\"dependencies\":{\"@ecomplus/storefront-components\":\"^1.0.0-beta.98\"},\"description\":\"Storefront plugin with Vue component for shopping cart quickview E-Com Plus stores\",\"homepage\":\"https://github.com/ecomplus/storefront/tree/master/@ecomplus/widget-minicart#readme\",\"jsdelivr\":\"dist/public/widget-minicart.var.min.js\",\"keywords\":[\"ecomplus\",\"storefront\",\"widget\",\"minicart\",\"shopping-cart\",\"cart-quickview\"],\"license\":\"MIT\",\"main\":\"dist/widget-minicart.min.js\",\"module\":\"src/index.js\",\"name\":\"@ecomplus/widget-minicart\",\"peerDependencies\":{\"@ecomplus/utils\":\"^1.4.1\",\"core-js\":\"3.x\",\"vue\":\">=2 <4\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/ecomplus/storefront.git\",\"directory\":\"@ecomplus/widget-minicart\"},\"scripts\":{\"build\":\"cross-env NODE_ENV=production webpack\",\"serve\":\"webpack-dev-server\"},\"unpkg\":\"dist/public/widget-minicart.var.min.js\",\"version\":\"1.0.0-beta.95\",\"webpackOutput\":{\"library\":\"widgetMinicart\",\"filename\":\"widget-minicart.min.js\"}}");

/***/ }),

/***/ "./node_modules/@ecomplus/widget-opinioes-verificadas/cms.config.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-opinioes-verificadas/cms.config.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package.json */ "./node_modules/@ecomplus/widget-opinioes-verificadas/package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./package.json */ "./node_modules/@ecomplus/widget-opinioes-verificadas/package.json", 1);

/* harmony default export */ __webpack_exports__["default"] = (() => ({
  label: 'Opiniões Verificadas',
  fields: [{
    name: 'pkg',
    widget: 'hidden',
    default: _package_json__WEBPACK_IMPORTED_MODULE_0__["name"]
  }, {
    label: 'Ativar',
    hint: 'Instalar selo e avaliações via Opiniões Verificadas',
    name: 'active',
    widget: 'boolean'
  }, {
    name: 'desktopOnly',
    widget: 'hidden',
    default: false
  }, {
    name: 'enableCheckout',
    widget: 'hidden',
    default: false
  }, {
    name: 'disablePages',
    widget: 'hidden',
    default: true
  }, {
    label: 'Opções',
    name: 'options',
    widget: 'object',
    hint: 'Personalizações do widget',
    fields: [{
      label: 'HTML do selo',
      required: false,
      name: 'stamp',
      widget: 'code',
      hint: 'Código copiado de "Integração > Selos e Carrosel" no painel do Opiniões Verificadas',
      default_language: 'html',
      output_code_only: true
    }, {
      label: 'Tag script para avaliações de produtos',
      required: false,
      name: 'tagJs',
      widget: 'code',
      hint: 'Código copiado do passo 1 do aplicativo TagJS em "Integração > Aplicativos"',
      default_language: 'html',
      output_code_only: true
    }]
  }, {
    name: 'headAppend',
    widget: 'hidden',
    default: 'src/append/head'
  }, {
    name: 'bodyAppend',
    widget: 'hidden',
    default: 'src/append/body'
  }, {
    name: 'productDescriptionAppend',
    widget: 'hidden',
    default: 'src/append/product-block'
  }, {
    name: 'productCardSlots',
    widget: 'hidden',
    default: 'src/append/product-card-slots'
  }, {
    name: 'productSlots',
    widget: 'hidden',
    default: 'src/append/product-slots'
  }, {
    name: 'stampsAppend',
    widget: 'hidden',
    default: 'src/append/stamps'
  }, {
    name: 'useJquery',
    widget: 'hidden',
    default: true
  }]
}));

/***/ }),

/***/ "./node_modules/@ecomplus/widget-opinioes-verificadas/package.json":
/*!*************************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-opinioes-verificadas/package.json ***!
  \*************************************************************************/
/*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, browser, bugs, description, homepage, jsdelivr, keywords, license, main, module, name, repository, scripts, unpkg, version, webpackOutput, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_args\":[[\"@ecomplus/widget-opinioes-verificadas@1.1.7\",\"/home/gmazurco/Projects/storefront-template\"]],\"_from\":\"@ecomplus/widget-opinioes-verificadas@1.1.7\",\"_id\":\"@ecomplus/widget-opinioes-verificadas@1.1.7\",\"_inBundle\":false,\"_integrity\":\"sha512-gTRRri7wlqHo3NBG43QTx5ac65C5Fy1Zs/vBYEssT6yhcTCmsngZaempwdN02mpsOdSfu/P+UVnGOSt4oP+oMw==\",\"_location\":\"/@ecomplus/widget-opinioes-verificadas\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"version\",\"registry\":true,\"raw\":\"@ecomplus/widget-opinioes-verificadas@1.1.7\",\"name\":\"@ecomplus/widget-opinioes-verificadas\",\"escapedName\":\"@ecomplus%2fwidget-opinioes-verificadas\",\"scope\":\"@ecomplus\",\"rawSpec\":\"1.1.7\",\"saveSpec\":null,\"fetchSpec\":\"1.1.7\"},\"_requiredBy\":[\"/\"],\"_resolved\":\"https://registry.npmjs.org/@ecomplus/widget-opinioes-verificadas/-/widget-opinioes-verificadas-1.1.7.tgz\",\"_spec\":\"1.1.7\",\"_where\":\"/home/gmazurco/Projects/storefront-template\",\"author\":{\"name\":\"E-Com Club\",\"email\":\"ti@e-com.club\"},\"browser\":\"dist/widget-opinioes-verificadas.min.js\",\"bugs\":{\"url\":\"https://github.com/ecomplus/storefront/issues\"},\"description\":\"Storefront plugin for Opiniões Verificadas\",\"homepage\":\"https://github.com/ecomplus/storefront/tree/master/@ecomplus/widget-opinioes-verificadas#readme\",\"jsdelivr\":\"dist/public/widget-opinioes-verificadas.var.min.js\",\"keywords\":[\"ecomplus\",\"storefront\",\"widget\",\"opinioes-verificadas\",\"ratings\"],\"license\":\"MIT\",\"main\":\"dist/widget-opinioes-verificadas.min.js\",\"module\":\"src/index.js\",\"name\":\"@ecomplus/widget-opinioes-verificadas\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/ecomplus/storefront.git\",\"directory\":\"@ecomplus/widget-opinioes-verificadas\"},\"scripts\":{\"build\":\"cross-env NODE_ENV=production webpack\",\"serve\":\"webpack-dev-server\"},\"unpkg\":\"dist/public/widget-opinioes-verificadas.var.min.js\",\"version\":\"1.1.7\",\"webpackOutput\":{\"library\":\"widgetOpinioesVerificadas\",\"filename\":\"widget-opinioes-verificadas.min.js\"}}");

/***/ }),

/***/ "./node_modules/@ecomplus/widget-product-card/cms.config.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-product-card/cms.config.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package.json */ "./node_modules/@ecomplus/widget-product-card/package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./package.json */ "./node_modules/@ecomplus/widget-product-card/package.json", 1);

/* harmony default export */ __webpack_exports__["default"] = (() => ({
  label: 'Cards de produtos',
  fields: [{
    name: 'pkg',
    widget: 'hidden',
    default: _package_json__WEBPACK_IMPORTED_MODULE_0__["name"]
  }, {
    label: 'Ativar',
    hint: 'Hidrata (atualiza) e customiza os cards de produtos em vitrines e buscas',
    name: 'active',
    widget: 'boolean'
  }, {
    label: 'Apenas em desktops',
    name: 'desktopOnly',
    hint: 'Desativa o widget em dispositivos móveis',
    widget: 'boolean'
  }, {
    label: 'Opções',
    name: 'options',
    widget: 'object',
    hint: 'Personalizações do widget',
    fields: [{
      label: 'Rótulo do botão',
      name: 'buyText',
      required: false,
      widget: 'string',
      hint: 'Texto a ser usado no botão de compra, o padrão é a palavra "comprar"'
    }, {
      label: 'HTML do botão',
      required: false,
      name: 'buy',
      widget: 'code',
      hint: 'Pode ser usado para substituir o botão "comprar" padrão',
      default_language: 'html',
      output_code_only: true
    }, {
      label: 'Conteúdo adicional',
      required: false,
      name: 'footer',
      widget: 'code',
      hint: 'HTML customizado na parte inferior do card',
      default_language: 'html',
      output_code_only: true
    }]
  }]
}));

/***/ }),

/***/ "./node_modules/@ecomplus/widget-product-card/package.json":
/*!*****************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-product-card/package.json ***!
  \*****************************************************************/
/*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, browser, bugs, dependencies, description, homepage, jsdelivr, keywords, license, main, module, name, peerDependencies, repository, scripts, unpkg, version, webpackOutput, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_args\":[[\"@ecomplus/widget-product-card@1.0.0-beta.95\",\"/home/gmazurco/Projects/storefront-template\"]],\"_from\":\"@ecomplus/widget-product-card@1.0.0-beta.95\",\"_id\":\"@ecomplus/widget-product-card@1.0.0-beta.95\",\"_inBundle\":false,\"_integrity\":\"sha512-1AXG99iAAMoFhO2jIt/eMillPo5C+OGxQmx9jVQtFdnw5KE1kd6YMfS5y+t++Ask64xQUnq/s5Jr76g6KK/j1A==\",\"_location\":\"/@ecomplus/widget-product-card\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"version\",\"registry\":true,\"raw\":\"@ecomplus/widget-product-card@1.0.0-beta.95\",\"name\":\"@ecomplus/widget-product-card\",\"escapedName\":\"@ecomplus%2fwidget-product-card\",\"scope\":\"@ecomplus\",\"rawSpec\":\"1.0.0-beta.95\",\"saveSpec\":null,\"fetchSpec\":\"1.0.0-beta.95\"},\"_requiredBy\":[\"/\"],\"_resolved\":\"https://registry.npmjs.org/@ecomplus/widget-product-card/-/widget-product-card-1.0.0-beta.95.tgz\",\"_spec\":\"1.0.0-beta.95\",\"_where\":\"/home/gmazurco/Projects/storefront-template\",\"author\":{\"name\":\"E-Com Club\",\"email\":\"ti@e-com.club\"},\"browser\":\"dist/widget-product-card.min.js\",\"bugs\":{\"url\":\"https://github.com/ecomplus/storefront/issues\"},\"dependencies\":{\"@ecomplus/storefront-components\":\"^1.0.0-beta.98\"},\"description\":\"Storefront plugin with Vue component for product cards\",\"homepage\":\"https://github.com/ecomplus/storefront/tree/master/@ecomplus/widget-product-card#readme\",\"jsdelivr\":\"dist/public/widget-product-card.var.min.js\",\"keywords\":[\"ecomplus\",\"storefront\",\"widget\",\"product-card\"],\"license\":\"MIT\",\"main\":\"dist/widget-product-card.min.js\",\"module\":\"src/index.js\",\"name\":\"@ecomplus/widget-product-card\",\"peerDependencies\":{\"@ecomplus/search-engine\":\">=1 <3\",\"@ecomplus/utils\":\"^1.4.1\",\"core-js\":\"3.x\",\"lozad\":\"1.x\",\"vue\":\">=2 <4\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/ecomplus/storefront.git\",\"directory\":\"@ecomplus/widget-product-card\"},\"scripts\":{\"build\":\"cross-env NODE_ENV=production webpack\",\"serve\":\"webpack-dev-server\"},\"unpkg\":\"dist/public/widget-product-card.var.min.js\",\"version\":\"1.0.0-beta.95\",\"webpackOutput\":{\"library\":\"widgetProductCard\",\"filename\":\"widget-product-card.min.js\"}}");

/***/ }),

/***/ "./node_modules/@ecomplus/widget-product/cms.config.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-product/cms.config.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package.json */ "./node_modules/@ecomplus/widget-product/package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./package.json */ "./node_modules/@ecomplus/widget-product/package.json", 1);

/* harmony default export */ __webpack_exports__["default"] = (() => ({
  label: 'Detalhes do produto',
  fields: [{
    name: 'pkg',
    widget: 'hidden',
    default: _package_json__WEBPACK_IMPORTED_MODULE_0__["name"]
  }, {
    label: 'Ativar',
    hint: 'Hidrata (atualiza) bloco principal em todas as páginas de produtos',
    name: 'active',
    widget: 'boolean'
  }, {
    label: 'Apenas em desktops',
    name: 'desktopOnly',
    hint: 'Desativa o widget em dispositivos móveis',
    widget: 'boolean'
  }, {
    label: 'Opções',
    name: 'options',
    widget: 'object',
    hint: 'Personalizações do widget',
    fields: [{
      label: 'Rótulo do botão',
      name: 'buyText',
      required: false,
      widget: 'string',
      hint: 'Texto a ser usado no botão de compra, o padrão é a palavra "comprar"'
    }, {
      label: 'HTML do botão',
      required: false,
      name: 'buy',
      widget: 'code',
      hint: 'Pode ser usado para substituir o botão "comprar" padrão',
      default_language: 'html',
      output_code_only: true
    }, {
      label: 'Alerta de quantidade',
      name: 'lowQuantityToWarn',
      widget: 'number',
      min: 0,
      max: 999999,
      default: 12,
      hint: 'Quantidade máxima disponível para informar estoque baixo (gatilho da escassez)'
    }, {
      label: 'Máximo de botões por variação',
      name: 'maxVariationOptionsBtns',
      widget: 'number',
      min: 0,
      max: 50,
      default: 6,
      hint: 'Máximo de opções por grade (tamanho, cor...) que poderão ser listadas com botões, ' + 'acima do máximo as opções serão listadas em um seletor'
    }]
  }]
}));

/***/ }),

/***/ "./node_modules/@ecomplus/widget-product/package.json":
/*!************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-product/package.json ***!
  \************************************************************/
/*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, browser, bugs, dependencies, description, homepage, jsdelivr, keywords, license, main, module, name, peerDependencies, repository, scripts, unpkg, version, webpackOutput, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_args\":[[\"@ecomplus/widget-product@1.0.0-beta.95\",\"/home/gmazurco/Projects/storefront-template\"]],\"_from\":\"@ecomplus/widget-product@1.0.0-beta.95\",\"_id\":\"@ecomplus/widget-product@1.0.0-beta.95\",\"_inBundle\":false,\"_integrity\":\"sha512-zhQAjlvR6T8en1MgOb8ld6gJREHog14owMk+ZURRBAGtW6xlfv7xXtQYiINtTo69E/td+v0osKyJJvkNIEzkdQ==\",\"_location\":\"/@ecomplus/widget-product\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"version\",\"registry\":true,\"raw\":\"@ecomplus/widget-product@1.0.0-beta.95\",\"name\":\"@ecomplus/widget-product\",\"escapedName\":\"@ecomplus%2fwidget-product\",\"scope\":\"@ecomplus\",\"rawSpec\":\"1.0.0-beta.95\",\"saveSpec\":null,\"fetchSpec\":\"1.0.0-beta.95\"},\"_requiredBy\":[\"/\"],\"_resolved\":\"https://registry.npmjs.org/@ecomplus/widget-product/-/widget-product-1.0.0-beta.95.tgz\",\"_spec\":\"1.0.0-beta.95\",\"_where\":\"/home/gmazurco/Projects/storefront-template\",\"author\":{\"name\":\"E-Com Club\",\"email\":\"ti@e-com.club\"},\"browser\":\"dist/widget-product.min.js\",\"bugs\":{\"url\":\"https://github.com/ecomplus/storefront/issues\"},\"dependencies\":{\"@ecomplus/storefront-components\":\"^1.0.0-beta.98\"},\"description\":\"Storefront plugin & Vue component for full product block\",\"homepage\":\"https://github.com/ecomplus/storefront/tree/master/@ecomplus/widget-product#readme\",\"jsdelivr\":\"dist/public/widget-product.var.min.js\",\"keywords\":[\"ecomplus\",\"storefront\",\"widget\",\"products\"],\"license\":\"MIT\",\"main\":\"dist/widget-product.min.js\",\"module\":\"src/index.js\",\"name\":\"@ecomplus/widget-product\",\"peerDependencies\":{\"@ecomplus/utils\":\"^1.4.1\",\"core-js\":\"3.x\",\"vue\":\">=2 <4\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/ecomplus/storefront.git\",\"directory\":\"@ecomplus/widget-product\"},\"scripts\":{\"build\":\"cross-env NODE_ENV=production webpack\",\"serve\":\"webpack-dev-server\"},\"unpkg\":\"dist/public/widget-product.var.min.js\",\"version\":\"1.0.0-beta.95\",\"webpackOutput\":{\"library\":\"widgetProduct\",\"filename\":\"widget-product.min.js\"}}");

/***/ }),

/***/ "./node_modules/@ecomplus/widget-search-engine/cms.config.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-search-engine/cms.config.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package.json */ "./node_modules/@ecomplus/widget-search-engine/package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./package.json */ "./node_modules/@ecomplus/widget-search-engine/package.json", 1);

/* harmony default export */ __webpack_exports__["default"] = (() => ({
  label: 'Motor de busca',
  fields: [{
    name: 'pkg',
    widget: 'hidden',
    default: _package_json__WEBPACK_IMPORTED_MODULE_0__["name"]
  }, {
    label: 'Ativar',
    hint: 'Renderiza motor completo e resultados na página de busca',
    name: 'active',
    widget: 'boolean'
  }, {
    label: 'Apenas em desktops',
    name: 'desktopOnly',
    hint: 'Desativa o widget em dispositivos móveis',
    widget: 'boolean'
  }, {
    label: 'Opções',
    name: 'options',
    widget: 'object',
    hint: 'Personalizações do widget',
    fields: [{
      label: 'Paginação',
      name: 'pagination',
      required: false,
      widget: 'boolean',
      hint: 'Ativar paginação manual em vez do carregamento automático por scroll'
    }]
  }]
}));

/***/ }),

/***/ "./node_modules/@ecomplus/widget-search-engine/package.json":
/*!******************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-search-engine/package.json ***!
  \******************************************************************/
/*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, browser, bugs, dependencies, description, homepage, jsdelivr, keywords, license, main, module, name, peerDependencies, repository, scripts, unpkg, version, webpackOutput, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_args\":[[\"@ecomplus/widget-search-engine@1.0.0-beta.97\",\"/home/gmazurco/Projects/storefront-template\"]],\"_from\":\"@ecomplus/widget-search-engine@1.0.0-beta.97\",\"_id\":\"@ecomplus/widget-search-engine@1.0.0-beta.97\",\"_inBundle\":false,\"_integrity\":\"sha512-0EPQUY9tdpGODkTr1mR6mXo2oK0RXT1B73ycaOqWh6JDHYhQ7lgEDKoT1quChQyB7qOgSm04SCflS2ubZENnxQ==\",\"_location\":\"/@ecomplus/widget-search-engine\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"version\",\"registry\":true,\"raw\":\"@ecomplus/widget-search-engine@1.0.0-beta.97\",\"name\":\"@ecomplus/widget-search-engine\",\"escapedName\":\"@ecomplus%2fwidget-search-engine\",\"scope\":\"@ecomplus\",\"rawSpec\":\"1.0.0-beta.97\",\"saveSpec\":null,\"fetchSpec\":\"1.0.0-beta.97\"},\"_requiredBy\":[\"/\"],\"_resolved\":\"https://registry.npmjs.org/@ecomplus/widget-search-engine/-/widget-search-engine-1.0.0-beta.97.tgz\",\"_spec\":\"1.0.0-beta.97\",\"_where\":\"/home/gmazurco/Projects/storefront-template\",\"author\":{\"name\":\"E-Com Club\",\"email\":\"ti@e-com.club\"},\"browser\":\"dist/widget-search-engine.min.js\",\"bugs\":{\"url\":\"https://github.com/ecomplus/storefront/issues\"},\"dependencies\":{\"@ecomplus/storefront-components\":\"^1.0.0-beta.98\",\"@ecomplus/storefront-twbs\":\"^5.11.1\"},\"description\":\"Storefront plugin & Vue component for dynamic search page\",\"homepage\":\"https://github.com/ecomplus/storefront/tree/master/@ecomplus/widget-search-engine#readme\",\"jsdelivr\":\"dist/public/widget-search-engine.var.min.js\",\"keywords\":[\"ecomplus\",\"storefront\",\"widget\",\"search-engine\"],\"license\":\"MIT\",\"main\":\"dist/widget-search-engine.min.js\",\"module\":\"src/index.js\",\"name\":\"@ecomplus/widget-search-engine\",\"peerDependencies\":{\"@ecomplus/utils\":\"^1.4.1\",\"core-js\":\"3.x\",\"vue\":\">=2 <4\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/ecomplus/storefront.git\",\"directory\":\"@ecomplus/widget-search-engine\"},\"scripts\":{\"build\":\"cross-env NODE_ENV=production webpack\",\"serve\":\"webpack-dev-server\"},\"unpkg\":\"dist/public/widget-search-engine.var.min.js\",\"version\":\"1.0.0-beta.97\",\"webpackOutput\":{\"library\":\"widgetSearchEngine\",\"filename\":\"widget-search-engine.min.js\"}}");

/***/ }),

/***/ "./node_modules/@ecomplus/widget-search/cms.config.js":
/*!************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-search/cms.config.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package.json */ "./node_modules/@ecomplus/widget-search/package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./package.json */ "./node_modules/@ecomplus/widget-search/package.json", 1);

/* harmony default export */ __webpack_exports__["default"] = (() => ({
  label: 'Busca instantânea',
  fields: [{
    name: 'pkg',
    widget: 'hidden',
    default: _package_json__WEBPACK_IMPORTED_MODULE_0__["name"]
  }, {
    label: 'Ativar',
    hint: 'Modal para busca instantânea ativado pelo input no cabeçalho da loja',
    name: 'active',
    widget: 'boolean'
  }, {
    label: 'Apenas em desktops',
    name: 'desktopOnly',
    hint: 'Desativa o widget em dispositivos móveis',
    widget: 'boolean'
  }]
}));

/***/ }),

/***/ "./node_modules/@ecomplus/widget-search/package.json":
/*!***********************************************************!*\
  !*** ./node_modules/@ecomplus/widget-search/package.json ***!
  \***********************************************************/
/*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, browser, bugs, dependencies, description, homepage, jsdelivr, keywords, license, main, module, name, peerDependencies, repository, scripts, unpkg, version, webpackOutput, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_args\":[[\"@ecomplus/widget-search@1.0.0-beta.95\",\"/home/gmazurco/Projects/storefront-template\"]],\"_from\":\"@ecomplus/widget-search@1.0.0-beta.95\",\"_id\":\"@ecomplus/widget-search@1.0.0-beta.95\",\"_inBundle\":false,\"_integrity\":\"sha512-rJ1ghMDSxZpgmXw1T1EninB7NTJyAkzDQhVxOY3h+80kB0OPKPbWkLezF7j4loFJ30MHT3M2hr8e4E4/kkPHfA==\",\"_location\":\"/@ecomplus/widget-search\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"version\",\"registry\":true,\"raw\":\"@ecomplus/widget-search@1.0.0-beta.95\",\"name\":\"@ecomplus/widget-search\",\"escapedName\":\"@ecomplus%2fwidget-search\",\"scope\":\"@ecomplus\",\"rawSpec\":\"1.0.0-beta.95\",\"saveSpec\":null,\"fetchSpec\":\"1.0.0-beta.95\"},\"_requiredBy\":[\"/\"],\"_resolved\":\"https://registry.npmjs.org/@ecomplus/widget-search/-/widget-search-1.0.0-beta.95.tgz\",\"_spec\":\"1.0.0-beta.95\",\"_where\":\"/home/gmazurco/Projects/storefront-template\",\"author\":{\"name\":\"E-Com Club\",\"email\":\"ti@e-com.club\"},\"browser\":\"dist/widget-search.min.js\",\"bugs\":{\"url\":\"https://github.com/ecomplus/storefront/issues\"},\"dependencies\":{\"@ecomplus/storefront-components\":\"^1.0.0-beta.98\"},\"description\":\"Storefront plugin with Vue component for instant search engine on E-Com Plus stores\",\"homepage\":\"https://github.com/ecomplus/storefront/tree/master/@ecomplus/widget-search#readme\",\"jsdelivr\":\"dist/public/widget-search.var.min.js\",\"keywords\":[\"ecomplus\",\"storefront\",\"widget\",\"widget-search\",\"instant-search\",\"search-engine\"],\"license\":\"MIT\",\"main\":\"dist/widget-search.min.js\",\"module\":\"src/index.js\",\"name\":\"@ecomplus/widget-search\",\"peerDependencies\":{\"@ecomplus/utils\":\"^1.4.1\",\"core-js\":\"3.x\",\"vue\":\">=2 <4\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/ecomplus/storefront.git\",\"directory\":\"@ecomplus/widget-search\"},\"scripts\":{\"build\":\"cross-env NODE_ENV=production webpack\",\"serve\":\"webpack-dev-server\"},\"unpkg\":\"dist/public/widget-search.var.min.js\",\"version\":\"1.0.0-beta.95\",\"webpackOutput\":{\"library\":\"widgetSearch\",\"filename\":\"widget-search.min.js\"}}");

/***/ }),

/***/ "./node_modules/@ecomplus/widget-tag-manager/cms.config.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-tag-manager/cms.config.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package.json */ "./node_modules/@ecomplus/widget-tag-manager/package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./package.json */ "./node_modules/@ecomplus/widget-tag-manager/package.json", 1);

/* harmony default export */ __webpack_exports__["default"] = (() => ({
  label: 'Google Tag Manager',
  fields: [{
    name: 'pkg',
    widget: 'hidden',
    default: _package_json__WEBPACK_IMPORTED_MODULE_0__["name"]
  }, {
    label: 'Ativar',
    hint: 'Instalar o Gerenciador de tags do Google',
    name: 'active',
    widget: 'boolean'
  }, {
    label: 'Apenas em desktops',
    name: 'desktopOnly',
    hint: 'Desativa o widget em dispositivos móveis',
    widget: 'boolean'
  }, {
    name: 'enableCheckout',
    widget: 'hidden',
    default: true
  }, {
    label: 'Opções',
    name: 'options',
    widget: 'object',
    hint: 'Personalizações do widget',
    fields: [{
      label: 'Código do contêiner GTM',
      name: 'gtmContainerId',
      widget: 'string'
    }, {
      name: 'dataLayerVar',
      widget: 'hidden',
      default: 'dataLayer'
    }, {
      name: 'parseDomMsDelay',
      widget: 'hidden',
      default: 300
    }]
  }, {
    name: 'headAppend',
    widget: 'hidden',
    default: 'src/append/head'
  }, {
    name: 'bodyAppend',
    widget: 'hidden',
    default: 'src/append/body'
  }]
}));

/***/ }),

/***/ "./node_modules/@ecomplus/widget-tag-manager/package.json":
/*!****************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-tag-manager/package.json ***!
  \****************************************************************/
/*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, browser, bugs, description, homepage, jsdelivr, keywords, license, main, module, name, peerDependencies, repository, scripts, unpkg, version, webpackOutput, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_args\":[[\"@ecomplus/widget-tag-manager@1.5.1\",\"/home/gmazurco/Projects/storefront-template\"]],\"_from\":\"@ecomplus/widget-tag-manager@1.5.1\",\"_id\":\"@ecomplus/widget-tag-manager@1.5.1\",\"_inBundle\":false,\"_integrity\":\"sha512-4MAFZw8IYYpBWXNfnk5sDtdCbc6NroANICPf5AL2h2Xzg9N68oHKI6tnTXaOLy5MROzq76/DCzcFniiXuyNu+A==\",\"_location\":\"/@ecomplus/widget-tag-manager\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"version\",\"registry\":true,\"raw\":\"@ecomplus/widget-tag-manager@1.5.1\",\"name\":\"@ecomplus/widget-tag-manager\",\"escapedName\":\"@ecomplus%2fwidget-tag-manager\",\"scope\":\"@ecomplus\",\"rawSpec\":\"1.5.1\",\"saveSpec\":null,\"fetchSpec\":\"1.5.1\"},\"_requiredBy\":[\"/\",\"/@ecomplus/widget-analytics\"],\"_resolved\":\"https://registry.npmjs.org/@ecomplus/widget-tag-manager/-/widget-tag-manager-1.5.1.tgz\",\"_spec\":\"1.5.1\",\"_where\":\"/home/gmazurco/Projects/storefront-template\",\"author\":{\"name\":\"E-Com Club\",\"email\":\"ti@e-com.club\"},\"browser\":\"dist/widget-tag-manager.min.js\",\"bugs\":{\"url\":\"https://github.com/ecomplus/storefront/issues\"},\"description\":\"Storefront plugin to handle GTM with ecommerce data layer\",\"homepage\":\"https://github.com/ecomplus/storefront/tree/master/@ecomplus/widget-tag-manager#readme\",\"jsdelivr\":\"dist/public/widget-tag-manager.var.min.js\",\"keywords\":[\"ecomplus\",\"storefront\",\"google-tag-manager\",\"google-analytics\",\"ga-enhanced-ecommerce\",\"gtm\",\"datalayer\"],\"license\":\"MIT\",\"main\":\"dist/widget-tag-manager.min.js\",\"module\":\"src/index.js\",\"name\":\"@ecomplus/widget-tag-manager\",\"peerDependencies\":{\"@ecomplus/shopping-cart\":\">=1 <3\",\"@ecomplus/utils\":\"^1.4.1\",\"core-js\":\"3.x\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/ecomplus/storefront.git\",\"directory\":\"@ecomplus/widget-tag-manager\"},\"scripts\":{\"build\":\"cross-env NODE_ENV=production webpack\",\"serve\":\"webpack-dev-server\"},\"unpkg\":\"dist/public/widget-tag-manager.var.min.js\",\"version\":\"1.5.1\",\"webpackOutput\":{\"library\":\"widgetTagManager\",\"filename\":\"widget-tag-manager.min.js\"}}");

/***/ }),

/***/ "./node_modules/@ecomplus/widget-tawkto/cms.config.js":
/*!************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-tawkto/cms.config.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package.json */ "./node_modules/@ecomplus/widget-tawkto/package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./package.json */ "./node_modules/@ecomplus/widget-tawkto/package.json", 1);

/* harmony default export */ __webpack_exports__["default"] = (() => ({
  label: 'Chat Tawk.to',
  fields: [{
    name: 'pkg',
    widget: 'hidden',
    default: _package_json__WEBPACK_IMPORTED_MODULE_0__["name"]
  }, {
    label: 'Ativar',
    hint: 'Instalar chat Tawk.to',
    name: 'active',
    widget: 'boolean'
  }, {
    name: 'desktopOnly',
    widget: 'hidden',
    default: false
  }, {
    name: 'enableCheckout',
    widget: 'hidden',
    default: false
  }, {
    name: 'disablePages',
    widget: 'hidden',
    default: true
  }, {
    label: 'Opções',
    name: 'options',
    widget: 'object',
    hint: 'Personalizações do widget',
    fields: [{
      label: 'ID da propriedade Tawk.to',
      name: 'tawktoPropertyId',
      widget: 'string',
      hint: 'Property ID em disponível em https://dashboard.tawk.to/#/admin/'
    }, {
      label: 'Chat widget',
      required: false,
      name: 'tawktoChatWidget',
      widget: 'string'
    }]
  }, {
    name: 'bodyAppend',
    widget: 'hidden',
    default: 'src/append/body'
  }]
}));

/***/ }),

/***/ "./node_modules/@ecomplus/widget-tawkto/package.json":
/*!***********************************************************!*\
  !*** ./node_modules/@ecomplus/widget-tawkto/package.json ***!
  \***********************************************************/
/*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, browser, bugs, description, homepage, jsdelivr, keywords, license, main, module, name, repository, scripts, unpkg, version, webpackOutput, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_args\":[[\"@ecomplus/widget-tawkto@1.1.9\",\"/home/gmazurco/Projects/storefront-template\"]],\"_from\":\"@ecomplus/widget-tawkto@1.1.9\",\"_id\":\"@ecomplus/widget-tawkto@1.1.9\",\"_inBundle\":false,\"_integrity\":\"sha512-X85+Wi/CcJXRdq7kwHkptvFT+t2QohNFn/zbHoDu248jc/ZyfQhv4gRBMXXRRHeC42+3x94cbsVT4MXOicFcBg==\",\"_location\":\"/@ecomplus/widget-tawkto\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"version\",\"registry\":true,\"raw\":\"@ecomplus/widget-tawkto@1.1.9\",\"name\":\"@ecomplus/widget-tawkto\",\"escapedName\":\"@ecomplus%2fwidget-tawkto\",\"scope\":\"@ecomplus\",\"rawSpec\":\"1.1.9\",\"saveSpec\":null,\"fetchSpec\":\"1.1.9\"},\"_requiredBy\":[\"/\"],\"_resolved\":\"https://registry.npmjs.org/@ecomplus/widget-tawkto/-/widget-tawkto-1.1.9.tgz\",\"_spec\":\"1.1.9\",\"_where\":\"/home/gmazurco/Projects/storefront-template\",\"author\":{\"name\":\"E-Com Club\",\"email\":\"ti@e-com.club\"},\"browser\":\"dist/widget-tawkto.min.js\",\"bugs\":{\"url\":\"https://github.com/ecomplus/storefront/issues\"},\"description\":\"Storefront plugin for Tawk.to chat\",\"homepage\":\"https://github.com/ecomplus/storefront/tree/master/@ecomplus/widget-tawkto#readme\",\"jsdelivr\":\"dist/public/widget-tawkto.var.min.js\",\"keywords\":[\"ecomplus\",\"storefront\",\"widget\",\"tawkto\",\"chat\"],\"license\":\"MIT\",\"main\":\"dist/widget-tawkto.min.js\",\"module\":\"src/index.js\",\"name\":\"@ecomplus/widget-tawkto\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/ecomplus/storefront.git\",\"directory\":\"@ecomplus/widget-tawkto\"},\"scripts\":{\"build\":\"cross-env NODE_ENV=production webpack\",\"serve\":\"webpack-dev-server\"},\"unpkg\":\"dist/public/widget-tawkto.var.min.js\",\"version\":\"1.1.9\",\"webpackOutput\":{\"library\":\"widgetTawkto\",\"filename\":\"widget-tawkto.min.js\"}}");

/***/ }),

/***/ "./node_modules/@ecomplus/widget-trustvox/cms.config.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-trustvox/cms.config.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package.json */ "./node_modules/@ecomplus/widget-trustvox/package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./package.json */ "./node_modules/@ecomplus/widget-trustvox/package.json", 1);

/* harmony default export */ __webpack_exports__["default"] = (() => ({
  label: 'Trustvox',
  fields: [{
    name: 'pkg',
    widget: 'hidden',
    default: _package_json__WEBPACK_IMPORTED_MODULE_0__["name"]
  }, {
    label: 'Ativar',
    hint: 'Instalar avaliações de produtos via Trustvox',
    name: 'active',
    widget: 'boolean'
  }, {
    name: 'desktopOnly',
    widget: 'hidden',
    default: false
  }, {
    name: 'enableCheckout',
    widget: 'hidden',
    default: false
  }, {
    name: 'disablePages',
    widget: 'hidden',
    default: true
  }, {
    label: 'Opções',
    name: 'options',
    widget: 'object',
    hint: 'Personalizações do widget',
    fields: [{
      label: 'ID da loja na Trustvox',
      name: 'trustvoxStoreId',
      widget: 'number'
    }, {
      label: 'Link do script da Trustvox',
      hint: 'Customize para utilizar a versão 2 do widget de avaliações',
      name: 'widgetSrc',
      widget: 'string',
      required: false
    }]
  }, {
    name: 'bodyAppend',
    widget: 'hidden',
    default: 'src/append/body'
  }, {
    name: 'productDescriptionAppend',
    widget: 'hidden',
    default: 'src/append/product-block'
  }, {
    name: 'productCardSlots',
    widget: 'hidden',
    default: 'src/append/product-card-slots'
  }, {
    name: 'productSlots',
    widget: 'hidden',
    default: 'src/append/product-slots'
  }, {
    name: 'stampsAppend',
    widget: 'hidden',
    default: 'src/append/stamps'
  }]
}));

/***/ }),

/***/ "./node_modules/@ecomplus/widget-trustvox/package.json":
/*!*************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-trustvox/package.json ***!
  \*************************************************************/
/*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, browser, bugs, description, homepage, jsdelivr, keywords, license, main, module, name, repository, scripts, unpkg, version, webpackOutput, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_args\":[[\"@ecomplus/widget-trustvox@2.2.6\",\"/home/gmazurco/Projects/storefront-template\"]],\"_from\":\"@ecomplus/widget-trustvox@2.2.6\",\"_id\":\"@ecomplus/widget-trustvox@2.2.6\",\"_inBundle\":false,\"_integrity\":\"sha512-Kx0jKcyNSwU6pQlsaxg5b5RrJOd/W6a2nNFsFGomal64KJX7mdwjUcuPanUa0wW9d++OKeB+v0Dhz26vXqVFXw==\",\"_location\":\"/@ecomplus/widget-trustvox\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"version\",\"registry\":true,\"raw\":\"@ecomplus/widget-trustvox@2.2.6\",\"name\":\"@ecomplus/widget-trustvox\",\"escapedName\":\"@ecomplus%2fwidget-trustvox\",\"scope\":\"@ecomplus\",\"rawSpec\":\"2.2.6\",\"saveSpec\":null,\"fetchSpec\":\"2.2.6\"},\"_requiredBy\":[\"/\"],\"_resolved\":\"https://registry.npmjs.org/@ecomplus/widget-trustvox/-/widget-trustvox-2.2.6.tgz\",\"_spec\":\"2.2.6\",\"_where\":\"/home/gmazurco/Projects/storefront-template\",\"author\":{\"name\":\"E-Com Club\",\"email\":\"ti@e-com.club\"},\"browser\":\"dist/widget-trustvox.min.js\",\"bugs\":{\"url\":\"https://github.com/ecomplus/storefront/issues\"},\"description\":\"Storefront plugin for Trustvox product reviews\",\"homepage\":\"https://github.com/ecomplus/storefront/tree/master/@ecomplus/widget-trustvox#readme\",\"jsdelivr\":\"dist/public/widget-trustvox.var.min.js\",\"keywords\":[\"ecomplus\",\"storefront\",\"widget\",\"trustvox\",\"reviews\"],\"license\":\"MIT\",\"main\":\"dist/widget-trustvox.min.js\",\"module\":\"src/index.js\",\"name\":\"@ecomplus/widget-trustvox\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/ecomplus/storefront.git\",\"directory\":\"@ecomplus/widget-trustvox\"},\"scripts\":{\"build\":\"cross-env NODE_ENV=production webpack\",\"serve\":\"webpack-dev-server\"},\"unpkg\":\"dist/public/widget-trustvox.var.min.js\",\"version\":\"2.2.6\",\"webpackOutput\":{\"library\":\"widgetTrustvox\",\"filename\":\"widget-trustvox.min.js\"}}");

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./node_modules/axios/lib/helpers/isAxiosError.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-instance.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js/internals/iterator-close.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator);
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    });

    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

module.exports = function (it) {
  var iteratorMethod = getIteratorMethod(it);
  if (typeof iteratorMethod != 'function') {
    throw TypeError(String(it) + ' is not iterable');
  } return anObject(iteratorMethod.call(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-substitution.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/get-substitution.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace.call(replacement, symbols, function (match, ch) {
    var capture;
    switch (ch.charAt(0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return str.slice(0, position);
      case "'": return str.slice(tailPos);
      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/iterator-close.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-close.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-url.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/native-url.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = !fails(function () {
  var url = new URL('b?a=1&b=2&c=3', 'http://a');
  var searchParams = url.searchParams;
  var result = '';
  url.pathname = 'c%20d';
  searchParams.forEach(function (value, key) {
    searchParams['delete']('b');
    result += key + value;
  });
  return (IS_PURE && !url.toJSON)
    || !searchParams.sort
    || url.href !== 'http://a/c%20d?a=1&c=3'
    || searchParams.get('c') !== '3'
    || String(new URLSearchParams('?a=1')) !== 'a=1'
    || !searchParams[ITERATOR]
    // throws in Edge
    || new URL('https://a@b').username !== 'a'
    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
    // not punycoded in Edge
    || new URL('http://тест').host !== 'xn--e1aybc'
    // not escaped in Chrome 62-
    || new URL('http://a#б').hash !== '#%D0%B1'
    // fails in Chrome 66-
    || result !== 'a1c3'
    // throws in Safari
    || new URL('http://x', undefined).host !== 'x';
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-assign.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-assign.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/core-js/internals/redefine-all.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/redefine-all.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ./regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-assertion-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var regexpFlags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var getInternalState = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js").get;
var UNSUPPORTED_DOT_ALL = __webpack_require__(/*! ../internals/regexp-unsupported-dot-all */ "./node_modules/core-js/internals/regexp-unsupported-dot-all.js");
var UNSUPPORTED_NCG = __webpack_require__(/*! ../internals/regexp-unsupported-ncg */ "./node_modules/core-js/internals/regexp-unsupported-ncg.js");

var nativeExec = RegExp.prototype.exec;
var nativeReplace = shared('native-string-replace', String.prototype.replace);

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  // eslint-disable-next-line max-statements -- TODO
  patchedExec = function exec(str) {
    var re = this;
    var state = getInternalState(re);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = patchedExec.call(raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
var RE = function (s, f) {
  return RegExp(s, f);
};

exports.UNSUPPORTED_Y = fails(function () {
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-unsupported-dot-all.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-unsupported-dot-all.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ./fails */ "./node_modules/core-js/internals/fails.js");

module.exports = fails(function () {
  // babel-minify transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  var re = RegExp('.', (typeof '').charAt(0));
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-unsupported-ncg.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-unsupported-ncg.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ./fails */ "./node_modules/core-js/internals/fails.js");

module.exports = fails(function () {
  // babel-minify transpiles RegExp('.', 'g') -> /./g and it causes SyntaxError
  var re = RegExp('(?<a>b)', (typeof '').charAt(5));
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.15.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-punycode-to-ascii.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/string-punycode-to-ascii.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'
var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
var baseMinusTMin = base - tMin;
var floor = Math.floor;
var stringFromCharCode = String.fromCharCode;

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */
var ucs2decode = function (string) {
  var output = [];
  var counter = 0;
  var length = string.length;
  while (counter < length) {
    var value = string.charCodeAt(counter++);
    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // It's a high surrogate, and there is a next character.
      var extra = string.charCodeAt(counter++);
      if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // It's an unmatched surrogate; only append this code unit, in case the
        // next code unit is the high surrogate of a surrogate pair.
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
};

/**
 * Converts a digit/integer into a basic code point.
 */
var digitToBasic = function (digit) {
  //  0..25 map to ASCII a..z or A..Z
  // 26..35 map to ASCII 0..9
  return digit + 22 + 75 * (digit < 26);
};

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */
var adapt = function (delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor(delta / damp) : delta >> 1;
  delta += floor(delta / numPoints);
  for (; delta > baseMinusTMin * tMax >> 1; k += base) {
    delta = floor(delta / baseMinusTMin);
  }
  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */
// eslint-disable-next-line max-statements -- TODO
var encode = function (input) {
  var output = [];

  // Convert the input in UCS-2 to an array of Unicode code points.
  input = ucs2decode(input);

  // Cache the length.
  var inputLength = input.length;

  // Initialize the state.
  var n = initialN;
  var delta = 0;
  var bias = initialBias;
  var i, currentValue;

  // Handle the basic code points.
  for (i = 0; i < input.length; i++) {
    currentValue = input[i];
    if (currentValue < 0x80) {
      output.push(stringFromCharCode(currentValue));
    }
  }

  var basicLength = output.length; // number of basic code points.
  var handledCPCount = basicLength; // number of code points that have been handled;

  // Finish the basic string with a delimiter unless it's empty.
  if (basicLength) {
    output.push(delimiter);
  }

  // Main encoding loop:
  while (handledCPCount < inputLength) {
    // All non-basic code points < n have been handled already. Find the next larger one:
    var m = maxInt;
    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }

    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
    var handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
      throw RangeError(OVERFLOW_ERROR);
    }

    delta += (m - n) * handledCPCountPlusOne;
    n = m;

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue < n && ++delta > maxInt) {
        throw RangeError(OVERFLOW_ERROR);
      }
      if (currentValue == n) {
        // Represent delta as a generalized variable-length integer.
        var q = delta;
        for (var k = base; /* no condition */; k += base) {
          var t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
          if (q < t) break;
          var qMinusT = q - t;
          var baseMinusT = base - t;
          output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
          q = floor(qMinusT / baseMinusT);
        }

        output.push(stringFromCharCode(digitToBasic(q)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
        delta = 0;
        ++handledCPCount;
      }
    }

    ++delta;
    ++n;
  }
  return output.join('');
};

module.exports = function (input) {
  var encoded = [];
  var labels = input.toLowerCase().replace(regexSeparators, '\u002E').split('.');
  var i, label;
  for (i = 0; i < labels.length; i++) {
    label = labels[i];
    encoded.push(regexNonASCII.test(label) ? 'xn--' + encode(label) : label);
  }
  return encoded.join('.');
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var exec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var getSubstitution = __webpack_require__(/*! ../internals/get-substitution */ "./node_modules/core-js/internals/get-substitution.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      if (
        typeof replaceValue === 'string' &&
        replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1 &&
        replaceValue.indexOf('$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, this, string, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(this);
      var S = String(string);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),

/***/ "./node_modules/core-js/modules/web.url-search-params.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/web.url-search-params.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var USE_NATIVE_URL = __webpack_require__(/*! ../internals/native-url */ "./node_modules/core-js/internals/native-url.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var hasOwn = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var getIterator = __webpack_require__(/*! ../internals/get-iterator */ "./node_modules/core-js/internals/get-iterator.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var $fetch = getBuiltIn('fetch');
var Headers = getBuiltIn('Headers');
var ITERATOR = wellKnownSymbol('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState = InternalStateModule.set;
var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);

var plus = /\+/g;
var sequences = Array(4);

var percentSequence = function (bytes) {
  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
};

var percentDecode = function (sequence) {
  try {
    return decodeURIComponent(sequence);
  } catch (error) {
    return sequence;
  }
};

var deserialize = function (it) {
  var result = it.replace(plus, ' ');
  var bytes = 4;
  try {
    return decodeURIComponent(result);
  } catch (error) {
    while (bytes) {
      result = result.replace(percentSequence(bytes--), percentDecode);
    }
    return result;
  }
};

var find = /[!'()~]|%20/g;

var replace = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+'
};

var replacer = function (match) {
  return replace[match];
};

var serialize = function (it) {
  return encodeURIComponent(it).replace(find, replacer);
};

var parseSearchParams = function (result, query) {
  if (query) {
    var attributes = query.split('&');
    var index = 0;
    var attribute, entry;
    while (index < attributes.length) {
      attribute = attributes[index++];
      if (attribute.length) {
        entry = attribute.split('=');
        result.push({
          key: deserialize(entry.shift()),
          value: deserialize(entry.join('='))
        });
      }
    }
  }
};

var updateSearchParams = function (query) {
  this.entries.length = 0;
  parseSearchParams(this.entries, query);
};

var validateArgumentsLength = function (passed, required) {
  if (passed < required) throw TypeError('Not enough arguments');
};

var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  setInternalState(this, {
    type: URL_SEARCH_PARAMS_ITERATOR,
    iterator: getIterator(getInternalParamsState(params).entries),
    kind: kind
  });
}, 'Iterator', function next() {
  var state = getInternalIteratorState(this);
  var kind = state.kind;
  var step = state.iterator.next();
  var entry = step.value;
  if (!step.done) {
    step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
  } return step;
});

// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
  anInstance(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  var that = this;
  var entries = [];
  var iteratorMethod, iterator, next, step, entryIterator, entryNext, first, second, key;

  setInternalState(that, {
    type: URL_SEARCH_PARAMS,
    entries: entries,
    updateURL: function () { /* empty */ },
    updateSearchParams: updateSearchParams
  });

  if (init !== undefined) {
    if (isObject(init)) {
      iteratorMethod = getIteratorMethod(init);
      if (typeof iteratorMethod === 'function') {
        iterator = iteratorMethod.call(init);
        next = iterator.next;
        while (!(step = next.call(iterator)).done) {
          entryIterator = getIterator(anObject(step.value));
          entryNext = entryIterator.next;
          if (
            (first = entryNext.call(entryIterator)).done ||
            (second = entryNext.call(entryIterator)).done ||
            !entryNext.call(entryIterator).done
          ) throw TypeError('Expected sequence with length 2');
          entries.push({ key: first.value + '', value: second.value + '' });
        }
      } else for (key in init) if (hasOwn(init, key)) entries.push({ key: key, value: init[key] + '' });
    } else {
      parseSearchParams(entries, typeof init === 'string' ? init.charAt(0) === '?' ? init.slice(1) : init : init + '');
    }
  }
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

redefineAll(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.append` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    validateArgumentsLength(arguments.length, 2);
    var state = getInternalParamsState(this);
    state.entries.push({ key: name + '', value: value + '' });
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var key = name + '';
    var index = 0;
    while (index < entries.length) {
      if (entries[index].key === key) entries.splice(index, 1);
      else index++;
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) return entries[index].value;
    }
    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var result = [];
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) result.push(entries[index].value);
    }
    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var index = 0;
    while (index < entries.length) {
      if (entries[index++].key === key) return true;
    }
    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var found = false;
    var key = name + '';
    var val = value + '';
    var index = 0;
    var entry;
    for (; index < entries.length; index++) {
      entry = entries[index];
      if (entry.key === key) {
        if (found) entries.splice(index--, 1);
        else {
          found = true;
          entry.value = val;
        }
      }
    }
    if (!found) entries.push({ key: key, value: val });
    state.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function sort() {
    var state = getInternalParamsState(this);
    var entries = state.entries;
    // Array#sort is not stable in some engines
    var slice = entries.slice();
    var entry, entriesIndex, sliceIndex;
    entries.length = 0;
    for (sliceIndex = 0; sliceIndex < slice.length; sliceIndex++) {
      entry = slice[sliceIndex];
      for (entriesIndex = 0; entriesIndex < sliceIndex; entriesIndex++) {
        if (entries[entriesIndex].key > entry.key) {
          entries.splice(entriesIndex, 0, entry);
          break;
        }
      }
      if (entriesIndex === sliceIndex) entries.push(entry);
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function forEach(callback /* , thisArg */) {
    var entries = getInternalParamsState(this).entries;
    var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined, 3);
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      boundFunction(entry.value, entry.key, this);
    }
  },
  // `URLSearchParams.prototype.keys` method
  keys: function keys() {
    return new URLSearchParamsIterator(this, 'keys');
  },
  // `URLSearchParams.prototype.values` method
  values: function values() {
    return new URLSearchParamsIterator(this, 'values');
  },
  // `URLSearchParams.prototype.entries` method
  entries: function entries() {
    return new URLSearchParamsIterator(this, 'entries');
  }
}, { enumerable: true });

// `URLSearchParams.prototype[@@iterator]` method
redefine(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries);

// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
redefine(URLSearchParamsPrototype, 'toString', function toString() {
  var entries = getInternalParamsState(this).entries;
  var result = [];
  var index = 0;
  var entry;
  while (index < entries.length) {
    entry = entries[index++];
    result.push(serialize(entry.key) + '=' + serialize(entry.value));
  } return result.join('&');
}, { enumerable: true });

setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

$({ global: true, forced: !USE_NATIVE_URL }, {
  URLSearchParams: URLSearchParamsConstructor
});

// Wrap `fetch` for correct work with polyfilled `URLSearchParams`
// https://github.com/zloirock/core-js/issues/674
if (!USE_NATIVE_URL && typeof $fetch == 'function' && typeof Headers == 'function') {
  $({ global: true, enumerable: true, forced: true }, {
    fetch: function fetch(input /* , init */) {
      var args = [input];
      var init, body, headers;
      if (arguments.length > 1) {
        init = arguments[1];
        if (isObject(init)) {
          body = init.body;
          if (classof(body) === URL_SEARCH_PARAMS) {
            headers = init.headers ? new Headers(init.headers) : new Headers();
            if (!headers.has('content-type')) {
              headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
            }
            init = create(init, {
              body: createPropertyDescriptor(0, String(body)),
              headers: createPropertyDescriptor(0, headers)
            });
          }
        }
        args.push(init);
      } return $fetch.apply(this, args);
    }
  });
}

module.exports = {
  URLSearchParams: URLSearchParamsConstructor,
  getState: getInternalParamsState
};


/***/ }),

/***/ "./node_modules/core-js/modules/web.url.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/web.url.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__(/*! ../modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var USE_NATIVE_URL = __webpack_require__(/*! ../internals/native-url */ "./node_modules/core-js/internals/native-url.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var assign = __webpack_require__(/*! ../internals/object-assign */ "./node_modules/core-js/internals/object-assign.js");
var arrayFrom = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
var codeAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").codeAt;
var toASCII = __webpack_require__(/*! ../internals/string-punycode-to-ascii */ "./node_modules/core-js/internals/string-punycode-to-ascii.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var URLSearchParamsModule = __webpack_require__(/*! ../modules/web.url-search-params */ "./node_modules/core-js/modules/web.url-search-params.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var NativeURL = global.URL;
var URLSearchParams = URLSearchParamsModule.URLSearchParams;
var getInternalSearchParamsState = URLSearchParamsModule.getState;
var setInternalState = InternalStateModule.set;
var getInternalURLState = InternalStateModule.getterFor('URL');
var floor = Math.floor;
var pow = Math.pow;

var INVALID_AUTHORITY = 'Invalid authority';
var INVALID_SCHEME = 'Invalid scheme';
var INVALID_HOST = 'Invalid host';
var INVALID_PORT = 'Invalid port';

var ALPHA = /[A-Za-z]/;
// eslint-disable-next-line regexp/no-obscure-range -- safe
var ALPHANUMERIC = /[\d+-.A-Za-z]/;
var DIGIT = /\d/;
var HEX_START = /^0x/i;
var OCT = /^[0-7]+$/;
var DEC = /^\d+$/;
var HEX = /^[\dA-Fa-f]+$/;
/* eslint-disable no-control-regex -- safe */
var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g;
var TAB_AND_NEW_LINE = /[\t\n\r]/g;
/* eslint-enable no-control-regex -- safe */
var EOF;

var parseHost = function (url, input) {
  var result, codePoints, index;
  if (input.charAt(0) == '[') {
    if (input.charAt(input.length - 1) != ']') return INVALID_HOST;
    result = parseIPv6(input.slice(1, -1));
    if (!result) return INVALID_HOST;
    url.host = result;
  // opaque host
  } else if (!isSpecial(url)) {
    if (FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(input)) return INVALID_HOST;
    result = '';
    codePoints = arrayFrom(input);
    for (index = 0; index < codePoints.length; index++) {
      result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
    }
    url.host = result;
  } else {
    input = toASCII(input);
    if (FORBIDDEN_HOST_CODE_POINT.test(input)) return INVALID_HOST;
    result = parseIPv4(input);
    if (result === null) return INVALID_HOST;
    url.host = result;
  }
};

var parseIPv4 = function (input) {
  var parts = input.split('.');
  var partsLength, numbers, index, part, radix, number, ipv4;
  if (parts.length && parts[parts.length - 1] == '') {
    parts.pop();
  }
  partsLength = parts.length;
  if (partsLength > 4) return input;
  numbers = [];
  for (index = 0; index < partsLength; index++) {
    part = parts[index];
    if (part == '') return input;
    radix = 10;
    if (part.length > 1 && part.charAt(0) == '0') {
      radix = HEX_START.test(part) ? 16 : 8;
      part = part.slice(radix == 8 ? 1 : 2);
    }
    if (part === '') {
      number = 0;
    } else {
      if (!(radix == 10 ? DEC : radix == 8 ? OCT : HEX).test(part)) return input;
      number = parseInt(part, radix);
    }
    numbers.push(number);
  }
  for (index = 0; index < partsLength; index++) {
    number = numbers[index];
    if (index == partsLength - 1) {
      if (number >= pow(256, 5 - partsLength)) return null;
    } else if (number > 255) return null;
  }
  ipv4 = numbers.pop();
  for (index = 0; index < numbers.length; index++) {
    ipv4 += numbers[index] * pow(256, 3 - index);
  }
  return ipv4;
};

// eslint-disable-next-line max-statements -- TODO
var parseIPv6 = function (input) {
  var address = [0, 0, 0, 0, 0, 0, 0, 0];
  var pieceIndex = 0;
  var compress = null;
  var pointer = 0;
  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

  var char = function () {
    return input.charAt(pointer);
  };

  if (char() == ':') {
    if (input.charAt(1) != ':') return;
    pointer += 2;
    pieceIndex++;
    compress = pieceIndex;
  }
  while (char()) {
    if (pieceIndex == 8) return;
    if (char() == ':') {
      if (compress !== null) return;
      pointer++;
      pieceIndex++;
      compress = pieceIndex;
      continue;
    }
    value = length = 0;
    while (length < 4 && HEX.test(char())) {
      value = value * 16 + parseInt(char(), 16);
      pointer++;
      length++;
    }
    if (char() == '.') {
      if (length == 0) return;
      pointer -= length;
      if (pieceIndex > 6) return;
      numbersSeen = 0;
      while (char()) {
        ipv4Piece = null;
        if (numbersSeen > 0) {
          if (char() == '.' && numbersSeen < 4) pointer++;
          else return;
        }
        if (!DIGIT.test(char())) return;
        while (DIGIT.test(char())) {
          number = parseInt(char(), 10);
          if (ipv4Piece === null) ipv4Piece = number;
          else if (ipv4Piece == 0) return;
          else ipv4Piece = ipv4Piece * 10 + number;
          if (ipv4Piece > 255) return;
          pointer++;
        }
        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
        numbersSeen++;
        if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
      }
      if (numbersSeen != 4) return;
      break;
    } else if (char() == ':') {
      pointer++;
      if (!char()) return;
    } else if (char()) return;
    address[pieceIndex++] = value;
  }
  if (compress !== null) {
    swaps = pieceIndex - compress;
    pieceIndex = 7;
    while (pieceIndex != 0 && swaps > 0) {
      swap = address[pieceIndex];
      address[pieceIndex--] = address[compress + swaps - 1];
      address[compress + --swaps] = swap;
    }
  } else if (pieceIndex != 8) return;
  return address;
};

var findLongestZeroSequence = function (ipv6) {
  var maxIndex = null;
  var maxLength = 1;
  var currStart = null;
  var currLength = 0;
  var index = 0;
  for (; index < 8; index++) {
    if (ipv6[index] !== 0) {
      if (currLength > maxLength) {
        maxIndex = currStart;
        maxLength = currLength;
      }
      currStart = null;
      currLength = 0;
    } else {
      if (currStart === null) currStart = index;
      ++currLength;
    }
  }
  if (currLength > maxLength) {
    maxIndex = currStart;
    maxLength = currLength;
  }
  return maxIndex;
};

var serializeHost = function (host) {
  var result, index, compress, ignore0;
  // ipv4
  if (typeof host == 'number') {
    result = [];
    for (index = 0; index < 4; index++) {
      result.unshift(host % 256);
      host = floor(host / 256);
    } return result.join('.');
  // ipv6
  } else if (typeof host == 'object') {
    result = '';
    compress = findLongestZeroSequence(host);
    for (index = 0; index < 8; index++) {
      if (ignore0 && host[index] === 0) continue;
      if (ignore0) ignore0 = false;
      if (compress === index) {
        result += index ? ':' : '::';
        ignore0 = true;
      } else {
        result += host[index].toString(16);
        if (index < 7) result += ':';
      }
    }
    return '[' + result + ']';
  } return host;
};

var C0ControlPercentEncodeSet = {};
var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
  ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
});
var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
  '#': 1, '?': 1, '{': 1, '}': 1
});
var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
  '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
});

var percentEncode = function (char, set) {
  var code = codeAt(char, 0);
  return code > 0x20 && code < 0x7F && !has(set, char) ? char : encodeURIComponent(char);
};

var specialSchemes = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};

var isSpecial = function (url) {
  return has(specialSchemes, url.scheme);
};

var includesCredentials = function (url) {
  return url.username != '' || url.password != '';
};

var cannotHaveUsernamePasswordPort = function (url) {
  return !url.host || url.cannotBeABaseURL || url.scheme == 'file';
};

var isWindowsDriveLetter = function (string, normalized) {
  var second;
  return string.length == 2 && ALPHA.test(string.charAt(0))
    && ((second = string.charAt(1)) == ':' || (!normalized && second == '|'));
};

var startsWithWindowsDriveLetter = function (string) {
  var third;
  return string.length > 1 && isWindowsDriveLetter(string.slice(0, 2)) && (
    string.length == 2 ||
    ((third = string.charAt(2)) === '/' || third === '\\' || third === '?' || third === '#')
  );
};

var shortenURLsPath = function (url) {
  var path = url.path;
  var pathSize = path.length;
  if (pathSize && (url.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
    path.pop();
  }
};

var isSingleDot = function (segment) {
  return segment === '.' || segment.toLowerCase() === '%2e';
};

var isDoubleDot = function (segment) {
  segment = segment.toLowerCase();
  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
};

// States:
var SCHEME_START = {};
var SCHEME = {};
var NO_SCHEME = {};
var SPECIAL_RELATIVE_OR_AUTHORITY = {};
var PATH_OR_AUTHORITY = {};
var RELATIVE = {};
var RELATIVE_SLASH = {};
var SPECIAL_AUTHORITY_SLASHES = {};
var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
var AUTHORITY = {};
var HOST = {};
var HOSTNAME = {};
var PORT = {};
var FILE = {};
var FILE_SLASH = {};
var FILE_HOST = {};
var PATH_START = {};
var PATH = {};
var CANNOT_BE_A_BASE_URL_PATH = {};
var QUERY = {};
var FRAGMENT = {};

// eslint-disable-next-line max-statements -- TODO
var parseURL = function (url, input, stateOverride, base) {
  var state = stateOverride || SCHEME_START;
  var pointer = 0;
  var buffer = '';
  var seenAt = false;
  var seenBracket = false;
  var seenPasswordToken = false;
  var codePoints, char, bufferCodePoints, failure;

  if (!stateOverride) {
    url.scheme = '';
    url.username = '';
    url.password = '';
    url.host = null;
    url.port = null;
    url.path = [];
    url.query = null;
    url.fragment = null;
    url.cannotBeABaseURL = false;
    input = input.replace(LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
  }

  input = input.replace(TAB_AND_NEW_LINE, '');

  codePoints = arrayFrom(input);

  while (pointer <= codePoints.length) {
    char = codePoints[pointer];
    switch (state) {
      case SCHEME_START:
        if (char && ALPHA.test(char)) {
          buffer += char.toLowerCase();
          state = SCHEME;
        } else if (!stateOverride) {
          state = NO_SCHEME;
          continue;
        } else return INVALID_SCHEME;
        break;

      case SCHEME:
        if (char && (ALPHANUMERIC.test(char) || char == '+' || char == '-' || char == '.')) {
          buffer += char.toLowerCase();
        } else if (char == ':') {
          if (stateOverride && (
            (isSpecial(url) != has(specialSchemes, buffer)) ||
            (buffer == 'file' && (includesCredentials(url) || url.port !== null)) ||
            (url.scheme == 'file' && !url.host)
          )) return;
          url.scheme = buffer;
          if (stateOverride) {
            if (isSpecial(url) && specialSchemes[url.scheme] == url.port) url.port = null;
            return;
          }
          buffer = '';
          if (url.scheme == 'file') {
            state = FILE;
          } else if (isSpecial(url) && base && base.scheme == url.scheme) {
            state = SPECIAL_RELATIVE_OR_AUTHORITY;
          } else if (isSpecial(url)) {
            state = SPECIAL_AUTHORITY_SLASHES;
          } else if (codePoints[pointer + 1] == '/') {
            state = PATH_OR_AUTHORITY;
            pointer++;
          } else {
            url.cannotBeABaseURL = true;
            url.path.push('');
            state = CANNOT_BE_A_BASE_URL_PATH;
          }
        } else if (!stateOverride) {
          buffer = '';
          state = NO_SCHEME;
          pointer = 0;
          continue;
        } else return INVALID_SCHEME;
        break;

      case NO_SCHEME:
        if (!base || (base.cannotBeABaseURL && char != '#')) return INVALID_SCHEME;
        if (base.cannotBeABaseURL && char == '#') {
          url.scheme = base.scheme;
          url.path = base.path.slice();
          url.query = base.query;
          url.fragment = '';
          url.cannotBeABaseURL = true;
          state = FRAGMENT;
          break;
        }
        state = base.scheme == 'file' ? FILE : RELATIVE;
        continue;

      case SPECIAL_RELATIVE_OR_AUTHORITY:
        if (char == '/' && codePoints[pointer + 1] == '/') {
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          pointer++;
        } else {
          state = RELATIVE;
          continue;
        } break;

      case PATH_OR_AUTHORITY:
        if (char == '/') {
          state = AUTHORITY;
          break;
        } else {
          state = PATH;
          continue;
        }

      case RELATIVE:
        url.scheme = base.scheme;
        if (char == EOF) {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = base.query;
        } else if (char == '/' || (char == '\\' && isSpecial(url))) {
          state = RELATIVE_SLASH;
        } else if (char == '?') {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = '';
          state = QUERY;
        } else if (char == '#') {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = base.query;
          url.fragment = '';
          state = FRAGMENT;
        } else {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.path.pop();
          state = PATH;
          continue;
        } break;

      case RELATIVE_SLASH:
        if (isSpecial(url) && (char == '/' || char == '\\')) {
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
        } else if (char == '/') {
          state = AUTHORITY;
        } else {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          state = PATH;
          continue;
        } break;

      case SPECIAL_AUTHORITY_SLASHES:
        state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
        if (char != '/' || buffer.charAt(pointer + 1) != '/') continue;
        pointer++;
        break;

      case SPECIAL_AUTHORITY_IGNORE_SLASHES:
        if (char != '/' && char != '\\') {
          state = AUTHORITY;
          continue;
        } break;

      case AUTHORITY:
        if (char == '@') {
          if (seenAt) buffer = '%40' + buffer;
          seenAt = true;
          bufferCodePoints = arrayFrom(buffer);
          for (var i = 0; i < bufferCodePoints.length; i++) {
            var codePoint = bufferCodePoints[i];
            if (codePoint == ':' && !seenPasswordToken) {
              seenPasswordToken = true;
              continue;
            }
            var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
            if (seenPasswordToken) url.password += encodedCodePoints;
            else url.username += encodedCodePoints;
          }
          buffer = '';
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url))
        ) {
          if (seenAt && buffer == '') return INVALID_AUTHORITY;
          pointer -= arrayFrom(buffer).length + 1;
          buffer = '';
          state = HOST;
        } else buffer += char;
        break;

      case HOST:
      case HOSTNAME:
        if (stateOverride && url.scheme == 'file') {
          state = FILE_HOST;
          continue;
        } else if (char == ':' && !seenBracket) {
          if (buffer == '') return INVALID_HOST;
          failure = parseHost(url, buffer);
          if (failure) return failure;
          buffer = '';
          state = PORT;
          if (stateOverride == HOSTNAME) return;
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url))
        ) {
          if (isSpecial(url) && buffer == '') return INVALID_HOST;
          if (stateOverride && buffer == '' && (includesCredentials(url) || url.port !== null)) return;
          failure = parseHost(url, buffer);
          if (failure) return failure;
          buffer = '';
          state = PATH_START;
          if (stateOverride) return;
          continue;
        } else {
          if (char == '[') seenBracket = true;
          else if (char == ']') seenBracket = false;
          buffer += char;
        } break;

      case PORT:
        if (DIGIT.test(char)) {
          buffer += char;
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url)) ||
          stateOverride
        ) {
          if (buffer != '') {
            var port = parseInt(buffer, 10);
            if (port > 0xFFFF) return INVALID_PORT;
            url.port = (isSpecial(url) && port === specialSchemes[url.scheme]) ? null : port;
            buffer = '';
          }
          if (stateOverride) return;
          state = PATH_START;
          continue;
        } else return INVALID_PORT;
        break;

      case FILE:
        url.scheme = 'file';
        if (char == '/' || char == '\\') state = FILE_SLASH;
        else if (base && base.scheme == 'file') {
          if (char == EOF) {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = base.query;
          } else if (char == '?') {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = '';
            state = QUERY;
          } else if (char == '#') {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = base.query;
            url.fragment = '';
            state = FRAGMENT;
          } else {
            if (!startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
              url.host = base.host;
              url.path = base.path.slice();
              shortenURLsPath(url);
            }
            state = PATH;
            continue;
          }
        } else {
          state = PATH;
          continue;
        } break;

      case FILE_SLASH:
        if (char == '/' || char == '\\') {
          state = FILE_HOST;
          break;
        }
        if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
          if (isWindowsDriveLetter(base.path[0], true)) url.path.push(base.path[0]);
          else url.host = base.host;
        }
        state = PATH;
        continue;

      case FILE_HOST:
        if (char == EOF || char == '/' || char == '\\' || char == '?' || char == '#') {
          if (!stateOverride && isWindowsDriveLetter(buffer)) {
            state = PATH;
          } else if (buffer == '') {
            url.host = '';
            if (stateOverride) return;
            state = PATH_START;
          } else {
            failure = parseHost(url, buffer);
            if (failure) return failure;
            if (url.host == 'localhost') url.host = '';
            if (stateOverride) return;
            buffer = '';
            state = PATH_START;
          } continue;
        } else buffer += char;
        break;

      case PATH_START:
        if (isSpecial(url)) {
          state = PATH;
          if (char != '/' && char != '\\') continue;
        } else if (!stateOverride && char == '?') {
          url.query = '';
          state = QUERY;
        } else if (!stateOverride && char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          state = PATH;
          if (char != '/') continue;
        } break;

      case PATH:
        if (
          char == EOF || char == '/' ||
          (char == '\\' && isSpecial(url)) ||
          (!stateOverride && (char == '?' || char == '#'))
        ) {
          if (isDoubleDot(buffer)) {
            shortenURLsPath(url);
            if (char != '/' && !(char == '\\' && isSpecial(url))) {
              url.path.push('');
            }
          } else if (isSingleDot(buffer)) {
            if (char != '/' && !(char == '\\' && isSpecial(url))) {
              url.path.push('');
            }
          } else {
            if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
              if (url.host) url.host = '';
              buffer = buffer.charAt(0) + ':'; // normalize windows drive letter
            }
            url.path.push(buffer);
          }
          buffer = '';
          if (url.scheme == 'file' && (char == EOF || char == '?' || char == '#')) {
            while (url.path.length > 1 && url.path[0] === '') {
              url.path.shift();
            }
          }
          if (char == '?') {
            url.query = '';
            state = QUERY;
          } else if (char == '#') {
            url.fragment = '';
            state = FRAGMENT;
          }
        } else {
          buffer += percentEncode(char, pathPercentEncodeSet);
        } break;

      case CANNOT_BE_A_BASE_URL_PATH:
        if (char == '?') {
          url.query = '';
          state = QUERY;
        } else if (char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          url.path[0] += percentEncode(char, C0ControlPercentEncodeSet);
        } break;

      case QUERY:
        if (!stateOverride && char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          if (char == "'" && isSpecial(url)) url.query += '%27';
          else if (char == '#') url.query += '%23';
          else url.query += percentEncode(char, C0ControlPercentEncodeSet);
        } break;

      case FRAGMENT:
        if (char != EOF) url.fragment += percentEncode(char, fragmentPercentEncodeSet);
        break;
    }

    pointer++;
  }
};

// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var URLConstructor = function URL(url /* , base */) {
  var that = anInstance(this, URLConstructor, 'URL');
  var base = arguments.length > 1 ? arguments[1] : undefined;
  var urlString = String(url);
  var state = setInternalState(that, { type: 'URL' });
  var baseState, failure;
  if (base !== undefined) {
    if (base instanceof URLConstructor) baseState = getInternalURLState(base);
    else {
      failure = parseURL(baseState = {}, String(base));
      if (failure) throw TypeError(failure);
    }
  }
  failure = parseURL(state, urlString, null, baseState);
  if (failure) throw TypeError(failure);
  var searchParams = state.searchParams = new URLSearchParams();
  var searchParamsState = getInternalSearchParamsState(searchParams);
  searchParamsState.updateSearchParams(state.query);
  searchParamsState.updateURL = function () {
    state.query = String(searchParams) || null;
  };
  if (!DESCRIPTORS) {
    that.href = serializeURL.call(that);
    that.origin = getOrigin.call(that);
    that.protocol = getProtocol.call(that);
    that.username = getUsername.call(that);
    that.password = getPassword.call(that);
    that.host = getHost.call(that);
    that.hostname = getHostname.call(that);
    that.port = getPort.call(that);
    that.pathname = getPathname.call(that);
    that.search = getSearch.call(that);
    that.searchParams = getSearchParams.call(that);
    that.hash = getHash.call(that);
  }
};

var URLPrototype = URLConstructor.prototype;

var serializeURL = function () {
  var url = getInternalURLState(this);
  var scheme = url.scheme;
  var username = url.username;
  var password = url.password;
  var host = url.host;
  var port = url.port;
  var path = url.path;
  var query = url.query;
  var fragment = url.fragment;
  var output = scheme + ':';
  if (host !== null) {
    output += '//';
    if (includesCredentials(url)) {
      output += username + (password ? ':' + password : '') + '@';
    }
    output += serializeHost(host);
    if (port !== null) output += ':' + port;
  } else if (scheme == 'file') output += '//';
  output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
  if (query !== null) output += '?' + query;
  if (fragment !== null) output += '#' + fragment;
  return output;
};

var getOrigin = function () {
  var url = getInternalURLState(this);
  var scheme = url.scheme;
  var port = url.port;
  if (scheme == 'blob') try {
    return new URLConstructor(scheme.path[0]).origin;
  } catch (error) {
    return 'null';
  }
  if (scheme == 'file' || !isSpecial(url)) return 'null';
  return scheme + '://' + serializeHost(url.host) + (port !== null ? ':' + port : '');
};

var getProtocol = function () {
  return getInternalURLState(this).scheme + ':';
};

var getUsername = function () {
  return getInternalURLState(this).username;
};

var getPassword = function () {
  return getInternalURLState(this).password;
};

var getHost = function () {
  var url = getInternalURLState(this);
  var host = url.host;
  var port = url.port;
  return host === null ? ''
    : port === null ? serializeHost(host)
    : serializeHost(host) + ':' + port;
};

var getHostname = function () {
  var host = getInternalURLState(this).host;
  return host === null ? '' : serializeHost(host);
};

var getPort = function () {
  var port = getInternalURLState(this).port;
  return port === null ? '' : String(port);
};

var getPathname = function () {
  var url = getInternalURLState(this);
  var path = url.path;
  return url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
};

var getSearch = function () {
  var query = getInternalURLState(this).query;
  return query ? '?' + query : '';
};

var getSearchParams = function () {
  return getInternalURLState(this).searchParams;
};

var getHash = function () {
  var fragment = getInternalURLState(this).fragment;
  return fragment ? '#' + fragment : '';
};

var accessorDescriptor = function (getter, setter) {
  return { get: getter, set: setter, configurable: true, enumerable: true };
};

if (DESCRIPTORS) {
  defineProperties(URLPrototype, {
    // `URL.prototype.href` accessors pair
    // https://url.spec.whatwg.org/#dom-url-href
    href: accessorDescriptor(serializeURL, function (href) {
      var url = getInternalURLState(this);
      var urlString = String(href);
      var failure = parseURL(url, urlString);
      if (failure) throw TypeError(failure);
      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
    }),
    // `URL.prototype.origin` getter
    // https://url.spec.whatwg.org/#dom-url-origin
    origin: accessorDescriptor(getOrigin),
    // `URL.prototype.protocol` accessors pair
    // https://url.spec.whatwg.org/#dom-url-protocol
    protocol: accessorDescriptor(getProtocol, function (protocol) {
      var url = getInternalURLState(this);
      parseURL(url, String(protocol) + ':', SCHEME_START);
    }),
    // `URL.prototype.username` accessors pair
    // https://url.spec.whatwg.org/#dom-url-username
    username: accessorDescriptor(getUsername, function (username) {
      var url = getInternalURLState(this);
      var codePoints = arrayFrom(String(username));
      if (cannotHaveUsernamePasswordPort(url)) return;
      url.username = '';
      for (var i = 0; i < codePoints.length; i++) {
        url.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    }),
    // `URL.prototype.password` accessors pair
    // https://url.spec.whatwg.org/#dom-url-password
    password: accessorDescriptor(getPassword, function (password) {
      var url = getInternalURLState(this);
      var codePoints = arrayFrom(String(password));
      if (cannotHaveUsernamePasswordPort(url)) return;
      url.password = '';
      for (var i = 0; i < codePoints.length; i++) {
        url.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    }),
    // `URL.prototype.host` accessors pair
    // https://url.spec.whatwg.org/#dom-url-host
    host: accessorDescriptor(getHost, function (host) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      parseURL(url, String(host), HOST);
    }),
    // `URL.prototype.hostname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hostname
    hostname: accessorDescriptor(getHostname, function (hostname) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      parseURL(url, String(hostname), HOSTNAME);
    }),
    // `URL.prototype.port` accessors pair
    // https://url.spec.whatwg.org/#dom-url-port
    port: accessorDescriptor(getPort, function (port) {
      var url = getInternalURLState(this);
      if (cannotHaveUsernamePasswordPort(url)) return;
      port = String(port);
      if (port == '') url.port = null;
      else parseURL(url, port, PORT);
    }),
    // `URL.prototype.pathname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-pathname
    pathname: accessorDescriptor(getPathname, function (pathname) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      url.path = [];
      parseURL(url, pathname + '', PATH_START);
    }),
    // `URL.prototype.search` accessors pair
    // https://url.spec.whatwg.org/#dom-url-search
    search: accessorDescriptor(getSearch, function (search) {
      var url = getInternalURLState(this);
      search = String(search);
      if (search == '') {
        url.query = null;
      } else {
        if ('?' == search.charAt(0)) search = search.slice(1);
        url.query = '';
        parseURL(url, search, QUERY);
      }
      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
    }),
    // `URL.prototype.searchParams` getter
    // https://url.spec.whatwg.org/#dom-url-searchparams
    searchParams: accessorDescriptor(getSearchParams),
    // `URL.prototype.hash` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hash
    hash: accessorDescriptor(getHash, function (hash) {
      var url = getInternalURLState(this);
      hash = String(hash);
      if (hash == '') {
        url.fragment = null;
        return;
      }
      if ('#' == hash.charAt(0)) hash = hash.slice(1);
      url.fragment = '';
      parseURL(url, hash, FRAGMENT);
    })
  });
}

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
redefine(URLPrototype, 'toJSON', function toJSON() {
  return serializeURL.call(this);
}, { enumerable: true });

// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
redefine(URLPrototype, 'toString', function toString() {
  return serializeURL.call(this);
}, { enumerable: true });

if (NativeURL) {
  var nativeCreateObjectURL = NativeURL.createObjectURL;
  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
  // `URL.createObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  if (nativeCreateObjectURL) redefine(URLConstructor, 'createObjectURL', function createObjectURL(blob) {
    return nativeCreateObjectURL.apply(NativeURL, arguments);
  });
  // `URL.revokeObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  if (nativeRevokeObjectURL) redefine(URLConstructor, 'revokeObjectURL', function revokeObjectURL(url) {
    return nativeRevokeObjectURL.apply(NativeURL, arguments);
  });
}

setToStringTag(URLConstructor, 'URL');

$({ global: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {
  URL: URLConstructor
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.url.to-json.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/web.url.to-json.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
$({ target: 'URL', proto: true, enumerable: true }, {
  toJSON: function toJSON() {
    return URL.prototype.toString.call(this);
  }
});


/***/ }),

/***/ "./node_modules/eventemitter3/index.js":
/*!*********************************************!*\
  !*** ./node_modules/eventemitter3/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ "./node_modules/lodash.clonedeep/index.js":
/*!************************************************!*\
  !*** ./node_modules/lodash.clonedeep/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash.merge/index.js":
/*!********************************************!*\
  !*** ./node_modules/lodash.merge/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeMax = Math.max,
    nativeNow = Date.now;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = merge;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./template/js/admin.js":
/*!******************************!*\
  !*** ./template/js/admin.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/config */ "./template/js/lib/config.js");
/* harmony import */ var _ecomplus_storefront_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ecomplus/storefront-router */ "./node_modules/@ecomplus/storefront-router/src/index.js");
/* harmony import */ var _netlify_cms_init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./netlify-cms/init */ "./template/js/netlify-cms/init.js");



document.title = `Admin ~ ${document.title}`;
const state = {};
new _ecomplus_storefront_router__WEBPACK_IMPORTED_MODULE_1__["default"]().list().then(routes => {
  state.routes = routes;
}).catch(err => {
  console.error(err);
  state.routes = [];
}).finally(() => {
  if (window.PKG_BASE_DIR === undefined) {
    window.PKG_BASE_DIR = '';
  }

  Object(_netlify_cms_init__WEBPACK_IMPORTED_MODULE_2__["default"])(window.CMS_CUSTOM_CONFIG, {
    baseDir: window.PKG_BASE_DIR,
    state
  }).then(config => {
    document.querySelector('#nc-root > div > section > button').innerHTML = "Acessar Editor de Loja";
    console.log('Netlify CMS config:', config);
  });
});

/***/ }),

/***/ "./template/js/lib/config.js":
/*!***********************************!*\
  !*** ./template/js/lib/config.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emitter */ "./template/js/lib/emitter.js");


const {
  $ecomConfig
} = _ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__["default"];
['store_id', 'lang', 'currency', 'currency_symbol', 'country_code'].forEach(prop => {
  $ecomConfig.set(prop, window._settings[prop]);
});
const {
  ECOM_CONFIG
} = window;

if (ECOM_CONFIG) {
  for (const prop in ECOM_CONFIG) {
    if (ECOM_CONFIG[prop]) {
      $ecomConfig.set(prop, ECOM_CONFIG[prop]);
    }
  }
}

console.log(`Store ID: #${$ecomConfig.get('store_id')}`);
window.ecomUtils = _ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__["default"];
window.storefront = {
  settings: window._settings,
  info: window._info,
  widgets: window._widgets,
  context: window._context,
  data: window._data,
  ..._emitter__WEBPACK_IMPORTED_MODULE_1__["events"]
};
window.privacyPolicyUrl = '/pages/privacidade';

/***/ }),

/***/ "./template/js/lib/emitter.js":
/*!************************************!*\
  !*** ./template/js/lib/emitter.js ***!
  \************************************/
/*! exports provided: default, events, emitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "events", function() { return events; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emitter", function() { return emitter; });
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);

const emitter = new eventemitter3__WEBPACK_IMPORTED_MODULE_0__();
/* harmony default export */ __webpack_exports__["default"] = (emitter);
window.EventEmitter = eventemitter3__WEBPACK_IMPORTED_MODULE_0__;
const events = {};
['on', 'off', 'once'].forEach(method => {
  events[method] = (ev, fn) => {
    emitter[method](ev, fn);
  };
});
window._events = events;


/***/ }),

/***/ "./template/js/netlify-cms/base-config/collections/blog-posts.js":
/*!***********************************************************************!*\
  !*** ./template/js/netlify-cms/base-config/collections/blog-posts.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (({
  baseDir,
  sections
}) => ({
  name: 'blog-posts',
  label: 'Posts do blog',
  description: 'Posts para o blog da loja com conteúdo atrativo para o seu público',
  folder: `${baseDir}content/posts`,
  extension: 'json',
  create: true,
  slug: '{{slug}}',
  fields: [{
    label: 'Título',
    name: 'title',
    widget: 'string'
  }, {
    label: 'Data de publicação',
    name: 'date',
    widget: 'datetime',
    required: false
  }, {
    label: 'Imagem em destaque',
    name: 'thumbnail',
    widget: 'image',
    required: false,
    hint: 'Sugerimos 900px como largura máxima'
  }, {
    label: 'Descrição curta',
    name: 'description',
    widget: 'text',
    required: false
  }, {
    label: 'Corpo',
    name: 'body',
    widget: 'markdown',
    required: false
  }, {
    label: 'Meta title',
    name: 'meta_title',
    widget: 'string',
    hint: 'Título exibido na aba do navegador e nos resultados de motores de busca, relevante para SEO',
    required: false
  }, {
    label: 'Meta description',
    name: 'meta_description',
    widget: 'string',
    hint: 'Descrição exibida nos resultados de motores de busca, relevante para SEO',
    required: false
  }, {
    label: 'Seções',
    name: 'sections',
    required: false,
    hint: 'Por padrão o layout será composto por breadcrumbs, título e corpo do post',
    widget: 'list',
    types: [{
      label: 'Corpo do post',
      name: 'blog-post',
      widget: 'object',
      fields: [{
        label: 'Exibir conteúdo do post',
        name: 'enabled',
        widget: 'boolean',
        default: true
      }]
    }].concat(sections)
  }]
}));

/***/ }),

/***/ "./template/js/netlify-cms/base-config/collections/extra-pages.js":
/*!************************************************************************!*\
  !*** ./template/js/netlify-cms/base-config/collections/extra-pages.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (({
  baseDir,
  sections
}) => ({
  name: 'extra-pages',
  label: 'Páginas adicionais',
  description: 'Crie páginas sobre a sua marca e assuntos importantes como: Quem Somos, Como comprar, Trocas e Devoluções, Perguntas Frequentes, Política de Privacidade e outros assuntos importantes.',
  folder: `${baseDir}content/pages`,
  extension: 'json',
  create: true,
  slug: '{{slug}}',
  fields: [{
    label: 'Título',
    name: 'title',
    widget: 'string'
  }, {
    label: 'Corpo',
    name: 'body',
    widget: 'markdown'
  }, {
    label: 'Meta title',
    name: 'meta_title',
    widget: 'string',
    hint: 'Título exibido na aba do navegador e nos resultados de motores de busca, relevante para SEO',
    required: false
  }, {
    label: 'Meta description',
    name: 'meta_description',
    widget: 'string',
    hint: 'Descrição exibida nos resultados de motores de busca, relevante para SEO',
    required: false
  }, {
    label: 'Seções',
    name: 'sections',
    required: false,
    hint: 'Por padrão o layout será composto por breadcrumbs, título e corpo da página',
    widget: 'list',
    types: [{
      label: 'Corpo do página',
      name: 'extra-page',
      widget: 'object',
      fields: [{
        label: 'Exibir conteúdo da página',
        name: 'enabled',
        widget: 'boolean',
        default: true
      }]
    }].concat(sections)
  }]
}));

/***/ }),

/***/ "./template/js/netlify-cms/base-config/collections/layout.js":
/*!*******************************************************************!*\
  !*** ./template/js/netlify-cms/base-config/collections/layout.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/header */ "./template/js/netlify-cms/base-config/collections/layout/header.js");
/* harmony import */ var _layout_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/menu */ "./template/js/netlify-cms/base-config/collections/layout/menu.js");
/* harmony import */ var _layout_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/footer */ "./template/js/netlify-cms/base-config/collections/layout/footer.js");
/* harmony import */ var _layout_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/code */ "./template/js/netlify-cms/base-config/collections/layout/code.js");




/* harmony default export */ __webpack_exports__["default"] = (options => ({
  name: 'layout',
  label: 'Layout Base',
  description: 'Layout base para todas as páginas',
  delete: false,
  editor: {
    preview: false
  },
  files: [Object(_layout_header__WEBPACK_IMPORTED_MODULE_0__["default"])(options), Object(_layout_menu__WEBPACK_IMPORTED_MODULE_1__["default"])(options), Object(_layout_footer__WEBPACK_IMPORTED_MODULE_2__["default"])(options), Object(_layout_code__WEBPACK_IMPORTED_MODULE_3__["default"])(options)]
}));

/***/ }),

/***/ "./template/js/netlify-cms/base-config/collections/layout/code.js":
/*!************************************************************************!*\
  !*** ./template/js/netlify-cms/base-config/collections/layout/code.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (({
  baseDir
}) => ({
  name: 'code',
  editor: {
    preview: false
  },
  label: 'Inserir código',
  file: `${baseDir}content/code.json`,
  fields: [{
    label: 'HTML antes de </head>',
    required: false,
    name: 'html_head',
    widget: 'code',
    hint: 'Pode ser usado para linkar CSS externo ou criar meta tags',
    default_language: 'html',
    output_code_only: true
  }, {
    label: 'HTML antes de </body>',
    required: false,
    name: 'html_body',
    widget: 'code',
    hint: 'Pode ser usado para importar JS externo ou inserir HTML depois do rodapé e créditos',
    default_language: 'html',
    output_code_only: true
  }, {
    label: 'CSS customizado',
    required: false,
    name: 'css',
    widget: 'code',
    hint: 'Também é possível adicionar/editar SCSS no GitHub em `template/scss`',
    default_language: 'css',
    output_code_only: true
  }]
}));

/***/ }),

/***/ "./template/js/netlify-cms/base-config/collections/layout/footer.js":
/*!**************************************************************************!*\
  !*** ./template/js/netlify-cms/base-config/collections/layout/footer.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (({
  baseDir
}) => ({
  name: 'footer',
  label: 'Rodapé',
  file: `${baseDir}content/footer.json`,
  fields: [{
    label: 'Descrição',
    name: 'description',
    widget: 'object',
    fields: [{
      label: 'Título',
      hint: 'Em destaque, dentro de uma tag H2',
      required: false,
      name: 'title',
      widget: 'string'
    }, {
      label: 'Texto',
      required: false,
      name: 'text',
      widget: 'string'
    }]
  }, {
    label: 'Lista de links 1',
    name: 'links_1',
    widget: 'object',
    hint: 'Lista de links normalmente utilizada para exibir páginas como, Sobre nós e Política de privacidade',
    fields: [{
      label: 'Listar páginas',
      hint: 'Ativar para listar as páginas extra automáticamente',
      name: 'list_pages',
      widget: 'boolean',
      default: true
    }, {
      label: 'Título',
      required: false,
      name: 'title',
      widget: 'string',
      default: 'Quem somos'
    }, {
      label: 'Links',
      name: 'list',
      widget: 'list',
      fields: [{
        label: 'Texto',
        required: false,
        name: 'text',
        widget: 'string'
      }, {
        label: 'URL',
        required: false,
        name: 'url',
        widget: 'string'
      }]
    }]
  }, {
    label: 'Lista de links 2',
    name: 'links_2',
    widget: 'object',
    hint: 'Lista adicional de links, para exibir páginas',
    fields: [{
      label: 'Listar categorias',
      hint: 'Ativar para listar as categorias da loja automáticamente',
      name: 'list_categories',
      widget: 'boolean',
      default: true
    }, {
      label: 'Título',
      required: false,
      name: 'title',
      widget: 'string'
    }, {
      label: 'Links',
      name: 'list',
      widget: 'list',
      fields: [{
        label: 'Texto',
        required: false,
        name: 'text',
        widget: 'string'
      }, {
        label: 'URL',
        required: false,
        name: 'url',
        widget: 'string'
      }]
    }]
  }, {
    label: 'Contatos',
    name: 'contacts',
    widget: 'object',
    hint: 'Contatos da loja',
    fields: [{
      label: 'Título',
      required: false,
      name: 'title',
      widget: 'string',
      default: 'Fale conosco'
    }, {
      label: 'Mostrar telefone e whatsapp',
      name: 'phone_wpp',
      required: false,
      widget: 'boolean'
    }, {
      label: 'Mostar email',
      required: false,
      name: 'email',
      widget: 'boolean'
    }, {
      label: 'Mostrar redes  sociais',
      name: 'socials',
      required: false,
      widget: 'boolean'
    }]
  }, {
    label: 'Selos',
    name: 'stamps',
    widget: 'list',
    fields: [{
      label: 'Imagem',
      required: false,
      name: 'src',
      widget: 'image'
    }, {
      label: 'alt',
      required: false,
      name: 'alt',
      widget: 'string'
    }, {
      label: 'Link',
      required: false,
      name: 'link',
      widget: 'string'
    }]
  }, {
    label: 'Créditos',
    name: 'credits',
    widget: 'string',
    required: false
  }]
}));

/***/ }),

/***/ "./template/js/netlify-cms/base-config/collections/layout/header.js":
/*!**************************************************************************!*\
  !*** ./template/js/netlify-cms/base-config/collections/layout/header.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (({
  baseDir,
  state
}) => ({
  name: 'header',
  label: 'Cabeçalho',
  file: `${baseDir}content/header.json`,
  fields: [{
    label: 'Tarja de marketing',
    name: 'marketing_stripe',
    widget: 'object',
    hint: 'Tarja com anúncio em destaque no topo da loja',
    fields: [{
      label: 'Texto',
      name: 'text',
      required: false,
      widget: 'string'
    }, {
      label: 'Link',
      name: 'link',
      required: false,
      widget: 'string'
    }, {
      label: 'Cor de fundo',
      name: 'background',
      required: false,
      widget: 'color',
      hint: 'A cor primária da loja é usada por padrão'
    }, {
      label: 'Cor da fonte',
      name: 'color',
      required: false,
      widget: 'color'
    }]
  }, {
    label: 'Barra de contatos',
    name: 'contacts_stripe',
    widget: 'object',
    hint: 'Informações de contato, redes sociais e páginas institucionais importantes',
    fields: [{
      label: 'Páginas',
      name: 'pages',
      widget: 'list',
      fields: [{
        label: 'Título',
        name: 'title',
        required: false,
        widget: 'string'
      }, {
        label: 'Link',
        name: 'link',
        required: false,
        widget: 'string'
      }]
    }, {
      label: 'Mostrar telefone e WhatsApp',
      name: 'phone_wpp',
      widget: 'boolean'
    }, {
      label: 'Mostrar redes sociais',
      name: 'socials',
      widget: 'boolean'
    }]
  }, {
    label: 'Lista de categorias',
    name: 'categories_list',
    widget: 'object',
    hint: 'Categorias em destaque exibidas diretamente no cabeçalho',
    fields: [{
      label: 'Categorias selecionadas',
      name: 'featured',
      widget: 'list',
      field: {
        label: 'Categoria/coleção/marca',
        name: 'path',
        widget: 'select',
        options: state.routes.filter(({
          resource,
          name
        }) => Boolean(resource !== 'products' && name)).map(({
          name,
          path
        }) => ({
          label: name,
          value: `${path}?${name}`
        }))
      }
    }, {
      label: 'Categorias aleatórias',
      name: 'random',
      widget: 'number',
      min: 0,
      max: 20,
      hint: 'Máximo de categorias em primeiro nível escolhidas randomicamente'
    }, {
      label: 'Exibir em largura total',
      name: 'full_width',
      widget: 'boolean',
      default: true
    }]
  }, {
    label: 'Mostrar input de busca',
    name: 'search_input',
    widget: 'boolean'
  }]
}));

/***/ }),

/***/ "./template/js/netlify-cms/base-config/collections/layout/menu.js":
/*!************************************************************************!*\
  !*** ./template/js/netlify-cms/base-config/collections/layout/menu.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (({
  baseDir,
  state
}) => ({
  name: 'menu',
  label: 'Menu lateral',
  file: `${baseDir}content/menu.json`,
  fields: [{
    label: 'Categorias principais',
    name: 'sort_categories',
    widget: 'list',
    hint: 'Ordenar categorias em primeiro nível',
    field: {
      label: 'Categoria',
      name: 'slug',
      widget: 'select',
      options: state.routes.filter(({
        resource,
        name
      }) => resource === 'categories').map(({
        name,
        path
      }) => ({
        label: name,
        value: path.slice(1)
      }))
    }
  }, {
    label: 'Ordem alfabética',
    name: 'alphabetical_order',
    widget: 'boolean'
  }, {
    label: 'Mostrar telefone ou WhatsApp',
    name: 'phone_wpp',
    widget: 'boolean'
  }, {
    label: 'Mostrar redes sociais',
    name: 'socials',
    widget: 'boolean'
  }]
}));

/***/ }),

/***/ "./template/js/netlify-cms/base-config/collections/pages.js":
/*!******************************************************************!*\
  !*** ./template/js/netlify-cms/base-config/collections/pages.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ "./template/js/netlify-cms/base-config/collections/pages/home.js");
/* harmony import */ var _pages_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/products */ "./template/js/netlify-cms/base-config/collections/pages/products.js");
/* harmony import */ var _pages_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/search */ "./template/js/netlify-cms/base-config/collections/pages/search.js");
/* harmony import */ var _pages_brands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/brands */ "./template/js/netlify-cms/base-config/collections/pages/brands.js");
/* harmony import */ var _pages_categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/categories */ "./template/js/netlify-cms/base-config/collections/pages/categories.js");
/* harmony import */ var _pages_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/collections */ "./template/js/netlify-cms/base-config/collections/pages/collections.js");
/* harmony import */ var _pages_blog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/blog */ "./template/js/netlify-cms/base-config/collections/pages/blog.js");







/* harmony default export */ __webpack_exports__["default"] = (options => ({
  name: 'pages',
  label: 'Editor de Páginas',
  description: 'Capriche no visual e deixe a loja do jeitinho da sua marca. Adicione banners, vídeos, promoções, organize os produtos e muito mais.',
  delete: false,
  files: [Object(_pages_home__WEBPACK_IMPORTED_MODULE_0__["default"])(options), Object(_pages_products__WEBPACK_IMPORTED_MODULE_1__["default"])(options), Object(_pages_search__WEBPACK_IMPORTED_MODULE_2__["default"])(options), Object(_pages_brands__WEBPACK_IMPORTED_MODULE_3__["default"])(options), Object(_pages_categories__WEBPACK_IMPORTED_MODULE_4__["default"])(options), Object(_pages_collections__WEBPACK_IMPORTED_MODULE_5__["default"])(options)]
}));

/***/ }),

/***/ "./template/js/netlify-cms/base-config/collections/pages/blog.js":
/*!***********************************************************************!*\
  !*** ./template/js/netlify-cms/base-config/collections/pages/blog.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (({
  baseDir,
  sections
}) => ({
  name: 'blog',
  label: 'Blog',
  hint: 'Configuração geral da página do blog',
  file: `${baseDir}content/blog.json`,
  fields: [{
    label: 'Título do blog',
    name: 'title',
    widget: 'string'
  }, {
    label: 'Meta title',
    name: 'meta_title',
    widget: 'string',
    hint: 'Título exibido na aba do navegador e nos resultados de motores de busca, relevante para SEO',
    required: false
  }, {
    label: 'Meta description',
    name: 'meta_description',
    widget: 'string',
    hint: 'Descrição exibida nos resultados de motores de busca, relevante para SEO',
    required: false
  }, {
    label: 'Seções',
    name: 'sections',
    widget: 'list',
    types: sections
  }]
}));

/***/ }),

/***/ "./template/js/netlify-cms/base-config/collections/pages/brands.js":
/*!*************************************************************************!*\
  !*** ./template/js/netlify-cms/base-config/collections/pages/brands.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_retail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/retail */ "./template/js/netlify-cms/base-config/collections/pages/types/retail.js");

/* harmony default export */ __webpack_exports__["default"] = (({
  baseDir,
  sections
}) => ({
  name: 'brands',
  label: 'Marcas',
  hint: 'Configuração geral das páginas de marcas',
  file: `${baseDir}content/brands.json`,
  fields: [{
    label: 'Seções',
    name: 'sections',
    widget: 'list',
    types: [Object(_types_retail__WEBPACK_IMPORTED_MODULE_0__["default"])('brand', 'marca'), {
      label: 'Banner da marca',
      name: 'document-banner',
      widget: 'object',
      fields: [{
        label: 'Exibir banner da marca',
        name: 'enabled',
        widget: 'boolean',
        default: true
      }]
    }, {
      label: 'Descrição da marca',
      name: 'document-description',
      widget: 'object',
      fields: [{
        label: 'Exibir descrição HTML da marca',
        name: 'enabled',
        widget: 'boolean',
        default: true
      }]
    }].concat(sections.filter(({
      name
    }) => name !== 'collection-shelf'))
  }]
}));

/***/ }),

/***/ "./template/js/netlify-cms/base-config/collections/pages/categories.js":
/*!*****************************************************************************!*\
  !*** ./template/js/netlify-cms/base-config/collections/pages/categories.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_retail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/retail */ "./template/js/netlify-cms/base-config/collections/pages/types/retail.js");

/* harmony default export */ __webpack_exports__["default"] = (({
  baseDir,
  sections
}) => ({
  name: 'categories',
  label: 'Categorias',
  hint: 'Configuração geral das páginas de categorias',
  file: `${baseDir}content/categories.json`,
  fields: [{
    label: 'Seções',
    name: 'sections',
    widget: 'list',
    types: [Object(_types_retail__WEBPACK_IMPORTED_MODULE_0__["default"])('category', 'categoria'), {
      label: 'Banner da categoria',
      name: 'document-banner',
      widget: 'object',
      fields: [{
        label: 'Exibir banner da categoria',
        name: 'enabled',
        widget: 'boolean',
        default: true
      }]
    }, {
      label: 'Descrição da categoria',
      name: 'document-description',
      widget: 'object',
      fields: [{
        label: 'Exibir descrição HTML da categoria',
        name: 'enabled',
        widget: 'boolean',
        default: true
      }]
    }].concat(sections.filter(({
      name
    }) => name !== 'collection-shelf'))
  }]
}));

/***/ }),

/***/ "./template/js/netlify-cms/base-config/collections/pages/collections.js":
/*!******************************************************************************!*\
  !*** ./template/js/netlify-cms/base-config/collections/pages/collections.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_retail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/retail */ "./template/js/netlify-cms/base-config/collections/pages/types/retail.js");

/* harmony default export */ __webpack_exports__["default"] = (({
  baseDir,
  sections
}) => ({
  name: 'collections',
  label: 'Coleções',
  hint: 'Configuração geral das páginas de coleções',
  file: `${baseDir}content/collections.json`,
  fields: [{
    label: 'Seções',
    name: 'sections',
    widget: 'list',
    types: [Object(_types_retail__WEBPACK_IMPORTED_MODULE_0__["default"])('collection', 'coleção'), {
      label: 'Banner da coleção',
      name: 'document-banner',
      widget: 'object',
      fields: [{
        label: 'Exibir banner da coleção',
        name: 'enabled',
        widget: 'boolean',
        default: true
      }]
    }, {
      label: 'Descrição da coleção',
      name: 'document-description',
      widget: 'object',
      fields: [{
        label: 'Exibir descrição HTML da coleção',
        name: 'enabled',
        widget: 'boolean',
        default: true
      }]
    }].concat(sections)
  }]
}));

/***/ }),

/***/ "./template/js/netlify-cms/base-config/collections/pages/home.js":
/*!***********************************************************************!*\
  !*** ./template/js/netlify-cms/base-config/collections/pages/home.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (({
  baseDir,
  sections
}) => ({
  name: 'home',
  label: 'Página inicial',
  file: `${baseDir}content/home.json`,
  fields: [{
    label: 'Meta title',
    name: 'meta_title',
    widget: 'string',
    hint: 'Título exibido na aba do navegador e nos resultados de motores de busca, relevante para SEO',
    required: false
  }, {
    label: 'Meta description',
    name: 'meta_description',
    widget: 'string',
    hint: 'Descrição exibida nos resultados de motores de busca, relevante para SEO',
    required: false
  }, {
    label: 'Seções',
    name: 'sections',
    widget: 'list',
    types: sections
  }]
}));

/***/ }),

/***/ "./template/js/netlify-cms/base-config/collections/pages/products.js":
/*!***************************************************************************!*\
  !*** ./template/js/netlify-cms/base-config/collections/pages/products.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (({
  baseDir,
  sections
}) => ({
  name: 'products',
  label: 'Produtos',
  hint: 'Configuração geral das páginas de produtos',
  file: `${baseDir}content/products.json`,
  fields: [{
    label: 'Seções',
    name: 'sections',
    widget: 'list',
    types: [{
      label: 'Detalhes produto',
      name: 'product-block',
      widget: 'object',
      fields: [{
        label: 'Exibir informações do produto',
        name: 'enabled',
        widget: 'boolean',
        default: true
      }]
    }, {
      label: 'Descrição do produto',
      name: 'product-description',
      widget: 'object',
      fields: [{
        label: 'Exibir descrição HTML do produto',
        name: 'enabled',
        widget: 'boolean',
        default: true
      }]
    }, {
      label: 'Especificações do produto',
      name: 'product-specifications',
      widget: 'object',
      fields: [{
        label: 'Exibir especificações do produto',
        name: 'enabled',
        widget: 'boolean',
        default: true
      }]
    }, {
      label: 'Produtos relacionados',
      name: 'related-products',
      widget: 'object',
      fields: [{
        label: 'Título da estante de produtos',
        name: 'title',
        hint: 'Produtos relacionatos',
        widget: 'string'
      }]
    }, {
      label: 'Produtos recomendados',
      name: 'recommended-products',
      widget: 'object',
      fields: [{
        label: 'Título da estante de produtos',
        name: 'title',
        hint: 'Quem comprou este produto, também comprou:',
        widget: 'string'
      }]
    }, {
      label: 'Opiniões do produto',
      name: 'product-reviews',
      widget: 'object',
      fields: [{
        label: 'Exibir opiniões do produto',
        name: 'enabled',
        widget: 'boolean',
        default: true
      }]
    }].concat(sections)
  }]
}));

/***/ }),

/***/ "./template/js/netlify-cms/base-config/collections/pages/search.js":
/*!*************************************************************************!*\
  !*** ./template/js/netlify-cms/base-config/collections/pages/search.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (({
  baseDir,
  sections
}) => ({
  name: 'search',
  label: 'Busca',
  hint: 'Configuração geral das páginas de busca',
  file: `${baseDir}content/search.json`,
  fields: [{
    label: 'Seções',
    name: 'sections',
    widget: 'list',
    types: [{
      label: 'Motor de busca',
      name: 'search-engine',
      widget: 'object',
      fields: [{
        label: 'Exibir resultados da busca',
        name: 'enabled',
        widget: 'boolean',
        default: true
      }]
    }].concat(sections.filter(({
      name
    }) => name !== 'collection-shelf'))
  }]
}));

/***/ }),

/***/ "./template/js/netlify-cms/base-config/collections/pages/types/retail.js":
/*!*******************************************************************************!*\
  !*** ./template/js/netlify-cms/base-config/collections/pages/types/retail.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((docName, docTitle) => ({
  label: `Produtos da ${docTitle}`,
  name: `${docName}-retail`,
  widget: 'object',
  fields: [{
    label: `Listar produtos da ${docTitle}`,
    name: 'enabled',
    widget: 'boolean',
    default: true
  }, {
    label: 'Ordenação padrão',
    required: false,
    name: 'sort',
    widget: 'select',
    options: [{
      label: 'Relevância',
      value: 'views'
    }, {
      label: 'Mais vendidos',
      value: 'sales'
    }, {
      label: 'Lançamento',
      value: 'news'
    }, {
      label: 'Menor preço',
      value: 'lowest_price'
    }, {
      label: 'Maior preço',
      value: 'highest_price'
    }, {
      label: 'Alfabética (slug)',
      value: 'slug'
    }],
    default: 'sales'
  }]
}));

/***/ }),

/***/ "./template/js/netlify-cms/base-config/collections/settings.js":
/*!*********************************************************************!*\
  !*** ./template/js/netlify-cms/base-config/collections/settings.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings/general */ "./template/js/netlify-cms/base-config/collections/settings/general.js");
/* harmony import */ var _settings_contacts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings/contacts */ "./template/js/netlify-cms/base-config/collections/settings/contacts.js");
/* harmony import */ var _settings_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/info */ "./template/js/netlify-cms/base-config/collections/settings/info.js");
/* harmony import */ var _settings_social__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/social */ "./template/js/netlify-cms/base-config/collections/settings/social.js");




/* harmony default export */ __webpack_exports__["default"] = (options => ({
  name: 'settings',
  label: 'Configurações',
  description: 'Escolhe o nome e as cores da sua marca, insira o seu logo, dados de contato e turbine com suas redes sociais.',
  delete: false,
  editor: {
    preview: false
  },
  files: [Object(_settings_general__WEBPACK_IMPORTED_MODULE_0__["default"])(options), Object(_settings_contacts__WEBPACK_IMPORTED_MODULE_1__["default"])(options), Object(_settings_info__WEBPACK_IMPORTED_MODULE_2__["default"])(options), Object(_settings_social__WEBPACK_IMPORTED_MODULE_3__["default"])(options)]
}));

/***/ }),

/***/ "./template/js/netlify-cms/base-config/collections/settings/contacts.js":
/*!******************************************************************************!*\
  !*** ./template/js/netlify-cms/base-config/collections/settings/contacts.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (({
  baseDir
}) => ({
  name: 'contacts',
  file: `${baseDir}content/contacts.json`,
  label: 'Contatos & Redes Sociais',
  hint: 'Contatos da loja, exibidos em várias páginas',
  fields: [{
    label: 'E-mail',
    name: 'email',
    required: false,
    widget: 'string'
  }, {
    label: 'Telefone',
    name: 'phone',
    required: false,
    widget: 'string'
  }, {
    label: 'Endereço',
    name: 'address',
    required: false,
    widget: 'string'
  }, {
    label: 'CNPJ/CPF',
    name: 'doc_number',
    required: false,
    widget: 'string'
  }, {
    label: 'Whatsapp',
    name: 'whatsapp',
    required: false,
    widget: 'string'
  }, {
    label: 'Facebook',
    name: 'facebook',
    widget: 'string',
    required: false,
    hint: 'Preencha a url completa. Exemplo: https://www.facebook.com/ConfereCartoes'
  }, {
    label: 'Twitter',
    name: 'twitter',
    widget: 'string',
    required: false,
    hint: 'Preencha a url completa.'
  }, {
    label: 'Youtube',
    name: 'youtube',
    widget: 'string',
    required: false,
    hint: 'Preencha a url completa. Exemplo: https://www.youtube.com/channel/UCnbYV0scfPDh_02Q3_1Pmgg'
  }, {
    label: 'Instagram',
    name: 'instagram',
    widget: 'string',
    required: false,
    hint: 'Preencha a url completa. Exemplo: https://instagram.com/conferecartoes'
  }, {
    label: 'TikTok',
    name: 'tiktok',
    widget: 'string',
    required: false,
    hint: 'Preencha a url completa.'
  }, {
    label: 'Pinterest',
    name: 'pinterest',
    widget: 'string',
    required: false,
    hint: 'Preencha a url completa.'
  }, {
    label: 'LinkedIn',
    name: 'linkedin',
    widget: 'string',
    required: false,
    hint: 'Preencha a url completa. Exemplo: https://www.linkedin.com/company/confere-cartoes'
  }]
}));

/***/ }),

/***/ "./template/js/netlify-cms/base-config/collections/settings/general.js":
/*!*****************************************************************************!*\
  !*** ./template/js/netlify-cms/base-config/collections/settings/general.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (({
  baseDir
}) => ({
  name: 'general',
  label: 'Nome, Cores e Logos da Marca',
  file: `${baseDir}content/settings.json`,
  editor: {
    preview: true
  },
  fields: [{
    label: 'Nome da loja',
    name: 'name',
    widget: 'string'
  }, {
    label: 'Nome curto',
    name: 'short_name',
    widget: 'string',
    hint: 'Título do aplicativo quando instalado (PWA)'
  }, {
    label: 'Descrição curta',
    name: 'description',
    widget: 'text'
  }, {
    label: 'Cor primária',
    name: 'primary_color',
    widget: 'color'
  }, {
    label: 'Cor secundária',
    name: 'secondary_color',
    widget: 'color'
  }, {
    label: 'Tema',
    name: 'theme',
    widget: 'object',
    fields: [{
      label: 'Storefront',
      name: 'custom',
      widget: 'select',
      options: [{
        label: 'Storefront padrão',
        value: '_'
      }, {
        label: 'Clean: Branco',
        value: 'clean-white'
      }, {
        label: 'Clean: Escala de cinza',
        value: 'clean-gray'
      }, {
        label: 'Clean: Preto',
        value: 'clean-dark'
      }, {
        label: 'Nicho: Bebê',
        value: 'niche-baby'
      }, {
        label: 'Nicho: Flores',
        value: 'niche-flowers'
      }, {
        label: 'Nicho: Game',
        value: 'niche-game'
      }]
    }, {
      label: 'UI base',
      name: 'bootswatch',
      hint: 'Powered by https://bootswatch.com/',
      widget: 'select',
      options: [{
        label: 'Bootstrap padrão',
        value: '_'
      }, {
        label: 'Cerulean',
        value: 'cerulean'
      }, {
        label: 'Cosmo',
        value: 'cosmo'
      }, {
        label: 'Cyborg',
        value: 'cyborg'
      }, {
        label: 'Darkly',
        value: 'darkly'
      }, {
        label: 'Flatly',
        value: 'flatly'
      }, {
        label: 'Journal',
        value: 'journal'
      }, {
        label: 'Litera',
        value: 'litera'
      }, {
        label: 'Lumen',
        value: 'lumen'
      }, {
        label: 'Lux',
        value: 'lux'
      }, {
        label: 'Materia',
        value: 'materia'
      }, {
        label: 'Minty',
        value: 'minty'
      }, {
        label: 'Pulse',
        value: 'pulse'
      }, {
        label: 'Sandstone',
        value: 'sandstone'
      }, {
        label: 'Simplex',
        value: 'simplex'
      }, {
        label: 'Sketchy',
        value: 'sketchy'
      }, {
        label: 'Slate',
        value: 'slate'
      }, {
        label: 'Solar',
        value: 'solar'
      }, {
        label: 'Spacelab',
        value: 'spacelab'
      }, {
        label: 'United',
        value: 'united'
      }, {
        label: 'Yeti',
        value: 'yeti'
      }]
    }]
  }, {
    label: 'Logo',
    name: 'logo',
    widget: 'image',
    hint: 'Dimensões recomendadas: 300x100px (Logo retangular) ou 300x3000px (Logo quadrado)'
  }, {
    label: 'Ícone do app',
    name: 'icon',
    widget: 'image'
  }, {
    label: 'Ícone grande',
    name: 'large_icon',
    widget: 'image'
  }, {
    label: 'Favicon',
    name: 'favicon',
    widget: 'image'
  }]
}));

/***/ }),

/***/ "./template/js/netlify-cms/base-config/collections/settings/info.js":
/*!**************************************************************************!*\
  !*** ./template/js/netlify-cms/base-config/collections/settings/info.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (({
  baseDir
}) => ({
  label: 'Barra de informações',
  file: `${baseDir}content/info.json`,
  name: 'info',
  hint: 'Informações gerais da loja, exibidas em várias páginas',
  widget: 'object',
  fields: [{
    label: 'Frete',
    name: 'shipping',
    widget: 'object',
    fields: [{
      label: 'Texto',
      required: false,
      name: 'text',
      widget: 'string'
    }, {
      label: 'Link',
      required: false,
      name: 'link',
      widget: 'string'
    }, {
      label: 'Exibir na barra de informações',
      name: 'show',
      widget: 'boolean',
      default: true,
      required: false
    }]
  }, {
    label: 'Parcelamento',
    name: 'installments',
    widget: 'object',
    fields: [{
      label: 'Texto',
      required: false,
      name: 'text',
      widget: 'string'
    }, {
      label: 'Link',
      required: false,
      name: 'link',
      widget: 'string'
    }, {
      label: 'Exibir na barra de informações',
      name: 'show',
      widget: 'boolean',
      default: true,
      required: false
    }]
  }, {
    label: 'Trocas',
    name: 'exchange',
    widget: 'object',
    fields: [{
      label: 'Texto',
      required: false,
      name: 'text',
      widget: 'string'
    }, {
      label: 'Link',
      required: false,
      name: 'link',
      widget: 'string'
    }, {
      label: 'Exibir na barra de informações',
      name: 'show',
      widget: 'boolean',
      default: true,
      required: false
    }]
  }, {
    label: 'Promoção',
    name: 'promo',
    widget: 'object',
    fields: [{
      label: 'Texto',
      required: false,
      name: 'text',
      widget: 'string'
    }, {
      label: 'Link',
      required: false,
      name: 'link',
      widget: 'string'
    }, {
      label: 'Exibir na barra de informações',
      name: 'show',
      widget: 'boolean',
      default: true,
      required: false
    }]
  }]
}));

/***/ }),

/***/ "./template/js/netlify-cms/base-config/collections/settings/social.js":
/*!****************************************************************************!*\
  !*** ./template/js/netlify-cms/base-config/collections/settings/social.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (({
  baseDir
}) => ({
  name: 'social',
  file: `${baseDir}content/social.json`,
  label: 'Configurações Avançadas',
  hint: 'Configurações para compartilhamento da loja',
  fields: [{
    label: 'Imagem de compartilhamento',
    name: 'og_image',
    required: false,
    widget: 'image',
    hint: 'Imagem que é exibida quando o site é compartilhado'
  }]
}));

/***/ }),

/***/ "./template/js/netlify-cms/base-config/collections/widgets.js":
/*!********************************************************************!*\
  !*** ./template/js/netlify-cms/base-config/collections/widgets.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ecomplus_widget_product_card_cms_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ecomplus/widget-product-card/cms.config */ "./node_modules/@ecomplus/widget-product-card/cms.config.js");
/* harmony import */ var _ecomplus_widget_product_cms_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ecomplus/widget-product/cms.config */ "./node_modules/@ecomplus/widget-product/cms.config.js");
/* harmony import */ var _ecomplus_widget_search_engine_cms_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ecomplus/widget-search-engine/cms.config */ "./node_modules/@ecomplus/widget-search-engine/cms.config.js");
/* harmony import */ var _ecomplus_widget_search_cms_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ecomplus/widget-search/cms.config */ "./node_modules/@ecomplus/widget-search/cms.config.js");
/* harmony import */ var _ecomplus_widget_minicart_cms_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ecomplus/widget-minicart/cms.config */ "./node_modules/@ecomplus/widget-minicart/cms.config.js");
/* harmony import */ var _confere_stores_widget_avise_me_cms_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @confere-stores/widget-avise-me/cms.config */ "./node_modules/@confere-stores/widget-avise-me/cms.config.js");
/* harmony import */ var _ecomplus_widget_analytics_cms_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ecomplus/widget-analytics/cms.config */ "./node_modules/@ecomplus/widget-analytics/cms.config.js");
/* harmony import */ var _ecomplus_widget_fb_pixel_cms_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ecomplus/widget-fb-pixel/cms.config */ "./node_modules/@ecomplus/widget-fb-pixel/cms.config.js");
/* harmony import */ var _ecomplus_widget_tag_manager_cms_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ecomplus/widget-tag-manager/cms.config */ "./node_modules/@ecomplus/widget-tag-manager/cms.config.js");
/* harmony import */ var _ecomplus_widget_gmc_ratings_cms_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ecomplus/widget-gmc-ratings/cms.config */ "./node_modules/@ecomplus/widget-gmc-ratings/cms.config.js");
/* harmony import */ var _ecomplus_widget_tawkto_cms_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ecomplus/widget-tawkto/cms.config */ "./node_modules/@ecomplus/widget-tawkto/cms.config.js");
/* harmony import */ var _ecomplus_widget_trustvox_cms_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ecomplus/widget-trustvox/cms.config */ "./node_modules/@ecomplus/widget-trustvox/cms.config.js");
/* harmony import */ var _ecomplus_widget_ebit_cms_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ecomplus/widget-ebit/cms.config */ "./node_modules/@ecomplus/widget-ebit/cms.config.js");
/* harmony import */ var _ecomplus_widget_compre_confie_cms_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ecomplus/widget-compre-confie/cms.config */ "./node_modules/@ecomplus/widget-compre-confie/cms.config.js");
/* harmony import */ var _ecomplus_widget_opinioes_verificadas_cms_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ecomplus/widget-opinioes-verificadas/cms.config */ "./node_modules/@ecomplus/widget-opinioes-verificadas/cms.config.js");





 // import getWidgetOffersNotification from '@ecomplus/widget-offers-notification/cms.config'












const fixWidgetConfig = ({
  baseDir
}, getWidget) => {
  const baseConfig = getWidget();
  const pkgName = baseConfig.fields.find(({
    name
  }) => name === 'pkg').default;
  const name = pkgName.replace(/^(@ecomplus\/|storefront-)widget-/i, '');
  return { ...baseConfig,
    name,
    file: `${baseDir}content/widgets/${name}.json`
  };
};

/* harmony default export */ __webpack_exports__["default"] = (options => ({
  name: 'widgets',
  label: 'Extensões',
  description: 'Plugins, tags e componentes adicionais',
  delete: false,
  editor: {
    preview: false
  },
  files: [fixWidgetConfig(options, _ecomplus_widget_fb_pixel_cms_config__WEBPACK_IMPORTED_MODULE_8__["default"]), fixWidgetConfig(options, _ecomplus_widget_analytics_cms_config__WEBPACK_IMPORTED_MODULE_7__["default"]), fixWidgetConfig(options, _ecomplus_widget_tag_manager_cms_config__WEBPACK_IMPORTED_MODULE_9__["default"]), fixWidgetConfig(options, _ecomplus_widget_gmc_ratings_cms_config__WEBPACK_IMPORTED_MODULE_10__["default"]), fixWidgetConfig(options, _ecomplus_widget_tawkto_cms_config__WEBPACK_IMPORTED_MODULE_11__["default"]), fixWidgetConfig(options, _ecomplus_widget_trustvox_cms_config__WEBPACK_IMPORTED_MODULE_12__["default"]), fixWidgetConfig(options, _confere_stores_widget_avise_me_cms_config__WEBPACK_IMPORTED_MODULE_6__["default"]), fixWidgetConfig(options, _ecomplus_widget_ebit_cms_config__WEBPACK_IMPORTED_MODULE_13__["default"]), fixWidgetConfig(options, _ecomplus_widget_compre_confie_cms_config__WEBPACK_IMPORTED_MODULE_14__["default"]), fixWidgetConfig(options, _ecomplus_widget_opinioes_verificadas_cms_config__WEBPACK_IMPORTED_MODULE_15__["default"]), fixWidgetConfig(options, _ecomplus_widget_product_card_cms_config__WEBPACK_IMPORTED_MODULE_1__["default"]), fixWidgetConfig(options, _ecomplus_widget_product_cms_config__WEBPACK_IMPORTED_MODULE_2__["default"])]
}));

/***/ }),

/***/ "./template/js/netlify-cms/base-config/index.js":
/*!******************************************************!*\
  !*** ./template/js/netlify-cms/base-config/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections */ "./template/js/netlify-cms/base-config/sections.js");
/* harmony import */ var _collections_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collections/settings */ "./template/js/netlify-cms/base-config/collections/settings.js");
/* harmony import */ var _collections_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collections/layout */ "./template/js/netlify-cms/base-config/collections/layout.js");
/* harmony import */ var _collections_pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collections/pages */ "./template/js/netlify-cms/base-config/collections/pages.js");
/* harmony import */ var _collections_blog_posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./collections/blog-posts */ "./template/js/netlify-cms/base-config/collections/blog-posts.js");
/* harmony import */ var _collections_extra_pages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./collections/extra-pages */ "./template/js/netlify-cms/base-config/collections/extra-pages.js");
/* harmony import */ var _collections_widgets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./collections/widgets */ "./template/js/netlify-cms/base-config/collections/widgets.js");








/* harmony default export */ __webpack_exports__["default"] = (options => {
  options.sections = Object(_sections__WEBPACK_IMPORTED_MODULE_1__["default"])(options);
  netlifyIdentity.on('login', user => {
    let userId = user.id;
    if (user && user.app_metadata && user.app_metadata.roles && user.app_metadata.roles.length) userId = user.app_metadata.roles[0].replace(/\D+/g, '');
    let storeCreatedAt = null;
    if (user && user.user_metadata && user.user_metadata.store_created_at) storeCreatedAt = user.user_metadata.store_created_at;
    let storeHasIp = null;
    if (user && user.user_metadata && user.user_metadata.store_has_ip) storeHasIp = user.user_metadata.store_has_ip;
    window.LogRocket.identify(user.id, {
      email: user.email
    });
    window.Intercom('update', {
      app_id: "fqllm5mp",
      hide_default_launcher: false,
      user_id: user.id,
      id: user.id,
      email: user.email
    });
    analytics.identify(userId, {
      email: user.email,
      created_at: storeCreatedAt,
      infinitepay: storeHasIp
    });
    if (window.Cohere && user && user.id && user.email) window.Cohere(user.id, {
      email: user.email
    });
  });
  return {
    backend: {
      name: 'git-gateway',
      branch: 'master',
      commit_messages: {
        create: 'Create {{collection}} “{{slug}}”',
        update: 'Update {{collection}} “{{slug}}”',
        delete: 'Delete {{collection}} “{{slug}}”',
        uploadMedia: 'Upload “{{path}}”',
        deleteMedia: '[skip ci] Delete “{{path}}”',
        openAuthoring: '{{message}}'
      }
    },
    logo_url: 'https://confere-shop.s3-sa-east-1.amazonaws.com/Group+130705.png',
    locale: 'pt',
    load_config_file: Boolean(window.CMS_LOAD_CONFIG_FILE),
    media_folder: `${options.baseDir}template/public/img/uploads`,
    public_folder: '/img/uploads',
    slug: {
      encoding: 'ascii',
      clean_accents: true,
      sanitize_replacement: '-'
    },
    collections: [Object(_collections_settings__WEBPACK_IMPORTED_MODULE_2__["default"])(options), Object(_collections_layout__WEBPACK_IMPORTED_MODULE_3__["default"])(options), Object(_collections_pages__WEBPACK_IMPORTED_MODULE_4__["default"])(options), Object(_collections_extra_pages__WEBPACK_IMPORTED_MODULE_6__["default"])(options), Object(_collections_widgets__WEBPACK_IMPORTED_MODULE_7__["default"])(options), Object(_collections_blog_posts__WEBPACK_IMPORTED_MODULE_5__["default"])(options)]
  };
});

/***/ }),

/***/ "./template/js/netlify-cms/base-config/sections.js":
/*!*********************************************************!*\
  !*** ./template/js/netlify-cms/base-config/sections.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const bannerFields = [{
  label: 'Imagem',
  name: 'img',
  widget: 'image',
  hint: '[Dúvidas nas dimensões e imagens? Clique aqui e acesse nosso guia!](http://ajuda.confere.com.br/pt-BR/articles/5639879-medidas-dos-componentes-de-edicao-da-loja)'
}, {
  label: 'Link',
  required: false,
  name: 'link',
  widget: 'string'
}, {
  label: 'Alt',
  required: false,
  name: 'alt',
  widget: 'string'
}, {
  label: 'Imagem para mobile',
  required: false,
  name: 'mobile_img',
  widget: 'image'
}];
const searchOrderField = {
  label: 'Ordenação',
  required: false,
  name: 'sort',
  widget: 'select',
  options: [{
    label: 'Relevância',
    value: 'views'
  }, {
    label: 'Mais vendidos',
    value: 'sales'
  }, {
    label: 'Lançamento',
    value: 'news'
  }, {
    label: 'Ofertas',
    value: 'offers'
  }, {
    label: 'Menor preço',
    value: 'lowest_price'
  }, {
    label: 'Maior preço',
    value: 'highest_price'
  }, {
    label: 'Alfabética (slug)',
    value: 'slug'
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (({
  state
}) => [{
  label: 'Banner responsivo',
  name: 'responsive-banner',
  widget: 'object',
  fields: bannerFields
}, {
  label: 'Grid de banners',
  name: 'banners-grid',
  widget: 'object',
  fields: [{
    label: 'Banners',
    name: 'banners',
    widget: 'list',
    fields: bannerFields,
    hint: 'Clique em "Adicionar banners" ao lado para criar o seu grid de banners'
  }]
}, {
  label: 'Conteúdo customizado',
  name: 'custom-content',
  widget: 'object',
  fields: [{
    label: 'Conteúdo markdown customizado',
    name: 'markdown',
    widget: 'markdown',
    hint: 'Markdown parseado para HTML'
  }]
}, {
  label: 'Slider de banners',
  name: 'banner-slider',
  widget: 'object',
  fields: [{
    label: 'Slides',
    name: 'slides',
    widget: 'list',
    fields: bannerFields.concat([{
      label: 'Data de início',
      required: false,
      name: 'start',
      widget: 'datetime',
      dateFormat: 'DD/MM/YYYY',
      timeFormat: 'HH:mm',
      default: ''
    }, {
      label: 'Data de encerramento',
      required: false,
      name: 'end',
      widget: 'datetime',
      dateFormat: 'DD/MM/YYYY',
      timeFormat: 'HH:mm',
      default: ''
    }]),
    hint: 'Clique em "Adicionar banners" ao lado para criar o seu slider de banners'
  }, {
    label: 'Slider autoplay',
    name: 'autoplay',
    hint: 'Exibição de cada slide em milisegundos, defina 0 para desabilitar autoplay',
    min: 0,
    step: 1000,
    default: 9000,
    widget: 'number'
  }]
}, {
  label: 'Temporizador de ofertas',
  name: 'offers-timer',
  widget: 'object',
  fields: [{
    label: 'Ofertas',
    name: 'offers',
    widget: 'list',
    field: {
      label: 'SKU do produto',
      name: 'product_id',
      widget: 'select',
      options: state.routes.filter(({
        sku
      }) => typeof sku === 'string').map(({
        _id,
        sku
      }) => ({
        label: sku,
        value: _id
      }))
    }
  }, {
    label: 'Data de início',
    required: false,
    name: 'start',
    widget: 'datetime',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: 'HH:mm'
  }, {
    label: 'Data de encerramento',
    name: 'end',
    widget: 'datetime',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: 'HH:mm'
  }, {
    label: 'Notas',
    required: false,
    name: 'notes',
    hint: 'Descrição auxiliar sobre a promoção',
    widget: 'text'
  }, {
    label: 'Máximo de horas',
    name: 'max_hours',
    hint: 'Tempo máximo exibido no contador',
    widget: 'number',
    default: 24
  }]
}, {
  label: 'Barra de informações',
  name: 'info-bar',
  widget: 'object',
  fields: [{
    label: 'Exibir barra de informações',
    name: 'enabled',
    widget: 'boolean',
    default: true
  }]
}, {
  label: 'Estante de produtos',
  name: 'collection-shelf',
  widget: 'object',
  fields: [{
    label: 'Coleção de produtos',
    required: false,
    name: 'collection_id',
    hint: 'Se este campo não for preenchido, serão listados os produtos mais populares da loja',
    widget: 'select',
    options: [{
      resource: 'collections',
      label: ''
    }, {
      resource: 'categories',
      label: 'Categoria: '
    }, {
      resource: 'brands',
      label: 'Marca: '
    }].reduce((options, shelf) => {
      state.routes.forEach(({
        _id,
        resource,
        name,
        path
      }) => {
        if (resource === shelf.resource) {
          options.push({
            label: shelf.label + name,
            value: `${_id}:${resource}:${name}:${path}`
          });
        }
      });
      return options;
    }, [])
  }, searchOrderField, {
    label: 'Embaralhar produtos',
    name: 'shuffle',
    widget: 'boolean',
    default: false
  }, {
    label: 'Título da estante',
    required: false,
    name: 'title',
    hint: 'Usará o nome da coleção por padrão',
    widget: 'string'
  }, {
    label: 'Link no título',
    required: false,
    name: 'link',
    hint: 'Usará o slug da coleção por padrão',
    widget: 'string'
  }, {
    label: 'Sem cabeçalho',
    required: false,
    name: 'headless',
    widget: 'boolean',
    hint: 'Mostrar apenas a lista de produtos, sem título ou link'
  }, {
    label: 'Limite de itens',
    required: false,
    name: 'limit',
    widget: 'number',
    min: 1,
    max: 24,
    default: 12
  }, {
    label: 'Paginação',
    required: false,
    name: 'page',
    hint: 'Aumente o número da página para pular os itens iniciais e repetir estantes com a mesma coleção',
    widget: 'number',
    min: 1,
    default: 1
  }]
}, {
  label: 'Vitrine dinâmica',
  name: 'dynamic-showcase',
  widget: 'object',
  fields: [searchOrderField, {
    label: 'Carregar mais',
    name: 'load_more',
    widget: 'boolean',
    default: true,
    hint: 'Carrega mais itens automaticamente com scroll da página'
  }]
}, {
  label: 'Carrossel de marcas',
  name: 'brands-carousel',
  widget: 'object',
  fields: [{
    label: 'Ordenação',
    required: false,
    name: 'sort',
    widget: 'select',
    options: [{
      label: 'Padrão',
      value: ''
    }, {
      label: 'Alfabética',
      value: 'name'
    }]
  }, {
    label: 'Limite de marcas',
    name: 'limit',
    widget: 'number',
    min: 1,
    max: 48,
    default: 24
  }, {
    label: 'Offset de marcas',
    name: 'offset',
    widget: 'hidden',
    default: 0
  }, {
    label: 'Carousel autoplay',
    required: false,
    name: 'autoplay',
    hint: 'Exibição de cada página em milisegundos, 0 desativa o autoplay',
    min: 0,
    step: 1000,
    widget: 'number'
  }]
}, {
  label: 'Breadcrumbs',
  name: 'breadcrumbs',
  widget: 'object',
  fields: [{
    label: 'Exibir breadcrumbs',
    name: 'enabled',
    widget: 'boolean',
    default: true
  }]
}, {
  label: 'Título da página (SEO)',
  name: 'page-title',
  widget: 'object',
  fields: [{
    label: 'Título (H1)',
    required: false,
    name: 'title',
    hint: 'Por padrão será usado o título salvo no conteúdo ou nome do documento se houver',
    widget: 'string'
  }, {
    label: 'Descrição curta',
    required: false,
    name: 'description',
    hint: 'Será usada a descrição curta da marca ou categoria nas respectivas páginas',
    widget: 'string'
  }]
}, {
  label: 'Blog',
  name: 'blog',
  widget: 'object',
  fields: [{
    label: 'Listar posts do blog',
    name: 'enabled',
    widget: 'boolean',
    default: true
  }]
}, {
  label: 'Código HTML',
  name: 'custom-html',
  widget: 'object',
  fields: [{
    label: 'Conteúdo HTML customizado',
    name: 'html',
    widget: 'code',
    default_language: 'html',
    output_code_only: true
  }]
}]);

/***/ }),

/***/ "./template/js/netlify-cms/ecomplus-identity.js":
/*!******************************************************!*\
  !*** ./template/js/netlify-cms/ecomplus-identity.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");




const {
  location,
  localStorage
} = window;
const storageKey = 'admin:token';
/* harmony default export */ __webpack_exports__["default"] = ((baseURL = 'https://admin.e-com.plus/session/gotrue/v1', canAutoInit = true) => {
  const emitter = new eventemitter3__WEBPACK_IMPORTED_MODULE_2__();
  const store = {
    user: null,
    modal: {
      page: 'login'
    },
    saving: false
  };

  const logout = () => {
    store.user = null;
    localStorage.removeItem(storageKey);
    emitter.emit('logout');
    if (window.Intercom) window.Intercom('shutdown');
    if (window.analytics) window.analytics.reset();
  };

  const init = () => {
    const urlParams = new URLSearchParams(location.search);
    const accessToken = urlParams.get('token') || localStorage.getItem(storageKey);

    if (!accessToken) {
      location.href = `${baseURL}/?store_id=${_ecomplus_utils__WEBPACK_IMPORTED_MODULE_3__["$ecomConfig"].get('store_id')}`;
      return;
    }

    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${baseURL}/user`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(({
      data
    }) => {
      store.user = data;

      store.user.jwt = function () {
        return localStorage.getItem(storageKey);
      };

      localStorage.setItem(storageKey, accessToken);
      emitter.emit('login', data);
    }).catch(error => {
      if (error.response) {
        const {
          status,
          data
        } = error;

        if (status === 401) {
          localStorage.removeItem(storageKey);
        }

        if (data && data.login_url) {
          location.href = data.login_url;
          return;
        }
      }

      console.error(error);
      emitter.emit('error', error);
    }).finally(() => {
      if (window.history) {
        window.history.pushState('hide-token', document.title, `/admin/${location.hash}`);
      }
    });
    emitter.emit('init');
    setTimeout(logout, 1000 * 60 * 60 * 4);
  };

  if (canAutoInit) {
    init();
  }

  return {
    init,
    open: init,
    close: () => {},
    currentUser: () => store.user,
    logout,
    store,
    on: emitter.on
  };
});

/***/ }),

/***/ "./template/js/netlify-cms/init.js":
/*!*****************************************!*\
  !*** ./template/js/netlify-cms/init.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.merge */ "./node_modules/lodash.merge/index.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var _ecomplus_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ecomplus-identity */ "./template/js/netlify-cms/ecomplus-identity.js");
/* harmony import */ var _base_config___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base-config/ */ "./template/js/netlify-cms/base-config/index.js");
/* harmony import */ var _pages_preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages-preview */ "./template/js/netlify-cms/pages-preview.js");







const initCms = config => {
  if (window.netlifyIdentity) {
    const identityUrl = config.backend.identity_url;

    if (identityUrl) {
      const fixGotrueApi = () => {
        const {
          api
        } = window.netlifyIdentity.gotrue;
        api.apiURL = identityUrl;
        api._sameOrigin = identityUrl.includes(window.location.host);
      };

      if (document.readyState !== 'loading') {
        fixGotrueApi();
      }

      document.addEventListener('DOMContentLoaded', fixGotrueApi);
    }
  } else {
    window.netlifyIdentity = Object(_ecomplus_identity__WEBPACK_IMPORTED_MODULE_3__["default"])();

    if (!config.backend.gateway_url) {
      config.backend.gateway_url = `https://gitgateway.ecomplus.biz/${_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["$ecomConfig"].get('store_id')}`;
    }
  }

  window.CMS.init({
    config
  });
};

/* harmony default export */ __webpack_exports__["default"] = ((customConfig, options) => new Promise(resolve => {
  let config = lodash_merge__WEBPACK_IMPORTED_MODULE_0__(Object(_base_config___WEBPACK_IMPORTED_MODULE_4__["default"])(options), customConfig);
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/admin/config.json').then(({
    data
  }) => {
    if (typeof data === 'object' && data) {
      if (Array.isArray(data.collections)) {
        const mergeNestedObj = (originalObj, obj) => {
          if (Array.isArray(originalObj.files)) {
            if (Array.isArray(obj.files)) {
              upsertFields(originalObj, obj, 'files');
            }
          } else if (Array.isArray(obj.fields)) {
            upsertFields(originalObj, obj, 'fields');
          } else if (Array.isArray(obj.types)) {
            upsertFields(originalObj, obj, 'types');
          }

          Object.assign(originalObj, obj);
        };

        const upsertFields = (config, data, prop) => {
          data[prop].forEach(obj => {
            if (obj.name) {
              const originalObj = config[prop].find(({
                name
              }) => name === obj.name);

              if (originalObj) {
                mergeNestedObj(originalObj, obj);
              } else {
                config[prop].push(obj);
              }
            } else {
              config[prop].forEach(originalObj => mergeNestedObj(originalObj, obj));
            }
          });
          delete data[prop];
        };

        upsertFields(config, data, 'collections');
      }

      config = lodash_merge__WEBPACK_IMPORTED_MODULE_0__(config, data);
    }
  }).catch(() => console.log('No custom config file at /admin/config.json')).finally(() => {
    initCms(config);
    resolve(config);
  });
}));

/***/ }),

/***/ "./template/js/netlify-cms/pages-preview.js":
/*!**************************************************!*\
  !*** ./template/js/netlify-cms/pages-preview.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _preview_home_preview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preview/home-preview */ "./template/js/netlify-cms/preview/home-preview.js");
/* harmony import */ var _preview_product_preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preview/product-preview */ "./template/js/netlify-cms/preview/product-preview.js");
/* harmony import */ var _preview_search_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preview/search-preview */ "./template/js/netlify-cms/preview/search-preview.js");
/* harmony import */ var _preview_brands_preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preview/brands-preview */ "./template/js/netlify-cms/preview/brands-preview.js");
/* harmony import */ var _preview_categories_preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preview/categories-preview */ "./template/js/netlify-cms/preview/categories-preview.js");
/* harmony import */ var _preview_collections_preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./preview/collections-preview */ "./template/js/netlify-cms/preview/collections-preview.js");
/* harmony import */ var _preview_blog_preview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preview/blog-preview */ "./template/js/netlify-cms/preview/blog-preview.js");
/* harmony import */ var _preview_code_preview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./preview/code-preview */ "./template/js/netlify-cms/preview/code-preview.js");
/* harmony import */ var _preview_settings_general__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preview/settings/general */ "./template/js/netlify-cms/preview/settings/general.js");









window.CMS.registerPreviewStyle('https://use.fontawesome.com/releases/v5.12.0/css/all.css');
window.CMS.registerPreviewStyle('/storefront.css');
window.CMS.registerPreviewStyle('/assets/cms-preview.css');
window.CMS.registerPreviewTemplate('home', _preview_home_preview__WEBPACK_IMPORTED_MODULE_0__["default"]);
window.CMS.registerPreviewTemplate('products', _preview_product_preview__WEBPACK_IMPORTED_MODULE_1__["default"]);
window.CMS.registerPreviewTemplate('search', _preview_search_preview__WEBPACK_IMPORTED_MODULE_2__["default"]);
window.CMS.registerPreviewTemplate('brands', _preview_brands_preview__WEBPACK_IMPORTED_MODULE_3__["default"]);
window.CMS.registerPreviewTemplate('categories', _preview_categories_preview__WEBPACK_IMPORTED_MODULE_4__["default"]);
window.CMS.registerPreviewTemplate('collections', _preview_collections_preview__WEBPACK_IMPORTED_MODULE_5__["default"]);
window.CMS.registerPreviewTemplate('blog', _preview_blog_preview__WEBPACK_IMPORTED_MODULE_6__["default"]);
window.CMS.registerPreviewTemplate('code', _preview_code_preview__WEBPACK_IMPORTED_MODULE_7__["default"]);
window.CMS.registerPreviewTemplate('general', _preview_settings_general__WEBPACK_IMPORTED_MODULE_8__["default"]);

/***/ }),

/***/ "./template/js/netlify-cms/preview/base-preview.js":
/*!*********************************************************!*\
  !*** ./template/js/netlify-cms/preview/base-preview.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BasePreview; });
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.url.to-json.js */ "./node_modules/core-js/modules/web.url.to-json.js");
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var _ecomplus_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ecomplus/client */ "./node_modules/@ecomplus/client/src/index.js");
/* harmony import */ var _ecomplus_search_engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ecomplus/search-engine */ "./node_modules/@ecomplus/search-engine/src/index.js");
/* harmony import */ var _pages_sections_banner_slider_ejs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pages/@/sections/banner-slider.ejs */ "./template/pages/@/sections/banner-slider.ejs");
/* harmony import */ var _pages_sections_info_bar_ejs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../pages/@/sections/info-bar.ejs */ "./template/pages/@/sections/info-bar.ejs");
/* harmony import */ var _pages_sections_inc_banner_ejs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../pages/@/sections/inc/banner.ejs */ "./template/pages/@/sections/inc/banner.ejs");
/* harmony import */ var _pages_sections_inc_product_item_ejs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pages/@/sections/inc/product-item.ejs */ "./template/pages/@/sections/inc/product-item.ejs");
/* harmony import */ var _pages_sections_inc_retail_grid_ejs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pages/@/sections/inc/retail-grid.ejs */ "./template/pages/@/sections/inc/retail-grid.ejs");
/* harmony import */ var _pages_sections_inc_md_content_ejs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../pages/@/sections/inc/md-content.ejs */ "./template/pages/@/sections/inc/md-content.ejs");
/* harmony import */ var _pages_sections_inc_timer_ejs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../pages/@/sections/inc/timer.ejs */ "./template/pages/@/sections/inc/timer.ejs");
/* harmony import */ var _pages_sections_inc_products_carousel_ejs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../pages/@/sections/inc/products-carousel.ejs */ "./template/pages/@/sections/inc/products-carousel.ejs");
/* harmony import */ var _pages_sections_responsive_banner_ejs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../pages/@/sections/responsive-banner.ejs */ "./template/pages/@/sections/responsive-banner.ejs");
/* harmony import */ var _pages_sections_banners_grid_ejs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../pages/@/sections/banners-grid.ejs */ "./template/pages/@/sections/banners-grid.ejs");
/* harmony import */ var _pages_sections_custom_content_ejs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../pages/@/sections/custom-content.ejs */ "./template/pages/@/sections/custom-content.ejs");
/* harmony import */ var _pages_sections_custom_html_ejs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../pages/@/sections/custom-html.ejs */ "./template/pages/@/sections/custom-html.ejs");
/* harmony import */ var _pages_sections_offers_timer_ejs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../pages/@/sections/offers-timer.ejs */ "./template/pages/@/sections/offers-timer.ejs");
/* harmony import */ var _pages_sections_breadcrumbs_ejs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../pages/@/sections/breadcrumbs.ejs */ "./template/pages/@/sections/breadcrumbs.ejs");
/* harmony import */ var _pages_sections_page_title_ejs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../pages/@/sections/page-title.ejs */ "./template/pages/@/sections/page-title.ejs");
/* harmony import */ var _pages_sections_blog_ejs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../pages/@/sections/blog.ejs */ "./template/pages/@/sections/blog.ejs");
/* harmony import */ var _pages_sections_product_block_ejs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../pages/@/sections/product-block.ejs */ "./template/pages/@/sections/product-block.ejs");
/* harmony import */ var _pages_sections_related_products_ejs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../pages/@/sections/related-products.ejs */ "./template/pages/@/sections/related-products.ejs");
/* harmony import */ var _pages_sections_recommended_products_ejs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../pages/@/sections/recommended-products.ejs */ "./template/pages/@/sections/recommended-products.ejs");
/* harmony import */ var _pages_sections_inc_recommendations_shelf_ejs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../pages/@/sections/inc/recommendations-shelf.ejs */ "./template/pages/@/sections/inc/recommendations-shelf.ejs");
/* harmony import */ var _pages_sections_product_description_ejs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../pages/@/sections/product-description.ejs */ "./template/pages/@/sections/product-description.ejs");
/* harmony import */ var _pages_sections_product_specifications_ejs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../pages/@/sections/product-specifications.ejs */ "./template/pages/@/sections/product-specifications.ejs");
/* harmony import */ var _pages_sections_search_engine_ejs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../pages/@/sections/search-engine.ejs */ "./template/pages/@/sections/search-engine.ejs");
/* harmony import */ var _pages_sections_inc_loading_ejs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../pages/@/sections/inc/loading.ejs */ "./template/pages/@/sections/inc/loading.ejs");
/* harmony import */ var _pages_sections_document_banner_ejs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../pages/@/sections/document-banner.ejs */ "./template/pages/@/sections/document-banner.ejs");
/* harmony import */ var _pages_sections_document_description_ejs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../pages/@/sections/document-description.ejs */ "./template/pages/@/sections/document-description.ejs");
/* harmony import */ var _pages_sections_brand_retail_ejs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../pages/@/sections/brand-retail.ejs */ "./template/pages/@/sections/brand-retail.ejs");
/* harmony import */ var _pages_sections_category_retail_ejs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../pages/@/sections/category-retail.ejs */ "./template/pages/@/sections/category-retail.ejs");
/* harmony import */ var _pages_sections_collection_retail_ejs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../pages/@/sections/collection-retail.ejs */ "./template/pages/@/sections/collection-retail.ejs");
/* harmony import */ var _pages_sections_collection_shelf_ejs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../pages/@/sections/collection-shelf.ejs */ "./template/pages/@/sections/collection-shelf.ejs");


































const {
  _data,
  _info,
  _settings,
  lodash,
  ejs,
  React,
  h,
  MarkdownIt,
  i18n
} = window;

const isArrayEqual = (x, y) => lodash.isEmpty(lodash.xorWith(x, y, lodash.isEqual));

const lang = 'pt_br';
class BasePreview extends React.Component {
  constructor() {
    super();
    this._ = { ..._data,
      ..._settings,
      settings: _settings,
      devMode: true,
      cms: function (content) {
        const contents = {
          info: _info,
          posts: ['post-example', 'post-example', 'post-example', 'post-example', 'post-example', 'post-example'],
          'posts/post-example': {
            title: 'Esta loja é um Progressive Web App',
            date: '2019-05-16T16:01:40.618Z',
            thumbnail: '/img/uploads/pwa-reliable.png',
            description: 'PWA é uma evolução híbrida entre um aplicativo e uma página web, que torna a experiência de uso de uma página web pelo celular semelhante a de um aplicativo mobile.\n\n',
            body: '![PWA](/img/uploads/pwa-reliable.png)\n\nProgressive Web App (PWA) é uma criação da da Google que permite a criação de aplicações que são um meio termo entre uma página web e um aplicativo nativo. Nosso Storefront padrão é um PWA!\n\nCom o grande aumento de tráfego mobile no e-commerce um PWA commerce traz enormes vantagens. Veja abaixo as principais vantagens e com alguns exemplos de sucesso com estudos de caso feitos pelo Google\n\n**Digno de estar na tela inicial**\n\nQuando os critérios do Progressive Web App são atendidos, o Chrome solicita que os usuários adicionem o PWA à tela inicial. Com isso a loja se transforma em uma aplicação nativa sem a necessidade de download através de uma app store. Isso pode não funcionar perfeitamente em IOS que tem 13,57% do market share mobile brasileiro, sendo quase todo o resto dominado pelo Android.\n\n**Maior engajamento**\n\nO PWA da [eXtra Electronics](https://developers.google.com/web/showcase/2016/extra) aumentou o re-engajamento em 4X, esses usuários gastam o dobro do tempo no site.\n Com a [OLX ](https://developers.google.com/web/showcase/2017/olx) o aumento do o re-engajamento foi de 250%.\n\n**Aumento na taxa de conversão**\n\nA capacidade de fornecer de um PWA melhorar a experiência ao usuário, ajudou o [AliExpress](https://developers.google.com/web/showcase/2016/aliexpress) a aumentar a taxa de conversão de novos usuários em 104%.',
            meta_title: 'PWA - My Shop',
            meta_description: 'Esta loja é um JAMstack PWA'
          }
        };

        if (contents[content]) {
          return contents[content];
        } else {
          return {};
        }
      },
      dictionary: function (term) {
        if (term) {
          if (i18n[term]) {
            return _ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["default"].i18n(i18n[term], lang);
          } else if (i18n[`i19${term}`]) {
            return _ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["default"].i18n(i18n[`i19${term}`], lang);
          }

          return this._.cms(`dictionary/${lang}`)[term] || '';
        }

        return this._.cms(`dictionary/${lang}`);
      },
      md: new MarkdownIt({
        html: true
      }),
      route: null,
      resolveRoute: null,
      lodash,
      ecomUtils: _ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["default"],
      ecomClient: _ecomplus_client__WEBPACK_IMPORTED_MODULE_2__["default"],
      EcomSearch: _ecomplus_search_engine__WEBPACK_IMPORTED_MODULE_3__["default"],
      state: {}
    };
    this.state = {
      vDoc: '',
      html: '',
      parseHtml: '',
      cmsEntrys: []
    };
    this.ejs = ejs;
    this.loading = true;
  }

  componentDidMount() {
    this.fetchPage();
  }

  componentDidUpdate(prevProps, prevState) {
    setTimeout(() => {
      const entries = this.getEntrys(this.props);
      const oldEntrys = this.getEntrys(prevProps);
      let change = false;

      if (!isArrayEqual(Object.keys(entries), Object.keys(oldEntrys))) {
        change = true;
      }

      if (!isArrayEqual(Object.values(entries), Object.values(oldEntrys))) {
        change = true;
      }

      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const oldEntry = oldEntrys[i];

        if (oldEntry && oldEntry.type === entry.type) {
          for (const key in oldEntry) {
            if (oldEntry[key]) {
              switch (typeof oldEntry[key]) {
                case 'string':
                case 'number':
                  if (oldEntry[key] !== entry[key]) {
                    change = true;
                  }

                  break;

                default:
                  if (Array.isArray(oldEntry[key])) {
                    if (!isArrayEqual(oldEntry[key], entry[key])) {
                      change = true;
                    }
                  } else if (typeof oldEntry[key] === 'object') {
                    return; // todo
                  }

                  break;
              }
            }
          }
        } else {
          change = true;
        }
      }

      if (!change) {
        for (let i = 0; i < entries.length; i++) {
          if (oldEntrys[i].type !== entries[i].type) {
            change = true;
          }
        }
      }

      if (!change && !this.loading) {
        return;
      }

      this.setState({
        cmsEntrys: entries
      });
      setTimeout(() => {
        this.parseEjs();
      }, 500);
      this.loading = false;
    }, 250);
  }

  getEntrys(props) {
    let i = 0;
    let entries;
    const entrySections = [];
    const {
      entry
    } = props;

    do {
      entries = entry.getIn(['data', 'sections', i]);

      if (entries) {
        const data = entries.toJSON();

        if (data.type === 'banner-slider' && data.slides) {
          const {
            slides
          } = data;

          if (Array.isArray(slides) && slides.length) {
            slides.forEach(slide => {
              if (slide.end) {
                delete slide.end;
              }

              if (slide.start) {
                delete slide.start;
              }
            });
          }
        }

        if (data.type === 'collection-shelf' && data.shuffle) {
          delete data.shuffle;
        }

        entrySections.push(data);
      }

      i++;
    } while (entries !== undefined);

    return entrySections;
  }

  ejsSections() {
    return {
      breadcrumbs: _pages_sections_breadcrumbs_ejs__WEBPACK_IMPORTED_MODULE_17__["default"],
      banner: _pages_sections_inc_banner_ejs__WEBPACK_IMPORTED_MODULE_6__["default"],
      blog: _pages_sections_blog_ejs__WEBPACK_IMPORTED_MODULE_19__["default"],
      timer: _pages_sections_inc_timer_ejs__WEBPACK_IMPORTED_MODULE_10__["default"],
      loading: _pages_sections_inc_loading_ejs__WEBPACK_IMPORTED_MODULE_27__["default"],
      'banner-slider': _pages_sections_banner_slider_ejs__WEBPACK_IMPORTED_MODULE_4__["default"],
      'info-bar': _pages_sections_info_bar_ejs__WEBPACK_IMPORTED_MODULE_5__["default"],
      'collection-shelf': _pages_sections_collection_shelf_ejs__WEBPACK_IMPORTED_MODULE_33__["default"],
      'products-carousel': _pages_sections_inc_products_carousel_ejs__WEBPACK_IMPORTED_MODULE_11__["default"],
      'product-item': _pages_sections_inc_product_item_ejs__WEBPACK_IMPORTED_MODULE_7__["default"],
      'widgets-append': '<% %>',
      'responsive-banner': _pages_sections_responsive_banner_ejs__WEBPACK_IMPORTED_MODULE_12__["default"],
      'banners-grid': _pages_sections_banners_grid_ejs__WEBPACK_IMPORTED_MODULE_13__["default"],
      'custom-content': _pages_sections_custom_content_ejs__WEBPACK_IMPORTED_MODULE_14__["default"],
      'offers-timer': _pages_sections_offers_timer_ejs__WEBPACK_IMPORTED_MODULE_16__["default"],
      'page-title': _pages_sections_page_title_ejs__WEBPACK_IMPORTED_MODULE_18__["default"],
      'retail-grid': _pages_sections_inc_retail_grid_ejs__WEBPACK_IMPORTED_MODULE_8__["default"],
      'md-content': _pages_sections_inc_md_content_ejs__WEBPACK_IMPORTED_MODULE_9__["default"],
      'custom-html': _pages_sections_custom_html_ejs__WEBPACK_IMPORTED_MODULE_15__["default"],
      'product-block': _pages_sections_product_block_ejs__WEBPACK_IMPORTED_MODULE_20__["default"],
      'related-products': _pages_sections_related_products_ejs__WEBPACK_IMPORTED_MODULE_21__["default"],
      'recommended-products': _pages_sections_recommended_products_ejs__WEBPACK_IMPORTED_MODULE_22__["default"],
      'recommendations-shelf': _pages_sections_inc_recommendations_shelf_ejs__WEBPACK_IMPORTED_MODULE_23__["default"],
      'product-description': _pages_sections_product_description_ejs__WEBPACK_IMPORTED_MODULE_24__["default"],
      'product-specifications': _pages_sections_product_specifications_ejs__WEBPACK_IMPORTED_MODULE_25__["default"],
      'search-engine': _pages_sections_search_engine_ejs__WEBPACK_IMPORTED_MODULE_26__["default"],
      'document-banner': _pages_sections_document_banner_ejs__WEBPACK_IMPORTED_MODULE_28__["default"],
      'document-description': _pages_sections_document_description_ejs__WEBPACK_IMPORTED_MODULE_29__["default"],
      'brand-retail': _pages_sections_brand_retail_ejs__WEBPACK_IMPORTED_MODULE_30__["default"],
      'category-retail': _pages_sections_category_retail_ejs__WEBPACK_IMPORTED_MODULE_31__["default"],
      'collection-retail': _pages_sections_collection_retail_ejs__WEBPACK_IMPORTED_MODULE_32__["default"]
    };
  }

  async parseEjs(customCmsEntrys = []) {
    const {
      state
    } = this;
    const {
      vDoc
    } = state;
    let parseHtml = '';

    if (!vDoc) {
      return null;
    }

    let parse = '';
    const cmsEntrys = [...state.cmsEntrys, ...customCmsEntrys];

    if (Array.isArray(cmsEntrys) && cmsEntrys.length) {
      for (let j = 0; j < cmsEntrys.length; j++) {
        const opt = cmsEntrys[j];
        opt.items = this._.items;
        const template = this.ejsSections()[opt.type];

        if (template) {
          parse += await ejs.render(template, {
            _: this._,
            opt
          }, {
            async: true,
            includer: originalPath => {
              for (const sectionType in this.ejsSections()) {
                if (originalPath.endsWith(`/${sectionType}`)) {
                  return {
                    template: this.ejsSections()[sectionType]
                  };
                }
              }
            }
          }).catch(e => console.error('Parse err', e));
        }
      }
    }

    const $sections = vDoc.getElementsByClassName('sections')[0];
    $sections.innerHTML = '';
    $sections.innerHTML += parse; // glide slider

    const $slider = vDoc.querySelectorAll('.glide');

    if ($slider.length) {
      $slider.forEach(el => el.classList.add(...['glide--ltr', 'glide--slider', 'glide--swipeable']));
    } // insert tag img inside <picture/> tags


    const $pictures = vDoc.querySelectorAll('.banner picture');

    for (let i = 0; i < $pictures.length; i++) {
      const $picture = $pictures[i];
      $picture.classList.remove();
      $picture.classList.add(...['lozad', 'fade', 'img-fluid', 'show']);
      $picture.setAttribute('src', $picture.dataset.iesrc);
      $picture.setAttribute('data-loaded', true);
      const hasTagImg = Object.values($picture.children).find(children => children.tagName === 'IMG');

      if (!hasTagImg) {
        $picture.appendChild(document.createElement('img', {
          alt: $picture.dataset.alt,
          src: $picture.dataset.iesrc
        }));
      }
    } // insert tag img inside <picture/> tags


    const $pictures2 = vDoc.querySelectorAll('.product-card__picture');

    for (let i = 0; i < $pictures2.length; i++) {
      const $picture1 = $pictures2[i];
      $picture1.classList.remove();
      const $img = $picture1.children[0];
      $img.classList.remove();
      $img.classList.add(...['lozad', 'show']);
      $img.setAttribute('src', $img.dataset.src);
      $picture1.classList.add(...['lozad', 'fade', 'img-fluid', 'show']);
      $picture1.setAttribute('src', $img.dataset.src);
      $picture1.setAttribute('data-loaded', true);
    } // fix carousel


    const $caroulse = vDoc.querySelectorAll('.glide__slide.products-carousel__item');

    if ($caroulse.length) {
      $caroulse.forEach(element => {
        const $li = element;
        $li.style.width = '270px';
        $li.style.marginRight = '5px';
        $li.classList.add(...['glide__slides', 'products-carousel__list']);
        const $glide = vDoc.querySelectorAll('.products-carousel .glide');

        if ($glide.length) {
          $glide.forEach(el => el.classList.add(...['glide--ltr', 'glide--slider', 'glide--swipeable']));
        }

        const childrens = $li.children;

        for (let i = 0; i < childrens.length; i++) {
          const child = childrens[i];
          const $elImg = child.querySelectorAll('img');

          if ($elImg.length) {
            $elImg[0].classList.add('show');
            $elImg[0].setAttribute('src', $elImg[0].dataset.src);
            $elImg[0].setAttribute('data-loaded', true);
          }
        }
      });
    }

    if (vDoc.childNodes && vDoc.childNodes.length) {
      parseHtml = vDoc.childNodes[1].innerHTML;
    }

    this.setState({
      parseHtml,
      vDoc
    });
  }

  render() {
    const {
      parseHtml
    } = this.state;
    return h('div', {
      dangerouslySetInnerHTML: {
        __html: parseHtml
      }
    });
  }

}

/***/ }),

/***/ "./template/js/netlify-cms/preview/blog-preview.js":
/*!*********************************************************!*\
  !*** ./template/js/netlify-cms/preview/blog-preview.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BrandsPreview; });
/* harmony import */ var _base_preview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-preview */ "./template/js/netlify-cms/preview/base-preview.js");
/* harmony import */ var _virtual_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./virtual-doc */ "./template/js/netlify-cms/preview/virtual-doc.js");
/* harmony import */ var _fetch_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch-page */ "./template/js/netlify-cms/preview/fetch-page.js");
/* eslint-disable no-useless-constructor */



class BrandsPreview extends _base_preview__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
  }

  async fetchPage() {
    this._ = { ...this._,
      state: {
        title: 'Blog'
      },
      route: {
        path: '/blog'
      }
    };
    console.log(this);
    Object(_fetch_page__WEBPACK_IMPORTED_MODULE_2__["default"])('/blog').then(html => {
      const vDoc = Object(_virtual_doc__WEBPACK_IMPORTED_MODULE_1__["default"])(html);
      this.setState({
        html,
        vDoc
      });
      this.parseEjs();
    }).catch(err => {
      console.log('Failed to fetch page:', err);
    });
  }

}

/***/ }),

/***/ "./template/js/netlify-cms/preview/brands-preview.js":
/*!***********************************************************!*\
  !*** ./template/js/netlify-cms/preview/brands-preview.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BrandsPreview; });
/* harmony import */ var _ecomplus_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/client */ "./node_modules/@ecomplus/client/src/index.js");
/* harmony import */ var _base_preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-preview */ "./template/js/netlify-cms/preview/base-preview.js");
/* harmony import */ var _virtual_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./virtual-doc */ "./template/js/netlify-cms/preview/virtual-doc.js");
/* harmony import */ var _fetch_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetch-page */ "./template/js/netlify-cms/preview/fetch-page.js");
/* eslint-disable no-useless-constructor */




class BrandsPreview extends _base_preview__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    super();
  }

  async fetchPage() {
    _ecomplus_client__WEBPACK_IMPORTED_MODULE_0__["default"].store({
      url: '/brands.json'
    }).then(({
      data
    }) => {
      const brands = data.result.filter(brands => brands.logo);
      const brand = brands[Math.floor(Math.random() * brands.length)];
      this._ = { ...this._,
        state: {
          title: brand.name,
          ...brand
        },
        route: {
          path: `/${brand.slug}`
        }
      };
      return Object(_fetch_page__WEBPACK_IMPORTED_MODULE_3__["default"])(`/${brand.slug}`);
    }).then(html => {
      const vDoc = Object(_virtual_doc__WEBPACK_IMPORTED_MODULE_2__["default"])(html);
      this.setState({
        html,
        vDoc
      });
      this.parseEjs();
    }).catch(err => {
      console.log('Failed to fetch page:', err);
    });
  }

}

/***/ }),

/***/ "./template/js/netlify-cms/preview/categories-preview.js":
/*!***************************************************************!*\
  !*** ./template/js/netlify-cms/preview/categories-preview.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CategoriesPreview; });
/* harmony import */ var _base_preview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-preview */ "./template/js/netlify-cms/preview/base-preview.js");
/* harmony import */ var _virtual_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./virtual-doc */ "./template/js/netlify-cms/preview/virtual-doc.js");
/* harmony import */ var _fetch_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch-page */ "./template/js/netlify-cms/preview/fetch-page.js");
/* eslint-disable no-useless-constructor */



class CategoriesPreview extends _base_preview__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
  }

  async fetchPage() {
    const category = this._.categories[Math.floor(Math.random() * this._.categories.length)];

    this._ = { ...this._,
      state: {
        title: category.name,
        ...category
      },
      route: {
        path: `/${category.slug}`
      }
    };
    Object(_fetch_page__WEBPACK_IMPORTED_MODULE_2__["default"])(`/${category.slug}`).then(html => {
      const vDoc = Object(_virtual_doc__WEBPACK_IMPORTED_MODULE_1__["default"])(html);
      this.setState({
        html,
        vDoc
      });
      this.parseEjs();
    }).catch(err => {
      console.log('Failed to fetch page:', err);
    });
  }

}

/***/ }),

/***/ "./template/js/netlify-cms/preview/code-preview.js":
/*!*********************************************************!*\
  !*** ./template/js/netlify-cms/preview/code-preview.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CodePreview; });
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.url.to-json.js */ "./node_modules/core-js/modules/web.url.to-json.js");
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-preview */ "./template/js/netlify-cms/preview/base-preview.js");
/* harmony import */ var _virtual_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./virtual-doc */ "./template/js/netlify-cms/preview/virtual-doc.js");
/* harmony import */ var _fetch_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetch-page */ "./template/js/netlify-cms/preview/fetch-page.js");




class CodePreview extends _base_preview__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    super();
    this._ = { ...this._,
      state: {
        title: 'Code'
      },
      route: {
        path: '/'
      }
    };
    this.customEntrys = [{
      'type': 'banner-slider',
      'autoplay': 9000,
      'slides': [{
        'img': 'https://storefront-template.netlify.app/img/uploads/banner2.webp',
        'link': '/headset',
        'alt': 'Headset banner',
        'mobile_img': 'https://storefront-template.netlify.app/img/uploads/banner2.webp'
      }]
    }, {
      'type': 'info-bar',
      'enabled': true
    }, {
      'type': 'collection-shelf',
      'shuffle': false,
      'collection_id': null,
      'sort': 'offers',
      'headless': false
    }];
    this.css = '';
    this.head = '';
    this.body = '';
  }

  async fetchPage() {
    return Object(_fetch_page__WEBPACK_IMPORTED_MODULE_3__["default"])('/index.html').then(html => {
      const vDoc = Object(_virtual_doc__WEBPACK_IMPORTED_MODULE_2__["default"])(html);
      this.setState({
        html,
        vDoc
      });
      this.parseEjs(this.customEntrys);
    }).catch(err => {
      console.log('Failed to fetch page home', err);
    });
  }

  componentDidUpdate(_, prevState) {
    setTimeout(() => {
      let change = false;
      const {
        vDoc
      } = this.state;
      const {
        entry
      } = this.props;
      const entries = entry.getIn(['data']).toJSON();

      if (entries.css && entries.css !== '' && this.css !== entries.css) {
        let $styleTag = vDoc.getElementById('custom_style_css');

        if (!$styleTag) {
          $styleTag = document.createElement('div');
          $styleTag.id = 'custom_style_css';
          vDoc.body.appendChild($styleTag);
        }

        $styleTag.innerHTML = `<style>${entries.css}</style>`;
        this.css = entries.css;
        change = true;
      }

      if (entries.html_body && entries.html_body !== '' && this.body !== entries.html_body) {
        let $htmlBody = vDoc.getElementById('custom_html_body');

        if (!$htmlBody) {
          $htmlBody = document.createElement('div');
          $htmlBody.id = 'custom_html_body';
          vDoc.body.appendChild($htmlBody);
        }

        $htmlBody.innerHTML = entries.html_body;
        this.body = entries.html_body;
        change = true;
      }

      if (entries.html_head && entries.html_head !== '' && this.head !== entries.head) {
        vDoc.head.insertAdjacentHTML('afterend', entries.html_head);
        this.head = entries.head;
        change = true;
      }

      if (change) {
        this.setState({
          vDoc
        });
        setTimeout(() => {
          this.parseEjs(this.customEntrys);
        }, 100);
      }
    }, 500);
  }

}

/***/ }),

/***/ "./template/js/netlify-cms/preview/collections-preview.js":
/*!****************************************************************!*\
  !*** ./template/js/netlify-cms/preview/collections-preview.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CollectionsPreview; });
/* harmony import */ var _ecomplus_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/client */ "./node_modules/@ecomplus/client/src/index.js");
/* harmony import */ var _base_preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-preview */ "./template/js/netlify-cms/preview/base-preview.js");
/* harmony import */ var _virtual_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./virtual-doc */ "./template/js/netlify-cms/preview/virtual-doc.js");
/* harmony import */ var _fetch_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetch-page */ "./template/js/netlify-cms/preview/fetch-page.js");
/* eslint-disable no-useless-constructor */




class CollectionsPreview extends _base_preview__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    super();
  }

  async fetchPage() {
    _ecomplus_client__WEBPACK_IMPORTED_MODULE_0__["default"].store({
      url: '/collections.json'
    }).then(({
      data
    }) => {
      const collection = data.result[Math.floor(Math.random() * data.result.length)];
      this._ = { ...this._,
        state: {
          title: collection.name,
          ...collection
        },
        route: {
          path: `/${collection.slug}`
        }
      };
      return Object(_fetch_page__WEBPACK_IMPORTED_MODULE_3__["default"])(`/${collection.slug}`);
    }).then(html => {
      const vDoc = Object(_virtual_doc__WEBPACK_IMPORTED_MODULE_2__["default"])(html);
      this.setState({
        html,
        vDoc
      });
      this.parseEjs();
    }).catch(err => {
      console.log('Failed to fetch page:', err);
    });
  }

}

/***/ }),

/***/ "./template/js/netlify-cms/preview/fetch-page.js":
/*!*******************************************************!*\
  !*** ./template/js/netlify-cms/preview/fetch-page.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (page => window.fetch(page).then(response => {
  return response.text();
}));

/***/ }),

/***/ "./template/js/netlify-cms/preview/home-preview.js":
/*!*********************************************************!*\
  !*** ./template/js/netlify-cms/preview/home-preview.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePreview; });
/* harmony import */ var _base_preview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-preview */ "./template/js/netlify-cms/preview/base-preview.js");
/* harmony import */ var _virtual_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./virtual-doc */ "./template/js/netlify-cms/preview/virtual-doc.js");
/* harmony import */ var _fetch_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch-page */ "./template/js/netlify-cms/preview/fetch-page.js");



class HomePreview extends _base_preview__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._ = { ...this._,
      state: {
        title: 'Home'
      },
      route: {
        path: '/'
      }
    };
  }

  async fetchPage() {
    return Object(_fetch_page__WEBPACK_IMPORTED_MODULE_2__["default"])('/index.html').then(html => {
      const vDoc = Object(_virtual_doc__WEBPACK_IMPORTED_MODULE_1__["default"])(html);
      this.setState({
        html,
        vDoc
      });
      this.parseEjs();
    }).catch(err => {
      console.log('Failed to fetch page home', err);
    });
  }

}

/***/ }),

/***/ "./template/js/netlify-cms/preview/product-preview.js":
/*!************************************************************!*\
  !*** ./template/js/netlify-cms/preview/product-preview.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductsPreview; });
/* harmony import */ var _base_preview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-preview */ "./template/js/netlify-cms/preview/base-preview.js");
/* harmony import */ var _ecomplus_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ecomplus/client */ "./node_modules/@ecomplus/client/src/index.js");
/* harmony import */ var _virtual_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./virtual-doc */ "./template/js/netlify-cms/preview/virtual-doc.js");
/* harmony import */ var _fetch_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetch-page */ "./template/js/netlify-cms/preview/fetch-page.js");
/* eslint-disable no-useless-constructor */




class ProductsPreview extends _base_preview__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
  }

  async fetchPage() {
    _ecomplus_client__WEBPACK_IMPORTED_MODULE_1__["default"].store({
      url: '/products.json'
    }).then(async response => {
      const {
        result
      } = response.data;
      const data = result[Math.floor(Math.random() * result.length)];
      return _ecomplus_client__WEBPACK_IMPORTED_MODULE_1__["default"].store({
        url: `/products/${data._id}.json`
      });
    }).then(async ({
      data
    }) => {
      this._ = { ...this._,
        state: {
          title: data.slug,
          ...data
        },
        route: {
          path: `/${data.slug}`
        }
      };
      const html = await Object(_fetch_page__WEBPACK_IMPORTED_MODULE_3__["default"])(`/${data.slug}`);
      const vDoc = Object(_virtual_doc__WEBPACK_IMPORTED_MODULE_2__["default"])(html);
      this.setState({
        html,
        vDoc
      });
      this.parseEjs();
    }).catch(error => {
      if (error.response) {
        console.log(error.response);
      }
    });
  }

}

/***/ }),

/***/ "./template/js/netlify-cms/preview/search-preview.js":
/*!***********************************************************!*\
  !*** ./template/js/netlify-cms/preview/search-preview.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchPreview; });
/* harmony import */ var _virtual_doc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virtual-doc */ "./template/js/netlify-cms/preview/virtual-doc.js");
/* harmony import */ var _fetch_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-page */ "./template/js/netlify-cms/preview/fetch-page.js");
/* harmony import */ var _base_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-preview */ "./template/js/netlify-cms/preview/base-preview.js");



class SearchPreview extends _base_preview__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    super();
    this._ = { ...this._,
      state: {
        title: 'Search'
      },
      route: {
        path: '/'
      }
    };
  }

  componentDidMount() {
    this.fetchPage();
  }

  async fetchPage() {
    const html = await Object(_fetch_page__WEBPACK_IMPORTED_MODULE_1__["default"])('/search?term=');
    const vDoc = Object(_virtual_doc__WEBPACK_IMPORTED_MODULE_0__["default"])(html);
    this.setState({
      html,
      vDoc
    });
    this.parseEjs();
  }

}

/***/ }),

/***/ "./template/js/netlify-cms/preview/settings/general.js":
/*!*************************************************************!*\
  !*** ./template/js/netlify-cms/preview/settings/general.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CodePreview; });
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.url.to-json.js */ "./node_modules/core-js/modules/web.url.to-json.js");
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-preview */ "./template/js/netlify-cms/preview/base-preview.js");
/* harmony import */ var _virtual_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../virtual-doc */ "./template/js/netlify-cms/preview/virtual-doc.js");
/* harmony import */ var _fetch_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fetch-page */ "./template/js/netlify-cms/preview/fetch-page.js");





const themesUrl = 'https://cdn.jsdelivr.net/gh/ecomplus/storefront@themes-dist';

const fetchCssTheme = theme => {
  if (theme === '_') {
    return Promise.resolve('');
  }

  return window.fetch(`${themesUrl}/${theme}.css`);
};

class CodePreview extends _base_preview__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    super();
    this._ = { ...this._,
      state: {
        title: 'Geral'
      },
      route: {
        path: '/'
      }
    };
    this.bg_color = '';
    this.primary_color = '';
    this.secondary_color = '';
    this.logo = '';
    this.bootswatch = '_';
    this.custom = '_';
  }

  fetchPage() {
    return Object(_fetch_page__WEBPACK_IMPORTED_MODULE_4__["default"])('/index.html').then(html => {
      const vDoc = Object(_virtual_doc__WEBPACK_IMPORTED_MODULE_3__["default"])(html);
      this.setState({
        html,
        vDoc
      });
    }).catch(err => {
      console.log('Failed to fetch page home', err);
    });
  }

  componentDidUpdate(_, prevState) {
    setTimeout(async () => {
      const {
        vDoc
      } = this.state;
      const {
        entry
      } = this.props;
      const entries = entry.getIn(['data']).toJSON();
      const propsArray = ['name', 'bg_color', 'primary_color', 'secondary_color'];
      let change = propsArray.some(prop => entries[prop] && entries[prop] !== this[prop]);

      if (this.logo !== entries.logo) {
        this.logo = entries.logo;
        const $logo = vDoc.getElementById('logo');
        $logo.src = this.logo;
        $logo.alt = entries.name;
        change = true;
      }

      let $styleTag = vDoc.getElementById('override_vars');

      if (!$styleTag) {
        $styleTag = document.createElement('div');
        $styleTag.id = 'override_vars';
        vDoc.body.appendChild($styleTag);
      }

      $styleTag.innerHTML = `<style>
        :root {
          --primary: ${entries.primary_color};
          --primary-light: ${entries.primary_color};
          --primary-lighter: ${entries.primary_color};
          --secondary: ${entries.secondary_color};
          --secondary-light: ${entries.secondary_color};
          --secondary-lighter: ${entries.secondary_color};
        }
        body .btn-primary,
        body .alert-primary,
        body .badge-primary {
          background-color: ${entries.primary_color};
          border-color: ${entries.primary_color};
        }
        body .btn-outline-primary {
          border-color: ${entries.primary_color};
        }
        body .btn-secondary,
        body .alert-secondary,
        body .badge-secondary {
          background-color: ${entries.secondary_color};
          border-color: ${entries.secondary_color};
        }
        body .btn-outline-secondary {
          border-color: ${entries.secondary_color};
        }
        body .text-primary,
        body a,
        body a:hover {
          color: ${entries.primary_color};
        }
        .lozad-delay.fade {
          opacity: 1;
        }
      </style>`;
      const {
        theme
      } = entries;

      if (this.bootswatch !== theme.bootswatch || this.custom !== theme.custom) {
        const promises = [];
        let styles = '';

        for (const name in theme) {
          if (theme[name]) {
            promises.push(fetchCssTheme(theme[name]).then(async response => {
              styles += await response.text();
              styles += ' ';
            }).catch(() => {
              console.log('theme not found ignored');
            }));
          }
        }

        await Promise.all(promises).then(() => {
          let $themesTag = vDoc.getElementById('storefront-themes');

          if (!$themesTag) {
            $themesTag = document.createElement('div');
            $themesTag.id = 'storefront-themes';
            vDoc.body.appendChild($themesTag);
          }

          $themesTag.innerHTML = `<style>${styles}</style>`;
          this.bootswatch = theme.bootswatch;
          this.custom = theme.custom;
          change = true;
        });
      }

      if (change) {
        propsArray.forEach(prop => this[prop] = entries[prop]);
        let parseHtml;

        if (vDoc.childNodes && vDoc.childNodes.length) {
          parseHtml = vDoc.childNodes[1].innerHTML.replace(/data-src=/ig, 'src=');
        }

        this.setState({
          parseHtml,
          vDoc
        });
      }
    }, 500);
  }

}

/***/ }),

/***/ "./template/js/netlify-cms/preview/virtual-doc.js":
/*!********************************************************!*\
  !*** ./template/js/netlify-cms/preview/virtual-doc.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// creates DOM document object for preview
/* harmony default export */ __webpack_exports__["default"] = (html => {
  const parser = new window.DOMParser();
  const vDocument = parser.parseFromString(html, 'text/html'); // find script tags with hidden components

  const $dataCmsHtml = vDocument.querySelectorAll('[data-cms-html]'); // replace script tag with your inner content

  if ($dataCmsHtml.length) {
    for (let i = 0; i < $dataCmsHtml.length; i++) {
      const element = $dataCmsHtml[i];
      const content = element.text;
      const childs = element.parentNode.childNodes;

      for (let j = 0; j < childs.length; j++) {
        const child = childs[j];

        if (child.nodeName === 'SCRIPT') {
          const el = document.createElement('div');
          el.innerHTML = content;
          element.parentNode.replaceChild(el, child);
        }
      }
    }
  }

  return vDocument;
});

/***/ }),

/***/ "./template/pages/@/sections/banner-slider.ejs":
/*!*****************************************************!*\
  !*** ./template/pages/@/sections/banner-slider.ejs ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<%\nconst timestamp = Date.now()\nlet slides\nif (Array.isArray(opt.slides)) {\n  slides = opt.slides.filter(({ start, end }) => {\n    if (start && timestamp < new Date(start).getTime()) {\n      return false\n    }\n    if (end && timestamp > new Date(end).getTime()) {\n      return false\n    }\n    return true\n  })\n}\n\nif (slides && slides.length) {\n  let style = ''\n  for (let i = 0; i < 2; i++) {\n    const img = slides[0][i ? 'mobile_img' : 'img']\n    if (img) {\n      const { width, height } = _.tryImageSize(img)\n      if (width) {\n        style += '--banner-aspect-ratio'\n        if (i > 0) {\n          style += '-mobile'\n        }\n        style += `:${Math.ceil(height / width * 1000) / 1000};`\n      }\n    }\n  }\n  %>\n\n  <div class=\"banner-slider\" style=\"<%- style %>\">\n    <div class=\"glide\" data-autoplay=\"<%= opt.autoplay %>\">\n      <div class=\"glide__track\" data-glide-el=\"track\">\n        <ul class=\"glide__slides banner-slider__slides\">\n          <% for (let i = 0; i < slides.length; i++) { %>\n            <li class=\"glide__slide\">\n              <%- await include('/@/sections/inc/banner', {\n                _, opt: { ...slides[i], height_auto: true, sync_load: i === 0 }\n              }) %>\n            </li>\n          <% } %>\n        </ul>\n\n        <% if (slides.length > 1) { %>\n          <div class=\"glide__arrows d-none d-md-block\" data-glide-el=\"controls\">\n            <button\n              class=\"btn glide__arrow glide__arrow--left\"\n              data-glide-dir=\"<\"\n              aria-label=\"<%= _.dictionary('previous') %>\"\n            >\n              <i class=\"fas fa-chevron-left\"></i>\n            </button>\n            <button\n              class=\"btn glide__arrow glide__arrow--right\"\n              data-glide-dir=\">\"\n              aria-label=\"<%= _.dictionary('next') %>\"\n            >\n              <i class=\"fas fa-chevron-right\"></i>\n            </button>\n          </div>\n\n          <div class=\"glide__bullets\" data-glide-el=\"controls[nav]\">\n            <% slides.forEach((_, index) => { %>\n              <button\n                class=\"glide__bullet\"\n                data-glide-dir=\"=<%= index %>\"\n                aria-label=\"<%= `${(index + 1)}° banner` %>\"\n              ></button>\n            <% }) %>\n          </div>\n        <% } %>\n      </div>\n    </div>\n  </div>\n<% } %>\n");

/***/ }),

/***/ "./template/pages/@/sections/banners-grid.ejs":
/*!****************************************************!*\
  !*** ./template/pages/@/sections/banners-grid.ejs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<% if (Array.isArray(opt.banners) && opt.banners.length) { %>\n  <% const colSize = Math.ceil(12 / opt.banners.length) %>\n  <div class=\"banners-grid my-3 my-md-4 my-lg-5\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <% for (let i = 0; i < opt.banners.length; i++) { %>\n          <div class=\"col-12 col-lg-<%= colSize %> mb-3 mb-lg-0\">\n            <%- await include('/@/sections/inc/banner', { _, opt: opt.banners[i] }) %>\n          </div>\n        <% } %>\n      </div>\n    </div>\n  </div>\n<% } %>\n");

/***/ }),

/***/ "./template/pages/@/sections/blog.ejs":
/*!********************************************!*\
  !*** ./template/pages/@/sections/blog.ejs ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<%\nconst posts = _.cms('posts')\nif (Array.isArray(posts) && posts.length) {\n  %>\n    <div class=\"blog my-4 my-lg-5\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <% posts.forEach(slug => { %>\n            <% const { title, thumbnail, description } = _.cms(`posts/${slug}`) %>\n            <div class=\"col col-md-6 col-lg-4\">\n              <div class=\"card\">\n                <% if (thumbnail) { %>\n                  <a href=\"/posts/<%= slug %>\">\n                    <img\n                      src=\"<%= thumbnail %>\"\n                      class=\"card-img-top\"\n                      alt=\"<%= title %>\"\n                    >\n                  </a>\n                <% } %>\n                <div class=\"card-body\">\n                  <h5 class=\"card-title\">\n                    <a href=\"/posts/<%= slug %>\">\n                      <%= title %>\n                    </a>\n                  </h5>\n                  <p class=\"card-text\">\n                    <%= description %>\n                  </p>\n                </div>\n              </div>\n            </div>\n          <% }) %>\n        </div>\n      </div>\n    </div>\n  <%\n}\n%>\n");

/***/ }),

/***/ "./template/pages/@/sections/brand-retail.ejs":
/*!****************************************************!*\
  !*** ./template/pages/@/sections/brand-retail.ejs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<%\nconst search = new _.EcomSearch()\nsearch.setBrandNames([_.state.name])\n%>\n\n<div class=\"brand-retail\">\n  <%- await include('/@/sections/inc/retail-grid', {\n    _, opt: {\n      search,\n      brand_names: [_.state.name],\n      sort: opt.sort\n    }\n  }) %>\n</div>\n");

/***/ }),

/***/ "./template/pages/@/sections/breadcrumbs.ejs":
/*!***************************************************!*\
  !*** ./template/pages/@/sections/breadcrumbs.ejs ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<%\nconst breadcrumbs = opt.breadcrumbs && opt.breadcrumbs.length\n  ? opt.breadcrumbs\n  : _.breadcrumbs || (_.state.title && [{\n    name: _.state.title,\n    link: _.route.path\n  }])\n\nif (Array.isArray(breadcrumbs) && breadcrumbs.length) {\n  %>\n  <div class=\"container\">\n    <nav aria-label=\"breadcrumb\">\n      <ol class=\"breadcrumb my-2 my-sm-3<%= breadcrumbs.length < 2 ? ' d-none d-md-flex' : '' %>\">\n        <li class=\"breadcrumb-item d-none d-md-block\">\n          <a href=\"/\">\n            <i class=\"fas fa-home\"></i>\n          </a>\n        </li>\n        <% breadcrumbs.forEach(({ name, link }, index) => { %>\n          <% if (index < breadcrumbs.length - 1) { %>\n            <li\n              <% if (index === breadcrumbs.length - 2) { %>\n                class=\"breadcrumb-item\"\n              <% } else { %>\n                class=\"breadcrumb-item d-none d-md-block\"\n              <% } %>\n            >\n              <a href=\"<%= link %>\">\n                <%= name %>\n              </a>\n            </li>\n          <% } else { %>\n            <li class=\"breadcrumb-item d-none d-md-block active\" aria-current=\"page\">\n              <%= name %>\n            </li>\n          <% } %>\n        <% }) %>\n      </ol>\n    </nav>\n  </div>\n\n  <script type=\"application/ld+json\"><%-\n    JSON.stringify({\n      '@context': 'https://schema.org',\n      '@type': 'BreadcrumbList',\n      itemListElement: [\n        {\n          '@type': 'ListItem',\n          position: 1,\n          item: {\n            '@id': `https://${_.settings.domain}/`,\n            name: 'Homepage'\n          }\n        }\n      ].concat(breadcrumbs.map(({ name, link }, index) => {\n        return {\n          '@type': 'ListItem',\n          position: index + 2,\n          item: {\n            '@id': `https://${_.settings.domain}${link}`,\n            name\n          }\n        }\n      }))\n    })\n  %></script>\n<% } %>\n");

/***/ }),

/***/ "./template/pages/@/sections/category-retail.ejs":
/*!*******************************************************!*\
  !*** ./template/pages/@/sections/category-retail.ejs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<%\nconst search = new _.EcomSearch()\nsearch\n  .setCategoryNames([_.state.name])\n  .setSortOrder(opt.sort)\nawait search.fetch()\nlet items = await search.getItems()\nconst categoryNames = [_.state.name]\n\nif (!items.length) {\n  const childCategories = _.categories.filter(({ parent }) => {\n    return parent && parent._id === _.state._id\n  })\n  if (childCategories.length) {\n    childCategories.forEach(({ name }) => {\n      categoryNames.push(name)\n    })\n    search\n      .setCategoryNames(categoryNames)\n      .setSortOrder(opt.sort)\n    await search.fetch()\n    items = await search.getItems()\n  }\n}\n%>\n\n<div class=\"category-retail\">\n  <%- await include('/@/sections/inc/retail-grid', {\n    _, opt: {\n      items,\n      search,\n      category_names: categoryNames,\n      sort: opt.sort\n    }\n  }) %>\n</div>\n");

/***/ }),

/***/ "./template/pages/@/sections/collection-retail.ejs":
/*!*********************************************************!*\
  !*** ./template/pages/@/sections/collection-retail.ejs ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<%\nif (_.state.products && _.state.products.length) {\n  const search = new _.EcomSearch()\n  search.setProductIds(_.state.products.slice(0, 70))\n  %>\n  <div class=\"collection-retail\">\n    <%- await include('/@/sections/inc/retail-grid', {\n      _, opt: { search, sort: opt.sort }\n    }) %>\n  </div>\n  <%\n}\n%>\n");

/***/ }),

/***/ "./template/pages/@/sections/collection-shelf.ejs":
/*!********************************************************!*\
  !*** ./template/pages/@/sections/collection-shelf.ejs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<%\nlet { title, link, shuffle, headless } = opt\nlet items, collection\nif (opt.sort || opt.collection_id) {\n  let search, productIds\n  if (opt.collection_id) {\n    const [_id, resource, name, path] = opt.collection_id.split(':')\n    if (!title) {\n      title = name\n    }\n    if (!link) {\n      link = path\n    }\n\n    if (resource === 'categories') {\n      search = new _.EcomSearch().setCategoryIds([_id])\n    } else if (resource === 'brands') {\n      search = new _.EcomSearch().setBrandIds([_id])\n    } else {\n      let res\n      try {\n        res = await _.ecomClient.store({\n          url: `/collections/${_id}.json`\n        })\n      } catch (err) {\n        console.error(err)\n      }\n      if (res) {\n        collection = res.data\n        productIds = collection.products\n        if (Array.isArray(productIds) && productIds.length) {\n          search = new _.EcomSearch().setProductIds(productIds.slice(0, 70))\n        }\n      }\n    }\n  } else {\n    search = new _.EcomSearch()\n  }\n\n  if (search) {\n    if (opt.sort) {\n      search.setSortOrder(opt.sort)\n    }\n    if (opt.limit > 0) {\n      search.setPageSize(opt.limit)\n    }\n    if (opt.page >= 2) {\n      search.setPageNumber(opt.page)\n    }\n    try {\n      await search.fetch()\n      items = search.getItems()\n    } catch (err) {\n      console.error(err)\n    }\n    if (items && productIds && !opt.sort && !shuffle) {\n      items.sort((a, b) => {\n        return productIds.indexOf(a._id) < productIds.indexOf(b._id) ? -1 : 1\n      })\n    }\n  }\n} else {\n  const size = opt.limit || 24\n  const offset = opt.page >= 2 ? (opt.page - 1) * size : 0\n  items = _.items.slice(offset, offset + size)\n}\n%>\n\n<div class=\"collection-shelf my-lg-5\">\n  <%- await include('/@/sections/inc/products-carousel', {\n    _, opt: { items, collection, title, link, shuffle, headless }\n  }) %>\n</div>\n");

/***/ }),

/***/ "./template/pages/@/sections/custom-content.ejs":
/*!******************************************************!*\
  !*** ./template/pages/@/sections/custom-content.ejs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"custom-content\">\n  <%- await include('/@/sections/inc/md-content', { _, opt }) %>\n</div>\n");

/***/ }),

/***/ "./template/pages/@/sections/custom-html.ejs":
/*!***************************************************!*\
  !*** ./template/pages/@/sections/custom-html.ejs ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<% if (typeof opt.html === 'string') { %>\n  <section class=\"custom-html my-4 my-lg-5\">\n    <div class=\"container\">\n      <div class=\"html-clearfix\">\n        <%- opt.html %>\n      </div>\n    </div>\n  </section>\n<% } %>\n");

/***/ }),

/***/ "./template/pages/@/sections/document-banner.ejs":
/*!*******************************************************!*\
  !*** ./template/pages/@/sections/document-banner.ejs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<%\nif (Array.isArray(_.state.pictures) && _.state.pictures.length) {\n  const className = _.route.resource === 'categories' ? 'category'\n    : _.route.resource.slice(0, -1)\n  %>\n  <div class=\"hero-banner <%= className %>-banner\">\n    <% if (_.state.pictures.length === 1) { %>\n      <img\n        class=\"img-fluid lozad fade\"\n        data-src=\"<%= _.state.pictures[0].url %>\"\n        alt=\"<%= _.state.pictures[0].alt %>\"\n      >\n    <% } else { %>\n      <%- await include('/@/sections/banner-slider', {\n        _, opt: {\n          slides: _.state.pictures.map(({ url, alt }) => ({ img: url, alt }))\n        }\n      }) %>\n    <% } %>\n  </div>\n<% } %>\n");

/***/ }),

/***/ "./template/pages/@/sections/document-description.ejs":
/*!************************************************************!*\
  !*** ./template/pages/@/sections/document-description.ejs ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<%\nif (_.state.body_html) {\n  const className = _.route.resource === 'categories' ? 'category'\n    : _.route.resource.slice(0, -1)\n  %>\n  <section class=\"<%= className %>-description my-4 my-lg-5\">\n    <div class=\"container\">\n      <div class=\"html-clearfix\">\n        <%- _.state.body_html %>\n      </div>\n    </div>\n  </section>\n<% } %>\n");

/***/ }),

/***/ "./template/pages/@/sections/inc/banner.ejs":
/*!**************************************************!*\
  !*** ./template/pages/@/sections/inc/banner.ejs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<%\nif (opt.img) {\n  const { width, height } = _.tryImageSize(opt.img)\n  const sources = [{ src: opt.img }]\n  if (opt.mobile_img) {\n    sources[0].media = '(min-width: 576px)'\n    sources.push({\n      src: opt.mobile_img,\n      media: '(min-width: 100px)'\n    })\n  }\n  sources.forEach(source => {\n    if (source.src.endsWith('.webp')) {\n      source.type = 'image/webp'\n      sources.push({\n        src: source.src.replace('.webp', '.png'),\n        media: source.media,\n        type: 'image/png'\n      })\n    }\n  })\n  %>\n\n  <div class=\"banner\">\n    <a\n      href=\"<%= opt.link || 'javascript:;' %>\"\n      aria-label=\"<%= opt.alt %>\"\n    >\n      <picture\n        <% if (opt.sync_load) { %>\n          class=\"img-fluid\"\n        <% } else { %>\n          class=\"lozad fade img-fluid\"\n          data-iesrc=\"<%= opt.img.replace('.webp', '.png') %>\"\n          data-alt=\"<%= opt.alt %>\"\n        <% } %>\n        <% if (!opt.height_auto && width) { %>\n          data-width=\"<%= width %>\"\n          data-height=\"<%= height %>\"\n        <% } %>\n      >\n        <% sources.forEach(({ src, media, type }) => { %>\n          <source\n            srcset=\"<%= src %>\"\n            media=\"<%- media %>\"\n            <% if (type) { %>\n              type=\"<%- type %>\"\n            <% } %>\n          >\n        <% }) %>\n        <% if (opt.sync_load) { %>\n            <img\n              src=\"<%= opt.img.replace('.webp', '.png') %>\"\n              alt=\"<%= opt.alt %>\"\n              <% if (width) { %>\n                width=\"<%= width %>\"\n                height=\"<%= height %>\"\n              <% } %>\n            >\n        <% } %>\n      </picture>\n    </a>\n  </div>\n  <%\n}\n%>\n");

/***/ }),

/***/ "./template/pages/@/sections/inc/loading.ejs":
/*!***************************************************!*\
  !*** ./template/pages/@/sections/inc/loading.ejs ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loading p-4 p-lg-5 my-md-3 my-lg-5\">\n  <div class=\"spinner-border\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n");

/***/ }),

/***/ "./template/pages/@/sections/inc/md-content.ejs":
/*!******************************************************!*\
  !*** ./template/pages/@/sections/inc/md-content.ejs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<%\nconst markdown = (typeof opt === 'object' && opt.markdown) || _.state.body\nif (markdown) {\n  %>\n  <section class=\"md-content mb-5 pt-1 pt-sm-2 pt-lg-3\">\n    <div class=\"container\">\n      <%- _.md.render(markdown) %>\n    </div>\n  </section>\n<% } %>\n");

/***/ }),

/***/ "./template/pages/@/sections/inc/product-item.ejs":
/*!********************************************************!*\
  !*** ./template/pages/@/sections/inc/product-item.ejs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<%\nconst itemData = {}\nlet itemDataFields = ['_id', 'sku', 'slug', 'quantity']\nif (Array.isArray(_.itemDataFields)) {\n  itemDataFields = itemDataFields.concat(_.itemDataFields)\n}\nitemDataFields.forEach(field => itemData[field] = opt.item[field])\nitemData.name = _.ecomUtils.name(opt.item)\nitemData.price = _.ecomUtils.price(opt.item)\n\nconst imgObj = _.ecomUtils.img(opt.item)\nif (imgObj) {\n  itemData.pictures = [{\n    _id: _.ecomUtils.randomObjectId(),\n    normal: imgObj\n  }]\n}\n%>\n\n<article class=\"product-item\" data-product=\"<%= JSON.stringify(itemData) %>\">\n  <div\n    class=\"product-card\"\n    data-product-id=\"<%= itemData._id %>\"\n    data-sku=\"<%= itemData.sku %>\"\n    <% if (!opt.static) { %>\n      data-to-render=\"true\"\n    <% } %>\n  >\n    <!--\n      `ProductCard` should be rendered (hydrated) here:\n      https://developers.e-com.plus/storefront/@ecomplus/storefront-components/docs/ProductCard.html\n    -->\n    <a\n      href=\"/<%= itemData.slug %>\"\n      class=\"product-card__link\"\n      title=\"<%= itemData.name %>\"\n    >\n      <!-- Custom code on product card top wrapped by link:\n      <span data-slot=\"header\">\n      </span>\n      -->\n\n      <div class=\"product-card__pictures\">\n        <!-- Picture(s) will be inserted and loaded dynamically within `ProductCard` -->\n        <% if (imgObj) { %>\n          <picture class=\"product-card__picture\">\n            <img\n              data-src=\"<%= imgObj.url %>\"\n              alt=\"<%= imgObj.alt %>\"\n              class=\"lozad-delay fade\"\n              <% if (imgObj.url.startsWith('https://ecoms1.com/')) { %>\n                crossorigin=\"anonymous\"\n              <% } %>\n            >\n          </picture>\n        <% } %>\n      </div>\n\n      <div data-slot=\"title\">\n        <h3 class=\"product-card__name\">\n          <%= itemData.name %>\n        </h3>\n      </div>\n    </a>\n\n    <div class=\"product-card__prices prices\">\n      <strong class=\"prices__value\">\n        <% if (opt.item.available && opt.item.visible && _.ecomUtils.inStock(opt.item)) { %>\n          <%= _.ecomUtils.formatMoney(itemData.price) %>\n        <% } else { %>\n          --\n        <% } %>\n      </strong>\n    </div>\n\n    <!-- Customize add to cart button content:\n    <div data-slot=\"buy-button-content\">\n      <i class=\"fas fa-shopping-bag mr-1\"></i>\n      {{ _.dictionary('buy') }}\n    </div>\n    -->\n\n    <div class=\"spinner-border spinner-border-sm fade\" role=\"status\">\n      <span class=\"sr-only\">Loading...</span>\n    </div>\n\n    <%- await include('/@/helpers/widgets-append', {\n      _, opt, field: 'productCardSlots'\n    }) %>\n  </div>\n\n  <%- await include('/@/helpers/widgets-append', {\n    _, opt, field: 'productItemAppend'\n  }) %>\n</article>\n");

/***/ }),

/***/ "./template/pages/@/sections/inc/products-carousel.ejs":
/*!*************************************************************!*\
  !*** ./template/pages/@/sections/inc/products-carousel.ejs ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<% if (Array.isArray(opt.items) && opt.items.length) {\n  const title = opt.title ||\n    (opt.collection && opt.collection.name) ||\n    _.dictionary('popularProducts')\n  const link = opt.link || (opt.collection && `/${opt.collection.slug}`)\n\n  if (opt.shuffle) {\n    let m = opt.items.filter(item => {\n      return item.available && _.ecomUtils.inStock(item)\n    }).length\n    let t, i\n    while (m) {\n      i = Math.floor(Math.random() * m--)\n      t = opt.items[m]\n      opt.items[m] = opt.items[i]\n      opt.items[i] = t\n    }\n  }\n  %>\n\n  <section\n    class=\"products-carousel\"\n    data-size=\"<%= opt.items.length %>\"\n    <% if (opt.collection) { %>\n      data-collection-id=\"<%= opt.collection._id %>\"\n    <% } %>\n    data-title=\"<%= title %>\"\n  >\n    <% if (!opt.headless) { %>\n      <h4 class=\"products-carousel__title\">\n        <% if (opt.title || opt.collection) { %>\n          <% if (link) { %>\n            <a href=\"<%= link %>\">\n              <%= title %>\n            </a>\n          <% } else { %>\n            <span><%= title %></span>\n          <% } %>\n        <% } else { %>\n          <a href=\"/search\">\n            <%= title %>\n          </a>\n        <% } %>\n      </h4>\n    <% } %>\n\n    <div\n      class=\"glide\"\n      data-wait-mutation=\"true\"\n      data-autoplay=\"<%= opt.autoplay %>\"\n      data-per-view=\"4\"\n      data-per-view-md=\"3\"\n      data-per-view-sm=\"2\"\n    >\n      <div class=\"glide__track\" data-glide-el=\"track\">\n        <ul class=\"glide__slides products-carousel__list\">\n          <% for (let i = 0; i < opt.items.length; i++) { %>\n            <li class=\"glide__slide products-carousel__item\">\n              <%- await include('/@/sections/inc/product-item', {\n                _, opt: { item: opt.items[i] }\n              }) %>\n            </li>\n          <% } %>\n        </ul>\n\n        <div\n          class=\"glide__arrows glide__arrows--outer\"\n          data-glide-el=\"controls\"\n        >\n          <button\n            class=\"btn glide__arrow glide__arrow--left\"\n            data-glide-dir=\"<\"\n            aria-label=\"<%= _.dictionary('previous') %>\"\n          >\n            <i class=\"fas fa-chevron-left\"></i>\n          </button>\n          <button\n            class=\"btn glide__arrow glide__arrow--right\"\n            data-glide-dir=\">\"\n            aria-label=\"<%= _.dictionary('next') %>\"\n          >\n            <i class=\"fas fa-chevron-right\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </section>\n<% } %>\n");

/***/ }),

/***/ "./template/pages/@/sections/inc/recommendations-shelf.ejs":
/*!*****************************************************************!*\
  !*** ./template/pages/@/sections/inc/recommendations-shelf.ejs ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<%\nconst { title, showcaseType } = opt\nif (showcaseType) {\n  const url = `/products/${_.state._id}/${showcaseType}.json`\n  try {\n    const { data } = await _.ecomClient.graphs({ url })\n    const productIds = _.ecomUtils.recommendedIds(data)\n    let items = []\n    if (Array.isArray(productIds) && productIds.length) {\n      const search = new _.EcomSearch()\n      await search.setProductIds(productIds).fetch()\n      items = search.getItems()\n    }\n    %>\n    <%- await include('/@/sections/inc/products-carousel', {\n      _, opt: { items, title, showcaseType }\n    }) %>\n    <%\n  } catch (err) {\n    console.error(err)\n  }\n}\n%>\n");

/***/ }),

/***/ "./template/pages/@/sections/inc/retail-grid.ejs":
/*!*******************************************************!*\
  !*** ./template/pages/@/sections/inc/retail-grid.ejs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<%\nlet items\nif (!opt.items) {\n  const search = opt.search || new _.EcomSearch()\n  if (opt.sort) {\n    search.search.setSortOrder(opt.sort)\n  }\n  await search.search.fetch()\n  items = await search.search.getItems()\n} else {\n  items = opt.items\n}\n%>\n\n<section class=\"retail-grid\">\n  <div class=\"container\">\n    <div\n      id=\"search-engine\"\n      <% if (opt.category_names) { %>\n        data-categories=\"<%= JSON.stringify(opt.category_names) %>\"\n      <% } %>\n      <% if (opt.brand_names) { %>\n        data-brands=\"<%= JSON.stringify(opt.brand_names) %>\"\n      <% } %>\n      <% if (opt.sort) { %>\n        data-sort=\"<%= opt.sort %>\"\n      <% } %>\n      <% if (opt.disable_filters) { %>\n        data-disable-filters=\"true\"\n      <% } %>\n      <% if (opt.disable_load_more) { %>\n        data-disable-load-more=\"true\"\n      <% } %>\n    >\n      <% if (items.length) { %>\n        <div id=\"search-engine-dock\">\n          <!--\n            `SearchEngine` should be hydrated here:\n            https://developers.e-com.plus/storefront/@ecomplus/storefront-components/docs/SearchEngine.html\n          -->\n        </div>\n\n        <div id=\"search-engine-snap\">\n          <article class=\"search-engine__retail\">\n            <div class=\"row\">\n              <% for (let i = 0; i < items.length; i++) { %>\n                <div class=\"col-6 col-md-4 col-lg-3\">\n                  <%- await include('/@/sections/inc/product-item', {\n                    _, opt: { item: items[i] }\n                  }) %>\n                </div>\n              <% } %>\n            </div>\n          </article>\n        </div>\n      <% } %>\n    </div>\n\n    <div id=\"search-pagination\">\n      <!--\n        `APagination` may be rendered here when enabled:\n        https://developers.e-com.plus/storefront/@ecomplus/storefront-components/docs/APagination.html\n      -->\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./template/pages/@/sections/inc/timer.ejs":
/*!*************************************************!*\
  !*** ./template/pages/@/sections/inc/timer.ejs ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<%\nconst timestamp = Date.now()\nif (!opt.start || timestamp > new Date(opt.start).getTime()) {\n  if (timestamp < new Date(opt.end).getTime()) {\n    %>\n    <div\n      class=\"timer\"\n      data-end=\"<%= opt.end %>\"\n      data-max-hours=\"<%= opt.max_hours %>\"\n    >\n      <div class=\"timer__icon\">\n        <i class=\"fas fa-stopwatch\"></i>\n      </div>\n      <span class=\"timer__count\">__:__:__</span>\n      <% if (opt.notes) { %>\n        <div class=\"timer__notes\">\n          <%= opt.notes %>\n        </div>\n      <% } %>\n    </div>\n    <%\n  }\n}\n%>\n");

/***/ }),

/***/ "./template/pages/@/sections/info-bar.ejs":
/*!************************************************!*\
  !*** ./template/pages/@/sections/info-bar.ejs ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<%\nconst info = _.cms('info')\nconst barCols = []\n;[\n  ['shipping', 'shipping-fast'],\n  ['installments', 'credit-card'],\n  ['exchange', 'exchange-alt'],\n  ['promo', 'percent']\n].forEach(([prop, icon]) => {\n  if (info[prop] && info[prop].show) {\n    const { link, text } = info[prop]\n    barCols.push({ link, text, icon })\n  }\n})\n%>\n\n<% if (barCols.length) { %>\n  <section class=\"info-bar\">\n    <div class=\"container\">\n      <div class=\"info-bar__nav row\">\n        <% barCols.forEach(({ link, icon, text }) => { %>\n          <div class=\"col-auto col-sm-6 col-lg\">\n            <a class=\"info-bar__item\" href=\"<%= link || 'javascript:;' %>\">\n              <span class=\"rounded-icon\">\n                <i class=\"fas fa-<%= icon %>\"></i>\n              </span>\n              <div class=\"ml-2 ml-md-3\">\n                <%= text %>\n              </div>\n            </a>\n          </div>\n        <% }) %>\n      </div>\n    </div>\n  </section>\n<% } %>\n");

/***/ }),

/***/ "./template/pages/@/sections/offers-timer.ejs":
/*!****************************************************!*\
  !*** ./template/pages/@/sections/offers-timer.ejs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<%\nif (Array.isArray(opt.offers) && opt.offers.length) {\n  const search = new _.EcomSearch()\n  await search.setProductIds(opt.offers).fetch(true)\n  const items = search.getItems().filter(item => _.ecomUtils.inStock(item))\n  %>\n\n  <section class=\"offers-timer my-4 my-lg-5\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div\n          <% if (items.length <= 3) { %>\n            class=\"col-12 col-md-<%= (7 - items.length) %>\"\n          <% } else { %>\n            class=\"col-12 col-lg-3\"\n          <% } %>\n        >\n          <%- await include('/@/sections/inc/timer', { _, opt }) %>\n        </div>\n\n        <div class=\"col-12 col-md\">\n          <div class=\"row\">\n            <% for (let i = 0; i < items.length; i++) { %>\n              <div class=\"col-6 col-md\">\n                <%- await include('/@/sections/inc/product-item', {\n                  _, opt: { item: items[i] }\n                }) %>\n              </div>\n            <% } %>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n<% } %>\n");

/***/ }),

/***/ "./template/pages/@/sections/page-title.ejs":
/*!**************************************************!*\
  !*** ./template/pages/@/sections/page-title.ejs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<%\nconst title = opt.title || _.state.title || _.state.name\nif (title) {\n  %>\n  <div class=\"page-title container mt-4 mb-4 mb-lg-5\">\n    <div class=\"page-title__head\">\n      <% if (_.state.logo && _.state.logo.url) { %>\n        <img\n          class=\"page-title__logo\"\n          src=\"<%= _.state.logo.url %>\"\n          alt=\"<%= _.state.logo.alt %>\"\n        >\n      <% } %>\n      <h1 class=\"my-0\">\n        <%= title %>\n      </h1>\n    </div>\n    <%\n    const description = opt.description || _.state.short_description\n    if (description) {\n      %>\n      <div class=\"page-title__short-description lead\">\n        <%= description %>\n      </div>\n    <% } %>\n  </div>\n<% } %>\n");

/***/ }),

/***/ "./template/pages/@/sections/product-block.ejs":
/*!*****************************************************!*\
  !*** ./template/pages/@/sections/product-block.ejs ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"product-block\" class=\"product-block my-4 mb-lg-5\">\n  <div class=\"container\">\n    <section\n      id=\"product\"\n      class=\"product\"\n      data-to-render=\"true\"\n      data-product-id=\"<%= _.state._id %>\"\n      data-sku=\"<%= _.state.sku %>\"\n    >\n      <div id=\"product-dock\">\n        <!--\n          `TheProduct` should be rendered (hydrated) here:\n          https://developers.e-com.plus/storefront/@ecomplus/storefront-components/docs/TheProduct.html\n        -->\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-12 col-md-6 mb-4\">\n          <!-- Picture(s) gallery will be inserted dynamically within `TheProduct` -->\n          <% if (_.state.pictures) { %>\n            <% const imgObj = _.ecomUtils.img(_.state, null, 'big') %>\n            <% if (imgObj) { %>\n              <% const [width, height] = (imgObj.size || '').split('x').map(px => parseInt(px, 10)) %>\n              <div id=\"product-gallery\">\n                <div\n                  class=\"product__picture\"\n                  <% if (width) { %>\n                    style=\"max-width: <%= width %>px\"\n                  <% } %>\n                >\n                  <picture\n                    <% if (width && height) { %>\n                      class=\"picture\"\n                      style=\"--aspect-ratio-pc: <%= Math.round(height * 100 * 10000 / width) / 10000 %>%\"\n                    <% } %>\n                  >\n                    <source\n                      srcset=\"<%= _.ecomUtils.img(_.state).url %>\"\n                      type=\"image/webp\"\n                      media=\"(max-width: 399.98px)\"\n                    >\n                    <source\n                      srcset=\"<%= imgObj.url %>\"\n                      type=\"image/webp\"\n                      media=\"(min-width: 400px)\"\n                    >\n                    <img\n                      src=\"<%= imgObj.url.replace(/\\.webp$/, '') %>\"\n                      alt=\"<%= imgObj.alt || _.state.name %>\"\n                      <% if (imgObj.url.startsWith('https://ecoms1.com/')) { %>\n                        crossorigin=\"anonymous\"\n                      <% } %>\n                      <% if (height) { %>\n                        width=\"<%= width %>\"\n                        height=\"<%= height %>\"\n                      <% } %>\n                    >\n                  </picture>\n                </div>\n              </div>\n            <% } %>\n          <% } %>\n          <!-- Custom additional code on bottom of images gallery -->\n        </div>\n\n        <div class=\"col\">\n          <h1 class=\"product__name\">\n            <%= _.ecomUtils.name(_.state) %>\n          </h1>\n          <p class=\"product__sku\">\n            COD: <%= _.state.sku %>\n          </p>\n\n          <div id=\"product-actions\">\n            <div id=\"product-loading\">\n              <% if (_.state.available && _.state.visible && _.ecomUtils.inStock(_.state)) { %>\n                <div class=\"product__price prices prices--big\">\n                  <strong class=\"prices__value\">\n                    <%= _.ecomUtils.formatMoney(_.ecomUtils.price(_.state)) %>\n                  </strong>\n                </div>\n              <% } %>\n\n              <% if (_.state.variations && _.state.variations.length) { %>\n                <div data-slot=\"variations-info\">\n                  <!-- Custom info for products with variations, such as sizes table link -->\n                </div>\n              <% } %>\n\n              <div class=\"spinner-border m-4\" role=\"status\">\n                <span class=\"sr-only\">Loading...</span>\n              </div>\n\n              <div class=\"product__buy\">\n                <button\n                  type=\"button\"\n                  class=\"btn btn-lg btn-primary\"\n                  onclick=\"ecomCart.addProduct(storefront.context.body)\"\n                  <% if (_.state.variations && _.state.variations.length) { %>\n                    disabled\n                  <% } %>\n                >\n                  <div data-slot=\"buy-button-content\">\n                    <i class=\"fas fa-shopping-bag mr-1\"></i>\n                    <% if (_.state.kit_composition && _.state.kit_composition.length) { %>\n                      <%= _.dictionary('buyKit') %>\n                    <% } else { %>\n                      <%= _.dictionary('buy') %>\n                    <% } %>\n                  </div>\n                </button>\n              </div>\n            </div>\n          </div>\n\n          <% if (_.state.short_description) { %>\n            <p class=\"product__info mt-3 lead\">\n              <%= _.state.short_description %>\n            </p>\n          <% } %>\n        </div>\n      </div>\n\n      <%- await include('/@/helpers/widgets-append', {\n        _, opt: {}, field: 'productSlots'\n      }) %>\n    </section>\n\n    <%- await include('/@/helpers/widgets-append', {\n      _, opt: {}, field: 'productBlockAppend'\n    }) %>\n  </div>\n</div>\n\n<%\nconst productJsonLd = {\n  '@context': 'http://schema.org',\n  '@type': 'Product',\n  sku: _.state.sku,\n  description: _.state.short_description || _.state.meta_description || _.ecomUtils.name(_.state),\n  name: _.ecomUtils.name(_.state),\n  offers: {\n    '@type': 'Offer',\n    url: `https://${_.settings.domain}/${_.state.slug}`,\n    availability: `${(_.ecomUtils.inStock(_.state) ? 'In' : 'OutOf')}Stock`,\n    priceCurrency: _.settings.currency,\n    price: _.ecomUtils.price(_.state),\n    itemCondition: `http://schema.org/${(_.state.condition === 'new' ? 'New' : 'Used')}Condition`,\n    priceValidUntil: _.ecomUtils.onPromotion(_.state) && _.state.price_effective_date && _.state.price_effective_date.end\n           ? _.state.price_effective_date.end.slice(0, 10)\n           : undefined,\n    seller: {\n      '@type': 'Organization',\n      name: _.settings.name || _.store.name\n    }\n  }\n}\nif (_.state.brands && _.state.brands[0]) {\n  productJsonLd.brand = {\n    '@type': 'Brand',\n    name: _.state.brands[0].name\n  }\n}\nif (_.state.pictures && _.state.pictures.length) {\n  productJsonLd.image = _.ecomUtils.img(_.state, null, 'zoom').url\n}\nif (_.state.mpn && _.state.mpn[0]) {\n  productJsonLd.mpn = _.state.mpn[0]\n}\nif (_.state.gtin && _.state.gtin[0]) {\n   productJsonLd.gtin = _.state.gtin[0]\n }\n%>\n<script type=\"application/ld+json\"><%-\n  JSON.stringify(productJsonLd)\n%></script>\n");

/***/ }),

/***/ "./template/pages/@/sections/product-description.ejs":
/*!***********************************************************!*\
  !*** ./template/pages/@/sections/product-description.ejs ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<% if (_.state.body_html) { %>\n  <section id=\"product-description\" class=\"product-description my-4 my-lg-5\">\n    <div class=\"container\">\n      <p class=\"lead\">\n        <a href=\"#description\" name=\"description\">#</a>\n        <%= _.dictionary('productDescription') %>\n      </p>\n      <div class=\"html-clearfix\">\n        <%- _.state.body_html.replace(\n          /<img ([^/>]+)?src=['\"]([^'\"]+)['\"]([^/>]+)?\\/?>/g,\n          '<img class=\"lozad\" data-src=\"$2\" $1 $3>'\n        ).replace(\n          /<img class=\"lozad\" data-src=\"([^'\"]+)\"([^>]+)class=['\"]([^'\"]+)['\"]([^/>]+)?>/g,\n          '<img class=\"lozad $3\" data-src=\"$1\" $2 $4>'\n        ) %>\n      </div>\n    </div>\n  </section>\n<% } %>\n\n<%- await include('/@/helpers/widgets-append', {\n  _, opt: {}, field: 'productDescriptionAppend'\n}) %>\n");

/***/ }),

/***/ "./template/pages/@/sections/product-specifications.ejs":
/*!**************************************************************!*\
  !*** ./template/pages/@/sections/product-specifications.ejs ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<% if (_.state.specifications) { %>\n  <section id=\"product-specs\" class=\"product-specs my-4 my-lg-5\">\n    <div class=\"container\">\n      <p class=\"lead\">\n        <a href=\"#specs\" name=\"specs\">#</a>\n        <%= _.dictionary('productSpecifications') %>\n      </p>\n      <table class=\"table table-striped\">\n        <tbody>\n          <% for (const gridId in _.state.specifications) {\n            if (_.state.specifications[gridId]) {\n              %>\n              <tr>\n                <td class=\"text-muted\">\n                  <%= _.ecomUtils.gridTitle(gridId, _.grids) %>\n                </td>\n                <td>\n                  <%= _.ecomUtils.specTextValue(_.state, gridId, _.grids) %>\n                </td>\n              </tr>\n              <%\n            }\n          } %>\n        </tbody>\n      </table>\n    </div>\n  </section>\n<% } %>\n");

/***/ }),

/***/ "./template/pages/@/sections/recommended-products.ejs":
/*!************************************************************!*\
  !*** ./template/pages/@/sections/recommended-products.ejs ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"recommended-products\">\n  <%- await include('/@/sections/inc/recommendations-shelf', {\n    _, opt: { ...opt, showcaseType: 'recommended' }\n  }) %>\n</div>\n");

/***/ }),

/***/ "./template/pages/@/sections/related-products.ejs":
/*!********************************************************!*\
  !*** ./template/pages/@/sections/related-products.ejs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"recommended-products\">\n  <%- await include('/@/sections/inc/recommendations-shelf', {\n    _, opt: { ...opt, showcaseType: 'related' }\n  }) %>\n</div>\n");

/***/ }),

/***/ "./template/pages/@/sections/responsive-banner.ejs":
/*!*********************************************************!*\
  !*** ./template/pages/@/sections/responsive-banner.ejs ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"responsive-baner my-3 my-lg-4\">\n  <div class=\"container\">\n    <%- await include('/@/sections/inc/banner', { _, opt }) %>\n  </div>\n</div>\n");

/***/ }),

/***/ "./template/pages/@/sections/search-engine.ejs":
/*!*****************************************************!*\
  !*** ./template/pages/@/sections/search-engine.ejs ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"search\">\n  <div class=\"container my-4 my-md-5\">\n    <div id=\"search-engine\">\n      <!--\n        No prerender for search, `SearchEngine` should be rendered here:\n        https://developers.e-com.plus/storefront/@ecomplus/storefront-components/docs/SearchEngine.html\n      -->\n      <%- await include('/@/sections/inc/loading') %>\n    </div>\n    <div id=\"search-pagination\">\n      <!--\n        `APagination` may be rendered here when enabled:\n        https://developers.e-com.plus/storefront/@ecomplus/storefront-components/docs/APagination.html\n      -->\n    </div>\n  </div>\n</section>\n");

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map