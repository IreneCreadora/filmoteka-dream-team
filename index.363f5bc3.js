!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r),r.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return a.default(e)};var n,a=(n=r("8NIkP"))&&n.__esModule?n:{default:n}})),r.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}})),r.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),r.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),r.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return a.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a.default(e,t)};var n,a=(n=r("8NIkP"))&&n.__esModule?n:{default:n}}));var i=r("j1lrD"),o=r("bpxeT"),c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e){return s.default(e)||l.default(e)||d.default(e)||u.default()};var s=f(r("kMC0W")),l=f(r("7AJDX")),u=f(r("8CtQK")),d=f(r("auk6i"));function f(e){return e&&e.__esModule?e:{default:e}}var p=r("2TvXO"),g=r("dIxxU"),m=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],v=r("4Nugj"),y=r("aLMAk");r("aLMAk");function _(e,t){return t.map((function(t){return e.find((function(e){return e.id===t})).name})).reduce((function(e,t,n,a){return a.length>2?"".concat(a[0],", ").concat(a[1],", Other"):a.join(", ")}),"")}o=r("bpxeT"),p=r("2TvXO"),g=r("dIxxU"),r("aLMAk"),y=r("aLMAk");var h=r("84yK5"),b="/search/movie",x="en-US";function M(e,t){return w.apply(this,arguments)}function w(){return(w=e(o)(e(p).mark((function t(n,a){var r;return e(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.default.get("".concat(b,"?api_key=").concat(y.KEY_API,"&query=").concat(n,"&page=").concat(a,"&language=").concat(x));case 2:return L((r=e.sent.data).page,r.total_pages),e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function j(e,t){var n=e.map((function(e){var t=e.id,n=e.poster_path,a=e.original_title,r=e.release_date,i=e.genre_ids,o=e.vote_average,c=_(m,i);return'<li class="frame" data-id="'.concat(t,'">\n         <div class="frame__wrap">\n            <p class="frame__raiting">').concat(o.toFixed(1)?o.toFixed(1):"---",'</p>\n           <button type="button" class="watch-trailer-btn-gallery is-hidden" data-id=').concat(t,' >Watch the trailer</button>\n          <img\n            data-id="').concat(t,'"\n            src="').concat(n?y.IMAGE_URL+n:"https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-",'"\n            alt="').concat(a||"Title coming soon",'"\n            class="frame__poster"\n            loading="lazy"\n          />\n            </div>\n          <div class="frame__info " data-id=').concat(t,'>\n            <p class="frame__title" data-id=').concat(t,">").concat(a||"Title coming soon",'</p>\n            <p class="frame__genres" data-id=').concat(t,">").concat(c||"---",'</p>\n            <p class="frame__year" data-id=').concat(t,">").concat(new Date(r).getFullYear()?new Date(r).getFullYear():"---","</p>\n         \n          </div>\n          </li>")})).join("");t.insertAdjacentHTML("beforeend",n),document.querySelectorAll(".watch-trailer-btn-gallery").forEach((function(e){(0,h.renderTrailerBtn)(e.dataset.id,e)}))}g.default.defaults.baseURL="https://api.themoviedb.org/3";v=r("4Nugj"),h=r("84yK5");var k=document.querySelector(".pagination-library-container");k.addEventListener("click",(function(e){var t=e.target.textContent,n=v.refs.formSearch.searchQuery.value,a=JSON.stringify(n);if(localStorage.setItem("searchValue",a),"LI"!==e.target.nodeName)return;if("Next >"===e.target.textContent)return n?void M(n,T+=1).then((function(e){v.refs.galleryMovies.innerHTML=e.map(O).join(""),(0,h.renderBtn)()})):void S(T+=1).then((function(e){v.refs.galleryMovies.innerHTML=e.map(O).join(""),(0,h.renderBtn)()}));if("< Previous"===e.target.textContent)return n?void M(n,T-=1).then((function(e){v.refs.galleryMovies.innerHTML=e.map(O).join(""),(0,h.renderBtn)()})):void S(T-=1).then((function(e){v.refs.galleryMovies.innerHTML=e.map(O).join(""),(0,h.renderBtn)()}));if("..."===e.target.textContent)return;if(n)return void M(n,t).then((function(e){v.refs.galleryMovies.innerHTML=e.map(O).join(""),(0,h.renderBtn)()}));S(t,T).then((function(e){v.refs.galleryMovies.innerHTML=e.map(O).join(""),(0,h.renderBtn)()}))}));var T=0;function L(e,t){var n="",a=e-2,r=e-1,i=e+1,o=e+2;T=e;var c=JSON.stringify(e);localStorage.setItem("page",c),e>1&&(n+='<li class="pagination-button-arrow-left">< Previous</li>'),e>1&&(n+='<li class="pagination-button">1</li>'),e>4&&(n+='<li class="pagination-button">...</li>'),e>3&&(n+='<li class="pagination-button">'.concat(a,"</li>")),e>2&&(n+='<li class="pagination-button">'.concat(r,"</li>")),n+='<li class="pagination-button"><b class = "pagination--current">'.concat(e,"</b></li>"),t-1>e&&(n+='<li class="pagination-button">'.concat(i,"</li>")),t-2>e&&(n+='<li class="pagination-button">'.concat(o,"</li>")),t-3>e&&(n+='<li class="dots">...</li>'),t>e&&(n+='<li class="pagination-button">'.concat(t,"</li>"),n+='<li class="pagination-button-arrow">Next ></li>'),k.innerHTML=n}h=r("84yK5");var A="/trending/movie/day";function S(e){return I.apply(this,arguments)}function I(){return(I=e(o)(e(p).mark((function t(n){var a;return e(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.default.get("".concat(A,"?api_key=").concat(y.KEY_API,"&page=").concat(n));case 3:return L((a=e.sent.data).page,a.total_pages),e.abrupt("return",a.results);case 8:e.prev=8,e.t0=e.catch(0),console.log("Something wrong with API",e.t0.message);case 11:case"end":return e.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function O(e){var t=e.id,n=e.title,a=e.poster_path,r=e.genre_ids,i=e.release_date,o=e.vote_average,c=_(m,r);return'<li class="frame" data-id="'.concat(t,'">\n         <div class="frame__wrap">\n            <p class="frame__raiting">').concat(o.toFixed(1)?o.toFixed(1):"---",'</p>\n           <button type="button" class="watch-trailer-btn-gallery is-hidden" data-id=').concat(t,' >Watch the trailer</button>\n          <img\n            data-id="').concat(t,'"\n            src="').concat(a?y.IMAGE_URL+a:"https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-",'"\n            alt="').concat(n||"Title coming soon",'"\n            class="frame__poster"\n            loading="lazy"\n          />\n            </div>\n          <div class="frame__info" data-id=').concat(t,'>\n            <p class="frame__title" data-id=').concat(t,">").concat(n||"Title coming soon",'</p>\n            <p class="frame__genres" data-id=').concat(t,">").concat(c||"---",'</p>\n            <p class="frame__year" data-id=').concat(t,">").concat(new Date(i).getFullYear()?new Date(i).getFullYear():"---","</p>\n         \n          </div>\n          </li>")}function P(){return(P=e(o)(e(p).mark((function t(){var n,a;return e(p).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return 1,t.prev=1,t.next=4,S(1);case 4:n=t.sent,a=e(c)(n).map(O).join(""),v.refs.galleryMovies.insertAdjacentHTML("beforeend",a),(0,h.renderBtn)(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.log("Something wrong with API",t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))).apply(this,arguments)}g.default.defaults.baseURL="https://api.themoviedb.org/3",function(){P.apply(this,arguments)}(),r("5Hwq9");o=r("bpxeT"),p=r("2TvXO"),v=r("4Nugj");var C=function(e){e.innerHTML=""};i=r("j1lrD");function E(){return(E=e(o)(e(p).mark((function t(n){var a,r,o,c;return e(p).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),(0,i.spinnerPlay)(),v.refs.notification.textContent="",!(a=n.target.elements.searchQuery.value.trim().toLowerCase())){e.next=21;break}return r=JSON.stringify(a),localStorage.setItem("searchValue",r),o=JSON.stringify(1),localStorage.setItem("page",o),e.prev=9,e.next=12,M(a,1);case 12:(c=e.sent).length?(C(v.refs.galleryMovies),j(c,v.refs.galleryMovies)):N(),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(9),N();case 19:e.next=22;break;case 21:N();case 22:(0,i.spinnerStop)();case 23:case"end":return e.stop()}}),t,null,[[9,16]])})))).apply(this,arguments)}function N(){v.refs.notification.textContent="Search result not successful. Enter the correct movie name and try again."}v.refs.formSearch&&v.refs.formSearch.addEventListener("submit",(function(e){return E.apply(this,arguments)})),r("kBYlI"),r("oquti");var D=r("ghI91");v=r("4Nugj"),h=r("84yK5");(0,i.spinnerPlay)(),window.addEventListener("load",(function(e){(0,i.spinnerStop)()})),window.addEventListener("scroll",D.scrollFunction),v.refs.galleryMovies.addEventListener("click",h.onCliсkBtnWatchGallery)}();
//# sourceMappingURL=index.363f5bc3.js.map
