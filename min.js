/*! (c) Andrea Giammarchi (ISC) */var hyperHTML=function(e){"use strict";function t(){return this}function n(e){return e.join(ne).replace(ve,o).replace(he,r)}function r(e,t,n,r){return"<"+t+n.replace(pe,i)+r}function i(e,t,n){return t+(n||'"')+te+(n||'"')}function o(e,t,n){return ce.test(t)?e:"<"+t+n+"></"+t+">"}function a(e,t,n){return{type:e,name:n,node:t,path:u(t)}}function u(e){var t,n=[];switch(e.nodeType){case oe:case ie:t=e;break;case re:t=e.parentNode,f(n,t,e);break;default:t=e.ownerElement}for(;t=(e=t).parentNode;)f(n,t,e);return n}function c(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function l(e,t,n){for(var r=e.childNodes,i=r.length,o=0;o<i;){var u=r[o++];switch(u.nodeType){case oe:s(u,t,n),l(u,t,n);break;case re:u.textContent===te&&(n.shift(),t.push(ue.test(e.nodeName)?a("text",e):a("any",u)));break;case ae:ue.test(e.nodeName)&&ee.call(u.textContent)===ne&&(n.shift(),t.push(a("text",e)))}}}function s(t,n,r){for(var i=new M,o=t.attributes,u=[],c=u.slice.call(o,0),l=c.length,s=0;s<l;){var f=c[s++];if(f.value===te){var d=f.name;if(!i.has(d)){var h=r.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*['"]?$/,"$1"),v=o[h]||o[h.toLowerCase()];i.set(d,v),n.push(a("attr",v,h))}u.push(f)}}for(l=u.length,s=0;s<l;){var p=u[s++];/^id$/i.test(p.name)?t.removeAttribute(p.name):t.removeAttributeNode(p)}var g=t.nodeName;if(/^script$/i.test(g)){var m=e.createElement(g);for(l=o.length,s=0;s<l;)m.setAttributeNode(o[s++].cloneNode(!0));m.textContent=t.textContent,t.parentNode.replaceChild(m,t)}}function f(e,t,n){e.unshift(e.indexOf.call(t.childNodes,n))}function d(e,t){var r=n(t),i=e.transform;i&&(r=i(r));var o=X(r,e.type);p(o);var a=[];l(o,a,t.slice(0));var u={content:o,updates:function(n){for(var r=[],i=a.length,o=0;o<i;){var u=a[o++],l=c(n,u.path);switch(u.type){case"any":r.push(e.any(l,[]));break;case"attr":r.push(e.attribute(l,u.name,u.node));break;case"text":r.push(e.text(l)),l.textContent=""}}return function(){var e=arguments.length,o=e-1,a=1;if(i!==o)throw new Error(o+" values instead of "+i+"\n"+t.join(", "));for(;a<e;)r[a-1](arguments[a++]);return n}}};return ge.set(t,u),u}function h(t,n){var r=ge.get(n)||d(t,n),i=Y.call(e,r.content,!0),o={content:i,template:n,updates:r.updates(i)};return me.set(t,o),o}function v(e){return function(t){var n=me.get(e);return null!=n&&n.template===t||(n=h(e,t)),n.updates.apply(null,arguments),n.content}}function p(e){for(var t=e.childNodes,n=t.length;n--;){var r=t[n];1!==r.nodeType&&0===ee.call(r.textContent).length&&e.removeChild(r)}}function g(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1],this._=null}function m(e){return this.type=e,v(this)}function b(){var e=Re.get(this),t=Me.apply(null,arguments);return e&&e.template===t[0]?e.tagger.apply(null,t):w.apply(this,t),this}function w(){var e=Me.apply(null,arguments),t=ye in this?"svg":"html",n=new m(t);Re.set(this,{tagger:n,template:e[0]}),this.textContent="",this.appendChild(n.apply(null,e))}function y(e){return arguments.length<2?null==e?De("html"):"string"==typeof e?y.wire(null,e):"raw"in e?De("html")(e):"nodeType"in e?y.bind(e):He(e,"html"):("raw"in e?De("html"):y.wire).apply(null,arguments)}/*! (c) Andrea Giammarchi - ISC */
var N={};try{N.WeakMap=WeakMap}catch(WeakMap){N.WeakMap=function(e,t){function n(t){i(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(r,this)}function r(e){this.set(e[0],e[1])}var i=t.defineProperty,o=t.hasOwnProperty,a=n.prototype;return a["delete"]=function(e){return this.has(e)&&delete e[this._]},a.get=function(e){return this.has(e)?e[this._]:void 0},a.has=function(e){return o.call(e,this._)},a.set=function(e,t){return i(e,this._,{configurable:!0,value:t}),this},n}(Math.random(),Object)}var x=N.WeakMap,E={};try{E.WeakSet=WeakSet}catch(WeakSet){!function(e,t){function n(){t(this,"_",{value:"_@ungap/weakmap"+e++})}var r=n.prototype;r.add=function(e){return this.has(e)||t(e,this._,{value:!0,configurable:!0}),this},r.has=function(e){return this.hasOwnProperty.call(e,this._)},r["delete"]=function(e){return this.has(e)&&delete e[this._]},E.WeakSet=n}(Math.random(),Object.defineProperty)}var k=E.WeakSet,C={};try{C.Map=Map}catch(Map){C.Map=function(){function e(e){return-1<(t=n.indexOf(e))}var t=0,n=[],r=[];return{"delete":function(i){var o=e(i);return o&&(n.splice(t,1),r.splice(t,1)),o},get:function(n){return e(n)?r[t]:void 0},has:function(t){return e(t)},set:function(i,o){return r[e(i)?t:n.push(i)-1]=o,this}}}}var M=C.Map,A=function(e,t,n,r,i,o){if(i-r<2)t.insertBefore(e(n[r],1),o);else{for(var a=t.ownerDocument.createDocumentFragment();r<i;)a.appendChild(e(n[r++],1));t.insertBefore(a,o)}},S=function(e,t){return e==t},T=function(e){return e},_=function(e,t,n,r,i,o,a){var u=o-i;if(u<1)return-1;for(;n-t>=u;){for(var c=t,l=i;c<n&&l<o&&a(e[c],r[l]);)c++,l++;if(l===o)return t;t=c+1}return-1},j=function(e,t,n,r,i,o){for(;r<i&&o(n[r],e[t-1]);)r++,t--;return 0===t},L=function(e,t,n,r,i){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:i},O=function(e,t,n,r,i){if(i-r<2)t.removeChild(e(n[r],-1));else{var o=t.ownerDocument.createRange();o.setStartBefore(e(n[r],-1)),o.setEndAfter(e(n[i-1],-1)),o.deleteContents()}},P=function(e,t,n,r,i,o,a,u){var c=0,l=r<u?r:u,s=Array(l++),f=Array(l);f[0]=-1;for(var d=1;d<l;d++)f[d]=a;for(var h=new M,v=o;v<a;v++)h.set(i[v],v);for(var p=t;p<n;p++){var g=h.get(e[p]);null!=g&&-1<(c=D(f,l,g))&&(f[c]=g,s[c]={newi:p,oldi:g,prev:s[c-1]})}for(c=--l,--a;f[c]>a;)--c;l=u+r-c;var m=Array(l),b=s[c];for(--n;b;){for(var w=b,y=w.newi,N=w.oldi;n>y;)m[--l]=1,--n;for(;a>N;)m[--l]=-1,--a;m[--l]=0,--n,--a,b=b.prev}for(;n>=t;)m[--l]=1,--n;for(;a>=o;)m[--l]=-1,--a;return m},W=function(e,t,n,r,i,o,a){var u=n+o,c=[],l=void 0,s=void 0,f=void 0,d=void 0,h=void 0,v=void 0,p=void 0;e:for(l=0;l<=u;l++){if(l>50)return null;for(p=l-1,h=l?c[l-1]:[0,0],v=c[l]=[],s=-l;s<=l;s+=2){for(d=s===-l||s!==l&&h[p+s-1]<h[p+s+1]?h[p+s+1]:h[p+s-1]+1,f=d-s;d<o&&f<n&&a(r[i+d],e[t+f]);)d++,f++;if(d===o&&f===n)break e;v[l+s]=d}}var g=Array(l/2+u/2),m=g.length-1;for(l=c.length-1;l>=0;l--){for(;d>0&&f>0&&a(r[i+d-1],e[t+f-1]);)g[m--]=0,d--,f--;if(!l)break;p=l-1,h=l?c[l-1]:[0,0],s=d-f,s===-l||s!==l&&h[p+s-1]<h[p+s+1]?(f--,g[m--]=1):(d--,g[m--]=-1)}return g},$=function(e,t,n,r,i,o,a,u,c){for(var l=new M,s=e.length,f=a,d=0;d<s;)switch(e[d++]){case 0:i++,f++;break;case 1:l.set(r[i],1),A(t,n,r,i++,i,f<u?t(o[f],1):c);break;case-1:f++}for(d=0;d<s;)switch(e[d++]){case 0:a++;break;case-1:l.has(o[a])?a++:O(t,n,o,a++,a)}},D=function(e,t,n){for(var r=1,i=t;r<i;){var o=(r+i)/2>>>0;n<e[o]?i=o:r=o+1}return r},H=function(e,t,n,r,i,o,a,u,c,l,s,f,d){$(W(n,r,o,a,u,l,f)||P(n,r,i,o,a,u,c,l),e,t,n,r,a,u,s,d)},F=function(e,t,n,r){r||(r={});for(var i=r.compare||S,o=r.node||T,a=null==r.before?null:o(r.before,0),u=t.length,c=u,l=0,s=n.length,f=0;l<c&&f<s&&i(t[l],n[f]);)l++,f++;for(;l<c&&f<s&&i(t[c-1],n[s-1]);)c--,s--;var d=l===c,h=f===s;if(d&&h)return n;if(d&&f<s)return A(o,e,n,f,s,L(o,t,l,u,a)),n;if(h&&l<c)return O(o,e,t,l,c),n;var v=c-l,p=s-f,g=-1;if(v<p){if(-1<(g=_(n,f,s,t,l,c,i)))return A(o,e,n,f,g,o(t[l],0)),A(o,e,n,g+v,s,L(o,t,c,u,a)),n}else if(p<v&&-1<(g=_(t,l,c,n,f,s,i)))return O(o,e,t,l,g),O(o,e,t,g+p,c),n;return v<2||p<2?(A(o,e,n,f,s,o(t[l],0)),O(o,e,t,l,c),n):v===p&&j(n,s,t,l,c,i)?(A(o,e,n,f,s,L(o,t,c,u,a)),n):(H(o,e,n,f,s,p,t,l,c,v,u,i,a),n)},R={};R.CustomEvent="function"==typeof CustomEvent?CustomEvent:function(t){function n(t,n){n||(n={});var r=e.createEvent("CustomEvent");return r.initCustomEvent(t,!!n.bubbles,!!n.cancelable,n.detail),r}return n.prototype=new n("").constructor.prototype,n}();var z=R.CustomEvent,B=function(e,t){var n="_"+e+"$";return{get:function(){return this[n]||V(this,n,t.call(this,e))},set:function(e){V(this,n,e)}}},V=function(e,t,n){return Object.defineProperty(e,t,{configurable:!0,value:"function"==typeof n?function(){return e._wire$=n.apply(this,arguments)}:n})[t]},Z={},q={},G=[],I=q.hasOwnProperty,J=0,K={attributes:Z,define:function(e,t){e.indexOf("-")<0?(e in q||(J=G.push(e)),q[e]=t):Z[e]=t},invoke:function(e,t){for(var n=0;n<J;n++){var r=G[n];if(I.call(e,r))return q[r](e[r],t)}}},Q=Array.isArray||function(e){var t=e.call([]);return function(n){return e.call(n)===t}}({}.toString),U=function(e){function t(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function n(t){return t===i?e.createDocumentFragment():e.createElement(t)}function r(e){var r=n(i),o=n("div");return o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",t(r,o.firstChild.childNodes),r}var i="fragment",o="content"in n("template"),a=o?function(e){var t=n("template");return t.innerHTML=e,t.content}:function(e){var r=n(i),o=n("template"),a=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var u=RegExp.$1;o.innerHTML="<table>"+e+"</table>",a=o.querySelectorAll(u)}else o.innerHTML=e,a=o.childNodes;return t(r,a),r};return function(e,t){return("svg"===t?r:a)(e)}}(e),X=function(e){function t(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function n(t){return t===i?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",t)}function r(e){var r=n(i),o=n("div");return o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",t(r,o.firstChild.childNodes),r}var i="fragment",o="content"in n("template"),a=o?function(e){var t=n("template");return t.innerHTML=e,t.content}:function(e){var r=n(i),o=n("template"),a=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var u=RegExp.$1;o.innerHTML="<table>"+e+"</table>",a=o.querySelectorAll(u)}else o.innerHTML=e,a=o.childNodes;return t(r,a),r};return function(e,t){return("svg"===t?r:a)(e)}}(e),Y=function(e,t,n,r,i){var o="importNode"in e,a=e.createDocumentFragment();return a.appendChild(e.createTextNode("g")),a.appendChild(e.createTextNode("")),(o?e.importNode(a,!0):a.cloneNode(!0)).childNodes.length<2?function u(e,t){for(var n=e.cloneNode(),r=e.childNodes||[],i=r.length,o=0;t&&o<i;o++)n.appendChild(u(r[o],t));return n}:o?e.importNode:function(e,t){return e.cloneNode(!!t)}}(e),ee="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},te="-"+Math.random().toFixed(6)+"%";(function(e,t,n){return"content"in e&&(e.innerHTML='<p tabindex="'+te+'"></p>',e.content.childNodes[0].getAttribute("tabindex")==te)})(e.createElement("template"))||(te="_dt: "+te.slice(1,-1)+";");var ne="\x3c!--"+te+"--\x3e",re=8,ie=11,oe=1,ae=3,ue=/^(?:style|textarea)$/i,ce=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,le=" \\f\\n\\r\\t",se="[ "+le+"]+[^  \\f\\n\\r\\t\\/>\"'=]+",fe="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",de="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|[^  \\f\\n\\r\\t\\/>\"'=]+))?)",he=new RegExp(fe+se+de+"+)([ "+le+"]*/?>)","g"),ve=new RegExp(fe+se+de+"*)([ "+le+"]*/>)","g"),pe=new RegExp("("+se+"\\s*=\\s*)(['\"]?)"+ne+"\\2","gi"),ge=new x,me=new x,be=function(){function e(e,t,n){return t+"-"+n.toLowerCase()}function t(e,t){var n;return t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style")),n.value="",e.setAttributeNode(n),r(n,!0)}function n(t){var n,r=[];for(n in t)r.push(n.replace(o,e),":",t[n],";");return r.join("")}function r(e,t){var r,o;return function(a){var u,c,l,s;switch(typeof a){case"object":if(a){if("object"===r){if(!t&&o!==a)for(c in o)c in a||(e[c]="")}else t?e.value="":e.cssText="";u=t?{}:e;for(c in a)s=a[c],l="number"!=typeof s||i.test(c)?s:s+"px",!t&&/^--/.test(c)?u.setProperty(c,l):u[c]=l;r="object",t?e.value=n(o=u):o=a;break}default:o!=a&&(r="string",o=a,t?e.value=a||"":e.cssText=a||"")}}}var i=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,o=/([^A-Z])([A-Z]+)/g;return function(e,n){return"ownerSVGElement"in e?t(e,n):r(e.style,!1)}}(),we=e.defaultView,ye="ownerSVGElement",Ne=function(){var t=!1,n=function(r){if(!("raw"in r)||r.propertyIsEnumerable("raw")||!Object.isFrozen(r.raw)||/Firefox\/(\d+)/.test((e.defaultView.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var i={};return(n=function(e){var t="raw"+e.join("raw");return i[t]||(i[t]=e)})(r)}return t=!0,r};return function(e){return t?e:n(e)}}(),xe=function(e){return e.ownerDocument||e},Ee=function(e){return xe(e).createDocumentFragment()},ke=function(e,t){return xe(e).createTextNode(t)},Ce="append"in Ee(e)?function(e,t){e.append.apply(e,t)}:function(e,t){for(var n=t.length,r=0;r<n;r++)e.appendChild(t[r])},Me=function(e){for(var t=[Ne(e)],n=1,r=arguments.length;n<r;n++)t[n]=arguments[n];return t},Ae=[].slice;g.prototype.valueOf=function(e){var t=null==this._;return t&&(this._=Ee(this.first)),(t||e)&&Ce(this._,this.childNodes),this._},g.prototype.remove=function(){this._=null;var e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{var n=xe(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents()}return e};var Se=/*! (c) Andrea Giammarchi */
function(e){function t(e){function t(e){s=new l;for(var t,i=e.length,o=0;o<i;o++)t=e[o],a(t.removedNodes,r,n),a(t.addedNodes,n,r);s=null}function a(e,t,n){for(var r,o=new i(t),a=e.length,u=0;u<a;1===(r=e[u++]).nodeType&&c(r,o,t,n));}function c(e,t,n,r){u.has(e)&&!s[n].has(e)&&(s[r]["delete"](e),s[n].add(e),e.dispatchEvent(t));for(var i=e.children||[],o=i.length,a=0;a<o;c(i[a++],t,n,r));}function l(){this[n]=new o,this[r]=new o}var s=null;try{new MutationObserver(t).observe(e,{subtree:!0,childList:!0})}catch(v){var f=0,d=[],h=function(e){d.push(e),clearTimeout(f),f=setTimeout(function(){t(d.splice(f=0,d.length))},0)};e.addEventListener("DOMNodeRemoved",function(e){h({addedNodes:[],removedNodes:[e.target]})},!0),e.addEventListener("DOMNodeInserted",function(e){h({addedNodes:[e.target],removedNodes:[]})},!0)}}var n="connected",r="dis"+n,i=e.Event,o=e.WeakSet,a=!0,u=new o;return function(e){return a&&(a=!a,t(e.ownerDocument)),u.add(e),e}}({Event:z,WeakSet:k}),Te=function(e){return{html:e}},_e=function Ze(e,t){return"ELEMENT_NODE"in e?e:e.constructor===g?1/t<0?t?e.remove():e.last:t?e.valueOf(!0):e.first:Ze(e.render(),t)},je=function(e){return"ELEMENT_NODE"in e||e instanceof g||e instanceof t},Le=function(e,t){t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(Te).then(t):Promise.resolve(K.invoke(e,t)).then(t)},Oe=function(e){return null!=e&&"then"in e},Pe=/^(?:form|list)$/i;m.prototype={attribute:function(e,t,n){var r=ye in e,i=void 0;if("style"===t)return be(e,n,r);if(/^on/.test(t)){var o=t.slice(2);return"connected"===o||"disconnected"===o?Se(e):t.toLowerCase()in e&&(o=o.toLowerCase()),function(t){i!==t&&(i&&e.removeEventListener(o,i,!1),i=t,t&&e.addEventListener(o,t,!1))}}if("data"===t||!r&&t in e&&!Pe.test(t))return function(n){i!==n&&(i=n,e[t]!==n&&(e[t]=n,null==n&&e.removeAttribute(t)))};if(t in K.attributes)return function(n){i=K.attributes[t](e,n),e.setAttribute(t,null==i?"":i)};var a=!1,u=n.cloneNode(!0);return function(t){i!==t&&(i=t,u.value!==t&&(null==t?(a&&(a=!1,e.removeAttributeNode(u)),u.value=t):(u.value=t,a||(a=!0,e.setAttributeNode(u)))))}},any:function(e,t){var n={node:_e,before:e},r=ye in e?"svg":"html",i=!1,o=void 0;return function a(u){switch(typeof u){case"string":case"number":case"boolean":i?o!==u&&(o=u,t[0].textContent=u):(i=!0,o=u,t=F(e.parentNode,t,[ke(e,u)],n));break;case"function":a(u(e));break;case"object":case"undefined":if(null==u){i=!1,t=F(e.parentNode,t,[],n);break}default:if(i=!1,o=u,Q(u))if(0===u.length)t.length&&(t=F(e.parentNode,t,[],n));else switch(typeof u[0]){case"string":case"number":case"boolean":a({html:u});break;case"object":if(Q(u[0])&&(u=u.concat.apply([],u)),Oe(u[0])){Promise.all(u).then(a);break}default:t=F(e.parentNode,t,u,n)}else je(u)?t=F(e.parentNode,t,11===u.nodeType?Ae.call(u.childNodes):[u],n):Oe(u)?u.then(a):"placeholder"in u?Le(u,a):"text"in u?a(String(u.text)):"any"in u?a(u.any):"html"in u?t=F(e.parentNode,t,Ae.call(U([].concat(u.html).join(""),r).childNodes),n):a("length"in u?Ae.call(u):K.invoke(u,a))}}},text:function(e){var t=void 0;return function n(r){if(t!==r){t=r;var i=typeof r;"object"===i&&r?Oe(r)?r.then(n):"placeholder"in r?Le(r,n):n("text"in r?String(r.text):"any"in r?r.any:"html"in r?[].concat(r.html).join(""):"length"in r?Ae.call(r).join(""):K.invoke(r,n)):"function"===i?n(r(e)):e.textContent=null==r?"":r}}}};var We=new x,$e=function(e,t){return null==e?De(t||"html"):He(e,t||"html")},De=function(e){var t=void 0,n=void 0,r=void 0;return function(){var i=Me.apply(null,arguments);return r!==i[0]?(r=i[0],n=new m(e),t=Fe(n.apply(n,i))):n.apply(n,i),t}},He=function(e,t){var n=t.indexOf(":"),r=We.get(e),i=t;return-1<n&&(i=t.slice(n+1),t=t.slice(0,n)||"html"),r||We.set(e,r={}),r[i]||(r[i]=De(t))},Fe=function(e){for(var t=e.childNodes,n=t.length,r=[],i=0;i<n;i++){var o=t[i];1!==o.nodeType&&0===ee.call(o.textContent).length||r.push(o)}return 1===r.length?r[0]:new g(r)},Re=new x,ze=function(e){return b.bind(e)},Be=K.define,Ve=m.prototype;return y.Component=t,y.bind=ze,y.define=Be,y.diff=F,y.hyper=y,y.observe=Se,y.tagger=Ve,y.wire=$e,y._={global:we,WeakMap:x,WeakSet:k},function(e){var n=new x,r=Object.create,i=function(e,t,n){return e.set(t,n),n},o=function(e,t,n,o){var u=t.get(e)||a(e,t);switch(typeof o){case"object":case"function":var c=u.w||(u.w=new x);return c.get(o)||i(c,o,new e(n));default:var l=u.p||(u.p=r(null));return l[o]||(l[o]=new e(n))}},a=function(e,t){var n={w:null,p:null};return t.set(e,n),n},u=function(e){var t=new M;return n.set(e,t),t};Object.defineProperties(t,{"for":{configurable:!0,value:function(e,t){return o(this,n.get(e)||u(e),e,null==t?"default":t)}}}),Object.defineProperties(t.prototype,{handleEvent:{value:function(e){var t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:B("html",e),svg:B("svg",e),state:B("state",function(){return this.defaultState}),defaultState:{get:function(){return{}}},dispatch:{value:function(e,t){var n=this._wire$;if(n){var r=new z(e,{bubbles:!0,cancelable:!0,detail:t});return r.component=this,(n.dispatchEvent?n:n.childNodes[0]).dispatchEvent(r)}return!1}},setState:{value:function(e,t){var n=this.state,r="function"==typeof e?e.call(this,n):e;for(var i in r)n[i]=r[i];return!1!==t&&this.render(),this}}})}(De),y}(document);
