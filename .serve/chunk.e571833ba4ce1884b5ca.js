(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/@ecomplus/widget-gmc-ratings/src/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-gmc-ratings/src/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_promise_all_settled_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.all-settled.js */ "./node_modules/core-js/modules/es.promise.all-settled.js");
/* harmony import */ var core_js_modules_es_promise_all_settled_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_all_settled_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.error.cause.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var _ecomplus_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ecomplus/client */ "./node_modules/@ecomplus/client/src/index.js");
/* harmony import */ var _ecomplus_passport_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ecomplus/passport-client */ "./node_modules/@ecomplus/passport-client/src/index.js");






/* harmony default export */ __webpack_exports__["default"] = (function () {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const {
    gmcMerchantId,
    dialogPosition
  } = options;

  if (gmcMerchantId) {
    const router = window.storefrontApp && window.storefrontApp.router;

    if (router) {
      const addConfirmationDialog = _ref => {
        let {
          name,
          params
        } = _ref;

        if (name === 'confirmation' && params.json) {
          const addDays = days => {
            const date = new Date(Date.now());
            date.setDate(date.getDate() + days);
            return date;
          };

          let order, customerEmail, deliveryCountry, deliveryDate;
          const orderJson = decodeURIComponent(params.json);

          if (orderJson) {
            try {
              order = JSON.parse(orderJson);
            } catch (e) {}
          }

          if (order) {
            const {
              buyers
            } = order;

            if (buyers && buyers[0]) {
              customerEmail = buyers[0].main_email;
            }

            const shippingLine = order.shipping_lines && order.shipping_lines[0];

            if (shippingLine && shippingLine.delivery_time) {
              let days = shippingLine.delivery_time.days;

              if (shippingLine.posting_deadline) {
                days += shippingLine.delivery_time.days;
              }

              if (shippingLine.delivery_time.working_days) {
                days *= 1.25;
              }

              deliveryDate = addDays(days + 3);
            }
          }

          if (!customerEmail) {
            customerEmail = _ecomplus_passport_client__WEBPACK_IMPORTED_MODULE_5__["default"].getCustomer().main_email;
          }

          if (!deliveryCountry) {
            deliveryCountry = _ecomplus_utils__WEBPACK_IMPORTED_MODULE_3__["$ecomConfig"].get('country_code');
          }

          if (!deliveryDate) {
            deliveryDate = addDays(14);
          }

          const promises = [];
          const gtins = [];
          const optInConfig = {
            merchant_id: gmcMerchantId,
            order_id: params.number || params.id,
            email: customerEmail,
            delivery_country: deliveryCountry,
            estimated_delivery_date: deliveryDate.getFullYear() + "-".concat((deliveryDate.getMonth() + 1).toString().padStart(2, '0'), "-") + deliveryDate.getDate().toString().padStart(2, '0'),
            opt_in_style: dialogPosition || 'CENTER_DIALOG'
          };

          if (order && order.items) {
            for (let i = 0; i < order.items.length && i <= 4; i++) {
              promises.push(Object(_ecomplus_client__WEBPACK_IMPORTED_MODULE_4__["store"])({
                url: "/products/".concat(order.items[i].product_id, ".json")
              }).then(_ref2 => {
                let {
                  data
                } = _ref2;

                if (data.gtin) {
                  data.gtin.forEach(gtinCode => {
                    if (!gtins.includes(gtinCode)) {
                      gtins.push(gtinCode);
                    }
                  });
                }
              }).catch(console.error));
            }
          }

          Promise.allSettled(promises).then(() => {
            if (gtins.length) {
              optInConfig.products = gtins.map(gtin => ({
                gtin
              }));
            }

            window.gapi.load('surveyoptin', function () {
              window.gapi.surveyoptin.render(optInConfig);
            });
          });
        }
      };

      if (router.currentRoute) {
        addConfirmationDialog(router.currentRoute);
      }

      router.afterEach(addConfirmationDialog);
    }
  } else {
    console.error(new Error('Can\'t show opt-in dialog without `gmcMerchantId` option'));
  }
});

/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterate.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var getIterator = __webpack_require__(/*! ../internals/get-iterator */ "./node_modules/core-js/internals/get-iterator.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js/internals/iterator-close.js");

var TypeError = global.TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterator-close.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-close.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/perform.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/perform.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.all-settled.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.all-settled.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");
var perform = __webpack_require__(/*! ../internals/perform */ "./node_modules/core-js/internals/perform.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");

// `Promise.allSettled` method
// https://tc39.es/ecma262/#sec-promise.allsettled
$({ target: 'Promise', stat: true }, {
  allSettled: function allSettled(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call(promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'fulfilled', value: value };
          --remaining || resolve(values);
        }, function (error) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'rejected', reason: error };
          --remaining || resolve(values);
        });
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ })

}]);
//# sourceMappingURL=chunk.e571833ba4ce1884b5ca.js.map