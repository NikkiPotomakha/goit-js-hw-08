!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),(0,r.register)("dCfNN",function(t,n){var r="Expected a function",i=0/0,o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,p=Math.max,v=Math.min,g=function(){return d.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==m.call(t))return i;if(b(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var r=f.test(e);return r||u.test(e)?l(e.slice(2),r?2:8):a.test(e)?i:+e}t.exports=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),function(e,t,n){var i,o,a,f,u,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw TypeError(r);function x(t){var n=i,r=o;return i=o=void 0,c=t,f=e.apply(r,n)}function O(e){var n=e-l,r=e-c;return void 0===l||n>=t||n<0||d&&r>=a}function h(){var e,n,r,i=g();if(O(i))return T(i);u=setTimeout(h,(e=i-l,n=i-c,r=t-e,d?v(r,a-n):r))}function T(e){return(u=void 0,m&&i)?x(e):(i=o=void 0,f)}function j(){var e,n=g(),r=O(n);if(i=arguments,o=this,l=n,r){if(void 0===u)return c=e=l,u=setTimeout(h,t),s?x(e):f;if(d)return u=setTimeout(h,t),x(l)}return void 0===u&&(u=setTimeout(h,t)),f}return t=y(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?p(y(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),j.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=l=o=u=void 0},j.flush=function(){return void 0===u?f:T(g())},j}(e,t,{leading:i,maxWait:t,trailing:o})}});var i=r("dCfNN");let o="feedback-form-state",a={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),input:document.querySelector(".feedback-form input")},f={};a.form.addEventListener("submit",function(e){e.preventDefault(),f.email&&f.message?(console.log(f),e.currentTarget.reset(),localStorage.removeItem(o)):console.error("Please fill in both email and message fields before submitting.")}),a.form.addEventListener("input",(i&&i.__esModule?i.default:i)(function(e){let t=e.target;f[t.name]=t.value||"",localStorage.setItem(o,JSON.stringify(f))},500)),function(){let e=localStorage.getItem(o);if(e){let t=JSON.parse(e);a.input.value=t.email||"",a.textarea.value=t.message||""}}()}();
//# sourceMappingURL=03-feedback.85b8f136.js.map