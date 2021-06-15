(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/@ecomplus/widget-analytics/src/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-analytics/src/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_watch_app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/watch-app-routes */ "./node_modules/@ecomplus/widget-analytics/src/lib/watch-app-routes.js");
/* harmony import */ var _lib_watch_shopping_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/watch-shopping-cart */ "./node_modules/@ecomplus/widget-analytics/src/lib/watch-shopping-cart.js");


/* harmony default export */ __webpack_exports__["default"] = ((options = {}) => {
  const {
    gaTrackingId
  } = options;
  const {
    gtag
  } = window;

  if (typeof gtag === 'function') {
    Object(_lib_watch_app_routes__WEBPACK_IMPORTED_MODULE_0__["default"])(gtag, gaTrackingId);
    Object(_lib_watch_shopping_cart__WEBPACK_IMPORTED_MODULE_1__["default"])(gtag, gaTrackingId);
  }
});

/***/ }),

/***/ "./node_modules/@ecomplus/widget-analytics/src/lib/watch-app-routes.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-analytics/src/lib/watch-app-routes.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecomplus_widget_tag_manager_src_lib_watch_app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/widget-tag-manager/src/lib/watch-app-routes */ "./node_modules/@ecomplus/widget-tag-manager/src/lib/watch-app-routes.js");

const {
  location,
  $
} = window;
/* harmony default export */ __webpack_exports__["default"] = ((gtag, gaTrackingId) => {
  const emitPageView = () => setTimeout(() => {
    gtag('event', 'page_view', {
      page_title: document.title || 'Checkout',
      page_path: `/${location.hash.split('/')[1]}`,
      send_to: gaTrackingId
    });
  }, 300);

  Object(_ecomplus_widget_tag_manager_src_lib_watch_app_routes__WEBPACK_IMPORTED_MODULE_0__["default"])({
    push: ({
      event,
      ecommerce
    }) => {
      let data;

      switch (event) {
        case 'eec.checkout':
        case 'eec.checkout_option':
          data = ecommerce && ecommerce.checkout;

          if (data) {
            gtag('event', 'begin_checkout', {
              items: data.products
            });
          }

          gtag('event', 'set_checkout_option', {
            checkout_step: location.hash.startsWith('#/cart') ? 1 : 2
          });
          break;

        case 'eec.purchase':
          emitPageView();
          data = ecommerce && ecommerce.purchase;

          if (data && data.actionField) {
            gtag('event', 'purchase', {
              transaction_id: data.actionField.id,
              affiliation: $('meta[name="author"]').attr('content') || 'Shop',
              value: Number(data.actionField.revenue),
              currency: ecommerce.currencyCode,
              tax: data.actionField.tax ? Number(data.actionField.tax) : 0,
              shipping: data.actionField.shipping ? Number(data.actionField.shipping) : 0,
              items: data.products
            });
          }

          break;

        default:
          emitPageView();
      }
    }
  });
});

/***/ }),

/***/ "./node_modules/@ecomplus/widget-analytics/src/lib/watch-shopping-cart.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-analytics/src/lib/watch-shopping-cart.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecomplus_widget_tag_manager_src_lib_watch_shopping_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/widget-tag-manager/src/lib/watch-shopping-cart */ "./node_modules/@ecomplus/widget-tag-manager/src/lib/watch-shopping-cart.js");

/* harmony default export */ __webpack_exports__["default"] = (gtag => {
  Object(_ecomplus_widget_tag_manager_src_lib_watch_shopping_cart__WEBPACK_IMPORTED_MODULE_0__["default"])({
    push: ({
      event,
      ecommerce
    }) => {
      if (ecommerce && (event === 'eec.add' || event === 'eec.remove')) {
        const data = ecommerce[event.slice(4)];

        if (data && data.products) {
          gtag('event', event === 'eec.add' ? 'add_to_cart' : 'remove_from_cart', {
            items: data.products
          });
        }
      }
    }
  });
});

/***/ }),

/***/ "./node_modules/@ecomplus/widget-tag-manager/src/lib/common.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-tag-manager/src/lib/common.js ***!
  \*********************************************************************/
/*! exports provided: currencyCode, getProductData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currencyCode", function() { return currencyCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductData", function() { return getProductData; });
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");

const currencyCode = _ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__["$ecomConfig"].get('currency') || 'BRL';
const getProductData = item => {
  const productData = {
    name: Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__["name"])(item),
    id: item.sku,
    price: Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__["price"])(item).toFixed(2)
  };

  if (item.quantity) {
    productData.quantity = item.quantity;
  }

  return productData;
};

/***/ }),

/***/ "./node_modules/@ecomplus/widget-tag-manager/src/lib/watch-app-routes.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-tag-manager/src/lib/watch-app-routes.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecomplus_shopping_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/shopping-cart */ "./node_modules/@ecomplus/shopping-cart/src/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./node_modules/@ecomplus/widget-tag-manager/src/lib/common.js");


/* harmony default export */ __webpack_exports__["default"] = (dataLayer => {
  const router = window.storefrontApp && window.storefrontApp.router;

  if (router) {
    let isCartSent, isCheckoutSent, isPurchaseSent;

    const getCartProductsList = () => {
      const products = [];

      if (_ecomplus_shopping_cart__WEBPACK_IMPORTED_MODULE_0__["default"].data && Array.isArray(_ecomplus_shopping_cart__WEBPACK_IMPORTED_MODULE_0__["default"].data.items)) {
        _ecomplus_shopping_cart__WEBPACK_IMPORTED_MODULE_0__["default"].data.items.forEach(item => {
          products.push(Object(_common__WEBPACK_IMPORTED_MODULE_1__["getProductData"])(item));
        });
      }

      return products;
    };

    const emitCheckoutOption = actionField => {
      dataLayer.push({
        event: 'eec.checkout_option',
        ecommerce: {
          currencyCode: _common__WEBPACK_IMPORTED_MODULE_1__["currencyCode"],
          checkout_option: {
            actionField
          }
        }
      });
    };

    const emitCheckout = (step, option) => {
      const actionField = {
        step,
        option
      };

      if (step <= 1 || !isCartSent) {
        dataLayer.push({
          event: 'eec.checkout',
          ecommerce: {
            currencyCode: _common__WEBPACK_IMPORTED_MODULE_1__["currencyCode"],
            checkout: {
              actionField,
              products: getCartProductsList()
            }
          }
        });
        dataLayer.push({
          event: 'checkout'
        });
        isCartSent = true;
      } else if (!isCheckoutSent) {
        emitCheckoutOption(actionField);
        dataLayer.push({
          event: 'checkoutOption'
        });
        isCheckoutSent = true;
      }
    };

    const emitPurchase = (orderId, orderJson) => {
      if (!isPurchaseSent) {
        const {
          amount
        } = window.storefrontApp;
        const actionField = {
          id: orderId,
          revenue: (amount && amount.total || _ecomplus_shopping_cart__WEBPACK_IMPORTED_MODULE_0__["default"].data && _ecomplus_shopping_cart__WEBPACK_IMPORTED_MODULE_0__["default"].data.subtotal || 0).toFixed(2)
        };

        if (amount) {
          if (amount.freight !== undefined) {
            actionField.shipping = amount.freight.toFixed(2);
          }

          if (amount.tax !== undefined) {
            actionField.tax = amount.tax.toFixed(2);
          }
        }

        let order;

        if (orderJson) {
          try {
            order = JSON.parse(orderJson);
          } catch (e) {}
        }

        if (order) {
          ;
          ['payment_method_label', 'shipping_method_label'].forEach((field, i) => {
            if (order[field]) {
              emitCheckoutOption({
                step: 3 + i,
                option: order[field]
              });
            }
          });

          if (order.extra_discount && order.extra_discount.discount_coupon) {
            actionField.coupon = order.extra_discount.discount_coupon;
          }
        }

        dataLayer.push({
          event: 'eec.purchase',
          ecommerce: {
            currencyCode: _common__WEBPACK_IMPORTED_MODULE_1__["currencyCode"],
            purchase: {
              actionField,
              products: getCartProductsList()
            }
          }
        });
        isPurchaseSent = true;
      }
    };

    let emitPurchaseTimer;

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
          clearTimeout(emitPurchaseTimer);

          if (params.json) {
            emitPurchase(params.id, decodeURIComponent(params.json));
          } else {
            emitPurchaseTimer = setTimeout(() => {
              emitPurchase(params.id);
            }, 1500);
          }

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

/***/ "./node_modules/@ecomplus/widget-tag-manager/src/lib/watch-shopping-cart.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-tag-manager/src/lib/watch-shopping-cart.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecomplus_shopping_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/shopping-cart */ "./node_modules/@ecomplus/shopping-cart/src/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./node_modules/@ecomplus/widget-tag-manager/src/lib/common.js");


/* harmony default export */ __webpack_exports__["default"] = (dataLayer => {
  const productsBySku = {};

  const emitAddToCart = item => {
    const productData = Object(_common__WEBPACK_IMPORTED_MODULE_1__["getProductData"])(item);
    dataLayer.push({
      event: 'eec.add',
      ecommerce: {
        currencyCode: _common__WEBPACK_IMPORTED_MODULE_1__["currencyCode"],
        add: {
          products: [productData]
        }
      }
    });
    dataLayer.push({
      event: 'addToCart'
    });
    productsBySku[item.sku] = productData;
  };

  const emitRemoveFromCart = item => {
    const productData = productsBySku[item.sku];
    dataLayer.push({
      event: 'eec.remove',
      ecommerce: {
        currencyCode: _common__WEBPACK_IMPORTED_MODULE_1__["currencyCode"],
        remove: {
          products: [productData ? Object.assign({}, productData) : Object(_common__WEBPACK_IMPORTED_MODULE_1__["getProductData"])(item)]
        }
      }
    });
    dataLayer.push({
      event: 'removeFromCart'
    });
    delete productsBySku[item.sku];
  };

  _ecomplus_shopping_cart__WEBPACK_IMPORTED_MODULE_0__["default"].on('addItem', ({
    item
  }) => emitAddToCart(item));
  _ecomplus_shopping_cart__WEBPACK_IMPORTED_MODULE_0__["default"].on('increaseItemQnt', ({
    item
  }) => {
    const productData = productsBySku[item.sku];

    if (!productData) {
      emitAddToCart(item);
    } else {
      const quantity = item.quantity - productData.quantity;

      if (quantity > 0) {
        emitAddToCart({ ...item,
          quantity
        });
      } else {
        emitRemoveFromCart({ ...item,
          quantity: -quantity
        });
      }
    }
  });
  _ecomplus_shopping_cart__WEBPACK_IMPORTED_MODULE_0__["default"].on('removeItem', ({
    item
  }) => emitRemoveFromCart(item));
  _ecomplus_shopping_cart__WEBPACK_IMPORTED_MODULE_0__["default"].on('clear', () => {
    for (const sku in productsBySku) {
      if (productsBySku[sku]) {
        emitRemoveFromCart(productsBySku[sku]);
      }
    }
  });
});

/***/ })

}]);
//# sourceMappingURL=chunk.cae96ef472f396d0d5ce.js.map