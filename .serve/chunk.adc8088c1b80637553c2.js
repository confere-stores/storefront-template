(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/@ecomplus/widget-search-engine/src/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ecomplus/widget-search-engine/src/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ecomplus_storefront_twbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ecomplus/storefront-twbs */ "./node_modules/@ecomplus/storefront-twbs/dist/storefront-twbs.min.js");
/* harmony import */ var _ecomplus_storefront_twbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ecomplus_storefront_twbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _components_SearchEngine_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! #components/SearchEngine.vue */ "./node_modules/@confere-stores/storefront-components/src/SearchEngine.vue");


/*!
 * @ecomplus/widget-search-engine
 * (c) E-Com Club <ti@e-com.club>
 * Released under the MIT License.
 */



/* harmony default export */ __webpack_exports__["default"] = ((options = {}, elId = 'search-engine') => {
  const $searchEngine = document.getElementById(elId);

  if ($searchEngine) {
    const $dock = document.getElementById(`${elId}-dock`);
    let $productItems;
    const getScopedSlots = window.storefront && window.storefront.getScopedSlots;
    const urlParams = new URLSearchParams(window.location.search);
    const props = { ...options.props,
      term: urlParams.get('term'),
      page: parseInt(urlParams.get('page'), 10) || 1,
      brands: urlParams.getAll('brands[]'),
      categories: urlParams.getAll('categories[]'),
      defaultFilters: urlParams.getAll('filters[]').reduce((filters, gridAndOption) => {
        const [gridId, option] = gridAndOption.split(':');

        if (!filters[gridId]) {
          filters[gridId] = [];
        }

        filters[gridId].push(option);
        return filters;
      }, {})
    };
    const {
      sort
    } = $searchEngine.dataset;

    if (sort) {
      props.defaultSort = sort;
    }

    ;
    ['brands', 'categories'].forEach(resource => {
      if ($searchEngine.dataset[resource]) {
        try {
          props[resource] = JSON.parse($searchEngine.dataset[resource]);
        } catch (err) {
          console.error(err);
          return;
        }

        if (props[resource] && props[resource].length < 2) {
          props[`isFixed${resource.charAt(0).toUpperCase()}${resource.slice(1)}`] = true;
        }

        props.hasPopularItems = false;
      }
    });
    const {
      resource
    } = window.document.body.dataset;

    switch (resource) {
      case 'brands':
      case 'categories':
        if (!props[resource] || !props[resource].length) {
          console.error(new Error(`Skipping SearchEngine with empty '${resource}' filter`));
          return;
        }

    }

    const vueApp = new vue__WEBPACK_IMPORTED_MODULE_2__["default"]({
      data: {
        countRequests: 0,
        canShowItems: !$dock,
        term: props.term
      },

      render(createElement) {
        const vm = this;
        const on = {
          'update:term'(term) {
            vm.term = term;
          }

        };

        if ($dock) {
          on.fetch = function ({
            fetching
          }) {
            fetching.then(result => {
              vm.countRequests++;

              const renderNewItems = () => {
                vm.canShowItems = true;
                Object(_ecomplus_storefront_twbs__WEBPACK_IMPORTED_MODULE_1__["$"])('#search-engine-snap').remove();
              };

              if (!vm.canShowItems) {
                if (vm.countRequests > 1) {
                  renderNewItems();
                } else if (result && result.hits) {
                  if (!$productItems || $productItems.length !== result.hits.hits.length) {
                    renderNewItems();
                  } else {
                    let isSameItems = true;
                    const {
                      hits
                    } = result.hits;

                    for (let i = 0; i < hits.length; i++) {
                      if (!$productItems.find(`[data-product-id="${hits[i]._id}"]`).length) {
                        isSameItems = false;
                        break;
                      }
                    }

                    if (!isSameItems) {
                      renderNewItems();
                    }
                  }
                }
              }
            });
          };
        }

        return createElement(_components_SearchEngine_vue__WEBPACK_IMPORTED_MODULE_3__["default"], {
          attrs: {
            id: $dock ? null : elId
          },
          props: { ...props,
            term: vm.term,
            canShowItems: vm.canShowItems,
            loadMoreSelector: $dock ? '#search-engine-load' : null
          },
          on,
          scopedSlots: typeof getScopedSlots === 'function' ? getScopedSlots($searchEngine, createElement, !$dock) : undefined
        });
      }

    });

    if ($dock) {
      Object(_ecomplus_storefront_twbs__WEBPACK_IMPORTED_MODULE_1__["$"])($searchEngine).append(Object(_ecomplus_storefront_twbs__WEBPACK_IMPORTED_MODULE_1__["$"])('<div>', {
        id: 'search-engine-load'
      }));

      const mount = () => vueApp.$mount($dock);

      $productItems = Object(_ecomplus_storefront_twbs__WEBPACK_IMPORTED_MODULE_1__["$"])('#search-engine-snap .product-item');

      if ($productItems.length) {
        const observer = new window.MutationObserver(() => {
          clearTimeout(fallbackTimer);
          observer.disconnect();
          setTimeout(mount, 150);
        });
        observer.observe($productItems[0], {
          childList: true
        });
        const fallbackTimer = setTimeout(() => {
          observer.disconnect();
          mount();
        }, 3000);
      } else {
        mount();
      }
    } else {
      vueApp.$mount($searchEngine);
    }
  }
});

/***/ }),

/***/ "./node_modules/@linusborg/vue-simple-portal/dist/index.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@linusborg/vue-simple-portal/dist/index.esm.js ***!
  \*********************************************************************/
/*! exports provided: default, Portal, config, setSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portal", function() { return Portal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelector", function() { return setSelector; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var nanoid_non_secure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nanoid/non-secure */ "./node_modules/nanoid/non-secure/index.js");

/**
 * vue-simple-portal
 * version: 0.1.5,
 * (c) Thorsten Lünborg, 2021 - present
 * LICENCE: Apache-2.0
 * http://github.com/linusborg/vue-simple-portal
*/



function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var config = {
  selector: "vue-portal-target-".concat(Object(nanoid_non_secure__WEBPACK_IMPORTED_MODULE_1__["nanoid"])())
};
var setSelector = function setSelector(selector) {
  return config.selector = selector;
};
var isBrowser = typeof window !== 'undefined' && (typeof document === "undefined" ? "undefined" : _typeof(document)) !== undefined;

var TargetContainer = vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  // as an abstract component, it doesn't appear in
  // the $parent chain of components.
  // which means the next parent of any component rendered inside of this oen
  // will be the parent from which is was sent
  // @ts-expect-error
  abstract: true,
  name: 'PortalOutlet',
  props: ['nodes', 'tag'],
  data: function data(vm) {
    return {
      updatedNodes: vm.nodes
    };
  },
  render: function render(h) {
    var nodes = this.updatedNodes && this.updatedNodes();
    if (!nodes) return h();
    return nodes.length === 1 && !nodes[0].text ? nodes : h(this.tag || 'DIV', nodes);
  },
  destroyed: function destroyed() {
    var el = this.$el;
    el && el.parentNode.removeChild(el);
  }
});

var Portal = vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  name: 'VueSimplePortal',
  props: {
    disabled: {
      type: Boolean
    },
    prepend: {
      type: Boolean
    },
    selector: {
      type: String,
      default: function _default() {
        return "#".concat(config.selector);
      }
    },
    tag: {
      type: String,
      default: 'DIV'
    }
  },
  render: function render(h) {
    if (this.disabled) {
      var nodes = this.$scopedSlots && this.$scopedSlots.default();
      if (!nodes) return h();
      return nodes.length < 2 && !nodes[0].text ? nodes : h(this.tag, nodes);
    }

    return h();
  },
  created: function created() {
    if (!this.getTargetEl()) {
      this.insertTargetEl();
    }
  },
  updated: function updated() {
    var _this = this;

    // We only update the target container component
    // if the scoped slot function is a fresh one
    // The new slot syntax (since Vue 2.6) can cache unchanged slot functions
    // and we want to respect that here.
    this.$nextTick(function () {
      if (!_this.disabled && _this.slotFn !== _this.$scopedSlots.default) {
        _this.container.updatedNodes = _this.$scopedSlots.default;
      }

      _this.slotFn = _this.$scopedSlots.default;
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.unmount();
  },
  watch: {
    disabled: {
      immediate: true,
      handler: function handler(disabled) {
        disabled ? this.unmount() : this.$nextTick(this.mount);
      }
    }
  },
  methods: {
    // This returns the element into which the content should be mounted.
    getTargetEl: function getTargetEl() {
      if (!isBrowser) return;
      return document.querySelector(this.selector);
    },
    insertTargetEl: function insertTargetEl() {
      if (!isBrowser) return;
      var parent = document.querySelector('body');
      var child = document.createElement(this.tag);
      child.id = this.selector.substring(1);
      parent.appendChild(child);
    },
    mount: function mount() {
      if (!isBrowser) return;
      var targetEl = this.getTargetEl();
      var el = document.createElement('DIV');

      if (this.prepend && targetEl.firstChild) {
        targetEl.insertBefore(el, targetEl.firstChild);
      } else {
        targetEl.appendChild(el);
      }

      this.container = new TargetContainer({
        el: el,
        parent: this,
        propsData: {
          tag: this.tag,
          nodes: this.$scopedSlots.default
        }
      });
    },
    unmount: function unmount() {
      if (this.container) {
        this.container.$destroy();
        delete this.container;
      }
    }
  }
});

function install(_Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _Vue.component(options.name || 'portal', Portal);

  if (options.defaultSelector) {
    setSelector(options.defaultSelector);
  }
}

if (typeof window !== 'undefined' && window.Vue && window.Vue === vue__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  // plugin was inlcuded directly in a browser
  vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(install);
}

/* harmony default export */ __webpack_exports__["default"] = (install);



/***/ }),

/***/ "./node_modules/nanoid/non-secure/index.js":
/*!*************************************************!*\
  !*** ./node_modules/nanoid/non-secure/index.js ***!
  \*************************************************/
/*! exports provided: nanoid, customAlphabet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nanoid", function() { return nanoid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customAlphabet", function() { return customAlphabet; });
// This alphabet uses `A-Za-z0-9_-` symbols. The genetic algorithm helped
// optimize the gzip compression for this alphabet.
let urlAlphabet =
  'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'

let customAlphabet = (alphabet, size) => {
  return () => {
    let id = ''
    // A compact alternative for `for (var i = 0; i < step; i++)`.
    let i = size
    while (i--) {
      // `| 0` is more compact and faster than `Math.floor()`.
      id += alphabet[(Math.random() * alphabet.length) | 0]
    }
    return id
  }
}

let nanoid = (size = 21) => {
  let id = ''
  // A compact alternative for `for (var i = 0; i < step; i++)`.
  let i = size
  while (i--) {
    // `| 0` is more compact and faster than `Math.floor()`.
    id += urlAlphabet[(Math.random() * 64) | 0]
  }
  return id
}




/***/ })

}]);
//# sourceMappingURL=chunk.adc8088c1b80637553c2.js.map