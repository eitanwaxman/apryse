(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1446:function(e,t,n){var o=n(31),i=n(1447);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:function(e){if(!window.isApryseWebViewerWebComponent)return void document.head.appendChild(e);let t;t=document.getElementsByTagName("apryse-webviewer"),t.length||(t=function e(t,n=document){const o=[];return n.querySelectorAll(t).forEach(e=>o.push(e)),n.querySelectorAll("*").forEach(n=>{n.shadowRoot&&o.push(...e(t,n.shadowRoot))}),o}("apryse-webviewer"));const n=[];for(let o=0;o<t.length;o++){const i=t[o];if(0===o)i.shadowRoot.appendChild(e),e.onload=function(){n.length>0&&n.forEach(t=>{t.innerHTML=e.innerHTML})};else{const t=e.cloneNode(!0);i.shadowRoot.appendChild(t),n.push(t)}}},singleton:!1};o(i,r);e.exports=i.locals||{}},1447:function(e,t,n){(e.exports=n(32)(!1)).push([e.i,"",""])},1506:function(e,t,n){"use strict";n(28),n(29),n(12),n(14),n(7),n(26),n(22),n(42),n(60),n(41),n(80),n(39),n(13),n(9),n(10),n(11);var o=n(0),i=n.n(o),r=n(4),a=n.n(r),l=n(6),c=n(3);n(1446);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,b(o.key),o)}}function d(e,t){return(d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=f(e);if(t){var i=f(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return h(this,n)}}function h(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==p(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===p(t)?t:String(t)}var y,x,g,w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(a,e);var t,n,o,r=m(a);function a(){return u(this,a),r.apply(this,arguments)}return t=a,(n=[{key:"render",value:function(){var e=this.props,t=e.isDisabled,n=e.className,o=e.dataElement,r=e.children;return t?null:i.a.createElement("div",{className:n,"data-element":o},r)}}])&&s(t.prototype,n),o&&s(t,o),Object.defineProperty(t,"prototype",{writable:!1}),a}(i.a.PureComponent);y=w,x="propTypes",g={isDisabled:a.a.bool,className:a.a.string.isRequired,dataElement:a.a.string.isRequired,children:a.a.node},(x=b(x))in y?Object.defineProperty(y,x,{value:g,enumerable:!0,configurable:!0,writable:!0}):y[x]=g;var v=Object(l.b)((function(e,t){return{isDisabled:c.a.isElementDisabled(e,t.dataElement)}}))(w);t.a=v},1685:function(e,t,n){var o=n(31),i=n(1686);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:function(e){if(!window.isApryseWebViewerWebComponent)return void document.head.appendChild(e);let t;t=document.getElementsByTagName("apryse-webviewer"),t.length||(t=function e(t,n=document){const o=[];return n.querySelectorAll(t).forEach(e=>o.push(e)),n.querySelectorAll("*").forEach(n=>{n.shadowRoot&&o.push(...e(t,n.shadowRoot))}),o}("apryse-webviewer"));const n=[];for(let o=0;o<t.length;o++){const i=t[o];if(0===o)i.shadowRoot.appendChild(e),e.onload=function(){n.length>0&&n.forEach(t=>{t.innerHTML=e.innerHTML})};else{const t=e.cloneNode(!0);i.shadowRoot.appendChild(t),n.push(t)}}},singleton:!1};o(i,r);e.exports=i.locals||{}},1686:function(e,t,n){(t=e.exports=n(32)(!1)).push([e.i,":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.mathSymbolsContainer{display:flex;flex-wrap:wrap;overflow-y:auto;display:grid;grid-template-columns:repeat(7,1fr);margin-bottom:5px}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.mathSymbolsContainer{width:196px}}.mathSymbolsContainer.padding{padding:4px 20px 8px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .mathSymbolsContainer{max-width:450px;width:auto}}@media(max-width:640px)and (-ms-high-contrast:active),(max-width:640px)and (-ms-high-contrast:none){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .mathSymbolsContainer{width:308px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .mathSymbolsContainer{max-width:450px;width:auto}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.App.is-web-component:not(.is-in-desktop-only-mode) .mathSymbolsContainer{width:308px}}}.mathSymbolsContainer .cell-container{padding:0;border:none;background-color:transparent;flex:1 0 14%;cursor:pointer;border-radius:4px;width:28px;height:28px;display:flex;align-items:center;justify-content:center}:host(:not([data-tabbing=true])) .mathSymbolsContainer .cell-container,html:not([data-tabbing=true]) .mathSymbolsContainer .cell-container{outline:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .mathSymbolsContainer .cell-container{width:44px;height:44px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .mathSymbolsContainer .cell-container{width:44px;height:44px}}.mathSymbolsContainer .cell-container:hover{background:var(--popup-button-hover)}",""]),t.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"}},1687:function(e,t,n){var o=n(31),i=n(1688);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:function(e){if(!window.isApryseWebViewerWebComponent)return void document.head.appendChild(e);let t;t=document.getElementsByTagName("apryse-webviewer"),t.length||(t=function e(t,n=document){const o=[];return n.querySelectorAll(t).forEach(e=>o.push(e)),n.querySelectorAll("*").forEach(n=>{n.shadowRoot&&o.push(...e(t,n.shadowRoot))}),o}("apryse-webviewer"));const n=[];for(let o=0;o<t.length;o++){const i=t[o];if(0===o)i.shadowRoot.appendChild(e),e.onload=function(){n.length>0&&n.forEach(t=>{t.innerHTML=e.innerHTML})};else{const t=e.cloneNode(!0);i.shadowRoot.appendChild(t),n.push(t)}}},singleton:!1};o(i,r);e.exports=i.locals||{}},1688:function(e,t,n){(t=e.exports=n(32)(!1)).push([e.i,".open.RichTextPopup{visibility:visible}.closed.RichTextPopup{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.RichTextPopup{position:absolute;z-index:70;display:flex;justify-content:center;align-items:center}.RichTextPopup:empty{padding:0}.RichTextPopup .buttons{display:flex}.RichTextPopup .Button{margin:4px;width:32px;height:32px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RichTextPopup .Button{width:42px;height:42px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .RichTextPopup .Button{width:42px;height:42px}}.RichTextPopup .Button:hover{background:var(--popup-button-hover)}.RichTextPopup .Button .Icon{width:18px;height:18px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RichTextPopup .Button .Icon{width:24px;height:24px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .RichTextPopup .Button .Icon{width:24px;height:24px}}.is-vertical.RichTextPopup .Button.main-menu-button{width:100%;border-radius:0;justify-content:flex-start;padding-left:var(--padding-small);padding-right:var(--padding-small);margin:0 0 var(--padding-tiny) 0}.is-vertical.RichTextPopup .Button.main-menu-button:first-child{margin-top:var(--padding-tiny)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .is-vertical.RichTextPopup .Button.main-menu-button{width:100%;height:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .is-vertical.RichTextPopup .Button.main-menu-button{width:100%;height:32px}}.is-vertical.RichTextPopup .Button.main-menu-button .Icon{margin-right:10px}.is-vertical.RichTextPopup .Button.main-menu-button span{white-space:nowrap}@-webkit-keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@-webkit-keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}@keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}.RichTextPopup{overflow:visible;flex-direction:column;background:var(--component-background);border-radius:4px;box-shadow:0 0 3px 0 var(--document-box-shadow);width:220px;padding:6px 12px;align-items:flex-start}.RichTextPopup.legacy{padding:0;width:auto;align-items:center}.RichTextPopup.legacy .ColorPalette.padding{padding:4px 12px 8px}.RichTextPopup.legacy .colorPicker{padding:0 12px 8px}.RichTextPopup .rich-text-format-legacy{display:flex;width:100%;justify-content:center}.RichTextPopup .ColorPalette.padding{padding:0}.RichTextPopup .menu-items{width:100%;padding:6px 4px}.RichTextPopup .collapsible-menu{width:100%;display:flex;cursor:pointer;align-items:center;justify-content:space-between}.RichTextPopup .collapsible-menu .menu-title{padding-left:4px;padding-top:6px;padding-bottom:6px;font-weight:700;font-size:14px}.RichTextPopup .collapsible-menu .Icon{height:18px;width:18px}.RichTextPopup .divider{background-color:var(--divider);width:100%;height:1px;margin:6px 0}",""]),t.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"}},1844:function(e,t,n){"use strict";n.r(t);n(38),n(50),n(58),n(19),n(83),n(312),n(405),n(407),n(12),n(14),n(7),n(13),n(9),n(10),n(11),n(16),n(15),n(20),n(17),n(28),n(29),n(26),n(22),n(34),n(33),n(54),n(23),n(24),n(56),n(55);var o=n(0),i=n.n(o),r=n(166),a=n.n(r),l=n(18),c=n.n(l),p=n(6),u=n(122),s=n.n(u),d=n(4),m=n.n(d),h=n(1506),f=n(268),b=n(47),y=n(173),x=n(37),g=n(1),w=(n(153),n(262)),v=n(21),T=function(e,t){if(t&&t.current){var n=Object(v.a)().querySelector("#pageWidgetContainer".concat(e.PageNumber,' [id="freetext-editor-').concat(e.Id,'"]')),o=g.a.getScrollViewElement(),i=2*parseFloat(e.StrokeThickness)*g.a.getZoom(),r=n.getBoundingClientRect(),a={topLeft:{x:r.left+o.scrollLeft-i,y:r.top+o.scrollTop-i},bottomRight:{x:r.right+o.scrollLeft+i,y:r.bottom+o.scrollTop+i}},l=t.current.getBoundingClientRect();return{left:Object(w.a)(a,l),top:Object(w.b)(a,l)}}},E=(n(46),n(1685),["+","−","×","÷","=","≠","±","¬","<",">","⋜","⋝","°","¹","²","³","ƒ","%","‰","‱","∀","∁","∂","∃","∄","∅","∆","∇","∈","∉","∊","∋","∌","∍","∎","∏","∐","∑","∓","∔","∕","∖","∗","∘","∙","√","∛","∜","∝","∞","∟","∠","∡","∢","∣","∤","∥","∦","∧","∨","∩","∪","∫","∬","∭","∮","∯","∰","∱","∲","∳","∴","∵","∶","∷","∸","∹","∺","∻","∼","∽","∾","∿","≀","≁","≂","≃","≄","≅","≆","≇","≈","≉","≊","≋","≌"]),S=function(e){var t=e.onClickHandler,n=e.maxHeight;return i.a.createElement("div",{className:"mathSymbolsContainer padding",style:{maxHeight:"".concat(n,"px")}},E.map((function(e,n){return i.a.createElement("button",{key:n,className:"cell-container",onClick:function(){t(e)}},e)})))},P=n(298),O=n(2),C=n(3),R=(n(1687),n(5)),A=n(45),_=n(36),k=n(269),j=n(1392);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){I(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==N(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==N(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===N(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,i,r,a,l=[],c=!0,p=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(o=r.call(n)).done)&&(l.push(o.value),l.length!==t);c=!0);}catch(e){p=!0,i=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(p)throw i}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return F(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var H={annotation:m.a.object,editor:m.a.object},z=function(e){var t,n=e.annotation,r=e.editor,l=D(Object(p.e)((function(e){return[C.a.isElementDisabled(e,R.a.RICH_TEXT_POPUP),C.a.isElementOpen(e,R.a.RICH_TEXT_POPUP),C.a.isElementDisabled(e,"colorPalette"),C.a.getCustomColors(e,"customColors"),C.a.isInDesktopOnlyMode(e),C.a.isElementOpen(e,R.a.STYLE_POPUP_TEXT_STYLE_CONTAINER),C.a.isElementOpen(e,R.a.STYLE_POPUP_COLORS_CONTAINER),C.a.getFonts(e),!C.a.isElementDisabled(e,R.a.LEGACY_RICH_TEXT_POPUP)]}),p.c),9),u=l[0],d=l[1],m=l[2],w=l[3],v=l[4],E=l[5],N=l[6],L=l[7],F=l[8],H=D(Object(o.useState)(!1),2),z=H[0],Y=H[1],M=D(Object(o.useState)({left:0,top:0}),2),U=M[0],q=M[1],W=D(Object(o.useState)({x:0,y:0}),2),V=W[0],X=W[1],G=D(Object(o.useState)({}),2),J=G[0],K=G[1],Z=Object(o.useRef)(null),$=Object(o.useRef)(null),Q=Object(o.useRef)(null),ee=Object(o.useRef)({}),te=Object(p.d)(),ne=Object(o.useRef)(),oe=D(Object(o.useState)(n.isAutoSizeFont()),2),ie=oe[0],re=oe[1];Object(o.useEffect)((function(){return te(O.a.disableElements([R.a.ANNOTATION_STYLE_POPUP])),function(){te(O.a.enableElements([R.a.ANNOTATION_STYLE_POPUP]))}}),[]),Object(o.useEffect)((function(){var e=function(e,t){!e&&t&&$.current&&$.current.setSelection(t.index,t.length),e&&$.current&&K(le(e))},t=function(){var e,t;if(null!==(e=Q.current)&&void 0!==e&&e.isAutoSized()&&Z.current){var n=T(Q.current,Z);q(n)}K(le(null===(t=$.current)||void 0===t?void 0:t.getSelection()))};return g.a.addEventListener("editorSelectionChanged",e),g.a.addEventListener("editorTextChanged",t),function(){g.a.removeEventListener("editorSelectionChanged",e),g.a.removeEventListener("editorTextChanged",t)}}),[]),Object(o.useEffect)((function(){var e,t,o,i,a,l,c;X({x:0,y:0}),$.current=r,Q.current=n;var p="solid";try{p="dash"===n.Style?"".concat(n.Style,",").concat(n.Dashes):n.Style}catch(e){console.error(e)}var u=n.getRichTextStyle()[0];ee.current={Font:n.Font,FontSize:n.FontSize,TextAlign:n.TextAlign,TextVerticalAlign:n.TextVerticalAlign,bold:null!==(e="bold"===(null==u?void 0:u["font-weight"]))&&void 0!==e&&e,italic:null!==(t="italic"===(null==u?void 0:u["font-style"]))&&void 0!==t&&t,underline:(null==u||null===(o=u["text-decoration"])||void 0===o?void 0:o.includes("underline"))||(null==u||null===(i=u["text-decoration"])||void 0===i?void 0:i.includes("word")),strikeout:null!==(a=null==u||null===(l=u["text-decoration"])||void 0===l?void 0:l.includes("line-through"))&&void 0!==a&&a,size:null==u?void 0:u["font-size"],font:null==u?void 0:u["font-family"],StrokeStyle:p,calculatedFontSize:n.getCalculatedFontSize()},K(le(null===(c=$.current)||void 0===c?void 0:c.getSelection())),ne.current&&($.current.setSelection(ne.current),ne.current=null)}),[n,r]),Object(o.useEffect)((function(){var e=function(){te(O.a.closeElements([R.a.RICH_TEXT_POPUP])),$.current=null,Q.current=null};return g.a.addEventListener("editorBlur",e),function(){g.a.removeEventListener("editorBlur",e)}}),[te]);var ae=function(){if(Z.current){var e=T(n,Z);q(e)}};Object(o.useLayoutEffect)((function(){ae()}),[n]),Object(o.useLayoutEffect)((function(){var e=s()((function(){Z.current&&ae()}),100),t=g.a.getDocumentViewer().getScrollViewElement();return null==t||t.addEventListener("scroll",e),function(){return null==t?void 0:t.removeEventListener("scroll",e)}}),[n,z]);var le=function(e){if(!e)return{};var t=$.current.getFormat(e.index,e.length);if("string"==typeof t.color)t.color=new window.Core.Annotations.Color(t.color);else if(Array.isArray(t.color)){var n=new window.Core.Annotations.Color(t.color[t.color.length-1]);t.color=n}else t.color||(t.color=Q.current.TextColor);return t},ce=function(e){return function(){var t=$.current.getSelection(),n=t.index,o=t.length;if(0===o){ne.current={index:n,length:o};var i=$.current.getSelection();n=i.index,o=i.length}var r=$.current.getFormat(n,o);ue(e,!r[e])}},pe=function(e,t){ue("color",t.toHexString())},ue=function(e,t){var n,o;"size"===e?null===(n=$.current)||void 0===n||n.format("applyCustomFontSize",t):null===(o=$.current)||void 0===o||o.format(e,t);"color"===e&&(t=new window.Core.Annotations.Color(t)),K(B(B({},J),{},I({},e,t)))},se=function(e,t){var n=t.x,o=t.y;X({x:n,y:o})},de=(I(t={},R.a.STYLE_POPUP_TEXT_STYLE_CONTAINER,E),I(t,R.a.STYLE_POPUP_COLORS_CONTAINER,N),t),me=function(e){te(de[e]?O.a.closeElement(e):O.a.openElement(e))},he=function(){return me(R.a.STYLE_POPUP_TEXT_STYLE_CONTAINER)},fe=function(){return me(R.a.STYLE_POPUP_COLORS_CONTAINER)};return ee.current.bold=J.bold,ee.current.italic=J.italic,ee.current.underline=J.underline,ee.current.strikeout=J.strike,ee.current.quillFont=J.font||ee.current.Font,ee.current.quillFontSize=J.originalSize||ee.current.FontSize,u||Object(x.l)()&&!v?null:i.a.createElement(a.a,{position:V,onDrag:se,onStop:se,enableUserSelectHack:!1,cancel:".Button, .cell, .mathSymbolsContainer, .Dropdown, .Dropdown__item",onMouseDown:function(e){"touchstart"!==e.type&&e.preventDefault()}},i.a.createElement("div",{className:c()({Popup:!0,RichTextPopup:!0,open:d,closed:!d,legacy:F}),ref:Z,"data-element":R.a.RICH_TEXT_POPUP,style:B({},U)},F?i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{className:"rich-text-format-legacy",dataElement:"richTextFormats"},i.a.createElement(b.a,{isActive:J.bold,dataElement:"richTextBoldButton",onClick:ce("bold"),img:"icon-text-bold",title:"option.richText.bold"}),i.a.createElement(b.a,{isActive:J.italic,dataElement:"richTextItalicButton",onClick:ce("italic"),img:"icon-text-italic",title:"option.richText.italic"}),i.a.createElement(b.a,{isActive:J.underline,dataElement:"richTextUnderlineButton",onClick:ce("underline"),img:"ic_annotation_underline_black_24px",title:"option.richText.underline"}),i.a.createElement(b.a,{isActive:J.strike,dataElement:"richTextStrikeButton",onClick:ce("strike"),img:"ic_annotation_strikeout_black_24px",title:"option.richText.strikeout"}),i.a.createElement(b.a,{dataElement:"mathSymbolsButton",onClick:function(){Y(!z)},img:"ic_thumbnails_grid_black_24px",title:"option.mathSymbols"})),i.a.createElement(y.a,{style:{paddingTop:0}})):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"collapsible-menu",onClick:he,onTouchStart:he,role:"toolbar"},i.a.createElement("div",{className:"menu-title"},A.a.t("option.stylePopup.textStyle")),i.a.createElement(_.a,{glyph:"icon-chevron-".concat(E?"up":"down")})),E&&i.a.createElement("div",{className:"menu-items"},i.a.createElement(k.a,{fonts:L,onPropertyChange:function(e,t){var n=$.current.getSelection(),o=n.index,i=n.length,r=Q.current;r[e]=t,$.current.blur(),"FontSize"!==e&&"Font"!==e||function(e){var t=window.Core.Annotations.FreeTextAnnotation;if(e instanceof t&&e.getAutoSizeType()!==t.AutoSizeTypes.NONE){var n=g.a.getDocument(),o=e.PageNumber,i=n.getPageInfo(o),r=n.getPageMatrix(o),a=n.getPageRotation(o);e.fitText(i,r,a)}}(r),setTimeout((function(){ne.current={index:o,length:i},g.a.getAnnotationManager().getEditBoxManager().focusBox(r)}),0)},onRichTextStyleChange:function(e,t){var n={"font-weight":"bold","font-style":"italic",underline:"underline","line-through":"strike","font-family":"font","font-size":"size"};"font-family"===e||"font-size"===e?ue(n[e],t):ce(n[e])()},properties:ee.current,stateless:!0,isFreeText:!0,onFreeTextSizeToggle:function(){return Object(j.a)(n,re,ie)},isFreeTextAutoSize:ie,isRichTextEditMode:!0})),i.a.createElement("div",{className:"divider"}),!m&&i.a.createElement("div",{className:"collapsible-menu",onClick:fe,onTouchStart:fe,role:"toolbar"},i.a.createElement("div",{className:"menu-title"},A.a.t("option.stylePopup.colors")),i.a.createElement(_.a,{glyph:"icon-chevron-".concat(N?"up":"down")}))),!m&&(F||N)&&i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{colorMapKey:"freeText",color:J.color,property:"TextColor",onStyleChange:pe,hasPadding:!0}),w.length>0&&i.a.createElement(P.a,{color:J.color,property:"TextColor",onStyleChange:pe,enableEdit:!1})),z&&i.a.createElement(S,{onClickHandler:function(e){var t=$.current.getSelection(),n=t.index,o=t.length;o>0&&$.current.deleteText(n,o),$.current.insertText(n,e),$.current.setSelection(n+1)},maxHeight:150})))};z.propTypes=H;var Y=i.a.memo(z);t.default=Y}}]);
//# sourceMappingURL=39.chunk.js.map