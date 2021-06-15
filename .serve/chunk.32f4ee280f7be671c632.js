(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/@confere-stores/storefront-components/src/ProductCard.vue":
/*!********************************************************************************!*\
  !*** ./node_modules/@confere-stores/storefront-components/src/ProductCard.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _html_ProductCard_html_vue_type_template_id_6f01aef6_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html/ProductCard.html?vue&type=template&id=6f01aef6&lang=html& */ "./node_modules/@confere-stores/storefront-components/src/html/ProductCard.html?vue&type=template&id=6f01aef6&lang=html&");
/* harmony import */ var _js_ProductCard_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/ProductCard.js?vue&type=script&lang=js& */ "./node_modules/@confere-stores/storefront-components/src/js/ProductCard.js?vue&type=script&lang=js&?b021");
/* empty/unused harmony star reexport *//* harmony import */ var _scss_ProductCard_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/ProductCard.scss?vue&type=style&index=0&lang=scss& */ "./__fixtures__/empty.scss?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _js_ProductCard_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _html_ProductCard_html_vue_type_template_id_6f01aef6_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _html_ProductCard_html_vue_type_template_id_6f01aef6_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@confere-stores/storefront-components/src/ProductCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@confere-stores/storefront-components/src/html/ProductCard.html?vue&type=template&id=6f01aef6&lang=html&":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@confere-stores/storefront-components/src/html/ProductCard.html?vue&type=template&id=6f01aef6&lang=html& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ProductCard_html_vue_type_template_id_6f01aef6_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./ProductCard.html?vue&type=template&id=6f01aef6&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@confere-stores/storefront-components/src/html/ProductCard.html?vue&type=template&id=6f01aef6&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ProductCard_html_vue_type_template_id_6f01aef6_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ProductCard_html_vue_type_template_id_6f01aef6_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@confere-stores/storefront-components/src/js/ProductCard.js?vue&type=script&lang=js&?762f":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@confere-stores/storefront-components/src/js/ProductCard.js?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/i18n */ "./node_modules/@ecomplus/i18n/src/pt_br/index.js");
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _ecomplus_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ecomplus/client */ "./node_modules/@ecomplus/client/src/index.js");
/* harmony import */ var _ecomplus_shopping_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ecomplus/shopping-cart */ "./node_modules/@ecomplus/shopping-cart/src/index.js");
/* harmony import */ var _ALink_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ALink.vue */ "./node_modules/@confere-stores/storefront-components/src/ALink.vue");
/* harmony import */ var _APicture_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../APicture.vue */ "./node_modules/@confere-stores/storefront-components/src/APicture.vue");
/* harmony import */ var _APrices_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../APrices.vue */ "./node_modules/@confere-stores/storefront-components/src/APrices.vue");











const getExternalHtml = (varName, product) => {
  if (typeof window === 'object') {
    varName = `productCard${varName}Html`
    const html = typeof window[varName] === 'function'
      ? window[varName](product)
      : window[varName]
    if (typeof html === 'string') {
      return html
    }
  }
  return undefined
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ProductCard',

  components: {
    ALink: _ALink_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    APicture: _APicture_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    APrices: _APrices_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },

  props: {
    product: Object,
    productId: String,
    isSmall: Boolean,
    headingTag: {
      type: String,
      default: 'h3'
    },
    buyText: String,
    transitionClass: {
      type: String,
      default: 'animated fadeIn'
    },
    canAddToCart: {
      type: Boolean,
      default: true
    },
    isLoaded: Boolean,
    installmentsOption: Object,
    discountOption: Object
  },

  data () {
    return {
      body: {},
      isLoading: false,
      isWaitingBuy: false,
      isHovered: false,
      error: ''
    }
  },

  computed: {
    i19outOfStock: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19outOfStock"]),
    i19unavailable: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19unavailable"]),

    ratingHtml () {
      return getExternalHtml('Rating', this.body)
    },

    buyHtml () {
      return getExternalHtml('Buy', this.body)
    },

    footerHtml () {
      return getExternalHtml('Footer', this.body)
    },

    name () {
      return Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["name"])(this.body)
    },

    strBuy () {
      return this.buyText ||
        (typeof window === 'object' && window.productCardBuyText) ||
        Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19buy"])
    },

    isInStock () {
      return Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["inStock"])(this.body)
    },

    isActive () {
      return this.body.available && this.body.visible && this.isInStock
    },

    discount () {
      const { body } = this
      return Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["onPromotion"])(body)
        ? Math.round(((body.base_price - Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["price"])(body)) * 100) / body.base_price)
        : 0
    }
  },

  methods: {
    setBody (data) {
      this.body = Object.assign({}, data)
      delete this.body.body_html
      delete this.body.body_text
      delete this.body.inventory_records
      delete this.body.price_change_records
    },

    fetchItem () {
      if (this.productId) {
        this.isLoading = true
        Object(_ecomplus_client__WEBPACK_IMPORTED_MODULE_3__["store"])({ url: `/products/${this.productId}.json` })
          .then(({ data }) => {
            this.$emit('update:product', data)
            this.setBody(data)
            this.$emit('update:is-loaded', true)
          })
          .catch(err => {
            console.error(err)
            if (!this.body.name || !this.body.slug || !this.body.pictures) {
              this.error = Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19connectionErrorProductMsg"])
            }
          })
          .finally(() => {
            this.isLoading = false
          })
      }
    },

    buy () {
      const product = this.body
      this.$emit('buy', { product })
      if (this.canAddToCart) {
        this.isWaitingBuy = true
        Object(_ecomplus_client__WEBPACK_IMPORTED_MODULE_3__["store"])({ url: `/products/${product._id}.json` })
          .then(({ data }) => {
            const selectFields = ['variations', 'customizations', 'kit_composition']
            for (let i = 0; i < selectFields.length; i++) {
              const selectOptions = data[selectFields[i]]
              if (selectOptions && selectOptions.length) {
                return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(7), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, /*! ../ProductQuickview.vue */ "./node_modules/@confere-stores/storefront-components/src/ProductQuickview.vue"))
                  .then(quickview => {
                    new vue__WEBPACK_IMPORTED_MODULE_2__["default"]({
                      render: h => h(quickview.default, {
                        props: {
                          product: data
                        }
                      })
                    }).$mount(this.$refs.quickview)
                  })
              }
            }
            const { quantity, price } = data
            _ecomplus_shopping_cart__WEBPACK_IMPORTED_MODULE_4__["default"].addProduct({ ...product, quantity, price })
          })
          .catch(err => {
            console.error(err)
            window.location = `/${product.slug}`
          })
          .finally(() => {
            this.isWaitingBuy = false
          })
      }
    }
  },

  created () {
    if (this.product) {
      this.setBody(this.product)
      if (this.product.available === undefined) {
        this.body.available = true
      }
      if (this.product.visible === undefined) {
        this.body.visible = true
      }
    }
    if (!this.isLoaded) {
      this.fetchItem()
    }
  }
});


/***/ }),

/***/ "./node_modules/@confere-stores/storefront-components/src/js/ProductCard.js?vue&type=script&lang=js&?b021":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@confere-stores/storefront-components/src/js/ProductCard.js?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductCard_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./ProductCard.js?vue&type=script&lang=js& */ "./node_modules/@confere-stores/storefront-components/src/js/ProductCard.js?vue&type=script&lang=js&?762f");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_ProductCard_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@confere-stores/storefront-components/src/html/ProductCard.html?vue&type=template&id=6f01aef6&lang=html&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@confere-stores/storefront-components/src/html/ProductCard.html?vue&type=template&id=6f01aef6&lang=html& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "product-card",
      class: {
        "product-card--inactive": _vm.body._id && !_vm.isActive,
        "product-card--small": _vm.isSmall
      },
      attrs: { "data-product-id": _vm.body._id, "data-sku": _vm.body.sku },
      on: {
        mouseover: function($event) {
          _vm.isHovered = true
        }
      }
    },
    [
      _c(
        "transition",
        { attrs: { "enter-active-class": _vm.transitionClass } },
        [
          !_vm.isLoading
            ? _c(
                "section",
                [
                  _vm._t(
                    "discount-tag",
                    [
                      _vm.isActive && _vm.discount > 0
                        ? _c(
                            "span",
                            { staticClass: "product-card__offer-stamp" },
                            [
                              _c("i", { staticClass: "fas fa-arrow-down" }),
                              _vm._v(" "),
                              _c("b", [_vm._v(_vm._s(_vm.discount))]),
                              _vm._v("%\n        ")
                            ]
                          )
                        : _vm._e()
                    ],
                    null,
                    { discount: _vm.discount }
                  ),
                  _vm._v(" "),
                  _vm._t("body", [
                    _c(
                      "a-link",
                      {
                        staticClass: "product-card__link",
                        attrs: { href: "/" + _vm.body.slug, title: _vm.name }
                      },
                      [
                        _vm._t("header"),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "product-card__pictures" },
                          [
                            _vm.body.pictures && _vm.body.pictures.length
                              ? _vm._l(
                                  _vm.body.pictures.slice(0, 2).reverse(),
                                  function(picture, index) {
                                    return _vm.body.pictures.length === 1 ||
                                      index === 1 ||
                                      _vm.isHovered
                                      ? _c("a-picture", {
                                          key: index,
                                          staticClass: "product-card__picture",
                                          attrs: {
                                            src: picture,
                                            "can-calc-height": false
                                          }
                                        })
                                      : _vm._e()
                                  }
                                )
                              : _c("a-picture", {
                                  staticClass: "product-card__picture"
                                })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _vm._t("title", [
                          _c(
                            _vm.headingTag,
                            {
                              tag: "component",
                              staticClass: "product-card__name"
                            },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(_vm.name) +
                                  "\n            "
                              )
                            ]
                          )
                        ])
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _vm._t("rating", [_vm._m(0)]),
                  _vm._v(" "),
                  !_vm.body.available || !_vm.body.visible
                    ? _vm._t("unavailable", [
                        _c("p", { staticClass: "badge badge-warning" }, [
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.i19unavailable) +
                              "\n        "
                          )
                        ])
                      ])
                    : !_vm.isInStock
                    ? _vm._t("out-of-stock", [
                        _c("p", { staticClass: "badge badge-dark" }, [
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.i19outOfStock) +
                              "\n        "
                          )
                        ])
                      ])
                    : [
                        _vm._t("prices", [
                          _c("a-prices", {
                            staticClass: "product-card__prices",
                            attrs: {
                              product: _vm.body,
                              "installments-option": _vm.installmentsOption,
                              "discount-option": _vm.discountOption
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "product-card__buy fade",
                            on: { click: _vm.buy }
                          },
                          [
                            _vm._t("buy", [
                              _vm.buyHtml
                                ? _c("div", {
                                    domProps: { innerHTML: _vm._s(_vm.buyHtml) }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  class: _vm.isSmall ? "btn-sm" : "btn-block",
                                  attrs: {
                                    type: "button",
                                    disabled: _vm.isWaitingBuy
                                  }
                                },
                                [
                                  _vm.isWaitingBuy
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "product-card__buy-loading spinner-grow spinner-grow-sm",
                                          attrs: { role: "status" }
                                        },
                                        [
                                          _c(
                                            "span",
                                            { staticClass: "sr-only" },
                                            [_vm._v("Loading...")]
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm._t("buy-button-content", [
                                    _c("i", {
                                      staticClass: "fas fa-shopping-bag mr-1"
                                    }),
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(_vm.strBuy) +
                                        "\n              "
                                    )
                                  ])
                                ],
                                2
                              )
                            ])
                          ],
                          2
                        )
                      ],
                  _vm._v(" "),
                  _vm._t("footer", [
                    _vm.footerHtml
                      ? _c("div", {
                          domProps: { innerHTML: _vm._s(_vm.footerHtml) }
                        })
                      : _vm._e()
                  ])
                ],
                2
              )
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _vm.isLoading
        ? [
            _vm._t("default"),
            _vm._v(" "),
            _vm.error
              ? _c(
                  "div",
                  {
                    staticClass: "alert alert-warning small",
                    attrs: { role: "alert" }
                  },
                  [_vm._v("\n      " + _vm._s(_vm.error) + "\n    ")]
                )
              : _vm._e()
          ]
        : _vm._e(),
      _vm._v(" "),
      _c("div", { ref: "quickview" })
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {
      staticClass: "product-card__rating",
      attrs: { "data-sku": _vm.body.sku },
      domProps: { innerHTML: _vm._s(_vm.ratingHtml) }
    })
  }
]
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=chunk.32f4ee280f7be671c632.js.map