(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/@ecomplus/widget-gmc-ratings/src/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-gmc-ratings/src/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var _ecomplus_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ecomplus/client */ "./node_modules/@ecomplus/client/src/index.js");
/* harmony import */ var _ecomplus_passport_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ecomplus/passport-client */ "./node_modules/@ecomplus/passport-client/src/index.js");



/* harmony default export */ __webpack_exports__["default"] = ((options = {}) => {
  const {
    gmcMerchantId,
    dialogPosition
  } = options;

  if (gmcMerchantId) {
    const router = window.storefrontApp && window.storefrontApp.router;

    if (router) {
      const addConfirmationDialog = ({
        name,
        params
      }) => {
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
            customerEmail = _ecomplus_passport_client__WEBPACK_IMPORTED_MODULE_2__["default"].getCustomer().main_email;
          }

          if (!deliveryCountry) {
            deliveryCountry = _ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__["$ecomConfig"].get('country_code');
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
            estimated_delivery_date: deliveryDate.getFullYear() + `-${(deliveryDate.getMonth() + 1).toString().padStart(2, '0')}-` + deliveryDate.getDate().toString().padStart(2, '0'),
            opt_in_style: dialogPosition || 'CENTER_DIALOG'
          };

          if (order && order.items) {
            for (let i = 0; i < order.items.length && i <= 4; i++) {
              promises.push(Object(_ecomplus_client__WEBPACK_IMPORTED_MODULE_1__["store"])({
                url: `/products/${order.items[i].product_id}.json`
              }).then(({
                data
              }) => {
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

/***/ })

}]);
//# sourceMappingURL=chunk.5b1feaa9efbb826107f0.js.map