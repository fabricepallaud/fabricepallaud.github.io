(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{103:function(t,e,n){"use strict";var o=n(0),r=n(104);r.a.color="rgba(255, 255, 255, 0.085)",o.a.directive("ripple",r.a)},105:function(t,e,n){"use strict";var o=n(0),r=n(159),i=n.n(r);n(239);o.a.use(i.a,{dropdownOptions:{showDialCodeInSelection:!0}})},146:function(t,e,n){var o=n(214);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(34).default)("404eeb88",o,!0,{sourceMap:!1})},162:function(t,e,n){"use strict";var o=n(10),r=n(19);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c={computed:a({},Object(r.c)({APICallPending:function(t){return t.APICallPending},bodyBackgroundColor:function(t){var e,n,o,r;return null!==(e=null===(n=t.omni)||void 0===n||null===(o=n.branding)||void 0===o||null===(r=o.body_branding)||void 0===r?void 0:r.background_color)&&void 0!==e?e:""}})),watch:{APICallPending:function(t,e){var n=this;t||this.$nextTick((function(){n.$store.commit("SetShowLoadingScreen",!1)}))}},mounted:function(){var t=this.$route.query.merchant_id||"798";this.$store.commit("omni/setMerchantId",t),this.initializeStore()},methods:a({},Object(r.b)({initializeStore:"omni/initializeStore"}))},s=n(23),p=Object(s.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app",style:{"background-color":t.bodyBackgroundColor}},[n("Nuxt"),t._v(" "),n("loading-screen")],1)}),[],!1,null,null,null);e.a=p.exports;installComponents(p,{LoadingScreen:n(241).default})},165:function(t,e,n){n(166),t.exports=n(167)},207:function(t,e,n){var o=n(208);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(34).default)("12ba2d00",o,!0,{sourceMap:!1})},208:function(t,e,n){var o=n(33),r=n(209),i=n(210),a=n(211),c=n(212),s=o(!1),p=r(i),u=r(a),f=r(c);s.push([t.i,'.vti__dropdown,.vti__input,input[type=email],input[type=number],input[type=password],input[type=submit],input[type=text],textarea{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-radius:.5rem;height:60px;font-size:14px;line-height:1.5rem;padding-left:1.5rem;padding-right:1.5rem;--tw-shadow:0 0 20px rgba(0,0,0,0.25);box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);width:100%}.vti__dropdown:active,.vti__dropdown:focus,.vti__input:active,.vti__input:focus,input[type=email]:active,input[type=email]:focus,input[type=number]:active,input[type=number]:focus,input[type=password]:active,input[type=password]:focus,input[type=submit]:active,input[type=submit]:focus,input[type=text]:active,input[type=text]:focus,textarea:active,textarea:focus{--tw-bg-opacity:1;background-color:rgba(249,250,251,var(--tw-bg-opacity))}input[type=submit]{font-family:intro-black,sans-serif}.form-section{display:flex;align-items:center;margin-bottom:.5rem}.pageTitle{font-family:intro-black,sans-serif;font-size:30px;line-height:1.75rem}.sectionTitle{font-family:intro-bold,sans-serif;font-size:18px;margin-bottom:30px}input,p{font-family:intro-regular,sans-serif;font-size:12px;line-height:16px;color:#525b73}@font-face{font-family:"intro-regular";font-style:normal;font-weight:400;font-display:swap;src:url('+p+') format("opentype")}@font-face{font-family:"intro-bold";font-style:normal;font-weight:700;font-display:swap;src:url('+u+') format("opentype")}@font-face{font-family:"intro-black";font-style:normal;font-weight:900;font-display:swap;src:url('+f+') format("opentype")}body{font-size:16px}.template{max-width:768px}.container{margin-left:auto;margin-right:auto;padding-left:20px;padding-right:20px}section{padding-bottom:40px}',""]),t.exports=s},210:function(t,e,n){t.exports=n.p+"fonts/Intro-Regular.ba6d963.otf"},211:function(t,e,n){t.exports=n.p+"fonts/Intro-Bold.15b349b.otf"},212:function(t,e,n){t.exports=n.p+"fonts/Intro-Black.17be390.otf"},213:function(t,e,n){"use strict";n(146)},214:function(t,e,n){var o=n(33)(!1);o.push([t.i,".loading-page[data-v-9697fb08]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));display:flex;align-items:center;justify-content:center;height:100vh;position:fixed;top:0;left:0;width:100%;z-index:10000}.loading-icon[data-v-9697fb08]{--tw-border-opacity:1;border-radius:9999px;border:6px solid rgba(209,213,219,var(--tw-border-opacity));height:3.5rem;position:relative;width:3.5rem;border-top-color:#666;-webkit-animation:spin-data-v-9697fb08 1s ease-in-out infinite;animation:spin-data-v-9697fb08 1s ease-in-out infinite}@-webkit-keyframes spin-data-v-9697fb08{to{-webkit-transform:rotate(1turn)}}@keyframes spin-data-v-9697fb08{to{-webkit-transform:rotate(1turn)}}@-webkit-keyframes fadeIn-data-v-9697fb08{0%{opacity:0}to{opacity:1}}@keyframes fadeIn-data-v-9697fb08{0%{opacity:0}to{opacity:1}}",""]),t.exports=o},215:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r}));var o=function(){return{showLoadingScreen:!0,APICallPending:!1}},r={SetShowLoadingScreen:function(t,e){t.showLoadingScreen=e},SetAPICallPending:function(t,e){t.APICallPending=e}}},216:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return i})),n.d(e,"actions",(function(){return a})),n.d(e,"getters",(function(){return c}));n(40);var o=n(5),r=function(){return{merchantId:"",branding:{},sections:[]}},i={setConfig:function(t,e){t.branding=e.branding,t.sections=e.sections},setBranding:function(t,e){t.branding=e},setMerchantId:function(t,e){t.merchantId=e}},a={initializeStore:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.state,(o=t.commit)("SetAPICallPending",!0,{root:!0}),n.next=4,e.$axios.get("https://x4n10lozjl.execute-api.ap-southeast-2.amazonaws.com/prod/engage/omni/app/merchant/798").then((function(t){o("setConfig",t.data),o("SetAPICallPending",!1,{root:!0})})).catch((function(t){o("SetAPICallPending",!1,{root:!0})}));case 4:case"end":return n.stop()}}),n)})))()}},c={}},241:function(t,e,n){"use strict";n.r(e);var o=n(10),r=n(19);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}var a={computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(r.c)({showLoadingScreen:function(t){return t.showLoadingScreen}}))},c=(n(213),n(23)),s=Object(c.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showLoadingScreen?n("div",{staticClass:"loading-page"},[n("div",{staticClass:"loading-icon"})]):t._e()}),[],!1,null,"9697fb08",null);e.default=s.exports}},[[165,10,2,11]]]);