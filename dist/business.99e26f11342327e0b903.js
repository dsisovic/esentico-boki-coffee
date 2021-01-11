!function(){var e={228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}},858:function(e){e.exports=function(e){if(Array.isArray(e))return e}},884:function(e){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,r=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(i=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,o=e}finally{try{i||null==l.return||l.return()}finally{if(r)throw o}}return n}}},521:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},38:function(e,t,n){var i=n(858),r=n(884),o=n(379),a=n(521);e.exports=function(e,t){return i(e)||r(e,t)||o(e,t)||a()}},379:function(e,t,n){var i=n(228);e.exports=function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}},773:function(e,t,n){"use strict";var i=n(575),r=n.n(i),o=n(913),a=n.n(o),l=n(628),s=n(938),c=n(813),u=n(896);new(function(){function e(){r()(this,e),this.mediaQueryCondition="(max-width: 600px)"}return a()(e,[{key:"intializeApp",value:function(){this.setCopyrightDate(),this.setEventListeners(),this.setObserverAndLazyLoadImages(),s.Z.setFormEvents(),s.Z.handleFormElementChange(),u.Z.initGoogleMap()}},{key:"setObserverAndLazyLoadImages",value:function(){c.Z.lazyLoadImages(),this.initIntersectionObserver()}},{key:"setCopyrightDate",value:function(){l.Z.getSingleElement("#copyright-year").textContent=(new Date).getFullYear()}},{key:"setEventListeners",value:function(){var e=this,t=l.Z.getSingleElement("#contact__form"),n=l.Z.getMultipleElements("[data-tab"),i=l.Z.getSingleElement("#menu-title"),r=l.Z.getSingleElement("#menu-close"),o=l.Z.getSingleElement(".introduction");n.forEach((function(t){t.addEventListener("click",(function(t){return e.onSidebarItemClick(t)})),t.addEventListener("mouseenter",(function(t){return e.onSidebarItemEnterLeave(t,!0)})),t.addEventListener("mouseleave",(function(t){return e.onSidebarItemEnterLeave(t,!1)}))})),t.addEventListener("submit",(function(e){return s.Z.onSubmitForm(e)})),r.addEventListener("click",(function(){return e.onSidebarMenuClose()})),i.addEventListener("click",(function(t){return e.onMenuTitleClick(t)})),o.addEventListener("click",(function(t){return e.onIntroductionWrapperClick(t)})),window.addEventListener("resize",this.onWindowResize.bind(this),!0)}},{key:"onWindowResize",value:function(){var e=l.Z.getSingleElement("#nav"),t=l.Z.getSingleElement("#overlay");if(window.matchMedia(this.mediaQueryCondition).matches){var n="block"===t.style.display;e.style.display=n?"block":"none"}else e.style.display="block"}},{key:"onIntroductionWrapperClick",value:function(e){var t=l.Z.getSingleElement(".header__language--expanded"),n="block"===t.style.display;!e.target.closest(".header__language")&&n&&(t.style.display="none")}},{key:"onMenuTitleClick",value:function(e){var t=e.currentTarget,n=l.Z.getSingleElement("#menu-close");if(n.classList.value.includes("hidden")){var i=l.Z.getSingleElement("#nav"),r=l.Z.getSingleElement("#overlay");l.Z.getMultipleElements(".sidenav__title").forEach((function(e){return e.classList.toggle("sidenav__title--active")})),i.style.display="block",t.style.display="none",r.style.display="block",r.style.height="".concat(document.body.scrollHeight,"px"),n.classList.remove("hidden"),document.body.style.overflow="hidden"}}},{key:"onSidebarMenuClose",value:function(){var e=l.Z.getSingleElement("#overlay"),t=l.Z.getSingleElement("#menu-title"),n=l.Z.getSingleElement("#menu-close");l.Z.getMultipleElements(".sidenav__title").forEach((function(e){return e.classList.toggle("sidenav__title--active")})),this.checkToShowNavigationElement(),t.style.display="block",e.style.display="none",n.classList.add("hidden"),document.body.style.overflow="auto"}},{key:"checkToShowNavigationElement",value:function(){var e=l.Z.getSingleElement("#nav"),t=window.matchMedia(this.mediaQueryCondition).matches?"none":"block";e.style.display=t}},{key:"onSidebarItemEnterLeave",value:function(e,t){var n=e.target.closest("[data-tab]").querySelector(".sidenav__title");n&&(t?n.classList.add("sidenav__title--active"):l.Z.getSingleElement("#menu-close").classList.value.includes("hidden")&&n.classList.remove("sidenav__title--active"))}},{key:"setLocalstorageItem",value:function(e,t){localStorage.setItem(e,t)}},{key:"onSidebarItemClick",value:function(e){var t=e.currentTarget.dataset.section;"block"===l.Z.getSingleElement("#overlay").style.display&&this.onSidebarMenuClose();var n=l.Z.getSingleElement("#".concat(t)).getBoundingClientRect().top+window.scrollY;window.scrollTo({top:n,behavior:"smooth"})}},{key:"getBeansOffset",value:function(e){var t=Number.parseInt(e,10);return"calc(".concat(33.3*(t-1),"% - 7px)")}},{key:"getLocalstorageItem",value:function(e){return localStorage.getItem(e)}},{key:"initIntersectionObserver",value:function(){var e=new IntersectionObserver(this.onIntersectingSection.bind(this),{root:null,rootMargin:"0px 0px 0px 0px",threshold:.5}),t=l.Z.getSingleElement("#home"),n=l.Z.getSingleElement("#beans"),i=l.Z.getSingleElement("#contact");[t,n,l.Z.getSingleElement("#about"),i].forEach((function(t){return e.observe(t)}))}},{key:"onIntersectingSection",value:function(e){var t=this;e.forEach((function(e){if(e.isIntersecting){var n=e.target,i=l.Z.getSingleElement("#slider__beans"),r=t.getBeansOffset(n.dataset.id);i.style.top=r}}))}},{key:"fetchMainImage",value:function(){var e=new Image,t=l.Z.getSingleElement("#introduction__image");e.onload=function(){t.setAttribute("src",this.src)},e.src="assets/img/intro-coffee.jpg"}}]),e}())},938:function(e,t,n){"use strict";var i=n(38),r=n.n(i),o=n(575),a=n.n(o),l=n(913),s=n.n(l),c=n(628),u=n(212),m=new(function(){function e(){a()(this,e),this.formValid=!1}return s()(e,[{key:"setFormEvents",value:function(){var e=this,t=c.Z.getSingleElement("#contact-message"),n=c.Z.getSingleElement("#contact-name"),i=c.Z.getSingleElement("#contact-email");t.addEventListener("input",(function(){return e.handleFormElementChange()})),n.addEventListener("input",(function(){return e.handleFormElementChange()})),i.addEventListener("input",(function(){return e.handleFormElementChange()}))}},{key:"handleFormElementChange",value:function(){var e=this.getFormElementValues(),t=r()(e,3),n=t[0],i=t[1],o=t[2],a=c.Z.getSingleElement("#contact-message-name"),l=c.Z.getSingleElement("#contact-message-email"),s=c.Z.getSingleElement("#contact-message-textarea"),u=this.validateFormElement(i.trim(),a,"Please enter contact name","Contact name shouldn't have more than 50 characters",i.length>50),m=this.validateFormElement(o.trim(),l,"Please enter valid email address","Email should have valid format",!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(o)),g=this.validateFormElement(n.trim(),s,"Please enter some message","Message shouldn't contain more than 2000 characters",n.length>2e3);this.setFormValidity(u&&m&&g)}},{key:"validateFormElement",value:function(e,t,n,i,r){return 0===e.length?(this.showFormElementErrorMessage(t,n),!1):r?(this.showFormElementErrorMessage(t,i),!1):(this.showFormElementErrorMessage(t,""),!0)}},{key:"showFormElementErrorMessage",value:function(e,t){e.textContent=t}},{key:"onSubmitForm",value:function(e){var t=this;if(e.preventDefault(),this.formValid){var n=this.getFormElementValues(),i=r()(n,3),o=i[0],a=i[1],l=i[2];u.Z.sendEmail(a,l,o,(function(){return t.clearForm()}))}}},{key:"getFormElementValues",value:function(){return[c.Z.getSingleElement("#contact-message").value,c.Z.getSingleElement("#contact-name").value,c.Z.getSingleElement("#contact-email").value]}},{key:"clearForm",value:function(){c.Z.getSingleElement("#contact-name").value="",c.Z.getSingleElement("#contact-email").value="",c.Z.getSingleElement("#contact-message").value="",this.setFormValidity(!1)}},{key:"setFormValidity",value:function(e){var t=c.Z.getSingleElement("#submit-message");this.formValid=e;var n=this.formValid?1:.4;t.style.opacity=n}}]),e}());t.Z=m},896:function(e,t,n){"use strict";var i=n(575),r=n.n(i),o=n(913),a=n.n(o),l=n(628),s=new(function(){function e(){r()(this,e),this.googleMapsAPIkey="AIzaSyChHo9jCCaY2jumTfXZg35NBvvNY0piHXk"}return a()(e,[{key:"initGoogleMap",value:function(){var e=document.createElement("script");document.head.appendChild(e),e.addEventListener("load",(function(){var e={lat:43.749247,lng:19.718955},t=new google.maps.Map(l.Z.getSingleElement("#map"),{center:e,zoom:19,zoomControl:!0,zoomControlOptions:!0,clickableIcons:!0,disableDoubleClickZoom:!1,mapTypeId:google.maps.MapTypeId.ROADMAP});new google.maps.Marker({position:e,map:t,title:"Esentico Boki",icon:"assets/logo/logo__circle__small.png"})}))}}]),e}());t.Z=s},212:function(e,t,n){"use strict";var i=n(757),r=n.n(i),o=n(926),a=n.n(o),l=n(575),s=n.n(l),c=n(913),u=n.n(c),m=function(){function e(){s()(this,e)}var t,n;return u()(e,null,[{key:"sendEmail",value:(n=a()(r().mark((function e(t,n,i,o){var a,l,s,c;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Email.send({Host:"smtp.gmail.com",Username:"siskoftn@gmail.com",Password:"mcreotjruuzliyvi",To:"siskoftn@gmail.com",From:n,Subject:t,Body:i});case 3:return a=e.sent,e.next=6,a;case 6:l=e.sent,s=l.includes("OK"),c=s?"Message sent successfully":l,s&&o(),alert(c),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),alert("Error sending the message. Please try again");case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))),function(e,t,i,r){return n.apply(this,arguments)})},{key:"fetchLanguageConfiguration",value:(t=a()(r().mark((function e(t,n){var i,o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("assets/translations/".concat(t,".json"));case 2:return i=e.sent,e.next=5,i.json();case 5:o=e.sent,n(o);case 7:case"end":return e.stop()}}),e)}))),function(e,n){return t.apply(this,arguments)})}]),e}();t.Z=m},813:function(e,t,n){"use strict";var i=n(575),r=n.n(i),o=n(913),a=n.n(o),l=n(628),s=new(function(){function e(){r()(this,e)}return a()(e,[{key:"lazyLoadImages",value:function(){var e=l.Z.getMultipleElements("[data-src]"),t=new IntersectionObserver(this.onIntersectImage.bind(this),{root:null,rootMargin:"200px 0px 200px 150px",threshold:.5});e.forEach((function(e){return t.observe(e)}))}},{key:"onIntersectImage",value:function(e,t){var n=this;e.forEach((function(e){e.isIntersecting&&(n.preloadImage(e.target),t.unobserve(e.target))}))}},{key:"preloadImage",value:function(e){var t=e.getAttribute("data-src");t&&(e.src=t,e.style.visibility="visible")}}]),e}());t.Z=s},628:function(e,t,n){"use strict";var i=n(575),r=n.n(i),o=n(913),a=n.n(o),l=function(){function e(){r()(this,e)}return a()(e,null,[{key:"getSingleElement",value:function(e){return document.querySelector(e)}},{key:"getMultipleElements",value:function(e){return document.querySelectorAll(e)}}]),e}();t.Z=l}},t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.m=e,n.x=function(){},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={68:0,680:0},t=[[773,855]],i=function(){},r=function(r,o){for(var a,l,s=o[0],c=o[1],u=o[2],m=o[3],g=0,d=[];g<s.length;g++)l=s[g],n.o(e,l)&&e[l]&&d.push(e[l][0]),e[l]=0;for(a in c)n.o(c,a)&&(n.m[a]=c[a]);for(u&&u(n),r&&r(o);d.length;)d.shift()();return m&&t.push.apply(t,m),i()},o=self.webpackChunkesentico_boki_coffee=self.webpackChunkesentico_boki_coffee||[];function a(){for(var i,r=0;r<t.length;r++){for(var o=t[r],a=!0,l=1;l<o.length;l++){var s=o[l];0!==e[s]&&(a=!1)}a&&(t.splice(r--,1),i=n(n.s=o[0]))}return 0===t.length&&(n.x(),n.x=function(){}),i}o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o));var l=n.x;n.x=function(){return n.x=l||function(){},(i=a)()}}(),n.x()}();