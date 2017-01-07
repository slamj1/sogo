/**
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.ResizeSensor=t()}(this,function(){function e(e,t){var i=Object.prototype.toString.call(e),n="[object Array]"===i||"[object NodeList]"===i||"[object HTMLCollection]"===i||"[object Object]"===i||"undefined"!=typeof jQuery&&e instanceof jQuery||"undefined"!=typeof Elements&&e instanceof Elements,o=0,s=e.length;if(n)for(;s>o;o++)t(e[o]);else t(e)}if("undefined"==typeof window)return null;var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(e){return window.setTimeout(e,20)},i=function(n,o){function s(){var e=[];this.add=function(t){e.push(t)};var t,i;this.call=function(){for(t=0,i=e.length;i>t;t++)e[t].call()},this.remove=function(n){var o=[];for(t=0,i=e.length;i>t;t++)e[t]!==n&&o.push(e[t]);e=o},this.length=function(){return e.length}}function r(e,t){return e.currentStyle?e.currentStyle[t]:window.getComputedStyle?window.getComputedStyle(e,null).getPropertyValue(t):e.style[t]}function d(e,i){if(e.resizedAttached){if(e.resizedAttached)return void e.resizedAttached.add(i)}else e.resizedAttached=new s,e.resizedAttached.add(i);e.resizeSensor=document.createElement("div"),e.resizeSensor.className="resize-sensor";var n="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",o="position: absolute; left: 0; top: 0; transition: 0s;";e.resizeSensor.style.cssText=n,e.resizeSensor.innerHTML='<div class="resize-sensor-expand" style="'+n+'"><div style="'+o+'"></div></div><div class="resize-sensor-shrink" style="'+n+'"><div style="'+o+' width: 200%; height: 200%"></div></div>',e.appendChild(e.resizeSensor),"static"==r(e,"position")&&(e.style.position="relative");var d,c,l,a,f=e.resizeSensor.childNodes[0],u=f.childNodes[0],h=e.resizeSensor.childNodes[1],p=e.offsetWidth,z=e.offsetHeight,v=function(){u.style.width="100000px",u.style.height="100000px",f.scrollLeft=1e5,f.scrollTop=1e5,h.scrollLeft=1e5,h.scrollTop=1e5};v();var y=function(){c=0,d&&(p=l,z=a,e.resizedAttached&&e.resizedAttached.call())},m=function(){l=e.offsetWidth,a=e.offsetHeight,d=l!=p||a!=z,d&&!c&&(c=t(y)),v()},w=function(e,t,i){e.attachEvent?e.attachEvent("on"+t,i):e.addEventListener(t,i)};w(f,"scroll",m),w(h,"scroll",m)}e(n,function(e){d(e,o)}),this.detach=function(e){i.detach(n,e)}};return i.detach=function(t,i){e(t,function(e){e.resizedAttached&&"function"==typeof i&&(e.resizedAttached.remove(i),e.resizedAttached.length())||e.resizeSensor&&(e.contains(e.resizeSensor)&&e.removeChild(e.resizeSensor),delete e.resizeSensor,delete e.resizedAttached)})},i});
