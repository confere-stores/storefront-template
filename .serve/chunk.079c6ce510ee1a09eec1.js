(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./template/js/lib/fallback-404.js":
/*!*****************************************!*\
  !*** ./template/js/lib/fallback-404.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var _ecomplus_storefront_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ecomplus/storefront-router */ "./node_modules/@ecomplus/storefront-router/src/index.js");
/* harmony import */ var _ecomplus_storefront_twbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ecomplus/storefront-twbs */ "./node_modules/@ecomplus/storefront-twbs/dist/storefront-twbs.min.js");
/* harmony import */ var _ecomplus_storefront_twbs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ecomplus_storefront_twbs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _components_TheProduct_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! #components/TheProduct.vue */ "./node_modules/@confere-stores/storefront-components/src/TheProduct.vue");
/* harmony import */ var _components_SearchEngine_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! #components/SearchEngine.vue */ "./node_modules/@confere-stores/storefront-components/src/SearchEngine.vue");







const $fallback404 = Object(_ecomplus_storefront_twbs__WEBPACK_IMPORTED_MODULE_3__["$"])('#fallback-404');

if ($fallback404.length) {
  const urlParams = new URLSearchParams(window.location.search);
  const url = urlParams.get('url');

  if (url) {
    const router = new _ecomplus_storefront_router__WEBPACK_IMPORTED_MODULE_2__["default"]();
    $fallback404.html('<div class="spinner-border" role="status"></div>');

    const renderNotFound = () => {
      $fallback404.html(Object(_ecomplus_storefront_twbs__WEBPACK_IMPORTED_MODULE_3__["$"])('<h3>', {
        class: 'my-4',
        html: ['<i class="text-muted fas fa-exclamation-triangle mr-3"></i>', Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])({
          pt_br: 'Página não encontrada',
          en_us: 'Page not found'
        })]
      }));
      router.list().then(routes => {
        $fallback404.append([Object(_ecomplus_storefront_twbs__WEBPACK_IMPORTED_MODULE_3__["$"])('<p>', {
          class: 'lead',
          html: Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])({
            pt_br: 'Mapa do site:',
            en_us: 'Sitemap:'
          })
        }), Object(_ecomplus_storefront_twbs__WEBPACK_IMPORTED_MODULE_3__["$"])('<ul>', {
          html: routes.map(({
            path
          }) => {
            return `<li><a href="${path}">${path}</a></li>`;
          })
        })]);
      }).catch(console.error);
    };

    router.map(url).then(route => {
      const {
        resource,
        _id
      } = route;

      switch (resource) {
        case 'products':
          return new vue__WEBPACK_IMPORTED_MODULE_4__["default"]({
            render: h => h(_components_TheProduct_vue__WEBPACK_IMPORTED_MODULE_5__["default"], {
              props: {
                productId: _id
              }
            })
          });

        case 'brands':
        case 'categories':
          return router.resolve(route).then(({
            body
          }) => {
            return new vue__WEBPACK_IMPORTED_MODULE_4__["default"]({
              render: h => h(_components_SearchEngine_vue__WEBPACK_IMPORTED_MODULE_6__["default"], {
                props: {
                  [resource]: [body.name]
                }
              })
            });
          });
      }
    }).then(vueInstance => {
      if (vueInstance) {
        vueInstance.$mount($fallback404[0]);
      } else {
        renderNotFound();
      }
    }).catch(err => {
      console.error(err);
      renderNotFound();
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=chunk.079c6ce510ee1a09eec1.js.map