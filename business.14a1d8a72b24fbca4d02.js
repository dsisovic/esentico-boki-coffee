(()=>{var e={228:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}},858:e=>{e.exports=function(e){if(Array.isArray(e))return e}},884:e=>{e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==s.return||s.return()}finally{if(r)throw o}}return n}}},521:e=>{e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},38:(e,t,n)=>{var a=n(858),r=n(884),o=n(379),i=n(521);e.exports=function(e,t){return a(e)||r(e,t)||o(e,t)||i()}},379:(e,t,n)=>{var a=n(228);e.exports=function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}},773:(e,t,n)=>{"use strict";var a=n(575),r=n.n(a),o=n(913),i=n.n(o),s=n(628),l=n(212),c=n(938),u=n(813),d=n(896);new(function(){function e(){r()(this,e),this.mediaQueryCondition="(max-width: 600px)"}return i()(e,[{key:"intializeApp",value:function(){var e=this;this.setCopyrightDate(),this.setEventListeners(),c.Z.setFormEvents(),l.Z.setCoffeeProducts((function(t){return e.renderCoffeeProducts(t)})),d.Z.initGoogleMap()}},{key:"setCopyrightDate",value:function(){s.Z.getSingleElement("#copyright-year").textContent=(new Date).getFullYear()}},{key:"setEventListeners",value:function(){var e=this,t=s.Z.getSingleElement("#contact__form"),n=s.Z.getMultipleElements("[data-tab"),a=s.Z.getSingleElement("#menu-title"),r=s.Z.getSingleElement("#menu-close"),o=s.Z.getSingleElement(".introduction");n.forEach((function(t){t.addEventListener("click",(function(t){return e.onSidebarItemClick(t)})),t.addEventListener("mouseenter",(function(t){return e.onSidebarItemEnterLeave(t,!0)})),t.addEventListener("mouseleave",(function(t){return e.onSidebarItemEnterLeave(t,!1)}))})),t.addEventListener("submit",(function(e){return c.Z.onSubmitForm(e)})),r.addEventListener("click",(function(){return e.onSidebarMenuClose()})),a.addEventListener("click",(function(t){return e.onMenuTitleClick(t)})),o.addEventListener("click",(function(t){return e.onIntroductionWrapperClick(t)})),window.addEventListener("resize",this.onWindowResize.bind(this),!0)}},{key:"onWindowResize",value:function(){var e=s.Z.getSingleElement("#nav"),t=s.Z.getSingleElement("#overlay");if(window.matchMedia(this.mediaQueryCondition).matches){var n="block"===t.style.display;e.style.display=n?"block":"none"}else e.style.display="block"}},{key:"onIntroductionWrapperClick",value:function(e){var t=s.Z.getSingleElement(".header__language--expanded"),n="block"===t.style.display;!e.target.closest(".header__language")&&n&&(t.style.display="none")}},{key:"onMenuTitleClick",value:function(e){var t=e.currentTarget,n=s.Z.getSingleElement("#menu-close");if(n.classList.value.includes("hidden")){var a=s.Z.getSingleElement("#nav"),r=s.Z.getSingleElement("#overlay");s.Z.getMultipleElements(".sidenav__title").forEach((function(e){return e.classList.toggle("sidenav__title--active")})),a.style.display="block",t.style.display="none",r.style.display="block",r.style.height="".concat(document.body.scrollHeight,"px"),n.classList.remove("hidden"),document.body.style.overflow="hidden"}}},{key:"onSidebarMenuClose",value:function(){var e=s.Z.getSingleElement("#overlay"),t=s.Z.getSingleElement("#menu-title"),n=s.Z.getSingleElement("#menu-close");s.Z.getMultipleElements(".sidenav__title").forEach((function(e){return e.classList.toggle("sidenav__title--active")})),this.checkToShowNavigationElement(),t.style.display="block",e.style.display="none",n.classList.add("hidden"),document.body.style.overflow="auto"}},{key:"checkToShowNavigationElement",value:function(){var e=s.Z.getSingleElement("#nav"),t=window.matchMedia(this.mediaQueryCondition).matches?"none":"block";e.style.display=t}},{key:"onSidebarItemEnterLeave",value:function(e,t){var n=e.target.closest("[data-tab]").querySelector(".sidenav__title");n&&(t?n.classList.add("sidenav__title--active"):s.Z.getSingleElement("#menu-close").classList.value.includes("hidden")&&n.classList.remove("sidenav__title--active"))}},{key:"renderCoffeeProducts",value:function(e){var t=s.Z.getSingleElement(".products__container"),n=e.map((function(e){var t=e.picture,n=e.price,a=e.name,r=e.description,o=e.available,i=e.action,s=e.actionText,l=o?"product__card--footer-available":"product__card--footer-unavailable",c=o?"product__card--price-available":"product__card--price-unavailable",u=i?'<span class="product__card--action">'.concat(s,"</span>"):"";return'\n                    <div class="product__card">\n                        <img data-src="assets/img/coffee_sack.png" alt="coffee-sack" class="product__card--img-sack">\n                            <span>\n                                <img data-src="'.concat(t,'" alt="').concat(a,'" class="product__card--img-inside">\n                            </span>\n                        <div class="product__card--text">\n                            <p>').concat(a,"</p>\n                            <span>").concat(r,'</span>\n                        </div>\n                        <div class="product__card--footer">\n                            <span class="').concat(l,'">').concat(o?"available":"not available",'</span>\n                            <div>\n                                <span class="product__card--price ').concat(c,'">\n                                    ').concat(n,' \n                                    <span class="product__card--unit">RSD/kg</span>\n                                </span>\n                            </div>\n                            ').concat(u,"\n                        </div>\n                    </div>\n            ")})).join(""),a=document.createRange().createContextualFragment(n);t.appendChild(a),this.initIntersectionObserver(window.matchMedia(this.mediaQueryCondition)?0:400),u.Z.lazyLoadImages()}},{key:"setLocalstorageItem",value:function(e,t){localStorage.setItem(e,t)}},{key:"onSidebarItemClick",value:function(e){var t=e.currentTarget.dataset.section;"block"===s.Z.getSingleElement("#overlay").style.display&&this.onSidebarMenuClose();var n=s.Z.getSingleElement("#".concat(t)).getBoundingClientRect().top+window.scrollY;window.scrollTo({top:n,behavior:"smooth"})}},{key:"getBeansOffset",value:function(e){var t=Number.parseInt(e,10);return"calc(".concat(33.3*(t-1),"% - 7px)")}},{key:"getLocalstorageItem",value:function(e){return localStorage.getItem(e)}},{key:"initIntersectionObserver",value:function(e){var t={root:null,rootMargin:"0px 0px -".concat(e,"px 0px"),threshold:.1},n=new IntersectionObserver(this.onIntersectingSection.bind(this),t),a=s.Z.getSingleElement("#home"),r=s.Z.getSingleElement("#beans"),o=s.Z.getSingleElement("#contact");[a,r,s.Z.getSingleElement("#products"),o].forEach((function(e){return n.observe(e)}))}},{key:"onIntersectingSection",value:function(e){var t=this;e.forEach((function(e){if(e.isIntersecting){var n=e.target,a=s.Z.getSingleElement("#slider__beans"),r=t.getBeansOffset(n.dataset.id);a.style.top=r}}))}},{key:"fetchMainImage",value:function(){s.Z.getSingleElement("#introduction__image").src="assets/img/intro-coffee.jpg"}}]),e}())},938:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(38),r=n.n(a),o=n(575),i=n.n(o),s=n(913),l=n.n(s),c=n(628),u=n(212);const d=new(function(){function e(){i()(this,e),this.formValid=!1}return l()(e,[{key:"setFormEvents",value:function(){var e=this,t=c.Z.getSingleElement("#contact-message"),n=c.Z.getSingleElement("#contact-name"),a=c.Z.getSingleElement("#contact-email");t.addEventListener("input",(function(){return e.handleFormElementChange()})),n.addEventListener("input",(function(){return e.handleFormElementChange()})),a.addEventListener("input",(function(){return e.handleFormElementChange()}))}},{key:"handleFormElementChange",value:function(){var e=this.getFormElementValues(),t=r()(e,3),n=t[0],a=t[1],o=t[2],i=c.Z.getSingleElement("#contact-message-name"),s=c.Z.getSingleElement("#contact-message-email"),l=c.Z.getSingleElement("#contact-message-textarea"),u=this.validateFormElement(a.trim(),i,"Please enter contact name","Contact name shouldn't have more than 50 characters",a.length>50),d=this.validateFormElement(o.trim(),s,"Please enter valid email address","Email should have valid format",!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(o)),m=this.validateFormElement(n.trim(),l,"Please enter some message","Message shouldn't contain more than 2000 characters",n.length>2e3);this.setFormValidity(u&&d&&m)}},{key:"validateFormElement",value:function(e,t,n,a,r){return 0===e.length?(this.showFormElementErrorMessage(t,n),!1):r?(this.showFormElementErrorMessage(t,a),!1):(this.showFormElementErrorMessage(t,""),!0)}},{key:"showFormElementErrorMessage",value:function(e,t){e.textContent=t}},{key:"onSubmitForm",value:function(e){var t=this;if(e.preventDefault(),this.formValid){var n=this.getFormElementValues(),a=r()(n,3),o=a[0],i=a[1],s=a[2];u.Z.sendEmail(i,s,o,(function(){return t.clearForm()}))}}},{key:"getFormElementValues",value:function(){return[c.Z.getSingleElement("#contact-message").value,c.Z.getSingleElement("#contact-name").value,c.Z.getSingleElement("#contact-email").value]}},{key:"clearForm",value:function(){c.Z.getSingleElement("#contact-name").value="",c.Z.getSingleElement("#contact-email").value="",c.Z.getSingleElement("#contact-message").value="",this.setFormValidity(!1)}},{key:"setFormValidity",value:function(e){var t=c.Z.getSingleElement("#submit-message");this.formValid=e;var n=this.formValid?1:.4;t.style.opacity=n}}]),e}())},896:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(575),r=n.n(a),o=n(913),i=n.n(o),s=n(628);const l=new(function(){function e(){r()(this,e),this.googleMapsAPIkey="AIzaSyChHo9jCCaY2jumTfXZg35NBvvNY0piHXk"}return i()(e,[{key:"initGoogleMap",value:function(){var e=document.createElement("script");document.head.appendChild(e),e.addEventListener("load",(function(){var e={lat:43.749247,lng:19.718955},t=new google.maps.Map(s.Z.getSingleElement("#map"),{center:e,zoom:19,zoomControl:!0,zoomControlOptions:!0,clickableIcons:!0,disableDoubleClickZoom:!1,mapTypeId:google.maps.MapTypeId.ROADMAP});new google.maps.Marker({position:e,map:t,title:"Esentico Boki",icon:"assets/logo/logo__circle__small.png"})}))}}]),e}())},212:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(757),r=n.n(a),o=n(926),i=n.n(o),s=n(575),l=n.n(s),c=n(913),u=n.n(c);const d=function(){function e(){l()(this,e)}var t,n,a;return u()(e,null,[{key:"setCoffeeProducts",value:(a=i()(r().mark((function e(t){var n,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("assets/products/products.json");case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,t(a);case 7:case"end":return e.stop()}}),e)}))),function(e){return a.apply(this,arguments)})},{key:"sendEmail",value:(n=i()(r().mark((function e(t,n,a,o){var i,s,l,c;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Email.send({Host:"smtp.gmail.com",Username:"siskoftn@gmail.com",Password:"mcreotjruuzliyvi",To:"siskoftn@gmail.com",From:n,Subject:t,Body:a});case 3:return i=e.sent,e.next=6,i;case 6:s=e.sent,l=s.includes("OK"),c=l?"Message sent successfully":s,l&&o(),alert(c),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),alert("Error sending the message. Please try again");case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))),function(e,t,a,r){return n.apply(this,arguments)})},{key:"fetchLanguageConfiguration",value:(t=i()(r().mark((function e(t,n){var a,o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("assets/translations/".concat(t,".json"));case 2:return a=e.sent,e.next=5,a.json();case 5:o=e.sent,n(o);case 7:case"end":return e.stop()}}),e)}))),function(e,n){return t.apply(this,arguments)})}]),e}()},813:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(575),r=n.n(a),o=n(913),i=n.n(o),s=n(628);const l=new(function(){function e(){r()(this,e)}return i()(e,[{key:"lazyLoadImages",value:function(){var e=s.Z.getMultipleElements("[data-src]"),t=new IntersectionObserver(this.onIntersectImage.bind(this),{root:null,rootMargin:"0px 0px 0px 150px",threshold:.5});e.forEach((function(e){return t.observe(e)}))}},{key:"onIntersectImage",value:function(e,t){var n=this;e.forEach((function(e){e.isIntersecting&&(n.preloadImage(e.target),t.unobserve(e.target))}))}},{key:"preloadImage",value:function(e){var t=e.getAttribute("data-src");t&&(e.src=t,e.style.visibility="visible")}}]),e}())},628:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(575),r=n.n(a),o=n(913),i=n.n(o);const s=function(){function e(){r()(this,e)}return i()(e,null,[{key:"getSingleElement",value:function(e){return document.querySelector(e)}},{key:"getMultipleElements",value:function(e){return document.querySelectorAll(e)}}]),e}()}},t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.m=e,n.x=e=>{},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={68:0,680:0},t=[[773,855]],a=e=>{},r=(r,o)=>{for(var i,s,[l,c,u,d]=o,m=0,g=[];m<l.length;m++)s=l[m],n.o(e,s)&&e[s]&&g.push(e[s][0]),e[s]=0;for(i in c)n.o(c,i)&&(n.m[i]=c[i]);for(u&&u(n),r&&r(o);g.length;)g.shift()();return d&&t.push.apply(t,d),a()},o=self.webpackChunkesentico_boki_coffee=self.webpackChunkesentico_boki_coffee||[];function i(){for(var a,r=0;r<t.length;r++){for(var o=t[r],i=!0,s=1;s<o.length;s++){var l=o[s];0!==e[l]&&(i=!1)}i&&(t.splice(r--,1),a=n(n.s=o[0]))}return 0===t.length&&(n.x(),n.x=e=>{}),a}o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o));var s=n.x;n.x=()=>(n.x=s||(e=>{}),(a=i)())})(),n.x()})();