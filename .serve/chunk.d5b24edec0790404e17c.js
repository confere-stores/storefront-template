(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~app-order"],{

/***/ "./node_modules/@confere-stores/storefront-components/src/ShippingLine.vue":
/*!*********************************************************************************!*\
  !*** ./node_modules/@confere-stores/storefront-components/src/ShippingLine.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _html_ShippingLine_html_vue_type_template_id_75abe54c_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html/ShippingLine.html?vue&type=template&id=75abe54c&lang=html& */ "./node_modules/@confere-stores/storefront-components/src/html/ShippingLine.html?vue&type=template&id=75abe54c&lang=html&");
/* harmony import */ var _js_ShippingLine_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/ShippingLine.js?vue&type=script&lang=js& */ "./node_modules/@confere-stores/storefront-components/src/js/ShippingLine.js?vue&type=script&lang=js&?df13");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _js_ShippingLine_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _html_ShippingLine_html_vue_type_template_id_75abe54c_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _html_ShippingLine_html_vue_type_template_id_75abe54c_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@confere-stores/storefront-components/src/ShippingLine.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@confere-stores/storefront-components/src/html/ShippingLine.html?vue&type=template&id=75abe54c&lang=html&":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@confere-stores/storefront-components/src/html/ShippingLine.html?vue&type=template&id=75abe54c&lang=html& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ShippingLine_html_vue_type_template_id_75abe54c_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./ShippingLine.html?vue&type=template&id=75abe54c&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@confere-stores/storefront-components/src/html/ShippingLine.html?vue&type=template&id=75abe54c&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ShippingLine_html_vue_type_template_id_75abe54c_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ShippingLine_html_vue_type_template_id_75abe54c_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@confere-stores/storefront-components/src/js/ShippingLine.js?vue&type=script&lang=js&?4fc4":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@confere-stores/storefront-components/src/js/ShippingLine.js?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/i18n */ "./node_modules/@ecomplus/i18n/src/pt_br/index.js");
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ShippingLine',

  props: {
    shippingLine: {
      type: Object,
      required: true
    }
  },

  computed: {
    deadlineStr () {
      const shipping = this.shippingLine
      const isWorkingDays = (shipping.posting_deadline && shipping.posting_deadline.working_days) ||
        (shipping.delivery_time && shipping.delivery_time.working_days)
      let days = shipping.posting_deadline ? shipping.posting_deadline.days : 0
      if (shipping.delivery_time) {
        days += shipping.delivery_time.days
      }
      return `${Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19upTo"])} ${days} ${Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(isWorkingDays ? _ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19workingDays"] : _ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19days"])}`
    },

    freightValueStr () {
      const freight = typeof this.shippingLine.total_price === 'number'
        ? this.shippingLine.total_price
        : this.shippingLine.price
      if (freight) {
        return Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["formatMoney"])(freight)
      } else {
        return Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19freeShipping"])
      }
    }
  }
});


/***/ }),

/***/ "./node_modules/@confere-stores/storefront-components/src/js/ShippingLine.js?vue&type=script&lang=js&?df13":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@confere-stores/storefront-components/src/js/ShippingLine.js?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShippingLine_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./ShippingLine.js?vue&type=script&lang=js& */ "./node_modules/@confere-stores/storefront-components/src/js/ShippingLine.js?vue&type=script&lang=js&?4fc4");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_ShippingLine_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/@ecomplus/storefront-app/src/components/EcOrder.vue":
/*!**************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-app/src/components/EcOrder.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _html_EcOrder_html_vue_type_template_id_3b5868c5_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html/EcOrder.html?vue&type=template&id=3b5868c5&lang=html& */ "./node_modules/@ecomplus/storefront-app/src/components/html/EcOrder.html?vue&type=template&id=3b5868c5&lang=html&");
/* harmony import */ var _js_EcOrder_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/EcOrder.js?vue&type=script&lang=js& */ "./node_modules/@ecomplus/storefront-app/src/components/js/EcOrder.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _scss_EcOrder_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/EcOrder.scss?vue&type=style&index=0&lang=scss& */ "./node_modules/@ecomplus/storefront-app/src/components/scss/EcOrder.scss?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _js_EcOrder_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _html_EcOrder_html_vue_type_template_id_3b5868c5_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _html_EcOrder_html_vue_type_template_id_3b5868c5_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@ecomplus/storefront-app/src/components/EcOrder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@ecomplus/storefront-app/src/components/html/EcOrder.html?vue&type=template&id=3b5868c5&lang=html&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-app/src/components/html/EcOrder.html?vue&type=template&id=3b5868c5&lang=html& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_EcOrder_html_vue_type_template_id_3b5868c5_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./EcOrder.html?vue&type=template&id=3b5868c5&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@ecomplus/storefront-app/src/components/html/EcOrder.html?vue&type=template&id=3b5868c5&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_EcOrder_html_vue_type_template_id_3b5868c5_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_EcOrder_html_vue_type_template_id_3b5868c5_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@ecomplus/storefront-app/src/components/js/EcOrder.js?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-app/src/components/js/EcOrder.js?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_1_EcOrder_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../babel-loader/lib??ref--1!./EcOrder.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/@ecomplus/storefront-app/src/components/js/EcOrder.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_1_EcOrder_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/@ecomplus/storefront-app/src/components/scss/EcOrder.scss?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-app/src/components/scss/EcOrder.scss?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_css_loader_dist_cjs_js_ref_0_oneOf_0_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_0_oneOf_0_2_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_EcOrder_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../vue-style-loader!../../../../../css-loader/dist/cjs.js??ref--0-oneOf-0-1!../../../../../vue-loader/lib/loaders/stylePostLoader.js!../../../../../resolve-url-loader??ref--0-oneOf-0-2!../../../../../postcss-loader/dist/cjs.js??ref--0-oneOf-0-3!../../../../../sass-loader/dist/cjs.js??ref--0-oneOf-0-4!./EcOrder.scss?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/@ecomplus/storefront-app/src/components/scss/EcOrder.scss?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _vue_style_loader_index_js_css_loader_dist_cjs_js_ref_0_oneOf_0_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_0_oneOf_0_2_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_EcOrder_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_css_loader_dist_cjs_js_ref_0_oneOf_0_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_0_oneOf_0_2_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_EcOrder_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_css_loader_dist_cjs_js_ref_0_oneOf_0_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_0_oneOf_0_2_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_EcOrder_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_css_loader_dist_cjs_js_ref_0_oneOf_0_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_0_oneOf_0_2_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_EcOrder_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./node_modules/@ecomplus/storefront-app/src/views/Order.vue":
/*!*******************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-app/src/views/Order.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Order_vue_vue_type_template_id_11c442a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Order.vue?vue&type=template&id=11c442a2& */ "./node_modules/@ecomplus/storefront-app/src/views/Order.vue?vue&type=template&id=11c442a2&");
/* harmony import */ var _js_Order_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Order.js?vue&type=script&lang=js& */ "./node_modules/@ecomplus/storefront-app/src/views/js/Order.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _js_Order_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Order_vue_vue_type_template_id_11c442a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Order_vue_vue_type_template_id_11c442a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@ecomplus/storefront-app/src/views/Order.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@ecomplus/storefront-app/src/views/Order.vue?vue&type=template&id=11c442a2&":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-app/src/views/Order.vue?vue&type=template&id=11c442a2& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_11c442a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../vue-loader/lib??vue-loader-options!./Order.vue?vue&type=template&id=11c442a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@ecomplus/storefront-app/src/views/Order.vue?vue&type=template&id=11c442a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_11c442a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_11c442a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@ecomplus/storefront-app/src/views/js/Order.js?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-app/src/views/js/Order.js?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_1_Order_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../babel-loader/lib??ref--1!./Order.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/@ecomplus/storefront-app/src/views/js/Order.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_1_Order_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/@ecomplus/storefront-app/src/components/js/EcOrder.js?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/@ecomplus/storefront-app/src/components/js/EcOrder.js?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecomplus_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/client */ "./node_modules/@ecomplus/client/src/index.js");
/* harmony import */ var _ecomplus_passport_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ecomplus/passport-client */ "./node_modules/@ecomplus/passport-client/src/index.js");
/* harmony import */ var _EcOrderInfo_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../EcOrderInfo.vue */ "./node_modules/@ecomplus/storefront-app/src/components/EcOrderInfo.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'EcOrder',
  components: {
    EcOrderInfo: _EcOrderInfo_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    order: {
      type: Object,
      required: true
    },
    skipDataLoad: {
      type: Boolean
    },
    accountOrdersUrl: {
      type: String,
      default: '/app/#/account/orders'
    },
    ecomPassport: {
      type: Object,
      default: () => _ecomplus_passport_client__WEBPACK_IMPORTED_MODULE_1__["default"]
    }
  },

  data() {
    return {
      isReady: this.skipDataLoad,
      orderBody: {
        _id: '',
        ...this.order
      }
    };
  },

  computed: {
    localOrder: {
      get() {
        return this.orderBody;
      },

      set(body) {
        this.orderBody = body;
        this.$emit('update:order', body);
      }

    }
  },
  methods: {
    fetchOrder() {
      const url = `/orders/${this.orderBody._id}.json`;
      const request = this.ecomPassport.checkLogin() ? this.ecomPassport.requestApi(url) : Object(_ecomplus_client__WEBPACK_IMPORTED_MODULE_0__["store"])({
        url
      });
      request.then(({
        data
      }) => {
        this.localOrder = data;
        this.isReady = true;
      });
    }

  },
  watch: {
    'order._id'(_id) {
      if (_id && _id !== this.orderBody._id) {
        this.orderBody = this.order;
      }
    },

    'orderBody._id'(_id) {
      if (_id && !this.skipDataLoad) {
        this.fetchOrder();
      }
    }

  },

  created() {
    if (!this.skipDataLoad) {
      if (this.order._id) {
        this.fetchOrder();
      } else if (this.order.number) {
        this.ecomPassport.fetchOrdersList().then(orders => {
          this.localOrder = orders.find(({
            number
          }) => number === this.order.number) || {};
        });
      } else {// TODO: alert invalid order body
      }
    }
  }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/@ecomplus/storefront-app/src/views/js/Order.js?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/@ecomplus/storefront-app/src/views/js/Order.js?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_EcOrder_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/EcOrder.vue */ "./node_modules/@ecomplus/storefront-app/src/components/EcOrder.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'order',
  components: {
    EcOrder: _components_EcOrder_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: { ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['orders']),

    number() {
      const numberStr = this.$route.params.number;
      return /^[0-9]+$/.test(numberStr) && parseInt(numberStr, 10);
    },

    order() {
      const order = this.orders.find(({
        _id,
        number
      }) => {
        return this.number === number || this.$route.params.number === _id;
      });

      if (!order) {
        const {
          number
        } = this;

        if (number) {
          return {
            _id: this.$route.params.id,
            number
          };
        } else {
          return {
            _id: this.$route.params.number
          };
        }
      }

      return order;
    }

  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/@ecomplus/storefront-app/src/components/scss/EcOrder.scss?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--0-oneOf-0-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--0-oneOf-0-2!./node_modules/postcss-loader/dist/cjs.js??ref--0-oneOf-0-3!./node_modules/sass-loader/dist/cjs.js??ref--0-oneOf-0-4!./node_modules/@ecomplus/storefront-app/src/components/scss/EcOrder.scss?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".order{min-height:300px}", "",{"version":3,"sources":["EcOrder.scss"],"names":[],"mappings":"AAIA,OACE,gBAAiB","file":"EcOrder.scss","sourcesContent":["$primary: #e83e8c; $secondary: #333333; $settings-theme: (\n  bootswatch: _,\n  custom: _\n); \n.order {\n  min-height: 300px;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@confere-stores/storefront-components/src/html/ShippingLine.html?vue&type=template&id=75abe54c&lang=html&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@confere-stores/storefront-components/src/html/ShippingLine.html?vue&type=template&id=75abe54c&lang=html& ***!
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
  return _c("div", { staticClass: "shipping-line" }, [
    _c("strong", [_vm._v("\n    " + _vm._s(_vm.deadlineStr) + "\n  ")]),
    _vm._v(" "),
    _c("span", { staticClass: "mx-2" }, [
      _vm._v("\n    " + _vm._s(_vm.freightValueStr) + "\n  ")
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@ecomplus/storefront-app/src/components/html/EcOrder.html?vue&type=template&id=3b5868c5&lang=html&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@ecomplus/storefront-app/src/components/html/EcOrder.html?vue&type=template&id=3b5868c5&lang=html& ***!
  \*****************************************************************************************************************************************************************************************************/
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
  return _c(
    "article",
    { staticClass: "order" },
    [
      _c(
        "transition-group",
        { attrs: { "enter-active-class": "animated fadeIn slow" } },
        [
          _vm.isReady
            ? _c("ec-order-info", {
                key: "info",
                attrs: { order: _vm.localOrder, "skip-first-data-load": "" },
                on: {
                  "update:order": function($event) {
                    _vm.localOrder = $event
                  }
                }
              })
            : _c("div", { key: "loading" }, [
                _c(
                  "div",
                  { staticClass: "spinner-border", attrs: { role: "status" } },
                  [
                    _c("span", { staticClass: "sr-only" }, [
                      _vm._v("Loading...")
                    ])
                  ]
                )
              ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@ecomplus/storefront-app/src/views/Order.vue?vue&type=template&id=11c442a2&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@ecomplus/storefront-app/src/views/Order.vue?vue&type=template&id=11c442a2& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { attrs: { id: "order" } },
    [_c("ec-order", { attrs: { order: _vm.order } })],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/@ecomplus/storefront-app/src/components/scss/EcOrder.scss?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--0-oneOf-0-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--0-oneOf-0-2!./node_modules/postcss-loader/dist/cjs.js??ref--0-oneOf-0-3!./node_modules/sass-loader/dist/cjs.js??ref--0-oneOf-0-4!./node_modules/@ecomplus/storefront-app/src/components/scss/EcOrder.scss?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../css-loader/dist/cjs.js??ref--0-oneOf-0-1!../../../../../vue-loader/lib/loaders/stylePostLoader.js!../../../../../resolve-url-loader??ref--0-oneOf-0-2!../../../../../postcss-loader/dist/cjs.js??ref--0-oneOf-0-3!../../../../../sass-loader/dist/cjs.js??ref--0-oneOf-0-4!./EcOrder.scss?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/@ecomplus/storefront-app/src/components/scss/EcOrder.scss?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("60cdd274", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);
//# sourceMappingURL=chunk.d5b24edec0790404e17c.js.map