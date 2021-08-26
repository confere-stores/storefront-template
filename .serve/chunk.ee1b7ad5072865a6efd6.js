(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/@ecomplus/widget-ebit/src/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@ecomplus/widget-ebit/src/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var _ecomplus_passport_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ecomplus/passport-client */ "./node_modules/@ecomplus/passport-client/src/index.js");


/* harmony default export */ __webpack_exports__["default"] = ((options = {}) => {
  const {
    ebitStoreId
  } = options;

  if (ebitStoreId) {
    const router = window.storefrontApp && window.storefrontApp.router;

    if (router) {
      let countConfirmation = 0;

      const addConfirmationBanner = ({
        name,
        params
      }) => {
        if (name === 'confirmation' && countConfirmation === 0) {
          countConfirmation++;
          _ecomplus_passport_client__WEBPACK_IMPORTED_MODULE_1__["default"].fetchOrder(params.id).then(order => {
            const customer = _ecomplus_passport_client__WEBPACK_IMPORTED_MODULE_1__["default"].getCustomer();
            let ebitParam = `storeId=${ebitStoreId}&mktSaleId=0&platform=ecomplus` + `&totalSpent=${order.amount.total}` + `&deliveryTax=${order.amount.freight || 0}` + `&transactionId=${order.number || order._id}` + `&email=${customer.main_email}`;

            if (customer.gender) {
              ebitParam += `&gender=${customer.gender.toUpperCase()}`;
            }

            if (customer.birth_date) {
              const {
                day,
                month,
                year
              } = customer.birth_date;
              ebitParam += `&birthday=${day.toString().padStart(2, '0')}` + `-${month.toString().padStart(2, '0')}-${year}`;
            }

            const {
              items
            } = order;

            if (items && items.length) {
              let skus = items[0].sku;
              let values = Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__["price"])(items[0]);
              let quantities = items[0].quantity;
              let names = encodeURIComponent(items[0].name);

              for (let i = 1; i < items.length; i++) {
                skus += `|${items[i].sku}`;
                values += `|${Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__["price"])(items[i])}`;
                quantities += `|${items[i].quantity}`;
                names += `|${encodeURIComponent(items[i].name)}`;
              }

              ebitParam += `&sku=${skus}&value=${values}&quantity=${quantities}&productName=${names}`;
            }

            if (order.shipping_lines && order.shipping_lines[0]) {
              const shippingLine = order.shipping_lines[0];
              ebitParam += `&deliveryTime=${shippingLine.delivery_time.days || 0}` + `&zipCode=${shippingLine.to.zip}`;
            }

            if (order.transactions && order.transactions[0]) {
              const transaction = order.transactions[0];
              ebitParam += `&parcels=${transaction.installments && transaction.installments.number || 1}`;
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
                $confirmation.insertAdjacentHTML('beforeend', `<div> <param id="ebitParam" value="${ebitParam}"> <a id="bannerEbit"></a> </div>`);
                const $script = document.createElement('script');
                $script.id = 'getSelo';
                $script.type = 'text/javascript';
                $script.src = 'https://imgs.ebit.com.br/ebitBR/selo-ebit/js/getSelo.js' + `?${ebitStoreId}&lightbox=true`;
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
//# sourceMappingURL=chunk.ee1b7ad5072865a6efd6.js.map