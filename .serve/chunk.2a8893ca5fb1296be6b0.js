(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/@ecomplus/widget-ebit/src/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@ecomplus/widget-ebit/src/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.error.cause.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var _ecomplus_passport_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ecomplus/passport-client */ "./node_modules/@ecomplus/passport-client/src/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function () {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const {
    ebitStoreId
  } = options;

  if (ebitStoreId) {
    const router = window.storefrontApp && window.storefrontApp.router;

    if (router) {
      let countConfirmation = 0;

      const addConfirmationBanner = _ref => {
        let {
          name,
          params
        } = _ref;

        if (name === 'confirmation' && countConfirmation === 0) {
          countConfirmation++;
          _ecomplus_passport_client__WEBPACK_IMPORTED_MODULE_2__["default"].fetchOrder(params.id).then(order => {
            const customer = _ecomplus_passport_client__WEBPACK_IMPORTED_MODULE_2__["default"].getCustomer();
            let ebitParam = "storeId=".concat(ebitStoreId, "&mktSaleId=0&platform=ecomplus") + "&totalSpent=".concat(order.amount.total) + "&deliveryTax=".concat(order.amount.freight || 0) + "&transactionId=".concat(order.number || order._id) + "&email=".concat(customer.main_email);

            if (customer.gender) {
              ebitParam += "&gender=".concat(customer.gender.toUpperCase());
            }

            if (customer.birth_date) {
              const {
                day,
                month,
                year
              } = customer.birth_date;
              ebitParam += "&birthday=".concat(day.toString().padStart(2, '0')) + "-".concat(month.toString().padStart(2, '0'), "-").concat(year);
            }

            const {
              items
            } = order;

            if (items && items.length) {
              let skus = items[0].sku;
              let values = Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["price"])(items[0]);
              let quantities = items[0].quantity;
              let names = encodeURIComponent(items[0].name);

              for (let i = 1; i < items.length; i++) {
                skus += "|".concat(items[i].sku);
                values += "|".concat(Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["price"])(items[i]));
                quantities += "|".concat(items[i].quantity);
                names += "|".concat(encodeURIComponent(items[i].name));
              }

              ebitParam += "&sku=".concat(skus, "&value=").concat(values, "&quantity=").concat(quantities, "&productName=").concat(names);
            }

            if (order.shipping_lines && order.shipping_lines[0]) {
              const shippingLine = order.shipping_lines[0];
              ebitParam += "&deliveryTime=".concat(shippingLine.delivery_time.days || 0) + "&zipCode=".concat(shippingLine.to.zip);
            }

            if (order.transactions && order.transactions[0]) {
              const transaction = order.transactions[0];
              ebitParam += "&parcels=".concat(transaction.installments && transaction.installments.number || 1);
              ebitParam += '&paymentType=';

              switch (transaction.payment_method.code) {
                case 'credit_card':
                  ebitParam += '05';
                  break;

                case 'banking_billet':
                  ebitParam += '08';
                  break;

                case 'debit_card':
                case 'online_debit':
                case 'account_deposit':
                  ebitParam += '28';
                  break;

                case 'loyalty_points':
                  ebitParam += '24';
                  break;

                default:
                  ebitParam += '14';
              }

              if (transaction.credit_card && transaction.credit_card.company) {
                ebitParam += '&cardFlag=';

                switch (transaction.credit_card.company.toLowerCase()) {
                  case 'visa':
                    ebitParam += 6;
                    break;

                  case 'mastercard':
                    ebitParam += 5;
                    break;

                  case 'american express':
                  case 'amex':
                    ebitParam += 1;
                    break;

                  case 'elo':
                    ebitParam += 8;
                    break;

                  case 'aura':
                    ebitParam += 2;
                    break;

                  case 'hipercard':
                    ebitParam += 4;
                    break;

                  case 'diners club':
                    ebitParam += 3;
                    break;

                  default:
                    ebitParam += 7;
                }
              }
            }

            const appendBanner = () => {
              const $confirmation = document.getElementById('confirmation');

              if ($confirmation) {
                $confirmation.insertAdjacentHTML('beforeend', "<div> <param id=\"ebitParam\" value=\"".concat(ebitParam, "\"> <a id=\"bannerEbit\"></a> </div>"));
                const $script = document.createElement('script');
                $script.id = 'getSelo';
                $script.type = 'text/javascript';
                $script.src = 'https://imgs.ebit.com.br/ebitBR/selo-ebit/js/getSelo.js' + "?".concat(ebitStoreId, "&lightbox=true");
                document.body.appendChild($script);
                clearInterval(tryAppendInterval);
              }
            };

            const tryAppendInterval = setInterval(appendBanner, 200);
          }).catch(console.error);
        }
      };

      if (router.currentRoute) {
        addConfirmationBanner(router.currentRoute);
      }

      router.afterEach(addConfirmationBanner);
    }
  } else {
    console.error(new Error('Can\'t show lightbox without `ebitStoreId` option'));
  }
});

/***/ })

}]);
//# sourceMappingURL=chunk.2a8893ca5fb1296be6b0.js.map