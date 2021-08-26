(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

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



/* harmony default export */ __webpack_exports__["default"] = ((options = {}, elId = 'product') => {
  const $productBlock = document.getElementById(elId);

  if ($productBlock) {
    const $dock = document.getElementById(`${elId}-dock`);
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

},0,[25,26]]);
//# sourceMappingURL=chunk.aae59c8aa4b3092983f1.js.map