(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

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

/***/ })

}]);
//# sourceMappingURL=chunk.6fcd4777f76ca21a3b37.js.map