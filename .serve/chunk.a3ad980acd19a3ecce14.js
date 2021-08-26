(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/@ecomplus/storefront-components/src/APagination.vue":
/*!**************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/APagination.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _html_APagination_html_vue_type_template_id_792b9328_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html/APagination.html?vue&type=template&id=792b9328&lang=html& */ "./node_modules/@ecomplus/storefront-components/src/html/APagination.html?vue&type=template&id=792b9328&lang=html&");
/* harmony import */ var _js_APagination_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/APagination.js?vue&type=script&lang=js& */ "./node_modules/@ecomplus/storefront-components/src/js/APagination.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _js_APagination_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _html_APagination_html_vue_type_template_id_792b9328_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _html_APagination_html_vue_type_template_id_792b9328_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@ecomplus/storefront-components/src/APagination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/html/APagination.html?vue&type=template&id=792b9328&lang=html&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/html/APagination.html?vue&type=template&id=792b9328&lang=html& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_APagination_html_vue_type_template_id_792b9328_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./APagination.html?vue&type=template&id=792b9328&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@ecomplus/storefront-components/src/html/APagination.html?vue&type=template&id=792b9328&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_APagination_html_vue_type_template_id_792b9328_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_APagination_html_vue_type_template_id_792b9328_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/js/APagination.js?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/js/APagination.js?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_1_APagination_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../babel-loader/lib??ref--1!./APagination.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/@ecomplus/storefront-components/src/js/APagination.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_1_APagination_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/@ecomplus/storefront-components/src/js/APagination.js?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/@ecomplus/storefront-components/src/js/APagination.js?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/i18n */ "./node_modules/@ecomplus/storefront-components/node_modules/@ecomplus/i18n/src/pt_br/index.js");
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'APagination',
  props: {
    totalItems: {
      type: Number,
      required: true
    },
    page: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 24
    }
  },
  computed: {
    i19next: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19next"]),
    i19previous: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19previous"]),

    totalPages() {
      return Math.ceil(this.totalItems / this.pageSize);
    },

    pageNums() {
      const pages = [];

      if (this.totalPages > 0) {
        let lastPage;

        for (let i = -2; i <= 2; i++) {
          lastPage = this.page + i;

          if (lastPage >= 1) {
            if (lastPage <= this.totalPages) {
              pages.push(lastPage);
            } else {
              break;
            }
          }
        }

        if (pages[0] === 3) {
          pages.unshift(1, 2);
        } else if (pages[0] === 2) {
          pages.unshift(1);
        }

        if (lastPage === this.totalPages - 2) {
          pages.push(lastPage + 1, lastPage + 2);
        } else if (lastPage === this.totalPages - 1) {
          pages.push(lastPage + 1);
        }
      }

      return pages;
    },

    lastPageNum() {
      return this.pageNums[this.pageNums.length - 1];
    }

  },
  methods: {
    go(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.$emit('update:page', page);
      }
    }

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@ecomplus/storefront-components/src/html/APagination.html?vue&type=template&id=792b9328&lang=html&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@ecomplus/storefront-components/src/html/APagination.html?vue&type=template&id=792b9328&lang=html& ***!
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
  return _c("nav", { staticClass: "d-flex" }, [
    _c("ul", { staticClass: "pagination mr-2" }, [
      _c(
        "li",
        { staticClass: "page-item", class: _vm.page <= 1 ? "disabled" : null },
        [
          _c(
            "a",
            {
              staticClass: "page-link",
              attrs: {
                href: "#",
                "aria-disabled": _vm.page <= 1 ? true : null
              },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.go(_vm.page - 1)
                }
              }
            },
            [_vm._v("\n        « " + _vm._s(_vm.i19previous) + "\n      ")]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass: "page-item",
          class: _vm.page >= _vm.totalPages ? "disabled" : null
        },
        [
          _c(
            "a",
            {
              staticClass: "page-link",
              attrs: {
                href: "#",
                "aria-disabled": _vm.page >= _vm.totalPages ? true : null
              },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.go(_vm.page + 1)
                }
              }
            },
            [_vm._v("\n        " + _vm._s(_vm.i19next) + " »\n      ")]
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "ul",
      { staticClass: "pagination d-none d-lg-flex" },
      [
        _vm.pageNums[0] > 1
          ? [
              _c("li", { staticClass: "page-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "page-link",
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.go(1)
                      }
                    }
                  },
                  [_vm._v("\n          1\n        ")]
                )
              ]),
              _vm._v(" "),
              _vm._m(0)
            ]
          : _vm._e(),
        _vm._v(" "),
        _vm._l(_vm.pageNums, function(n) {
          return _c(
            "li",
            {
              key: "p" + n,
              staticClass: "page-item",
              class: _vm.page === n ? "active" : null
            },
            [
              _vm.page !== n
                ? _c(
                    "a",
                    {
                      staticClass: "page-link",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.go(n)
                        }
                      }
                    },
                    [_vm._v("\n        " + _vm._s(n) + "\n      ")]
                  )
                : _c(
                    "span",
                    {
                      staticClass: "page-link",
                      attrs: { "aria-current": "page" }
                    },
                    [_vm._v("\n        " + _vm._s(n) + "\n      ")]
                  )
            ]
          )
        }),
        _vm._v(" "),
        _vm.lastPageNum < _vm.totalPages
          ? [
              _vm._m(1),
              _vm._v(" "),
              _c("li", { staticClass: "page-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "page-link",
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.go(_vm.totalPages)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n          " + _vm._s(_vm.totalPages) + "\n        "
                    )
                  ]
                )
              ])
            ]
          : _vm._e()
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "page-item disabled" }, [
      _c("span", { staticClass: "page-link" }, [
        _vm._v("\n          ...\n        ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "page-item disabled" }, [
      _c("span", { staticClass: "page-link" }, [
        _vm._v("\n          ...\n        ")
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=chunk.a3ad980acd19a3ecce14.js.map