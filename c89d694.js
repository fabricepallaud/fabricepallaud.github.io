(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(t,n,e){"use strict";var o=e(0),r=e(105);r.a.color="rgba(255, 255, 255, 0.085)",o.a.directive("ripple",r.a)},146:function(t,n,e){var content=e(212);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(41).default)("404eeb88",content,!0,{sourceMap:!1})},161:function(t,n,e){"use strict";var o=e(10),r=e(20);function c(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(n){Object(o.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var l={computed:f({},Object(r.c)({APICallPending:function(t){return t.APICallPending},bodyBackgroundColor:function(t){var n,e,o,r;return null!==(n=null===(e=t.omni)||void 0===e||null===(o=e.branding)||void 0===o||null===(r=o.body_branding)||void 0===r?void 0:r.background_color)&&void 0!==n?n:""}})),watch:{APICallPending:function(t,n){var e=this;t||this.$nextTick((function(){e.$store.commit("SetShowLoadingScreen",!1)}))}},mounted:function(){this.initializeStore()},methods:f({},Object(r.b)({initializeStore:"omni/initializeStore"}))},d=e(23),component=Object(d.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app",style:{"background-color":t.bodyBackgroundColor}},[e("Nuxt"),t._v(" "),e("loading-screen")],1)}),[],!1,null,null,null);n.a=component.exports;installComponents(component,{LoadingScreen:e(238).default})},164:function(t,n,e){e(165),t.exports=e(166)},205:function(t,n,e){var content=e(206);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(41).default)("12ba2d00",content,!0,{sourceMap:!1})},206:function(t,n,e){var o=e(40),r=e(207),c=e(208),f=e(209),l=e(210),d=o(!1),m=r(c),y=r(f),h=r(l);d.push([t.i,'input[type=email],input[type=number],input[type=password],input[type=text],textarea{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-radius:.5rem;height:3rem;line-height:1.5rem;padding-left:.5rem;padding-right:.5rem}.pageTitle{font-family:intro-black,sans-serif;font-size:30px;line-height:1.75rem}.sectionTitle{font-family:intro-bold,sans-serif;font-size:18px;margin-bottom:30px}p{font-family:intro-regular,sans-serif;font-size:12px;line-height:24px;color:#525b73}@font-face{font-family:"intro-regular";font-style:normal;font-weight:400;font-display:swap;src:url('+m+') format("opentype")}@font-face{font-family:"intro-bold";font-style:normal;font-weight:700;font-display:swap;src:url('+y+') format("opentype")}@font-face{font-family:"intro-black";font-style:normal;font-weight:900;font-display:swap;src:url('+h+') format("opentype")}body{font-size:16px}.template{max-width:768px}.container{padding-left:20px;padding-right:20px}section{margin-bottom:40px}.btn-small{border-radius:9999px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-family:intro-black,sans-serif;height:40px;font-size:16px;line-height:1;padding-left:20px;padding-right:20px;position:relative}.btn-small:active{top:1px}',""]),t.exports=d},208:function(t,n,e){t.exports=e.p+"fonts/Intro-Regular.ba6d963.otf"},209:function(t,n,e){t.exports=e.p+"fonts/Intro-Bold.15b349b.otf"},210:function(t,n,e){t.exports=e.p+"fonts/Intro-Black.17be390.otf"},211:function(t,n,e){"use strict";e(146)},212:function(t,n,e){var o=e(40)(!1);o.push([t.i,".loading-page[data-v-9697fb08]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));display:flex;align-items:center;justify-content:center;height:100vh;position:fixed;top:0;left:0;width:100%;z-index:10000}.loading-icon[data-v-9697fb08]{--tw-border-opacity:1;border-radius:9999px;border:6px solid rgba(209,213,219,var(--tw-border-opacity));height:3.5rem;position:relative;width:3.5rem;border-top-color:#666;-webkit-animation:spin-data-v-9697fb08 1s ease-in-out infinite;animation:spin-data-v-9697fb08 1s ease-in-out infinite}@-webkit-keyframes spin-data-v-9697fb08{to{-webkit-transform:rotate(1turn)}}@keyframes spin-data-v-9697fb08{to{-webkit-transform:rotate(1turn)}}@-webkit-keyframes fadeIn-data-v-9697fb08{0%{opacity:0}to{opacity:1}}@keyframes fadeIn-data-v-9697fb08{0%{opacity:0}to{opacity:1}}",""]),t.exports=o},213:function(t,n,e){"use strict";e.r(n),e.d(n,"state",(function(){return o})),e.d(n,"mutations",(function(){return r}));var o=function(){return{showLoadingScreen:!0,APICallPending:!1}},r={SetShowLoadingScreen:function(t,data){t.showLoadingScreen=data},SetAPICallPending:function(t,data){t.APICallPending=data}}},214:function(t,n,e){"use strict";e.r(n),e.d(n,"state",(function(){return r})),e.d(n,"mutations",(function(){return c})),e.d(n,"actions",(function(){return f})),e.d(n,"getters",(function(){return l}));e(215),e(140),e(33);var o=e(5),r=function(){return{merchant_id:798,branding:{},sections:[]}},c={setConfig:function(t,data){t.branding=data.branding,t.sections=data.sections},setBranding:function(t,data){t.branding=data},setTracing:function(t,data){t.tracing=data},setOptIn:function(t,data){t.optIn=data},setHeroSection:function(t,data){t.heroSection=data},setSection:function(t,data){t.sections=data},addSection:function(t,data){t.sections.push(data)},deleteSection:function(t,data){t.sections.splice(t.sections.findIndex((function(t){return t.id===data})),1)}},f={initializeStore:function(t,data){var n=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.state,(o=t.commit)("SetAPICallPending",!0,{root:!0}),e.next=4,n.$axios.get("https://x4n10lozjl.execute-api.ap-southeast-2.amazonaws.com/prod/engage/omni/app/merchant/798").then((function(t){o("setConfig",t.data),o("SetAPICallPending",!1,{root:!0})})).catch((function(t){console.log(t),o("SetAPICallPending",!1,{root:!0})}));case 4:case"end":return e.stop()}}),e)})))()}},l={}},238:function(t,n,e){"use strict";e.r(n);var o=e(10),r=e(20);function c(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}var f={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(n){Object(o.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({},Object(r.c)({showLoadingScreen:function(t){return t.showLoadingScreen}}))},l=(e(211),e(23)),component=Object(l.a)(f,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.showLoadingScreen?e("div",{staticClass:"loading-page"},[e("div",{staticClass:"loading-icon"})]):t._e()}),[],!1,null,"9697fb08",null);n.default=component.exports}},[[164,9,1,10]]]);