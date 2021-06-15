(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/@ecomplus/widget-tag-manager/src/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-tag-manager/src/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_parse_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/parse-context */ "./node_modules/@ecomplus/widget-tag-manager/src/lib/parse-context.js");
/* harmony import */ var _lib_parse_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/parse-dom */ "./node_modules/@ecomplus/widget-tag-manager/src/lib/parse-dom.js");
/* harmony import */ var _lib_watch_app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/watch-app-routes */ "./node_modules/@ecomplus/widget-tag-manager/src/lib/watch-app-routes.js");
/* harmony import */ var _lib_watch_shopping_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/watch-shopping-cart */ "./node_modules/@ecomplus/widget-tag-manager/src/lib/watch-shopping-cart.js");




/* harmony default export */ __webpack_exports__["default"] = ((options = {}) => {
  const {
    dataLayerVar,
    parseDomMsDelay
  } = options;
  const dataLayer = window[dataLayerVar] || window.dataLayer;

  if (dataLayer) {
    Object(_lib_parse_context__WEBPACK_IMPORTED_MODULE_0__["default"])(dataLayer);
    Object(_lib_watch_app_routes__WEBPACK_IMPORTED_MODULE_2__["default"])(dataLayer);
    Object(_lib_watch_shopping_cart__WEBPACK_IMPORTED_MODULE_3__["default"])(dataLayer);
    setTimeout(() => {
      Object(_lib_parse_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(dataLayer);
    }, parseDomMsDelay >= 0 ? parseDomMsDelay : 300);
  }
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

/***/ "./node_modules/@ecomplus/widget-tag-manager/src/lib/parse-context.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-tag-manager/src/lib/parse-context.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./node_modules/@ecomplus/widget-tag-manager/src/lib/common.js");



/* harmony default export */ __webpack_exports__["default"] = (dataLayer => {
  const context = window.storefront && window.storefront.context;

  if (context && context.resource === 'products') {
    const {
      body
    } = context;
    const productData = Object(_common__WEBPACK_IMPORTED_MODULE_2__["getProductData"])(body);
    const data = {
      event: 'eec.detail',
      ecommerce: {
        currencyCode: _common__WEBPACK_IMPORTED_MODULE_2__["currencyCode"],
        detail: {
          products: [productData]
        }
      }
    };
    const categories = Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["categoriesList"])(body);

    if (categories.length) {
      productData.category = body.category_tree ? body.category_tree.replace(/\s>\s/g, '/') : categories[0];
      data.ecommerce.detail.actionField = {
        list: categories[0]
      };
    }

    if (body.brands && body.brands.length) {
      productData.brand = body.brands[0].name;
    }

    dataLayer.push(data);
  }
});

/***/ }),

/***/ "./node_modules/@ecomplus/widget-tag-manager/src/lib/parse-dom.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-tag-manager/src/lib/parse-dom.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./node_modules/@ecomplus/widget-tag-manager/src/lib/common.js");

/* harmony default export */ __webpack_exports__["default"] = (dataLayer => {
  const $products = document.querySelectorAll('[data-sku]');

  if ($products.length) {
    const skus = [];
    const listNameBySku = {};
    const isSearchPage = window.location.pathname === '/search';
    let defaultList;

    if (isSearchPage) {
      defaultList = 'Search results';
    } else {
      const context = window.storefront && window.storefront.context;

      if (context && context.body) {
        const {
          name
        } = context.body;

        switch (context.resource) {
          case 'categories':
            defaultList = `Category: ${name}`;
            break;

          case 'brands':
            defaultList = `Brand: ${name}`;
            break;

          case 'collections':
            defaultList = `Collection: ${name}`;
        }
      }
    }

    for (let i = 0; i < $products.length; i++) {
      const $product = $products[i];
      const {
        sku
      } = $product.dataset;

      if (skus.indexOf(sku) === -1) {
        skus.push(sku);

        if ($product.closest) {
          const $carousel = $product.closest('.products-carousel');

          if (!isSearchPage && $carousel) {
            listNameBySku[sku] = $carousel.dataset.title;
          }
        }
      }
    }

    dataLayer.push({
      event: 'eec.impressions',
      ecommerce: {
        currencyCode: _common__WEBPACK_IMPORTED_MODULE_0__["currencyCode"],
        impressions: skus.map(sku => {
          const listName = listNameBySku[sku] || defaultList;
          const item = {
            id: sku
          };

          if (listName) {
            item.list = listName;
          }

          return item;
        })
      }
    });
  }
});

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
//# sourceMappingURL=chunk.590fa1893bd8fe73bcf4.js.map