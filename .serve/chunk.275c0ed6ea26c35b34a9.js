(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./__fixtures__/empty.scss?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************!*\
  !*** ./__fixtures__/empty.scss?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_0_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_0_oneOf_0_2_node_modules_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_node_modules_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_empty_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader!../node_modules/css-loader/dist/cjs.js??ref--0-oneOf-0-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/resolve-url-loader??ref--0-oneOf-0-2!../node_modules/postcss-loader/dist/cjs.js??ref--0-oneOf-0-3!../node_modules/sass-loader/dist/cjs.js??ref--0-oneOf-0-4!./empty.scss?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./__fixtures__/empty.scss?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_0_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_0_oneOf_0_2_node_modules_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_node_modules_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_empty_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_0_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_0_oneOf_0_2_node_modules_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_node_modules_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_empty_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_0_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_0_oneOf_0_2_node_modules_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_node_modules_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_empty_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_0_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_0_oneOf_0_2_node_modules_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_node_modules_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_empty_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./node_modules/@ecomplus/widget-product-card/src/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-product-card/src/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.finally.js */ "./node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lozad */ "./node_modules/lozad/dist/lozad.es.js");
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var _ecomplus_search_engine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ecomplus/search-engine */ "./node_modules/@ecomplus/search-engine/src/index.js");
/* harmony import */ var _components_ProductCard_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! #components/ProductCard.vue */ "./node_modules/@ecomplus/storefront-components/src/ProductCard.vue");


/*!
 * @ecomplus/widget-product-card
 * (c) E-Com Club <ti@e-com.club>
 * Released under the MIT License.
 */





/* harmony default export */ __webpack_exports__["default"] = (function () {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let elClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'product-card';

  if (options.buyText) {
    window.productCardBuyText = options.buyText;
  }

  if (options.buy) {
    window.productCardBuyHtml = options.buy;
  }

  if (options.footer) {
    window.productCardFooterHtml = options.footer;
  }

  const getScopedSlots = window.storefront && window.storefront.getScopedSlots;

  const setupComponent = ($productCard, productId, sku, product, isLoaded) => {
    new vue__WEBPACK_IMPORTED_MODULE_1__["default"]({
      render: h => h(_components_ProductCard_vue__WEBPACK_IMPORTED_MODULE_5__["default"], {
        class: elClass !== 'product-card' ? elClass : null,
        attrs: {
          'data-product-id': productId,
          'data-sku': sku
        },
        props: { ...options.props,
          productId,
          product,
          isLoaded,
          transitionClass: null
        },
        scopedSlots: typeof getScopedSlots === 'function' ? getScopedSlots($productCard, h) : undefined
      })
    }).$mount($productCard);
  };

  const $productCards = document.querySelectorAll(".".concat(elClass));
  const productIds = [];

  for (let i = 0; i < $productCards.length; i++) {
    if ($productCards[i]) {
      const {
        productId,
        toRender
      } = $productCards[i].dataset;

      if (toRender && productIds.indexOf(productId) === -1) {
        productIds.push(productId);
      }
    }
  }

  let preFetchPromise;

  if (productIds.length >= 4 && productIds.length <= 70 && !options.skipSearchApi) {
    const search = new _ecomplus_search_engine__WEBPACK_IMPORTED_MODULE_4__["default"]();
    preFetchPromise = search.setPageSize(productIds.length).setProductIds(productIds).fetch(true, {
      timeout: 5000
    }).then(() => {
      const items = search.getItems();

      for (let i = 0; i < 2; i++) {
        load($productCards[i]);
      }

      return items;
    }).catch(err => {
      console.error(err);
    });
  } else {
    preFetchPromise = Promise.resolve();
  }

  const load = $productCard => {
    if ($productCard) {
      const {
        productId,
        sku,
        toRender
      } = $productCard.dataset;

      if (toRender) {
        let product;
        preFetchPromise.then(items => {
          if (Array.isArray(items)) {
            product = items.find(_ref => {
              let {
                _id
              } = _ref;
              return _id === productId;
            });
          }
        }).finally(() => {
          let isLoaded;

          if (product) {
            isLoaded = true;

            if (!product.available || !product.visible || !Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_3__["inStock"])(product)) {
              const $cardLi = $productCard.parentNode && $productCard.parentNode.parentNode;

              if ($cardLi && $cardLi.tagName === 'LI') {
                $cardLi.parentNode.appendChild($cardLi);
              }
            }
          } else {
            const $productItem = $productCard.parentNode;

            if ($productItem) {
              product = $productItem.dataset.product;

              if (typeof product === 'string') {
                try {
                  product = JSON.parse(product);
                } catch (e) {
                  product = undefined;
                }
              }
            }
          }

          setupComponent($productCard, productId, sku, product, isLoaded);
        });
      }
    }
  };

  const observer = Object(lozad__WEBPACK_IMPORTED_MODULE_2__["default"])($productCards, {
    rootMargin: '350px 0px',
    threshold: 0,
    load
  });
  observer.observe();
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./__fixtures__/empty.scss?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--0-oneOf-0-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--0-oneOf-0-2!./node_modules/postcss-loader/dist/cjs.js??ref--0-oneOf-0-3!./node_modules/sass-loader/dist/cjs.js??ref--0-oneOf-0-4!./__fixtures__/empty.scss?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "", "",{"version":3,"sources":[],"names":[],"mappings":"","file":"empty.scss"}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./__fixtures__/empty.scss?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--0-oneOf-0-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--0-oneOf-0-2!./node_modules/postcss-loader/dist/cjs.js??ref--0-oneOf-0-3!./node_modules/sass-loader/dist/cjs.js??ref--0-oneOf-0-4!./__fixtures__/empty.scss?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--0-oneOf-0-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/resolve-url-loader??ref--0-oneOf-0-2!../node_modules/postcss-loader/dist/cjs.js??ref--0-oneOf-0-3!../node_modules/sass-loader/dist/cjs.js??ref--0-oneOf-0-4!./empty.scss?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./__fixtures__/empty.scss?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("444d28a4", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./template/js/lib/load-widgets.js":
/*!*****************************************!*\
  !*** ./template/js/lib/load-widgets.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.finally.js */ "./node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ecomplus_storefront_twbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ecomplus/storefront-twbs */ "./node_modules/@ecomplus/storefront-twbs/dist/storefront-twbs.min.js");
/* harmony import */ var _ecomplus_storefront_twbs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ecomplus_storefront_twbs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emitter */ "./template/js/lib/emitter.js");
/* harmony import */ var _ecomplus_widget_product_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ecomplus/widget-product-card */ "./node_modules/@ecomplus/widget-product-card/src/index.js");





const isCheckout = window.location.pathname.startsWith('/app/');
const widgetsLoadPromises = [];
const widgetsMsDelay = window.location.hostname === 'localhost' ? 50 : 1;

const loadWidget = (pkg, runImport) => {
  const waitWidgetResolve = new Promise(resolve => {
    setTimeout(() => {
      const widget = window._widgets && window._widgets[pkg];

      if (widget && widget.active && (!widget.desktopOnly || !_ecomplus_storefront_twbs__WEBPACK_IMPORTED_MODULE_2__["isMobile"]) && (isCheckout ? widget.enableCheckout : !widget.disablePages)) {
        return runImport().then(exp => {
          if (typeof exp.default === 'function') {
            exp.default({ ...widget.options,

              $emit(ev, payload) {
                _emitter__WEBPACK_IMPORTED_MODULE_3__["default"].emit(ev, payload);
              }

            });
          }

          _emitter__WEBPACK_IMPORTED_MODULE_3__["default"].emit("widget:".concat(pkg));
          console.log("Widget loaded: ".concat(pkg));
        }).catch(console.error).finally(resolve);
      }

      resolve();
    }, widgetsMsDelay);
  });
  widgetsLoadPromises.push(waitWidgetResolve);
};

const {
  resource
} = document.body.dataset;

if (!isCheckout && resource === 'products') {
  loadWidget('@ecomplus/widget-product', () => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(6), __webpack_require__.e(20)]).then(__webpack_require__.bind(null, /*! @ecomplus/widget-product */ "./node_modules/@ecomplus/widget-product/src/index.js")));
}

Promise.all(widgetsLoadPromises).then(() => {
  loadWidget('@ecomplus/widget-product-card', () => Promise.resolve({
    default: _ecomplus_widget_product_card__WEBPACK_IMPORTED_MODULE_4__["default"]
  }));

  if (window.location.pathname === '/search' || resource === 'categories' || resource === 'brands' || !resource && document.getElementById('search-engine')) {
    loadWidget('@ecomplus/widget-search-engine', () => Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(19)]).then(__webpack_require__.bind(null, /*! @ecomplus/widget-search-engine */ "./node_modules/@ecomplus/widget-search-engine/src/index.js")));
  }

  const requestIdleCallback = fn => {
    if (typeof window.requestIdleCallback === 'function') {
      setTimeout(() => window.requestIdleCallback(fn), 200);
    } else {
      setTimeout(fn, 800);
    }
  };

  requestIdleCallback(() => {
    _emitter__WEBPACK_IMPORTED_MODULE_3__["default"].emit('load:lcp');

    if (!isCheckout) {
      loadWidget('@ecomplus/widget-search', () => Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, /*! @ecomplus/widget-search */ "./node_modules/@ecomplus/widget-search/src/index.js")));
      loadWidget('@ecomplus/widget-minicart', () => Promise.all(/*! import() */[__webpack_require__.e(7), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, /*! @ecomplus/widget-minicart */ "./node_modules/@ecomplus/widget-minicart/src/index.js")));
      loadWidget('@ecomplus/widget-user', () => __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! @ecomplus/widget-user */ "./node_modules/@ecomplus/widget-user/src/index.js")));
    }

    Promise.all(widgetsLoadPromises).then(() => {
      requestIdleCallback(() => _emitter__WEBPACK_IMPORTED_MODULE_3__["default"].emit('load:components'));
      loadWidget('@ecomplus/widget-tag-manager', () => __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! @ecomplus/widget-tag-manager */ "./node_modules/@ecomplus/widget-tag-manager/src/index.js")));
      loadWidget('@ecomplus/widget-analytics', () => __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! @ecomplus/widget-analytics */ "./node_modules/@ecomplus/widget-analytics/src/index.js")));
      loadWidget('@ecomplus/widget-fb-pixel', () => __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! @ecomplus/widget-fb-pixel */ "./node_modules/@ecomplus/widget-fb-pixel/src/index.js")));
      loadWidget('@ecomplus/widget-gmc-ratings', () => __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! @ecomplus/widget-gmc-ratings */ "./node_modules/@ecomplus/widget-gmc-ratings/src/index.js")));
      loadWidget('@ecomplus/widget-ebit', () => __webpack_require__.e(/*! import() */ 23).then(__webpack_require__.bind(null, /*! @ecomplus/widget-ebit */ "./node_modules/@ecomplus/widget-ebit/src/index.js")));
      loadWidget('@ecomplus/widget-compre-confie', () => __webpack_require__.e(/*! import() */ 22).then(__webpack_require__.bind(null, /*! @ecomplus/widget-compre-confie */ "./node_modules/@ecomplus/widget-compre-confie/src/index.js"))); // Widget Avise-me

      loadWidget('@confere-stores/widget-avise-me', () => __webpack_require__.e(/*! import() */ 21).then(__webpack_require__.bind(null, /*! @confere-stores/widget-avise-me */ "./node_modules/@confere-stores/widget-avise-me/src/index.js")));
    });
  });
});

/***/ })

},0,[1,2,3,6,20,4,19]]);
//# sourceMappingURL=chunk.275c0ed6ea26c35b34a9.js.map