(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~app-account~app-checkout"],{

/***/ "./node_modules/@brazilian-utils/brazilian-utils/dist/brazilian-utils.esm.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@brazilian-utils/brazilian-utils/dist/brazilian-utils.esm.js ***!
  \***********************************************************************************/
/*! exports provided: capitalize, formatBoleto, formatCEP, formatCNPJ, formatCPF, formatCurrency, formatPJ, generateCNPJ, generateCPF, generateChecksum, generateRandomNumber, getCities, getStates, isLastChar, isValidBoleto, isValidCEP, isValidCNPJ, isValidCPF, isValidEmail, isValidIE, isValidLandlinePhone, isValidLicensePlate, isValidMobilePhone, isValidPIS, isValidPhone, onlyNumbers, parseCurrency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatBoleto", function() { return format$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCEP", function() { return format$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCNPJ", function() { return format$5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCPF", function() { return format$4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCurrency", function() { return format$3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPJ", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateCNPJ", function() { return generate$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateCPF", function() { return generate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateChecksum", function() { return generateChecksum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomNumber", function() { return generateRandomNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCities", function() { return getCities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStates", function() { return getStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLastChar", function() { return isLastChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidBoleto", function() { return isValid$6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidCEP", function() { return isValid$5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidCNPJ", function() { return isValid$8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidCPF", function() { return isValid$7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidEmail", function() { return isValid$3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidIE", function() { return isValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidLandlinePhone", function() { return isValidLandlinePhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidLicensePlate", function() { return isValid$4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidMobilePhone", function() { return isValidMobilePhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidPIS", function() { return isValid$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidPhone", function() { return isValid$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyNumbers", function() { return onlyNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCurrency", function() { return parse$1; });
function isLastChar(index, input) {
  return index === input.length - 1;
}

function onlyNumbers(input) {
  return String(input).replace(/[^\d]/g, '');
}

function generateChecksum(base, weight) {
  var digits = onlyNumbers(base);
  var weights = typeof weight === 'number' ? Array(digits.length).fill(0).map(function (_, i) {
    return weight - i;
  }) : weight;
  return digits.split('').reduce(function (acc, digit, i) {
    return acc + parseInt(digit, 10) * weights[i];
  }, 0);
}

function generateRandomNumber(length) {
  return Array(length).fill(1).reduce(function (acc, number) {
    return "" + acc + Math.random().toString().substr(2, number);
  }, '');
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var STATES_DATA = {
  AC: {
    code: '2',
    areaCodes: [68],
    ieLength: 13,
    name: 'Acre'
  },
  AL: {
    code: '4',
    areaCodes: [82],
    ieLength: 9,
    name: 'Alagoas'
  },
  AP: {
    code: '2',
    areaCodes: [96],
    ieLength: 9,
    name: 'Amap??'
  },
  AM: {
    code: '2',
    areaCodes: [92, 97],
    ieLength: 9,
    name: 'Amazonas'
  },
  BA: {
    code: '5',
    areaCodes: [71, 73, 74, 75, 77],
    ieLength: [8, 9],
    name: 'Bahia'
  },
  CE: {
    code: '3',
    areaCodes: [85, 88],
    ieLength: 9,
    name: 'Cear??'
  },
  DF: {
    code: '1',
    areaCodes: [61],
    ieLength: 13,
    name: 'Distrito Federal'
  },
  ES: {
    code: '7',
    areaCodes: [27, 28],
    ieLength: 9,
    name: 'Esp??rito Santo'
  },
  GO: {
    code: '1',
    areaCodes: [62, 64],
    ieLength: 9,
    name: 'Goi??s'
  },
  MA: {
    code: '3',
    areaCodes: [98, 99],
    ieLength: 9,
    name: 'Maranh??o'
  },
  MG: {
    code: '6',
    areaCodes: [31, 32, 33, 34, 35, 37, 38],
    ieLength: 13,
    name: 'Minas Gerais'
  },
  MT: {
    code: '1',
    areaCodes: [65, 66],
    ieLength: 11,
    name: 'Mato Grosso'
  },
  MS: {
    code: '1',
    areaCodes: [67],
    ieLength: 9,
    name: 'Mato Grosso do Sul'
  },
  PA: {
    code: '2',
    areaCodes: [91, 93, 94],
    ieLength: 9,
    name: 'Par??'
  },
  PB: {
    code: '4',
    areaCodes: [83],
    ieLength: 9,
    name: 'Para??ba'
  },
  PE: {
    code: '4',
    areaCodes: [81, 87],
    ieLength: 9,
    name: 'Pernambuco'
  },
  PI: {
    code: '3',
    areaCodes: [86, 89],
    ieLength: 9,
    name: 'Piau??'
  },
  PR: {
    code: '9',
    areaCodes: [41, 42, 43, 44, 45, 46],
    ieLength: 10,
    name: 'Paran??'
  },
  RJ: {
    code: '7',
    areaCodes: [21, 22, 24],
    ieLength: 8,
    name: 'Rio de Janeiro'
  },
  RN: {
    code: '4',
    areaCodes: [84],
    ieLength: [9, 10],
    name: 'Rio Grande do Norte'
  },
  RO: {
    code: '2',
    areaCodes: [69],
    ieLength: 14,
    name: 'Rond??nia'
  },
  RS: {
    code: '0',
    areaCodes: [51, 53, 54, 55],
    ieLength: 10,
    name: 'Rio Grande do Sul'
  },
  RR: {
    code: '2',
    areaCodes: [95],
    ieLength: 9,
    name: 'Roraima'
  },
  SC: {
    code: '9',
    areaCodes: [47, 48, 49],
    ieLength: 9,
    name: 'Santa Catarina'
  },
  SE: {
    code: '5',
    areaCodes: [79],
    ieLength: 9,
    name: 'Sergipe'
  },
  SP: {
    code: '8',
    areaCodes: [11, 12, 13, 14, 15, 16, 17, 18, 19],
    ieLength: 12,
    name: 'S??o Paulo'
  },
  TO: {
    code: '1',
    areaCodes: [63],
    ieLength: [9, 11],
    name: 'Tocantins'
  }
};
var STATES = /*#__PURE__*/Object.keys(STATES_DATA);

var Validator = /*#__PURE__*/function () {
  function Validator() {}

  var _proto = Validator.prototype;

  _proto.isValid = function isValid(ie) {
    return this.checkLength(ie) && this.itStartsWith(ie) && this.calcIe(ie);
  };

  return Validator;
}();

var AC = /*#__PURE__*/function (_Validator) {
  _inheritsLoose(AC, _Validator);

  function AC() {
    return _Validator.apply(this, arguments) || this;
  }

  var _proto = AC.prototype;

  _proto.checkLength = function checkLength(ie) {
    return ie.length === STATES_DATA.AC.ieLength;
  };

  _proto.itStartsWith = function itStartsWith(ie) {
    return ie.substr(0, 2) === '01';
  };

  _proto.calcIe = function calcIe(ie) {
    return this.calcDigits(ie);
  };

  _proto.calcDigits = function calcDigits(inscricaoEstadual) {
    var length = inscricaoEstadual.length;
    var body = inscricaoEstadual.substr(0, length - 2);
    var fDig = this.calcDigit(body);
    var sDig = this.calcDigit(body + fDig.toString());
    var pos2dig = inscricaoEstadual.length - 1;
    var pos1dig = inscricaoEstadual.length - 2;
    return parseInt(inscricaoEstadual[pos1dig], 10) === fDig && parseInt(inscricaoEstadual[pos2dig], 10) === sDig;
  };

  _proto.calcDigit = function calcDigit(body) {
    var weight = body.length - 7;
    var sum = 0;
    body.split('').forEach(function (digit) {
      sum += parseInt(digit, 10) * weight;
      weight--;

      if (weight === 1) {
        weight = 9;
      }
    });
    var mod = 11;
    var rest = sum % mod;
    var dig = mod - rest;

    if (dig >= 10) {
      dig = 0;
    }

    return dig;
  };

  return AC;
}(Validator);

var AL = /*#__PURE__*/function (_Validator) {
  _inheritsLoose(AL, _Validator);

  function AL() {
    return _Validator.apply(this, arguments) || this;
  }

  var _proto = AL.prototype;

  _proto.checkLength = function checkLength(ie) {
    return ie.length === STATES_DATA.AL.ieLength;
  };

  _proto.itStartsWith = function itStartsWith(ie) {
    return ie.substr(0, 2) === '24';
  };

  _proto.calcIe = function calcIe(ie) {
    return this.digitCalc(ie);
  };

  _proto.digitCalc = function digitCalc(ie) {
    var weight = 9;
    var position = 8;
    var sum = 0;

    for (var i = 0; i < position; i++) {
      sum += parseInt(ie.charAt(i), 10) * weight;
      weight--;
    }

    var product = sum * 10;
    var digit = product - Math.floor(product / 11) * 11;

    if (digit >= 10) {
      digit = 0;
    }

    return digit === parseInt(ie.charAt(position), 10);
  };

  return AL;
}(Validator);

var AP = /*#__PURE__*/function (_Validator) {
  _inheritsLoose(AP, _Validator);

  function AP() {
    return _Validator.apply(this, arguments) || this;
  }

  var _proto = AP.prototype;

  _proto.checkLength = function checkLength(ie) {
    return ie.length === STATES_DATA.AP.ieLength;
  };

  _proto.itStartsWith = function itStartsWith(ie) {
    return ie.substr(0, 2) === '03';
  };

  _proto.calcIe = function calcIe(ie) {
    return this.calcDigit(ie);
  };

  _proto.calcDigit = function calcDigit(ie) {
    var length = ie.length;
    var position = length - 1;
    var weight = length;
    var body = ie.substr(0, position);
    var bodyInt = parseInt(body, 10);
    var p = 0;
    var d = 0;

    if (3000001 <= bodyInt && bodyInt <= 3017000) {
      p = 5;
      d = 0;
    } else if (bodyInt >= 3017001 && bodyInt <= 3019022) {
      p = 9;
      d = 1;
    }

    var sum = p;
    body.split('').forEach(function (digit) {
      sum += parseInt(digit, 10) * weight;
      weight--;
    });
    var dig = 11 - sum % 11;

    if (dig === 10) {
      dig = 0;
    }

    if (dig === 11) {
      dig = d;
    }

    return dig === parseInt(ie.charAt(position), 10);
  };

  return AP;
}(Validator);

var AM = /*#__PURE__*/function (_Validator) {
  _inheritsLoose(AM, _Validator);

  function AM() {
    return _Validator.apply(this, arguments) || this;
  }

  var _proto = AM.prototype;

  _proto.checkLength = function checkLength(ie) {
    return ie.length === STATES_DATA.AM.ieLength;
  };

  _proto.itStartsWith = function itStartsWith(ie) {
    return Boolean(ie);
  };

  _proto.calcIe = function calcIe(ie) {
    return this.calcDigit(ie);
  };

  _proto.calcDigit = function calcDigit(ie) {
    var length = ie.length;
    var position = length - 1;
    var weight = length;
    var body = ie.substr(0, position);
    var sum = 0;
    var dig = 0;
    body.split('').forEach(function (digit) {
      sum += parseInt(digit, 10) * weight;
      weight--;
    });

    if (sum < 11) {
      dig = 11 - sum;
    } else {
      var rest = sum % 11;
      dig = 11 - rest;

      if (dig >= 10) {
        dig = 0;
      }
    }

    return dig === parseInt(ie.charAt(position), 10);
  };

  return AM;
}(Validator);

var BA = /*#__PURE__*/function (_Validator) {
  _inheritsLoose(BA, _Validator);

  function BA() {
    return _Validator.apply(this, arguments) || this;
  }

  var _proto = BA.prototype;

  _proto.checkLength = function checkLength(ie) {
    return STATES_DATA.BA.ieLength.includes(ie.length);
  };

  _proto.itStartsWith = function itStartsWith(ie) {
    return Boolean(ie);
  };

  _proto.calcIe = function calcIe(ie) {
    return this.calcDigits(ie);
  };

  _proto.calcDigits = function calcDigits(ie) {
    var length = ie.length;
    var body = ie.substr(0, length - 2);
    var mod = this.getModule(ie);
    var secondDig = this.calcDigit(body, mod);
    var firstDig = this.calcDigit(body + secondDig, mod);
    var posSecondDig = length - 1;
    var posFirstDig = length - 2;
    var ieAtFirstPos = parseInt(ie.charAt(posFirstDig), 10);
    var ieAtSecondPos = parseInt(ie.charAt(posSecondDig), 10);
    return ieAtFirstPos === firstDig && ieAtSecondPos === secondDig;
  };

  _proto.getModule = function getModule(ie) {
    var pos = 0;

    if (ie.length === 9) {
      pos = 1;
    }

    var charAt = parseInt(ie.substr(pos, 1), 10);
    var arr = [0, 1, 2, 3, 4, 5, 8];

    if (arr.indexOf(charAt) >= 0) {
      return 10;
    }

    return 11;
  };

  _proto.calcDigit = function calcDigit(body, mod) {
    var weight = body.length + 1;
    var sum = 0;
    body.split('').forEach(function (digit) {
      sum += parseInt(digit, 10) * weight;
      weight--;
    });
    var rest = sum % mod;
    var dig = mod - rest;

    if (dig >= 10) {
      dig = 0;
    }

    return dig;
  };

  return BA;
}(Validator);

var CE = /*#__PURE__*/function (_Validator) {
  _inheritsLoose(CE, _Validator);

  function CE() {
    return _Validator.apply(this, arguments) || this;
  }

  var _proto = CE.prototype;

  _proto.checkLength = function checkLength(ie) {
    return ie.length === STATES_DATA.CE.ieLength;
  };

  _proto.itStartsWith = function itStartsWith(ie) {
    return Boolean(ie);
  };

  _proto.calcIe = function calcIe(ie) {
    return this.calcDigit(ie);
  };

  _proto.calcDigit = function calcDigit(ie) {
    var length = ie.length;
    var position = length - 1;
    var weight = length;
    var body = ie.substr(0, position);
    var sum = 0;
    body.split('').forEach(function (digit) {
      sum += parseInt(digit, 10) * weight;
      weight--;
    });
    var rest = sum % 11;
    var dig = 11 - rest;

    if (dig >= 10) {
      dig = 0;
    }

    return dig === parseInt(ie.charAt(position), 10);
  };

  return CE;
}(Validator);

var DF = /*#__PURE__*/function (_Validator) {
  _inheritsLoose(DF, _Validator);

  function DF() {
    return _Validator.apply(this, arguments) || this;
  }

  var _proto = DF.prototype;

  _proto.checkLength = function checkLength(ie) {
    return ie.length === STATES_DATA.DF.ieLength;
  };

  _proto.itStartsWith = function itStartsWith(ie) {
    return ie.substr(0, 2) === '07';
  };

  _proto.calcIe = function calcIe(ie) {
    return this.calcDigits(ie);
  };

  _proto.calcDigits = function calcDigits(ie) {
    var length = ie.length;
    var body = ie.substr(0, length - 2);
    var firstDig = this.calcDigit(body);
    var secondDig = this.calcDigit(body + firstDig);
    var posSecondDig = length - 1;
    var posFirstDig = length - 2;
    var ieAtFirstPos = parseInt(ie.charAt(posFirstDig), 10);
    var ieAtSecondPos = parseInt(ie.charAt(posSecondDig), 10);
    return ieAtFirstPos === firstDig && ieAtSecondPos === secondDig;
  };

  _proto.calcDigit = function calcDigit(body) {
    var weight = body.length - 7;
    var sum = 0;
    body.split('').forEach(function (digit) {
      sum += parseInt(digit, 10) * weight;
      weight--;

      if (weight === 1) {
        weight = 9;
      }
    });
    var mod = 11;
    var rest = sum % mod;
    var dig = mod - rest;

    if (dig >= 10) {
      dig = 0;
    }

    return dig;
  };

  return DF;
}(Validator);

var ES = /*#__PURE__*/function (_CE) {
  _inheritsLoose(ES, _CE);

  function ES() {
    return _CE.apply(this, arguments) || this;
  }

  return ES;
}(CE);

var GO = /*#__PURE__*/function (_Validator) {
  _inheritsLoose(GO, _Validator);

  function GO() {
    return _Validator.apply(this, arguments) || this;
  }

  var _proto = GO.prototype;

  _proto.checkLength = function checkLength(ie) {
    return ie.length === STATES_DATA.GO.ieLength;
  };

  _proto.itStartsWith = function itStartsWith(ie) {
    var beginWith = ['10', '11', '12'];
    var begin = ie.substr(0, 2);
    return beginWith.indexOf(begin) >= 0;
  };

  _proto.calcIe = function calcIe(ie) {
    return this.calcDigit(ie);
  };

  _proto.calcDigit = function calcDigit(ie) {
    var length = ie.length;
    var position = length - 1;
    var weight = length;
    var body = ie.substr(0, position);
    var bodyInt = parseInt(body, 10);
    var sum = 0;
    body.split('').forEach(function (digit) {
      sum += parseInt(digit, 10) * weight;
      weight--;
    });
    var rest = sum % 11;
    var dig = 11 - rest;

    if (dig >= 10) {
      if (dig === 11 && 10103105 <= bodyInt && bodyInt <= 10119997) {
        dig = 1;
      } else {
        dig = 0;
      }
    }

    return dig === parseInt(ie.charAt(position), 10);
  };

  return GO;
}(Validator);

var MA = /*#__PURE__*/function (_CE) {
  _inheritsLoose(MA, _CE);

  function MA() {
    return _CE.apply(this, arguments) || this;
  }

  var _proto = MA.prototype;

  _proto.itStartsWith = function itStartsWith(ie) {
    return ie.substr(0, 2) === '12';
  };

  return MA;
}(CE);

var MT = /*#__PURE__*/function (_Validator) {
  _inheritsLoose(MT, _Validator);

  function MT() {
    return _Validator.apply(this, arguments) || this;
  }

  var _proto = MT.prototype;

  _proto.checkLength = function checkLength(ie) {
    return ie.length === STATES_DATA.MT.ieLength;
  };

  _proto.itStartsWith = function itStartsWith(ie) {
    return Boolean(ie);
  };

  _proto.calcIe = function calcIe(ie) {
    return this.calcDigit(ie);
  };

  _proto.calcDigit = function calcDigit(ie) {
    var length = ie.length;
    var position = length - 1;
    var weight = 3;
    var body = ie.substr(0, position);
    var sum = 0;
    body.split('').forEach(function (digit) {
      sum += parseInt(digit, 10) * weight;
      weight--;

      if (weight === 1) {
        weight = 9;
      }
    });
    var rest = sum % 11;
    var dig = 11 - rest;

    if (dig >= 10) {
      dig = 0;
    }

    return dig === parseInt(ie.charAt(position), 10);
  };

  return MT;
}(Validator);

var MS = /*#__PURE__*/function (_CE) {
  _inheritsLoose(MS, _CE);

  function MS() {
    return _CE.apply(this, arguments) || this;
  }

  var _proto = MS.prototype;

  _proto.itStartsWith = function itStartsWith(ie) {
    return ie.substr(0, 2) === '28';
  };

  return MS;
}(CE);

var MG = /*#__PURE__*/function (_Validator) {
  _inheritsLoose(MG, _Validator);

  function MG() {
    return _Validator.apply(this, arguments) || this;
  }

  var _proto = MG.prototype;

  _proto.checkLength = function checkLength(ie) {
    return ie.length === STATES_DATA.MG.ieLength;
  };

  _proto.itStartsWith = function itStartsWith(ie) {
    return Boolean(ie);
  };

  _proto.calcIe = function calcIe(ie) {
    return this.calcDigit(ie);
  };

  _proto.calcDigit = function calcDigit(ie) {
    var length = ie.length;
    var posFirstDigit = length - 2;
    var posSecondDigit = length - 1;
    var body = ie.substring(0, 11);
    var firstDigit = this.calcFirstDigit(body);
    var secondDigit = this.calcSecondDigit(body + firstDigit);
    var digitAtFirstDigit = parseInt(ie.charAt(posFirstDigit), 10);
    var digitAtSecondDigit = parseInt(ie.charAt(posSecondDigit), 10);
    return firstDigit === digitAtFirstDigit && secondDigit === digitAtSecondDigit;
  };

  _proto.calcFirstDigit = function calcFirstDigit(ie) {
    var body = ie.slice(0, 3) + 0 + ie.slice(3);
    var concat = '';
    body.split('').forEach(function (item, index) {
      var weight = (index + 3) % 2 === 0 ? 2 : 1;
      concat += parseInt(item, 10) * weight;
    });
    var sum = 0;
    concat.split('').forEach(function (item) {
      sum += parseInt(item, 10);
    });
    var sumString = sum.toString();
    var length = sumString.length;
    var lastChar = sumString.substr(length - 1, 1);
    var lastCharInt = parseInt(lastChar, 10);
    return lastCharInt === 0 ? 0 : 10 - lastCharInt;
  };

  _proto.calcSecondDigit = function calcSecondDigit(body) {
    var weight = 3;
    var sum = 0;
    body.split('').forEach(function (item) {
      sum += parseInt(item, 10) * weight;
      weight--;

      if (weight === 1) {
        weight = 11;
      }
    });
    var rest = sum % 11;
    var digit = 11 - rest;

    if (digit >= 10) {
      digit = 0;
    }

    return digit;
  };

  return MG;
}(Validator);

var PA = /*#__PURE__*/function (_CE) {
  _inheritsLoose(PA, _CE);

  function PA() {
    return _CE.apply(this, arguments) || this;
  }

  var _proto = PA.prototype;

  _proto.itStartsWith = function itStartsWith(ie) {
    return ie.substr(0, 2) === '15';
  };

  return PA;
}(CE);

var PB = /*#__PURE__*/function (_CE) {
  _inheritsLoose(PB, _CE);

  function PB() {
    return _CE.apply(this, arguments) || this;
  }

  return PB;
}(CE);

var PR = /*#__PURE__*/function (_Validator) {
  _inheritsLoose(PR, _Validator);

  function PR() {
    return _Validator.apply(this, arguments) || this;
  }

  var _proto = PR.prototype;

  _proto.checkLength = function checkLength(ie) {
    return ie.length === STATES_DATA.PR.ieLength;
  };

  _proto.itStartsWith = function itStartsWith(ie) {
    return Boolean(ie);
  };

  _proto.calcIe = function calcIe(ie) {
    return this.calcDigits(ie);
  };

  _proto.calcDigits = function calcDigits(ie) {
    var length = ie.length;
    var body = ie.substr(0, length - 2);
    var firstDig = this.calcDigit(body);
    var secondDig = this.calcDigit(body + firstDig);
    var posSecondDig = length - 1;
    var posFirstDig = length - 2;
    var ieAtFirstPos = parseInt(ie.charAt(posFirstDig), 10);
    var ieAtSecondPos = parseInt(ie.charAt(posSecondDig), 10);
    return ieAtFirstPos === firstDig && ieAtSecondPos === secondDig;
  };

  _proto.calcDigit = function calcDigit(body) {
    var weight = body.length - 5;
    var sum = 0;
    body.split('').forEach(function (digit) {
      sum += parseInt(digit, 10) * weight;
      weight--;

      if (weight === 1) {
        weight = 7;
      }
    });
    var mod = 11;
    var rest = sum % mod;
    var dig = mod - rest;

    if (dig >= 10) {
      dig = 0;
    }

    return dig;
  };

  return PR;
}(Validator);

var PE = /*#__PURE__*/function (_Validator) {
  _inheritsLoose(PE, _Validator);

  function PE() {
    return _Validator.apply(this, arguments) || this;
  }

  var _proto = PE.prototype;

  _proto.checkLength = function checkLength(ie) {
    return ie.length === STATES_DATA.PE.ieLength;
  };

  _proto.itStartsWith = function itStartsWith(ie) {
    return Boolean(ie);
  };

  _proto.calcIe = function calcIe(ie) {
    return this.calcDigits(ie);
  };

  _proto.calcDigits = function calcDigits(ie) {
    var length = ie.length;
    var body = ie.substr(0, length - 2);
    var firstDig = this.calcDigit(body);
    var secondDig = this.calcDigit(body + firstDig);
    var posSecondDig = length - 1;
    var posFirstDig = length - 2;
    var ieAtFirstPos = parseInt(ie.charAt(posFirstDig), 10);
    var ieAtSecondPos = parseInt(ie.charAt(posSecondDig), 10);
    return ieAtFirstPos === firstDig && ieAtSecondPos === secondDig;
  };

  _proto.calcDigit = function calcDigit(body) {
    var weight = body.length + 1;
    var sum = 0;
    body.split('').forEach(function (digit) {
      sum += parseInt(digit, 10) * weight;
      weight--;
    });
    var mod = 11;
    var rest = sum % mod;
    var dig = mod - rest;

    if (dig >= 10) {
      dig = 0;
    }

    return dig;
  };

  return PE;
}(Validator);

var PI = /*#__PURE__*/function (_CE) {
  _inheritsLoose(PI, _CE);

  function PI() {
    return _CE.apply(this, arguments) || this;
  }

  return PI;
}(CE);

var RJ = /*#__PURE__*/function (_Validator) {
  _inheritsLoose(RJ, _Validator);

  function RJ() {
    return _Validator.apply(this, arguments) || this;
  }

  var _proto = RJ.prototype;

  _proto.checkLength = function checkLength(ie) {
    return ie.length === STATES_DATA.RJ.ieLength;
  };

  _proto.itStartsWith = function itStartsWith(ie) {
    return Boolean(ie);
  };

  _proto.calcIe = function calcIe(ie) {
    return this.calcDigit(ie);
  };

  _proto.calcDigit = function calcDigit(ie) {
    var length = ie.length;
    var position = length - 1;
    var weight = 2;
    var body = ie.substr(0, position);
    var sum = 0;
    body.split('').forEach(function (digit) {
      sum += parseInt(digit, 10) * weight;
      weight--;

      if (weight === 1) {
        weight = 7;
      }
    });
    var rest = sum % 11;
    var dig = 11 - rest;

    if (dig >= 10) {
      dig = 0;
    }

    return dig === parseInt(ie.charAt(position), 10);
  };

  return RJ;
}(Validator);

var RN = /*#__PURE__*/function (_Validator) {
  _inheritsLoose(RN, _Validator);

  function RN() {
    return _Validator.apply(this, arguments) || this;
  }

  var _proto = RN.prototype;

  _proto.checkLength = function checkLength(ie) {
    return STATES_DATA.RN.ieLength.includes(ie.length);
  };

  _proto.itStartsWith = function itStartsWith(ie) {
    return ie.substr(0, 2) === '20';
  };

  _proto.calcIe = function calcIe(ie) {
    return this.calcDigit(ie);
  };

  _proto.calcDigit = function calcDigit(ie) {
    var length = ie.length;
    var position = length - 1;
    var weight = length;
    var body = ie.substr(0, position);
    var sum = 0;
    body.split('').forEach(function (digit) {
      sum += parseInt(digit, 10) * weight;
      weight--;
    });
    var rest = sum % 11;
    var dig = 11 - rest;

    if (dig >= 10) {
      dig = 0;
    }

    return dig === parseInt(ie.charAt(position), 10);
  };

  return RN;
}(Validator);

var RS = /*#__PURE__*/function (_Validator) {
  _inheritsLoose(RS, _Validator);

  function RS() {
    return _Validator.apply(this, arguments) || this;
  }

  var _proto = RS.prototype;

  _proto.checkLength = function checkLength(ie) {
    return ie.length === STATES_DATA.RS.ieLength;
  };

  _proto.itStartsWith = function itStartsWith(ie) {
    return Boolean(ie);
  };

  _proto.calcIe = function calcIe(ie) {
    return this.calcDigit(ie);
  };

  _proto.calcDigit = function calcDigit(ie) {
    var length = ie.length;
    var position = length - 1;
    var weight = 2;
    var body = ie.substr(0, position);
    var sum = 0;
    body.split('').forEach(function (digit) {
      sum += parseInt(digit, 10) * weight;
      weight--;

      if (weight === 1) {
        weight = 9;
      }
    });
    var rest = sum % 11;
    var dig = 11 - rest;

    if (dig >= 10) {
      dig = 0;
    }

    return dig === parseInt(ie.charAt(position), 10);
  };

  return RS;
}(Validator);

var RO = /*#__PURE__*/function (_Validator) {
  _inheritsLoose(RO, _Validator);

  function RO() {
    return _Validator.apply(this, arguments) || this;
  }

  var _proto = RO.prototype;

  _proto.checkLength = function checkLength(ie) {
    return ie.length === STATES_DATA.RO.ieLength;
  };

  _proto.itStartsWith = function itStartsWith(ie) {
    return Boolean(ie);
  };

  _proto.calcIe = function calcIe(ie) {
    return this.calcDigit(ie);
  };

  _proto.calcDigit = function calcDigit(ie) {
    var length = ie.length;
    var position = length - 1;
    var weight = 6;
    var body = ie.substr(0, position);
    var sum = 0;
    body.split('').forEach(function (digit) {
      sum += parseInt(digit, 10) * weight;
      weight--;

      if (weight === 1) {
        weight = 9;
      }
    });
    var rest = sum % 11;
    var dig = 11 - rest;

    if (dig >= 10) {
      dig -= 10;
    }

    return dig === parseInt(ie.charAt(position), 10);
  };

  return RO;
}(Validator);

var RR = /*#__PURE__*/function (_Validator) {
  _inheritsLoose(RR, _Validator);

  function RR() {
    return _Validator.apply(this, arguments) || this;
  }

  var _proto = RR.prototype;

  _proto.checkLength = function checkLength(ie) {
    return ie.length === STATES_DATA.RR.ieLength;
  };

  _proto.itStartsWith = function itStartsWith(ie) {
    return ie.substr(0, 2) === '24';
  };

  _proto.calcIe = function calcIe(ie) {
    return this.calcDigit(ie);
  };

  _proto.calcDigit = function calcDigit(ie) {
    var length = ie.length;
    var position = length - 1;
    var weight = 1;
    var body = ie.substr(0, position);
    var sum = 0;
    body.split('').forEach(function (digit) {
      sum += parseInt(digit, 10) * weight;
      weight++;
    });
    var dig = sum % 9;
    return dig === parseInt(ie.charAt(position), 10);
  };

  return RR;
}(Validator);

var SC = /*#__PURE__*/function (_CE) {
  _inheritsLoose(SC, _CE);

  function SC() {
    return _CE.apply(this, arguments) || this;
  }

  return SC;
}(CE);

var SP = /*#__PURE__*/function (_Validator) {
  _inheritsLoose(SP, _Validator);

  function SP() {
    return _Validator.apply(this, arguments) || this;
  }

  var _proto = SP.prototype;

  _proto.checkLength = function checkLength(ie) {
    return ie.length === STATES_DATA.SP.ieLength;
  };

  _proto.itStartsWith = function itStartsWith(ie) {
    return Boolean(ie);
  };

  _proto.calcIe = function calcIe(ie) {
    return this.calcDigit(ie);
  };

  _proto.calcDigit = function calcDigit(ie) {
    var length = ie.length;
    var positionFirstDigit = length - 4;
    var positionSecondDigit = length - 1;
    var firstDigit = this.calcFirstDigit(ie);
    var secondDigit = this.calcSecondDigit(ie);
    var ieAtFirstPos = parseInt(ie.charAt(positionFirstDigit), 10);
    var ieAtSecondPos = parseInt(ie.charAt(positionSecondDigit), 10);
    return firstDigit === ieAtFirstPos && secondDigit === ieAtSecondPos;
  };

  _proto.calcFirstDigit = function calcFirstDigit(ie) {
    var body = ie.substr(0, 8);
    var weight = [1, 3, 4, 5, 6, 7, 8, 10];
    var sum = 0;
    body.split('').forEach(function (digit, index) {
      sum += parseInt(digit, 10) * weight[index];
    });
    var dig = sum % 11;
    var digit = dig.toString();
    return parseInt(digit.substr(digit.length - 1, 1), 10);
  };

  _proto.calcSecondDigit = function calcSecondDigit(ie) {
    var body = ie.substr(0, 11);
    var weight = 3;
    var sum = 0;
    body.split('').forEach(function (digit) {
      sum += parseInt(digit, 10) * weight;
      weight--;

      if (weight === 1) {
        weight = 10;
      }
    });
    var dig = sum % 11;
    var digit = dig.toString();
    return parseInt(digit.substr(digit.length - 1, 1), 10);
  };

  return SP;
}(Validator);

var SE = /*#__PURE__*/function (_CE) {
  _inheritsLoose(SE, _CE);

  function SE() {
    return _CE.apply(this, arguments) || this;
  }

  return SE;
}(CE);

var TO = /*#__PURE__*/function (_CE) {
  _inheritsLoose(TO, _CE);

  function TO() {
    return _CE.apply(this, arguments) || this;
  }

  var _proto = TO.prototype;

  _proto.checkLength = function checkLength(ie) {
    return STATES_DATA.TO.ieLength.includes(ie.length);
  };

  _proto.itStartsWith = function itStartsWith(ie) {
    return Boolean(ie);
  };

  _proto.calcIe = function calcIe(ie) {
    return this.checkOld(ie) || this.checkNew(ie);
  };

  _proto.checkOld = function checkOld(ie) {
    var body = ie.slice(0, 2) + ie.slice(4);
    return this.oldStartsWith(ie) && this.calcOld(body);
  };

  _proto.oldStartsWith = function oldStartsWith(ie) {
    var beginWith = ['01', '02', '03', '99'];
    var begin = ie.substr(2, 2);
    return beginWith.indexOf(begin) >= 0;
  };

  _proto.calcOld = function calcOld(ie) {
    return this.calcDigit(ie);
  };

  _proto.checkNew = function checkNew(ie) {
    return this.calcNew(ie);
  };

  _proto.calcNew = function calcNew(ie) {
    var length = ie.length;
    var position = length - 1;
    var weight = 9;
    var body = ie.substr(0, position);
    var sum = 0;
    body.split('').forEach(function (digit) {
      sum += parseInt(digit, 10) * weight;
      weight--;
    });
    var rest = sum % 11;
    var dig = 11 - rest;

    if (rest < 2) {
      dig = 0;
    }

    return dig === parseInt(ie.charAt(position), 10);
  };

  return TO;
}(CE);

var STATE = {
  AC: AC,
  AL: AL,
  AP: AP,
  AM: AM,
  BA: BA,
  CE: CE,
  DF: DF,
  ES: ES,
  GO: GO,
  MA: MA,
  MT: MT,
  MS: MS,
  MG: MG,
  PA: PA,
  PB: PB,
  PR: PR,
  PE: PE,
  PI: PI,
  RJ: RJ,
  RN: RN,
  RS: RS,
  RO: RO,
  RR: RR,
  SC: SC,
  SP: SP,
  SE: SE,
  TO: TO
};
function isValid(uf, inscricaoEstadual) {
  var digits = onlyNumbers(inscricaoEstadual);
  var state = new STATE[uf]();
  return state.isValid(digits);
}

var LENGTH = 11;
var WEIGHTS = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
var RESERVED_NUMBERS = ['00000000000', '11111111111', '22222222222', '33333333333', '44444444444', '55555555555', '66666666666', '77777777777', '88888888888', '99999999999'];

function isValidLength(pis) {
  return pis.length === LENGTH;
}

function isReservedNumber(pis) {
  return RESERVED_NUMBERS.indexOf(pis) >= 0;
}

function hasOnlyNumbers(pis) {
  return !!pis.match(/^[0-9]+$/);
}

function removeSeparators(pis) {
  return pis.replace(/[ ().,*-]/g, '');
}

function isValid$1(pis) {
  if (!pis || typeof pis !== 'string') return false;
  var numeric = removeSeparators(pis);
  if (!isValidLength(numeric) || isReservedNumber(numeric) || !hasOnlyNumbers(numeric)) return false;
  var weightedChecksum = generateChecksum(numeric.substr(0, numeric.length - 1), WEIGHTS);
  var verifyingDigit = +numeric.charAt(numeric.length - 1);
  var calculatedDigit = 11 - weightedChecksum % 11;
  return calculatedDigit === verifyingDigit || calculatedDigit === 10 && verifyingDigit === 0 || calculatedDigit === 11 && verifyingDigit === 0;
}

var VALID_AREA_CODES = /*#__PURE__*/Object.keys(STATES_DATA).reduce(function (acc, state) {
  return acc.concat(STATES_DATA[state].areaCodes);
}, []);
var PHONE_MIN_LENGTH = 10;
var PHONE_MAX_LENGTH = 11;
var MOBILE_VALID_FIRST_NUMBERS = [6, 7, 8, 9];
var LANDLINE_VALID_FIRST_NUMBERS = [2, 3, 4, 5];
function isValidDDD(phone) {
  return VALID_AREA_CODES.includes(Number(phone.substr(0, 2)));
}
function isValidMobilePhoneLength(phone) {
  return phone.length === PHONE_MAX_LENGTH;
}
function isValidLandlinePhoneLength(phone) {
  return phone.length >= PHONE_MIN_LENGTH && phone.length < PHONE_MAX_LENGTH;
}
function isValidLength$1(phone) {
  return isValidLandlinePhoneLength(phone) || isValidMobilePhoneLength(phone);
}
function isValidMobilePhoneFirstNumber(phone) {
  return MOBILE_VALID_FIRST_NUMBERS.includes(Number(phone.charAt(2)));
}
function isValidLandlinePhoneFirstNumber(phone) {
  return LANDLINE_VALID_FIRST_NUMBERS.includes(Number(phone.charAt(2)));
}
function isValidFirstNumber(phone) {
  return phone.length === PHONE_MIN_LENGTH ? isValidLandlinePhoneFirstNumber(phone) : isValidMobilePhoneFirstNumber(phone);
}

function parsePhoneDigits(phone) {
  return {
    isValidDigits: !!phone && typeof phone === 'string',
    digits: onlyNumbers(phone)
  };
}

function isValidMobilePhone(phone) {
  var _parsePhoneDigits = parsePhoneDigits(phone),
      isValidDigits = _parsePhoneDigits.isValidDigits,
      digits = _parsePhoneDigits.digits;

  if (!isValidDigits) return false;
  return isValidMobilePhoneLength(digits) && isValidMobilePhoneFirstNumber(digits) && isValidDDD(digits);
}
function isValidLandlinePhone(phone) {
  var _parsePhoneDigits2 = parsePhoneDigits(phone),
      isValidDigits = _parsePhoneDigits2.isValidDigits,
      digits = _parsePhoneDigits2.digits;

  if (!isValidDigits) return false;
  return isValidLandlinePhoneLength(digits) && isValidLandlinePhoneFirstNumber(digits) && isValidDDD(digits);
}
function isValid$2(phone) {
  var _parsePhoneDigits3 = parsePhoneDigits(phone),
      isValidDigits = _parsePhoneDigits3.isValidDigits,
      digits = _parsePhoneDigits3.digits;

  if (!isValidDigits) return false;
  return isValidLength$1(digits) && isValidFirstNumber(digits) && isValidDDD(digits);
}

var MAX_RECIPIENT_LENGTH = 64;
var MAX_DOMAIN_LENGTH = 253;
var MAX_EMAIL_LENGTH = MAX_RECIPIENT_LENGTH + 1 + MAX_DOMAIN_LENGTH;
var validEmailRegex = /^([!#$%&'*+\-/=?^_`{|}~]{0,1}([a-zA-Z0-9][!#$%&'*+\-/=?^_`{|}~.]{0,1})+)@(([a-zA-Z0-9][-.]{0,1})+)([.]{1}[a-zA-Z0-9]+)$/;

var stringIsBiggerThan = function stringIsBiggerThan(len) {
  for (var _len = arguments.length, strs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    strs[_key - 1] = arguments[_key];
  }

  return strs.reduce(function (length, s) {
    return length + s.length;
  }, 0) > len;
};

function isValid$3(email) {
  if (!email || typeof email !== 'string') return false;
  if (stringIsBiggerThan(MAX_EMAIL_LENGTH, email)) return false;
  var matchedEmail = validEmailRegex.exec(email);
  if (!matchedEmail) return false;
  var recipient = matchedEmail[1],
      domain = matchedEmail[3],
      topLevelDomain = matchedEmail[5];
  if (stringIsBiggerThan(MAX_RECIPIENT_LENGTH, recipient)) return false;
  if (stringIsBiggerThan(MAX_DOMAIN_LENGTH, domain, topLevelDomain)) return false;
  return true;
}

var validMercosulLicensePlateRegex = /^[a-z]{3}[0-9]{1}[a-z]{1}[0-9]{2}$/i;
var validBrazilianLicensePlateRegex = /^[a-z]{3}-?[0-9]{4}$/i;
function isValid$4(licensePlate) {
  if (!licensePlate || typeof licensePlate !== 'string') return false;
  return validMercosulLicensePlateRegex.test(licensePlate) || validBrazilianLicensePlateRegex.test(licensePlate);
}

var LENGTH$1 = 20;
var DOT_INDEXES = [8, 12, 15];
var HYPHEN_INDEXES = [6];
function format(processoJuridico) {
  var digits = onlyNumbers(processoJuridico);
  return digits.slice(0, LENGTH$1).split('').reduce(function (acc, digit, index) {
    var result = "" + acc + digit;

    if (!isLastChar(index, processoJuridico)) {
      if (DOT_INDEXES.includes(index)) return result + ".";
      if (HYPHEN_INDEXES.includes(index)) return result + "-";
    }

    return result;
  }, '');
}

var LENGTH$2 = 8;
var HYPHEN_INDEXES$1 = [4];

function isValidLength$2(cep) {
  return cep.length === LENGTH$2;
}

function format$1(cep) {
  var digits = onlyNumbers(cep);
  return digits.slice(0, LENGTH$2).split('').reduce(function (acc, digit, i) {
    var result = "" + acc + digit;

    if (!isLastChar(i, digits)) {
      if (HYPHEN_INDEXES$1.indexOf(i) >= 0) return result + "-";
    }

    return result;
  }, '');
}
function isValid$5(cep) {
  if (!cep || typeof cep !== 'string') return false;
  var digits = onlyNumbers(cep);
  return isValidLength$2(digits);
}

var PARTIALS = [{
  end: 9,
  start: 0,
  index: 9
}, {
  end: 20,
  start: 10,
  index: 20
}, {
  end: 31,
  start: 21,
  index: 31
}];
var DOT_INDEXES$1 = [4, 14, 25];
var SPACE_INDEXES = [9, 20, 31, 32];
var LENGTH$3 = 47;
var CHECK_DIGIT_POSITION = 4;
var MOD_11_WEIGHTS = {
  end: 9,
  initial: 2
};
var MOD_10_WEIGHTS = [2, 1];
var DIGITABLE_LINE_TO_BOLETO_CONVERT_POSITIONS = [{
  end: 4,
  start: 0
}, {
  end: 47,
  start: 32
}, {
  end: 9,
  start: 4
}, {
  end: 20,
  start: 10
}, {
  end: 31,
  start: 21
}];

function isValidLength$3(digitableLine) {
  return digitableLine.length === LENGTH$3;
}

function mod10(partial) {
  var sum = partial.split('').reverse().reduce(function (acc, digit, index) {
    var result = parseInt(digit, 10) * MOD_10_WEIGHTS[index % 2];
    return acc + (result > 9 ? 1 + result % 10 : result);
  }, 0);
  var mod = sum % 10;
  return mod > 0 ? 10 - mod : 0;
}

function mod11(value) {
  var initial = MOD_11_WEIGHTS.initial,
      end = MOD_11_WEIGHTS.end;
  var weight = initial;
  var sum = value.split('').reverse().reduce(function (acc, digit) {
    var result = parseInt(digit, 10) * weight;
    weight = weight < end ? weight + 1 : initial;
    return acc + result;
  }, 0);
  var mod = sum % 11;
  return mod === 0 || mod === 1 ? 1 : 11 - mod;
}

function isValidPartials(digitableLine) {
  return PARTIALS.every(function (_ref) {
    var start = _ref.start,
        end = _ref.end,
        index = _ref.index;
    var mod = mod10(digitableLine.substring(start, end));
    return +digitableLine[index] === mod;
  });
}

function parse(digitableLine) {
  return DIGITABLE_LINE_TO_BOLETO_CONVERT_POSITIONS.reduce(function (acc, pos) {
    return acc + digitableLine.substring(pos.start, pos.end);
  }, '');
}

function isValidCheckDigit(parsedDigitableLine) {
  var mod = mod11(parsedDigitableLine.slice(0, CHECK_DIGIT_POSITION) + parsedDigitableLine.slice(CHECK_DIGIT_POSITION + 1));
  return +parsedDigitableLine[CHECK_DIGIT_POSITION] === mod;
}

function isValid$6(digitableLine) {
  if (!digitableLine || typeof digitableLine !== 'string') return false;
  var digits = onlyNumbers(digitableLine);
  if (!isValidLength$3(digits)) return false;
  if (!isValidPartials(digits)) return false;
  var parsedDigits = parse(digits);
  return isValidCheckDigit(parsedDigits);
}
function format$2(boleto) {
  var digits = onlyNumbers(boleto);
  return digits.slice(0, LENGTH$3).split('').reduce(function (acc, digit, index) {
    var result = "" + acc + digit;

    if (!isLastChar(index, digits)) {
      if (DOT_INDEXES$1.indexOf(index) >= 0) return result + ".";
      if (SPACE_INDEXES.indexOf(index) >= 0) return result + " ";
    }

    return result;
  }, '');
}

function format$3(value, options) {
  if (options === void 0) {
    options = {
      precision: 2
    };
  }

  return value.toFixed(options.precision).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}
function parse$1(value) {
  return parseInt(value.replace(/\D/g, '') || '0', 10) / 100;
}

var LENGTH$4 = 11;
var DOT_INDEXES$2 = [2, 5];
var HYPHEN_INDEXES$2 = [8];
var RESERVED_NUMBERS$1 = ['00000000000', '11111111111', '22222222222', '33333333333', '44444444444', '55555555555', '66666666666', '77777777777', '88888888888', '99999999999'];
var CHECK_DIGITS_INDEXES = [9, 10];
function format$4(cpf, options) {
  if (options === void 0) {
    options = {};
  }

  var digits = onlyNumbers(cpf);

  if (options.pad) {
    digits = digits.padStart(LENGTH$4, '0');
  }

  return digits.slice(0, LENGTH$4).split('').reduce(function (acc, digit, i) {
    var result = "" + acc + digit;

    if (!isLastChar(i, digits)) {
      if (DOT_INDEXES$2.indexOf(i) >= 0) return result + ".";
      if (HYPHEN_INDEXES$2.indexOf(i) >= 0) return result + "-";
    }

    return result;
  }, '');
}
function generate(state) {
  var stateCode = state && STATES.includes(state) ? STATES_DATA[state].code : generateRandomNumber(1);
  var baseCPF = generateRandomNumber(LENGTH$4 - 3) + stateCode;
  var firstCheckDigitMod = generateChecksum(baseCPF, 10) % 11;
  var firstCheckDigit = (firstCheckDigitMod < 2 ? 0 : 11 - firstCheckDigitMod).toString();
  var secondCheckDigitMod = generateChecksum(baseCPF + firstCheckDigit, 11) % 11;
  var secondCheckDigit = (secondCheckDigitMod < 2 ? 0 : 11 - secondCheckDigitMod).toString();
  return "" + baseCPF + firstCheckDigit.toString() + secondCheckDigit.toString();
}
function isValidFormat(cpf) {
  return /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/.test(cpf);
}
function isReservedNumber$1(cpf) {
  return RESERVED_NUMBERS$1.indexOf(cpf) >= 0;
} // TODO: move to checksum helper

function isValidChecksum(cpf) {
  return CHECK_DIGITS_INDEXES.every(function (i) {
    var mod = generateChecksum(cpf.slice(0, i).split('').reduce(function (acc, digit) {
      return acc + digit;
    }, ''), i + 1) % 11;
    return cpf[i] === String(mod < 2 ? 0 : 11 - mod);
  });
}
function isValid$7(cpf) {
  if (!cpf || typeof cpf !== 'string') return false;
  var digits = onlyNumbers(cpf);
  return isValidFormat(cpf) && !isReservedNumber$1(digits) && isValidChecksum(digits);
}

var LENGTH$5 = 14;
var DOT_INDEXES$3 = [1, 4];
var SLASH_INDEXES = [7];
var HYPHEN_INDEXES$3 = [11];
var RESERVED_NUMBERS$2 = ['00000000000000', '11111111111111', '22222222222222', '33333333333333', '44444444444444', '55555555555555', '66666666666666', '77777777777777', '88888888888888', '99999999999999'];
var CHECK_DIGITS_INDEXES$1 = [12, 13];
var FIRST_CHECK_DIGIT_WEIGHTS = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
var SECOND_CHECK_DIGIT_WEIGHTS = /*#__PURE__*/[6].concat(FIRST_CHECK_DIGIT_WEIGHTS);
function format$5(cnpj, options) {
  if (options === void 0) {
    options = {};
  }

  var digits = onlyNumbers(cnpj);

  if (options.pad) {
    digits = digits.padStart(LENGTH$5, '0');
  }

  return digits.slice(0, LENGTH$5).split('').reduce(function (acc, digit, index) {
    var result = "" + acc + digit;

    if (!isLastChar(index, digits)) {
      if (DOT_INDEXES$3.includes(index)) return result + ".";
      if (SLASH_INDEXES.includes(index)) return result + "/";
      if (HYPHEN_INDEXES$3.includes(index)) return result + "-";
    }

    return result;
  }, '');
}
function generate$1() {
  var baseCNPJ = generateRandomNumber(LENGTH$5 - 2);
  var firstCheckDigitMod = generateChecksum(baseCNPJ, FIRST_CHECK_DIGIT_WEIGHTS) % 11;
  var firstCheckDigit = (firstCheckDigitMod < 2 ? 0 : 11 - firstCheckDigitMod).toString();
  var secondCheckDigitMod = generateChecksum(baseCNPJ + firstCheckDigit, SECOND_CHECK_DIGIT_WEIGHTS) % 11;
  var secondCheckDigit = (secondCheckDigitMod < 2 ? 0 : 11 - secondCheckDigitMod).toString();
  return "" + baseCNPJ + firstCheckDigit + secondCheckDigit;
}
function isValidFormat$1(cnpj) {
  return /^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/.test(cnpj);
}
function isReservedNumber$2(cpf) {
  return RESERVED_NUMBERS$2.indexOf(cpf) >= 0;
} // TODO: move to checksum helper

function isValidChecksum$1(cnpj) {
  var weights = [].concat(FIRST_CHECK_DIGIT_WEIGHTS);
  return CHECK_DIGITS_INDEXES$1.every(function (i) {
    if (i === CHECK_DIGITS_INDEXES$1[CHECK_DIGITS_INDEXES$1.length - 1]) {
      weights.unshift(6);
    }

    var mod = generateChecksum(cnpj.slice(0, i).split('').reduce(function (acc, digit) {
      return acc + digit;
    }, ''), weights) % 11;
    return cnpj[i] === String(mod < 2 ? 0 : 11 - mod);
  });
}
function isValid$8(cnpj) {
  if (!cnpj || typeof cnpj !== 'string') return false;
  var numbers = onlyNumbers(cnpj);
  return isValidFormat$1(cnpj) && !isReservedNumber$2(numbers) && isValidChecksum$1(numbers);
}

var ACRONYMS = ['cia', 'cnpj', 'cpf', 'ltda', 'me', 'rg'];
var PREPOSITIONS = ['a', 'com', 'da', 'das', 'de', 'do', 'dos', 'e', 'em', 'na', 'nas', 'no', 'nos', 'o', 'por', 'sem'];
function capitalize(value, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$lowerCaseWords = _ref.lowerCaseWords,
      lowerCaseWords = _ref$lowerCaseWords === void 0 ? PREPOSITIONS : _ref$lowerCaseWords,
      _ref$upperCaseWords = _ref.upperCaseWords,
      upperCaseWords = _ref$upperCaseWords === void 0 ? ACRONYMS : _ref$upperCaseWords;

  return value.split(' ').filter(function (word) {
    return !!word;
  }).map(function (word, index) {
    var lowerCaseWord = word.toLocaleLowerCase();
    if (index > 0 && lowerCaseWords.indexOf(lowerCaseWord) !== -1) return lowerCaseWord;
    var upperCaseWord = word.toLocaleUpperCase();
    if (upperCaseWords.indexOf(upperCaseWord) !== -1) return upperCaseWord;
    return upperCaseWord.charAt(0) + lowerCaseWord.substr(1);
  }).join(' ');
}

var stateNameComparer = function stateNameComparer(_ref, _ref2) {
  var nameA = _ref.name;
  var nameB = _ref2.name;
  return nameA.localeCompare(nameB);
};

var sortByStateName = function sortByStateName(states) {
  return states.sort(stateNameComparer);
};

function getStates() {
  var states = STATES.map(function (code) {
    return {
      code: code,
      name: STATES_DATA[code].name
    };
  });
  return sortByStateName(states);
}

var CITIES_DATA = {
  GO: ['Abadia de Goi??s', 'Abadi??nia', 'Acre??na', 'Adel??ndia', 'Alex??nia', 'Alo??ndia', 'Alto Horizonte', 'Alto Para??so de Goi??s', 'Alvorada do Norte', 'Amaralina', 'Americano do Brasil', 'Amorin??polis', 'Anhanguera', 'Anicuns', 'An??polis', 'Aparecida de Goi??nia', 'Aparecida do Rio Doce', 'Apor??', 'Aragar??as', 'Aragoi??nia', 'Araguapaz', 'Ara??u', 'Aren??polis', 'Aruan??', 'Auril??ndia', 'Avelin??polis', 'Baliza', 'Barro Alto', 'Bela Vista de Goi??s', 'Bom Jardim de Goi??s', 'Bom Jesus de Goi??s', 'Bonfin??polis', 'Bon??polis', 'Brazabrantes', 'Brit??nia', 'Buriti Alegre', 'Buriti de Goi??s', 'Buritin??polis', 'Cabeceiras', 'Cachoeira Alta', 'Cachoeira Dourada', 'Cachoeira de Goi??s', 'Caiap??nia', 'Caldas Novas', 'Caldazinha', 'Campestre de Goi??s', 'Campina??u', 'Campinorte', 'Campo Alegre de Goi??s', 'Campo Limpo de Goi??s', 'Campos Belos', 'Campos Verdes', 'Carmo do Rio Verde', 'Castel??ndia', 'Catal??o', 'Catura??', 'Cavalcante', 'Ca??u', 'Ceres', 'Cezarina', 'Chapad??o do C??u', 'Cidade Ocidental', 'Cocalzinho de Goi??s', 'Colinas do Sul', 'Corumba??ba', 'Corumb?? de Goi??s', 'Cristalina', 'Cristian??polis', 'Crix??s', 'Crom??nia', 'Cumari', 'C??rrego do Ouro', 'Damian??polis', 'Damol??ndia', 'Davin??polis', 'Diorama', 'Divin??polis de Goi??s', 'Doverl??ndia', 'Edealina', 'Ed??ia', 'Estrela do Norte', 'Faina', 'Fazenda Nova', 'Firmin??polis', 'Flores de Goi??s', 'Formosa', 'Formoso', 'Gameleira de Goi??s', 'Goiandira', 'Goianira', 'Goian??polis', 'Goian??sia', 'Goiatuba', 'Goi??s', 'Goi??nia', 'Gouvel??ndia', 'Guap??', 'Guarani de Goi??s', 'Guara??ta', 'Guarinos', 'Heitora??', 'Hidrolina', 'Hidrol??ndia', 'Iaciara', 'Inaciol??ndia', 'Indiara', 'Inhumas', 'Ipameri', 'Ipiranga de Goi??s', 'Ipor??', 'Israel??ndia', 'Itabera??', 'Itaguari', 'Itaguaru', 'Itaj??', 'Itapaci', 'Itapirapu??', 'Itapuranga', 'Itarum??', 'Itau??u', 'Itumbiara', 'Ivol??ndia', 'Jandaia', 'Jaragu??', 'Jata??', 'Jaupaci', 'Jes??polis', 'Jovi??nia', 'Jussara', 'Lagoa Santa', 'Leopoldo de Bulh??es', 'Luzi??nia', 'Mairipotaba', 'Mamba??', 'Mara Rosa', 'Marzag??o', 'Matrinch??', 'Mauril??ndia', 'Mimoso de Goi??s', 'Mina??u', 'Mineiros', 'Moipor??', 'Monte Alegre de Goi??s', 'Montes Claros de Goi??s', 'Montividiu', 'Montividiu do Norte', 'Morrinhos', 'Morro Agudo de Goi??s', 'Moss??medes', 'Mozarl??ndia', 'Mundo Novo', 'Mutun??polis', 'Naz??rio', 'Ner??polis', 'Niquel??ndia', 'Nova Am??rica', 'Nova Aurora', 'Nova Crix??s', 'Nova Gl??ria', 'Nova Igua??u de Goi??s', 'Nova Roma', 'Nova Veneza', 'Novo Brasil', 'Novo Gama', 'Novo Planalto', 'Orizona', 'Ouro Verde de Goi??s', 'Ouvidor', 'Padre Bernardo', 'Palestina de Goi??s', 'Palmeiras de Goi??s', 'Palmelo', 'Palmin??polis', 'Panam??', 'Paranaiguara', 'Para??na', 'Perol??ndia', 'Petrolina de Goi??s', 'Pilar de Goi??s', 'Piracanjuba', 'Piranhas', 'Piren??polis', 'Pires do Rio', 'Planaltina', 'Pontalina', 'Porangatu', 'Porteir??o', 'Portel??ndia', 'Posse', 'Professor Jamil', 'Quirin??polis', 'Rialma', 'Rian??polis', 'Rio Quente', 'Rio Verde', 'Rubiataba', 'Sanclerl??ndia', 'Santa B??rbara de Goi??s', 'Santa Cruz de Goi??s', 'Santa F?? de Goi??s', 'Santa Helena de Goi??s', 'Santa Isabel', 'Santa Rita do Araguaia', 'Santa Rita do Novo Destino', 'Santa Rosa de Goi??s', 'Santa Tereza de Goi??s', 'Santa Terezinha de Goi??s', 'Santo Ant??nio da Barra', 'Santo Ant??nio de Goi??s', 'Santo Ant??nio do Descoberto', 'Senador Canedo', 'Serran??polis', 'Silv??nia', 'Simol??ndia', 'S??o Domingos', 'S??o Francisco de Goi??s', "S??o Jo??o d'Alian??a", 'S??o Jo??o da Para??na', 'S??o Luiz do Norte', 'S??o Lu??s de Montes Belos', 'S??o Miguel do Araguaia', 'S??o Miguel do Passa Quatro', 'S??o Patr??cio', 'S??o Sim??o', "S??tio d'Abadia", 'Taquaral de Goi??s', 'Teresina de Goi??s', 'Terez??polis de Goi??s', 'Trindade', 'Trombas', 'Tr??s Ranchos', 'Turvel??ndia', 'Turv??nia', 'Uirapuru', 'Uruana', 'Urua??u', 'Uruta??', 'Valpara??so de Goi??s', 'Varj??o', 'Vian??polis', 'Vicentin??polis', 'Vila Boa', 'Vila Prop??cio', '??gua Fria de Goi??s', '??gua Limpa', '??guas Lindas de Goi??s'],
  MG: ['Abadia dos Dourados', 'Abaet??', 'Abre Campo', 'Acaiaca', 'Aguanil', 'Aimor??s', 'Aiuruoca', 'Alagoa', 'Albertina', 'Alfenas', 'Alfredo Vasconcelos', 'Almenara', 'Alpercata', 'Alpin??polis', 'Alterosa', 'Alto Capara??', 'Alto Jequitib??', 'Alto Rio Doce', 'Alvarenga', 'Alvin??polis', 'Alvorada de Minas', 'Al??m Para??ba', 'Amparo do Serra', 'Andradas', 'Andrel??ndia', 'Angel??ndia', 'Ant??nio Carlos', 'Ant??nio Dias', 'Ant??nio Prado de Minas', 'Aracitaba', 'Araguari', 'Arantina', 'Araponga', 'Arapor??', 'Arapu??', 'Arax??', 'Ara??a??', 'Ara??ua??', 'Ara??jos', 'Arceburgo', 'Arcos', 'Areado', 'Argirita', 'Aricanduva', 'Arinos', 'Astolfo Dutra', 'Atal??ia', 'Augusto de Lima', 'A??ucena', 'Baependi', 'Baldim', 'Bambu??', 'Bandeira', 'Bandeira do Sul', 'Barbacena', 'Barra Longa', 'Barroso', 'Bar??o de Cocais', 'Bar??o de Monte Alto', 'Bela Vista de Minas', 'Belmiro Braga', 'Belo Horizonte', 'Belo Oriente', 'Belo Vale', 'Berilo', 'Berizal', 'Bert??polis', 'Betim', 'Bias Fortes', 'Bicas', 'Biquinhas', 'Boa Esperan??a', 'Bocaina de Minas', 'Bocai??va', 'Bom Despacho', 'Bom Jardim de Minas', 'Bom Jesus da Penha', 'Bom Jesus do Amparo', 'Bom Jesus do Galho', 'Bom Repouso', 'Bom Sucesso', 'Bonfim', 'Bonfin??polis de Minas', 'Bonito de Minas', 'Borda da Mata', 'Botelhos', 'Botumirim', 'Brasil??ndia de Minas', 'Bras??lia de Minas', 'Braz??polis', 'Bra??nas', 'Brumadinho', 'Br??s Pires', 'Bueno Brand??o', 'Buen??polis', 'Bugre', 'Buritis', 'Buritizeiro', 'Cabeceira Grande', 'Cabo Verde', 'Cachoeira Dourada', 'Cachoeira da Prata', 'Cachoeira de Minas', 'Cachoeira de Paje??', 'Caetan??polis', 'Caet??', 'Caiana', 'Cajuri', 'Caldas', 'Camacho', 'Camanducaia', 'Cambuquira', 'Cambu??', 'Campanha', 'Campan??rio', 'Campestre', 'Campina Verde', 'Campo Azul', 'Campo Belo', 'Campo Florido', 'Campo do Meio', 'Campos Altos', 'Campos Gerais', 'Cana Verde', 'Cana??', 'Candeias', 'Cantagalo', 'Can??polis', 'Capara??', 'Capela Nova', 'Capelinha', 'Capetinga', 'Capim Branco', 'Capin??polis', 'Capit??o Andrade', 'Capit??o En??as', 'Capit??lio', 'Caputira', 'Carana??ba', 'Caranda??', 'Carangola', 'Caratinga', 'Cara??', 'Carbonita', 'Carea??u', 'Carlos Chagas', 'Carmo da Cachoeira', 'Carmo da Mata', 'Carmo de Minas', 'Carmo do Cajuru', 'Carmo do Parana??ba', 'Carmo do Rio Claro', 'Carm??sia', 'Carm??polis de Minas', 'Carneirinho', 'Carrancas', 'Carvalhos', 'Carvalh??polis', 'Casa Grande', 'Cascalho Rico', 'Cataguases', 'Catas Altas', 'Catas Altas da Noruega', 'Catuji', 'Catuti', 'Caxambu', 'Cedro do Abaet??', 'Central de Minas', 'Centralina', 'Chal??', 'Chapada Ga??cha', 'Chapada do Norte', 'Chiador', 'Ch??cara', 'Cipot??nea', 'Claraval', 'Claro dos Po????es', 'Cl??udio', 'Coimbra', 'Coluna', 'Comendador Gomes', 'Comercinho', 'Concei????o da Aparecida', 'Concei????o da Barra de Minas', 'Concei????o das Alagoas', 'Concei????o das Pedras', 'Concei????o de Ipanema', 'Concei????o do Mato Dentro', 'Concei????o do Par??', 'Concei????o do Rio Verde', 'Concei????o dos Ouros', 'Confins', 'Congonhal', 'Congonhas', 'Congonhas do Norte', 'Conquista', 'Conselheiro Lafaiete', 'Conselheiro Pena', 'Consola????o', 'Contagem', 'Coqueiral', 'Cora????o de Jesus', 'Cordisburgo', 'Cordisl??ndia', 'Corinto', 'Coroaci', 'Coromandel', 'Coronel Fabriciano', 'Coronel Murta', 'Coronel Pacheco', 'Coronel Xavier Chaves', 'Couto de Magalh??es de Minas', 'Cristais', 'Cristiano Otoni', 'Cristina', 'Crist??lia', 'Cris??lita', 'Crucil??ndia', 'Cruzeiro da Fortaleza', 'Cruz??lia', 'Cuparaque', 'Curral de Dentro', 'Curvelo', 'C??ssia', 'C??rrego Danta', 'C??rrego Fundo', 'C??rrego Novo', 'C??rrego do Bom Jesus', 'C??nego Marinho', 'Datas', 'Delfim Moreira', 'Delfin??polis', 'Delta', 'Descoberto', 'Desterro de Entre Rios', 'Desterro do Melo', 'Diamantina', 'Diogo de Vasconcelos', 'Dion??sio', 'Divino', 'Divino das Laranjeiras', 'Divinol??ndia de Minas', 'Divin??sia', 'Divin??polis', 'Divisa Alegre', 'Divisa Nova', 'Divis??polis', 'Dom Bosco', 'Dom Cavati', 'Dom Joaquim', 'Dom Silv??rio', 'Dom Vi??oso', 'Dona Euz??bia', 'Dores de Campos', 'Dores de Guanh??es', 'Dores do Indai??', 'Dores do Turvo', 'Dores??polis', 'Douradoquara', 'Durand??', 'El??i Mendes', 'Engenheiro Caldas', 'Engenheiro Navarro', 'Entre Folhas', 'Entre Rios de Minas', 'Erv??lia', 'Esmeraldas', 'Espera Feliz', 'Espinosa', 'Esp??rito Santo do Dourado', 'Estiva', 'Estrela Dalva', 'Estrela do Indai??', 'Estrela do Sul', 'Eugen??polis', 'Ewbank da C??mara', 'Extrema', 'Fama', 'Faria Lemos', 'Felisburgo', 'Felixl??ndia', 'Fel??cio dos Santos', 'Fernandes Tourinho', 'Ferros', 'Fervedouro', 'Florestal', 'Formiga', 'Formoso', 'Fortaleza de Minas', 'Fortuna de Minas', 'Francisco Badar??', 'Francisco Dumont', 'Francisco S??', 'Francisc??polis', 'Frei Gaspar', 'Frei Inoc??ncio', 'Frei Lagonegro', 'Fronteira', 'Fronteira dos Vales', 'Fruta de Leite', 'Frutal', 'Funil??ndia', 'Galil??ia', 'Gameleiras', 'Glaucil??ndia', 'Goiabeira', 'Goian??', 'Gonzaga', 'Gon??alves', 'Gouveia', 'Governador Valadares', 'Grupiara', 'Gr??o Mogol', 'Guanh??es', 'Guap??', 'Guaraciaba', 'Guaraciama', 'Guarani', 'Guaran??sia', 'Guarar??', 'Guarda-Mor', 'Guaxup??', 'Guidoval', 'Guimar??nia', 'Guiricema', 'Gurinhat??', 'Heliodora', 'Iapu', 'Ibertioga', 'Ibia??', 'Ibiracatu', 'Ibiraci', 'Ibirit??', 'Ibiti??ra de Minas', 'Ibituruna', 'Ibi??', 'Icara?? de Minas', 'Igarap??', 'Igaratinga', 'Iguatama', 'Ijaci', 'Ilic??nea', 'Imb?? de Minas', 'Inconfidentes', 'Indaiabira', 'Indian??polis', 'Inga??', 'Inhapim', 'Inha??ma', 'Inimutaba', 'Ipaba', 'Ipanema', 'Ipatinga', 'Ipia??u', 'Ipui??na', 'Ira?? de Minas', 'Itabira', 'Itabirinha', 'Itabirito', 'Itacambira', 'Itacarambi', 'Itaguara', 'Itaip??', 'Itajub??', 'Itamarandiba', 'Itamarati de Minas', 'Itambacuri', 'Itamb?? do Mato Dentro', 'Itamogi', 'Itamonte', 'Itanhandu', 'Itanhomi', 'Itaobim', 'Itapagipe', 'Itapecerica', 'Itapeva', 'Itatiaiu??u', 'Itaverava', 'Ita?? de Minas', 'Ita??na', 'Itinga', 'Itueta', 'Ituiutaba', 'Itumirim', 'Iturama', 'Itutinga', 'Jaboticatubas', 'Jacinto', 'Jacutinga', 'Jacu??', 'Jaguara??u', 'Jampruca', 'Jana??ba', 'Janu??ria', 'Japara??ba', 'Japonvar', 'Ja??ba', 'Jeceaba', 'Jenipapo de Minas', 'Jequeri', 'Jequita??', 'Jequitib??', 'Jequitinhonha', 'Jesu??nia', 'Joan??sia', 'Joaquim Fel??cio', 'Joa??ma', 'Jord??nia', 'Josen??polis', 'Jos?? Gon??alves de Minas', 'Jos?? Raydan', 'Jo??o Monlevade', 'Jo??o Pinheiro', 'Juatuba', 'Juiz de Fora', 'Juramento', 'Juruaia', 'Juven??lia', 'Ladainha', 'Lagamar', 'Lagoa Dourada', 'Lagoa Formosa', 'Lagoa Grande', 'Lagoa Santa', 'Lagoa da Prata', 'Lagoa dos Patos', 'Lajinha', 'Lambari', 'Lamim', 'Laranjal', 'Lassance', 'Lavras', 'Leandro Ferreira', 'Leme do Prado', 'Leopoldina', 'Liberdade', 'Lima Duarte', 'Limeira do Oeste', 'Lontra', 'Luisburgo', 'Luisl??ndia', 'Lumin??rias', 'Luz', 'Machacalis', 'Machado', 'Madre de Deus de Minas', 'Malacacheta', 'Mamonas', 'Manga', 'Manhua??u', 'Manhumirim', 'Mantena', 'Mar de Espanha', 'Maravilhas', 'Maria da F??', 'Mariana', 'Marilac', 'Marip?? de Minas', 'Marli??ria', 'Marmel??polis', 'Martinho Campos', 'Martins Soares', 'Mata Verde', 'Materl??ndia', 'Mateus Leme', 'Mathias Lobato', 'Matias Barbosa', 'Matias Cardoso', 'Matip??', 'Mato Verde', 'Matozinhos', 'Matutina', 'Medeiros', 'Medina', 'Mendes Pimentel', 'Merc??s', 'Mesquita', 'Minas Novas', 'Minduri', 'Mirabela', 'Miradouro', 'Mirav??nia', 'Mira??', 'Moeda', 'Moema', 'Monjolos', 'Monsenhor Paulo', 'Montalv??nia', 'Monte Alegre de Minas', 'Monte Azul', 'Monte Belo', 'Monte Carmelo', 'Monte Formoso', 'Monte Santo de Minas', 'Monte Si??o', 'Montes Claros', 'Montezuma', 'Morada Nova de Minas', 'Morro da Gar??a', 'Morro do Pilar', 'Munhoz', 'Muria??', 'Mutum', 'Muzambinho', 'M??rio Campos', 'Nacip Raydan', 'Nanuque', 'Naque', 'Natal??ndia', 'Nat??rcia', 'Nazareno', 'Nepomuceno', 'Ninheira', 'Nova Bel??m', 'Nova Era', 'Nova Lima', 'Nova M??dica', 'Nova Ponte', 'Nova Porteirinha', 'Nova Resende', 'Nova Serrana', 'Nova Uni??o', 'Novo Cruzeiro', 'Novo Oriente de Minas', 'Novorizonte', 'Olaria', "Olhos-d'??gua", 'Oliveira', 'Oliveira Fortes', 'Ol??mpio Noronha', 'On??a de Pitangui', 'Orat??rios', 'Oriz??nia', 'Ouro Branco', 'Ouro Fino', 'Ouro Preto', 'Ouro Verde de Minas', 'Padre Carvalho', 'Padre Para??so', 'Pai Pedro', 'Paineiras', 'Pains', 'Paiva', 'Palma', 'Palm??polis', 'Papagaios', 'Paracatu', 'Paragua??u', 'Parais??polis', 'Paraopeba', 'Par?? de Minas', 'Passa Quatro', 'Passa Tempo', 'Passa Vinte', 'Passab??m', 'Passos', 'Patis', 'Patos de Minas', 'Patroc??nio', 'Patroc??nio do Muria??', 'Paula C??ndido', 'Paulistas', 'Pav??o', 'Pedra Azul', 'Pedra Bonita', 'Pedra Dourada', 'Pedra do Anta', 'Pedra do Indai??', 'Pedralva', 'Pedras de Maria da Cruz', 'Pedrin??polis', 'Pedro Leopoldo', 'Pedro Teixeira', 'Pequeri', 'Pequi', 'Perdig??o', 'Perdizes', 'Perd??es', 'Periquito', 'Pescador', 'Pe??anha', 'Piau', 'Piedade de Caratinga', 'Piedade de Ponte Nova', 'Piedade do Rio Grande', 'Piedade dos Gerais', 'Pimenta', "Pingo d'??gua", 'Pint??polis', 'Piracema', 'Pirajuba', 'Piranga', 'Piranguinho', 'Pirangu??u', 'Pirapetinga', 'Pirapora', 'Pira??ba', 'Pitangui', 'Piumhi', 'Planura', 'Pocrane', 'Pomp??u', 'Ponte Nova', 'Ponto Chique', 'Ponto dos Volantes', 'Porteirinha', 'Porto Firme', 'Pot??', 'Pouso Alegre', 'Pouso Alto', 'Po??o Fundo', 'Po??os de Caldas', 'Prados', 'Prata', 'Pratinha', 'Prat??polis', 'Presidente Bernardes', 'Presidente Juscelino', 'Presidente Kubitschek', 'Presidente Oleg??rio', 'Prudente de Morais', 'Quartel Geral', 'Queluzito', 'Raposos', 'Raul Soares', 'Recreio', 'Reduto', 'Resende Costa', 'Resplendor', 'Ressaquinha', 'Riachinho', 'Riacho dos Machados', 'Ribeir??o Vermelho', 'Ribeir??o das Neves', 'Rio Acima', 'Rio Casca', 'Rio Doce', 'Rio Espera', 'Rio Manso', 'Rio Novo', 'Rio Parana??ba', 'Rio Pardo de Minas', 'Rio Piracicaba', 'Rio Pomba', 'Rio Preto', 'Rio Vermelho', 'Rio do Prado', 'Rit??polis', 'Rochedo de Minas', 'Rodeiro', 'Romaria', 'Ros??rio da Limeira', 'Rubelita', 'Rubim', 'Sabar??', 'Sabin??polis', 'Sacramento', 'Salinas', 'Salto da Divisa', 'Santa B??rbara', 'Santa B??rbara do Leste', 'Santa B??rbara do Monte Verde', 'Santa B??rbara do Tug??rio', 'Santa Cruz de Minas', 'Santa Cruz de Salinas', 'Santa Cruz do Escalvado', 'Santa Efig??nia de Minas', 'Santa F?? de Minas', 'Santa Helena de Minas', 'Santa Juliana', 'Santa Luzia', 'Santa Margarida', 'Santa Maria de Itabira', 'Santa Maria do Salto', 'Santa Maria do Sua??u??', 'Santa Rita de Caldas', 'Santa Rita de Ibitipoca', 'Santa Rita de Jacutinga', 'Santa Rita de Minas', 'Santa Rita do Itueto', 'Santa Rita do Sapuca??', 'Santa Rosa da Serra', 'Santa Vit??ria', 'Santana da Vargem', 'Santana de Cataguases', 'Santana de Pirapama', 'Santana do Deserto', 'Santana do Garamb??u', 'Santana do Jacar??', 'Santana do Manhua??u', 'Santana do Para??so', 'Santana do Riacho', 'Santana dos Montes', 'Santo Ant??nio do Amparo', 'Santo Ant??nio do Aventureiro', 'Santo Ant??nio do Grama', 'Santo Ant??nio do Itamb??', 'Santo Ant??nio do Jacinto', 'Santo Ant??nio do Monte', 'Santo Ant??nio do Retiro', 'Santo Ant??nio do Rio Abaixo', 'Santo Hip??lito', 'Santos Dumont', 'Sapuca??-Mirim', 'Sardo??', 'Sarzedo', 'Sem-Peixe', 'Senador Amaral', 'Senador Cortes', 'Senador Firmino', 'Senador Jos?? Bento', 'Senador Modestino Gon??alves', 'Senhora de Oliveira', 'Senhora do Porto', 'Senhora dos Rem??dios', 'Sericita', 'Seritinga', 'Serra Azul de Minas', 'Serra da Saudade', 'Serra do Salitre', 'Serra dos Aimor??s', 'Serrania', 'Serranos', 'Serran??polis de Minas', 'Serro', 'Sete Lagoas', 'Setubinha', 'Silveir??nia', 'Silvian??polis', 'Simon??sia', 'Sim??o Pereira', 'Sobr??lia', 'Soledade de Minas', 'S??o Bento Abade', 'S??o Br??s do Sua??u??', 'S??o Domingos das Dores', 'S??o Domingos do Prata', 'S??o Francisco', 'S??o Francisco de Paula', 'S??o Francisco de Sales', 'S??o Francisco do Gl??ria', 'S??o F??lix de Minas', 'S??o Geraldo', 'S??o Geraldo da Piedade', 'S??o Geraldo do Baixio', 'S??o Gon??alo do Abaet??', 'S??o Gon??alo do Par??', 'S??o Gon??alo do Rio Abaixo', 'S??o Gon??alo do Rio Preto', 'S??o Gon??alo do Sapuca??', 'S??o Gotardo', 'S??o Joaquim de Bicas', 'S??o Jos?? da Barra', 'S??o Jos?? da Lapa', 'S??o Jos?? da Safira', 'S??o Jos?? da Varginha', 'S??o Jos?? do Alegre', 'S??o Jos?? do Divino', 'S??o Jos?? do Goiabal', 'S??o Jos?? do Jacuri', 'S??o Jos?? do Mantimento', 'S??o Jo??o Batista do Gl??ria', 'S??o Jo??o Evangelista', 'S??o Jo??o Nepomuceno', 'S??o Jo??o da Lagoa', 'S??o Jo??o da Mata', 'S??o Jo??o da Ponte', 'S??o Jo??o das Miss??es', 'S??o Jo??o del Rei', 'S??o Jo??o do Manhua??u', 'S??o Jo??o do Manteninha', 'S??o Jo??o do Oriente', 'S??o Jo??o do Pacu??', 'S??o Jo??o do Para??so', 'S??o Louren??o', 'S??o Miguel do Anta', 'S??o Pedro da Uni??o', 'S??o Pedro do Sua??u??', 'S??o Pedro dos Ferros', 'S??o Rom??o', 'S??o Roque de Minas', 'S??o Sebasti??o da Bela Vista', 'S??o Sebasti??o da Vargem Alegre', 'S??o Sebasti??o do Anta', 'S??o Sebasti??o do Maranh??o', 'S??o Sebasti??o do Oeste', 'S??o Sebasti??o do Para??so', 'S??o Sebasti??o do Rio Preto', 'S??o Sebasti??o do Rio Verde', 'S??o Tiago', 'S??o Tom??s de Aquino', 'S??o Tom?? das Letras', 'S??o Vicente de Minas', 'Tabuleiro', 'Taiobeiras', 'Taparuba', 'Tapira', 'Tapira??', 'Taquara??u de Minas', 'Tarumirim', 'Teixeiras', 'Te??filo Otoni', 'Tim??teo', 'Tiradentes', 'Tiros', 'Tocantins', 'Tocos do Moji', 'Toledo', 'Tombos', 'Tr??s Cora????es', 'Tr??s Marias', 'Tr??s Pontas', 'Tumiritinga', 'Tupaciguara', 'Turmalina', 'Turvol??ndia', 'Ubaporanga', 'Uba??', 'Uberaba', 'Uberl??ndia', 'Ub??', 'Umburatiba', 'Una??', 'Uni??o de Minas', 'Uruana de Minas', 'Urucuia', 'Uruc??nia', 'Vargem Alegre', 'Vargem Bonita', 'Vargem Grande do Rio Pardo', 'Varginha', 'Varj??o de Minas', 'Varzel??ndia', 'Vazante', 'Verdel??ndia', 'Veredinha', 'Vermelho Novo', 'Ver??ssimo', 'Vespasiano', 'Vieiras', 'Virgem da Lapa', 'Virgin??polis', 'Virgol??ndia', 'Virg??nia', 'Visconde do Rio Branco', 'Vi??osa', 'Volta Grande', 'V??rzea da Palma', 'Wenceslau Braz', '??gua Boa', '??gua Comprida', '??guas Formosas', '??guas Vermelhas'],
  PA: ['Abaetetuba', 'Abel Figueiredo', 'Acar??', 'Afu??', 'Alenquer', 'Almeirim', 'Altamira', 'Anaj??s', 'Ananindeua', 'Anapu', 'Augusto Corr??a', 'Aurora do Par??', 'Aveiro', 'Bagre', 'Bai??o', 'Bannach', 'Barcarena', 'Belterra', 'Bel??m', 'Benevides', 'Bom Jesus do Tocantins', 'Bonito', 'Bragan??a', 'Brasil Novo', 'Brejo Grande do Araguaia', 'Breu Branco', 'Breves', 'Bujaru', 'Cachoeira do Arari', 'Cachoeira do Piri??', 'Camet??', 'Cana?? dos Caraj??s', 'Capanema', 'Capit??o Po??o', 'Castanhal', 'Chaves', 'Colares', 'Concei????o do Araguaia', 'Conc??rdia do Par??', 'Cumaru do Norte', 'Curion??polis', 'Curralinho', 'Curu??', 'Curu????', 'Dom Eliseu', 'Eldorado do Caraj??s', 'Faro', 'Floresta do Araguaia', 'Garraf??o do Norte', 'Goian??sia do Par??', 'Gurup??', 'Igarap??-A??u', 'Igarap??-Miri', 'Inhangapi', 'Ipixuna do Par??', 'Irituia', 'Itaituba', 'Itupiranga', 'Jacareacanga', 'Jacund??', 'Juruti', 'Limoeiro do Ajuru', 'Magalh??es Barata', 'Marab??', 'Maracan??', 'Marapanim', 'Marituba', 'Medicil??ndia', 'Melga??o', 'Mocajuba', 'Moju', 'Moju?? dos Campos', 'Monte Alegre', 'Muan??', 'M??e do Rio', 'Nova Esperan??a do Piri??', 'Nova Ipixuna', 'Nova Timboteua', 'Novo Progresso', 'Novo Repartimento', 'Oeiras do Par??', 'Oriximin??', 'Ouril??ndia do Norte', 'Our??m', 'Pacaj??', 'Palestina do Par??', 'Paragominas', 'Parauapebas', "Pau D'Arco", 'Peixe-Boi', 'Pi??arra', 'Placas', 'Ponta de Pedras', 'Portel', 'Porto de Moz', 'Prainha', 'Primavera', 'Quatipuru', 'Reden????o', 'Rio Maria', 'Rondon do Par??', 'Rur??polis', 'Salin??polis', 'Salvaterra', 'Santa B??rbara do Par??', 'Santa Cruz do Arari', 'Santa Izabel do Par??', 'Santa Luzia do Par??', 'Santa Maria das Barreiras', 'Santa Maria do Par??', 'Santana do Araguaia', 'Santar??m', 'Santar??m Novo', 'Santo Ant??nio do Tau??', 'Sapucaia', 'Senador Jos?? Porf??rio', 'Soure', 'S??o Caetano de Odivelas', 'S??o Domingos do Araguaia', 'S??o Domingos do Capim', 'S??o Francisco do Par??', 'S??o F??lix do Xingu', 'S??o Geraldo do Araguaia', 'S??o Jo??o da Ponta', 'S??o Jo??o de Pirabas', 'S??o Jo??o do Araguaia', 'S??o Miguel do Guam??', 'S??o Sebasti??o da Boa Vista', 'Tail??ndia', 'Terra Alta', 'Terra Santa', 'Tom??-A??u', 'Tracuateua', 'Trair??o', 'Tucum??', 'Tucuru??', 'Ulian??polis', 'Uruar??', 'Vigia', 'Viseu', 'Vit??ria do Xingu', 'Xinguara', '??gua Azul do Norte', '??bidos'],
  CE: ['Abaiara', 'Acarape', 'Acara??', 'Acopiara', 'Aiuaba', 'Alc??ntaras', 'Altaneira', 'Alto Santo', 'Amontada', 'Antonina do Norte', 'Apuiar??s', 'Aquiraz', 'Aracati', 'Aracoiaba', 'Ararend??', 'Araripe', 'Aratuba', 'Arneiroz', 'Assar??', 'Aurora', 'Baixio', 'Banabui??', 'Barbalha', 'Barreira', 'Barro', 'Barroquinha', 'Baturit??', 'Beberibe', 'Bela Cruz', 'Boa Viagem', 'Brejo Santo', 'Camocim', 'Campos Sales', 'Canind??', 'Capistrano', 'Caridade', 'Cariria??u', 'Carir??', 'Cari??s', 'Carnaubal', 'Cascavel', 'Catarina', 'Catunda', 'Caucaia', 'Cedro', 'Chaval', 'Chorozinho', 'Chor??', 'Corea??', 'Crate??s', 'Crato', 'Croat??', 'Cruz', 'Deputado Irapuan Pinheiro', 'Erer??', 'Eus??bio', 'Farias Brito', 'Forquilha', 'Fortaleza', 'Fortim', 'Frecheirinha', 'General Sampaio', 'Granja', 'Granjeiro', 'Gra??a', 'Groa??ras', 'Guai??ba', 'Guaraciaba do Norte', 'Guaramiranga', 'Hidrol??ndia', 'Horizonte', 'Ibaretama', 'Ibiapina', 'Ibicuitinga', 'Icapu??', 'Ic??', 'Iguatu', 'Independ??ncia', 'Ipaporanga', 'Ipaumirim', 'Ipu', 'Ipueiras', 'Iracema', 'Irau??uba', 'Itaitinga', 'Itai??aba', 'Itapaj??', 'Itapipoca', 'Itapi??na', 'Itarema', 'Itatira', 'Jaguaretama', 'Jaguaribara', 'Jaguaribe', 'Jaguaruana', 'Jardim', 'Jati', 'Jijoca de Jericoacoara', 'Juazeiro do Norte', 'Juc??s', 'Lavras da Mangabeira', 'Limoeiro do Norte', 'Madalena', 'Maracana??', 'Maranguape', 'Marco', 'Martin??pole', 'Massap??', 'Mauriti', 'Meruoca', 'Milagres', 'Milh??', 'Mira??ma', 'Miss??o Velha', 'Momba??a', 'Monsenhor Tabosa', 'Morada Nova', 'Mora??jo', 'Morrinhos', 'Mucambo', 'Mulungu', 'Nova Olinda', 'Nova Russas', 'Novo Oriente', 'Ocara', 'Or??s', 'Pacajus', 'Pacatuba', 'Pacoti', 'Pacuj??', 'Palhano', 'Palm??cia', 'Paracuru', 'Paraipaba', 'Parambu', 'Paramoti', 'Pedra Branca', 'Penaforte', 'Pentecoste', 'Pereiro', 'Pindoretama', 'Piquet Carneiro', 'Pires Ferreira', 'Poranga', 'Porteiras', 'Potengi', 'Potiretama', 'Quiterian??polis', 'Quixad??', 'Quixel??', 'Quixeramobim', 'Quixer??', 'Reden????o', 'Reriutaba', 'Russas', 'Saboeiro', 'Salitre', 'Santa Quit??ria', 'Santana do Acara??', 'Santana do Cariri', 'Senador Pompeu', 'Senador S??', 'Sobral', 'Solon??pole', 'S??o Benedito', 'S??o Gon??alo do Amarante', 'S??o Jo??o do Jaguaribe', 'S??o Lu??s do Curu', 'Tabuleiro do Norte', 'Tamboril', 'Tarrafas', 'Tau??', 'Teju??uoca', 'Tiangu??', 'Trairi', 'Tururu', 'Ubajara', 'Umari', 'Umirim', 'Uruburetama', 'Uruoca', 'Varjota', 'Vi??osa do Cear??', 'V??rzea Alegre'],
  BA: ['Abar??', 'Aba??ra', 'Acajutiba', 'Adustina', 'Aiquara', 'Alagoinhas', 'Alcoba??a', 'Almadina', 'Amargosa', 'Am??lia Rodrigues', 'Am??rica Dourada', 'Anag??', 'Andara??', 'Andorinha', 'Angical', 'Anguera', 'Antas', 'Ant??nio Cardoso', 'Ant??nio Gon??alves', 'Apor??', 'Apuarema', 'Aracatu', 'Araci', 'Aramari', 'Arataca', 'Aratu??pe', 'Ara????s', 'Aurelino Leal', 'Baian??polis', 'Baixa Grande', 'Banza??', 'Barra', 'Barra da Estiva', 'Barra do Cho??a', 'Barra do Mendes', 'Barra do Rocha', 'Barreiras', 'Barro Alto', 'Barro Preto', 'Barrocas', 'Belmonte', 'Belo Campo', 'Biritinga', 'Boa Nova', 'Boa Vista do Tupim', 'Bom Jesus da Lapa', 'Bom Jesus da Serra', 'Boninal', 'Bonito', 'Boquira', 'Botupor??', 'Brejol??ndia', 'Brej??es', 'Brotas de Maca??bas', 'Brumado', 'Buerarema', 'Buritirama', 'Caatiba', 'Cabaceiras do Paragua??u', 'Cachoeira', 'Cacul??', 'Caetanos', 'Caetit??', 'Cafarnaum', 'Cairu', 'Caldeir??o Grande', 'Camacan', 'Camamu', 'Cama??ari', 'Campo Alegre de Lourdes', 'Campo Formoso', 'Canarana', 'Canavieiras', 'Candeal', 'Candeias', 'Candiba', 'Cansan????o', 'Canudos', 'Can??polis', 'Capela do Alto Alegre', 'Capim Grosso', 'Caravelas', 'Cara??bas', 'Cardeal da Silva', 'Carinhanha', 'Casa Nova', 'Castro Alves', 'Catol??ndia', 'Catu', 'Caturama', 'Ca??m', 'Central', 'Chorroch??', 'Cip??', 'Coaraci', 'Cocos', 'Concei????o da Feira', 'Concei????o do Almeida', 'Concei????o do Coit??', 'Concei????o do Jacu??pe', 'Conde', 'Conde??ba', 'Contendas do Sincor??', 'Cora????o de Maria', 'Cordeiros', 'Coribe', 'Coronel Jo??o S??', 'Correntina', 'Cotegipe', 'Cravol??ndia', 'Crist??polis', 'Cris??polis', 'Cruz das Almas', 'Cura????', 'C??ndido Sales', 'C??cero Dantas', "Dias d'??vila", 'Dom Bas??lio', 'Dom Macedo Costa', 'D??rio Meira', 'El??sio Medrado', 'Encruzilhada', 'Entre Rios', 'Esplanada', 'Euclides da Cunha', 'Eun??polis', 'Feira da Mata', 'Feira de Santana', 'Filad??lfia', 'Firmino Alves', 'Floresta Azul', 'Formosa do Rio Preto', 'F??tima', 'Gandu', 'Gavi??o', 'Gentio do Ouro', 'Gl??ria', 'Gongogi', 'Governador Mangabeira', 'Guajeru', 'Guanambi', 'Guaratinga', 'Heli??polis', 'Ia??u', 'Ibiassuc??', 'Ibicara??', 'Ibicoara', 'Ibicu??', 'Ibipeba', 'Ibipitanga', 'Ibiquera', 'Ibirapitanga', 'Ibirapu??', 'Ibirataia', 'Ibitiara', 'Ibitit??', 'Ibotirama', 'Ichu', 'Igapor??', 'Igrapi??na', 'Igua??', 'Ilh??us', 'Inhambupe', 'Ipecaet??', 'Ipia??', 'Ipir??', 'Ipupiara', 'Irajuba', 'Iramaia', 'Iraquara', 'Irar??', 'Irec??', 'Itabela', 'Itaberaba', 'Itabuna', 'Itacar??', 'Itaet??', 'Itagi', 'Itagib??', 'Itagimirim', 'Itagua??u da Bahia', 'Itaju do Col??nia', 'Itaju??pe', 'Itamaraju', 'Itamari', 'Itamb??', 'Itanagra', 'Itanh??m', 'Itaparica', 'Itapebi', 'Itapetinga', 'Itapicuru', 'Itapitanga', 'Itap??', 'Itaquara', 'Itarantim', 'Itatim', 'Itiru??u', 'Iti??ba', 'Itoror??', 'Itua??u', 'Ituber??', 'Iuiu', 'Jaborandi', 'Jacaraci', 'Jacobina', 'Jaguaquara', 'Jaguarari', 'Jaguaripe', 'Janda??ra', 'Jequi??', 'Jeremoabo', 'Jiquiri????', 'Jita??na', 'Jo??o Dourado', 'Juazeiro', 'Jucuru??u', 'Jussara', 'Jussari', 'Jussiape', 'Lafaiete Coutinho', 'Lagoa Real', 'Laje', 'Lajedinho', 'Lajedo do Tabocal', 'Lajed??o', 'Lamar??o', 'Lap??o', 'Lauro de Freitas', 'Len????is', 'Lic??nio de Almeida', 'Livramento de Nossa Senhora', 'Lu??s Eduardo Magalh??es', 'Macajuba', 'Macarani', 'Maca??bas', 'Macurur??', 'Madre de Deus', 'Maetinga', 'Maiquinique', 'Mairi', 'Malhada', 'Malhada de Pedras', 'Manoel Vitorino', 'Mansid??o', 'Marac??s', 'Maragogipe', 'Mara??', 'Marcion??lio Souza', 'Mascote', 'Mata de S??o Jo??o', 'Matina', 'Medeiros Neto', 'Miguel Calmon', 'Milagres', 'Mirangaba', 'Mirante', 'Monte Santo', 'Morpar??', 'Morro do Chap??u', 'Mortugaba', 'Mucug??', 'Mucuri', 'Mulungu do Morro', 'Mundo Novo', 'Muniz Ferreira', 'Muqu??m do S??o Francisco', 'Muritiba', 'Mutu??pe', 'Nazar??', 'Nilo Pe??anha', 'Nordestina', 'Nova Cana??', 'Nova F??tima', 'Nova Ibi??', 'Nova Itarana', 'Nova Reden????o', 'Nova Soure', 'Nova Vi??osa', 'Novo Horizonte', 'Novo Triunfo', 'Olindina', 'Oliveira dos Brejinhos', 'Ouri??angas', 'Ourol??ndia', 'Palmas de Monte Alto', 'Palmeiras', 'Paramirim', 'Paratinga', 'Paripiranga', 'Pau Brasil', 'Paulo Afonso', 'Pedro Alexandre', 'Pedr??o', 'Piat??', 'Pil??o Arcado', 'Pinda??', 'Pindoba??u', 'Pintadas', 'Pira?? do Norte', 'Pirip??', 'Piritiba', 'Planaltino', 'Planalto', 'Pojuca', 'Ponto Novo', 'Porto Seguro', 'Potiragu??', 'Po????es', 'Prado', 'Presidente Dutra', 'Presidente J??nio Quadros', 'Presidente Tancredo Neves', 'P?? de Serra', 'Queimadas', 'Quijingue', 'Quixabeira', 'Rafael Jambeiro', 'Remanso', 'Retirol??ndia', 'Riacho de Santana', 'Riach??o das Neves', 'Riach??o do Jacu??pe', 'Ribeira do Amparo', 'Ribeira do Pombal', 'Ribeir??o do Largo', 'Rio Real', 'Rio de Contas', 'Rio do Ant??nio', 'Rio do Pires', 'Rodelas', 'Ruy Barbosa', 'Salinas da Margarida', 'Salvador', 'Santa Br??gida', 'Santa B??rbara', 'Santa Cruz Cabr??lia', 'Santa Cruz da Vit??ria', 'Santa In??s', 'Santa Luzia', 'Santa Maria da Vit??ria', 'Santa Rita de C??ssia', 'Santa Terezinha', 'Santaluz', 'Santana', 'Santan??polis', 'Santo Amaro', 'Santo Ant??nio de Jesus', 'Santo Est??v??o', 'Sapea??u', 'Saubara', 'Sa??de', 'Seabra', 'Sebasti??o Laranjeiras', 'Senhor do Bonfim', 'Sento S??', 'Serra Dourada', 'Serra Preta', 'Serra do Ramalho', 'Serrinha', 'Serrol??ndia', 'Sim??es Filho', 'Sobradinho', 'Souto Soares', 'S??tiro Dias', 'S??o Desid??rio', 'S??o Domingos', 'S??o Felipe', 'S??o Francisco do Conde', 'S??o F??lix', 'S??o F??lix do Coribe', 'S??o Gabriel', 'S??o Gon??alo dos Campos', 'S??o Jos?? da Vit??ria', 'S??o Jos?? do Jacu??pe', 'S??o Miguel das Matas', 'S??o Sebasti??o do Pass??', 'S??tio do Mato', 'S??tio do Quinto', 'Tabocas do Brejo Velho', 'Tanha??u', 'Tanque Novo', 'Tanquinho', 'Tapero??', 'Tapiramut??', 'Teixeira de Freitas', 'Teodoro Sampaio', 'Teofil??ndia', 'Teol??ndia', 'Terra Nova', 'Tremedal', 'Tucano', 'Uau??', 'Ubaitaba', 'Ubat??', 'Uba??ra', 'Uiba??', 'Umburanas', 'Una', 'Urandi', 'Uru??uca', 'Utinga', 'Valente', 'Valen??a', 'Varzedo', 'Vera Cruz', 'Vereda', 'Vit??ria da Conquista', 'V??rzea Nova', 'V??rzea da Ro??a', 'V??rzea do Po??o', 'Wagner', 'Wanderley', 'Wenceslau Guimar??es', 'Xique-Xique', '??gua Fria', '??rico Cardoso'],
  PR: ['Abati??', 'Adrian??polis', 'Agudos do Sul', 'Almirante Tamandar??', 'Altamira do Paran??', 'Alto Paran??', 'Alto Para??so', 'Alto Piquiri', 'Alt??nia', 'Alvorada do Sul', 'Amapor??', 'Amp??re', 'Anahy', 'Andir??', 'Antonina', 'Ant??nio Olinto', 'Apucarana', 'Arapongas', 'Arapoti', 'Arapu??', 'Araruna', 'Arauc??ria', 'Ariranha do Iva??', 'Assa??', 'Assis Chateaubriand', 'Astorga', 'Atalaia', 'Balsa Nova', 'Bandeirantes', 'Barbosa Ferraz', 'Barra do Jacar??', 'Barrac??o', 'Bela Vista da Caroba', 'Bela Vista do Para??so', 'Bituruna', 'Boa Esperan??a', 'Boa Esperan??a do Igua??u', 'Boa Ventura de S??o Roque', 'Boa Vista da Aparecida', 'Bocai??va do Sul', 'Bom Jesus do Sul', 'Bom Sucesso', 'Bom Sucesso do Sul', 'Borraz??polis', 'Braganey', 'Brasil??ndia do Sul', 'Cafeara', 'Cafel??ndia', 'Cafezal do Sul', 'Calif??rnia', 'Cambar??', 'Cambira', 'Camb??', 'Campina Grande do Sul', 'Campina da Lagoa', 'Campina do Sim??o', 'Campo Bonito', 'Campo Largo', 'Campo Magro', 'Campo Mour??o', 'Campo do Tenente', 'Cand??i', 'Cantagalo', 'Capanema', 'Capit??o Le??nidas Marques', 'Carambe??', 'Carl??polis', 'Cascavel', 'Castro', 'Catanduvas', 'Centen??rio do Sul', 'Cerro Azul', 'Chopinzinho', 'Cianorte', 'Cidade Ga??cha', 'Clevel??ndia', 'Colombo', 'Colorado', 'Congonhinhas', 'Conselheiro Mairinck', 'Contenda', 'Corb??lia', 'Corn??lio Proc??pio', 'Coronel Domingos Soares', 'Coronel Vivida', 'Corumbata?? do Sul', 'Cruz Machado', 'Cruzeiro do Igua??u', 'Cruzeiro do Oeste', 'Cruzeiro do Sul', 'Cruzmaltina', 'Curitiba', 'Curi??va', 'C??ndido de Abreu', 'C??u Azul', "Diamante D'Oeste", 'Diamante do Norte', 'Diamante do Sul', 'Dois Vizinhos', 'Douradina', 'Doutor Camargo', 'Doutor Ulysses', 'Engenheiro Beltr??o', 'Entre Rios do Oeste', 'En??as Marques', 'Esperan??a Nova', 'Espig??o Alto do Igua??u', 'Farol', 'Faxinal', 'Fazenda Rio Grande', 'Fernandes Pinheiro', 'Figueira', 'Flor da Serra do Sul', 'Flora??', 'Floresta', 'Florest??polis', 'Fl??rida', 'Formosa do Oeste', 'Foz do Igua??u', 'Foz do Jord??o', 'Francisco Alves', 'Francisco Beltr??o', 'F??nix', 'General Carneiro', 'Godoy Moreira', 'Goioer??', 'Goioxim', 'Grandes Rios', 'Guaira????', 'Guamiranga', 'Guapirama', 'Guaporema', 'Guaraci', 'Guarania??u', 'Guarapuava', 'Guaraque??aba', 'Guaratuba', 'Gua??ra', 'Hon??rio Serpa', 'Ibaiti', 'Ibema', 'Ibipor??', 'Icara??ma', 'Iguara??u', 'Iguatu', 'Imba??', 'Imbituva', 'Inaj??', 'Indian??polis', 'In??cio Martins', 'Ipiranga', 'Ipor??', 'Iracema do Oeste', 'Irati', 'Iretama', 'Itaguaj??', 'Itaipul??ndia', 'Itambarac??', 'Itamb??', "Itapejara d'Oeste", 'Itaperu??u', 'Ita??na do Sul', 'Ivaipor??', 'Ivatuba', 'Ivat??', 'Iva??', 'Jaboti', 'Jacarezinho', 'Jaguapit??', 'Jaguaria??va', 'Jandaia do Sul', 'Jani??polis', 'Japira', 'Japur??', 'Jardim Alegre', 'Jardim Olinda', 'Jataizinho', 'Jesu??tas', 'Joaquim T??vora', 'Jundia?? do Sul', 'Juranda', 'Jussara', 'Kalor??', 'Lapa', 'Laranjal', 'Laranjeiras do Sul', 'Le??polis', 'Lidian??polis', 'Lindoeste', 'Loanda', 'Lobato', 'Londrina', 'Luiziana', 'Lunardelli', 'Lupion??polis', 'Mallet', 'Mambor??', 'Mandaguari', 'Mandagua??u', 'Mandirituba', 'Manfrin??polis', 'Mangueirinha', 'Manoel Ribas', 'Marechal C??ndido Rondon', 'Maria Helena', 'Marialva', 'Marilena', 'Mariluz', 'Maril??ndia do Sul', 'Maring??', 'Marip??', 'Mari??polis', 'Marmeleiro', 'Marquinho', 'Marumbi', 'Matel??ndia', 'Matinhos', 'Mato Rico', 'Mau?? da Serra', 'Medianeira', 'Mercedes', 'Mirador', 'Miraselva', 'Missal', 'Moreira Sales', 'Morretes', 'Munhoz de Melo', 'Nossa Senhora das Gra??as', 'Nova Alian??a do Iva??', 'Nova Am??rica da Colina', 'Nova Aurora', 'Nova Cantu', 'Nova Esperan??a', 'Nova Esperan??a do Sudoeste', 'Nova F??tima', 'Nova Laranjeiras', 'Nova Londrina', 'Nova Ol??mpia', 'Nova Prata do Igua??u', 'Nova Santa B??rbara', 'Nova Santa Rosa', 'Nova Tebas', 'Novo Itacolomi', 'Ortigueira', 'Ourizona', 'Ouro Verde do Oeste', 'Pai??andu', 'Palmas', 'Palmeira', 'Palmital', 'Palotina', 'Paranacity', 'Paranagu??', 'Paranapoema', 'Paranava??', 'Para??so do Norte', 'Pato Bragado', 'Pato Branco', 'Paula Freitas', 'Paulo Frontin', 'Peabiru', 'Perobal', 'Pinhais', 'Pinhal de S??o Bento', 'Pinhal??o', 'Pinh??o', 'Piraquara', 'Pira?? do Sul', 'Pitanga', 'Pitangueiras', 'Pi??n', 'Planaltina do Paran??', 'Planalto', 'Ponta Grossa', 'Pontal do Paran??', 'Porecatu', 'Porto Amazonas', 'Porto Barreiro', 'Porto Rico', 'Porto Vit??ria', 'Prado Ferreira', 'Pranchita', 'Presidente Castelo Branco', 'Primeiro de Maio', 'Prudent??polis', 'P??rola', "P??rola d'Oeste", 'Quarto Centen??rio', 'Quatigu??', 'Quatro Barras', 'Quatro Pontes', 'Quedas do Igua??u', 'Quer??ncia do Norte', 'Quinta do Sol', 'Quitandinha', 'Ramil??ndia', 'Rancho Alegre', "Rancho Alegre D'Oeste", 'Realeza', 'Rebou??as', 'Renascen??a', 'Reserva', 'Reserva do Igua??u', 'Ribeir??o Claro', 'Ribeir??o do Pinhal', 'Rio Azul', 'Rio Bom', 'Rio Bonito do Igua??u', 'Rio Branco do Iva??', 'Rio Branco do Sul', 'Rio Negro', 'Rol??ndia', 'Roncador', 'Rondon', 'Ros??rio do Iva??', 'Sab??udia', 'Salgado Filho', 'Salto do Itarar??', 'Salto do Lontra', 'Santa Am??lia', 'Santa Cec??lia do Pav??o', 'Santa Cruz de Monte Castelo', 'Santa F??', 'Santa Helena', 'Santa In??s', 'Santa Isabel do Iva??', 'Santa Izabel do Oeste', 'Santa L??cia', 'Santa Maria do Oeste', 'Santa Mariana', 'Santa M??nica', 'Santa Tereza do Oeste', 'Santa Terezinha de Itaipu', 'Santana do Itarar??', 'Santo Ant??nio da Platina', 'Santo Ant??nio do Caiu??', 'Santo Ant??nio do Para??so', 'Santo Ant??nio do Sudoeste', 'Santo In??cio', 'Sapopema', 'Sarandi', 'Saudade do Igua??u', 'Seng??s', 'Serran??polis do Igua??u', 'Sertaneja', 'Sertan??polis', 'Siqueira Campos', 'Sulina', 'S??o Carlos do Iva??', 'S??o Jer??nimo da Serra', "S??o Jorge d'Oeste", 'S??o Jorge do Iva??', 'S??o Jorge do Patroc??nio', 'S??o Jos?? da Boa Vista', 'S??o Jos?? das Palmeiras', 'S??o Jos?? dos Pinhais', 'S??o Jo??o', 'S??o Jo??o do Caiu??', 'S??o Jo??o do Iva??', 'S??o Jo??o do Triunfo', 'S??o Manoel do Paran??', 'S??o Mateus do Sul', 'S??o Miguel do Igua??u', 'S??o Pedro do Igua??u', 'S??o Pedro do Iva??', 'S??o Pedro do Paran??', 'S??o Sebasti??o da Amoreira', 'S??o Tom??', 'Tamarana', 'Tamboara', 'Tapejara', 'Tapira', 'Teixeira Soares', 'Tel??maco Borba', 'Terra Boa', 'Terra Rica', 'Terra Roxa', 'Tibagi', 'Tijucas do Sul', 'Toledo', 'Tomazina', 'Tr??s Barras do Paran??', 'Tunas do Paran??', 'Tuneiras do Oeste', 'Tup??ssi', 'Turvo', 'Ubirat??', 'Umuarama', 'Uniflor', 'Uni??o da Vit??ria', 'Ura??', 'Ventania', 'Vera Cruz do Oeste', 'Ver??', 'Virmond', 'Vitorino', 'Wenceslau Braz', 'Xambr??', '??ngulo'],
  SC: ['Abdon Batista', 'Abelardo Luz', 'Agrol??ndia', 'Agron??mica', 'Alfredo Wagner', 'Alto Bela Vista', 'Anchieta', 'Angelina', 'Anita Garibaldi', 'Anit??polis', 'Ant??nio Carlos', 'Api??na', 'Arabut??', 'Araquari', 'Ararangu??', 'Armaz??m', 'Arroio Trinta', 'Arvoredo', 'Ascurra', 'Atalanta', 'Aurora', 'Balne??rio Arroio do Silva', 'Balne??rio Barra do Sul', 'Balne??rio Cambori??', 'Balne??rio Gaivota', 'Balne??rio Pi??arras', 'Balne??rio Rinc??o', 'Bandeirante', 'Barra Bonita', 'Barra Velha', 'Bela Vista do Toldo', 'Belmonte', 'Benedito Novo', 'Bigua??u', 'Blumenau', 'Bocaina do Sul', 'Bom Jardim da Serra', 'Bom Jesus', 'Bom Jesus do Oeste', 'Bom Retiro', 'Bombinhas', 'Botuver??', 'Bra??o do Norte', 'Bra??o do Trombudo', 'Brun??polis', 'Brusque', 'Caibi', 'Calmon', 'Cambori??', 'Campo Alegre', 'Campo Belo do Sul', 'Campo Er??', 'Campos Novos', 'Canelinha', 'Canoinhas', 'Capinzal', 'Capivari de Baixo', 'Cap??o Alto', 'Catanduvas', 'Caxambu do Sul', 'Ca??ador', 'Celso Ramos', 'Cerro Negro', 'Chapad??o do Lageado', 'Chapec??', 'Cocal do Sul', 'Conc??rdia', 'Cordilheira Alta', 'Coronel Freitas', 'Coronel Martins', 'Correia Pinto', 'Corup??', 'Crici??ma', 'Cunha Por??', 'Cunhata??', 'Curitibanos', 'Descanso', 'Dion??sio Cerqueira', 'Dona Emma', 'Doutor Pedrinho', 'Entre Rios', 'Ermo', 'Erval Velho', 'Faxinal dos Guedes', 'Flor do Sert??o', 'Florian??polis', 'Formosa do Sul', 'Forquilhinha', 'Fraiburgo', 'Frei Rog??rio', 'Galv??o', 'Garopaba', 'Garuva', 'Gaspar', 'Governador Celso Ramos', 'Gravatal', 'Gr??o Par??', 'Guabiruba', 'Guaraciaba', 'Guaramirim', 'Guaruj?? do Sul', 'Guatamb??', "Herval d'Oeste", 'Ibiam', 'Ibicar??', 'Ibirama', 'Ilhota', 'Imaru??', 'Imbituba', 'Imbuia', 'Indaial', 'Iomer??', 'Ipira', 'Ipor?? do Oeste', 'Ipua??u', 'Ipumirim', 'Iraceminha', 'Irani', 'Irati', 'Irine??polis', 'Itai??polis', 'Itaja??', 'Itapema', 'Itapiranga', 'Itapo??', 'Ituporanga', 'It??', 'I??ara', 'Jabor??', 'Jacinto Machado', 'Jaguaruna', 'Jaragu?? do Sul', 'Jardin??polis', 'Joa??aba', 'Joinville', 'Jos?? Boiteux', 'Jupi??', 'Lacerd??polis', 'Lages', 'Laguna', 'Lajeado Grande', 'Laurentino', 'Lauro M??ller', 'Lebon R??gis', 'Leoberto Leal', 'Lind??ia do Sul', 'Lontras', 'Luiz Alves', 'Luzerna', 'Macieira', 'Mafra', 'Major Gercino', 'Major Vieira', 'Maracaj??', 'Maravilha', 'Marema', 'Massaranduba', 'Matos Costa', 'Meleiro', 'Mirim Doce', 'Modelo', 'Monda??', 'Monte Carlo', 'Monte Castelo', 'Morro Grande', 'Morro da Fuma??a', 'Navegantes', 'Nova Erechim', 'Nova Itaberaba', 'Nova Trento', 'Nova Veneza', 'Novo Horizonte', 'Orleans', 'Otac??lio Costa', 'Ouro', 'Ouro Verde', 'Paial', 'Painel', 'Palho??a', 'Palma Sola', 'Palmeira', 'Palmitos', 'Papanduva', 'Para??so', 'Passo de Torres', 'Passos Maia', 'Paulo Lopes', 'Pedras Grandes', 'Penha', 'Peritiba', 'Pescaria Brava', 'Petrol??ndia', 'Pinhalzinho', 'Pinheiro Preto', 'Piratuba', 'Planalto Alegre', 'Pomerode', 'Ponte Alta', 'Ponte Alta do Norte', 'Ponte Serrada', 'Porto Belo', 'Porto Uni??o', 'Pouso Redondo', 'Praia Grande', 'Presidente Castello Branco', 'Presidente Get??lio', 'Presidente Nereu', 'Princesa', 'Quilombo', 'Rancho Queimado', 'Rio Fortuna', 'Rio Negrinho', 'Rio Rufino', 'Rio das Antas', 'Rio do Campo', 'Rio do Oeste', 'Rio do Sul', 'Rio dos Cedros', 'Riqueza', 'Rodeio', 'Romel??ndia', 'Salete', 'Saltinho', 'Salto Veloso', 'Sang??o', 'Santa Cec??lia', 'Santa Helena', 'Santa Rosa de Lima', 'Santa Rosa do Sul', 'Santa Terezinha', 'Santa Terezinha do Progresso', 'Santiago do Sul', 'Santo Amaro da Imperatriz', 'Saudades', 'Schroeder', 'Seara', 'Serra Alta', 'Sider??polis', 'Sombrio', 'Sul Brasil', 'S??o Bento do Sul', 'S??o Bernardino', 'S??o Bonif??cio', 'S??o Carlos', 'S??o Crist??v??o do Sul', 'S??o Domingos', 'S??o Francisco do Sul', 'S??o Joaquim', 'S??o Jos??', 'S??o Jos?? do Cedro', 'S??o Jos?? do Cerrito', 'S??o Jo??o Batista', 'S??o Jo??o do Itaperi??', 'S??o Jo??o do Oeste', 'S??o Jo??o do Sul', 'S??o Louren??o do Oeste', 'S??o Ludgero', 'S??o Martinho', 'S??o Miguel da Boa Vista', 'S??o Miguel do Oeste', 'S??o Pedro de Alc??ntara', 'Tai??', 'Tangar??', 'Tigrinhos', 'Tijucas', 'Timb?? do Sul', 'Timb??', 'Timb?? Grande', 'Treviso', 'Treze T??lias', 'Treze de Maio', 'Trombudo Central', 'Tr??s Barras', 'Tubar??o', 'Tun??polis', 'Turvo', 'Uni??o do Oeste', 'Urubici', 'Urupema', 'Urussanga', 'Vargem', 'Vargem Bonita', 'Varge??o', 'Vidal Ramos', 'Videira', 'Vitor Meireles', 'Witmarsum', 'Xanxer??', 'Xavantina', 'Xaxim', 'Zort??a', '??gua Doce', '??guas Frias', '??guas Mornas', '??guas de Chapec??'],
  PE: ['Abreu e Lima', 'Afogados da Ingazeira', 'Afr??nio', 'Agrestina', 'Alagoinha', 'Alian??a', 'Altinho', 'Amaraji', 'Angelim', 'Araripina', 'Ara??oiaba', 'Arcoverde', 'Barra de Guabiraba', 'Barreiros', 'Belo Jardim', 'Bel??m de Maria', 'Bel??m do S??o Francisco', 'Bet??nia', 'Bezerros', 'Bodoc??', 'Bom Conselho', 'Bom Jardim', 'Bonito', 'Brejinho', 'Brejo da Madre de Deus', 'Brej??o', 'Buenos Aires', 'Bu??que', 'Cabo de Santo Agostinho', 'Cabrob??', 'Cachoeirinha', 'Caet??s', 'Calumbi', 'Cal??ado', 'Camaragibe', 'Camocim de S??o F??lix', 'Camutanga', 'Canhotinho', 'Capoeiras', 'Carnaubeira da Penha', 'Carna??ba', 'Carpina', 'Caruaru', 'Casinhas', 'Catende', 'Cedro', 'Ch?? Grande', 'Ch?? de Alegria', 'Condado', 'Correntes', 'Cort??s', 'Cumaru', 'Cupira', 'Cust??dia', 'Dormentes', 'Escada', 'Exu', 'Feira Nova', 'Fernando de Noronha', 'Ferreiros', 'Flores', 'Floresta', 'Frei Miguelinho', 'Gameleira', 'Garanhuns', 'Gl??ria do Goit??', 'Goiana', 'Granito', 'Gravat??', 'Iati', 'Ibimirim', 'Ibirajuba', 'Igarassu', 'Iguaracy', 'Ilha de Itamarac??', 'Inaj??', 'Ingazeira', 'Ipojuca', 'Ipubi', 'Itacuruba', 'Itamb??', 'Itapetim', 'Itapissuma', 'Itaquitinga', 'Ita??ba', 'Jaboat??o dos Guararapes', 'Jaqueira', 'Jata??ba', 'Jatob??', 'Joaquim Nabuco', 'Jo??o Alfredo', 'Jucati', 'Jupi', 'Jurema', 'Lagoa Grande', 'Lagoa de Itaenga', 'Lagoa do Carro', 'Lagoa do Ouro', 'Lagoa dos Gatos', 'Lajedo', 'Limoeiro', 'Macaparana', 'Machados', 'Manari', 'Maraial', 'Mirandiba', 'Moreil??ndia', 'Moreno', 'Nazar?? da Mata', 'Olinda', 'Orob??', 'Oroc??', 'Ouricuri', 'Palmares', 'Palmeirina', 'Panelas', 'Paranatama', 'Parnamirim', 'Passira', 'Paudalho', 'Paulista', 'Pedra', 'Pesqueira', 'Petrolina', 'Petrol??ndia', 'Pombos', 'Po????o', 'Primavera', 'Quipap??', 'Quixaba', 'Recife', 'Riacho das Almas', 'Ribeir??o', 'Rio Formoso', 'Sair??', 'Salgadinho', 'Salgueiro', 'Salo??', 'Sanhar??', 'Santa Cruz', 'Santa Cruz da Baixa Verde', 'Santa Cruz do Capibaribe', 'Santa Filomena', 'Santa Maria da Boa Vista', 'Santa Maria do Cambuc??', 'Santa Terezinha', 'Serra Talhada', 'Serrita', 'Sert??nia', 'Sirinha??m', 'Solid??o', 'Surubim', 'S??o Benedito do Sul', 'S??o Bento do Una', 'S??o Caitano', 'S??o Joaquim do Monte', 'S??o Jos?? da Coroa Grande', 'S??o Jos?? do Belmonte', 'S??o Jos?? do Egito', 'S??o Jo??o', 'S??o Louren??o da Mata', 'S??o Vicente F??rrer', 'Tabira', 'Tacaimb??', 'Tacaratu', 'Tamandar??', 'Taquaritinga do Norte', 'Terezinha', 'Terra Nova', 'Timba??ba', 'Toritama', 'Tracunha??m', 'Trindade', 'Triunfo', 'Tupanatinga', 'Tuparetama', 'Venturosa', 'Verdejante', 'Vertente do L??rio', 'Vertentes', 'Vic??ncia', 'Vit??ria de Santo Ant??o', 'Xex??u', '??gua Preta', '??guas Belas'],
  TO: ['Abreul??ndia', 'Aguiarn??polis', 'Alian??a do Tocantins', 'Almas', 'Alvorada', 'Anan??s', 'Angico', 'Aparecida do Rio Negro', 'Aragominas', 'Araguacema', 'Araguan??', 'Araguatins', 'Aragua??u', 'Aragua??na', 'Arapoema', 'Arraias', 'Augustin??polis', 'Aurora do Tocantins', 'Axix?? do Tocantins', 'Baba??ul??ndia', 'Bandeirantes do Tocantins', 'Barra do Ouro', 'Barrol??ndia', 'Bernardo Say??o', 'Bom Jesus do Tocantins', 'Brasil??ndia do Tocantins', 'Brejinho de Nazar??', 'Buriti do Tocantins', 'Cachoeirinha', 'Campos Lindos', 'Cariri do Tocantins', 'Carmol??ndia', 'Carrasco Bonito', 'Caseara', 'Centen??rio', 'Chapada da Natividade', 'Chapada de Areia', 'Colinas do Tocantins', 'Colm??ia', 'Combinado', 'Concei????o do Tocantins', 'Couto Magalh??es', 'Cristal??ndia', 'Crix??s do Tocantins', 'Darcin??polis', 'Dian??polis', 'Divin??polis do Tocantins', 'Dois Irm??os do Tocantins', 'Duer??', 'Esperantina', 'Figueir??polis', 'Filad??lfia', 'Formoso do Araguaia', 'F??tima', 'Goianorte', 'Goiatins', 'Guara??', 'Gurupi', 'Ipueiras', 'Itacaj??', 'Itaguatins', 'Itapiratins', 'Itapor?? do Tocantins', 'Ja?? do Tocantins', 'Juarina', 'Lagoa da Confus??o', 'Lagoa do Tocantins', 'Lajeado', 'Lavandeira', 'Lizarda', 'Luzin??polis', 'Marian??polis do Tocantins', 'Mateiros', 'Mauril??ndia do Tocantins', 'Miracema do Tocantins', 'Miranorte', 'Monte Santo do Tocantins', 'Monte do Carmo', 'Muricil??ndia', 'Natividade', 'Nazar??', 'Nova Olinda', 'Nova Rosal??ndia', 'Novo Acordo', 'Novo Alegre', 'Novo Jardim', 'Oliveira de F??tima', 'Palmas', 'Palmeirante', 'Palmeiras do Tocantins', 'Palmeir??polis', 'Paran??', 'Para??so do Tocantins', "Pau D'Arco", 'Pedro Afonso', 'Peixe', 'Pequizeiro', 'Pindorama do Tocantins', 'Piraqu??', 'Pium', 'Ponte Alta do Bom Jesus', 'Ponte Alta do Tocantins', 'Porto Alegre do Tocantins', 'Porto Nacional', 'Praia Norte', 'Presidente Kennedy', 'Pugmil', 'Recursol??ndia', 'Riachinho', 'Rio Sono', 'Rio da Concei????o', 'Rio dos Bois', 'Sampaio', 'Sandol??ndia', 'Santa F?? do Araguaia', 'Santa Maria do Tocantins', 'Santa Rita do Tocantins', 'Santa Rosa do Tocantins', 'Santa Tereza do Tocantins', 'Santa Terezinha do Tocantins', 'Silvan??polis', 'Sucupira', 'S??o Bento do Tocantins', 'S??o F??lix do Tocantins', 'S??o Miguel do Tocantins', 'S??o Salvador do Tocantins', 'S??o Sebasti??o do Tocantins', 'S??o Val??rio', 'S??tio Novo do Tocantins', 'Taboc??o', 'Taguatinga', 'Taipas do Tocantins', 'Talism??', 'Tocantin??polis', 'Tocant??nia', 'Tupirama', 'Tupiratins', 'Wanderl??ndia', 'Xambio??'],
  RN: ['Acari', 'Afonso Bezerra', 'Alexandria', 'Almino Afonso', 'Alto do Rodrigues', 'Angicos', 'Ant??nio Martins', 'Apodi', 'Areia Branca', 'Ar??s', 'A??u', 'Bara??na', 'Barcelona', 'Ba??a Formosa', 'Bento Fernandes', 'Bod??', 'Bom Jesus', 'Brejinho', 'Caic??', 'Cai??ara do Norte', 'Cai??ara do Rio do Vento', 'Campo Grande', 'Campo Redondo', 'Canguaretama', 'Cara??bas', 'Carnaubais', 'Carna??ba dos Dantas', 'Cear??-Mirim', 'Cerro Cor??', 'Coronel Ezequiel', 'Coronel Jo??o Pessoa', 'Cruzeta', 'Currais Novos', 'Doutor Severiano', 'Encanto', 'Equador', 'Esp??rito Santo', 'Extremoz', 'Felipe Guerra', 'Fernando Pedroza', 'Flor??nia', 'Francisco Dantas', 'Frutuoso Gomes', 'Galinhos', 'Goianinha', 'Governador Dix-Sept Rosado', 'Grossos', 'Guamar??', 'Ielmo Marinho', 'Ipangua??u', 'Ipueira', 'Itaj??', 'Ita??', 'Janda??ra', 'Jandu??s', 'Janu??rio Cicco', 'Japi', 'Jardim de Angicos', 'Jardim de Piranhas', 'Jardim do Serid??', 'Ja??an??', 'Jos?? da Penha', 'Jo??o C??mara', 'Jo??o Dias', 'Jucurutu', 'Jundi??', 'Lagoa Nova', 'Lagoa Salgada', "Lagoa d'Anta", 'Lagoa de Pedras', 'Lagoa de Velhos', 'Lajes', 'Lajes Pintadas', 'Lucr??cia', 'Lu??s Gomes', 'Macau', 'Maca??ba', 'Major Sales', 'Marcelino Vieira', 'Martins', 'Maxaranguape', 'Messias Targino', 'Montanhas', 'Monte Alegre', 'Monte das Gameleiras', 'Mossor??', 'Natal', 'Nova Cruz', 'N??sia Floresta', "Olho d'??gua do Borges", 'Ouro Branco', 'Paran??', 'Parazinho', 'Para??', 'Parelhas', 'Parnamirim', 'Passa e Fica', 'Passagem', 'Patu', 'Pau dos Ferros', 'Pedra Grande', 'Pedra Preta', 'Pedro Avelino', 'Pedro Velho', 'Pend??ncias', 'Pil??es', 'Portalegre', 'Porto do Mangue', 'Po??o Branco', 'Pureza', 'Rafael Fernandes', 'Rafael Godeiro', 'Riacho da Cruz', 'Riacho de Santana', 'Riachuelo', 'Rio do Fogo', 'Rodolfo Fernandes', 'Ruy Barbosa', 'Santa Cruz', 'Santa Maria', 'Santana do Matos', 'Santana do Serid??', 'Santo Ant??nio', 'Senador El??i de Souza', 'Senador Georgino Avelino', 'Serra Caiada', 'Serra Negra do Norte', 'Serra de S??o Bento', 'Serra do Mel', 'Serrinha', 'Serrinha dos Pintos', 'Severiano Melo', 'S??o Bento do Norte', 'S??o Bento do Trair??', 'S??o Fernando', 'S??o Francisco do Oeste', 'S??o Gon??alo do Amarante', 'S??o Jos?? de Mipibu', 'S??o Jos?? do Campestre', 'S??o Jos?? do Serid??', 'S??o Jo??o do Sabugi', 'S??o Miguel', 'S??o Miguel do Gostoso', 'S??o Paulo do Potengi', 'S??o Pedro', 'S??o Rafael', 'S??o Tom??', 'S??o Vicente', 'S??tio Novo', 'Taboleiro Grande', 'Taipu', 'Tangar??', 'Tenente Ananias', 'Tenente Laurentino Cruz', 'Tibau', 'Tibau do Sul', 'Timba??ba dos Batistas', 'Touros', 'Triunfo Potiguar', 'Umarizal', 'Upanema', 'Venha-Ver', 'Vera Cruz', 'Vila Flor', 'Vi??osa', 'V??rzea', '??gua Nova'],
  PI: ['Acau??', 'Agricol??ndia', 'Alagoinha do Piau??', 'Alegrete do Piau??', 'Alto Long??', 'Altos', 'Alvorada do Gurgu??ia', 'Amarante', 'Angical do Piau??', 'Ant??nio Almeida', 'An??sio de Abreu', 'Aroazes', 'Aroeiras do Itaim', 'Arraial', 'Assun????o do Piau??', 'Avelino Lopes', 'Baixa Grande do Ribeiro', "Barra D'Alc??ntara", 'Barras', 'Barreiras do Piau??', 'Barro Duro', 'Batalha', 'Bela Vista do Piau??', 'Bel??m do Piau??', 'Beneditinos', 'Bertol??nia', 'Bet??nia do Piau??', 'Boa Hora', 'Bocaina', 'Bom Jesus', 'Bom Princ??pio do Piau??', 'Bonfim do Piau??', 'Boqueir??o do Piau??', 'Brasileira', 'Brejo do Piau??', 'Buriti dos Lopes', 'Buriti dos Montes', 'Cabeceiras do Piau??', 'Cajazeiras do Piau??', 'Cajueiro da Praia', 'Caldeir??o Grande do Piau??', 'Campinas do Piau??', 'Campo Alegre do Fidalgo', 'Campo Grande do Piau??', 'Campo Largo do Piau??', 'Campo Maior', 'Canavieira', 'Canto do Buriti', 'Capit??o Gerv??sio Oliveira', 'Capit??o de Campos', 'Caracol', 'Cara??bas do Piau??', 'Caridade do Piau??', 'Castelo do Piau??', 'Caxing??', 'Cocal', 'Cocal de Telha', 'Cocal dos Alves', 'Coivaras', 'Col??nia do Gurgu??ia', 'Col??nia do Piau??', 'Concei????o do Canind??', 'Coronel Jos?? Dias', 'Corrente', 'Cristal??ndia do Piau??', 'Cristino Castro', 'Curimat??', 'Currais', 'Curral Novo do Piau??', 'Curralinhos', 'Demerval Lob??o', 'Dirceu Arcoverde', 'Dom Expedito Lopes', 'Dom Inoc??ncio', 'Domingos Mour??o', 'Elesb??o Veloso', 'Eliseu Martins', 'Esperantina', 'Fartura do Piau??', 'Flores do Piau??', 'Floresta do Piau??', 'Floriano', 'Francin??polis', 'Francisco Ayres', 'Francisco Macedo', 'Francisco Santos', 'Fronteiras', 'Geminiano', 'Gilbu??s', 'Guadalupe', 'Guaribas', 'Hugo Napole??o', 'Ilha Grande', 'Inhuma', 'Ipiranga do Piau??', 'Isa??as Coelho', 'Itain??polis', 'Itaueira', 'Jacobina do Piau??', 'Jaic??s', 'Jardim do Mulato', 'Jatob?? do Piau??', 'Jerumenha', 'Joaquim Pires', 'Joca Marques', 'Jos?? de Freitas', 'Jo??o Costa', 'Juazeiro do Piau??', 'Jurema', 'J??lio Borges', 'Lagoa Alegre', 'Lagoa de S??o Francisco', 'Lagoa do Barro do Piau??', 'Lagoa do Piau??', 'Lagoa do S??tio', 'Lagoinha do Piau??', 'Landri Sales', 'Luzil??ndia', 'Lu??s Correia', 'Madeiro', 'Manoel Em??dio', 'Marcol??ndia', 'Marcos Parente', 'Massap?? do Piau??', 'Matias Ol??mpio', 'Miguel Alves', 'Miguel Le??o', 'Milton Brand??o', 'Monsenhor Gil', 'Monsenhor Hip??lito', 'Monte Alegre do Piau??', 'Morro Cabe??a no Tempo', 'Morro do Chap??u do Piau??', 'Murici dos Portelas', 'Nazar?? do Piau??', 'Naz??ria', 'Nossa Senhora de Nazar??', 'Nossa Senhora dos Rem??dios', 'Nova Santa Rita', 'Novo Oriente do Piau??', 'Novo Santo Ant??nio', 'Oeiras', "Olho D'??gua do Piau??", 'Padre Marcos', 'Paes Landim', 'Paje?? do Piau??', 'Palmeira do Piau??', 'Palmeirais', 'Paquet??', 'Parnagu??', 'Parna??ba', 'Passagem Franca do Piau??', 'Patos do Piau??', "Pau D'Arco do Piau??", 'Paulistana', 'Pavussu', 'Pedro II', 'Pedro Laurentino', 'Picos', 'Pimenteiras', 'Pio IX', 'Piracuruca', 'Piripiri', 'Porto', 'Porto Alegre do Piau??', 'Prata do Piau??', 'Queimada Nova', 'Reden????o do Gurgu??ia', 'Regenera????o', 'Riacho Frio', 'Ribeira do Piau??', 'Ribeiro Gon??alves', 'Rio Grande do Piau??', 'Santa Cruz do Piau??', 'Santa Cruz dos Milagres', 'Santa Filomena', 'Santa Luz', 'Santa Rosa do Piau??', 'Santana do Piau??', 'Santo Ant??nio de Lisboa', 'Santo Ant??nio dos Milagres', 'Santo In??cio do Piau??', 'Sebasti??o Barros', 'Sebasti??o Leal', 'Sigefredo Pacheco', 'Simpl??cio Mendes', 'Sim??es', 'Socorro do Piau??', 'Sussuapara', 'S??o Braz do Piau??', 'S??o Francisco de Assis do Piau??', 'S??o Francisco do Piau??', 'S??o F??lix do Piau??', 'S??o Gon??alo do Gurgu??ia', 'S??o Gon??alo do Piau??', 'S??o Jos?? do Divino', 'S??o Jos?? do Peixe', 'S??o Jos?? do Piau??', 'S??o Jo??o da Canabrava', 'S??o Jo??o da Fronteira', 'S??o Jo??o da Serra', 'S??o Jo??o da Varjota', 'S??o Jo??o do Arraial', 'S??o Jo??o do Piau??', 'S??o Juli??o', 'S??o Louren??o do Piau??', 'S??o Luis do Piau??', 'S??o Miguel da Baixa Grande', 'S??o Miguel do Fidalgo', 'S??o Miguel do Tapuio', 'S??o Pedro do Piau??', 'S??o Raimundo Nonato', 'Tamboril do Piau??', 'Tanque do Piau??', 'Teresina', 'Uni??o', 'Uru??u??', 'Valen??a do Piau??', 'Vera Mendes', 'Vila Nova do Piau??', 'V??rzea Branca', 'V??rzea Grande', 'Wall Ferraz', '??gua Branca'],
  RS: ['Acegu??', 'Agudo', 'Ajuricaba', 'Alecrim', 'Alegrete', 'Alegria', 'Almirante Tamandar?? do Sul', 'Alpestre', 'Alto Alegre', 'Alto Feliz', 'Alvorada', 'Amaral Ferrador', 'Ametista do Sul', 'Andr?? da Rocha', 'Anta Gorda', 'Ant??nio Prado', 'Arambar??', 'Araric??', 'Aratiba', 'Arroio Grande', 'Arroio do Meio', 'Arroio do Padre', 'Arroio do Sal', 'Arroio do Tigre', 'Arroio dos Ratos', 'Arvorezinha', 'Augusto Pestana', 'Bag??', 'Balne??rio Pinhal', 'Barra Funda', 'Barra do Guarita', 'Barra do Quara??', 'Barra do Ribeiro', 'Barra do Rio Azul', 'Barrac??o', 'Barros Cassal', 'Bar??o', 'Bar??o de Cotegipe', 'Bar??o do Triunfo', 'Benjamin Constant do Sul', 'Bento Gon??alves', 'Boa Vista das Miss??es', 'Boa Vista do Buric??', 'Boa Vista do Cadeado', 'Boa Vista do Incra', 'Boa Vista do Sul', 'Bom Jesus', 'Bom Princ??pio', 'Bom Progresso', 'Bom Retiro do Sul', 'Boqueir??o do Le??o', 'Bossoroca', 'Bozano', 'Braga', 'Brochier', 'Buti??', 'Cacequi', 'Cachoeira do Sul', 'Cachoeirinha', 'Cacique Doble', 'Caibat??', 'Cai??ara', 'Camaqu??', 'Camargo', 'Cambar?? do Sul', 'Campestre da Serra', 'Campina das Miss??es', 'Campinas do Sul', 'Campo Bom', 'Campo Novo', 'Campos Borges', 'Candel??ria', 'Candiota', 'Canela', 'Cangu??u', 'Canoas', 'Canudos do Vale', 'Capela de Santana', 'Capit??o', 'Capivari do Sul', 'Cap??o Bonito do Sul', 'Cap??o da Canoa', 'Cap??o do Cip??', 'Cap??o do Le??o', 'Carazinho', 'Cara??', 'Carlos Barbosa', 'Carlos Gomes', 'Casca', 'Caseiros', 'Catu??pe', 'Caxias do Sul', 'Ca??apava do Sul', 'Centen??rio', 'Cerrito', 'Cerro Branco', 'Cerro Grande', 'Cerro Grande do Sul', 'Cerro Largo', 'Chapada', 'Charqueadas', 'Charrua', 'Chiapetta', 'Chuvisca', 'Chu??', 'Cidreira', 'Cir??aco', 'Colinas', 'Colorado', 'Condor', 'Constantina', 'Coqueiro Baixo', 'Coqueiros do Sul', 'Coronel Barros', 'Coronel Bicaco', 'Coronel Pilar', 'Cotipor??', 'Coxilha', 'Crissiumal', 'Cristal', 'Cristal do Sul', 'Cruz Alta', 'Cruzaltense', 'Cruzeiro do Sul', 'C??ndido God??i', 'David Canabarro', 'Derrubadas', 'Dezesseis de Novembro', 'Dilermando de Aguiar', 'Dois Irm??os', 'Dois Irm??os das Miss??es', 'Dois Lajeados', 'Dom Feliciano', 'Dom Pedrito', 'Dom Pedro de Alc??ntara', 'Dona Francisca', 'Doutor Maur??cio Cardoso', 'Doutor Ricardo', 'Eldorado do Sul', 'Encantado', 'Encruzilhada do Sul', 'Engenho Velho', 'Entre Rios do Sul', 'Entre-Iju??s', 'Erebango', 'Erechim', 'Ernestina', 'Erval Grande', 'Erval Seco', 'Esmeralda', 'Esperan??a do Sul', 'Espumoso', 'Esta????o', 'Esteio', 'Estrela', 'Estrela Velha', 'Est??ncia Velha', 'Eug??nio de Castro', 'Fagundes Varela', 'Farroupilha', 'Faxinal do Soturno', 'Faxinalzinho', 'Fazenda Vilanova', 'Feliz', 'Flores da Cunha', 'Floriano Peixoto', 'Fontoura Xavier', 'Formigueiro', 'Forquetinha', 'Fortaleza dos Valos', 'Frederico Westphalen', 'Garibaldi', 'Garruchos', 'Gaurama', 'General C??mara', 'Gentil', 'Get??lio Vargas', 'Giru??', 'Glorinha', 'Gramado', 'Gramado Xavier', 'Gramado dos Loureiros', 'Gravata??', 'Guabiju', 'Guapor??', 'Guarani das Miss??es', 'Gua??ba', 'Harmonia', 'Herval', 'Herveiras', 'Horizontina', 'Hulha Negra', 'Humait??', 'Ibarama', 'Ibia????', 'Ibiraiaras', 'Ibirapuit??', 'Ibirub??', 'Igrejinha', 'Iju??', 'Il??polis', 'Imb??', 'Imigrante', 'Independ??ncia', 'Inhacor??', 'Ipiranga do Sul', 'Ip??', 'Ira??', 'Itaara', 'Itacurubi', 'Itapuca', 'Itaqui', 'Itati', 'Itatiba do Sul', 'Ivor??', 'Ivoti', 'Jaboticaba', 'Jacuizinho', 'Jacutinga', 'Jaguari', 'Jaguar??o', 'Jaquirana', 'Jari', 'J??ia', 'J??lio de Castilhos', 'Lagoa Bonita do Sul', 'Lagoa Vermelha', 'Lagoa dos Tr??s Cantos', 'Lago??o', 'Lajeado', 'Lajeado do Bugre', 'Lavras do Sul', 'Liberato Salzano', 'Lindolfo Collor', 'Linha Nova', 'Machadinho', 'Mampituba', 'Manoel Viana', 'Maquin??', 'Marat??', 'Marau', 'Marcelino Ramos', 'Mariana Pimentel', 'Mariano Moro', 'Marques de Souza', 'Mata', 'Mato Castelhano', 'Mato Leit??o', 'Mato Queimado', 'Maximiliano de Almeida', 'Ma??ambar??', 'Minas do Le??o', 'Miragua??', 'Montauri', 'Monte Alegre dos Campos', 'Monte Belo do Sul', 'Montenegro', 'Morma??o', 'Morrinhos do Sul', 'Morro Redondo', 'Morro Reuter', 'Mostardas', 'Muitos Cap??es', 'Muliterno', 'Mu??um', 'Nicolau Vergueiro', 'Nonoai', 'Nova Alvorada', 'Nova Ara????', 'Nova Bassano', 'Nova Boa Vista', 'Nova Br??scia', 'Nova Candel??ria', 'Nova Esperan??a do Sul', 'Nova Hartz', 'Nova Palma', 'Nova Petr??polis', 'Nova Prata', 'Nova P??dua', 'Nova Ramada', 'Nova Roma do Sul', 'Nova Santa Rita', 'Novo Barreiro', 'Novo Cabrais', 'Novo Hamburgo', 'Novo Machado', 'Novo Tiradentes', 'Novo Xingu', 'N??o-Me-Toque', 'Os??rio', 'Paim Filho', 'Palmares do Sul', 'Palmeira das Miss??es', 'Palmitinho', 'Panambi', 'Pantano Grande', 'Para??', 'Para??so do Sul', 'Pareci Novo', 'Parob??', 'Passa Sete', 'Passo Fundo', 'Passo do Sobrado', 'Paulo Bento', 'Paverama', 'Pedras Altas', 'Pedro Os??rio', 'Peju??ara', 'Pelotas', 'Picada Caf??', 'Pinhal', 'Pinhal Grande', 'Pinhal da Serra', 'Pinheirinho do Vale', 'Pinheiro Machado', 'Pinto Bandeira', 'Pirap??', 'Piratini', 'Planalto', 'Ponte Preta', 'Pont??o', 'Porto Alegre', 'Porto Lucena', 'Porto Mau??', 'Porto Vera Cruz', 'Porto Xavier', 'Port??o', 'Pouso Novo', 'Po??o das Antas', 'Presidente Lucena', 'Progresso', 'Prot??sio Alves', 'Putinga', 'Quara??', 'Quatro Irm??os', 'Quevedos', 'Quinze de Novembro', 'Redentora', 'Relvado', 'Restinga S??ca', 'Rio Grande', 'Rio Pardo', 'Rio dos ??ndios', 'Riozinho', 'Roca Sales', 'Rodeio Bonito', 'Rolador', 'Rolante', 'Ronda Alta', 'Rondinha', 'Roque Gonzales', 'Ros??rio do Sul', 'Sagrada Fam??lia', 'Saldanha Marinho', 'Salto do Jacu??', 'Salvador das Miss??es', 'Salvador do Sul', 'Sananduva', "Sant'Ana do Livramento", 'Santa B??rbara do Sul', 'Santa Cec??lia do Sul', 'Santa Clara do Sul', 'Santa Cruz do Sul', 'Santa Margarida do Sul', 'Santa Maria', 'Santa Maria do Herval', 'Santa Rosa', 'Santa Tereza', 'Santa Vit??ria do Palmar', 'Santana da Boa Vista', 'Santiago', 'Santo Ant??nio da Patrulha', 'Santo Ant??nio das Miss??es', 'Santo Ant??nio do Palma', 'Santo Ant??nio do Planalto', 'Santo Augusto', 'Santo Cristo', 'Santo Expedito do Sul', 'Santo ??ngelo', 'Sapiranga', 'Sapucaia do Sul', 'Sarandi', 'Seberi', 'Sede Nova', 'Segredo', 'Selbach', 'Senador Salgado Filho', 'Sentinela do Sul', 'Serafina Corr??a', 'Sert??o', 'Sert??o Santana', 'Sete de Setembro', 'Severiano de Almeida', 'Silveira Martins', 'Sinimbu', 'Sobradinho', 'Soledade', 'S??o Borja', 'S??o Domingos do Sul', 'S??o Francisco de Assis', 'S??o Francisco de Paula', 'S??o Gabriel', 'S??o Jer??nimo', 'S??o Jorge', 'S??o Jos?? das Miss??es', 'S??o Jos?? do Herval', 'S??o Jos?? do Hort??ncio', 'S??o Jos?? do Inhacor??', 'S??o Jos?? do Norte', 'S??o Jos?? do Ouro', 'S??o Jos?? do Sul', 'S??o Jos?? dos Ausentes', 'S??o Jo??o da Urtiga', 'S??o Jo??o do Pol??sine', 'S??o Leopoldo', 'S??o Louren??o do Sul', 'S??o Luiz Gonzaga', 'S??o Marcos', 'S??o Martinho', 'S??o Martinho da Serra', 'S??o Miguel das Miss??es', 'S??o Nicolau', 'S??o Paulo das Miss??es', 'S??o Pedro da Serra', 'S??o Pedro das Miss??es', 'S??o Pedro do Buti??', 'S??o Pedro do Sul', 'S??o Sebasti??o do Ca??', 'S??o Sep??', 'S??o Valentim', 'S??o Valentim do Sul', 'S??o Val??rio do Sul', 'S??o Vendelino', 'S??o Vicente do Sul', 'S??rio', 'Taba??', 'Tapejara', 'Tapera', 'Tapes', 'Taquara', 'Taquari', 'Taquaru??u do Sul', 'Tavares', 'Tenente Portela', 'Terra de Areia', 'Teut??nia', 'Tio Hugo', 'Tiradentes do Sul', 'Toropi', 'Torres', 'Tramanda??', 'Travesseiro', 'Trindade do Sul', 'Triunfo', 'Tr??s Arroios', 'Tr??s Cachoeiras', 'Tr??s Coroas', 'Tr??s Forquilhas', 'Tr??s Palmeiras', 'Tr??s Passos', 'Tr??s de Maio', 'Tucunduva', 'Tunas', 'Tupanci do Sul', 'Tupanciret??', 'Tupandi', 'Tuparendi', 'Turu??u', 'Ubiretama', 'Unistalda', 'Uni??o da Serra', 'Uruguaiana', 'Vacaria', 'Vale Real', 'Vale Verde', 'Vale do Sol', 'Vanini', 'Ven??ncio Aires', 'Vera Cruz', 'Veran??polis', 'Vespasiano Corr??a', 'Viadutos', 'Viam??o', 'Vicente Dutra', 'Victor Graeff', 'Vila Flores', 'Vila L??ngaro', 'Vila Maria', 'Vila Nova do Sul', 'Vista Alegre', 'Vista Alegre do Prata', 'Vista Ga??cha', 'Vit??ria das Miss??es', 'Westf??lia', 'Xangri-l??', '??gua Santa', '??urea'],
  MT: ['Acorizal', 'Alta Floresta', 'Alto Araguaia', 'Alto Boa Vista', 'Alto Gar??as', 'Alto Paraguai', 'Alto Taquari', 'Apiac??s', 'Araguaiana', 'Araguainha', 'Araputanga', 'Aren??polis', 'Aripuan??', 'Barra do Bugres', 'Barra do Gar??as', 'Bar??o de Melga??o', 'Bom Jesus do Araguaia', 'Brasnorte', 'Campin??polis', 'Campo Novo do Parecis', 'Campo Verde', 'Campos de J??lio', 'Canabrava do Norte', 'Canarana', 'Carlinda', 'Castanheira', 'Chapada dos Guimar??es', 'Cl??udia', 'Cocalinho', 'Colniza', 'Col??der', 'Comodoro', 'Confresa', "Conquista D'Oeste", 'Cotrigua??u', 'Cuiab??', 'Curvel??ndia', 'C??ceres', 'Denise', 'Diamantino', 'Dom Aquino', 'Feliz Natal', "Figueir??polis D'Oeste", 'Ga??cha do Norte', 'General Carneiro', "Gl??ria D'Oeste", 'Guarant?? do Norte', 'Guiratinga', 'Indiava??', 'Ipiranga do Norte', 'Itanhang??', 'Ita??ba', 'Itiquira', 'Jaciara', 'Jangada', 'Jauru', 'Juara', 'Juruena', 'Juscimeira', 'Ju??na', "Lambari D'Oeste", 'Lucas do Rio Verde', 'Luciara', 'Marcel??ndia', 'Matup??', "Mirassol d'Oeste", 'Nobres', 'Nortel??ndia', 'Nossa Senhora do Livramento', 'Nova Bandeirantes', 'Nova Brasil??ndia', 'Nova Cana?? do Norte', 'Nova Guarita', 'Nova Lacerda', 'Nova Maril??ndia', 'Nova Maring??', 'Nova Monte Verde', 'Nova Mutum', 'Nova Nazar??', 'Nova Ol??mpia', 'Nova Santa Helena', 'Nova Ubirat??', 'Nova Xavantina', 'Novo Horizonte do Norte', 'Novo Mundo', 'Novo Santo Ant??nio', 'Novo S??o Joaquim', 'Paranatinga', 'Parana??ta', 'Pedra Preta', 'Peixoto de Azevedo', 'Planalto da Serra', 'Pocon??', 'Pontal do Araguaia', 'Ponte Branca', 'Pontes e Lacerda', 'Porto Alegre do Norte', 'Porto Esperidi??o', 'Porto Estrela', 'Porto dos Ga??chos', 'Poxor??u', 'Primavera do Leste', 'Quer??ncia', 'Reserva do Caba??al', 'Ribeir??o Cascalheira', 'Ribeir??ozinho', 'Rio Branco', 'Rondol??ndia', 'Rondon??polis', 'Ros??rio Oeste', 'Salto do C??u', 'Santa Carmem', 'Santa Cruz do Xingu', 'Santa Rita do Trivelato', 'Santa Terezinha', 'Santo Afonso', 'Santo Ant??nio do Leste', 'Santo Ant??nio do Leverger', 'Sapezal', 'Serra Nova Dourada', 'Sinop', 'Sorriso', 'S??o F??lix do Araguaia', 'S??o Jos?? do Povo', 'S??o Jos?? do Rio Claro', 'S??o Jos?? do Xingu', 'S??o Jos?? dos Quatro Marcos', 'S??o Pedro da Cipa', 'Tabapor??', 'Tangar?? da Serra', 'Tapurah', 'Terra Nova do Norte', 'Tesouro', 'Torixor??u', 'Uni??o do Sul', 'Vale de S??o Domingos', 'Vera', 'Vila Bela da Sant??ssima Trindade', 'Vila Rica', 'V??rzea Grande', '??gua Boa'],
  AC: ['Acrel??ndia', 'Assis Brasil', 'Brasil??ia', 'Bujari', 'Capixaba', 'Cruzeiro do Sul', 'Epitaciol??ndia', 'Feij??', 'Jord??o', 'Manoel Urbano', 'Marechal Thaumaturgo', 'M??ncio Lima', 'Pl??cido de Castro', 'Porto Acre', 'Porto Walter', 'Rio Branco', 'Rodrigues Alves', 'Santa Rosa do Purus', 'Sena Madureira', 'Senador Guiomard', 'Tarauac??', 'Xapuri'],
  SP: ['Adamantina', 'Adolfo', 'Agua??', 'Agudos', 'Alambari', 'Alfredo Marcondes', 'Altair', 'Altin??polis', 'Alto Alegre', 'Alum??nio', 'Alvinl??ndia', 'Americana', 'Amparo', 'Am??rico Brasiliense', 'Am??rico de Campos', 'Anal??ndia', 'Andradina', 'Angatuba', 'Anhembi', 'Anhumas', 'Aparecida', "Aparecida d'Oeste", 'Apia??', 'Aramina', 'Arandu', 'Arape??', 'Araraquara', 'Araras', 'Ara??ariguama', 'Ara??atuba', 'Ara??oiaba da Serra', 'Arco-??ris', 'Arealva', 'Areias', 'Arei??polis', 'Ariranha', 'Artur Nogueira', 'Aruj??', 'Asp??sia', 'Assis', 'Atibaia', 'Auriflama', 'Avanhandava', 'Avar??', 'Ava??', 'Bady Bassitt', 'Balbinos', 'Bananal', 'Barbosa', 'Bariri', 'Barra Bonita', 'Barra do Chap??u', 'Barra do Turvo', 'Barretos', 'Barrinha', 'Barueri', 'Bar??o de Antonina', 'Bastos', 'Batatais', 'Bauru', 'Bebedouro', 'Bento de Abreu', 'Bernardino de Campos', 'Bertioga', 'Bilac', 'Birigui', 'Biritiba Mirim', 'Boa Esperan??a do Sul', 'Bocaina', 'Bofete', 'Boituva', 'Bom Jesus dos Perd??es', 'Bom Sucesso de Itarar??', 'Borac??ia', 'Borborema', 'Borebi', 'Bor??', 'Botucatu', 'Bragan??a Paulista', 'Bra??na', 'Brejo Alegre', 'Brodowski', 'Brotas', 'Buri', 'Buritama', 'Buritizal', 'B??lsamo', 'Cabre??va', 'Cabr??lia Paulista', 'Cachoeira Paulista', 'Caconde', 'Cafel??ndia', 'Caiabu', 'Caieiras', 'Caiu??', 'Cajamar', 'Cajati', 'Cajobi', 'Cajuru', 'Campina do Monte Alegre', 'Campinas', 'Campo Limpo Paulista', 'Campos Novos Paulista', 'Campos do Jord??o', 'Canan??ia', 'Canas', 'Canitar', 'Capela do Alto', 'Capivari', 'Cap??o Bonito', 'Caraguatatuba', 'Carapicu??ba', 'Cardoso', 'Casa Branca', 'Castilho', 'Catanduva', 'Catigu??', 'Ca??apava', 'Cedral', 'Cerqueira C??sar', 'Cerquilho', 'Ces??rio Lange', 'Charqueada', 'Chavantes', 'Clementina', 'Colina', 'Col??mbia', 'Conchal', 'Conchas', 'Cordeir??polis', 'Coroados', 'Coronel Macedo', 'Corumbata??', 'Cosmorama', 'Cosm??polis', 'Cotia', 'Cravinhos', 'Cristais Paulista', 'Cruzeiro', 'Cruz??lia', 'Cubat??o', 'Cunha', 'C??ssia dos Coqueiros', 'C??ndido Mota', 'C??ndido Rodrigues', 'Descalvado', 'Diadema', 'Dirce Reis', 'Divinol??ndia', 'Dobrada', 'Dois C??rregos', 'Dolcin??polis', 'Dourado', 'Dracena', 'Duartina', 'Dumont', 'Echapor??', 'Eldorado', 'Elias Fausto', 'Elisi??rio', 'Emba??ba', 'Embu das Artes', 'Embu-Gua??u', 'Emilian??polis', 'Engenheiro Coelho', 'Esp??rito Santo do Pinhal', 'Esp??rito Santo do Turvo', 'Estiva Gerbi', "Estrela d'Oeste", 'Estrela do Norte', 'Euclides da Cunha Paulista', 'Fartura', 'Fernando Prestes', 'Fernand??polis', 'Fern??o', 'Ferraz de Vasconcelos', 'Flora Rica', 'Floreal', 'Flor??nea', 'Fl??rida Paulista', 'Franca', 'Francisco Morato', 'Franco da Rocha', 'Gabriel Monteiro', 'Gar??a', 'Gast??o Vidigal', 'Gavi??o Peixoto', 'General Salgado', 'Getulina', 'Glic??rio', 'Guaimb??', 'Guai??ara', 'Guapiara', 'Guapia??u', 'Guaraci', "Guarani d'Oeste", 'Guarant??', 'Guararapes', 'Guararema', 'Guaratinguet??', 'Guara??a??', 'Guare??', 'Guariba', 'Guaruj??', 'Guarulhos', 'Guar??', 'Guatapar??', 'Gua??ra', 'Guzol??ndia', 'G??lia', 'Hercul??ndia', 'Holambra', 'Hortol??ndia', 'Iacanga', 'Iacri', 'Iaras', 'Ibat??', 'Ibirarema', 'Ibir??', 'Ibitinga', 'Ibi??na', 'Ic??m', 'Iep??', 'Igarapava', 'Igarat??', 'Igara??u do Tiet??', 'Iguape', 'Ilha Comprida', 'Ilha Solteira', 'Ilhabela', 'Indaiatuba', 'Indiana', 'Indiapor??', 'In??bia Paulista', 'Ipaussu', 'Iper??', 'Ipe??na', 'Ipigu??', 'Iporanga', 'Ipu??', 'Iracem??polis', 'Irapuru', 'Irapu??', 'Itaber??', 'Itajobi', 'Itaju', 'Itanha??m', 'Itaoca', 'Itapecerica da Serra', 'Itapetininga', 'Itapeva', 'Itapevi', 'Itapira', 'Itapirapu?? Paulista', 'Itaporanga', 'Itapura', 'Itapu??', 'Itaquaquecetuba', 'Itarar??', 'Itariri', 'Itatiba', 'Itatinga', 'Ita??', 'Itirapina', 'Itirapu??', 'Itobi', 'Itu', 'Itupeva', 'Ituverava', 'It??polis', 'Jaborandi', 'Jaboticabal', 'Jacare??', 'Jaci', 'Jacupiranga', 'Jaguari??na', 'Jales', 'Jambeiro', 'Jandira', 'Jardin??polis', 'Jarinu', 'Ja??', 'Jeriquara', 'Joan??polis', 'Jos?? Bonif??cio', 'Jo??o Ramalho', 'Jumirim', 'Jundia??', 'Junqueir??polis', 'Juquitiba', 'Juqui??', 'J??lio Mesquita', 'Lagoinha', 'Laranjal Paulista', 'Lavrinhas', 'Lav??nia', 'Leme', 'Len????is Paulista', 'Limeira', 'Lind??ia', 'Lins', 'Lorena', 'Lourdes', 'Louveira', 'Lucian??polis', 'Luc??lia', 'Luizi??nia', 'Lup??rcio', 'Lut??cia', 'Lu??s Ant??nio', 'Macatuba', 'Macaubal', 'Maced??nia', 'Magda', 'Mairinque', 'Mairipor??', 'Manduri', 'Marab?? Paulista', 'Maraca??', 'Marapoama', 'Marin??polis', 'Mari??polis', 'Martin??polis', 'Mar??lia', 'Mat??o', 'Mau??', 'Mendon??a', 'Meridiano', 'Mes??polis', 'Miguel??polis', 'Mineiros do Tiet??', 'Mira Estrela', 'Miracatu', 'Mirand??polis', 'Mirante do Paranapanema', 'Mirassol', 'Mirassol??ndia', 'Mococa', 'Mogi Gua??u', 'Mogi Mirim', 'Mogi das Cruzes', 'Mombuca', 'Mongagu??', 'Monte Alegre do Sul', 'Monte Alto', 'Monte Apraz??vel', 'Monte Azul Paulista', 'Monte Castelo', 'Monte Mor', 'Monteiro Lobato', 'Mon????es', 'Morro Agudo', 'Morungaba', 'Motuca', 'Murutinga do Sul', 'Nantes', 'Narandiba', 'Natividade da Serra', 'Nazar?? Paulista', 'Neves Paulista', 'Nhandeara', 'Nipo??', 'Nova Alian??a', 'Nova Campina', 'Nova Cana?? Paulista', 'Nova Castilho', 'Nova Europa', 'Nova Granada', 'Nova Guataporanga', 'Nova Independ??ncia', 'Nova Luzit??nia', 'Nova Odessa', 'Novais', 'Novo Horizonte', 'Nuporanga', 'Ocau??u', 'Ol??mpia', 'Onda Verde', 'Oriente', 'Orindi??va', 'Orl??ndia', 'Osasco', 'Oscar Bressane', 'Osvaldo Cruz', 'Ourinhos', 'Ouro Verde', 'Ouroeste', 'Pacaembu', 'Palestina', 'Palmares Paulista', "Palmeira d'Oeste", 'Palmital', 'Panorama', 'Paragua??u Paulista', 'Paraibuna', 'Paranapanema', 'Paranapu??', 'Parapu??', 'Para??so', 'Pardinho', 'Pariquera-A??u', 'Parisi', 'Patroc??nio Paulista', 'Paulic??ia', 'Paulist??nia', 'Paulo de Faria', 'Paul??nia', 'Pederneiras', 'Pedra Bela', 'Pedran??polis', 'Pedregulho', 'Pedreira', 'Pedrinhas Paulista', 'Pedro de Toledo', 'Pen??polis', 'Pereira Barreto', 'Pereiras', 'Peru??be', 'Piacatu', 'Piedade', 'Pilar do Sul', 'Pindamonhangaba', 'Pindorama', 'Pinhalzinho', 'Piquerobi', 'Piquete', 'Piracaia', 'Piracicaba', 'Piraju', 'Piraju??', 'Pirangi', 'Pirapora do Bom Jesus', 'Pirapozinho', 'Pirassununga', 'Piratininga', 'Pitangueiras', 'Planalto', 'Platina', 'Poloni', 'Pomp??ia', 'Ponga??', 'Pontal', 'Pontalinda', 'Pontes Gestal', 'Populina', 'Porangaba', 'Porto Feliz', 'Porto Ferreira', 'Potim', 'Potirendaba', 'Po??', 'Pracinha', 'Prad??polis', 'Praia Grande', 'Prat??nia', 'Presidente Alves', 'Presidente Bernardes', 'Presidente Epit??cio', 'Presidente Prudente', 'Presidente Venceslau', 'Promiss??o', 'Quadra', 'Quat??', 'Queiroz', 'Queluz', 'Quintana', 'Rafard', 'Rancharia', 'Reden????o da Serra', 'Regente Feij??', 'Regin??polis', 'Registro', 'Restinga', 'Ribeira', 'Ribeir??o Bonito', 'Ribeir??o Branco', 'Ribeir??o Corrente', 'Ribeir??o Grande', 'Ribeir??o Pires', 'Ribeir??o Preto', 'Ribeir??o do Sul', 'Ribeir??o dos ??ndios', 'Rifaina', 'Rinc??o', 'Rin??polis', 'Rio Claro', 'Rio Grande da Serra', 'Rio das Pedras', 'Riol??ndia', 'Riversul', 'Rosana', 'Roseira', 'Rubin??ia', 'Rubi??cea', 'Sabino', 'Sagres', 'Sales', 'Sales Oliveira', 'Sales??polis', 'Salmour??o', 'Saltinho', 'Salto', 'Salto Grande', 'Salto de Pirapora', 'Sandovalina', 'Santa Ad??lia', 'Santa Albertina', 'Santa Branca', "Santa B??rbara d'Oeste", "Santa Clara d'Oeste", 'Santa Cruz da Concei????o', 'Santa Cruz da Esperan??a', 'Santa Cruz das Palmeiras', 'Santa Cruz do Rio Pardo', 'Santa Ernestina', 'Santa F?? do Sul', 'Santa Gertrudes', 'Santa Isabel', 'Santa L??cia', 'Santa Maria da Serra', 'Santa Mercedes', "Santa Rita d'Oeste", 'Santa Rita do Passa Quatro', 'Santa Rosa de Viterbo', 'Santa Salete', 'Santana da Ponte Pensa', 'Santana de Parna??ba', 'Santo Anast??cio', 'Santo Andr??', 'Santo Ant??nio da Alegria', 'Santo Ant??nio de Posse', 'Santo Ant??nio do Aracangu??', 'Santo Ant??nio do Jardim', 'Santo Ant??nio do Pinhal', 'Santo Expedito', 'Santos', 'Sant??polis do Aguape??', 'Sarapu??', 'Sarutai??', 'Sebastian??polis do Sul', 'Serra Azul', 'Serra Negra', 'Serrana', 'Sert??ozinho', 'Sete Barras', 'Sever??nia', 'Silveiras', 'Socorro', 'Sorocaba', 'Sud Mennucci', 'Sumar??', 'Suzano', 'Suzan??polis', 'S??o Bento do Sapuca??', 'S??o Bernardo do Campo', 'S??o Caetano do Sul', 'S??o Carlos', 'S??o Francisco', 'S??o Joaquim da Barra', 'S??o Jos?? da Bela Vista', 'S??o Jos?? do Barreiro', 'S??o Jos?? do Rio Pardo', 'S??o Jos?? do Rio Preto', 'S??o Jos?? dos Campos', 'S??o Jo??o da Boa Vista', 'S??o Jo??o das Duas Pontes', 'S??o Jo??o de Iracema', "S??o Jo??o do Pau d'Alho", 'S??o Louren??o da Serra', 'S??o Luiz do Paraitinga', 'S??o Manuel', 'S??o Miguel Arcanjo', 'S??o Paulo', 'S??o Pedro', 'S??o Pedro do Turvo', 'S??o Roque', 'S??o Sebasti??o', 'S??o Sebasti??o da Grama', 'S??o Sim??o', 'S??o Vicente', 'Tabapu??', 'Tabatinga', 'Tabo??o da Serra', 'Taciba', 'Tagua??', 'Taia??u', 'Tai??va', 'Tamba??', 'Tanabi', 'Tapiratiba', 'Tapira??', 'Taquaral', 'Taquaritinga', 'Taquarituba', 'Taquariva??', 'Tarabai', 'Tarum??', 'Tatu??', 'Taubat??', 'Tejup??', 'Teodoro Sampaio', 'Terra Roxa', 'Tiet??', 'Timburi', 'Torre de Pedra', 'Torrinha', 'Trabiju', 'Trememb??', 'Tr??s Fronteiras', 'Tuiuti', 'Tupi Paulista', 'Tup??', 'Turi??ba', 'Turmalina', 'Ubarana', 'Ubatuba', 'Ubirajara', 'Uchoa', 'Uni??o Paulista', 'Uru', 'Urup??s', 'Ur??nia', 'Valentim Gentil', 'Valinhos', 'Valpara??so', 'Vargem', 'Vargem Grande Paulista', 'Vargem Grande do Sul', 'Vera Cruz', 'Vinhedo', 'Viradouro', 'Vista Alegre do Alto', 'Vit??ria Brasil', 'Votorantim', 'Votuporanga', 'V??rzea Paulista', 'Zacarias', '??guas da Prata', '??guas de Lind??ia', '??guas de Santa B??rbara', '??guas de S??o Pedro', '??lvares Florence', '??lvares Machado', '??lvaro de Carvalho', '??leo'],
  ES: ['Afonso Cl??udio', 'Alegre', 'Alfredo Chaves', 'Alto Rio Novo', 'Anchieta', 'Apiac??', 'Aracruz', 'At??lio Vivacqua', 'Baixo Guandu', 'Barra de S??o Francisco', 'Boa Esperan??a', 'Bom Jesus do Norte', 'Brejetuba', 'Cachoeiro de Itapemirim', 'Cariacica', 'Castelo', 'Colatina', 'Concei????o da Barra', 'Concei????o do Castelo', 'Divino de S??o Louren??o', 'Domingos Martins', 'Dores do Rio Preto', 'Ecoporanga', 'Fund??o', 'Governador Lindenberg', 'Guarapari', 'Gua??u??', 'Ibatiba', 'Ibira??u', 'Ibitirama', 'Iconha', 'Irupi', 'Itagua??u', 'Itapemirim', 'Itarana', 'I??na', 'Jaguar??', 'Jer??nimo Monteiro', 'Jo??o Neiva', 'Laranja da Terra', 'Linhares', 'Manten??polis', 'Marata??zes', 'Marechal Floriano', 'Maril??ndia', 'Mimoso do Sul', 'Montanha', 'Mucurici', 'Muniz Freire', 'Muqui', 'Nova Ven??cia', 'Pancas', 'Pedro Can??rio', 'Pinheiros', 'Pi??ma', 'Ponto Belo', 'Presidente Kennedy', 'Rio Bananal', 'Rio Novo do Sul', 'Santa Leopoldina', 'Santa Maria de Jetib??', 'Santa Teresa', 'Serra', 'Sooretama', 'S??o Domingos do Norte', 'S??o Gabriel da Palha', 'S??o Jos?? do Cal??ado', 'S??o Mateus', 'S??o Roque do Cana??', 'Vargem Alta', 'Venda Nova do Imigrante', 'Viana', 'Vila Pav??o', 'Vila Val??rio', 'Vila Velha', 'Vit??ria', '??gua Doce do Norte', '??guia Branca'],
  MA: ['Afonso Cunha', 'Alc??ntara', 'Aldeias Altas', 'Altamira do Maranh??o', 'Alto Alegre do Maranh??o', 'Alto Alegre do Pindar??', 'Alto Parna??ba', 'Amap?? do Maranh??o', 'Amarante do Maranh??o', 'Anajatuba', 'Anapurus', 'Apicum-A??u', 'Araguan??', 'Araioses', 'Arame', 'Arari', 'Axix??', 'A??ail??ndia', 'Bacabal', 'Bacabeira', 'Bacuri', 'Bacurituba', 'Balsas', 'Barra do Corda', 'Barreirinhas', 'Bar??o de Graja??', 'Bela Vista do Maranh??o', 'Bel??gua', 'Benedito Leite', 'Bequim??o', 'Bernardo do Mearim', 'Boa Vista do Gurupi', 'Bom Jardim', 'Bom Jesus das Selvas', 'Bom Lugar', 'Brejo', 'Brejo de Areia', 'Buriti', 'Buriti Bravo', 'Buriticupu', 'Buritirana', 'Cachoeira Grande', 'Cajapi??', 'Cajari', 'Campestre do Maranh??o', 'Cantanhede', 'Capinzal do Norte', 'Carolina', 'Carutapera', 'Caxias', 'Cedral', 'Central do Maranh??o', 'Centro Novo do Maranh??o', 'Centro do Guilherme', 'Chapadinha', 'Cidel??ndia', 'Cod??', 'Coelho Neto', 'Colinas', 'Concei????o do Lago-A??u', 'Coroat??', 'Cururupu', 'C??ndido Mendes', 'Davin??polis', 'Dom Pedro', 'Duque Bacelar', 'Esperantin??polis', 'Estreito', 'Feira Nova do Maranh??o', 'Fernando Falc??o', 'Formosa da Serra Negra', 'Fortaleza dos Nogueiras', 'Fortuna', 'Godofredo Viana', 'Gon??alves Dias', 'Governador Archer', 'Governador Edison Lob??o', 'Governador Eug??nio Barros', 'Governador Luiz Rocha', 'Governador Newton Bello', 'Governador Nunes Freire', 'Graja??', 'Gra??a Aranha', 'Guimar??es', 'Humberto de Campos', 'Icatu', 'Igarap?? Grande', 'Igarap?? do Meio', 'Imperatriz', 'Itaipava do Graja??', 'Itapecuru Mirim', 'Itinga do Maranh??o', 'Jatob??', 'Jenipapo dos Vieiras', 'Josel??ndia', 'Jo??o Lisboa', 'Junco do Maranh??o', 'Lago Verde', 'Lago da Pedra', 'Lago do Junco', 'Lago dos Rodrigues', 'Lagoa Grande do Maranh??o', 'Lagoa do Mato', 'Lajeado Novo', 'Lima Campos', 'Loreto', 'Lu??s Domingues', 'Magalh??es de Almeida', 'Maraca??um??', 'Maraj?? do Sena', 'Maranh??ozinho', 'Mata Roma', 'Matinha', 'Mat??es', 'Mat??es do Norte', 'Milagres do Maranh??o', 'Mirador', 'Miranda do Norte', 'Mirinzal', 'Montes Altos', 'Mon????o', 'Morros', 'Nina Rodrigues', 'Nova Colinas', 'Nova Iorque', 'Nova Olinda do Maranh??o', "Olho d'??gua das Cunh??s", 'Olinda Nova do Maranh??o', 'Palmeir??ndia', 'Paraibano', 'Parnarama', 'Passagem Franca', 'Pastos Bons', 'Paulino Neves', 'Paulo Ramos', 'Pa??o do Lumiar', 'Pedreiras', 'Pedro do Ros??rio', 'Penalva', 'Peri Mirim', 'Peritor??', 'Pindar??-Mirim', 'Pinheiro', 'Pio XII', 'Pirapemas', 'Porto Franco', 'Porto Rico do Maranh??o', 'Po????o de Pedras', 'Presidente Dutra', 'Presidente Juscelino', 'Presidente M??dici', 'Presidente Sarney', 'Presidente Vargas', 'Primeira Cruz', 'Raposa', 'Riach??o', 'Ribamar Fiquene', 'Ros??rio', 'Samba??ba', 'Santa Filomena do Maranh??o', 'Santa Helena', 'Santa In??s', 'Santa Luzia', 'Santa Luzia do Paru??', 'Santa Quit??ria do Maranh??o', 'Santa Rita', 'Santana do Maranh??o', 'Santo Amaro do Maranh??o', 'Santo Ant??nio dos Lopes', 'Satubinha', 'Senador Alexandre Costa', 'Senador La Rocque', 'Serrano do Maranh??o', 'Sucupira do Norte', 'Sucupira do Riach??o', 'S??o Benedito do Rio Preto', 'S??o Bento', 'S??o Bernardo', 'S??o Domingos do Azeit??o', 'S??o Domingos do Maranh??o', 'S??o Francisco do Brej??o', 'S??o Francisco do Maranh??o', 'S??o F??lix de Balsas', 'S??o Jos?? de Ribamar', 'S??o Jos?? dos Bas??lios', 'S??o Jo??o Batista', 'S??o Jo??o do Car??', 'S??o Jo??o do Para??so', 'S??o Jo??o do Soter', 'S??o Jo??o dos Patos', 'S??o Lu??s', 'S??o Lu??s Gonzaga do Maranh??o', 'S??o Mateus do Maranh??o', 'S??o Pedro da ??gua Branca', 'S??o Pedro dos Crentes', 'S??o Raimundo das Mangabeiras', 'S??o Raimundo do Doca Bezerra', 'S??o Roberto', 'S??o Vicente Ferrer', 'S??tio Novo', 'Tasso Fragoso', 'Timbiras', 'Timon', 'Trizidela do Vale', 'Tufil??ndia', 'Tuntum', 'Turia??u', 'Turil??ndia', 'Tut??ia', 'Urbano Santos', 'Vargem Grande', 'Viana', 'Vila Nova dos Mart??rios', 'Vitorino Freire', 'Vit??ria do Mearim', 'Z?? Doca', '??gua Doce do Maranh??o'],
  PB: ['Aguiar', 'Alagoa Grande', 'Alagoa Nova', 'Alagoinha', 'Alcantil', 'Algod??o de Janda??ra', 'Alhandra', 'Amparo', 'Aparecida', 'Arara', 'Araruna', 'Ara??agi', 'Areia', 'Areia de Bara??nas', 'Areial', 'Aroeiras', 'Assun????o', 'Bananeiras', 'Bara??na', 'Barra de Santa Rosa', 'Barra de Santana', 'Barra de S??o Miguel', 'Bayeux', 'Ba??a da Trai????o', 'Bel??m', 'Bel??m do Brejo do Cruz', 'Bernardino Batista', 'Boa Ventura', 'Boa Vista', 'Bom Jesus', 'Bom Sucesso', 'Bonito de Santa F??', 'Boqueir??o', 'Borborema', 'Brejo do Cruz', 'Brejo dos Santos', 'Caapor??', 'Cabaceiras', 'Cabedelo', 'Cachoeira dos ??ndios', 'Cacimba de Areia', 'Cacimba de Dentro', 'Cacimbas', 'Cai??ara', 'Cajazeiras', 'Cajazeirinhas', 'Caldas Brand??o', 'Camala??', 'Campina Grande', 'Capim', 'Cara??bas', 'Carrapateira', 'Casserengue', 'Catingueira', 'Catol?? do Rocha', 'Caturit??', 'Concei????o', 'Condado', 'Conde', 'Congo', 'Coremas', 'Coxixola', 'Cruz do Esp??rito Santo', 'Cubati', 'Cuitegi', 'Cuit??', 'Cuit?? de Mamanguape', 'Curral Velho', 'Curral de Cima', 'Dami??o', 'Desterro', 'Diamante', 'Dona In??s', 'Duas Estradas', 'Emas', 'Esperan??a', 'Fagundes', 'Frei Martinho', 'Gado Bravo', 'Guarabira', 'Gurinh??m', 'Gurj??o', 'Ibiara', 'Igaracy', 'Imaculada', 'Ing??', 'Itabaiana', 'Itaporanga', 'Itapororoca', 'Itatuba', 'Jacara??', 'Jeric??', 'Joca Claudino', 'Jo??o Pessoa', 'Juarez T??vora', 'Juazeirinho', 'Junco do Serid??', 'Juripiranga', 'Juru', 'Lagoa', 'Lagoa Seca', 'Lagoa de Dentro', 'Lastro', 'Livramento', 'Logradouro', 'Lucena', 'Malta', 'Mamanguape', 'Mana??ra', 'Marca????o', 'Mari', 'Mariz??polis', 'Massaranduba', 'Mataraca', 'Matinhas', 'Mato Grosso', 'Matur??ia', 'Mogeiro', 'Montadas', 'Monte Horebe', 'Monteiro', 'Mulungu', "M??e d'??gua", 'Natuba', 'Nazarezinho', 'Nova Floresta', 'Nova Olinda', 'Nova Palmeira', "Olho d'??gua", 'Olivedos', 'Ouro Velho', 'Parari', 'Passagem', 'Patos', 'Paulista', 'Pedra Branca', 'Pedra Lavrada', 'Pedras de Fogo', 'Pedro R??gis', 'Pianc??', 'Picu??', 'Pilar', 'Pil??es', 'Pil??ezinhos', 'Pirpirituba', 'Pitimbu', 'Pocinhos', 'Pombal', 'Po??o Dantas', 'Po??o de Jos?? de Moura', 'Prata', 'Princesa Isabel', 'Puxinan??', 'Queimadas', 'Quixaba', 'Rem??gio', 'Riacho de Santo Ant??nio', 'Riacho dos Cavalos', 'Riach??o', 'Riach??o do Bacamarte', 'Riach??o do Po??o', 'Rio Tinto', 'Salgadinho', 'Salgado de S??o F??lix', 'Santa Cec??lia', 'Santa Cruz', 'Santa Helena', 'Santa In??s', 'Santa Luzia', 'Santa Rita', 'Santa Teresinha', 'Santana de Mangueira', 'Santana dos Garrotes', 'Santo Andr??', 'Sap??', 'Serra Branca', 'Serra Grande', 'Serra Redonda', 'Serra da Raiz', 'Serraria', 'Sert??ozinho', 'Sobrado', 'Soledade', 'Sol??nea', 'Soss??go', 'Sousa', 'Sum??', 'S??o Bentinho', 'S??o Bento', 'S??o Domingos', 'S??o Domingos do Cariri', 'S??o Francisco', 'S??o Jos?? da Lagoa Tapada', 'S??o Jos?? de Caiana', 'S??o Jos?? de Espinharas', 'S??o Jos?? de Piranhas', 'S??o Jos?? de Princesa', 'S??o Jos?? do Bonfim', 'S??o Jos?? do Brejo do Cruz', 'S??o Jos?? do Sabugi', 'S??o Jos?? dos Cordeiros', 'S??o Jos?? dos Ramos', 'S??o Jo??o do Cariri', 'S??o Jo??o do Rio do Peixe', 'S??o Jo??o do Tigre', 'S??o Mamede', 'S??o Miguel de Taipu', 'S??o Sebasti??o de Lagoa de Ro??a', 'S??o Sebasti??o do Umbuzeiro', 'S??o Vicente do Serid??', 'Tacima', 'Tapero??', 'Tavares', 'Teixeira', 'Ten??rio', 'Triunfo', 'Uira??na', 'Umbuzeiro', 'Vieir??polis', 'Vista Serrana', 'V??rzea', 'Zabel??', '??gua Branca'],
  MS: ['Alcin??polis', 'Amambai', 'Anast??cio', 'Anauril??ndia', 'Ang??lica', 'Ant??nio Jo??o', 'Aparecida do Taboado', 'Aquidauana', 'Aral Moreira', 'Bandeirantes', 'Bataguassu', 'Bataypor??', 'Bela Vista', 'Bodoquena', 'Bonito', 'Brasil??ndia', 'Caarap??', 'Camapu??', 'Campo Grande', 'Caracol', 'Cassil??ndia', 'Chapad??o do Sul', 'Corguinho', 'Coronel Sapucaia', 'Corumb??', 'Costa Rica', 'Coxim', 'Deod??polis', 'Dois Irm??os do Buriti', 'Douradina', 'Dourados', 'Eldorado', 'Figueir??o', 'F??tima do Sul', 'Gl??ria de Dourados', 'Guia Lopes da Laguna', 'Iguatemi', 'Inoc??ncia', 'Itapor??', 'Itaquira??', 'Ivinhema', 'Japor??', 'Jaraguari', 'Jardim', 'Jate??', 'Juti', 'Lad??rio', 'Laguna Carap??', 'Maracaju', 'Miranda', 'Mundo Novo', 'Navira??', 'Nioaque', 'Nova Alvorada do Sul', 'Nova Andradina', 'Novo Horizonte do Sul', 'Parana??ba', 'Paranhos', 'Para??so das ??guas', 'Pedro Gomes', 'Ponta Por??', 'Porto Murtinho', 'Ribas do Rio Pardo', 'Rio Brilhante', 'Rio Negro', 'Rio Verde de Mato Grosso', 'Rochedo', 'Santa Rita do Pardo', 'Selv??ria', 'Sete Quedas', 'Sidrol??ndia', 'Sonora', 'S??o Gabriel do Oeste', 'Tacuru', 'Taquarussu', 'Terenos', 'Tr??s Lagoas', 'Vicentina', '??gua Clara'],
  RO: ["Alta Floresta D'Oeste", 'Alto Alegre dos Parecis', 'Alto Para??so', "Alvorada D'Oeste", 'Ariquemes', 'Buritis', 'Cabixi', 'Cacaul??ndia', 'Cacoal', 'Campo Novo de Rond??nia', 'Candeias do Jamari', 'Castanheiras', 'Cerejeiras', 'Chupinguaia', 'Colorado do Oeste', 'Corumbiara', 'Costa Marques', 'Cujubim', "Espig??o D'Oeste", 'Governador Jorge Teixeira', 'Guajar??-Mirim', 'Itapu?? do Oeste', 'Jaru', 'Ji-Paran??', "Machadinho D'Oeste", 'Ministro Andreazza', 'Mirante da Serra', 'Monte Negro', "Nova Brasil??ndia D'Oeste", 'Nova Mamor??', 'Nova Uni??o', 'Novo Horizonte do Oeste', 'Ouro Preto do Oeste', 'Parecis', 'Pimenta Bueno', 'Pimenteiras do Oeste', 'Porto Velho', 'Presidente M??dici', 'Primavera de Rond??nia', 'Rio Crespo', 'Rolim de Moura', "Santa Luzia D'Oeste", 'Seringueiras', "S??o Felipe D'Oeste", 'S??o Francisco do Guapor??', 'S??o Miguel do Guapor??', 'Teixeir??polis', 'Theobroma', 'Urup??', 'Vale do Anari', 'Vale do Para??so', 'Vilhena'],
  RR: ['Alto Alegre', 'Amajari', 'Boa Vista', 'Bonfim', 'Cant??', 'Caracara??', 'Caroebe', 'Iracema', 'Mucaja??', 'Normandia', 'Pacaraima', 'Rorain??polis', 'S??o Jo??o da Baliza', 'S??o Luiz', 'Uiramut??'],
  AM: ['Alvar??es', 'Amatur??', 'Anam??', 'Anori', 'Apu??', 'Atalaia do Norte', 'Autazes', 'Barcelos', 'Barreirinha', 'Benjamin Constant', 'Beruri', 'Boa Vista do Ramos', 'Boca do Acre', 'Borba', 'Caapiranga', 'Canutama', 'Carauari', 'Careiro', 'Careiro da V??rzea', 'Coari', 'Codaj??s', 'Eirunep??', 'Envira', 'Fonte Boa', 'Guajar??', 'Humait??', 'Ipixuna', 'Iranduba', 'Itacoatiara', 'Itamarati', 'Itapiranga', 'Japur??', 'Juru??', 'Juta??', 'L??brea', 'Manacapuru', 'Manaquiri', 'Manaus', 'Manicor??', 'Mara??', 'Mau??s', 'Nhamund??', 'Nova Olinda do Norte', 'Novo Air??o', 'Novo Aripuan??', 'Parintins', 'Pauini', 'Presidente Figueiredo', 'Rio Preto da Eva', 'Santa Isabel do Rio Negro', 'Santo Ant??nio do I????', 'Silves', 'S??o Gabriel da Cachoeira', 'S??o Paulo de Oliven??a', 'S??o Sebasti??o do Uatum??', 'Tabatinga', 'Tapau??', 'Tef??', 'Tonantins', 'Uarini', 'Urucar??', 'Urucurituba'],
  AP: ['Amap??', 'Cal??oene', 'Cutias', 'Ferreira Gomes', 'Itaubal', 'Laranjal do Jari', 'Macap??', 'Mazag??o', 'Oiapoque', 'Pedra Branca do Amapari', 'Porto Grande', 'Pracu??ba', 'Santana', 'Serra do Navio', 'Tartarugalzinho', 'Vit??ria do Jari'],
  SE: ['Amparo do S??o Francisco', 'Aquidab??', 'Aracaju', 'Arau??', 'Areia Branca', 'Barra dos Coqueiros', 'Boquim', 'Brejo Grande', 'Campo do Brito', 'Canhoba', 'Canind?? de S??o Francisco', 'Capela', 'Carira', 'Carm??polis', 'Cedro de S??o Jo??o', 'Cristin??polis', 'Cumbe', 'Divina Pastora', 'Est??ncia', 'Feira Nova', 'Frei Paulo', 'Gararu', 'General Maynard', 'Gracho Cardoso', 'Ilha das Flores', 'Indiaroba', 'Itabaiana', 'Itabaianinha', 'Itabi', "Itaporanga d'Ajuda", 'Japaratuba', 'Japoat??', 'Lagarto', 'Laranjeiras', 'Macambira', 'Malhada dos Bois', 'Malhador', 'Maruim', 'Moita Bonita', 'Monte Alegre de Sergipe', 'Muribeca', 'Ne??polis', 'Nossa Senhora Aparecida', 'Nossa Senhora da Gl??ria', 'Nossa Senhora das Dores', 'Nossa Senhora de Lourdes', 'Nossa Senhora do Socorro', 'Pacatuba', 'Pedra Mole', 'Pedrinhas', 'Pinh??o', 'Pirambu', 'Porto da Folha', 'Po??o Redondo', 'Po??o Verde', 'Propri??', 'Riachuelo', 'Riach??o do Dantas', 'Ribeir??polis', 'Ros??rio do Catete', 'Salgado', 'Santa Luzia do Itanhy', 'Santa Rosa de Lima', 'Santana do S??o Francisco', 'Santo Amaro das Brotas', 'Sim??o Dias', 'Siriri', 'S??o Crist??v??o', 'S??o Domingos', 'S??o Francisco', 'S??o Miguel do Aleixo', 'Telha', 'Tobias Barreto', 'Tomar do Geru', 'Umba??ba'],
  AL: ['Anadia', 'Arapiraca', 'Atalaia', 'Barra de Santo Ant??nio', 'Barra de S??o Miguel', 'Batalha', 'Belo Monte', 'Bel??m', 'Boca da Mata', 'Branquinha', 'Cacimbinhas', 'Cajueiro', 'Campestre', 'Campo Alegre', 'Campo Grande', 'Canapi', 'Capela', 'Carneiros', 'Ch?? Preta', 'Coit?? do N??ia', 'Col??nia Leopoldina', 'Coqueiro Seco', 'Coruripe', 'Cra??bas', 'Delmiro Gouveia', 'Dois Riachos', 'Estrela de Alagoas', 'Feira Grande', 'Feliz Deserto', 'Flexeiras', 'Girau do Ponciano', 'Ibateguara', 'Igaci', 'Igreja Nova', 'Inhapi', 'Jacar?? dos Homens', 'Jacu??pe', 'Japaratinga', 'Jaramataia', 'Jequi?? da Praia', 'Joaquim Gomes', 'Jundi??', 'Junqueiro', 'Lagoa da Canoa', 'Limoeiro de Anadia', 'Macei??', 'Major Isidoro', 'Mar Vermelho', 'Maragogi', 'Maravilha', 'Marechal Deodoro', 'Maribondo', 'Mata Grande', 'Matriz de Camaragibe', 'Messias', 'Minador do Negr??o', 'Monteir??polis', 'Murici', 'Novo Lino', "Olho d'??gua Grande", "Olho d'??gua das Flores", "Olho d'??gua do Casado", 'Oliven??a', 'Ouro Branco', 'Palestina', 'Palmeira dos ??ndios', 'Pariconha', 'Paripueira', 'Passo de Camaragibe', 'Paulo Jacinto', 'Penedo', 'Pia??abu??u', 'Pilar', 'Pindoba', 'Piranhas', 'Porto Calvo', 'Porto Real do Col??gio', 'Porto de Pedras', 'Po??o das Trincheiras', 'P??o de A????car', 'Quebrangulo', 'Rio Largo', 'Roteiro', 'Santa Luzia do Norte', 'Santana do Ipanema', 'Santana do Munda??', 'Satuba', 'Senador Rui Palmeira', 'S??o Br??s', 'S??o Jos?? da Laje', 'S??o Jos?? da Tapera', 'S??o Lu??s do Quitunde', 'S??o Miguel dos Campos', 'S??o Miguel dos Milagres', 'S??o Sebasti??o', "Tanque d'Arca", 'Taquarana', 'Teot??nio Vilela', 'Traipu', 'Uni??o dos Palmares', 'Vi??osa', '??gua Branca'],
  RJ: ['Angra dos Reis', 'Aperib??', 'Araruama', 'Areal', 'Arma????o dos B??zios', 'Arraial do Cabo', 'Barra Mansa', 'Barra do Pira??', 'Belford Roxo', 'Bom Jardim', 'Bom Jesus do Itabapoana', 'Cabo Frio', 'Cachoeiras de Macacu', 'Cambuci', 'Campos dos Goytacazes', 'Cantagalo', 'Carapebus', 'Cardoso Moreira', 'Carmo', 'Casimiro de Abreu', 'Comendador Levy Gasparian', 'Concei????o de Macabu', 'Cordeiro', 'Duas Barras', 'Duque de Caxias', 'Engenheiro Paulo de Frontin', 'Guapimirim', 'Iguaba Grande', 'Itabora??', 'Itagua??', 'Italva', 'Itaocara', 'Itaperuna', 'Itatiaia', 'Japeri', 'Laje do Muria??', 'Maca??', 'Macuco', 'Mag??', 'Mangaratiba', 'Maric??', 'Mendes', 'Mesquita', 'Miguel Pereira', 'Miracema', 'Natividade', 'Nil??polis', 'Niter??i', 'Nova Friburgo', 'Nova Igua??u', 'Paracambi', 'Paraty', 'Para??ba do Sul', 'Paty do Alferes', 'Petr??polis', 'Pinheiral', 'Pira??', 'Porci??ncula', 'Porto Real', 'Quatis', 'Queimados', 'Quissam??', 'Resende', 'Rio Bonito', 'Rio Claro', 'Rio das Flores', 'Rio das Ostras', 'Rio de Janeiro', 'Santa Maria Madalena', 'Santo Ant??nio de P??dua', 'Sapucaia', 'Saquarema', 'Serop??dica', 'Silva Jardim', 'Sumidouro', 'S??o Fid??lis', 'S??o Francisco de Itabapoana', 'S??o Gon??alo', 'S??o Jos?? de Ub??', 'S??o Jos?? do Vale do Rio Preto', 'S??o Jo??o da Barra', 'S??o Jo??o de Meriti', 'S??o Pedro da Aldeia', 'S??o Sebasti??o do Alto', 'Tangu??', 'Teres??polis', 'Trajano de Moraes', 'Tr??s Rios', 'Valen??a', 'Varre-Sai', 'Vassouras', 'Volta Redonda'],
  DF: ['Bras??lia']
};

var sortAlphabetically = function sortAlphabetically(cityA, cityB) {
  return cityA.localeCompare(cityB);
};

function getCities(state) {
  if (state) {
    var states = getStates();
    var foundState = states.find(function (_ref) {
      var name = _ref.name,
          code = _ref.code;
      return name === state || code === state;
    });

    if (!foundState) {
      return [];
    }

    return CITIES_DATA[foundState.code].sort(sortAlphabetically);
  }

  return Object.values(CITIES_DATA).reduce(function (acc, city) {
    return acc.concat(city);
  }, []).sort(sortAlphabetically);
}


//# sourceMappingURL=brazilian-utils.esm.js.map


/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/AccountAddresses.vue":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/AccountAddresses.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _html_AccountAddresses_html_vue_type_template_id_55a5ed34_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html/AccountAddresses.html?vue&type=template&id=55a5ed34&lang=html& */ "./node_modules/@ecomplus/storefront-components/src/html/AccountAddresses.html?vue&type=template&id=55a5ed34&lang=html&");
/* harmony import */ var _js_AccountAddresses_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/AccountAddresses.js?vue&type=script&lang=js& */ "./node_modules/@ecomplus/storefront-components/src/js/AccountAddresses.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _scss_AccountAddresses_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/AccountAddresses.scss?vue&type=style&index=0&lang=scss& */ "./node_modules/@ecomplus/storefront-components/src/scss/AccountAddresses.scss?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _js_AccountAddresses_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _html_AccountAddresses_html_vue_type_template_id_55a5ed34_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _html_AccountAddresses_html_vue_type_template_id_55a5ed34_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@ecomplus/storefront-components/src/AccountAddresses.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/AccountForm.vue":
/*!**************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/AccountForm.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _html_AccountForm_html_vue_type_template_id_353fc922_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html/AccountForm.html?vue&type=template&id=353fc922&lang=html& */ "./node_modules/@ecomplus/storefront-components/src/html/AccountForm.html?vue&type=template&id=353fc922&lang=html&");
/* harmony import */ var _js_AccountForm_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/AccountForm.js?vue&type=script&lang=js& */ "./node_modules/@ecomplus/storefront-components/src/js/AccountForm.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _scss_AccountForm_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/AccountForm.scss?vue&type=style&index=0&lang=scss& */ "./node_modules/@ecomplus/storefront-components/src/scss/AccountForm.scss?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _js_AccountForm_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _html_AccountForm_html_vue_type_template_id_353fc922_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _html_AccountForm_html_vue_type_template_id_353fc922_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@ecomplus/storefront-components/src/AccountForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/AddressForm.vue":
/*!**************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/AddressForm.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _html_AddressForm_html_vue_type_template_id_00d5b82e_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html/AddressForm.html?vue&type=template&id=00d5b82e&lang=html& */ "./node_modules/@ecomplus/storefront-components/src/html/AddressForm.html?vue&type=template&id=00d5b82e&lang=html&");
/* harmony import */ var _js_AddressForm_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/AddressForm.js?vue&type=script&lang=js& */ "./node_modules/@ecomplus/storefront-components/src/js/AddressForm.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _scss_AddressForm_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/AddressForm.scss?vue&type=style&index=0&lang=scss& */ "./node_modules/@ecomplus/storefront-components/src/scss/AddressForm.scss?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _js_AddressForm_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _html_AddressForm_html_vue_type_template_id_00d5b82e_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _html_AddressForm_html_vue_type_template_id_00d5b82e_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@ecomplus/storefront-components/src/AddressForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/InputDate.vue":
/*!************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/InputDate.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _html_InputDate_html_vue_type_template_id_704851e9_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html/InputDate.html?vue&type=template&id=704851e9&lang=html& */ "./node_modules/@ecomplus/storefront-components/src/html/InputDate.html?vue&type=template&id=704851e9&lang=html&");
/* harmony import */ var _js_InputDate_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/InputDate.js?vue&type=script&lang=js& */ "./node_modules/@ecomplus/storefront-components/src/js/InputDate.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _js_InputDate_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _html_InputDate_html_vue_type_template_id_704851e9_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _html_InputDate_html_vue_type_template_id_704851e9_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@ecomplus/storefront-components/src/InputDate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/InputDocNumber.vue":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/InputDocNumber.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _html_InputDocNumber_html_vue_type_template_id_6a2073f6_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html/InputDocNumber.html?vue&type=template&id=6a2073f6&lang=html& */ "./node_modules/@ecomplus/storefront-components/src/html/InputDocNumber.html?vue&type=template&id=6a2073f6&lang=html&");
/* harmony import */ var _js_InputDocNumber_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/InputDocNumber.js?vue&type=script&lang=js& */ "./node_modules/@ecomplus/storefront-components/src/js/InputDocNumber.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _js_InputDocNumber_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _html_InputDocNumber_html_vue_type_template_id_6a2073f6_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _html_InputDocNumber_html_vue_type_template_id_6a2073f6_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@ecomplus/storefront-components/src/InputDocNumber.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/InputPhone.vue":
/*!*************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/InputPhone.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _html_InputPhone_html_vue_type_template_id_6ce226c3_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html/InputPhone.html?vue&type=template&id=6ce226c3&lang=html& */ "./node_modules/@ecomplus/storefront-components/src/html/InputPhone.html?vue&type=template&id=6ce226c3&lang=html&");
/* harmony import */ var _js_InputPhone_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/InputPhone.js?vue&type=script&lang=js& */ "./node_modules/@ecomplus/storefront-components/src/js/InputPhone.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _js_InputPhone_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _html_InputPhone_html_vue_type_template_id_6ce226c3_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _html_InputPhone_html_vue_type_template_id_6ce226c3_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@ecomplus/storefront-components/src/InputPhone.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/InputZipCode.vue":
/*!***************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/InputZipCode.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _html_InputZipCode_html_vue_type_template_id_0fb24ec3_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html/InputZipCode.html?vue&type=template&id=0fb24ec3&lang=html& */ "./node_modules/@ecomplus/storefront-components/src/html/InputZipCode.html?vue&type=template&id=0fb24ec3&lang=html&");
/* harmony import */ var _js_InputZipCode_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/InputZipCode.js?vue&type=script&lang=js& */ "./node_modules/@ecomplus/storefront-components/src/js/InputZipCode.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _js_InputZipCode_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _html_InputZipCode_html_vue_type_template_id_0fb24ec3_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _html_InputZipCode_html_vue_type_template_id_0fb24ec3_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@ecomplus/storefront-components/src/InputZipCode.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/LoginBlock.vue":
/*!*************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/LoginBlock.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _html_LoginBlock_html_vue_type_template_id_78a491a3_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html/LoginBlock.html?vue&type=template&id=78a491a3&lang=html& */ "./node_modules/@ecomplus/storefront-components/src/html/LoginBlock.html?vue&type=template&id=78a491a3&lang=html&");
/* harmony import */ var _js_LoginBlock_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/LoginBlock.js?vue&type=script&lang=js& */ "./node_modules/@ecomplus/storefront-components/src/js/LoginBlock.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _scss_LoginBlock_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/LoginBlock.scss?vue&type=style&index=0&lang=scss& */ "./node_modules/@ecomplus/storefront-components/src/scss/LoginBlock.scss?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _js_LoginBlock_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _html_LoginBlock_html_vue_type_template_id_78a491a3_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"],
  _html_LoginBlock_html_vue_type_template_id_78a491a3_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@ecomplus/storefront-components/src/LoginBlock.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/html/AccountAddresses.html?vue&type=template&id=55a5ed34&lang=html&":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/html/AccountAddresses.html?vue&type=template&id=55a5ed34&lang=html& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AccountAddresses_html_vue_type_template_id_55a5ed34_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./AccountAddresses.html?vue&type=template&id=55a5ed34&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@ecomplus/storefront-components/src/html/AccountAddresses.html?vue&type=template&id=55a5ed34&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AccountAddresses_html_vue_type_template_id_55a5ed34_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AccountAddresses_html_vue_type_template_id_55a5ed34_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/html/AccountForm.html?vue&type=template&id=353fc922&lang=html&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/html/AccountForm.html?vue&type=template&id=353fc922&lang=html& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AccountForm_html_vue_type_template_id_353fc922_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./AccountForm.html?vue&type=template&id=353fc922&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@ecomplus/storefront-components/src/html/AccountForm.html?vue&type=template&id=353fc922&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AccountForm_html_vue_type_template_id_353fc922_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AccountForm_html_vue_type_template_id_353fc922_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/html/AddressForm.html?vue&type=template&id=00d5b82e&lang=html&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/html/AddressForm.html?vue&type=template&id=00d5b82e&lang=html& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AddressForm_html_vue_type_template_id_00d5b82e_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./AddressForm.html?vue&type=template&id=00d5b82e&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@ecomplus/storefront-components/src/html/AddressForm.html?vue&type=template&id=00d5b82e&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AddressForm_html_vue_type_template_id_00d5b82e_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AddressForm_html_vue_type_template_id_00d5b82e_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/html/InputDate.html?vue&type=template&id=704851e9&lang=html&":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/html/InputDate.html?vue&type=template&id=704851e9&lang=html& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_InputDate_html_vue_type_template_id_704851e9_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./InputDate.html?vue&type=template&id=704851e9&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@ecomplus/storefront-components/src/html/InputDate.html?vue&type=template&id=704851e9&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_InputDate_html_vue_type_template_id_704851e9_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_InputDate_html_vue_type_template_id_704851e9_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/html/InputDocNumber.html?vue&type=template&id=6a2073f6&lang=html&":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/html/InputDocNumber.html?vue&type=template&id=6a2073f6&lang=html& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_InputDocNumber_html_vue_type_template_id_6a2073f6_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./InputDocNumber.html?vue&type=template&id=6a2073f6&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@ecomplus/storefront-components/src/html/InputDocNumber.html?vue&type=template&id=6a2073f6&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_InputDocNumber_html_vue_type_template_id_6a2073f6_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_InputDocNumber_html_vue_type_template_id_6a2073f6_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/html/InputPhone.html?vue&type=template&id=6ce226c3&lang=html&":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/html/InputPhone.html?vue&type=template&id=6ce226c3&lang=html& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_InputPhone_html_vue_type_template_id_6ce226c3_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./InputPhone.html?vue&type=template&id=6ce226c3&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@ecomplus/storefront-components/src/html/InputPhone.html?vue&type=template&id=6ce226c3&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_InputPhone_html_vue_type_template_id_6ce226c3_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_InputPhone_html_vue_type_template_id_6ce226c3_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/html/InputZipCode.html?vue&type=template&id=0fb24ec3&lang=html&":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/html/InputZipCode.html?vue&type=template&id=0fb24ec3&lang=html& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_InputZipCode_html_vue_type_template_id_0fb24ec3_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./InputZipCode.html?vue&type=template&id=0fb24ec3&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@ecomplus/storefront-components/src/html/InputZipCode.html?vue&type=template&id=0fb24ec3&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_InputZipCode_html_vue_type_template_id_0fb24ec3_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_InputZipCode_html_vue_type_template_id_0fb24ec3_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/html/LoginBlock.html?vue&type=template&id=78a491a3&lang=html&":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/html/LoginBlock.html?vue&type=template&id=78a491a3&lang=html& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_LoginBlock_html_vue_type_template_id_78a491a3_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./LoginBlock.html?vue&type=template&id=78a491a3&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@ecomplus/storefront-components/src/html/LoginBlock.html?vue&type=template&id=78a491a3&lang=html&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_LoginBlock_html_vue_type_template_id_78a491a3_lang_html___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_LoginBlock_html_vue_type_template_id_78a491a3_lang_html___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/js/AccountAddresses.js?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/js/AccountAddresses.js?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_1_AccountAddresses_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../babel-loader/lib??ref--1!./AccountAddresses.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/@ecomplus/storefront-components/src/js/AccountAddresses.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_1_AccountAddresses_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/js/AccountForm.js?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/js/AccountForm.js?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_1_AccountForm_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../babel-loader/lib??ref--1!./AccountForm.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/@ecomplus/storefront-components/src/js/AccountForm.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_1_AccountForm_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/js/AddressForm.js?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/js/AddressForm.js?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_1_AddressForm_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../babel-loader/lib??ref--1!./AddressForm.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/@ecomplus/storefront-components/src/js/AddressForm.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_1_AddressForm_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/js/InputDate.js?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/js/InputDate.js?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_1_InputDate_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../babel-loader/lib??ref--1!./InputDate.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/@ecomplus/storefront-components/src/js/InputDate.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_1_InputDate_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/js/InputDocNumber.js?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/js/InputDocNumber.js?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_1_InputDocNumber_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../babel-loader/lib??ref--1!./InputDocNumber.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/@ecomplus/storefront-components/src/js/InputDocNumber.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_1_InputDocNumber_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/js/InputPhone.js?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/js/InputPhone.js?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_1_InputPhone_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../babel-loader/lib??ref--1!./InputPhone.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/@ecomplus/storefront-components/src/js/InputPhone.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_1_InputPhone_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/js/InputZipCode.js?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/js/InputZipCode.js?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_1_InputZipCode_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../babel-loader/lib??ref--1!./InputZipCode.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/@ecomplus/storefront-components/src/js/InputZipCode.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_1_InputZipCode_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/js/LoginBlock.js?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/js/LoginBlock.js?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_1_LoginBlock_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../babel-loader/lib??ref--1!./LoginBlock.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/@ecomplus/storefront-components/src/js/LoginBlock.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_1_LoginBlock_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/js/helpers/check-form-validity.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/js/helpers/check-form-validity.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ($form => typeof $form.reportValidity === 'function' ? $form.reportValidity() : $form.checkValidity());

/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/scss/AccountAddresses.scss?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/scss/AccountAddresses.scss?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_css_loader_dist_cjs_js_ref_0_oneOf_0_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_0_oneOf_0_2_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_AccountAddresses_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-style-loader!../../../../css-loader/dist/cjs.js??ref--0-oneOf-0-1!../../../../vue-loader/lib/loaders/stylePostLoader.js!../../../../resolve-url-loader??ref--0-oneOf-0-2!../../../../postcss-loader/dist/cjs.js??ref--0-oneOf-0-3!../../../../sass-loader/dist/cjs.js??ref--0-oneOf-0-4!./AccountAddresses.scss?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/@ecomplus/storefront-components/src/scss/AccountAddresses.scss?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _vue_style_loader_index_js_css_loader_dist_cjs_js_ref_0_oneOf_0_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_0_oneOf_0_2_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_AccountAddresses_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_css_loader_dist_cjs_js_ref_0_oneOf_0_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_0_oneOf_0_2_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_AccountAddresses_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_css_loader_dist_cjs_js_ref_0_oneOf_0_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_0_oneOf_0_2_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_AccountAddresses_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_css_loader_dist_cjs_js_ref_0_oneOf_0_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_0_oneOf_0_2_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_AccountAddresses_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/scss/AccountForm.scss?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/scss/AccountForm.scss?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_css_loader_dist_cjs_js_ref_0_oneOf_0_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_0_oneOf_0_2_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_AccountForm_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-style-loader!../../../../css-loader/dist/cjs.js??ref--0-oneOf-0-1!../../../../vue-loader/lib/loaders/stylePostLoader.js!../../../../resolve-url-loader??ref--0-oneOf-0-2!../../../../postcss-loader/dist/cjs.js??ref--0-oneOf-0-3!../../../../sass-loader/dist/cjs.js??ref--0-oneOf-0-4!./AccountForm.scss?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/@ecomplus/storefront-components/src/scss/AccountForm.scss?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _vue_style_loader_index_js_css_loader_dist_cjs_js_ref_0_oneOf_0_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_0_oneOf_0_2_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_AccountForm_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_css_loader_dist_cjs_js_ref_0_oneOf_0_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_0_oneOf_0_2_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_AccountForm_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_css_loader_dist_cjs_js_ref_0_oneOf_0_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_0_oneOf_0_2_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_AccountForm_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_css_loader_dist_cjs_js_ref_0_oneOf_0_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_0_oneOf_0_2_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_AccountForm_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/scss/AddressForm.scss?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/scss/AddressForm.scss?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_css_loader_dist_cjs_js_ref_0_oneOf_0_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_0_oneOf_0_2_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_AddressForm_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-style-loader!../../../../css-loader/dist/cjs.js??ref--0-oneOf-0-1!../../../../vue-loader/lib/loaders/stylePostLoader.js!../../../../resolve-url-loader??ref--0-oneOf-0-2!../../../../postcss-loader/dist/cjs.js??ref--0-oneOf-0-3!../../../../sass-loader/dist/cjs.js??ref--0-oneOf-0-4!./AddressForm.scss?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/@ecomplus/storefront-components/src/scss/AddressForm.scss?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _vue_style_loader_index_js_css_loader_dist_cjs_js_ref_0_oneOf_0_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_0_oneOf_0_2_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_AddressForm_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_css_loader_dist_cjs_js_ref_0_oneOf_0_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_0_oneOf_0_2_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_AddressForm_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_css_loader_dist_cjs_js_ref_0_oneOf_0_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_0_oneOf_0_2_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_AddressForm_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_css_loader_dist_cjs_js_ref_0_oneOf_0_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_0_oneOf_0_2_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_AddressForm_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./node_modules/@ecomplus/storefront-components/src/scss/LoginBlock.scss?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@ecomplus/storefront-components/src/scss/LoginBlock.scss?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_css_loader_dist_cjs_js_ref_0_oneOf_0_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_0_oneOf_0_2_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_LoginBlock_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-style-loader!../../../../css-loader/dist/cjs.js??ref--0-oneOf-0-1!../../../../vue-loader/lib/loaders/stylePostLoader.js!../../../../resolve-url-loader??ref--0-oneOf-0-2!../../../../postcss-loader/dist/cjs.js??ref--0-oneOf-0-3!../../../../sass-loader/dist/cjs.js??ref--0-oneOf-0-4!./LoginBlock.scss?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/@ecomplus/storefront-components/src/scss/LoginBlock.scss?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _vue_style_loader_index_js_css_loader_dist_cjs_js_ref_0_oneOf_0_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_0_oneOf_0_2_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_LoginBlock_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_css_loader_dist_cjs_js_ref_0_oneOf_0_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_0_oneOf_0_2_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_LoginBlock_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_css_loader_dist_cjs_js_ref_0_oneOf_0_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_0_oneOf_0_2_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_LoginBlock_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_css_loader_dist_cjs_js_ref_0_oneOf_0_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_0_oneOf_0_2_postcss_loader_dist_cjs_js_ref_0_oneOf_0_3_sass_loader_dist_cjs_js_ref_0_oneOf_0_4_LoginBlock_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/@ecomplus/storefront-components/src/js/AccountAddresses.js?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/@ecomplus/storefront-components/src/js/AccountAddresses.js?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/i18n */ "./node_modules/@ecomplus/storefront-components/node_modules/@ecomplus/i18n/src/pt_br/index.js");
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var _AddressForm_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../AddressForm.vue */ "./node_modules/@ecomplus/storefront-components/src/AddressForm.vue");



const {
  sessionStorage
} = window;
const storageKey = 'ecomCustomerAddress';
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AccountAddresses',
  components: {
    AddressForm: _AddressForm_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    customer: {
      type: Object,

      default() {
        return {};
      }

    },
    zipCode: String,
    formBtnText: String
  },

  data() {
    return {
      canShowForm: false,
      isNewAddress: false,
      editAddressIndex: -1
    };
  },

  computed: {
    i19edit: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19edit"]),
    i19newAddress: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19newAddress"]),
    i19remove: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19remove"]),
    i19noNumber: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19noNumber"]),

    addresses() {
      return this.customer.addresses || [];
    },

    localAddress: {
      get() {
        let address = this.addresses[this.editAddressIndex];

        if (!address) {
          address = {};

          if (this.zipCode) {
            address.zip = this.zipCode;
          }

          if (this.customer.name) {
            address.name = Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["fullName"])(this.customer).substr(0, 70);
          }
        }

        return address;
      },

      set(address) {
        const addresses = [].concat(this.addresses);
        addresses[this.editAddressIndex] = address;
        this.$emit('update:customer', { ...this.customer,
          addresses
        });

        if (address.zip) {
          this.isNewAddress = false;
          this.selectAddress(address);
        }

        this.canShowForm = false;
      }

    }
  },
  methods: {
    getLineAddress(address) {
      if (address.line_address) {
        return address.line_address;
      } else {
        let lineAddress = `${address.street} ${address.number || this.i19noNumber}`;

        if (address.complement) {
          lineAddress += ` - ${address.complement}`;
        }

        if (address.borough) {
          lineAddress += `, ${address.borough}`;
        }

        return lineAddress;
      }
    },

    selectAddress(address) {
      this.$emit('select-address', address._id);
      sessionStorage.setItem(storageKey, JSON.stringify(address));
    },

    removeAddress(index) {
      const addresses = [].concat(this.addresses);
      addresses.splice(index, 1);
      this.$emit('update:customer', { ...this.customer,
        addresses
      });
    }

  },
  watch: {
    addresses(newList, oldList) {
      if (!oldList.length) {
        if (newList.length && this.isNewAddress) {
          this.canShowForm = this.isNewAddress = false;
        }
      } else if (!newList.length) {
        this.canShowForm = this.isNewAddress = true;
      }
    },

    isNewAddress(isAddAddress) {
      if (isAddAddress) {
        this.editAddressIndex = this.addresses.length;
        this.canShowForm = true;
      }
    },

    editAddressIndex(index) {
      if (index > -1) {
        const address = this.addresses[index];

        if (address) {
          this.selectAddress(address);
        }

        this.canShowForm = true;
      }
    },

    canShowForm(isVisible) {
      if (!isVisible) {
        this.editAddressIndex = -1;
      }
    }

  },

  created() {
    if (!this.addresses.length) {
      this.isNewAddress = true;
      const sessionAddress = JSON.parse(sessionStorage.getItem(storageKey));

      if (sessionAddress) {
        const address = {};

        for (const field in sessionAddress) {
          if (sessionAddress[field]) {
            address[field] = sessionAddress[field];
          }
        }

        if (address._id && address.zip && address.street) {
          this.editAddressIndex = 0;
          this.$nextTick(() => {
            this.localAddress = address;
          });
        }
      }
    } else {
      let addressIndex;

      if (this.zipCode) {
        addressIndex = this.addresses.findIndex(addr => addr.zip === this.zipCode);
      }

      if (!(addressIndex >= 0)) {
        addressIndex = this.addresses.findIndex(addr => addr.default);

        if (addressIndex === -1) {
          addressIndex = 0;
        }
      }

      const address = this.addresses[addressIndex];

      if (address.name && address.street && address.city) {
        this.selectAddress(address);
      } else {
        this.editAddressIndex = addressIndex;
      }
    }
  }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/@ecomplus/storefront-components/src/js/AccountForm.js?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/@ecomplus/storefront-components/src/js/AccountForm.js?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ecomplus/i18n */ "./node_modules/@ecomplus/storefront-components/node_modules/@ecomplus/i18n/src/pt_br/index.js");
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.clonedeep */ "./node_modules/lodash.clonedeep/index.js");
/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_clonedeep__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_check_form_validity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/check-form-validity */ "./node_modules/@ecomplus/storefront-components/src/js/helpers/check-form-validity.js");
/* harmony import */ var _InputDocNumber_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../InputDocNumber.vue */ "./node_modules/@ecomplus/storefront-components/src/InputDocNumber.vue");
/* harmony import */ var _InputPhone_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../InputPhone.vue */ "./node_modules/@ecomplus/storefront-components/src/InputPhone.vue");
/* harmony import */ var _InputDate_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../InputDate.vue */ "./node_modules/@ecomplus/storefront-components/src/InputDate.vue");








const countryCode = _ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["$ecomConfig"].get('country_code');
const {
  sessionStorage
} = window;
const storageKey = 'ecomCustomerAccount';

const countInvalidInputs = (attr = ':invalid') => {
  return document.querySelectorAll(`.account-form input${attr}`).length;
};

const formValidateClass = 'was-validated';
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AccountForm',
  components: {
    InputDocNumber: _InputDocNumber_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    InputPhone: _InputPhone_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    InputDate: _InputDate_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  props: {
    isShort: Boolean,
    isGuestAccess: Boolean,
    customer: {
      type: Object,

      default() {
        return {};
      }

    },
    privacyPolicyUrl: {
      type: String,
      default: typeof window === 'object' ? window.privacyPolicyUrl : null
    },
    hasSubmitBtn: {
      type: Boolean,
      default: true
    },
    btnText: {
      type: String,

      default() {
        return Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19save"]);
      }

    }
  },

  data() {
    return {
      localCustomer: lodash_clonedeep__WEBPACK_IMPORTED_MODULE_3___default()(this.customer),
      fullName: Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["fullName"])(this.customer),
      storageInterval: null,
      btnLabel: this.btnText,
      isPrivacyOptIn: Boolean(this.customer._id)
    };
  },

  computed: {
    i19a: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19a"]),
    i19birthdate: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19birthdate"]),
    i19cellphone: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19cellphone"]),
    i19companyRegistration: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19companyRegistration"]),
    i19contactPhone: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19contactPhone"]),
    i19corporateName: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19corporateName"]),
    i19docNumber: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19docNumber"]),
    i19emailAddress: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19emailAddress"]),
    i19female: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19female"]),
    i19fullName: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19fullName"]),
    i19Gender: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19Gender"]),
    i19inscriptionNumber: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19inscriptionNumber"]),
    i19InscriptionType: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19InscriptionType"]),
    i19iReadAndAccept: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19iReadAndAccept"]),
    i19male: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19male"]),
    i19nickname: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19nickname"]),
    i19emailMarketingOptInMsg: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19emailMarketingOptInMsg"]),
    i19personalRegistration: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19personalRegistration"]),
    i19privacyPolicy: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19privacyPolicy"]),
    birthdate: {
      get() {
        return Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["birthDate"])(this.localCustomer);
      },

      set(dateStr) {
        if (dateStr.length === 8) {
          const dateNumber = (start, ln) => parseInt(dateStr.substr(start, ln), 10);

          let day, month, year;

          if (countryCode === 'BR') {
            day = dateNumber(0, 2);
            month = dateNumber(2, 2);
            year = dateNumber(4, 4);
          } else {
            day = dateNumber(6, 2);
            month = dateNumber(4, 2);
            year = dateNumber(0, 4);
          }

          const currentYear = new Date().getFullYear();

          if (year < currentYear - 125) {
            year = currentYear - 125;
          } else if (year > currentYear) {
            year = currentYear;
          }

          this.localCustomer.birth_date = {
            day,
            month,
            year
          };
        }
      }

    },
    phoneNumber: {
      get() {
        return this.getPhoneStr(0);
      },

      set(phoneStr) {
        this.localCustomer.phones[0] = this.parsePhoneStr(phoneStr);
      }

    },
    secondPhoneNumber: {
      get() {
        return this.getPhoneStr(1);
      },

      set(phoneStr) {
        const {
          phones
        } = this.localCustomer;
        phones[phones.length > 0 ? 1 : 0] = this.parsePhoneStr(phoneStr);
      }

    }
  },
  methods: {
    getPhoneStr(index = 0) {
      const {
        phones
      } = this.localCustomer;
      return phones[index] ? Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["phone"])(this.localCustomer.phones[index]) : '';
    },

    parsePhoneStr(phoneStr) {
      let code, number;

      if (phoneStr.charAt(0) === '+') {
        code = parseInt(phoneStr.substr(1, 2));
        number = phoneStr.substr(3);
      } else {
        number = phoneStr;
      }

      const phoneObj = {
        number
      };

      if (code >= 1 && code <= 999) {
        phoneObj.country_code = code;
      }

      return phoneObj;
    },

    update() {
      if (this.$el.checkValidity()) {
        this.$emit('update:customer', this.localCustomer);
      }
    },

    mergeLocalCustomer(newCustomer) {
      for (const field in newCustomer) {
        if (newCustomer[field]) {
          const localValue = this.localCustomer[field];

          if (!localValue || typeof localValue === 'object' && !Object.keys(localValue).length) {
            if (field === 'name') {
              this.fullName = Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["fullName"])({
                name: newCustomer[field]
              });
            } else {
              this.localCustomer[field] = newCustomer[field];
            }
          }
        }
      }
    },

    saveToStorage() {
      sessionStorage.setItem(storageKey, JSON.stringify(this.localCustomer));
    },

    submit() {
      this.$nextTick(() => {
        const $form = this.$el;

        if (!countInvalidInputs('.is-invalid')) {
          if (!this.localCustomer.display_name) {
            this.localCustomer.display_name = this.localCustomer.name.given_name;
          }

          if (Object(_helpers_check_form_validity__WEBPACK_IMPORTED_MODULE_4__["default"])($form)) {
            this.saveToStorage();
            this.save();
          } else if ($form.classList.contains(formValidateClass) && !countInvalidInputs()) {
            this.save();
          }

          $form.classList.add(formValidateClass);
        } else {
          $form.classList.remove(formValidateClass);
        }
      });
    },

    save() {
      this.update();
      this.$emit('submit', this.localCustomer);
      this.btnLabel = Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19saved"]) + '...';
      setTimeout(() => {
        this.btnLabel = this.btnText;
      }, 3000);
    }

  },
  watch: {
    fullName(nameStr) {
      const fixedFullName = nameStr.replace(/\s{2,}/g, ' ');

      if (fixedFullName !== this.fullName) {
        this.fullName = fixedFullName;
      } else {
        const names = fixedFullName.trim().split(' ');
        this.localCustomer.name = {
          given_name: names.shift()
        };
        const {
          name
        } = this.localCustomer;

        if (names.length) {
          name.family_name = names.pop();

          if (names.length) {
            name[name.family_name ? 'middle_name' : 'family_name'] = names.join(' ');
          }
        }
      }
    },

    customer: {
      handler() {
        this.mergeLocalCustomer(this.customer);
      },

      deep: true
    },
    localCustomer: {
      handler() {
        if (this.isGuestAccess) {
          this.$nextTick(this.update);
        }
      },

      deep: true
    }
  },

  created() {
    const sessionCustomer = JSON.parse(sessionStorage.getItem(storageKey));

    if (sessionCustomer) {
      this.mergeLocalCustomer(sessionCustomer);
    }

    this.storageInterval = setInterval(() => {
      if (Object.keys(this.localCustomer).length) {
        this.saveToStorage();
      }
    }, 7000);

    if (!this.localCustomer._id) {
      this.localCustomer.accepts_marketing = true;
    }
  },

  mounted() {
    const $inputs = this.$el.querySelectorAll('input');

    for (let i = 0; i < $inputs.length; i++) {
      if (!$inputs[i].value) {
        $inputs[i].focus();
        break;
      }
    }
  },

  destroyed() {
    clearInterval(this.storageInterval);
  }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/@ecomplus/storefront-components/src/js/AddressForm.js?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/@ecomplus/storefront-components/src/js/AddressForm.js?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/i18n */ "./node_modules/@ecomplus/storefront-components/node_modules/@ecomplus/i18n/src/pt_br/index.js");
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_check_form_validity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/check-form-validity */ "./node_modules/@ecomplus/storefront-components/src/js/helpers/check-form-validity.js");
/* harmony import */ var _InputZipCode_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../InputZipCode.vue */ "./node_modules/@ecomplus/storefront-components/src/InputZipCode.vue");





const countryCode = _ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["$ecomConfig"].get('country_code');
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AddressForm',
  components: {
    InputZipCode: _InputZipCode_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    address: {
      type: Object,

      default() {
        return {};
      }

    },
    zipCode: String,
    btnText: {
      type: String,

      default() {
        return Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19save"]);
      }

    }
  },

  data() {
    return {
      localAddress: {
        _id: Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["randomObjectId"])(),
        zip: '',
        province_code: '',
        ...this.address
      },
      isZipReady: countryCode !== 'BR',
      zipLoading: null,
      addressFromZip: {},
      isNoNumber: false
    };
  },

  computed: {
    i19borough: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19borough"]),
    i19city: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19city"]),
    i19complement: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19complement"]),
    i19name: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19name"]),
    i19noNumber: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19noNumber"]),
    i19number: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19number"]),
    i19provinceCode: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19provinceCode"]),
    i19recipient: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19recipient"]),
    i19reference: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19reference"]),
    i19street: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19street"]),
    i19zipCode: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19zipCode"]),
    provinceCode: {
      get() {
        return this.localAddress.province_code;
      },

      set(value) {
        this.localAddress.province_code = value.toUpperCase().slice(0, 2);
      }

    },

    zipInfoLink() {
      return countryCode === 'BR' ? 'http://www.buscacep.correios.com.br/sistemas/buscacep/default.cfm' : null;
    }

  },
  methods: {
    updateZipState() {
      if (countryCode === 'BR' && this.localAddress.zip.length >= 8) {
        if (this.zipLoading !== this.localAddress.zip) {
          this.addressFromZip = {};
          setTimeout(() => {
            this.fetchAddressInfo(this.localAddress.zip);
          }, this.zipLoading ? 150 : 50);
        }
      } else {
        this.zipLoading = null;
      }
    },

    fetchAddressInfo(zipCode, isRetry = false) {
      if (zipCode === this.localAddress.zip) {
        this.zipLoading = zipCode;
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`https://viacep.com.br/ws/${zipCode}/json/`, {
          timeout: 4000
        }).then(({
          data
        }) => {
          if (!data.erro && zipCode === this.localAddress.zip) {
            ;
            [['province_code', data.uf], ['city', data.localidade], ['borough', data.bairro], ['street', data.logradouro]].forEach(([field, value]) => {
              this.$set(this.localAddress, field, value || '');
              this.$set(this.addressFromZip, field, Boolean(value));
            });
            this.$nextTick(() => {
              setTimeout(() => {
                if (this.$refs.inputNumber) {
                  this.$refs.inputNumber.select();
                }
              }, 300);
            });
          }
        }).catch(err => {
          console.error(err);

          if (!isRetry) {
            setTimeout(() => {
              this.fetchAddressInfo(zipCode, true);
            }, 300);
          }
        }).finally(() => {
          if (zipCode === this.zipLoading) {
            this.zipLoading = null;
          }
        });
      }
    },

    submit(ev) {
      const $form = this.$el;

      if (Object(_helpers_check_form_validity__WEBPACK_IMPORTED_MODULE_3__["default"])($form)) {
        this.$emit('update:address', this.localAddress);
      }

      $form.classList.add('was-validated');
    }

  },
  watch: {
    zipCode(zip) {
      this.localAddress.zip = zip;
    },

    'localAddress.zip'(zip) {
      this.updateZipState();
      this.$emit('update:zip-code', zip);
    },

    zipLoading(zip) {
      if (zip) {
        this.isZipReady = false;
        setTimeout(() => {
          this.isZipReady = true;
        }, 1500);
      } else {
        this.isZipReady = true;
      }
    },

    isNoNumber(isNoNumber) {
      if (isNoNumber) {
        delete this.localAddress.number;
      }
    }

  },

  mounted() {
    this.updateZipState();
    const $inputs = this.$el.querySelectorAll('input');

    for (let i = 0; i < $inputs.length; i++) {
      if (!$inputs[i].value) {
        $inputs[i].focus();
        break;
      }
    }
  }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/@ecomplus/storefront-components/src/js/InputDate.js?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/@ecomplus/storefront-components/src/js/InputDate.js?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_1__);


const countryCode = _ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__["$ecomConfig"].get('country_code');
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'InputDate',
  components: {
    CleaveInput: (vue_cleave_component__WEBPACK_IMPORTED_MODULE_1___default())
  },
  props: {
    value: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    placeholder() {
      return countryCode === 'BR' ? 'dd/mm/aaaa' : 'yyyy-mm-dd';
    },

    localValue: {
      get() {
        return this.value;
      },

      set(value) {
        this.$emit('input', value);
      }

    },

    cleaveOptions() {
      return countryCode === 'BR' ? {
        date: true,
        delimiter: '/',
        datePattern: ['d', 'm', 'Y']
      } : {
        date: true,
        delimiter: '-',
        datePattern: ['Y', 'm', 'd']
      };
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/@ecomplus/storefront-components/src/js/InputDocNumber.js?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/@ecomplus/storefront-components/src/js/InputDocNumber.js?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ecomplus/i18n */ "./node_modules/@ecomplus/storefront-components/node_modules/@ecomplus/i18n/src/pt_br/index.js");
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var _brazilian_utils_brazilian_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @brazilian-utils/brazilian-utils */ "./node_modules/@brazilian-utils/brazilian-utils/dist/brazilian-utils.esm.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_4__);





const countryCode = _ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["$ecomConfig"].get('country_code');
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'InputDocNumber',
  components: {
    CleaveInput: (vue_cleave_component__WEBPACK_IMPORTED_MODULE_4___default())
  },
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    isCompany: Boolean
  },
  computed: {
    placeholder() {
      return countryCode === 'BR' ? this.isCompany ? 'CNPJ' : 'CPF' : Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19docNumber"]);
    },

    pattern() {
      if (countryCode === 'BR') {
        if (this.isCompany) {
          return '[\\d]{2}\\..{15}';
        } else {
          return '[\\d]{3}\\..{10}';
        }
      }

      return '[\\d]+{9,19}';
    },

    isInvalid() {
      if (countryCode === 'BR') {
        const docNumber = this.localValue.toString().replace(/D/g, '');

        if (this.isCompany) {
          if (docNumber.length === 14) {
            return !Object(_brazilian_utils_brazilian_utils__WEBPACK_IMPORTED_MODULE_3__["isValidCNPJ"])(this.localValue);
          }
        } else if (docNumber.length === 11) {
          return !Object(_brazilian_utils_brazilian_utils__WEBPACK_IMPORTED_MODULE_3__["isValidCPF"])(this.localValue);
        }
      }

      return false;
    },

    localValue: {
      get() {
        return this.value;
      },

      set(value) {
        this.$emit('input', value);
      }

    },

    cleaveOptions() {
      return countryCode === 'BR' ? this.isCompany ? {
        blocks: [2, 3, 3, 4, 2],
        delimiters: ['.', '.', '/', '-']
      } : {
        blocks: [3, 3, 3, 2],
        delimiters: ['.', '.', '-']
      } : {
        blocks: [30]
      };
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/@ecomplus/storefront-components/src/js/InputPhone.js?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/@ecomplus/storefront-components/src/js/InputPhone.js?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var cleave_js_dist_addons_cleave_phone_br__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cleave.js/dist/addons/cleave-phone.br */ "./node_modules/cleave.js/dist/addons/cleave-phone.br.js");
/* harmony import */ var cleave_js_dist_addons_cleave_phone_br__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cleave_js_dist_addons_cleave_phone_br__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_2__);



const countryCode = _ecomplus_utils__WEBPACK_IMPORTED_MODULE_0__["$ecomConfig"].get('country_code');
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'InputPhone',
  components: {
    CleaveInput: (vue_cleave_component__WEBPACK_IMPORTED_MODULE_2___default()),
    CleavePhone: (cleave_js_dist_addons_cleave_phone_br__WEBPACK_IMPORTED_MODULE_1___default())
  },
  props: {
    value: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    placeholder() {
      return countryCode === 'BR' ? '11 9 9999-9999' : '+1 999 9999 9999';
    },

    localValue: {
      get() {
        return this.value;
      },

      set(value) {
        this.$emit('input', value);
      }

    },

    cleaveOptions() {
      return countryCode === 'BR' ? {
        phone: true,
        phoneRegionCode: countryCode
      } : {
        phone: true
      };
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/@ecomplus/storefront-components/src/js/InputZipCode.js?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/@ecomplus/storefront-components/src/js/InputZipCode.js?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/i18n */ "./node_modules/@ecomplus/storefront-components/node_modules/@ecomplus/i18n/src/pt_br/index.js");
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_2__);



const countryCode = _ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["$ecomConfig"].get('country_code');
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'InputZipCode',
  components: {
    CleaveInput: (vue_cleave_component__WEBPACK_IMPORTED_MODULE_2___default())
  },
  props: {
    value: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    placeholder() {
      return Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19zipCode"]);
    },

    pattern() {
      if (countryCode === 'BR') {
        return '[\\d]{5}-[\\d]{3}';
      }

      return null;
    },

    localValue: {
      get() {
        return this.value;
      },

      set(value) {
        this.$emit('input', value);
      }

    },

    cleaveOptions() {
      return countryCode === 'BR' ? {
        blocks: [5, 3],
        delimiter: '-'
      } : {
        blocks: [30]
      };
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/@ecomplus/storefront-components/src/js/LoginBlock.js?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/@ecomplus/storefront-components/src/js/LoginBlock.js?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/i18n */ "./node_modules/@ecomplus/storefront-components/node_modules/@ecomplus/i18n/src/pt_br/index.js");
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var _ecomplus_passport_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ecomplus/passport-client */ "./node_modules/@ecomplus/passport-client/src/index.js");
/* harmony import */ var _AAlert_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AAlert.vue */ "./node_modules/@ecomplus/storefront-components/src/AAlert.vue");
/* harmony import */ var _InputDocNumber_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../InputDocNumber.vue */ "./node_modules/@ecomplus/storefront-components/src/InputDocNumber.vue");





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'LoginBlock',
  components: {
    AAlert: _AAlert_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    InputDocNumber: _InputDocNumber_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    customerEmail: String,
    canAcceptGuest: {
      type: Boolean,
      default: true
    },
    ecomPassport: {
      type: Object,

      default() {
        return _ecomplus_passport_client__WEBPACK_IMPORTED_MODULE_2__["default"];
      }

    }
  },

  data() {
    return {
      email: this.customerEmail,
      docNumber: '',
      isCompany: false,
      oauthProviders: [],
      isWaitingPopup: false,
      isWaitingLogin: false,
      failAlertText: null
    };
  },

  computed: {
    i19continue: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19continue"]),
    i19enterYourDocNumberMsg: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19enterYourDocNumberMsg"]),
    i19enterYourEmailMsg: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19enterYourEmailMsg"]),
    i19helloAgain: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19helloAgain"]),
    i19identifyYourAccount: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19identifyYourAccount"]),
    i19manageYourPurchaseHistory: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19manageYourPurchaseHistory"]),
    i19notifyAboutOrders: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19notifyAboutOrders"]),
    i19oauthOnPopup: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19oauthOnPopup"]),
    i19orProceedWith: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19orProceedWith"]),
    i19signInWith: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19signInWith"]),
    i19weUseYourDataToMsg: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19weUseYourDataToMsg"])
  },
  methods: {
    confirmAccount() {
      const {
        checkLogin,
        checkAuthorization,
        getCustomer
      } = this.ecomPassport;
      const isIdentified = checkLogin() && !checkAuthorization() && getCustomer().main_email === this.email;

      if (isIdentified) {
        this.$nextTick(() => {
          this.$refs.InputDoc.$el.focus();
        });
      }

      return isIdentified;
    },

    submitLogin() {
      if (!this.isWaitingLogin) {
        this.isWaitingLogin = true;
        this.failAlertText = null;
        const {
          email,
          docNumber
        } = this;
        const isAccountConfirm = this.confirmAccount();

        const emitUpdate = () => this.$emit('update', {
          email,
          docNumber
        });

        this.ecomPassport.fetchLogin(email, isAccountConfirm ? docNumber : null).then(() => {
          if (isAccountConfirm) {
            emitUpdate();
          }
        }).catch(err => {
          const {
            response
          } = err;

          if (!response || response.status !== 403) {
            console.error(err);
            this.failAlertText = Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19loginErrorMsg"]);
          } else if (!isAccountConfirm && this.canAcceptGuest) {
            this.$emit('update:customer-email', email);
            emitUpdate();
          } else {
            this.failAlertText = Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_1__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__["i19invalidLoginInfoMsg"]);
          }
        }).finally(() => {
          this.isWaitingLogin = false;
        });
      }
    },

    oauthPopup(link) {
      this.ecomPassport.popupOauthLink(link);
      this.isWaitingPopup = true;
      setTimeout(() => {
        this.isWaitingPopup = false;
      }, 7500);
    }

  },
  watch: {
    email() {
      this.failAlertText = null;
    },

    docNumber() {
      this.failAlertText = null;
    }

  },

  created() {
    this.ecomPassport.fetchOauthProviders().then(({
      host,
      baseUri,
      oauthPath,
      providers
    }) => {
      const oauthProviders = [];

      for (const provider in providers) {
        if (providers[provider]) {
          const {
            faIcon,
            providerName
          } = providers[provider];
          oauthProviders.push({
            link: host + baseUri + provider + oauthPath,
            faIcon,
            provider,
            providerName
          });
        }
      }

      this.oauthProviders = oauthProviders;
    }).catch(err => {
      console.error(err);
    });
  },

  mounted() {
    this.$refs.inputEmail.focus();
    const {
      checkLogin,
      checkAuthorization,
      getCustomer
    } = this.ecomPassport;

    const handleLogin = () => {
      if (checkAuthorization()) {
        this.$emit('login', this.ecomPassport);
      } else if (checkLogin()) {
        const customer = getCustomer();
        this.email = customer.main_email;
        this.isCompany = customer.registry_type === 'j';
      }
    };

    _ecomplus_passport_client__WEBPACK_IMPORTED_MODULE_2__["default"].on('login', () => {
      this.isWaitingPopup = false;
      handleLogin();
    });
    handleLogin();
  }

});

/***/ }),

/***/ "./node_modules/cleave.js/dist/addons/cleave-phone.br.js":
/*!***************************************************************!*\
  !*** ./node_modules/cleave.js/dist/addons/cleave-phone.br.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(){function n(n,t){var e=n.split("."),l=U;e[0]in l||!l.execScript||l.execScript("var "+e[0]);for(var r;e.length&&(r=e.shift());)e.length||void 0===t?l=l[r]?l[r]:l[r]={}:l[r]=t}function t(n,t){function e(){}e.prototype=t.prototype,n.M=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.N=function(n,e,l){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return t.prototype[e].apply(n,r)}}function e(n,t){null!=n&&this.a.apply(this,arguments)}function l(n){n.b=""}function r(n,t){n.sort(t||i)}function i(n,t){return n>t?1:n<t?-1:0}function u(n){var t,e=[],l=0;for(t in n)e[l++]=n[t];return e}function a(n,t){this.b=n,this.a={};for(var e=0;e<t.length;e++){var l=t[e];this.a[l.b]=l}}function o(n){return n=u(n.a),r(n,function(n,t){return n.b-t.b}),n}function s(n,t){switch(this.b=n,this.g=!!t.v,this.a=t.c,this.i=t.type,this.h=!1,this.a){case J:case K:case L:case O:case Z:case k:case Y:this.h=!0}this.f=t.defaultValue}function f(){this.a={},this.f=this.j().a,this.b=this.g=null}function p(n,t){for(var e=o(n.j()),l=0;l<e.length;l++){var r=e[l],i=r.b;if(null!=t.a[i]){n.b&&delete n.b[r.b];var u=11==r.a||10==r.a;if(r.g)for(var r=c(t,i)||[],a=0;a<r.length;a++){var s=n,f=i,h=u?r[a].clone():r[a];s.a[f]||(s.a[f]=[]),s.a[f].push(h),s.b&&delete s.b[f]}else r=c(t,i),u?(u=c(n,i))?p(u,r):b(n,i,r.clone()):b(n,i,r)}}}function c(n,t){var e=n.a[t];if(null==e)return null;if(n.g){if(!(t in n.b)){var l=n.g,r=n.f[t];if(null!=e)if(r.g){for(var i=[],u=0;u<e.length;u++)i[u]=l.b(r,e[u]);e=i}else e=l.b(r,e);return n.b[t]=e}return n.b[t]}return e}function h(n,t,e){var l=c(n,t);return n.f[t].g?l[e||0]:l}function g(n,t){var e;if(null!=n.a[t])e=h(n,t,void 0);else n:{if(e=n.f[t],void 0===e.f){var l=e.i;if(l===Boolean)e.f=!1;else if(l===Number)e.f=0;else{if(l!==String){e=new l;break n}e.f=e.h?"0":""}}e=e.f}return e}function m(n,t){return n.f[t].g?null!=n.a[t]?n.a[t].length:0:null!=n.a[t]?1:0}function b(n,t,e){n.a[t]=e,n.b&&(n.b[t]=e)}function d(n,t){var e,l=[];for(e in t)0!=e&&l.push(new s(e,t[e]));return new a(n,l)}/*

 Protocol Buffer 2 Copyright 2008 Google Inc.
 All other code copyright its respective owners.
 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function y(){f.call(this)}function v(){f.call(this)}function _(){f.call(this)}function $(){}function S(){}function w(){}/*

 Copyright (C) 2010 The Libphonenumber Authors.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function x(){this.a={}}function A(n){return 0==n.length||un.test(n)}function N(n,t){if(null==t)return null;t=t.toUpperCase();var e=n.a[t];if(null==e){if(e=tn[t],null==e)return null;e=(new w).a(_.j(),e),n.a[t]=e}return e}function C(n){return n=nn[n],null==n?"ZZ":n[0]}function j(n){this.H=RegExp("???"),this.C="",this.m=new e,this.w="",this.i=new e,this.u=new e,this.l=!0,this.A=this.o=this.F=!1,this.G=x.b(),this.s=0,this.b=new e,this.B=!1,this.h="",this.a=new e,this.f=[],this.D=n,this.J=this.g=B(this,this.D)}function B(n,t){var e;if(null!=t&&isNaN(t)&&t.toUpperCase()in tn){if(e=N(n.G,t),null==e)throw Error("Invalid region code: "+t);e=g(e,10)}else e=0;return e=N(n.G,C(e)),null!=e?e:an}function R(n){for(var t=n.f.length,e=0;e<t;++e){var r=n.f[e],i=g(r,1);if(n.w==i)return!1;var u;u=n;var a=r,o=g(a,1);if(-1!=o.indexOf("|"))u=!1;else{o=o.replace(on,"\\d"),o=o.replace(sn,"\\d"),l(u.m);var s;s=u;var a=g(a,2),f="999999999999999".match(o)[0];f.length<s.a.b.length?s="":(s=f.replace(new RegExp(o,"g"),a),s=s.replace(RegExp("9","g"),"???")),0<s.length?(u.m.a(s),u=!0):u=!1}if(u)return n.w=i,n.B=pn.test(h(r,4)),n.s=0,!0}return n.l=!1}function E(n,t){for(var e=[],l=t.length-3,r=n.f.length,i=0;i<r;++i){var u=n.f[i];0==m(u,3)?e.push(n.f[i]):(u=h(u,3,Math.min(l,m(u,3)-1)),0==t.search(u)&&e.push(n.f[i]))}n.f=e}function F(n,t){n.i.a(t);var e=t;if(rn.test(e)||1==n.i.b.length&&ln.test(e)){var r,e=t;"+"==e?(r=e,n.u.a(e)):(r=en[e],n.u.a(r),n.a.a(r)),t=r}else n.l=!1,n.F=!0;if(!n.l){if(!n.F)if(P(n)){if(q(n))return I(n)}else if(0<n.h.length&&(e=n.a.toString(),l(n.a),n.a.a(n.h),n.a.a(e),e=n.b.toString(),r=e.lastIndexOf(n.h),l(n.b),n.b.a(e.substring(0,r))),n.h!=H(n))return n.b.a(" "),I(n);return n.i.toString()}switch(n.u.b.length){case 0:case 1:case 2:return n.i.toString();case 3:if(!P(n))return n.h=H(n),V(n);n.A=!0;default:return n.A?(q(n)&&(n.A=!1),n.b.toString()+n.a.toString()):0<n.f.length?(e=T(n,t),r=D(n),0<r.length?r:(E(n,n.a.toString()),R(n)?G(n):n.l?M(n,e):n.i.toString())):V(n)}}function I(n){return n.l=!0,n.A=!1,n.f=[],n.s=0,l(n.m),n.w="",V(n)}function D(n){for(var t=n.a.toString(),e=n.f.length,l=0;l<e;++l){var r=n.f[l],i=g(r,1);if(new RegExp("^(?:"+i+")$").test(t))return n.B=pn.test(h(r,4)),t=t.replace(new RegExp(i,"g"),h(r,2)),M(n,t)}return""}function M(n,t){var e=n.b.b.length;return n.B&&0<e&&" "!=n.b.toString().charAt(e-1)?n.b+" "+t:n.b+t}function V(n){var t=n.a.toString();if(3<=t.length){for(var e=n.o&&0==n.h.length&&0<m(n.g,20)?c(n.g,20)||[]:c(n.g,19)||[],l=e.length,r=0;r<l;++r){var i=e[r];0<n.h.length&&A(g(i,4))&&!h(i,6)&&null==i.a[5]||(0!=n.h.length||n.o||A(g(i,4))||h(i,6))&&fn.test(g(i,2))&&n.f.push(i)}return E(n,t),t=D(n),0<t.length?t:R(n)?G(n):n.i.toString()}return M(n,t)}function G(n){var t=n.a.toString(),e=t.length;if(0<e){for(var l="",r=0;r<e;r++)l=T(n,t.charAt(r));return n.l?M(n,l):n.i.toString()}return n.b.toString()}function H(n){var t,e=n.a.toString(),r=0;return 1!=h(n.g,10)?t=!1:(t=n.a.toString(),t="1"==t.charAt(0)&&"0"!=t.charAt(1)&&"1"!=t.charAt(1)),t?(r=1,n.b.a("1").a(" "),n.o=!0):null!=n.g.a[15]&&(t=new RegExp("^(?:"+h(n.g,15)+")"),t=e.match(t),null!=t&&null!=t[0]&&0<t[0].length&&(n.o=!0,r=t[0].length,n.b.a(e.substring(0,r)))),l(n.a),n.a.a(e.substring(r)),e.substring(0,r)}function P(n){var t=n.u.toString(),e=new RegExp("^(?:\\+|"+h(n.g,11)+")"),e=t.match(e);return null!=e&&null!=e[0]&&0<e[0].length&&(n.o=!0,e=e[0].length,l(n.a),n.a.a(t.substring(e)),l(n.b),n.b.a(t.substring(0,e)),"+"!=t.charAt(0)&&n.b.a(" "),!0)}function q(n){if(0==n.a.b.length)return!1;var t,r=new e;n:{if(t=n.a.toString(),0!=t.length&&"0"!=t.charAt(0))for(var i,u=t.length,a=1;3>=a&&a<=u;++a)if(i=parseInt(t.substring(0,a),10),i in nn){r.a(t.substring(a)),t=i;break n}t=0}return 0!=t&&(l(n.a),n.a.a(r.toString()),r=C(t),"001"==r?n.g=N(n.G,""+t):r!=n.D&&(n.g=B(n,r)),n.b.a(""+t).a(" "),n.h="",!0)}function T(n,t){var e=n.m.toString();if(0<=e.substring(n.s).search(n.H)){var r=e.search(n.H),e=e.replace(n.H,t);return l(n.m),n.m.a(e),n.s=r,e.substring(0,n.s+1)}return 1==n.f.length&&(n.l=!1),n.w="",n.i.toString()}var U=this;e.prototype.b="",e.prototype.set=function(n){this.b=""+n},e.prototype.a=function(n,t,e){if(this.b+=String(n),null!=t)for(var l=1;l<arguments.length;l++)this.b+=arguments[l];return this},e.prototype.toString=function(){return this.b};var Y=1,k=2,J=3,K=4,L=6,O=16,Z=18;f.prototype.set=function(n,t){b(this,n.b,t)},f.prototype.clone=function(){var n=new this.constructor;return n!=this&&(n.a={},n.b&&(n.b={}),p(n,this)),n},t(y,f);var z=null;t(v,f);var Q=null;t(_,f);var W=null;y.prototype.j=function(){var n=z;return n||(z=n=d(y,{0:{name:"NumberFormat",I:"i18n.phonenumbers.NumberFormat"},1:{name:"pattern",required:!0,c:9,type:String},2:{name:"format",required:!0,c:9,type:String},3:{name:"leading_digits_pattern",v:!0,c:9,type:String},4:{name:"national_prefix_formatting_rule",c:9,type:String},6:{name:"national_prefix_optional_when_formatting",c:8,defaultValue:!1,type:Boolean},5:{name:"domestic_carrier_code_formatting_rule",c:9,type:String}})),n},y.j=y.prototype.j,v.prototype.j=function(){var n=Q;return n||(Q=n=d(v,{0:{name:"PhoneNumberDesc",I:"i18n.phonenumbers.PhoneNumberDesc"},2:{name:"national_number_pattern",c:9,type:String},9:{name:"possible_length",v:!0,c:5,type:Number},10:{name:"possible_length_local_only",v:!0,c:5,type:Number},6:{name:"example_number",c:9,type:String}})),n},v.j=v.prototype.j,_.prototype.j=function(){var n=W;return n||(W=n=d(_,{0:{name:"PhoneMetadata",I:"i18n.phonenumbers.PhoneMetadata"},1:{name:"general_desc",c:11,type:v},2:{name:"fixed_line",c:11,type:v},3:{name:"mobile",c:11,type:v},4:{name:"toll_free",c:11,type:v},5:{name:"premium_rate",c:11,type:v},6:{name:"shared_cost",c:11,type:v},7:{name:"personal_number",c:11,type:v},8:{name:"voip",c:11,type:v},21:{name:"pager",c:11,type:v},25:{name:"uan",c:11,type:v},27:{name:"emergency",c:11,type:v},28:{name:"voicemail",c:11,type:v},29:{name:"short_code",c:11,type:v},30:{name:"standard_rate",c:11,type:v},31:{name:"carrier_specific",c:11,type:v},33:{name:"sms_services",c:11,type:v},24:{name:"no_international_dialling",c:11,type:v},9:{name:"id",required:!0,c:9,type:String},10:{name:"country_code",c:5,type:Number},11:{name:"international_prefix",c:9,type:String},17:{name:"preferred_international_prefix",c:9,type:String},12:{name:"national_prefix",c:9,type:String},13:{name:"preferred_extn_prefix",c:9,type:String},15:{name:"national_prefix_for_parsing",c:9,type:String},16:{name:"national_prefix_transform_rule",c:9,type:String},18:{name:"same_mobile_and_fixed_line_pattern",c:8,defaultValue:!1,type:Boolean},19:{name:"number_format",v:!0,c:11,type:y},20:{name:"intl_number_format",v:!0,c:11,type:y},22:{name:"main_country_for_code",c:8,defaultValue:!1,type:Boolean},23:{name:"leading_digits",c:9,type:String},26:{name:"leading_zero_possible",c:8,defaultValue:!1,type:Boolean}})),n},_.j=_.prototype.j,$.prototype.a=function(n){throw new n.b,Error("Unimplemented")},$.prototype.b=function(n,t){if(11==n.a||10==n.a)return t instanceof f?t:this.a(n.i.prototype.j(),t);if(14==n.a){if("string"==typeof t&&X.test(t)){var e=Number(t);if(0<e)return e}return t}if(!n.h)return t;if(e=n.i,e===String){if("number"==typeof t)return String(t)}else if(e===Number&&"string"==typeof t&&("Infinity"===t||"-Infinity"===t||"NaN"===t||X.test(t)))return Number(t);return t};var X=/^-?[0-9]+$/;t(S,$),S.prototype.a=function(n,t){var e=new n.b;return e.g=this,e.a=t,e.b={},e},t(w,S),w.prototype.b=function(n,t){return 8==n.a?!!t:$.prototype.b.apply(this,arguments)},w.prototype.a=function(n,t){return w.M.a.call(this,n,t)};/*

 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var nn={55:["BR"]},tn={BR:[null,[null,null,"(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-24679]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}",null,null,null,null,null,null,[8,9,10,11]],[null,null,"(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-5]\\d{7}",null,null,null,"1123456789",null,null,[10],[8]],[null,null,"(?:[189][1-9]|2[12478])(?:7|9\\d)\\d{7}|(?:3[1-578]|[46][1-9]|5[13-5]|7[13-579])(?:[6-9]|9\\d)\\d{7}",null,null,null,"11961234567",null,null,[10,11],[8]],[null,null,"800\\d{6,7}",null,null,null,"800123456",null,null,[9,10]],[null,null,"(?:300|[59]00\\d?)\\d{6}",null,null,null,"300123456",null,null,[9,10]],[null,null,"(?:300\\d(?:\\d{2})?|4(?:0(?:0\\d|20)|370))\\d{4}",null,null,null,"40041234",null,null,[8,10]],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],"BR",55,"00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)","0",null,null,"0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?","$2",null,null,[[null,"(\\d{4})(\\d{4})","$1-$2",["300|4(?:0[02]|37)","300|4(?:0(?:0|20)|370)"]],[null,"(\\d{3})(\\d{2,3})(\\d{4})","$1 $2 $3",["[3589]00"],"0$1"],[null,"(\\d{3,5})","$1",["1[125689]"]],[null,"(\\d{4})(\\d{4})","$1-$2",["[2-9](?:0[1-9]|[1-9])"]],[null,"(\\d{5})(\\d{4})","$1-$2",["9(?:0[1-9]|[1-9])"]],[null,"(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["[1-9][1-9]"],"($1)","0 $CC ($1)"],[null,"(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["[1-9][1-9]9"],"($1)","0 $CC ($1)"]],[[null,"(\\d{4})(\\d{4})","$1-$2",["300|4(?:0[02]|37)","300|4(?:0(?:0|20)|370)"]],[null,"(\\d{3})(\\d{2,3})(\\d{4})","$1 $2 $3",["[3589]00"],"0$1"],[null,"(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["[1-9][1-9]"],"($1)","0 $CC ($1)"],[null,"(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["[1-9][1-9]9"],"($1)","0 $CC ($1)"]],[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,"(?:300\\d|40(?:0\\d|20))\\d{4}",null,null,null,null,null,null,[8]],[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]]]};x.b=function(){return x.a?x.a:x.a=new x};var en={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","???":"0","???":"1","???":"2","???":"3","???":"4","???":"5","???":"6","???":"7","???":"8","???":"9","??":"0","??":"1","??":"2","??":"3","??":"4","??":"5","??":"6","??":"7","??":"8","??":"9","??":"0","??":"1","??":"2","??":"3","??":"4","??":"5","??":"6","??":"7","??":"8","??":"9"},ln=RegExp("[+???]+"),rn=RegExp("([0-9???-?????-????-??])"),un=/^\(?\$1\)?$/,an=new _;b(an,11,"NA");var on=/\[([^\[\]])*\]/g,sn=/\d(?=[^,}][^,}])/g,fn=RegExp("^[-x???-????????????-??? ?????????????()????????????.\\[\\]/~?????????]*(\\$\\d[-x???-????????????-??? ?????????????()????????????.\\[\\]/~?????????]*)+$"),pn=/[- ]/;j.prototype.K=function(){this.C="",l(this.i),l(this.u),l(this.m),this.s=0,this.w="",l(this.b),this.h="",l(this.a),this.l=!0,this.A=this.o=this.F=!1,this.f=[],this.B=!1,this.g!=this.J&&(this.g=B(this,this.D))},j.prototype.L=function(n){return this.C=F(this,n)},n("Cleave.AsYouTypeFormatter",j),n("Cleave.AsYouTypeFormatter.prototype.inputDigit",j.prototype.L),n("Cleave.AsYouTypeFormatter.prototype.clear",j.prototype.K)}.call("object"==typeof global&&global?global:window);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/@ecomplus/storefront-components/src/scss/AccountAddresses.scss?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--0-oneOf-0-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--0-oneOf-0-2!./node_modules/postcss-loader/dist/cjs.js??ref--0-oneOf-0-3!./node_modules/sass-loader/dist/cjs.js??ref--0-oneOf-0-4!./node_modules/@ecomplus/storefront-components/src/scss/AccountAddresses.scss?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".account-addresses__card{margin-bottom:1rem;font-size:.9rem}.account-addresses__card label{width:100%}.account-addresses__actions{margin-top:.5rem}.account-addresses__actions .btn{margin-right:.5rem}.account-addresses__address{margin-bottom:0}.account-addresses__city,.account-addresses__line{display:block}", "",{"version":3,"sources":["AccountAddresses.scss"],"names":[],"mappings":"AAKE,yBACE,kBAAmB,CACnB,eAAgB,CAFjB,+BAKG,UAAW,CAIf,4BACE,gBAAiB,CADlB,iCAIG,kBAAmB,CAIvB,4BACE,eAAgB,CAGlB,kDAEE,aAAc","file":"AccountAddresses.scss","sourcesContent":["$primary: #e83e8c; $secondary: #333333; $settings-theme: (\n  bootswatch: _,\n  custom: _\n); \n.account-addresses {\n  &__card {\n    margin-bottom: 1rem;\n    font-size: .9rem;\n\n    label {\n      width: 100%;\n    }\n  }\n\n  &__actions {\n    margin-top: .5rem;\n\n    .btn {\n      margin-right: .5rem;\n    }\n  }\n\n  &__address {\n    margin-bottom: 0;\n  }\n\n  &__line,\n  &__city {\n    display: block;\n  }\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/@ecomplus/storefront-components/src/scss/AccountForm.scss?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--0-oneOf-0-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--0-oneOf-0-2!./node_modules/postcss-loader/dist/cjs.js??ref--0-oneOf-0-3!./node_modules/sass-loader/dist/cjs.js??ref--0-oneOf-0-4!./node_modules/@ecomplus/storefront-components/src/scss/AccountForm.scss?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".account-form__inscription{align-items:end}", "",{"version":3,"sources":["AccountForm.scss"],"names":[],"mappings":"AAKE,2BACE,eAAgB","file":"AccountForm.scss","sourcesContent":["$primary: #e83e8c; $secondary: #333333; $settings-theme: (\n  bootswatch: _,\n  custom: _\n); \n.account-form {\n  &__inscription {\n    align-items: end;\n  }\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/@ecomplus/storefront-components/src/scss/AddressForm.scss?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--0-oneOf-0-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--0-oneOf-0-2!./node_modules/postcss-loader/dist/cjs.js??ref--0-oneOf-0-3!./node_modules/sass-loader/dist/cjs.js??ref--0-oneOf-0-4!./node_modules/@ecomplus/storefront-components/src/scss/AddressForm.scss?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".address-form{max-width:600px;margin:0 auto}.address-form__zip{max-width:225px}.address-form__number{align-items:center}", "",{"version":3,"sources":["AddressForm.scss"],"names":[],"mappings":"AAIA,cACE,eAAgB,CAChB,aAAc,CAEd,mBACE,eAAgB,CAGlB,sBACE,kBAAmB","file":"AddressForm.scss","sourcesContent":["$primary: #e83e8c; $secondary: #333333; $settings-theme: (\n  bootswatch: _,\n  custom: _\n); \n.address-form {\n  max-width: 600px;\n  margin: 0 auto;\n\n  &__zip {\n    max-width: 225px;\n  }\n\n  &__number {\n    align-items: center;\n  }\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/@ecomplus/storefront-components/src/scss/LoginBlock.scss?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--0-oneOf-0-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--0-oneOf-0-2!./node_modules/postcss-loader/dist/cjs.js??ref--0-oneOf-0-3!./node_modules/sass-loader/dist/cjs.js??ref--0-oneOf-0-4!./node_modules/@ecomplus/storefront-components/src/scss/LoginBlock.scss?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".login{max-width:800px;margin:0 auto;text-align:center}.login__email-btn{white-space:nowrap;overflow:hidden}.login__confirm{max-width:525px;margin:var(--spacer-3) auto 0}.login__confirm .alert{font-size:var(--font-size-sm)}.login__hello:after{color:var(--gray);content:\" :)\"}.login__info{padding:var(--spacer-3) var(--spacer-4);background:var(--light);border-radius:var(--border-radius);text-align:left;margin:var(--spacer-4) auto 0;max-width:650px;border-bottom:5px solid var(--success)}.login__info-title{color:var(--secondary);margin-bottom:var(--spacer-2)}.login__info-title i,.login__info-title svg{margin-right:var(--spacer-2)}.login__info-row{color:var(--gray);font-size:var(--font-size-sm)}.login__info-row i,.login__info-row svg{color:var(--success);margin-right:var(--spacer-1)}.login__oauth{margin-top:var(--spacer-4)}.login__btn{color:#fff;text-align:left;line-height:1.2rem;padding:.5rem 1.2rem .7rem}.login__btn:hover{color:#fff}.login__btn:focus{box-shadow:none}@media (max-width:575.98px){.login__btn{display:block;width:100%;margin-left:0;text-align:right;padding:.8rem}.login__btn:not(:first-of-type){margin-top:var(--spacer-2)}.login__btn i,.login__btn svg{float:left}}@media (min-width:576px){.login__btn:not(:first-of-type){margin-left:var(--spacer-2)}.login__btn>small{display:block;text-align:center;margin-bottom:var(--spacer-1)}}.login__btn--facebook{background:#3b5999;border-color:#2f4d8a}.login__btn--facebook:hover{background:#274480;border-color:#274480}.login__btn--google{background:#cb4023;border-color:#be3419}.login__btn--google:hover{background:#c1361a;border-color:#c1361a}.login__btn--windowslive{background:#329ffc;border-color:#2996f2}.login__btn--windowslive:hover{background:#1f8ce9;border-color:#1f8ce9}.login__popup-overlay{position:fixed;top:0;left:0;z-index:2100;background:hsla(0,0%,100%,.9);width:100vw;height:100vh;padding:2rem;display:flex;flex-direction:row;align-items:flex-end;justify-content:space-around}", "",{"version":3,"sources":["LoginBlock.scss"],"names":[],"mappings":"AAIA,OACE,eAAgB,CAChB,aAAc,CACd,iBAAkB,CAElB,kBACE,kBAAmB,CACnB,eAAgB,CAGlB,gBACE,eAAgB,CAChB,6BAA8B,CAF/B,uBAKG,6BAA8B,CAIjC,oBAEG,iBAAkB,CAClB,aAAc,CAIlB,aACE,uCAAwC,CACxC,uBAAwB,CACxB,kCAAmC,CACnC,eAAgB,CAChB,6BAA8B,CAC9B,eAAgB,CAChB,sCAAuC,CAEvC,mBACE,sBAAuB,CACvB,6BAA8B,CAF/B,4CAMG,4BAA6B,CAIjC,iBACE,iBAAkB,CAClB,6BAA8B,CAF/B,wCAMG,oBAAqB,CACrB,4BAA6B,CAKnC,cACE,0BAA2B,CAG7B,YACE,UAAW,CACX,eAAgB,CAChB,kBAAmB,CACnB,0BAA2B,CAJ5B,kBAOG,UAAW,CAPd,kBAWG,eAAgB,CAGlB,4BAdF,YAeI,aAAc,CACd,UAAW,CACX,aAAc,CACd,gBAAiB,CACjB,aAAc,CAnBjB,gCAsBK,0BAA2B,CAtBhC,8BA2BK,UAAW,CACZ,CAGH,yBA/BD,gCAiCK,2BAA4B,CAjCjC,kBAqCK,aAAc,CACd,iBAAkB,CAClB,6BAA8B,CAC/B,CAGH,sBACE,kBAAmB,CACnB,oBAAqB,CAFtB,4BAKG,kBAAmB,CACnB,oBAAqB,CAIzB,oBACE,kBAAmB,CACnB,oBAAqB,CAFtB,0BAKG,kBAAmB,CACnB,oBAAqB,CAIzB,yBACE,kBAAmB,CACnB,oBAAqB,CAFtB,+BAKG,kBAAmB,CACnB,oBAAqB,CAK3B,sBACE,cAAe,CACf,KAAM,CACN,MAAO,CACP,YAAa,CACb,6BAAmC,CACnC,WAAY,CACZ,YAAa,CACb,YAAa,CACb,YAAa,CACb,kBAAmB,CACnB,oBAAqB,CACrB,4BAA6B","file":"LoginBlock.scss","sourcesContent":["$primary: #e83e8c; $secondary: #333333; $settings-theme: (\n  bootswatch: _,\n  custom: _\n); \n.login {\n  max-width: 800px;\n  margin: 0 auto;\n  text-align: center;\n\n  &__email-btn {\n    white-space: nowrap;\n    overflow: hidden;\n  }\n\n  &__confirm {\n    max-width: 525px;\n    margin: var(--spacer-3) auto 0;\n\n    .alert {\n      font-size: var(--font-size-sm);\n    }\n  }\n\n  &__hello {\n    &::after {\n      color: var(--gray);\n      content: ' :)';\n    }\n  }\n\n  &__info {\n    padding: var(--spacer-3) var(--spacer-4);\n    background: var(--light);\n    border-radius: var(--border-radius);\n    text-align: left;\n    margin: var(--spacer-4) auto 0;\n    max-width: 650px;\n    border-bottom: 5px solid var(--success);\n\n    &-title {\n      color: var(--secondary);\n      margin-bottom: var(--spacer-2);\n\n      i,\n      svg {\n        margin-right: var(--spacer-2);\n      }\n    }\n\n    &-row {\n      color: var(--gray);\n      font-size: var(--font-size-sm);\n\n      i,\n      svg {\n        color: var(--success);\n        margin-right: var(--spacer-1);\n      }\n    }\n  }\n\n  &__oauth {\n    margin-top: var(--spacer-4);\n  }\n\n  &__btn {\n    color: #fff;\n    text-align: left;\n    line-height: 1.2rem;\n    padding: .5rem 1.2rem .7rem;\n\n    &:hover {\n      color: #fff;\n    }\n\n    &:focus {\n      box-shadow: none;\n    }\n\n    @media (max-width: 575.98px) {\n      display: block;\n      width: 100%;\n      margin-left: 0;\n      text-align: right;\n      padding: .8rem;\n\n      &:not(:first-of-type) {\n        margin-top: var(--spacer-2);\n      }\n\n      i,\n      svg {\n        float: left;\n      }\n    }\n\n    @media (min-width: 576px) {\n      &:not(:first-of-type) {\n        margin-left: var(--spacer-2);\n      }\n\n      > small {\n        display: block;\n        text-align: center;\n        margin-bottom: var(--spacer-1);\n      }\n    }\n\n    &--facebook {\n      background: #3b5999;\n      border-color: #2f4d8a;\n\n      &:hover {\n        background: #274480;\n        border-color: #274480;\n      }\n    }\n\n    &--google {\n      background: #cb4023;\n      border-color: #be3419;\n\n      &:hover {\n        background: #c1361a;\n        border-color: #c1361a;\n      }\n    }\n\n    &--windowslive {\n      background: #329ffc;\n      border-color: #2996f2;\n\n      &:hover {\n        background: #1f8ce9;\n        border-color: #1f8ce9;\n      }\n    }\n  }\n\n  &__popup-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 2100;\n    background: rgba(255, 255, 255, .9);\n    width: 100vw;\n    height: 100vh;\n    padding: 2rem;\n    display: flex;\n    flex-direction: row;\n    align-items: flex-end;\n    justify-content: space-around;\n  }\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@ecomplus/storefront-components/src/html/AccountAddresses.html?vue&type=template&id=55a5ed34&lang=html&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@ecomplus/storefront-components/src/html/AccountAddresses.html?vue&type=template&id=55a5ed34&lang=html& ***!
  \**********************************************************************************************************************************************************************************************************/
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
    { staticClass: "account-addresses" },
    [
      _c(
        "transition-group",
        { attrs: { "enter-active-class": "animated fadeIn" } },
        [
          _vm.canShowForm
            ? _c("address-form", {
                key: "form",
                attrs: {
                  address: _vm.localAddress,
                  "btn-text": _vm.formBtnText
                },
                on: {
                  "update:address": function($event) {
                    _vm.localAddress = $event
                  }
                }
              })
            : _vm.addresses.length
            ? _c(
                "div",
                { key: "list" },
                [
                  _vm._l(_vm.addresses, function(address, index) {
                    return _c(
                      "div",
                      {
                        key: address._id,
                        staticClass: "account-addresses__card card"
                      },
                      [
                        _c("div", { staticClass: "card-body" }, [
                          _c(
                            "div",
                            { staticClass: "custom-control custom-radio" },
                            [
                              _c("input", {
                                staticClass: "custom-control-input",
                                attrs: {
                                  type: "radio",
                                  id: "account-address-" + index,
                                  name: "account-address-selected"
                                },
                                domProps: { checked: address.default },
                                on: {
                                  change: function($event) {
                                    return _vm.selectAddress(address)
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "custom-control-label",
                                  attrs: { for: "account-address-" + index }
                                },
                                [
                                  _c(
                                    "address",
                                    {
                                      staticClass: "account-addresses__address"
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass: "account-addresses__line"
                                        },
                                        [
                                          _vm._v(
                                            "\n                  " +
                                              _vm._s(
                                                _vm.getLineAddress(address)
                                              ) +
                                              "\n                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      address.city
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "account-addresses__city"
                                            },
                                            [
                                              _vm._v(
                                                "\n                  " +
                                                  _vm._s(
                                                    address.city +
                                                      " / " +
                                                      (address.province_code ||
                                                        address.province)
                                                  ) +
                                                  "\n                "
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass: "account-addresses__zip"
                                        },
                                        [
                                          _vm._v(
                                            "\n                  " +
                                              _vm._s(address.zip) +
                                              "\n                "
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "account-addresses__actions" },
                            [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-sm btn-light",
                                  attrs: {
                                    type: "button",
                                    "aria-label": _vm.i19edit
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.editAddressIndex = index
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-pencil-alt" })]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-sm btn-danger",
                                  attrs: {
                                    type: "button",
                                    "aria-label": _vm.i19remove
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.removeAddress(index)
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-trash-alt" })]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "account-addresses__recipient card-footer"
                          },
                          [
                            _vm._v(
                              "\n          " +
                                _vm._s(address.name) +
                                "\n        "
                            )
                          ]
                        )
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-outline-secondary",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          _vm.isNewAddress = true
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "fas fa-plus mr-1" }),
                      _vm._v(
                        "\n        " + _vm._s(_vm.i19newAddress) + "\n      "
                      )
                    ]
                  )
                ],
                2
              )
            : _vm._e()
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@ecomplus/storefront-components/src/html/AccountForm.html?vue&type=template&id=353fc922&lang=html&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@ecomplus/storefront-components/src/html/AccountForm.html?vue&type=template&id=353fc922&lang=html& ***!
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
    "form",
    {
      staticClass: "account-form needs-validation",
      attrs: { novalidate: "" },
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.submit.apply(null, arguments)
        }
      }
    },
    [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "account-form-email" } }, [
          _vm._v("\n      " + _vm._s(_vm.i19emailAddress) + "\n    ")
        ]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model.trim",
              value: _vm.localCustomer.main_email,
              expression: "localCustomer.main_email",
              modifiers: { trim: true }
            }
          ],
          staticClass: "form-control",
          attrs: {
            type: "email",
            pattern: "\\S+@\\S+\\.\\S{2,}",
            id: "account-form-email",
            placeholder: "email@mail.com",
            required: ""
          },
          domProps: { value: _vm.localCustomer.main_email },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(
                _vm.localCustomer,
                "main_email",
                $event.target.value.trim()
              )
            },
            blur: function($event) {
              return _vm.$forceUpdate()
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-row" }, [
        _c("div", { staticClass: "form-group col-lg-8" }, [
          _c("label", { attrs: { for: "account-form-name" } }, [
            _vm._v("\n        " + _vm._s(_vm.i19fullName) + "\n      ")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model.trim",
                value: _vm.fullName,
                expression: "fullName",
                modifiers: { trim: true }
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              pattern: "[^\\d\\s]{2,}[\\s][^\\d\\s]{2,}.*",
              id: "account-form-name",
              required: ""
            },
            domProps: { value: _vm.fullName },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.fullName = $event.target.value.trim()
              },
              blur: function($event) {
                return _vm.$forceUpdate()
              }
            }
          })
        ]),
        _vm._v(" "),
        !_vm.isShort
          ? _c("div", { staticClass: "form-group col-lg-4" }, [
              _c("label", { attrs: { for: "account-form-nickname" } }, [
                _vm._v("\n        " + _vm._s(_vm.i19nickname) + "\n      ")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.trim",
                    value: _vm.localCustomer.display_name,
                    expression: "localCustomer.display_name",
                    modifiers: { trim: true }
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  pattern: "[^\\d\\s]{2,}.*",
                  id: "account-form-nickname"
                },
                domProps: { value: _vm.localCustomer.display_name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.localCustomer,
                      "display_name",
                      $event.target.value.trim()
                    )
                  },
                  blur: function($event) {
                    return _vm.$forceUpdate()
                  }
                }
              })
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      !_vm.isShort
        ? _c(
            "div",
            { staticClass: "form-group" },
            _vm._l(_vm.i19Gender, function(label, value) {
              return _c(
                "div",
                {
                  staticClass:
                    "custom-control custom-radio custom-control-inline"
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.localCustomer.gender,
                        expression: "localCustomer.gender"
                      }
                    ],
                    staticClass: "custom-control-input",
                    attrs: {
                      type: "radio",
                      name: "account-form-gender",
                      id: "account-form-gender-" + value
                    },
                    domProps: {
                      value: value,
                      checked: _vm._q(_vm.localCustomer.gender, value)
                    },
                    on: {
                      change: function($event) {
                        return _vm.$set(_vm.localCustomer, "gender", value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "custom-control-label",
                      attrs: { for: "account-form-gender-" + value }
                    },
                    [_vm._v("\n        " + _vm._s(label) + "\n      ")]
                  )
                ]
              )
            }),
            0
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "form-row" }, [
        _c(
          "div",
          { staticClass: "form-group col-lg-4" },
          [
            _c("label", { attrs: { for: "account-form-phone" } }, [
              _vm._v("\n        " + _vm._s(_vm.i19contactPhone) + "\n      ")
            ]),
            _vm._v(" "),
            _c("input-phone", {
              attrs: { id: "account-form-phone", required: "" },
              model: {
                value: _vm.phoneNumber,
                callback: function($$v) {
                  _vm.phoneNumber = $$v
                },
                expression: "phoneNumber"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        !_vm.isShort
          ? _c(
              "div",
              { staticClass: "form-group col-lg-4" },
              [
                _c("label", { attrs: { for: "account-form-cell" } }, [
                  _vm._v("\n        " + _vm._s(_vm.i19cellphone) + "\n      ")
                ]),
                _vm._v(" "),
                _c("input-phone", {
                  attrs: { id: "account-form-cell" },
                  model: {
                    value: _vm.secondPhoneNumber,
                    callback: function($$v) {
                      _vm.secondPhoneNumber = $$v
                    },
                    expression: "secondPhoneNumber"
                  }
                })
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.isGuestAccess,
                expression: "!isGuestAccess"
              }
            ],
            staticClass: "form-group col-lg-4"
          },
          [
            _c("label", { attrs: { for: "account-form-birth" } }, [
              _vm._v("\n        " + _vm._s(_vm.i19birthdate) + "\n      ")
            ]),
            _vm._v(" "),
            _c("input-date", {
              attrs: { id: "account-form-birth" },
              model: {
                value: _vm.birthdate,
                callback: function($$v) {
                  _vm.birthdate = $$v
                },
                expression: "birthdate"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group" },
        _vm._l(
          {
            p: _vm.i19personalRegistration,
            j: _vm.i19companyRegistration
          },
          function(label, value) {
            return _c(
              "div",
              {
                staticClass: "custom-control custom-radio custom-control-inline"
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.localCustomer.registry_type,
                      expression: "localCustomer.registry_type"
                    }
                  ],
                  staticClass: "custom-control-input",
                  attrs: {
                    type: "radio",
                    name: "account-form-type",
                    id: "account-form-type-" + value,
                    required: ""
                  },
                  domProps: {
                    value: value,
                    checked: _vm._q(_vm.localCustomer.registry_type, value)
                  },
                  on: {
                    change: function($event) {
                      return _vm.$set(_vm.localCustomer, "registry_type", value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    staticClass: "custom-control-label",
                    attrs: { for: "account-form-type-" + value }
                  },
                  [_vm._v("\n        " + _vm._s(label) + "\n      ")]
                )
              ]
            )
          }
        ),
        0
      ),
      _vm._v(" "),
      _c("div", { staticClass: "form-row" }, [
        _c(
          "div",
          { staticClass: "form-group col-lg-6" },
          [
            _c("label", { attrs: { for: "account-form-doc" } }, [
              _vm._v("\n        " + _vm._s(_vm.i19docNumber) + "\n      ")
            ]),
            _vm._v(" "),
            _c("input-doc-number", {
              attrs: {
                id: "account-form-doc",
                isCompany: _vm.localCustomer.registry_type !== "p",
                required: ""
              },
              model: {
                value: _vm.localCustomer.doc_number,
                callback: function($$v) {
                  _vm.$set(_vm.localCustomer, "doc_number", $$v)
                },
                expression: "localCustomer.doc_number"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.localCustomer.registry_type !== "p"
        ? _c("div", { staticClass: "account-form__legal-person" }, [
            _c("div", { staticClass: "form-row" }, [
              _c("div", { staticClass: "form-group col-lg-8" }, [
                _c("label", { attrs: { for: "account-form-name" } }, [
                  _vm._v(
                    "\n          " + _vm._s(_vm.i19corporateName) + "\n        "
                  )
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.localCustomer.corporate_name,
                      expression: "localCustomer.corporate_name",
                      modifiers: { trim: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    pattern: "[\\w-]{1,}[\\s][\\w-]{1,}.*",
                    minlength: "4",
                    id: "account-form-name",
                    required: ""
                  },
                  domProps: { value: _vm.localCustomer.corporate_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.localCustomer,
                        "corporate_name",
                        $event.target.value.trim()
                      )
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-row account-form__inscription" }, [
              _c("div", { staticClass: "form-group col-lg-6" }, [
                _c("label", { attrs: { for: "account-form-inscription" } }, [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.i19inscriptionNumber) +
                      "\n        "
                  )
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.localCustomer.inscription_number,
                      expression: "localCustomer.inscription_number",
                      modifiers: { trim: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    maxlength: "50",
                    id: "account-form-inscription"
                  },
                  domProps: { value: _vm.localCustomer.inscription_number },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.localCustomer,
                        "inscription_number",
                        $event.target.value.trim()
                      )
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-group col-lg-5 pb-lg-2 ml-lg-2" },
                _vm._l(_vm.i19InscriptionType, function(label, value) {
                  return _c(
                    "div",
                    {
                      staticClass:
                        "custom-control custom-radio custom-control-inline"
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.localCustomer.inscription_type,
                            expression: "localCustomer.inscription_type"
                          }
                        ],
                        staticClass: "custom-control-input",
                        attrs: {
                          type: "radio",
                          name: "account-form-gender",
                          id: "account-form-gender-" + value
                        },
                        domProps: {
                          value: value,
                          checked: _vm._q(
                            _vm.localCustomer.inscription_type,
                            value
                          )
                        },
                        on: {
                          change: function($event) {
                            return _vm.$set(
                              _vm.localCustomer,
                              "inscription_type",
                              value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "custom-control-label",
                          attrs: { for: "account-form-gender-" + value }
                        },
                        [
                          _vm._v(
                            "\n            " + _vm._s(label) + "\n          "
                          )
                        ]
                      )
                    ]
                  )
                }),
                0
              )
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("div", { staticClass: "custom-control custom-checkbox" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.localCustomer.accepts_marketing,
                expression: "localCustomer.accepts_marketing"
              }
            ],
            staticClass: "custom-control-input",
            attrs: { type: "checkbox", id: "account-form-marketing" },
            domProps: {
              checked: Array.isArray(_vm.localCustomer.accepts_marketing)
                ? _vm._i(_vm.localCustomer.accepts_marketing, null) > -1
                : _vm.localCustomer.accepts_marketing
            },
            on: {
              change: function($event) {
                var $$a = _vm.localCustomer.accepts_marketing,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 &&
                      _vm.$set(
                        _vm.localCustomer,
                        "accepts_marketing",
                        $$a.concat([$$v])
                      )
                  } else {
                    $$i > -1 &&
                      _vm.$set(
                        _vm.localCustomer,
                        "accepts_marketing",
                        $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                      )
                  }
                } else {
                  _vm.$set(_vm.localCustomer, "accepts_marketing", $$c)
                }
              }
            }
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "custom-control-label",
              attrs: { for: "account-form-marketing" }
            },
            [
              _vm._v(
                "\n        " +
                  _vm._s(_vm.i19emailMarketingOptInMsg) +
                  "\n      "
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      !_vm.isGuestAccess
        ? [
            _vm.privacyPolicyUrl
              ? _c("div", { staticClass: "form-group" }, [
                  _c("div", { staticClass: "custom-control custom-checkbox" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.isPrivacyOptIn,
                          expression: "isPrivacyOptIn"
                        }
                      ],
                      staticClass: "custom-control-input",
                      attrs: {
                        type: "checkbox",
                        id: "account-form-privacy-policy",
                        required: ""
                      },
                      domProps: {
                        checked: Array.isArray(_vm.isPrivacyOptIn)
                          ? _vm._i(_vm.isPrivacyOptIn, null) > -1
                          : _vm.isPrivacyOptIn
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.isPrivacyOptIn,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                (_vm.isPrivacyOptIn = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.isPrivacyOptIn = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.isPrivacyOptIn = $$c
                          }
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "custom-control-label",
                        attrs: { for: "account-form-privacy-policy" }
                      },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.i19iReadAndAccept) +
                            "\n          " +
                            _vm._s(_vm.i19a) +
                            "\n          "
                        ),
                        _c("a", {
                          attrs: {
                            href: _vm.privacyPolicyUrl,
                            target: "_blank"
                          },
                          domProps: {
                            textContent: _vm._s(_vm.i19privacyPolicy)
                          }
                        }),
                        _vm._v(".\n        ")
                      ]
                    )
                  ])
                ])
              : _vm._e()
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.hasSubmitBtn
        ? _c(
            "button",
            {
              staticClass: "btn btn-lg btn-primary",
              attrs: { type: "submit" }
            },
            [
              _c("i", { staticClass: "fas fa-check mr-1" }),
              _vm._v("\n    " + _vm._s(_vm.btnLabel) + "\n  ")
            ]
          )
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@ecomplus/storefront-components/src/html/AddressForm.html?vue&type=template&id=00d5b82e&lang=html&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@ecomplus/storefront-components/src/html/AddressForm.html?vue&type=template&id=00d5b82e&lang=html& ***!
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
    "form",
    {
      staticClass: "address-form needs-validation",
      attrs: { novalidate: "" },
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.submit.apply(null, arguments)
        }
      }
    },
    [
      _c("div", { staticClass: "form-group address-form__name" }, [
        _c("label", { attrs: { for: "address-form-name" } }, [
          _vm._v("\n      " + _vm._s(_vm.i19recipient) + "\n    ")
        ]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.localAddress.name,
              expression: "localAddress.name"
            }
          ],
          staticClass: "form-control",
          attrs: {
            type: "text",
            pattern: "[^\\d\\s]{2,}.*",
            id: "address-form-name",
            placeholder: _vm.i19name,
            required: ""
          },
          domProps: { value: _vm.localAddress.name },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.localAddress, "name", $event.target.value)
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group address-form__zip" }, [
        _c(
          "div",
          { staticClass: "input-group" },
          [
            _c("input-zip-code", {
              attrs: {
                id: "address-form-zip",
                "aria-label": _vm.i19zipCode,
                required: ""
              },
              model: {
                value: _vm.localAddress.zip,
                callback: function($$v) {
                  _vm.$set(_vm.localAddress, "zip", $$v)
                },
                expression: "localAddress.zip"
              }
            }),
            _vm._v(" "),
            _vm.zipLoading || _vm.zipInfoLink
              ? _c("div", { staticClass: "input-group-append" }, [
                  _c("span", { staticClass: "input-group-text" }, [
                    !_vm.zipLoading
                      ? _c(
                          "a",
                          {
                            attrs: { href: _vm.zipInfoLink, target: "_blank" }
                          },
                          [_c("i", { staticClass: "fas fa-question-circle" })]
                        )
                      : _c(
                          "div",
                          {
                            staticClass: "spinner-grow spinner-grow-sm",
                            attrs: { role: "status" }
                          },
                          [
                            _c("span", { staticClass: "sr-only" }, [
                              _vm._v("Loading...")
                            ])
                          ]
                        )
                  ])
                ])
              : _vm._e()
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "transition",
        {
          attrs: {
            "enter-active-class": "animated fadeIn",
            "leave-active-class": "animated fadeOut fast"
          }
        },
        [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.isZipReady,
                  expression: "isZipReady"
                }
              ]
            },
            [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "address-form-number" } }, [
                  _vm._v("\n          " + _vm._s(_vm.i19number) + "\n        ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row address-form__number" }, [
                  _c("div", { staticClass: "col-5 col-lg-4" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.localAddress.number,
                          expression: "localAddress.number",
                          modifiers: { number: true }
                        }
                      ],
                      ref: "inputNumber",
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        id: "address-form-number",
                        required: !_vm.isNoNumber,
                        readonly: _vm.isNoNumber
                      },
                      domProps: { value: _vm.localAddress.number },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.localAddress,
                            "number",
                            _vm._n($event.target.value)
                          )
                        },
                        blur: function($event) {
                          return _vm.$forceUpdate()
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col" }, [
                    _c(
                      "div",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.isNoNumber,
                              expression: "isNoNumber"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: {
                            type: "checkbox",
                            id: "address-form-no-number"
                          },
                          domProps: {
                            checked: Array.isArray(_vm.isNoNumber)
                              ? _vm._i(_vm.isNoNumber, null) > -1
                              : _vm.isNoNumber
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.isNoNumber,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    (_vm.isNoNumber = $$a.concat([$$v]))
                                } else {
                                  $$i > -1 &&
                                    (_vm.isNoNumber = $$a
                                      .slice(0, $$i)
                                      .concat($$a.slice($$i + 1)))
                                }
                              } else {
                                _vm.isNoNumber = $$c
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "address-form-no-number" }
                          },
                          [
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.i19noNumber) +
                                "\n              "
                            )
                          ]
                        )
                      ]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-row" }, [
                _c("div", { staticClass: "form-group col-lg-6" }, [
                  _c("label", { attrs: { for: "address-form-compl" } }, [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.i19complement) +
                        "\n          "
                    )
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.localAddress.complement,
                        expression: "localAddress.complement"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", id: "address-form-compl" },
                    domProps: { value: _vm.localAddress.complement },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.localAddress,
                          "complement",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group col-lg-6" }, [
                  _c("label", { attrs: { for: "address-form-ref" } }, [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.i19reference) +
                        "\n          "
                    )
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.localAddress.near_to,
                        expression: "localAddress.near_to"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", id: "address-form-ref" },
                    domProps: { value: _vm.localAddress.near_to },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.localAddress,
                          "near_to",
                          $event.target.value
                        )
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-row" }, [
                _c("div", { staticClass: "form-group col-lg-6" }, [
                  _c("label", { attrs: { for: "address-form-street" } }, [
                    _vm._v(
                      "\n            " + _vm._s(_vm.i19street) + "\n          "
                    )
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.localAddress.street,
                        expression: "localAddress.street"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "address-form-street",
                      readonly: _vm.addressFromZip.street,
                      required: ""
                    },
                    domProps: { value: _vm.localAddress.street },
                    on: {
                      click: function(ref) {
                        var target = ref.target

                        return target.select()
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.localAddress,
                          "street",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group col-lg-6" }, [
                  _c("label", { attrs: { for: "address-form-borough" } }, [
                    _vm._v(
                      "\n            " + _vm._s(_vm.i19borough) + "\n          "
                    )
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.localAddress.borough,
                        expression: "localAddress.borough"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "address-form-borough",
                      readonly: _vm.addressFromZip.borough
                    },
                    domProps: { value: _vm.localAddress.borough },
                    on: {
                      click: function(ref) {
                        var target = ref.target

                        return target.select()
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.localAddress,
                          "borough",
                          $event.target.value
                        )
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-row" }, [
                _c("div", { staticClass: "form-group col-lg-6 col-7" }, [
                  _c("label", { attrs: { for: "address-form-city" } }, [
                    _vm._v(
                      "\n            " + _vm._s(_vm.i19city) + "\n          "
                    )
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.localAddress.city,
                        expression: "localAddress.city"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "address-form-city",
                      readonly: _vm.addressFromZip.city,
                      required: ""
                    },
                    domProps: { value: _vm.localAddress.city },
                    on: {
                      click: function(ref) {
                        var target = ref.target

                        return target.select()
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.localAddress, "city", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group col-lg-4 col" }, [
                  _c("label", { attrs: { for: "address-form-pc" } }, [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.i19provinceCode) +
                        "\n          "
                    )
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.provinceCode,
                        expression: "provinceCode"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "address-form-pc",
                      pattern: "[A-Z]{2}",
                      maxlength: "2",
                      placeholder: "AA",
                      readonly: _vm.addressFromZip.province_code,
                      required: ""
                    },
                    domProps: { value: _vm.provinceCode },
                    on: {
                      click: function(ref) {
                        var target = ref.target

                        return target.select()
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.provinceCode = $event.target.value
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-lg btn-primary",
                  attrs: { type: "submit" }
                },
                [
                  _c("i", { staticClass: "fas fa-check mr-1" }),
                  _vm._v("\n        " + _vm._s(_vm.btnText) + "\n      ")
                ]
              )
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@ecomplus/storefront-components/src/html/InputDate.html?vue&type=template&id=704851e9&lang=html&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@ecomplus/storefront-components/src/html/InputDate.html?vue&type=template&id=704851e9&lang=html& ***!
  \***************************************************************************************************************************************************************************************************/
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
  return _c("cleave-input", {
    staticClass: "form-control",
    attrs: {
      type: "tel",
      pattern: "[\\d/-]{10}",
      options: _vm.cleaveOptions,
      placeholder: _vm.placeholder
    },
    model: {
      value: _vm.localValue,
      callback: function($$v) {
        _vm.localValue = $$v
      },
      expression: "localValue"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@ecomplus/storefront-components/src/html/InputDocNumber.html?vue&type=template&id=6a2073f6&lang=html&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@ecomplus/storefront-components/src/html/InputDocNumber.html?vue&type=template&id=6a2073f6&lang=html& ***!
  \********************************************************************************************************************************************************************************************************/
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
  return _c("cleave-input", {
    staticClass: "form-control",
    class: _vm.isInvalid ? "is-invalid" : null,
    attrs: {
      type: "tel",
      pattern: _vm.pattern,
      options: _vm.cleaveOptions,
      placeholder: _vm.placeholder
    },
    model: {
      value: _vm.localValue,
      callback: function($$v) {
        _vm.localValue = $$v
      },
      expression: "localValue"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@ecomplus/storefront-components/src/html/InputPhone.html?vue&type=template&id=6ce226c3&lang=html&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@ecomplus/storefront-components/src/html/InputPhone.html?vue&type=template&id=6ce226c3&lang=html& ***!
  \****************************************************************************************************************************************************************************************************/
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
  return _c("cleave-input", {
    staticClass: "form-control",
    attrs: {
      type: "tel",
      pattern: "(\\+[\\d]{2}\\s?)?([1-9][\\d]+)?([\\s-]?[\\d]{4,}){2,}",
      options: _vm.cleaveOptions,
      placeholder: _vm.placeholder
    },
    model: {
      value: _vm.localValue,
      callback: function($$v) {
        _vm.localValue = $$v
      },
      expression: "localValue"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@ecomplus/storefront-components/src/html/InputZipCode.html?vue&type=template&id=0fb24ec3&lang=html&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@ecomplus/storefront-components/src/html/InputZipCode.html?vue&type=template&id=0fb24ec3&lang=html& ***!
  \******************************************************************************************************************************************************************************************************/
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
  return _c("cleave-input", {
    staticClass: "form-control",
    attrs: {
      type: "tel",
      pattern: _vm.pattern,
      options: _vm.cleaveOptions,
      placeholder: _vm.placeholder
    },
    model: {
      value: _vm.localValue,
      callback: function($$v) {
        _vm.localValue = $$v
      },
      expression: "localValue"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@ecomplus/storefront-components/src/html/LoginBlock.html?vue&type=template&id=78a491a3&lang=html&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@ecomplus/storefront-components/src/html/LoginBlock.html?vue&type=template&id=78a491a3&lang=html& ***!
  \****************************************************************************************************************************************************************************************************/
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
    { staticClass: "login" },
    [
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.submitLogin.apply(null, arguments)
            }
          }
        },
        [
          _c("label", { staticClass: "h4", attrs: { for: "login-email" } }, [
            _vm._v("\n      " + _vm._s(_vm.i19enterYourEmailMsg) + "\n    ")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "login__email input-group input-group-lg" },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.trim",
                    value: _vm.email,
                    expression: "email",
                    modifiers: { trim: true }
                  }
                ],
                ref: "inputEmail",
                staticClass: "form-control",
                attrs: {
                  type: "email",
                  id: "login-email",
                  placeholder: "email@mail.com",
                  readonly: _vm.isWaitingLogin,
                  required: ""
                },
                domProps: { value: _vm.email },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.email = $event.target.value.trim()
                  },
                  blur: function($event) {
                    return _vm.$forceUpdate()
                  }
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "input-group-append" }, [
                _c(
                  "button",
                  {
                    staticClass: "login__email-btn btn btn-primary",
                    attrs: { type: "submit", disabled: _vm.isWaitingLogin }
                  },
                  [
                    !_vm.isWaitingLogin
                      ? _c("span", { key: "login" }, [
                          _c("i", { staticClass: "fas fa-arrow-right" }),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "d-none d-md-inline ml-1" },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(_vm.i19continue) +
                                  "\n            "
                              )
                            ]
                          )
                        ])
                      : _c(
                          "span",
                          {
                            key: "loading",
                            staticClass:
                              "spinner-border spinner-border-sm mb-1 mr-1",
                            attrs: { role: "status" }
                          },
                          [
                            _c("span", { staticClass: "sr-only" }, [
                              _vm._v("Loading...")
                            ])
                          ]
                        )
                  ]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "transition",
            {
              attrs: {
                "enter-active-class": "animated fadeInDown",
                "leave-active-class": "animated position-absolute fadeOutUp"
              }
            },
            [
              _vm.confirmAccount()
                ? _c("div", { staticClass: "login__confirm" }, [
                    _c("div", { staticClass: "login__hello" }, [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.i19helloAgain) +
                          "\n          "
                      ),
                      _c("strong", [
                        _vm._v(_vm._s(_vm.ecomPassport.getCustomerName()))
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "label",
                      { staticClass: "lead", attrs: { for: "login-doc" } },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.i19enterYourDocNumberMsg) +
                            "\n        "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "input-group input-group-lg" },
                      [
                        _c("input-doc-number", {
                          ref: "InputDoc",
                          attrs: {
                            id: "login-doc",
                            isCompany: _vm.isCompany,
                            readonly: _vm.isWaitingLogin,
                            required: ""
                          },
                          model: {
                            value: _vm.docNumber,
                            callback: function($$v) {
                              _vm.docNumber = $$v
                            },
                            expression: "docNumber"
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group-append" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              attrs: {
                                type: "submit",
                                disabled: _vm.isWaitingLogin,
                                "aria-label": _vm.i19continue
                              }
                            },
                            [_c("i", { staticClass: "fas fa-check" })]
                          )
                        ])
                      ],
                      1
                    )
                  ])
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _c(
            "a-alert",
            {
              staticClass: "mt-3",
              attrs: { "can-show": Boolean(_vm.failAlertText) }
            },
            [_vm._v("\n      " + _vm._s(_vm.failAlertText) + "\n    ")]
          ),
          _vm._v(" "),
          _c(
            "transition",
            { attrs: { "enter-active-class": "animated fadeInUp" } },
            [
              _vm.oauthProviders.length
                ? _c(
                    "div",
                    { staticClass: "login__oauth" },
                    [
                      _c("p", { staticClass: "lead" }, [
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.i19orProceedWith) +
                            ":\n        "
                        )
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.oauthProviders, function(ref) {
                        var link = ref.link
                        var faIcon = ref.faIcon
                        var providerName = ref.providerName
                        var provider = ref.provider
                        return _c(
                          "button",
                          {
                            key: provider,
                            staticClass: "btn login__btn",
                            class: "login__btn--" + provider,
                            attrs: { type: "button" },
                            on: {
                              click: function() {
                                return _vm.oauthPopup(link)
                              }
                            }
                          },
                          [
                            _c("small", [_vm._v(_vm._s(_vm.i19signInWith))]),
                            _vm._v(" "),
                            _c("i", { staticClass: "fab mr-2", class: faIcon }),
                            _vm._v(
                              "\n          " +
                                _vm._s(providerName) +
                                "\n        "
                            )
                          ]
                        )
                      })
                    ],
                    2
                  )
                : _vm._e()
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "login__info" },
        [
          _c("div", { staticClass: "login__info-title" }, [
            _c("i", { staticClass: "fas fa-lock" }),
            _vm._v("\n      " + _vm._s(_vm.i19weUseYourDataToMsg) + ":\n    ")
          ]),
          _vm._v(" "),
          _vm._l(
            [
              _vm.i19identifyYourAccount,
              _vm.i19notifyAboutOrders,
              _vm.i19manageYourPurchaseHistory
            ],
            function(label) {
              return _c("div", { staticClass: "login__info-row" }, [
                _c("i", { staticClass: "fas fa-check" }),
                _vm._v("\n      " + _vm._s(label) + "\n    ")
              ])
            }
          )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "transition",
        {
          attrs: {
            "enter-active-class": "animated fadeIn slow",
            "leave-active-class": "animated fadeOut"
          }
        },
        [
          _vm.isWaitingPopup
            ? _c("div", { staticClass: "login__popup-overlay" }, [
                _c("div", [
                  _c(
                    "div",
                    {
                      staticClass: "spinner-border mb-3",
                      attrs: { role: "status" }
                    },
                    [
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("Popup...")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("h5", [_vm._v(_vm._s(_vm.i19oauthOnPopup))])
                ])
              ])
            : _vm._e()
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/@ecomplus/storefront-components/src/scss/AccountAddresses.scss?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--0-oneOf-0-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--0-oneOf-0-2!./node_modules/postcss-loader/dist/cjs.js??ref--0-oneOf-0-3!./node_modules/sass-loader/dist/cjs.js??ref--0-oneOf-0-4!./node_modules/@ecomplus/storefront-components/src/scss/AccountAddresses.scss?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../css-loader/dist/cjs.js??ref--0-oneOf-0-1!../../../../vue-loader/lib/loaders/stylePostLoader.js!../../../../resolve-url-loader??ref--0-oneOf-0-2!../../../../postcss-loader/dist/cjs.js??ref--0-oneOf-0-3!../../../../sass-loader/dist/cjs.js??ref--0-oneOf-0-4!./AccountAddresses.scss?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/@ecomplus/storefront-components/src/scss/AccountAddresses.scss?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("39fe66a5", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/@ecomplus/storefront-components/src/scss/AccountForm.scss?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--0-oneOf-0-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--0-oneOf-0-2!./node_modules/postcss-loader/dist/cjs.js??ref--0-oneOf-0-3!./node_modules/sass-loader/dist/cjs.js??ref--0-oneOf-0-4!./node_modules/@ecomplus/storefront-components/src/scss/AccountForm.scss?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../css-loader/dist/cjs.js??ref--0-oneOf-0-1!../../../../vue-loader/lib/loaders/stylePostLoader.js!../../../../resolve-url-loader??ref--0-oneOf-0-2!../../../../postcss-loader/dist/cjs.js??ref--0-oneOf-0-3!../../../../sass-loader/dist/cjs.js??ref--0-oneOf-0-4!./AccountForm.scss?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/@ecomplus/storefront-components/src/scss/AccountForm.scss?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("242779c5", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/@ecomplus/storefront-components/src/scss/AddressForm.scss?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--0-oneOf-0-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--0-oneOf-0-2!./node_modules/postcss-loader/dist/cjs.js??ref--0-oneOf-0-3!./node_modules/sass-loader/dist/cjs.js??ref--0-oneOf-0-4!./node_modules/@ecomplus/storefront-components/src/scss/AddressForm.scss?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../css-loader/dist/cjs.js??ref--0-oneOf-0-1!../../../../vue-loader/lib/loaders/stylePostLoader.js!../../../../resolve-url-loader??ref--0-oneOf-0-2!../../../../postcss-loader/dist/cjs.js??ref--0-oneOf-0-3!../../../../sass-loader/dist/cjs.js??ref--0-oneOf-0-4!./AddressForm.scss?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/@ecomplus/storefront-components/src/scss/AddressForm.scss?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("32843ea5", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/@ecomplus/storefront-components/src/scss/LoginBlock.scss?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--0-oneOf-0-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--0-oneOf-0-2!./node_modules/postcss-loader/dist/cjs.js??ref--0-oneOf-0-3!./node_modules/sass-loader/dist/cjs.js??ref--0-oneOf-0-4!./node_modules/@ecomplus/storefront-components/src/scss/LoginBlock.scss?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../css-loader/dist/cjs.js??ref--0-oneOf-0-1!../../../../vue-loader/lib/loaders/stylePostLoader.js!../../../../resolve-url-loader??ref--0-oneOf-0-2!../../../../postcss-loader/dist/cjs.js??ref--0-oneOf-0-3!../../../../sass-loader/dist/cjs.js??ref--0-oneOf-0-4!./LoginBlock.scss?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/@ecomplus/storefront-components/src/scss/LoginBlock.scss?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("78eb6e47", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);
//# sourceMappingURL=chunk.8c6672f136756631e2f8.js.map