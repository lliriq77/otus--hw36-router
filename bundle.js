!function(){"use strict";var t=function(){var t=location.pathname;document.getElementById("root").innerHTML="<h2>".concat(t,"</h2>")};window.addEventListener("load",(function(){t()})),window.addEventListener("popstate",(function(n){t()})),document.body.addEventListener("click",(function(n){if(!n.target||n.target.matches("a")){n.preventDefault();var o=n.target&&n.target.getAttribute("href");history.pushState({foo:"bar",url:o},document.title,o),t()}}));var n,o,e,r,a,c=function(t){return function(){for(var n=arguments.length,o=new Array(n),e=0;e<n;e++)o[e]=arguments[e];console.info("".concat(t," args=").concat(JSON.stringify(o))),document.getElementById("root").innerHTML="<h2>".concat(t,"</h2>")}},i=(n=[],o=location.pathname,e=null,r=function(t,n){return t instanceof RegExp&&t.test(n)||"function"==typeof t&&t(n)||"string"==typeof t&&t===n},a=function(t){var n=t.match,a=t.onEnter,c=t.onLeave,i=t.onBeforeEnter,u={currentPath:o,previousPath:e,state:history.state};i&&r(n,o)&&i(),r(n,o)&&a(u),c&&r(n,e)&&c()},{on:function(t,o,e,r){var c=function(){for(var t=function(){return Math.floor(Math.random()*n.length*1e3)},o=function(t){return n.find((function(n){return n.id===t}))},e=t();o(e);)e=t();return e}(),i={id:c,match:t,onEnter:o,onLeave:e,onBeforeEnter:r};return n.push(i),a(i),function(){console.log("removed"),n=n.filter((function(t){return t.id!==c}))}},go:function(t,r){e=o,history.pushState(r,t,t),o=location.pathname,n.forEach(a)}}),u=i.on(/.*/,c("/.*"));i.on("/",(function(){console.log("home")}),u(),(function(){u=i.on(/.*/,c("/.*"))})),i.on((function(t){return"/contacts"===t}),c("/contacts"),console.log("[leaving] /contacts")),i.on("/about",c("/about")),i.on("/about/us",c("/about/us")),document.body.addEventListener("click",(function(t){if(!t.target||t.target.matches("a")){t.preventDefault();var n=t.target.getAttribute("href");i.go(n),u()}})),window.addEventListener("popstate",(function(){t()}))}();