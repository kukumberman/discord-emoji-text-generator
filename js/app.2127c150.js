(function(e){function t(t){for(var n,i,c=t[0],u=t[1],p=t[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);s&&s(t);while(f.length)f.shift()();return o.push.apply(o,p||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,c=1;c<r.length;c++){var u=r[c];0!==a[u]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/discord-emoji-text-generator/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var s=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a=["disabled"];function o(e,t,r,o,i,c){return Object(n["e"])(),Object(n["b"])("div",null,[Object(n["h"])(Object(n["c"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return i.input=e}),onKeydown:t[1]||(t[1]=Object(n["i"])((function(){return c.copyToClipboard&&c.copyToClipboard.apply(c,arguments)}),["enter"]))},null,544),[[n["g"],i.input]]),Object(n["c"])("button",{onClick:t[2]||(t[2]=function(){return c.copyToClipboard&&c.copyToClipboard.apply(c,arguments)}),disabled:0===i.output.length},"Copy",8,a),Object(n["c"])("span",null,Object(n["f"])(i.clipboardStatus),1),Object(n["c"])("p",null,Object(n["f"])(i.output),1),Object(n["h"])(Object(n["c"])("textarea",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return i.config.text=e}),class:Object(n["d"])({error:i.config.parseError}),cols:"50",rows:"40"},null,2),[[n["g"],i.config.text]])])}var i=r("1da1"),c=(r("d9e2"),r("d3b7"),r("3ca3"),r("ddb0"),r("9861"),r("ac1f"),r("841c"),r("e9c4"),r("96cf"),r("d4ec")),u=r("bee2"),p=(r("7db0"),r("4d63"),r("c607"),r("2c3e"),r("25f0"),r("00b4"),r("a15b"),r("d81d"),r("a630"),r("5319"),{singleCharacter:function(e,t){return e.replace("*",t)},indexBasedArray:function(e,t){return e[+t]},target:function(e,t){return e}}),s=r("71d6"),l=function(){function e(t){Object(c["a"])(this,e),this.update(null!==t&&void 0!==t?t:s)}return Object(u["a"])(e,[{key:"update",value:function(e){this.config=e,this.resetCache()}},{key:"resetCache",value:function(){this.cache={}}},{key:"predicate",value:function(e){return this.config.entries.find((function(t){var r=new RegExp(t.search);return r.test(e)}))}},{key:"find",value:function(e){var t=this.predicate(e);if(t){var r=t.replaceWith,n=r.type,a=r.target,o=p[n](a,e);return this.cache[e]=o,o}return e}},{key:"replacer",value:function(e){if("undefined"!==typeof this.cache[e])return this.cache[e];var t=this.find(e);return this.cache[e]=t,t}},{key:"toText",value:function(e){return Array.from(e).map(this.replacer.bind(this)).join(" ")}}]),e}(),f={name:"App",components:{},data:function(){return{clipboardStatus:"",input:"",output:"",generator:new l,config:{text:"",parseError:!1}}},created:function(){this.config.text=this.defaultConfigText},mounted:function(){this.populateQueryText(),this.replaceQueryText()},methods:{copyToClipboard:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,window.navigator.clipboard.writeText(e.output);case 3:e.clipboardStatus="Copied",t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.clipboardStatus="Failed to copy";case 9:setTimeout((function(){e.clipboardStatus=""}),1e3);case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))()},updateText:function(){this.output=this.generator.toText(this.input)},handleConfigChanged:function(){try{var e=JSON.parse(this.config.text);this.config.parseError=!1,this.generator.update(e),this.updateText()}catch(t){t instanceof SyntaxError?this.config.parseError=!0:console.log(t)}},populateQueryText:function(){var e=new URLSearchParams(window.location.search);if(e.has("text")){var t=e.get("text");t.length>0&&(this.input=decodeURIComponent(t))}},replaceQueryText:function(){var e=window.location,t=e.origin,r=e.pathname,n=t+r;this.input.length>0&&(n+="?text="+encodeURIComponent(this.input)),window.history.replaceState(null,"(although most browsers will ignore this parameter)",n)}},watch:{input:function(){this.updateText(),this.replaceQueryText()},"config.text":function(){this.handleConfigChanged()}},computed:{defaultConfigText:function(){return JSON.stringify((new l).config,null,2)}}},d=(r("9ca8"),r("d959")),h=r.n(d);const g=h()(f,[["render",o]]);var b=g;Object(n["a"])(b).mount("#app")},"71d6":function(e){e.exports=JSON.parse('{"entries":[{"search":"[a-z]","replaceWith":{"type":"singleCharacter","target":":regional_indicator_*:"}},{"search":"[0-9]","replaceWith":{"type":"indexBasedArray","target":[":zero:",":one:",":two:",":three:",":four:",":five:",":six:",":seven:",":eight:",":nine:"]}},{"search":"#","replaceWith":{"type":"target","target":":hash:"}},{"search":"[[:space:]]","replaceWith":{"type":"target","target":" "}},{"search":"[A]","replaceWith":{"type":"target","target":":a:"}},{"search":"[O]","replaceWith":{"type":"target","target":":o2:"}},{"search":"[?]","replaceWith":{"type":"target","target":":question:"}},{"search":"[!]","replaceWith":{"type":"target","target":":exclamation:"}}]}')},"9ca8":function(e,t,r){"use strict";r("efdc")},efdc:function(e,t,r){}});
//# sourceMappingURL=app.2127c150.js.map