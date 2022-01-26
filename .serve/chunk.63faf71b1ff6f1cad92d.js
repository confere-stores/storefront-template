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
    name: 'Amapá'
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
    name: 'Ceará'
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
    name: 'Espírito Santo'
  },
  GO: {
    code: '1',
    areaCodes: [62, 64],
    ieLength: 9,
    name: 'Goiás'
  },
  MA: {
    code: '3',
    areaCodes: [98, 99],
    ieLength: 9,
    name: 'Maranhão'
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
    name: 'Pará'
  },
  PB: {
    code: '4',
    areaCodes: [83],
    ieLength: 9,
    name: 'Paraíba'
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
    name: 'Piauí'
  },
  PR: {
    code: '9',
    areaCodes: [41, 42, 43, 44, 45, 46],
    ieLength: 10,
    name: 'Paraná'
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
    name: 'Rondônia'
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
    name: 'São Paulo'
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
  GO: ['Abadia de Goiás', 'Abadiânia', 'Acreúna', 'Adelândia', 'Alexânia', 'Aloândia', 'Alto Horizonte', 'Alto Paraíso de Goiás', 'Alvorada do Norte', 'Amaralina', 'Americano do Brasil', 'Amorinópolis', 'Anhanguera', 'Anicuns', 'Anápolis', 'Aparecida de Goiânia', 'Aparecida do Rio Doce', 'Aporé', 'Aragarças', 'Aragoiânia', 'Araguapaz', 'Araçu', 'Arenópolis', 'Aruanã', 'Aurilândia', 'Avelinópolis', 'Baliza', 'Barro Alto', 'Bela Vista de Goiás', 'Bom Jardim de Goiás', 'Bom Jesus de Goiás', 'Bonfinópolis', 'Bonópolis', 'Brazabrantes', 'Britânia', 'Buriti Alegre', 'Buriti de Goiás', 'Buritinópolis', 'Cabeceiras', 'Cachoeira Alta', 'Cachoeira Dourada', 'Cachoeira de Goiás', 'Caiapônia', 'Caldas Novas', 'Caldazinha', 'Campestre de Goiás', 'Campinaçu', 'Campinorte', 'Campo Alegre de Goiás', 'Campo Limpo de Goiás', 'Campos Belos', 'Campos Verdes', 'Carmo do Rio Verde', 'Castelândia', 'Catalão', 'Caturaí', 'Cavalcante', 'Caçu', 'Ceres', 'Cezarina', 'Chapadão do Céu', 'Cidade Ocidental', 'Cocalzinho de Goiás', 'Colinas do Sul', 'Corumbaíba', 'Corumbá de Goiás', 'Cristalina', 'Cristianópolis', 'Crixás', 'Cromínia', 'Cumari', 'Córrego do Ouro', 'Damianópolis', 'Damolândia', 'Davinópolis', 'Diorama', 'Divinópolis de Goiás', 'Doverlândia', 'Edealina', 'Edéia', 'Estrela do Norte', 'Faina', 'Fazenda Nova', 'Firminópolis', 'Flores de Goiás', 'Formosa', 'Formoso', 'Gameleira de Goiás', 'Goiandira', 'Goianira', 'Goianápolis', 'Goianésia', 'Goiatuba', 'Goiás', 'Goiânia', 'Gouvelândia', 'Guapó', 'Guarani de Goiás', 'Guaraíta', 'Guarinos', 'Heitoraí', 'Hidrolina', 'Hidrolândia', 'Iaciara', 'Inaciolândia', 'Indiara', 'Inhumas', 'Ipameri', 'Ipiranga de Goiás', 'Iporá', 'Israelândia', 'Itaberaí', 'Itaguari', 'Itaguaru', 'Itajá', 'Itapaci', 'Itapirapuã', 'Itapuranga', 'Itarumã', 'Itauçu', 'Itumbiara', 'Ivolândia', 'Jandaia', 'Jaraguá', 'Jataí', 'Jaupaci', 'Jesúpolis', 'Joviânia', 'Jussara', 'Lagoa Santa', 'Leopoldo de Bulhões', 'Luziânia', 'Mairipotaba', 'Mambaí', 'Mara Rosa', 'Marzagão', 'Matrinchã', 'Maurilândia', 'Mimoso de Goiás', 'Minaçu', 'Mineiros', 'Moiporá', 'Monte Alegre de Goiás', 'Montes Claros de Goiás', 'Montividiu', 'Montividiu do Norte', 'Morrinhos', 'Morro Agudo de Goiás', 'Mossâmedes', 'Mozarlândia', 'Mundo Novo', 'Mutunópolis', 'Nazário', 'Nerópolis', 'Niquelândia', 'Nova América', 'Nova Aurora', 'Nova Crixás', 'Nova Glória', 'Nova Iguaçu de Goiás', 'Nova Roma', 'Nova Veneza', 'Novo Brasil', 'Novo Gama', 'Novo Planalto', 'Orizona', 'Ouro Verde de Goiás', 'Ouvidor', 'Padre Bernardo', 'Palestina de Goiás', 'Palmeiras de Goiás', 'Palmelo', 'Palminópolis', 'Panamá', 'Paranaiguara', 'Paraúna', 'Perolândia', 'Petrolina de Goiás', 'Pilar de Goiás', 'Piracanjuba', 'Piranhas', 'Pirenópolis', 'Pires do Rio', 'Planaltina', 'Pontalina', 'Porangatu', 'Porteirão', 'Portelândia', 'Posse', 'Professor Jamil', 'Quirinópolis', 'Rialma', 'Rianápolis', 'Rio Quente', 'Rio Verde', 'Rubiataba', 'Sanclerlândia', 'Santa Bárbara de Goiás', 'Santa Cruz de Goiás', 'Santa Fé de Goiás', 'Santa Helena de Goiás', 'Santa Isabel', 'Santa Rita do Araguaia', 'Santa Rita do Novo Destino', 'Santa Rosa de Goiás', 'Santa Tereza de Goiás', 'Santa Terezinha de Goiás', 'Santo Antônio da Barra', 'Santo Antônio de Goiás', 'Santo Antônio do Descoberto', 'Senador Canedo', 'Serranópolis', 'Silvânia', 'Simolândia', 'São Domingos', 'São Francisco de Goiás', "São João d'Aliança", 'São João da Paraúna', 'São Luiz do Norte', 'São Luís de Montes Belos', 'São Miguel do Araguaia', 'São Miguel do Passa Quatro', 'São Patrício', 'São Simão', "Sítio d'Abadia", 'Taquaral de Goiás', 'Teresina de Goiás', 'Terezópolis de Goiás', 'Trindade', 'Trombas', 'Três Ranchos', 'Turvelândia', 'Turvânia', 'Uirapuru', 'Uruana', 'Uruaçu', 'Urutaí', 'Valparaíso de Goiás', 'Varjão', 'Vianópolis', 'Vicentinópolis', 'Vila Boa', 'Vila Propício', 'Água Fria de Goiás', 'Água Limpa', 'Águas Lindas de Goiás'],
  MG: ['Abadia dos Dourados', 'Abaeté', 'Abre Campo', 'Acaiaca', 'Aguanil', 'Aimorés', 'Aiuruoca', 'Alagoa', 'Albertina', 'Alfenas', 'Alfredo Vasconcelos', 'Almenara', 'Alpercata', 'Alpinópolis', 'Alterosa', 'Alto Caparaó', 'Alto Jequitibá', 'Alto Rio Doce', 'Alvarenga', 'Alvinópolis', 'Alvorada de Minas', 'Além Paraíba', 'Amparo do Serra', 'Andradas', 'Andrelândia', 'Angelândia', 'Antônio Carlos', 'Antônio Dias', 'Antônio Prado de Minas', 'Aracitaba', 'Araguari', 'Arantina', 'Araponga', 'Araporã', 'Arapuá', 'Araxá', 'Araçaí', 'Araçuaí', 'Araújos', 'Arceburgo', 'Arcos', 'Areado', 'Argirita', 'Aricanduva', 'Arinos', 'Astolfo Dutra', 'Ataléia', 'Augusto de Lima', 'Açucena', 'Baependi', 'Baldim', 'Bambuí', 'Bandeira', 'Bandeira do Sul', 'Barbacena', 'Barra Longa', 'Barroso', 'Barão de Cocais', 'Barão de Monte Alto', 'Bela Vista de Minas', 'Belmiro Braga', 'Belo Horizonte', 'Belo Oriente', 'Belo Vale', 'Berilo', 'Berizal', 'Bertópolis', 'Betim', 'Bias Fortes', 'Bicas', 'Biquinhas', 'Boa Esperança', 'Bocaina de Minas', 'Bocaiúva', 'Bom Despacho', 'Bom Jardim de Minas', 'Bom Jesus da Penha', 'Bom Jesus do Amparo', 'Bom Jesus do Galho', 'Bom Repouso', 'Bom Sucesso', 'Bonfim', 'Bonfinópolis de Minas', 'Bonito de Minas', 'Borda da Mata', 'Botelhos', 'Botumirim', 'Brasilândia de Minas', 'Brasília de Minas', 'Brazópolis', 'Braúnas', 'Brumadinho', 'Brás Pires', 'Bueno Brandão', 'Buenópolis', 'Bugre', 'Buritis', 'Buritizeiro', 'Cabeceira Grande', 'Cabo Verde', 'Cachoeira Dourada', 'Cachoeira da Prata', 'Cachoeira de Minas', 'Cachoeira de Pajeú', 'Caetanópolis', 'Caeté', 'Caiana', 'Cajuri', 'Caldas', 'Camacho', 'Camanducaia', 'Cambuquira', 'Cambuí', 'Campanha', 'Campanário', 'Campestre', 'Campina Verde', 'Campo Azul', 'Campo Belo', 'Campo Florido', 'Campo do Meio', 'Campos Altos', 'Campos Gerais', 'Cana Verde', 'Canaã', 'Candeias', 'Cantagalo', 'Canápolis', 'Caparaó', 'Capela Nova', 'Capelinha', 'Capetinga', 'Capim Branco', 'Capinópolis', 'Capitão Andrade', 'Capitão Enéas', 'Capitólio', 'Caputira', 'Caranaíba', 'Carandaí', 'Carangola', 'Caratinga', 'Caraí', 'Carbonita', 'Careaçu', 'Carlos Chagas', 'Carmo da Cachoeira', 'Carmo da Mata', 'Carmo de Minas', 'Carmo do Cajuru', 'Carmo do Paranaíba', 'Carmo do Rio Claro', 'Carmésia', 'Carmópolis de Minas', 'Carneirinho', 'Carrancas', 'Carvalhos', 'Carvalhópolis', 'Casa Grande', 'Cascalho Rico', 'Cataguases', 'Catas Altas', 'Catas Altas da Noruega', 'Catuji', 'Catuti', 'Caxambu', 'Cedro do Abaeté', 'Central de Minas', 'Centralina', 'Chalé', 'Chapada Gaúcha', 'Chapada do Norte', 'Chiador', 'Chácara', 'Cipotânea', 'Claraval', 'Claro dos Poções', 'Cláudio', 'Coimbra', 'Coluna', 'Comendador Gomes', 'Comercinho', 'Conceição da Aparecida', 'Conceição da Barra de Minas', 'Conceição das Alagoas', 'Conceição das Pedras', 'Conceição de Ipanema', 'Conceição do Mato Dentro', 'Conceição do Pará', 'Conceição do Rio Verde', 'Conceição dos Ouros', 'Confins', 'Congonhal', 'Congonhas', 'Congonhas do Norte', 'Conquista', 'Conselheiro Lafaiete', 'Conselheiro Pena', 'Consolação', 'Contagem', 'Coqueiral', 'Coração de Jesus', 'Cordisburgo', 'Cordislândia', 'Corinto', 'Coroaci', 'Coromandel', 'Coronel Fabriciano', 'Coronel Murta', 'Coronel Pacheco', 'Coronel Xavier Chaves', 'Couto de Magalhães de Minas', 'Cristais', 'Cristiano Otoni', 'Cristina', 'Cristália', 'Crisólita', 'Crucilândia', 'Cruzeiro da Fortaleza', 'Cruzília', 'Cuparaque', 'Curral de Dentro', 'Curvelo', 'Cássia', 'Córrego Danta', 'Córrego Fundo', 'Córrego Novo', 'Córrego do Bom Jesus', 'Cônego Marinho', 'Datas', 'Delfim Moreira', 'Delfinópolis', 'Delta', 'Descoberto', 'Desterro de Entre Rios', 'Desterro do Melo', 'Diamantina', 'Diogo de Vasconcelos', 'Dionísio', 'Divino', 'Divino das Laranjeiras', 'Divinolândia de Minas', 'Divinésia', 'Divinópolis', 'Divisa Alegre', 'Divisa Nova', 'Divisópolis', 'Dom Bosco', 'Dom Cavati', 'Dom Joaquim', 'Dom Silvério', 'Dom Viçoso', 'Dona Euzébia', 'Dores de Campos', 'Dores de Guanhães', 'Dores do Indaiá', 'Dores do Turvo', 'Doresópolis', 'Douradoquara', 'Durandé', 'Elói Mendes', 'Engenheiro Caldas', 'Engenheiro Navarro', 'Entre Folhas', 'Entre Rios de Minas', 'Ervália', 'Esmeraldas', 'Espera Feliz', 'Espinosa', 'Espírito Santo do Dourado', 'Estiva', 'Estrela Dalva', 'Estrela do Indaiá', 'Estrela do Sul', 'Eugenópolis', 'Ewbank da Câmara', 'Extrema', 'Fama', 'Faria Lemos', 'Felisburgo', 'Felixlândia', 'Felício dos Santos', 'Fernandes Tourinho', 'Ferros', 'Fervedouro', 'Florestal', 'Formiga', 'Formoso', 'Fortaleza de Minas', 'Fortuna de Minas', 'Francisco Badaró', 'Francisco Dumont', 'Francisco Sá', 'Franciscópolis', 'Frei Gaspar', 'Frei Inocêncio', 'Frei Lagonegro', 'Fronteira', 'Fronteira dos Vales', 'Fruta de Leite', 'Frutal', 'Funilândia', 'Galiléia', 'Gameleiras', 'Glaucilândia', 'Goiabeira', 'Goianá', 'Gonzaga', 'Gonçalves', 'Gouveia', 'Governador Valadares', 'Grupiara', 'Grão Mogol', 'Guanhães', 'Guapé', 'Guaraciaba', 'Guaraciama', 'Guarani', 'Guaranésia', 'Guarará', 'Guarda-Mor', 'Guaxupé', 'Guidoval', 'Guimarânia', 'Guiricema', 'Gurinhatã', 'Heliodora', 'Iapu', 'Ibertioga', 'Ibiaí', 'Ibiracatu', 'Ibiraci', 'Ibirité', 'Ibitiúra de Minas', 'Ibituruna', 'Ibiá', 'Icaraí de Minas', 'Igarapé', 'Igaratinga', 'Iguatama', 'Ijaci', 'Ilicínea', 'Imbé de Minas', 'Inconfidentes', 'Indaiabira', 'Indianópolis', 'Ingaí', 'Inhapim', 'Inhaúma', 'Inimutaba', 'Ipaba', 'Ipanema', 'Ipatinga', 'Ipiaçu', 'Ipuiúna', 'Iraí de Minas', 'Itabira', 'Itabirinha', 'Itabirito', 'Itacambira', 'Itacarambi', 'Itaguara', 'Itaipé', 'Itajubá', 'Itamarandiba', 'Itamarati de Minas', 'Itambacuri', 'Itambé do Mato Dentro', 'Itamogi', 'Itamonte', 'Itanhandu', 'Itanhomi', 'Itaobim', 'Itapagipe', 'Itapecerica', 'Itapeva', 'Itatiaiuçu', 'Itaverava', 'Itaú de Minas', 'Itaúna', 'Itinga', 'Itueta', 'Ituiutaba', 'Itumirim', 'Iturama', 'Itutinga', 'Jaboticatubas', 'Jacinto', 'Jacutinga', 'Jacuí', 'Jaguaraçu', 'Jampruca', 'Janaúba', 'Januária', 'Japaraíba', 'Japonvar', 'Jaíba', 'Jeceaba', 'Jenipapo de Minas', 'Jequeri', 'Jequitaí', 'Jequitibá', 'Jequitinhonha', 'Jesuânia', 'Joanésia', 'Joaquim Felício', 'Joaíma', 'Jordânia', 'Josenópolis', 'José Gonçalves de Minas', 'José Raydan', 'João Monlevade', 'João Pinheiro', 'Juatuba', 'Juiz de Fora', 'Juramento', 'Juruaia', 'Juvenília', 'Ladainha', 'Lagamar', 'Lagoa Dourada', 'Lagoa Formosa', 'Lagoa Grande', 'Lagoa Santa', 'Lagoa da Prata', 'Lagoa dos Patos', 'Lajinha', 'Lambari', 'Lamim', 'Laranjal', 'Lassance', 'Lavras', 'Leandro Ferreira', 'Leme do Prado', 'Leopoldina', 'Liberdade', 'Lima Duarte', 'Limeira do Oeste', 'Lontra', 'Luisburgo', 'Luislândia', 'Luminárias', 'Luz', 'Machacalis', 'Machado', 'Madre de Deus de Minas', 'Malacacheta', 'Mamonas', 'Manga', 'Manhuaçu', 'Manhumirim', 'Mantena', 'Mar de Espanha', 'Maravilhas', 'Maria da Fé', 'Mariana', 'Marilac', 'Maripá de Minas', 'Marliéria', 'Marmelópolis', 'Martinho Campos', 'Martins Soares', 'Mata Verde', 'Materlândia', 'Mateus Leme', 'Mathias Lobato', 'Matias Barbosa', 'Matias Cardoso', 'Matipó', 'Mato Verde', 'Matozinhos', 'Matutina', 'Medeiros', 'Medina', 'Mendes Pimentel', 'Mercês', 'Mesquita', 'Minas Novas', 'Minduri', 'Mirabela', 'Miradouro', 'Miravânia', 'Miraí', 'Moeda', 'Moema', 'Monjolos', 'Monsenhor Paulo', 'Montalvânia', 'Monte Alegre de Minas', 'Monte Azul', 'Monte Belo', 'Monte Carmelo', 'Monte Formoso', 'Monte Santo de Minas', 'Monte Sião', 'Montes Claros', 'Montezuma', 'Morada Nova de Minas', 'Morro da Garça', 'Morro do Pilar', 'Munhoz', 'Muriaé', 'Mutum', 'Muzambinho', 'Mário Campos', 'Nacip Raydan', 'Nanuque', 'Naque', 'Natalândia', 'Natércia', 'Nazareno', 'Nepomuceno', 'Ninheira', 'Nova Belém', 'Nova Era', 'Nova Lima', 'Nova Módica', 'Nova Ponte', 'Nova Porteirinha', 'Nova Resende', 'Nova Serrana', 'Nova União', 'Novo Cruzeiro', 'Novo Oriente de Minas', 'Novorizonte', 'Olaria', "Olhos-d'Água", 'Oliveira', 'Oliveira Fortes', 'Olímpio Noronha', 'Onça de Pitangui', 'Oratórios', 'Orizânia', 'Ouro Branco', 'Ouro Fino', 'Ouro Preto', 'Ouro Verde de Minas', 'Padre Carvalho', 'Padre Paraíso', 'Pai Pedro', 'Paineiras', 'Pains', 'Paiva', 'Palma', 'Palmópolis', 'Papagaios', 'Paracatu', 'Paraguaçu', 'Paraisópolis', 'Paraopeba', 'Pará de Minas', 'Passa Quatro', 'Passa Tempo', 'Passa Vinte', 'Passabém', 'Passos', 'Patis', 'Patos de Minas', 'Patrocínio', 'Patrocínio do Muriaé', 'Paula Cândido', 'Paulistas', 'Pavão', 'Pedra Azul', 'Pedra Bonita', 'Pedra Dourada', 'Pedra do Anta', 'Pedra do Indaiá', 'Pedralva', 'Pedras de Maria da Cruz', 'Pedrinópolis', 'Pedro Leopoldo', 'Pedro Teixeira', 'Pequeri', 'Pequi', 'Perdigão', 'Perdizes', 'Perdões', 'Periquito', 'Pescador', 'Peçanha', 'Piau', 'Piedade de Caratinga', 'Piedade de Ponte Nova', 'Piedade do Rio Grande', 'Piedade dos Gerais', 'Pimenta', "Pingo d'Água", 'Pintópolis', 'Piracema', 'Pirajuba', 'Piranga', 'Piranguinho', 'Piranguçu', 'Pirapetinga', 'Pirapora', 'Piraúba', 'Pitangui', 'Piumhi', 'Planura', 'Pocrane', 'Pompéu', 'Ponte Nova', 'Ponto Chique', 'Ponto dos Volantes', 'Porteirinha', 'Porto Firme', 'Poté', 'Pouso Alegre', 'Pouso Alto', 'Poço Fundo', 'Poços de Caldas', 'Prados', 'Prata', 'Pratinha', 'Pratápolis', 'Presidente Bernardes', 'Presidente Juscelino', 'Presidente Kubitschek', 'Presidente Olegário', 'Prudente de Morais', 'Quartel Geral', 'Queluzito', 'Raposos', 'Raul Soares', 'Recreio', 'Reduto', 'Resende Costa', 'Resplendor', 'Ressaquinha', 'Riachinho', 'Riacho dos Machados', 'Ribeirão Vermelho', 'Ribeirão das Neves', 'Rio Acima', 'Rio Casca', 'Rio Doce', 'Rio Espera', 'Rio Manso', 'Rio Novo', 'Rio Paranaíba', 'Rio Pardo de Minas', 'Rio Piracicaba', 'Rio Pomba', 'Rio Preto', 'Rio Vermelho', 'Rio do Prado', 'Ritápolis', 'Rochedo de Minas', 'Rodeiro', 'Romaria', 'Rosário da Limeira', 'Rubelita', 'Rubim', 'Sabará', 'Sabinópolis', 'Sacramento', 'Salinas', 'Salto da Divisa', 'Santa Bárbara', 'Santa Bárbara do Leste', 'Santa Bárbara do Monte Verde', 'Santa Bárbara do Tugúrio', 'Santa Cruz de Minas', 'Santa Cruz de Salinas', 'Santa Cruz do Escalvado', 'Santa Efigênia de Minas', 'Santa Fé de Minas', 'Santa Helena de Minas', 'Santa Juliana', 'Santa Luzia', 'Santa Margarida', 'Santa Maria de Itabira', 'Santa Maria do Salto', 'Santa Maria do Suaçuí', 'Santa Rita de Caldas', 'Santa Rita de Ibitipoca', 'Santa Rita de Jacutinga', 'Santa Rita de Minas', 'Santa Rita do Itueto', 'Santa Rita do Sapucaí', 'Santa Rosa da Serra', 'Santa Vitória', 'Santana da Vargem', 'Santana de Cataguases', 'Santana de Pirapama', 'Santana do Deserto', 'Santana do Garambéu', 'Santana do Jacaré', 'Santana do Manhuaçu', 'Santana do Paraíso', 'Santana do Riacho', 'Santana dos Montes', 'Santo Antônio do Amparo', 'Santo Antônio do Aventureiro', 'Santo Antônio do Grama', 'Santo Antônio do Itambé', 'Santo Antônio do Jacinto', 'Santo Antônio do Monte', 'Santo Antônio do Retiro', 'Santo Antônio do Rio Abaixo', 'Santo Hipólito', 'Santos Dumont', 'Sapucaí-Mirim', 'Sardoá', 'Sarzedo', 'Sem-Peixe', 'Senador Amaral', 'Senador Cortes', 'Senador Firmino', 'Senador José Bento', 'Senador Modestino Gonçalves', 'Senhora de Oliveira', 'Senhora do Porto', 'Senhora dos Remédios', 'Sericita', 'Seritinga', 'Serra Azul de Minas', 'Serra da Saudade', 'Serra do Salitre', 'Serra dos Aimorés', 'Serrania', 'Serranos', 'Serranópolis de Minas', 'Serro', 'Sete Lagoas', 'Setubinha', 'Silveirânia', 'Silvianópolis', 'Simonésia', 'Simão Pereira', 'Sobrália', 'Soledade de Minas', 'São Bento Abade', 'São Brás do Suaçuí', 'São Domingos das Dores', 'São Domingos do Prata', 'São Francisco', 'São Francisco de Paula', 'São Francisco de Sales', 'São Francisco do Glória', 'São Félix de Minas', 'São Geraldo', 'São Geraldo da Piedade', 'São Geraldo do Baixio', 'São Gonçalo do Abaeté', 'São Gonçalo do Pará', 'São Gonçalo do Rio Abaixo', 'São Gonçalo do Rio Preto', 'São Gonçalo do Sapucaí', 'São Gotardo', 'São Joaquim de Bicas', 'São José da Barra', 'São José da Lapa', 'São José da Safira', 'São José da Varginha', 'São José do Alegre', 'São José do Divino', 'São José do Goiabal', 'São José do Jacuri', 'São José do Mantimento', 'São João Batista do Glória', 'São João Evangelista', 'São João Nepomuceno', 'São João da Lagoa', 'São João da Mata', 'São João da Ponte', 'São João das Missões', 'São João del Rei', 'São João do Manhuaçu', 'São João do Manteninha', 'São João do Oriente', 'São João do Pacuí', 'São João do Paraíso', 'São Lourenço', 'São Miguel do Anta', 'São Pedro da União', 'São Pedro do Suaçuí', 'São Pedro dos Ferros', 'São Romão', 'São Roque de Minas', 'São Sebastião da Bela Vista', 'São Sebastião da Vargem Alegre', 'São Sebastião do Anta', 'São Sebastião do Maranhão', 'São Sebastião do Oeste', 'São Sebastião do Paraíso', 'São Sebastião do Rio Preto', 'São Sebastião do Rio Verde', 'São Tiago', 'São Tomás de Aquino', 'São Tomé das Letras', 'São Vicente de Minas', 'Tabuleiro', 'Taiobeiras', 'Taparuba', 'Tapira', 'Tapiraí', 'Taquaraçu de Minas', 'Tarumirim', 'Teixeiras', 'Teófilo Otoni', 'Timóteo', 'Tiradentes', 'Tiros', 'Tocantins', 'Tocos do Moji', 'Toledo', 'Tombos', 'Três Corações', 'Três Marias', 'Três Pontas', 'Tumiritinga', 'Tupaciguara', 'Turmalina', 'Turvolândia', 'Ubaporanga', 'Ubaí', 'Uberaba', 'Uberlândia', 'Ubá', 'Umburatiba', 'Unaí', 'União de Minas', 'Uruana de Minas', 'Urucuia', 'Urucânia', 'Vargem Alegre', 'Vargem Bonita', 'Vargem Grande do Rio Pardo', 'Varginha', 'Varjão de Minas', 'Varzelândia', 'Vazante', 'Verdelândia', 'Veredinha', 'Vermelho Novo', 'Veríssimo', 'Vespasiano', 'Vieiras', 'Virgem da Lapa', 'Virginópolis', 'Virgolândia', 'Virgínia', 'Visconde do Rio Branco', 'Viçosa', 'Volta Grande', 'Várzea da Palma', 'Wenceslau Braz', 'Água Boa', 'Água Comprida', 'Águas Formosas', 'Águas Vermelhas'],
  PA: ['Abaetetuba', 'Abel Figueiredo', 'Acará', 'Afuá', 'Alenquer', 'Almeirim', 'Altamira', 'Anajás', 'Ananindeua', 'Anapu', 'Augusto Corrêa', 'Aurora do Pará', 'Aveiro', 'Bagre', 'Baião', 'Bannach', 'Barcarena', 'Belterra', 'Belém', 'Benevides', 'Bom Jesus do Tocantins', 'Bonito', 'Bragança', 'Brasil Novo', 'Brejo Grande do Araguaia', 'Breu Branco', 'Breves', 'Bujaru', 'Cachoeira do Arari', 'Cachoeira do Piriá', 'Cametá', 'Canaã dos Carajás', 'Capanema', 'Capitão Poço', 'Castanhal', 'Chaves', 'Colares', 'Conceição do Araguaia', 'Concórdia do Pará', 'Cumaru do Norte', 'Curionópolis', 'Curralinho', 'Curuá', 'Curuçá', 'Dom Eliseu', 'Eldorado do Carajás', 'Faro', 'Floresta do Araguaia', 'Garrafão do Norte', 'Goianésia do Pará', 'Gurupá', 'Igarapé-Açu', 'Igarapé-Miri', 'Inhangapi', 'Ipixuna do Pará', 'Irituia', 'Itaituba', 'Itupiranga', 'Jacareacanga', 'Jacundá', 'Juruti', 'Limoeiro do Ajuru', 'Magalhães Barata', 'Marabá', 'Maracanã', 'Marapanim', 'Marituba', 'Medicilândia', 'Melgaço', 'Mocajuba', 'Moju', 'Mojuí dos Campos', 'Monte Alegre', 'Muaná', 'Mãe do Rio', 'Nova Esperança do Piriá', 'Nova Ipixuna', 'Nova Timboteua', 'Novo Progresso', 'Novo Repartimento', 'Oeiras do Pará', 'Oriximiná', 'Ourilândia do Norte', 'Ourém', 'Pacajá', 'Palestina do Pará', 'Paragominas', 'Parauapebas', "Pau D'Arco", 'Peixe-Boi', 'Piçarra', 'Placas', 'Ponta de Pedras', 'Portel', 'Porto de Moz', 'Prainha', 'Primavera', 'Quatipuru', 'Redenção', 'Rio Maria', 'Rondon do Pará', 'Rurópolis', 'Salinópolis', 'Salvaterra', 'Santa Bárbara do Pará', 'Santa Cruz do Arari', 'Santa Izabel do Pará', 'Santa Luzia do Pará', 'Santa Maria das Barreiras', 'Santa Maria do Pará', 'Santana do Araguaia', 'Santarém', 'Santarém Novo', 'Santo Antônio do Tauá', 'Sapucaia', 'Senador José Porfírio', 'Soure', 'São Caetano de Odivelas', 'São Domingos do Araguaia', 'São Domingos do Capim', 'São Francisco do Pará', 'São Félix do Xingu', 'São Geraldo do Araguaia', 'São João da Ponta', 'São João de Pirabas', 'São João do Araguaia', 'São Miguel do Guamá', 'São Sebastião da Boa Vista', 'Tailândia', 'Terra Alta', 'Terra Santa', 'Tomé-Açu', 'Tracuateua', 'Trairão', 'Tucumã', 'Tucuruí', 'Ulianópolis', 'Uruará', 'Vigia', 'Viseu', 'Vitória do Xingu', 'Xinguara', 'Água Azul do Norte', 'Óbidos'],
  CE: ['Abaiara', 'Acarape', 'Acaraú', 'Acopiara', 'Aiuaba', 'Alcântaras', 'Altaneira', 'Alto Santo', 'Amontada', 'Antonina do Norte', 'Apuiarés', 'Aquiraz', 'Aracati', 'Aracoiaba', 'Ararendá', 'Araripe', 'Aratuba', 'Arneiroz', 'Assaré', 'Aurora', 'Baixio', 'Banabuiú', 'Barbalha', 'Barreira', 'Barro', 'Barroquinha', 'Baturité', 'Beberibe', 'Bela Cruz', 'Boa Viagem', 'Brejo Santo', 'Camocim', 'Campos Sales', 'Canindé', 'Capistrano', 'Caridade', 'Caririaçu', 'Cariré', 'Cariús', 'Carnaubal', 'Cascavel', 'Catarina', 'Catunda', 'Caucaia', 'Cedro', 'Chaval', 'Chorozinho', 'Choró', 'Coreaú', 'Crateús', 'Crato', 'Croatá', 'Cruz', 'Deputado Irapuan Pinheiro', 'Ereré', 'Eusébio', 'Farias Brito', 'Forquilha', 'Fortaleza', 'Fortim', 'Frecheirinha', 'General Sampaio', 'Granja', 'Granjeiro', 'Graça', 'Groaíras', 'Guaiúba', 'Guaraciaba do Norte', 'Guaramiranga', 'Hidrolândia', 'Horizonte', 'Ibaretama', 'Ibiapina', 'Ibicuitinga', 'Icapuí', 'Icó', 'Iguatu', 'Independência', 'Ipaporanga', 'Ipaumirim', 'Ipu', 'Ipueiras', 'Iracema', 'Irauçuba', 'Itaitinga', 'Itaiçaba', 'Itapajé', 'Itapipoca', 'Itapiúna', 'Itarema', 'Itatira', 'Jaguaretama', 'Jaguaribara', 'Jaguaribe', 'Jaguaruana', 'Jardim', 'Jati', 'Jijoca de Jericoacoara', 'Juazeiro do Norte', 'Jucás', 'Lavras da Mangabeira', 'Limoeiro do Norte', 'Madalena', 'Maracanaú', 'Maranguape', 'Marco', 'Martinópole', 'Massapê', 'Mauriti', 'Meruoca', 'Milagres', 'Milhã', 'Miraíma', 'Missão Velha', 'Mombaça', 'Monsenhor Tabosa', 'Morada Nova', 'Moraújo', 'Morrinhos', 'Mucambo', 'Mulungu', 'Nova Olinda', 'Nova Russas', 'Novo Oriente', 'Ocara', 'Orós', 'Pacajus', 'Pacatuba', 'Pacoti', 'Pacujá', 'Palhano', 'Palmácia', 'Paracuru', 'Paraipaba', 'Parambu', 'Paramoti', 'Pedra Branca', 'Penaforte', 'Pentecoste', 'Pereiro', 'Pindoretama', 'Piquet Carneiro', 'Pires Ferreira', 'Poranga', 'Porteiras', 'Potengi', 'Potiretama', 'Quiterianópolis', 'Quixadá', 'Quixelô', 'Quixeramobim', 'Quixeré', 'Redenção', 'Reriutaba', 'Russas', 'Saboeiro', 'Salitre', 'Santa Quitéria', 'Santana do Acaraú', 'Santana do Cariri', 'Senador Pompeu', 'Senador Sá', 'Sobral', 'Solonópole', 'São Benedito', 'São Gonçalo do Amarante', 'São João do Jaguaribe', 'São Luís do Curu', 'Tabuleiro do Norte', 'Tamboril', 'Tarrafas', 'Tauá', 'Tejuçuoca', 'Tianguá', 'Trairi', 'Tururu', 'Ubajara', 'Umari', 'Umirim', 'Uruburetama', 'Uruoca', 'Varjota', 'Viçosa do Ceará', 'Várzea Alegre'],
  BA: ['Abaré', 'Abaíra', 'Acajutiba', 'Adustina', 'Aiquara', 'Alagoinhas', 'Alcobaça', 'Almadina', 'Amargosa', 'Amélia Rodrigues', 'América Dourada', 'Anagé', 'Andaraí', 'Andorinha', 'Angical', 'Anguera', 'Antas', 'Antônio Cardoso', 'Antônio Gonçalves', 'Aporá', 'Apuarema', 'Aracatu', 'Araci', 'Aramari', 'Arataca', 'Aratuípe', 'Araçás', 'Aurelino Leal', 'Baianópolis', 'Baixa Grande', 'Banzaê', 'Barra', 'Barra da Estiva', 'Barra do Choça', 'Barra do Mendes', 'Barra do Rocha', 'Barreiras', 'Barro Alto', 'Barro Preto', 'Barrocas', 'Belmonte', 'Belo Campo', 'Biritinga', 'Boa Nova', 'Boa Vista do Tupim', 'Bom Jesus da Lapa', 'Bom Jesus da Serra', 'Boninal', 'Bonito', 'Boquira', 'Botuporã', 'Brejolândia', 'Brejões', 'Brotas de Macaúbas', 'Brumado', 'Buerarema', 'Buritirama', 'Caatiba', 'Cabaceiras do Paraguaçu', 'Cachoeira', 'Caculé', 'Caetanos', 'Caetité', 'Cafarnaum', 'Cairu', 'Caldeirão Grande', 'Camacan', 'Camamu', 'Camaçari', 'Campo Alegre de Lourdes', 'Campo Formoso', 'Canarana', 'Canavieiras', 'Candeal', 'Candeias', 'Candiba', 'Cansanção', 'Canudos', 'Canápolis', 'Capela do Alto Alegre', 'Capim Grosso', 'Caravelas', 'Caraíbas', 'Cardeal da Silva', 'Carinhanha', 'Casa Nova', 'Castro Alves', 'Catolândia', 'Catu', 'Caturama', 'Caém', 'Central', 'Chorrochó', 'Cipó', 'Coaraci', 'Cocos', 'Conceição da Feira', 'Conceição do Almeida', 'Conceição do Coité', 'Conceição do Jacuípe', 'Conde', 'Condeúba', 'Contendas do Sincorá', 'Coração de Maria', 'Cordeiros', 'Coribe', 'Coronel João Sá', 'Correntina', 'Cotegipe', 'Cravolândia', 'Cristópolis', 'Crisópolis', 'Cruz das Almas', 'Curaçá', 'Cândido Sales', 'Cícero Dantas', "Dias d'Ávila", 'Dom Basílio', 'Dom Macedo Costa', 'Dário Meira', 'Elísio Medrado', 'Encruzilhada', 'Entre Rios', 'Esplanada', 'Euclides da Cunha', 'Eunápolis', 'Feira da Mata', 'Feira de Santana', 'Filadélfia', 'Firmino Alves', 'Floresta Azul', 'Formosa do Rio Preto', 'Fátima', 'Gandu', 'Gavião', 'Gentio do Ouro', 'Glória', 'Gongogi', 'Governador Mangabeira', 'Guajeru', 'Guanambi', 'Guaratinga', 'Heliópolis', 'Iaçu', 'Ibiassucê', 'Ibicaraí', 'Ibicoara', 'Ibicuí', 'Ibipeba', 'Ibipitanga', 'Ibiquera', 'Ibirapitanga', 'Ibirapuã', 'Ibirataia', 'Ibitiara', 'Ibititá', 'Ibotirama', 'Ichu', 'Igaporã', 'Igrapiúna', 'Iguaí', 'Ilhéus', 'Inhambupe', 'Ipecaetá', 'Ipiaú', 'Ipirá', 'Ipupiara', 'Irajuba', 'Iramaia', 'Iraquara', 'Irará', 'Irecê', 'Itabela', 'Itaberaba', 'Itabuna', 'Itacaré', 'Itaeté', 'Itagi', 'Itagibá', 'Itagimirim', 'Itaguaçu da Bahia', 'Itaju do Colônia', 'Itajuípe', 'Itamaraju', 'Itamari', 'Itambé', 'Itanagra', 'Itanhém', 'Itaparica', 'Itapebi', 'Itapetinga', 'Itapicuru', 'Itapitanga', 'Itapé', 'Itaquara', 'Itarantim', 'Itatim', 'Itiruçu', 'Itiúba', 'Itororó', 'Ituaçu', 'Ituberá', 'Iuiu', 'Jaborandi', 'Jacaraci', 'Jacobina', 'Jaguaquara', 'Jaguarari', 'Jaguaripe', 'Jandaíra', 'Jequié', 'Jeremoabo', 'Jiquiriçá', 'Jitaúna', 'João Dourado', 'Juazeiro', 'Jucuruçu', 'Jussara', 'Jussari', 'Jussiape', 'Lafaiete Coutinho', 'Lagoa Real', 'Laje', 'Lajedinho', 'Lajedo do Tabocal', 'Lajedão', 'Lamarão', 'Lapão', 'Lauro de Freitas', 'Lençóis', 'Licínio de Almeida', 'Livramento de Nossa Senhora', 'Luís Eduardo Magalhães', 'Macajuba', 'Macarani', 'Macaúbas', 'Macururé', 'Madre de Deus', 'Maetinga', 'Maiquinique', 'Mairi', 'Malhada', 'Malhada de Pedras', 'Manoel Vitorino', 'Mansidão', 'Maracás', 'Maragogipe', 'Maraú', 'Marcionílio Souza', 'Mascote', 'Mata de São João', 'Matina', 'Medeiros Neto', 'Miguel Calmon', 'Milagres', 'Mirangaba', 'Mirante', 'Monte Santo', 'Morpará', 'Morro do Chapéu', 'Mortugaba', 'Mucugê', 'Mucuri', 'Mulungu do Morro', 'Mundo Novo', 'Muniz Ferreira', 'Muquém do São Francisco', 'Muritiba', 'Mutuípe', 'Nazaré', 'Nilo Peçanha', 'Nordestina', 'Nova Canaã', 'Nova Fátima', 'Nova Ibiá', 'Nova Itarana', 'Nova Redenção', 'Nova Soure', 'Nova Viçosa', 'Novo Horizonte', 'Novo Triunfo', 'Olindina', 'Oliveira dos Brejinhos', 'Ouriçangas', 'Ourolândia', 'Palmas de Monte Alto', 'Palmeiras', 'Paramirim', 'Paratinga', 'Paripiranga', 'Pau Brasil', 'Paulo Afonso', 'Pedro Alexandre', 'Pedrão', 'Piatã', 'Pilão Arcado', 'Pindaí', 'Pindobaçu', 'Pintadas', 'Piraí do Norte', 'Piripá', 'Piritiba', 'Planaltino', 'Planalto', 'Pojuca', 'Ponto Novo', 'Porto Seguro', 'Potiraguá', 'Poções', 'Prado', 'Presidente Dutra', 'Presidente Jânio Quadros', 'Presidente Tancredo Neves', 'Pé de Serra', 'Queimadas', 'Quijingue', 'Quixabeira', 'Rafael Jambeiro', 'Remanso', 'Retirolândia', 'Riacho de Santana', 'Riachão das Neves', 'Riachão do Jacuípe', 'Ribeira do Amparo', 'Ribeira do Pombal', 'Ribeirão do Largo', 'Rio Real', 'Rio de Contas', 'Rio do Antônio', 'Rio do Pires', 'Rodelas', 'Ruy Barbosa', 'Salinas da Margarida', 'Salvador', 'Santa Brígida', 'Santa Bárbara', 'Santa Cruz Cabrália', 'Santa Cruz da Vitória', 'Santa Inês', 'Santa Luzia', 'Santa Maria da Vitória', 'Santa Rita de Cássia', 'Santa Terezinha', 'Santaluz', 'Santana', 'Santanópolis', 'Santo Amaro', 'Santo Antônio de Jesus', 'Santo Estêvão', 'Sapeaçu', 'Saubara', 'Saúde', 'Seabra', 'Sebastião Laranjeiras', 'Senhor do Bonfim', 'Sento Sé', 'Serra Dourada', 'Serra Preta', 'Serra do Ramalho', 'Serrinha', 'Serrolândia', 'Simões Filho', 'Sobradinho', 'Souto Soares', 'Sátiro Dias', 'São Desidério', 'São Domingos', 'São Felipe', 'São Francisco do Conde', 'São Félix', 'São Félix do Coribe', 'São Gabriel', 'São Gonçalo dos Campos', 'São José da Vitória', 'São José do Jacuípe', 'São Miguel das Matas', 'São Sebastião do Passé', 'Sítio do Mato', 'Sítio do Quinto', 'Tabocas do Brejo Velho', 'Tanhaçu', 'Tanque Novo', 'Tanquinho', 'Taperoá', 'Tapiramutá', 'Teixeira de Freitas', 'Teodoro Sampaio', 'Teofilândia', 'Teolândia', 'Terra Nova', 'Tremedal', 'Tucano', 'Uauá', 'Ubaitaba', 'Ubatã', 'Ubaíra', 'Uibaí', 'Umburanas', 'Una', 'Urandi', 'Uruçuca', 'Utinga', 'Valente', 'Valença', 'Varzedo', 'Vera Cruz', 'Vereda', 'Vitória da Conquista', 'Várzea Nova', 'Várzea da Roça', 'Várzea do Poço', 'Wagner', 'Wanderley', 'Wenceslau Guimarães', 'Xique-Xique', 'Água Fria', 'Érico Cardoso'],
  PR: ['Abatiá', 'Adrianópolis', 'Agudos do Sul', 'Almirante Tamandaré', 'Altamira do Paraná', 'Alto Paraná', 'Alto Paraíso', 'Alto Piquiri', 'Altônia', 'Alvorada do Sul', 'Amaporã', 'Ampére', 'Anahy', 'Andirá', 'Antonina', 'Antônio Olinto', 'Apucarana', 'Arapongas', 'Arapoti', 'Arapuã', 'Araruna', 'Araucária', 'Ariranha do Ivaí', 'Assaí', 'Assis Chateaubriand', 'Astorga', 'Atalaia', 'Balsa Nova', 'Bandeirantes', 'Barbosa Ferraz', 'Barra do Jacaré', 'Barracão', 'Bela Vista da Caroba', 'Bela Vista do Paraíso', 'Bituruna', 'Boa Esperança', 'Boa Esperança do Iguaçu', 'Boa Ventura de São Roque', 'Boa Vista da Aparecida', 'Bocaiúva do Sul', 'Bom Jesus do Sul', 'Bom Sucesso', 'Bom Sucesso do Sul', 'Borrazópolis', 'Braganey', 'Brasilândia do Sul', 'Cafeara', 'Cafelândia', 'Cafezal do Sul', 'Califórnia', 'Cambará', 'Cambira', 'Cambé', 'Campina Grande do Sul', 'Campina da Lagoa', 'Campina do Simão', 'Campo Bonito', 'Campo Largo', 'Campo Magro', 'Campo Mourão', 'Campo do Tenente', 'Candói', 'Cantagalo', 'Capanema', 'Capitão Leônidas Marques', 'Carambeí', 'Carlópolis', 'Cascavel', 'Castro', 'Catanduvas', 'Centenário do Sul', 'Cerro Azul', 'Chopinzinho', 'Cianorte', 'Cidade Gaúcha', 'Clevelândia', 'Colombo', 'Colorado', 'Congonhinhas', 'Conselheiro Mairinck', 'Contenda', 'Corbélia', 'Cornélio Procópio', 'Coronel Domingos Soares', 'Coronel Vivida', 'Corumbataí do Sul', 'Cruz Machado', 'Cruzeiro do Iguaçu', 'Cruzeiro do Oeste', 'Cruzeiro do Sul', 'Cruzmaltina', 'Curitiba', 'Curiúva', 'Cândido de Abreu', 'Céu Azul', "Diamante D'Oeste", 'Diamante do Norte', 'Diamante do Sul', 'Dois Vizinhos', 'Douradina', 'Doutor Camargo', 'Doutor Ulysses', 'Engenheiro Beltrão', 'Entre Rios do Oeste', 'Enéas Marques', 'Esperança Nova', 'Espigão Alto do Iguaçu', 'Farol', 'Faxinal', 'Fazenda Rio Grande', 'Fernandes Pinheiro', 'Figueira', 'Flor da Serra do Sul', 'Floraí', 'Floresta', 'Florestópolis', 'Flórida', 'Formosa do Oeste', 'Foz do Iguaçu', 'Foz do Jordão', 'Francisco Alves', 'Francisco Beltrão', 'Fênix', 'General Carneiro', 'Godoy Moreira', 'Goioerê', 'Goioxim', 'Grandes Rios', 'Guairaçá', 'Guamiranga', 'Guapirama', 'Guaporema', 'Guaraci', 'Guaraniaçu', 'Guarapuava', 'Guaraqueçaba', 'Guaratuba', 'Guaíra', 'Honório Serpa', 'Ibaiti', 'Ibema', 'Ibiporã', 'Icaraíma', 'Iguaraçu', 'Iguatu', 'Imbaú', 'Imbituva', 'Inajá', 'Indianópolis', 'Inácio Martins', 'Ipiranga', 'Iporã', 'Iracema do Oeste', 'Irati', 'Iretama', 'Itaguajé', 'Itaipulândia', 'Itambaracá', 'Itambé', "Itapejara d'Oeste", 'Itaperuçu', 'Itaúna do Sul', 'Ivaiporã', 'Ivatuba', 'Ivaté', 'Ivaí', 'Jaboti', 'Jacarezinho', 'Jaguapitã', 'Jaguariaíva', 'Jandaia do Sul', 'Janiópolis', 'Japira', 'Japurá', 'Jardim Alegre', 'Jardim Olinda', 'Jataizinho', 'Jesuítas', 'Joaquim Távora', 'Jundiaí do Sul', 'Juranda', 'Jussara', 'Kaloré', 'Lapa', 'Laranjal', 'Laranjeiras do Sul', 'Leópolis', 'Lidianópolis', 'Lindoeste', 'Loanda', 'Lobato', 'Londrina', 'Luiziana', 'Lunardelli', 'Lupionópolis', 'Mallet', 'Mamborê', 'Mandaguari', 'Mandaguaçu', 'Mandirituba', 'Manfrinópolis', 'Mangueirinha', 'Manoel Ribas', 'Marechal Cândido Rondon', 'Maria Helena', 'Marialva', 'Marilena', 'Mariluz', 'Marilândia do Sul', 'Maringá', 'Maripá', 'Mariópolis', 'Marmeleiro', 'Marquinho', 'Marumbi', 'Matelândia', 'Matinhos', 'Mato Rico', 'Mauá da Serra', 'Medianeira', 'Mercedes', 'Mirador', 'Miraselva', 'Missal', 'Moreira Sales', 'Morretes', 'Munhoz de Melo', 'Nossa Senhora das Graças', 'Nova Aliança do Ivaí', 'Nova América da Colina', 'Nova Aurora', 'Nova Cantu', 'Nova Esperança', 'Nova Esperança do Sudoeste', 'Nova Fátima', 'Nova Laranjeiras', 'Nova Londrina', 'Nova Olímpia', 'Nova Prata do Iguaçu', 'Nova Santa Bárbara', 'Nova Santa Rosa', 'Nova Tebas', 'Novo Itacolomi', 'Ortigueira', 'Ourizona', 'Ouro Verde do Oeste', 'Paiçandu', 'Palmas', 'Palmeira', 'Palmital', 'Palotina', 'Paranacity', 'Paranaguá', 'Paranapoema', 'Paranavaí', 'Paraíso do Norte', 'Pato Bragado', 'Pato Branco', 'Paula Freitas', 'Paulo Frontin', 'Peabiru', 'Perobal', 'Pinhais', 'Pinhal de São Bento', 'Pinhalão', 'Pinhão', 'Piraquara', 'Piraí do Sul', 'Pitanga', 'Pitangueiras', 'Piên', 'Planaltina do Paraná', 'Planalto', 'Ponta Grossa', 'Pontal do Paraná', 'Porecatu', 'Porto Amazonas', 'Porto Barreiro', 'Porto Rico', 'Porto Vitória', 'Prado Ferreira', 'Pranchita', 'Presidente Castelo Branco', 'Primeiro de Maio', 'Prudentópolis', 'Pérola', "Pérola d'Oeste", 'Quarto Centenário', 'Quatiguá', 'Quatro Barras', 'Quatro Pontes', 'Quedas do Iguaçu', 'Querência do Norte', 'Quinta do Sol', 'Quitandinha', 'Ramilândia', 'Rancho Alegre', "Rancho Alegre D'Oeste", 'Realeza', 'Rebouças', 'Renascença', 'Reserva', 'Reserva do Iguaçu', 'Ribeirão Claro', 'Ribeirão do Pinhal', 'Rio Azul', 'Rio Bom', 'Rio Bonito do Iguaçu', 'Rio Branco do Ivaí', 'Rio Branco do Sul', 'Rio Negro', 'Rolândia', 'Roncador', 'Rondon', 'Rosário do Ivaí', 'Sabáudia', 'Salgado Filho', 'Salto do Itararé', 'Salto do Lontra', 'Santa Amélia', 'Santa Cecília do Pavão', 'Santa Cruz de Monte Castelo', 'Santa Fé', 'Santa Helena', 'Santa Inês', 'Santa Isabel do Ivaí', 'Santa Izabel do Oeste', 'Santa Lúcia', 'Santa Maria do Oeste', 'Santa Mariana', 'Santa Mônica', 'Santa Tereza do Oeste', 'Santa Terezinha de Itaipu', 'Santana do Itararé', 'Santo Antônio da Platina', 'Santo Antônio do Caiuá', 'Santo Antônio do Paraíso', 'Santo Antônio do Sudoeste', 'Santo Inácio', 'Sapopema', 'Sarandi', 'Saudade do Iguaçu', 'Sengés', 'Serranópolis do Iguaçu', 'Sertaneja', 'Sertanópolis', 'Siqueira Campos', 'Sulina', 'São Carlos do Ivaí', 'São Jerônimo da Serra', "São Jorge d'Oeste", 'São Jorge do Ivaí', 'São Jorge do Patrocínio', 'São José da Boa Vista', 'São José das Palmeiras', 'São José dos Pinhais', 'São João', 'São João do Caiuá', 'São João do Ivaí', 'São João do Triunfo', 'São Manoel do Paraná', 'São Mateus do Sul', 'São Miguel do Iguaçu', 'São Pedro do Iguaçu', 'São Pedro do Ivaí', 'São Pedro do Paraná', 'São Sebastião da Amoreira', 'São Tomé', 'Tamarana', 'Tamboara', 'Tapejara', 'Tapira', 'Teixeira Soares', 'Telêmaco Borba', 'Terra Boa', 'Terra Rica', 'Terra Roxa', 'Tibagi', 'Tijucas do Sul', 'Toledo', 'Tomazina', 'Três Barras do Paraná', 'Tunas do Paraná', 'Tuneiras do Oeste', 'Tupãssi', 'Turvo', 'Ubiratã', 'Umuarama', 'Uniflor', 'União da Vitória', 'Uraí', 'Ventania', 'Vera Cruz do Oeste', 'Verê', 'Virmond', 'Vitorino', 'Wenceslau Braz', 'Xambrê', 'Ângulo'],
  SC: ['Abdon Batista', 'Abelardo Luz', 'Agrolândia', 'Agronômica', 'Alfredo Wagner', 'Alto Bela Vista', 'Anchieta', 'Angelina', 'Anita Garibaldi', 'Anitápolis', 'Antônio Carlos', 'Apiúna', 'Arabutã', 'Araquari', 'Araranguá', 'Armazém', 'Arroio Trinta', 'Arvoredo', 'Ascurra', 'Atalanta', 'Aurora', 'Balneário Arroio do Silva', 'Balneário Barra do Sul', 'Balneário Camboriú', 'Balneário Gaivota', 'Balneário Piçarras', 'Balneário Rincão', 'Bandeirante', 'Barra Bonita', 'Barra Velha', 'Bela Vista do Toldo', 'Belmonte', 'Benedito Novo', 'Biguaçu', 'Blumenau', 'Bocaina do Sul', 'Bom Jardim da Serra', 'Bom Jesus', 'Bom Jesus do Oeste', 'Bom Retiro', 'Bombinhas', 'Botuverá', 'Braço do Norte', 'Braço do Trombudo', 'Brunópolis', 'Brusque', 'Caibi', 'Calmon', 'Camboriú', 'Campo Alegre', 'Campo Belo do Sul', 'Campo Erê', 'Campos Novos', 'Canelinha', 'Canoinhas', 'Capinzal', 'Capivari de Baixo', 'Capão Alto', 'Catanduvas', 'Caxambu do Sul', 'Caçador', 'Celso Ramos', 'Cerro Negro', 'Chapadão do Lageado', 'Chapecó', 'Cocal do Sul', 'Concórdia', 'Cordilheira Alta', 'Coronel Freitas', 'Coronel Martins', 'Correia Pinto', 'Corupá', 'Criciúma', 'Cunha Porã', 'Cunhataí', 'Curitibanos', 'Descanso', 'Dionísio Cerqueira', 'Dona Emma', 'Doutor Pedrinho', 'Entre Rios', 'Ermo', 'Erval Velho', 'Faxinal dos Guedes', 'Flor do Sertão', 'Florianópolis', 'Formosa do Sul', 'Forquilhinha', 'Fraiburgo', 'Frei Rogério', 'Galvão', 'Garopaba', 'Garuva', 'Gaspar', 'Governador Celso Ramos', 'Gravatal', 'Grão Pará', 'Guabiruba', 'Guaraciaba', 'Guaramirim', 'Guarujá do Sul', 'Guatambú', "Herval d'Oeste", 'Ibiam', 'Ibicaré', 'Ibirama', 'Ilhota', 'Imaruí', 'Imbituba', 'Imbuia', 'Indaial', 'Iomerê', 'Ipira', 'Iporã do Oeste', 'Ipuaçu', 'Ipumirim', 'Iraceminha', 'Irani', 'Irati', 'Irineópolis', 'Itaiópolis', 'Itajaí', 'Itapema', 'Itapiranga', 'Itapoá', 'Ituporanga', 'Itá', 'Içara', 'Jaborá', 'Jacinto Machado', 'Jaguaruna', 'Jaraguá do Sul', 'Jardinópolis', 'Joaçaba', 'Joinville', 'José Boiteux', 'Jupiá', 'Lacerdópolis', 'Lages', 'Laguna', 'Lajeado Grande', 'Laurentino', 'Lauro Müller', 'Lebon Régis', 'Leoberto Leal', 'Lindóia do Sul', 'Lontras', 'Luiz Alves', 'Luzerna', 'Macieira', 'Mafra', 'Major Gercino', 'Major Vieira', 'Maracajá', 'Maravilha', 'Marema', 'Massaranduba', 'Matos Costa', 'Meleiro', 'Mirim Doce', 'Modelo', 'Mondaí', 'Monte Carlo', 'Monte Castelo', 'Morro Grande', 'Morro da Fumaça', 'Navegantes', 'Nova Erechim', 'Nova Itaberaba', 'Nova Trento', 'Nova Veneza', 'Novo Horizonte', 'Orleans', 'Otacílio Costa', 'Ouro', 'Ouro Verde', 'Paial', 'Painel', 'Palhoça', 'Palma Sola', 'Palmeira', 'Palmitos', 'Papanduva', 'Paraíso', 'Passo de Torres', 'Passos Maia', 'Paulo Lopes', 'Pedras Grandes', 'Penha', 'Peritiba', 'Pescaria Brava', 'Petrolândia', 'Pinhalzinho', 'Pinheiro Preto', 'Piratuba', 'Planalto Alegre', 'Pomerode', 'Ponte Alta', 'Ponte Alta do Norte', 'Ponte Serrada', 'Porto Belo', 'Porto União', 'Pouso Redondo', 'Praia Grande', 'Presidente Castello Branco', 'Presidente Getúlio', 'Presidente Nereu', 'Princesa', 'Quilombo', 'Rancho Queimado', 'Rio Fortuna', 'Rio Negrinho', 'Rio Rufino', 'Rio das Antas', 'Rio do Campo', 'Rio do Oeste', 'Rio do Sul', 'Rio dos Cedros', 'Riqueza', 'Rodeio', 'Romelândia', 'Salete', 'Saltinho', 'Salto Veloso', 'Sangão', 'Santa Cecília', 'Santa Helena', 'Santa Rosa de Lima', 'Santa Rosa do Sul', 'Santa Terezinha', 'Santa Terezinha do Progresso', 'Santiago do Sul', 'Santo Amaro da Imperatriz', 'Saudades', 'Schroeder', 'Seara', 'Serra Alta', 'Siderópolis', 'Sombrio', 'Sul Brasil', 'São Bento do Sul', 'São Bernardino', 'São Bonifácio', 'São Carlos', 'São Cristóvão do Sul', 'São Domingos', 'São Francisco do Sul', 'São Joaquim', 'São José', 'São José do Cedro', 'São José do Cerrito', 'São João Batista', 'São João do Itaperiú', 'São João do Oeste', 'São João do Sul', 'São Lourenço do Oeste', 'São Ludgero', 'São Martinho', 'São Miguel da Boa Vista', 'São Miguel do Oeste', 'São Pedro de Alcântara', 'Taió', 'Tangará', 'Tigrinhos', 'Tijucas', 'Timbé do Sul', 'Timbó', 'Timbó Grande', 'Treviso', 'Treze Tílias', 'Treze de Maio', 'Trombudo Central', 'Três Barras', 'Tubarão', 'Tunápolis', 'Turvo', 'União do Oeste', 'Urubici', 'Urupema', 'Urussanga', 'Vargem', 'Vargem Bonita', 'Vargeão', 'Vidal Ramos', 'Videira', 'Vitor Meireles', 'Witmarsum', 'Xanxerê', 'Xavantina', 'Xaxim', 'Zortéa', 'Água Doce', 'Águas Frias', 'Águas Mornas', 'Águas de Chapecó'],
  PE: ['Abreu e Lima', 'Afogados da Ingazeira', 'Afrânio', 'Agrestina', 'Alagoinha', 'Aliança', 'Altinho', 'Amaraji', 'Angelim', 'Araripina', 'Araçoiaba', 'Arcoverde', 'Barra de Guabiraba', 'Barreiros', 'Belo Jardim', 'Belém de Maria', 'Belém do São Francisco', 'Betânia', 'Bezerros', 'Bodocó', 'Bom Conselho', 'Bom Jardim', 'Bonito', 'Brejinho', 'Brejo da Madre de Deus', 'Brejão', 'Buenos Aires', 'Buíque', 'Cabo de Santo Agostinho', 'Cabrobó', 'Cachoeirinha', 'Caetés', 'Calumbi', 'Calçado', 'Camaragibe', 'Camocim de São Félix', 'Camutanga', 'Canhotinho', 'Capoeiras', 'Carnaubeira da Penha', 'Carnaíba', 'Carpina', 'Caruaru', 'Casinhas', 'Catende', 'Cedro', 'Chã Grande', 'Chã de Alegria', 'Condado', 'Correntes', 'Cortês', 'Cumaru', 'Cupira', 'Custódia', 'Dormentes', 'Escada', 'Exu', 'Feira Nova', 'Fernando de Noronha', 'Ferreiros', 'Flores', 'Floresta', 'Frei Miguelinho', 'Gameleira', 'Garanhuns', 'Glória do Goitá', 'Goiana', 'Granito', 'Gravatá', 'Iati', 'Ibimirim', 'Ibirajuba', 'Igarassu', 'Iguaracy', 'Ilha de Itamaracá', 'Inajá', 'Ingazeira', 'Ipojuca', 'Ipubi', 'Itacuruba', 'Itambé', 'Itapetim', 'Itapissuma', 'Itaquitinga', 'Itaíba', 'Jaboatão dos Guararapes', 'Jaqueira', 'Jataúba', 'Jatobá', 'Joaquim Nabuco', 'João Alfredo', 'Jucati', 'Jupi', 'Jurema', 'Lagoa Grande', 'Lagoa de Itaenga', 'Lagoa do Carro', 'Lagoa do Ouro', 'Lagoa dos Gatos', 'Lajedo', 'Limoeiro', 'Macaparana', 'Machados', 'Manari', 'Maraial', 'Mirandiba', 'Moreilândia', 'Moreno', 'Nazaré da Mata', 'Olinda', 'Orobó', 'Orocó', 'Ouricuri', 'Palmares', 'Palmeirina', 'Panelas', 'Paranatama', 'Parnamirim', 'Passira', 'Paudalho', 'Paulista', 'Pedra', 'Pesqueira', 'Petrolina', 'Petrolândia', 'Pombos', 'Poção', 'Primavera', 'Quipapá', 'Quixaba', 'Recife', 'Riacho das Almas', 'Ribeirão', 'Rio Formoso', 'Sairé', 'Salgadinho', 'Salgueiro', 'Saloá', 'Sanharó', 'Santa Cruz', 'Santa Cruz da Baixa Verde', 'Santa Cruz do Capibaribe', 'Santa Filomena', 'Santa Maria da Boa Vista', 'Santa Maria do Cambucá', 'Santa Terezinha', 'Serra Talhada', 'Serrita', 'Sertânia', 'Sirinhaém', 'Solidão', 'Surubim', 'São Benedito do Sul', 'São Bento do Una', 'São Caitano', 'São Joaquim do Monte', 'São José da Coroa Grande', 'São José do Belmonte', 'São José do Egito', 'São João', 'São Lourenço da Mata', 'São Vicente Férrer', 'Tabira', 'Tacaimbó', 'Tacaratu', 'Tamandaré', 'Taquaritinga do Norte', 'Terezinha', 'Terra Nova', 'Timbaúba', 'Toritama', 'Tracunhaém', 'Trindade', 'Triunfo', 'Tupanatinga', 'Tuparetama', 'Venturosa', 'Verdejante', 'Vertente do Lério', 'Vertentes', 'Vicência', 'Vitória de Santo Antão', 'Xexéu', 'Água Preta', 'Águas Belas'],
  TO: ['Abreulândia', 'Aguiarnópolis', 'Aliança do Tocantins', 'Almas', 'Alvorada', 'Ananás', 'Angico', 'Aparecida do Rio Negro', 'Aragominas', 'Araguacema', 'Araguanã', 'Araguatins', 'Araguaçu', 'Araguaína', 'Arapoema', 'Arraias', 'Augustinópolis', 'Aurora do Tocantins', 'Axixá do Tocantins', 'Babaçulândia', 'Bandeirantes do Tocantins', 'Barra do Ouro', 'Barrolândia', 'Bernardo Sayão', 'Bom Jesus do Tocantins', 'Brasilândia do Tocantins', 'Brejinho de Nazaré', 'Buriti do Tocantins', 'Cachoeirinha', 'Campos Lindos', 'Cariri do Tocantins', 'Carmolândia', 'Carrasco Bonito', 'Caseara', 'Centenário', 'Chapada da Natividade', 'Chapada de Areia', 'Colinas do Tocantins', 'Colméia', 'Combinado', 'Conceição do Tocantins', 'Couto Magalhães', 'Cristalândia', 'Crixás do Tocantins', 'Darcinópolis', 'Dianópolis', 'Divinópolis do Tocantins', 'Dois Irmãos do Tocantins', 'Dueré', 'Esperantina', 'Figueirópolis', 'Filadélfia', 'Formoso do Araguaia', 'Fátima', 'Goianorte', 'Goiatins', 'Guaraí', 'Gurupi', 'Ipueiras', 'Itacajá', 'Itaguatins', 'Itapiratins', 'Itaporã do Tocantins', 'Jaú do Tocantins', 'Juarina', 'Lagoa da Confusão', 'Lagoa do Tocantins', 'Lajeado', 'Lavandeira', 'Lizarda', 'Luzinópolis', 'Marianópolis do Tocantins', 'Mateiros', 'Maurilândia do Tocantins', 'Miracema do Tocantins', 'Miranorte', 'Monte Santo do Tocantins', 'Monte do Carmo', 'Muricilândia', 'Natividade', 'Nazaré', 'Nova Olinda', 'Nova Rosalândia', 'Novo Acordo', 'Novo Alegre', 'Novo Jardim', 'Oliveira de Fátima', 'Palmas', 'Palmeirante', 'Palmeiras do Tocantins', 'Palmeirópolis', 'Paranã', 'Paraíso do Tocantins', "Pau D'Arco", 'Pedro Afonso', 'Peixe', 'Pequizeiro', 'Pindorama do Tocantins', 'Piraquê', 'Pium', 'Ponte Alta do Bom Jesus', 'Ponte Alta do Tocantins', 'Porto Alegre do Tocantins', 'Porto Nacional', 'Praia Norte', 'Presidente Kennedy', 'Pugmil', 'Recursolândia', 'Riachinho', 'Rio Sono', 'Rio da Conceição', 'Rio dos Bois', 'Sampaio', 'Sandolândia', 'Santa Fé do Araguaia', 'Santa Maria do Tocantins', 'Santa Rita do Tocantins', 'Santa Rosa do Tocantins', 'Santa Tereza do Tocantins', 'Santa Terezinha do Tocantins', 'Silvanópolis', 'Sucupira', 'São Bento do Tocantins', 'São Félix do Tocantins', 'São Miguel do Tocantins', 'São Salvador do Tocantins', 'São Sebastião do Tocantins', 'São Valério', 'Sítio Novo do Tocantins', 'Tabocão', 'Taguatinga', 'Taipas do Tocantins', 'Talismã', 'Tocantinópolis', 'Tocantínia', 'Tupirama', 'Tupiratins', 'Wanderlândia', 'Xambioá'],
  RN: ['Acari', 'Afonso Bezerra', 'Alexandria', 'Almino Afonso', 'Alto do Rodrigues', 'Angicos', 'Antônio Martins', 'Apodi', 'Areia Branca', 'Arês', 'Açu', 'Baraúna', 'Barcelona', 'Baía Formosa', 'Bento Fernandes', 'Bodó', 'Bom Jesus', 'Brejinho', 'Caicó', 'Caiçara do Norte', 'Caiçara do Rio do Vento', 'Campo Grande', 'Campo Redondo', 'Canguaretama', 'Caraúbas', 'Carnaubais', 'Carnaúba dos Dantas', 'Ceará-Mirim', 'Cerro Corá', 'Coronel Ezequiel', 'Coronel João Pessoa', 'Cruzeta', 'Currais Novos', 'Doutor Severiano', 'Encanto', 'Equador', 'Espírito Santo', 'Extremoz', 'Felipe Guerra', 'Fernando Pedroza', 'Florânia', 'Francisco Dantas', 'Frutuoso Gomes', 'Galinhos', 'Goianinha', 'Governador Dix-Sept Rosado', 'Grossos', 'Guamaré', 'Ielmo Marinho', 'Ipanguaçu', 'Ipueira', 'Itajá', 'Itaú', 'Jandaíra', 'Janduís', 'Januário Cicco', 'Japi', 'Jardim de Angicos', 'Jardim de Piranhas', 'Jardim do Seridó', 'Jaçanã', 'José da Penha', 'João Câmara', 'João Dias', 'Jucurutu', 'Jundiá', 'Lagoa Nova', 'Lagoa Salgada', "Lagoa d'Anta", 'Lagoa de Pedras', 'Lagoa de Velhos', 'Lajes', 'Lajes Pintadas', 'Lucrécia', 'Luís Gomes', 'Macau', 'Macaíba', 'Major Sales', 'Marcelino Vieira', 'Martins', 'Maxaranguape', 'Messias Targino', 'Montanhas', 'Monte Alegre', 'Monte das Gameleiras', 'Mossoró', 'Natal', 'Nova Cruz', 'Nísia Floresta', "Olho d'Água do Borges", 'Ouro Branco', 'Paraná', 'Parazinho', 'Paraú', 'Parelhas', 'Parnamirim', 'Passa e Fica', 'Passagem', 'Patu', 'Pau dos Ferros', 'Pedra Grande', 'Pedra Preta', 'Pedro Avelino', 'Pedro Velho', 'Pendências', 'Pilões', 'Portalegre', 'Porto do Mangue', 'Poço Branco', 'Pureza', 'Rafael Fernandes', 'Rafael Godeiro', 'Riacho da Cruz', 'Riacho de Santana', 'Riachuelo', 'Rio do Fogo', 'Rodolfo Fernandes', 'Ruy Barbosa', 'Santa Cruz', 'Santa Maria', 'Santana do Matos', 'Santana do Seridó', 'Santo Antônio', 'Senador Elói de Souza', 'Senador Georgino Avelino', 'Serra Caiada', 'Serra Negra do Norte', 'Serra de São Bento', 'Serra do Mel', 'Serrinha', 'Serrinha dos Pintos', 'Severiano Melo', 'São Bento do Norte', 'São Bento do Trairí', 'São Fernando', 'São Francisco do Oeste', 'São Gonçalo do Amarante', 'São José de Mipibu', 'São José do Campestre', 'São José do Seridó', 'São João do Sabugi', 'São Miguel', 'São Miguel do Gostoso', 'São Paulo do Potengi', 'São Pedro', 'São Rafael', 'São Tomé', 'São Vicente', 'Sítio Novo', 'Taboleiro Grande', 'Taipu', 'Tangará', 'Tenente Ananias', 'Tenente Laurentino Cruz', 'Tibau', 'Tibau do Sul', 'Timbaúba dos Batistas', 'Touros', 'Triunfo Potiguar', 'Umarizal', 'Upanema', 'Venha-Ver', 'Vera Cruz', 'Vila Flor', 'Viçosa', 'Várzea', 'Água Nova'],
  PI: ['Acauã', 'Agricolândia', 'Alagoinha do Piauí', 'Alegrete do Piauí', 'Alto Longá', 'Altos', 'Alvorada do Gurguéia', 'Amarante', 'Angical do Piauí', 'Antônio Almeida', 'Anísio de Abreu', 'Aroazes', 'Aroeiras do Itaim', 'Arraial', 'Assunção do Piauí', 'Avelino Lopes', 'Baixa Grande do Ribeiro', "Barra D'Alcântara", 'Barras', 'Barreiras do Piauí', 'Barro Duro', 'Batalha', 'Bela Vista do Piauí', 'Belém do Piauí', 'Beneditinos', 'Bertolínia', 'Betânia do Piauí', 'Boa Hora', 'Bocaina', 'Bom Jesus', 'Bom Princípio do Piauí', 'Bonfim do Piauí', 'Boqueirão do Piauí', 'Brasileira', 'Brejo do Piauí', 'Buriti dos Lopes', 'Buriti dos Montes', 'Cabeceiras do Piauí', 'Cajazeiras do Piauí', 'Cajueiro da Praia', 'Caldeirão Grande do Piauí', 'Campinas do Piauí', 'Campo Alegre do Fidalgo', 'Campo Grande do Piauí', 'Campo Largo do Piauí', 'Campo Maior', 'Canavieira', 'Canto do Buriti', 'Capitão Gervásio Oliveira', 'Capitão de Campos', 'Caracol', 'Caraúbas do Piauí', 'Caridade do Piauí', 'Castelo do Piauí', 'Caxingó', 'Cocal', 'Cocal de Telha', 'Cocal dos Alves', 'Coivaras', 'Colônia do Gurguéia', 'Colônia do Piauí', 'Conceição do Canindé', 'Coronel José Dias', 'Corrente', 'Cristalândia do Piauí', 'Cristino Castro', 'Curimatá', 'Currais', 'Curral Novo do Piauí', 'Curralinhos', 'Demerval Lobão', 'Dirceu Arcoverde', 'Dom Expedito Lopes', 'Dom Inocêncio', 'Domingos Mourão', 'Elesbão Veloso', 'Eliseu Martins', 'Esperantina', 'Fartura do Piauí', 'Flores do Piauí', 'Floresta do Piauí', 'Floriano', 'Francinópolis', 'Francisco Ayres', 'Francisco Macedo', 'Francisco Santos', 'Fronteiras', 'Geminiano', 'Gilbués', 'Guadalupe', 'Guaribas', 'Hugo Napoleão', 'Ilha Grande', 'Inhuma', 'Ipiranga do Piauí', 'Isaías Coelho', 'Itainópolis', 'Itaueira', 'Jacobina do Piauí', 'Jaicós', 'Jardim do Mulato', 'Jatobá do Piauí', 'Jerumenha', 'Joaquim Pires', 'Joca Marques', 'José de Freitas', 'João Costa', 'Juazeiro do Piauí', 'Jurema', 'Júlio Borges', 'Lagoa Alegre', 'Lagoa de São Francisco', 'Lagoa do Barro do Piauí', 'Lagoa do Piauí', 'Lagoa do Sítio', 'Lagoinha do Piauí', 'Landri Sales', 'Luzilândia', 'Luís Correia', 'Madeiro', 'Manoel Emídio', 'Marcolândia', 'Marcos Parente', 'Massapê do Piauí', 'Matias Olímpio', 'Miguel Alves', 'Miguel Leão', 'Milton Brandão', 'Monsenhor Gil', 'Monsenhor Hipólito', 'Monte Alegre do Piauí', 'Morro Cabeça no Tempo', 'Morro do Chapéu do Piauí', 'Murici dos Portelas', 'Nazaré do Piauí', 'Nazária', 'Nossa Senhora de Nazaré', 'Nossa Senhora dos Remédios', 'Nova Santa Rita', 'Novo Oriente do Piauí', 'Novo Santo Antônio', 'Oeiras', "Olho D'Água do Piauí", 'Padre Marcos', 'Paes Landim', 'Pajeú do Piauí', 'Palmeira do Piauí', 'Palmeirais', 'Paquetá', 'Parnaguá', 'Parnaíba', 'Passagem Franca do Piauí', 'Patos do Piauí', "Pau D'Arco do Piauí", 'Paulistana', 'Pavussu', 'Pedro II', 'Pedro Laurentino', 'Picos', 'Pimenteiras', 'Pio IX', 'Piracuruca', 'Piripiri', 'Porto', 'Porto Alegre do Piauí', 'Prata do Piauí', 'Queimada Nova', 'Redenção do Gurguéia', 'Regeneração', 'Riacho Frio', 'Ribeira do Piauí', 'Ribeiro Gonçalves', 'Rio Grande do Piauí', 'Santa Cruz do Piauí', 'Santa Cruz dos Milagres', 'Santa Filomena', 'Santa Luz', 'Santa Rosa do Piauí', 'Santana do Piauí', 'Santo Antônio de Lisboa', 'Santo Antônio dos Milagres', 'Santo Inácio do Piauí', 'Sebastião Barros', 'Sebastião Leal', 'Sigefredo Pacheco', 'Simplício Mendes', 'Simões', 'Socorro do Piauí', 'Sussuapara', 'São Braz do Piauí', 'São Francisco de Assis do Piauí', 'São Francisco do Piauí', 'São Félix do Piauí', 'São Gonçalo do Gurguéia', 'São Gonçalo do Piauí', 'São José do Divino', 'São José do Peixe', 'São José do Piauí', 'São João da Canabrava', 'São João da Fronteira', 'São João da Serra', 'São João da Varjota', 'São João do Arraial', 'São João do Piauí', 'São Julião', 'São Lourenço do Piauí', 'São Luis do Piauí', 'São Miguel da Baixa Grande', 'São Miguel do Fidalgo', 'São Miguel do Tapuio', 'São Pedro do Piauí', 'São Raimundo Nonato', 'Tamboril do Piauí', 'Tanque do Piauí', 'Teresina', 'União', 'Uruçuí', 'Valença do Piauí', 'Vera Mendes', 'Vila Nova do Piauí', 'Várzea Branca', 'Várzea Grande', 'Wall Ferraz', 'Água Branca'],
  RS: ['Aceguá', 'Agudo', 'Ajuricaba', 'Alecrim', 'Alegrete', 'Alegria', 'Almirante Tamandaré do Sul', 'Alpestre', 'Alto Alegre', 'Alto Feliz', 'Alvorada', 'Amaral Ferrador', 'Ametista do Sul', 'André da Rocha', 'Anta Gorda', 'Antônio Prado', 'Arambaré', 'Araricá', 'Aratiba', 'Arroio Grande', 'Arroio do Meio', 'Arroio do Padre', 'Arroio do Sal', 'Arroio do Tigre', 'Arroio dos Ratos', 'Arvorezinha', 'Augusto Pestana', 'Bagé', 'Balneário Pinhal', 'Barra Funda', 'Barra do Guarita', 'Barra do Quaraí', 'Barra do Ribeiro', 'Barra do Rio Azul', 'Barracão', 'Barros Cassal', 'Barão', 'Barão de Cotegipe', 'Barão do Triunfo', 'Benjamin Constant do Sul', 'Bento Gonçalves', 'Boa Vista das Missões', 'Boa Vista do Buricá', 'Boa Vista do Cadeado', 'Boa Vista do Incra', 'Boa Vista do Sul', 'Bom Jesus', 'Bom Princípio', 'Bom Progresso', 'Bom Retiro do Sul', 'Boqueirão do Leão', 'Bossoroca', 'Bozano', 'Braga', 'Brochier', 'Butiá', 'Cacequi', 'Cachoeira do Sul', 'Cachoeirinha', 'Cacique Doble', 'Caibaté', 'Caiçara', 'Camaquã', 'Camargo', 'Cambará do Sul', 'Campestre da Serra', 'Campina das Missões', 'Campinas do Sul', 'Campo Bom', 'Campo Novo', 'Campos Borges', 'Candelária', 'Candiota', 'Canela', 'Canguçu', 'Canoas', 'Canudos do Vale', 'Capela de Santana', 'Capitão', 'Capivari do Sul', 'Capão Bonito do Sul', 'Capão da Canoa', 'Capão do Cipó', 'Capão do Leão', 'Carazinho', 'Caraá', 'Carlos Barbosa', 'Carlos Gomes', 'Casca', 'Caseiros', 'Catuípe', 'Caxias do Sul', 'Caçapava do Sul', 'Centenário', 'Cerrito', 'Cerro Branco', 'Cerro Grande', 'Cerro Grande do Sul', 'Cerro Largo', 'Chapada', 'Charqueadas', 'Charrua', 'Chiapetta', 'Chuvisca', 'Chuí', 'Cidreira', 'Ciríaco', 'Colinas', 'Colorado', 'Condor', 'Constantina', 'Coqueiro Baixo', 'Coqueiros do Sul', 'Coronel Barros', 'Coronel Bicaco', 'Coronel Pilar', 'Cotiporã', 'Coxilha', 'Crissiumal', 'Cristal', 'Cristal do Sul', 'Cruz Alta', 'Cruzaltense', 'Cruzeiro do Sul', 'Cândido Godói', 'David Canabarro', 'Derrubadas', 'Dezesseis de Novembro', 'Dilermando de Aguiar', 'Dois Irmãos', 'Dois Irmãos das Missões', 'Dois Lajeados', 'Dom Feliciano', 'Dom Pedrito', 'Dom Pedro de Alcântara', 'Dona Francisca', 'Doutor Maurício Cardoso', 'Doutor Ricardo', 'Eldorado do Sul', 'Encantado', 'Encruzilhada do Sul', 'Engenho Velho', 'Entre Rios do Sul', 'Entre-Ijuís', 'Erebango', 'Erechim', 'Ernestina', 'Erval Grande', 'Erval Seco', 'Esmeralda', 'Esperança do Sul', 'Espumoso', 'Estação', 'Esteio', 'Estrela', 'Estrela Velha', 'Estância Velha', 'Eugênio de Castro', 'Fagundes Varela', 'Farroupilha', 'Faxinal do Soturno', 'Faxinalzinho', 'Fazenda Vilanova', 'Feliz', 'Flores da Cunha', 'Floriano Peixoto', 'Fontoura Xavier', 'Formigueiro', 'Forquetinha', 'Fortaleza dos Valos', 'Frederico Westphalen', 'Garibaldi', 'Garruchos', 'Gaurama', 'General Câmara', 'Gentil', 'Getúlio Vargas', 'Giruá', 'Glorinha', 'Gramado', 'Gramado Xavier', 'Gramado dos Loureiros', 'Gravataí', 'Guabiju', 'Guaporé', 'Guarani das Missões', 'Guaíba', 'Harmonia', 'Herval', 'Herveiras', 'Horizontina', 'Hulha Negra', 'Humaitá', 'Ibarama', 'Ibiaçá', 'Ibiraiaras', 'Ibirapuitã', 'Ibirubá', 'Igrejinha', 'Ijuí', 'Ilópolis', 'Imbé', 'Imigrante', 'Independência', 'Inhacorá', 'Ipiranga do Sul', 'Ipê', 'Iraí', 'Itaara', 'Itacurubi', 'Itapuca', 'Itaqui', 'Itati', 'Itatiba do Sul', 'Ivorá', 'Ivoti', 'Jaboticaba', 'Jacuizinho', 'Jacutinga', 'Jaguari', 'Jaguarão', 'Jaquirana', 'Jari', 'Jóia', 'Júlio de Castilhos', 'Lagoa Bonita do Sul', 'Lagoa Vermelha', 'Lagoa dos Três Cantos', 'Lagoão', 'Lajeado', 'Lajeado do Bugre', 'Lavras do Sul', 'Liberato Salzano', 'Lindolfo Collor', 'Linha Nova', 'Machadinho', 'Mampituba', 'Manoel Viana', 'Maquiné', 'Maratá', 'Marau', 'Marcelino Ramos', 'Mariana Pimentel', 'Mariano Moro', 'Marques de Souza', 'Mata', 'Mato Castelhano', 'Mato Leitão', 'Mato Queimado', 'Maximiliano de Almeida', 'Maçambará', 'Minas do Leão', 'Miraguaí', 'Montauri', 'Monte Alegre dos Campos', 'Monte Belo do Sul', 'Montenegro', 'Mormaço', 'Morrinhos do Sul', 'Morro Redondo', 'Morro Reuter', 'Mostardas', 'Muitos Capões', 'Muliterno', 'Muçum', 'Nicolau Vergueiro', 'Nonoai', 'Nova Alvorada', 'Nova Araçá', 'Nova Bassano', 'Nova Boa Vista', 'Nova Bréscia', 'Nova Candelária', 'Nova Esperança do Sul', 'Nova Hartz', 'Nova Palma', 'Nova Petrópolis', 'Nova Prata', 'Nova Pádua', 'Nova Ramada', 'Nova Roma do Sul', 'Nova Santa Rita', 'Novo Barreiro', 'Novo Cabrais', 'Novo Hamburgo', 'Novo Machado', 'Novo Tiradentes', 'Novo Xingu', 'Não-Me-Toque', 'Osório', 'Paim Filho', 'Palmares do Sul', 'Palmeira das Missões', 'Palmitinho', 'Panambi', 'Pantano Grande', 'Paraí', 'Paraíso do Sul', 'Pareci Novo', 'Parobé', 'Passa Sete', 'Passo Fundo', 'Passo do Sobrado', 'Paulo Bento', 'Paverama', 'Pedras Altas', 'Pedro Osório', 'Pejuçara', 'Pelotas', 'Picada Café', 'Pinhal', 'Pinhal Grande', 'Pinhal da Serra', 'Pinheirinho do Vale', 'Pinheiro Machado', 'Pinto Bandeira', 'Pirapó', 'Piratini', 'Planalto', 'Ponte Preta', 'Pontão', 'Porto Alegre', 'Porto Lucena', 'Porto Mauá', 'Porto Vera Cruz', 'Porto Xavier', 'Portão', 'Pouso Novo', 'Poço das Antas', 'Presidente Lucena', 'Progresso', 'Protásio Alves', 'Putinga', 'Quaraí', 'Quatro Irmãos', 'Quevedos', 'Quinze de Novembro', 'Redentora', 'Relvado', 'Restinga Sêca', 'Rio Grande', 'Rio Pardo', 'Rio dos Índios', 'Riozinho', 'Roca Sales', 'Rodeio Bonito', 'Rolador', 'Rolante', 'Ronda Alta', 'Rondinha', 'Roque Gonzales', 'Rosário do Sul', 'Sagrada Família', 'Saldanha Marinho', 'Salto do Jacuí', 'Salvador das Missões', 'Salvador do Sul', 'Sananduva', "Sant'Ana do Livramento", 'Santa Bárbara do Sul', 'Santa Cecília do Sul', 'Santa Clara do Sul', 'Santa Cruz do Sul', 'Santa Margarida do Sul', 'Santa Maria', 'Santa Maria do Herval', 'Santa Rosa', 'Santa Tereza', 'Santa Vitória do Palmar', 'Santana da Boa Vista', 'Santiago', 'Santo Antônio da Patrulha', 'Santo Antônio das Missões', 'Santo Antônio do Palma', 'Santo Antônio do Planalto', 'Santo Augusto', 'Santo Cristo', 'Santo Expedito do Sul', 'Santo Ângelo', 'Sapiranga', 'Sapucaia do Sul', 'Sarandi', 'Seberi', 'Sede Nova', 'Segredo', 'Selbach', 'Senador Salgado Filho', 'Sentinela do Sul', 'Serafina Corrêa', 'Sertão', 'Sertão Santana', 'Sete de Setembro', 'Severiano de Almeida', 'Silveira Martins', 'Sinimbu', 'Sobradinho', 'Soledade', 'São Borja', 'São Domingos do Sul', 'São Francisco de Assis', 'São Francisco de Paula', 'São Gabriel', 'São Jerônimo', 'São Jorge', 'São José das Missões', 'São José do Herval', 'São José do Hortêncio', 'São José do Inhacorá', 'São José do Norte', 'São José do Ouro', 'São José do Sul', 'São José dos Ausentes', 'São João da Urtiga', 'São João do Polêsine', 'São Leopoldo', 'São Lourenço do Sul', 'São Luiz Gonzaga', 'São Marcos', 'São Martinho', 'São Martinho da Serra', 'São Miguel das Missões', 'São Nicolau', 'São Paulo das Missões', 'São Pedro da Serra', 'São Pedro das Missões', 'São Pedro do Butiá', 'São Pedro do Sul', 'São Sebastião do Caí', 'São Sepé', 'São Valentim', 'São Valentim do Sul', 'São Valério do Sul', 'São Vendelino', 'São Vicente do Sul', 'Sério', 'Tabaí', 'Tapejara', 'Tapera', 'Tapes', 'Taquara', 'Taquari', 'Taquaruçu do Sul', 'Tavares', 'Tenente Portela', 'Terra de Areia', 'Teutônia', 'Tio Hugo', 'Tiradentes do Sul', 'Toropi', 'Torres', 'Tramandaí', 'Travesseiro', 'Trindade do Sul', 'Triunfo', 'Três Arroios', 'Três Cachoeiras', 'Três Coroas', 'Três Forquilhas', 'Três Palmeiras', 'Três Passos', 'Três de Maio', 'Tucunduva', 'Tunas', 'Tupanci do Sul', 'Tupanciretã', 'Tupandi', 'Tuparendi', 'Turuçu', 'Ubiretama', 'Unistalda', 'União da Serra', 'Uruguaiana', 'Vacaria', 'Vale Real', 'Vale Verde', 'Vale do Sol', 'Vanini', 'Venâncio Aires', 'Vera Cruz', 'Veranópolis', 'Vespasiano Corrêa', 'Viadutos', 'Viamão', 'Vicente Dutra', 'Victor Graeff', 'Vila Flores', 'Vila Lângaro', 'Vila Maria', 'Vila Nova do Sul', 'Vista Alegre', 'Vista Alegre do Prata', 'Vista Gaúcha', 'Vitória das Missões', 'Westfália', 'Xangri-lá', 'Água Santa', 'Áurea'],
  MT: ['Acorizal', 'Alta Floresta', 'Alto Araguaia', 'Alto Boa Vista', 'Alto Garças', 'Alto Paraguai', 'Alto Taquari', 'Apiacás', 'Araguaiana', 'Araguainha', 'Araputanga', 'Arenápolis', 'Aripuanã', 'Barra do Bugres', 'Barra do Garças', 'Barão de Melgaço', 'Bom Jesus do Araguaia', 'Brasnorte', 'Campinápolis', 'Campo Novo do Parecis', 'Campo Verde', 'Campos de Júlio', 'Canabrava do Norte', 'Canarana', 'Carlinda', 'Castanheira', 'Chapada dos Guimarães', 'Cláudia', 'Cocalinho', 'Colniza', 'Colíder', 'Comodoro', 'Confresa', "Conquista D'Oeste", 'Cotriguaçu', 'Cuiabá', 'Curvelândia', 'Cáceres', 'Denise', 'Diamantino', 'Dom Aquino', 'Feliz Natal', "Figueirópolis D'Oeste", 'Gaúcha do Norte', 'General Carneiro', "Glória D'Oeste", 'Guarantã do Norte', 'Guiratinga', 'Indiavaí', 'Ipiranga do Norte', 'Itanhangá', 'Itaúba', 'Itiquira', 'Jaciara', 'Jangada', 'Jauru', 'Juara', 'Juruena', 'Juscimeira', 'Juína', "Lambari D'Oeste", 'Lucas do Rio Verde', 'Luciara', 'Marcelândia', 'Matupá', "Mirassol d'Oeste", 'Nobres', 'Nortelândia', 'Nossa Senhora do Livramento', 'Nova Bandeirantes', 'Nova Brasilândia', 'Nova Canaã do Norte', 'Nova Guarita', 'Nova Lacerda', 'Nova Marilândia', 'Nova Maringá', 'Nova Monte Verde', 'Nova Mutum', 'Nova Nazaré', 'Nova Olímpia', 'Nova Santa Helena', 'Nova Ubiratã', 'Nova Xavantina', 'Novo Horizonte do Norte', 'Novo Mundo', 'Novo Santo Antônio', 'Novo São Joaquim', 'Paranatinga', 'Paranaíta', 'Pedra Preta', 'Peixoto de Azevedo', 'Planalto da Serra', 'Poconé', 'Pontal do Araguaia', 'Ponte Branca', 'Pontes e Lacerda', 'Porto Alegre do Norte', 'Porto Esperidião', 'Porto Estrela', 'Porto dos Gaúchos', 'Poxoréu', 'Primavera do Leste', 'Querência', 'Reserva do Cabaçal', 'Ribeirão Cascalheira', 'Ribeirãozinho', 'Rio Branco', 'Rondolândia', 'Rondonópolis', 'Rosário Oeste', 'Salto do Céu', 'Santa Carmem', 'Santa Cruz do Xingu', 'Santa Rita do Trivelato', 'Santa Terezinha', 'Santo Afonso', 'Santo Antônio do Leste', 'Santo Antônio do Leverger', 'Sapezal', 'Serra Nova Dourada', 'Sinop', 'Sorriso', 'São Félix do Araguaia', 'São José do Povo', 'São José do Rio Claro', 'São José do Xingu', 'São José dos Quatro Marcos', 'São Pedro da Cipa', 'Tabaporã', 'Tangará da Serra', 'Tapurah', 'Terra Nova do Norte', 'Tesouro', 'Torixoréu', 'União do Sul', 'Vale de São Domingos', 'Vera', 'Vila Bela da Santíssima Trindade', 'Vila Rica', 'Várzea Grande', 'Água Boa'],
  AC: ['Acrelândia', 'Assis Brasil', 'Brasiléia', 'Bujari', 'Capixaba', 'Cruzeiro do Sul', 'Epitaciolândia', 'Feijó', 'Jordão', 'Manoel Urbano', 'Marechal Thaumaturgo', 'Mâncio Lima', 'Plácido de Castro', 'Porto Acre', 'Porto Walter', 'Rio Branco', 'Rodrigues Alves', 'Santa Rosa do Purus', 'Sena Madureira', 'Senador Guiomard', 'Tarauacá', 'Xapuri'],
  SP: ['Adamantina', 'Adolfo', 'Aguaí', 'Agudos', 'Alambari', 'Alfredo Marcondes', 'Altair', 'Altinópolis', 'Alto Alegre', 'Alumínio', 'Alvinlândia', 'Americana', 'Amparo', 'Américo Brasiliense', 'Américo de Campos', 'Analândia', 'Andradina', 'Angatuba', 'Anhembi', 'Anhumas', 'Aparecida', "Aparecida d'Oeste", 'Apiaí', 'Aramina', 'Arandu', 'Arapeí', 'Araraquara', 'Araras', 'Araçariguama', 'Araçatuba', 'Araçoiaba da Serra', 'Arco-Íris', 'Arealva', 'Areias', 'Areiópolis', 'Ariranha', 'Artur Nogueira', 'Arujá', 'Aspásia', 'Assis', 'Atibaia', 'Auriflama', 'Avanhandava', 'Avaré', 'Avaí', 'Bady Bassitt', 'Balbinos', 'Bananal', 'Barbosa', 'Bariri', 'Barra Bonita', 'Barra do Chapéu', 'Barra do Turvo', 'Barretos', 'Barrinha', 'Barueri', 'Barão de Antonina', 'Bastos', 'Batatais', 'Bauru', 'Bebedouro', 'Bento de Abreu', 'Bernardino de Campos', 'Bertioga', 'Bilac', 'Birigui', 'Biritiba Mirim', 'Boa Esperança do Sul', 'Bocaina', 'Bofete', 'Boituva', 'Bom Jesus dos Perdões', 'Bom Sucesso de Itararé', 'Boracéia', 'Borborema', 'Borebi', 'Borá', 'Botucatu', 'Bragança Paulista', 'Braúna', 'Brejo Alegre', 'Brodowski', 'Brotas', 'Buri', 'Buritama', 'Buritizal', 'Bálsamo', 'Cabreúva', 'Cabrália Paulista', 'Cachoeira Paulista', 'Caconde', 'Cafelândia', 'Caiabu', 'Caieiras', 'Caiuá', 'Cajamar', 'Cajati', 'Cajobi', 'Cajuru', 'Campina do Monte Alegre', 'Campinas', 'Campo Limpo Paulista', 'Campos Novos Paulista', 'Campos do Jordão', 'Cananéia', 'Canas', 'Canitar', 'Capela do Alto', 'Capivari', 'Capão Bonito', 'Caraguatatuba', 'Carapicuíba', 'Cardoso', 'Casa Branca', 'Castilho', 'Catanduva', 'Catiguá', 'Caçapava', 'Cedral', 'Cerqueira César', 'Cerquilho', 'Cesário Lange', 'Charqueada', 'Chavantes', 'Clementina', 'Colina', 'Colômbia', 'Conchal', 'Conchas', 'Cordeirópolis', 'Coroados', 'Coronel Macedo', 'Corumbataí', 'Cosmorama', 'Cosmópolis', 'Cotia', 'Cravinhos', 'Cristais Paulista', 'Cruzeiro', 'Cruzália', 'Cubatão', 'Cunha', 'Cássia dos Coqueiros', 'Cândido Mota', 'Cândido Rodrigues', 'Descalvado', 'Diadema', 'Dirce Reis', 'Divinolândia', 'Dobrada', 'Dois Córregos', 'Dolcinópolis', 'Dourado', 'Dracena', 'Duartina', 'Dumont', 'Echaporã', 'Eldorado', 'Elias Fausto', 'Elisiário', 'Embaúba', 'Embu das Artes', 'Embu-Guaçu', 'Emilianópolis', 'Engenheiro Coelho', 'Espírito Santo do Pinhal', 'Espírito Santo do Turvo', 'Estiva Gerbi', "Estrela d'Oeste", 'Estrela do Norte', 'Euclides da Cunha Paulista', 'Fartura', 'Fernando Prestes', 'Fernandópolis', 'Fernão', 'Ferraz de Vasconcelos', 'Flora Rica', 'Floreal', 'Florínea', 'Flórida Paulista', 'Franca', 'Francisco Morato', 'Franco da Rocha', 'Gabriel Monteiro', 'Garça', 'Gastão Vidigal', 'Gavião Peixoto', 'General Salgado', 'Getulina', 'Glicério', 'Guaimbê', 'Guaiçara', 'Guapiara', 'Guapiaçu', 'Guaraci', "Guarani d'Oeste", 'Guarantã', 'Guararapes', 'Guararema', 'Guaratinguetá', 'Guaraçaí', 'Guareí', 'Guariba', 'Guarujá', 'Guarulhos', 'Guará', 'Guatapará', 'Guaíra', 'Guzolândia', 'Gália', 'Herculândia', 'Holambra', 'Hortolândia', 'Iacanga', 'Iacri', 'Iaras', 'Ibaté', 'Ibirarema', 'Ibirá', 'Ibitinga', 'Ibiúna', 'Icém', 'Iepê', 'Igarapava', 'Igaratá', 'Igaraçu do Tietê', 'Iguape', 'Ilha Comprida', 'Ilha Solteira', 'Ilhabela', 'Indaiatuba', 'Indiana', 'Indiaporã', 'Inúbia Paulista', 'Ipaussu', 'Iperó', 'Ipeúna', 'Ipiguá', 'Iporanga', 'Ipuã', 'Iracemápolis', 'Irapuru', 'Irapuã', 'Itaberá', 'Itajobi', 'Itaju', 'Itanhaém', 'Itaoca', 'Itapecerica da Serra', 'Itapetininga', 'Itapeva', 'Itapevi', 'Itapira', 'Itapirapuã Paulista', 'Itaporanga', 'Itapura', 'Itapuí', 'Itaquaquecetuba', 'Itararé', 'Itariri', 'Itatiba', 'Itatinga', 'Itaí', 'Itirapina', 'Itirapuã', 'Itobi', 'Itu', 'Itupeva', 'Ituverava', 'Itápolis', 'Jaborandi', 'Jaboticabal', 'Jacareí', 'Jaci', 'Jacupiranga', 'Jaguariúna', 'Jales', 'Jambeiro', 'Jandira', 'Jardinópolis', 'Jarinu', 'Jaú', 'Jeriquara', 'Joanópolis', 'José Bonifácio', 'João Ramalho', 'Jumirim', 'Jundiaí', 'Junqueirópolis', 'Juquitiba', 'Juquiá', 'Júlio Mesquita', 'Lagoinha', 'Laranjal Paulista', 'Lavrinhas', 'Lavínia', 'Leme', 'Lençóis Paulista', 'Limeira', 'Lindóia', 'Lins', 'Lorena', 'Lourdes', 'Louveira', 'Lucianópolis', 'Lucélia', 'Luiziânia', 'Lupércio', 'Lutécia', 'Luís Antônio', 'Macatuba', 'Macaubal', 'Macedônia', 'Magda', 'Mairinque', 'Mairiporã', 'Manduri', 'Marabá Paulista', 'Maracaí', 'Marapoama', 'Marinópolis', 'Mariápolis', 'Martinópolis', 'Marília', 'Matão', 'Mauá', 'Mendonça', 'Meridiano', 'Mesópolis', 'Miguelópolis', 'Mineiros do Tietê', 'Mira Estrela', 'Miracatu', 'Mirandópolis', 'Mirante do Paranapanema', 'Mirassol', 'Mirassolândia', 'Mococa', 'Mogi Guaçu', 'Mogi Mirim', 'Mogi das Cruzes', 'Mombuca', 'Mongaguá', 'Monte Alegre do Sul', 'Monte Alto', 'Monte Aprazível', 'Monte Azul Paulista', 'Monte Castelo', 'Monte Mor', 'Monteiro Lobato', 'Monções', 'Morro Agudo', 'Morungaba', 'Motuca', 'Murutinga do Sul', 'Nantes', 'Narandiba', 'Natividade da Serra', 'Nazaré Paulista', 'Neves Paulista', 'Nhandeara', 'Nipoã', 'Nova Aliança', 'Nova Campina', 'Nova Canaã Paulista', 'Nova Castilho', 'Nova Europa', 'Nova Granada', 'Nova Guataporanga', 'Nova Independência', 'Nova Luzitânia', 'Nova Odessa', 'Novais', 'Novo Horizonte', 'Nuporanga', 'Ocauçu', 'Olímpia', 'Onda Verde', 'Oriente', 'Orindiúva', 'Orlândia', 'Osasco', 'Oscar Bressane', 'Osvaldo Cruz', 'Ourinhos', 'Ouro Verde', 'Ouroeste', 'Pacaembu', 'Palestina', 'Palmares Paulista', "Palmeira d'Oeste", 'Palmital', 'Panorama', 'Paraguaçu Paulista', 'Paraibuna', 'Paranapanema', 'Paranapuã', 'Parapuã', 'Paraíso', 'Pardinho', 'Pariquera-Açu', 'Parisi', 'Patrocínio Paulista', 'Paulicéia', 'Paulistânia', 'Paulo de Faria', 'Paulínia', 'Pederneiras', 'Pedra Bela', 'Pedranópolis', 'Pedregulho', 'Pedreira', 'Pedrinhas Paulista', 'Pedro de Toledo', 'Penápolis', 'Pereira Barreto', 'Pereiras', 'Peruíbe', 'Piacatu', 'Piedade', 'Pilar do Sul', 'Pindamonhangaba', 'Pindorama', 'Pinhalzinho', 'Piquerobi', 'Piquete', 'Piracaia', 'Piracicaba', 'Piraju', 'Pirajuí', 'Pirangi', 'Pirapora do Bom Jesus', 'Pirapozinho', 'Pirassununga', 'Piratininga', 'Pitangueiras', 'Planalto', 'Platina', 'Poloni', 'Pompéia', 'Pongaí', 'Pontal', 'Pontalinda', 'Pontes Gestal', 'Populina', 'Porangaba', 'Porto Feliz', 'Porto Ferreira', 'Potim', 'Potirendaba', 'Poá', 'Pracinha', 'Pradópolis', 'Praia Grande', 'Pratânia', 'Presidente Alves', 'Presidente Bernardes', 'Presidente Epitácio', 'Presidente Prudente', 'Presidente Venceslau', 'Promissão', 'Quadra', 'Quatá', 'Queiroz', 'Queluz', 'Quintana', 'Rafard', 'Rancharia', 'Redenção da Serra', 'Regente Feijó', 'Reginópolis', 'Registro', 'Restinga', 'Ribeira', 'Ribeirão Bonito', 'Ribeirão Branco', 'Ribeirão Corrente', 'Ribeirão Grande', 'Ribeirão Pires', 'Ribeirão Preto', 'Ribeirão do Sul', 'Ribeirão dos Índios', 'Rifaina', 'Rincão', 'Rinópolis', 'Rio Claro', 'Rio Grande da Serra', 'Rio das Pedras', 'Riolândia', 'Riversul', 'Rosana', 'Roseira', 'Rubinéia', 'Rubiácea', 'Sabino', 'Sagres', 'Sales', 'Sales Oliveira', 'Salesópolis', 'Salmourão', 'Saltinho', 'Salto', 'Salto Grande', 'Salto de Pirapora', 'Sandovalina', 'Santa Adélia', 'Santa Albertina', 'Santa Branca', "Santa Bárbara d'Oeste", "Santa Clara d'Oeste", 'Santa Cruz da Conceição', 'Santa Cruz da Esperança', 'Santa Cruz das Palmeiras', 'Santa Cruz do Rio Pardo', 'Santa Ernestina', 'Santa Fé do Sul', 'Santa Gertrudes', 'Santa Isabel', 'Santa Lúcia', 'Santa Maria da Serra', 'Santa Mercedes', "Santa Rita d'Oeste", 'Santa Rita do Passa Quatro', 'Santa Rosa de Viterbo', 'Santa Salete', 'Santana da Ponte Pensa', 'Santana de Parnaíba', 'Santo Anastácio', 'Santo André', 'Santo Antônio da Alegria', 'Santo Antônio de Posse', 'Santo Antônio do Aracanguá', 'Santo Antônio do Jardim', 'Santo Antônio do Pinhal', 'Santo Expedito', 'Santos', 'Santópolis do Aguapeí', 'Sarapuí', 'Sarutaiá', 'Sebastianópolis do Sul', 'Serra Azul', 'Serra Negra', 'Serrana', 'Sertãozinho', 'Sete Barras', 'Severínia', 'Silveiras', 'Socorro', 'Sorocaba', 'Sud Mennucci', 'Sumaré', 'Suzano', 'Suzanápolis', 'São Bento do Sapucaí', 'São Bernardo do Campo', 'São Caetano do Sul', 'São Carlos', 'São Francisco', 'São Joaquim da Barra', 'São José da Bela Vista', 'São José do Barreiro', 'São José do Rio Pardo', 'São José do Rio Preto', 'São José dos Campos', 'São João da Boa Vista', 'São João das Duas Pontes', 'São João de Iracema', "São João do Pau d'Alho", 'São Lourenço da Serra', 'São Luiz do Paraitinga', 'São Manuel', 'São Miguel Arcanjo', 'São Paulo', 'São Pedro', 'São Pedro do Turvo', 'São Roque', 'São Sebastião', 'São Sebastião da Grama', 'São Simão', 'São Vicente', 'Tabapuã', 'Tabatinga', 'Taboão da Serra', 'Taciba', 'Taguaí', 'Taiaçu', 'Taiúva', 'Tambaú', 'Tanabi', 'Tapiratiba', 'Tapiraí', 'Taquaral', 'Taquaritinga', 'Taquarituba', 'Taquarivaí', 'Tarabai', 'Tarumã', 'Tatuí', 'Taubaté', 'Tejupá', 'Teodoro Sampaio', 'Terra Roxa', 'Tietê', 'Timburi', 'Torre de Pedra', 'Torrinha', 'Trabiju', 'Tremembé', 'Três Fronteiras', 'Tuiuti', 'Tupi Paulista', 'Tupã', 'Turiúba', 'Turmalina', 'Ubarana', 'Ubatuba', 'Ubirajara', 'Uchoa', 'União Paulista', 'Uru', 'Urupês', 'Urânia', 'Valentim Gentil', 'Valinhos', 'Valparaíso', 'Vargem', 'Vargem Grande Paulista', 'Vargem Grande do Sul', 'Vera Cruz', 'Vinhedo', 'Viradouro', 'Vista Alegre do Alto', 'Vitória Brasil', 'Votorantim', 'Votuporanga', 'Várzea Paulista', 'Zacarias', 'Águas da Prata', 'Águas de Lindóia', 'Águas de Santa Bárbara', 'Águas de São Pedro', 'Álvares Florence', 'Álvares Machado', 'Álvaro de Carvalho', 'Óleo'],
  ES: ['Afonso Cláudio', 'Alegre', 'Alfredo Chaves', 'Alto Rio Novo', 'Anchieta', 'Apiacá', 'Aracruz', 'Atílio Vivacqua', 'Baixo Guandu', 'Barra de São Francisco', 'Boa Esperança', 'Bom Jesus do Norte', 'Brejetuba', 'Cachoeiro de Itapemirim', 'Cariacica', 'Castelo', 'Colatina', 'Conceição da Barra', 'Conceição do Castelo', 'Divino de São Lourenço', 'Domingos Martins', 'Dores do Rio Preto', 'Ecoporanga', 'Fundão', 'Governador Lindenberg', 'Guarapari', 'Guaçuí', 'Ibatiba', 'Ibiraçu', 'Ibitirama', 'Iconha', 'Irupi', 'Itaguaçu', 'Itapemirim', 'Itarana', 'Iúna', 'Jaguaré', 'Jerônimo Monteiro', 'João Neiva', 'Laranja da Terra', 'Linhares', 'Mantenópolis', 'Marataízes', 'Marechal Floriano', 'Marilândia', 'Mimoso do Sul', 'Montanha', 'Mucurici', 'Muniz Freire', 'Muqui', 'Nova Venécia', 'Pancas', 'Pedro Canário', 'Pinheiros', 'Piúma', 'Ponto Belo', 'Presidente Kennedy', 'Rio Bananal', 'Rio Novo do Sul', 'Santa Leopoldina', 'Santa Maria de Jetibá', 'Santa Teresa', 'Serra', 'Sooretama', 'São Domingos do Norte', 'São Gabriel da Palha', 'São José do Calçado', 'São Mateus', 'São Roque do Canaã', 'Vargem Alta', 'Venda Nova do Imigrante', 'Viana', 'Vila Pavão', 'Vila Valério', 'Vila Velha', 'Vitória', 'Água Doce do Norte', 'Águia Branca'],
  MA: ['Afonso Cunha', 'Alcântara', 'Aldeias Altas', 'Altamira do Maranhão', 'Alto Alegre do Maranhão', 'Alto Alegre do Pindaré', 'Alto Parnaíba', 'Amapá do Maranhão', 'Amarante do Maranhão', 'Anajatuba', 'Anapurus', 'Apicum-Açu', 'Araguanã', 'Araioses', 'Arame', 'Arari', 'Axixá', 'Açailândia', 'Bacabal', 'Bacabeira', 'Bacuri', 'Bacurituba', 'Balsas', 'Barra do Corda', 'Barreirinhas', 'Barão de Grajaú', 'Bela Vista do Maranhão', 'Belágua', 'Benedito Leite', 'Bequimão', 'Bernardo do Mearim', 'Boa Vista do Gurupi', 'Bom Jardim', 'Bom Jesus das Selvas', 'Bom Lugar', 'Brejo', 'Brejo de Areia', 'Buriti', 'Buriti Bravo', 'Buriticupu', 'Buritirana', 'Cachoeira Grande', 'Cajapió', 'Cajari', 'Campestre do Maranhão', 'Cantanhede', 'Capinzal do Norte', 'Carolina', 'Carutapera', 'Caxias', 'Cedral', 'Central do Maranhão', 'Centro Novo do Maranhão', 'Centro do Guilherme', 'Chapadinha', 'Cidelândia', 'Codó', 'Coelho Neto', 'Colinas', 'Conceição do Lago-Açu', 'Coroatá', 'Cururupu', 'Cândido Mendes', 'Davinópolis', 'Dom Pedro', 'Duque Bacelar', 'Esperantinópolis', 'Estreito', 'Feira Nova do Maranhão', 'Fernando Falcão', 'Formosa da Serra Negra', 'Fortaleza dos Nogueiras', 'Fortuna', 'Godofredo Viana', 'Gonçalves Dias', 'Governador Archer', 'Governador Edison Lobão', 'Governador Eugênio Barros', 'Governador Luiz Rocha', 'Governador Newton Bello', 'Governador Nunes Freire', 'Grajaú', 'Graça Aranha', 'Guimarães', 'Humberto de Campos', 'Icatu', 'Igarapé Grande', 'Igarapé do Meio', 'Imperatriz', 'Itaipava do Grajaú', 'Itapecuru Mirim', 'Itinga do Maranhão', 'Jatobá', 'Jenipapo dos Vieiras', 'Joselândia', 'João Lisboa', 'Junco do Maranhão', 'Lago Verde', 'Lago da Pedra', 'Lago do Junco', 'Lago dos Rodrigues', 'Lagoa Grande do Maranhão', 'Lagoa do Mato', 'Lajeado Novo', 'Lima Campos', 'Loreto', 'Luís Domingues', 'Magalhães de Almeida', 'Maracaçumé', 'Marajá do Sena', 'Maranhãozinho', 'Mata Roma', 'Matinha', 'Matões', 'Matões do Norte', 'Milagres do Maranhão', 'Mirador', 'Miranda do Norte', 'Mirinzal', 'Montes Altos', 'Monção', 'Morros', 'Nina Rodrigues', 'Nova Colinas', 'Nova Iorque', 'Nova Olinda do Maranhão', "Olho d'Água das Cunhãs", 'Olinda Nova do Maranhão', 'Palmeirândia', 'Paraibano', 'Parnarama', 'Passagem Franca', 'Pastos Bons', 'Paulino Neves', 'Paulo Ramos', 'Paço do Lumiar', 'Pedreiras', 'Pedro do Rosário', 'Penalva', 'Peri Mirim', 'Peritoró', 'Pindaré-Mirim', 'Pinheiro', 'Pio XII', 'Pirapemas', 'Porto Franco', 'Porto Rico do Maranhão', 'Poção de Pedras', 'Presidente Dutra', 'Presidente Juscelino', 'Presidente Médici', 'Presidente Sarney', 'Presidente Vargas', 'Primeira Cruz', 'Raposa', 'Riachão', 'Ribamar Fiquene', 'Rosário', 'Sambaíba', 'Santa Filomena do Maranhão', 'Santa Helena', 'Santa Inês', 'Santa Luzia', 'Santa Luzia do Paruá', 'Santa Quitéria do Maranhão', 'Santa Rita', 'Santana do Maranhão', 'Santo Amaro do Maranhão', 'Santo Antônio dos Lopes', 'Satubinha', 'Senador Alexandre Costa', 'Senador La Rocque', 'Serrano do Maranhão', 'Sucupira do Norte', 'Sucupira do Riachão', 'São Benedito do Rio Preto', 'São Bento', 'São Bernardo', 'São Domingos do Azeitão', 'São Domingos do Maranhão', 'São Francisco do Brejão', 'São Francisco do Maranhão', 'São Félix de Balsas', 'São José de Ribamar', 'São José dos Basílios', 'São João Batista', 'São João do Carú', 'São João do Paraíso', 'São João do Soter', 'São João dos Patos', 'São Luís', 'São Luís Gonzaga do Maranhão', 'São Mateus do Maranhão', 'São Pedro da Água Branca', 'São Pedro dos Crentes', 'São Raimundo das Mangabeiras', 'São Raimundo do Doca Bezerra', 'São Roberto', 'São Vicente Ferrer', 'Sítio Novo', 'Tasso Fragoso', 'Timbiras', 'Timon', 'Trizidela do Vale', 'Tufilândia', 'Tuntum', 'Turiaçu', 'Turilândia', 'Tutóia', 'Urbano Santos', 'Vargem Grande', 'Viana', 'Vila Nova dos Martírios', 'Vitorino Freire', 'Vitória do Mearim', 'Zé Doca', 'Água Doce do Maranhão'],
  PB: ['Aguiar', 'Alagoa Grande', 'Alagoa Nova', 'Alagoinha', 'Alcantil', 'Algodão de Jandaíra', 'Alhandra', 'Amparo', 'Aparecida', 'Arara', 'Araruna', 'Araçagi', 'Areia', 'Areia de Baraúnas', 'Areial', 'Aroeiras', 'Assunção', 'Bananeiras', 'Baraúna', 'Barra de Santa Rosa', 'Barra de Santana', 'Barra de São Miguel', 'Bayeux', 'Baía da Traição', 'Belém', 'Belém do Brejo do Cruz', 'Bernardino Batista', 'Boa Ventura', 'Boa Vista', 'Bom Jesus', 'Bom Sucesso', 'Bonito de Santa Fé', 'Boqueirão', 'Borborema', 'Brejo do Cruz', 'Brejo dos Santos', 'Caaporã', 'Cabaceiras', 'Cabedelo', 'Cachoeira dos Índios', 'Cacimba de Areia', 'Cacimba de Dentro', 'Cacimbas', 'Caiçara', 'Cajazeiras', 'Cajazeirinhas', 'Caldas Brandão', 'Camalaú', 'Campina Grande', 'Capim', 'Caraúbas', 'Carrapateira', 'Casserengue', 'Catingueira', 'Catolé do Rocha', 'Caturité', 'Conceição', 'Condado', 'Conde', 'Congo', 'Coremas', 'Coxixola', 'Cruz do Espírito Santo', 'Cubati', 'Cuitegi', 'Cuité', 'Cuité de Mamanguape', 'Curral Velho', 'Curral de Cima', 'Damião', 'Desterro', 'Diamante', 'Dona Inês', 'Duas Estradas', 'Emas', 'Esperança', 'Fagundes', 'Frei Martinho', 'Gado Bravo', 'Guarabira', 'Gurinhém', 'Gurjão', 'Ibiara', 'Igaracy', 'Imaculada', 'Ingá', 'Itabaiana', 'Itaporanga', 'Itapororoca', 'Itatuba', 'Jacaraú', 'Jericó', 'Joca Claudino', 'João Pessoa', 'Juarez Távora', 'Juazeirinho', 'Junco do Seridó', 'Juripiranga', 'Juru', 'Lagoa', 'Lagoa Seca', 'Lagoa de Dentro', 'Lastro', 'Livramento', 'Logradouro', 'Lucena', 'Malta', 'Mamanguape', 'Manaíra', 'Marcação', 'Mari', 'Marizópolis', 'Massaranduba', 'Mataraca', 'Matinhas', 'Mato Grosso', 'Maturéia', 'Mogeiro', 'Montadas', 'Monte Horebe', 'Monteiro', 'Mulungu', "Mãe d'Água", 'Natuba', 'Nazarezinho', 'Nova Floresta', 'Nova Olinda', 'Nova Palmeira', "Olho d'Água", 'Olivedos', 'Ouro Velho', 'Parari', 'Passagem', 'Patos', 'Paulista', 'Pedra Branca', 'Pedra Lavrada', 'Pedras de Fogo', 'Pedro Régis', 'Piancó', 'Picuí', 'Pilar', 'Pilões', 'Pilõezinhos', 'Pirpirituba', 'Pitimbu', 'Pocinhos', 'Pombal', 'Poço Dantas', 'Poço de José de Moura', 'Prata', 'Princesa Isabel', 'Puxinanã', 'Queimadas', 'Quixaba', 'Remígio', 'Riacho de Santo Antônio', 'Riacho dos Cavalos', 'Riachão', 'Riachão do Bacamarte', 'Riachão do Poço', 'Rio Tinto', 'Salgadinho', 'Salgado de São Félix', 'Santa Cecília', 'Santa Cruz', 'Santa Helena', 'Santa Inês', 'Santa Luzia', 'Santa Rita', 'Santa Teresinha', 'Santana de Mangueira', 'Santana dos Garrotes', 'Santo André', 'Sapé', 'Serra Branca', 'Serra Grande', 'Serra Redonda', 'Serra da Raiz', 'Serraria', 'Sertãozinho', 'Sobrado', 'Soledade', 'Solânea', 'Sossêgo', 'Sousa', 'Sumé', 'São Bentinho', 'São Bento', 'São Domingos', 'São Domingos do Cariri', 'São Francisco', 'São José da Lagoa Tapada', 'São José de Caiana', 'São José de Espinharas', 'São José de Piranhas', 'São José de Princesa', 'São José do Bonfim', 'São José do Brejo do Cruz', 'São José do Sabugi', 'São José dos Cordeiros', 'São José dos Ramos', 'São João do Cariri', 'São João do Rio do Peixe', 'São João do Tigre', 'São Mamede', 'São Miguel de Taipu', 'São Sebastião de Lagoa de Roça', 'São Sebastião do Umbuzeiro', 'São Vicente do Seridó', 'Tacima', 'Taperoá', 'Tavares', 'Teixeira', 'Tenório', 'Triunfo', 'Uiraúna', 'Umbuzeiro', 'Vieirópolis', 'Vista Serrana', 'Várzea', 'Zabelê', 'Água Branca'],
  MS: ['Alcinópolis', 'Amambai', 'Anastácio', 'Anaurilândia', 'Angélica', 'Antônio João', 'Aparecida do Taboado', 'Aquidauana', 'Aral Moreira', 'Bandeirantes', 'Bataguassu', 'Batayporã', 'Bela Vista', 'Bodoquena', 'Bonito', 'Brasilândia', 'Caarapó', 'Camapuã', 'Campo Grande', 'Caracol', 'Cassilândia', 'Chapadão do Sul', 'Corguinho', 'Coronel Sapucaia', 'Corumbá', 'Costa Rica', 'Coxim', 'Deodápolis', 'Dois Irmãos do Buriti', 'Douradina', 'Dourados', 'Eldorado', 'Figueirão', 'Fátima do Sul', 'Glória de Dourados', 'Guia Lopes da Laguna', 'Iguatemi', 'Inocência', 'Itaporã', 'Itaquiraí', 'Ivinhema', 'Japorã', 'Jaraguari', 'Jardim', 'Jateí', 'Juti', 'Ladário', 'Laguna Carapã', 'Maracaju', 'Miranda', 'Mundo Novo', 'Naviraí', 'Nioaque', 'Nova Alvorada do Sul', 'Nova Andradina', 'Novo Horizonte do Sul', 'Paranaíba', 'Paranhos', 'Paraíso das Águas', 'Pedro Gomes', 'Ponta Porã', 'Porto Murtinho', 'Ribas do Rio Pardo', 'Rio Brilhante', 'Rio Negro', 'Rio Verde de Mato Grosso', 'Rochedo', 'Santa Rita do Pardo', 'Selvíria', 'Sete Quedas', 'Sidrolândia', 'Sonora', 'São Gabriel do Oeste', 'Tacuru', 'Taquarussu', 'Terenos', 'Três Lagoas', 'Vicentina', 'Água Clara'],
  RO: ["Alta Floresta D'Oeste", 'Alto Alegre dos Parecis', 'Alto Paraíso', "Alvorada D'Oeste", 'Ariquemes', 'Buritis', 'Cabixi', 'Cacaulândia', 'Cacoal', 'Campo Novo de Rondônia', 'Candeias do Jamari', 'Castanheiras', 'Cerejeiras', 'Chupinguaia', 'Colorado do Oeste', 'Corumbiara', 'Costa Marques', 'Cujubim', "Espigão D'Oeste", 'Governador Jorge Teixeira', 'Guajará-Mirim', 'Itapuã do Oeste', 'Jaru', 'Ji-Paraná', "Machadinho D'Oeste", 'Ministro Andreazza', 'Mirante da Serra', 'Monte Negro', "Nova Brasilândia D'Oeste", 'Nova Mamoré', 'Nova União', 'Novo Horizonte do Oeste', 'Ouro Preto do Oeste', 'Parecis', 'Pimenta Bueno', 'Pimenteiras do Oeste', 'Porto Velho', 'Presidente Médici', 'Primavera de Rondônia', 'Rio Crespo', 'Rolim de Moura', "Santa Luzia D'Oeste", 'Seringueiras', "São Felipe D'Oeste", 'São Francisco do Guaporé', 'São Miguel do Guaporé', 'Teixeirópolis', 'Theobroma', 'Urupá', 'Vale do Anari', 'Vale do Paraíso', 'Vilhena'],
  RR: ['Alto Alegre', 'Amajari', 'Boa Vista', 'Bonfim', 'Cantá', 'Caracaraí', 'Caroebe', 'Iracema', 'Mucajaí', 'Normandia', 'Pacaraima', 'Rorainópolis', 'São João da Baliza', 'São Luiz', 'Uiramutã'],
  AM: ['Alvarães', 'Amaturá', 'Anamã', 'Anori', 'Apuí', 'Atalaia do Norte', 'Autazes', 'Barcelos', 'Barreirinha', 'Benjamin Constant', 'Beruri', 'Boa Vista do Ramos', 'Boca do Acre', 'Borba', 'Caapiranga', 'Canutama', 'Carauari', 'Careiro', 'Careiro da Várzea', 'Coari', 'Codajás', 'Eirunepé', 'Envira', 'Fonte Boa', 'Guajará', 'Humaitá', 'Ipixuna', 'Iranduba', 'Itacoatiara', 'Itamarati', 'Itapiranga', 'Japurá', 'Juruá', 'Jutaí', 'Lábrea', 'Manacapuru', 'Manaquiri', 'Manaus', 'Manicoré', 'Maraã', 'Maués', 'Nhamundá', 'Nova Olinda do Norte', 'Novo Airão', 'Novo Aripuanã', 'Parintins', 'Pauini', 'Presidente Figueiredo', 'Rio Preto da Eva', 'Santa Isabel do Rio Negro', 'Santo Antônio do Içá', 'Silves', 'São Gabriel da Cachoeira', 'São Paulo de Olivença', 'São Sebastião do Uatumã', 'Tabatinga', 'Tapauá', 'Tefé', 'Tonantins', 'Uarini', 'Urucará', 'Urucurituba'],
  AP: ['Amapá', 'Calçoene', 'Cutias', 'Ferreira Gomes', 'Itaubal', 'Laranjal do Jari', 'Macapá', 'Mazagão', 'Oiapoque', 'Pedra Branca do Amapari', 'Porto Grande', 'Pracuúba', 'Santana', 'Serra do Navio', 'Tartarugalzinho', 'Vitória do Jari'],
  SE: ['Amparo do São Francisco', 'Aquidabã', 'Aracaju', 'Arauá', 'Areia Branca', 'Barra dos Coqueiros', 'Boquim', 'Brejo Grande', 'Campo do Brito', 'Canhoba', 'Canindé de São Francisco', 'Capela', 'Carira', 'Carmópolis', 'Cedro de São João', 'Cristinápolis', 'Cumbe', 'Divina Pastora', 'Estância', 'Feira Nova', 'Frei Paulo', 'Gararu', 'General Maynard', 'Gracho Cardoso', 'Ilha das Flores', 'Indiaroba', 'Itabaiana', 'Itabaianinha', 'Itabi', "Itaporanga d'Ajuda", 'Japaratuba', 'Japoatã', 'Lagarto', 'Laranjeiras', 'Macambira', 'Malhada dos Bois', 'Malhador', 'Maruim', 'Moita Bonita', 'Monte Alegre de Sergipe', 'Muribeca', 'Neópolis', 'Nossa Senhora Aparecida', 'Nossa Senhora da Glória', 'Nossa Senhora das Dores', 'Nossa Senhora de Lourdes', 'Nossa Senhora do Socorro', 'Pacatuba', 'Pedra Mole', 'Pedrinhas', 'Pinhão', 'Pirambu', 'Porto da Folha', 'Poço Redondo', 'Poço Verde', 'Propriá', 'Riachuelo', 'Riachão do Dantas', 'Ribeirópolis', 'Rosário do Catete', 'Salgado', 'Santa Luzia do Itanhy', 'Santa Rosa de Lima', 'Santana do São Francisco', 'Santo Amaro das Brotas', 'Simão Dias', 'Siriri', 'São Cristóvão', 'São Domingos', 'São Francisco', 'São Miguel do Aleixo', 'Telha', 'Tobias Barreto', 'Tomar do Geru', 'Umbaúba'],
  AL: ['Anadia', 'Arapiraca', 'Atalaia', 'Barra de Santo Antônio', 'Barra de São Miguel', 'Batalha', 'Belo Monte', 'Belém', 'Boca da Mata', 'Branquinha', 'Cacimbinhas', 'Cajueiro', 'Campestre', 'Campo Alegre', 'Campo Grande', 'Canapi', 'Capela', 'Carneiros', 'Chã Preta', 'Coité do Nóia', 'Colônia Leopoldina', 'Coqueiro Seco', 'Coruripe', 'Craíbas', 'Delmiro Gouveia', 'Dois Riachos', 'Estrela de Alagoas', 'Feira Grande', 'Feliz Deserto', 'Flexeiras', 'Girau do Ponciano', 'Ibateguara', 'Igaci', 'Igreja Nova', 'Inhapi', 'Jacaré dos Homens', 'Jacuípe', 'Japaratinga', 'Jaramataia', 'Jequiá da Praia', 'Joaquim Gomes', 'Jundiá', 'Junqueiro', 'Lagoa da Canoa', 'Limoeiro de Anadia', 'Maceió', 'Major Isidoro', 'Mar Vermelho', 'Maragogi', 'Maravilha', 'Marechal Deodoro', 'Maribondo', 'Mata Grande', 'Matriz de Camaragibe', 'Messias', 'Minador do Negrão', 'Monteirópolis', 'Murici', 'Novo Lino', "Olho d'Água Grande", "Olho d'Água das Flores", "Olho d'Água do Casado", 'Olivença', 'Ouro Branco', 'Palestina', 'Palmeira dos Índios', 'Pariconha', 'Paripueira', 'Passo de Camaragibe', 'Paulo Jacinto', 'Penedo', 'Piaçabuçu', 'Pilar', 'Pindoba', 'Piranhas', 'Porto Calvo', 'Porto Real do Colégio', 'Porto de Pedras', 'Poço das Trincheiras', 'Pão de Açúcar', 'Quebrangulo', 'Rio Largo', 'Roteiro', 'Santa Luzia do Norte', 'Santana do Ipanema', 'Santana do Mundaú', 'Satuba', 'Senador Rui Palmeira', 'São Brás', 'São José da Laje', 'São José da Tapera', 'São Luís do Quitunde', 'São Miguel dos Campos', 'São Miguel dos Milagres', 'São Sebastião', "Tanque d'Arca", 'Taquarana', 'Teotônio Vilela', 'Traipu', 'União dos Palmares', 'Viçosa', 'Água Branca'],
  RJ: ['Angra dos Reis', 'Aperibé', 'Araruama', 'Areal', 'Armação dos Búzios', 'Arraial do Cabo', 'Barra Mansa', 'Barra do Piraí', 'Belford Roxo', 'Bom Jardim', 'Bom Jesus do Itabapoana', 'Cabo Frio', 'Cachoeiras de Macacu', 'Cambuci', 'Campos dos Goytacazes', 'Cantagalo', 'Carapebus', 'Cardoso Moreira', 'Carmo', 'Casimiro de Abreu', 'Comendador Levy Gasparian', 'Conceição de Macabu', 'Cordeiro', 'Duas Barras', 'Duque de Caxias', 'Engenheiro Paulo de Frontin', 'Guapimirim', 'Iguaba Grande', 'Itaboraí', 'Itaguaí', 'Italva', 'Itaocara', 'Itaperuna', 'Itatiaia', 'Japeri', 'Laje do Muriaé', 'Macaé', 'Macuco', 'Magé', 'Mangaratiba', 'Maricá', 'Mendes', 'Mesquita', 'Miguel Pereira', 'Miracema', 'Natividade', 'Nilópolis', 'Niterói', 'Nova Friburgo', 'Nova Iguaçu', 'Paracambi', 'Paraty', 'Paraíba do Sul', 'Paty do Alferes', 'Petrópolis', 'Pinheiral', 'Piraí', 'Porciúncula', 'Porto Real', 'Quatis', 'Queimados', 'Quissamã', 'Resende', 'Rio Bonito', 'Rio Claro', 'Rio das Flores', 'Rio das Ostras', 'Rio de Janeiro', 'Santa Maria Madalena', 'Santo Antônio de Pádua', 'Sapucaia', 'Saquarema', 'Seropédica', 'Silva Jardim', 'Sumidouro', 'São Fidélis', 'São Francisco de Itabapoana', 'São Gonçalo', 'São José de Ubá', 'São José do Vale do Rio Preto', 'São João da Barra', 'São João de Meriti', 'São Pedro da Aldeia', 'São Sebastião do Alto', 'Tanguá', 'Teresópolis', 'Trajano de Moraes', 'Três Rios', 'Valença', 'Varre-Sai', 'Vassouras', 'Volta Redonda'],
  DF: ['Brasília']
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
/* harmony import */ var _ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/i18n */ "./node_modules/@ecomplus/i18n/src/pt_br/index.js");
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
    formBtnText: String,
    canShowForm: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      isForm: false,
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

        this.isForm = false;
      }

    }
  },
  methods: {
    getLineAddress(address) {
      if (address.line_address) {
        return address.line_address;
      } else {
        let lineAddress = "".concat(address.street, " ").concat(address.number || this.i19noNumber);

        if (address.complement) {
          lineAddress += " - ".concat(address.complement);
        }

        if (address.borough) {
          lineAddress += ", ".concat(address.borough);
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
          this.isForm = this.isNewAddress = false;
        }
      } else if (!newList.length) {
        this.isForm = this.isNewAddress = true;
      }
    },

    isNewAddress(isAddAddress) {
      if (isAddAddress) {
        this.editAddressIndex = this.addresses.length;
        this.isForm = true;
      }
    },

    editAddressIndex(index) {
      if (index > -1) {
        const address = this.addresses[index];

        if (address) {
          this.selectAddress(address);
        }

        this.isForm = true;
      }
    },

    isForm(isVisible) {
      this.$emit('show-form', isVisible);

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
/* harmony import */ var _ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ecomplus/i18n */ "./node_modules/@ecomplus/i18n/src/pt_br/index.js");
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

const countInvalidInputs = function () {
  let attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ':invalid';
  return document.querySelectorAll(".account-form input".concat(attr)).length;
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
    getPhoneStr() {
      let index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
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
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.finally.js */ "./node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ecomplus_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ecomplus/i18n */ "./node_modules/@ecomplus/i18n/src/pt_br/index.js");
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_check_form_validity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/check-form-validity */ "./node_modules/@ecomplus/storefront-components/src/js/helpers/check-form-validity.js");
/* harmony import */ var _InputZipCode_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../InputZipCode.vue */ "./node_modules/@ecomplus/storefront-components/src/InputZipCode.vue");







const countryCode = _ecomplus_utils__WEBPACK_IMPORTED_MODULE_3__["$ecomConfig"].get('country_code');
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AddressForm',
  components: {
    InputZipCode: _InputZipCode_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
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
        return Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_3__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_2__["i19save"]);
      }

    }
  },

  data() {
    return {
      localAddress: {
        _id: Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_3__["randomObjectId"])(),
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
    i19borough: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_3__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_2__["i19borough"]),
    i19city: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_3__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_2__["i19city"]),
    i19complement: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_3__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_2__["i19complement"]),
    i19name: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_3__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_2__["i19name"]),
    i19noNumber: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_3__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_2__["i19noNumber"]),
    i19number: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_3__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_2__["i19number"]),
    i19provinceCode: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_3__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_2__["i19provinceCode"]),
    i19recipient: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_3__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_2__["i19recipient"]),
    i19reference: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_3__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_2__["i19reference"]),
    i19street: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_3__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_2__["i19street"]),
    i19zipCode: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_3__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_2__["i19zipCode"]),
    provinceCode: {
      get() {
        return this.localAddress.province_code;
      },

      set(value) {
        this.localAddress.province_code = value.toUpperCase().slice(0, 2);
      }

    },

    zipInfoLink() {
      return countryCode === 'BR' ? 'https://buscacepinter.correios.com.br/app/endereco/index.php' : null;
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

    fetchAddressInfo(zipCode) {
      let isRetry = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (zipCode === this.localAddress.zip) {
        this.zipLoading = zipCode;
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("https://viacep.com.br/ws/".concat(zipCode, "/json/"), {
          timeout: 4000
        }).then(_ref => {
          let {
            data
          } = _ref;

          if (!data.erro && zipCode === this.localAddress.zip) {
            ;
            [['province_code', data.uf], ['city', data.localidade], ['borough', data.bairro], ['street', data.logradouro]].forEach(_ref2 => {
              let [field, value] = _ref2;
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

      if (Object(_helpers_check_form_validity__WEBPACK_IMPORTED_MODULE_5__["default"])($form)) {
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
/* harmony import */ var _ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ecomplus/i18n */ "./node_modules/@ecomplus/i18n/src/pt_br/index.js");
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
/* harmony import */ var _ecomplus_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ecomplus/i18n */ "./node_modules/@ecomplus/i18n/src/pt_br/index.js");
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
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.finally.js */ "./node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ecomplus/i18n */ "./node_modules/@ecomplus/i18n/src/pt_br/index.js");
/* harmony import */ var _ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ecomplus/utils */ "./node_modules/@ecomplus/utils/src/index.js");
/* harmony import */ var _ecomplus_passport_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ecomplus/passport-client */ "./node_modules/@ecomplus/passport-client/src/index.js");
/* harmony import */ var _AAlert_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AAlert.vue */ "./node_modules/@ecomplus/storefront-components/src/AAlert.vue");
/* harmony import */ var _InputDocNumber_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../InputDocNumber.vue */ "./node_modules/@ecomplus/storefront-components/src/InputDocNumber.vue");






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'LoginBlock',
  components: {
    AAlert: _AAlert_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    InputDocNumber: _InputDocNumber_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
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
        return _ecomplus_passport_client__WEBPACK_IMPORTED_MODULE_3__["default"];
      }

    }
  },

  data() {
    return {
      email: this.customerEmail,
      emailCode: null,
      docNumber: '',
      isCompany: false,
      oauthProviders: [],
      isWaitingPopup: false,
      isWaitingLogin: false,
      isEmailCodeSent: false,
      hasNoProfileFound: false,
      isWrongCode: false,
      failAlertText: null
    };
  },

  computed: {
    i19continue: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19continue"]),
    i19enterEmailCodeMsg: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19enterEmailCodeMsg"]),
    i19enterYourDocNumberMsg: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19enterYourDocNumberMsg"]),
    i19enterYourEmailMsg: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19enterYourEmailMsg"]),
    i19helloAgain: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19helloAgain"]),
    i19identifyYourAccount: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19identifyYourAccount"]),
    i19incorrectEmailCodeMsg: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19incorrectEmailCodeMsg"]),
    i19manageYourPurchaseHistory: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19manageYourPurchaseHistory"]),
    i19notifyAboutOrders: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19notifyAboutOrders"]),
    i19oauthOnPopup: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19oauthOnPopup"]),
    i19orProceedWith: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19orProceedWith"]),
    i19sendLoginCodeByEmail: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19sendLoginCodeByEmail"]),
    i19signInWith: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19signInWith"]),
    i19signInWithAnotherEmail: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19signInWithAnotherEmail"]),
    i19signUp: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19signUp"]),
    i19weUseYourDataToMsg: () => Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19weUseYourDataToMsg"])
  },
  methods: {
    clearEmail() {
      this.email = '';
      this.$refs.inputEmail.focus();
    },

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
        const {
          email,
          docNumber
        } = this;
        const isAccountConfirm = this.confirmAccount();

        const emitUpdate = () => this.$emit('update', {
          email,
          docNumber
        });

        this.ecomPassport.fetchLogin(email, isAccountConfirm ? docNumber : null, this.emailCode).then(() => {
          if (isAccountConfirm) {
            emitUpdate();
          }
        }).catch(err => {
          const {
            response
          } = err;

          if (!response || response.status !== 403) {
            console.error(err);
            this.failAlertText = Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19loginErrorMsg"]);
          } else if (!isAccountConfirm && this.canAcceptGuest) {
            this.$emit('update:customer-email', email);
            emitUpdate();
          } else if (!isAccountConfirm) {
            this.hasNoProfileFound = true;
            this.failAlertText = "".concat(Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19noProfileFoundWithEmail"]), " ").concat(email, ".");
          } else {
            this.failAlertText = Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19invalidLoginInfoMsg"]);
          }
        }).finally(() => {
          this.isWaitingLogin = false;
        });
      }
    },

    sendEmailCode() {
      if (this.email && !this.isWaitingLogin && !this.isEmailCodeSent) {
        this.isWaitingLogin = true;
        this.ecomPassport.sendEmailCode(this.email).then(() => new Promise(resolve => {
          setTimeout(() => {
            this.isEmailCodeSent = true;
            this.$nextTick(() => {
              this.$refs.inputCode.focus();
            });
            resolve();
          }, 2000);
        })).catch(err => {
          console.error(err);
          this.failAlertText = Object(_ecomplus_utils__WEBPACK_IMPORTED_MODULE_2__["i18n"])(_ecomplus_i18n__WEBPACK_IMPORTED_MODULE_1__["i19loginErrorMsg"]);
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
      this.isEmailCodeSent = this.hasNoProfileFound = false;
    },

    docNumber() {
      this.failAlertText = null;
    },

    isWaitingLogin(isWaiting) {
      if (isWaiting) {
        this.failAlertText = null;
      }
    }

  },

  created() {
    this.ecomPassport.fetchOauthProviders().then(_ref => {
      let {
        host,
        baseUri,
        oauthPath,
        providers
      } = _ref;
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

    _ecomplus_passport_client__WEBPACK_IMPORTED_MODULE_3__["default"].on('login', () => {
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
function x(){this.a={}}function A(n){return 0==n.length||un.test(n)}function N(n,t){if(null==t)return null;t=t.toUpperCase();var e=n.a[t];if(null==e){if(e=tn[t],null==e)return null;e=(new w).a(_.j(),e),n.a[t]=e}return e}function C(n){return n=nn[n],null==n?"ZZ":n[0]}function j(n){this.H=RegExp(" "),this.C="",this.m=new e,this.w="",this.i=new e,this.u=new e,this.l=!0,this.A=this.o=this.F=!1,this.G=x.b(),this.s=0,this.b=new e,this.B=!1,this.h="",this.a=new e,this.f=[],this.D=n,this.J=this.g=B(this,this.D)}function B(n,t){var e;if(null!=t&&isNaN(t)&&t.toUpperCase()in tn){if(e=N(n.G,t),null==e)throw Error("Invalid region code: "+t);e=g(e,10)}else e=0;return e=N(n.G,C(e)),null!=e?e:an}function R(n){for(var t=n.f.length,e=0;e<t;++e){var r=n.f[e],i=g(r,1);if(n.w==i)return!1;var u;u=n;var a=r,o=g(a,1);if(-1!=o.indexOf("|"))u=!1;else{o=o.replace(on,"\\d"),o=o.replace(sn,"\\d"),l(u.m);var s;s=u;var a=g(a,2),f="999999999999999".match(o)[0];f.length<s.a.b.length?s="":(s=f.replace(new RegExp(o,"g"),a),s=s.replace(RegExp("9","g")," ")),0<s.length?(u.m.a(s),u=!0):u=!1}if(u)return n.w=i,n.B=pn.test(h(r,4)),n.s=0,!0}return n.l=!1}function E(n,t){for(var e=[],l=t.length-3,r=n.f.length,i=0;i<r;++i){var u=n.f[i];0==m(u,3)?e.push(n.f[i]):(u=h(u,3,Math.min(l,m(u,3)-1)),0==t.search(u)&&e.push(n.f[i]))}n.f=e}function F(n,t){n.i.a(t);var e=t;if(rn.test(e)||1==n.i.b.length&&ln.test(e)){var r,e=t;"+"==e?(r=e,n.u.a(e)):(r=en[e],n.u.a(r),n.a.a(r)),t=r}else n.l=!1,n.F=!0;if(!n.l){if(!n.F)if(P(n)){if(q(n))return I(n)}else if(0<n.h.length&&(e=n.a.toString(),l(n.a),n.a.a(n.h),n.a.a(e),e=n.b.toString(),r=e.lastIndexOf(n.h),l(n.b),n.b.a(e.substring(0,r))),n.h!=H(n))return n.b.a(" "),I(n);return n.i.toString()}switch(n.u.b.length){case 0:case 1:case 2:return n.i.toString();case 3:if(!P(n))return n.h=H(n),V(n);n.A=!0;default:return n.A?(q(n)&&(n.A=!1),n.b.toString()+n.a.toString()):0<n.f.length?(e=T(n,t),r=D(n),0<r.length?r:(E(n,n.a.toString()),R(n)?G(n):n.l?M(n,e):n.i.toString())):V(n)}}function I(n){return n.l=!0,n.A=!1,n.f=[],n.s=0,l(n.m),n.w="",V(n)}function D(n){for(var t=n.a.toString(),e=n.f.length,l=0;l<e;++l){var r=n.f[l],i=g(r,1);if(new RegExp("^(?:"+i+")$").test(t))return n.B=pn.test(h(r,4)),t=t.replace(new RegExp(i,"g"),h(r,2)),M(n,t)}return""}function M(n,t){var e=n.b.b.length;return n.B&&0<e&&" "!=n.b.toString().charAt(e-1)?n.b+" "+t:n.b+t}function V(n){var t=n.a.toString();if(3<=t.length){for(var e=n.o&&0==n.h.length&&0<m(n.g,20)?c(n.g,20)||[]:c(n.g,19)||[],l=e.length,r=0;r<l;++r){var i=e[r];0<n.h.length&&A(g(i,4))&&!h(i,6)&&null==i.a[5]||(0!=n.h.length||n.o||A(g(i,4))||h(i,6))&&fn.test(g(i,2))&&n.f.push(i)}return E(n,t),t=D(n),0<t.length?t:R(n)?G(n):n.i.toString()}return M(n,t)}function G(n){var t=n.a.toString(),e=t.length;if(0<e){for(var l="",r=0;r<e;r++)l=T(n,t.charAt(r));return n.l?M(n,l):n.i.toString()}return n.b.toString()}function H(n){var t,e=n.a.toString(),r=0;return 1!=h(n.g,10)?t=!1:(t=n.a.toString(),t="1"==t.charAt(0)&&"0"!=t.charAt(1)&&"1"!=t.charAt(1)),t?(r=1,n.b.a("1").a(" "),n.o=!0):null!=n.g.a[15]&&(t=new RegExp("^(?:"+h(n.g,15)+")"),t=e.match(t),null!=t&&null!=t[0]&&0<t[0].length&&(n.o=!0,r=t[0].length,n.b.a(e.substring(0,r)))),l(n.a),n.a.a(e.substring(r)),e.substring(0,r)}function P(n){var t=n.u.toString(),e=new RegExp("^(?:\\+|"+h(n.g,11)+")"),e=t.match(e);return null!=e&&null!=e[0]&&0<e[0].length&&(n.o=!0,e=e[0].length,l(n.a),n.a.a(t.substring(e)),l(n.b),n.b.a(t.substring(0,e)),"+"!=t.charAt(0)&&n.b.a(" "),!0)}function q(n){if(0==n.a.b.length)return!1;var t,r=new e;n:{if(t=n.a.toString(),0!=t.length&&"0"!=t.charAt(0))for(var i,u=t.length,a=1;3>=a&&a<=u;++a)if(i=parseInt(t.substring(0,a),10),i in nn){r.a(t.substring(a)),t=i;break n}t=0}return 0!=t&&(l(n.a),n.a.a(r.toString()),r=C(t),"001"==r?n.g=N(n.G,""+t):r!=n.D&&(n.g=B(n,r)),n.b.a(""+t).a(" "),n.h="",!0)}function T(n,t){var e=n.m.toString();if(0<=e.substring(n.s).search(n.H)){var r=e.search(n.H),e=e.replace(n.H,t);return l(n.m),n.m.a(e),n.s=r,e.substring(0,n.s+1)}return 1==n.f.length&&(n.l=!1),n.w="",n.i.toString()}var U=this;e.prototype.b="",e.prototype.set=function(n){this.b=""+n},e.prototype.a=function(n,t,e){if(this.b+=String(n),null!=t)for(var l=1;l<arguments.length;l++)this.b+=arguments[l];return this},e.prototype.toString=function(){return this.b};var Y=1,k=2,J=3,K=4,L=6,O=16,Z=18;f.prototype.set=function(n,t){b(this,n.b,t)},f.prototype.clone=function(){var n=new this.constructor;return n!=this&&(n.a={},n.b&&(n.b={}),p(n,this)),n},t(y,f);var z=null;t(v,f);var Q=null;t(_,f);var W=null;y.prototype.j=function(){var n=z;return n||(z=n=d(y,{0:{name:"NumberFormat",I:"i18n.phonenumbers.NumberFormat"},1:{name:"pattern",required:!0,c:9,type:String},2:{name:"format",required:!0,c:9,type:String},3:{name:"leading_digits_pattern",v:!0,c:9,type:String},4:{name:"national_prefix_formatting_rule",c:9,type:String},6:{name:"national_prefix_optional_when_formatting",c:8,defaultValue:!1,type:Boolean},5:{name:"domestic_carrier_code_formatting_rule",c:9,type:String}})),n},y.j=y.prototype.j,v.prototype.j=function(){var n=Q;return n||(Q=n=d(v,{0:{name:"PhoneNumberDesc",I:"i18n.phonenumbers.PhoneNumberDesc"},2:{name:"national_number_pattern",c:9,type:String},9:{name:"possible_length",v:!0,c:5,type:Number},10:{name:"possible_length_local_only",v:!0,c:5,type:Number},6:{name:"example_number",c:9,type:String}})),n},v.j=v.prototype.j,_.prototype.j=function(){var n=W;return n||(W=n=d(_,{0:{name:"PhoneMetadata",I:"i18n.phonenumbers.PhoneMetadata"},1:{name:"general_desc",c:11,type:v},2:{name:"fixed_line",c:11,type:v},3:{name:"mobile",c:11,type:v},4:{name:"toll_free",c:11,type:v},5:{name:"premium_rate",c:11,type:v},6:{name:"shared_cost",c:11,type:v},7:{name:"personal_number",c:11,type:v},8:{name:"voip",c:11,type:v},21:{name:"pager",c:11,type:v},25:{name:"uan",c:11,type:v},27:{name:"emergency",c:11,type:v},28:{name:"voicemail",c:11,type:v},29:{name:"short_code",c:11,type:v},30:{name:"standard_rate",c:11,type:v},31:{name:"carrier_specific",c:11,type:v},33:{name:"sms_services",c:11,type:v},24:{name:"no_international_dialling",c:11,type:v},9:{name:"id",required:!0,c:9,type:String},10:{name:"country_code",c:5,type:Number},11:{name:"international_prefix",c:9,type:String},17:{name:"preferred_international_prefix",c:9,type:String},12:{name:"national_prefix",c:9,type:String},13:{name:"preferred_extn_prefix",c:9,type:String},15:{name:"national_prefix_for_parsing",c:9,type:String},16:{name:"national_prefix_transform_rule",c:9,type:String},18:{name:"same_mobile_and_fixed_line_pattern",c:8,defaultValue:!1,type:Boolean},19:{name:"number_format",v:!0,c:11,type:y},20:{name:"intl_number_format",v:!0,c:11,type:y},22:{name:"main_country_for_code",c:8,defaultValue:!1,type:Boolean},23:{name:"leading_digits",c:9,type:String},26:{name:"leading_zero_possible",c:8,defaultValue:!1,type:Boolean}})),n},_.j=_.prototype.j,$.prototype.a=function(n){throw new n.b,Error("Unimplemented")},$.prototype.b=function(n,t){if(11==n.a||10==n.a)return t instanceof f?t:this.a(n.i.prototype.j(),t);if(14==n.a){if("string"==typeof t&&X.test(t)){var e=Number(t);if(0<e)return e}return t}if(!n.h)return t;if(e=n.i,e===String){if("number"==typeof t)return String(t)}else if(e===Number&&"string"==typeof t&&("Infinity"===t||"-Infinity"===t||"NaN"===t||X.test(t)))return Number(t);return t};var X=/^-?[0-9]+$/;t(S,$),S.prototype.a=function(n,t){var e=new n.b;return e.g=this,e.a=t,e.b={},e},t(w,S),w.prototype.b=function(n,t){return 8==n.a?!!t:$.prototype.b.apply(this,arguments)},w.prototype.a=function(n,t){return w.M.a.call(this,n,t)};/*

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
var nn={55:["BR"]},tn={BR:[null,[null,null,"(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-24679]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}",null,null,null,null,null,null,[8,9,10,11]],[null,null,"(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-5]\\d{7}",null,null,null,"1123456789",null,null,[10],[8]],[null,null,"(?:[189][1-9]|2[12478])(?:7|9\\d)\\d{7}|(?:3[1-578]|[46][1-9]|5[13-5]|7[13-579])(?:[6-9]|9\\d)\\d{7}",null,null,null,"11961234567",null,null,[10,11],[8]],[null,null,"800\\d{6,7}",null,null,null,"800123456",null,null,[9,10]],[null,null,"(?:300|[59]00\\d?)\\d{6}",null,null,null,"300123456",null,null,[9,10]],[null,null,"(?:300\\d(?:\\d{2})?|4(?:0(?:0\\d|20)|370))\\d{4}",null,null,null,"40041234",null,null,[8,10]],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],"BR",55,"00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)","0",null,null,"0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?","$2",null,null,[[null,"(\\d{4})(\\d{4})","$1-$2",["300|4(?:0[02]|37)","300|4(?:0(?:0|20)|370)"]],[null,"(\\d{3})(\\d{2,3})(\\d{4})","$1 $2 $3",["[3589]00"],"0$1"],[null,"(\\d{3,5})","$1",["1[125689]"]],[null,"(\\d{4})(\\d{4})","$1-$2",["[2-9](?:0[1-9]|[1-9])"]],[null,"(\\d{5})(\\d{4})","$1-$2",["9(?:0[1-9]|[1-9])"]],[null,"(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["[1-9][1-9]"],"($1)","0 $CC ($1)"],[null,"(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["[1-9][1-9]9"],"($1)","0 $CC ($1)"]],[[null,"(\\d{4})(\\d{4})","$1-$2",["300|4(?:0[02]|37)","300|4(?:0(?:0|20)|370)"]],[null,"(\\d{3})(\\d{2,3})(\\d{4})","$1 $2 $3",["[3589]00"],"0$1"],[null,"(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["[1-9][1-9]"],"($1)","0 $CC ($1)"],[null,"(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["[1-9][1-9]9"],"($1)","0 $CC ($1)"]],[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,"(?:300\\d|40(?:0\\d|20))\\d{4}",null,null,null,null,null,null,[8]],[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]]]};x.b=function(){return x.a?x.a:x.a=new x};var en={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","０":"0","１":"1","２":"2","３":"3","４":"4","５":"5","６":"6","７":"7","８":"8","９":"9","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9"},ln=RegExp("[+＋]+"),rn=RegExp("([0-9０-９٠-٩۰-۹])"),un=/^\(?\$1\)?$/,an=new _;b(an,11,"NA");var on=/\[([^\[\]])*\]/g,sn=/\d(?=[^,}][^,}])/g,fn=RegExp("^[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*(\\$\\d[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*)+$"),pn=/[- ]/;j.prototype.K=function(){this.C="",l(this.i),l(this.u),l(this.m),this.s=0,this.w="",l(this.b),this.h="",l(this.a),this.l=!0,this.A=this.o=this.F=!1,this.f=[],this.B=!1,this.g!=this.J&&(this.g=B(this,this.D))},j.prototype.L=function(n){return this.C=F(this,n)},n("Cleave.AsYouTypeFormatter",j),n("Cleave.AsYouTypeFormatter.prototype.inputDigit",j.prototype.L),n("Cleave.AsYouTypeFormatter.prototype.clear",j.prototype.K)}.call("object"==typeof global&&global?global:window);
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
exports.push([module.i, ".account-addresses__card{font-size:.9rem;margin-bottom:1rem}.account-addresses__card label{width:100%}.account-addresses__actions{margin-top:.5rem}.account-addresses__actions .btn{margin-right:.5rem}.account-addresses__address{margin-bottom:0}.account-addresses__city,.account-addresses__line{display:block}", "",{"version":3,"sources":["AccountAddresses.scss"],"names":[],"mappings":"AAKE,yBAEE,eAAA,CADA,kBAHJ,CAMI,+BACE,UAJN,CAQE,4BACE,gBANJ,CAQI,iCACE,kBANN,CAUE,4BACE,eARJ,CAWE,kDAEE,aAVJ","file":"AccountAddresses.scss","sourcesContent":["$primary: #e83e8c; $secondary: #333333; $settings-theme: (\n  bootswatch: _,\n  custom: _\n); \n.account-addresses {\n  &__card {\n    margin-bottom: 1rem;\n    font-size: .9rem;\n\n    label {\n      width: 100%;\n    }\n  }\n\n  &__actions {\n    margin-top: .5rem;\n\n    .btn {\n      margin-right: .5rem;\n    }\n  }\n\n  &__address {\n    margin-bottom: 0;\n  }\n\n  &__line,\n  &__city {\n    display: block;\n  }\n}\n"]}]);
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
exports.push([module.i, ".account-form__inscription{align-items:end}", "",{"version":3,"sources":["AccountForm.scss"],"names":[],"mappings":"AAKE,2BACE,eAJJ","file":"AccountForm.scss","sourcesContent":["$primary: #e83e8c; $secondary: #333333; $settings-theme: (\n  bootswatch: _,\n  custom: _\n); \n.account-form {\n  &__inscription {\n    align-items: end;\n  }\n}\n"]}]);
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
exports.push([module.i, ".address-form{margin:0 auto;max-width:600px}.address-form__zip{max-width:225px}.address-form__number{align-items:center}", "",{"version":3,"sources":["AddressForm.scss"],"names":[],"mappings":"AAIA,cAEE,aAAA,CADA,eAFF,CAKE,mBACE,eAHJ,CAME,sBACE,kBAJJ","file":"AddressForm.scss","sourcesContent":["$primary: #e83e8c; $secondary: #333333; $settings-theme: (\n  bootswatch: _,\n  custom: _\n); \n.address-form {\n  max-width: 600px;\n  margin: 0 auto;\n\n  &__zip {\n    max-width: 225px;\n  }\n\n  &__number {\n    align-items: center;\n  }\n}\n"]}]);
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
exports.push([module.i, ".login{margin:0 auto;max-width:800px;text-align:center}.login__email-btn{overflow:hidden;white-space:nowrap}.login__code,.login__confirm{margin:var(--spacer-3) auto 0;max-width:525px}.login__code .alert,.login__confirm .alert{font-size:var(--font-size-sm)}.login__hello:after{color:var(--gray);content:\" :)\"}.login__info{background:var(--light);border-bottom:5px solid var(--success);border-radius:var(--border-radius);margin:var(--spacer-4) auto 0;max-width:650px;padding:var(--spacer-3) var(--spacer-4);text-align:left}.login__info-title{color:var(--secondary);margin-bottom:var(--spacer-2)}.login__info-title i,.login__info-title svg{margin-right:var(--spacer-2)}.login__info-row{color:var(--gray);font-size:var(--font-size-sm)}.login__info-row i,.login__info-row svg{color:var(--success);margin-right:var(--spacer-1)}.login__oauth{margin-top:var(--spacer-4)}.login__btn{color:#fff;line-height:1.2rem;padding:.5rem 1.2rem .7rem;text-align:left}.login__btn:hover{color:#fff}.login__btn:focus{box-shadow:none}@media (max-width:575.98px){.login__btn{display:block;margin-left:0;padding:.8rem;text-align:right;width:100%}.login__btn:not(:first-of-type){margin-top:var(--spacer-2)}.login__btn i,.login__btn svg{float:left}}@media (min-width:576px){.login__btn:not(:first-of-type){margin-left:var(--spacer-2)}.login__btn>small{display:block;margin-bottom:var(--spacer-1);text-align:center}}.login__btn--facebook{background:#3b5999;border-color:#2f4d8a}.login__btn--facebook:hover{background:#274480;border-color:#274480}.login__btn--google{background:#cb4023;border-color:#be3419}.login__btn--google:hover{background:#c1361a;border-color:#c1361a}.login__btn--windowslive{background:#329ffc;border-color:#2996f2}.login__btn--windowslive:hover{background:#1f8ce9;border-color:#1f8ce9}.login__popup-overlay{align-items:flex-end;background:hsla(0,0%,100%,.9);display:flex;flex-direction:row;height:100vh;justify-content:space-around;left:0;padding:2rem;position:fixed;top:0;width:100vw;z-index:2100}", "",{"version":3,"sources":["LoginBlock.scss"],"names":[],"mappings":"AAIA,OAEE,aAAA,CADA,eAAA,CAEA,iBAHF,CAKE,kBAEE,eAAA,CADA,kBAFJ,CAME,6BAGE,6BAAA,CADA,eAJJ,CAOI,2CACE,6BALN,CAUI,oBACE,iBAAA,CACA,aARN,CAYE,aAEE,uBAAA,CAKA,sCAAA,CAJA,kCAAA,CAEA,6BAAA,CACA,eAAA,CALA,uCAAA,CAGA,eAPJ,CAYI,mBACE,sBAAA,CACA,6BAVN,CAYM,4CAEE,4BAVR,CAcI,iBACE,iBAAA,CACA,6BAZN,CAcM,wCAEE,oBAAA,CACA,4BAZR,CAiBE,cACE,0BAfJ,CAkBE,YACE,UAAA,CAEA,kBAAA,CACA,0BAAA,CAFA,eAdJ,CAkBI,kBACE,UAhBN,CAmBI,kBACE,eAjBN,CAoBI,4BAdF,YAeI,aAAA,CAEA,aAAA,CAEA,aAAA,CADA,gBAAA,CAFA,UAdJ,CAmBI,gCACE,0BAjBN,CAoBI,8BAEE,UAlBN,CACF,CAqBI,yBACE,gCACE,2BAnBN,CAsBI,kBACE,aAAA,CAEA,6BAAA,CADA,iBAnBN,CACF,CAuBI,sBACE,kBAAA,CACA,oBArBN,CAuBM,4BACE,kBAAA,CACA,oBArBR,CAyBI,oBACE,kBAAA,CACA,oBAvBN,CAyBM,0BACE,kBAAA,CACA,oBAvBR,CA2BI,yBACE,kBAAA,CACA,oBAzBN,CA2BM,+BACE,kBAAA,CACA,oBAzBR,CA8BE,sBAWE,oBAAA,CANA,6BAAA,CAIA,YAAA,CACA,kBAAA,CAHA,YAAA,CAKA,4BAAA,CATA,MAAA,CAKA,YAAA,CAPA,cAAA,CACA,KAAA,CAIA,WAAA,CAFA,YApBJ","file":"LoginBlock.scss","sourcesContent":["$primary: #e83e8c; $secondary: #333333; $settings-theme: (\n  bootswatch: _,\n  custom: _\n); \n.login {\n  max-width: 800px;\n  margin: 0 auto;\n  text-align: center;\n\n  &__email-btn {\n    white-space: nowrap;\n    overflow: hidden;\n  }\n\n  &__confirm,\n  &__code {\n    max-width: 525px;\n    margin: var(--spacer-3) auto 0;\n\n    .alert {\n      font-size: var(--font-size-sm);\n    }\n  }\n\n  &__hello {\n    &::after {\n      color: var(--gray);\n      content: ' :)';\n    }\n  }\n\n  &__info {\n    padding: var(--spacer-3) var(--spacer-4);\n    background: var(--light);\n    border-radius: var(--border-radius);\n    text-align: left;\n    margin: var(--spacer-4) auto 0;\n    max-width: 650px;\n    border-bottom: 5px solid var(--success);\n\n    &-title {\n      color: var(--secondary);\n      margin-bottom: var(--spacer-2);\n\n      i,\n      svg {\n        margin-right: var(--spacer-2);\n      }\n    }\n\n    &-row {\n      color: var(--gray);\n      font-size: var(--font-size-sm);\n\n      i,\n      svg {\n        color: var(--success);\n        margin-right: var(--spacer-1);\n      }\n    }\n  }\n\n  &__oauth {\n    margin-top: var(--spacer-4);\n  }\n\n  &__btn {\n    color: #fff;\n    text-align: left;\n    line-height: 1.2rem;\n    padding: .5rem 1.2rem .7rem;\n\n    &:hover {\n      color: #fff;\n    }\n\n    &:focus {\n      box-shadow: none;\n    }\n\n    @media (max-width: 575.98px) {\n      display: block;\n      width: 100%;\n      margin-left: 0;\n      text-align: right;\n      padding: .8rem;\n\n      &:not(:first-of-type) {\n        margin-top: var(--spacer-2);\n      }\n\n      i,\n      svg {\n        float: left;\n      }\n    }\n\n    @media (min-width: 576px) {\n      &:not(:first-of-type) {\n        margin-left: var(--spacer-2);\n      }\n\n      > small {\n        display: block;\n        text-align: center;\n        margin-bottom: var(--spacer-1);\n      }\n    }\n\n    &--facebook {\n      background: #3b5999;\n      border-color: #2f4d8a;\n\n      &:hover {\n        background: #274480;\n        border-color: #274480;\n      }\n    }\n\n    &--google {\n      background: #cb4023;\n      border-color: #be3419;\n\n      &:hover {\n        background: #c1361a;\n        border-color: #c1361a;\n      }\n    }\n\n    &--windowslive {\n      background: #329ffc;\n      border-color: #2996f2;\n\n      &:hover {\n        background: #1f8ce9;\n        border-color: #1f8ce9;\n      }\n    }\n  }\n\n  &__popup-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 2100;\n    background: rgba(255, 255, 255, .9);\n    width: 100vw;\n    height: 100vh;\n    padding: 2rem;\n    display: flex;\n    flex-direction: row;\n    align-items: flex-end;\n    justify-content: space-around;\n  }\n}\n"]}]);
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
var render = function () {
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
          _vm.isForm && _vm.canShowForm
            ? _c("address-form", {
                key: "form",
                attrs: {
                  address: _vm.localAddress,
                  "btn-text": _vm.formBtnText,
                },
                on: {
                  "update:address": function ($event) {
                    _vm.localAddress = $event
                  },
                },
              })
            : _vm.addresses.length
            ? _c(
                "div",
                { key: "list" },
                [
                  _vm._l(_vm.addresses, function (address, index) {
                    return _c(
                      "div",
                      {
                        key: address._id,
                        staticClass: "account-addresses__card card",
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
                                  name: "account-address-selected",
                                },
                                domProps: { checked: address.default },
                                on: {
                                  change: function ($event) {
                                    return _vm.selectAddress(address)
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "custom-control-label",
                                  attrs: { for: "account-address-" + index },
                                },
                                [
                                  _c(
                                    "address",
                                    {
                                      staticClass: "account-addresses__address",
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "account-addresses__line",
                                        },
                                        [
                                          _vm._v(
                                            "\n                  " +
                                              _vm._s(
                                                _vm.getLineAddress(address)
                                              ) +
                                              "\n                "
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      address.city
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "account-addresses__city",
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
                                              ),
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass: "account-addresses__zip",
                                        },
                                        [
                                          _vm._v(
                                            "\n                  " +
                                              _vm._s(address.zip) +
                                              "\n                "
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
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
                                    "aria-label": _vm.i19edit,
                                  },
                                  on: {
                                    click: function ($event) {
                                      _vm.editAddressIndex = index
                                    },
                                  },
                                },
                                [_c("i", { staticClass: "i-pencil" })]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-sm btn-danger",
                                  attrs: {
                                    type: "button",
                                    "aria-label": _vm.i19remove,
                                  },
                                  on: {
                                    click: function ($event) {
                                      return _vm.removeAddress(index)
                                    },
                                  },
                                },
                                [_c("i", { staticClass: "i-trash" })]
                              ),
                            ]
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "account-addresses__recipient card-footer",
                          },
                          [
                            _vm._v(
                              "\n          " +
                                _vm._s(address.name) +
                                "\n        "
                            ),
                          ]
                        ),
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
                        click: function ($event) {
                          _vm.isNewAddress = true
                        },
                      },
                    },
                    [
                      _c("i", { staticClass: "i-plus mr-1" }),
                      _vm._v(
                        "\n        " + _vm._s(_vm.i19newAddress) + "\n      "
                      ),
                    ]
                  ),
                ],
                2
              )
            : _vm._e(),
        ],
        1
      ),
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
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      staticClass: "account-form needs-validation",
      attrs: { novalidate: "" },
      on: {
        submit: function ($event) {
          $event.preventDefault()
          return _vm.submit.apply(null, arguments)
        },
      },
    },
    [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "account-form-email" } }, [
          _vm._v("\n      " + _vm._s(_vm.i19emailAddress) + "\n    "),
        ]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model.trim",
              value: _vm.localCustomer.main_email,
              expression: "localCustomer.main_email",
              modifiers: { trim: true },
            },
          ],
          staticClass: "form-control",
          attrs: {
            type: "email",
            pattern: "\\S+@\\S+\\.\\S{2,}",
            id: "account-form-email",
            placeholder: "email@mail.com",
            required: "",
          },
          domProps: { value: _vm.localCustomer.main_email },
          on: {
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(
                _vm.localCustomer,
                "main_email",
                $event.target.value.trim()
              )
            },
            blur: function ($event) {
              return _vm.$forceUpdate()
            },
          },
        }),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-row" }, [
        _c("div", { staticClass: "form-group col-lg-8" }, [
          _c("label", { attrs: { for: "account-form-name" } }, [
            _vm._v("\n        " + _vm._s(_vm.i19fullName) + "\n      "),
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model.trim",
                value: _vm.fullName,
                expression: "fullName",
                modifiers: { trim: true },
              },
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              pattern: "[^\\d\\s]{2,}[\\s][^\\d\\s]{2,}.*",
              id: "account-form-name",
              required: "",
            },
            domProps: { value: _vm.fullName },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.fullName = $event.target.value.trim()
              },
              blur: function ($event) {
                return _vm.$forceUpdate()
              },
            },
          }),
        ]),
        _vm._v(" "),
        !_vm.isShort
          ? _c("div", { staticClass: "form-group col-lg-4" }, [
              _c("label", { attrs: { for: "account-form-nickname" } }, [
                _vm._v("\n        " + _vm._s(_vm.i19nickname) + "\n      "),
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.trim",
                    value: _vm.localCustomer.display_name,
                    expression: "localCustomer.display_name",
                    modifiers: { trim: true },
                  },
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  pattern: "[^\\d\\s]{2,}.*",
                  id: "account-form-nickname",
                },
                domProps: { value: _vm.localCustomer.display_name },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.localCustomer,
                      "display_name",
                      $event.target.value.trim()
                    )
                  },
                  blur: function ($event) {
                    return _vm.$forceUpdate()
                  },
                },
              }),
            ])
          : _vm._e(),
      ]),
      _vm._v(" "),
      !_vm.isShort
        ? _c(
            "div",
            { staticClass: "form-group" },
            _vm._l(_vm.i19Gender, function (label, value) {
              return _c(
                "div",
                {
                  staticClass:
                    "custom-control custom-radio custom-control-inline",
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.localCustomer.gender,
                        expression: "localCustomer.gender",
                      },
                    ],
                    staticClass: "custom-control-input",
                    attrs: {
                      type: "radio",
                      name: "account-form-gender",
                      id: "account-form-gender-" + value,
                    },
                    domProps: {
                      value: value,
                      checked: _vm._q(_vm.localCustomer.gender, value),
                    },
                    on: {
                      change: function ($event) {
                        return _vm.$set(_vm.localCustomer, "gender", value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "custom-control-label",
                      attrs: { for: "account-form-gender-" + value },
                    },
                    [_vm._v("\n        " + _vm._s(label) + "\n      ")]
                  ),
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
              _vm._v("\n        " + _vm._s(_vm.i19contactPhone) + "\n      "),
            ]),
            _vm._v(" "),
            _c("input-phone", {
              attrs: { id: "account-form-phone", required: "" },
              model: {
                value: _vm.phoneNumber,
                callback: function ($$v) {
                  _vm.phoneNumber = $$v
                },
                expression: "phoneNumber",
              },
            }),
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
                  _vm._v("\n        " + _vm._s(_vm.i19cellphone) + "\n      "),
                ]),
                _vm._v(" "),
                _c("input-phone", {
                  attrs: { id: "account-form-cell" },
                  model: {
                    value: _vm.secondPhoneNumber,
                    callback: function ($$v) {
                      _vm.secondPhoneNumber = $$v
                    },
                    expression: "secondPhoneNumber",
                  },
                }),
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
                expression: "!isGuestAccess",
              },
            ],
            staticClass: "form-group col-lg-4",
          },
          [
            _c("label", { attrs: { for: "account-form-birth" } }, [
              _vm._v("\n        " + _vm._s(_vm.i19birthdate) + "\n      "),
            ]),
            _vm._v(" "),
            _c("input-date", {
              attrs: { id: "account-form-birth" },
              model: {
                value: _vm.birthdate,
                callback: function ($$v) {
                  _vm.birthdate = $$v
                },
                expression: "birthdate",
              },
            }),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group" },
        _vm._l(
          {
            p: _vm.i19personalRegistration,
            j: _vm.i19companyRegistration,
          },
          function (label, value) {
            return _c(
              "div",
              {
                staticClass:
                  "custom-control custom-radio custom-control-inline",
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.localCustomer.registry_type,
                      expression: "localCustomer.registry_type",
                    },
                  ],
                  staticClass: "custom-control-input",
                  attrs: {
                    type: "radio",
                    name: "account-form-type",
                    id: "account-form-type-" + value,
                    required: "",
                  },
                  domProps: {
                    value: value,
                    checked: _vm._q(_vm.localCustomer.registry_type, value),
                  },
                  on: {
                    change: function ($event) {
                      return _vm.$set(_vm.localCustomer, "registry_type", value)
                    },
                  },
                }),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    staticClass: "custom-control-label",
                    attrs: { for: "account-form-type-" + value },
                  },
                  [_vm._v("\n        " + _vm._s(label) + "\n      ")]
                ),
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
              _vm._v("\n        " + _vm._s(_vm.i19docNumber) + "\n      "),
            ]),
            _vm._v(" "),
            _c("input-doc-number", {
              attrs: {
                id: "account-form-doc",
                isCompany: _vm.localCustomer.registry_type !== "p",
                required: "",
              },
              model: {
                value: _vm.localCustomer.doc_number,
                callback: function ($$v) {
                  _vm.$set(_vm.localCustomer, "doc_number", $$v)
                },
                expression: "localCustomer.doc_number",
              },
            }),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _vm.localCustomer.registry_type !== "p"
        ? _c("div", { staticClass: "account-form__legal-person" }, [
            _c("div", { staticClass: "form-row" }, [
              _c("div", { staticClass: "form-group col-lg-8" }, [
                _c("label", { attrs: { for: "account-form-name" } }, [
                  _vm._v(
                    "\n          " + _vm._s(_vm.i19corporateName) + "\n        "
                  ),
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.localCustomer.corporate_name,
                      expression: "localCustomer.corporate_name",
                      modifiers: { trim: true },
                    },
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    pattern: "[\\w-]{1,}[\\s][\\w-]{1,}.*",
                    minlength: "4",
                    id: "account-form-name",
                    required: "",
                  },
                  domProps: { value: _vm.localCustomer.corporate_name },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.localCustomer,
                        "corporate_name",
                        $event.target.value.trim()
                      )
                    },
                    blur: function ($event) {
                      return _vm.$forceUpdate()
                    },
                  },
                }),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-row account-form__inscription" }, [
              _c("div", { staticClass: "form-group col-lg-6" }, [
                _c("label", { attrs: { for: "account-form-inscription" } }, [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.i19inscriptionNumber) +
                      "\n        "
                  ),
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.localCustomer.inscription_number,
                      expression: "localCustomer.inscription_number",
                      modifiers: { trim: true },
                    },
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    maxlength: "50",
                    id: "account-form-inscription",
                  },
                  domProps: { value: _vm.localCustomer.inscription_number },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.localCustomer,
                        "inscription_number",
                        $event.target.value.trim()
                      )
                    },
                    blur: function ($event) {
                      return _vm.$forceUpdate()
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-group col-lg-5 pb-lg-2 ml-lg-2" },
                _vm._l(_vm.i19InscriptionType, function (label, value) {
                  return _c(
                    "div",
                    {
                      staticClass:
                        "custom-control custom-radio custom-control-inline",
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.localCustomer.inscription_type,
                            expression: "localCustomer.inscription_type",
                          },
                        ],
                        staticClass: "custom-control-input",
                        attrs: {
                          type: "radio",
                          name: "account-form-gender",
                          id: "account-form-gender-" + value,
                        },
                        domProps: {
                          value: value,
                          checked: _vm._q(
                            _vm.localCustomer.inscription_type,
                            value
                          ),
                        },
                        on: {
                          change: function ($event) {
                            return _vm.$set(
                              _vm.localCustomer,
                              "inscription_type",
                              value
                            )
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "custom-control-label",
                          attrs: { for: "account-form-gender-" + value },
                        },
                        [
                          _vm._v(
                            "\n            " + _vm._s(label) + "\n          "
                          ),
                        ]
                      ),
                    ]
                  )
                }),
                0
              ),
            ]),
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
                expression: "localCustomer.accepts_marketing",
              },
            ],
            staticClass: "custom-control-input",
            attrs: { type: "checkbox", id: "account-form-marketing" },
            domProps: {
              checked: Array.isArray(_vm.localCustomer.accepts_marketing)
                ? _vm._i(_vm.localCustomer.accepts_marketing, null) > -1
                : _vm.localCustomer.accepts_marketing,
            },
            on: {
              change: function ($event) {
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
              },
            },
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "custom-control-label",
              attrs: { for: "account-form-marketing" },
            },
            [
              _vm._v(
                "\n        " +
                  _vm._s(_vm.i19emailMarketingOptInMsg) +
                  "\n      "
              ),
            ]
          ),
        ]),
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
                          expression: "isPrivacyOptIn",
                        },
                      ],
                      staticClass: "custom-control-input",
                      attrs: {
                        type: "checkbox",
                        id: "account-form-privacy-policy",
                        required: "",
                      },
                      domProps: {
                        checked: Array.isArray(_vm.isPrivacyOptIn)
                          ? _vm._i(_vm.isPrivacyOptIn, null) > -1
                          : _vm.isPrivacyOptIn,
                      },
                      on: {
                        change: function ($event) {
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
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "custom-control-label",
                        attrs: { for: "account-form-privacy-policy" },
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
                            target: "_blank",
                          },
                          domProps: {
                            textContent: _vm._s(_vm.i19privacyPolicy),
                          },
                        }),
                        _vm._v(".\n        "),
                      ]
                    ),
                  ]),
                ])
              : _vm._e(),
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.hasSubmitBtn
        ? _c(
            "button",
            {
              staticClass: "btn btn-lg btn-primary",
              attrs: { type: "submit" },
            },
            [
              _c("i", { staticClass: "i-check mr-1" }),
              _vm._v("\n    " + _vm._s(_vm.btnLabel) + "\n  "),
            ]
          )
        : _vm._e(),
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
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      staticClass: "address-form needs-validation",
      attrs: { novalidate: "" },
      on: {
        submit: function ($event) {
          $event.preventDefault()
          return _vm.submit.apply(null, arguments)
        },
      },
    },
    [
      _c("div", { staticClass: "form-group address-form__name" }, [
        _c("label", { attrs: { for: "address-form-name" } }, [
          _vm._v("\n      " + _vm._s(_vm.i19recipient) + "\n    "),
        ]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.localAddress.name,
              expression: "localAddress.name",
            },
          ],
          staticClass: "form-control",
          attrs: {
            type: "text",
            pattern: "[^\\d\\s]{2,}.*",
            id: "address-form-name",
            placeholder: _vm.i19name,
            required: "",
          },
          domProps: { value: _vm.localAddress.name },
          on: {
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.localAddress, "name", $event.target.value)
            },
          },
        }),
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
                required: "",
              },
              model: {
                value: _vm.localAddress.zip,
                callback: function ($$v) {
                  _vm.$set(_vm.localAddress, "zip", $$v)
                },
                expression: "localAddress.zip",
              },
            }),
            _vm._v(" "),
            _vm.zipLoading || _vm.zipInfoLink
              ? _c("div", { staticClass: "input-group-append" }, [
                  _c("span", { staticClass: "input-group-text" }, [
                    !_vm.zipLoading
                      ? _c(
                          "a",
                          {
                            attrs: { href: _vm.zipInfoLink, target: "_blank" },
                          },
                          [_c("i", { staticClass: "i-question-circle" })]
                        )
                      : _c(
                          "div",
                          {
                            staticClass: "spinner-grow spinner-grow-sm",
                            attrs: { role: "status" },
                          },
                          [
                            _c("span", { staticClass: "sr-only" }, [
                              _vm._v("Loading..."),
                            ]),
                          ]
                        ),
                  ]),
                ])
              : _vm._e(),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c(
        "transition",
        {
          attrs: {
            "enter-active-class": "animated fadeIn",
            "leave-active-class": "animated fadeOut fast",
          },
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
                  expression: "isZipReady",
                },
              ],
            },
            [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "address-form-number" } }, [
                  _vm._v("\n          " + _vm._s(_vm.i19number) + "\n        "),
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
                          modifiers: { number: true },
                        },
                      ],
                      ref: "inputNumber",
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        id: "address-form-number",
                        required: !_vm.isNoNumber,
                        readonly: _vm.isNoNumber,
                      },
                      domProps: { value: _vm.localAddress.number },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.localAddress,
                            "number",
                            _vm._n($event.target.value)
                          )
                        },
                        blur: function ($event) {
                          return _vm.$forceUpdate()
                        },
                      },
                    }),
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
                              expression: "isNoNumber",
                            },
                          ],
                          staticClass: "custom-control-input",
                          attrs: {
                            type: "checkbox",
                            id: "address-form-no-number",
                          },
                          domProps: {
                            checked: Array.isArray(_vm.isNoNumber)
                              ? _vm._i(_vm.isNoNumber, null) > -1
                              : _vm.isNoNumber,
                          },
                          on: {
                            change: function ($event) {
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
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "address-form-no-number" },
                          },
                          [
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.i19noNumber) +
                                "\n              "
                            ),
                          ]
                        ),
                      ]
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-row" }, [
                _c("div", { staticClass: "form-group col-lg-6" }, [
                  _c("label", { attrs: { for: "address-form-compl" } }, [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.i19complement) +
                        "\n          "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.localAddress.complement,
                        expression: "localAddress.complement",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", id: "address-form-compl" },
                    domProps: { value: _vm.localAddress.complement },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.localAddress,
                          "complement",
                          $event.target.value
                        )
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group col-lg-6" }, [
                  _c("label", { attrs: { for: "address-form-ref" } }, [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.i19reference) +
                        "\n          "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.localAddress.near_to,
                        expression: "localAddress.near_to",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", id: "address-form-ref" },
                    domProps: { value: _vm.localAddress.near_to },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.localAddress,
                          "near_to",
                          $event.target.value
                        )
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-row" }, [
                _c("div", { staticClass: "form-group col-lg-6" }, [
                  _c("label", { attrs: { for: "address-form-street" } }, [
                    _vm._v(
                      "\n            " + _vm._s(_vm.i19street) + "\n          "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.localAddress.street,
                        expression: "localAddress.street",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "address-form-street",
                      readonly: _vm.addressFromZip.street,
                      required: "",
                    },
                    domProps: { value: _vm.localAddress.street },
                    on: {
                      click: function (ref) {
                        var target = ref.target

                        return target.select()
                      },
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.localAddress,
                          "street",
                          $event.target.value
                        )
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group col-lg-6" }, [
                  _c("label", { attrs: { for: "address-form-borough" } }, [
                    _vm._v(
                      "\n            " + _vm._s(_vm.i19borough) + "\n          "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.localAddress.borough,
                        expression: "localAddress.borough",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "address-form-borough",
                      readonly: _vm.addressFromZip.borough,
                    },
                    domProps: { value: _vm.localAddress.borough },
                    on: {
                      click: function (ref) {
                        var target = ref.target

                        return target.select()
                      },
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.localAddress,
                          "borough",
                          $event.target.value
                        )
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-row" }, [
                _c("div", { staticClass: "form-group col-lg-6 col-7" }, [
                  _c("label", { attrs: { for: "address-form-city" } }, [
                    _vm._v(
                      "\n            " + _vm._s(_vm.i19city) + "\n          "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.localAddress.city,
                        expression: "localAddress.city",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "address-form-city",
                      readonly: _vm.addressFromZip.city,
                      required: "",
                    },
                    domProps: { value: _vm.localAddress.city },
                    on: {
                      click: function (ref) {
                        var target = ref.target

                        return target.select()
                      },
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.localAddress, "city", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group col-lg-4 col" }, [
                  _c("label", { attrs: { for: "address-form-pc" } }, [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.i19provinceCode) +
                        "\n          "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.provinceCode,
                        expression: "provinceCode",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "address-form-pc",
                      pattern: "[A-Z]{2}",
                      maxlength: "2",
                      placeholder: "AA",
                      readonly: _vm.addressFromZip.province_code,
                      required: "",
                    },
                    domProps: { value: _vm.provinceCode },
                    on: {
                      click: function (ref) {
                        var target = ref.target

                        return target.select()
                      },
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.provinceCode = $event.target.value
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-lg btn-primary",
                  attrs: { type: "submit" },
                },
                [
                  _c("i", { staticClass: "i-check mr-1" }),
                  _vm._v("\n        " + _vm._s(_vm.btnText) + "\n      "),
                ]
              ),
            ]
          ),
        ]
      ),
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
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("cleave-input", {
    staticClass: "form-control",
    attrs: {
      type: "tel",
      pattern: "[\\d/-]{10}",
      options: _vm.cleaveOptions,
      placeholder: _vm.placeholder,
    },
    model: {
      value: _vm.localValue,
      callback: function ($$v) {
        _vm.localValue = $$v
      },
      expression: "localValue",
    },
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
var render = function () {
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
      placeholder: _vm.placeholder,
    },
    model: {
      value: _vm.localValue,
      callback: function ($$v) {
        _vm.localValue = $$v
      },
      expression: "localValue",
    },
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
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("cleave-input", {
    staticClass: "form-control",
    attrs: {
      type: "tel",
      pattern: "(\\+[\\d]{2}\\s?)?([1-9][\\d]+)?([\\s-]?[\\d]{4,}){2,}",
      options: _vm.cleaveOptions,
      placeholder: _vm.placeholder,
    },
    model: {
      value: _vm.localValue,
      callback: function ($$v) {
        _vm.localValue = $$v
      },
      expression: "localValue",
    },
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
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("cleave-input", {
    staticClass: "form-control",
    attrs: {
      type: "tel",
      pattern: _vm.pattern,
      options: _vm.cleaveOptions,
      placeholder: _vm.placeholder,
    },
    model: {
      value: _vm.localValue,
      callback: function ($$v) {
        _vm.localValue = $$v
      },
      expression: "localValue",
    },
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
var render = function () {
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
            submit: function ($event) {
              $event.preventDefault()
              return _vm.submitLogin.apply(null, arguments)
            },
          },
        },
        [
          _c("label", { staticClass: "h4", attrs: { for: "login-email" } }, [
            _vm._v("\n      " + _vm._s(_vm.i19enterYourEmailMsg) + "\n    "),
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
                    modifiers: { trim: true },
                  },
                ],
                ref: "inputEmail",
                staticClass: "form-control",
                attrs: {
                  type: "email",
                  id: "login-email",
                  placeholder: "email@mail.com",
                  readonly: _vm.isWaitingLogin,
                  required: "",
                },
                domProps: { value: _vm.email },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.email = $event.target.value.trim()
                  },
                  blur: function ($event) {
                    return _vm.$forceUpdate()
                  },
                },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "input-group-append" }, [
                _c(
                  "button",
                  {
                    staticClass: "login__email-btn btn btn-primary",
                    attrs: { type: "submit", disabled: _vm.isWaitingLogin },
                  },
                  [
                    !_vm.isWaitingLogin
                      ? _c("span", { key: "login" }, [
                          _c("i", { staticClass: "i-arrow-right" }),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "d-none d-md-inline ml-1" },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(_vm.i19continue) +
                                  "\n            "
                              ),
                            ]
                          ),
                        ])
                      : _c(
                          "span",
                          {
                            key: "loading",
                            staticClass:
                              "spinner-border spinner-border-sm mb-1 mr-1",
                            attrs: { role: "status" },
                          },
                          [
                            _c("span", { staticClass: "sr-only" }, [
                              _vm._v("Loading..."),
                            ]),
                          ]
                        ),
                  ]
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "transition",
            {
              attrs: {
                "enter-active-class": "animated fadeInDown",
                "leave-active-class": "animated position-absolute fadeOutUp",
              },
            },
            [
              _vm.isEmailCodeSent
                ? _c(
                    "div",
                    { staticClass: "login__code" },
                    [
                      _c(
                        "a-alert",
                        {
                          attrs: {
                            "can-show": _vm.isWrongCode,
                            variant: "warning",
                          },
                        },
                        [
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.i19incorrectEmailCodeMsg) +
                              "\n        "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "input-group input-group-lg" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.number",
                              value: _vm.emailCode,
                              expression: "emailCode",
                              modifiers: { number: true },
                            },
                          ],
                          ref: "inputCode",
                          staticClass: "form-control",
                          attrs: {
                            type: "number",
                            id: "login-email-code",
                            placeholder: "999999",
                            min: "100000",
                            max: "999999",
                            maxlength: "6",
                            required: "",
                          },
                          domProps: { value: _vm.emailCode },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.emailCode = _vm._n($event.target.value)
                            },
                            blur: function ($event) {
                              return _vm.$forceUpdate()
                            },
                          },
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
                                "aria-label": _vm.i19continue,
                              },
                            },
                            [_c("i", { staticClass: "i-check" })]
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-text" }, [
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.i19enterEmailCodeMsg) +
                            "\n        "
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          attrs: { href: "#" },
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.clearEmail.apply(null, arguments)
                            },
                          },
                        },
                        [
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.i19signInWithAnotherEmail) +
                              "\n        "
                          ),
                        ]
                      ),
                    ],
                    1
                  )
                : _vm.confirmAccount()
                ? _c("div", { staticClass: "login__confirm" }, [
                    _c("div", { staticClass: "login__hello" }, [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.i19helloAgain) +
                          "\n          "
                      ),
                      _c("strong", [
                        _vm._v(_vm._s(_vm.ecomPassport.getCustomerName())),
                      ]),
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
                        ),
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
                            required: "",
                          },
                          model: {
                            value: _vm.docNumber,
                            callback: function ($$v) {
                              _vm.docNumber = $$v
                            },
                            expression: "docNumber",
                          },
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
                                "aria-label": _vm.i19continue,
                              },
                            },
                            [_c("i", { staticClass: "i-check" })]
                          ),
                        ]),
                      ],
                      1
                    ),
                  ])
                : _vm._e(),
            ]
          ),
          _vm._v(" "),
          _c(
            "a-alert",
            {
              staticClass: "mt-3",
              attrs: {
                "can-show": Boolean(_vm.failAlertText),
                variant: _vm.hasNoProfileFound ? "info" : undefined,
              },
            },
            [
              _vm._v("\n      " + _vm._s(_vm.failAlertText) + "\n      "),
              !_vm.isEmailCodeSent
                ? _c(
                    "a",
                    {
                      staticClass: "alert-link",
                      attrs: { href: "#" },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.sendEmailCode.apply(null, arguments)
                        },
                      },
                    },
                    [
                      _vm._v(
                        "\n        " +
                          _vm._s(
                            _vm.hasNoProfileFound
                              ? _vm.i19signUp
                              : _vm.i19sendLoginCodeByEmail
                          ) +
                          "\n      "
                      ),
                    ]
                  )
                : _vm._e(),
            ]
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
                        ),
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.oauthProviders, function (ref) {
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
                              click: function () {
                                return _vm.oauthPopup(link)
                              },
                            },
                          },
                          [
                            _c("small", [_vm._v(_vm._s(_vm.i19signInWith))]),
                            _vm._v(" "),
                            _c("i", { staticClass: "fab mr-2", class: faIcon }),
                            _vm._v(
                              "\n          " +
                                _vm._s(providerName) +
                                "\n        "
                            ),
                          ]
                        )
                      }),
                    ],
                    2
                  )
                : _vm._e(),
            ]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "login__info" },
        [
          _c("div", { staticClass: "login__info-title" }, [
            _c("i", { staticClass: "i-lock" }),
            _vm._v("\n      " + _vm._s(_vm.i19weUseYourDataToMsg) + ":\n    "),
          ]),
          _vm._v(" "),
          _vm._l(
            [
              _vm.i19identifyYourAccount,
              _vm.i19notifyAboutOrders,
              _vm.i19manageYourPurchaseHistory,
            ],
            function (label) {
              return _c("div", { staticClass: "login__info-row" }, [
                _c("i", { staticClass: "i-check" }),
                _vm._v("\n      " + _vm._s(label) + "\n    "),
              ])
            }
          ),
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "transition",
        {
          attrs: {
            "enter-active-class": "animated fadeIn slow",
            "leave-active-class": "animated fadeOut",
          },
        },
        [
          _vm.isWaitingPopup
            ? _c("div", { staticClass: "login__popup-overlay" }, [
                _c("div", [
                  _c(
                    "div",
                    {
                      staticClass: "spinner-border mb-3",
                      attrs: { role: "status" },
                    },
                    [
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("Popup..."),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c("h5", [_vm._v(_vm._s(_vm.i19oauthOnPopup))]),
                ]),
              ])
            : _vm._e(),
        ]
      ),
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
//# sourceMappingURL=chunk.63faf71b1ff6f1cad92d.js.map