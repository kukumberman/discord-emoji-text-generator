(function(e){function t(t){for(var n,c,u=t[0],i=t[1],p=t[2],s=0,d=[];s<u.length;s++)c=u[s],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,p||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,u=1;u<r.length;u++){var i=r[u];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/discord-emoji-text-generator/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var l=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a=["disabled"];function o(e,t,r,o,c,u){return Object(n["d"])(),Object(n["b"])("div",null,[Object(n["g"])(Object(n["c"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.input=e})},null,512),[[n["f"],c.input]]),Object(n["c"])("button",{onClick:t[1]||(t[1]=function(){return u.copyToClipboard&&u.copyToClipboard.apply(u,arguments)}),disabled:0===c.output.length},"Copy",8,a),Object(n["c"])("span",null,Object(n["e"])(c.clipboardStatus),1),Object(n["c"])("p",null,Object(n["e"])(c.output),1)])}var c=r("1da1"),u=(r("96cf"),r("7db0"),r("d3b7"),r("07ac"),r("4d63"),r("c607"),r("ac1f"),r("2c3e"),r("25f0"),r("841c"),r("00b4"),r("a15b"),r("d81d"),r("a630"),r("3ca3"),r("5319"),{singleCharacter:function(e,t){return e.replace("*",t)},indexBasedArray:function(e,t){return e[+t]},space:function(e,t){return" "}}),i={letter:{search:"[a-zA-Z]",replaceWith:{type:"singleCharacter",target:":regional_indicator_*:"}},number:{search:"[0-9]",replaceWith:{type:"indexBasedArray",target:[":zero:",":one:",":two:",":three:",":four:",":five:",":six:",":seven:",":eight:",":nine:"]}},space:{search:"[[:space:]]",replaceWith:{type:"space",target:" "}}};function p(e){return Object.values(i).find((function(t){var r=new RegExp(t.search);return r.test(e)}))}function l(e){var t=p(e);if(t){var r=t.replaceWith,n=r.type,a=r.target;return u[n](a,e)}return e}function s(e){var t=Array.from(e).map((function(e){return e.toLowerCase()})).map(l).join(" ");return t}var d={name:"App",components:{},data:function(){return{clipboardStatus:"",input:"",output:""}},methods:{copyToClipboard:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,window.navigator.clipboard.writeText(e.output);case 3:e.clipboardStatus="Copied",t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.clipboardStatus="Failed to copy";case 9:setTimeout((function(){e.clipboardStatus=""}),1e3);case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))()}},watch:{input:function(e){this.output=s(e)}}},f=r("6b0d"),b=r.n(f);const h=b()(d,[["render",o]]);var v=h;Object(n["a"])(v).mount("#app")}});
//# sourceMappingURL=app.3650d85d.js.map