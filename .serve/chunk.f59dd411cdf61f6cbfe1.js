(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/@ecomplus/widget-fb-pixel/src/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-fb-pixel/src/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_parse_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/parse-context */ "./node_modules/@ecomplus/widget-fb-pixel/src/lib/parse-context.js");
/* harmony import */ var _lib_watch_app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/watch-app-routes */ "./node_modules/@ecomplus/widget-fb-pixel/src/lib/watch-app-routes.js");
/* harmony import */ var _lib_watch_shopping_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/watch-shopping-cart */ "./node_modules/@ecomplus/widget-fb-pixel/src/lib/watch-shopping-cart.js");



/* harmony default export */ __webpack_exports__["default"] = ((options = {}) => {
  if (typeof window.fbq === 'function') {
    const track = (evName, data = {}, isCustomEv = false) => {
      if (options.debug) {
        console.log('fbq', evName, data);
      }

      window.fbq(isCustomEv ? 'trackCustom' : 'track', evName, data);
    };

    Object(_lib_parse_context__WEBPACK_IMPORTED_MODULE_0__["default"])(track);
    Object(_lib_watch_app_routes__WEBPACK_IMPORTED_MODULE_1__["default"])(track, options);
    Object(_lib_watch_shopping_cart__WEBPACK_IMPORTED_MODULE_2__["default"])(track);
  }
});

/***/ }),

/***/ "./node_modules/@ecomplus/widget-fb-pixel/src/lib/common.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-fb-pixel/src/lib/common.js ***!
  \******************************************************************/
/*! exports provided: currency, getProductData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currency", function() { return currency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductData", function() { return getProductData; });
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");

const currency = _ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__["$ecomConfig"].get('currency') || 'BRL';
const getProductData = body => {
  const data = {
    currency,
    content_ids: [body.sku],
    content_name: body.name,
    value: Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__["price"])(body),
    content_type: 'product'
  };

  if (body.categories && body.categories.length) {
    data.content_category = body.category_tree || body.categories[0].name;
  }

  return data;
};

/***/ }),

/***/ "./node_modules/@ecomplus/widget-fb-pixel/src/lib/parse-context.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-fb-pixel/src/lib/parse-context.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./node_modules/@ecomplus/widget-fb-pixel/src/lib/common.js");

/* harmony default export */ __webpack_exports__["default"] = (fbq => {
  const context = window.storefront && window.storefront.context;

  if (context && context.resource === 'products') {
    fbq('ViewContent', Object(_common__WEBPACK_IMPORTED_MODULE_0__["getProductData"])(context.body));
  }
});

/***/ }),

/***/ "./node_modules/@ecomplus/widget-fb-pixel/src/lib/watch-app-routes.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-fb-pixel/src/lib/watch-app-routes.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecomplus_shopping_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/shopping-cart */ "./node_modules/@ecomplus/shopping-cart/src/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./node_modules/@ecomplus/widget-fb-pixel/src/lib/common.js");


/* harmony default export */ __webpack_exports__["default"] = ((fbq, options) => {
  const router = window.storefrontApp && window.storefrontApp.router;

  if (router) {
    let isCartSent, isCheckoutSent, isPurchaseSent;

    const getPurchaseData = () => {
      const {
        amount
      } = window.storefrontApp;
      const data = {
        value: amount && amount.total || _ecomplus_shopping_cart__WEBPACK_IMPORTED_MODULE_0__["default"].data && _ecomplus_shopping_cart__WEBPACK_IMPORTED_MODULE_0__["default"].data.subtotal || 0,
        currency: _common__WEBPACK_IMPORTED_MODULE_1__["currency"],
        contents: [],
        content_type: 'product'
      };

      if (_ecomplus_shopping_cart__WEBPACK_IMPORTED_MODULE_0__["default"].data && Array.isArray(_ecomplus_shopping_cart__WEBPACK_IMPORTED_MODULE_0__["default"].data.items)) {
        _ecomplus_shopping_cart__WEBPACK_IMPORTED_MODULE_0__["default"].data.items.forEach(({
          sku,
          quantity
        }) => {
          data.contents.push({
            id: sku,
            quantity
          });
        });
      }

      return data;
    };

    const emitCheckout = (step, option) => {
      const purchaseData = getPurchaseData();
      const customData = { ...purchaseData,
        checkout_step: step,
        checkout_option: option
      };

      if (step <= 1 || !isCartSent) {
        fbq('InitiateCheckout', purchaseData);
        fbq('Checkout', customData, true);
        isCartSent = true;
      } else if (!isCheckoutSent) {
        fbq('CheckoutOption', customData, true);
        isCheckoutSent = true;
      }
    };

    const emitPurchase = orderId => {
      if (!isPurchaseSent && options.disablePurchase !== true) {
        fbq('Purchase', { ...getPurchaseData(),
          order_id: orderId
        });
        isPurchaseSent = true;
      }
    };

    const addRouteToData = ({
      name,
      params
    }) => {
      switch (name) {
        case 'cart':
          emitCheckout(1, 'Review Cart');
          break;

        case 'checkout':
          emitCheckout(2, 'Confirm Purchase');
          break;

        case 'confirmation':
          emitPurchase(params.id);
          break;
      }
    };

    if (router.currentRoute) {
      addRouteToData(router.currentRoute);
    }

    router.afterEach(addRouteToData);
  }
});

/***/ }),

/***/ "./node_modules/@ecomplus/widget-fb-pixel/src/lib/watch-shopping-cart.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-fb-pixel/src/lib/watch-shopping-cart.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecomplus_shopping_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/shopping-cart */ "./node_modules/@ecomplus/shopping-cart/src/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./node_modules/@ecomplus/widget-fb-pixel/src/lib/common.js");


/* harmony default export */ __webpack_exports__["default"] = (fbq => {
  _ecomplus_shopping_cart__WEBPACK_IMPORTED_MODULE_0__["default"].on('addItem', ({
    item
  }) => {
    fbq('AddToCart', Object(_common__WEBPACK_IMPORTED_MODULE_1__["getProductData"])(item));
  });
});

/***/ })

}]);
//# sourceMappingURL=chunk.f59dd411cdf61f6cbfe1.js.map