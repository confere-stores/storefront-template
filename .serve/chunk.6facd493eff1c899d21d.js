(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/@ecomplus/storefront-components/src/js/helpers/scroll-to-element.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/js/helpers/scroll-to-element.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function ($el) {
  let top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  while ($el.offsetParent) {
    top += $el.offsetTop;
    $el = $el.offsetParent;
  }

  return window.scroll({
    top,
    behavior: 'smooth'
  });
});

/***/ }),

/***/ "./node_modules/@ecomplus/widget-product/src/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-product/src/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var _components_TheProduct_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! #components/TheProduct.vue */ "./node_modules/@ecomplus/storefront-components/src/TheProduct.vue");
/*!
 * @ecomplus/widget-product
 * (c) E-Com Club <ti@e-com.club>
 * Released under the MIT License.
 */



/* harmony default export */ __webpack_exports__["default"] = (function () {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let elId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'product';
  const $productBlock = document.getElementById(elId);

  if ($productBlock) {
    const $dock = document.getElementById("".concat(elId, "-dock"));
    const isSSR = Boolean($dock);
    const {
      storefront
    } = window;
    let getScopedSlots, body;

    if (storefront) {
      getScopedSlots = storefront.getScopedSlots;
      body = storefront.context && storefront.context.body;
    }

    let mounted;

    const removeSpinner = () => {
      const $loading = document.getElementById('product-loading');

      if ($loading) {
        $loading.remove();
      }

      delete $productBlock.dataset.toRender;
    };

    if (isSSR) {
      mounted = removeSpinner;
    }

    const {
      buyText,
      lowQuantityToWarn,
      maxVariationOptionsBtns
    } = options;
    new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
      render: h => h(_components_TheProduct_vue__WEBPACK_IMPORTED_MODULE_2__["default"], {
        attrs: {
          id: $dock ? null : elId
        },
        props: { ...options.props,
          product: isSSR && body && body.available && Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["inStock"])(body) ? body : null,
          buyText,
          lowQuantityToWarn,
          maxVariationOptionsBtns,
          isSSR
        },
        on: {
          'update:product'(product) {
            if (!isSSR) {
              removeSpinner();
            }

            if (options.$emit) {
              options.$emit('update:product', product);
            }
          }

        },
        scopedSlots: Object.assign({
          buy: !options.buy ? undefined : function () {
            return h('span', {
              domProps: {
                innerHTML: options.buy
              }
            });
          }
        }, typeof getScopedSlots === 'function' ? getScopedSlots($productBlock, h, !$dock) : {})
      }),
      mounted
    }).$mount($dock || $productBlock);
  }
});

/***/ })

},0,[26,27]]);
//# sourceMappingURL=chunk.6facd493eff1c899d21d.js.map