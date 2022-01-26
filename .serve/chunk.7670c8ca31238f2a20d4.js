(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./template/js/lib/fetch-info.js":
/*!***************************************!*\
  !*** ./template/js/lib/fetch-info.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.finally.js */ "./node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ecomplus_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ecomplus/client */ "./node_modules/@ecomplus/client/src/index.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emitter */ "./template/js/lib/emitter.js");
/* harmony import */ var _persist_utm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./persist-utm */ "./template/js/lib/persist-utm.js");





window._info = window._info || {};
const fetchInfoPromises = [];
const modulesToFetch = [{
  endpoint: 'list_payments'
}, {
  endpoint: 'calculate_shipping'
}];

if (Object.keys(_persist_utm__WEBPACK_IMPORTED_MODULE_4__["default"]).length) {
  modulesToFetch.push({
    endpoint: 'apply_discount',
    reqOptions: {
      method: 'post',
      data: {
        utm: _persist_utm__WEBPACK_IMPORTED_MODULE_4__["default"]
      }
    }
  });
}

modulesToFetch.forEach(_ref => {
  let {
    endpoint,
    reqOptions
  } = _ref;
  const modInfo = {};
  window._info[endpoint] = modInfo;
  const promise = new Promise(resolve => {
    Object(_ecomplus_client__WEBPACK_IMPORTED_MODULE_2__["modules"])({
      url: "/".concat(endpoint, ".json"),
      ...reqOptions,
      axiosConfig: {
        timeout: 10000
      }
    }).then(_ref2 => {
      let {
        data
      } = _ref2;
      const {
        result
      } = data;

      if (Array.isArray(result)) {
        result.forEach(_ref3 => {
          let {
            error,
            response
          } = _ref3;

          if (!error) {
            let field, val;

            switch (endpoint) {
              case 'calculate_shipping':
                field = 'free_shipping_from_value';
                val = response[field];

                if (typeof val === 'number' && (modInfo[field] === undefined || val < modInfo[field])) {
                  modInfo[field] = val;
                }

                break;

              case 'list_payments':
                field = 'installments_option';
                val = response[field];

                if (val && (!modInfo[field] || val.monthly_interest < modInfo[field].monthly_interest || val.max_number > modInfo[field].max_number)) {
                  modInfo[field] = val;
                }

                field = 'discount_option';
                val = response[field];

                if (val && (!modInfo[field] || val.value > modInfo[field].value)) {
                  response.payment_gateways.forEach(_ref4 => {
                    let {
                      discount
                    } = _ref4;

                    if (discount && discount.apply_at !== 'freight' && discount.value === val.value) {
                      modInfo[field] = {
                        apply_at: discount.apply_at,
                        ...val
                      };
                    }
                  });
                }

                field = 'loyalty_points_programs';
                val = response[field];

                if (val) {
                  modInfo[field] = { ...modInfo[field],
                    ...val
                  };
                }

                break;

              default:
                field = 'available_extra_discount';
                val = response[field];

                if (val && (!modInfo[field] || val.value > modInfo[field].value)) {
                  modInfo[field] = val;
                }

            }
          }
        });
      }

      _emitter__WEBPACK_IMPORTED_MODULE_3__["default"].emit("info:".concat(endpoint), modInfo);
    }).catch(err => {
      console.error(err);
      _emitter__WEBPACK_IMPORTED_MODULE_3__["default"].emit("info:".concat(endpoint), err);
    }).finally(resolve);
  });
  fetchInfoPromises.push(promise);
});
Promise.all(fetchInfoPromises).then(() => _emitter__WEBPACK_IMPORTED_MODULE_3__["default"].emit('info', window._info));

/***/ })

}]);
//# sourceMappingURL=chunk.7670c8ca31238f2a20d4.js.map