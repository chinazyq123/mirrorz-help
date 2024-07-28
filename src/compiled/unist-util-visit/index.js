(()=>{"use strict";var e={};(()=>{e.d=(t,n)=>{for(var r in n){if(e.o(n,r)&&!e.o(t,r)){Object.defineProperty(t,r,{enumerable:true,get:n[r]})}}}})();(()=>{e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})();(()=>{e.r=e=>{if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})}})();if(typeof e!=="undefined")e.ab=__dirname+"/";var t={};e.r(t);e.d(t,{CONTINUE:()=>r,EXIT:()=>o,SKIP:()=>i,visit:()=>visit});const is=function(e,t,n,r,o){const i=convert(t);if(n!==undefined&&n!==null&&(typeof n!=="number"||n<0||n===Number.POSITIVE_INFINITY)){throw new Error("Expected positive finite index")}if(r!==undefined&&r!==null&&(!is(r)||!r.children)){throw new Error("Expected parent node")}if((r===undefined||r===null)!==(n===undefined||n===null)){throw new Error("Expected both parent and index")}return looksLikeANode(e)?i.call(o,e,n,r):false};const convert=function(e){if(e===null||e===undefined){return ok}if(typeof e==="function"){return castFactory(e)}if(typeof e==="object"){return Array.isArray(e)?anyFactory(e):propsFactory(e)}if(typeof e==="string"){return typeFactory(e)}throw new Error("Expected function, string, or object as test")};function anyFactory(e){const t=[];let n=-1;while(++n<e.length){t[n]=convert(e[n])}return castFactory(any);function any(...e){let n=-1;while(++n<t.length){if(t[n].apply(this,e))return true}return false}}function propsFactory(e){const t=e;return castFactory(all);function all(n){const r=n;let o;for(o in e){if(r[o]!==t[o])return false}return true}}function typeFactory(e){return castFactory(type);function type(t){return t&&t.type===e}}function castFactory(e){return check;function check(t,n,r){return Boolean(looksLikeANode(t)&&e.call(this,t,typeof n==="number"?n:undefined,r||undefined))}}function ok(){return true}function looksLikeANode(e){return e!==null&&typeof e==="object"&&"type"in e}function color(e){return"[33m"+e+"[39m"}const n=[];const r=true;const o=false;const i="skip";function visitParents(e,t,r,c){let f;if(typeof t==="function"&&typeof r!=="function"){c=r;r=t}else{f=t}const u=convert(f);const l=c?-1:1;factory(e,undefined,[])();function factory(e,f,a){const s=e&&typeof e==="object"?e:{};if(typeof s.type==="string"){const t=typeof s.tagName==="string"?s.tagName:typeof s.name==="string"?s.name:undefined;Object.defineProperty(visit,"name",{value:"node ("+color(e.type+(t?"<"+t+">":""))+")"})}return visit;function visit(){let s=n;let d;let y;let p;if(!t||u(e,f,a[a.length-1]||undefined)){s=toResult(r(e,a));if(s[0]===o){return s}}if("children"in e&&e.children){const t=e;if(t.children&&s[0]!==i){y=(c?t.children.length:-1)+l;p=a.concat(t);while(y>-1&&y<t.children.length){const e=t.children[y];d=factory(e,y,p)();if(d[0]===o){return d}y=typeof d[1]==="number"?d[1]:y+l}}}return s}}}function toResult(e){if(Array.isArray(e)){return e}if(typeof e==="number"){return[r,e]}return e===null||e===undefined?n:[e]}function visit(e,t,n,r){let o;let i;let c;if(typeof t==="function"&&typeof n!=="function"){i=undefined;c=t;o=n}else{i=t;c=n;o=r}visitParents(e,i,overload,o);function overload(e,t){const n=t[t.length-1];const r=n?n.children.indexOf(e):undefined;return c(e,r,n)}}module.exports=t})();