(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/@ecomplus/widget-compre-confie/src/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-compre-confie/src/index.js ***!
  \******************************************************************/
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
    compreConfieStoreId
  } = options;

  if (compreConfieStoreId) {
    const router = window.storefrontApp && window.storefrontApp.router;

    if (router) {
      const addConfirmationBanner = _ref => {
        let {
          name,
          params
        } = _ref;

        if (name === 'confirmation' && params.json) {
          let order;
          const orderJson = decodeURIComponent(params.json);

          if (orderJson) {
            try {
              order = JSON.parse(orderJson);
            } catch (e) {}
          }

          if (order) {
            const customer = _ecomplus_passport_client__WEBPACK_IMPORTED_MODULE_2__["default"].getCustomer();
            const transaction = order.transactions && order.transactions[0];
            const payer = transaction && transaction.payer;
            const customerName = Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["fullName"])(customer);
            const date = new Date();
            let ccParam = "orderSellerID=".concat(compreConfieStoreId) + "&orderTotalSpent=".concat(order.amount.total) + "&orderDeliveryTax=".concat(order.amount.freight || 0) + "&orderID=".concat(order.number || order._id) + "&consumerEmail=".concat(customer.main_email) + "&billingEmail=".concat(customer.main_email) + "&consumerName=".concat(encodeURIComponent(customerName)) + "&orderDate=".concat(date.getFullYear(), "-").concat(date.getMonth() + 1, "-").concat(date.getDate());

            if (customer.gender === 'm') {
              ccParam += '&consumerGender=Masculino&billingGender=Masculino';
            } else if (customer.gender === 'f') {
              ccParam += '&consumerGender=Feminino&billingGender=Feminino';
            }

            if (customer.registry_type === 'p' && customer.doc_number) {
              ccParam += "&consumerCPF=".concat(customer.doc_number) + "&billingCPF=".concat(payer && payer.doc_number || customer.doc_number);
            }

            if (customer.birth_date) {
              const {
                day,
                month,
                year
              } = customer.birth_date;
              ccParam += "&consumerBirthDate=".concat(day.toString().padStart(2, '0')) + "/".concat(month.toString().padStart(2, '0'), "/").concat(year);
            }

            if (navigator && navigator.userAgent.includes('Mobile')) {
              ccParam += '&orderPlatform=1';
            } else {
              ccParam += '&orderPlatform=0';
            }

            const {
              items
            } = order;

            if (items && items.length) {
              let skus = items[0].sku;
              let values = Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["price"])(items[0]);
              let quantities = items[0].quantity;
              let names = encodeURIComponent(items[0].name);
              let productMktSaleID = '0';

              for (let i = 1; i < items.length; i++) {
                skus += "|".concat(items[i].sku);
                values += "|".concat(Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["price"])(items[i]));
                quantities += "|".concat(items[i].quantity);
                names += "|".concat(encodeURIComponent(items[i].name));
                productMktSaleID += '|0';
              }

              ccParam += "&productSKU=".concat(skus, "&productValue=").concat(values, "&productQuantity=").concat(quantities) + "&ProductName=".concat(names, "&ProductMktSaleID=").concat(productMktSaleID);
            }

            if (order.shipping_lines && order.shipping_lines[0]) {
              const shippingLine = order.shipping_lines[0];

              if (shippingLine.app && shippingLine.app.label) {
                ccParam += '&orderDeliveryType=';

                switch (shippingLine.app.label.toLowerCase()) {
                  case 'pac':
                    ccParam += '0';
                    break;

                  case 'sedex':
                    ccParam += '1';
                    break;

                  case 'retirar na loja':
                    ccParam += '3';
                    break;

                  default:
                    ccParam += '4';
                }
              }

              if (shippingLine.delivery_time && shippingLine.delivery_time.days) {
                ccParam += "&orderDeliveryTime=".concat(shippingLine.delivery_time.days) + "&productDeliveryTime=".concat(shippingLine.delivery_time.days);
              }

              ccParam += "&consumerZipcode=".concat(shippingLine.to.zip) + "&billingZipcode=".concat(shippingLine.to.zip);
            }

            if (transaction) {
              if (transaction.app && transaction.app.intermediator && transaction.app.intermediator.code) {
                ccParam += "&orderPartnerPayment=";

                switch (transaction.app.intermediator.code.toLowerCase()) {
                  case 'mercadopago':
                    ccParam += '1';
                    break;

                  case 'paypal':
                    ccParam += '2';
                    break;

                  case 'pagseguro':
                    ccParam += '4';
                    break;

                  case 'pagarme':
                    ccParam += '7';
                    break;

                  case 'wirecard':
                    ccParam += '8';
                    break;

                  case 'vindi':
                    ccParam += '12';
                    break;

                  default:
                    ccParam += '17';
                }
              }

              ccParam += "&billingName=".concat(encodeURIComponent(payer && payer.fullname || customerName));
              ccParam += "&orderParcels=".concat(transaction.installments && transaction.installments.number || 1);
              ccParam += '&orderPaymentType=';

              switch (transaction.payment_method.code) {
                case 'credit_card':
                  ccParam += '1';
                  break;

                case 'banking_billet':
                  ccParam += '2';
                  break;

                case 'debit_card':
                case 'online_debit':
                  ccParam += '9';
                  break;

                case 'account_deposit':
                  ccParam += '6';
                  break;

                case 'loyalty_points':
                  ccParam += '8';
                  break;

                default:
                  ccParam += '3';
              }

              if (transaction.credit_card && transaction.credit_card.company) {
                ccParam += '&orderCardFlag=';

                switch (transaction.credit_card.company.toLowerCase()) {
                  case 'visa':
                    ccParam += 3;
                    break;

                  case 'mastercard':
                    ccParam += 2;
                    break;

                  case 'american express':
                  case 'amex':
                    ccParam += 5;
                    break;

                  case 'elo':
                    ccParam += 8;
                    break;

                  case 'aura':
                    ccParam += 7;
                    break;

                  case 'hipercard':
                    ccParam += 6;
                    break;

                  case 'diners club':
                    ccParam += 1;
                    break;

                  default:
                    ccParam += 9;
                }
              }
            }

            const appendBanner = () => {
              const $confirmation = document.getElementById('confirmation');

              if ($confirmation) {
                $confirmation.insertAdjacentHTML('beforeend', "<a id=\"bannerEconfy\"></a> <param id=\"TagEConfy\" value=\"".concat(ccParam, "\">"));
                const $script = document.createElement('script');
                $script.id = 'getData';
                $script.type = 'text/javascript';
                $script.src = 'https://banner.compreconfie.com.br/scripts/tagBanner.min.js' + "?".concat(compreConfieStoreId, "&lightbox=true");
                document.body.appendChild($script);
                clearInterval(tryAppendInterval);
              }
            };

            const tryAppendInterval = setInterval(appendBanner, 200);
          }
        }
      };

      if (router.currentRoute) {
        addConfirmationBanner(router.currentRoute);
      }

      router.afterEach(addConfirmationBanner);
    }
  } else {
    console.error(new Error('Can\'t show lightbox without `compreConfieStoreId` option'));
  }
});

/***/ })

}]);
//# sourceMappingURL=chunk.ff05745cf248f143557f.js.map