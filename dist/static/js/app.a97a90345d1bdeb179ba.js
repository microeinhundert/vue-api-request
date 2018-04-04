webpackJsonp([1],{

/***/ 118:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(118)
}
var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(78),
  /* template */
  __webpack_require__(125),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2e13665e",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(79),
  /* template */
  __webpack_require__(124),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 124:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "js-api-request"
  }, [_c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [(_vm.state == 'loading' && !_vm.hasLoadingSlot) ? _c('div', {
    staticClass: "spinner"
  }, [(_vm.spinner !== 'none') ? _c(_vm.spinner, {
    tag: "component",
    attrs: {
      "color": _vm.spinnerColor
    }
  }) : _vm._e()], 1) : _vm._e()]), _vm._v(" "), (_vm.state == 'loading') ? _vm._t("loading") : _vm._e(), _vm._v(" "), (_vm.state == 'waiting') ? _vm._t("waiting") : _vm._e(), _vm._v(" "), (_vm.state == 'success') ? _vm._t("success") : _vm._e(), _vm._v(" "), (_vm.state == 'error') ? _vm._t("error") : _vm._e(), _vm._v(" "), (_vm.state == 'success' || _vm.state == 'error') ? _vm._t("loaded") : _vm._e(), _vm._v(" "), (_vm.state == 'success' && !_vm.hasWaitingSlot && !_vm.hasSuccessSlot) ? _vm._t("default") : _vm._e()], 2)
},staticRenderFns: []}

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('section', {
    attrs: {
      "id": "home"
    }
  }, [_c('div', {
    staticClass: "container"
  }, [_c('api-request', {
    attrs: {
      "resource": _vm.$api.fakeRequest,
      "params": {
        time: 2000
      },
      "trigger": _vm.e1.trigger,
      "effect": "zoomIn",
      "spinner": "DotLoader",
      "spinner-scale": 2,
      "spinner-padding": "62px"
    },
    on: {
      "update:trigger": function($event) {
        _vm.$set(_vm.e1, "trigger", $event)
      }
    }
  }, [_c('img', {
    style: ({
      width: '256px'
    }),
    attrs: {
      "src": __webpack_require__(49),
      "alt": "vue-api-resource"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "v-api-logo"
  }, [_vm._v("API REQUEST")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "//ftgibran.github.io/#/vue-api-request"
    }
  }, [_vm._v("Docs & Demo")])]), _vm._v(" "), _c('p', [_c('button', {
    on: {
      "click": function($event) {
        _vm.e1.trigger = true
      }
    }
  }, [_vm._v("Reload")])])], 1)]), _vm._v(" "), _c('section', [_c('h2', [_vm._v("Basic Example")]), _vm._v(" "), _c('api-request', {
    attrs: {
      "resource": _vm.$api.giphyRandom,
      "trigger": _vm.e2.trigger,
      "resp": "data",
      "effect": "lightSpeedIn"
    },
    on: {
      "update:trigger": function($event) {
        _vm.$set(_vm.e2, "trigger", $event)
      }
    },
    model: {
      value: (_vm.e2.resp),
      callback: function($$v) {
        _vm.$set(_vm.e2, "resp", $$v)
      },
      expression: "e2.resp"
    }
  }, [(_vm.e2.resp) ? _c('img', {
    attrs: {
      "src": _vm.e2.resp.data.image_url
    }
  }) : _vm._e()]), _vm._v(" "), _c('p', [_c('button', {
    on: {
      "click": function($event) {
        _vm.e2.trigger = true
      }
    }
  }, [_vm._v("Reload")])])], 1), _vm._v(" "), _c('hr'), _vm._v(" "), _c('section', [_c('h2', [_vm._v("Example trigger.sync")]), _vm._v(" "), _c('button', {
    staticClass: "btn",
    on: {
      "click": function($event) {
        _vm.e3.trigger = true
      }
    }
  }, [_c('api-request', {
    attrs: {
      "resource": _vm.$api.fakeRequest,
      "params": {
        time: 1000,
        response: !_vm.e3.liked
      },
      "trigger": _vm.e3.trigger,
      "spinner-scale": 0.55,
      "spinner-padding": 0
    },
    on: {
      "update:trigger": function($event) {
        _vm.$set(_vm.e3, "trigger", $event)
      }
    },
    model: {
      value: (_vm.e3.liked),
      callback: function($$v) {
        _vm.$set(_vm.e3, "liked", $$v)
      },
      expression: "e3.liked"
    }
  }, [_c('span', {
    attrs: {
      "slot": "waiting"
    },
    slot: "waiting"
  }, [_vm._v("\n            " + _vm._s(_vm.e3.liked ? 'You liked' : 'Like') + "\n        ")])])], 1)]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('section', [_c('h2', [_vm._v("Example sync & trigger.sync")]), _vm._v(" "), _c('div', [_c('api-request', {
    attrs: {
      "resource": _vm.$api.giphySearch,
      "params": {
        q: _vm.e4.q,
        offset: _vm.e4.offset,
        limit: 3
      },
      "trigger": _vm.e4.trigger,
      "sync": _vm.e4.offset,
      "resp": "data"
    },
    on: {
      "update:trigger": function($event) {
        _vm.$set(_vm.e4, "trigger", $event)
      }
    },
    model: {
      value: (_vm.e4.resp),
      callback: function($$v) {
        _vm.$set(_vm.e4, "resp", $$v)
      },
      expression: "e4.resp"
    }
  }, [_c('form', {
    attrs: {
      "slot": "waiting"
    },
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.e4.trigger = true
      }
    },
    slot: "waiting"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.e4.q),
      expression: "e4.q"
    }],
    attrs: {
      "type": "text",
      "placeholder": "Type something"
    },
    domProps: {
      "value": (_vm.e4.q)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.e4, "q", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('button', [_vm._v("Search")])])]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "success"
    },
    slot: "success"
  }, [(_vm.e4.resp) ? _c('div', _vm._l((_vm.e4.resp.data), function(item) {
    return _c('div', [_c('img', {
      attrs: {
        "src": item.images.fixed_width.url
      }
    })])
  })) : _vm._e()])]), _vm._v(" "), (_vm.e4.resp) ? _c('div', [_c('span', [_c('button', {
    on: {
      "click": function($event) {
        _vm.e4.offset -= _vm.e4.offset == 0 ? 0 : 3
      }
    }
  }, [_vm._v("Previous")])]), _vm._v(" "), _c('span', [_vm._v("\n          " + _vm._s(_vm.e4.offset / 3 + 1) + "\n        ")]), _vm._v(" "), _c('span', [_c('button', {
    on: {
      "click": function($event) {
        _vm.e4.offset += 3
      }
    }
  }, [_vm._v("Next")])])]) : _vm._e()], 1)]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('section', [_c('h2', [_vm._v("Custom Loader & Effect")]), _vm._v(" "), _c('api-request', {
    attrs: {
      "resource": _vm.$api.fakeRequest,
      "params": {
        time: 3000
      },
      "trigger": _vm.e5.trigger,
      "spinner": "CustomLoader",
      "effect": "blur"
    },
    on: {
      "update:trigger": function($event) {
        _vm.$set(_vm.e5, "trigger", $event)
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "waiting"
    },
    slot: "waiting"
  }, [_c('img', {
    style: ({
      width: '256px'
    }),
    attrs: {
      "src": __webpack_require__(49),
      "alt": "vue-api-resource"
    }
  })])]), _vm._v(" "), _c('p', [_c('button', {
    on: {
      "click": function($event) {
        _vm.e5.trigger = true
      }
    }
  }, [_vm._v("Reload")])])], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    style: ({
      color: this.color
    })
  }, [_c('i', {
    staticClass: "fa fa-refresh fa-spin"
  }), _vm._v(" "), _c('strong', [_vm._v("Loading...")])])
},staticRenderFns: []}

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/v-api@512.2c70ebf.png";

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


/* harmony default export */ __webpack_exports__["a"] = ({
  fakeRequest: (params = {}) => new Promise(resolve => {
    setTimeout(() => resolve(params.response), params.time)
  }),
  giphyRandom: (params = {}) => __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`//api.giphy.com/v1/gifs/random`, {
    params: {
      api_key: 'ceea3d73eee446f48e2a645e117b1f31',
      tag: params.tag,
      rating: params.rating
    }
  }),
  giphySearch: (params = {}) => __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`//api.giphy.com/v1/gifs/search`, {
    params: {
      api_key: 'ceea3d73eee446f48e2a645e117b1f31',
      q: params.q,
      limit: params.limit,
      offset: params.offset
    }
  })
});


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Example_vue__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Example_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Example_vue__);




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */])

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [
    {
      path: '/',
      name: 'example',
      component: __WEBPACK_IMPORTED_MODULE_2__components_Example_vue___default.a
    }
  ]
}));


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ApiRequest_vue__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ApiRequest_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ApiRequest_vue__);



var api = {};

var module = {
  effects: [],
  loader: {},

  addEffect: function addEffect(name, func) {
    module.effects.push({ name: name, func: func });
  },

  addLoader: function addLoader(name, component) {
    var obj = {};
    obj[name] = component;
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(module.loader, obj);
  },

  setAPI: function setAPI(obj) {
    api = obj;
  },

  install: function install(Vue, options) {
    var opt = options || {};

    Vue.api = api;
    Vue.prototype.$api = api;

    if (opt.effect) __WEBPACK_IMPORTED_MODULE_1__ApiRequest_vue___default.a.props.effect.default = opt.effect;
    if (opt.resp) __WEBPACK_IMPORTED_MODULE_1__ApiRequest_vue___default.a.props.resp.default = opt.resp;
    if (opt.spinner) __WEBPACK_IMPORTED_MODULE_1__ApiRequest_vue___default.a.props.spinner.default = opt.spinner;
    if (opt.spinnerColor) __WEBPACK_IMPORTED_MODULE_1__ApiRequest_vue___default.a.props.spinnerColor.default = opt.spinnerColor;
    if (opt.spinnerScale) __WEBPACK_IMPORTED_MODULE_1__ApiRequest_vue___default.a.props.spinnerScale.default = opt.spinnerScale;
    if (opt.spinnerPadding) __WEBPACK_IMPORTED_MODULE_1__ApiRequest_vue___default.a.props.spinnerPadding.default = opt.spinnerPadding;

    if (opt.onSuccess) __WEBPACK_IMPORTED_MODULE_1__ApiRequest_vue___default.a.methods.successCallback = opt.onSuccess;
    if (opt.onError) __WEBPACK_IMPORTED_MODULE_1__ApiRequest_vue___default.a.methods.errorCallback = opt.onError;

    __WEBPACK_IMPORTED_MODULE_1__ApiRequest_vue___default.a.methods.customEffect = function (name, el) {
      var effect = module.effects.find(function (item) {
        return item.name === name;
      });
      if (effect && typeof effect.func === 'function') {
        effect.func(el);
        return true;
      }
      return false;
    };

    Vue.component('ApiRequest', __WEBPACK_IMPORTED_MODULE_1__ApiRequest_vue___default.a);
    Vue.options.components['ApiRequest'].mixin({ components: module.loader });
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.VueApiRequest = module;
}

/* harmony default export */ __webpack_exports__["a"] = (module);

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(76),
  /* template */
  __webpack_require__(126),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(77),
  /* template */
  __webpack_require__(127),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_AppRouter__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_AppResource__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_index__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_gsap__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_gsap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_CustomLoader_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_CustomLoader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_CustomLoader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_font_awesome_css_font_awesome_css__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_font_awesome_css_font_awesome_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_font_awesome_css_font_awesome_css__);









__WEBPACK_IMPORTED_MODULE_4__src_index__["a" /* default */].setAPI(__WEBPACK_IMPORTED_MODULE_3__service_AppResource__["a" /* default */])

__WEBPACK_IMPORTED_MODULE_4__src_index__["a" /* default */].addLoader('CustomLoader', __WEBPACK_IMPORTED_MODULE_6__components_CustomLoader_vue___default.a)

__WEBPACK_IMPORTED_MODULE_4__src_index__["a" /* default */].addEffect('blur', (el) => {
  el.style.filter = 'blur(20px)'
  __WEBPACK_IMPORTED_MODULE_5_gsap__["TweenLite"].to(el, 1, {
    filter: 'blur(0)',
    ease: __WEBPACK_IMPORTED_MODULE_5_gsap__["Power2"].easeOut
  })
})

let options = {
  effect: 'zoomIn',
  spinner: 'moonLoader',
  spinnerColor: '#FC6094',
  onSuccess: resp => {
    console.log('Success', resp)
  },
  onError: resp => {
    console.log('Error', resp)
    alert(`Error: ${resp.message}`)
  }
}

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_4__src_index__["a" /* default */], options)

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__service_AppRouter__["a" /* default */],
  template: '<App/>',
  components: {App: __WEBPACK_IMPORTED_MODULE_1__App_vue___default.a}
})


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'App'
});

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['color']
});

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Example',
  data: function data() {
    return {
      e1: {
        trigger: false,
        resp: null
      },
      e2: {
        trigger: false,
        resp: null
      },
      e3: {
        trigger: false,
        liked: false
      },
      e4: {
        trigger: false,
        q: null,
        offset: 0,
        resp: null
      },
      e5: {
        trigger: false
      }
    };
  },
  mounted: function mounted() {},

  methods: {}
});

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      animate: null,
      state: null // waiting, loading, success, error
    };
  },


  props: {
    // Function type should return a promise and Object type must have these functions as values
    resource: {
      type: [Function, Object],
      required: true
    },
    params: null, // params to be add
    value: null, // v-model: response
    sync: null, // sync values that fetch request when it changes
    trigger: Boolean, // if true then it fetch
    onlyIf: { // condition to fetch
      type: Boolean,
      'default': true
    },
    effect: { // effect after load
      type: String,
      'default': ''
    },
    resp: { // default path response
      type: String,
      'default': '.'
    },
    spinner: { // type of spinner
      type: String,
      'default': ''
    },
    spinnerColor: { // spinner color
      type: String,
      'default': '#42b983'
    },
    spinnerPadding: { // spinner padding
      type: [String, Number],
      'default': '1em'
    },
    spinnerScale: { // spinner scale
      type: Number,
      'default': 1
    }
  },

  computed: {
    hasLoadingSlot: function hasLoadingSlot() {
      return this.$slots.hasOwnProperty('loading');
    },
    hasWaitingSlot: function hasWaitingSlot() {
      return this.$slots.hasOwnProperty('waiting');
    },
    hasSuccessSlot: function hasSuccessSlot() {
      return this.$slots.hasOwnProperty('success');
    },
    hasErrorSlot: function hasErrorSlot() {
      return this.$slots.hasOwnProperty('error');
    },
    hasLoadedSlot: function hasLoadedSlot() {
      return this.$slots.hasOwnProperty('loaded');
    }
  },

  watch: {
    sync: function sync() {
      this.fetch();
    },
    trigger: function trigger(val) {
      if (val) {
        this.fetch();
        this.$emit('update:trigger', false);
      }
    }
  },

  mounted: function mounted() {
    if (this.trigger) this.$emit('update:trigger', false);
    if (this.hasWaitingSlot) this.waitingEvent();else this.fetch();
  },


  methods: {
    fetch: function fetch() {
      var _this = this;

      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!this.onlyIf) return;

      // Go to loading state
      this.loadingEvent();

      var response = {};
      var resources = [];
      var keys = [];
      var path = this.resp;

      // if request is a single request then
      if (typeof this.resource === 'function') resources = [this.resource(this.params)];else if (key) {
        // if request has multiple requests and a specific key then
        keys.push(key);
        resources.push(this.resource[key](this.params && this.params[key]));
      } else {
        // if request has multiple requests then
        for (var _key in this.resource) {
          keys.push(_key);
          resources.push(this.resource[_key](this.params && this.params[_key]));
        }
      }

      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all(resources).then(function (responses) {
        // if request has multiple requests then
        if (keys.length !== 0) responses.forEach(function (resp, i) {
          response[keys[i]] = index(resp, path);
        });
        // if request is a single request then
        else responses.forEach(function (resp) {
            response = index(resp, path);
          });
        // Go to success state
        _this.successEvent(response);
      }).catch(function (resp) {
        // Go to error state
        _this.errorEvent(resp);
      });

      // Get Object by string dot notation
      function index(obj, is, value) {
        if (!is || is === '.') return obj;
        if (typeof is === 'string') return index(obj, is.split('.'), value);
        if (is.length === 1 && value !== undefined) {
          obj[is[0]] = value;
          return value;
        }
        if (is.length === 0) return obj;
        return index(obj[is[0]], is.slice(1), value);
      }
    },
    waitingEvent: function waitingEvent() {
      this.state = 'waiting';
      this.$emit('waiting');
    },
    loadingEvent: function loadingEvent() {
      this.state = 'loading';
      this.$emit('loading');
      this.animate = null;
    },
    successEvent: function successEvent(resp) {
      this.state = 'success';
      this.runEffect();
      this.$emit('input', resp);
      this.$emit('loaded', resp);
      this.$emit('success', resp);
      this.successCallback(resp);
      this.$emit('afterSuccess', resp);

      if (this.hasWaitingSlot && !(this.hasSuccessSlot || this.hasLoadedSlot)) this.waitingEvent();
    },
    errorEvent: function errorEvent(resp) {
      this.state = 'error';
      this.runEffect();
      this.$emit('loaded', resp);
      this.$emit('error', resp);
      this.errorCallback(resp);
      this.$emit('afterError', resp);

      if (this.hasWaitingSlot && !(this.hasErrorSlot || this.hasLoadedSlot)) this.waitingEvent();
    },
    runEffect: function runEffect() {
      var customEffect = this.customEffect(this.effect, this.$el);
      if (!customEffect) {
        this.animate = 'animated ' + this.effect;
      }
    },
    successCallback: function successCallback(resp) {},
    errorCallback: function errorCallback(resp) {},
    customEffect: function customEffect() {
      return null;
    }
  }

});

/***/ })

},[57]);
//# sourceMappingURL=app.a97a90345d1bdeb179ba.js.map