!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/nova-vendor/total-records/",r(r.s=0)}([function(t,e,r){r(2),t.exports=r(1)},function(t,e,r){},function(t,e,r){"use strict";r.r(e);var n=function(t,e,r,n,o,s,i,a){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=r,u._compiled=!0),n&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=c):o&&(c=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:u}}({filters:{numberFormat:function(t){return isNaN(t)?t:Number(t).toLocaleString()}},props:{card:{type:Object,required:!0}},data:function(){return{count:0,errors:null}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;Nova.request().get("/nova-vendor/total-records/endpoint/",{params:{model:this.card.model,expires:this.card.expires}}).then((function(e){var r=e.data;t.$set(t,"count",r.count)})).catch((function(e){var r=e.response;t.$set(t,"errors",r.data.errors)}))}}},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("card",{staticClass:"total-records flex flex-col items-center justify-center"},[r("div",{staticClass:"px-3 py-3"},[r("h2",{staticClass:"text-center text-3xl text-80 font-light"},[r("b",[t._v(t._s(t.card.title)+":")]),t._v(" "+t._s(t._f("numberFormat")(t.count))+"\n        ")]),t._v(" "),null!==t.errors?r("ul",{staticClass:"error"},[t._l(Object.keys(t.errors),(function(e){return t._l(t.errors[e],(function(n,o){return r("li",{key:e+"_"+o},[t._v("\n                    "+t._s(n)+"\n                ")])}))}))],2):t._e()])])}),[],!1,null,null,null).exports;Nova.booting((function(t){t.component("total-records",n)}))}]);