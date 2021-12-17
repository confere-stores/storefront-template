(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/@ecomplus/storefront-components/src/ShippingCalculator.vue":
/*!*********************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/ShippingCalculator.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _html_ShippingCalculator_html_vue_type_template_id_976d6d62_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html/ShippingCalculator.html?vue&type=template&id=976d6d62&lang=html& */ "./node_modules/@ecomplus/storefront-components/src/html/ShippingCalculator.html?vue&type=template&id=976d6d62&lang=html&");
/* harmony import */ var _js_ShippingCalculator_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/ShippingCalculator.js?vue&type=script&lang=js& */ "./node_modules/@ecomplus/storefront-components/src/js/ShippingCalculator.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _scss_ShippingCalculator_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/ShippingCalculator.scss?vue&type=style&index=0&lang=scss& */ "./node_modules/@ecomplus/storefront-components/src/scss/ShippingCalculator.scss?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _js_ShippingCalculator_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _html_ShippingCalculator_html_vue_type_template_id_976d6d62_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _html_ShippingCalculator_html_vue_type_template_id_976d6d62_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@ecomplus/storefront-components/src/ShippingCalculator.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/html/ShippingCalculator.html?vue&type=template&id=976d6d62&lang=html&":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/html/ShippingCalculator.html?vue&type=template&id=976d6d62&lang=html& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ShippingCalculator_html_vue_type_template_id_976d6d62_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./ShippingCalculator.html?vue&type=template&id=976d6d62&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@ecomplus/storefront-components/src/html/ShippingCalculator.html?vue&type=template&id=976d6d62&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ShippingCalculator_html_vue_type_template_id_976d6d62_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ShippingCalculator_html_vue_type_template_id_976d6d62_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/js/ShippingCalculator.js?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/js/ShippingCalculator.js?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_1_ShippingCalculator_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../babel-loader/lib??ref--1!./ShippingCalculator.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/@ecomplus/storefront-components/src/js/ShippingCalculator.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_1_ShippingCalculator_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/js/helpers/add-idle-callback.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/js/helpers/add-idle-callback.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (fn => {
  if (typeof window === 'object' && typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(fn);
  } else {
    setTimeout(fn, 500);
  }
});

/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/js/helpers/sort-apps.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/js/helpers/sort-apps.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((results, order) => {
  return results.sort((a, b) => {
    if (a.app_id === b.app_id) {
      return 0;
    }

    const indexA = order.indexOf(a.app_id);
    const indexB = order.indexOf(b.app_id);
    return indexA > -1 ? indexB > -1 ? indexA < indexB ? -1 : 1 : indexA > -1 ? -1 : 1 : indexB > -1 ? 1 : 0;
  });
});

/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/scss/ShippingCalculator.scss?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/scss/ShippingCalculator.scss?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_css_loader_dist_cjs_js_ref_0_oneOf_0_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_0_oneOf_0_2_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_ShippingCalculator_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-style-loader!../../../../css-loader/dist/cjs.js??ref--0-oneOf-0-1!../../../../vue-loader/lib/loaders/stylePostLoader.js!../../../../resolve-url-loader??ref--0-oneOf-0-2!../../../../postcss-loader/dist/cjs.js??ref--0-oneOf-0-3!../../../../sass-loader/dist/cjs.js??ref--0-oneOf-0-4!./ShippingCalculator.scss?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/@ecomplus/storefront-components/src/scss/ShippingCalculator.scss?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _vue_style_loader_index_js_css_loader_dist_cjs_js_ref_0_oneOf_0_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_0_oneOf_0_2_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_ShippingCalculator_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_css_loader_dist_cjs_js_ref_0_oneOf_0_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_0_oneOf_0_2_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_ShippingCalculator_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_css_loader_dist_cjs_js_ref_0_oneOf_0_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_0_oneOf_0_2_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_ShippingCalculator_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_css_loader_dist_cjs_js_ref_0_oneOf_0_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_0_oneOf_0_2_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_ShippingCalculator_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/@ecomplus/storefront-components/src/js/ShippingCalculator.js?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/@ecomplus/storefront-components/src/js/ShippingCalculator.js?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ecomplus/i18n */ "./node_modules/@ecomplus/storefront-components/node_modules/@ecomplus/i18n/src/pt_br/index.js");
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var _ecomplus_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ecomplus/client */ "./node_modules/@ecomplus/client/src/index.js");
/* harmony import */ var _helpers_sort_apps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/sort-apps */ "./node_modules/@ecomplus/storefront-components/src/js/helpers/sort-apps.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ShippingLine_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ShippingLine.vue */ "./node_modules/@ecomplus/storefront-components/src/ShippingLine.vue");







const localStorage = typeof window === 'object' && window.localStorage;
const zipStorageKey = 'shipping-to-zip';

const reduceItemBody = itemOrProduct => {
  const shippedItem = {};
  ['product_id', 'variation_id', 'sku', 'name', 'quantity', 'inventory', 'currency_id', 'currency_symbol', 'price', 'final_price', 'dimensions', 'weight'].forEach(field => {
    if (itemOrProduct[field] !== undefined) {
      shippedItem[field] = itemOrProduct[field];
    }
  });
  return shippedItem;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ShippingCalculator',
  components: {
    CleaveInput: (vue_cleave_component__WEBPACK_IMPORTED_MODULE_5___default()),
    ShippingLine: _ShippingLine_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    zipCode: String,
    canSelectServices: Boolean,
    canInputZip: {
      type: Boolean,
      default: true
    },
    countryCode: {
      type: String,
      default: _ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["$ecomConfig"].get('country_code')
    },
    shippedItems: {
      type: Array,

      default() {
        return [];
      }

    },
    shippingResult: {
      type: Array,

      default() {
        return [];
      }

    },
    shippingData: {
      type: Object,

      default() {
        return {};
      }

    },
    shippingAppsSort: {
      type: Array,

      default() {
        return window.ecomShippingApps || [];
      }

    }
  },

  data() {
    return {
      localZipCode: null,
      localShippedItems: [],
      amountSubtotal: null,
      shippingServices: [],
      selectedService: null,
      hasPaidOption: false,
      freeFromValue: null,
      isScheduled: false,
      retryTimer: null,
      isWaiting: false,
      hasCalculated: false
    };
  },

  computed: {
    i19add$1ToEarn: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19add$1ToEarn"]),
    i19calculateShipping: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19calculateShipping"]),
    i19zipCode: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19zipCode"]),
    i19freeShipping: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19freeShipping"]).toLowerCase(),

    cleaveOptions() {
      return this.countryCode === 'BR' ? {
        blocks: [5, 3],
        delimiter: '-'
      } : {
        blocks: [30]
      };
    },

    freeFromPercentage() {
      return this.hasPaidOption && this.amountSubtotal < this.freeFromValue ? Math.round(this.amountSubtotal * 100 / this.freeFromValue) : null;
    },

    productionDeadline() {
      let maxDeadline = 0;
      this.shippedItems.forEach(item => {
        if (item.quantity && item.production_time) {
          const {
            days,
            cumulative
          } = item.production_time;
          const itemDeadline = cumulative ? days * item.quantity : days;

          if (itemDeadline > maxDeadline) {
            maxDeadline = itemDeadline;
          }
        }
      });
      return maxDeadline;
    }

  },
  methods: {
    formatMoney: _ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["formatMoney"],

    updateZipCode() {
      this.$emit('update:zip-code', this.localZipCode);
    },

    parseShippingOptions(shippingResult = [], isRetry = false) {
      this.shippingServices = [];

      if (shippingResult.length) {
        shippingResult.forEach(appResult => {
          const {
            validated,
            error,
            response
          } = appResult;

          if (validated && !error) {
            response.shipping_services.forEach(service => {
              this.shippingServices.push({
                app_id: appResult.app_id,
                ...service
              });
            });
            const freeShippingFromValue = response.free_shipping_from_value;

            if (freeShippingFromValue && (!this.freeFromValue || this.freeFromValue > freeShippingFromValue)) {
              this.freeFromValue = freeShippingFromValue;
            }
          }
        });

        if (!this.shippingServices.length) {
          if (!isRetry) {
            this.fetchShippingServices(true);
          } else {
            this.scheduleRetry();
          }
        } else {
          this.shippingServices = this.shippingServices.sort((a, b) => {
            const priceDiff = a.shipping_line.total_price - b.shipping_line.total_price;
            return priceDiff < 0 ? -1 : priceDiff > 0 ? 1 : a.shipping_line.delivery_time && b.shipping_line.delivery_time && a.shipping_line.delivery_time.days < b.shipping_line.delivery_time.days ? -1 : 1;
          });
          this.setSelectedService(0);
          this.hasPaidOption = Boolean(this.shippingServices.find(service => {
            return service.shipping_line.total_price || service.shipping_line.price;
          }));

          if (Array.isArray(this.shippingAppsSort) && this.shippingAppsSort.length) {
            this.shippingServices = Object(_helpers_sort_apps__WEBPACK_IMPORTED_MODULE_4__["default"])(this.shippingServices, this.shippingAppsSort);
          }
        }
      }
    },

    scheduleRetry(timeout = 10000) {
      clearTimeout(this.retryTimer);
      this.retryTimer = setTimeout(() => {
        if (this.localZipCode && !this.shippingServices.length && this.shippedItems.length) {
          this.fetchShippingServices(true);
        }
      }, timeout);
    },

    fetchShippingServices(isRetry) {
      if (!this.isScheduled) {
        this.isScheduled = true;
        setTimeout(() => {
          this.isScheduled = false;
          const {
            storeId
          } = this;
          const url = '/calculate_shipping.json';
          const method = 'POST';
          const data = { ...this.shippingData,
            to: {
              zip: this.localZipCode,
              ...this.shippingData.to
            }
          };

          if (this.localShippedItems.length) {
            data.items = this.localShippedItems;
            data.subtotal = this.amountSubtotal;
          }

          this.isWaiting = true;
          Object(_ecomplus_client__WEBPACK_IMPORTED_MODULE_3__["modules"])({
            url,
            method,
            storeId,
            data
          }).then(({
            data
          }) => this.parseShippingOptions(data.result, isRetry)).catch(err => {
            if (!isRetry) {
              this.scheduleRetry(4000);
            }

            console.error(err);
          }).finally(() => {
            this.hasCalculated = true;
            this.isWaiting = false;
          });
        }, this.hasCalculated ? 150 : 50);
      }
    },

    submitZipCode() {
      this.updateZipCode();

      if (localStorage) {
        localStorage.setItem(zipStorageKey, this.localZipCode);
      }

      this.fetchShippingServices();
    },

    setSelectedService(i) {
      if (this.canSelectServices) {
        this.$emit('select-service', this.shippingServices[i]);
        this.selectedService = i;
      }
    }

  },
  watch: {
    shippedItems: {
      handler() {
        setTimeout(() => {
          this.localShippedItems = this.shippedItems.map(reduceItemBody);
          const {
            amountSubtotal
          } = this;
          this.amountSubtotal = this.shippedItems.reduce((subtotal, item) => {
            return subtotal + Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["price"])(item) * item.quantity;
          }, 0);

          if (this.hasCalculated && (this.canSelectServices || amountSubtotal !== this.amountSubtotal || !this.shippingServices.length && !this.isWaiting)) {
            this.fetchShippingServices();
          }
        }, 50);
      },

      deep: true,
      immediate: true
    },

    localZipCode(zipCode) {
      if (this.countryCode === 'BR' && zipCode.replace(/\D/g, '').length === 8) {
        this.submitZipCode();
      }
    },

    zipCode: {
      handler(zipCode) {
        if (zipCode) {
          this.localZipCode = zipCode;
        }
      },

      immediate: true
    },
    shippingResult: {
      handler(result) {
        if (result.length) {
          this.parseShippingOptions(result);
        }
      },

      immediate: true
    }
  },

  created() {
    if (!this.zipCode && localStorage) {
      const storedZip = localStorage.getItem(zipStorageKey);

      if (storedZip) {
        this.localZipCode = storedZip;
      }
    }
  }

});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/@ecomplus/storefront-components/src/scss/ShippingCalculator.scss?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--0-oneOf-0-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--0-oneOf-0-2!./node_modules/postcss-loader/dist/cjs.js??ref--0-oneOf-0-3!./node_modules/sass-loader/dist/cjs.js??ref--0-oneOf-0-4!./node_modules/@ecomplus/storefront-components/src/scss/ShippingCalculator.scss?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".shipping-calculator__input{max-width:150px}.shipping-calculator__services{max-width:370px;font-size:var(--font-size-sm)}.shipping-calculator__services .active{cursor:auto}.shipping-calculator__option{display:flex;justify-content:space-between;width:100%}.shipping-calculator__option>small{min-width:70px;text-align:right}@media (min-width:1200px){.shipping-calculator__option{display:block;position:relative}.shipping-calculator__option>small{position:absolute;top:-5px;right:-5px}}.shipping-calculator__free-from-value{margin-top:var(--spacer-2)}.shipping-calculator__free-from-value .progress{height:1.5rem;margin-top:var(--spacer-1)}.shipping-calculator__free-from-value .progress-bar{background-color:var(--info)}", "",{"version":3,"sources":["ShippingCalculator.scss"],"names":[],"mappings":"AAKE,4BACE,eAAgB,CAGlB,+BACE,eAAgB,CAChB,6BAA8B,CAF/B,uCAKG,WAAY,CAIhB,6BACE,YAAa,CACb,6BAA8B,CAC9B,UAAW,CAHZ,mCAMG,cAAe,CACf,gBAAiB,CAGnB,0BAVF,6BAWI,aAAc,CACd,iBAAkB,CAZrB,mCAeK,iBAAkB,CAClB,QAAS,CACT,UAAW,CACZ,CAIL,sCACE,0BAA2B,CAD5B,gDAIG,aAAc,CACd,0BAA2B,CAL9B,oDAQK,4BAA6B","file":"ShippingCalculator.scss","sourcesContent":["$primary: #e83e8c; $secondary: #333333; $settings-theme: (\n  bootswatch: _,\n  custom: _\n); \n.shipping-calculator {\n  &__input {\n    max-width: 150px;\n  }\n\n  &__services {\n    max-width: 370px;\n    font-size: var(--font-size-sm);\n\n    .active {\n      cursor: auto;\n    }\n  }\n\n  &__option {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n\n    > small {\n      min-width: 70px;\n      text-align: right;\n    }\n\n    @media (min-width: 1200px) {\n      display: block;\n      position: relative;\n\n      > small {\n        position: absolute;\n        top: -5px;\n        right: -5px;\n      }\n    }\n  }\n\n  &__free-from-value {\n    margin-top: var(--spacer-2);\n\n    .progress {\n      height: 1.5rem;\n      margin-top: var(--spacer-1);\n\n      &-bar {\n        background-color: var(--info);\n      }\n    }\n  }\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@ecomplus/storefront-components/src/html/ShippingCalculator.html?vue&type=template&id=976d6d62&lang=html&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@ecomplus/storefront-components/src/html/ShippingCalculator.html?vue&type=template&id=976d6d62&lang=html& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "shipping-calculator" }, [
    _vm.canInputZip
      ? _c(
          "form",
          {
            staticClass: "shipping-calculator__form",
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.submitZipCode.apply(null, arguments)
              }
            }
          },
          [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "shipping-calculator-zip" } }, [
                _vm._v(
                  "\n        " + _vm._s(_vm.i19calculateShipping) + "\n      "
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "input-group" },
                [
                  _c("cleave-input", {
                    staticClass: "form-control shipping-calculator__input",
                    attrs: {
                      type: "tel",
                      id: "shipping-calculator-zip",
                      placeholder: _vm.i19zipCode,
                      "aria-label": _vm.i19zipCode,
                      options: _vm.cleaveOptions
                    },
                    model: {
                      value: _vm.localZipCode,
                      callback: function($$v) {
                        _vm.localZipCode = $$v
                      },
                      expression: "localZipCode"
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(0)
                ],
                1
              )
            ])
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "shipping-calculator__services" },
      [
        _c(
          "transition-group",
          {
            attrs: {
              "enter-active-class": "animated fadeInDown",
              "leave-active-class": "animated position-absolute fadeOutUp"
            }
          },
          [
            _vm.isWaiting
              ? _c(
                  "div",
                  {
                    key: "waiting",
                    staticClass: "spinner-border spinner-border-sm",
                    attrs: { role: "status" }
                  },
                  [
                    _c("span", { staticClass: "sr-only" }, [
                      _vm._v("Loading...")
                    ])
                  ]
                )
              : _c(
                  "div",
                  { key: "services", staticClass: "list-group" },
                  _vm._l(_vm.shippingServices, function(service, i) {
                    return _c(
                      _vm.canSelectServices ? "a" : "div",
                      {
                        key: i,
                        tag: "component",
                        staticClass: "list-group-item",
                        class: {
                          "list-group-item-action": _vm.canSelectServices,
                          active:
                            _vm.canSelectServices && _vm.selectedService === i
                        },
                        attrs: { href: _vm.canSelectServices && "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.setSelectedService(i)
                          }
                        }
                      },
                      [
                        _c(
                          "span",
                          { staticClass: "shipping-calculator__option" },
                          [
                            _vm._t(
                              "option",
                              function() {
                                return [
                                  _c("shipping-line", {
                                    attrs: {
                                      "shipping-line": service.shipping_line,
                                      "production-deadline":
                                        _vm.productionDeadline
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("small", [_vm._v(_vm._s(service.label))])
                                ]
                              },
                              null,
                              { service: service }
                            )
                          ],
                          2
                        )
                      ]
                    )
                  }),
                  1
                )
          ]
        ),
        _vm._v(" "),
        _c(
          "transition",
          {
            attrs: {
              "enter-active-class": "animated fadeInUp",
              "leave-active-class": "animated fadeOutDown"
            }
          },
          [
            _vm.freeFromPercentage
              ? _c(
                  "div",
                  { staticClass: "shipping-calculator__free-from-value" },
                  [
                    _vm._t(
                      "free-from-value",
                      function() {
                        return [
                          _c("span", [
                            _vm._v(
                              "\n            " +
                                _vm._s(
                                  _vm.i19add$1ToEarn.replace(
                                    "$1",
                                    _vm.formatMoney(
                                      _vm.freeFromValue - _vm.amountSubtotal
                                    )
                                  )
                                ) +
                                "\n            "
                            ),
                            _c("strong", [_vm._v(_vm._s(_vm.i19freeShipping))])
                          ]),
                          _vm._v(" "),
                          _vm.freeFromPercentage >= 33
                            ? _c("div", { staticClass: "progress" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "progress-bar progress-bar-striped",
                                    style:
                                      "width: " + _vm.freeFromPercentage + "%",
                                    attrs: {
                                      role: "progressbar",
                                      "aria-valuenow": _vm.freeFromPercentage,
                                      "aria-valuemin": "0",
                                      "aria-valuemax": "100"
                                    }
                                  },
                                  [
                                    _c("span", [
                                      _vm._v(
                                        "\n                " +
                                          _vm._s(_vm.i19freeShipping) +
                                          "\n                "
                                      ),
                                      _c("i", {
                                        staticClass: "fas fa-truck mx-1"
                                      }),
                                      _vm._v(" "),
                                      _c("strong", [
                                        _vm._v(
                                          _vm._s(_vm.freeFromPercentage) + "%"
                                        )
                                      ])
                                    ])
                                  ]
                                )
                              ])
                            : _vm._e()
                        ]
                      },
                      null,
                      {
                        amountSubtotal: _vm.amountSubtotal,
                        freeFromValue: _vm.freeFromValue,
                        freeFromPercentage: _vm.freeFromPercentage
                      }
                    )
                  ],
                  2
                )
              : _vm._e()
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c(
        "button",
        { staticClass: "btn btn-outline-secondary", attrs: { type: "submit" } },
        [_c("i", { staticClass: "fas fa-shipping-fast" })]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/@ecomplus/storefront-components/src/scss/ShippingCalculator.scss?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--0-oneOf-0-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--0-oneOf-0-2!./node_modules/postcss-loader/dist/cjs.js??ref--0-oneOf-0-3!./node_modules/sass-loader/dist/cjs.js??ref--0-oneOf-0-4!./node_modules/@ecomplus/storefront-components/src/scss/ShippingCalculator.scss?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../css-loader/dist/cjs.js??ref--0-oneOf-0-1!../../../../vue-loader/lib/loaders/stylePostLoader.js!../../../../resolve-url-loader??ref--0-oneOf-0-2!../../../../postcss-loader/dist/cjs.js??ref--0-oneOf-0-3!../../../../sass-loader/dist/cjs.js??ref--0-oneOf-0-4!./ShippingCalculator.scss?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/@ecomplus/storefront-components/src/scss/ShippingCalculator.scss?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("089613ef", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);
//# sourceMappingURL=chunk.22e9b4d727049d09197d.js.map