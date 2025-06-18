import{r as f,cB as Fi,j as c,cC as W1,cD as zi,cE as Fe,cF as at,cG as Lt,cH as Xe,cI as rr,cJ as q1,cK as Ui,cL as G1,cM as K1,cN as or,cO as Jp,cP as Y1,cQ as J1,cR as xi,cS as r1,cT as Qp,cU as Zp,cV as Xp,cW as $r,cX as Q1,cY as Pp,cZ as Z1,c_ as M,k as I,c$ as ce,ds as ew,dt as tw,dr as nw,du as rw,cx as ft,dv as ow,d0 as X1,d1 as P1,dy as sw,d2 as eu,dz as aw,dA as iw,d5 as tu,dB as cw,dC as nu,dD as lw,dF as uw,dG as dw,dH as fw,dI as hw,dx as gw,dw as mw,da as pw,dd as ww,dj as xw,dk as vw,db as bw,dc as yw,de as Cw,df as $w,dJ as ru,dK as ms,dL as Wi,dM as vi,dN as bi,dO as Sw,dP as Rw,dQ as _w,dR as jw,dS as Aw,dT as Tw,dU as Ew,dV as ou,dW as Iw,dX as su,dY as Mw,dZ as au,d_ as iu,d$ as Lw,e0 as Ow,e1 as cu,e2 as lu,e3 as Bw,e4 as Dw,e5 as Vw,e6 as Nw,dm as Hw,dn as kw,dp as Fw,dq as zw,d6 as Uw,d8 as Ww,dg as qw,dh as Gw,d9 as Kw,d7 as Yw,e7 as Jw,e8 as Qw,e9 as Zw,ea as Xw,eb as Pw,ec as ex,ed as tx,ee as nx,ef as rx,eg as ox,eh as sx,ei as ax,ej as ix,ek as cx,el as lx,em as ux,dl as dx,en as fx,eo as hx,i9 as gx,ia as mx,cg as px,ib as wx,ic as ii,id as xx,ie as uu,ig as o1,ap as du,ak as vx,ar as s1,a as Vn,ah as bx,ih as yx,bQ as Cx,c3 as ro,cf as a1,aE as Cs,aR as $x,aF as $t,aL as qi}from"./strapi-C9nOTXTf.js";var Sx=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},yr=new WeakMap,ls=new WeakMap,us={},ci=0,fu=function(e){return e&&(e.host||fu(e.parentNode))},Rx=function(e,t){return t.map(function(r){if(e.contains(r))return r;var a=fu(r);return a&&e.contains(a)?a:(console.error("aria-hidden",r,"in not contained inside",e,". Doing nothing"),null)}).filter(function(r){return!!r})},_x=function(e,t,r,a){var o=Rx(t,Array.isArray(e)?e:[e]);us[r]||(us[r]=new WeakMap);var l=us[r],u=[],h=new Set,m=new Set(o),w=function(b){!b||h.has(b)||(h.add(b),w(b.parentNode))};o.forEach(w);var v=function(b){!b||m.has(b)||Array.prototype.forEach.call(b.children,function(y){if(h.has(y))v(y);else try{var S=y.getAttribute(a),$=S!==null&&S!=="false",_=(yr.get(y)||0)+1,j=(l.get(y)||0)+1;yr.set(y,_),l.set(y,j),u.push(y),_===1&&$&&ls.set(y,!0),j===1&&y.setAttribute(r,"true"),$||y.setAttribute(a,"true")}catch(L){console.error("aria-hidden: cannot operate on ",y,L)}})};return v(t),h.clear(),ci++,function(){u.forEach(function(b){var y=yr.get(b)-1,S=l.get(b)-1;yr.set(b,y),l.set(b,S),y||(ls.has(b)||b.removeAttribute(a),ls.delete(b)),S||b.removeAttribute(r)}),ci--,ci||(yr=new WeakMap,yr=new WeakMap,ls=new WeakMap,us={})}},hu=function(e,t,r){r===void 0&&(r="data-aria-hidden");var a=Array.from(Array.isArray(e)?e:[e]),o=Sx(e);return o?(a.push.apply(a,Array.from(o.querySelectorAll("[aria-live]"))),_x(a,o,r,"aria-hidden")):function(){return null}};function jx(e){const t=`${e}CollectionProvider`,[r,a]=Y1(t),[o,l]=r(t,{collectionRef:{current:null},itemMap:new Map,listeners:new Set}),u=S=>{const{scope:$,children:_}=S,j=f.useRef(null),L=f.useRef(new Map).current,T=f.useRef(new Set).current;return c.jsx(o,{scope:$,itemMap:L,collectionRef:j,listeners:T,children:_})};u.displayName=t;const h=`${e}CollectionSlot`,m=f.forwardRef((S,$)=>{const{scope:_,children:j}=S,L=l(h,_),T=at($,L.collectionRef);return c.jsx(xi,{ref:T,children:j})});m.displayName=h;const w=`${e}CollectionItemSlot`,v="data-radix-collection-item",b=f.forwardRef((S,$)=>{const{scope:_,children:j,...L}=S,T=f.useRef(null),O=at($,T),N=l(w,_);return f.useEffect(()=>{const z=Array.from(N.itemMap.values());return N.itemMap.set(T,{ref:T,...L}),N.listeners.forEach(W=>W(Array.from(N.itemMap.values()),z)),()=>{const W=Array.from(N.itemMap.values());N.itemMap.delete(T),N.listeners.forEach(U=>U(Array.from(N.itemMap.values()),W))}}),c.jsx(xi,{[v]:"",ref:O,children:j})});b.displayName=w;function y(S){const $=l(`${e}CollectionConsumer`,S),_=f.useCallback(()=>{const L=$.collectionRef.current;if(!L)return[];const T=Array.from(L.querySelectorAll(`[${v}]`));return Array.from($.itemMap.values()).sort((z,W)=>T.indexOf(z.ref.current)-T.indexOf(W.ref.current))},[$.collectionRef,$.itemMap]),j=f.useCallback(L=>($.listeners.add(L),()=>$.listeners.delete(L)),[$.listeners]);return{getItems:_,subscribe:j}}return[{Provider:u,Slot:m,ItemSlot:b},y,a]}const li=new Map;function Ax(e,t){const r=e+(t?Object.entries(t).sort((o,l)=>o[0]<l[0]?-1:1).join():"");if(li.has(r))return li.get(r);const a=new Intl.Collator(e,t);return li.set(r,a),a}function Gi(e,t){const r=Ax(e,{usage:"search",...t});return{startsWith(a,o){return o.length===0?!0:(a=a.normalize("NFC"),o=o.normalize("NFC"),r.compare(a.slice(0,o.length),o)===0)},endsWith(a,o){return o.length===0?!0:(a=a.normalize("NFC"),o=o.normalize("NFC"),r.compare(a.slice(-o.length),o)===0)},contains(a,o){if(o.length===0)return!0;a=a.normalize("NFC"),o=o.normalize("NFC");let l=0;const u=o.length;for(;l+u<=a.length;l++){const h=a.slice(l,l+u);if(r.compare(o,h)===0)return!0}return!1}}}const Tx=e=>{const t=f.useRef();return f.useEffect(()=>{t.current=e}),t.current},Ex=[" ","Enter","ArrowUp","ArrowDown"],Ix=["Enter"],Mx=e=>!!(e.length===1&&e.match(/\S| /)),gu="Combobox",[Sr,co]=jx(gu),[Lx,cn]=Fi(gu),Ox=({children:e})=>c.jsx(Z1,{children:c.jsx(Sr.Provider,{scope:void 0,children:e})}),Bx=e=>typeof e=="string"?e==="none"?{type:e,filter:void 0}:{type:e,filter:"startsWith"}:e,Dx=e=>{const{allowCustomValue:t=!1,autocomplete:r="none",children:a,open:o,defaultOpen:l,onOpenChange:u,value:h,defaultValue:m,onValueChange:w,disabled:v,required:b=!1,locale:y="en-EN",onTextValueChange:S,textValue:$,defaultTextValue:_,filterValue:j,defaultFilterValue:L,onFilterValueChange:T,isPrintableCharacter:O=Mx}=e,[N,z]=f.useState(null),[W,U]=f.useState(null),[J,Z]=f.useState(null),[ie,$e]=f.useState(null),[oe=!1,P]=$r({prop:o,defaultProp:l,onChange:u}),[se,Re]=$r({prop:h,defaultProp:m,onChange:w}),[ve,le]=$r({prop:$,defaultProp:t&&!_?h:_,onChange:S}),[Ae,Be]=$r({prop:j,defaultProp:L,onChange:T}),He=or(),pe=f.useCallback((be,qe)=>{const Ue=qe.map(de=>de.ref.current),[Pe,...ee]=Ue,[ye]=ee.slice(-1),Te=ie??qe.find(de=>de.value===se)?.ref.current;for(const de of be){if(de===Te)return;if(de?.scrollIntoView({block:"nearest"}),de===Pe&&W&&(W.scrollTop=0),de===ye&&W&&(W.scrollTop=W.scrollHeight),$e(de),r==="both"){const xe=qe.find(je=>je.ref.current===de);xe&&le(xe.textValue)}if(de!==Te)return}},[r,le,W,ie,se]),rt=Bx(r);return f.useEffect(()=>{r!=="both"&&$e(null)},[ve,r]),f.useEffect(()=>{if(J&&N)return hu([J,N])},[J,N]),c.jsx(Ox,{children:c.jsx(Lx,{allowCustomValue:t,autocomplete:rt,required:b,trigger:N,onTriggerChange:z,contentId:He,value:se,onValueChange:Re,open:oe,onOpenChange:P,disabled:v,locale:y,focusFirst:pe,textValue:ve,onTextValueChange:le,onViewportChange:U,onContentChange:Z,visuallyFocussedItem:ie,filterValue:Ae,onFilterValueChange:Be,onVisuallyFocussedItemChange:$e,isPrintableCharacter:O,children:a})})},mu="ComboboxTrigger",pu=f.forwardRef((e,t)=>{const{...r}=e,a=cn(mu),o=()=>{a.disabled||a.onOpenChange(!0)};return c.jsx(W1,{asChild:!0,children:c.jsx(zi,{asChild:!0,trapped:a.open,onMountAutoFocus:l=>{l.preventDefault()},onUnmountAutoFocus:l=>{a.trigger?.focus({preventScroll:!0}),document.getSelection()?.empty(),l.preventDefault()},children:c.jsx("div",{ref:t,"data-disabled":a.disabled?"":void 0,...r,onClick:Fe(r.onClick,l=>{if(a.disabled){l.preventDefault();return}a.trigger?.focus()}),onPointerDown:Fe(r.onPointerDown,l=>{if(a.disabled){l.preventDefault();return}const u=l.target;u.hasPointerCapture(l.pointerId)&&u.releasePointerCapture(l.pointerId),(u.closest("button")??u.closest("div"))===l.currentTarget&&l.button===0&&l.ctrlKey===!1&&(o(),a.trigger?.focus())})})})})});pu.displayName=mu;const wu="ComboboxInput",xu=f.forwardRef((e,t)=>{const r=cn(wu),a=f.useRef(null),{getItems:o}=co(void 0),{startsWith:l}=Gi(r.locale,{sensitivity:"base"}),u=r.disabled,h=at(a,t,r.onTriggerChange),m=()=>{u||r.onOpenChange(!0)},w=Tx(r.filterValue);return Lt(()=>{const v=setTimeout(()=>{if(r.textValue===""||r.textValue===void 0||r.filterValue===""||r.filterValue===void 0)return;const b=o().find(S=>S.type==="option"&&l(S.textValue,r.textValue)),y=Zx(w??"",r.filterValue);b&&!r.visuallyFocussedItem&&y===r.filterValue.length&&a.current?.setSelectionRange(r.filterValue.length,r.textValue.length)});return()=>clearTimeout(v)},[r.textValue,r.filterValue,l,r.visuallyFocussedItem,o,w]),c.jsx("input",{type:"text",role:"combobox","aria-controls":r.contentId,"aria-expanded":r.open,"aria-required":r.required,"aria-autocomplete":r.autocomplete.type,"data-state":r.open?"open":"closed","aria-disabled":u,"aria-activedescendant":r.visuallyFocussedItem?.id,disabled:u,"data-disabled":u?"":void 0,"data-placeholder":r.textValue===void 0?"":void 0,value:r.textValue??"",...e,ref:h,onKeyDown:Fe(e.onKeyDown,v=>{if(["ArrowUp","ArrowDown","Home","End"].includes(v.key))r.open||m(),setTimeout(()=>{let y=o().filter(S=>!S.disabled&&S.isVisible).map(S=>S.ref.current);if(["ArrowUp","End"].includes(v.key)&&(y=y.slice().reverse()),["ArrowUp","ArrowDown"].includes(v.key)){const S=r.visuallyFocussedItem??o().find($=>$.value===r.value)?.ref.current;if(S){let $=y.indexOf(S);$===y.length-1&&($=-1),y=y.slice($+1)}}if(["ArrowDown"].includes(v.key)&&r.autocomplete.type==="both"&&y.length>1){const[S,...$]=y,_=o().find(j=>j.ref.current===S).textValue;r.textValue===_&&(y=$)}r.focusFirst(y,o())}),v.preventDefault();else if(["Tab"].includes(v.key)&&r.open)v.preventDefault();else if(["Escape"].includes(v.key))r.open?r.onOpenChange(!1):(r.onValueChange(void 0),r.onTextValueChange("")),v.preventDefault();else if(Ix.includes(v.key)){if(r.visuallyFocussedItem){const b=o().find(y=>y.ref.current===r.visuallyFocussedItem);b&&(r.onValueChange(b.value),r.onTextValueChange(b.textValue),r.autocomplete.type==="both"&&r.onFilterValueChange(b.textValue),b.ref.current?.click())}else{const b=o().find(y=>y.type==="option"&&!y.disabled&&y.textValue===r.textValue);b&&(r.onValueChange(b.value),r.onTextValueChange(b.textValue),r.autocomplete.type==="both"&&r.onFilterValueChange(b.textValue),b.ref.current?.click())}r.onOpenChange(!1),v.preventDefault()}else r.onVisuallyFocussedItemChange(null)}),onChange:Fe(e.onChange,v=>{r.onTextValueChange(v.currentTarget.value),r.autocomplete.type==="both"&&r.onFilterValueChange(v.currentTarget.value)}),onKeyUp:Fe(e.onKeyUp,v=>{if(!r.open&&(r.isPrintableCharacter(v.key)||["Backspace"].includes(v.key))&&m(),setTimeout(()=>{if(r.autocomplete.type==="both"&&r.isPrintableCharacter(v.key)&&r.filterValue!==void 0){const b=r.filterValue,y=o().find(S=>l(S.textValue,b));y&&r.onTextValueChange(y.textValue)}}),r.autocomplete.type==="none"&&r.isPrintableCharacter(v.key)){const b=r.textValue??"",y=o().find(S=>l(S.textValue,b));y&&(r.onVisuallyFocussedItemChange(y.ref.current),y.ref.current?.scrollIntoView())}}),onBlur:Fe(e.onBlur,()=>{if(r.open)return;r.onVisuallyFocussedItemChange(null);const[v]=o().filter(y=>y.textValue===r.textValue&&y.type==="option");if(v){r.onValueChange(v.value),r.autocomplete.type==="both"&&r.onFilterValueChange(v.textValue);return}if(r.allowCustomValue){r.onValueChange(r.textValue),r.autocomplete.type==="both"&&r.onFilterValueChange(r.textValue);return}const[b]=o().filter(y=>y.value===r.value&&y.type==="option");b&&r.textValue!==""?(r.onTextValueChange(b.textValue),r.autocomplete.type==="both"&&r.onFilterValueChange(b.textValue)):(r.onValueChange(void 0),r.onTextValueChange(""))})})});xu.displayName="ComboboxTextInput";const vu=f.forwardRef((e,t)=>{const{children:r,...a}=e,o=cn(wu),l=o.disabled,u=()=>{l||(o.onOpenChange(!0),o.trigger?.focus())};return c.jsx(Xe.button,{"aria-hidden":!0,type:"button","aria-disabled":l,"aria-controls":o.contentId,"aria-expanded":o.open,disabled:l,"data-disabled":l?"":void 0,...a,tabIndex:-1,ref:t,onClick:Fe(a.onClick,()=>{o.trigger?.focus()}),onPointerDown:Fe(a.onPointerDown,h=>{h.button===0&&h.ctrlKey===!1&&(u(),h.preventDefault())}),onKeyDown:Fe(a.onKeyDown,h=>{Ex.includes(h.key)&&(u(),h.preventDefault())}),children:r||"▼"})});vu.displayName="ComboboxIcon";const Vx="ComboboxPortal",bu=e=>c.jsx(Q1,{asChild:!0,...e});bu.displayName=Vx;const Ki="ComboboxContent",yu=f.forwardRef((e,t)=>{const r=cn(Ki),{getItems:a}=co(void 0),[o,l]=f.useState();if(Lt(()=>{l(new DocumentFragment)},[]),Lt(()=>{r.open&&r.autocomplete.type==="none"&&setTimeout(()=>{a().find(h=>h.value===r.value)?.ref.current?.scrollIntoView({block:"nearest"})})},[a,r.autocomplete,r.value,r.open]),!r.open){const u=o;return u?rr.createPortal(c.jsx(Sr.Slot,{scope:void 0,children:c.jsx("div",{children:e.children})}),u):null}return c.jsx(Cu,{...e,ref:t})});yu.displayName=Ki;const Nx=10,Cu=f.forwardRef((e,t)=>{const{onEscapeKeyDown:r,onPointerDownOutside:a,...o}=e,l=cn(Ki),u=at(t,m=>l.onContentChange(m)),{onOpenChange:h}=l;return q1(),f.useEffect(()=>{const m=()=>{h(!1)};return window.addEventListener("blur",m),window.addEventListener("resize",m),()=>{window.removeEventListener("blur",m),window.removeEventListener("resize",m)}},[h]),c.jsx(Ui,{allowPinchZoom:!0,children:c.jsx(G1,{asChild:!0,onEscapeKeyDown:r,onPointerDownOutside:a,onFocusOutside:m=>{m.preventDefault()},onDismiss:()=>{l.onOpenChange(!1),l.trigger?.focus({preventScroll:!0})},children:c.jsx($u,{role:"listbox",id:l.contentId,"data-state":l.open?"open":"closed",onContextMenu:m=>m.preventDefault(),...o,ref:u,style:{display:"flex",flexDirection:"column",outline:"none",...o.style}})})})});Cu.displayName="ComboboxContentImpl";const $u=f.forwardRef((e,t)=>{const{align:r="start",collisionPadding:a=Nx,...o}=e;return c.jsx(K1,{...o,ref:t,align:r,collisionPadding:a,style:{boxSizing:"border-box",...o.style,"--radix-combobox-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-combobox-content-available-width":"var(--radix-popper-available-width)","--radix-combobox-content-available-height":"var(--radix-popper-available-height)","--radix-combobox-trigger-width":"var(--radix-popper-anchor-width)","--radix-combobox-trigger-height":"var(--radix-popper-anchor-height)"}})});$u.displayName="ComboboxPopperPosition";const Su="ComboboxViewport",Ru=f.forwardRef((e,t)=>{const r=cn(Su),a=at(t,r.onViewportChange);return c.jsxs(c.Fragment,{children:[c.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-combobox-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-combobox-viewport]::-webkit-scrollbar{display:none}"}}),c.jsx(Sr.Slot,{scope:void 0,children:c.jsx(Xe.div,{"data-radix-combobox-viewport":"",role:"presentation",...e,ref:a,style:{position:"relative",flex:1,overflow:"auto",...e.style}})})]})});Ru.displayName=Su;const $s="ComboboxItem",[i1,Yi]=Fi($s),Ji=f.forwardRef((e,t)=>{const{value:r,disabled:a=!1,textValue:o,...l}=e,[u,h]=f.useState();Lt(()=>{h(new DocumentFragment)},[]);const{onTextValueChange:m,textValue:w,...v}=cn($s),b=or(),[y,S]=f.useState(o??""),$=v.value===r,{startsWith:_,contains:j}=Gi(v.locale,{sensitivity:"base"}),L=f.useCallback(T=>{S(O=>O||(T?.textContent??"").trim())},[]);return f.useEffect(()=>{$&&w===void 0&&y!==""&&m(y)},[y,$,w,m]),v.autocomplete.type==="both"&&y&&v.filterValue&&!_(y,v.filterValue)||v.autocomplete.type==="list"&&v.autocomplete.filter==="startsWith"&&y&&w&&!_(y,w)||v.autocomplete.type==="list"&&v.autocomplete.filter==="contains"&&y&&w&&!j(y,w)?u?rr.createPortal(c.jsx(i1,{textId:b,onTextValueChange:L,isSelected:$,textValue:y,children:c.jsx(Sr.ItemSlot,{scope:void 0,value:r,textValue:y,disabled:a,type:"option",isVisible:!1,children:c.jsx(yi,{ref:t,value:r,disabled:a,...l})})}),u):null:c.jsx(i1,{textId:b,onTextValueChange:L,isSelected:$,textValue:y,children:c.jsx(Sr.ItemSlot,{scope:void 0,value:r,textValue:y,disabled:a,type:"option",isVisible:!0,children:c.jsx(yi,{ref:t,value:r,disabled:a,...l})})})});Ji.displayName=$s;const _u="ComboboxItemImpl",yi=f.forwardRef((e,t)=>{const{value:r,disabled:a=!1,...o}=e,l=f.useRef(null),u=at(t,l),{getItems:h}=co(void 0),{onTextValueChange:m,visuallyFocussedItem:w,...v}=cn($s),{isSelected:b,textValue:y,textId:S}=Yi(_u),$=()=>{a||(v.onValueChange(r),m(y),v.onOpenChange(!1),v.autocomplete.type==="both"&&v.onFilterValueChange(y),v.trigger?.focus({preventScroll:!0}))},_=f.useMemo(()=>w===h().find(L=>L.ref.current===l.current)?.ref.current,[h,w]),j=or();return c.jsx(Xe.div,{role:"option","aria-labelledby":S,"data-highlighted":_?"":void 0,"aria-selected":b&&_,"data-state":b?"checked":"unchecked","aria-disabled":a||void 0,"data-disabled":a?"":void 0,tabIndex:a?void 0:-1,...o,id:j,ref:u,onPointerUp:Fe(o.onPointerUp,$)})});yi.displayName=_u;const ju="ComboboxItemText",Au=f.forwardRef((e,t)=>{const{className:r,style:a,...o}=e,l=Yi(ju),u=at(t,l.onTextValueChange);return c.jsx(Xe.span,{id:l.textId,...o,ref:u})});Au.displayName=ju;const Tu="ComboboxItemIndicator",Eu=f.forwardRef((e,t)=>{const{isSelected:r}=Yi(Tu);return r?c.jsx(Xe.span,{"aria-hidden":!0,...e,ref:t}):null});Eu.displayName=Tu;const Qi="ComboboxNoValueFound",Iu=f.forwardRef((e,t)=>{const{textValue:r="",filterValue:a="",locale:o,autocomplete:l}=cn(Qi),[u,h]=f.useState([]),{subscribe:m}=co(void 0),{startsWith:w,contains:v}=Gi(o,{sensitivity:"base"});return f.useEffect(()=>{const b=m(y=>{h(y)});return()=>{b()}},[m]),l.type==="list"&&l.filter==="startsWith"&&u.some(b=>w(b.textValue,r))||l.type==="both"&&u.some(b=>w(b.textValue,a))||l.type==="list"&&l.filter==="contains"&&u.some(b=>v(b.textValue,r))?null:c.jsx(Xe.div,{...e,ref:t})});Iu.displayName=Qi;const Mu=f.forwardRef((e,t)=>{const{disabled:r=!1,...a}=e,o=cn(Qi),{textValue:l,visuallyFocussedItem:u}=o,{getItems:h,subscribe:m}=co(void 0),w=f.useRef(null),[v,b]=f.useState(!1),y=at(t,w),S=f.useMemo(()=>u===h().find(j=>j.ref.current===w.current)?.ref.current,[h,u]),$=or(),_=()=>{!r&&l&&(o.onValueChange(l),o.onTextValueChange(l),o.onOpenChange(!1),o.autocomplete.type==="both"&&o.onFilterValueChange(l),o.trigger?.focus({preventScroll:!0}))};return Lt(()=>{const j=m(L=>{b(!L.some(T=>T.textValue===l&&T.type!=="create"))});return h().length===0&&b(!0),()=>{j()}},[l,m,h]),!l||!v?null:c.jsx(Sr.ItemSlot,{scope:void 0,value:l??"",textValue:l??"",disabled:r,isVisible:!0,type:"create",children:c.jsx(Xe.div,{role:"option",tabIndex:r?void 0:-1,"aria-disabled":r||void 0,"data-disabled":r?"":void 0,"data-highlighted":S?"":void 0,...a,id:$,ref:y,onPointerUp:Fe(a.onPointerUp,_)})})});Mu.displayName="ComboboxCreateItem";const Hx=Dx,kx=pu,Fx=xu,zx=vu,Ux=bu,Wx=yu,qx=Ru,Gx=Ji,Kx=Au,Yx=Eu,Jx=Iu,Qx=Mu;function Zx(e,t){const r=Math.min(e.length,t.length);for(let a=0;a<r;a++)if(e[a]!==t[a])return a;return r}const Qt=Object.freeze(Object.defineProperty({__proto__:null,ComboboxItem:Ji,Content:Wx,CreateItem:Qx,Icon:zx,Item:Gx,ItemIndicator:Yx,ItemText:Kx,NoValueFound:Jx,Portal:Ux,Root:Hx,TextInput:Fx,Trigger:kx,Viewport:qx},Symbol.toStringTag,{value:"Module"}));function lo(e){const t=f.useRef(e);return f.useEffect(()=>{t.current=e}),f.useMemo(()=>(...r)=>t.current?.(...r),[])}const Xx=[" ","Enter","ArrowUp","ArrowDown"],Px=[" ","Enter"],uo="Select",[Ss,fo,e6]=Jp(uo),[Ar,t6]=Y1(uo,[e6,J1]),Rs=J1(),[n6,Cn]=Ar(uo),[r6,o6]=Ar(uo),Zi=e=>{const{__scopeSelect:t,children:r,open:a,defaultOpen:o,onOpenChange:l,value:u,defaultValue:h,onValueChange:m,dir:w,disabled:v,required:b,multi:y=!1}=e,S=Rs(t),[$,_]=f.useState(null),[j,L]=f.useState(null),[T,O]=f.useState(!1),N=Pp(w),[z=!1,W]=$r({prop:a,defaultProp:o,onChange:l}),[U,J]=$r({prop:u,defaultProp:h,onChange(oe){m&&(Array.isArray(oe),m(oe))}}),Z=f.useRef(null),[ie,$e]=f.useState(new Set);return c.jsx(Z1,{...S,children:c.jsx(n6,{required:b,scope:t,trigger:$,onTriggerChange:_,valueNode:j,onValueNodeChange:L,valueNodeHasChildren:T,onValueNodeHasChildrenChange:O,contentId:or(),value:U,onValueChange:J,open:z,onOpenChange:W,dir:N,triggerPointerDownPosRef:Z,disabled:v,multi:y,children:c.jsx(Ss.Provider,{scope:t,children:c.jsx(r6,{scope:e.__scopeSelect,onNativeOptionAdd:f.useCallback(oe=>{$e(P=>new Set(P).add(oe))},[]),onNativeOptionRemove:f.useCallback(oe=>{$e(P=>{const se=new Set(P);return se.delete(oe),se})},[]),children:r})})})})};Zi.displayName=uo;const Lu="SelectTrigger",Xi=f.forwardRef((e,t)=>{const{__scopeSelect:r,...a}=e,o=Rs(r),l=Cn(Lu,r),u=l.disabled,h=at(t,l.onTriggerChange),m=fo(r),[w,v,b]=zu(S=>{const $=m().filter(L=>!L.disabled),_=$.find(L=>L.value===l.value),j=Uu($,S,_);if(j!==void 0&&!Array.isArray(j.value)){const L=l.multi?[j.value]:j.value;l.onValueChange(L)}}),y=()=>{u||(l.onOpenChange(!0),b())};return c.jsx(W1,{asChild:!0,...o,children:c.jsx(Xe.div,{role:"combobox","aria-controls":l.contentId,"aria-expanded":l.open,"aria-required":l.required,"aria-autocomplete":"none",dir:l.dir,"data-state":l.open?"open":"closed","data-disabled":u?"":void 0,"data-placeholder":l.value===void 0?"":void 0,tabIndex:u?void 0:0,...a,ref:h,onClick:Fe(a.onClick,S=>{S.currentTarget.focus()}),onPointerDown:Fe(a.onPointerDown,S=>{const $=S.target;$.hasPointerCapture(S.pointerId)&&$.releasePointerCapture(S.pointerId),($.closest("button")??$.closest("div"))===S.currentTarget&&S.button===0&&S.ctrlKey===!1&&(y(),l.triggerPointerDownPosRef.current={x:Math.round(S.pageX),y:Math.round(S.pageY)},S.preventDefault())}),onKeyDown:Fe(a.onKeyDown,S=>{const $=w.current!=="",_=S.ctrlKey||S.altKey||S.metaKey,j=S.target;(j.closest("button")??j.closest("div"))===S.currentTarget&&(!_&&S.key.length===1&&v(S.key),!($&&S.key===" ")&&Xx.includes(S.key)&&(y(),S.preventDefault()))})})})});Xi.displayName=Lu;const Ou="SelectValue",Pi=f.forwardRef((e,t)=>{const{__scopeSelect:r,children:a,placeholder:o,...l}=e,u=Cn(Ou,r),{onValueNodeHasChildrenChange:h}=u,m=a!==void 0,w=at(t,u.onValueNodeChange),[v,b]=f.useState([]),y=fo(r);Lt(()=>{h(m)},[h,m]),f.useLayoutEffect(()=>{if(Array.isArray(u.value)&&v.length!==u.value.length){const $=setTimeout(()=>{const _=y().filter(j=>Array.isArray(j.value)?!1:u.value?.includes(j.value));b(_)});return()=>{clearTimeout($)}}},[u.value,y,v]);let S;if((u.value===void 0||u.value.length===0)&&o!==void 0)S=c.jsx("span",{children:o});else if(typeof a=="function")if(Array.isArray(u.value)){const $=u.value.map(_=>{const j=v.find(L=>L.value===_);return j?a({value:_,textValue:j?.textValue}):null});S=$.every(_=>_===null)?o:$}else S=a(u.value);else S=a;return c.jsx(Xe.span,{...l,ref:w,children:S||null})});Pi.displayName=Ou;const s6="SelectIcon",e0=f.forwardRef((e,t)=>{const{__scopeSelect:r,children:a,...o}=e;return c.jsx(Xe.span,{"aria-hidden":!0,...o,ref:t,children:a||"▼"})});e0.displayName=s6;const a6="SelectPortal",t0=e=>c.jsx(Q1,{asChild:!0,...e});t0.displayName=a6;const er="SelectContent",n0=f.forwardRef((e,t)=>{const r=Cn(er,e.__scopeSelect),[a,o]=f.useState();if(Lt(()=>{o(new DocumentFragment)},[]),!r.open){const l=a;return l?rr.createPortal(c.jsx(Bu,{scope:e.__scopeSelect,children:c.jsx(Ss.Slot,{scope:e.__scopeSelect,children:c.jsx("div",{children:e.children})})}),l):null}return c.jsx(Du,{...e,ref:t})});n0.displayName=er;const bn=10,[Bu,Nn]=Ar(er),i6="SelectContentImpl",Du=f.forwardRef((e,t)=>{const{__scopeSelect:r,position:a="item-aligned",onCloseAutoFocus:o,onEscapeKeyDown:l,onPointerDownOutside:u,side:h,sideOffset:m,align:w,alignOffset:v,arrowPadding:b,collisionBoundary:y,collisionPadding:S,sticky:$,hideWhenDetached:_,avoidCollisions:j,...L}=e,T=Cn(er,r),[O,N]=f.useState(null),[z,W]=f.useState(null),U=at(t,ee=>N(ee)),[J,Z]=f.useState(null),[ie,$e]=f.useState(null),oe=fo(r),[P,se]=f.useState(!1),Re=f.useRef(!1);f.useEffect(()=>{if(O)return hu(O)},[O]),q1();const ve=f.useCallback(ee=>{const[ye,...Te]=oe().map(je=>je.ref.current),[de]=Te.slice(-1),xe=document.activeElement;for(const je of ee)if(je===xe||(je?.scrollIntoView({block:"nearest"}),je===ye&&z&&(z.scrollTop=0),je===de&&z&&(z.scrollTop=z.scrollHeight),je?.focus(),document.activeElement!==xe))return},[oe,z]),le=f.useCallback(()=>ve([J,O]),[ve,J,O]);f.useEffect(()=>{P&&le()},[P,le]);const{onOpenChange:Ae,triggerPointerDownPosRef:Be}=T;f.useEffect(()=>{if(O){let ee={x:0,y:0};const ye=de=>{ee={x:Math.abs(Math.round(de.pageX)-(Be.current?.x??0)),y:Math.abs(Math.round(de.pageY)-(Be.current?.y??0))}},Te=de=>{ee.x<=10&&ee.y<=10?de.preventDefault():O.contains(de.target)||Ae(!1),document.removeEventListener("pointermove",ye),Be.current=null};return Be.current!==null&&(document.addEventListener("pointermove",ye),document.addEventListener("pointerup",Te,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",ye),document.removeEventListener("pointerup",Te,{capture:!0})}}},[O,Ae,Be]),f.useEffect(()=>{const ee=()=>Ae(!1);return window.addEventListener("blur",ee),window.addEventListener("resize",ee),()=>{window.removeEventListener("blur",ee),window.removeEventListener("resize",ee)}},[Ae]);const[He,pe]=zu(ee=>{const ye=oe().filter(xe=>!xe.disabled),Te=ye.find(xe=>xe.ref.current===document.activeElement),de=Uu(ye,ee,Te);de&&setTimeout(()=>de.ref.current.focus())}),rt=f.useCallback((ee,ye,Te)=>{const de=!Re.current&&!Te;(T.value!==void 0&&T.value===ye||de)&&(Z(ee),de&&(Re.current=!0))},[T.value]),be=f.useCallback(()=>O?.focus(),[O]),qe=f.useCallback((ee,ye,Te)=>{const de=!Re.current&&!Te;(T.value!==void 0&&(Array.isArray(ye)?ye.every(je=>T.value?.includes(je)):T.value===ye)||de)&&$e(ee)},[T.value]),Ue=a==="popper"?Ci:Vu,Pe=Ue===Ci?{side:h,sideOffset:m,align:w,alignOffset:v,arrowPadding:b,collisionBoundary:y,collisionPadding:S,sticky:$,hideWhenDetached:_,avoidCollisions:j}:{};return c.jsx(Bu,{scope:r,content:O,viewport:z,onViewportChange:W,itemRefCallback:rt,selectedItem:J,onItemLeave:be,itemTextRefCallback:qe,focusSelectedItem:le,selectedItemText:ie,position:a,isPositioned:P,searchRef:He,children:c.jsx(Ui,{as:xi,allowPinchZoom:!0,children:c.jsx(zi,{asChild:!0,trapped:T.open,onMountAutoFocus:ee=>{ee.preventDefault()},onUnmountAutoFocus:Fe(o,ee=>{T.trigger?.focus({preventScroll:!0}),document.getSelection()?.empty(),ee.preventDefault()}),children:c.jsx(G1,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:l,onPointerDownOutside:u,onFocusOutside:ee=>ee.preventDefault(),onDismiss:()=>T.onOpenChange(!1),children:c.jsx(Ue,{role:"listbox",id:T.contentId,"data-state":T.open?"open":"closed","aria-multiselectable":T.multi?"true":void 0,dir:T.dir,onContextMenu:ee=>ee.preventDefault(),...L,...Pe,onPlaced:()=>se(!0),ref:U,style:{display:"flex",flexDirection:"column",outline:"none",...L.style},onKeyDown:Fe(L.onKeyDown,ee=>{const ye=ee.ctrlKey||ee.altKey||ee.metaKey;if(ee.key==="Tab"&&ee.preventDefault(),!ye&&ee.key.length===1&&pe(ee.key),["ArrowUp","ArrowDown","Home","End"].includes(ee.key)){let de=oe().filter(xe=>!xe.disabled).map(xe=>xe.ref.current);if(["ArrowUp","End"].includes(ee.key)&&(de=de.slice().reverse()),["ArrowUp","ArrowDown"].includes(ee.key)){const xe=ee.target,je=de.indexOf(xe);de=de.slice(je+1)}setTimeout(()=>ve(de)),ee.preventDefault()}})})})})})})});Du.displayName=i6;const c6="SelectItemAlignedPosition",Vu=f.forwardRef((e,t)=>{const{__scopeSelect:r,onPlaced:a,...o}=e,l=Cn(er,r),u=Nn(er,r),[h,m]=f.useState(null),[w,v]=f.useState(null),b=at(t,U=>v(U)),y=fo(r),S=f.useRef(!1),$=f.useRef(!0),{viewport:_,selectedItem:j,selectedItemText:L,focusSelectedItem:T}=u,O=f.useCallback(()=>{if(l.trigger&&l.valueNode&&h&&w&&_&&j&&L){const U=l.trigger.getBoundingClientRect(),J=w.getBoundingClientRect(),Z=l.valueNode.getBoundingClientRect(),ie=L.getBoundingClientRect();if(l.dir!=="rtl"){const xe=ie.left-J.left,je=Z.left-xe,lt=U.left-je,De=U.width+lt,Ie=Math.max(De,J.width),Dt=window.innerWidth-bn,et=r1(je,[bn,Dt-Ie]);h.style.minWidth=`${De}px`,h.style.left=`${et}px`}else{const xe=J.right-ie.right,je=window.innerWidth-Z.right-xe,lt=window.innerWidth-U.right-je,De=U.width+lt,Ie=Math.max(De,J.width),Dt=window.innerWidth-bn,et=r1(je,[bn,Dt-Ie]);h.style.minWidth=`${De}px`,h.style.right=`${et}px`}const $e=y(),oe=window.innerHeight-bn*2,P=_.scrollHeight,se=window.getComputedStyle(w),Re=parseInt(se.borderTopWidth,10),ve=parseInt(se.paddingTop,10),le=parseInt(se.borderBottomWidth,10),Ae=parseInt(se.paddingBottom,10),Be=Re+ve+P+Ae+le,He=Math.min(j.offsetHeight*5,Be),pe=window.getComputedStyle(_),rt=parseInt(pe.paddingTop,10),be=parseInt(pe.paddingBottom,10),qe=U.top+U.height/2-bn,Ue=oe-qe,Pe=j.offsetHeight/2,ee=j.offsetTop+Pe,ye=Re+ve+ee,Te=Be-ye;if(ye<=qe){const xe=j===$e[$e.length-1].ref.current;h.style.bottom="0px";const je=w.clientHeight-_.offsetTop-_.offsetHeight,lt=Math.max(Ue,Pe+(xe?be:0)+je+le),De=ye+lt;h.style.height=`${De}px`}else{const xe=j===$e[0].ref.current;h.style.top="0px";const lt=Math.max(qe,Re+_.offsetTop+(xe?rt:0)+Pe)+Te;h.style.height=`${lt}px`,_.scrollTop=ye-qe+_.offsetTop}h.style.margin=`${bn}px 0`,h.style.minHeight=`${He}px`,h.style.maxHeight=`${oe}px`,a?.(),requestAnimationFrame(()=>S.current=!0)}},[y,l.trigger,l.valueNode,h,w,_,j,L,l.dir,a]);Lt(()=>O(),[O]);const[N,z]=f.useState();Lt(()=>{w&&z(window.getComputedStyle(w).zIndex)},[w]);const W=f.useCallback(U=>{U&&$.current===!0&&(O(),T?.(),$.current=!1)},[O,T]);return c.jsx(u6,{scope:r,contentWrapper:h,shouldExpandOnScrollRef:S,onScrollButtonChange:W,children:c.jsx("div",{ref:m,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:N},children:c.jsx(Xe.div,{...o,ref:b,style:{boxSizing:"border-box",maxHeight:"100%",...o.style}})})})});Vu.displayName=c6;const l6="SelectPopperPosition",Ci=f.forwardRef((e,t)=>{const{__scopeSelect:r,align:a="start",collisionPadding:o=bn,...l}=e,u=Rs(r);return c.jsx(K1,{...u,...l,ref:t,align:a,collisionPadding:o,style:{boxSizing:"border-box",...l.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Ci.displayName=l6;const[u6,r0]=Ar(er,{}),$i="SelectViewport",o0=f.forwardRef((e,t)=>{const{__scopeSelect:r,...a}=e,o=Nn($i,r),l=r0($i,r),u=at(t,o.onViewportChange),h=f.useRef(0);return c.jsxs(c.Fragment,{children:[c.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),c.jsx(Ss.Slot,{scope:r,children:c.jsx(Xe.div,{"data-radix-select-viewport":"",role:"presentation",...a,ref:u,style:{position:"relative",flex:1,overflow:"auto",...a.style},onScroll:Fe(a.onScroll,m=>{const w=m.currentTarget,{contentWrapper:v,shouldExpandOnScrollRef:b}=l;if(b?.current&&v){const y=Math.abs(h.current-w.scrollTop);if(y>0){const S=window.innerHeight-bn*2,$=parseFloat(v.style.minHeight),_=parseFloat(v.style.height),j=Math.max($,_);if(j<S){const L=j+y,T=Math.min(S,L),O=L-T;v.style.height=`${T}px`,v.style.bottom==="0px"&&(w.scrollTop=O>0?O:0,v.style.justifyContent="flex-end")}}}h.current=w.scrollTop})})})]})});o0.displayName=$i;const Nu="SelectGroup",[d6,f6]=Ar(Nu),s0=f.forwardRef((e,t)=>{const{__scopeSelect:r,...a}=e,o=or();return c.jsx(d6,{scope:r,id:o,children:c.jsx(Xe.div,{role:"group","aria-labelledby":o,...a,ref:t})})});s0.displayName=Nu;const Hu="SelectLabel",a0=f.forwardRef((e,t)=>{const{__scopeSelect:r,...a}=e,o=f6(Hu,r);return c.jsx(Xe.div,{id:o.id,...a,ref:t})});a0.displayName=Hu;const ps="SelectItem",[h6,ku]=Ar(ps),i0=f.forwardRef((e,t)=>{const{__scopeSelect:r,value:a,disabled:o=!1,textValue:l,...u}=e,h=Cn(ps,r),m=Nn(ps,r),w=typeof a=="string"?Array.isArray(h.value)?h.value.includes(a):h.value===a:a.every(T=>h.value?.includes(T)),v=Array.isArray(h.value)&&Array.isArray(a)&&a.some(T=>h.value?.includes(T)),[b,y]=f.useState(l??""),[S,$]=f.useState(!1),_=at(t,T=>m.itemRefCallback?.(T,a,o)),j=or(),L=()=>{if(!o){let T=h.multi&&typeof a=="string"?[a]:a;v&&!w?h.onValueChange(T):Array.isArray(h.value)&&(T=Wu(a,h.value)),h.onValueChange(T),h.multi||h.onOpenChange(!1)}};if(!h.multi&&Array.isArray(a))throw new Error("You can only pass an array of values in multi selects");return c.jsx(h6,{scope:r,value:a,disabled:o,textId:j,isSelected:w,isIntermediate:v,onItemTextChange:f.useCallback(T=>{y(O=>O||(T?.textContent??"").trim())},[]),children:c.jsx(Ss.ItemSlot,{scope:r,value:a,disabled:o,textValue:b,children:c.jsx(Xe.div,{role:"option","aria-labelledby":j,"data-highlighted":S?"":void 0,"aria-selected":h.multi?void 0:w&&S,"aria-checked":h.multi?w:void 0,"data-state":w?"checked":"unchecked","aria-disabled":o||void 0,"data-disabled":o?"":void 0,tabIndex:o?void 0:-1,...u,ref:_,onFocus:Fe(u.onFocus,()=>$(!0)),onBlur:Fe(u.onBlur,()=>$(!1)),onPointerUp:Fe(u.onPointerUp,L),onPointerMove:Fe(u.onPointerMove,T=>{o?m.onItemLeave?.():T.currentTarget.focus({preventScroll:!0})}),onPointerLeave:Fe(u.onPointerLeave,T=>{T.currentTarget===document.activeElement&&m.onItemLeave?.()}),onKeyDown:Fe(u.onKeyDown,T=>{m.searchRef?.current!==""&&T.key===" "||(Px.includes(T.key)&&L(),T.key===" "&&T.preventDefault())})})})})});i0.displayName=ps;const to="SelectItemText",c0=f.forwardRef((e,t)=>{const{__scopeSelect:r,className:a,style:o,...l}=e,u=Cn(to,r),h=Nn(to,r),m=ku(to,r),w=o6(to,r),[v,b]=f.useState(null),y=at(t,L=>b(L),m.onItemTextChange,L=>h.itemTextRefCallback?.(L,m.value,m.disabled)),S=v?.textContent,$=f.useMemo(()=>c.jsx("option",{value:m.value,disabled:m.disabled,children:S},Array.isArray(m.value)?m.value.join(";"):m.value),[m.disabled,m.value,S]),{onNativeOptionAdd:_,onNativeOptionRemove:j}=w;return Lt(()=>(_($),()=>j($)),[_,j,$]),c.jsxs(c.Fragment,{children:[c.jsx(Xe.span,{id:m.textId,...l,ref:y}),m.isSelected&&u.valueNode&&!u.valueNodeHasChildren?rr.createPortal(l.children,u.valueNode):null]})});c0.displayName=to;const Fu="SelectItemIndicator",l0=f.forwardRef((e,t)=>{const{__scopeSelect:r,children:a,...o}=e,l=ku(Fu,r);return typeof a=="function"?c.jsx(Xe.span,{"aria-hidden":!0,...o,ref:t,children:a({isSelected:l.isSelected,isIntermediate:l.isIntermediate})}):l.isSelected?c.jsx(Xe.span,{"aria-hidden":!0,...o,ref:t,children:a}):null});l0.displayName=Fu;const Si="SelectScrollUpButton",u0=f.forwardRef((e,t)=>{const r=Nn(Si,e.__scopeSelect),a=r0(Si,e.__scopeSelect),[o,l]=f.useState(!1),u=at(t,a.onScrollButtonChange);return Lt(()=>{if(r.viewport&&r.isPositioned){const h=r.viewport,m=()=>{const w=h.scrollTop>0;l(w)};return m(),h.addEventListener("scroll",m),()=>h.removeEventListener("scroll",m)}},[r.viewport,r.isPositioned]),o?c.jsx(f0,{...e,ref:u,onAutoScroll:()=>{const{viewport:h,selectedItem:m}=r;h&&m&&(h.scrollTop-=m.offsetHeight)}}):null});u0.displayName=Si;const Ri="SelectScrollDownButton",d0=f.forwardRef((e,t)=>{const r=Nn(Ri,e.__scopeSelect),a=r0(Ri,e.__scopeSelect),[o,l]=f.useState(!1),u=at(t,a.onScrollButtonChange);return Lt(()=>{if(r.viewport&&r.isPositioned){const h=r.viewport,m=()=>{const w=h.scrollHeight-h.clientHeight,v=Math.ceil(h.scrollTop)<w;l(v)};return m(),h.addEventListener("scroll",m),()=>h.removeEventListener("scroll",m)}},[r.viewport,r.isPositioned]),o?c.jsx(f0,{...e,ref:u,onAutoScroll:()=>{const{viewport:h,selectedItem:m}=r;h&&m&&(h.scrollTop+=m.offsetHeight)}}):null});d0.displayName=Ri;const f0=f.forwardRef((e,t)=>{const{__scopeSelect:r,onAutoScroll:a,...o}=e,l=Nn("SelectScrollButton",r),u=f.useRef(null),h=fo(r),m=f.useCallback(()=>{u.current!==null&&(window.clearInterval(u.current),u.current=null)},[]);return f.useEffect(()=>()=>m(),[m]),Lt(()=>{h().find(v=>v.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[h]),c.jsx(Xe.div,{"aria-hidden":!0,...o,ref:t,style:{flexShrink:0,...o.style},onPointerMove:Fe(o.onPointerMove,()=>{l.onItemLeave?.(),u.current===null&&(u.current=window.setInterval(a,50))}),onPointerLeave:Fe(o.onPointerLeave,()=>{m()})})});f0.displayName="SelectScrollButtonImpl";const g6="SelectSeparator",h0=f.forwardRef((e,t)=>{const{__scopeSelect:r,...a}=e;return c.jsx(Xe.div,{"aria-hidden":!0,...a,ref:t})});h0.displayName=g6;const _i="SelectArrow",g0=f.forwardRef((e,t)=>{const{__scopeSelect:r,...a}=e,o=Rs(r),l=Cn(_i,r),u=Nn(_i,r);return l.open&&u.position==="popper"?c.jsx(Qp,{...o,...a,ref:t}):null});g0.displayName=_i;const m6="BubbleSelect",p6=f.forwardRef((e,t)=>{const{value:r,...a}=e,o=f.useRef(null),l=at(t,o),u=Zp(r),h=Cn(m6,void 0);f.useEffect(()=>{const w=o.current,v=window.HTMLSelectElement.prototype,y=Object.getOwnPropertyDescriptor(v,"value").set;if(u!==r&&y){const S=new Event("change",{bubbles:!0});y.call(w,r),w.dispatchEvent(S)}},[u,r]);let m=r;return h.multi&&!Array.isArray(r)&&(m=[]),c.jsx(Xp,{asChild:!0,children:c.jsx("select",{...a,multiple:h.multi?!0:void 0,ref:l,defaultValue:m})})});p6.displayName="BubbleSelect";function zu(e){const t=lo(e),r=f.useRef(""),a=f.useRef(0),o=f.useCallback(u=>{const h=r.current+u;t(h),function m(w){r.current=w,window.clearTimeout(a.current),w!==""&&(a.current=window.setTimeout(()=>m(""),1e3))}(h)},[t]),l=f.useCallback(()=>{r.current="",window.clearTimeout(a.current)},[]);return f.useEffect(()=>()=>window.clearTimeout(a.current),[]),[r,o,l]}function Uu(e,t,r){const o=t.length>1&&Array.from(t).every(w=>w===t[0])?t[0]:t,l=r?e.indexOf(r):-1;let u=w6(e,Math.max(l,0));o.length===1&&(u=u.filter(w=>w!==r));const m=u.find(w=>w.textValue.toLowerCase().startsWith(o.toLowerCase()));return m!==r?m:void 0}function w6(e,t){return e.map((r,a)=>e[(t+a)%e.length])}const Wu=(e,t=[])=>{if(Array.isArray(e))return e.reduce((a,o)=>Wu(o,a),t);const r=t.indexOf(e);return r===-1?[...t,e]:[...t.slice(0,r),...t.slice(r+1)]},x6=Zi,v6=Xi,b6=Pi,y6=e0,C6=t0,$6=n0,S6=o0,R6=s0,_6=a0,j6=i0,A6=c0,T6=l0,E6=u0,I6=d0,M6=h0,L6=g0,Xt=Object.freeze(Object.defineProperty({__proto__:null,Arrow:L6,Content:$6,Group:R6,Icon:y6,Item:j6,ItemIndicator:T6,ItemText:A6,Label:_6,Portal:C6,Root:x6,ScrollDownButton:I6,ScrollUpButton:E6,Select:Zi,SelectArrow:g0,SelectContent:n0,SelectGroup:s0,SelectIcon:e0,SelectItem:i0,SelectItemIndicator:l0,SelectItemText:c0,SelectLabel:a0,SelectPortal:t0,SelectScrollDownButton:d0,SelectScrollUpButton:u0,SelectSeparator:h0,SelectTrigger:Xi,SelectValue:Pi,SelectViewport:o0,Separator:M6,Trigger:v6,Value:b6,Viewport:S6,createSelectScope:t6},Symbol.toStringTag,{value:"Module"}));function Xn(e,t,{checkForDefaultPrevented:r=!0}={}){return function(o){if(e?.(o),r===!1||!o.defaultPrevented)return t?.(o)}}const O6=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M16 2A12.014 12.014 0 0 0 4 14c0 3 1.57 6.883 4.201 10.375C10.85 27.894 13.764 30 16 30s5.151-2.101 7.799-5.625C26.43 20.875 28 17 28 14A12.014 12.014 0 0 0 16 2M8 14.5A1.5 1.5 0 0 1 9.5 13a4.5 4.5 0 0 1 4.5 4.5 1.5 1.5 0 0 1-1.5 1.5A4.5 4.5 0 0 1 8 14.5M18 25h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2m1.5-6a1.5 1.5 0 0 1-1.5-1.5 4.5 4.5 0 0 1 4.5-4.5 1.5 1.5 0 0 1 1.5 1.5 4.5 4.5 0 0 1-4.5 4.5"})})};f.forwardRef(O6);const B6=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M28 6H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2v11a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V13a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-9 12h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2m9-7H4V8h24z"})})};f.forwardRef(B6);const D6=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M30.5 7v6a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1 0-3h2.137l-2.375-2.173-.047-.046a9.5 9.5 0 1 0-6.84 16.219H16a9.44 9.44 0 0 0 6.519-2.59 1.5 1.5 0 1 1 2.061 2.181A12.43 12.43 0 0 1 16 28.5h-.171a12.5 12.5 0 1 1 8.985-21.368L27.5 9.59V7a1.5 1.5 0 0 1 3 0"})})};f.forwardRef(D6);const V6=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"m26.061 19.061-9 9a1.503 1.503 0 0 1-2.125 0l-9-9a1.503 1.503 0 1 1 2.125-2.125l6.439 6.439V5a1.5 1.5 0 1 1 3 0v18.375l6.439-6.44a1.502 1.502 0 1 1 2.125 2.125z"})})};f.forwardRef(V6);const N6=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H8.625l6.44 6.439a1.502 1.502 0 1 1-2.125 2.125l-9-9a1.5 1.5 0 0 1 0-2.125l9-9a1.503 1.503 0 0 1 2.125 2.125L8.625 14.5H27a1.5 1.5 0 0 1 1.5 1.5"})})},H6=f.forwardRef(N6),k6=H6,F6=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"m28.061 17.061-9 9a1.503 1.503 0 1 1-2.125-2.125l6.439-6.436H5a1.5 1.5 0 1 1 0-3h18.375l-6.436-6.44a1.503 1.503 0 0 1 2.125-2.125l9 9a1.5 1.5 0 0 1-.003 2.126"})})};f.forwardRef(F6);const z6=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M26.061 15.061a1.5 1.5 0 0 1-2.125 0L17.5 8.625V27a1.5 1.5 0 1 1-3 0V8.625l-6.439 6.436a1.503 1.503 0 1 1-2.125-2.125l9-9a1.5 1.5 0 0 1 2.125 0l9 9a1.5 1.5 0 0 1 0 2.125"})})};f.forwardRef(z6);const U6=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M11 13.5H5A1.5 1.5 0 0 1 3.5 12V6a1.5 1.5 0 0 1 3 0v1.733C8.581 5.683 11.786 3.5 16 3.5c5.558 0 8.92 3.299 9.061 3.439a1.5 1.5 0 0 1-2.117 2.125C22.889 9.01 20.25 6.5 16 6.5c-3.625 0-6.367 2.21-8 4h3a1.5 1.5 0 1 1 0 3m16 5h-6a1.5 1.5 0 1 0 0 3h3c-1.625 1.79-4.375 4-8 4-4.25 0-6.889-2.511-6.944-2.565A1.5 1.5 0 0 0 6.94 25.06c.141.141 3.504 3.44 9.061 3.44 4.214 0 7.419-2.183 9.5-4.233V26a1.5 1.5 0 1 0 3 0v-6a1.5 1.5 0 0 0-1.5-1.5"})})};f.forwardRef(U6);const W6=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M27.725 21.993C27.031 20.798 26 17.416 26 13a10 10 0 0 0-20 0c0 4.418-1.032 7.797-1.726 8.993A2 2 0 0 0 6 25h5.101a5 5 0 0 0 9.798 0H26a2 2 0 0 0 1.725-3.008M16 27a3 3 0 0 1-2.828-2h5.656A3 3 0 0 1 16 27"})})};f.forwardRef(W6);const q6=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M22.135 14.308A6.001 6.001 0 0 0 17.5 4.5H9A1.5 1.5 0 0 0 7.5 6v19A1.5 1.5 0 0 0 9 26.5h10a6.5 6.5 0 0 0 3.135-12.192M10.5 7.5h7a3 3 0 0 1 0 6h-7zm8.5 16h-8.5v-7H19a3.5 3.5 0 1 1 0 7"})})};f.forwardRef(q6);const G6=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M27 4v20a1 1 0 0 1-1 1H9a2 2 0 0 0-2 2h17a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4h17a1 1 0 0 1 1 1"})})};f.forwardRef(G6);const K6=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M19 14a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1m10-5v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v1h5a2 2 0 0 1 2 2M12 7h8V6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1zm15 7.201V9H5v5.201A23 23 0 0 0 16 17a23 23 0 0 0 11-2.799"})})};f.forwardRef(K6);const Y6=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M9.5 8A1.5 1.5 0 0 1 11 6.5h16a1.5 1.5 0 0 1 0 3H11A1.5 1.5 0 0 1 9.5 8M27 14.5H11a1.5 1.5 0 1 0 0 3h16a1.5 1.5 0 1 0 0-3m0 8H11a1.5 1.5 0 1 0 0 3h16a1.5 1.5 0 1 0 0-3M5.5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4"})})};f.forwardRef(Y6);const J6=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M26 4h-3V3a1 1 0 0 0-2 0v1H11V3a1 1 0 0 0-2 0v1H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 6H6V6h3v1a1 1 0 0 0 2 0V6h10v1a1 1 0 0 0 2 0V6h3z"})})},Q6=f.forwardRef(J6),Z6=Q6,X6=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M30 14h-1.35l-3.472-7.812A2 2 0 0 0 23.35 5H8.65a2 2 0 0 0-1.828 1.188L3.35 14H2a1 1 0 0 0 0 2h1v10a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-2h12v2a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V16h1a1 1 0 0 0 0-2m-20 6H8a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2m12 0a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z"})})};f.forwardRef(X6);const P6=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"m26.708 12.708-10 10a1 1 0 0 1-1.415 0l-10-10A1 1 0 0 1 6 11h20a1 1 0 0 1 .707 1.707"})})},e4=f.forwardRef(P6),Dn=e4,t4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M26.924 20.383A1 1 0 0 1 26 21H6a1 1 0 0 1-.708-1.707l10-10a1 1 0 0 1 1.415 0l10 10a1 1 0 0 1 .217 1.09"})})};f.forwardRef(t4);const n4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M7 26a1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 0 1 0-2 3 3 0 0 1 3 3m-3-7a1 1 0 0 0 0 2 5 5 0 0 1 5 5 1 1 0 1 0 2 0 7.01 7.01 0 0 0-7-7m0-4a1 1 0 0 0 0 2 9.01 9.01 0 0 1 9 9 1 1 0 0 0 2 0A11.01 11.01 0 0 0 4 15M27 5H5a2 2 0 0 0-2 2v5a1 1 0 0 0 1 1 13.014 13.014 0 0 1 13 13 1 1 0 0 0 1 1h9a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2"})})};f.forwardRef(n4);const r4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M25 3h-1a2 2 0 0 0-2 2v2h-3.5V5a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v2H10V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v5.586A1.98 1.98 0 0 0 5.586 12L7 13.414V27a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V13.414L26.414 12A1.98 1.98 0 0 0 27 10.586V5a2 2 0 0 0-2-2m-6 24h-6v-8a3 3 0 0 1 6 0z"})})};f.forwardRef(r4);const o4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-5-2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-3-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-3 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M25 24H7a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v13h17a1 1 0 0 1 0 2"})})};f.forwardRef(o4);const s4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M3.094 14.443a12.8 12.8 0 0 1 2.914-6.72 2 2 0 0 1 2.953-.138l3.459 3.533a1.98 1.98 0 0 1 .211 2.56 3.2 3.2 0 0 0-.462.968.5.5 0 0 1-.478.354h-8.1a.5.5 0 0 1-.497-.557m14.08-11.435A2 2 0 0 0 15 5v5.084a1.98 1.98 0 0 0 1.656 1.97 4 4 0 0 1 .677 7.72.51.51 0 0 0-.333.476v8.154a.5.5 0 0 0 .558.5A13.04 13.04 0 0 0 29 16.185C29.094 9.4 23.899 3.61 17.174 3.008M14.656 19.77a4 4 0 0 1-2.425-2.427.51.51 0 0 0-.475-.343H3.59a.5.5 0 0 0-.5.556A13.01 13.01 0 0 0 14.443 28.91a.5.5 0 0 0 .556-.5V20.25a.51.51 0 0 0-.343-.48"})})};f.forwardRef(s4);const a4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m0 2a11 11 0 0 1 8.984 4.659L16 14.845zm0 22a11 11 0 0 1-8.984-4.659l18.97-10.951A11 11 0 0 1 16 27"})})};f.forwardRef(a4);const i4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"m29.061 10.061-16 16a1.5 1.5 0 0 1-2.125 0l-7-7a1.504 1.504 0 0 1 2.125-2.125L12 22.875 26.939 7.939a1.502 1.502 0 1 1 2.125 2.125z"})})};f.forwardRef(i4);const c4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m5.708 10.708-7 7a1 1 0 0 1-1.415 0l-3-3a1 1 0 0 1 1.415-1.415L14 18.586l6.293-6.293a1 1 0 0 1 1.415 1.415"})})},l4=f.forwardRef(c4),u4=l4,d4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"m27.061 13.061-10 10a1.503 1.503 0 0 1-2.125 0l-10-10a1.503 1.503 0 1 1 2.125-2.125L16 19.875l8.939-8.94a1.502 1.502 0 1 1 2.125 2.125z"})})};f.forwardRef(d4);const f4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M21.061 24.939a1.503 1.503 0 0 1-2.125 2.125l-10-10a1.5 1.5 0 0 1 0-2.125l10-10a1.503 1.503 0 0 1 2.125 2.125L12.125 16z"})})},h4=f.forwardRef(f4),qu=h4,g4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"m23.061 17.061-10 10a1.503 1.503 0 0 1-2.125-2.125L19.875 16l-8.936-8.939a1.502 1.502 0 1 1 2.125-2.125l10 10a1.5 1.5 0 0 1-.003 2.125"})})},m4=f.forwardRef(g4),m0=m4,p4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M27.061 21.061a1.503 1.503 0 0 1-2.125 0L16 12.125l-8.939 8.936a1.503 1.503 0 0 1-2.125-2.125l10-10a1.5 1.5 0 0 1 2.125 0l10 10a1.5 1.5 0 0 1 0 2.125"})})};f.forwardRef(p4);const w4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m7 14h-7a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6h6a1 1 0 0 1 0 2"})})},x4=f.forwardRef(w4),v4=x4,b4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M28 16a12 12 0 0 1-20.236 8.728 1.002 1.002 0 0 1 1.375-1.456 10 10 0 1 0-.21-14.343c-.441.446-.857.885-1.26 1.321l2.039 2.043A1 1 0 0 1 9 14H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1.707-.707L6.25 8.838c.402-.437.817-.875 1.258-1.32A12 12 0 0 1 28 16M16 9a1 1 0 0 0-1 1v6a1 1 0 0 0 .485.858l5 3a.999.999 0 0 0 1.486-1.1 1 1 0 0 0-.456-.616L17 15.434V10a1 1 0 0 0-1-1"})})};f.forwardRef(b4);const y4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M20.008 5a11.01 11.01 0 0 0-9.847 6.084A10.9 10.9 0 0 0 9 15.966 1.023 1.023 0 0 1 8.071 17 1 1 0 0 1 7 16a13 13 0 0 1 .668-4.115.5.5 0 0 0-.594-.647A8.01 8.01 0 0 0 1 19c0 4.399 3.719 8 8.125 8H20a11.01 11.01 0 0 0 10.991-11.435C30.764 9.693 25.884 5 20.008 5"})})};f.forwardRef(y4);const C4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M30.991 15.565C30.764 9.693 25.884 5 20.008 5a11.01 11.01 0 0 0-9.847 6.084A10.9 10.9 0 0 0 9 15.966 1.023 1.023 0 0 1 8.071 17 1 1 0 0 1 7 16a13 13 0 0 1 .668-4.115.5.5 0 0 0-.594-.647A8.01 8.01 0 0 0 1 19c0 4.399 3.719 8 8.125 8H20a11.01 11.01 0 0 0 10.991-11.435m-7.283 3.143a1 1 0 0 1-1.415 0L20 16.414V24a1 1 0 0 1-2 0v-7.586l-2.293 2.293a1 1 0 0 1-1.415-1.415l4-4a1 1 0 0 1 1.415 0l4 4a1 1 0 0 1 0 1.415"})})};f.forwardRef(C4);const $4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M8.96 12.153 4.342 16l4.618 3.848a1.5 1.5 0 1 1-1.92 2.305l-6-5a1.5 1.5 0 0 1 0-2.305l6-5a1.5 1.5 0 0 1 1.92 2.304m22 2.694-6-5a1.5 1.5 0 1 0-1.92 2.306L27.658 16l-4.618 3.848a1.5 1.5 0 1 0 1.92 2.305l6-5a1.5 1.5 0 0 0 0-2.305M20.512 3.59a1.5 1.5 0 0 0-1.922.898l-8 22a1.5 1.5 0 0 0 2.82 1.024l8-22a1.5 1.5 0 0 0-.898-1.922"})})};f.forwardRef($4);const S4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M26 10H4a1 1 0 0 0-1 1v6a12.04 12.04 0 0 0 4.068 9H4a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2h-3.067a12.1 12.1 0 0 0 3.375-5.011A5 5 0 0 0 31 16v-1a5 5 0 0 0-5-5m3 6a3 3 0 0 1-2.15 2.875Q27 17.944 27 17v-4.828A3 3 0 0 1 29 15zM14 7V3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0m4 0V3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0m-8 0V3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0"})})};f.forwardRef(S4);const R4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M29.743 13.401a1 1 0 0 0-.487-.675l-3.729-2.125-.015-4.202a1 1 0 0 0-.353-.76 14 14 0 0 0-4.59-2.584 1 1 0 0 0-.808.074L16 5.23l-3.765-2.106a1 1 0 0 0-.809-.075 14 14 0 0 0-4.585 2.594 1 1 0 0 0-.354.758L6.47 10.61 2.74 12.734a1 1 0 0 0-.486.675 13.3 13.3 0 0 0 0 5.195 1 1 0 0 0 .486.675l3.729 2.125.015 4.204a1 1 0 0 0 .353.76 14 14 0 0 0 4.59 2.583 1 1 0 0 0 .808-.073L16 26.768l3.765 2.107a1.013 1.013 0 0 0 .809.073 14 14 0 0 0 4.585-2.592 1 1 0 0 0 .354-.759l.018-4.206 3.729-2.125a1 1 0 0 0 .486-.675c.34-1.713.338-3.477-.003-5.19M16 21a5 5 0 1 1 0-10 5 5 0 0 1 0 10"})})};f.forwardRef(R4);const _4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M18.5 12V6a1.5 1.5 0 1 1 3 0v4.5H26a1.5 1.5 0 1 1 0 3h-6a1.5 1.5 0 0 1-1.5-1.5M12 18.5H6a1.5 1.5 0 1 0 0 3h4.5V26a1.5 1.5 0 1 0 3 0v-6a1.5 1.5 0 0 0-1.5-1.5m14 0h-6a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 1 0 3 0v-4.5H26a1.5 1.5 0 1 0 0-3m-14-14A1.5 1.5 0 0 0 10.5 6v4.5H6a1.5 1.5 0 1 0 0 3h6a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 12 4.5"})})};f.forwardRef(_4);const j4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M22.5 17.5h-2v-3h2a5 5 0 1 0-5-5v2h-3v-2a5 5 0 1 0-5 5h2v3h-2a5 5 0 1 0 5 5v-2h3v2a5 5 0 1 0 5-5m-2-8a2 2 0 1 1 2 2h-2zm-13 0a2 2 0 0 1 4 0v2h-2a2 2 0 0 1-2-2m4 13a2 2 0 1 1-2-2h2zm3-8h3v3h-3zm8 10a2 2 0 0 1-2-2v-2h2a2 2 0 0 1 0 4"})})};f.forwardRef(j4);const A4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M30.5 24a1.5 1.5 0 0 1-1.5 1.5h-3.5V29a1.5 1.5 0 1 1-3 0v-3.5H8A1.5 1.5 0 0 1 6.5 24V9.5H3a1.5 1.5 0 0 1 0-3h3.5V3a1.5 1.5 0 0 1 3 0v19.5H29a1.5 1.5 0 0 1 1.5 1.5M13 9.5h9.5V19a1.5 1.5 0 1 0 3 0V8A1.5 1.5 0 0 0 24 6.5H13a1.5 1.5 0 0 0 0 3"})})};f.forwardRef(A4);const T4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M26.061 23.939a1.503 1.503 0 0 1-2.125 2.125L16 18.125l-7.939 7.936a1.503 1.503 0 1 1-2.125-2.125L13.875 16 5.939 8.061a1.503 1.503 0 1 1 2.125-2.125L16 13.875l7.939-7.94a1.502 1.502 0 1 1 2.125 2.125L18.125 16z"})})},E4=f.forwardRef(T4),sr=E4,I4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m4.708 16.293a1 1 0 0 1-1.415 1.415L16 17.414l-3.293 3.293a1 1 0 0 1-1.415-1.415L14.587 16l-3.293-3.293a1 1 0 1 1 1.415-1.415L16 14.587l3.293-3.293a1 1 0 0 1 1.415 1.415L17.414 16z"})})};f.forwardRef(I4);const M4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M30.48 9.524a1.51 1.51 0 0 0-1.668-.213l-6.276 3.125-5.24-8.704a1.514 1.514 0 0 0-2.592 0l-5.24 8.708L3.19 9.315a1.514 1.514 0 0 0-2.113 1.825l4.625 14.17a1 1 0 0 0 1.46.55C7.194 25.841 10.39 24 16 24s8.806 1.841 8.835 1.859a1 1 0 0 0 1.464-.549l4.625-14.166a1.51 1.51 0 0 0-.444-1.62M21.98 19.6a1 1 0 0 1-1.159.811 28.5 28.5 0 0 0-9.652 0 1 1 0 0 1-.348-1.97 30.6 30.6 0 0 1 10.348 0 1 1 0 0 1 .816 1.159z"})})};f.forwardRef(M4);const L4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M27.414 24a2 2 0 0 1 0 2.829l-.585.585a2 2 0 0 1-2.829 0l-6.906-6.905-2.735 6.292A1.98 1.98 0 0 1 12.533 28h-.098a1.98 1.98 0 0 1-1.801-1.375L4.1 6.615A1.994 1.994 0 0 1 6.615 4.1l20.01 6.534a2 2 0 0 1 .176 3.725l-6.292 2.735z"})})};f.forwardRef(L4);const O4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M16 3C9.271 3 4 6.075 4 10v12c0 3.925 5.271 7 12 7s12-3.075 12-7V10c0-3.925-5.271-7-12-7m10 13c0 1.203-.985 2.429-2.701 3.365C21.366 20.419 18.774 21 16 21s-5.366-.581-7.299-1.635C6.985 18.429 6 17.203 6 16v-2.08C8.133 15.795 11.779 17 16 17s7.868-1.21 10-3.08zm-2.701 9.365C21.366 26.419 18.774 27 16 27s-5.366-.581-7.299-1.635C6.985 24.429 6 23.203 6 22v-2.08C8.133 21.795 11.779 23 16 23s7.868-1.21 10-3.08V22c0 1.203-.985 2.429-2.701 3.365"})})};f.forwardRef(O4);const B4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M29 12a2 2 0 0 0-2-2h-4V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16a1 1 0 0 0 1.625.777L9 19.25V23a2 2 0 0 0 2 2h11.699l4.676 3.778A1 1 0 0 0 29 28zm-5.319 11.223a1 1 0 0 0-.625-.223H11v-4h10a2 2 0 0 0 2-2v-5h4v13.906z"})})};f.forwardRef(B4);const D4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M28.5 19v7a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 26v-7a1.5 1.5 0 0 1 3 0v6.5h19V19a1.5 1.5 0 1 1 3 0m-13.561 1.061a1.5 1.5 0 0 0 2.125 0l5-5a1.502 1.502 0 1 0-2.125-2.125L17.5 15.375V5a1.5 1.5 0 1 0-3 0v10.375l-2.439-2.436a1.502 1.502 0 1 0-2.125 2.125z"})})};f.forwardRef(D4);const V4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M13.5 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m7 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-9 4.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4m9 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-9 8.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4m9 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4"})})};f.forwardRef(V4);const N4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M27 4H11a1 1 0 0 0-1 1v5H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-1 16h-4v-9a1 1 0 0 0-1-1h-9V6h14z"})})};f.forwardRef(N4);const H4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m11 13c.001 1.411-.27 2.81-.8 4.118l-5.587-3.437a2 2 0 0 0-.78-.279l-2.853-.385a2.01 2.01 0 0 0-2 .983h-1.09l-.475-.983a1.99 1.99 0 0 0-1.375-1.083l-1-.216.978-1.718h2.088c.338 0 .67-.087.966-.25l1.532-.845q.202-.113.375-.268l3.364-3.042a1.99 1.99 0 0 0 .407-2.458l-.045-.08A11.01 11.01 0 0 1 27 16M5 16a10.94 10.94 0 0 1 1.068-4.725l1.417 3.784a2 2 0 0 0 1.453 1.25l2.678.576.476.99a2.01 2.01 0 0 0 1.8 1.125h.186l-.904 2.029a2 2 0 0 0 .357 2.171l.018.018L16 25.742l-.242 1.25A11.014 11.014 0 0 1 5 16"})})};f.forwardRef(H4);const k4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:[c.jsx("path",{d:"M20.689 3.88A13 13 0 0 0 16 3a13 13 0 0 0-8.155 23.124l1.02-1.765A11 11 0 0 1 5 16a10.94 10.94 0 0 1 1.068-4.724l1.417 3.784a2 2 0 0 0 1.453 1.25l2.678.576.476.99q.113.226.275.418l1.169-2.025-.121-.25a1.99 1.99 0 0 0-1.375-1.084l-1-.217.978-1.717h2.088c.338 0 .67-.087.966-.25l.726-.4z"}),c.jsx("path",{fillRule:"evenodd",d:"m24 2.144 1.732 1-1.58 2.736q.54.435 1.036.932A13.01 13.01 0 0 1 29 16a13 13 0 0 1-17.69 12.124l-1.578 2.732-1.732-1zm-.86 5.49-4.936 8.549 1.628.22c.277.037.543.132.78.278l5.588 3.436c.53-1.308.801-2.706.8-4.117a11.01 11.01 0 0 0-3.86-8.367M13.92 23.6l-1.593 2.76a11 11 0 0 0 3.43.631l.242-1.25z",clipRule:"evenodd"})]})};f.forwardRef(k4);const F4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m-4.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m10.365 7.5C20.579 21.724 18.441 23 16 23s-4.579-1.275-5.865-3.5a1.001 1.001 0 0 1 1.477-1.31q.157.129.253.31C12.799 20.114 14.266 21 16 21s3.201-.887 4.135-2.5a1 1 0 1 1 1.73 1M20.5 15a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};f.forwardRef(F4);const z4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m-4.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m10 10.865a1 1 0 0 1-1.365-.365C19.201 20.886 17.734 20 16 20s-3.201.887-4.135 2.5a1.001 1.001 0 1 1-1.73-1C11.421 19.276 13.559 18 16 18s4.579 1.275 5.865 3.5a1 1 0 0 1-.365 1.365M20.5 15a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};f.forwardRef(z4);const U4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M27.5 6v5a1.5 1.5 0 1 1-3 0V7.5H21a1.5 1.5 0 0 1 0-3h5A1.5 1.5 0 0 1 27.5 6M11 24.5H7.5V21a1.5 1.5 0 0 0-3 0v5A1.5 1.5 0 0 0 6 27.5h5a1.5 1.5 0 1 0 0-3m15-5a1.5 1.5 0 0 0-1.5 1.5v3.5H21a1.5 1.5 0 1 0 0 3h5a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5m-15-15H6A1.5 1.5 0 0 0 4.5 6v5a1.5 1.5 0 0 0 3 0V7.5H11a1.5 1.5 0 0 0 0-3"})})};f.forwardRef(U4);const W4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M28.5 13a1.5 1.5 0 1 1-3 0V8.625l-7.439 7.439a1.503 1.503 0 1 1-2.125-2.125L23.375 6.5H19a1.5 1.5 0 0 1 0-3h8A1.5 1.5 0 0 1 28.5 5zM23 16a1.5 1.5 0 0 0-1.5 1.5v8h-15v-15h8a1.5 1.5 0 1 0 0-3H6A2.5 2.5 0 0 0 3.5 10v16A2.5 2.5 0 0 0 6 28.5h16a2.5 2.5 0 0 0 2.5-2.5v-8.5A1.5 1.5 0 0 0 23 16"})})},q4=f.forwardRef(W4),G4=q4,K4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M30.914 15.595c-.044-.099-1.103-2.447-3.457-4.801C24.322 7.657 20.36 6 16 6S7.679 7.657 4.542 10.794C2.19 13.148 1.125 15.5 1.086 15.595a1 1 0 0 0 0 .812c.044.1 1.103 2.447 3.456 4.8C7.68 24.344 11.64 26 16 26s8.321-1.657 11.458-4.792c2.353-2.354 3.412-4.702 3.456-4.8a1 1 0 0 0 0-.813M16 21a5 5 0 1 1 0-10 5 5 0 0 1 0 10"})})},Y4=f.forwardRef(K4),J4=Y4,Q4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M6.74 4.328a1 1 0 1 0-1.48 1.345l2.405 2.646c-4.54 2.786-6.493 7.081-6.579 7.276a1 1 0 0 0 0 .813c.044.098 1.103 2.446 3.456 4.8C7.68 24.343 11.64 26 16 26c2.24.013 4.459-.448 6.509-1.354l2.75 3.027a1 1 0 1 0 1.48-1.345zm11.125 15.21a4 4 0 0 1-5.209-5.73zm13.049-3.13c-.053.117-1.319 2.92-4.17 5.475a1 1 0 0 1-1.408-.072L12.675 7.884a1 1 0 0 1 .575-1.66A17 17 0 0 1 16 6c4.36 0 8.321 1.658 11.458 4.794 2.353 2.354 3.412 4.702 3.456 4.801a1 1 0 0 1 0 .813"})})},Z4=f.forwardRef(Q4),X4=Z4,P4=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M17 15v12a1 1 0 0 1-2 0V15a1 1 0 0 1 2 0m8 9a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1m3-6h-2V5a1 1 0 0 0-2 0v13h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M7 20a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1m3-6H8V5a1 1 0 0 0-2 0v9H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m9-6h-2V5a1 1 0 0 0-2 0v3h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1"})})};f.forwardRef(P4);const ev=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"m26.48 16.851-7.474 7.559a1.97 1.97 0 0 1-1.4.585H9.415l-3.707 3.712a1.001 1.001 0 0 1-1.415-1.415l2.823-2.822L15.588 16h10.537a.5.5 0 0 1 .355.851m.607-13.03a8 8 0 0 0-10.737.518l-1.2 1.185a.5.5 0 0 0-.15.351v7.875l6.875-6.875a1 1 0 0 1 1.414 1.414L17.589 14h11.047a.5.5 0 0 0 .445-.27 8.01 8.01 0 0 0-1.994-9.909M7.854 20.904 13 15.758V8.845a.5.5 0 0 0-.851-.355L7.586 13A1.99 1.99 0 0 0 7 14.414v6.136a.5.5 0 0 0 .854.354"})})};f.forwardRef(ev);const tv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"m26.708 10.293-7-7A1 1 0 0 0 19 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V11a1 1 0 0 0-.293-.707M19 11V5.5l5.5 5.5z"})})};f.forwardRef(tv);const nv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"m26.708 10.293-7-7A1 1 0 0 0 19 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V11a1 1 0 0 0-.293-.707m-7 11a1 1 0 0 1-1.415 1.415L16 20.414l-2.293 2.293a1 1 0 0 1-1.415-1.415L14.587 19l-2.293-2.293a1 1 0 1 1 1.415-1.415L16 17.587l2.293-2.293a1 1 0 0 1 1.415 1.415L17.414 19zM19 11V5.5l5.5 5.5z"})})};f.forwardRef(nv);const rv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M6 15h20a1 1 0 0 0 1-1v-3a1 1 0 0 0-.293-.707l-7-7A1 1 0 0 0 19 3H7a2 2 0 0 0-2 2v9a1 1 0 0 0 1 1m13-9.5 5.5 5.5H19zM28 19a1 1 0 0 1-1 1h-3v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1M8 18H6a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0v-1h1a3.5 3.5 0 1 0 0-7m0 5H7v-3h1a1.5 1.5 0 1 1 0 3m8-5h-2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2a4.5 4.5 0 1 0 0-9m0 7h-1v-5h1a2.5 2.5 0 0 1 0 5"})})};f.forwardRef(rv);const ov=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M25.5 16a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 1 1 0-3h16a1.5 1.5 0 0 1 1.5 1.5M29 8.5H3a1.5 1.5 0 0 0 0 3h26a1.5 1.5 0 1 0 0-3m-10 12h-6a1.5 1.5 0 1 0 0 3h6a1.5 1.5 0 1 0 0-3"})})},sv=f.forwardRef(ov),av=sv,iv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M27 9H16.414L13 5.586A1.98 1.98 0 0 0 11.586 5H5a2 2 0 0 0-2 2v18.078A1.926 1.926 0 0 0 4.924 27H27.11A1.89 1.89 0 0 0 29 25.111V11a2 2 0 0 0-2-2M5 7h6.586l2 2H5z"})})};f.forwardRef(iv);const cv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M27 9h-4.385q.075-.06.146-.125A3.7 3.7 0 0 0 24 6.196 4.08 4.08 0 0 0 19.805 2a3.7 3.7 0 0 0-2.68 1.239A6.9 6.9 0 0 0 16 5.049a6.9 6.9 0 0 0-1.125-1.81A3.7 3.7 0 0 0 12.195 2 4.08 4.08 0 0 0 8 6.196a3.7 3.7 0 0 0 1.239 2.679q.072.06.146.125H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v8a2 2 0 0 0 2 2h7.5a.5.5 0 0 0 .5-.5V15H5v-4h10v4h2v-4h10v4H17v11.5a.5.5 0 0 0 .5.5H25a2 2 0 0 0 2-2v-8a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2M10.564 7.375A1.7 1.7 0 0 1 10 6.125 2.076 2.076 0 0 1 12.074 4h.061a1.71 1.71 0 0 1 1.25.563c1.049 1.185 1.419 3.15 1.549 4.365-1.22-.13-3.184-.5-4.37-1.553m10.875 0c-1.186 1.05-3.155 1.42-4.375 1.55.148-1.314.561-3.237 1.561-4.361A1.7 1.7 0 0 1 19.875 4h.061A2.077 2.077 0 0 1 22 6.135a1.7 1.7 0 0 1-.564 1.24z"})})};f.forwardRef(cv);const lv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m9.796 8h-4.428a17.8 17.8 0 0 0-2.533-5.625A11.05 11.05 0 0 1 25.796 11M16 5.014c1.5 1.625 2.625 3.693 3.296 5.986h-6.592C13.375 8.707 14.5 6.641 16 5.014M12 16c0-1.005.084-2.009.25-3h7.5a18.2 18.2 0 0 1 0 6h-7.5a18 18 0 0 1-.25-3m.704 5h6.592c-.671 2.293-1.796 4.359-3.296 5.986-1.5-1.627-2.625-3.693-3.296-5.986m6.131 5.625A17.8 17.8 0 0 0 21.367 21h4.43a11.05 11.05 0 0 1-6.962 5.625M21.776 19a20.2 20.2 0 0 0 0-6h4.808a11 11 0 0 1 0 6z"})})};f.forwardRef(lv);const uv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{fillRule:"evenodd",d:"M13.29 28.226 6.765 24.46a2.822 2.822 0 1 1-2.708-4.693v-7.532a2.824 2.824 0 1 1 2.708-4.693l6.525-3.767a2.824 2.824 0 1 1 5.42 0l6.524 3.766a2.822 2.822 0 1 1 2.71 4.693v7.533a2.824 2.824 0 1 1-2.71 4.694l-6.524 3.766A2.825 2.825 0 0 1 16 31.84a2.822 2.822 0 0 1-2.71-3.614M16 5.806q.413-.002.791-.113l8.531 14.776a2.8 2.8 0 0 0-.791 1.37H7.467a2.8 2.8 0 0 0-.79-1.369L15.21 5.693q.377.11.791.112M7.468 23.178l-.033.12 6.526 3.767A2.81 2.81 0 0 1 16 26.195c.802 0 1.526.334 2.04.871l6.523-3.766-.032-.121zM5.397 12.233a2.824 2.824 0 0 0 2.038-3.532l6.526-3.767q.043.045.088.088L5.517 19.8l-.12-.032zM26.482 19.8q.06-.018.121-.033v-7.532a2.824 2.824 0 0 1-2.04-3.534L18.04 4.934q-.045.045-.089.088z",clipRule:"evenodd"})})};f.forwardRef(uv);const dv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M27 7v7.5a.5.5 0 0 1-.5.5H17V5.5a.5.5 0 0 1 .5-.5H25a2 2 0 0 1 2 2M14.5 5H7a2 2 0 0 0-2 2v7.5a.5.5 0 0 0 .5.5H15V5.5a.5.5 0 0 0-.5-.5m12 12H17v9.5a.5.5 0 0 0 .5.5H25a2 2 0 0 0 2-2v-7.5a.5.5 0 0 0-.5-.5M5 17.5V25a2 2 0 0 0 2 2h7.5a.5.5 0 0 0 .5-.5V17H5.5a.5.5 0 0 0-.5.5"})})};f.forwardRef(dv);const fv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M10.5 6.5v5h-7A.5.5 0 0 1 3 11V8a2 2 0 0 1 2-2h5a.5.5 0 0 1 .5.5m2 19a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-5h-7zM3 21v3a2 2 0 0 0 2 2h5a.5.5 0 0 0 .5-.5v-5h-7a.5.5 0 0 0-.5.5m0-7v4a.5.5 0 0 0 .5.5h7v-5h-7a.5.5 0 0 0-.5.5m16-8h-6a.5.5 0 0 0-.5.5v5h7v-5A.5.5 0 0 0 19 6m9.5 7.5h-7v5h7a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5m-16 5h7v-5h-7zM27 6h-5a.5.5 0 0 0-.5.5v5h7a.5.5 0 0 0 .5-.5V8a2 2 0 0 0-2-2m1.5 14.5h-7v5a.5.5 0 0 0 .5.5h5a2 2 0 0 0 2-2v-3a.5.5 0 0 0-.5-.5"})})};f.forwardRef(fv);const hv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M28.791 17.633a3.04 3.04 0 0 0-2.326-.597C28.813 14.666 30 12.31 30 10c0-3.309-2.661-6-5.933-6A5.95 5.95 0 0 0 19.5 6.094 5.95 5.95 0 0 0 14.932 4C11.663 4 9 6.691 9 10c0 1.375.405 2.711 1.258 4.125a4 4 0 0 0-1.844 1.05L5.586 18H2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h13q.123 0 .242-.03l8-2a1 1 0 0 0 .15-.05l4.858-2.067.055-.025a3.074 3.074 0 0 0 .491-5.195zm-1.362 3.393-4.75 2.023L14.875 25H7v-5.586l2.829-2.828A1.98 1.98 0 0 1 11.242 16H17.5a1.5 1.5 0 0 1 0 3H14a1 1 0 0 0 0 2h4q.113 0 .224-.025l8.375-1.926.038-.01a1.075 1.075 0 0 1 .788 1.987z"})})};f.forwardRef(hv);const gv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M28 10.5h-5.475l.951-5.231a1.5 1.5 0 1 0-2.952-.538L19.475 10.5h-4.95l.951-5.231a1.5 1.5 0 1 0-2.952-.538L11.475 10.5H6a1.5 1.5 0 0 0 0 3h4.93l-.909 5H4a1.5 1.5 0 0 0 0 3h5.475l-.951 5.231a1.5 1.5 0 0 0 1.207 1.75q.134.022.269.019a1.5 1.5 0 0 0 1.475-1.233l1.05-5.767h4.95l-.951 5.231a1.5 1.5 0 1 0 2.952.543l1.049-5.774H26a1.5 1.5 0 1 0 0-3h-4.93l.909-5H28a1.5 1.5 0 1 0 0-3m-9.979 8H13.07l.909-5h4.951z"})})};f.forwardRef(gv);const mv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M31.5 22.5a5 5 0 0 1-5 5 4.94 4.94 0 0 1-3.571-1.45 1.5 1.5 0 0 1 2.142-2.1 1.94 1.94 0 0 0 1.429.55 2 2 0 0 0 0-4 1.94 1.94 0 0 0-1.429.55 1.5 1.5 0 0 1-2.551-1.3l1-6A1.5 1.5 0 0 1 25 12.5h5a1.5 1.5 0 1 1 0 3h-3.729l-.338 2.029q.283-.03.567-.029a5 5 0 0 1 5 5M18 5.5A1.5 1.5 0 0 0 16.5 7v6h-10V7a1.5 1.5 0 0 0-3 0v15a1.5 1.5 0 0 0 3 0v-6h10v6a1.5 1.5 0 1 0 3 0V7A1.5 1.5 0 0 0 18 5.5"})})};f.forwardRef(mv);const pv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M32 22a1.5 1.5 0 0 1-1.5 1.5V26a1.5 1.5 0 1 1-3 0v-2.5H23a1.5 1.5 0 0 1-1.422-1.974l3-9a1.5 1.5 0 0 1 2.845.948L25.08 20.5H27.5V18a1.5 1.5 0 1 1 3 0v2.5A1.5 1.5 0 0 1 32 22M18 5.5A1.5 1.5 0 0 0 16.5 7v6h-10V7a1.5 1.5 0 0 0-3 0v15a1.5 1.5 0 0 0 3 0v-6h10v6a1.5 1.5 0 1 0 3 0V7A1.5 1.5 0 0 0 18 5.5"})})};f.forwardRef(pv);const wv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M29.5 14v12a1.5 1.5 0 1 1-3 0v-9.198l-.668.448a1.503 1.503 0 0 1-1.665-2.5l3-2A1.5 1.5 0 0 1 29.5 14M18 5.5A1.5 1.5 0 0 0 16.5 7v6h-10V7a1.5 1.5 0 0 0-3 0v15a1.5 1.5 0 0 0 3 0v-6h10v6a1.5 1.5 0 1 0 3 0V7A1.5 1.5 0 0 0 18 5.5"})})};f.forwardRef(wv);const xv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"m27.133 17.541 1.655-2.772a1.5 1.5 0 1 0-2.576-1.538l-4.03 6.75q-.018.029-.032.059a5 5 0 1 0 4.983-2.5zM26.5 24.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4M19.5 7v15a1.5 1.5 0 1 1-3 0v-6h-10v6a1.5 1.5 0 0 1-3 0V7a1.5 1.5 0 0 1 3 0v6h10V7a1.5 1.5 0 1 1 3 0"})})};f.forwardRef(xv);const vv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M31.5 22.5a5 5 0 0 1-8.571 3.5 1.5 1.5 0 1 1 2.142-2.099A2 2 0 1 0 26.5 20.5a1.5 1.5 0 0 1-1.229-2.36l1.854-2.64H24a1.5 1.5 0 1 1 0-3h6a1.5 1.5 0 0 1 1.229 2.36l-2.293 3.275A5 5 0 0 1 31.5 22.5M18 5.5A1.5 1.5 0 0 0 16.5 7v6h-10V7a1.5 1.5 0 0 0-3 0v15a1.5 1.5 0 0 0 3 0v-6h10v6a1.5 1.5 0 1 0 3 0V7A1.5 1.5 0 0 0 18 5.5"})})};f.forwardRef(vv);const bv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M19.5 7v15a1.5 1.5 0 1 1-3 0v-6h-10v6a1.5 1.5 0 0 1-3 0V7a1.5 1.5 0 0 1 3 0v6h10V7a1.5 1.5 0 1 1 3 0M30 24.5h-3l3.593-4.791a4.499 4.499 0 1 0-7.837-4.209 1.5 1.5 0 1 0 2.829 1q.076-.218.216-.402a1.5 1.5 0 1 1 2.394 1.807L22.8 25.1a1.5 1.5 0 0 0 1.2 2.4h6a1.5 1.5 0 1 0 0-3"})})};f.forwardRef(bv);const yv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M29 17v7a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h2.956A10.964 10.964 0 0 0 16.081 6H16A11 11 0 0 0 5.045 16H8a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-7a13.014 13.014 0 0 1 22.236-9.167A12.93 12.93 0 0 1 29 17"})})};f.forwardRef(yv);const Cv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M30 11.75c0 8.75-12.974 15.833-13.526 16.125a1 1 0 0 1-.948 0C14.974 27.582 2 20.5 2 11.75A7.76 7.76 0 0 1 9.75 4c2.581 0 4.841 1.11 6.25 2.986C17.409 5.11 19.669 4 22.25 4A7.76 7.76 0 0 1 30 11.75"})})};f.forwardRef(Cv);const $v=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M28 14.444V26a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V14.444a2 2 0 0 1 .646-1.473l10-9.435.014-.013a2 2 0 0 1 2.705.013l10 9.435A2 2 0 0 1 28 14.444"})})};f.forwardRef($v);const Sv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-7.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M5 25v-3.5l6.5-6.5 10 10zm22 0h-2.671l-4.5-4.5 2.5-2.5L27 22.672z"})})};f.forwardRef(Sv);const Rv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M27 5H9a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M23 25H5V11h2v10a2 2 0 0 0 2 2h14zm4-4H9v-4.5l4.5-4.5 6.208 6.208a1 1 0 0 0 1.413 0L24.33 15 27 17.672z"})})};f.forwardRef(Rv);const _v=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1 0-3h12a1.5 1.5 0 0 1 1.5 1.5M15 9.5h12a1.5 1.5 0 0 0 0-3H15a1.5 1.5 0 0 0 0 3m12 13H5a1.5 1.5 0 1 0 0 3h22a1.5 1.5 0 0 0 0-3m-18-4a1.5 1.5 0 0 0 1.061-2.561L6.125 12l3.936-3.94a1.503 1.503 0 1 0-2.125-2.125l-5 5a1.5 1.5 0 0 0 0 2.125l5 5A1.5 1.5 0 0 0 9 18.5"})})};f.forwardRef(_v);const jv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1 0-3h12a1.5 1.5 0 0 1 1.5 1.5M15 9.5h12a1.5 1.5 0 0 0 0-3H15a1.5 1.5 0 0 0 0 3m12 13H5a1.5 1.5 0 0 0 0 3h22a1.5 1.5 0 1 0 0-3M3.939 18.06a1.5 1.5 0 0 0 2.125 0l5-5a1.5 1.5 0 0 0 0-2.125l-5-5a1.503 1.503 0 0 0-2.125 2.125L7.875 12l-3.936 3.939a1.5 1.5 0 0 0 0 2.122"})})};f.forwardRef(jv);const Av=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m-.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M17 23a2 2 0 0 1-2-2v-5a1 1 0 0 1 0-2 2 2 0 0 1 2 2v5a1 1 0 0 1 0 2"})})},Tv=f.forwardRef(Av),Ev=Tv,Iv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M25.5 7A1.5 1.5 0 0 1 24 8.5h-3.919l-5 15H18a1.5 1.5 0 1 1 0 3H8a1.5 1.5 0 1 1 0-3h3.919l5-15H14a1.5 1.5 0 0 1 0-3h10A1.5 1.5 0 0 1 25.5 7"})})};f.forwardRef(Iv);const Mv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M20 2a10.01 10.01 0 0 0-9.511 13.098l-7.196 7.195A1 1 0 0 0 3 23v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 .707-.293l1.195-1.196A10 10 0 1 0 20 2m2.5 9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4"})})};f.forwardRef(Mv);const Lv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M5 7h22v5H5zm22 18H14V14h13z"})})};f.forwardRef(Lv);const Ov=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M22 29a1 1 0 0 1-1 1H11a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1m5-16a10.94 10.94 0 0 1-4.205 8.651A2.03 2.03 0 0 0 22 23.25V24a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-.75a2 2 0 0 0-.779-1.582A10.95 10.95 0 0 1 5 13.06C4.967 7.104 9.782 2.143 15.735 2A11 11 0 0 1 27 13m-4.014-1.168a7.2 7.2 0 0 0-5.82-5.818 1 1 0 1 0-.332 1.972c2.071.349 3.829 2.106 4.18 4.182a1 1 0 0 0 1.972-.335"})})};f.forwardRef(Ov);const Bv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"m21.731 14.683-14 15a1 1 0 0 1-1.711-.875l1.832-9.167L.65 16.936a1 1 0 0 1-.375-1.625l14-15a1 1 0 0 1 1.71.875l-1.837 9.177 7.204 2.7a1 1 0 0 1 .375 1.62z"})})};f.forwardRef(Bv);const Dv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M17.046 23.441a1.5 1.5 0 0 1 0 2.125l-.742.743a7.502 7.502 0 1 1-10.61-10.61l3.015-3.014A7.5 7.5 0 0 1 19 12.375a1.506 1.506 0 0 1-2 2.25 4.5 4.5 0 0 0-6.171.184l-3.013 3.01a4.5 4.5 0 0 0 6.365 6.365l.743-.743a1.5 1.5 0 0 1 2.122 0m9.26-17.75a7.51 7.51 0 0 0-10.61 0l-.742.743a1.503 1.503 0 1 0 2.125 2.125l.742-.743a4.5 4.5 0 0 1 6.365 6.365l-3.014 3.015a4.5 4.5 0 0 1-6.172.179 1.506 1.506 0 1 0-2 2.25 7.5 7.5 0 0 0 10.288-.304l3.014-3.014a7.51 7.51 0 0 0 .004-10.613z"})})};f.forwardRef(Dv);const Vv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 1 1 0-3h22a1.5 1.5 0 0 1 1.5 1.5M5 9.5h22a1.5 1.5 0 0 0 0-3H5a1.5 1.5 0 0 0 0 3m22 13H5a1.5 1.5 0 1 0 0 3h22a1.5 1.5 0 1 0 0-3"})})};f.forwardRef(Vv);const Nv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M3.5 8A1.5 1.5 0 0 1 5 6.5h22a1.5 1.5 0 0 1 0 3H5A1.5 1.5 0 0 1 3.5 8M5 17.5h22a1.5 1.5 0 1 0 0-3H5a1.5 1.5 0 1 0 0 3m13 5H5a1.5 1.5 0 1 0 0 3h13a1.5 1.5 0 1 0 0-3m11 0h-1.5V21a1.5 1.5 0 1 0-3 0v1.5H23a1.5 1.5 0 1 0 0 3h1.5V27a1.5 1.5 0 1 0 3 0v-1.5H29a1.5 1.5 0 1 0 0-3"})})};f.forwardRef(Nv);const Hv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M17.5 4v4a1.5 1.5 0 1 1-3 0V4a1.5 1.5 0 1 1 3 0m4.156 7.844a1.5 1.5 0 0 0 1.062-.44l2.828-2.829a1.503 1.503 0 1 0-2.125-2.125l-2.825 2.833a1.5 1.5 0 0 0 1.06 2.56M28 14.5h-4a1.5 1.5 0 1 0 0 3h4a1.5 1.5 0 1 0 0-3m-5.282 6.096a1.501 1.501 0 0 0-2.451 1.638c.075.182.186.348.326.487l2.828 2.829a1.503 1.503 0 0 0 2.125-2.125zM16 22.5a1.5 1.5 0 0 0-1.5 1.5v4a1.5 1.5 0 1 0 3 0v-4a1.5 1.5 0 0 0-1.5-1.5m-6.717-1.904-2.83 2.829A1.503 1.503 0 0 0 8.58 25.55l2.829-2.829a1.503 1.503 0 0 0-2.125-2.125M9.5 16A1.5 1.5 0 0 0 8 14.5H4a1.5 1.5 0 1 0 0 3h4A1.5 1.5 0 0 0 9.5 16m-.925-9.546A1.503 1.503 0 0 0 6.45 8.579l2.833 2.825a1.503 1.503 0 0 0 2.125-2.125z"})})},kv=f.forwardRef(Hv),Gu=kv,Fv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M26 10h-4V7a6 6 0 1 0-12 0v3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2M16 20.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M20 10h-8V7a4 4 0 1 1 8 0z"})})};f.forwardRef(Fv);const zv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M31 19a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 1 1 2 0v2h2a1 1 0 0 1 1 1M7 9h2v2a1 1 0 1 0 2 0V9h2a1 1 0 0 0 0-2h-2V5a1 1 0 0 0-2 0v2H7a1 1 0 0 0 0 2m16 15h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 0 0 0-2m4.414-14L10 27.414a2 2 0 0 1-2.828 0l-2.587-2.585a2 2 0 0 1 0-2.829L22 4.586a2 2 0 0 1 2.829 0l2.585 2.585a2 2 0 0 1 0 2.829M26 8.586 23.414 6l-4 4L22 12.586z"})})};f.forwardRef(zv);const Uv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M28 6H4a1 1 0 0 0-1 1v17a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1M12.339 16 5 22.726V9.274zm1.48 1.356 1.5 1.381a1 1 0 0 0 1.352 0l1.5-1.38L25.421 24H6.571zM19.66 16 27 9.273v13.455z"})})};f.forwardRef(Uv);const Wv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{fillRule:"evenodd",d:"M11 7q0 .432-.088.838L16 10.382l5.088-2.544a4 4 0 1 1 .895 1.789L18.236 11.5l3.747 1.873a4 4 0 1 1 0 5.253L18.236 20.5l3.747 1.874a4 4 0 1 1-.895 1.788L16 21.618l-5.088 2.544Q11 24.567 11 25a4 4 0 1 1-.983-2.626l3.747-1.874-3.747-1.873a4 4 0 1 1 0-5.253l3.747-1.874-3.747-1.874A4 4 0 1 1 11 7M9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0m2.236 8h9.528L16 12.618zM9 25a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2-7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M27 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4m2-11a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-11 3.382L20.764 17h-9.528z",clipRule:"evenodd"})})};f.forwardRef(Wv);const qv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{fillRule:"evenodd",d:"M14.8 8.254a4 4 0 1 0-1.082 1.682l7.483 4.81a4 4 0 0 0-.075.254H10.874A4.002 4.002 0 0 0 3 16a4 4 0 0 0 7.874 1h10.252q.033.128.075.254l-7.484 4.81a4 4 0 1 0 1.082 1.682l7.484-4.81a4 4 0 1 0 0-5.871zM11 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0m16 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4",clipRule:"evenodd"})})};f.forwardRef(qv);const Gv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{fillRule:"evenodd",d:"M18.842 3.227a1 1 0 1 0-.445 1.95l1.747.399L9.6 12.959a4 4 0 1 0 0 6.081l10.546 7.385-1.748.399a1 1 0 1 0 .445 1.95l3.945-.9a1 1 0 0 0 .77-1.1l-.503-4.014a1 1 0 0 0-1.985.248l.223 1.779-10.545-7.384a4 4 0 0 0 .127-.403h14.712l-1.293 1.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-1.414 1.414L25.586 15H10.874a4 4 0 0 0-.127-.403l10.544-7.383-.222 1.778a1 1 0 0 0 1.984.249l.503-4.015a1 1 0 0 0-.77-1.099zM9 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0",clipRule:"evenodd"})})};f.forwardRef(Gv);const Kv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M27 6H5a2 2 0 0 0-2 2v20a1.98 1.98 0 0 0 1.156 1.813 1.986 1.986 0 0 0 2.141-.299L10.312 26H27a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M10.5 17.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};f.forwardRef(Kv);const Yv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M10 16V8a6 6 0 1 1 12 0v8a6 6 0 1 1-12 0m16 0a1 1 0 0 0-2 0 8 8 0 0 1-16 0 1 1 0 1 0-2 0 10.014 10.014 0 0 0 9 9.95V29a1 1 0 0 0 2 0v-3.05A10.014 10.014 0 0 0 26 16"})})};f.forwardRef(Yv);const Jv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 1 1 0-3h22a1.5 1.5 0 0 1 1.5 1.5"})})},Qv=f.forwardRef(Jv),Zv=Qv,Xv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m5 14H11a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2"})})};f.forwardRef(Xv);const Pv=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M26 5H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3M20 27h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2"})})};f.forwardRef(Pv);const e7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M29.443 18.776a13.1 13.1 0 0 1-4.626 6.614A13 13 0 0 1 4 15a12.9 12.9 0 0 1 2.61-7.815 13.1 13.1 0 0 1 6.614-4.625 1 1 0 0 1 1.25 1.25 11.01 11.01 0 0 0 13.725 13.725 1 1 0 0 1 1.25 1.25z"})})};f.forwardRef(e7);const t7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M18 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0M7.5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4m17 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4"})})};f.forwardRef(t7);const n7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M10.939 8.061a1.5 1.5 0 0 1 0-2.125l4-4a1.5 1.5 0 0 1 2.125 0l4 4a1.503 1.503 0 1 1-2.125 2.125L17.5 6.625V12a1.5 1.5 0 1 1-3 0V6.625l-1.439 1.436a1.5 1.5 0 0 1-2.122 0m8 15.875L17.5 25.375V20a1.5 1.5 0 1 0-3 0v5.375l-1.439-1.44a1.504 1.504 0 0 0-2.125 2.125l4 4a1.5 1.5 0 0 0 2.125 0l4-4a1.502 1.502 0 1 0-2.125-2.125zm11.125-9-4-4a1.503 1.503 0 0 0-2.125 2.125l1.436 1.439H20a1.5 1.5 0 0 0 0 3h5.375l-1.44 1.439a1.503 1.503 0 0 0 2.125 2.125l4-4a1.5 1.5 0 0 0 .001-2.125zM6.625 17.5H12a1.5 1.5 0 1 0 0-3H6.625l1.44-1.439a1.503 1.503 0 1 0-2.125-2.125l-4 4a1.5 1.5 0 0 0 0 2.125l4 4a1.503 1.503 0 0 0 2.125-2.125z"})})};f.forwardRef(n7);const r7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M26.615 3.214a.99.99 0 0 0-.857-.183l-16 4a1 1 0 0 0-.758.97v13.762a4.5 4.5 0 1 0 2 3.737V13.781l14-3.5v7.482a4.5 4.5 0 1 0 2 3.737V4a1 1 0 0 0-.385-.786"})})};f.forwardRef(r7);const o7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H14.5a1.5 1.5 0 1 1 0-3H27a1.5 1.5 0 0 1 1.5 1.5m-14-6.5H27a1.5 1.5 0 0 0 0-3H14.5a1.5 1.5 0 0 0 0 3m12.5 13H14.5a1.5 1.5 0 1 0 0 3H27a1.5 1.5 0 1 0 0-3M5.5 7.414V13a1.5 1.5 0 0 0 3 0V5a1.5 1.5 0 0 0-2.17-1.341l-2 1a1.5 1.5 0 0 0 1.17 2.75zm4.966 12.107a3.46 3.46 0 0 0-1.4-2.329 3.61 3.61 0 0 0-4.954.683 3.5 3.5 0 0 0-.52.942 1.5 1.5 0 0 0 2.818 1.027.5.5 0 0 1 .072-.125.6.6 0 0 1 .813-.103.48.48 0 0 1 .201.325.45.45 0 0 1-.096.347l-.016.02-3.585 4.794A1.5 1.5 0 0 0 5 27.5h4a1.5 1.5 0 1 0 0-3H8l1.785-2.389a3.43 3.43 0 0 0 .681-2.59"})})};f.forwardRef(o7);const s7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{fillRule:"evenodd",d:"M17.2 8.254a4 4 0 1 1 1.082 1.682l-7.482 4.81q.04.125.074.254h10.252A4.002 4.002 0 0 1 29 16a4 4 0 0 1-7.874 1H10.874q-.033.128-.075.254l7.484 4.81a4 4 0 1 1-1.082 1.682l-7.484-4.81a4 4 0 1 1 0-5.871zM21 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4m2-11a2 2 0 1 0 4 0 2 2 0 0 0-4 0M7 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4",clipRule:"evenodd"})})};f.forwardRef(s7);const a7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{fillRule:"evenodd",d:"M10.874 17A4.002 4.002 0 0 1 3 16a4 4 0 0 1 7.874-1h10.252A4.002 4.002 0 0 1 29 16a4 4 0 0 1-7.874 1zM7 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4m18 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4",clipRule:"evenodd"})})};f.forwardRef(a7);const i7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{fillRule:"evenodd",d:"M28.924 16.384c-.05.12-.124.231-.217.324l-4 4a1 1 0 0 1-1.632-.324 1 1 0 0 1 .217-1.09L25.585 17H10.875A4.002 4.002 0 0 1 3 16a4 4 0 0 1 7.874-1h14.712l-2.294-2.293a1 1 0 0 1 1.415-1.415l4 4a1 1 0 0 1 .217 1.09M7 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4",clipRule:"evenodd"})})};f.forwardRef(i7);const c7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M29 4a1 1 0 0 0-1-1c-5.51 0-11.164 6.214-14.304 10.329A7.5 7.5 0 0 0 4 20.5c0 3.86-2.443 5.591-2.559 5.671A1 1 0 0 0 2 28h9.5a7.5 7.5 0 0 0 7.171-9.696C22.788 15.164 29 9.51 29 4M15.553 14.194a48 48 0 0 1 1.26-1.569 9.5 9.5 0 0 1 2.562 2.561q-.738.618-1.569 1.262a7.6 7.6 0 0 0-2.254-2.254m5.337-.335a11.6 11.6 0 0 0-2.75-2.75c3.973-4.316 6.969-5.625 8.738-5.989-.357 1.77-1.672 4.766-5.988 8.739"})})};f.forwardRef(c7);const l7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M31 13v6.25a2.01 2.01 0 0 1-1.45 1.922L17 24.75V29a1 1 0 0 1-2 0v-4.25a2.01 2.01 0 0 1 1.45-1.922L29 19.25V13h-2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3H2a1 1 0 0 1 0-2h2V8a2 2 0 0 1 2-2h19a2 2 0 0 1 2 2v3h2a2 2 0 0 1 2 2"})})};f.forwardRef(l7);const u7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M25.096 6.736A12.9 12.9 0 0 0 16 3h-.134A13 13 0 0 0 3 16c0 5.375 3.323 9.883 8.67 11.771A4 4 0 0 0 17 24a2 2 0 0 1 2-2h5.776a3.976 3.976 0 0 0 3.9-3.11c.224-.984.332-1.99.324-3a12.9 12.9 0 0 0-3.904-9.154M10.5 21a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0-7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5.5-3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};f.forwardRef(u7);const d7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M28.925 5.543v.018L21.65 29.554A1.985 1.985 0 0 1 19.728 31a1.98 1.98 0 0 1-1.803-1.144l-4.464-9.423a.5.5 0 0 1 .099-.568l7.158-7.159a1 1 0 0 0-1.414-1.413l-7.169 7.157a.5.5 0 0 1-.567.099l-9.376-4.441A2.05 2.05 0 0 1 1 12.17a1.99 1.99 0 0 1 1.446-1.815L26.44 3.08h.018a2 2 0 0 1 2.468 2.463"})})};f.forwardRef(d7);const f7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"m26.56 17.061-10.257 10.25a7.501 7.501 0 0 1-10.607-10.61l12.27-12.236a5 5 0 0 1 7.07 7.074l-.021.02L13.04 23.086a1.503 1.503 0 0 1-2.121-.041 1.5 1.5 0 0 1 .041-2.121L22.924 9.409a2 2 0 1 0-2.838-2.82L7.816 18.82a4.5 4.5 0 1 0 6.366 6.364l10.258-10.25a1.503 1.503 0 0 1 2.125 2.125z"})})};f.forwardRef(f7);const h7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M3.5 8A1.5 1.5 0 0 1 5 6.5h22a1.5 1.5 0 0 1 0 3H5A1.5 1.5 0 0 1 3.5 8M5 14.5h16a1.5 1.5 0 1 0 0-3H5a1.5 1.5 0 1 0 0 3m22 2H5a1.5 1.5 0 1 0 0 3h22a1.5 1.5 0 1 0 0-3m-6 5H5a1.5 1.5 0 1 0 0 3h16a1.5 1.5 0 1 0 0-3"})})};f.forwardRef(h7);const g7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"m28.414 9.171-5.585-5.586a2 2 0 0 0-2.829 0L4.586 19A1.98 1.98 0 0 0 4 20.414V26a2 2 0 0 0 2 2h5.586A1.98 1.98 0 0 0 13 27.414L28.414 12a2 2 0 0 0 0-2.829M24 13.585 18.414 8l3-3L27 10.585z"})})};f.forwardRef(g7);const m7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M28.985 21.885A7.03 7.03 0 0 1 22 28c-9.925 0-18-8.075-18-18a7.03 7.03 0 0 1 6.115-6.985 2 2 0 0 1 2.078 1.19l2.64 5.894v.015a2 2 0 0 1-.16 1.886 1 1 0 0 1-.07.096L12 15.181c.936 1.903 2.926 3.875 4.854 4.814l3.042-2.589q.045-.037.094-.07a2 2 0 0 1 1.896-.175l.017.008 5.888 2.639a2 2 0 0 1 1.194 2.077"})})};f.forwardRef(m7);const p7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"m29.416 13-6.683 6.706c.57 1.584.806 4.236-1.65 7.5a2 2 0 0 1-1.458.794h-.141a2 2 0 0 1-1.415-.586l-6.033-6.04-5.328 5.333a1 1 0 1 1-1.415-1.415l5.332-5.328-6.037-6.038a2 2 0 0 1 .162-2.972c3.178-2.564 6.219-2.06 7.55-1.643L19 2.587a2 2 0 0 1 2.829 0l7.586 7.585A2 2 0 0 1 29.416 13"})})};f.forwardRef(p7);const w7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M16 2A11.013 11.013 0 0 0 5 13c0 9.413 10 16.521 10.426 16.819a1 1 0 0 0 1.148 0C17 29.52 27 22.413 27 13A11.01 11.01 0 0 0 16 2m0 7a4 4 0 1 1 0 8 4 4 0 0 1 0-8"})})};f.forwardRef(w7);const x7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M30 17v4a1 1 0 0 1-1.196.98L19.5 20.125v2.966l2.207 2.206A1 1 0 0 1 22 26v3a1 1 0 0 1-1.375.929L16 28.078l-4.625 1.85A1 1 0 0 1 10 29v-3a1 1 0 0 1 .293-.707l2.207-2.207v-2.961L3.196 21.98A1 1 0 0 1 2 21v-4a1 1 0 0 1 .553-.895l9.947-4.972V5.5a3.5 3.5 0 1 1 7 0v5.633l9.948 4.972A1 1 0 0 1 30 17"})})};f.forwardRef(x7);const v7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M25.676 18.884a7.6 7.6 0 0 1-3.978 1.107 9 9 0 0 1-3.42-.707A6.94 6.94 0 0 0 17 23.314V27a1 1 0 0 1-1.066 1A1.023 1.023 0 0 1 15 26.969v-1.555l-4.828-4.828A6.6 6.6 0 0 1 7.93 21a5.73 5.73 0 0 1-2.99-.834C2.216 18.511.75 14.702 1.034 9.974a1 1 0 0 1 .94-.94c4.728-.28 8.537 1.182 10.187 3.906a5.75 5.75 0 0 1 .806 3.56.5.5 0 0 1-.86.304l-2.4-2.513a1 1 0 0 0-1.415 1.414l6.736 6.906q.01-.146.026-.291a8.57 8.57 0 0 1 2.33-4.933l6.323-6.682a1 1 0 0 0-1.413-1.415l-6.125 6.477a.5.5 0 0 1-.848-.217c-.592-2.185-.331-4.36.8-6.228 2.233-3.685 7.428-5.657 13.898-5.277a1 1 0 0 1 .94.94c.375 6.471-1.598 11.666-5.283 13.899"})})};f.forwardRef(v7);const b7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M30 16a1.97 1.97 0 0 1-.95 1.689L11.04 28.706a2 2 0 0 1-2.767-.688A2 2 0 0 1 8 27.016V4.984a1.98 1.98 0 0 1 1.015-1.728 2 2 0 0 1 2.025.038L29.05 14.31A1.97 1.97 0 0 1 30 16"})})};f.forwardRef(b7);const y7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5h-9.5V27a1.5 1.5 0 1 1-3 0v-9.5H5a1.5 1.5 0 1 1 0-3h9.5V5a1.5 1.5 0 1 1 3 0v9.5H27a1.5 1.5 0 0 1 1.5 1.5"})})};f.forwardRef(y7);const C7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.016 13.016 0 0 0 16 3m5 14h-4v4a1 1 0 0 1-2 0v-4h-4a1 1 0 0 1 0-2h4v-4a1 1 0 0 1 2 0v4h4a1 1 0 0 1 0 2"})})};f.forwardRef(C7);const $7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M27 5H17V3a1 1 0 0 0-2 0v2H5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h4.92l-2.701 3.375a1 1 0 0 0 1.562 1.25L12.48 24h7.04l3.699 4.625a1 1 0 1 0 1.562-1.25L22.08 24H27a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M13 18a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0zm4 0a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0zm4 0a1 1 0 0 1-2 0v-7a1 1 0 0 1 2 0z"})})};f.forwardRef($7);const S7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M30.414 17 18 4.586A1.98 1.98 0 0 0 16.586 4H5a1 1 0 0 0-1 1v11.586A1.98 1.98 0 0 0 4.586 18L17 30.414a2 2 0 0 0 2.829 0l10.585-10.585a2 2 0 0 0 0-2.829M10.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};f.forwardRef(S7);const R7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M20.723 28H26a2 2 0 0 0 2-2v-4.706a1 1 0 0 0-1.383-.919 2.9 2.9 0 0 1-1.117.221c-1.654 0-3-1.387-3-3.091s1.346-3.091 3-3.091c.383 0 .763.075 1.117.221A1 1 0 0 0 28 13.706V9a2 2 0 0 0-2-2h-4.527a4.5 4.5 0 1 0-8.945 0H8a2 2 0 0 0-2 2v4.028a4.5 4.5 0 1 0 0 8.945V26a2 2 0 0 0 2 2h5.278"})})};f.forwardRef(R7);const _7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M18 22.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M29.5 16A13.5 13.5 0 1 1 16 2.5 13.515 13.515 0 0 1 29.5 16m-3 0A10.5 10.5 0 1 0 16 26.5 10.51 10.51 0 0 0 26.5 16M16 8c-3.033 0-5.5 2.242-5.5 5v.5a1.5 1.5 0 1 0 3 0V13c0-1.102 1.125-2 2.5-2s2.5.898 2.5 2-1.125 2-2.5 2a1.5 1.5 0 0 0-1.5 1.5v1a1.5 1.5 0 0 0 2.966.32C19.79 17.235 21.5 15.296 21.5 13c0-2.758-2.468-5-5.5-5"})})};f.forwardRef(_7);const j7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M14.5 9v11a6.006 6.006 0 0 1-6 6 1 1 0 0 1 0-2 4 4 0 0 0 4-4v-1H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h7.5a2 2 0 0 1 2 2M27 7h-7.5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2H27v1a4 4 0 0 1-4 4 1 1 0 0 0 0 2 6.006 6.006 0 0 0 6-6V9a2 2 0 0 0-2-2"})})};f.forwardRef(j7);const A7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M27 5v23a1 1 0 0 1-2 0v-6h-6a1 1 0 0 1-1-1c.046-2.395.349-4.779.902-7.11 1.223-5.061 3.54-8.454 6.704-9.809a1 1 0 0 1 1.394.92m-12.014-.164a.999.999 0 1 0-1.972.33L13.986 11H11V5a1 1 0 0 0-2 0v6H6.014l.972-5.835a1 1 0 1 0-1.972-.329l-1 6A1 1 0 0 0 4 11a6.01 6.01 0 0 0 5 5.915V28a1 1 0 1 0 2 0V16.915A6.01 6.01 0 0 0 16 11q0-.083-.014-.164z"})})};f.forwardRef(A7);const T7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M19 28a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1m8.953-8.521-1.546 6.954a2 2 0 0 1-3.188 1.138l-3.405-2.57h-7.625L8.78 27.57a2 2 0 0 1-3.189-1.138l-1.545-6.954a2.01 2.01 0 0 1 .415-1.714l3.57-4.282c.12-1.574.482-3.12 1.072-4.584 1.612-4.043 4.5-6.579 5.671-7.481a2 2 0 0 1 2.45 0c1.167.902 4.059 3.438 5.671 7.48.59 1.465.952 3.01 1.072 4.585l3.57 4.282a2.01 2.01 0 0 1 .415 1.714m-17.404 4.25q-2.014-3.666-2.445-7.209L6 19.045 7.545 26l.022-.016zM17.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m8.5 6.545-2.104-2.525q-.428 3.535-2.445 7.211l2.982 2.25.022.017z"})})};f.forwardRef(T7);const E7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M19.716 14.141a1 1 0 0 1 .261-1.391l8.458-5.788a1 1 0 0 1 1.125 1.652L21.101 14.4a1 1 0 0 1-1.39-.261zm10.109 10.634a1 1 0 0 1-1.39.261L17 17.211l-5.315 3.636a4.5 4.5 0 1 1-1.125-1.65L15.229 16l-4.673-3.198a4.5 4.5 0 1 1 1.125-1.65l17.875 12.233a1 1 0 0 1 .269 1.39M9 22.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m0-13a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"})})};f.forwardRef(E7);const I7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M29.061 26.939 23.125 21A11.515 11.515 0 1 0 21 23.125l5.941 5.942a1.503 1.503 0 0 0 2.125-2.125zM5.5 14a8.5 8.5 0 1 1 8.5 8.5A8.51 8.51 0 0 1 5.5 14"})})},M7=f.forwardRef(I7),L7=M7,O7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M26 5H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M26 17H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m-3.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};f.forwardRef(O7);const B7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M28 7v7.346c0 11.202-9.477 14.918-11.375 15.549a1.94 1.94 0 0 1-1.25 0C13.475 29.264 4 25.548 4 14.346V7a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2"})})};f.forwardRef(B7);const D7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"m30.949 7.653-6.47-3.528A1 1 0 0 0 24 4h-4a1 1 0 0 0-1 1 3 3 0 0 1-6 0 1 1 0 0 0-1-1H8a1 1 0 0 0-.48.125L1.051 7.653a1.97 1.97 0 0 0-.824 2.657l2.41 4.601A2.05 2.05 0 0 0 4.458 16H7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V16h2.543a2.05 2.05 0 0 0 1.822-1.089l2.409-4.601a1.97 1.97 0 0 0-.825-2.658M4.459 14a.08.08 0 0 1-.051-.016L2.01 9.408 7 6.685V14zm23.134-.018a.07.07 0 0 1-.052.018H25V6.685l4.99 2.723z"})})};f.forwardRef(D7);const V7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M12 27a2 2 0 1 1-4 0 2 2 0 0 1 4 0m11-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4m5.805-16.594A1 1 0 0 0 28 8H6.04L5.026 4.45A2.01 2.01 0 0 0 3.103 3H1a1 1 0 0 0 0 2h2.103l4.522 15.824A3.01 3.01 0 0 0 10.509 23h12.014a2.99 2.99 0 0 0 2.867-2.117l3.566-11.59a1 1 0 0 0-.151-.887"})})};f.forwardRef(V7);const N7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M14.5 27a1.5 1.5 0 0 1-1.5 1.5H6A2.5 2.5 0 0 1 3.5 26V6A2.5 2.5 0 0 1 6 3.5h7a1.5 1.5 0 0 1 0 3H6.5v19H13a1.5 1.5 0 0 1 1.5 1.5m13.561-12.061-5-5a1.503 1.503 0 0 0-2.125 2.125l2.439 2.436H13a1.5 1.5 0 1 0 0 3h10.375l-2.44 2.439a1.503 1.503 0 0 0 2.125 2.125l5-5a1.5 1.5 0 0 0 .001-2.125"})})};f.forwardRef(N7);const H7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M4 10a1 1 0 0 1 1-1h4.646a3.5 3.5 0 0 1 6.708 0H27a1 1 0 1 1 0 2H16.354a3.5 3.5 0 0 1-6.708 0H5a1 1 0 0 1-1-1m23 11h-2.646a3.5 3.5 0 0 0-6.708 0H5a1 1 0 0 0 0 2h12.646a3.5 3.5 0 0 0 6.708 0H27a1 1 0 1 0 0-2"})})};f.forwardRef(H7);const k7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M26 18a1.97 1.97 0 0 1-1.302 1.867l-6.457 2.375-2.375 6.452a1.99 1.99 0 0 1-3.735 0L9.75 22.25l-6.452-2.375a1.99 1.99 0 0 1 0-3.735l6.456-2.375 2.375-6.451a1.99 1.99 0 0 1 3.735 0l2.375 6.456 6.451 2.375A1.97 1.97 0 0 1 26 18M19 6h2v2a1 1 0 0 0 2 0V6h2a1 1 0 1 0 0-2h-2V2a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2m11 4h-1V9a1 1 0 1 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2"})})};f.forwardRef(k7);const F7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M15 7v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2m10-2h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M13 17H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m12 0h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2"})})};f.forwardRef(F7);const z7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:[c.jsx("path",{d:"M27.5 21.136 16 27.843 4.5 21.136a1 1 0 0 0-1 1.728l12 7a1 1 0 0 0 1.008 0l12-7a1 1 0 1 0-1.008-1.728"}),c.jsx("path",{d:"M27.5 15.136 16 21.843 4.5 15.136a1 1 0 0 0-1 1.728l12 7a1 1 0 0 0 1.008 0l12-7a1 1 0 1 0-1.008-1.728"}),c.jsx("path",{d:"m3.5 10.864 12 7a1 1 0 0 0 1.008 0l12-7a1 1 0 0 0 0-1.728l-12-7a1 1 0 0 0-1.008 0l-12 7a1 1 0 0 0 0 1.728"})]})};f.forwardRef(z7);const U7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"m29.313 14.298-5.638 4.92 1.689 7.325a2 2 0 0 1-2.98 2.167l-6.389-3.875L9.62 28.71a2 2 0 0 1-2.98-2.168l1.686-7.317-5.638-4.928a2 2 0 0 1 1.138-3.507l7.433-.644 2.901-6.92a1.994 1.994 0 0 1 3.68 0l2.91 6.92 7.43.644a2 2 0 0 1 1.139 3.508z"})})};f.forwardRef(U7);const W7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M29 19a4 4 0 1 0-4.991 3.875A1 1 0 0 0 24 23a4 4 0 0 1-4 4h-3a4 4 0 0 1-4-4v-5.065c3.934-.5 7-3.934 7-8.039V5a2 2 0 0 0-2-2h-2a1 1 0 1 0 0 2h2v4.896c0 3.323-2.656 6.061-5.92 6.104A6 6 0 0 1 6 10V5h2a1 1 0 0 0 0-2H6a2 2 0 0 0-2 2v5a8 8 0 0 0 7 7.936V23a6.006 6.006 0 0 0 6 6h3a6.006 6.006 0 0 0 6-6 1 1 0 0 0-.009-.125A4 4 0 0 0 29 19m-4 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2"})})};f.forwardRef(W7);const q7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M29 12a1 1 0 0 0-.038-.275L27.17 5.45A2.01 2.01 0 0 0 25.25 4H6.75a2.01 2.01 0 0 0-1.919 1.45L3.04 11.725A1 1 0 0 0 3 12v2a5 5 0 0 0 2 4v8a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-8a5 5 0 0 0 2-4zm-18 2a3 3 0 0 1-4.39 2.657 1 1 0 0 0-.228-.132A3 3 0 0 1 5 14v-1h6zm8 0a3 3 0 0 1-6 0v-1h6zm8 0a3 3 0 0 1-1.384 2.525q-.12.051-.225.131A3 3 0 0 1 21 14v-1h6z"})})};f.forwardRef(q7);const G7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5h-3.767A5.19 5.19 0 0 1 24.5 21c0 1.806-.976 3.54-2.679 4.756C20.25 26.881 18.18 27.5 16 27.5s-4.25-.619-5.821-1.744C8.476 24.54 7.5 22.806 7.5 21a1.5 1.5 0 0 1 3 0c0 1.898 2.519 3.5 5.5 3.5s5.5-1.602 5.5-3.5c0-1.595-1.163-2.523-4.419-3.5H5a1.5 1.5 0 1 1 0-3h22a1.5 1.5 0 0 1 1.5 1.5M9.389 12.5a1.5 1.5 0 0 0 1.5-1.5c0-2 2.197-3.5 5.111-3.5 2.17 0 3.921.831 4.685 2.223a1.5 1.5 0 0 0 2.625-1.446C22.016 5.914 19.281 4.5 16 4.5c-4.625 0-8.111 2.794-8.111 6.5a1.5 1.5 0 0 0 1.5 1.5"})})};f.forwardRef(G7);const K7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M15 5V2a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0m1 3a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8m-8.707.707a1 1 0 1 0 1.414-1.415l-2-2a1 1 0 1 0-1.414 1.415zm0 14.586-2 2a1 1 0 1 0 1.414 1.415l2-2a1 1 0 1 0-1.415-1.415M24 9a1 1 0 0 0 .707-.293l2-2a1 1 0 0 0-1.415-1.414l-2 2A1 1 0 0 0 24 9m.707 14.293a1 1 0 1 0-1.415 1.415l2 2a1 1 0 0 0 1.415-1.415zM6 16a1 1 0 0 0-1-1H2a1 1 0 0 0 0 2h3a1 1 0 0 0 1-1m10 10a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1m14-11h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2"})})};f.forwardRef(K7);const Y7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M27 8h-8.586l4.293-4.292a1 1 0 0 0-1.415-1.415L16 7.586l-5.292-5.293a1 1 0 1 0-1.415 1.415L13.586 8H5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2m0 17h-7V10h7zm-2-10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"})})};f.forwardRef(Y7);const J7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"m29.978 19.625-1.5-12A3 3 0 0 0 25.5 5H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h5.383l4.722 9.448A1 1 0 0 0 15 30a5 5 0 0 0 5-5v-2h7a3 3 0 0 0 2.977-3.375M9 18H4V7h5z"})})};f.forwardRef(J7);const Q7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M29.25 10.015A3 3 0 0 0 27 9h-7V7a5 5 0 0 0-5-5 1 1 0 0 0-.895.553L9.383 12H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h21.5a3 3 0 0 0 2.977-2.625l1.5-12a3 3 0 0 0-.727-2.36M4 14h5v11H4z"})})};f.forwardRef(Q7);const Z7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M23 3H9a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h1l-1.8 2.4a1 1 0 0 0 1.6 1.2l2.7-3.6h7l2.7 3.6a1 1 0 0 0 1.6-1.2L22 27h1a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4M10.5 23a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m4.5-8H7v-5h8zm6.5 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m3.5-8h-8v-5h8z"})})};f.forwardRef(Z7);const X7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M27 6h-5V5a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v1H5a1 1 0 0 0 0 2h1v18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h1a1 1 0 1 0 0-2M14 21a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0zm6 0a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0zm0-15h-8V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"})})};f.forwardRef(X7);const P7=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"m23.54 2.267-3.711 3.377c1.7.52 3.298 1.397 4.653 2.631 4.684 4.266 4.684 11.184 0 15.45q-5.184 4.72-16.021 6.008l3.71-3.377a12.2 12.2 0 0 1-4.653-2.63c-4.684-4.267-4.712-11.16 0-15.45q5.184-4.721 16.021-6.01m-7.54 8.4c-3.314 0-6 2.388-6 5.333s2.686 5.333 6 5.333 6-2.387 6-5.333c0-2.945-2.686-5.333-6-5.333"})})};f.forwardRef(P7);const e8=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M25.5 28a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 1 1 0-3h16a1.5 1.5 0 0 1 1.5 1.5M16 24.5a8.51 8.51 0 0 0 8.5-8.5V7a1.5 1.5 0 1 0-3 0v9a5.5 5.5 0 0 1-11 0V7a1.5 1.5 0 1 0-3 0v9a8.51 8.51 0 0 0 8.5 8.5"})})};f.forwardRef(e8);const t8=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M28.5 19v7a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 26v-7a1.5 1.5 0 0 1 3 0v6.5h19V19a1.5 1.5 0 1 1 3 0m-16.439-7.939L14.5 8.625V19a1.5 1.5 0 1 0 3 0V8.625l2.439 2.44a1.503 1.503 0 0 0 2.125-2.125l-5-5a1.5 1.5 0 0 0-2.125 0l-5 5a1.503 1.503 0 1 0 2.125 2.125z"})})};f.forwardRef(t8);const n8=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M28.866 27.5A1 1 0 0 1 28 28H4a1 1 0 0 1-.865-1.5c1.904-3.291 4.838-5.651 8.261-6.77a9 9 0 1 1 9.208 0c3.424 1.119 6.357 3.479 8.261 6.77a1 1 0 0 1 .001 1"})})};f.forwardRef(n8);const r8=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M19.44 3.101a1 1 0 0 0-1.054.11L9.656 10H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.656l8.73 6.789A1 1 0 0 0 20 28V4a1 1 0 0 0-.56-.899M28.414 16l2.293-2.292a1.001 1.001 0 0 0-1.415-1.415L27 14.586l-2.293-2.293a1 1 0 1 0-1.415 1.415L25.587 16l-2.293 2.293a1 1 0 0 0 1.415 1.415L27 17.414l2.293 2.294a1 1 0 0 0 1.415-1.415z"})})};f.forwardRef(r8);const o8=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M19.439 3.101a1 1 0 0 0-1.053.11L9.656 10H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.656l8.73 6.789A1.001 1.001 0 0 0 20 28V4a1 1 0 0 0-.561-.899M9 20H4v-8h5zm15.75-7.305a5 5 0 0 1 0 6.61 1 1 0 0 1-1.5-1.322 3 3 0 0 0 0-3.966 1 1 0 0 1 1.5-1.322M31 16a10 10 0 0 1-2.546 6.668 1 1 0 0 1-1.49-1.334 8 8 0 0 0 0-10.666.998.998 0 0 1 .407-1.624 1 1 0 0 1 1.083.29A9.98 9.98 0 0 1 31 16"})})};f.forwardRef(o8);const s8=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M15 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0m11 11c-3.58 0-5.226-1.662-6.969-3.421a25 25 0 0 0-1.375-1.323C13.031 8.24 5.63 15.098 5.316 15.391a1 1 0 0 0 1.369 1.458 20.5 20.5 0 0 1 3.815-2.724c1.723-.922 3.174-1.279 4.338-1.072L8.082 28.6a1 1 0 0 0 1.835.798l4.2-9.659L18 22.515V29a1 1 0 1 0 2 0v-7a1 1 0 0 0-.419-.814l-4.65-3.321L16.61 14c.33.305.657.634 1 .98C19.381 16.774 21.586 19 26 19a1 1 0 0 0 0-2"})})};f.forwardRef(s8);const a8=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m-1 7a1 1 0 0 1 2 0v7a1 1 0 0 1-2 0zm1 13a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})},i8=f.forwardRef(a8),Ku=i8,c8=({fill:e="currentColor",stroke:t,...r},a)=>{const{colors:o}=M(),l=e&&e in o?o[e]:e,u=t&&t in o?o[t]:t;return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:a,...r,children:c.jsx("path",{d:"m31.316 24.949-3 1a1 1 0 0 1-1.211-.5l-3.724-7.45H13a1 1 0 0 1-1-1v-3.707A7 7 0 0 0 14 27c3.239 0 6.261-2.256 7.031-5.25a1 1 0 1 1 1.938.5C21.96 26.162 18.19 29 14 29a9 9 0 0 1-2-17.774V8.851a3.5 3.5 0 1 1 2 0V11h7a1 1 0 0 1 0 2h-7v3h10a1 1 0 0 1 .894.552l3.612 7.225 2.178-.726a1 1 0 1 1 .632 1.898"})})};f.forwardRef(c8);const ho=(e,t)=>{const r=f.createContext(t),a=l=>{const{children:u,...h}=l,m=f.useMemo(()=>h,Object.values(h));return c.jsx(r.Provider,{value:m,children:u})};function o(l){const u=f.useContext(r);if(u)return u;if(t!==void 0)return t;throw new Error(`\`${l}\` must be used within \`${e}\``)}return a.displayName=`${e}Provider`,[a,o]};function l8(e,t){return typeof e=="string"?!1:t in e}function ds(e,t,r){return e&&t&&l8(e,t)?e[t]:r}const c1={padding:["padding-block-start","padding-inline-end","padding-block-end","padding-inline-start"],paddingTop:"padding-block-start",paddingRight:"padding-inline-end",paddingBottom:"padding-block-end",paddingLeft:"padding-inline-start",margin:["margin-block-start","margin-inline-end","margin-block-end","margin-inline-start"],marginLeft:"margin-inline-start",marginRight:"margin-inline-end",marginTop:"margin-block-start",marginBottom:"margin-block-end",borderRadius:"border-radius",borderStyle:"border-style",borderWidth:"border-width",borderColor:"border-color",fontSize:"font-size",fontWeight:"font-weight",lineHeight:"line-height",zIndex:"z-index",boxShadow:"box-shadow",pointerEvents:"pointer-events",textAlign:"text-align",textTransform:"text-transform",textDecoration:"text-decoration",flexGrow:"flex-grow",flexShrink:"flex-shrink",flexBasis:"flex-basis",minWidth:"min-width",maxWidth:"max-width",minHeight:"min-height",maxHeight:"max-height",flexDirection:"flex-direction",flexWrap:"flex-wrap",justifyContent:"justify-content",alignItems:"align-items"},u8=e=>{const[t,r,a,o]=e,l=r??t;return[t,l,a??t,o??l]};function d8(e,t){switch(e){case"gap":case"padding":case"margin":case"paddingTop":case"paddingLeft":case"paddingRight":case"paddingBottom":case"marginTop":case"marginLeft":case"marginRight":case"marginBottom":case"left":case"right":case"top":case"bottom":case"width":case"maxWidth":case"minWidth":case"height":case"maxHeight":case"minHeight":case"borderRadius":case"borderWidth":return t.spaces;case"color":case"background":case"borderColor":return t.colors;case"fontSize":return t.fontSizes;case"fontWeight":return t.fontWeights;case"lineHeight":return t.lineHeights;case"zIndex":return t.zIndices;case"boxShadow":return t.shadows;default:return null}}const _s=(e,t)=>{const r=Object.entries(e).reduce((a,o)=>{const[l,u]=o,h=d8(l,t),m=Object.prototype.hasOwnProperty.call(c1,l)?c1[l]:l;return m&&(u||u===0)&&(typeof u=="object"&&!Array.isArray(u)?Object.entries(u).forEach(([w,v])=>{a[w]={...a[w],...l1(m,v,h)}}):a.initial={...a.initial,...l1(m,u,h)}),a},{initial:{},small:{},medium:{},large:{}});return Object.entries(r).reduce((a,[o,l])=>{if(l&&Object.keys(l).length>0){const u=Object.entries(l).reduce((h,[m,w])=>(h.push(`${m}: ${w};`),h),[]).join(`
`);o==="initial"?a.push(u):a.push(`${t.breakpoints[o]}{ ${u} }`)}return a},[]).join(`
`)},l1=(e,t,r)=>{if(Array.isArray(e)&&Array.isArray(t)){const a=u8(t);return e.reduce((o,l,u)=>(o[l]=ds(r,a[u],a[u]),o),{})}else return Array.isArray(e)&&!Array.isArray(t)?e.reduce((a,o)=>(a[o]=ds(r,t,t),a),{}):!Array.isArray(e)&&!Array.isArray(t)?{[e]:ds(r,t,t)}:(console.warn("You've passed an array of values to a property that does not support it. Please check the property and value you're passing."),{})},xt=f.forwardRef,Y=xt((e,t)=>{const{background:r,basis:a,borderColor:o,color:l,flex:u,fontSize:h,grow:m,hasRadius:w,padding:v,paddingBottom:b,paddingLeft:y,paddingRight:S,paddingTop:$,margin:_,marginLeft:j,marginBottom:L,marginRight:T,marginTop:O,shadow:N,shrink:z,lineHeight:W,fontWeight:U,width:J,minWidth:Z,maxWidth:ie,height:$e,minHeight:oe,maxHeight:P,top:se,left:Re,bottom:ve,right:le,borderRadius:Ae,borderStyle:Be,borderWidth:He,tag:pe,pointerEvents:rt,display:be,position:qe,zIndex:Ue,overflow:Pe,cursor:ee,transition:ye,transform:Te,animation:de,textAlign:xe,textTransform:je,...lt}=e,De=pe||"div",Ie={$background:r,$basis:a,$borderColor:o,$color:l,$flex:u,$fontSize:h,$grow:m,$hasRadius:w,$padding:v,$paddingBottom:b,$paddingLeft:y,$paddingRight:S,$paddingTop:$,$margin:_,$marginLeft:j,$marginBottom:L,$marginRight:T,$marginTop:O,$shadow:N,$shrink:z,$lineHeight:W,$fontWeight:U,$width:J,$minWidth:Z,$maxWidth:ie,$height:$e,$minHeight:oe,$maxHeight:P,$top:se,$left:Re,$bottom:ve,$right:le,$borderRadius:Ae,$borderStyle:Be,$borderWidth:He,$pointerEvents:rt,$display:be,$position:qe,$zIndex:Ue,$overflow:Pe,$cursor:ee,$transition:ye,$transform:Te,$animation:de,$textAlign:xe,$textTransform:je};return c.jsx(f8,{as:De,ref:t,...Ie,...lt})}),f8=I.div`
  ${({theme:e,...t})=>_s({padding:t.$padding,paddingTop:t.$paddingTop,paddingBottom:t.$paddingBottom,paddingLeft:t.$paddingLeft,paddingRight:t.$paddingRight,margin:t.$margin,marginTop:t.$marginTop,marginBottom:t.$marginBottom,marginLeft:t.$marginLeft,marginRight:t.$marginRight,top:t.$top,left:t.$left,bottom:t.$bottom,right:t.$right,width:t.$width,minWidth:t.$minWidth,maxWidth:t.$maxWidth,height:t.$height,minHeight:t.$minHeight,maxHeight:t.$maxHeight,color:t.$color,background:t.$background,fontSize:t.$fontSize,fontWeight:t.$fontWeight,lineHeight:t.$lineHeight,borderRadius:t.$hasRadius?e.borderRadius:t.$borderRadius,borderStyle:t.$borderColor&&!t.$borderStyle?"solid":t.$borderStyle,borderWidth:t.$borderColor&&!t.$borderWidth?"1px":t.$borderWidth,borderColor:t.$borderColor,zIndex:t.$zIndex,boxShadow:t.$shadow,display:t.$display,pointerEvents:t.$pointerEvents,cursor:t.$cursor,textAlign:t.$textAlign,textTransform:t.$textTransform,transition:t.$transition,transform:t.$transform,animation:t.$animation,position:t.$position,overflow:t.$overflow,flex:t.$flex,flexShrink:t.$shrink,flexGrow:t.$grow,flexBasis:t.$basis},e)};
`,K=xt((e,t)=>{const{className:r,alignItems:a,direction:o,inline:l,gap:u,justifyContent:h,wrap:m,...w}=e,v={$alignItems:a,$direction:o,$gap:u,$justifyContent:h,$wrap:m,$inline:l};return c.jsx(h8,{className:r,ref:t,...v,...w})}),h8=I(Y)`
  ${({theme:e,$display:t="flex",$alignItems:r="center",$direction:a="row",...o})=>_s({gap:o.$gap,alignItems:r,justifyContent:o.$justifyContent,flexWrap:o.$wrap,flexDirection:a,display:o.$inline?"inline-flex":t},e)};
`,g8="alpha",m8="beta",p8="delta",w8="epsilon",u1="omega",x8="pi",v8="sigma",Yu=ce`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,b8=({$variant:e=u1,theme:t})=>{switch(e){case g8:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[5]};
        line-height: ${t.lineHeights[2]};
      `;case m8:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[4]};
        line-height: ${t.lineHeights[1]};
      `;case p8:return`
        font-weight: ${t.fontWeights.semiBold};
        font-size: ${t.fontSizes[3]};
        line-height: ${t.lineHeights[2]};
      `;case w8:return`
        font-size: ${t.fontSizes[3]};
        line-height: ${t.lineHeights[6]};
      `;case u1:return`
        font-size: ${t.fontSizes[2]};
        line-height: ${t.lineHeights[4]};
      `;case x8:return`
        font-size: ${t.fontSizes[1]};
        line-height: ${t.lineHeights[3]};
      `;case v8:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[0]};
        line-height: ${t.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${t.fontSizes[2]};
      `}},ae=xt((e,t)=>{const{ellipsis:r,textColor:a="currentcolor",textDecoration:o,textTransform:l,variant:u,lineHeight:h,fontWeight:m,fontSize:w,...v}=e,b={$ellipsis:r,$textColor:a,$textDecoration:o,$textTransform:l,$variant:u,$lineHeight:h,$fontWeight:m,$fontSize:w};return c.jsx(y8,{ref:t,tag:"span",...b,...v})}),y8=I(Y)`
  ${b8}
  ${({$ellipsis:e})=>e?Yu:""}

  ${({theme:e,...t})=>_s({color:t.$textColor,textDecoration:t.$textDecoration,textTransform:t.$textTransform,lineHeight:t.$lineHeight,fontWeight:t.$fontWeight,fontSize:t.$fontSize},e)}
`,[C8,p0]=ho("Accordion");f.forwardRef(({children:e,size:t="S",...r},a)=>c.jsx($8,{ref:a,$size:t,collapsible:!0,...r,type:"single",children:c.jsx(C8,{size:t,children:e})}));const $8=I(ew)`
  background-color: ${e=>e.theme.colors.neutral0};

  ${e=>e.$size==="S"?ce`
        border-radius: ${t=>t.theme.borderRadius};
        border: solid 1px ${t=>t.theme.colors.neutral200};
      `:ce``}
`;f.forwardRef((e,t)=>{const{size:r}=p0("Item");return c.jsx(S8,{$size:r,"data-size":r,ref:t,...e})});const S8=I(tw)`
  overflow: hidden;
  margin: 1px 0;

  &:first-child {
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    margin-top: 0;
  }

  &:last-child {
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    margin-bottom: 0;
  }

  &[data-size='S'] {
    & + & {
      border-top: solid 1px ${e=>e.theme.colors.neutral200};
    }
  }

  &[data-state='open'] {
    box-shadow: 0 0 0 1px ${e=>e.theme.colors.primary600};
  }

  &:not([data-disabled]):hover {
    box-shadow: 0 0 0 1px ${e=>e.theme.colors.primary600};
  }

  /* This applies our desired focus effect correctly. */
  &:focus-within {
    position: relative;
    z-index: 1;
    box-shadow: 0 0 0 1px ${e=>e.theme.colors.primary600};
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow ${e=>e.theme.motion.timings[120]}
      ${e=>e.theme.motion.easings.easeOutQuad};
  }
`;f.forwardRef(({caretPosition:e="left",description:t,icon:r,children:a,...o},l)=>{const{size:u}=p0("Trigger");return c.jsxs(Qu,{$caretPosition:e,$size:u,ref:l,...o,children:[e==="left"?c.jsx(ws,{$size:u,children:c.jsx(Dn,{width:u==="S"?"1.2rem":"1.6rem",height:u==="S"?"1.2rem":"1.6rem"})}):null,c.jsxs(K,{tag:"span",gap:2,children:[r&&u==="S"?c.jsx(Ju,{children:c.jsx(r,{})}):null,c.jsxs(K,{alignItems:"flex-start",direction:"column",tag:"span",ref:l,children:[c.jsx(ae,{fontWeight:u==="S"?"bold":void 0,ellipsis:!0,variant:u==="M"?"delta":void 0,textAlign:"left",children:a}),t&&u==="M"?c.jsx(ae,{textAlign:"left",children:t}):null]})]}),e==="right"?c.jsx(ws,{$size:u,children:c.jsx(Dn,{width:u==="S"?"1.2rem":"1.6rem",height:u==="S"?"1.2rem":"1.6rem"})}):null]})});const Ju=I(Y)`
  color: ${e=>e.theme.colors.neutral500};
  display: flex;

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.color};
  }
`,ws=I(K).attrs(e=>({...e,tag:"span"}))`
  background-color: ${e=>e.theme.colors.neutral200};
  width: ${e=>e.$size==="S"?"2.4rem":"3.2rem"};
  height: ${e=>e.$size==="S"?"2.4rem":"3.2rem"};
  flex: ${e=>e.$size==="S"?"0 0 2.4rem":"0 0 3.2rem"};
  border-radius: 50%;
  justify-content: center;

  @media (prefers-reduced-motion: no-preference) {
    transition:
      transform ${e=>e.theme.motion.timings[200]} ${e=>e.theme.motion.easings.authenticMotion},
      ${e=>e.theme.transitions.backgroundColor};
  }
`,Qu=I(nw)`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.$caretPosition==="left"?"flex-start":"space-between"};
  width: 100%;
  gap: ${e=>e.theme.spaces[4]};
  padding-inline: ${e=>e.$size==="S"?e.theme.spaces[4]:e.theme.spaces[6]};
  padding-block: ${e=>e.$size==="S"?e.theme.spaces[3]:e.theme.spaces[6]};
  cursor: pointer;
  color: ${e=>e.theme.colors.neutral800};

  &[data-disabled] {
    cursor: default;
    color: ${e=>e.theme.colors.neutral600};
  }

  &[data-state='open'] > ${ws} {
    transform: rotate(180deg);
  }

  /* we remove the default focus because the entire item should have the focus style and the default would be hidden. */
  &:focus-visible {
    outline: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.color};
  }
`;f.forwardRef((e,t)=>{const{size:r}=p0("Trigger");return c.jsx(Zu,{$size:r,...e,ref:t})});const Zu=I(K).attrs(e=>({...e,tag:"span"}))`
  padding-inline: ${e=>e.$size==="S"?e.theme.spaces[2]:e.theme.spaces[6]};
  padding-block: ${e=>e.$size==="S"?e.theme.spaces[2]:e.theme.spaces[6]};

  // Remove default IconButton styles so there are no backgrounds or borders.
  & > button {
    border: none;
    background: none;
    color: ${e=>e.theme.colors.neutral600};

    @media (prefers-reduced-motion: no-preference) {
      transition: ${e=>e.theme.transitions.color};
    }
  }
`;f.forwardRef(({variant:e="primary",...t},r)=>c.jsx(R8,{$variant:e,ref:r,...t}));const R8=I(rw)`
  display: flex;
  align-items: center;
  background-color: ${e=>e.$variant==="primary"?e.theme.colors.neutral0:e.theme.colors.neutral100};

  &[data-disabled] {
    background-color: ${e=>e.theme.colors.neutral150};
  }

  &:not([data-disabled]) {
    &:hover,
    &[data-state='open'] {
      background-color: ${e=>e.theme.colors.primary100};

      & > ${Qu} {
        color: ${e=>e.theme.colors.primary600};

        & ${Ju} {
          color: ${e=>e.theme.colors.primary600};
        }

        & ${ws} {
          background-color: ${e=>e.theme.colors.primary200};
        }
      }

      & > ${Zu} > button {
        color: ${e=>e.theme.colors.primary600};
      }
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.backgroundColor};
  }
`;f.forwardRef((e,t)=>c.jsx(A8,{ref:t,...e}));const _8=ft`
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
`,j8=ft`
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
`,A8=I(ow)`
  overflow: hidden;

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation: ${_8} ${e=>e.theme.motion.timings[320]}
        ${e=>e.theme.motion.easings.authenticMotion};
    }

    &[data-state='closed'] {
      animation: ${j8} ${e=>e.theme.motion.timings[320]}
        ${e=>e.theme.motion.easings.authenticMotion};
    }
  }
`,js=ce`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;

    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${e=>e.theme.colors.primary600};
    }
  }
`,Tr=({tag:e,...t})=>{const r=e||"span";return c.jsx(T8,{...t,as:r})},T8=I.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`,Rr=({children:e,label:t})=>{const r=f.Children.only(e);return c.jsxs(c.Fragment,{children:[f.cloneElement(r,{"aria-hidden":"true",focusable:"false"}),c.jsx(Tr,{children:t})]})};Rr.displayName="AccessibleIcon";const Xu=e=>{switch(e){case"danger":return"danger100";case"success":return"success100";case"warning":return"warning100";default:return"primary100"}},E8=e=>Xu(e).replace("100","200"),ji=({theme:e,$variant:t})=>t==="danger"?e.colors.danger700:t==="success"?e.colors.success700:t==="warning"?e.colors.warning700:e.colors.primary700,I8=I(Y)`
  ${js};
`,M8=I(K)`
  svg {
    height: 100%;
    width: 100%;

    path {
      fill: ${ji};
    }
  }
`,L8=({variant:e,...t})=>e==="success"?c.jsx(u4,{...t}):e==="danger"||e==="warning"?c.jsx(Ku,{...t}):c.jsx(Ev,{...t}),O8=I(Y)`
  & a > span {
    color: ${ji};
  }

  svg path {
    fill: ${ji};
  }
`,B8=({title:e,children:t,variant:r="default",onClose:a,closeLabel:o,titleAs:l="p",action:u,...h})=>c.jsxs(K,{alignItems:"flex-start",background:Xu(r),borderColor:E8(r),shadow:"filterShadow",gap:3,hasRadius:!0,padding:5,paddingRight:6,...h,children:[c.jsx(M8,{height:"2rem",shrink:0,$variant:r,width:"2rem",children:c.jsx(L8,{"aria-hidden":!0,variant:r})}),c.jsxs(K,{alignItems:"start",gap:u?2:1,wrap:"wrap",role:r==="danger"?"alert":"status",width:"100%",children:[e&&c.jsx(ae,{fontWeight:"bold",textColor:"neutral800",tag:l,children:e}),c.jsx(ae,{tag:"p",textColor:"neutral800",children:t}),u&&c.jsx(O8,{$variant:r,children:u})]}),c.jsx(I8,{tag:"button",background:"transparent",borderColor:void 0,height:"1.6rem",width:"1.6rem",marginTop:1,onClick:a,color:"neutral700",children:c.jsx(Rr,{label:o,children:c.jsx(sr,{})})})]});function Pu(e){const t=f.useRef(e);return f.useEffect(()=>{t.current=e}),f.useMemo(()=>(...r)=>{var a;return(a=t.current)===null||a===void 0?void 0:a.call(t,...r)},[])}function an({prop:e,defaultProp:t,onChange:r=()=>{}}){const[a,o]=ed({defaultProp:t,onChange:r}),l=e!==void 0,u=l?e:a,h=Pu(r),m=f.useCallback(w=>{if(l){const b=typeof w=="function"?w(e):w;b!==e&&h(b)}else o(w)},[l,e,o,h]);return[u,m]}function ed({defaultProp:e,onChange:t}){const r=f.useState(e),[a]=r,o=f.useRef(a),l=Pu(t);return f.useEffect(()=>{o.current!==a&&(l(a),o.current=a)},[a,o,l]),r}const d1={easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)"},f1={120:"120ms"};`${f1[120]}${d1.easeOutQuad}`,`${f1[120]}${d1.easeOutQuad}`;const Je={overlayFadeIn:ft`
    from {
      opacity: 0;
    }
    to {
      opacity: 0.2;
    }
  `,modalPopIn:ft`
    from {
      transform:translate(-50%, -50%)  scale(0.8);
      opacity: 0;
    }
    to {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  `,modalPopOut:ft`
    from {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    to {
      transform:translate(-50%, -50%)  scale(0.8);
      opacity: 0;
    }
  `,popIn:ft`
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  `,popOut:ft`
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(0.8);
      opacity: 0;
    }
  `,slideDownIn:ft`
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,slideDownOut:ft`
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-10px);
    }
  `,slideUpIn:ft`
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,slideUpOut:ft`
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(10px);
    }
  `,fadeIn:ft`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `,fadeOut:ft`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  `},oo=32,h1=2;f.forwardRef(({onLoadingStatusChange:e,delayMs:t=600,src:r,alt:a,fallback:o,preview:l=!1,...u},h)=>{const[m,w]=an({onChange:e}),[v,b]=f.useState(!1),y=l&&m==="loaded",S=$=>{y&&b($)};return c.jsxs(X1,{onOpenChange:S,children:[c.jsx(P1,{asChild:!0,children:c.jsxs(Ai,{ref:h,...u,children:[y?c.jsx(D8,{width:"100%",height:"100%",position:"absolute",background:"neutral0",zIndex:"overlay",style:{opacity:v?.4:0}}):null,c.jsx(V8,{src:r,alt:a,onLoadingStatusChange:w}),c.jsx(sw,{delayMs:t,children:c.jsx(ae,{fontWeight:"bold",textTransform:"uppercase",children:o})})]})}),y?c.jsx(eu,{children:c.jsx(N8,{side:"top",sideOffset:4,children:c.jsx(H8,{src:r,alt:a})})}):null]})});const td=ce`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  overflow: hidden;
  border-radius: 50%;
`,nd=ce`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`,Ai=I(aw)`
  position: relative;
  z-index: 0;
  ${td}
  width: ${oo/10}rem;
  height: ${oo/10}rem;
  /* TODO: we should get the user email & hash it to turn it into a hex-value so different emails can consistently get a different background */
  background-color: ${e=>e.theme.colors.primary600};
  color: ${e=>e.theme.colors.neutral0};
`,D8=I(Y)`
  @media (prefers-reduced-motion: no-preference) {
    transition: opacity ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,V8=I(iw)`
  ${nd}
`,N8=I(tu)`
  ${td}
  width: ${oo*h1/10}rem;
  height: ${oo*h1/10}rem;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${Je.fadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,H8=I.img`
  ${nd}
`;f.forwardRef((e,t)=>c.jsx(k8,{...e,ref:t,tag:"div"}));const k8=I(K)`
  & > ${Ai} + ${Ai} {
    margin-left: -${oo/10/2}rem;
  }
`,F8=({active:e=!1,size:t="M",textColor:r="neutral600",backgroundColor:a="neutral150",children:o,minWidth:l=5,...u})=>{const h=t==="S"?1:2;return c.jsx(z8,{inline:!0,alignItems:"center",justifyContent:"center",minWidth:l,paddingLeft:h,paddingRight:h,background:e?"primary200":a,$size:t,...u,children:c.jsx(ae,{variant:"sigma",textColor:e?"primary600":r,lineHeight:"1rem",children:o})})},z8=I(K)`
  border-radius: ${({theme:e,$size:t})=>t==="S"?"2px":e.borderRadius};
  ${({$size:e,theme:t})=>e==="S"?ce`
        padding-block: 0.3rem;
        padding-inline ${t.spaces[1]}
      `:ce`
      padding-block: 0.7rem;
      padding-inline ${t.spaces[2]}
    `};
`,go=xt(({href:e,disabled:t=!1,isExternal:r=!1,...a},o)=>c.jsx(U8,{tag:"a",ref:o,target:r?"_blank":void 0,rel:r?"noreferrer noopener":void 0,href:e,tabIndex:t?-1:void 0,"aria-disabled":t,pointerEvents:t?"none":void 0,cursor:t?void 0:"pointer",...a})),U8=I(Y)`
  text-decoration: none;

  &:visited {
    color: inherit;
  }
`,rd=()=>c.jsx(Y,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:c.jsx(ae,{variant:"pi",textColor:"neutral500",children:"/"})});rd.displayName="Divider";const W8=I(K)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  & > *:first-child {
    margin-left: ${({theme:e})=>`calc(-1*${e.spaces[2]})`};
  }
`,q8=f.forwardRef(({label:e,children:t,...r},a)=>{const o=f.Children.toArray(t);return c.jsx(Y,{"aria-label":e,tag:"nav",...r,ref:a,children:c.jsx(W8,{tag:"ol",children:f.Children.map(o,(l,u)=>{const h=o.length>1&&u+1<o.length;return c.jsxs(K,{inline:!0,tag:"li",children:[l,h&&c.jsx(rd,{})]})})})})});q8.displayName="Breadcrumbs";const G8=f.forwardRef(({children:e,isCurrent:t=!1,...r},a)=>c.jsx(Y,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,ref:a,children:c.jsx(ae,{variant:"pi",textColor:"neutral800",fontWeight:t?"bold":"regular","aria-current":t,...r,children:e})}));G8.displayName="Crumb";const K8=I(go)`
  border-radius: ${({theme:e})=>e.borderRadius};
  color: ${({theme:e})=>e.colors.neutral600};
  font-size: ${({theme:e})=>e.fontSizes[1]};
  line-height: ${({theme:e})=>e.lineHeights[4]};
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  text-decoration: none;

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral200};
    color: ${({theme:e})=>e.colors.neutral700};
  }
`,Y8=f.forwardRef(({children:e,...t},r)=>c.jsx(K8,{ref:r,...t,children:e}));Y8.displayName="CrumbLink";const _r=e=>e.replaceAll(":","");function J8(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function od(...e){return t=>e.forEach(r=>J8(r,t))}function Oe(...e){return f.useCallback(od(...e),e)}const Q8=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),jr=Q8()?f.useEffect:f.useLayoutEffect,Z8=dx.useId||(()=>{});let X8=0;const Pt=e=>{const[t,r]=f.useState(Z8());return jr(()=>{e||r(a=>a??String(X8++))},[e]),e?.toString()??(t||"")},mo=(e,t,{selectorToWatch:r,skipWhen:a=!1})=>{const o=lo(t);f.useEffect(()=>{if(a||!e.current)return;const l={root:e.current,rootMargin:"0px"},u=w=>{w.forEach(v=>{v.isIntersecting&&e.current&&e.current.scrollHeight>e.current.clientHeight&&o(v)})},h=new IntersectionObserver(u,l),m=e.current.querySelector(r);return m&&h.observe(m),()=>{h.disconnect()}},[a,o,r,e])},w0="success-light",x0="danger-light",As="default",po="tertiary",wo="secondary",sd="danger",ad="success",Ts="ghost",v0=[w0,x0],P8=[As,po,wo,sd,ad,Ts,...v0],eb=["S","M","L"],Jt=e=>e===w0||e===x0?`${e.substring(0,e.lastIndexOf("-"))}`:e===po?"neutral":e===As||e===wo||P8.every(t=>t!==e)?"primary":`${e}`,id=({theme:e})=>ce`
    border: 1px solid ${e.colors.neutral200};
    background: ${e.colors.neutral150};
    color: ${e.colors.neutral600};
    cursor: default;
  `,cd=({theme:e,$variant:t})=>[...v0,wo].includes(t)?ce`
      background-color: ${e.colors.neutral0};
    `:t===po?ce`
      background-color: ${e.colors.neutral100};
    `:t===Ts?ce`
      background-color: ${e.colors.neutral100};
    `:t===As?ce`
      border: 1px solid ${e.colors.buttonPrimary500};
      background: ${e.colors.buttonPrimary500};
    `:ce`
    border: 1px solid ${e.colors[`${Jt(t)}500`]};
    background: ${e.colors[`${Jt(t)}500`]};
  `,ld=({theme:e,$variant:t})=>[...v0,wo].includes(t)?ce`
      background-color: ${e.colors.neutral0};
      border: 1px solid ${e.colors[`${Jt(t)}600`]};
      color: ${e.colors[`${Jt(t)}600`]};
    `:t===po||t===Ts?ce`
      background-color: ${e.colors.neutral150};
    `:ce`
    border: 1px solid ${e.colors[`${Jt(t)}600`]};
    background: ${e.colors[`${Jt(t)}600`]};
  `,ud=({theme:e,$variant:t})=>{switch(t){case x0:case w0:case wo:return ce`
        border: 1px solid ${e.colors[`${Jt(t)}200`]};
        background: ${e.colors[`${Jt(t)}100`]};
        color: ${e.colors[`${Jt(t)}700`]};
      `;case po:return ce`
        border: 1px solid ${e.colors.neutral200};
        background: ${e.colors.neutral0};
        color: ${e.colors.neutral800};
      `;case Ts:return ce`
        border: 1px solid transparent;
        background: transparent;
        color: ${e.colors.neutral800};

        svg {
          fill: ${e.colors.neutral500};
        }
      `;case ad:case sd:return ce`
        border: 1px solid ${e.colors[`${Jt(t)}600`]};
        background: ${e.colors[`${Jt(t)}600`]};
        color: ${e.colors.neutral0};
      `;default:return ce`
        border: 1px solid ${e.colors.buttonPrimary600};
        background: ${e.colors.buttonPrimary600};
        color: ${e.colors.buttonNeutral0};
      `}},xs=xt(({variant:e=As,startIcon:t,endIcon:r,disabled:a=!1,children:o,onClick:l,size:u=eb[0],loading:h=!1,fullWidth:m=!1,...w},v)=>{const b=a||h,y=S=>{!b&&l&&l(S)};return c.jsxs(rb,{ref:v,"aria-disabled":b,disabled:b,$size:u,$variant:e,tag:"button",onClick:y,hasRadius:!0,gap:2,inline:!0,alignItems:"center",justifyContent:"center",width:m?"100%":void 0,paddingLeft:4,paddingRight:4,cursor:"pointer",...w,children:[(t||h)&&c.jsx(K,{tag:"span","aria-hidden":!0,children:h?c.jsx(nb,{}):t}),c.jsx(ae,{variant:u==="S"?"pi":void 0,fontWeight:"bold",children:o}),r&&c.jsx(K,{tag:"span","aria-hidden":!0,children:r})]})}),tb=ft`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,nb=I(Gu)`
  animation: ${tb} 2s infinite linear;
  will-change: transform;
`,rb=I(K)`
  height: ${({theme:e,$size:t})=>e.sizes.button[t]};
  text-decoration: none;
  ${ud}

  &:hover {
    ${cd}
  }

  &:active {
    ${ld}
  }

  &[aria-disabled='true'] {
    ${id}
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      ${e=>e.theme.transitions.backgroundColor},
      ${e=>e.theme.transitions.color},
      border-color ${e=>e.theme.motion.timings[200]} ${e=>e.theme.motion.easings.easeOutQuad};
  }
`,dd=f.forwardRef(({children:e,description:t,label:r,defaultOpen:a,open:o,onOpenChange:l,delayDuration:u=500,disableHoverableContent:h,...m},w)=>c.jsxs(X1,{defaultOpen:a,open:o,onOpenChange:l,delayDuration:u,disableHoverableContent:h,children:[c.jsx(P1,{asChild:!0,children:e}),c.jsx(eu,{children:c.jsx(ob,{ref:w,sideOffset:8,...m,children:c.jsx(ae,{variant:"pi",fontWeight:"bold",children:r||t})})})]})),ob=I(tu)`
  background-color: ${e=>e.theme.colors.neutral900};
  color: ${e=>e.theme.colors.neutral0};
  padding-inline: ${e=>e.theme.spaces[2]};
  padding-block: ${e=>e.theme.spaces[2]};
  border-radius: ${e=>e.theme.borderRadius};
  z-index: ${e=>e.theme.zIndices.tooltip};
  will-change: opacity;
  transform-origin: var(--radix-tooltip-content-transform-origin);

  @media (prefers-reduced-motion: no-preference) {
    animation: ${Je.fadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,Ti=xt(({label:e,background:t,children:r,disabled:a=!1,onClick:o,size:l="S",variant:u="tertiary",withTooltip:h=!0,...m},w)=>{const v=y=>{!a&&o&&o(y)},b=c.jsx(no,{"aria-disabled":a,background:a?"neutral150":t,tag:"button",display:"inline-flex",justifyContent:"center",hasRadius:!0,cursor:"pointer",...m,ref:w,$size:l,onClick:v,$variant:u,children:c.jsx(Rr,{label:e,children:r})});return h?c.jsx(dd,{label:e,children:b}):b}),no=I(K)`
  text-decoration: none;

  ${e=>{switch(e.$size){case"S":return ce`
          padding-block: 0.7rem;
          padding-inline: 0.7rem;
        `;case"M":return ce`
          padding-block: 0.9rem;
          padding-inline: 0.9rem;
        `;case"L":return ce`
          padding-block: 1.1rem;
          padding-inline: 1.1rem;
        `}}}
  ${ud}
  ${e=>e.$variant==="tertiary"?ce`
          color: ${e.theme.colors.neutral500};
        `:""}

  &:hover {
    ${cd}
    ${e=>e.$variant==="tertiary"?ce`
            color: ${e.theme.colors.neutral600};
          `:""}
  }

  &:active {
    ${ld}
  }

  &[aria-disabled='true'] {
    ${id}
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      ${e=>e.theme.transitions.backgroundColor},
      ${e=>e.theme.transitions.color},
      border-color ${e=>e.theme.motion.timings[200]} ${e=>e.theme.motion.easings.easeOutQuad};
  }
`;I(K)`
  & ${no}:first-child {
    border-radius: ${({theme:e})=>`${e.borderRadius} 0 0 ${e.borderRadius}`};
  }

  & ${no}:last-child {
    border-radius: ${({theme:e})=>`0 ${e.borderRadius} ${e.borderRadius} 0`};
  }

  & ${no} {
    border-radius: 0;

    & + ${no} {
      border-left: none;
    }
  }
`;const fd=xt(({children:e,href:t,disabled:r=!1,startIcon:a,endIcon:o,isExternal:l=!1,...u},h)=>c.jsxs(sb,{ref:h,href:t,disabled:r,isExternal:l,...u,children:[a,c.jsx(ae,{textColor:r?"neutral600":"primary600",children:e}),o,t&&!o&&l&&c.jsx(G4,{})]})),sb=I(go)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({theme:e})=>e.spaces[2]};
  pointer-events: ${({disabled:e})=>e?"none":void 0};

  svg {
    font-size: 1rem;

    path {
      fill: ${({disabled:e,theme:t})=>e?t.colors.neutral600:t.colors.primary600};
    }
  }

  &:hover {
    & > span {
      color: ${({theme:e})=>e.colors.primary500};
    }
  }

  &:active {
    color: ${({theme:e})=>e.colors.primary700};
  }

  ${js};
`,ab=hw,ib=f.forwardRef(({label:e,endIcon:t=c.jsx(Dn,{width:"1.2rem",height:"1.2rem","aria-hidden":!0}),tag:r=xs,icon:a,...o},l)=>{const u={...o,ref:l,type:"button"};return c.jsx(cw,{asChild:!0,children:r===Ti?c.jsx(Ti,{label:e,variant:"tertiary",...u,children:a}):c.jsx(xs,{endIcon:t,variant:"ghost",...u})})}),cb=f.forwardRef(({children:e,intersectionId:t,popoverPlacement:r="bottom-start",...a},o)=>{const[l,u]=r.split("-");return c.jsx(nu,{children:c.jsx(lb,{align:u,side:l,loop:!0,asChild:!0,children:c.jsxs(hd,{ref:o,direction:"column",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,marginTop:1,marginBottom:1,alignItems:"flex-start",position:"relative",overflow:"auto",...a,children:[e,c.jsx(Y,{id:t,width:"100%",height:"1px"})]})})})}),hd=I(K)`
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`,lb=I(lw)`
  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${Je.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${Je.slideDownIn};
      }
    }
  }
`,gd=({theme:e})=>ce`
  text-align: left;
  width: 100%;
  border-radius: ${e.borderRadius};
  padding: ${e.spaces[2]} ${e.spaces[4]};

  &[aria-disabled='true'] {
    cursor: not-allowed;
    color: ${e.colors.neutral500};
  }

  &[data-highlighted] {
    background-color: ${e.colors.primary100};
  }

  &:focus-visible {
    outline: none;

    &:after {
      content: none;
    }
  }
`,ub=I(K)`
  ${gd}
`;I(fd)`
  /* We include this here again because typically when people use OptionLink they provide an as prop which cancels the Box props */
  color: ${({theme:e,color:t})=>ds(e.colors,t,void 0)};
  text-decoration: none;

  &:hover {
    color: unset;
  }

  /* TODO: do we need this? */
  svg > path,
  &:focus-visible svg > path {
    fill: currentColor;
  }

  ${gd}
`;f.forwardRef((e,t)=>c.jsx(uw,{asChild:!0,children:c.jsx(db,{ref:t,variant:"sigma",textColor:"neutral600",...e})}));const db=I(ae)`
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
`;f.forwardRef(({disabled:e=!1,...t},r)=>c.jsx(dw,{asChild:!0,disabled:e,children:c.jsxs(fb,{ref:r,color:"neutral800",tag:"button",type:"button",background:"transparent",borderStyle:"none",gap:5,...t,children:[c.jsx(ae,{children:t.children}),c.jsx(m0,{fill:"neutral500",height:"1.2rem",width:"1.2rem"})]})}));const fb=I(ub)`
  &[data-state='open'] {
    background-color: ${({theme:e})=>e.colors.primary100};
  }
`;f.forwardRef((e,t)=>c.jsx(nu,{children:c.jsx(fw,{sideOffset:8,asChild:!0,children:c.jsx(hd,{ref:t,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",overflow:"auto",...e})})}));const hb=ab,gb=ib,mb=cb,pb=f.forwardRef(({children:e,onOpen:t,onClose:r,popoverPlacement:a,onReachEnd:o,...l},u)=>{const h=f.useRef(null),m=Oe(u,h),w=f.useRef(null),[v,b]=f.useState(!1),y=j=>{o&&o(j)},S=j=>{j&&typeof t=="function"?t():!j&&typeof r=="function"&&r(),b(j)},$=Pt(),_=`intersection-${_r($)}`;return mo(w,y,{selectorToWatch:`#${_}`,skipWhen:!v}),c.jsxs(hb,{onOpenChange:S,children:[c.jsx(gb,{ref:m,...l,children:l.label}),c.jsx(mb,{ref:w,intersectionId:_,popoverPlacement:a,children:e})]})}),wb=I(pb)`
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  height: unset;

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral200};
  }
`,xb=f.forwardRef(({children:e,...t},r)=>c.jsx(wb,{ref:r,endIcon:null,size:"S",...t,children:e}));xb.displayName="CrumbSimpleMenu";const md=f.createContext({id:""}),vb=()=>f.useContext(md);f.forwardRef(({id:e,...t},r)=>{const a=Pt(e),o=f.useMemo(()=>({id:a}),[a]);return c.jsx(md.Provider,{value:o,children:c.jsx(Y,{ref:r,id:e,tabIndex:0,hasRadius:!0,background:"neutral0",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",shadow:"tableShadow",tag:"article","aria-labelledby":`${a}-title`,...t})})});const bb=f.forwardRef(({position:e,...t},r)=>c.jsx(yb,{ref:r,$position:e,...t,direction:"row",gap:2})),yb=I(K)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  right: ${({$position:e,theme:t})=>{if(e==="end")return t.spaces[3]}};
  left: ${({$position:e,theme:t})=>{if(e==="start")return t.spaces[3]}};
`;I.img`
  // inline flows is based on typography and displays an extra white space below the image
  // switch to block is required in order to make the img stick the bottom of the container
  // addition infos: https://stackoverflow.com/questions/5804256/image-inside-div-has-extra-space-below-the-image
  margin: 0;
  padding: 0;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;I.div`
  display: flex;
  justify-content: center;
  height: ${({$size:e})=>e==="S"?"8.8rem":"16.4rem"};
  width: 100%;
  background: repeating-conic-gradient(${({theme:e})=>e.colors.neutral100} 0% 25%, transparent 0% 50%) 50% / 20px
    20px;
  border-top-left-radius: ${({theme:e})=>e.borderRadius};
  border-top-right-radius: ${({theme:e})=>e.borderRadius};
`;I.div`
  margin-left: auto;
  flex-shrink: 0;
`;I(F8)`
  margin-left: ${({theme:e})=>e.spaces[1]};
`;const Cb=({fill:e,...t})=>{const{colors:r}=M();return c.jsx(Y,{tag:"svg",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:e?r[e]:void 0,...t,children:c.jsx("path",{d:"M29.0613 10.0613L13.0613 26.0613C12.9219 26.2011 12.7563 26.3121 12.574 26.3878C12.3917 26.4635 12.1962 26.5024 11.9988 26.5024C11.8013 26.5024 11.6059 26.4635 11.4235 26.3878C11.2412 26.3121 11.0756 26.2011 10.9363 26.0613L3.93626 19.0613C3.79673 18.9217 3.68605 18.7561 3.61053 18.5738C3.53502 18.3915 3.49615 18.1961 3.49615 17.9988C3.49615 17.8014 3.53502 17.606 3.61053 17.4237C3.68605 17.2414 3.79673 17.0758 3.93626 16.9363C4.07579 16.7967 4.24143 16.686 4.42374 16.6105C4.60604 16.535 4.80143 16.4962 4.99876 16.4962C5.19608 16.4962 5.39147 16.535 5.57378 16.6105C5.75608 16.686 5.92173 16.7967 6.06126 16.9363L12 22.875L26.9388 7.93876C27.2205 7.65697 27.6027 7.49866 28.0013 7.49866C28.3998 7.49866 28.782 7.65697 29.0638 7.93876C29.3455 8.22055 29.5039 8.60274 29.5039 9.00126C29.5039 9.39977 29.3455 9.78197 29.0638 10.0638L29.0613 10.0613Z"})})},g1=f.forwardRef(({defaultChecked:e,checked:t,onCheckedChange:r,...a},o)=>{const l=f.useRef(null),[u,h]=an({defaultProp:e,prop:t,onChange:r}),m=Oe(l,o);return c.jsx($b,{ref:m,checked:u,onCheckedChange:h,...a,children:c.jsxs(gw,{style:{display:"inline-flex"},children:[u===!0?c.jsx(Cb,{width:"1.6rem",fill:"neutral0"}):null,u==="indeterminate"?c.jsx(Zv,{fill:"neutral0"}):null]})})}),$b=I(mw)`
  background: ${e=>e.theme.colors.neutral0};
  width: 2rem;
  height: 2rem;
  border-radius: ${e=>e.theme.borderRadius};
  border: 1px solid ${e=>e.theme.colors.neutral300};
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  // this ensures the checkbox is always a square even in flex-containers.
  flex: 0 0 2rem;

  &[data-state='checked'],
  &[data-state='indeterminate'] {
    border: 1px solid ${e=>e.theme.colors.primary600};
    background-color: ${e=>e.theme.colors.primary600};
  }

  &[data-disabled] {
    background-color: ${e=>e.theme.colors.neutral200};
  }

  /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44px;
    min-height: 44px;
  }
`,Es=f.forwardRef(({children:e,...t},r)=>{const a=Pt(t.id);return e?c.jsxs(K,{gap:2,children:[c.jsx(g1,{id:a,...t}),c.jsx(ae,{tag:"label",textColor:"neutral800",htmlFor:a,children:e})]}):c.jsx(g1,{ref:r,...t})});f.forwardRef((e,t)=>{const{id:r}=vb();return c.jsx(bb,{position:"start",children:c.jsx(Es,{"aria-labelledby":`${r}-title`,...e,ref:t})})});I(Y)`
  word-break: break-all;
`;I(K)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`;const ht={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",END:"End",HOME:"Home",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown"},Sb=I(Y)`
  grid-template-columns: auto 1fr auto;
  grid-template-areas: 'startAction slides endAction';
`,Rb=I(K)`
  grid-area: slides;
`,m1=I(Y)`
  grid-area: ${({$area:e})=>e};

  &:focus svg path,
  &:hover svg path {
    fill: ${({theme:e})=>e.colors.neutral900};
  }
`,_b=f.forwardRef(({actions:e,children:t,label:r,nextLabel:a,onNext:o,onPrevious:l,previousLabel:u,secondaryLabel:h,selectedSlide:m,...w},v)=>{const b=f.useRef(null),y=f.useRef(null),S=f.Children.map(t,(_,j)=>f.cloneElement(_,{selected:j===m})),$=_=>{switch(_.key){case ht.RIGHT:{_.preventDefault(),y?.current&&y.current.focus(),o&&o();break}case ht.LEFT:{_.preventDefault(),b?.current&&b.current.focus(),l&&l();break}}};return c.jsx(Y,{ref:v,...w,onKeyDown:$,children:c.jsxs(Y,{padding:2,borderColor:"neutral200",hasRadius:!0,background:"neutral100",children:[c.jsxs(Sb,{tag:"section","aria-roledescription":"carousel","aria-label":r,display:"grid",position:"relative",children:[S&&S.length>1&&c.jsxs(c.Fragment,{children:[c.jsx(m1,{tag:"button",onClick:l,$area:"startAction",ref:b,type:"button",children:c.jsx(Rr,{label:u,children:c.jsx(qu,{width:"1.6rem",height:"1.6rem",fill:"neutral600"})})}),c.jsx(m1,{tag:"button",onClick:o,$area:"endAction",ref:y,type:"button",children:c.jsx(Rr,{label:a,children:c.jsx(m0,{width:"1.6rem",height:"1.6rem",fill:"neutral600"})})})]}),c.jsx(Rb,{"aria-live":"polite",paddingLeft:2,paddingRight:2,width:"100%",overflow:"hidden",children:S}),e]}),h&&c.jsx(Y,{paddingTop:2,paddingLeft:4,paddingRight:4,children:c.jsx(dd,{label:h,children:c.jsx(K,{justifyContent:"center",children:c.jsx(ae,{variant:"pi",textColor:"neutral600",ellipsis:!0,children:h})})})})]})})});var Qr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},vs={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */vs.exports;(function(e,t){(function(){var r,a="4.17.21",o=200,l="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",h="Invalid `variable` option passed into `_.template`",m="__lodash_hash_undefined__",w=500,v="__lodash_placeholder__",b=1,y=2,S=4,$=1,_=2,j=1,L=2,T=4,O=8,N=16,z=32,W=64,U=128,J=256,Z=512,ie=30,$e="...",oe=800,P=16,se=1,Re=2,ve=3,le=1/0,Ae=9007199254740991,Be=17976931348623157e292,He=NaN,pe=4294967295,rt=pe-1,be=pe>>>1,qe=[["ary",U],["bind",j],["bindKey",L],["curry",O],["curryRight",N],["flip",Z],["partial",z],["partialRight",W],["rearg",J]],Ue="[object Arguments]",Pe="[object Array]",ee="[object AsyncFunction]",ye="[object Boolean]",Te="[object Date]",de="[object DOMException]",xe="[object Error]",je="[object Function]",lt="[object GeneratorFunction]",De="[object Map]",Ie="[object Number]",Dt="[object Null]",et="[object Object]",Lr="[object Promise]",Ns="[object Proxy]",Sn="[object RegExp]",gt="[object Set]",tn="[object String]",ar="[object Symbol]",Or="[object Undefined]",kn="[object WeakMap]",Hs="[object WeakSet]",ln="[object ArrayBuffer]",Ze="[object DataView]",ks="[object Float32Array]",Fs="[object Float64Array]",zs="[object Int8Array]",Us="[object Int16Array]",Ws="[object Int32Array]",qs="[object Uint8Array]",Gs="[object Uint8ClampedArray]",Ks="[object Uint16Array]",Ys="[object Uint32Array]",m2=/\b__p \+= '';/g,p2=/\b(__p \+=) '' \+/g,w2=/(__e\(.*?\)|\b__t\)) \+\n'';/g,A0=/&(?:amp|lt|gt|quot|#39);/g,T0=/[&<>"']/g,x2=RegExp(A0.source),v2=RegExp(T0.source),b2=/<%-([\s\S]+?)%>/g,y2=/<%([\s\S]+?)%>/g,E0=/<%=([\s\S]+?)%>/g,C2=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$2=/^\w*$/,S2=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Js=/[\\^$.*+?()[\]{}|]/g,R2=RegExp(Js.source),Qs=/^\s+/,_2=/\s/,j2=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,A2=/\{\n\/\* \[wrapped with (.+)\] \*/,T2=/,? & /,E2=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,I2=/[()=,{}\[\]\/\s]/,M2=/\\(\\)?/g,L2=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,I0=/\w*$/,O2=/^[-+]0x[0-9a-f]+$/i,B2=/^0b[01]+$/i,D2=/^\[object .+?Constructor\]$/,V2=/^0o[0-7]+$/i,N2=/^(?:0|[1-9]\d*)$/,H2=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,yo=/($^)/,k2=/['\n\r\u2028\u2029\\]/g,Co="\\ud800-\\udfff",F2="\\u0300-\\u036f",z2="\\ufe20-\\ufe2f",U2="\\u20d0-\\u20ff",M0=F2+z2+U2,L0="\\u2700-\\u27bf",O0="a-z\\xdf-\\xf6\\xf8-\\xff",W2="\\xac\\xb1\\xd7\\xf7",q2="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",G2="\\u2000-\\u206f",K2=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",B0="A-Z\\xc0-\\xd6\\xd8-\\xde",D0="\\ufe0e\\ufe0f",V0=W2+q2+G2+K2,Zs="['’]",Y2="["+Co+"]",N0="["+V0+"]",$o="["+M0+"]",H0="\\d+",J2="["+L0+"]",k0="["+O0+"]",F0="[^"+Co+V0+H0+L0+O0+B0+"]",Xs="\\ud83c[\\udffb-\\udfff]",Q2="(?:"+$o+"|"+Xs+")",z0="[^"+Co+"]",Ps="(?:\\ud83c[\\udde6-\\uddff]){2}",ea="[\\ud800-\\udbff][\\udc00-\\udfff]",ir="["+B0+"]",U0="\\u200d",W0="(?:"+k0+"|"+F0+")",Z2="(?:"+ir+"|"+F0+")",q0="(?:"+Zs+"(?:d|ll|m|re|s|t|ve))?",G0="(?:"+Zs+"(?:D|LL|M|RE|S|T|VE))?",K0=Q2+"?",Y0="["+D0+"]?",X2="(?:"+U0+"(?:"+[z0,Ps,ea].join("|")+")"+Y0+K0+")*",P2="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ef="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",J0=Y0+K0+X2,tf="(?:"+[J2,Ps,ea].join("|")+")"+J0,nf="(?:"+[z0+$o+"?",$o,Ps,ea,Y2].join("|")+")",rf=RegExp(Zs,"g"),of=RegExp($o,"g"),ta=RegExp(Xs+"(?="+Xs+")|"+nf+J0,"g"),sf=RegExp([ir+"?"+k0+"+"+q0+"(?="+[N0,ir,"$"].join("|")+")",Z2+"+"+G0+"(?="+[N0,ir+W0,"$"].join("|")+")",ir+"?"+W0+"+"+q0,ir+"+"+G0,ef,P2,H0,tf].join("|"),"g"),af=RegExp("["+U0+Co+M0+D0+"]"),cf=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,lf=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],uf=-1,ke={};ke[ks]=ke[Fs]=ke[zs]=ke[Us]=ke[Ws]=ke[qs]=ke[Gs]=ke[Ks]=ke[Ys]=!0,ke[Ue]=ke[Pe]=ke[ln]=ke[ye]=ke[Ze]=ke[Te]=ke[xe]=ke[je]=ke[De]=ke[Ie]=ke[et]=ke[Sn]=ke[gt]=ke[tn]=ke[kn]=!1;var Ne={};Ne[Ue]=Ne[Pe]=Ne[ln]=Ne[Ze]=Ne[ye]=Ne[Te]=Ne[ks]=Ne[Fs]=Ne[zs]=Ne[Us]=Ne[Ws]=Ne[De]=Ne[Ie]=Ne[et]=Ne[Sn]=Ne[gt]=Ne[tn]=Ne[ar]=Ne[qs]=Ne[Gs]=Ne[Ks]=Ne[Ys]=!0,Ne[xe]=Ne[je]=Ne[kn]=!1;var df={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},ff={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},hf={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},gf={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},mf=parseFloat,pf=parseInt,Q0=typeof Qr=="object"&&Qr&&Qr.Object===Object&&Qr,wf=typeof self=="object"&&self&&self.Object===Object&&self,it=Q0||wf||Function("return this")(),na=t&&!t.nodeType&&t,Fn=na&&!0&&e&&!e.nodeType&&e,Z0=Fn&&Fn.exports===na,ra=Z0&&Q0.process,Vt=function(){try{var A=Fn&&Fn.require&&Fn.require("util").types;return A||ra&&ra.binding&&ra.binding("util")}catch{}}(),X0=Vt&&Vt.isArrayBuffer,P0=Vt&&Vt.isDate,ec=Vt&&Vt.isMap,tc=Vt&&Vt.isRegExp,nc=Vt&&Vt.isSet,rc=Vt&&Vt.isTypedArray;function _t(A,V,B){switch(B.length){case 0:return A.call(V);case 1:return A.call(V,B[0]);case 2:return A.call(V,B[0],B[1]);case 3:return A.call(V,B[0],B[1],B[2])}return A.apply(V,B)}function xf(A,V,B,G){for(var ue=-1,Ee=A==null?0:A.length;++ue<Ee;){var tt=A[ue];V(G,tt,B(tt),A)}return G}function Nt(A,V){for(var B=-1,G=A==null?0:A.length;++B<G&&V(A[B],B,A)!==!1;);return A}function vf(A,V){for(var B=A==null?0:A.length;B--&&V(A[B],B,A)!==!1;);return A}function oc(A,V){for(var B=-1,G=A==null?0:A.length;++B<G;)if(!V(A[B],B,A))return!1;return!0}function Rn(A,V){for(var B=-1,G=A==null?0:A.length,ue=0,Ee=[];++B<G;){var tt=A[B];V(tt,B,A)&&(Ee[ue++]=tt)}return Ee}function So(A,V){var B=A==null?0:A.length;return!!B&&cr(A,V,0)>-1}function oa(A,V,B){for(var G=-1,ue=A==null?0:A.length;++G<ue;)if(B(V,A[G]))return!0;return!1}function ze(A,V){for(var B=-1,G=A==null?0:A.length,ue=Array(G);++B<G;)ue[B]=V(A[B],B,A);return ue}function _n(A,V){for(var B=-1,G=V.length,ue=A.length;++B<G;)A[ue+B]=V[B];return A}function sa(A,V,B,G){var ue=-1,Ee=A==null?0:A.length;for(G&&Ee&&(B=A[++ue]);++ue<Ee;)B=V(B,A[ue],ue,A);return B}function bf(A,V,B,G){var ue=A==null?0:A.length;for(G&&ue&&(B=A[--ue]);ue--;)B=V(B,A[ue],ue,A);return B}function aa(A,V){for(var B=-1,G=A==null?0:A.length;++B<G;)if(V(A[B],B,A))return!0;return!1}var yf=ia("length");function Cf(A){return A.split("")}function $f(A){return A.match(E2)||[]}function sc(A,V,B){var G;return B(A,function(ue,Ee,tt){if(V(ue,Ee,tt))return G=Ee,!1}),G}function Ro(A,V,B,G){for(var ue=A.length,Ee=B+(G?1:-1);G?Ee--:++Ee<ue;)if(V(A[Ee],Ee,A))return Ee;return-1}function cr(A,V,B){return V===V?Bf(A,V,B):Ro(A,ac,B)}function Sf(A,V,B,G){for(var ue=B-1,Ee=A.length;++ue<Ee;)if(G(A[ue],V))return ue;return-1}function ac(A){return A!==A}function ic(A,V){var B=A==null?0:A.length;return B?la(A,V)/B:He}function ia(A){return function(V){return V==null?r:V[A]}}function ca(A){return function(V){return A==null?r:A[V]}}function cc(A,V,B,G,ue){return ue(A,function(Ee,tt,Ve){B=G?(G=!1,Ee):V(B,Ee,tt,Ve)}),B}function Rf(A,V){var B=A.length;for(A.sort(V);B--;)A[B]=A[B].value;return A}function la(A,V){for(var B,G=-1,ue=A.length;++G<ue;){var Ee=V(A[G]);Ee!==r&&(B=B===r?Ee:B+Ee)}return B}function ua(A,V){for(var B=-1,G=Array(A);++B<A;)G[B]=V(B);return G}function _f(A,V){return ze(V,function(B){return[B,A[B]]})}function lc(A){return A&&A.slice(0,hc(A)+1).replace(Qs,"")}function jt(A){return function(V){return A(V)}}function da(A,V){return ze(V,function(B){return A[B]})}function Br(A,V){return A.has(V)}function uc(A,V){for(var B=-1,G=A.length;++B<G&&cr(V,A[B],0)>-1;);return B}function dc(A,V){for(var B=A.length;B--&&cr(V,A[B],0)>-1;);return B}function jf(A,V){for(var B=A.length,G=0;B--;)A[B]===V&&++G;return G}var Af=ca(df),Tf=ca(ff);function Ef(A){return"\\"+gf[A]}function If(A,V){return A==null?r:A[V]}function lr(A){return af.test(A)}function Mf(A){return cf.test(A)}function Lf(A){for(var V,B=[];!(V=A.next()).done;)B.push(V.value);return B}function fa(A){var V=-1,B=Array(A.size);return A.forEach(function(G,ue){B[++V]=[ue,G]}),B}function fc(A,V){return function(B){return A(V(B))}}function jn(A,V){for(var B=-1,G=A.length,ue=0,Ee=[];++B<G;){var tt=A[B];(tt===V||tt===v)&&(A[B]=v,Ee[ue++]=B)}return Ee}function _o(A){var V=-1,B=Array(A.size);return A.forEach(function(G){B[++V]=G}),B}function Of(A){var V=-1,B=Array(A.size);return A.forEach(function(G){B[++V]=[G,G]}),B}function Bf(A,V,B){for(var G=B-1,ue=A.length;++G<ue;)if(A[G]===V)return G;return-1}function Df(A,V,B){for(var G=B+1;G--;)if(A[G]===V)return G;return G}function ur(A){return lr(A)?Nf(A):yf(A)}function qt(A){return lr(A)?Hf(A):Cf(A)}function hc(A){for(var V=A.length;V--&&_2.test(A.charAt(V)););return V}var Vf=ca(hf);function Nf(A){for(var V=ta.lastIndex=0;ta.test(A);)++V;return V}function Hf(A){return A.match(ta)||[]}function kf(A){return A.match(sf)||[]}var Ff=function A(V){V=V==null?it:dr.defaults(it.Object(),V,dr.pick(it,lf));var B=V.Array,G=V.Date,ue=V.Error,Ee=V.Function,tt=V.Math,Ve=V.Object,ha=V.RegExp,zf=V.String,Ht=V.TypeError,jo=B.prototype,Uf=Ee.prototype,fr=Ve.prototype,Ao=V["__core-js_shared__"],To=Uf.toString,Le=fr.hasOwnProperty,Wf=0,gc=function(){var n=/[^.]+$/.exec(Ao&&Ao.keys&&Ao.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Eo=fr.toString,qf=To.call(Ve),Gf=it._,Kf=ha("^"+To.call(Le).replace(Js,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Io=Z0?V.Buffer:r,An=V.Symbol,Mo=V.Uint8Array,mc=Io?Io.allocUnsafe:r,Lo=fc(Ve.getPrototypeOf,Ve),pc=Ve.create,wc=fr.propertyIsEnumerable,Oo=jo.splice,xc=An?An.isConcatSpreadable:r,Dr=An?An.iterator:r,zn=An?An.toStringTag:r,Bo=function(){try{var n=Kn(Ve,"defineProperty");return n({},"",{}),n}catch{}}(),Yf=V.clearTimeout!==it.clearTimeout&&V.clearTimeout,Jf=G&&G.now!==it.Date.now&&G.now,Qf=V.setTimeout!==it.setTimeout&&V.setTimeout,Do=tt.ceil,Vo=tt.floor,ga=Ve.getOwnPropertySymbols,Zf=Io?Io.isBuffer:r,vc=V.isFinite,Xf=jo.join,Pf=fc(Ve.keys,Ve),nt=tt.max,ut=tt.min,eh=G.now,th=V.parseInt,bc=tt.random,nh=jo.reverse,ma=Kn(V,"DataView"),Vr=Kn(V,"Map"),pa=Kn(V,"Promise"),hr=Kn(V,"Set"),Nr=Kn(V,"WeakMap"),Hr=Kn(Ve,"create"),No=Nr&&new Nr,gr={},rh=Yn(ma),oh=Yn(Vr),sh=Yn(pa),ah=Yn(hr),ih=Yn(Nr),Ho=An?An.prototype:r,kr=Ho?Ho.valueOf:r,yc=Ho?Ho.toString:r;function p(n){if(Ge(n)&&!fe(n)&&!(n instanceof Se)){if(n instanceof kt)return n;if(Le.call(n,"__wrapped__"))return Cl(n)}return new kt(n)}var mr=function(){function n(){}return function(s){if(!We(s))return{};if(pc)return pc(s);n.prototype=s;var i=new n;return n.prototype=r,i}}();function ko(){}function kt(n,s){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=r}p.templateSettings={escape:b2,evaluate:y2,interpolate:E0,variable:"",imports:{_:p}},p.prototype=ko.prototype,p.prototype.constructor=p,kt.prototype=mr(ko.prototype),kt.prototype.constructor=kt;function Se(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=pe,this.__views__=[]}function ch(){var n=new Se(this.__wrapped__);return n.__actions__=vt(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=vt(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=vt(this.__views__),n}function lh(){if(this.__filtered__){var n=new Se(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function uh(){var n=this.__wrapped__.value(),s=this.__dir__,i=fe(n),d=s<0,g=i?n.length:0,x=C5(0,g,this.__views__),C=x.start,R=x.end,E=R-C,H=d?R:C-1,k=this.__iteratees__,F=k.length,q=0,Q=ut(E,this.__takeCount__);if(!i||!d&&g==E&&Q==E)return qc(n,this.__actions__);var ne=[];e:for(;E--&&q<Q;){H+=s;for(var me=-1,re=n[H];++me<F;){var Ce=k[me],_e=Ce.iteratee,Et=Ce.type,wt=_e(re);if(Et==Re)re=wt;else if(!wt){if(Et==se)continue e;break e}}ne[q++]=re}return ne}Se.prototype=mr(ko.prototype),Se.prototype.constructor=Se;function Un(n){var s=-1,i=n==null?0:n.length;for(this.clear();++s<i;){var d=n[s];this.set(d[0],d[1])}}function dh(){this.__data__=Hr?Hr(null):{},this.size=0}function fh(n){var s=this.has(n)&&delete this.__data__[n];return this.size-=s?1:0,s}function hh(n){var s=this.__data__;if(Hr){var i=s[n];return i===m?r:i}return Le.call(s,n)?s[n]:r}function gh(n){var s=this.__data__;return Hr?s[n]!==r:Le.call(s,n)}function mh(n,s){var i=this.__data__;return this.size+=this.has(n)?0:1,i[n]=Hr&&s===r?m:s,this}Un.prototype.clear=dh,Un.prototype.delete=fh,Un.prototype.get=hh,Un.prototype.has=gh,Un.prototype.set=mh;function un(n){var s=-1,i=n==null?0:n.length;for(this.clear();++s<i;){var d=n[s];this.set(d[0],d[1])}}function ph(){this.__data__=[],this.size=0}function wh(n){var s=this.__data__,i=Fo(s,n);if(i<0)return!1;var d=s.length-1;return i==d?s.pop():Oo.call(s,i,1),--this.size,!0}function xh(n){var s=this.__data__,i=Fo(s,n);return i<0?r:s[i][1]}function vh(n){return Fo(this.__data__,n)>-1}function bh(n,s){var i=this.__data__,d=Fo(i,n);return d<0?(++this.size,i.push([n,s])):i[d][1]=s,this}un.prototype.clear=ph,un.prototype.delete=wh,un.prototype.get=xh,un.prototype.has=vh,un.prototype.set=bh;function dn(n){var s=-1,i=n==null?0:n.length;for(this.clear();++s<i;){var d=n[s];this.set(d[0],d[1])}}function yh(){this.size=0,this.__data__={hash:new Un,map:new(Vr||un),string:new Un}}function Ch(n){var s=Po(this,n).delete(n);return this.size-=s?1:0,s}function $h(n){return Po(this,n).get(n)}function Sh(n){return Po(this,n).has(n)}function Rh(n,s){var i=Po(this,n),d=i.size;return i.set(n,s),this.size+=i.size==d?0:1,this}dn.prototype.clear=yh,dn.prototype.delete=Ch,dn.prototype.get=$h,dn.prototype.has=Sh,dn.prototype.set=Rh;function Wn(n){var s=-1,i=n==null?0:n.length;for(this.__data__=new dn;++s<i;)this.add(n[s])}function _h(n){return this.__data__.set(n,m),this}function jh(n){return this.__data__.has(n)}Wn.prototype.add=Wn.prototype.push=_h,Wn.prototype.has=jh;function Gt(n){var s=this.__data__=new un(n);this.size=s.size}function Ah(){this.__data__=new un,this.size=0}function Th(n){var s=this.__data__,i=s.delete(n);return this.size=s.size,i}function Eh(n){return this.__data__.get(n)}function Ih(n){return this.__data__.has(n)}function Mh(n,s){var i=this.__data__;if(i instanceof un){var d=i.__data__;if(!Vr||d.length<o-1)return d.push([n,s]),this.size=++i.size,this;i=this.__data__=new dn(d)}return i.set(n,s),this.size=i.size,this}Gt.prototype.clear=Ah,Gt.prototype.delete=Th,Gt.prototype.get=Eh,Gt.prototype.has=Ih,Gt.prototype.set=Mh;function Cc(n,s){var i=fe(n),d=!i&&Jn(n),g=!i&&!d&&Ln(n),x=!i&&!d&&!g&&vr(n),C=i||d||g||x,R=C?ua(n.length,zf):[],E=R.length;for(var H in n)(s||Le.call(n,H))&&!(C&&(H=="length"||g&&(H=="offset"||H=="parent")||x&&(H=="buffer"||H=="byteLength"||H=="byteOffset")||mn(H,E)))&&R.push(H);return R}function $c(n){var s=n.length;return s?n[ja(0,s-1)]:r}function Lh(n,s){return es(vt(n),qn(s,0,n.length))}function Oh(n){return es(vt(n))}function wa(n,s,i){(i!==r&&!Kt(n[s],i)||i===r&&!(s in n))&&fn(n,s,i)}function Fr(n,s,i){var d=n[s];(!(Le.call(n,s)&&Kt(d,i))||i===r&&!(s in n))&&fn(n,s,i)}function Fo(n,s){for(var i=n.length;i--;)if(Kt(n[i][0],s))return i;return-1}function Bh(n,s,i,d){return Tn(n,function(g,x,C){s(d,g,i(g),C)}),d}function Sc(n,s){return n&&rn(s,ot(s),n)}function Dh(n,s){return n&&rn(s,yt(s),n)}function fn(n,s,i){s=="__proto__"&&Bo?Bo(n,s,{configurable:!0,enumerable:!0,value:i,writable:!0}):n[s]=i}function xa(n,s){for(var i=-1,d=s.length,g=B(d),x=n==null;++i<d;)g[i]=x?r:Xa(n,s[i]);return g}function qn(n,s,i){return n===n&&(i!==r&&(n=n<=i?n:i),s!==r&&(n=n>=s?n:s)),n}function Ft(n,s,i,d,g,x){var C,R=s&b,E=s&y,H=s&S;if(i&&(C=g?i(n,d,g,x):i(n)),C!==r)return C;if(!We(n))return n;var k=fe(n);if(k){if(C=S5(n),!R)return vt(n,C)}else{var F=dt(n),q=F==je||F==lt;if(Ln(n))return Yc(n,R);if(F==et||F==Ue||q&&!g){if(C=E||q?{}:hl(n),!R)return E?h5(n,Dh(C,n)):f5(n,Sc(C,n))}else{if(!Ne[F])return g?n:{};C=R5(n,F,R)}}x||(x=new Gt);var Q=x.get(n);if(Q)return Q;x.set(n,C),zl(n)?n.forEach(function(re){C.add(Ft(re,s,i,re,n,x))}):kl(n)&&n.forEach(function(re,Ce){C.set(Ce,Ft(re,s,i,Ce,n,x))});var ne=H?E?Na:Va:E?yt:ot,me=k?r:ne(n);return Nt(me||n,function(re,Ce){me&&(Ce=re,re=n[Ce]),Fr(C,Ce,Ft(re,s,i,Ce,n,x))}),C}function Vh(n){var s=ot(n);return function(i){return Rc(i,n,s)}}function Rc(n,s,i){var d=i.length;if(n==null)return!d;for(n=Ve(n);d--;){var g=i[d],x=s[g],C=n[g];if(C===r&&!(g in n)||!x(C))return!1}return!0}function _c(n,s,i){if(typeof n!="function")throw new Ht(u);return Yr(function(){n.apply(r,i)},s)}function zr(n,s,i,d){var g=-1,x=So,C=!0,R=n.length,E=[],H=s.length;if(!R)return E;i&&(s=ze(s,jt(i))),d?(x=oa,C=!1):s.length>=o&&(x=Br,C=!1,s=new Wn(s));e:for(;++g<R;){var k=n[g],F=i==null?k:i(k);if(k=d||k!==0?k:0,C&&F===F){for(var q=H;q--;)if(s[q]===F)continue e;E.push(k)}else x(s,F,d)||E.push(k)}return E}var Tn=Pc(nn),jc=Pc(ba,!0);function Nh(n,s){var i=!0;return Tn(n,function(d,g,x){return i=!!s(d,g,x),i}),i}function zo(n,s,i){for(var d=-1,g=n.length;++d<g;){var x=n[d],C=s(x);if(C!=null&&(R===r?C===C&&!Tt(C):i(C,R)))var R=C,E=x}return E}function Hh(n,s,i,d){var g=n.length;for(i=ge(i),i<0&&(i=-i>g?0:g+i),d=d===r||d>g?g:ge(d),d<0&&(d+=g),d=i>d?0:Wl(d);i<d;)n[i++]=s;return n}function Ac(n,s){var i=[];return Tn(n,function(d,g,x){s(d,g,x)&&i.push(d)}),i}function ct(n,s,i,d,g){var x=-1,C=n.length;for(i||(i=j5),g||(g=[]);++x<C;){var R=n[x];s>0&&i(R)?s>1?ct(R,s-1,i,d,g):_n(g,R):d||(g[g.length]=R)}return g}var va=el(),Tc=el(!0);function nn(n,s){return n&&va(n,s,ot)}function ba(n,s){return n&&Tc(n,s,ot)}function Uo(n,s){return Rn(s,function(i){return pn(n[i])})}function Gn(n,s){s=In(s,n);for(var i=0,d=s.length;n!=null&&i<d;)n=n[on(s[i++])];return i&&i==d?n:r}function Ec(n,s,i){var d=s(n);return fe(n)?d:_n(d,i(n))}function mt(n){return n==null?n===r?Or:Dt:zn&&zn in Ve(n)?y5(n):O5(n)}function ya(n,s){return n>s}function kh(n,s){return n!=null&&Le.call(n,s)}function Fh(n,s){return n!=null&&s in Ve(n)}function zh(n,s,i){return n>=ut(s,i)&&n<nt(s,i)}function Ca(n,s,i){for(var d=i?oa:So,g=n[0].length,x=n.length,C=x,R=B(x),E=1/0,H=[];C--;){var k=n[C];C&&s&&(k=ze(k,jt(s))),E=ut(k.length,E),R[C]=!i&&(s||g>=120&&k.length>=120)?new Wn(C&&k):r}k=n[0];var F=-1,q=R[0];e:for(;++F<g&&H.length<E;){var Q=k[F],ne=s?s(Q):Q;if(Q=i||Q!==0?Q:0,!(q?Br(q,ne):d(H,ne,i))){for(C=x;--C;){var me=R[C];if(!(me?Br(me,ne):d(n[C],ne,i)))continue e}q&&q.push(ne),H.push(Q)}}return H}function Uh(n,s,i,d){return nn(n,function(g,x,C){s(d,i(g),x,C)}),d}function Ur(n,s,i){s=In(s,n),n=wl(n,s);var d=n==null?n:n[on(Ut(s))];return d==null?r:_t(d,n,i)}function Ic(n){return Ge(n)&&mt(n)==Ue}function Wh(n){return Ge(n)&&mt(n)==ln}function qh(n){return Ge(n)&&mt(n)==Te}function Wr(n,s,i,d,g){return n===s?!0:n==null||s==null||!Ge(n)&&!Ge(s)?n!==n&&s!==s:Gh(n,s,i,d,Wr,g)}function Gh(n,s,i,d,g,x){var C=fe(n),R=fe(s),E=C?Pe:dt(n),H=R?Pe:dt(s);E=E==Ue?et:E,H=H==Ue?et:H;var k=E==et,F=H==et,q=E==H;if(q&&Ln(n)){if(!Ln(s))return!1;C=!0,k=!1}if(q&&!k)return x||(x=new Gt),C||vr(n)?ul(n,s,i,d,g,x):v5(n,s,E,i,d,g,x);if(!(i&$)){var Q=k&&Le.call(n,"__wrapped__"),ne=F&&Le.call(s,"__wrapped__");if(Q||ne){var me=Q?n.value():n,re=ne?s.value():s;return x||(x=new Gt),g(me,re,i,d,x)}}return q?(x||(x=new Gt),b5(n,s,i,d,g,x)):!1}function Kh(n){return Ge(n)&&dt(n)==De}function $a(n,s,i,d){var g=i.length,x=g,C=!d;if(n==null)return!x;for(n=Ve(n);g--;){var R=i[g];if(C&&R[2]?R[1]!==n[R[0]]:!(R[0]in n))return!1}for(;++g<x;){R=i[g];var E=R[0],H=n[E],k=R[1];if(C&&R[2]){if(H===r&&!(E in n))return!1}else{var F=new Gt;if(d)var q=d(H,k,E,n,s,F);if(!(q===r?Wr(k,H,$|_,d,F):q))return!1}}return!0}function Mc(n){if(!We(n)||T5(n))return!1;var s=pn(n)?Kf:D2;return s.test(Yn(n))}function Yh(n){return Ge(n)&&mt(n)==Sn}function Jh(n){return Ge(n)&&dt(n)==gt}function Qh(n){return Ge(n)&&as(n.length)&&!!ke[mt(n)]}function Lc(n){return typeof n=="function"?n:n==null?Ct:typeof n=="object"?fe(n)?Dc(n[0],n[1]):Bc(n):t1(n)}function Sa(n){if(!Kr(n))return Pf(n);var s=[];for(var i in Ve(n))Le.call(n,i)&&i!="constructor"&&s.push(i);return s}function Zh(n){if(!We(n))return L5(n);var s=Kr(n),i=[];for(var d in n)d=="constructor"&&(s||!Le.call(n,d))||i.push(d);return i}function Ra(n,s){return n<s}function Oc(n,s){var i=-1,d=bt(n)?B(n.length):[];return Tn(n,function(g,x,C){d[++i]=s(g,x,C)}),d}function Bc(n){var s=ka(n);return s.length==1&&s[0][2]?ml(s[0][0],s[0][1]):function(i){return i===n||$a(i,n,s)}}function Dc(n,s){return za(n)&&gl(s)?ml(on(n),s):function(i){var d=Xa(i,n);return d===r&&d===s?Pa(i,n):Wr(s,d,$|_)}}function Wo(n,s,i,d,g){n!==s&&va(s,function(x,C){if(g||(g=new Gt),We(x))Xh(n,s,C,i,Wo,d,g);else{var R=d?d(Wa(n,C),x,C+"",n,s,g):r;R===r&&(R=x),wa(n,C,R)}},yt)}function Xh(n,s,i,d,g,x,C){var R=Wa(n,i),E=Wa(s,i),H=C.get(E);if(H){wa(n,i,H);return}var k=x?x(R,E,i+"",n,s,C):r,F=k===r;if(F){var q=fe(E),Q=!q&&Ln(E),ne=!q&&!Q&&vr(E);k=E,q||Q||ne?fe(R)?k=R:Ke(R)?k=vt(R):Q?(F=!1,k=Yc(E,!0)):ne?(F=!1,k=Jc(E,!0)):k=[]:Jr(E)||Jn(E)?(k=R,Jn(R)?k=ql(R):(!We(R)||pn(R))&&(k=hl(E))):F=!1}F&&(C.set(E,k),g(k,E,d,x,C),C.delete(E)),wa(n,i,k)}function Vc(n,s){var i=n.length;if(i)return s+=s<0?i:0,mn(s,i)?n[s]:r}function Nc(n,s,i){s.length?s=ze(s,function(x){return fe(x)?function(C){return Gn(C,x.length===1?x[0]:x)}:x}):s=[Ct];var d=-1;s=ze(s,jt(te()));var g=Oc(n,function(x,C,R){var E=ze(s,function(H){return H(x)});return{criteria:E,index:++d,value:x}});return Rf(g,function(x,C){return d5(x,C,i)})}function Ph(n,s){return Hc(n,s,function(i,d){return Pa(n,d)})}function Hc(n,s,i){for(var d=-1,g=s.length,x={};++d<g;){var C=s[d],R=Gn(n,C);i(R,C)&&qr(x,In(C,n),R)}return x}function e5(n){return function(s){return Gn(s,n)}}function _a(n,s,i,d){var g=d?Sf:cr,x=-1,C=s.length,R=n;for(n===s&&(s=vt(s)),i&&(R=ze(n,jt(i)));++x<C;)for(var E=0,H=s[x],k=i?i(H):H;(E=g(R,k,E,d))>-1;)R!==n&&Oo.call(R,E,1),Oo.call(n,E,1);return n}function kc(n,s){for(var i=n?s.length:0,d=i-1;i--;){var g=s[i];if(i==d||g!==x){var x=g;mn(g)?Oo.call(n,g,1):Ea(n,g)}}return n}function ja(n,s){return n+Vo(bc()*(s-n+1))}function t5(n,s,i,d){for(var g=-1,x=nt(Do((s-n)/(i||1)),0),C=B(x);x--;)C[d?x:++g]=n,n+=i;return C}function Aa(n,s){var i="";if(!n||s<1||s>Ae)return i;do s%2&&(i+=n),s=Vo(s/2),s&&(n+=n);while(s);return i}function we(n,s){return qa(pl(n,s,Ct),n+"")}function n5(n){return $c(br(n))}function r5(n,s){var i=br(n);return es(i,qn(s,0,i.length))}function qr(n,s,i,d){if(!We(n))return n;s=In(s,n);for(var g=-1,x=s.length,C=x-1,R=n;R!=null&&++g<x;){var E=on(s[g]),H=i;if(E==="__proto__"||E==="constructor"||E==="prototype")return n;if(g!=C){var k=R[E];H=d?d(k,E,R):r,H===r&&(H=We(k)?k:mn(s[g+1])?[]:{})}Fr(R,E,H),R=R[E]}return n}var Fc=No?function(n,s){return No.set(n,s),n}:Ct,o5=Bo?function(n,s){return Bo(n,"toString",{configurable:!0,enumerable:!1,value:ti(s),writable:!0})}:Ct;function s5(n){return es(br(n))}function zt(n,s,i){var d=-1,g=n.length;s<0&&(s=-s>g?0:g+s),i=i>g?g:i,i<0&&(i+=g),g=s>i?0:i-s>>>0,s>>>=0;for(var x=B(g);++d<g;)x[d]=n[d+s];return x}function a5(n,s){var i;return Tn(n,function(d,g,x){return i=s(d,g,x),!i}),!!i}function qo(n,s,i){var d=0,g=n==null?d:n.length;if(typeof s=="number"&&s===s&&g<=be){for(;d<g;){var x=d+g>>>1,C=n[x];C!==null&&!Tt(C)&&(i?C<=s:C<s)?d=x+1:g=x}return g}return Ta(n,s,Ct,i)}function Ta(n,s,i,d){var g=0,x=n==null?0:n.length;if(x===0)return 0;s=i(s);for(var C=s!==s,R=s===null,E=Tt(s),H=s===r;g<x;){var k=Vo((g+x)/2),F=i(n[k]),q=F!==r,Q=F===null,ne=F===F,me=Tt(F);if(C)var re=d||ne;else H?re=ne&&(d||q):R?re=ne&&q&&(d||!Q):E?re=ne&&q&&!Q&&(d||!me):Q||me?re=!1:re=d?F<=s:F<s;re?g=k+1:x=k}return ut(x,rt)}function zc(n,s){for(var i=-1,d=n.length,g=0,x=[];++i<d;){var C=n[i],R=s?s(C):C;if(!i||!Kt(R,E)){var E=R;x[g++]=C===0?0:C}}return x}function Uc(n){return typeof n=="number"?n:Tt(n)?He:+n}function At(n){if(typeof n=="string")return n;if(fe(n))return ze(n,At)+"";if(Tt(n))return yc?yc.call(n):"";var s=n+"";return s=="0"&&1/n==-le?"-0":s}function En(n,s,i){var d=-1,g=So,x=n.length,C=!0,R=[],E=R;if(i)C=!1,g=oa;else if(x>=o){var H=s?null:w5(n);if(H)return _o(H);C=!1,g=Br,E=new Wn}else E=s?[]:R;e:for(;++d<x;){var k=n[d],F=s?s(k):k;if(k=i||k!==0?k:0,C&&F===F){for(var q=E.length;q--;)if(E[q]===F)continue e;s&&E.push(F),R.push(k)}else g(E,F,i)||(E!==R&&E.push(F),R.push(k))}return R}function Ea(n,s){return s=In(s,n),n=wl(n,s),n==null||delete n[on(Ut(s))]}function Wc(n,s,i,d){return qr(n,s,i(Gn(n,s)),d)}function Go(n,s,i,d){for(var g=n.length,x=d?g:-1;(d?x--:++x<g)&&s(n[x],x,n););return i?zt(n,d?0:x,d?x+1:g):zt(n,d?x+1:0,d?g:x)}function qc(n,s){var i=n;return i instanceof Se&&(i=i.value()),sa(s,function(d,g){return g.func.apply(g.thisArg,_n([d],g.args))},i)}function Ia(n,s,i){var d=n.length;if(d<2)return d?En(n[0]):[];for(var g=-1,x=B(d);++g<d;)for(var C=n[g],R=-1;++R<d;)R!=g&&(x[g]=zr(x[g]||C,n[R],s,i));return En(ct(x,1),s,i)}function Gc(n,s,i){for(var d=-1,g=n.length,x=s.length,C={};++d<g;){var R=d<x?s[d]:r;i(C,n[d],R)}return C}function Ma(n){return Ke(n)?n:[]}function La(n){return typeof n=="function"?n:Ct}function In(n,s){return fe(n)?n:za(n,s)?[n]:yl(Me(n))}var i5=we;function Mn(n,s,i){var d=n.length;return i=i===r?d:i,!s&&i>=d?n:zt(n,s,i)}var Kc=Yf||function(n){return it.clearTimeout(n)};function Yc(n,s){if(s)return n.slice();var i=n.length,d=mc?mc(i):new n.constructor(i);return n.copy(d),d}function Oa(n){var s=new n.constructor(n.byteLength);return new Mo(s).set(new Mo(n)),s}function c5(n,s){var i=s?Oa(n.buffer):n.buffer;return new n.constructor(i,n.byteOffset,n.byteLength)}function l5(n){var s=new n.constructor(n.source,I0.exec(n));return s.lastIndex=n.lastIndex,s}function u5(n){return kr?Ve(kr.call(n)):{}}function Jc(n,s){var i=s?Oa(n.buffer):n.buffer;return new n.constructor(i,n.byteOffset,n.length)}function Qc(n,s){if(n!==s){var i=n!==r,d=n===null,g=n===n,x=Tt(n),C=s!==r,R=s===null,E=s===s,H=Tt(s);if(!R&&!H&&!x&&n>s||x&&C&&E&&!R&&!H||d&&C&&E||!i&&E||!g)return 1;if(!d&&!x&&!H&&n<s||H&&i&&g&&!d&&!x||R&&i&&g||!C&&g||!E)return-1}return 0}function d5(n,s,i){for(var d=-1,g=n.criteria,x=s.criteria,C=g.length,R=i.length;++d<C;){var E=Qc(g[d],x[d]);if(E){if(d>=R)return E;var H=i[d];return E*(H=="desc"?-1:1)}}return n.index-s.index}function Zc(n,s,i,d){for(var g=-1,x=n.length,C=i.length,R=-1,E=s.length,H=nt(x-C,0),k=B(E+H),F=!d;++R<E;)k[R]=s[R];for(;++g<C;)(F||g<x)&&(k[i[g]]=n[g]);for(;H--;)k[R++]=n[g++];return k}function Xc(n,s,i,d){for(var g=-1,x=n.length,C=-1,R=i.length,E=-1,H=s.length,k=nt(x-R,0),F=B(k+H),q=!d;++g<k;)F[g]=n[g];for(var Q=g;++E<H;)F[Q+E]=s[E];for(;++C<R;)(q||g<x)&&(F[Q+i[C]]=n[g++]);return F}function vt(n,s){var i=-1,d=n.length;for(s||(s=B(d));++i<d;)s[i]=n[i];return s}function rn(n,s,i,d){var g=!i;i||(i={});for(var x=-1,C=s.length;++x<C;){var R=s[x],E=d?d(i[R],n[R],R,i,n):r;E===r&&(E=n[R]),g?fn(i,R,E):Fr(i,R,E)}return i}function f5(n,s){return rn(n,Fa(n),s)}function h5(n,s){return rn(n,dl(n),s)}function Ko(n,s){return function(i,d){var g=fe(i)?xf:Bh,x=s?s():{};return g(i,n,te(d,2),x)}}function pr(n){return we(function(s,i){var d=-1,g=i.length,x=g>1?i[g-1]:r,C=g>2?i[2]:r;for(x=n.length>3&&typeof x=="function"?(g--,x):r,C&&pt(i[0],i[1],C)&&(x=g<3?r:x,g=1),s=Ve(s);++d<g;){var R=i[d];R&&n(s,R,d,x)}return s})}function Pc(n,s){return function(i,d){if(i==null)return i;if(!bt(i))return n(i,d);for(var g=i.length,x=s?g:-1,C=Ve(i);(s?x--:++x<g)&&d(C[x],x,C)!==!1;);return i}}function el(n){return function(s,i,d){for(var g=-1,x=Ve(s),C=d(s),R=C.length;R--;){var E=C[n?R:++g];if(i(x[E],E,x)===!1)break}return s}}function g5(n,s,i){var d=s&j,g=Gr(n);function x(){var C=this&&this!==it&&this instanceof x?g:n;return C.apply(d?i:this,arguments)}return x}function tl(n){return function(s){s=Me(s);var i=lr(s)?qt(s):r,d=i?i[0]:s.charAt(0),g=i?Mn(i,1).join(""):s.slice(1);return d[n]()+g}}function wr(n){return function(s){return sa(Pl(Xl(s).replace(rf,"")),n,"")}}function Gr(n){return function(){var s=arguments;switch(s.length){case 0:return new n;case 1:return new n(s[0]);case 2:return new n(s[0],s[1]);case 3:return new n(s[0],s[1],s[2]);case 4:return new n(s[0],s[1],s[2],s[3]);case 5:return new n(s[0],s[1],s[2],s[3],s[4]);case 6:return new n(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new n(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var i=mr(n.prototype),d=n.apply(i,s);return We(d)?d:i}}function m5(n,s,i){var d=Gr(n);function g(){for(var x=arguments.length,C=B(x),R=x,E=xr(g);R--;)C[R]=arguments[R];var H=x<3&&C[0]!==E&&C[x-1]!==E?[]:jn(C,E);if(x-=H.length,x<i)return al(n,s,Yo,g.placeholder,r,C,H,r,r,i-x);var k=this&&this!==it&&this instanceof g?d:n;return _t(k,this,C)}return g}function nl(n){return function(s,i,d){var g=Ve(s);if(!bt(s)){var x=te(i,3);s=ot(s),i=function(R){return x(g[R],R,g)}}var C=n(s,i,d);return C>-1?g[x?s[C]:C]:r}}function rl(n){return gn(function(s){var i=s.length,d=i,g=kt.prototype.thru;for(n&&s.reverse();d--;){var x=s[d];if(typeof x!="function")throw new Ht(u);if(g&&!C&&Xo(x)=="wrapper")var C=new kt([],!0)}for(d=C?d:i;++d<i;){x=s[d];var R=Xo(x),E=R=="wrapper"?Ha(x):r;E&&Ua(E[0])&&E[1]==(U|O|z|J)&&!E[4].length&&E[9]==1?C=C[Xo(E[0])].apply(C,E[3]):C=x.length==1&&Ua(x)?C[R]():C.thru(x)}return function(){var H=arguments,k=H[0];if(C&&H.length==1&&fe(k))return C.plant(k).value();for(var F=0,q=i?s[F].apply(this,H):k;++F<i;)q=s[F].call(this,q);return q}})}function Yo(n,s,i,d,g,x,C,R,E,H){var k=s&U,F=s&j,q=s&L,Q=s&(O|N),ne=s&Z,me=q?r:Gr(n);function re(){for(var Ce=arguments.length,_e=B(Ce),Et=Ce;Et--;)_e[Et]=arguments[Et];if(Q)var wt=xr(re),It=jf(_e,wt);if(d&&(_e=Zc(_e,d,g,Q)),x&&(_e=Xc(_e,x,C,Q)),Ce-=It,Q&&Ce<H){var Ye=jn(_e,wt);return al(n,s,Yo,re.placeholder,i,_e,Ye,R,E,H-Ce)}var Yt=F?i:this,xn=q?Yt[n]:n;return Ce=_e.length,R?_e=B5(_e,R):ne&&Ce>1&&_e.reverse(),k&&E<Ce&&(_e.length=E),this&&this!==it&&this instanceof re&&(xn=me||Gr(xn)),xn.apply(Yt,_e)}return re}function ol(n,s){return function(i,d){return Uh(i,n,s(d),{})}}function Jo(n,s){return function(i,d){var g;if(i===r&&d===r)return s;if(i!==r&&(g=i),d!==r){if(g===r)return d;typeof i=="string"||typeof d=="string"?(i=At(i),d=At(d)):(i=Uc(i),d=Uc(d)),g=n(i,d)}return g}}function Ba(n){return gn(function(s){return s=ze(s,jt(te())),we(function(i){var d=this;return n(s,function(g){return _t(g,d,i)})})})}function Qo(n,s){s=s===r?" ":At(s);var i=s.length;if(i<2)return i?Aa(s,n):s;var d=Aa(s,Do(n/ur(s)));return lr(s)?Mn(qt(d),0,n).join(""):d.slice(0,n)}function p5(n,s,i,d){var g=s&j,x=Gr(n);function C(){for(var R=-1,E=arguments.length,H=-1,k=d.length,F=B(k+E),q=this&&this!==it&&this instanceof C?x:n;++H<k;)F[H]=d[H];for(;E--;)F[H++]=arguments[++R];return _t(q,g?i:this,F)}return C}function sl(n){return function(s,i,d){return d&&typeof d!="number"&&pt(s,i,d)&&(i=d=r),s=wn(s),i===r?(i=s,s=0):i=wn(i),d=d===r?s<i?1:-1:wn(d),t5(s,i,d,n)}}function Zo(n){return function(s,i){return typeof s=="string"&&typeof i=="string"||(s=Wt(s),i=Wt(i)),n(s,i)}}function al(n,s,i,d,g,x,C,R,E,H){var k=s&O,F=k?C:r,q=k?r:C,Q=k?x:r,ne=k?r:x;s|=k?z:W,s&=~(k?W:z),s&T||(s&=-4);var me=[n,s,g,Q,F,ne,q,R,E,H],re=i.apply(r,me);return Ua(n)&&xl(re,me),re.placeholder=d,vl(re,n,s)}function Da(n){var s=tt[n];return function(i,d){if(i=Wt(i),d=d==null?0:ut(ge(d),292),d&&vc(i)){var g=(Me(i)+"e").split("e"),x=s(g[0]+"e"+(+g[1]+d));return g=(Me(x)+"e").split("e"),+(g[0]+"e"+(+g[1]-d))}return s(i)}}var w5=hr&&1/_o(new hr([,-0]))[1]==le?function(n){return new hr(n)}:oi;function il(n){return function(s){var i=dt(s);return i==De?fa(s):i==gt?Of(s):_f(s,n(s))}}function hn(n,s,i,d,g,x,C,R){var E=s&L;if(!E&&typeof n!="function")throw new Ht(u);var H=d?d.length:0;if(H||(s&=-97,d=g=r),C=C===r?C:nt(ge(C),0),R=R===r?R:ge(R),H-=g?g.length:0,s&W){var k=d,F=g;d=g=r}var q=E?r:Ha(n),Q=[n,s,i,d,g,k,F,x,C,R];if(q&&M5(Q,q),n=Q[0],s=Q[1],i=Q[2],d=Q[3],g=Q[4],R=Q[9]=Q[9]===r?E?0:n.length:nt(Q[9]-H,0),!R&&s&(O|N)&&(s&=-25),!s||s==j)var ne=g5(n,s,i);else s==O||s==N?ne=m5(n,s,R):(s==z||s==(j|z))&&!g.length?ne=p5(n,s,i,d):ne=Yo.apply(r,Q);var me=q?Fc:xl;return vl(me(ne,Q),n,s)}function cl(n,s,i,d){return n===r||Kt(n,fr[i])&&!Le.call(d,i)?s:n}function ll(n,s,i,d,g,x){return We(n)&&We(s)&&(x.set(s,n),Wo(n,s,r,ll,x),x.delete(s)),n}function x5(n){return Jr(n)?r:n}function ul(n,s,i,d,g,x){var C=i&$,R=n.length,E=s.length;if(R!=E&&!(C&&E>R))return!1;var H=x.get(n),k=x.get(s);if(H&&k)return H==s&&k==n;var F=-1,q=!0,Q=i&_?new Wn:r;for(x.set(n,s),x.set(s,n);++F<R;){var ne=n[F],me=s[F];if(d)var re=C?d(me,ne,F,s,n,x):d(ne,me,F,n,s,x);if(re!==r){if(re)continue;q=!1;break}if(Q){if(!aa(s,function(Ce,_e){if(!Br(Q,_e)&&(ne===Ce||g(ne,Ce,i,d,x)))return Q.push(_e)})){q=!1;break}}else if(!(ne===me||g(ne,me,i,d,x))){q=!1;break}}return x.delete(n),x.delete(s),q}function v5(n,s,i,d,g,x,C){switch(i){case Ze:if(n.byteLength!=s.byteLength||n.byteOffset!=s.byteOffset)return!1;n=n.buffer,s=s.buffer;case ln:return!(n.byteLength!=s.byteLength||!x(new Mo(n),new Mo(s)));case ye:case Te:case Ie:return Kt(+n,+s);case xe:return n.name==s.name&&n.message==s.message;case Sn:case tn:return n==s+"";case De:var R=fa;case gt:var E=d&$;if(R||(R=_o),n.size!=s.size&&!E)return!1;var H=C.get(n);if(H)return H==s;d|=_,C.set(n,s);var k=ul(R(n),R(s),d,g,x,C);return C.delete(n),k;case ar:if(kr)return kr.call(n)==kr.call(s)}return!1}function b5(n,s,i,d,g,x){var C=i&$,R=Va(n),E=R.length,H=Va(s),k=H.length;if(E!=k&&!C)return!1;for(var F=E;F--;){var q=R[F];if(!(C?q in s:Le.call(s,q)))return!1}var Q=x.get(n),ne=x.get(s);if(Q&&ne)return Q==s&&ne==n;var me=!0;x.set(n,s),x.set(s,n);for(var re=C;++F<E;){q=R[F];var Ce=n[q],_e=s[q];if(d)var Et=C?d(_e,Ce,q,s,n,x):d(Ce,_e,q,n,s,x);if(!(Et===r?Ce===_e||g(Ce,_e,i,d,x):Et)){me=!1;break}re||(re=q=="constructor")}if(me&&!re){var wt=n.constructor,It=s.constructor;wt!=It&&"constructor"in n&&"constructor"in s&&!(typeof wt=="function"&&wt instanceof wt&&typeof It=="function"&&It instanceof It)&&(me=!1)}return x.delete(n),x.delete(s),me}function gn(n){return qa(pl(n,r,Rl),n+"")}function Va(n){return Ec(n,ot,Fa)}function Na(n){return Ec(n,yt,dl)}var Ha=No?function(n){return No.get(n)}:oi;function Xo(n){for(var s=n.name+"",i=gr[s],d=Le.call(gr,s)?i.length:0;d--;){var g=i[d],x=g.func;if(x==null||x==n)return g.name}return s}function xr(n){var s=Le.call(p,"placeholder")?p:n;return s.placeholder}function te(){var n=p.iteratee||ni;return n=n===ni?Lc:n,arguments.length?n(arguments[0],arguments[1]):n}function Po(n,s){var i=n.__data__;return A5(s)?i[typeof s=="string"?"string":"hash"]:i.map}function ka(n){for(var s=ot(n),i=s.length;i--;){var d=s[i],g=n[d];s[i]=[d,g,gl(g)]}return s}function Kn(n,s){var i=If(n,s);return Mc(i)?i:r}function y5(n){var s=Le.call(n,zn),i=n[zn];try{n[zn]=r;var d=!0}catch{}var g=Eo.call(n);return d&&(s?n[zn]=i:delete n[zn]),g}var Fa=ga?function(n){return n==null?[]:(n=Ve(n),Rn(ga(n),function(s){return wc.call(n,s)}))}:si,dl=ga?function(n){for(var s=[];n;)_n(s,Fa(n)),n=Lo(n);return s}:si,dt=mt;(ma&&dt(new ma(new ArrayBuffer(1)))!=Ze||Vr&&dt(new Vr)!=De||pa&&dt(pa.resolve())!=Lr||hr&&dt(new hr)!=gt||Nr&&dt(new Nr)!=kn)&&(dt=function(n){var s=mt(n),i=s==et?n.constructor:r,d=i?Yn(i):"";if(d)switch(d){case rh:return Ze;case oh:return De;case sh:return Lr;case ah:return gt;case ih:return kn}return s});function C5(n,s,i){for(var d=-1,g=i.length;++d<g;){var x=i[d],C=x.size;switch(x.type){case"drop":n+=C;break;case"dropRight":s-=C;break;case"take":s=ut(s,n+C);break;case"takeRight":n=nt(n,s-C);break}}return{start:n,end:s}}function $5(n){var s=n.match(A2);return s?s[1].split(T2):[]}function fl(n,s,i){s=In(s,n);for(var d=-1,g=s.length,x=!1;++d<g;){var C=on(s[d]);if(!(x=n!=null&&i(n,C)))break;n=n[C]}return x||++d!=g?x:(g=n==null?0:n.length,!!g&&as(g)&&mn(C,g)&&(fe(n)||Jn(n)))}function S5(n){var s=n.length,i=new n.constructor(s);return s&&typeof n[0]=="string"&&Le.call(n,"index")&&(i.index=n.index,i.input=n.input),i}function hl(n){return typeof n.constructor=="function"&&!Kr(n)?mr(Lo(n)):{}}function R5(n,s,i){var d=n.constructor;switch(s){case ln:return Oa(n);case ye:case Te:return new d(+n);case Ze:return c5(n,i);case ks:case Fs:case zs:case Us:case Ws:case qs:case Gs:case Ks:case Ys:return Jc(n,i);case De:return new d;case Ie:case tn:return new d(n);case Sn:return l5(n);case gt:return new d;case ar:return u5(n)}}function _5(n,s){var i=s.length;if(!i)return n;var d=i-1;return s[d]=(i>1?"& ":"")+s[d],s=s.join(i>2?", ":" "),n.replace(j2,`{
/* [wrapped with `+s+`] */
`)}function j5(n){return fe(n)||Jn(n)||!!(xc&&n&&n[xc])}function mn(n,s){var i=typeof n;return s=s??Ae,!!s&&(i=="number"||i!="symbol"&&N2.test(n))&&n>-1&&n%1==0&&n<s}function pt(n,s,i){if(!We(i))return!1;var d=typeof s;return(d=="number"?bt(i)&&mn(s,i.length):d=="string"&&s in i)?Kt(i[s],n):!1}function za(n,s){if(fe(n))return!1;var i=typeof n;return i=="number"||i=="symbol"||i=="boolean"||n==null||Tt(n)?!0:$2.test(n)||!C2.test(n)||s!=null&&n in Ve(s)}function A5(n){var s=typeof n;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?n!=="__proto__":n===null}function Ua(n){var s=Xo(n),i=p[s];if(typeof i!="function"||!(s in Se.prototype))return!1;if(n===i)return!0;var d=Ha(i);return!!d&&n===d[0]}function T5(n){return!!gc&&gc in n}var E5=Ao?pn:ai;function Kr(n){var s=n&&n.constructor,i=typeof s=="function"&&s.prototype||fr;return n===i}function gl(n){return n===n&&!We(n)}function ml(n,s){return function(i){return i==null?!1:i[n]===s&&(s!==r||n in Ve(i))}}function I5(n){var s=os(n,function(d){return i.size===w&&i.clear(),d}),i=s.cache;return s}function M5(n,s){var i=n[1],d=s[1],g=i|d,x=g<(j|L|U),C=d==U&&i==O||d==U&&i==J&&n[7].length<=s[8]||d==(U|J)&&s[7].length<=s[8]&&i==O;if(!(x||C))return n;d&j&&(n[2]=s[2],g|=i&j?0:T);var R=s[3];if(R){var E=n[3];n[3]=E?Zc(E,R,s[4]):R,n[4]=E?jn(n[3],v):s[4]}return R=s[5],R&&(E=n[5],n[5]=E?Xc(E,R,s[6]):R,n[6]=E?jn(n[5],v):s[6]),R=s[7],R&&(n[7]=R),d&U&&(n[8]=n[8]==null?s[8]:ut(n[8],s[8])),n[9]==null&&(n[9]=s[9]),n[0]=s[0],n[1]=g,n}function L5(n){var s=[];if(n!=null)for(var i in Ve(n))s.push(i);return s}function O5(n){return Eo.call(n)}function pl(n,s,i){return s=nt(s===r?n.length-1:s,0),function(){for(var d=arguments,g=-1,x=nt(d.length-s,0),C=B(x);++g<x;)C[g]=d[s+g];g=-1;for(var R=B(s+1);++g<s;)R[g]=d[g];return R[s]=i(C),_t(n,this,R)}}function wl(n,s){return s.length<2?n:Gn(n,zt(s,0,-1))}function B5(n,s){for(var i=n.length,d=ut(s.length,i),g=vt(n);d--;){var x=s[d];n[d]=mn(x,i)?g[x]:r}return n}function Wa(n,s){if(!(s==="constructor"&&typeof n[s]=="function")&&s!="__proto__")return n[s]}var xl=bl(Fc),Yr=Qf||function(n,s){return it.setTimeout(n,s)},qa=bl(o5);function vl(n,s,i){var d=s+"";return qa(n,_5(d,D5($5(d),i)))}function bl(n){var s=0,i=0;return function(){var d=eh(),g=P-(d-i);if(i=d,g>0){if(++s>=oe)return arguments[0]}else s=0;return n.apply(r,arguments)}}function es(n,s){var i=-1,d=n.length,g=d-1;for(s=s===r?d:s;++i<s;){var x=ja(i,g),C=n[x];n[x]=n[i],n[i]=C}return n.length=s,n}var yl=I5(function(n){var s=[];return n.charCodeAt(0)===46&&s.push(""),n.replace(S2,function(i,d,g,x){s.push(g?x.replace(M2,"$1"):d||i)}),s});function on(n){if(typeof n=="string"||Tt(n))return n;var s=n+"";return s=="0"&&1/n==-le?"-0":s}function Yn(n){if(n!=null){try{return To.call(n)}catch{}try{return n+""}catch{}}return""}function D5(n,s){return Nt(qe,function(i){var d="_."+i[0];s&i[1]&&!So(n,d)&&n.push(d)}),n.sort()}function Cl(n){if(n instanceof Se)return n.clone();var s=new kt(n.__wrapped__,n.__chain__);return s.__actions__=vt(n.__actions__),s.__index__=n.__index__,s.__values__=n.__values__,s}function V5(n,s,i){(i?pt(n,s,i):s===r)?s=1:s=nt(ge(s),0);var d=n==null?0:n.length;if(!d||s<1)return[];for(var g=0,x=0,C=B(Do(d/s));g<d;)C[x++]=zt(n,g,g+=s);return C}function N5(n){for(var s=-1,i=n==null?0:n.length,d=0,g=[];++s<i;){var x=n[s];x&&(g[d++]=x)}return g}function H5(){var n=arguments.length;if(!n)return[];for(var s=B(n-1),i=arguments[0],d=n;d--;)s[d-1]=arguments[d];return _n(fe(i)?vt(i):[i],ct(s,1))}var k5=we(function(n,s){return Ke(n)?zr(n,ct(s,1,Ke,!0)):[]}),F5=we(function(n,s){var i=Ut(s);return Ke(i)&&(i=r),Ke(n)?zr(n,ct(s,1,Ke,!0),te(i,2)):[]}),z5=we(function(n,s){var i=Ut(s);return Ke(i)&&(i=r),Ke(n)?zr(n,ct(s,1,Ke,!0),r,i):[]});function U5(n,s,i){var d=n==null?0:n.length;return d?(s=i||s===r?1:ge(s),zt(n,s<0?0:s,d)):[]}function W5(n,s,i){var d=n==null?0:n.length;return d?(s=i||s===r?1:ge(s),s=d-s,zt(n,0,s<0?0:s)):[]}function q5(n,s){return n&&n.length?Go(n,te(s,3),!0,!0):[]}function G5(n,s){return n&&n.length?Go(n,te(s,3),!0):[]}function K5(n,s,i,d){var g=n==null?0:n.length;return g?(i&&typeof i!="number"&&pt(n,s,i)&&(i=0,d=g),Hh(n,s,i,d)):[]}function $l(n,s,i){var d=n==null?0:n.length;if(!d)return-1;var g=i==null?0:ge(i);return g<0&&(g=nt(d+g,0)),Ro(n,te(s,3),g)}function Sl(n,s,i){var d=n==null?0:n.length;if(!d)return-1;var g=d-1;return i!==r&&(g=ge(i),g=i<0?nt(d+g,0):ut(g,d-1)),Ro(n,te(s,3),g,!0)}function Rl(n){var s=n==null?0:n.length;return s?ct(n,1):[]}function Y5(n){var s=n==null?0:n.length;return s?ct(n,le):[]}function J5(n,s){var i=n==null?0:n.length;return i?(s=s===r?1:ge(s),ct(n,s)):[]}function Q5(n){for(var s=-1,i=n==null?0:n.length,d={};++s<i;){var g=n[s];d[g[0]]=g[1]}return d}function _l(n){return n&&n.length?n[0]:r}function Z5(n,s,i){var d=n==null?0:n.length;if(!d)return-1;var g=i==null?0:ge(i);return g<0&&(g=nt(d+g,0)),cr(n,s,g)}function X5(n){var s=n==null?0:n.length;return s?zt(n,0,-1):[]}var P5=we(function(n){var s=ze(n,Ma);return s.length&&s[0]===n[0]?Ca(s):[]}),eg=we(function(n){var s=Ut(n),i=ze(n,Ma);return s===Ut(i)?s=r:i.pop(),i.length&&i[0]===n[0]?Ca(i,te(s,2)):[]}),tg=we(function(n){var s=Ut(n),i=ze(n,Ma);return s=typeof s=="function"?s:r,s&&i.pop(),i.length&&i[0]===n[0]?Ca(i,r,s):[]});function ng(n,s){return n==null?"":Xf.call(n,s)}function Ut(n){var s=n==null?0:n.length;return s?n[s-1]:r}function rg(n,s,i){var d=n==null?0:n.length;if(!d)return-1;var g=d;return i!==r&&(g=ge(i),g=g<0?nt(d+g,0):ut(g,d-1)),s===s?Df(n,s,g):Ro(n,ac,g,!0)}function og(n,s){return n&&n.length?Vc(n,ge(s)):r}var sg=we(jl);function jl(n,s){return n&&n.length&&s&&s.length?_a(n,s):n}function ag(n,s,i){return n&&n.length&&s&&s.length?_a(n,s,te(i,2)):n}function ig(n,s,i){return n&&n.length&&s&&s.length?_a(n,s,r,i):n}var cg=gn(function(n,s){var i=n==null?0:n.length,d=xa(n,s);return kc(n,ze(s,function(g){return mn(g,i)?+g:g}).sort(Qc)),d});function lg(n,s){var i=[];if(!(n&&n.length))return i;var d=-1,g=[],x=n.length;for(s=te(s,3);++d<x;){var C=n[d];s(C,d,n)&&(i.push(C),g.push(d))}return kc(n,g),i}function Ga(n){return n==null?n:nh.call(n)}function ug(n,s,i){var d=n==null?0:n.length;return d?(i&&typeof i!="number"&&pt(n,s,i)?(s=0,i=d):(s=s==null?0:ge(s),i=i===r?d:ge(i)),zt(n,s,i)):[]}function dg(n,s){return qo(n,s)}function fg(n,s,i){return Ta(n,s,te(i,2))}function hg(n,s){var i=n==null?0:n.length;if(i){var d=qo(n,s);if(d<i&&Kt(n[d],s))return d}return-1}function gg(n,s){return qo(n,s,!0)}function mg(n,s,i){return Ta(n,s,te(i,2),!0)}function pg(n,s){var i=n==null?0:n.length;if(i){var d=qo(n,s,!0)-1;if(Kt(n[d],s))return d}return-1}function wg(n){return n&&n.length?zc(n):[]}function xg(n,s){return n&&n.length?zc(n,te(s,2)):[]}function vg(n){var s=n==null?0:n.length;return s?zt(n,1,s):[]}function bg(n,s,i){return n&&n.length?(s=i||s===r?1:ge(s),zt(n,0,s<0?0:s)):[]}function yg(n,s,i){var d=n==null?0:n.length;return d?(s=i||s===r?1:ge(s),s=d-s,zt(n,s<0?0:s,d)):[]}function Cg(n,s){return n&&n.length?Go(n,te(s,3),!1,!0):[]}function $g(n,s){return n&&n.length?Go(n,te(s,3)):[]}var Sg=we(function(n){return En(ct(n,1,Ke,!0))}),Rg=we(function(n){var s=Ut(n);return Ke(s)&&(s=r),En(ct(n,1,Ke,!0),te(s,2))}),_g=we(function(n){var s=Ut(n);return s=typeof s=="function"?s:r,En(ct(n,1,Ke,!0),r,s)});function jg(n){return n&&n.length?En(n):[]}function Ag(n,s){return n&&n.length?En(n,te(s,2)):[]}function Tg(n,s){return s=typeof s=="function"?s:r,n&&n.length?En(n,r,s):[]}function Ka(n){if(!(n&&n.length))return[];var s=0;return n=Rn(n,function(i){if(Ke(i))return s=nt(i.length,s),!0}),ua(s,function(i){return ze(n,ia(i))})}function Al(n,s){if(!(n&&n.length))return[];var i=Ka(n);return s==null?i:ze(i,function(d){return _t(s,r,d)})}var Eg=we(function(n,s){return Ke(n)?zr(n,s):[]}),Ig=we(function(n){return Ia(Rn(n,Ke))}),Mg=we(function(n){var s=Ut(n);return Ke(s)&&(s=r),Ia(Rn(n,Ke),te(s,2))}),Lg=we(function(n){var s=Ut(n);return s=typeof s=="function"?s:r,Ia(Rn(n,Ke),r,s)}),Og=we(Ka);function Bg(n,s){return Gc(n||[],s||[],Fr)}function Dg(n,s){return Gc(n||[],s||[],qr)}var Vg=we(function(n){var s=n.length,i=s>1?n[s-1]:r;return i=typeof i=="function"?(n.pop(),i):r,Al(n,i)});function Tl(n){var s=p(n);return s.__chain__=!0,s}function Ng(n,s){return s(n),n}function ts(n,s){return s(n)}var Hg=gn(function(n){var s=n.length,i=s?n[0]:0,d=this.__wrapped__,g=function(x){return xa(x,n)};return s>1||this.__actions__.length||!(d instanceof Se)||!mn(i)?this.thru(g):(d=d.slice(i,+i+(s?1:0)),d.__actions__.push({func:ts,args:[g],thisArg:r}),new kt(d,this.__chain__).thru(function(x){return s&&!x.length&&x.push(r),x}))});function kg(){return Tl(this)}function Fg(){return new kt(this.value(),this.__chain__)}function zg(){this.__values__===r&&(this.__values__=Ul(this.value()));var n=this.__index__>=this.__values__.length,s=n?r:this.__values__[this.__index__++];return{done:n,value:s}}function Ug(){return this}function Wg(n){for(var s,i=this;i instanceof ko;){var d=Cl(i);d.__index__=0,d.__values__=r,s?g.__wrapped__=d:s=d;var g=d;i=i.__wrapped__}return g.__wrapped__=n,s}function qg(){var n=this.__wrapped__;if(n instanceof Se){var s=n;return this.__actions__.length&&(s=new Se(this)),s=s.reverse(),s.__actions__.push({func:ts,args:[Ga],thisArg:r}),new kt(s,this.__chain__)}return this.thru(Ga)}function Gg(){return qc(this.__wrapped__,this.__actions__)}var Kg=Ko(function(n,s,i){Le.call(n,i)?++n[i]:fn(n,i,1)});function Yg(n,s,i){var d=fe(n)?oc:Nh;return i&&pt(n,s,i)&&(s=r),d(n,te(s,3))}function Jg(n,s){var i=fe(n)?Rn:Ac;return i(n,te(s,3))}var Qg=nl($l),Zg=nl(Sl);function Xg(n,s){return ct(ns(n,s),1)}function Pg(n,s){return ct(ns(n,s),le)}function e3(n,s,i){return i=i===r?1:ge(i),ct(ns(n,s),i)}function El(n,s){var i=fe(n)?Nt:Tn;return i(n,te(s,3))}function Il(n,s){var i=fe(n)?vf:jc;return i(n,te(s,3))}var t3=Ko(function(n,s,i){Le.call(n,i)?n[i].push(s):fn(n,i,[s])});function n3(n,s,i,d){n=bt(n)?n:br(n),i=i&&!d?ge(i):0;var g=n.length;return i<0&&(i=nt(g+i,0)),is(n)?i<=g&&n.indexOf(s,i)>-1:!!g&&cr(n,s,i)>-1}var r3=we(function(n,s,i){var d=-1,g=typeof s=="function",x=bt(n)?B(n.length):[];return Tn(n,function(C){x[++d]=g?_t(s,C,i):Ur(C,s,i)}),x}),o3=Ko(function(n,s,i){fn(n,i,s)});function ns(n,s){var i=fe(n)?ze:Oc;return i(n,te(s,3))}function s3(n,s,i,d){return n==null?[]:(fe(s)||(s=s==null?[]:[s]),i=d?r:i,fe(i)||(i=i==null?[]:[i]),Nc(n,s,i))}var a3=Ko(function(n,s,i){n[i?0:1].push(s)},function(){return[[],[]]});function i3(n,s,i){var d=fe(n)?sa:cc,g=arguments.length<3;return d(n,te(s,4),i,g,Tn)}function c3(n,s,i){var d=fe(n)?bf:cc,g=arguments.length<3;return d(n,te(s,4),i,g,jc)}function l3(n,s){var i=fe(n)?Rn:Ac;return i(n,ss(te(s,3)))}function u3(n){var s=fe(n)?$c:n5;return s(n)}function d3(n,s,i){(i?pt(n,s,i):s===r)?s=1:s=ge(s);var d=fe(n)?Lh:r5;return d(n,s)}function f3(n){var s=fe(n)?Oh:s5;return s(n)}function h3(n){if(n==null)return 0;if(bt(n))return is(n)?ur(n):n.length;var s=dt(n);return s==De||s==gt?n.size:Sa(n).length}function g3(n,s,i){var d=fe(n)?aa:a5;return i&&pt(n,s,i)&&(s=r),d(n,te(s,3))}var m3=we(function(n,s){if(n==null)return[];var i=s.length;return i>1&&pt(n,s[0],s[1])?s=[]:i>2&&pt(s[0],s[1],s[2])&&(s=[s[0]]),Nc(n,ct(s,1),[])}),rs=Jf||function(){return it.Date.now()};function p3(n,s){if(typeof s!="function")throw new Ht(u);return n=ge(n),function(){if(--n<1)return s.apply(this,arguments)}}function Ml(n,s,i){return s=i?r:s,s=n&&s==null?n.length:s,hn(n,U,r,r,r,r,s)}function Ll(n,s){var i;if(typeof s!="function")throw new Ht(u);return n=ge(n),function(){return--n>0&&(i=s.apply(this,arguments)),n<=1&&(s=r),i}}var Ya=we(function(n,s,i){var d=j;if(i.length){var g=jn(i,xr(Ya));d|=z}return hn(n,d,s,i,g)}),Ol=we(function(n,s,i){var d=j|L;if(i.length){var g=jn(i,xr(Ol));d|=z}return hn(s,d,n,i,g)});function Bl(n,s,i){s=i?r:s;var d=hn(n,O,r,r,r,r,r,s);return d.placeholder=Bl.placeholder,d}function Dl(n,s,i){s=i?r:s;var d=hn(n,N,r,r,r,r,r,s);return d.placeholder=Dl.placeholder,d}function Vl(n,s,i){var d,g,x,C,R,E,H=0,k=!1,F=!1,q=!0;if(typeof n!="function")throw new Ht(u);s=Wt(s)||0,We(i)&&(k=!!i.leading,F="maxWait"in i,x=F?nt(Wt(i.maxWait)||0,s):x,q="trailing"in i?!!i.trailing:q);function Q(Ye){var Yt=d,xn=g;return d=g=r,H=Ye,C=n.apply(xn,Yt),C}function ne(Ye){return H=Ye,R=Yr(Ce,s),k?Q(Ye):C}function me(Ye){var Yt=Ye-E,xn=Ye-H,n1=s-Yt;return F?ut(n1,x-xn):n1}function re(Ye){var Yt=Ye-E,xn=Ye-H;return E===r||Yt>=s||Yt<0||F&&xn>=x}function Ce(){var Ye=rs();if(re(Ye))return _e(Ye);R=Yr(Ce,me(Ye))}function _e(Ye){return R=r,q&&d?Q(Ye):(d=g=r,C)}function Et(){R!==r&&Kc(R),H=0,d=E=g=R=r}function wt(){return R===r?C:_e(rs())}function It(){var Ye=rs(),Yt=re(Ye);if(d=arguments,g=this,E=Ye,Yt){if(R===r)return ne(E);if(F)return Kc(R),R=Yr(Ce,s),Q(E)}return R===r&&(R=Yr(Ce,s)),C}return It.cancel=Et,It.flush=wt,It}var w3=we(function(n,s){return _c(n,1,s)}),x3=we(function(n,s,i){return _c(n,Wt(s)||0,i)});function v3(n){return hn(n,Z)}function os(n,s){if(typeof n!="function"||s!=null&&typeof s!="function")throw new Ht(u);var i=function(){var d=arguments,g=s?s.apply(this,d):d[0],x=i.cache;if(x.has(g))return x.get(g);var C=n.apply(this,d);return i.cache=x.set(g,C)||x,C};return i.cache=new(os.Cache||dn),i}os.Cache=dn;function ss(n){if(typeof n!="function")throw new Ht(u);return function(){var s=arguments;switch(s.length){case 0:return!n.call(this);case 1:return!n.call(this,s[0]);case 2:return!n.call(this,s[0],s[1]);case 3:return!n.call(this,s[0],s[1],s[2])}return!n.apply(this,s)}}function b3(n){return Ll(2,n)}var y3=i5(function(n,s){s=s.length==1&&fe(s[0])?ze(s[0],jt(te())):ze(ct(s,1),jt(te()));var i=s.length;return we(function(d){for(var g=-1,x=ut(d.length,i);++g<x;)d[g]=s[g].call(this,d[g]);return _t(n,this,d)})}),Ja=we(function(n,s){var i=jn(s,xr(Ja));return hn(n,z,r,s,i)}),Nl=we(function(n,s){var i=jn(s,xr(Nl));return hn(n,W,r,s,i)}),C3=gn(function(n,s){return hn(n,J,r,r,r,s)});function $3(n,s){if(typeof n!="function")throw new Ht(u);return s=s===r?s:ge(s),we(n,s)}function S3(n,s){if(typeof n!="function")throw new Ht(u);return s=s==null?0:nt(ge(s),0),we(function(i){var d=i[s],g=Mn(i,0,s);return d&&_n(g,d),_t(n,this,g)})}function R3(n,s,i){var d=!0,g=!0;if(typeof n!="function")throw new Ht(u);return We(i)&&(d="leading"in i?!!i.leading:d,g="trailing"in i?!!i.trailing:g),Vl(n,s,{leading:d,maxWait:s,trailing:g})}function _3(n){return Ml(n,1)}function j3(n,s){return Ja(La(s),n)}function A3(){if(!arguments.length)return[];var n=arguments[0];return fe(n)?n:[n]}function T3(n){return Ft(n,S)}function E3(n,s){return s=typeof s=="function"?s:r,Ft(n,S,s)}function I3(n){return Ft(n,b|S)}function M3(n,s){return s=typeof s=="function"?s:r,Ft(n,b|S,s)}function L3(n,s){return s==null||Rc(n,s,ot(s))}function Kt(n,s){return n===s||n!==n&&s!==s}var O3=Zo(ya),B3=Zo(function(n,s){return n>=s}),Jn=Ic(function(){return arguments}())?Ic:function(n){return Ge(n)&&Le.call(n,"callee")&&!wc.call(n,"callee")},fe=B.isArray,D3=X0?jt(X0):Wh;function bt(n){return n!=null&&as(n.length)&&!pn(n)}function Ke(n){return Ge(n)&&bt(n)}function V3(n){return n===!0||n===!1||Ge(n)&&mt(n)==ye}var Ln=Zf||ai,N3=P0?jt(P0):qh;function H3(n){return Ge(n)&&n.nodeType===1&&!Jr(n)}function k3(n){if(n==null)return!0;if(bt(n)&&(fe(n)||typeof n=="string"||typeof n.splice=="function"||Ln(n)||vr(n)||Jn(n)))return!n.length;var s=dt(n);if(s==De||s==gt)return!n.size;if(Kr(n))return!Sa(n).length;for(var i in n)if(Le.call(n,i))return!1;return!0}function F3(n,s){return Wr(n,s)}function z3(n,s,i){i=typeof i=="function"?i:r;var d=i?i(n,s):r;return d===r?Wr(n,s,r,i):!!d}function Qa(n){if(!Ge(n))return!1;var s=mt(n);return s==xe||s==de||typeof n.message=="string"&&typeof n.name=="string"&&!Jr(n)}function U3(n){return typeof n=="number"&&vc(n)}function pn(n){if(!We(n))return!1;var s=mt(n);return s==je||s==lt||s==ee||s==Ns}function Hl(n){return typeof n=="number"&&n==ge(n)}function as(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=Ae}function We(n){var s=typeof n;return n!=null&&(s=="object"||s=="function")}function Ge(n){return n!=null&&typeof n=="object"}var kl=ec?jt(ec):Kh;function W3(n,s){return n===s||$a(n,s,ka(s))}function q3(n,s,i){return i=typeof i=="function"?i:r,$a(n,s,ka(s),i)}function G3(n){return Fl(n)&&n!=+n}function K3(n){if(E5(n))throw new ue(l);return Mc(n)}function Y3(n){return n===null}function J3(n){return n==null}function Fl(n){return typeof n=="number"||Ge(n)&&mt(n)==Ie}function Jr(n){if(!Ge(n)||mt(n)!=et)return!1;var s=Lo(n);if(s===null)return!0;var i=Le.call(s,"constructor")&&s.constructor;return typeof i=="function"&&i instanceof i&&To.call(i)==qf}var Za=tc?jt(tc):Yh;function Q3(n){return Hl(n)&&n>=-Ae&&n<=Ae}var zl=nc?jt(nc):Jh;function is(n){return typeof n=="string"||!fe(n)&&Ge(n)&&mt(n)==tn}function Tt(n){return typeof n=="symbol"||Ge(n)&&mt(n)==ar}var vr=rc?jt(rc):Qh;function Z3(n){return n===r}function X3(n){return Ge(n)&&dt(n)==kn}function P3(n){return Ge(n)&&mt(n)==Hs}var em=Zo(Ra),tm=Zo(function(n,s){return n<=s});function Ul(n){if(!n)return[];if(bt(n))return is(n)?qt(n):vt(n);if(Dr&&n[Dr])return Lf(n[Dr]());var s=dt(n),i=s==De?fa:s==gt?_o:br;return i(n)}function wn(n){if(!n)return n===0?n:0;if(n=Wt(n),n===le||n===-le){var s=n<0?-1:1;return s*Be}return n===n?n:0}function ge(n){var s=wn(n),i=s%1;return s===s?i?s-i:s:0}function Wl(n){return n?qn(ge(n),0,pe):0}function Wt(n){if(typeof n=="number")return n;if(Tt(n))return He;if(We(n)){var s=typeof n.valueOf=="function"?n.valueOf():n;n=We(s)?s+"":s}if(typeof n!="string")return n===0?n:+n;n=lc(n);var i=B2.test(n);return i||V2.test(n)?pf(n.slice(2),i?2:8):O2.test(n)?He:+n}function ql(n){return rn(n,yt(n))}function nm(n){return n?qn(ge(n),-Ae,Ae):n===0?n:0}function Me(n){return n==null?"":At(n)}var rm=pr(function(n,s){if(Kr(s)||bt(s)){rn(s,ot(s),n);return}for(var i in s)Le.call(s,i)&&Fr(n,i,s[i])}),Gl=pr(function(n,s){rn(s,yt(s),n)}),cs=pr(function(n,s,i,d){rn(s,yt(s),n,d)}),om=pr(function(n,s,i,d){rn(s,ot(s),n,d)}),sm=gn(xa);function am(n,s){var i=mr(n);return s==null?i:Sc(i,s)}var im=we(function(n,s){n=Ve(n);var i=-1,d=s.length,g=d>2?s[2]:r;for(g&&pt(s[0],s[1],g)&&(d=1);++i<d;)for(var x=s[i],C=yt(x),R=-1,E=C.length;++R<E;){var H=C[R],k=n[H];(k===r||Kt(k,fr[H])&&!Le.call(n,H))&&(n[H]=x[H])}return n}),cm=we(function(n){return n.push(r,ll),_t(Kl,r,n)});function lm(n,s){return sc(n,te(s,3),nn)}function um(n,s){return sc(n,te(s,3),ba)}function dm(n,s){return n==null?n:va(n,te(s,3),yt)}function fm(n,s){return n==null?n:Tc(n,te(s,3),yt)}function hm(n,s){return n&&nn(n,te(s,3))}function gm(n,s){return n&&ba(n,te(s,3))}function mm(n){return n==null?[]:Uo(n,ot(n))}function pm(n){return n==null?[]:Uo(n,yt(n))}function Xa(n,s,i){var d=n==null?r:Gn(n,s);return d===r?i:d}function wm(n,s){return n!=null&&fl(n,s,kh)}function Pa(n,s){return n!=null&&fl(n,s,Fh)}var xm=ol(function(n,s,i){s!=null&&typeof s.toString!="function"&&(s=Eo.call(s)),n[s]=i},ti(Ct)),vm=ol(function(n,s,i){s!=null&&typeof s.toString!="function"&&(s=Eo.call(s)),Le.call(n,s)?n[s].push(i):n[s]=[i]},te),bm=we(Ur);function ot(n){return bt(n)?Cc(n):Sa(n)}function yt(n){return bt(n)?Cc(n,!0):Zh(n)}function ym(n,s){var i={};return s=te(s,3),nn(n,function(d,g,x){fn(i,s(d,g,x),d)}),i}function Cm(n,s){var i={};return s=te(s,3),nn(n,function(d,g,x){fn(i,g,s(d,g,x))}),i}var $m=pr(function(n,s,i){Wo(n,s,i)}),Kl=pr(function(n,s,i,d){Wo(n,s,i,d)}),Sm=gn(function(n,s){var i={};if(n==null)return i;var d=!1;s=ze(s,function(x){return x=In(x,n),d||(d=x.length>1),x}),rn(n,Na(n),i),d&&(i=Ft(i,b|y|S,x5));for(var g=s.length;g--;)Ea(i,s[g]);return i});function Rm(n,s){return Yl(n,ss(te(s)))}var _m=gn(function(n,s){return n==null?{}:Ph(n,s)});function Yl(n,s){if(n==null)return{};var i=ze(Na(n),function(d){return[d]});return s=te(s),Hc(n,i,function(d,g){return s(d,g[0])})}function jm(n,s,i){s=In(s,n);var d=-1,g=s.length;for(g||(g=1,n=r);++d<g;){var x=n==null?r:n[on(s[d])];x===r&&(d=g,x=i),n=pn(x)?x.call(n):x}return n}function Am(n,s,i){return n==null?n:qr(n,s,i)}function Tm(n,s,i,d){return d=typeof d=="function"?d:r,n==null?n:qr(n,s,i,d)}var Jl=il(ot),Ql=il(yt);function Em(n,s,i){var d=fe(n),g=d||Ln(n)||vr(n);if(s=te(s,4),i==null){var x=n&&n.constructor;g?i=d?new x:[]:We(n)?i=pn(x)?mr(Lo(n)):{}:i={}}return(g?Nt:nn)(n,function(C,R,E){return s(i,C,R,E)}),i}function Im(n,s){return n==null?!0:Ea(n,s)}function Mm(n,s,i){return n==null?n:Wc(n,s,La(i))}function Lm(n,s,i,d){return d=typeof d=="function"?d:r,n==null?n:Wc(n,s,La(i),d)}function br(n){return n==null?[]:da(n,ot(n))}function Om(n){return n==null?[]:da(n,yt(n))}function Bm(n,s,i){return i===r&&(i=s,s=r),i!==r&&(i=Wt(i),i=i===i?i:0),s!==r&&(s=Wt(s),s=s===s?s:0),qn(Wt(n),s,i)}function Dm(n,s,i){return s=wn(s),i===r?(i=s,s=0):i=wn(i),n=Wt(n),zh(n,s,i)}function Vm(n,s,i){if(i&&typeof i!="boolean"&&pt(n,s,i)&&(s=i=r),i===r&&(typeof s=="boolean"?(i=s,s=r):typeof n=="boolean"&&(i=n,n=r)),n===r&&s===r?(n=0,s=1):(n=wn(n),s===r?(s=n,n=0):s=wn(s)),n>s){var d=n;n=s,s=d}if(i||n%1||s%1){var g=bc();return ut(n+g*(s-n+mf("1e-"+((g+"").length-1))),s)}return ja(n,s)}var Nm=wr(function(n,s,i){return s=s.toLowerCase(),n+(i?Zl(s):s)});function Zl(n){return ei(Me(n).toLowerCase())}function Xl(n){return n=Me(n),n&&n.replace(H2,Af).replace(of,"")}function Hm(n,s,i){n=Me(n),s=At(s);var d=n.length;i=i===r?d:qn(ge(i),0,d);var g=i;return i-=s.length,i>=0&&n.slice(i,g)==s}function km(n){return n=Me(n),n&&v2.test(n)?n.replace(T0,Tf):n}function Fm(n){return n=Me(n),n&&R2.test(n)?n.replace(Js,"\\$&"):n}var zm=wr(function(n,s,i){return n+(i?"-":"")+s.toLowerCase()}),Um=wr(function(n,s,i){return n+(i?" ":"")+s.toLowerCase()}),Wm=tl("toLowerCase");function qm(n,s,i){n=Me(n),s=ge(s);var d=s?ur(n):0;if(!s||d>=s)return n;var g=(s-d)/2;return Qo(Vo(g),i)+n+Qo(Do(g),i)}function Gm(n,s,i){n=Me(n),s=ge(s);var d=s?ur(n):0;return s&&d<s?n+Qo(s-d,i):n}function Km(n,s,i){n=Me(n),s=ge(s);var d=s?ur(n):0;return s&&d<s?Qo(s-d,i)+n:n}function Ym(n,s,i){return i||s==null?s=0:s&&(s=+s),th(Me(n).replace(Qs,""),s||0)}function Jm(n,s,i){return(i?pt(n,s,i):s===r)?s=1:s=ge(s),Aa(Me(n),s)}function Qm(){var n=arguments,s=Me(n[0]);return n.length<3?s:s.replace(n[1],n[2])}var Zm=wr(function(n,s,i){return n+(i?"_":"")+s.toLowerCase()});function Xm(n,s,i){return i&&typeof i!="number"&&pt(n,s,i)&&(s=i=r),i=i===r?pe:i>>>0,i?(n=Me(n),n&&(typeof s=="string"||s!=null&&!Za(s))&&(s=At(s),!s&&lr(n))?Mn(qt(n),0,i):n.split(s,i)):[]}var Pm=wr(function(n,s,i){return n+(i?" ":"")+ei(s)});function ep(n,s,i){return n=Me(n),i=i==null?0:qn(ge(i),0,n.length),s=At(s),n.slice(i,i+s.length)==s}function tp(n,s,i){var d=p.templateSettings;i&&pt(n,s,i)&&(s=r),n=Me(n),s=cs({},s,d,cl);var g=cs({},s.imports,d.imports,cl),x=ot(g),C=da(g,x),R,E,H=0,k=s.interpolate||yo,F="__p += '",q=ha((s.escape||yo).source+"|"+k.source+"|"+(k===E0?L2:yo).source+"|"+(s.evaluate||yo).source+"|$","g"),Q="//# sourceURL="+(Le.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++uf+"]")+`
`;n.replace(q,function(re,Ce,_e,Et,wt,It){return _e||(_e=Et),F+=n.slice(H,It).replace(k2,Ef),Ce&&(R=!0,F+=`' +
__e(`+Ce+`) +
'`),wt&&(E=!0,F+=`';
`+wt+`;
__p += '`),_e&&(F+=`' +
((__t = (`+_e+`)) == null ? '' : __t) +
'`),H=It+re.length,re}),F+=`';
`;var ne=Le.call(s,"variable")&&s.variable;if(!ne)F=`with (obj) {
`+F+`
}
`;else if(I2.test(ne))throw new ue(h);F=(E?F.replace(m2,""):F).replace(p2,"$1").replace(w2,"$1;"),F="function("+(ne||"obj")+`) {
`+(ne?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(R?", __e = _.escape":"")+(E?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+F+`return __p
}`;var me=e1(function(){return Ee(x,Q+"return "+F).apply(r,C)});if(me.source=F,Qa(me))throw me;return me}function np(n){return Me(n).toLowerCase()}function rp(n){return Me(n).toUpperCase()}function op(n,s,i){if(n=Me(n),n&&(i||s===r))return lc(n);if(!n||!(s=At(s)))return n;var d=qt(n),g=qt(s),x=uc(d,g),C=dc(d,g)+1;return Mn(d,x,C).join("")}function sp(n,s,i){if(n=Me(n),n&&(i||s===r))return n.slice(0,hc(n)+1);if(!n||!(s=At(s)))return n;var d=qt(n),g=dc(d,qt(s))+1;return Mn(d,0,g).join("")}function ap(n,s,i){if(n=Me(n),n&&(i||s===r))return n.replace(Qs,"");if(!n||!(s=At(s)))return n;var d=qt(n),g=uc(d,qt(s));return Mn(d,g).join("")}function ip(n,s){var i=ie,d=$e;if(We(s)){var g="separator"in s?s.separator:g;i="length"in s?ge(s.length):i,d="omission"in s?At(s.omission):d}n=Me(n);var x=n.length;if(lr(n)){var C=qt(n);x=C.length}if(i>=x)return n;var R=i-ur(d);if(R<1)return d;var E=C?Mn(C,0,R).join(""):n.slice(0,R);if(g===r)return E+d;if(C&&(R+=E.length-R),Za(g)){if(n.slice(R).search(g)){var H,k=E;for(g.global||(g=ha(g.source,Me(I0.exec(g))+"g")),g.lastIndex=0;H=g.exec(k);)var F=H.index;E=E.slice(0,F===r?R:F)}}else if(n.indexOf(At(g),R)!=R){var q=E.lastIndexOf(g);q>-1&&(E=E.slice(0,q))}return E+d}function cp(n){return n=Me(n),n&&x2.test(n)?n.replace(A0,Vf):n}var lp=wr(function(n,s,i){return n+(i?" ":"")+s.toUpperCase()}),ei=tl("toUpperCase");function Pl(n,s,i){return n=Me(n),s=i?r:s,s===r?Mf(n)?kf(n):$f(n):n.match(s)||[]}var e1=we(function(n,s){try{return _t(n,r,s)}catch(i){return Qa(i)?i:new ue(i)}}),up=gn(function(n,s){return Nt(s,function(i){i=on(i),fn(n,i,Ya(n[i],n))}),n});function dp(n){var s=n==null?0:n.length,i=te();return n=s?ze(n,function(d){if(typeof d[1]!="function")throw new Ht(u);return[i(d[0]),d[1]]}):[],we(function(d){for(var g=-1;++g<s;){var x=n[g];if(_t(x[0],this,d))return _t(x[1],this,d)}})}function fp(n){return Vh(Ft(n,b))}function ti(n){return function(){return n}}function hp(n,s){return n==null||n!==n?s:n}var gp=rl(),mp=rl(!0);function Ct(n){return n}function ni(n){return Lc(typeof n=="function"?n:Ft(n,b))}function pp(n){return Bc(Ft(n,b))}function wp(n,s){return Dc(n,Ft(s,b))}var xp=we(function(n,s){return function(i){return Ur(i,n,s)}}),vp=we(function(n,s){return function(i){return Ur(n,i,s)}});function ri(n,s,i){var d=ot(s),g=Uo(s,d);i==null&&!(We(s)&&(g.length||!d.length))&&(i=s,s=n,n=this,g=Uo(s,ot(s)));var x=!(We(i)&&"chain"in i)||!!i.chain,C=pn(n);return Nt(g,function(R){var E=s[R];n[R]=E,C&&(n.prototype[R]=function(){var H=this.__chain__;if(x||H){var k=n(this.__wrapped__),F=k.__actions__=vt(this.__actions__);return F.push({func:E,args:arguments,thisArg:n}),k.__chain__=H,k}return E.apply(n,_n([this.value()],arguments))})}),n}function bp(){return it._===this&&(it._=Gf),this}function oi(){}function yp(n){return n=ge(n),we(function(s){return Vc(s,n)})}var Cp=Ba(ze),$p=Ba(oc),Sp=Ba(aa);function t1(n){return za(n)?ia(on(n)):e5(n)}function Rp(n){return function(s){return n==null?r:Gn(n,s)}}var _p=sl(),jp=sl(!0);function si(){return[]}function ai(){return!1}function Ap(){return{}}function Tp(){return""}function Ep(){return!0}function Ip(n,s){if(n=ge(n),n<1||n>Ae)return[];var i=pe,d=ut(n,pe);s=te(s),n-=pe;for(var g=ua(d,s);++i<n;)s(i);return g}function Mp(n){return fe(n)?ze(n,on):Tt(n)?[n]:vt(yl(Me(n)))}function Lp(n){var s=++Wf;return Me(n)+s}var Op=Jo(function(n,s){return n+s},0),Bp=Da("ceil"),Dp=Jo(function(n,s){return n/s},1),Vp=Da("floor");function Np(n){return n&&n.length?zo(n,Ct,ya):r}function Hp(n,s){return n&&n.length?zo(n,te(s,2),ya):r}function kp(n){return ic(n,Ct)}function Fp(n,s){return ic(n,te(s,2))}function zp(n){return n&&n.length?zo(n,Ct,Ra):r}function Up(n,s){return n&&n.length?zo(n,te(s,2),Ra):r}var Wp=Jo(function(n,s){return n*s},1),qp=Da("round"),Gp=Jo(function(n,s){return n-s},0);function Kp(n){return n&&n.length?la(n,Ct):0}function Yp(n,s){return n&&n.length?la(n,te(s,2)):0}return p.after=p3,p.ary=Ml,p.assign=rm,p.assignIn=Gl,p.assignInWith=cs,p.assignWith=om,p.at=sm,p.before=Ll,p.bind=Ya,p.bindAll=up,p.bindKey=Ol,p.castArray=A3,p.chain=Tl,p.chunk=V5,p.compact=N5,p.concat=H5,p.cond=dp,p.conforms=fp,p.constant=ti,p.countBy=Kg,p.create=am,p.curry=Bl,p.curryRight=Dl,p.debounce=Vl,p.defaults=im,p.defaultsDeep=cm,p.defer=w3,p.delay=x3,p.difference=k5,p.differenceBy=F5,p.differenceWith=z5,p.drop=U5,p.dropRight=W5,p.dropRightWhile=q5,p.dropWhile=G5,p.fill=K5,p.filter=Jg,p.flatMap=Xg,p.flatMapDeep=Pg,p.flatMapDepth=e3,p.flatten=Rl,p.flattenDeep=Y5,p.flattenDepth=J5,p.flip=v3,p.flow=gp,p.flowRight=mp,p.fromPairs=Q5,p.functions=mm,p.functionsIn=pm,p.groupBy=t3,p.initial=X5,p.intersection=P5,p.intersectionBy=eg,p.intersectionWith=tg,p.invert=xm,p.invertBy=vm,p.invokeMap=r3,p.iteratee=ni,p.keyBy=o3,p.keys=ot,p.keysIn=yt,p.map=ns,p.mapKeys=ym,p.mapValues=Cm,p.matches=pp,p.matchesProperty=wp,p.memoize=os,p.merge=$m,p.mergeWith=Kl,p.method=xp,p.methodOf=vp,p.mixin=ri,p.negate=ss,p.nthArg=yp,p.omit=Sm,p.omitBy=Rm,p.once=b3,p.orderBy=s3,p.over=Cp,p.overArgs=y3,p.overEvery=$p,p.overSome=Sp,p.partial=Ja,p.partialRight=Nl,p.partition=a3,p.pick=_m,p.pickBy=Yl,p.property=t1,p.propertyOf=Rp,p.pull=sg,p.pullAll=jl,p.pullAllBy=ag,p.pullAllWith=ig,p.pullAt=cg,p.range=_p,p.rangeRight=jp,p.rearg=C3,p.reject=l3,p.remove=lg,p.rest=$3,p.reverse=Ga,p.sampleSize=d3,p.set=Am,p.setWith=Tm,p.shuffle=f3,p.slice=ug,p.sortBy=m3,p.sortedUniq=wg,p.sortedUniqBy=xg,p.split=Xm,p.spread=S3,p.tail=vg,p.take=bg,p.takeRight=yg,p.takeRightWhile=Cg,p.takeWhile=$g,p.tap=Ng,p.throttle=R3,p.thru=ts,p.toArray=Ul,p.toPairs=Jl,p.toPairsIn=Ql,p.toPath=Mp,p.toPlainObject=ql,p.transform=Em,p.unary=_3,p.union=Sg,p.unionBy=Rg,p.unionWith=_g,p.uniq=jg,p.uniqBy=Ag,p.uniqWith=Tg,p.unset=Im,p.unzip=Ka,p.unzipWith=Al,p.update=Mm,p.updateWith=Lm,p.values=br,p.valuesIn=Om,p.without=Eg,p.words=Pl,p.wrap=j3,p.xor=Ig,p.xorBy=Mg,p.xorWith=Lg,p.zip=Og,p.zipObject=Bg,p.zipObjectDeep=Dg,p.zipWith=Vg,p.entries=Jl,p.entriesIn=Ql,p.extend=Gl,p.extendWith=cs,ri(p,p),p.add=Op,p.attempt=e1,p.camelCase=Nm,p.capitalize=Zl,p.ceil=Bp,p.clamp=Bm,p.clone=T3,p.cloneDeep=I3,p.cloneDeepWith=M3,p.cloneWith=E3,p.conformsTo=L3,p.deburr=Xl,p.defaultTo=hp,p.divide=Dp,p.endsWith=Hm,p.eq=Kt,p.escape=km,p.escapeRegExp=Fm,p.every=Yg,p.find=Qg,p.findIndex=$l,p.findKey=lm,p.findLast=Zg,p.findLastIndex=Sl,p.findLastKey=um,p.floor=Vp,p.forEach=El,p.forEachRight=Il,p.forIn=dm,p.forInRight=fm,p.forOwn=hm,p.forOwnRight=gm,p.get=Xa,p.gt=O3,p.gte=B3,p.has=wm,p.hasIn=Pa,p.head=_l,p.identity=Ct,p.includes=n3,p.indexOf=Z5,p.inRange=Dm,p.invoke=bm,p.isArguments=Jn,p.isArray=fe,p.isArrayBuffer=D3,p.isArrayLike=bt,p.isArrayLikeObject=Ke,p.isBoolean=V3,p.isBuffer=Ln,p.isDate=N3,p.isElement=H3,p.isEmpty=k3,p.isEqual=F3,p.isEqualWith=z3,p.isError=Qa,p.isFinite=U3,p.isFunction=pn,p.isInteger=Hl,p.isLength=as,p.isMap=kl,p.isMatch=W3,p.isMatchWith=q3,p.isNaN=G3,p.isNative=K3,p.isNil=J3,p.isNull=Y3,p.isNumber=Fl,p.isObject=We,p.isObjectLike=Ge,p.isPlainObject=Jr,p.isRegExp=Za,p.isSafeInteger=Q3,p.isSet=zl,p.isString=is,p.isSymbol=Tt,p.isTypedArray=vr,p.isUndefined=Z3,p.isWeakMap=X3,p.isWeakSet=P3,p.join=ng,p.kebabCase=zm,p.last=Ut,p.lastIndexOf=rg,p.lowerCase=Um,p.lowerFirst=Wm,p.lt=em,p.lte=tm,p.max=Np,p.maxBy=Hp,p.mean=kp,p.meanBy=Fp,p.min=zp,p.minBy=Up,p.stubArray=si,p.stubFalse=ai,p.stubObject=Ap,p.stubString=Tp,p.stubTrue=Ep,p.multiply=Wp,p.nth=og,p.noConflict=bp,p.noop=oi,p.now=rs,p.pad=qm,p.padEnd=Gm,p.padStart=Km,p.parseInt=Ym,p.random=Vm,p.reduce=i3,p.reduceRight=c3,p.repeat=Jm,p.replace=Qm,p.result=jm,p.round=qp,p.runInContext=A,p.sample=u3,p.size=h3,p.snakeCase=Zm,p.some=g3,p.sortedIndex=dg,p.sortedIndexBy=fg,p.sortedIndexOf=hg,p.sortedLastIndex=gg,p.sortedLastIndexBy=mg,p.sortedLastIndexOf=pg,p.startCase=Pm,p.startsWith=ep,p.subtract=Gp,p.sum=Kp,p.sumBy=Yp,p.template=tp,p.times=Ip,p.toFinite=wn,p.toInteger=ge,p.toLength=Wl,p.toLower=np,p.toNumber=Wt,p.toSafeInteger=nm,p.toString=Me,p.toUpper=rp,p.trim=op,p.trimEnd=sp,p.trimStart=ap,p.truncate=ip,p.unescape=cp,p.uniqueId=Lp,p.upperCase=lp,p.upperFirst=ei,p.each=El,p.eachRight=Il,p.first=_l,ri(p,function(){var n={};return nn(p,function(s,i){Le.call(p.prototype,i)||(n[i]=s)}),n}(),{chain:!1}),p.VERSION=a,Nt(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){p[n].placeholder=p}),Nt(["drop","take"],function(n,s){Se.prototype[n]=function(i){i=i===r?1:nt(ge(i),0);var d=this.__filtered__&&!s?new Se(this):this.clone();return d.__filtered__?d.__takeCount__=ut(i,d.__takeCount__):d.__views__.push({size:ut(i,pe),type:n+(d.__dir__<0?"Right":"")}),d},Se.prototype[n+"Right"]=function(i){return this.reverse()[n](i).reverse()}}),Nt(["filter","map","takeWhile"],function(n,s){var i=s+1,d=i==se||i==ve;Se.prototype[n]=function(g){var x=this.clone();return x.__iteratees__.push({iteratee:te(g,3),type:i}),x.__filtered__=x.__filtered__||d,x}}),Nt(["head","last"],function(n,s){var i="take"+(s?"Right":"");Se.prototype[n]=function(){return this[i](1).value()[0]}}),Nt(["initial","tail"],function(n,s){var i="drop"+(s?"":"Right");Se.prototype[n]=function(){return this.__filtered__?new Se(this):this[i](1)}}),Se.prototype.compact=function(){return this.filter(Ct)},Se.prototype.find=function(n){return this.filter(n).head()},Se.prototype.findLast=function(n){return this.reverse().find(n)},Se.prototype.invokeMap=we(function(n,s){return typeof n=="function"?new Se(this):this.map(function(i){return Ur(i,n,s)})}),Se.prototype.reject=function(n){return this.filter(ss(te(n)))},Se.prototype.slice=function(n,s){n=ge(n);var i=this;return i.__filtered__&&(n>0||s<0)?new Se(i):(n<0?i=i.takeRight(-n):n&&(i=i.drop(n)),s!==r&&(s=ge(s),i=s<0?i.dropRight(-s):i.take(s-n)),i)},Se.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Se.prototype.toArray=function(){return this.take(pe)},nn(Se.prototype,function(n,s){var i=/^(?:filter|find|map|reject)|While$/.test(s),d=/^(?:head|last)$/.test(s),g=p[d?"take"+(s=="last"?"Right":""):s],x=d||/^find/.test(s);g&&(p.prototype[s]=function(){var C=this.__wrapped__,R=d?[1]:arguments,E=C instanceof Se,H=R[0],k=E||fe(C),F=function(Ce){var _e=g.apply(p,_n([Ce],R));return d&&q?_e[0]:_e};k&&i&&typeof H=="function"&&H.length!=1&&(E=k=!1);var q=this.__chain__,Q=!!this.__actions__.length,ne=x&&!q,me=E&&!Q;if(!x&&k){C=me?C:new Se(this);var re=n.apply(C,R);return re.__actions__.push({func:ts,args:[F],thisArg:r}),new kt(re,q)}return ne&&me?n.apply(this,R):(re=this.thru(F),ne?d?re.value()[0]:re.value():re)})}),Nt(["pop","push","shift","sort","splice","unshift"],function(n){var s=jo[n],i=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",d=/^(?:pop|shift)$/.test(n);p.prototype[n]=function(){var g=arguments;if(d&&!this.__chain__){var x=this.value();return s.apply(fe(x)?x:[],g)}return this[i](function(C){return s.apply(fe(C)?C:[],g)})}}),nn(Se.prototype,function(n,s){var i=p[s];if(i){var d=i.name+"";Le.call(gr,d)||(gr[d]=[]),gr[d].push({name:s,func:i})}}),gr[Yo(r,L).name]=[{name:"wrapper",func:r}],Se.prototype.clone=ch,Se.prototype.reverse=lh,Se.prototype.value=uh,p.prototype.at=Hg,p.prototype.chain=kg,p.prototype.commit=Fg,p.prototype.next=zg,p.prototype.plant=Wg,p.prototype.reverse=qg,p.prototype.toJSON=p.prototype.valueOf=p.prototype.value=Gg,p.prototype.first=p.prototype.head,Dr&&(p.prototype[Dr]=Ug),p},dr=Ff();Fn?((Fn.exports=dr)._=dr,na._=dr):it._=dr}).call(Qr)})(vs,vs.exports);vs.exports;const Hn=(e="&")=>({theme:t,$hasError:r=!1})=>ce`
    outline: none;
    box-shadow: none;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${e}:focus-within {
      border: 1px solid ${r?t.colors.danger600:t.colors.primary600};
      box-shadow: ${r?t.colors.danger600:t.colors.primary600} 0px 0px 0px 2px;
    }
  `,[jb,Rt]=ho("Field",{}),tr=f.forwardRef(({children:e,name:t,error:r=!1,hint:a,id:o,required:l=!1,...u},h)=>{const m=Pt(o),[w,v]=f.useState();return c.jsx(jb,{name:t,id:m,error:r,hint:a,required:l,labelNode:w,setLabelNode:v,children:c.jsx(K,{direction:"column",alignItems:"stretch",gap:1,ref:h,...u,children:e})})}),b0=f.forwardRef(({children:e,action:t,...r},a)=>{const{id:o,required:l,setLabelNode:u}=Rt("Label"),h=Oe(a,u);return e?c.jsxs(Ab,{ref:h,variant:"pi",textColor:"neutral800",fontWeight:"bold",...r,id:`${o}-label`,htmlFor:o,tag:"label",ellipsis:!0,children:[e,l&&c.jsx(ae,{"aria-hidden":!0,lineHeight:"1em",textColor:"danger600",children:"*"}),t&&c.jsx(Tb,{marginLeft:1,children:t})]}):null}),Ab=I(ae)`
  display: flex;
`,Tb=I(K)`
  line-height: 0;
  color: ${({theme:e})=>e.colors.neutral500};
`,Is=f.forwardRef(({endAction:e,startAction:t,disabled:r=!1,onChange:a,hasError:o,required:l,className:u,size:h="M",...m},w)=>{const{id:v,error:b,hint:y,name:S,required:$}=Rt("Input");let _;b?_=`${v}-error`:y&&(_=`${v}-hint`);const j=!!b,L=f.useRef(null),T=f.useRef(null),O=Oe(T,w),N=z=>{!r&&a&&a(z)};return f.useLayoutEffect(()=>{if(L.current&&T.current){const z=L.current.offsetWidth,W=T.current;if(W){const U=z+8+16;W.style.paddingRight=`${U}px`}}},[e]),c.jsxs(Mb,{gap:2,justifyContent:"space-between",$hasError:j||o,$disabled:r,$size:h,$hasLeftAction:!!t,$hasRightAction:!!e,className:u,children:[t,c.jsx(Eb,{id:v,name:S,ref:O,$size:h,"aria-describedby":_,"aria-invalid":j||o,"aria-disabled":r,disabled:r,"data-disabled":r?"":void 0,onChange:N,"aria-required":$||l,$hasLeftAction:!!t,$hasRightAction:!!e,...m}),e&&c.jsx(Ib,{ref:L,children:e})]})}),Eb=I.input`
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius};
  cursor: ${e=>e["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:e})=>e.colors.neutral800};
  font-weight: 400;
  font-size: ${e=>e.theme.fontSizes[2]};
  line-height: 2.2rem;
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:e})=>e.colors.neutral500};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }

  ${e=>{switch(e.$size){case"S":return ce`
          padding-inline-start: ${e.$hasLeftAction?0:e.theme.spaces[4]};
          padding-inline-end: ${e.$hasRightAction?0:e.theme.spaces[4]};
          padding-block: ${e.theme.spaces[1]};
        `;default:return ce`
          padding-inline-start: ${e.$hasLeftAction?0:e.theme.spaces[4]};
          padding-inline-end: ${e.$hasRightAction?0:e.theme.spaces[4]};
          padding-block: ${e.theme.spaces[2]};
        `}}}
`,Ib=I(K)`
  position: absolute;
  right: ${({theme:e})=>e.spaces[4]};
  top: 50%;
  transform: translateY(-50%);
`,Mb=I(K)`
  border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  padding-inline-start: ${({$hasLeftAction:e,theme:t})=>e?t.spaces[4]:0};
  position: relative;

  ${Hn()}
  ${({theme:e,$disabled:t})=>t?ce`
          color: ${e.colors.neutral600};
          background: ${e.colors.neutral150};
        `:void 0};
`,pd=()=>{const{id:e,hint:t,error:r}=Rt("Hint");return!t||r?null:c.jsx(ae,{variant:"pi",tag:"p",id:`${e}-hint`,textColor:"neutral600",children:t})},wd=()=>{const{id:e,error:t}=Rt("Error");return!t||typeof t!="string"?null:c.jsx(ae,{variant:"pi",tag:"p",id:`${e}-error`,textColor:"danger600","data-strapi-field-error":!0,children:t})},xd=f.forwardRef(({label:e,children:t,...r},a)=>c.jsx(Lb,{justifyContent:"unset",background:"transparent",borderStyle:"none",...r,type:"button",tag:"button",ref:a,children:c.jsx(Rr,{label:e,children:t})})),Lb=I(K)`
  font-size: 1.6rem;
  padding: 0;
`,X=Object.freeze(Object.defineProperty({__proto__:null,Action:xd,Error:wd,Hint:pd,Input:Is,Label:b0,Root:tr,useField:Rt},Symbol.toStringTag,{value:"Module"}));f.forwardRef(({actions:e,children:t,error:r,hint:a,label:o,labelAction:l,nextLabel:u,onNext:h,onPrevious:m,previousLabel:w,required:v,secondaryLabel:b,selectedSlide:y,id:S,...$},_)=>{const j=Pt(S);return c.jsx(tr,{hint:a,error:r,id:j,required:v,children:c.jsxs(K,{direction:"column",alignItems:"stretch",gap:1,children:[o&&c.jsx(b0,{action:l,children:o}),c.jsx(_b,{ref:_,actions:e,label:o,nextLabel:u,onNext:h,onPrevious:m,previousLabel:w,secondaryLabel:b,selectedSlide:y,id:j,...$,children:t}),c.jsx(pd,{}),c.jsx(wd,{})]})})});I(Y)`
  ${Yu}
`;const Ob="data:image/svg+xml,%3csvg%20width='63'%20height='63'%20viewBox='0%200%2063%2063'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M42.5563%2011.9816C39.484%2010.3071%2035.8575%209.29097%2032.3354%209.13521C28.6443%208.92888%2024.8295%209.72318%2021.3336%2011.4129C20.9123%2011.5901%2020.5376%2011.8101%2020.1722%2012.0249L20.0108%2012.1179C19.8774%2012.1951%2019.7441%2012.2724%2019.608%2012.3536C19.3253%2012.5146%2019.0492%2012.6744%2018.7544%2012.8792C18.5463%2013.0329%2018.3395%2013.1759%2018.1301%2013.323C17.5658%2013.7208%2016.9868%2014.1317%2016.4983%2014.5979C14.8476%2015.9524%2013.5571%2017.6075%2012.6071%2018.9214C10.4365%2022.1566%209.08622%2025.9567%208.80702%2029.6143L8.7764%2030.1588C8.73328%2030.9196%208.68476%2031.7057%208.75353%2032.4555C8.76648%2032.6084%208.7661%2032.7638%208.77506%2032.914C8.78895%2033.229%208.80152%2033.5373%208.846%2033.8672L9.07396%2035.4221C9.09756%2035.5764%209.1198%2035.7413%209.1633%2035.9263L9.65919%2037.9272L10.138%2039.2823C10.2729%2039.6673%2010.4158%2040.0751%2010.6%2040.43C12.0292%2043.637%2014.1425%2046.4578%2016.7063%2048.585C19.0508%2050.5296%2021.824%2052.0023%2024.7491%2052.8452L26.2371%2053.2376C26.3781%2053.2693%2026.4926%2053.2889%2026.6031%2053.3058L26.7775%2053.3311C27.0052%2053.3636%2027.2195%2053.3986%2027.4445%2053.435C27.8598%2053.5076%2028.2672%2053.5748%2028.7079%2053.6183L30.5641%2053.7229C30.9516%2053.7249%2031.3352%2053.7068%2031.7081%2053.6874C31.9039%2053.681%2032.0984%2053.6681%2032.3288%2053.662C34.5253%2053.4772%2036.5106%2053.0634%2038.0516%2052.4652C38.1769%2052.4171%2038.3008%2052.3796%2038.4234%2052.3355C38.6727%2052.2499%2038.9259%2052.167%2039.1432%2052.0599L40.8591%2051.2626L42.5702%2050.266C42.9009%2050.0682%2043.0205%2049.6414%2042.8282%2049.2984C42.632%2048.9526%2042.2034%2048.8308%2041.8634%2049.0166L40.1792%2049.9218L38.4995%2050.6224C38.3169%2050.6953%2038.121%2050.7534%2037.9224%2050.8155C37.7838%2050.8489%2037.6518%2050.8983%2037.5012%2050.9408C36.0711%2051.435%2034.2445%2051.7425%2032.244%2051.8346C32.0442%2051.8383%2031.8471%2051.8379%2031.654%2051.8403C31.3051%2051.8414%2030.9602%2051.8451%2030.6392%2051.8305L28.9177%2051.6725C28.5476%2051.619%2028.1695%2051.5427%2027.7848%2051.4678C27.5639%2051.4167%2027.3376%2051.3737%2027.1299%2051.3374L26.9529%2051.2987C26.8704%2051.2834%2026.7772%2051.2667%2026.7333%2051.2543L25.3466%2050.8322C22.7651%2049.9789%2020.33%2048.5729%2018.2942%2046.7557C16.1056%2044.7951%2014.3339%2042.2335%2013.1742%2039.3582C12.0276%2036.6013%2011.5988%2033.2792%2011.9716%2030.0076C12.3145%2027.0213%2013.3948%2024.1635%2015.1858%2021.5083C15.3034%2021.3339%2015.421%2021.1596%2015.5212%2021.0196C16.4309%2019.8688%2017.5408%2018.5589%2018.9483%2017.496C19.3367%2017.1525%2019.7862%2016.856%2020.2611%2016.5478C20.4878%2016.4009%2020.7079%2016.2553%2020.8907%2016.1306C21.0974%2016.0048%2021.3188%2015.8831%2021.5348%2015.7694C21.6761%2015.6975%2021.8162%2015.619%2021.9388%2015.5576L22.1002%2015.4646C22.4002%2015.3037%2022.6749%2015.1546%2022.9908%2015.039L24.1186%2014.5715C24.3399%2014.4844%2024.5718%2014.4159%2024.7997%2014.3447C24.953%2014.2982%2025.0982%2014.2635%2025.2635%2014.2078C25.786%2014.0182%2026.3283%2013.9112%2026.9105%2013.7965C27.117%2013.7571%2027.3302%2013.7163%2027.5608%2013.6585C27.7553%2013.611%2027.9737%2013.5969%2028.2082%2013.5762C28.364%2013.5603%2028.5172%2013.5483%2028.6318%2013.5333C28.7876%2013.5173%2028.9342%2013.5066%2029.0927%2013.4867C29.3285%2013.4555%2029.5456%2013.4347%2029.7494%2013.4337C30.0237%2013.44%2030.2994%2013.4357%2030.5777%2013.4274C31.0811%2013.421%2031.5579%2013.4197%2032.0318%2013.4914C34.9664%2013.7352%2037.7144%2014.6085%2040.2052%2016.0868C42.3489%2017.3655%2044.2716%2019.1525%2045.7607%2021.264C47.0255%2023.0628%2047.9756%2025.0528%2048.4928%2027.0393C48.572%2027.3176%2048.6299%2027.5931%2048.6839%2027.8659C48.7154%2028.0428%2048.7563%2028.2145%2048.7892%2028.3636C48.8037%2028.4541%2048.8208%2028.5406%2048.8445%2028.6258C48.8749%2028.7443%2048.8986%2028.864%2048.9116%2028.9651L48.9793%2029.6047C48.9922%2029.7748%2049.0132%2029.9331%2049.0301%2030.0887C49.0668%2030.3268%2049.0889%2030.5608%2049.0964%2030.7561L49.1083%2031.9001C49.1312%2032.3307%2049.089%2032.7116%2049.0522%2033.0673C49.0384%2033.2598%2049.0126%2033.4443%2049.0123%2033.5824C48.9961%2033.6926%2048.9918%2033.7935%2048.9836%2033.8917C48.9753%2034.0072%2048.9724%2034.1148%2048.9414%2034.2554L48.5449%2036.3059C48.3134%2037.8623%2049.3793%2039.3365%2050.9488%2039.5822C52.0417%2039.7601%2053.1536%2039.2819%2053.7711%2038.3664C54.0063%2038.0176%2054.1604%2037.6257%2054.2227%2037.2064L54.5217%2035.2574C54.5514%2035.0756%2054.572%2034.83%2054.5846%2034.5791L54.6028%2034.2338C54.6098%2034.0598%2054.6223%2033.8779%2054.6347%2033.6788C54.6734%2033.1052%2054.7163%2032.4479%2054.6619%2031.8058L54.5867%2030.4289C54.5622%2030.0952%2054.5097%2029.76%2054.4559%2029.4181C54.431%2029.2572%2054.4048%2029.0896%2054.3826%2028.9074L54.2687%2028.104C54.2332%2027.9244%2054.1804%2027.7273%2054.1329%2027.5396L54.0643%2027.2454C54.0195%2027.071%2053.9773%2026.8927%2053.9338%2026.7076C53.8455%2026.3309%2053.7479%2025.9422%2053.613%2025.5571C52.84%2023.0292%2051.5383%2020.5194%2049.8338%2018.2799C47.8544%2015.682%2045.3333%2013.5087%2042.5563%2011.9816Z'%20fill='%234945FF'/%3e%3c/svg%3e",Bb=f.forwardRef(({children:e,small:t=!1,...r},a)=>c.jsxs("div",{role:"alert","aria-live":"assertive",ref:a,...r,children:[c.jsx(Tr,{children:e}),c.jsx(Vb,{src:Ob,"aria-hidden":!0,$small:t})]})),Db=ft`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,Vb=I.img`
  animation: ${Db} 1s infinite linear;
  will-change: transform;
  ${({$small:e,theme:t})=>e&&`width: ${t.spaces[6]}; height: ${t.spaces[6]};`}
`,Nb=f.forwardRef(({allowCustomValue:e,autocomplete:t,children:r,className:a,clearLabel:o="clear",creatable:l=!1,createMessage:u=pe=>`Create "${pe}"`,defaultFilterValue:h,defaultTextValue:m,defaultOpen:w=!1,open:v,onOpenChange:b,disabled:y=!1,hasError:S,id:$,filterValue:_,hasMoreItems:j=!1,isPrintableCharacter:L,loading:T=!1,loadingMessage:O="Loading content...",name:N,noOptionsMessage:z=()=>"No results found",onChange:W,onClear:U,onCreateOption:J,onFilterValueChange:Z,onInputChange:ie,onTextValueChange:$e,onLoadMore:oe,placeholder:P="Select or enter a value",required:se=!1,size:Re="M",startIcon:ve,textValue:le,value:Ae,...Be},He)=>{const[pe,rt]=an({prop:v,defaultProp:w,onChange:b}),[be,qe]=an({prop:le,defaultProp:e&&!m?Ae:m,onChange:$e}),[Ue,Pe]=an({prop:_,defaultProp:h,onChange:Z}),ee=f.useRef(null),ye=f.useRef(null),Te=Oe(ye,He),de=f.useRef(null),xe=Ze=>{U&&!y&&(qe(""),Pe(""),U(Ze),ye.current.focus())},je=Ze=>{rt(Ze)},lt=Ze=>{qe(Ze)},De=Ze=>{Pe(Ze)},Ie=Ze=>{ie&&ie(Ze)},Dt=Ze=>{W&&W(Ze)},et=Ze=>{oe&&j&&!T&&oe(Ze)},Lr=()=>{J&&be&&J(be)},Ns=Pt(),Sn=`intersection-${_r(Ns)}`;mo(ee,et,{selectorToWatch:`#${Sn}`,skipWhen:!pe});const{error:gt,...tn}=Rt("Combobox"),ar=!!gt||S,Or=tn.id??$,kn=tn.name??N,Hs=tn.required||se;let ln;return gt?ln=`${Or}-error`:tn.hint&&(ln=`${Or}-hint`),c.jsxs(Qt.Root,{autocomplete:t||(l?"list":"both"),onOpenChange:je,open:pe,onTextValueChange:lt,textValue:be,allowCustomValue:l||e,disabled:y,required:Hs,value:Ae,onValueChange:Dt,filterValue:Ue,onFilterValueChange:De,isPrintableCharacter:L,children:[c.jsxs(kb,{$hasError:ar,$size:Re,className:a,children:[c.jsxs(K,{flex:"1",tag:"span",gap:3,children:[ve?c.jsx(K,{flex:"0 0 1.6rem",tag:"span","aria-hidden":!0,children:ve}):null,c.jsx(Fb,{placeholder:P,id:Or,"aria-invalid":!!gt,onChange:Ie,ref:Te,name:kn,"aria-describedby":ln,...Be})]}),c.jsxs(K,{tag:"span",gap:3,children:[be&&U?c.jsx(Hb,{tag:"button",hasRadius:!0,background:"transparent",type:"button",padding:0,color:"neutral600",borderStyle:"none",onClick:xe,"aria-disabled":y,"aria-label":o,title:o,ref:de,children:c.jsx(sr,{})}):null,c.jsx(zb,{children:c.jsx(Dn,{fill:"neutral500"})})]})]}),c.jsx(Qt.Portal,{children:c.jsx(Ub,{sideOffset:4,children:c.jsxs(Wb,{ref:ee,children:[r,l?c.jsx(Qt.CreateItem,{onPointerUp:Lr,onClick:Lr,asChild:!0,children:c.jsx(Ei,{children:c.jsx(ae,{children:u(be??"")})})}):null,!l&&!T?c.jsx(Qt.NoValueFound,{asChild:!0,children:c.jsx(Ei,{$hasHover:!1,children:c.jsx(ae,{children:z(be??"")})})}):null,T?c.jsx(K,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2,children:c.jsx(Bb,{small:!0,children:O})}):null,c.jsx(Y,{id:Sn,width:"100%",height:"1px"})]})})})]})}),Hb=I(Y)`
  padding: 0;
`,kb=I(Qt.Trigger)`
  position: relative;
  border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spaces[4]};

  ${e=>{switch(e.$size){case"S":return ce`
          padding-inline-start: ${({theme:t})=>t.spaces[4]};
          padding-inline-end: ${({theme:t})=>t.spaces[3]};
          padding-block: ${({theme:t})=>t.spaces[1]};
        `;default:return ce`
          padding-inline-start: ${({theme:t})=>t.spaces[4]};
          padding-inline-end: ${({theme:t})=>t.spaces[3]};
          padding-block: ${({theme:t})=>t.spaces[2]};
        `}}}

  &[data-disabled] {
    color: ${({theme:e})=>e.colors.neutral600};
    background: ${({theme:e})=>e.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:e,$hasError:t})=>Hn()({theme:e,$hasError:t})};
`,Fb=I(Qt.TextInput)`
  width: 100%;
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: ${({theme:e})=>e.colors.neutral800};
  padding: 0;
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,zb=I(Qt.Icon)`
  border: none;
  background: transparent;
  padding: 0;
  color: ${({theme:e})=>e.colors.neutral600};
  display: flex;

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,Ub=I(Qt.Content)`
  background: ${({theme:e})=>e.colors.neutral0};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};
  width: var(--radix-combobox-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({theme:e})=>e.zIndices.popover};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    /* The select can't animate out yet, watch https://github.com/radix-ui/primitives/issues/1893, or take a look and solve it yourself. */
    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${Je.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${Je.slideDownIn};
      }
    }
  }
`,Wb=I(Qt.Viewport)`
  padding: ${({theme:e})=>e.spaces[1]};
`,qb=f.forwardRef(({children:e,value:t,disabled:r,textValue:a,...o},l)=>c.jsx(Qt.ComboboxItem,{asChild:!0,value:t,disabled:r,textValue:a,children:c.jsx(Ei,{ref:l,...o,children:c.jsx(Qt.ItemText,{asChild:!0,children:c.jsx(ae,{children:e})})})})),Ei=I.div`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
  background-color: ${({theme:e})=>e.colors.neutral0};
  border-radius: ${({theme:e})=>e.borderRadius};
  user-select: none;

  &[data-state='checked'] {
    background-color: ${({theme:e})=>e.colors.primary100};
    color: ${({theme:e})=>e.colors.primary600};
    font-weight: bold;
  }

  &:hover,
  &[data-highlighted] {
    outline: none;
    background-color: ${({theme:e,$hasHover:t=!0})=>t?e.colors.primary100:e.colors.neutral0};
  }

  &[data-highlighted] {
    color: ${({theme:e})=>e.colors.primary600};
    font-weight: bold;
  }
`;f.forwardRef((e,t)=>c.jsx(pw,{...e,asChild:!0,ref:t}));f.forwardRef((e,t)=>c.jsxs(ww,{children:[c.jsx(Gb,{}),c.jsx(Kb,{ref:t,...e})]}));const Gb=I(xw)`
  background-color: ${e=>e.theme.colors.neutral800};
  position: fixed;
  inset: 0;
  z-index: ${e=>e.theme.zIndices.overlay};
  opacity: 0.2;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${Je.overlayFadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,Kb=I(vw)`
  max-width: 42rem;
  height: min-content;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.neutral0};
  box-shadow: ${e=>e.theme.shadows.popupShadow};
  z-index: ${e=>e.theme.zIndices.modal};

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation-duration: ${e=>e.theme.motion.timings[200]};
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};
      animation-name: ${Je.modalPopIn};
    }

    &[data-state='closed'] {
      animation-duration: ${e=>e.theme.motion.timings[120]};
      animation-timing-function: ${e=>e.theme.motion.easings.easeOutQuad};
      animation-name: ${Je.modalPopOut};
    }
  }
`;f.forwardRef(({children:e,...t},r)=>c.jsx(bw,{asChild:!0,children:c.jsx(Yb,{tag:"h2",variant:"beta",ref:r,padding:6,fontWeight:"bold",...t,children:e})}));const Yb=I(ae)`
  display: flex;
  justify-content: center;
  border-bottom: solid 1px ${e=>e.theme.colors.neutral150};
`;f.forwardRef(({children:e,icon:t,...r},a)=>c.jsx(K,{ref:a,gap:2,direction:"column",paddingTop:8,paddingBottom:8,paddingLeft:6,paddingRight:6,...r,children:typeof e=="string"?c.jsxs(c.Fragment,{children:[t?f.cloneElement(t,{width:24,height:24}):null,c.jsx(Jb,{children:e})]}):e}));const Jb=f.forwardRef((e,t)=>c.jsx(yw,{asChild:!0,children:c.jsx(ae,{ref:t,variant:"omega",...e,tag:"p"})}));f.forwardRef((e,t)=>c.jsx(Qb,{ref:t,gap:2,padding:4,justifyContent:"space-between",...e,tag:"footer"}));const Qb=I(K)`
  border-top: solid 1px ${e=>e.theme.colors.neutral150};
  flex: 1;
`;f.forwardRef((e,t)=>c.jsx(Cw,{...e,asChild:!0,ref:t}));f.forwardRef((e,t)=>c.jsx($w,{...e,asChild:!0,ref:t}));let ui=0;function Zb(){f.useEffect(()=>{var e,t;const r=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=r[0])!==null&&e!==void 0?e:p1()),document.body.insertAdjacentElement("beforeend",(t=r[1])!==null&&t!==void 0?t:p1()),ui++,()=>{ui===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(a=>a.remove()),ui--}},[])}function p1(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}function yn(e,t){const r=f.useRef(null);return t&&r.current&&Xb(t,r.current)&&(t=r.current),r.current=t??null,f.useMemo(()=>new fx(e,t),[e,t])}function Xb(e,t){if(e===t)return!0;const r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(const o of r)if(t[o]!==e[o])return!1;return!0}ru`
${ce`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html {
    /* Sets 1rem === 10px */
    font-size: 62.5%;
  }

  body {
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    color: ${({theme:e})=>e.colors.neutral800};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    padding: 0;
    font: inherit;
  }

  button {
    border: unset;
    background: unset;
    padding: unset;
    margin: unset;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    font: unset;
  }

  #root {
    isolation: isolate;
  }

  ol,
  ul {
    list-style: none;
    padding: unset;
    margin: unset;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  *:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: 2px;
  }

  /* Focusing the button with a mouse, touch, or stylus will show a subtle drop shadow. */
  *:focus:not(:focus-visible) {
    outline: none;
  }

  .lock-body-scroll {
    height: 100vh;
    overflow-y: hidden;
  }
`}
`;const w1="en-EN",Pb=()=>typeof navigator>"u"?w1:navigator.language?navigator.language:w1,[FS,Ms]=ho("StrapiDesignSystem",{locale:Pb()}),e9=Tw,vd=f.forwardRef(({container:e=globalThis?.document?.body,...t},r)=>e?rr.createPortal(c.jsx(Y,{ref:r,...t}),e):null);vd.displayName="Portal";const t9=f.forwardRef(({onClear:e,clearLabel:t="Clear",startIcon:r,disabled:a,hasError:o,children:l,id:u,size:h="M",withTags:m,...w},v)=>{const b=f.useRef(null),y=_=>{e&&!a&&(e(_),b.current.focus())},{labelNode:S}=Rt("SelectTrigger"),$=Oe(b,v);return c.jsx(Xt.Trigger,{asChild:!0,children:c.jsxs(r9,{"aria-disabled":a,$hasError:o,ref:$,alignItems:"center",justifyContent:"space-between",position:"relative",overflow:"hidden",hasRadius:!0,background:a?"neutral150":"neutral0",gap:4,cursor:"default","aria-labelledby":S?`${u}-label`:void 0,$size:h,$withTags:m,...w,children:[c.jsxs(K,{flex:"1",tag:"span",gap:3,children:[r&&c.jsx(K,{tag:"span","aria-hidden":!0,children:r}),l]}),c.jsxs(K,{tag:"span",gap:3,children:[e?c.jsx(n9,{tag:"button",hasRadius:!0,background:"transparent",role:"button",tabIndex:0,onClick:y,"aria-disabled":a,"aria-label":t,title:t,cursor:"pointer",children:c.jsx(sr,{})}):null,c.jsx(o9,{children:c.jsx(Dn,{})})]})]})})}),n9=I(Y)`
  border: none;
  display: flex;

  svg {
    height: 1.1rem;
    width: 1.1rem;
  }

  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,r9=I(K)`
  border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  ${e=>{switch(e.$size){case"S":return ce`
          padding-block: ${e.theme.spaces[1]};
          padding-inline-start: ${e.$withTags?e.theme.spaces[1]:e.theme.spaces[4]};
          padding-inline-end: ${e.theme.spaces[3]};
        `;default:return ce`
          padding-block: ${e.$withTags?"0.3rem":e.theme.spaces[2]};
          padding-inline-start: ${e.$withTags?e.theme.spaces[1]:e.theme.spaces[4]};
          padding-inline-end: ${e.theme.spaces[3]};
        `}}}

  &[aria-disabled='true'] {
    color: ${e=>e.theme.colors.neutral500};
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:e,$hasError:t})=>Hn()({theme:e,$hasError:t})};
`,o9=I(Xt.Icon)`
  display: flex;
  & > svg {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,s9=f.forwardRef(({children:e,placeholder:t,...r},a)=>c.jsx(a9,{ref:a,ellipsis:!0,...r,children:c.jsx(i9,{placeholder:t,children:e})})),a9=I(ae)`
  flex: 1;
  font-size: 1.4rem;
  line-height: 2.2rem;
`,i9=I(Xt.Value)`
  display: flex;
  gap: ${({theme:e})=>e.spaces[1]};
  flex-wrap: wrap;
`,c9=I(Xt.Content)`
  background: ${({theme:e})=>e.colors.neutral0};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};
  min-width: var(--radix-select-trigger-width);
  max-height: 15.6rem;
  z-index: ${({theme:e})=>e.zIndices.popover};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    /* The select can't animate out yet, watch https://github.com/radix-ui/primitives/issues/1893, or take a look and solve it yourself. */
    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${Je.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${Je.slideDownIn};
      }
    }
  }
`,l9=I(Xt.Viewport)`
  padding: ${({theme:e})=>e.spaces[1]};
`,u9=f.forwardRef((e,t)=>c.jsx(f9,{ref:t,...e})),d9=ce`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  border-radius: ${e=>e.theme.borderRadius};
  padding: ${e=>`${e.theme.spaces[2]} ${e.theme.spaces[4]}`};
  padding-left: ${({theme:e})=>e.spaces[4]};
  background-color: ${({theme:e})=>e.colors.neutral0};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
  white-space: nowrap;
  user-select: none;
  color: ${({theme:e})=>e.colors.neutral800};

  &:focus-visible {
    outline: none;
    background-color: ${({theme:e})=>e.colors.primary100};
  }
`,f9=I(Xt.Item)`
  ${d9}

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary100};
  }

  &[data-state='checked'] {
    font-weight: bold;
    background-color: ${({theme:e})=>e.colors.primary100};
    color: ${({theme:e})=>e.colors.primary600};
    font-weight: bold;
  }
`,bd=Xt.Root,yd=t9,Cd=s9,$d=Xt.Portal,Sd=c9,Rd=l9,y0=u9,_d=Xt.ItemIndicator,jd=Xt.ItemText,h9=Xt.Group,Ii=f.forwardRef(({children:e,clearLabel:t="Clear",customizeContent:r,disabled:a,hasError:o,id:l,name:u,onChange:h,onClear:m,onCloseAutoFocus:w,onReachEnd:v,placeholder:b,required:y,size:S,startIcon:$,value:_,...j},L)=>{const[T,O]=f.useState(),[N,z]=f.useState(!1),W=pe=>{z(pe)},U=pe=>{m&&m(pe),h||O("")},J=pe=>{h?h(typeof _=="number"?Number(pe):pe):O(pe)},Z=f.useRef(null),ie=Pt(),$e=`intersection-${_r(ie)}`;mo(Z,pe=>{v&&v(pe)},{selectorToWatch:`#${$e}`,skipWhen:!N});const{error:P,required:se,...Re}=Rt("SingleSelect"),ve=!!P||o,le=Re.id??l,Ae=Re.name??u;let Be;P?Be=`${le}-error`:Re.hint&&(Be=`${le}-hint`);const He=(typeof _<"u"&&_!==null?_.toString():T)??"";return c.jsxs(bd,{onOpenChange:W,disabled:a,required:se??y,onValueChange:J,value:He,...j,children:[c.jsx(yd,{ref:L,id:le,name:Ae,startIcon:$,hasError:ve,disabled:a,clearLabel:t,onClear:He&&m?U:void 0,"aria-label":j["aria-label"],"aria-describedby":Be??j["aria-describedby"],size:S,children:c.jsx(Cd,{placeholder:b,textColor:He?"neutral800":"neutral600",children:He&&r?r(He):void 0})}),c.jsx($d,{children:c.jsx(Sd,{position:"popper",sideOffset:4,onCloseAutoFocus:w,children:c.jsxs(Rd,{ref:Z,children:[e,c.jsx(Y,{id:$e,width:"100%",height:"1px"})]})})})]})}),Mi=f.forwardRef(({value:e,startIcon:t,children:r,...a},o)=>c.jsxs(y0,{ref:o,value:e.toString(),...a,children:[t&&c.jsx(K,{tag:"span","aria-hidden":!0,children:t}),c.jsx(ae,{lineHeight:"20px",width:"100%",children:c.jsx(jd,{children:r})})]})),g9=200,x1=15,[m9,Er]=ho("DatePicker"),Ad=f.forwardRef(({calendarLabel:e,className:t,initialDate:r,locale:a,maxDate:o,minDate:l,monthSelectLabel:u="Month",onChange:h,value:m,yearSelectLabel:w="Year",hasError:v,id:b,name:y,disabled:S=!1,required:$=!1,onClear:_,clearLabel:j="Clear",size:L="M",...T},O)=>{const N=ms(),z=Ms("DatePicker"),W=a??z.locale,U=yn(W,{day:"2-digit",month:"2-digit",year:"numeric"}),[J,Z]=f.useState(!1),[ie,$e]=f.useState(null),[oe,P]=f.useState(null),[se,Re]=f.useState(null),[ve,le]=f.useState(),[Ae,Be]=an({defaultProp:r?Qn(r):void 0,prop:m?Qn(m):void 0,onChange(Ie){h&&h(Ie?.toDate(N))}}),[He,pe]=f.useMemo(()=>{const Ie=r?Qn(r):Wi("UTC"),Dt=l?Qn(l):Ie.set({day:1,month:1,year:Ie.year-g9});let et=o?Qn(o):Ie.set({day:31,month:12,year:Ie.year+x1});return et.compare(Dt)<0&&(et=Dt.set({day:31,month:12,year:Dt.year+x1})),[Dt,et]},[l,o,r]),[rt,be]=f.useState(p9({currentValue:Ae,minDate:He,maxDate:pe})),qe=Pt(),Ue=f.useRef(null),Pe=Ie=>{_&&!S&&(le(""),Be(void 0),_(Ie),oe?.focus())},ee=f.useCallback(Ie=>{Ie&&Ae&&be(Ae),Z(Ie)},[Ae]);jr(()=>{if(m){const Ie=Qn(m);le(U.format(Ie.toDate(N))),be(Ie)}else le("")},[m,U,N]),jr(()=>{if(r&&ve===void 0){const Ie=Qn(r);le(U.format(Ie.toDate(N)))}},[r,ve,U,N]);const{error:ye,...Te}=Rt("Combobox"),de=!!ye||v,xe=Te.id??b,je=Te.name??y,lt=Te.required||$;let De;return ye?De=`${xe}-error`:Te.hint&&(De=`${xe}-hint`),c.jsxs(m9,{calendarDate:rt,content:se,contentId:qe,disabled:S,locale:W,minDate:He,maxDate:pe,open:J,onCalendarDateChange:be,onContentChange:Re,onOpenChange:ee,onTextInputChange:P,onTextValueChange:le,onTriggerChange:$e,onValueChange:Be,required:lt,textInput:oe,textValue:ve,timeZone:N,trigger:ie,value:Ae,children:[c.jsxs(x9,{className:t,hasError:de,size:L,children:[c.jsx(Z6,{fill:"neutral500","aria-hidden":!0}),c.jsx(C9,{ref:O,"aria-describedby":De,id:xe,name:je,...T}),ve&&_?c.jsx(b9,{tag:"button",hasRadius:!0,background:"transparent",type:"button",onClick:Pe,"aria-disabled":S,"aria-label":j,title:j,ref:Ue,children:c.jsx(sr,{})}):null]}),c.jsx(vd,{children:c.jsx(_9,{label:e,children:c.jsx(I9,{monthSelectLabel:u,yearSelectLabel:w})})})]})}),v1=e=>!!e.match(/^[^a-zA-Z]*$/),p9=({currentValue:e,minDate:t,maxDate:r})=>{const a=Wi("UTC");return e||(vi(t,a)===t&&bi(r,a)===r?a:vi(t,a)===a?t:bi(r,a)===a?r:a)},w9="DatePickerTrigger",x9=f.forwardRef(({hasError:e,size:t,...r},a)=>{const o=Er(w9),l=Oe(a,h=>o.onTriggerChange(h)),u=()=>{o.disabled||o.onOpenChange(!0)};return c.jsx(zi,{asChild:!0,trapped:o.open,onMountAutoFocus:h=>{h.preventDefault()},onUnmountAutoFocus:h=>{document.getSelection()?.empty(),h.preventDefault()},children:c.jsx(v9,{ref:l,$hasError:e,$size:t,...r,hasRadius:!0,gap:3,overflow:"hidden",background:o.disabled?"neutral150":"neutral0",onClick:Xn(r.onClick,()=>{o.textInput?.focus()}),onPointerDown:Xn(r.onPointerDown,h=>{const m=h.target;m.hasPointerCapture(h.pointerId)&&m.releasePointerCapture(h.pointerId),(m.closest("button")??m.closest("div"))===h.currentTarget&&h.button===0&&h.ctrlKey===!1&&(u(),o.textInput?.focus())})})})}),v9=I(K)`
  border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  ${e=>{switch(e.$size){case"S":return ce`
          padding-block: ${e.theme.spaces[1]};
          padding-inline: ${e.theme.spaces[3]};
        `;default:return ce`
          padding-block: ${e.theme.spaces[2]};
          padding-inline: ${e.theme.spaces[3]};
        `}}}

  & > svg {
    flex: 1 0 auto;
  }

  &[data-disabled] {
    color: ${({theme:e})=>e.colors.neutral600};
    background: ${({theme:e})=>e.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:e,$hasError:t})=>Hn()({theme:e,$hasError:t})};
`,b9=I(Y)`
  border: none;
  color: ${({theme:e})=>e.colors.neutral600};
  padding: 0;
  cursor: pointer;
`,y9="DatePickerTextInput",C9=f.forwardRef(({placeholder:e,...t},r)=>{const a=Er(y9),{onTextValueChange:o,textValue:l,onTextInputChange:u,onOpenChange:h,disabled:m,locale:w}=a,v=Oe(r,L=>u(L)),b=()=>{m||h(!0)},y=yn(w,{year:"numeric",month:"2-digit",day:"2-digit"}),[S,$,_]=f.useMemo(()=>{const L=y.formatToParts(new Date),T=L.filter(z=>z.type==="year"||z.type==="month"||z.type==="day"),O=T.map(z=>{switch(z.type){case"day":return"DD";case"month":return"MM";case"year":return"YYYY";default:return""}}),N=L.find(z=>z.type==="literal")?.value??"";return[O,N,T]},[y]),j=S.map(L=>`\\d{${L.length}}`).join(`\\${$}`);return c.jsx(S9,{role:"combobox",type:"text",inputMode:"numeric",ref:v,"aria-autocomplete":"none","aria-controls":a.contentId,"aria-disabled":a.disabled,"aria-expanded":a.open,"aria-required":a.required,"aria-haspopup":"dialog","data-state":a.open?"open":"closed",disabled:m,"data-disabled":m?"":void 0,pattern:j,placeholder:e??S.join($),...t,value:l??"",onBlur:Xn(t.onBlur,()=>{if(!a.textValue){a.onValueChange(void 0);return}a.onTextValueChange(y.format(a.calendarDate.toDate(a.timeZone))),a.onValueChange(a.calendarDate)}),onChange:Xn(t.onChange,L=>{if(v1(L.target.value)){const T=L.target.value.split($),[O,N,z]=_.map((P,se)=>{const Re=T[se];return{...P,value:Re}}).sort((P,se)=>P.type==="year"?1:se.type==="year"?-1:P.type==="month"?1:se.type==="month"?-1:0).map(P=>P.value),W=a.calendarDate.year;let U=a.calendarDate.year;if(z){const P=z.length===1?`0${z}`:z;U=z.length<3?Number(`${W}`.slice(0,4-P.length)+P):Number(P)}z&&z.length<3&&U>a.maxDate.year&&(U-=100);const J=a.calendarDate.set({year:U}),Z=J.calendar.getMonthsInYear(J),ie=J.set({month:N&&Number(N)<=Z?Number(N):void 0}),$e=ie.calendar.getDaysInMonth(ie),oe=ie.set({day:O&&Number(O)<=$e?Number(O):void 0});a.onCalendarDateChange($9(oe,a.minDate,a.maxDate)),a.onTextValueChange(L.target.value)}}),onKeyDown:Xn(t.onKeyDown,L=>{if(!a.open&&(v1(L.key)||["ArrowDown","Backspace"].includes(L.key)))b();else if(["Tab"].includes(L.key)&&a.open)L.preventDefault();else if(["Escape"].includes(L.key))a.open?a.onOpenChange(!1):(a.onValueChange(void 0),a.onTextValueChange("")),L.preventDefault();else if(a.open&&["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(L.key))switch(L.preventDefault(),L.key){case"ArrowDown":{const T=a.calendarDate.add({weeks:1});if(a.maxDate&&T.compare(a.maxDate)>0)return;a.onCalendarDateChange(T);return}case"ArrowRight":{const T=a.calendarDate.add({days:1});if(a.maxDate&&T.compare(a.maxDate)>0)return;a.onCalendarDateChange(T);return}case"ArrowUp":{const T=a.calendarDate.subtract({weeks:1});if(a.minDate&&T.compare(a.minDate)<0)return;a.onCalendarDateChange(T);return}case"ArrowLeft":{const T=a.calendarDate.subtract({days:1});if(a.minDate&&T.compare(a.minDate)<0)return;a.onCalendarDateChange(T)}}else a.open&&["Enter"].includes(L.key)&&(L.preventDefault(),o(y.format(a.calendarDate.toDate(a.timeZone))),a.onValueChange(a.calendarDate),a.onOpenChange(!1))})})});function $9(e,t,r){return t&&(e=bi(e,t)),r&&(e=vi(e,r)),e}const S9=I.input`
  width: 100%;
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: ${({theme:e})=>e.colors.neutral800};
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,R9="DatePickerContent",_9=f.forwardRef((e,t)=>{const[r,a]=f.useState(),o=Er(R9);if(jr(()=>{a(new DocumentFragment)},[]),!o.open){const l=r;return l?rr.createPortal(c.jsx("div",{children:e.children}),l):null}return c.jsx(A9,{...e,ref:t})}),j9="DatePickerContent",A9=f.forwardRef((e,t)=>{const{label:r="Choose date",...a}=e,{onOpenChange:o,...l}=Er(j9),{x:u,y:h,refs:m,strategy:w,placement:v}=Sw({strategy:"fixed",placement:"bottom-start",middleware:[Rw({mainAxis:4}),_w(),jw()],elements:{reference:l.trigger},whileElementsMounted:Aw});f.useEffect(()=>{const y=()=>{o(!1)};return window.addEventListener("blur",y),window.addEventListener("resize",y),()=>{window.removeEventListener("blur",y),window.removeEventListener("resize",y)}},[o]);const b=Oe(t,y=>l.onContentChange(y),m.setFloating);return Zb(),c.jsx(Ui,{allowPinchZoom:!0,children:c.jsx(e9,{asChild:!0,onFocusOutside:y=>{y.preventDefault()},onDismiss:()=>{o(!1)},children:c.jsx(T9,{ref:b,"data-state":l.open?"open":"closed","data-side":v.includes("top")?"top":"bottom",onContextMenu:y=>y.preventDefault(),id:l.contentId,role:"dialog","aria-modal":"true","aria-label":r,style:{left:u,top:h,position:w},hasRadius:!0,background:"neutral0",padding:1,...a})})})}),T9=I(Y)`
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  z-index: ${({theme:e})=>e.zIndices.popover};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${Je.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${Je.slideDownIn};
      }
    }
  }
`,E9="DatePickerCalendar",I9=f.forwardRef(({monthSelectLabel:e,yearSelectLabel:t,...r},a)=>{const{locale:o,timeZone:l,minDate:u,maxDate:h,calendarDate:m,onCalendarDateChange:w}=Er(E9),v=Ew(m),b=f.useMemo(()=>{const O=u.year,N=h.year;return[...Array(N-O+1).keys()].map(z=>(O+z).toString())},[u,h]),y=yn(o,{month:"long"}),S=f.useMemo(()=>[...Array(m.calendar.getMonthsInYear(m)).keys()].map(O=>y.format(m.set({month:O+1}).toDate(l))),[m,y,l]),$=yn(o,{weekday:"short"}),_=f.useMemo(()=>{const O=ou(Wi(l),o);return[...new Array(7).keys()].map(N=>{const W=O.add({days:N}).toDate(l);return $.format(W)})},[l,o,$]),j=O=>{if(typeof O=="number")return;const N=m.set({month:S.indexOf(O)+1});w(N)},L=O=>{if(typeof O=="number")return;const N=m.set({year:parseInt(O,10)});w(N)},T=M9(v,o);return c.jsxs(K,{ref:a,direction:"column",alignItems:"stretch",padding:4,...r,children:[c.jsxs(L9,{justifyContent:"flex-start",paddingBottom:4,paddingLeft:2,paddingRight:2,gap:2,children:[c.jsx(tr,{children:c.jsx(Ii,{"aria-label":e,value:S[m.month-1],onChange:j,children:S.map(O=>c.jsx(Mi,{value:O,children:O},O))})}),c.jsx(tr,{children:c.jsx(Ii,{value:m.year.toString(),"aria-label":t,onChange:L,children:b.map(O=>c.jsx(Mi,{value:O,children:O},O))})})]}),c.jsxs("table",{role:"grid",children:[c.jsx("thead",{"aria-hidden":!0,children:c.jsx("tr",{"aria-rowindex":0,children:_.map((O,N)=>c.jsx(O9,{"aria-colindex":N,children:O},O))})}),c.jsx("tbody",{children:[...new Array(6).keys()].map(O=>c.jsx("tr",{"aria-rowindex":O+2,children:T(O).map((N,z)=>N?c.jsx(V9,{"aria-colindex":z+1,date:N,startDate:v,disabled:u.compare(N)>0||N.compare(h)>0},N.toString()):c.jsx(Td,{"aria-colindex":z+1},z+1))},O))})]})]})}),M9=(e,t)=>r=>{let a=e.add({weeks:r});const o=[];a=ou(a,t);const l=Iw(a,t);for(let u=0;u<l;u++)o.push(null);for(;o.length<7;){o.push(a);const u=a.add({days:1});if(su(a,u))break;a=u}for(;o.length<7;)o.push(null);return o},L9=I(K)`
  div[role='combobox'] {
    border: 1px solid transparent;
    background: transparent;
    font-weight: ${e=>e.theme.fontWeights.bold};

    svg {
      fill: ${({theme:e})=>e.colors.neutral500};
    }

    &:hover {
      background-color: ${({theme:e})=>e.colors.neutral100};
    }
  }
`,O9=f.forwardRef(({children:e,...t},r)=>c.jsx(B9,{tag:"th",role:"gridcell",ref:r,...t,height:"2.4rem",width:"3.2rem",children:c.jsx(ae,{variant:"pi",fontWeight:"bold",color:"neutral800",children:e.slice(0,2)})})),B9=I(Y)`
  border-radius: ${({theme:e})=>e.borderRadius};
  text-transform: capitalize;
`,D9="DatePickerCalendarCell",V9=f.forwardRef(({date:e,startDate:t,disabled:r,...a},o)=>{const{timeZone:l,locale:u,calendarDate:h,onValueChange:m,onOpenChange:w,onTextValueChange:v,onCalendarDateChange:b}=Er(D9),y=su(h,e),S=yn(u,{weekday:"long",day:"numeric",month:"long",year:"numeric"}),$=f.useMemo(()=>S.format(e.toDate(l)),[S,e,l]),_=yn(u,{day:"numeric",calendar:e.calendar.identifier}),j=f.useMemo(()=>_.formatToParts(e.toDate(l)).find(z=>z.type==="day").value,[_,e,l]),L=yn(u,{day:"2-digit",month:"2-digit",year:"numeric"}),T=Mw(t),O=e.compare(t)<0||e.compare(T)>0;let N="neutral900";return y?N="primary600":O&&(N="neutral600"),c.jsx(Td,{tag:"td",role:"gridcell",ref:o,"aria-selected":y,...a,hasRadius:!0,"aria-label":$,tabIndex:y?0:-1,background:y?"primary100":"neutral0",cursor:"pointer",onPointerDown:Xn(a.onPointerDown,z=>{z.preventDefault(),b(e),m(e),v(L.format(e.toDate(l))),w(!1)}),"aria-disabled":r,children:c.jsx(ae,{variant:"pi",textColor:N,children:j})})}),Td=I(Y)`
  text-align: center;
  padding: 0.7rem;
  // Trick to prevent the outline from overflowing because of the general outline-offset
  outline-offset: -2px !important;
  &[aria-disabled='true'] {
    pointer-events: none;
    opacity: 0.5;
  }

  &[aria-disabled='false'] {
    &:hover {
      background: ${({theme:e})=>e.colors.primary100};
      color: ${({theme:e})=>e.colors.primary600};
    }
  }
`,Qn=e=>{const t=e.toISOString(),r=au(t,"UTC");return iu(r)},di=e=>!!e.match(/^[^a-zA-Z]*$/),Ed=f.forwardRef(({step:e=15,value:t,defaultValue:r,onChange:a,...o},l)=>{const u=Ms("TimePicker"),[h,m]=f.useState(""),[w,v]=an({prop:t,defaultProp:r,onChange:a}),b=yn(u.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}),y=f.useMemo(()=>{const T=b.formatToParts(new Date),{value:O}=T.find(N=>N.type==="literal");return O},[b]),S=f.useMemo(()=>{const T=60/e;return[...Array(24).keys()].flatMap(O=>[...Array(T).keys()].map(N=>b.format(new Date(0,0,0,O,N*e))))},[e,b]),$=T=>{(!T||di(T))&&m(T)},_=T=>{const[O,N]=T.split(y);if(!O&&!N)return;const z=Number(O??"0"),W=Number(N??"0");if(!(z>23||W>59))return b.format(new Date(0,0,0,z,W))},j=T=>{const O=_(T.target.value);O?(m(O),v(O)):m(w)},L=T=>{if(typeof T<"u"){const O=_(T);v(O)}else v(T)};return f.useEffect(()=>{const T=typeof t>"u"?"":t;di(T)&&m(T)},[t,m]),c.jsx(Nb,{...o,ref:l,value:w,onChange:L,isPrintableCharacter:di,allowCustomValue:!0,placeholder:`--${y}--`,autocomplete:"none",startIcon:c.jsx(v4,{fill:"neutral500"}),inputMode:"numeric",pattern:`\\d{2}\\${y}\\d{2}`,textValue:h,onTextValueChange:$,onBlur:j,children:S.map(T=>c.jsx(qb,{value:T,children:T},T))})}),N9=I(Ad)`
  flex: 1 1 70%;
  min-width: 120px;
`,H9=I(Ed)`
  flex: 1 1 30%;
  min-width: 140px;
`,k9=f.forwardRef(({clearLabel:e="clear",dateLabel:t="Choose date",timeLabel:r="Choose time",disabled:a=!1,hasError:o,onChange:l,onClear:u,required:h=!1,step:m,value:w,initialDate:v,size:b,...y},S)=>{const $=f.useRef(null),[_,j]=an({defaultProp:v?Zr(v,!1):void 0,prop:w?Zr(w,!1):w??void 0,onChange(P){l&&l(P?.toDate(ms()))}}),L=Ms("DateTimePicker"),T=yn(L.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}),O=_?T.format(_.toDate(ms())):"",N=P=>{let se=P?Zr(P):void 0;if(!(se&&_&&se.compare(_)===0)){if(O&&se){const[Re,ve]=O.split(":");se=se.set({hour:parseInt(Re,10),minute:parseInt(ve,10)})}j(se)}},z=P=>{if(!P)return;const[se,Re]=P.split(":"),ve=_?_.set({hour:parseInt(se,10),minute:parseInt(Re,10)}):Zr(new Date).set({hour:parseInt(se,10),minute:parseInt(Re,10)});j(ve)},W=P=>{j(void 0),u&&u(P)},U=()=>{const P=_?_.set({hour:0,minute:0}):Zr(new Date);j(P)},J=Oe($,S),{error:Z,id:ie,labelNode:$e}=Rt("DateTimePicker"),oe=!!Z||o;return c.jsxs(K,{"aria-labelledby":$e?`${ie}-label`:void 0,role:"group",flex:"1",gap:1,children:[c.jsx(tr,{children:c.jsx(N9,{...y,size:b,value:_?.toDate("UTC"),onChange:N,required:h,onClear:u?W:void 0,clearLabel:`${e} date`,disabled:a,ref:J,"aria-label":t})}),c.jsx(tr,{children:c.jsx(H9,{size:b,hasError:oe,value:O,onChange:z,onClear:u&&O!==void 0&&O!=="00:00"?U:void 0,clearLabel:`${e} time`,required:h,disabled:a,step:m,"aria-label":r})})]})}),Zr=(e,t=!0)=>{const r=e.toISOString();let a=Lw(r);return t&&(a=a.set({hour:0,minute:0})),Ow(a)},F9=f.forwardRef((e,t)=>c.jsx(z9,{ref:t,background:"neutral150",...e,"data-orientation":"horizontal",role:"separator",tag:"div"})),z9=I(Y)`
  height: 1px;
  border: none;
  /* If contained in a Flex parent we want to prevent the Divider to shink */
  flex-shrink: 0;
`,U9=I(Y)`
  svg {
    height: 8.8rem;
  }
`;f.forwardRef(({icon:e,content:t,action:r,hasRadius:a=!0,shadow:o="tableShadow"},l)=>c.jsxs(K,{ref:l,alignItems:"center",direction:"column",padding:11,background:"neutral0",hasRadius:a,shadow:o,children:[e?c.jsx(U9,{paddingBottom:6,"aria-hidden":!0,children:e}):null,c.jsx(Y,{paddingBottom:4,children:c.jsx(ae,{variant:"delta",tag:"p",textAlign:"center",textColor:"neutral600",children:t})}),r]}));const Id=cu.define(),Md=cu.define(),W9=lu.mark({attributes:{style:"background-color: yellow; color: black"}}),q9=Bw.define({create(){return lu.none},update(e,t){return e=e.map(t.changes),t.effects.forEach(r=>{r.is(Id)?e=e.update({add:r.value,sort:!0}):r.is(Md)&&(e=e.update({filter:r.value}))}),e},provide:e=>Dw.decorations.from(e)}),G9=f.forwardRef(({hasError:e,required:t,id:r,value:a="",disabled:o=!1,onChange:l=()=>null,...u},h)=>{const m=f.useRef(),w=f.useRef(),v=f.useRef(),{error:b,...y}=Rt("JsonInput"),S=!!b||e,$=y.id??r,_=y.required||t;let j;b?j=`${$}-error`:y.hint&&(j=`${$}-hint`);const L=Z=>{const ie=w.current?.doc;if(ie){const{text:$e,to:oe}=ie.line(Z),P=oe-$e.trimStart().length;oe>P&&v.current?.dispatch({effects:Id.of([W9.range(P,oe)])})}},T=()=>{const Z=w.current?.doc;if(Z){const ie=Z.length||0;v.current?.dispatch({effects:Md.of(($e,oe)=>oe<=0||$e>=ie)})}},O=({state:Z,view:ie})=>{v.current=ie,w.current=Z,T();const oe=hx()(ie);oe.length&&L(Z.doc.lineAt(oe[0].from).number)},N=(Z,ie)=>{O(ie),l(Z)},z=(Z,ie)=>{v.current=Z,w.current=ie,O({view:Z,state:ie})},{setContainer:W,view:U}=Vw({value:a,onCreateEditor:z,container:m.current,editable:!o,extensions:[Nw(),q9],onChange:N,theme:"dark",basicSetup:{lineNumbers:!0,bracketMatching:!0,closeBrackets:!0,indentOnInput:!0,syntaxHighlighting:!0,highlightSelectionMatches:!0,tabSize:2}}),J=Oe(m,W);return f.useImperativeHandle(h,()=>({...U?.dom,focus(){U&&U.focus()},scrollIntoView(Z){U&&U.dom.scrollIntoView(Z)}}),[U]),c.jsx(K9,{ref:J,$hasError:S,alignItems:"stretch",fontSize:2,hasRadius:!0,"aria-required":_,id:$,"aria-describedby":j,...u})}),K9=I(K)`
  line-height: ${({theme:e})=>e.lineHeights[2]};

  .cm-editor {
    /** 
     * Hard coded since the color is the same between themes,
     * theme.colors.neutral800 changes between themes 
     */
    background-color: #32324d;
    width: 100%;
    outline: none;
  }

  .cm-scroller {
    border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
    /* inputFocusStyle will receive hasError prop */
    ${Hn()}
  }

  .cm-editor,
  .cm-scroller {
    border-radius: ${({theme:e})=>e.borderRadius};
  }

  .cm-gutters,
  .cm-activeLineGutter {
    /** 
     * Hard coded since the color is the same between themes,
     * theme.colors.neutral700 changes between themes 
     */
    background-color: #4a4a6a;
  }
`;xt(({disabled:e,...t},r)=>c.jsx(xs,{ref:r,tag:go,tabIndex:e?-1:void 0,disabled:e,...t}));I(Y)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`;I(Y)`
  text-decoration: none;

  &:focus {
    left: ${({theme:e})=>e.spaces[3]};
    top: ${({theme:e})=>e.spaces[3]};
  }
`;const Y9=(e,t)=>`${e}${Math.floor(t*255).toString(16).padStart(2,"0")}`,Ld=f.forwardRef(({children:e,viewportRef:t,...r},a)=>c.jsxs(J9,{ref:a,...r,children:[c.jsx(Q9,{ref:t,children:e}),c.jsx(b1,{orientation:"vertical",children:c.jsx(y1,{})}),c.jsx(b1,{orientation:"horizontal",children:c.jsx(y1,{})})]})),J9=I(Hw)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
`,Q9=I(kw)`
  min-width: 100%;
  padding-inline: 4px;
`,b1=I(Fw)`
  display: flex;
  /* ensures no selection */
  user-select: none;
  /* disable browser handling of all panning and zooming gestures on touch devices */
  touch-action: none;

  &[data-orientation='vertical'] {
    width: 0.4rem;
  }

  &[data-orientation='horizontal'] {
    flex-direction: column;
    height: 0.4rem;
  }
`,y1=I(zw)`
  position: relative;
  flex: 1;
  background-color: ${e=>e.theme.colors.neutral150};
  border-radius: var(--scrollbar-size);

  /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44px;
    min-height: 44px;
  }
`;f.forwardRef((e,t)=>c.jsx(Uw,{...e,asChild:!0,ref:t}));f.forwardRef((e,t)=>c.jsx(Ww,{children:c.jsx(Z9,{children:c.jsx(X9,{ref:t,...e})})}));const Z9=I(qw)`
  background: ${e=>Y9(e.theme.colors.neutral800,.2)};
  position: fixed;
  inset: 0;
  z-index: ${e=>e.theme.zIndices.overlay};

  @media (prefers-reduced-motion: no-preference) {
    animation: ${Je.overlayFadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,X9=I(Gw)`
  max-width: 83rem;
  max-height: 90vh;
  height: auto;
  width: 60%;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.neutral0};
  box-shadow: ${e=>e.theme.shadows.popupShadow};
  z-index: ${e=>e.theme.zIndices.modal};

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation-duration: ${e=>e.theme.motion.timings[200]};
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};
      animation-name: ${Je.modalPopIn};
    }

    &[data-state='closed'] {
      animation-duration: ${e=>e.theme.motion.timings[120]};
      animation-timing-function: ${e=>e.theme.motion.easings.easeOutQuad};
      animation-name: ${Je.modalPopOut};
    }
  }
`,P9=f.forwardRef((e,t)=>c.jsx(Kw,{...e,asChild:!0,ref:t}));f.forwardRef(({children:e,closeLabel:t="Close modal",...r},a)=>c.jsxs(ey,{ref:a,padding:4,paddingLeft:5,paddingRight:5,background:"neutral100",justifyContent:"space-between",...r,tag:"header",children:[e,c.jsx(P9,{children:c.jsx(Ti,{withTooltip:!1,label:t,children:c.jsx(sr,{})})})]}));const ey=I(K)`
  border-bottom: solid 1px ${e=>e.theme.colors.neutral150};
`;f.forwardRef((e,t)=>c.jsx(Yw,{asChild:!0,children:c.jsx(ae,{tag:"h2",variant:"omega",fontWeight:"bold",ref:t,...e})}));f.forwardRef(({children:e,...t},r)=>c.jsx(ty,{ref:r,...t,children:e}));const ty=I(Ld)`
  padding-inline: ${e=>e.theme.spaces[8]};

  & > div {
    padding-block: ${e=>e.theme.spaces[8]};

    & > div {
      // the scroll area component applies a display: table to the child, which we don't want.
      display: block !important;
    }
  }
`;f.forwardRef((e,t)=>c.jsx(ny,{ref:t,padding:4,paddingLeft:5,paddingRight:5,background:"neutral100",justifyContent:"space-between",...e,tag:"footer"}));const ny=I(K)`
  border-top: solid 1px ${e=>e.theme.colors.neutral150};
  flex: 1;
`,ry="",oy=f.forwardRef(({startAction:e,locale:t,onValueChange:r,value:a,step:o=1,disabled:l=!1,...u},h)=>{const m=Ms("NumberInput"),w=t||m.locale,v=f.useRef(new Jw(w,{style:"decimal"})),b=f.useRef(new Qw(w,{maximumFractionDigits:20})),[y,S]=sy({prop(N){const z=String(a);return isNaN(Number(z))||z!==N&&N!==""?N:b.current.format(Number(a))},defaultProp:ry,onChange(N){const z=v.current.parse(N??"");r(isNaN(z)?void 0:z)}}),$=N=>{S(String(N))},_=({target:{value:N}})=>{v.current.isValidPartialNumber(N)&&$(N)},j=()=>{if(!y){$(o);return}const N=v.current.parse(y),z=isNaN(N)?o:N+o;$(b.current.format(z))},L=()=>{if(!y){$(-o);return}const N=v.current.parse(y),z=isNaN(N)?-o:N-o;$(b.current.format(z))},T=N=>{if(!l)switch(N.key){case ht.DOWN:{N.preventDefault(),L();break}case ht.UP:{N.preventDefault(),j();break}}},O=()=>{if(y){const N=v.current.parse(y),z=isNaN(N)?"":b.current.format(N);$(z)}};return c.jsx(Is,{ref:h,startAction:e,disabled:l,type:"text",inputMode:"decimal",onChange:_,onKeyDown:T,onBlur:O,value:y,endAction:c.jsxs(K,{direction:"column",children:[c.jsx(C1,{disabled:l,"aria-hidden":!0,$reverse:!0,onClick:j,tabIndex:-1,type:"button","data-testid":"ArrowUp",children:c.jsx(Dn,{fill:"neutral500"})}),c.jsx(C1,{disabled:l,"aria-hidden":!0,onClick:L,tabIndex:-1,type:"button","data-testid":"ArrowDown",children:c.jsx(Dn,{fill:"neutral500"})})]}),...u})}),C1=I.button`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(${({$reverse:e})=>e?"-2px":"2px"});
  cursor: ${({disabled:e})=>e?"not-allowed":void 0};
  height: 1.1rem;

  svg {
    width: 1.2rem;
    transform: ${({$reverse:e})=>e?"rotateX(180deg)":void 0};
  }
`;function sy({prop:e,defaultProp:t,onChange:r=()=>{}}){const[a,o]=ed({defaultProp:t,onChange:r}),l=e!==void 0,u=e instanceof Function?e(a):e,h=l?u:a,m=lo(r),w=f.useCallback(v=>{if(l){const y=typeof v=="function"?v(u):v;y!==u&&(m(y),o(v))}else o(v)},[l,u,o,m]);return[h,w]}const ay=f.createContext({activePage:1,pageCount:1}),C0=()=>f.useContext(ay);xt(({children:e,...t},r)=>{const{activePage:a}=C0(),o=a===1;return c.jsxs(Bd,{ref:r,"aria-disabled":o,tabIndex:o?-1:void 0,...t,children:[c.jsx(Tr,{children:e}),c.jsx(qu,{"aria-hidden":!0})]})});xt(({children:e,...t},r)=>{const{activePage:a,pageCount:o}=C0(),l=a===o;return c.jsxs(Bd,{ref:r,"aria-disabled":l,tabIndex:l?-1:void 0,...t,children:[c.jsx(Tr,{children:e}),c.jsx(m0,{"aria-hidden":!0})]})});const Od=I(go)`
  padding: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({$active:e,theme:t})=>e?t.shadows.filterShadow:void 0};
  text-decoration: none;
  display: flex;

  ${js}
`,Bd=I(Od)`
  font-size: 1.1rem;

  svg path {
    fill: ${e=>e["aria-disabled"]?e.theme.colors.neutral300:e.theme.colors.neutral600};
  }

  &:focus,
  &:hover {
    svg path {
      fill: ${e=>e["aria-disabled"]?e.theme.colors.neutral300:e.theme.colors.neutral700};
    }
  }

  ${e=>e["aria-disabled"]?`
  pointer-events: none;
    `:void 0}
`;xt(({number:e,children:t,...r},a)=>{const{activePage:o}=C0(),l=o===e;return c.jsxs(iy,{ref:a,...r,"aria-current":l,$active:l,children:[c.jsx(Tr,{children:t}),c.jsx(ae,{"aria-hidden":!0,fontWeight:l?"bold":void 0,lineHeight:"revert",variant:"pi",children:e})]})});const iy=I(Od)`
  color: ${({theme:e,$active:t})=>t?e.colors.primary700:e.colors.neutral800};
  background: ${({theme:e,$active:t})=>t?e.colors.neutral0:void 0};

  &:hover {
    box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  }
`,cy=gx,ly=f.forwardRef((e,t)=>c.jsx(Zw,{...e,asChild:!0,ref:t})),uy=f.forwardRef((e,t)=>c.jsx(Xw,{children:c.jsx(dy,{sideOffset:4,side:"bottom",align:"start",...e,ref:t})})),dy=I(Pw)`
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  z-index: ${({theme:e})=>e.zIndices.popover};
  background-color: ${e=>e.theme.colors.neutral0};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${Je.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${Je.slideDownIn};
      }
    }

    &[data-state='closed'] {
      animation-timing-function: ${e=>e.theme.motion.easings.easeOutQuad};

      &[data-side='top'] {
        animation-name: ${Je.slideUpOut};
      }

      &[data-side='bottom'] {
        animation-name: ${Je.slideDownOut};
      }
    }
  }
`,fy=f.forwardRef(({children:e,intersectionId:t,onReachEnd:r,...a},o)=>{const l=f.useRef(null),u=Oe(l,o),h=Pt();return mo(l,r??(()=>{}),{selectorToWatch:`#${_r(h)}`,skipWhen:!t||!r}),c.jsxs(hy,{ref:u,...a,children:[e,t&&r&&c.jsx(Y,{id:_r(h),width:"100%",height:"1px"})]})}),hy=I(Ld)`
  height: 20rem;
`,gy=Object.freeze(Object.defineProperty({__proto__:null,Content:uy,Root:cy,ScrollArea:fy,Trigger:ly},Symbol.toStringTag,{value:"Module"}));f.forwardRef(({size:e="M",value:t,...r},a)=>c.jsx(my,{ref:a,$size:e,...r,children:c.jsx(py,{style:{transform:`translate3D(-${100-(t??0)}%, 0, 0)`}})}));const my=I(ex)`
  position: relative;
  overflow: hidden;
  width: ${e=>e.$size==="S"?"7.8rem":"10.2rem"};
  height: ${e=>e.$size==="S"?"0.4rem":"0.8rem"};
  background-color: ${e=>e.theme.colors.neutral600};
  border-radius: ${e=>e.theme.borderRadius};

  /* Fix overflow clipping in Safari */
  /* https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0 */
  transform: translateZ(0);
`,py=I(tx)`
  background-color: ${({theme:e})=>e.colors.neutral0};
  border-radius: ${({theme:e})=>e.borderRadius};
  width: 100%;
  height: 100%;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${e=>e.theme.motion.timings[320]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`;f.forwardRef((e,t)=>c.jsx(wy,{ref:t,...e}));const wy=I(nx)`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spaces[3]};
`;f.forwardRef(({children:e,id:t,...r},a)=>{const o=Pt(t);return c.jsxs(K,{gap:2,children:[c.jsx(xy,{id:o,ref:a,...r,children:c.jsx(vy,{})}),c.jsx(ae,{tag:"label",htmlFor:o,children:e})]})});const xy=I(rx)`
  background: ${e=>e.theme.colors.neutral0};
  width: 2rem;
  height: 2rem;
  flex: 0 0 2rem;
  border-radius: 50%;
  border: 1px solid ${e=>e.theme.colors.neutral300};
  position: relative;
  z-index: 0;

  @media (prefers-reduced-motion: no-preference) {
    transition: border-color ${e=>e.theme.motion.timings[120]}
      ${e=>e.theme.motion.easings.easeOutQuad};
  }

  &[data-state='checked'] {
    border: 1px solid ${e=>e.theme.colors.primary600};
  }

  &[data-disabled] {
    background-color: ${e=>e.theme.colors.neutral200};
  }

  /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44px;
    min-height: 44px;
  }
`,vy=I(ox)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &[data-state='checked'] {
    @media (prefers-reduced-motion: no-preference) {
      animation: ${Je.popIn} ${e=>e.theme.motion.timings[200]};
    }
  }

  &::after {
    content: '';
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: ${e=>e.theme.colors.primary600};
  }
`,by=e=>{const t=e.querySelector('[tabindex="0"]');t&&t.focus()},Dd=f.createContext({rowIndex:0,colIndex:0,setTableValues(){throw new Error("setTableValues must be initialized via the RawTableContext.Provider")}}),yy=()=>f.useContext(Dd),Cy=f.forwardRef(({colCount:e,rowCount:t,jumpStep:r=3,initialCol:a=0,initialRow:o=0,...l},u)=>{const h=f.useRef(null),m=f.useRef(!1),w=Oe(h,u),[v,b]=f.useState(o),[y,S]=f.useState(a),$=f.useCallback(({colIndex:L,rowIndex:T})=>{S(L),b(T)},[]);f.useEffect(()=>{m.current&&by(h.current),m.current||(m.current=!0)},[y,v]);const _=L=>{switch(L.key){case ht.RIGHT:{L.preventDefault(),S(T=>T<e-1?T+1:T);break}case ht.LEFT:{L.preventDefault(),S(T=>T>0?T-1:T);break}case ht.UP:{L.preventDefault(),b(T=>T>0?T-1:T);break}case ht.DOWN:{L.preventDefault(),b(T=>T<t-1?T+1:T);break}case ht.HOME:{L.preventDefault(),L.ctrlKey&&b(0),S(0);break}case ht.END:{L.preventDefault(),L.ctrlKey&&b(t-1),S(e-1);break}case ht.PAGE_DOWN:{L.preventDefault(),b(T=>T+r<t?T+r:t-1);break}case ht.PAGE_UP:{L.preventDefault(),b(T=>T-r>0?T-r:0);break}}},j=f.useMemo(()=>({rowIndex:v,colIndex:y,setTableValues:$}),[y,v,$]);return c.jsx(Dd.Provider,{value:j,children:c.jsx("table",{role:"grid",ref:w,"aria-rowcount":t,"aria-colcount":e,onKeyDown:_,...l})})}),Xr=(e,t)=>[...e.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')].filter(o=>!o.hasAttribute("disabled")),fi=e=>e.filter(t=>t.tagName==="INPUT"?t.type!=="checkbox"&&t.type!=="radio":!1),Vd=f.forwardRef(({coords:e={col:0,row:0},tag:t="td",...r},a)=>{const o=f.useRef(null),l=Oe(a,o),{rowIndex:u,colIndex:h,setTableValues:m}=yy(),[w,v]=f.useState(!1),b=$=>{const _=Xr(o.current);if(_.length===0||_.length===1&&fi(_).length===0)return;if(_.length>1&&!_.find(L=>L.tagName!=="BUTTON")){$.preventDefault();const L=_.findIndex(T=>T===document.activeElement);if($.key===ht.RIGHT){const T=_[L+1];T&&($.stopPropagation(),T.focus())}else if($.key===ht.LEFT){const T=_[L-1];T&&($.stopPropagation(),T.focus())}return}const j=$.key===ht.ENTER;if(j&&!w)v(!0);else if(($.key===ht.ESCAPE||j)&&w){if(j&&document.activeElement?.tagName==="A")return;v(!1),o.current.focus()}else w&&$.stopPropagation()},y=u===e.row-1&&h===e.col-1;jr(()=>{const $=Xr(o.current);$.length===0||$.length===1&&fi($).length!==0||$.length>1&&$.find(_=>_.tagName!=="BUTTON")?(o.current.setAttribute("tabIndex",!w&&y?"0":"-1"),$.forEach((_,j)=>{_.setAttribute("tabIndex",w?"0":"-1"),w&&j===0&&_.focus()})):$.forEach(_=>{_.setAttribute("tabIndex",y?"0":"-1")})},[w,y]);const S=f.useCallback(()=>{const $=Xr(o.current);$.length>=1&&(fi($).length!==0||!$.find(_=>_.tagName!=="BUTTON"))&&v(!0),m({rowIndex:e.row-1,colIndex:e.col-1})},[e,m]);return jr(()=>{const $=o.current;return Xr($).forEach(j=>{j.addEventListener("focus",S)}),()=>{Xr($).forEach(L=>{L.removeEventListener("focus",S)})}},[S]),c.jsx(Y,{role:"gridcell",tag:t,ref:l,onKeyDown:b,...r})}),$y=e=>c.jsx(Vd,{...e,tag:"th"}),Sy=({children:e,...t})=>{const r=f.Children.toArray(e).map(a=>f.isValidElement(a)?f.cloneElement(a,{"aria-rowindex":1}):a);return c.jsx("thead",{...t,children:r})},Ry=({children:e,...t})=>{const r=f.Children.toArray(e).map((a,o)=>f.isValidElement(a)?f.cloneElement(a,{"aria-rowindex":o+2}):a);return c.jsx("tbody",{...t,children:r})},_y=({children:e,...t})=>{const r=f.Children.toArray(e).map((a,o)=>f.isValidElement(a)?f.cloneElement(a,{"aria-colindex":o+1,coords:{col:o+1,row:t["aria-rowindex"]}}):a);return c.jsx(Y,{tag:"tr",...t,children:r})},jy=I(sr)`
  font-size: 0.5rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral400};
  }
`,Nd=I(L7)`
  font-size: 0.8rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral800};
  }
`,Ay=I.div`
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};

  &:focus-within {
    ${Nd} {
      fill: ${({theme:e})=>e.colors.primary600};
    }
  }
`,Ty=I(Is)`
  border: 1px solid transparent;

  &:hover {
    button {
      cursor: pointer;
    }
  }

  ${Hn()}
`;f.forwardRef(({name:e,children:t,value:r="",onClear:a,clearLabel:o,...l},u)=>{const h=f.useRef(null),m=r.length>0,w=b=>{a(b),h.current.focus()},v=od(u,h);return c.jsx(Ay,{children:c.jsxs(tr,{name:e,children:[c.jsx(Tr,{children:c.jsx(b0,{children:t})}),c.jsx(Ty,{ref:v,value:r,startAction:c.jsx(Nd,{"aria-hidden":!0}),endAction:m?c.jsx(xd,{label:o,onClick:w,onMouseDown:b=>{b.preventDefault()},children:c.jsx(jy,{})}):void 0,...l})]})})});const Ey=I(Y)`
  display: inline-flex;
  border: none;

  & > svg {
    height: 1.2rem;
    width: 1.2rem;
  }

  & > svg path {
    fill: ${({theme:e,...t})=>t["aria-disabled"]?e.colors.neutral600:e.colors.primary600};
  }

  &:hover {
    cursor: ${({$iconAction:e})=>e?"pointer":"initial"};
  }
`,Iy=({children:e,icon:t,label:r,disabled:a=!1,onClick:o,...l})=>{const u=h=>{a||!o||o(h)};return c.jsxs(K,{inline:!0,background:a?"neutral200":"primary100",color:a?"neutral700":"primary600",paddingLeft:3,paddingRight:1,borderColor:a?"neutral300":"primary200",hasRadius:!0,height:"3.2rem",...l,children:[c.jsx(My,{$disabled:a,variant:"pi",fontWeight:"bold",children:e}),c.jsx(Ey,{tag:"button",disabled:a,"aria-disabled":a,"aria-label":r,padding:2,onClick:u,$iconAction:!!o,children:t})]})},My=I(ae)`
  color: inherit;
  border-right: 1px solid ${({theme:e,$disabled:t})=>t?e.colors.neutral300:e.colors.primary200};
  padding-right: ${({theme:e})=>e.spaces[2]};
`;f.forwardRef(({children:e,clearLabel:t="Clear",customizeContent:r,disabled:a,hasError:o,id:l,name:u,onChange:h,onClear:m,onCloseAutoFocus:w,onReachEnd:v,placeholder:b,required:y,size:S,startIcon:$,value:_,withTags:j,...L},T)=>{const O=f.useRef(null),[N,z]=f.useState(),[W,U]=f.useState(!1),J=be=>{h?h(be):z(be)},Z=be=>()=>{const qe=Array.isArray(_)?_.filter(Ue=>Ue!==be):(N??[]).filter(Ue=>Ue!==be);h?h(qe):z(qe)},ie=be=>{U(be)},$e=Pt(),oe=`intersection-${_r($e)}`;mo(O,be=>{v&&v(be)},{selectorToWatch:`#${oe}`,skipWhen:!W});const se=typeof _<"u"&&_!==null?_:N,Re=be=>be&&typeof be=="object"&&be.value?c.jsx(Iy,{tabIndex:-1,disabled:a,icon:c.jsx(sr,{width:`${14/16}rem`,height:`${14/16}rem`}),onClick:Z(be.value),children:be.textValue},be.value):null,{error:ve,...le}=Rt("MultiSelect"),Ae=!!ve||o,Be=le.id??l,He=le.name??u,pe=le.required??y;let rt;return ve?rt=`${Be}-error`:le.hint&&(rt=`${Be}-hint`),c.jsxs(bd,{onOpenChange:ie,disabled:a,required:pe,onValueChange:J,value:se,...L,multi:!0,children:[c.jsx(yd,{ref:T,id:Be,name:He,"aria-label":L["aria-label"],"aria-describedby":rt??L["aria-describedby"],startIcon:$,hasError:Ae,disabled:a,clearLabel:t,onClear:se?.length?m:void 0,withTags:!!(j&&(se?.length??!1)),size:S,children:c.jsx(Cd,{placeholder:b,textColor:se?.length?"neutral800":"neutral600",children:se?.length?j?Re:r?r(se):void 0:void 0})}),c.jsx($d,{children:c.jsx(Sd,{position:"popper",sideOffset:4,onCloseAutoFocus:w,children:c.jsxs(Rd,{ref:O,children:[e,c.jsx(Y,{id:oe,width:"100%",height:"1px"})]})})})]})});const Ly=f.forwardRef(({value:e,children:t,startIcon:r,...a},o)=>c.jsxs(y0,{ref:o,value:e.toString(),...a,children:[r&&c.jsx(Y,{tag:"span","aria-hidden":!0,children:r}),c.jsx(_d,{children:({isSelected:l,isIntermediate:u})=>c.jsx(Es,{checked:u?"indeterminate":l})}),c.jsx(ae,{children:c.jsx(jd,{children:t})})]}));f.forwardRef(({children:e,label:t,startIcon:r,values:a=[],...o},l)=>c.jsxs(h9,{ref:l,children:[c.jsxs(y0,{value:a,...o,children:[r&&c.jsx(Y,{tag:"span","aria-hidden":!0,children:r}),c.jsx(_d,{children:({isSelected:u,isIntermediate:h})=>c.jsx(Es,{checked:h?"indeterminate":u})}),c.jsx(ae,{children:t})]}),e]}));I(Ly)`
  padding-left: ${({theme:e})=>e.spaces[7]};
`;const Oy="23.2rem";f.forwardRef(({...e},t)=>c.jsx(By,{ref:t,...e,tag:"nav"}));const By=I(Y)`
  width: ${Oy};
  background: ${({theme:e})=>e.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
  z-index: 1;
`;I(F9)`
  width: 2.4rem;
  background-color: ${({theme:e})=>e.colors.neutral200};
`;xt(({active:e,children:t,icon:r=null,withBullet:a=!1,isSubSectionChild:o=!1,...l},u)=>c.jsxs(Dy,{background:"neutral100",paddingLeft:o?9:7,paddingBottom:2,paddingTop:2,ref:u,...l,children:[c.jsxs(K,{children:[r?c.jsx(Vy,{children:r}):c.jsx(Li,{$active:e}),c.jsx(ae,{paddingLeft:2,children:t})]}),a&&c.jsx(K,{paddingRight:4,children:c.jsx(Li,{$active:!0})})]}));const Li=I.span`
  width: 0.4rem;
  height: 0.4rem;
  background-color: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.neutral600};
  border-radius: 50%;
`,Dy=I(go)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:e})=>e.colors.neutral800};
  svg > * {
    fill: ${({theme:e})=>e.colors.neutral600};
  }

  &.active {
    ${({theme:e})=>ce`
        background-color: ${e.colors.primary100};
        border-right: 2px solid ${e.colors.primary600};
        color: ${e.colors.primary700};
        font-weight: 500;
      `}

    ${Li} {
      background-color: ${({theme:e})=>e.colors.primary600};
    }
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,Vy=I.div`
  svg {
    height: 1.6rem;
    width: 1.6rem;
  }
`;I.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`;I(Y)`
  & > svg {
    height: 0.4rem;
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`;f.forwardRef(({visibleLabels:e,onLabel:t="On",offLabel:r="Off",onCheckedChange:a,checked:o,defaultChecked:l,disabled:u,...h},m)=>{const[w,v]=an({prop:o,defaultProp:l}),b=y=>{v(y)};return c.jsxs(K,{gap:3,children:[c.jsx(Ny,{ref:m,onCheckedChange:Xn(a,b),checked:w,disabled:u,...h,children:c.jsx(Hy,{})}),e?c.jsx(ky,{"aria-hidden":!0,"data-disabled":u,"data-state":w?"checked":"unchecked",children:w?t:r}):null]})});const Ny=I(sx)`
  width: 4rem;
  height: 2.4rem;
  border-radius: 1.2rem;
  background-color: ${({theme:e})=>e.colors.danger500};

  &[data-state='checked'] {
    background-color: ${({theme:e})=>e.colors.success500};
  }

  &[data-disabled] {
    background-color: ${({theme:e})=>e.colors.neutral300};
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.backgroundColor};
  }
`,Hy=I(ax)`
  display: block;
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.neutral0};
  transform: translateX(4px);

  &[data-state='checked'] {
    transform: translateX(20px);
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${e=>e.theme.motion.timings[120]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,ky=I(ae)`
  color: ${e=>e.theme.colors.danger600};

  &[data-state='checked'] {
    color: ${e=>e.theme.colors.success600};
  }

  &[data-disabled='true'] {
    color: ${({theme:e})=>e.colors.neutral500};
  }
`,[Fy,$0]=ho("Tabs");f.forwardRef(({disabled:e=!1,variant:t="regular",hasError:r,...a},o)=>c.jsx(Fy,{disabled:e,hasError:r,variant:t,children:c.jsx(zy,{ref:o,...a})}));const zy=I(ix)`
  width: 100%;
  position: relative;
`;f.forwardRef((e,t)=>{const{variant:r}=$0("List");return c.jsx(Uy,{ref:t,...e,$variant:r})});const Uy=I(cx)`
  display: flex;
  align-items: ${e=>e.$variant==="regular"?"flex-end":"unset"};
  position: relative;
  z-index: 0;
`;f.forwardRef(({children:e,disabled:t,...r},a)=>{const{disabled:o,variant:l,hasError:u}=$0("Trigger"),h=o===!0||o===r.value||t,m=u===r.value;return c.jsxs(Wy,{ref:a,...r,$hasError:m,$variant:l,disabled:h,children:[c.jsx(kd,{fontWeight:"bold",variant:l==="simple"?"sigma":void 0,children:e}),l==="simple"?c.jsx(Hd,{}):null]})});const Hd=I.span`
  display: block;
  width: 100%;
  background-color: currentColor;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  height: 0.2rem;
`,kd=I(ae)``,Wy=I(lx)`
  position: relative;
  color: ${e=>e.$hasError?e.theme.colors.danger600:e.theme.colors.neutral600};
  cursor: pointer;
  z-index: 0;

  ${e=>e.$variant==="simple"?ce`
        padding-block: ${t=>t.theme.spaces[4]};
        padding-inline: ${t=>t.theme.spaces[4]};

        & > ${kd} {
          line-height: 1.2rem;
        }

        &[data-state='active'] {
          color: ${e.$hasError?e.theme.colors.danger600:e.theme.colors.primary700};

          & > ${Hd} {
            opacity: 1;
          }
        }
      `:ce`
        padding-block: ${t=>t.theme.spaces[3]};
        padding-inline: ${t=>t.theme.spaces[3]};
        flex: 1;
        background-color: ${t=>t.theme.colors.neutral100};
        border-bottom: solid 1px ${t=>t.theme.colors.neutral150};

        &:not([data-state='active']) + &:not([data-state='active']) {
          border-left: solid 1px ${t=>t.theme.colors.neutral150};
        }

        &[data-state='active'] {
          padding-block: ${t=>t.theme.spaces[4]};
          padding-inline: ${t=>t.theme.spaces[4]};
          color: ${e.$hasError?e.theme.colors.danger600:e.theme.colors.primary700};
          border-top-right-radius: ${t=>t.theme.borderRadius};
          border-top-left-radius: ${t=>t.theme.borderRadius};
          background-color: ${t=>t.theme.colors.neutral0};
          border-bottom: solid 1px ${t=>t.theme.colors.neutral0};
          box-shadow: ${e.theme.shadows.tableShadow};
          z-index: 1;
        }
      `}

  &[data-disabled] {
    cursor: not-allowed;
    color: ${e=>e.theme.colors.neutral400};
  }
`;f.forwardRef((e,t)=>{const{variant:r}=$0("Content");return c.jsx(qy,{$variant:r,ref:t,...e})});const qy=I(ux)`
  ${e=>e.$variant==="simple"?ce``:ce`
        position: relative;
        z-index: 1;
        background-color: ${t=>t.theme.colors.neutral0};
      `}
`,Gy=I(Y)`
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Ky=I(Cy)`
  width: 100%;
  white-space: nowrap;
`,Yy=I(Y)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({$overflowing:e})=>e==="both"||e==="left"?"''":void 0};
    box-shadow: ${({theme:e})=>e.shadows.tableShadow};
    width: ${({theme:e})=>e.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({$overflowing:e})=>e==="both"||e==="right"?"''":void 0};
    box-shadow: ${({theme:e})=>e.shadows.tableShadow};
    width: ${({theme:e})=>e.spaces[2]};
    right: 0;
    top: 0;
  }
`,Jy=I(Y)`
  overflow-x: auto;
`;f.forwardRef(({footer:e,...t},r)=>{const a=f.useRef(null),[o,l]=f.useState(),u=h=>{const m=h.target.scrollWidth-h.target.clientWidth;if(h.target.scrollLeft===0){l("right");return}if(h.target.scrollLeft===m){l("left");return}h.target.scrollLeft>0&&l("both")};return f.useEffect(()=>{a.current.scrollWidth>a.current.clientWidth&&l("right")},[]),c.jsxs(Gy,{shadow:"tableShadow",hasRadius:!0,background:"neutral0",children:[c.jsx(Yy,{$overflowing:o,position:"relative",children:c.jsx(Jy,{ref:a,onScroll:u,paddingLeft:6,paddingRight:6,children:c.jsx(Ky,{ref:r,...t})})}),e]})});I(Ry)`
  & tr:last-of-type {
    border-bottom: none;
  }
`;I(Sy)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`;I(_y)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};

  & td,
  & th {
    padding: ${({theme:e})=>e.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({theme:e})=>e.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: 5.6rem;
  }
`;const Fd=I(Vd)`
  vertical-align: middle;
  text-align: left;
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`;f.forwardRef(({children:e,action:t,...r},a)=>c.jsx(Fd,{color:"neutral600",as:$y,ref:a,...r,children:c.jsxs(K,{children:[e,t]})}));f.forwardRef(({children:e,...t},r)=>c.jsx(Fd,{color:"neutral800",ref:r,...t,children:e}));I(Y)`
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 1rem;
    width: 1rem;
  }

  svg path {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`;I(Y)`
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
  display: block;
  width: 100%;
  border: none;
`;xt(({children:e,startIcon:t,endIcon:r,disabled:a=!1,loading:o=!1,...l},u)=>{const h=a||o;return c.jsxs(Xy,{ref:u,disabled:h,"aria-disabled":h,tag:"button",type:"button",gap:2,...l,children:[o?c.jsx(Zy,{"aria-hidden":!0,children:c.jsx(Gu,{})}):t,c.jsx(ae,{variant:"pi",children:e}),r]})});const Qy=ft`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,Zy=I.span`
  display: flex;
  animation: ${Qy} 2s infinite linear;
  will-change: transform;
`,Xy=I(K)`
  border: none;
  background-color: transparent;
  color: ${e=>e.theme.colors.primary600};
  cursor: pointer;

  &[aria-disabled='true'] {
    pointer-events: none;
    color: ${e=>e.theme.colors.neutral600};
  }

  ${js}
`,xo=f.forwardRef((e,t)=>c.jsx(Is,{ref:t,...e}));xo.displayName="TextInput";const Py=f.forwardRef(({disabled:e,hasError:t,id:r,name:a,required:o,...l},u)=>{const{error:h,...m}=Rt("Textarea"),w=!!h||t,v=m.id??r,b=m.name??a,y=m.required||o;let S;return h?S=`${v}-error`:m.hint&&(S=`${v}-hint`),c.jsx(eC,{borderColor:w?"danger600":"neutral200",$hasError:w,hasRadius:!0,children:c.jsx(tC,{"aria-invalid":w,"aria-required":y,tag:"textarea",background:e?"neutral150":"neutral0",color:e?"neutral600":"neutral800",disabled:e,fontSize:2,hasRadius:!0,ref:u,lineHeight:4,padding:4,width:"100%",height:"100%",id:v,name:b,"aria-describedby":S,...l})})}),eC=I(Y)`
  height: 10.5rem;
  ${Hn()}
`,tC=I(Y)`
  border: none;
  resize: none;

  ::placeholder {
    color: ${({theme:e})=>e.colors.neutral500};
    font-size: ${({theme:e})=>e.fontSizes[2]};
    color: ${({theme:e})=>e.colors.neutral500};
    opacity: 1;
  }

  &:focus-within {
    outline: none;
  }
`,nC=f.forwardRef(({offLabel:e,onLabel:t,disabled:r,hasError:a,required:o,id:l,name:u,checked:h,onChange:m,...w},v)=>{const[b=!1,y]=an({prop:h}),S=b!==null&&!b,{error:$,..._}=Rt("Toggle"),j=!!$||a,L=_.id??l,T=_.name??u,O=_.required||o;let N;return $?N=`${L}-error`:_.hint&&(N=`${L}-hint`),c.jsxs(rC,{position:"relative",hasRadius:!0,padding:1,background:r?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral200",wrap:"wrap",cursor:r?"not-allowed":"pointer",$hasError:j,children:[c.jsx($1,{hasRadius:!0,flex:"1 1 50%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,justifyContent:"center",background:r&&S?"neutral200":S?"neutral0":"transparent",borderColor:r&&S?"neutral300":S?"neutral200":r?"neutral150":"neutral100",children:c.jsx(ae,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:r?"neutral700":S?"danger700":"neutral600",children:e})}),c.jsx($1,{hasRadius:!0,flex:"1 1 50%",paddingLeft:3,paddingRight:3,justifyContent:"center",background:r&&b?"neutral200":b?"neutral0":"transparent",borderColor:r&&b?"neutral300":b?"neutral200":r?"neutral150":"neutral100",children:c.jsx(ae,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:r?"neutral700":b?"primary600":"neutral600",children:t})}),c.jsx(oC,{...w,id:L,name:T,ref:v,onChange:z=>{y(z.currentTarget.checked),m?.(z)},type:"checkbox","aria-required":O,disabled:r,"aria-disabled":r,checked:!!b,"aria-describedby":N})]})}),rC=I(K)`
  ${Hn()}
`,$1=I(K)`
  padding-block: 0.6rem;
`,oC=I.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 0;
  width: 100%;
`;xt((e,t)=>{const{gap:r=0,gridCols:a=12,...o}=e;return c.jsx(sC,{ref:t,$gap:r,$gridCols:a,...o})});const sC=I(Y)`
  display: grid;
  grid-template-columns: repeat(${({$gridCols:e})=>e}, 1fr);
  ${({theme:e,$gap:t})=>_s({gap:t},e)}
`;xt(({col:e,s:t,xs:r,m:a,...o},l)=>c.jsx(aC,{ref:l,$col:e,$s:t,$xs:r,$m:a,...o}));const aC=I(K)`
  grid-column: span ${({$xs:e})=>e??12};
  max-width: 100%;

  ${({theme:e})=>e.breakpoints.small} {
    grid-column: span ${({$s:e,$xs:t})=>e??t??12};
  }

  ${({theme:e})=>e.breakpoints.medium} {
    grid-column: span ${({$m:e,$s:t,$xs:r})=>e??t??r??12};
  }

  ${({theme:e})=>e.breakpoints.large} {
    grid-column: span ${({$col:e,$m:t,$s:r,$xs:a})=>e??t??r??a??12};
  }
`,S1={TOKEN:"jwtToken"};class so extends Error{name;message;response;code;status;constructor(t,r){super(t),this.name="FetchError",this.message=t,this.response=r,this.code=r?.data?.error?.status,this.status=r?.data?.error?.status,Error.captureStackTrace&&Error.captureStackTrace(this,so)}}const iC=e=>e instanceof so,cC=()=>JSON.parse(localStorage.getItem(S1.TOKEN)??sessionStorage.getItem(S1.TOKEN)??'""'),lC=(e={})=>{const t=window.strapi.backendURL,r={Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${cC()}`},a=y=>y instanceof FormData,o=y=>y.charAt(0)!=="/"?`/${y}`:y,l=y=>new RegExp("^(?:[a-z+]+:)?//","i").test(y),u=y=>l(y)?y:o(y),h=async(y,S)=>{try{const $=await y.json();if(!y.ok&&$.error&&!S?.(y.status))throw new so($.error.message,{data:$});if(!y.ok&&!S?.(y.status))throw new so("Unknown Server Error");return{data:$}}catch($){if($ instanceof SyntaxError&&y.ok)return{data:[],status:y.status};throw $}},m=y=>S=>{if(y){const $=wx.stringify(y,{encode:!1});return`${S}?${$}`}return S},w=y=>`${t}${y}`,v=y=>px(u,w,m(y?.params));return{get:async(y,S)=>{const $=new Headers({...r,...S?.headers}),_=v(S),j=await fetch(_(y),{signal:S?.signal??e.signal,method:"GET",headers:$});return h(j,S?.validateStatus)},post:async(y,S,$)=>{const _=new Headers({...r,...$?.headers}),j=v($);a(S)&&_.delete("Content-Type");const L=await fetch(j(y),{signal:$?.signal??e.signal,method:"POST",headers:_,body:a(S)?S:JSON.stringify(S)});return h(L,$?.validateStatus)},put:async(y,S,$)=>{const _=new Headers({...r,...$?.headers}),j=v($);a(S)&&_.delete("Content-Type");const L=await fetch(j(y),{signal:$?.signal??e.signal,method:"PUT",headers:_,body:a(S)?S:JSON.stringify(S)});return h(L,$?.validateStatus)},del:async(y,S)=>{const $=new Headers({...r,...S?.headers}),_=v(S),j=await fetch(_(y),{signal:S?.signal??e.signal,method:"DELETE",headers:$});return h(j,S?.validateStatus)}}},uC=()=>async(e,{signal:t})=>{try{const{get:r,post:a,del:o,put:l}=lC();if(typeof e=="string")return{data:(await r(e,{signal:t})).data};{const{url:u,method:h="GET",data:m,config:w}=e;return h==="POST"?{data:(await a(u,m,{...w,signal:t})).data}:h==="DELETE"?{data:(await o(u,{...w,signal:t})).data}:h==="PUT"?{data:(await l(u,m,{...w,signal:t})).data}:{data:(await r(u,{...w,signal:t})).data}}}catch(r){if(iC(r))return typeof r.response?.data=="object"&&r.response?.data!==null&&"error"in r.response?.data?{data:void 0,error:r.response?.data.error}:{data:void 0,error:{name:"UnknownError",message:r.message,details:r.response,status:r.status}};const a=r;return{data:void 0,error:{name:a.name,message:a.message,stack:a.stack}}}},ao=mx({reducerPath:"adminApi",baseQuery:uC(),tagTypes:[],endpoints:()=>({})}),R1=e=>e&&e.startsWith("/")?`${window.strapi.backendURL}${e}`:e,dC=ao.enhanceEndpoints({addTagTypes:["ProjectSettings","LicenseLimits"]}).injectEndpoints({endpoints:e=>({init:e.query({query:()=>({url:"/admin/init",method:"GET"}),transformResponse(t){return t.data}}),information:e.query({query:()=>({url:"/admin/information",method:"GET"}),transformResponse(t){return t.data}}),telemetryProperties:e.query({query:()=>({url:"/admin/telemetry-properties",method:"GET",config:{validateStatus:t=>t<500}}),transformResponse(t){return t.data}}),projectSettings:e.query({query:()=>({url:"/admin/project-settings",method:"GET"}),providesTags:["ProjectSettings"],transformResponse(t){return{authLogo:t.authLogo?{name:t.authLogo.name,url:R1(t.authLogo.url)}:void 0,menuLogo:t.menuLogo?{name:t.menuLogo.name,url:R1(t.menuLogo.url)}:void 0}}}),updateProjectSettings:e.mutation({query:t=>({url:"/admin/project-settings",method:"POST",data:t,config:{headers:{"Content-Type":"multipart/form-data"}}}),invalidatesTags:["ProjectSettings"]}),getPlugins:e.query({query:()=>({url:"/admin/plugins",method:"GET"})}),getLicenseLimits:e.query({query:()=>({url:"/admin/license-limit-information",method:"GET"}),providesTags:["LicenseLimits"]})}),overrideExisting:!1}),{useInitQuery:zS,useTelemetryPropertiesQuery:US,useInformationQuery:WS,useProjectSettingsQuery:qS,useUpdateProjectSettingsMutation:GS,useGetPluginsQuery:KS,useGetLicenseLimitsQuery:YS}=dC;function zd(e,t){return function(){return e.apply(t,arguments)}}const{toString:fC}=Object.prototype,{getPrototypeOf:S0}=Object,Ls=(e=>t=>{const r=fC.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),en=e=>(e=e.toLowerCase(),t=>Ls(t)===e),Os=e=>t=>typeof t===e,{isArray:Ir}=Array,io=Os("undefined");function hC(e){return e!==null&&!io(e)&&e.constructor!==null&&!io(e.constructor)&&Mt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ud=en("ArrayBuffer");function gC(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ud(e.buffer),t}const mC=Os("string"),Mt=Os("function"),Wd=Os("number"),Bs=e=>e!==null&&typeof e=="object",pC=e=>e===!0||e===!1,fs=e=>{if(Ls(e)!=="object")return!1;const t=S0(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},wC=en("Date"),xC=en("File"),vC=en("Blob"),bC=en("FileList"),yC=e=>Bs(e)&&Mt(e.pipe),CC=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Mt(e.append)&&((t=Ls(e))==="formdata"||t==="object"&&Mt(e.toString)&&e.toString()==="[object FormData]"))},$C=en("URLSearchParams"),[SC,RC,_C,jC]=["ReadableStream","Request","Response","Headers"].map(en),AC=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function vo(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let a,o;if(typeof e!="object"&&(e=[e]),Ir(e))for(a=0,o=e.length;a<o;a++)t.call(null,e[a],a,e);else{const l=r?Object.getOwnPropertyNames(e):Object.keys(e),u=l.length;let h;for(a=0;a<u;a++)h=l[a],t.call(null,e[h],h,e)}}function qd(e,t){t=t.toLowerCase();const r=Object.keys(e);let a=r.length,o;for(;a-- >0;)if(o=r[a],t===o.toLowerCase())return o;return null}const Zn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Gd=e=>!io(e)&&e!==Zn;function Oi(){const{caseless:e}=Gd(this)&&this||{},t={},r=(a,o)=>{const l=e&&qd(t,o)||o;fs(t[l])&&fs(a)?t[l]=Oi(t[l],a):fs(a)?t[l]=Oi({},a):Ir(a)?t[l]=a.slice():t[l]=a};for(let a=0,o=arguments.length;a<o;a++)arguments[a]&&vo(arguments[a],r);return t}const TC=(e,t,r,{allOwnKeys:a}={})=>(vo(t,(o,l)=>{r&&Mt(o)?e[l]=zd(o,r):e[l]=o},{allOwnKeys:a}),e),EC=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),IC=(e,t,r,a)=>{e.prototype=Object.create(t.prototype,a),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},MC=(e,t,r,a)=>{let o,l,u;const h={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),l=o.length;l-- >0;)u=o[l],(!a||a(u,e,t))&&!h[u]&&(t[u]=e[u],h[u]=!0);e=r!==!1&&S0(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},LC=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const a=e.indexOf(t,r);return a!==-1&&a===r},OC=e=>{if(!e)return null;if(Ir(e))return e;let t=e.length;if(!Wd(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},BC=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&S0(Uint8Array)),DC=(e,t)=>{const a=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=a.next())&&!o.done;){const l=o.value;t.call(e,l[0],l[1])}},VC=(e,t)=>{let r;const a=[];for(;(r=e.exec(t))!==null;)a.push(r);return a},NC=en("HTMLFormElement"),HC=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,a,o){return a.toUpperCase()+o}),_1=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),kC=en("RegExp"),Kd=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),a={};vo(r,(o,l)=>{let u;(u=t(o,l,e))!==!1&&(a[l]=u||o)}),Object.defineProperties(e,a)},FC=e=>{Kd(e,(t,r)=>{if(Mt(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const a=e[r];if(Mt(a)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},zC=(e,t)=>{const r={},a=o=>{o.forEach(l=>{r[l]=!0})};return Ir(e)?a(e):a(String(e).split(t)),r},UC=()=>{},WC=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,hi="abcdefghijklmnopqrstuvwxyz",j1="0123456789",Yd={DIGIT:j1,ALPHA:hi,ALPHA_DIGIT:hi+hi.toUpperCase()+j1},qC=(e=16,t=Yd.ALPHA_DIGIT)=>{let r="";const{length:a}=t;for(;e--;)r+=t[Math.random()*a|0];return r};function GC(e){return!!(e&&Mt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const KC=e=>{const t=new Array(10),r=(a,o)=>{if(Bs(a)){if(t.indexOf(a)>=0)return;if(!("toJSON"in a)){t[o]=a;const l=Ir(a)?[]:{};return vo(a,(u,h)=>{const m=r(u,o+1);!io(m)&&(l[h]=m)}),t[o]=void 0,l}}return a};return r(e,0)},YC=en("AsyncFunction"),JC=e=>e&&(Bs(e)||Mt(e))&&Mt(e.then)&&Mt(e.catch),Jd=((e,t)=>e?setImmediate:t?((r,a)=>(Zn.addEventListener("message",({source:o,data:l})=>{o===Zn&&l===r&&a.length&&a.shift()()},!1),o=>{a.push(o),Zn.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",Mt(Zn.postMessage)),QC=typeof queueMicrotask<"u"?queueMicrotask.bind(Zn):typeof process<"u"&&process.nextTick||Jd,D={isArray:Ir,isArrayBuffer:Ud,isBuffer:hC,isFormData:CC,isArrayBufferView:gC,isString:mC,isNumber:Wd,isBoolean:pC,isObject:Bs,isPlainObject:fs,isReadableStream:SC,isRequest:RC,isResponse:_C,isHeaders:jC,isUndefined:io,isDate:wC,isFile:xC,isBlob:vC,isRegExp:kC,isFunction:Mt,isStream:yC,isURLSearchParams:$C,isTypedArray:BC,isFileList:bC,forEach:vo,merge:Oi,extend:TC,trim:AC,stripBOM:EC,inherits:IC,toFlatObject:MC,kindOf:Ls,kindOfTest:en,endsWith:LC,toArray:OC,forEachEntry:DC,matchAll:VC,isHTMLForm:NC,hasOwnProperty:_1,hasOwnProp:_1,reduceDescriptors:Kd,freezeMethods:FC,toObjectSet:zC,toCamelCase:HC,noop:UC,toFiniteNumber:WC,findKey:qd,global:Zn,isContextDefined:Gd,ALPHABET:Yd,generateString:qC,isSpecCompliantForm:GC,toJSONObject:KC,isAsyncFn:YC,isThenable:JC,setImmediate:Jd,asap:QC};function he(e,t,r,a,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),a&&(this.request=a),o&&(this.response=o)}D.inherits(he,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:D.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Qd=he.prototype,Zd={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Zd[e]={value:e}});Object.defineProperties(he,Zd);Object.defineProperty(Qd,"isAxiosError",{value:!0});he.from=(e,t,r,a,o,l)=>{const u=Object.create(Qd);return D.toFlatObject(e,u,function(m){return m!==Error.prototype},h=>h!=="isAxiosError"),he.call(u,e.message,t,r,a,o),u.cause=e,u.name=e.name,l&&Object.assign(u,l),u};const ZC=null;function Bi(e){return D.isPlainObject(e)||D.isArray(e)}function Xd(e){return D.endsWith(e,"[]")?e.slice(0,-2):e}function A1(e,t,r){return e?e.concat(t).map(function(o,l){return o=Xd(o),!r&&l?"["+o+"]":o}).join(r?".":""):t}function XC(e){return D.isArray(e)&&!e.some(Bi)}const PC=D.toFlatObject(D,{},null,function(t){return/^is[A-Z]/.test(t)});function Ds(e,t,r){if(!D.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=D.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,j){return!D.isUndefined(j[_])});const a=r.metaTokens,o=r.visitor||v,l=r.dots,u=r.indexes,m=(r.Blob||typeof Blob<"u"&&Blob)&&D.isSpecCompliantForm(t);if(!D.isFunction(o))throw new TypeError("visitor must be a function");function w($){if($===null)return"";if(D.isDate($))return $.toISOString();if(!m&&D.isBlob($))throw new he("Blob is not supported. Use a Buffer instead.");return D.isArrayBuffer($)||D.isTypedArray($)?m&&typeof Blob=="function"?new Blob([$]):Buffer.from($):$}function v($,_,j){let L=$;if($&&!j&&typeof $=="object"){if(D.endsWith(_,"{}"))_=a?_:_.slice(0,-2),$=JSON.stringify($);else if(D.isArray($)&&XC($)||(D.isFileList($)||D.endsWith(_,"[]"))&&(L=D.toArray($)))return _=Xd(_),L.forEach(function(O,N){!(D.isUndefined(O)||O===null)&&t.append(u===!0?A1([_],N,l):u===null?_:_+"[]",w(O))}),!1}return Bi($)?!0:(t.append(A1(j,_,l),w($)),!1)}const b=[],y=Object.assign(PC,{defaultVisitor:v,convertValue:w,isVisitable:Bi});function S($,_){if(!D.isUndefined($)){if(b.indexOf($)!==-1)throw Error("Circular reference detected in "+_.join("."));b.push($),D.forEach($,function(L,T){(!(D.isUndefined(L)||L===null)&&o.call(t,L,D.isString(T)?T.trim():T,_,y))===!0&&S(L,_?_.concat(T):[T])}),b.pop()}}if(!D.isObject(e))throw new TypeError("data must be an object");return S(e),t}function T1(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(a){return t[a]})}function R0(e,t){this._pairs=[],e&&Ds(e,this,t)}const Pd=R0.prototype;Pd.append=function(t,r){this._pairs.push([t,r])};Pd.toString=function(t){const r=t?function(a){return t.call(this,a,T1)}:T1;return this._pairs.map(function(o){return r(o[0])+"="+r(o[1])},"").join("&")};function e$(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function e2(e,t,r){if(!t)return e;const a=r&&r.encode||e$,o=r&&r.serialize;let l;if(o?l=o(t,r):l=D.isURLSearchParams(t)?t.toString():new R0(t,r).toString(a),l){const u=e.indexOf("#");u!==-1&&(e=e.slice(0,u)),e+=(e.indexOf("?")===-1?"?":"&")+l}return e}class E1{constructor(){this.handlers=[]}use(t,r,a){return this.handlers.push({fulfilled:t,rejected:r,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){D.forEach(this.handlers,function(a){a!==null&&t(a)})}}const t2={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},t$=typeof URLSearchParams<"u"?URLSearchParams:R0,n$=typeof FormData<"u"?FormData:null,r$=typeof Blob<"u"?Blob:null,o$={isBrowser:!0,classes:{URLSearchParams:t$,FormData:n$,Blob:r$},protocols:["http","https","file","blob","url","data"]},_0=typeof window<"u"&&typeof document<"u",s$=(e=>_0&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),a$=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",i$=_0&&window.location.href||"http://localhost",c$=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:_0,hasStandardBrowserEnv:s$,hasStandardBrowserWebWorkerEnv:a$,origin:i$},Symbol.toStringTag,{value:"Module"})),Zt={...c$,...o$};function l$(e,t){return Ds(e,new Zt.classes.URLSearchParams,Object.assign({visitor:function(r,a,o,l){return Zt.isNode&&D.isBuffer(r)?(this.append(a,r.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)}},t))}function u$(e){return D.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function d$(e){const t={},r=Object.keys(e);let a;const o=r.length;let l;for(a=0;a<o;a++)l=r[a],t[l]=e[l];return t}function n2(e){function t(r,a,o,l){let u=r[l++];if(u==="__proto__")return!0;const h=Number.isFinite(+u),m=l>=r.length;return u=!u&&D.isArray(o)?o.length:u,m?(D.hasOwnProp(o,u)?o[u]=[o[u],a]:o[u]=a,!h):((!o[u]||!D.isObject(o[u]))&&(o[u]=[]),t(r,a,o[u],l)&&D.isArray(o[u])&&(o[u]=d$(o[u])),!h)}if(D.isFormData(e)&&D.isFunction(e.entries)){const r={};return D.forEachEntry(e,(a,o)=>{t(u$(a),o,r,0)}),r}return null}function f$(e,t,r){if(D.isString(e))try{return(t||JSON.parse)(e),D.trim(e)}catch(a){if(a.name!=="SyntaxError")throw a}return(r||JSON.stringify)(e)}const bo={transitional:t2,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const a=r.getContentType()||"",o=a.indexOf("application/json")>-1,l=D.isObject(t);if(l&&D.isHTMLForm(t)&&(t=new FormData(t)),D.isFormData(t))return o?JSON.stringify(n2(t)):t;if(D.isArrayBuffer(t)||D.isBuffer(t)||D.isStream(t)||D.isFile(t)||D.isBlob(t)||D.isReadableStream(t))return t;if(D.isArrayBufferView(t))return t.buffer;if(D.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let h;if(l){if(a.indexOf("application/x-www-form-urlencoded")>-1)return l$(t,this.formSerializer).toString();if((h=D.isFileList(t))||a.indexOf("multipart/form-data")>-1){const m=this.env&&this.env.FormData;return Ds(h?{"files[]":t}:t,m&&new m,this.formSerializer)}}return l||o?(r.setContentType("application/json",!1),f$(t)):t}],transformResponse:[function(t){const r=this.transitional||bo.transitional,a=r&&r.forcedJSONParsing,o=this.responseType==="json";if(D.isResponse(t)||D.isReadableStream(t))return t;if(t&&D.isString(t)&&(a&&!this.responseType||o)){const u=!(r&&r.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(h){if(u)throw h.name==="SyntaxError"?he.from(h,he.ERR_BAD_RESPONSE,this,null,this.response):h}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Zt.classes.FormData,Blob:Zt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};D.forEach(["delete","get","head","post","put","patch"],e=>{bo.headers[e]={}});const h$=D.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),g$=e=>{const t={};let r,a,o;return e&&e.split(`
`).forEach(function(u){o=u.indexOf(":"),r=u.substring(0,o).trim().toLowerCase(),a=u.substring(o+1).trim(),!(!r||t[r]&&h$[r])&&(r==="set-cookie"?t[r]?t[r].push(a):t[r]=[a]:t[r]=t[r]?t[r]+", "+a:a)}),t},I1=Symbol("internals");function Pr(e){return e&&String(e).trim().toLowerCase()}function hs(e){return e===!1||e==null?e:D.isArray(e)?e.map(hs):String(e)}function m$(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let a;for(;a=r.exec(e);)t[a[1]]=a[2];return t}const p$=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function gi(e,t,r,a,o){if(D.isFunction(a))return a.call(this,t,r);if(o&&(t=r),!!D.isString(t)){if(D.isString(a))return t.indexOf(a)!==-1;if(D.isRegExp(a))return a.test(t)}}function w$(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,a)=>r.toUpperCase()+a)}function x$(e,t){const r=D.toCamelCase(" "+t);["get","set","has"].forEach(a=>{Object.defineProperty(e,a+r,{value:function(o,l,u){return this[a].call(this,t,o,l,u)},configurable:!0})})}let St=class{constructor(t){t&&this.set(t)}set(t,r,a){const o=this;function l(h,m,w){const v=Pr(m);if(!v)throw new Error("header name must be a non-empty string");const b=D.findKey(o,v);(!b||o[b]===void 0||w===!0||w===void 0&&o[b]!==!1)&&(o[b||m]=hs(h))}const u=(h,m)=>D.forEach(h,(w,v)=>l(w,v,m));if(D.isPlainObject(t)||t instanceof this.constructor)u(t,r);else if(D.isString(t)&&(t=t.trim())&&!p$(t))u(g$(t),r);else if(D.isHeaders(t))for(const[h,m]of t.entries())l(m,h,a);else t!=null&&l(r,t,a);return this}get(t,r){if(t=Pr(t),t){const a=D.findKey(this,t);if(a){const o=this[a];if(!r)return o;if(r===!0)return m$(o);if(D.isFunction(r))return r.call(this,o,a);if(D.isRegExp(r))return r.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=Pr(t),t){const a=D.findKey(this,t);return!!(a&&this[a]!==void 0&&(!r||gi(this,this[a],a,r)))}return!1}delete(t,r){const a=this;let o=!1;function l(u){if(u=Pr(u),u){const h=D.findKey(a,u);h&&(!r||gi(a,a[h],h,r))&&(delete a[h],o=!0)}}return D.isArray(t)?t.forEach(l):l(t),o}clear(t){const r=Object.keys(this);let a=r.length,o=!1;for(;a--;){const l=r[a];(!t||gi(this,this[l],l,t,!0))&&(delete this[l],o=!0)}return o}normalize(t){const r=this,a={};return D.forEach(this,(o,l)=>{const u=D.findKey(a,l);if(u){r[u]=hs(o),delete r[l];return}const h=t?w$(l):String(l).trim();h!==l&&delete r[l],r[h]=hs(o),a[h]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return D.forEach(this,(a,o)=>{a!=null&&a!==!1&&(r[o]=t&&D.isArray(a)?a.join(", "):a)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const a=new this(t);return r.forEach(o=>a.set(o)),a}static accessor(t){const a=(this[I1]=this[I1]={accessors:{}}).accessors,o=this.prototype;function l(u){const h=Pr(u);a[h]||(x$(o,u),a[h]=!0)}return D.isArray(t)?t.forEach(l):l(t),this}};St.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);D.reduceDescriptors(St.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(a){this[r]=a}}});D.freezeMethods(St);function mi(e,t){const r=this||bo,a=t||r,o=St.from(a.headers);let l=a.data;return D.forEach(e,function(h){l=h.call(r,l,o.normalize(),t?t.status:void 0)}),o.normalize(),l}function r2(e){return!!(e&&e.__CANCEL__)}function Mr(e,t,r){he.call(this,e??"canceled",he.ERR_CANCELED,t,r),this.name="CanceledError"}D.inherits(Mr,he,{__CANCEL__:!0});function o2(e,t,r){const a=r.config.validateStatus;!r.status||!a||a(r.status)?e(r):t(new he("Request failed with status code "+r.status,[he.ERR_BAD_REQUEST,he.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function v$(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function b$(e,t){e=e||10;const r=new Array(e),a=new Array(e);let o=0,l=0,u;return t=t!==void 0?t:1e3,function(m){const w=Date.now(),v=a[l];u||(u=w),r[o]=m,a[o]=w;let b=l,y=0;for(;b!==o;)y+=r[b++],b=b%e;if(o=(o+1)%e,o===l&&(l=(l+1)%e),w-u<t)return;const S=v&&w-v;return S?Math.round(y*1e3/S):void 0}}function y$(e,t){let r=0,a=1e3/t,o,l;const u=(w,v=Date.now())=>{r=v,o=null,l&&(clearTimeout(l),l=null),e.apply(null,w)};return[(...w)=>{const v=Date.now(),b=v-r;b>=a?u(w,v):(o=w,l||(l=setTimeout(()=>{l=null,u(o)},a-b)))},()=>o&&u(o)]}const bs=(e,t,r=3)=>{let a=0;const o=b$(50,250);return y$(l=>{const u=l.loaded,h=l.lengthComputable?l.total:void 0,m=u-a,w=o(m),v=u<=h;a=u;const b={loaded:u,total:h,progress:h?u/h:void 0,bytes:m,rate:w||void 0,estimated:w&&h&&v?(h-u)/w:void 0,event:l,lengthComputable:h!=null,[t?"download":"upload"]:!0};e(b)},r)},M1=(e,t)=>{const r=e!=null;return[a=>t[0]({lengthComputable:r,total:e,loaded:a}),t[1]]},L1=e=>(...t)=>D.asap(()=>e(...t)),C$=Zt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let a;function o(l){let u=l;return t&&(r.setAttribute("href",u),u=r.href),r.setAttribute("href",u),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return a=o(window.location.href),function(u){const h=D.isString(u)?o(u):u;return h.protocol===a.protocol&&h.host===a.host}}():function(){return function(){return!0}}(),$$=Zt.hasStandardBrowserEnv?{write(e,t,r,a,o,l){const u=[e+"="+encodeURIComponent(t)];D.isNumber(r)&&u.push("expires="+new Date(r).toGMTString()),D.isString(a)&&u.push("path="+a),D.isString(o)&&u.push("domain="+o),l===!0&&u.push("secure"),document.cookie=u.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function S$(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function R$(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function s2(e,t){return e&&!S$(t)?R$(e,t):t}const O1=e=>e instanceof St?{...e}:e;function nr(e,t){t=t||{};const r={};function a(w,v,b){return D.isPlainObject(w)&&D.isPlainObject(v)?D.merge.call({caseless:b},w,v):D.isPlainObject(v)?D.merge({},v):D.isArray(v)?v.slice():v}function o(w,v,b){if(D.isUndefined(v)){if(!D.isUndefined(w))return a(void 0,w,b)}else return a(w,v,b)}function l(w,v){if(!D.isUndefined(v))return a(void 0,v)}function u(w,v){if(D.isUndefined(v)){if(!D.isUndefined(w))return a(void 0,w)}else return a(void 0,v)}function h(w,v,b){if(b in t)return a(w,v);if(b in e)return a(void 0,w)}const m={url:l,method:l,data:l,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,withXSRFToken:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:h,headers:(w,v)=>o(O1(w),O1(v),!0)};return D.forEach(Object.keys(Object.assign({},e,t)),function(v){const b=m[v]||o,y=b(e[v],t[v],v);D.isUndefined(y)&&b!==h||(r[v]=y)}),r}const a2=e=>{const t=nr({},e);let{data:r,withXSRFToken:a,xsrfHeaderName:o,xsrfCookieName:l,headers:u,auth:h}=t;t.headers=u=St.from(u),t.url=e2(s2(t.baseURL,t.url),e.params,e.paramsSerializer),h&&u.set("Authorization","Basic "+btoa((h.username||"")+":"+(h.password?unescape(encodeURIComponent(h.password)):"")));let m;if(D.isFormData(r)){if(Zt.hasStandardBrowserEnv||Zt.hasStandardBrowserWebWorkerEnv)u.setContentType(void 0);else if((m=u.getContentType())!==!1){const[w,...v]=m?m.split(";").map(b=>b.trim()).filter(Boolean):[];u.setContentType([w||"multipart/form-data",...v].join("; "))}}if(Zt.hasStandardBrowserEnv&&(a&&D.isFunction(a)&&(a=a(t)),a||a!==!1&&C$(t.url))){const w=o&&l&&$$.read(l);w&&u.set(o,w)}return t},_$=typeof XMLHttpRequest<"u",j$=_$&&function(e){return new Promise(function(r,a){const o=a2(e);let l=o.data;const u=St.from(o.headers).normalize();let{responseType:h,onUploadProgress:m,onDownloadProgress:w}=o,v,b,y,S,$;function _(){S&&S(),$&&$(),o.cancelToken&&o.cancelToken.unsubscribe(v),o.signal&&o.signal.removeEventListener("abort",v)}let j=new XMLHttpRequest;j.open(o.method.toUpperCase(),o.url,!0),j.timeout=o.timeout;function L(){if(!j)return;const O=St.from("getAllResponseHeaders"in j&&j.getAllResponseHeaders()),z={data:!h||h==="text"||h==="json"?j.responseText:j.response,status:j.status,statusText:j.statusText,headers:O,config:e,request:j};o2(function(U){r(U),_()},function(U){a(U),_()},z),j=null}"onloadend"in j?j.onloadend=L:j.onreadystatechange=function(){!j||j.readyState!==4||j.status===0&&!(j.responseURL&&j.responseURL.indexOf("file:")===0)||setTimeout(L)},j.onabort=function(){j&&(a(new he("Request aborted",he.ECONNABORTED,e,j)),j=null)},j.onerror=function(){a(new he("Network Error",he.ERR_NETWORK,e,j)),j=null},j.ontimeout=function(){let N=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const z=o.transitional||t2;o.timeoutErrorMessage&&(N=o.timeoutErrorMessage),a(new he(N,z.clarifyTimeoutError?he.ETIMEDOUT:he.ECONNABORTED,e,j)),j=null},l===void 0&&u.setContentType(null),"setRequestHeader"in j&&D.forEach(u.toJSON(),function(N,z){j.setRequestHeader(z,N)}),D.isUndefined(o.withCredentials)||(j.withCredentials=!!o.withCredentials),h&&h!=="json"&&(j.responseType=o.responseType),w&&([y,$]=bs(w,!0),j.addEventListener("progress",y)),m&&j.upload&&([b,S]=bs(m),j.upload.addEventListener("progress",b),j.upload.addEventListener("loadend",S)),(o.cancelToken||o.signal)&&(v=O=>{j&&(a(!O||O.type?new Mr(null,e,j):O),j.abort(),j=null)},o.cancelToken&&o.cancelToken.subscribe(v),o.signal&&(o.signal.aborted?v():o.signal.addEventListener("abort",v)));const T=v$(o.url);if(T&&Zt.protocols.indexOf(T)===-1){a(new he("Unsupported protocol "+T+":",he.ERR_BAD_REQUEST,e));return}j.send(l||null)})},A$=(e,t)=>{let r=new AbortController,a;const o=function(m){if(!a){a=!0,u();const w=m instanceof Error?m:this.reason;r.abort(w instanceof he?w:new Mr(w instanceof Error?w.message:w))}};let l=t&&setTimeout(()=>{o(new he(`timeout ${t} of ms exceeded`,he.ETIMEDOUT))},t);const u=()=>{e&&(l&&clearTimeout(l),l=null,e.forEach(m=>{m&&(m.removeEventListener?m.removeEventListener("abort",o):m.unsubscribe(o))}),e=null)};e.forEach(m=>m&&m.addEventListener&&m.addEventListener("abort",o));const{signal:h}=r;return h.unsubscribe=u,[h,()=>{l&&clearTimeout(l),l=null}]},T$=function*(e,t){let r=e.byteLength;if(r<t){yield e;return}let a=0,o;for(;a<r;)o=a+t,yield e.slice(a,o),a=o},E$=async function*(e,t,r){for await(const a of e)yield*T$(ArrayBuffer.isView(a)?a:await r(String(a)),t)},B1=(e,t,r,a,o)=>{const l=E$(e,t,o);let u=0,h,m=w=>{h||(h=!0,a&&a(w))};return new ReadableStream({async pull(w){try{const{done:v,value:b}=await l.next();if(v){m(),w.close();return}let y=b.byteLength;if(r){let S=u+=y;r(S)}w.enqueue(new Uint8Array(b))}catch(v){throw m(v),v}},cancel(w){return m(w),l.return()}},{highWaterMark:2})},Vs=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",i2=Vs&&typeof ReadableStream=="function",Di=Vs&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),c2=(e,...t)=>{try{return!!e(...t)}catch{return!1}},I$=i2&&c2(()=>{let e=!1;const t=new Request(Zt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),D1=64*1024,Vi=i2&&c2(()=>D.isReadableStream(new Response("").body)),ys={stream:Vi&&(e=>e.body)};Vs&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!ys[t]&&(ys[t]=D.isFunction(e[t])?r=>r[t]():(r,a)=>{throw new he(`Response type '${t}' is not supported`,he.ERR_NOT_SUPPORT,a)})})})(new Response);const M$=async e=>{if(e==null)return 0;if(D.isBlob(e))return e.size;if(D.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(D.isArrayBufferView(e)||D.isArrayBuffer(e))return e.byteLength;if(D.isURLSearchParams(e)&&(e=e+""),D.isString(e))return(await Di(e)).byteLength},L$=async(e,t)=>{const r=D.toFiniteNumber(e.getContentLength());return r??M$(t)},O$=Vs&&(async e=>{let{url:t,method:r,data:a,signal:o,cancelToken:l,timeout:u,onDownloadProgress:h,onUploadProgress:m,responseType:w,headers:v,withCredentials:b="same-origin",fetchOptions:y}=a2(e);w=w?(w+"").toLowerCase():"text";let[S,$]=o||l||u?A$([o,l],u):[],_,j;const L=()=>{!_&&setTimeout(()=>{S&&S.unsubscribe()}),_=!0};let T;try{if(m&&I$&&r!=="get"&&r!=="head"&&(T=await L$(v,a))!==0){let W=new Request(t,{method:"POST",body:a,duplex:"half"}),U;if(D.isFormData(a)&&(U=W.headers.get("content-type"))&&v.setContentType(U),W.body){const[J,Z]=M1(T,bs(L1(m)));a=B1(W.body,D1,J,Z,Di)}}D.isString(b)||(b=b?"include":"omit"),j=new Request(t,{...y,signal:S,method:r.toUpperCase(),headers:v.normalize().toJSON(),body:a,duplex:"half",credentials:b});let O=await fetch(j);const N=Vi&&(w==="stream"||w==="response");if(Vi&&(h||N)){const W={};["status","statusText","headers"].forEach(ie=>{W[ie]=O[ie]});const U=D.toFiniteNumber(O.headers.get("content-length")),[J,Z]=h&&M1(U,bs(L1(h),!0))||[];O=new Response(B1(O.body,D1,J,()=>{Z&&Z(),N&&L()},Di),W)}w=w||"text";let z=await ys[D.findKey(ys,w)||"text"](O,e);return!N&&L(),$&&$(),await new Promise((W,U)=>{o2(W,U,{data:z,headers:St.from(O.headers),status:O.status,statusText:O.statusText,config:e,request:j})})}catch(O){throw L(),O&&O.name==="TypeError"&&/fetch/i.test(O.message)?Object.assign(new he("Network Error",he.ERR_NETWORK,e,j),{cause:O.cause||O}):he.from(O,O&&O.code,e,j)}}),Ni={http:ZC,xhr:j$,fetch:O$};D.forEach(Ni,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const V1=e=>`- ${e}`,B$=e=>D.isFunction(e)||e===null||e===!1,l2={getAdapter:e=>{e=D.isArray(e)?e:[e];const{length:t}=e;let r,a;const o={};for(let l=0;l<t;l++){r=e[l];let u;if(a=r,!B$(r)&&(a=Ni[(u=String(r)).toLowerCase()],a===void 0))throw new he(`Unknown adapter '${u}'`);if(a)break;o[u||"#"+l]=a}if(!a){const l=Object.entries(o).map(([h,m])=>`adapter ${h} `+(m===!1?"is not supported by the environment":"is not available in the build"));let u=t?l.length>1?`since :
`+l.map(V1).join(`
`):" "+V1(l[0]):"as no adapter specified";throw new he("There is no suitable adapter to dispatch the request "+u,"ERR_NOT_SUPPORT")}return a},adapters:Ni};function pi(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Mr(null,e)}function N1(e){return pi(e),e.headers=St.from(e.headers),e.data=mi.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),l2.getAdapter(e.adapter||bo.adapter)(e).then(function(a){return pi(e),a.data=mi.call(e,e.transformResponse,a),a.headers=St.from(a.headers),a},function(a){return r2(a)||(pi(e),a&&a.response&&(a.response.data=mi.call(e,e.transformResponse,a.response),a.response.headers=St.from(a.response.headers))),Promise.reject(a)})}const u2="1.7.4",j0={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{j0[e]=function(a){return typeof a===e||"a"+(t<1?"n ":" ")+e}});const H1={};j0.transitional=function(t,r,a){function o(l,u){return"[Axios v"+u2+"] Transitional option '"+l+"'"+u+(a?". "+a:"")}return(l,u,h)=>{if(t===!1)throw new he(o(u," has been removed"+(r?" in "+r:"")),he.ERR_DEPRECATED);return r&&!H1[u]&&(H1[u]=!0,console.warn(o(u," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(l,u,h):!0}};function D$(e,t,r){if(typeof e!="object")throw new he("options must be an object",he.ERR_BAD_OPTION_VALUE);const a=Object.keys(e);let o=a.length;for(;o-- >0;){const l=a[o],u=t[l];if(u){const h=e[l],m=h===void 0||u(h,l,e);if(m!==!0)throw new he("option "+l+" must be "+m,he.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new he("Unknown option "+l,he.ERR_BAD_OPTION)}}const Hi={assertOptions:D$,validators:j0},On=Hi.validators;let Pn=class{constructor(t){this.defaults=t,this.interceptors={request:new E1,response:new E1}}async request(t,r){try{return await this._request(t,r)}catch(a){if(a instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const l=o.stack?o.stack.replace(/^.+\n/,""):"";try{a.stack?l&&!String(a.stack).endsWith(l.replace(/^.+\n.+\n/,""))&&(a.stack+=`
`+l):a.stack=l}catch{}}throw a}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=nr(this.defaults,r);const{transitional:a,paramsSerializer:o,headers:l}=r;a!==void 0&&Hi.assertOptions(a,{silentJSONParsing:On.transitional(On.boolean),forcedJSONParsing:On.transitional(On.boolean),clarifyTimeoutError:On.transitional(On.boolean)},!1),o!=null&&(D.isFunction(o)?r.paramsSerializer={serialize:o}:Hi.assertOptions(o,{encode:On.function,serialize:On.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let u=l&&D.merge(l.common,l[r.method]);l&&D.forEach(["delete","get","head","post","put","patch","common"],$=>{delete l[$]}),r.headers=St.concat(u,l);const h=[];let m=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(r)===!1||(m=m&&_.synchronous,h.unshift(_.fulfilled,_.rejected))});const w=[];this.interceptors.response.forEach(function(_){w.push(_.fulfilled,_.rejected)});let v,b=0,y;if(!m){const $=[N1.bind(this),void 0];for($.unshift.apply($,h),$.push.apply($,w),y=$.length,v=Promise.resolve(r);b<y;)v=v.then($[b++],$[b++]);return v}y=h.length;let S=r;for(b=0;b<y;){const $=h[b++],_=h[b++];try{S=$(S)}catch(j){_.call(this,j);break}}try{v=N1.call(this,S)}catch($){return Promise.reject($)}for(b=0,y=w.length;b<y;)v=v.then(w[b++],w[b++]);return v}getUri(t){t=nr(this.defaults,t);const r=s2(t.baseURL,t.url);return e2(r,t.params,t.paramsSerializer)}};D.forEach(["delete","get","head","options"],function(t){Pn.prototype[t]=function(r,a){return this.request(nr(a||{},{method:t,url:r,data:(a||{}).data}))}});D.forEach(["post","put","patch"],function(t){function r(a){return function(l,u,h){return this.request(nr(h||{},{method:t,headers:a?{"Content-Type":"multipart/form-data"}:{},url:l,data:u}))}}Pn.prototype[t]=r(),Pn.prototype[t+"Form"]=r(!0)});let V$=class d2{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(l){r=l});const a=this;this.promise.then(o=>{if(!a._listeners)return;let l=a._listeners.length;for(;l-- >0;)a._listeners[l](o);a._listeners=null}),this.promise.then=o=>{let l;const u=new Promise(h=>{a.subscribe(h),l=h}).then(o);return u.cancel=function(){a.unsubscribe(l)},u},t(function(l,u,h){a.reason||(a.reason=new Mr(l,u,h),r(a.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new d2(function(o){t=o}),cancel:t}}};function N$(e){return function(r){return e.apply(null,r)}}function H$(e){return D.isObject(e)&&e.isAxiosError===!0}const ki={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ki).forEach(([e,t])=>{ki[t]=e});function f2(e){const t=new Pn(e),r=zd(Pn.prototype.request,t);return D.extend(r,Pn.prototype,t,{allOwnKeys:!0}),D.extend(r,t,null,{allOwnKeys:!0}),r.create=function(o){return f2(nr(e,o))},r}const Qe=f2(bo);Qe.Axios=Pn;Qe.CanceledError=Mr;Qe.CancelToken=V$;Qe.isCancel=r2;Qe.VERSION=u2;Qe.toFormData=Ds;Qe.AxiosError=he;Qe.Cancel=Qe.CanceledError;Qe.all=function(t){return Promise.all(t)};Qe.spread=N$;Qe.isAxiosError=H$;Qe.mergeConfig=nr;Qe.AxiosHeaders=St;Qe.formToJSON=e=>n2(D.isHTMLForm(e)?new FormData(e):e);Qe.getAdapter=l2.getAdapter;Qe.HttpStatusCode=ki;Qe.default=Qe;const{Axios:ZS,AxiosError:XS,CanceledError:PS,isCancel:eR,CancelToken:tR,VERSION:nR,all:rR,Cancel:oR,isAxiosError:sR,spread:aR,toFormData:iR,AxiosHeaders:cR,HttpStatusCode:lR,formToJSON:uR,getAdapter:dR,mergeConfig:fR}=Qe,gs=Symbol(),k$=Symbol(),h2=typeof window>"u"||/ServerSideRendering/.test(window.navigator&&window.navigator.userAgent)?f.useEffect:f.useLayoutEffect,F$=ii.unstable_runWithPriority?e=>ii.unstable_runWithPriority(ii.unstable_NormalPriority,e):e=>e();function z$(e){const t=f.createContext({[gs]:{v:{current:e},n:{current:-1},l:new Set,u:a=>a()}});var r;return t[k$]=t.Provider,t.Provider=(r=t.Provider,({value:a,children:o})=>{const l=f.useRef(a),u=f.useRef(0),[h,m]=f.useState(null);h&&(h(a),m(null));const w=f.useRef();if(!w.current){const v=new Set,b=(y,S)=>{rr.unstable_batchedUpdates(()=>{u.current+=1;const $={n:u.current};S!=null&&S.suspense&&($.n*=-1,$.p=new Promise(_=>{m(()=>j=>{$.v=j,delete $.p,_(j)})})),v.forEach(_=>_($)),y()})};w.current={[gs]:{v:l,n:u,l:v,u:b}}}return h2(()=>{l.current=a,u.current+=1,F$(()=>{w.current[gs].l.forEach(v=>{v({n:u.current,v:a})})})},[a]),f.createElement(r,{value:w.current},o)}),delete t.Consumer,t}function U$(e,t){const r=f.useContext(e)[gs];if(typeof process=="object"&&!r)throw new Error("useContextSelector requires special context");const{v:{current:a},n:{current:o},l}=r,u=t(a),[h,m]=f.useReducer((w,v)=>{if(!v)return[a,u];if("p"in v)throw v.p;if(v.n===o)return Object.is(w[1],u)?w:[a,u];try{if("v"in v){if(Object.is(w[0],v.v))return w;const b=t(v.v);return Object.is(w[1],b)?w:[v.v,b]}}catch{}return[...w]},[a,u]);return Object.is(h[1],u)||m(),h2(()=>(l.add(m),()=>{l.delete(m)}),[l]),h[1]}function $n(e,t){const r=z$(t),a=l=>{const{children:u,...h}=l,m=f.useMemo(()=>h,Object.values(h));return c.jsx(r.Provider,{value:m,children:u})},o=(l,u)=>U$(r,h=>{if(h)return u(h);throw new Error(`\`${l}\` must be used within \`${e}\``)});return a.displayName=e+"Provider",[a,o]}$n("StrapiApp");const W$=e=>{const{search:t}=du(),r=vx(),a=f.useMemo(()=>{const l=t.startsWith("?")?t.slice(1):t;return!t&&e?e:{...e,...s1.parse(l)}},[t,e]),o=f.useCallback((l,u="push",h=!1)=>{let m={...a};u==="remove"?Object.keys(l).forEach(w=>{Object.prototype.hasOwnProperty.call(m,w)&&delete m[w]}):m={...a,...l},r({search:s1.stringify(m,{encode:!1})},{replace:h})},[r,a]);return[{query:a,rawQuery:t},o]},Cr={TOKEN:"jwtToken",USER:"userInfo"},k1="STRAPI_THEME",q$="strapi-admin-language",G$=xx({name:"admin",initialState:()=>({language:{locale:"en",localeNames:{en:"English"}},permissions:{},theme:{availableThemes:[],currentTheme:localStorage.getItem(k1)||"system"},token:null}),reducers:{setAppTheme(e,t){e.theme.currentTheme=t.payload,window.localStorage.setItem(k1,t.payload)},setAvailableThemes(e,t){e.theme.availableThemes=t.payload},setLocale(e,t){e.language.locale=t.payload,window.localStorage.setItem(q$,t.payload),document.documentElement.setAttribute("lang",t.payload)},setToken(e,t){e.token=t.payload},login(e,t){const{token:r,persist:a}=t.payload;a?window.localStorage.setItem(Cr.TOKEN,JSON.stringify(r)):window.sessionStorage.setItem(Cr.TOKEN,JSON.stringify(r)),e.token=r},logout(e){e.token=null,window.localStorage.removeItem(Cr.TOKEN),window.localStorage.removeItem(Cr.USER),window.sessionStorage.removeItem(Cr.TOKEN),window.sessionStorage.removeItem(Cr.USER)}}}),{setAppTheme:hR,setAvailableThemes:gR,setLocale:mR,setToken:pR,logout:wR,login:xR}=G$.actions,K$=ao.enhanceEndpoints({addTagTypes:["User","Me","ProvidersOptions"]}).injectEndpoints({endpoints:e=>({getMe:e.query({query:()=>({method:"GET",url:"/admin/users/me"}),transformResponse(t){return t.data},providesTags:t=>t?["Me",{type:"User",id:t.id}]:["Me"]}),getMyPermissions:e.query({query:()=>({method:"GET",url:"/admin/users/me/permissions"}),transformResponse(t){return t.data}}),updateMe:e.mutation({query:t=>({method:"PUT",url:"/admin/users/me",data:t}),transformResponse(t){return t.data},invalidatesTags:["Me"]}),checkPermissions:e.query({query:t=>({method:"POST",url:"/admin/permissions/check",data:t})}),login:e.mutation({query:t=>({method:"POST",url:"/admin/login",data:t}),transformResponse(t){return t.data},invalidatesTags:["Me"]}),logout:e.mutation({query:()=>({method:"POST",url:"/admin/logout"})}),resetPassword:e.mutation({query:t=>({method:"POST",url:"/admin/reset-password",data:t}),transformResponse(t){return t.data}}),renewToken:e.mutation({query:t=>({method:"POST",url:"/admin/renew-token",data:t}),transformResponse(t){return t.data}}),getRegistrationInfo:e.query({query:t=>({url:"/admin/registration-info",method:"GET",config:{params:{registrationToken:t}}}),transformResponse(t){return t.data}}),registerAdmin:e.mutation({query:t=>({method:"POST",url:"/admin/register-admin",data:t}),transformResponse(t){return t.data}}),registerUser:e.mutation({query:t=>({method:"POST",url:"/admin/register",data:t}),transformResponse(t){return t.data}}),forgotPassword:e.mutation({query:t=>({url:"/admin/forgot-password",method:"POST",data:t})}),isSSOLocked:e.query({query:()=>({url:"/admin/providers/isSSOLocked",method:"GET"}),transformResponse(t){return t.data}}),getProviders:e.query({query:()=>({url:"/admin/providers",method:"GET"})}),getProviderOptions:e.query({query:()=>({url:"/admin/providers/options",method:"GET"}),transformResponse(t){return t.data},providesTags:["ProvidersOptions"]}),updateProviderOptions:e.mutation({query:t=>({url:"/admin/providers/options",method:"PUT",data:t}),transformResponse(t){return t.data},invalidatesTags:["ProvidersOptions"]})}),overrideExisting:!1}),{useCheckPermissionsQuery:vR,useLazyCheckPermissionsQuery:bR,useGetMeQuery:yR,useLoginMutation:CR,useRenewTokenMutation:$R,useLogoutMutation:SR,useUpdateMeMutation:RR,useResetPasswordMutation:_R,useRegisterAdminMutation:jR,useRegisterUserMutation:AR,useGetRegistrationInfoQuery:TR,useForgotPasswordMutation:ER,useGetMyPermissionsQuery:IR,useIsSSOLockedQuery:MR,useGetProvidersQuery:LR,useGetProviderOptionsQuery:OR,useUpdateProviderOptionsMutation:BR}=K$;$n("Auth");f.createContext({toggleNotification:()=>{}});function sn(e,t,r,a=0){const o=uu(t);for(;e&&a<o.length;)e=e[o[a++]];return a!==o.length&&!e||e===void 0?r:e}const Y$=e=>e!==null&&typeof e=="object"&&!Array.isArray(e),J$=e=>String(Math.floor(Number(e)))===e;function Bn(e,t,r){const a=o1(e);let o=a,l=0;const u=uu(t);for(;l<u.length-1;l++){const h=u[l],m=sn(e,u.slice(0,l+1));if(m&&(Y$(m)||Array.isArray(m)))o=o[h]=o1(m);else{const w=u[l+1];o=o[h]=J$(w)&&Number(w)>=0?[]:{}}}return(l===0?e:o)[u[l]]===r?e:(r===void 0?delete o[u[l]]:o[u[l]]=r,l===0&&r===void 0&&delete a[u[l]],a)}const[DR,Q$]=$n("AppInfo",{}),Z$=f.createContext({uuid:!1}),VR=()=>{const{uuid:e,telemetryProperties:t}=f.useContext(Z$),r=Q$("useTracking",o=>o.userId);return{trackUsage:f.useCallback(async(o,l)=>{try{if(e&&!window.strapi.telemetryDisabled)return await Qe.post("https://analytics.strapi.io/api/v2/track",{event:o,userId:r,eventProperties:{...l},userProperties:{},groupProperties:{...t,projectId:e,projectType:window.strapi.projectType}},{headers:{"Content-Type":"application/json","X-Strapi-Event":o}})}catch{}return null},[t,r,e])}};Fi("ConfigurationContext");$n("GuidedTour");ru`
  body {
    background: ${({theme:e})=>e.colors.neutral100};
  }
`;const[NR,wi]=$n("History",{history:[],currentLocationIndex:0,currentLocation:"",canGoBack:!1,pushState:()=>{throw new Error("You must use the `HistoryProvider` to access the `pushState` function.")},goBack:()=>{throw new Error("You must use the `HistoryProvider` to access the `goBack` function.")}});f.forwardRef(({disabled:e},t)=>{const{formatMessage:r}=Vn(),a=wi("BackButton",h=>h.canGoBack),o=wi("BackButton",h=>h.goBack),l=wi("BackButton",h=>h.history),u=h=>{h.preventDefault(),o()};return c.jsx(fd,{ref:t,tag:bx,to:l.at(-1)??"",onClick:u,disabled:e||!a,"aria-disabled":e||!a,startIcon:c.jsx(k6,{}),children:r({id:"global.back",defaultMessage:"Back"})})});new yx({defaultOptions:{queries:{refetchOnWindowFocus:!1}}});I(B8)`
  & > div:first-child {
    display: none;
  }

  & > button {
    display: none;
  }
`;I(ae)`
  word-break: break-all;
  color: ${({theme:e})=>e.colors.danger600};
`;const X$=({children:e})=>c.jsx(Y,{paddingLeft:10,paddingRight:10,children:e}),P$={S:180,M:250};I(Y)`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${({$size:e})=>`${P$[e]}px`}, 1fr)
  );
  grid-gap: ${({theme:e})=>e.spaces[4]};
`;const F1=f.forwardRef(({navigationAction:e,primaryAction:t,secondaryAction:r,subtitle:a,title:o,sticky:l,width:u,...h},m)=>{const w=typeof a=="string";return l?c.jsx(Y,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:`${u}px`,zIndex:1,"data-strapi-header-sticky":!0,children:c.jsxs(K,{justifyContent:"space-between",children:[c.jsxs(K,{children:[e&&c.jsx(Y,{paddingRight:3,children:e}),c.jsxs(Y,{children:[c.jsx(ae,{variant:"beta",tag:"h1",...h,children:o}),w?c.jsx(ae,{variant:"pi",textColor:"neutral600",children:a}):a]}),r?c.jsx(Y,{paddingLeft:4,children:r}):null]}),c.jsx(K,{children:t?c.jsx(Y,{paddingLeft:2,children:t}):void 0})]})}):c.jsxs(Y,{ref:m,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:e?6:8,background:"neutral100","data-strapi-header":!0,children:[e?c.jsx(Y,{paddingBottom:2,children:e}):null,c.jsxs(K,{justifyContent:"space-between",children:[c.jsxs(K,{minWidth:0,children:[c.jsx(ae,{tag:"h1",variant:"alpha",...h,children:o}),r?c.jsx(Y,{paddingLeft:4,children:r}):null]}),t]}),w?c.jsx(ae,{variant:"epsilon",textColor:"neutral600",tag:"p",children:a}):a]})}),g2=e=>{const t=f.useRef(null),[r,a]=f.useState(null),[o,l]=eS({root:null,rootMargin:"0px",threshold:0});return tS(o,()=>{o.current&&a(o.current.getBoundingClientRect())}),f.useEffect(()=>{t.current&&a(t.current.getBoundingClientRect())},[t]),c.jsxs(c.Fragment,{children:[c.jsx("div",{style:{height:r?.height},ref:o,children:l&&c.jsx(F1,{ref:t,...e})}),!l&&c.jsx(F1,{...e,sticky:!0,width:r?.width})]})};g2.displayName="HeaderLayout";const eS=e=>{const t=f.useRef(null),[r,a]=f.useState(!0),o=([l])=>{a(l.isIntersecting)};return f.useEffect(()=>{const l=t.current,u=new IntersectionObserver(o,e);return l&&u.observe(t.current),()=>{l&&u.disconnect()}},[t,e]),[t,r]},tS=(e,t)=>{const r=lo(t);f.useLayoutEffect(()=>{const a=new ResizeObserver(r);return Array.isArray(e)?e.forEach(o=>{o.current&&a.observe(o.current)}):e.current&&a.observe(e.current),()=>{a.disconnect()}},[e,r])},nS=I(Y)`
  display: grid;
  grid-template-columns: ${({$hasSideNav:e})=>e?"auto 1fr":"1fr"};
`,rS=I(Y)`
  overflow-x: hidden;
`,oS=({sideNav:e,children:t})=>c.jsxs(nS,{$hasSideNav:!!e,children:[e,c.jsx(rS,{paddingBottom:10,children:t})]}),HR={Root:oS,Header:g2,Content:X$},vn="The Form Component has not been initialised, ensure you are using this hook within a Form component",[sS,eo]=$n("Form",{disabled:!1,errors:{},initialValues:{},isSubmitting:!1,modified:!1,addFieldRow:()=>{throw new Error(vn)},moveFieldRow:()=>{throw new Error(vn)},onChange:()=>{throw new Error(vn)},removeFieldRow:()=>{throw new Error(vn)},resetForm:()=>{throw new Error(vn)},setErrors:()=>{throw new Error(vn)},setValues:()=>{throw new Error(vn)},setSubmitting:()=>{throw new Error(vn)},validate:async()=>{throw new Error(vn)},values:{}});f.forwardRef(({disabled:e=!1,method:t,onSubmit:r,initialErrors:a,...o},l)=>{const u=f.useRef(null),h=f.useRef(o.initialValues??{}),[m,w]=f.useReducer(cS,{errors:a??{},isSubmitting:!1,values:o.initialValues??{}});f.useEffect(()=>{ro(h.current,o.initialValues)||(h.current=o.initialValues??{},w({type:"SET_INITIAL_VALUES",payload:o.initialValues??{}}))},[o.initialValues]);const v=f.useCallback(W=>{w({type:"SET_ERRORS",payload:W})},[]),b=f.useCallback(W=>{w({type:"SET_VALUES",payload:W})},[]);f.useEffect(()=>{if(Object.keys(m.errors).length===0)return;const W=setTimeout(()=>{const[U]=u.current.querySelectorAll("[data-strapi-field-error]");if(U){const J=U.getAttribute("id"),Z=u.current.querySelector(`[aria-describedby="${J}"]`);Z&&Z instanceof HTMLElement&&Z.focus()}});return()=>clearTimeout(W)},[m.errors]);const y=f.useCallback(async(W=!0,U={})=>{if(v({}),!o.validationSchema&&!o.validate)return{data:m.values};try{let J;if(o.validationSchema)J=await o.validationSchema.validate(m.values,{abortEarly:!1});else if(o.validate)J=await o.validate(m.values,U);else throw new Error("No validation schema or validate function provided");return{data:J}}catch(J){if(aS(J)){const Z=iS(J);return W&&v(Z),{errors:Z}}else throw console.warn("Warning: An unhandled error was caught during validation in <Form validationSchema />",J),J}},[o,v,m.values]),S=async W=>{if(W.stopPropagation(),W.preventDefault(),!!r){w({type:"SUBMIT_ATTEMPT"});try{const{data:U,errors:J}=await y();if(J)throw v(J),new Error("Submission failed");await r(U,{setErrors:v,setValues:b,resetForm:O}),w({type:"SUBMIT_SUCCESS"})}catch(U){if(w({type:"SUBMIT_FAILURE"}),U instanceof Error&&U.message==="Submission failed")return}}},$=f.useMemo(()=>!ro(h.current,m.values),[m.values]),_=lo((W,U)=>{if(typeof W=="string"){w({type:"SET_FIELD_VALUE",payload:{field:W,value:U}});return}const J=W.target||W.currentTarget,{type:Z,name:ie,id:$e,value:oe,options:P,multiple:se}=J,Re=ie||$e;Re||console.warn("`onChange` was called with an event, but you forgot to pass a `name` or `id'` attribute to your input. The field to update cannot be determined");let ve;if(/number|range/.test(Z)){const le=parseFloat(oe);ve=isNaN(le)?"":le}else/checkbox/.test(Z)?ve=!sn(m.values,Re):P&&se?ve=Array.from(P).filter(le=>le.selected).map(le=>le.value):oe===""?ve=null:ve=oe;Re&&w({type:"SET_FIELD_VALUE",payload:{field:Re,value:ve}})}),j=f.useCallback((W,U,J)=>{w({type:"ADD_FIELD_ROW",payload:{field:W,value:U,addAtIndex:J}})},[]),L=f.useCallback((W,U)=>{w({type:"REMOVE_FIELD_ROW",payload:{field:W,removeAtIndex:U}})},[]),T=f.useCallback((W,U,J)=>{w({type:"MOVE_FIELD_ROW",payload:{field:W,fromIndex:U,toIndex:J}})},[]),O=f.useCallback(()=>{w({type:"RESET_FORM",payload:{errors:{},isSubmitting:!1,values:h.current}})},[]),N=f.useCallback(W=>{w({type:"SET_ISSUBMITTING",payload:W})},[]),z=Oe(u,l);return c.jsx("form",{ref:z,method:t,noValidate:!0,onSubmit:S,children:c.jsx(sS,{disabled:e,onChange:_,initialValues:h.current,modified:$,addFieldRow:j,moveFieldRow:T,removeFieldRow:L,resetForm:O,setErrors:v,setValues:b,setSubmitting:N,validate:y,...m,children:typeof o.children=="function"?o.children({modified:$,disabled:e,onChange:_,...m,setErrors:v,resetForm:O}):o.children})})});const aS=e=>typeof e=="object"&&e!==null&&"name"in e&&typeof e.name=="string"&&e.name==="ValidationError",iS=e=>{let t={};if(e.inner){if(e.inner.length===0)return Bn(t,e.path,e.message);for(const r of e.inner)sn(t,r.path)||(t=Bn(t,r.path,r.message))}return t},cS=(e,t)=>Cx(e,r=>{switch(t.type){case"SET_INITIAL_VALUES":r.values=t.payload;break;case"SET_VALUES":r.values=t.payload;break;case"SUBMIT_ATTEMPT":r.isSubmitting=!0;break;case"SUBMIT_FAILURE":r.isSubmitting=!1;break;case"SUBMIT_SUCCESS":r.isSubmitting=!1;break;case"SET_FIELD_VALUE":r.values=Bn(e.values,t.payload.field,t.payload.value);break;case"ADD_FIELD_ROW":{const a=sn(e.values,t.payload.field,[]);let o=t.payload.addAtIndex;o===void 0?o=a.length:o<0&&(o=0);const[l]=a1(a.at(o-1)?.__temp_key__,a.at(o)?.__temp_key__,1);r.values=Bn(e.values,t.payload.field,Bn(a,o.toString(),{...t.payload.value,__temp_key__:l}));break}case"MOVE_FIELD_ROW":{const{field:a,fromIndex:o,toIndex:l}=t.payload,u=[...sn(e.values,a,[])],h=u[o],m=o>l?u[l-1]?.__temp_key__:u[l]?.__temp_key__,w=o>l?u[l]?.__temp_key__:u[l+1]?.__temp_key__,[v]=a1(m,w,1);u.splice(o,1),u.splice(l,0,{...h,__temp_key__:v}),r.values=Bn(e.values,a,u);break}case"REMOVE_FIELD_ROW":{const a=sn(e.values,t.payload.field,[]);let o=t.payload.removeAtIndex;o===void 0?o=a.length-1:o<0&&(o=0);const l=Bn(a,o.toString(),void 0).filter(u=>u);r.values=Bn(e.values,t.payload.field,l.length>0?l:[]);break}case"SET_ERRORS":ro(e.errors,t.payload)||(r.errors=t.payload);break;case"SET_ISSUBMITTING":r.isSubmitting=t.payload;break;case"RESET_FORM":r.values=t.payload.values,r.errors=t.payload.errors,r.isSubmitting=t.payload.isSubmitting;break}}),Ot=e=>{const{formatMessage:t}=Vn(),r=eo("useField",h=>sn(h.initialValues,e)),a=eo("useField",h=>sn(h.values,e)),o=eo("useField",h=>h.onChange),l=eo("useField",h=>sn(h.errors,e)),u=eo("useField",h=>{const m=sn(h.errors,e);if(z1(m)){const{values:w,...v}=m;return t(v,w)}return m});return{initialValue:r,rawError:l,error:z1(u)?t({id:u.id,defaultMessage:u.defaultMessage},u.values):typeof u=="string"?u:void 0,onChange:o,value:a}},z1=e=>typeof e=="object"&&e!==null&&!Array.isArray(e)&&"id"in e&&"defaultMessage"in e,Bt=e=>{const{search:t}=du(),r=f.useMemo(()=>new URLSearchParams(t),[t]),[a,o]=f.useState(null);return f.useEffect(()=>{r.has("field")&&r.get("field")===e&&a&&(a.focus(),a.scrollIntoView({block:"center"}))},[r,e,a]),o},lS=f.forwardRef(({name:e,required:t,label:r,hint:a,labelAction:o,...l},u)=>{const{formatMessage:h}=Vn(),m=Ot(e),w=Bt(e),v=Oe(u,w);return c.jsxs(X.Root,{error:m.error,name:e,hint:a,required:t,maxWidth:"320px",children:[c.jsx(X.Label,{action:o,children:r}),c.jsx(nC,{ref:v,checked:m.value===null?null:m.value||!1,offLabel:h({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"False"}),onLabel:h({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"True"}),onChange:m.onChange,...l}),c.jsx(X.Hint,{}),c.jsx(X.Error,{})]})}),uS=f.memo(lS),dS=f.forwardRef(({name:e,required:t,label:r,hint:a,type:o,...l},u)=>{const h=Ot(e),m=Bt(e),w=Oe(u,m);return c.jsxs(X.Root,{error:h.error,name:e,hint:a,required:t,children:[c.jsx(Es,{onCheckedChange:v=>h.onChange(e,!!v),ref:w,checked:h.value,...l,children:r||l["aria-label"]}),c.jsx(X.Hint,{}),c.jsx(X.Error,{})]})}),fS=f.memo(dS),hS=f.forwardRef(({name:e,required:t,label:r,hint:a,labelAction:o,type:l,...u},h)=>{const{formatMessage:m}=Vn(),w=Ot(e),v=Bt(e),b=Oe(h,v),y=typeof w.value=="string"?new Date(w.value):w.value;return c.jsxs(X.Root,{error:w.error,name:e,hint:a,required:t,children:[c.jsx(X.Label,{action:o,children:r}),c.jsx(Ad,{ref:b,clearLabel:m({id:"clearLabel",defaultMessage:"Clear"}),onChange:S=>{w.onChange(e,S?U1(S).toISOString():null)},onClear:()=>w.onChange(e,null),value:y&&U1(y),...u}),c.jsx(X.Hint,{}),c.jsx(X.Error,{})]})}),U1=e=>{const t=e.toISOString(),r=ms(),a=au(t,r);return iu(a).toDate("UTC")},gS=f.memo(hS),mS=f.forwardRef(({name:e,required:t,label:r,hint:a,labelAction:o,...l},u)=>{const{formatMessage:h}=Vn(),m=Ot(e),w=Bt(e),v=Oe(u,w),b=typeof m.value=="string"?new Date(m.value):m.value;return c.jsxs(X.Root,{error:m.error,name:e,hint:a,required:t,children:[c.jsx(X.Label,{action:o,children:r}),c.jsx(k9,{ref:v,clearLabel:h({id:"clearLabel",defaultMessage:"Clear"}),onChange:y=>{m.onChange(e,y?y.toISOString():null)},onClear:()=>m.onChange(e,null),value:b,...l}),c.jsx(X.Hint,{}),c.jsx(X.Error,{})]})}),pS=f.memo(mS),wS=f.forwardRef(({name:e,required:t,label:r,hint:a,labelAction:o,...l},u)=>{const h=Ot(e),m=Bt(e),w=Oe(u,m);return c.jsxs(X.Root,{error:h.error,name:e,hint:a,required:t,children:[c.jsx(X.Label,{action:o,children:r}),c.jsx(xo,{ref:w,autoComplete:"email",onChange:h.onChange,value:h.value,...l,type:"email"}),c.jsx(X.Hint,{}),c.jsx(X.Error,{})]})}),xS=f.memo(wS),vS=f.forwardRef(({name:e,required:t,label:r,hint:a,labelAction:o,options:l=[],...u},h)=>{const m=Ot(e),w=Bt(e),v=Oe(h,w);return c.jsxs(X.Root,{error:m.error,name:e,hint:a,required:t,children:[c.jsx(X.Label,{action:o,children:r}),c.jsx(Ii,{ref:v,onChange:b=>{m.onChange(e,b)},value:m.value,...u,children:l.map(({value:b,label:y,disabled:S,hidden:$})=>c.jsx(Mi,{value:b,disabled:S,hidden:$,children:y??b},b))}),c.jsx(X.Hint,{}),c.jsx(X.Error,{})]})}),bS=f.memo(vS),yS=f.forwardRef(({name:e,required:t,label:r,hint:a,labelAction:o,...l},u)=>{const h=Ot(e),m=Bt(e),w=Oe(u,m);return c.jsxs(X.Root,{error:h.error,name:e,hint:a,required:t,children:[c.jsx(X.Label,{action:o,children:r}),c.jsx(G9,{ref:w,value:typeof h.value=="object"?JSON.stringify(h.value,null,2):h.value,onChange:v=>{const b=t&&!v.length?null:v;h.onChange(e,b)},minHeight:"25.2rem",maxHeight:"50.4rem",...l}),c.jsx(X.Hint,{}),c.jsx(X.Error,{})]})}),CS=f.memo(yS),$S=f.forwardRef(({name:e,required:t,label:r,hint:a,labelAction:o,type:l,...u},h)=>{const m=Ot(e),w=Bt(e),v=Oe(h,w);return c.jsxs(X.Root,{error:m.error,name:e,hint:a,required:t,children:[c.jsx(X.Label,{action:o,children:r}),c.jsx(oy,{ref:v,onValueChange:b=>{m.onChange(e,b)},step:l==="float"||l=="decimal"?.01:1,value:m.value,...u}),c.jsx(X.Hint,{}),c.jsx(X.Error,{})]})}),SS=f.memo($S),RS=f.forwardRef(({name:e,required:t,label:r,hint:a,labelAction:o,...l},u)=>{const[h,m]=f.useState(!1),{formatMessage:w}=Vn(),v=Ot(e),b=Bt(e),y=Oe(u,b);return c.jsxs(X.Root,{error:v.error,name:e,hint:a,required:t,children:[c.jsx(X.Label,{action:o,children:r}),c.jsx(xo,{ref:y,autoComplete:"password",endAction:c.jsx(X.Action,{label:w({id:"Auth.form.password.show-password",defaultMessage:"Show password"}),onClick:()=>{m(S=>!S)},children:h?c.jsx(J4,{fill:"neutral500"}):c.jsx(X4,{fill:"neutral500"})}),onChange:v.onChange,value:v.value,...l,type:h?"text":"password"}),c.jsx(X.Hint,{}),c.jsx(X.Error,{})]})}),_S=f.memo(RS),jS=f.forwardRef(({name:e,required:t,label:r,hint:a,labelAction:o,...l},u)=>{const h=Ot(e),m=Bt(e),w=Oe(u,m);return c.jsxs(X.Root,{error:h.error,name:e,hint:a,required:t,children:[c.jsx(X.Label,{action:o,children:r}),c.jsx(xo,{ref:w,onChange:h.onChange,value:h.value??"",...l}),c.jsx(X.Hint,{}),c.jsx(X.Error,{})]})}),AS=f.memo(jS),TS=f.forwardRef(({name:e,required:t,label:r,hint:a,labelAction:o,...l},u)=>{const h=Ot(e),m=Bt(e),w=Oe(u,m);return c.jsxs(X.Root,{error:h.error,name:e,hint:a,required:t,children:[c.jsx(X.Label,{action:o,children:r}),c.jsx(Py,{ref:w,onChange:h.onChange,value:h.value??"",...l}),c.jsx(X.Hint,{}),c.jsx(X.Error,{})]})}),ES=f.memo(TS),IS=f.forwardRef(({name:e,required:t,label:r,hint:a,labelAction:o,...l},u)=>{const{formatMessage:h}=Vn(),m=Ot(e),w=Bt(e),v=Oe(u,w);return c.jsxs(X.Root,{error:m.error,name:e,hint:a,required:t,children:[c.jsx(X.Label,{action:o,children:r}),c.jsx(Ed,{ref:v,clearLabel:h({id:"clearLabel",defaultMessage:"Clear"}),onChange:b=>{m.onChange(e,`${b}:00.000`)},onClear:()=>m.onChange(e,void 0),value:m.value??"",...l}),c.jsx(X.Hint,{}),c.jsx(X.Error,{})]})}),MS=f.memo(IS),LS=f.memo(f.forwardRef((e,t)=>{switch(e.type){case"biginteger":case"timestamp":case"string":case"uid":return c.jsx(AS,{ref:t,...e});case"boolean":return c.jsx(uS,{ref:t,...e});case"checkbox":return c.jsx(fS,{ref:t,...e});case"datetime":return c.jsx(pS,{ref:t,...e});case"date":return c.jsx(gS,{ref:t,...e});case"decimal":case"float":case"integer":return c.jsx(SS,{ref:t,...e});case"json":return c.jsx(CS,{ref:t,...e});case"email":return c.jsx(xS,{ref:t,...e});case"enumeration":return c.jsx(bS,{ref:t,...e});case"password":return c.jsx(_S,{ref:t,...e});case"text":return c.jsx(ES,{ref:t,...e});case"time":return c.jsx(MS,{ref:t,...e});default:return c.jsx(OS,{ref:t,...e})}})),OS=f.forwardRef(({label:e,hint:t,name:r,required:a,type:o,labelAction:l},u)=>{const{error:h}=Ot(r),m=Bt(r),w=Oe(u,m);return c.jsxs(X.Root,{error:h,name:r,hint:t,required:a,children:[c.jsx(X.Label,{action:l,children:e}),c.jsx(xo,{ref:w,disabled:!0,placeholder:`Unsupported field type: ${o}`,required:a,type:"text",value:""}),c.jsx(X.Hint,{}),c.jsx(X.Error,{})]})});f.memo(LS);I.img`
  height: 7.2rem;
`;I(Y)`
  margin: 0 auto;
  width: 552px;
`;I(K)`
  flex-direction: column;
`;const st={email:{id:"components.Input.error.validation.email"},lowercase:{id:"components.Input.error.validation.lowercase"},minLength:{id:"components.Input.error.validation.minLength"},required:{id:"components.Input.error.validation.required",defaultMessage:"This value is required."}};Cs().shape({email:$t().nullable().email({id:st.email.id,defaultMessage:"Not a valid email"}).required(st.required),password:$t().required(st.required).nullable(),rememberMe:$x().nullable()});I(X.Root)`
  height: 3.2rem;
  width: 3.2rem;

  > label,
  ~ input {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  > label {
    color: inherit;
    cursor: pointer;
    padding: ${({theme:e})=>e.spaces[2]};
    text-align: center;
    vertical-align: middle;
  }

  &:hover,
  &:focus-within {
    background-color: ${({theme:e})=>e.colors.neutral0};
  }

  &:active,
  &.selected {
    color: ${({theme:e})=>e.colors.primary700};
    background-color: ${({theme:e})=>e.colors.neutral0};
    border-color: ${({theme:e})=>e.colors.primary700};
  }
`;[...Array(11).keys()];Cs().shape({firstname:$t().trim().required(st.required).nullable(),lastname:$t().nullable(),password:$t().min(8,{id:st.minLength.id,defaultMessage:"Password must be at least 8 characters",values:{min:8}}).matches(/[a-z]/,{message:{id:"components.Input.error.contain.lowercase",defaultMessage:"Password must contain at least 1 lowercase letter"}}).matches(/[A-Z]/,{message:{id:"components.Input.error.contain.uppercase",defaultMessage:"Password must contain at least 1 uppercase letter"}}).matches(/\d/,{message:{id:"components.Input.error.contain.number",defaultMessage:"Password must contain at least 1 number"}}).required({id:st.required.id,defaultMessage:"Password is required"}).nullable(),confirmPassword:$t().required({id:st.required.id,defaultMessage:"Confirm password is required"}).oneOf([qi("password"),null],{id:"components.Input.error.password.noMatch",defaultMessage:"Passwords must match"}).nullable(),registrationToken:$t().required({id:st.required.id,defaultMessage:"Registration token is required"})});Cs().shape({firstname:$t().trim().required({id:st.required.id,defaultMessage:"Firstname is required"}).nullable(),lastname:$t().nullable(),password:$t().min(8,{id:st.minLength.id,defaultMessage:"Password must be at least 8 characters",values:{min:8}}).matches(/[a-z]/,{message:{id:"components.Input.error.contain.lowercase",defaultMessage:"Password must contain at least 1 lowercase letter"}}).matches(/[A-Z]/,{message:{id:"components.Input.error.contain.uppercase",defaultMessage:"Password must contain at least 1 uppercase letter"}}).matches(/\d/,{message:{id:"components.Input.error.contain.number",defaultMessage:"Password must contain at least 1 number"}}).required({id:st.required.id,defaultMessage:"Password is required"}).nullable(),confirmPassword:$t().required({id:st.required,defaultMessage:"Confirm password is required"}).nullable().oneOf([qi("password"),null],{id:"components.Input.error.password.noMatch",defaultMessage:"Passwords must match"}),email:$t().email({id:st.email.id,defaultMessage:"Not a valid email"}).strict().lowercase({id:st.lowercase.id,defaultMessage:"Email must be lowercase"}).required({id:st.required.id,defaultMessage:"Email is required"}).nullable()});I.a`
  color: ${({theme:e})=>e.colors.primary600};
`;Cs().shape({password:$t().min(8,{id:st.minLength.id,defaultMessage:"Password must be at least 8 characters",values:{min:8}}).matches(/[a-z]/,{message:{id:"components.Input.error.contain.lowercase",defaultMessage:"Password must contain at least 1 lowercase letter"}}).matches(/[A-Z]/,{message:{id:"components.Input.error.contain.uppercase",defaultMessage:"Password must contain at least 1 uppercase letter"}}).matches(/\d/,{message:{id:"components.Input.error.contain.number",defaultMessage:"Password must contain at least 1 number"}}).required({id:st.required.id,defaultMessage:"Password is required"}).nullable(),confirmPassword:$t().required({id:st.required.id,defaultMessage:"Confirm password is required"}).oneOf([qi("password"),null],{id:"components.Input.error.password.noMatch",defaultMessage:"Passwords must match"}).nullable()});ao.reducerPath+"",ao.reducer;I(Ku)`
  width: 24px;
  height: 24px;

  path {
    fill: ${({theme:e})=>e.colors.danger600};
  }
`;f.memo(({description:e,id:t,props:r,update:a})=>{const o=e(r);return DS(()=>(a(t,o),()=>{a(t,null)}),o),null},(e,t)=>ro(e.props,t.props));const BS=e=>{const t=f.useRef(void 0);return ro(e,t.current)||(t.current=e),[t.current]},DS=(e,t)=>{f.useEffect(e,BS(t))},[kR,VS]=$n("Filters");f.forwardRef(({label:e},t)=>{const{formatMessage:r}=Vn(),a=VS("Trigger",({disabled:o})=>o);return c.jsx(gy.Trigger,{children:c.jsx(xs,{variant:"tertiary",ref:t,startIcon:c.jsx(av,{}),size:"S",disabled:a,children:e||r({id:"app.utils.filters",defaultMessage:"Filters"})})})});const[NS,FR]=$n("Pagination");f.forwardRef(({children:e,defaultPageSize:t=10,pageCount:r=0,defaultPage:a=1,onPageSizeChange:o,total:l=0},u)=>{const[{query:h},m]=W$({pageSize:t.toString(),page:a.toString()}),w=v=>{m({pageSize:v,page:"1"}),o&&o(v)};return c.jsx(K,{ref:u,paddingTop:4,paddingBottom:4,alignItems:"flex-end",justifyContent:"space-between",children:c.jsx(NS,{currentQuery:h,page:h.page,pageSize:h.pageSize,pageCount:r.toString(),setPageSize:w,total:l,children:e})})});$n("Table");I(Dn)`
  transform: ${({$isUp:e})=>`rotate(${e?"180":"0"}deg)`};
`;I(K)`
  margin-right: ${({theme:e})=>e.spaces[6]};

  svg {
    width: 3.2rem;
    height: 3.2rem;
  }
`;I(ae)`
  color: ${({theme:e})=>e.colors.neutral800};
  word-break: break-all;
`;const HS=ao.enhanceEndpoints({addTagTypes:["LicenseLimits","User","Role","RolePermissions"]}).injectEndpoints({endpoints:e=>({createUser:e.mutation({query:t=>({url:"/admin/users",method:"POST",data:t}),transformResponse:t=>t.data,invalidatesTags:["LicenseLimits",{type:"User",id:"LIST"}]}),updateUser:e.mutation({query:({id:t,...r})=>({url:`/admin/users/${t}`,method:"PUT",data:r}),invalidatesTags:(t,r,{id:a})=>[{type:"User",id:a},{type:"User",id:"LIST"}]}),getUsers:e.query({query:({id:t,...r}={})=>({url:`/admin/users/${t??""}`,method:"GET",config:{params:r}}),transformResponse:t=>{let r=[];return t.data&&("results"in t.data?Array.isArray(t.data.results)&&(r=t.data.results):r=[t.data]),{users:r,pagination:"pagination"in t.data?t.data.pagination:null}},providesTags:(t,r,a)=>typeof a=="object"&&"id"in a?[{type:"User",id:a.id}]:[...t?.users.map(({id:o})=>({type:"User",id:o}))??[],{type:"User",id:"LIST"}]}),deleteManyUsers:e.mutation({query:t=>({url:"/admin/users/batch-delete",method:"POST",data:t}),transformResponse:t=>t.data,invalidatesTags:["LicenseLimits",{type:"User",id:"LIST"}]}),createRole:e.mutation({query:t=>({url:"/admin/roles",method:"POST",data:t}),transformResponse:t=>t.data,invalidatesTags:[{type:"Role",id:"LIST"}]}),getRoles:e.query({query:({id:t,...r}={})=>({url:`/admin/roles/${t??""}`,method:"GET",config:{params:r}}),transformResponse:t=>{let r=[];return t.data&&(Array.isArray(t.data)?r=t.data:r=[t.data]),r},providesTags:(t,r,a)=>typeof a=="object"&&"id"in a?[{type:"Role",id:a.id}]:[...t?.map(({id:o})=>({type:"Role",id:o}))??[],{type:"Role",id:"LIST"}]}),updateRole:e.mutation({query:({id:t,...r})=>({url:`/admin/roles/${t}`,method:"PUT",data:r}),transformResponse:t=>t.data,invalidatesTags:(t,r,{id:a})=>[{type:"Role",id:a}]}),getRolePermissions:e.query({query:({id:t,...r})=>({url:`/admin/roles/${t}/permissions`,method:"GET",config:{params:r}}),transformResponse:t=>t.data,providesTags:(t,r,{id:a})=>[{type:"RolePermissions",id:a}]}),updateRolePermissions:e.mutation({query:({id:t,...r})=>({url:`/admin/roles/${t}/permissions`,method:"PUT",data:r}),transformResponse:t=>t.data,invalidatesTags:(t,r,{id:a})=>[{type:"RolePermissions",id:a}]}),getRolePermissionLayout:e.query({query:t=>({url:"/admin/permissions",method:"GET",config:{params:t}}),transformResponse:t=>t.data})}),overrideExisting:!1}),{useCreateUserMutation:zR,useGetUsersQuery:UR,useUpdateUserMutation:WR,useDeleteManyUsersMutation:qR,useGetRolesQuery:GR,useCreateRoleMutation:KR,useUpdateRoleMutation:YR,useGetRolePermissionsQuery:JR,useGetRolePermissionLayoutQuery:QR,useUpdateRolePermissionsMutation:ZR}=HS;export{HR as L,VR as u};
