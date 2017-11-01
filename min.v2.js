var hyperHTML=function(e,t){function n(t){return e[t]||r(t)}function r(r){var i={},o={exports:i};return t[r].call(i,window,n,o,i),e[r]=o.exports}var i=n(0);return i.__esModule?i["default"]:i}([],[function(e,t,n,r){"use strict";t(1),t(3),t(5);var i=function(){};Object.defineProperty(r,"__esModule",{value:!0})["default"]=i},function(e,t,n,r){"use strict";function i(e,t){return this.node=e,this.childNodes=t,t.become=o,a.aura(this,t)}function o(e){var t=0,n=this.length;if(e.length!==n)a(this,e,i.MAX_LIST_SIZE);else for(;t<n--;t++)if(this[n]!==e[n]||this[t]!==e[t])return void a(this,e,i.MAX_LIST_SIZE)}var a=function(e){return e.__esModule?e["default"]:e}(t(2));Object.defineProperty(r,"__esModule",{value:!0})["default"]=i,i.MAX_LIST_SIZE=1e3,i.prototype.splice=function(){for(var e,t=this.node,n=this.childNodes,r=n[(arguments.length<=0?undefined:arguments[0])+((arguments.length<=1?undefined:arguments[1])||0)]||t,i=n.splice.apply(n,arguments),o=t.parentNode,a=o.ownerDocument,u=0,c=i.length;u<c;u++)e=i[u],n.indexOf(e)<0&&o.removeChild(e);for(var l,s=2,d=arguments.length;s<d;o.insertBefore(l,r))if(d-s==1){var f;f=s++,l=arguments.length<=f?undefined:arguments[f]}else for(l=a.createDocumentFragment();s<d;){var v;l.appendChild((v=s++,arguments.length<=v?undefined:arguments[v]))}return i}},function(e,t,n,r){"use strict";/*! Copyright (c) 2017, Andrea Giammarchi, @WebReflection */
var i=e.Int32Array||Array,o=function(e,t,n){var r=e.length,i=t.length,o=(n||Infinity)<Math.sqrt((r||1)*(i||1));return r<1||o?void((i||o)&&e.splice.apply(e,[0,r].concat(t))):i<1?void e.splice(0):void s(e,l(e,t,u(e,t)))},a=function(e,t){var n=t.splice,r=function i(){t.splice=n;var r=e.splice.apply(e,arguments);return t.splice=i,r};return t.splice=r,t},u=function(e,t){var n=e.length+1,r=t.length+1,o=n*r,a=new i(o),u=0,c=0,l=0,s=0,d=0,f=0,v=void 0,h=void 0,p=void 0;for(a[0]=0;++u<r;)a[u]=u;for(;++c<n;){for(l=u=0,f=d,d=c*r,a[d+u]=c;++u<r;)v=a[f+u]+1,h=a[d+l]+1,p=a[f+l]+(e[s]==t[l]?0:1),a[d+u]=v<h?v<p?v:p:h<p?h:p,++l;s=c}return a},c=function(e,t,n,r,i,o){e.unshift({type:t,x:n,y:r,count:i,items:o})},l=function(e,t,n){for(var r=[],i=e.length+1,o=t.length+1,a=i-1,u=o-1,l=void 0,s=void 0,d=void 0,f=void 0,v=void 0,h=void 0;u&&a;)v=a*o+u,h=v-o,l=n[v],s=n[h],d=n[v-1],f=n[h-1],f<=d&&f<=s&&f<=l?(u--,a--,f<l&&c(r,"sub",u,a,1,[t[u]])):d<=s&&d<=l?(u--,c(r,"ins",u,a,0,[t[u]])):(a--,c(r,"del",u,a,1,[]));for(;u--;)c(r,"ins",u,a,0,[t[u]]);for(;a--;)c(r,"del",u,a,1,[]);return r},s=function(e,t){var n=t.length,r=0,i=1,o=void 0,a=void 0,u=void 0;if(n){for(u=a=t[0];i<n;)o=t[i++],a.type===o.type&&o.x-a.x<=1&&o.y-a.y<=1?(u.count+=o.count,u.items=u.items.concat(o.items)):(e.splice.apply(e,[u.y+r,u.count].concat(u.items)),r+="ins"===u.type?u.items.length:"del"===u.type?-u.count:0,u=o),a=o;e.splice.apply(e,[u.y+r,u.count].concat(u.items))}};o.aura=a,Object.defineProperty(r,"__esModule",{value:!0})["default"]=o,r.aura=a,r.majinbuu=o},function(e,t,n,r){"use strict";function i(){}var o=function(e){return e.__esModule?e["default"]:e}(t(4));Object.defineProperty(r,"__esModule",{value:!0})["default"]=i;var a=function(e,t){var n="_"+e+"$";return{get:function(){return this[n]||(this[e]=t.call(this,e))},set:function(e){Object.defineProperty(this,n,{configurable:!0,value:e})}}};Object.defineProperties(i.prototype,{handleEvent:{value:function(e){var t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:a("html",o.content),svg:a("svg",o.content),state:a("state",function(){return this.defaultState}),defaultState:{get:function(){return{}}},setState:{value:function(e){var t=this.state,n="function"==typeof e?e.call(this,t):e;for(var r in n)t[r]=n[r];this.render()}}})},function(e,t,n,r){"use strict";var i={};Object.defineProperty(r,"__esModule",{value:!0})["default"]=i},function(e,t,n,r){"use strict";function i(e,t,n){return{type:e,name:n,path:f(t)}}var o=t(6),a=o.ATTRIBUTE_NODE,u=o.COMMENT_NODE,c=o.DOCUMENT_FRAGMENT_NODE,l=o.ELEMENT_NODE,s=t(7),d=s.children,f=function(e){var t=[],n=void 0;switch(e.nodeType){case l:case c:n=e;break;case u:n=e.parentNode,t.unshift("childNodes",t.indexOf.call(n.childNodes,e));break;case a:default:n=e.ownerElement,t.unshift("attributes",e.name)}for(e=n;n=n.parentNode;e=n)t.unshift("children",t.indexOf.call(d(n),e));return t};Object.defineProperty(r,"__esModule",{value:!0})["default"]=i},function(e,t,n,r){"use strict";r.ELEMENT_NODE=1;r.ATTRIBUTE_NODE=2;r.TEXT_NODE=3;r.COMMENT_NODE=8;r.DOCUMENT_FRAGMENT_NODE=11;r.OWNER_SVG_ELEMENT="ownerSVGElement";r.SVG_NAMESPACE="http://www.w3.org/2000/svg";r.CONNECTED="connected";r.DISCONNECTED="disconnected";var i=/^style$/i;r.SHOULD_USE_ATTRIBUTE=i;var o=/^style|textarea$/i;r.SHOULD_USE_TEXT_CONTENT=o;r.EXPANDO="_hyper: ";var a="_hyper: "+(Math.random()*new Date|0)+";";r.UID=a;var u="\x3c!--"+a+"--\x3e";r.UIDC=u},function(e,t,n,r){"use strict";var i=t(6),o=i.ELEMENT_NODE,a=i.SVG_NAMESPACE,u=i.UID,c=i.UIDC,l=t(8),s=l.hasAppend,d=l.hasChildren,f=l.hasContent,v=t(9),h=v.create,p=v.doc,E=v.fragment,g=[].slice,_=s?function(e,t){e.append.apply(e,t)}:function(e,t){for(var n=t.length,r=0;r<n;r++)e.appendChild(t[r])};r.append=_;var N=d?function(e){return e.children}:function(e){for(var t=[],n=e.childNodes,r=n.length,i=0,a=0;a<r;a++){var u=n[a];u.nodeType===o&&(t[i++]=u)}return t};r.children=N;var m=function(e){return e.replace(y,O)};r.cleanAttributes=m;var T="[^\\S]+[^ \\f\\n\\r\\t\\/>\"'=]+",y=new RegExp("(<[a-z]+[a-z0-9:_-]*)((?:"+T+"(?:=(?:'.*?'|\".*?\"|<.+?>|\\S+))?)+)([^\\S]*/?>)","gi"),M=new RegExp("("+T+"=)(['\"]?)"+c+"\\2","gi"),O=function(e,t,n,r){return t+n.replace(M,D)+r},D=function(e,t,n){return t+(n||'"')+u+(n||'"')},S=d?function(e,t){for(var n=t.length,r=0;r<n;r++)e=e[t[r++]][t[r]];return e}:function(e,t){for(var n=t.length,r=0;r<n;r++){var i=t[r++];e="children"===i?N(e)[t[r]]:e[i][t[r]]}return e};r.node=S;var C=function(e){return b(e)};r.unique=C;var b=function(t){if(t.propertyIsEnumerable("raw")||/Firefox\/(\d+)/.test((e.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var n={};b=function(e){var t="_"+e.join(u);return n[t]||(n[t]=e)}}else b=function(e){return e};return b(t)},A=f?function(e,t){var n=h(e,"template");return n.innerHTML=t,n.content}:function(e,t){var n=h(e,"template"),r=E(e);if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var i=RegExp.$1;n.innerHTML="<table>"+t+"</table>",_(r,g.call(n.querySelectorAll(i)))}else n.innerHTML=t,_(r,g.call(n.childNodes));return r};r.HTMLFragment=A;var x=f?function(e,t){var n=E(e),r=p(e).createElementNS(a,"svg");return r.innerHTML=t,_(n,g.call(r.childNodes)),n}:function(e,t){var n=E(e),r=h(e,"div");return r.innerHTML='<svg xmlns="'+a+'">'+t+"</svg>",_(n,g.call(r.firstChild.childNodes)),n};r.SVGFragment=x},function(e,t,n,r){"use strict";var i=t(9),o=i.create,a=i.fragment,u=i.text,c=a(document),l="append"in c;r.hasAppend=l;var s="children"in c;r.hasChildren=s;var d="content"in o(document,"template");r.hasContent=d;var f=o(document,"p");f.innerHTML='<i data-i="" class=""></i>';var v=/class/i.test(f.firstChild.attributes[0].name);r.hasDoomedAttributes=v,c.appendChild(u(c,"g")),c.appendChild(u(c,""));var h=1===c.cloneNode(!0).childNodes.length;r.hasDoomedCloneNode=h;var p="importNode"in document;r.hasImportNode=p},function(e,t,n,r){"use strict";var i=function(e,t){return o(e).createElement(t)};r.create=i;var o=function(e){return e.ownerDocument||e};r.doc=o;var a=function(e){return o(e).createDocumentFragment()};r.fragment=a;var u=function(e,t){return o(e).createTextNode(t)};r.text=u}]);