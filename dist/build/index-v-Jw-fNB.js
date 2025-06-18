import{cB as t0,r as c,j as r,cC as n0,cD as qt,cE as J,cF as ae,cG as xe,cH as oe,cI as _e,cJ as Gt,cK as Kt,cL as o0,cM as r0,cN as De,cO as Xo,cP as a0,cQ as s0,cR as Tt,cS as En,cT as Qo,cU as Jo,cV as Po,cW as ke,cX as i0,cY as e1,cZ as c0,c_ as g,k as w,c$ as L,d0 as l0,d1 as d0,d2 as h0,d3 as t1,d4 as n1,d5 as u0,d6 as o1,d7 as r1,d8 as a1,d9 as s1,cx as ie,da as i1,db as c1,dc as l1,dd as d1,de as h1,df as u1,dg as g1,dh as f1,di as g0,dj as m1,dk as x1,dl as w1,dm as v1,dn as b1,dp as p1,dq as $1,dr as C1,ds as j1,dt as y1,du as S1,dv as R1,dw as A1,dx as M1,dy as I1,dz as T1,dA as V1,dB as L1,dC as f0,dD as E1,dE as H1,dF as D1,dG as B1,dH as k1,dI as z1,dJ as N1,dK as Vt,dL as Yt,dM as Lt,dN as Et,dO as O1,dP as F1,dQ as _1,dR as W1,dS as U1,dT as q1,dU as G1,dV as m0,dW as K1,dX as x0,dY as Y1,dZ as Z1,d_ as X1,d$ as Q1,e0 as J1,e1 as w0,e2 as v0,e3 as P1,e4 as er,e5 as tr,e6 as nr,e7 as or,e8 as rr,e9 as ar,ea as sr,eb as ir,ec as cr,ed as lr,ee as dr,ef as hr,eg as ur,eh as gr,ei as fr,ej as mr,ek as xr,el as wr,em as vr,en as br,eo as pr}from"./strapi-C9nOTXTf.js";var $r=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Be=new WeakMap,ct=new WeakMap,lt={},Rt=0,b0=function(e){return e&&(e.host||b0(e.parentNode))},Cr=function(e,t){return t.map(function(o){if(e.contains(o))return o;var a=b0(o);return a&&e.contains(a)?a:(console.error("aria-hidden",o,"in not contained inside",e,". Doing nothing"),null)}).filter(function(o){return!!o})},jr=function(e,t,o,a){var n=Cr(t,Array.isArray(e)?e:[e]);lt[o]||(lt[o]=new WeakMap);var s=lt[o],i=[],l=new Set,d=new Set(n),f=function(m){!m||l.has(m)||(l.add(m),f(m.parentNode))};n.forEach(f);var u=function(m){!m||d.has(m)||Array.prototype.forEach.call(m.children,function(h){if(l.has(h))u(h);else try{var x=h.getAttribute(a),v=x!==null&&x!=="false",b=(Be.get(h)||0)+1,C=(s.get(h)||0)+1;Be.set(h,b),s.set(h,C),i.push(h),b===1&&v&&ct.set(h,!0),C===1&&h.setAttribute(o,"true"),v||h.setAttribute(a,"true")}catch($){console.error("aria-hidden: cannot operate on ",h,$)}})};return u(t),l.clear(),Rt++,function(){i.forEach(function(m){var h=Be.get(m)-1,x=s.get(m)-1;Be.set(m,h),s.set(m,x),h||(ct.has(m)||m.removeAttribute(a),ct.delete(m)),x||m.removeAttribute(o)}),Rt--,Rt||(Be=new WeakMap,Be=new WeakMap,ct=new WeakMap,lt={})}},p0=function(e,t,o){o===void 0&&(o="data-aria-hidden");var a=Array.from(Array.isArray(e)?e:[e]),n=$r(e);return n?(a.push.apply(a,Array.from(n.querySelectorAll("[aria-live]"))),jr(a,n,o,"aria-hidden")):function(){return null}};function yr(e){const t=`${e}CollectionProvider`,[o,a]=a0(t),[n,s]=o(t,{collectionRef:{current:null},itemMap:new Map,listeners:new Set}),i=x=>{const{scope:v,children:b}=x,C=c.useRef(null),$=c.useRef(new Map).current,p=c.useRef(new Set).current;return r.jsx(n,{scope:v,itemMap:$,collectionRef:C,listeners:p,children:b})};i.displayName=t;const l=`${e}CollectionSlot`,d=c.forwardRef((x,v)=>{const{scope:b,children:C}=x,$=s(l,b),p=ae(v,$.collectionRef);return r.jsx(Tt,{ref:p,children:C})});d.displayName=l;const f=`${e}CollectionItemSlot`,u="data-radix-collection-item",m=c.forwardRef((x,v)=>{const{scope:b,children:C,...$}=x,p=c.useRef(null),j=ae(v,p),y=s(f,b);return c.useEffect(()=>{const S=Array.from(y.itemMap.values());return y.itemMap.set(p,{ref:p,...$}),y.listeners.forEach(A=>A(Array.from(y.itemMap.values()),S)),()=>{const A=Array.from(y.itemMap.values());y.itemMap.delete(p),y.listeners.forEach(R=>R(Array.from(y.itemMap.values()),A))}}),r.jsx(Tt,{[u]:"",ref:j,children:C})});m.displayName=f;function h(x){const v=s(`${e}CollectionConsumer`,x),b=c.useCallback(()=>{const $=v.collectionRef.current;if(!$)return[];const p=Array.from($.querySelectorAll(`[${u}]`));return Array.from(v.itemMap.values()).sort((S,A)=>p.indexOf(S.ref.current)-p.indexOf(A.ref.current))},[v.collectionRef,v.itemMap]),C=c.useCallback($=>(v.listeners.add($),()=>v.listeners.delete($)),[v.listeners]);return{getItems:b,subscribe:C}}return[{Provider:i,Slot:d,ItemSlot:m},h,a]}const At=new Map;function Sr(e,t){const o=e+(t?Object.entries(t).sort((n,s)=>n[0]<s[0]?-1:1).join():"");if(At.has(o))return At.get(o);const a=new Intl.Collator(e,t);return At.set(o,a),a}function Zt(e,t){const o=Sr(e,{usage:"search",...t});return{startsWith(a,n){return n.length===0?!0:(a=a.normalize("NFC"),n=n.normalize("NFC"),o.compare(a.slice(0,n.length),n)===0)},endsWith(a,n){return n.length===0?!0:(a=a.normalize("NFC"),n=n.normalize("NFC"),o.compare(a.slice(-n.length),n)===0)},contains(a,n){if(n.length===0)return!0;a=a.normalize("NFC"),n=n.normalize("NFC");let s=0;const i=n.length;for(;s+i<=a.length;s++){const l=a.slice(s,s+i);if(o.compare(n,l)===0)return!0}return!1}}}const Rr=e=>{const t=c.useRef();return c.useEffect(()=>{t.current=e}),t.current},Ar=[" ","Enter","ArrowUp","ArrowDown"],Mr=["Enter"],Ir=e=>!!(e.length===1&&e.match(/\S| /)),$0="Combobox",[ze,Pe]=yr($0),[Tr,je]=t0($0),Vr=({children:e})=>r.jsx(c0,{children:r.jsx(ze.Provider,{scope:void 0,children:e})}),Lr=e=>typeof e=="string"?e==="none"?{type:e,filter:void 0}:{type:e,filter:"startsWith"}:e,Er=e=>{const{allowCustomValue:t=!1,autocomplete:o="none",children:a,open:n,defaultOpen:s,onOpenChange:i,value:l,defaultValue:d,onValueChange:f,disabled:u,required:m=!1,locale:h="en-EN",onTextValueChange:x,textValue:v,defaultTextValue:b,filterValue:C,defaultFilterValue:$,onFilterValueChange:p,isPrintableCharacter:j=Ir,visible:y=!1}=e,[S,A]=c.useState(null),[R,N]=c.useState(null),[H,k]=c.useState(null),[_,E]=c.useState(null),[V=!1,D]=ke({prop:n,defaultProp:s,onChange:i}),[U,K]=ke({prop:l,defaultProp:d,onChange:f}),[G,Y]=ke({prop:v,defaultProp:t&&!b?l:b,onChange:x}),[Z,te]=ke({prop:C,defaultProp:$,onChange:p}),X=De(),se=c.useCallback((re,ee)=>{const ue=ee.map(B=>B.ref.current),[T,...W]=ue,[Q]=W.slice(-1),F=_??ee.find(B=>B.value===U)?.ref.current;for(const B of re){if(B===F)return;if(B?.scrollIntoView({block:"nearest"}),B===T&&R&&(R.scrollTop=0),B===Q&&R&&(R.scrollTop=R.scrollHeight),E(B),o==="both"){const q=ee.find(le=>le.ref.current===B);q&&Y(q.textValue)}if(B!==F)return}},[o,Y,R,_,U]),O=Lr(o);return c.useEffect(()=>{o!=="both"&&E(null)},[G,o]),c.useEffect(()=>{if(H&&S)return p0([H,S])},[H,S]),r.jsx(Vr,{children:r.jsx(Tr,{allowCustomValue:t,autocomplete:O,required:m,trigger:S,onTriggerChange:A,contentId:X,value:U,onValueChange:K,open:V,onOpenChange:D,disabled:u,locale:h,focusFirst:se,textValue:G,onTextValueChange:Y,onViewportChange:N,onContentChange:k,visuallyFocussedItem:_,filterValue:Z,onFilterValueChange:te,onVisuallyFocussedItemChange:E,isPrintableCharacter:j,visible:y,children:a})})},C0="ComboboxTrigger",j0=c.forwardRef((e,t)=>{const{...o}=e,a=je(C0),n=()=>{a.disabled||a.onOpenChange(!0)};return r.jsx(n0,{asChild:!0,children:r.jsx(qt,{asChild:!0,trapped:a.open,onMountAutoFocus:s=>{s.preventDefault()},onUnmountAutoFocus:s=>{a.trigger?.focus({preventScroll:!0}),document.getSelection()?.empty(),s.preventDefault()},children:r.jsx("div",{ref:t,"data-disabled":a.disabled?"":void 0,...o,onClick:J(o.onClick,s=>{if(a.disabled){s.preventDefault();return}a.trigger?.focus()}),onPointerDown:J(o.onPointerDown,s=>{if(a.disabled){s.preventDefault();return}const i=s.target;i.hasPointerCapture(s.pointerId)&&i.releasePointerCapture(s.pointerId),(i.closest("button")??i.closest("div"))===s.currentTarget&&s.button===0&&s.ctrlKey===!1&&(n(),a.trigger?.focus())})})})})});j0.displayName=C0;const y0="ComboboxInput",S0=c.forwardRef((e,t)=>{const o=je(y0),a=c.useRef(null),{getItems:n}=Pe(void 0),{startsWith:s}=Zt(o.locale,{sensitivity:"base"}),i=o.disabled,l=ae(a,t,o.onTriggerChange),d=()=>{i||o.onOpenChange(!0)},f=Rr(o.filterValue);return xe(()=>{const u=setTimeout(()=>{if(o.textValue===""||o.textValue===void 0||o.filterValue===""||o.filterValue===void 0)return;const m=n().find(x=>x.type==="option"&&s(x.textValue,o.textValue)),h=Yr(f??"",o.filterValue);m&&!o.visuallyFocussedItem&&h===o.filterValue.length&&a.current?.setSelectionRange(o.filterValue.length,o.textValue.length)});return()=>clearTimeout(u)},[o.textValue,o.filterValue,s,o.visuallyFocussedItem,n,f]),r.jsx("input",{type:"text",role:"combobox","aria-controls":o.contentId,"aria-expanded":o.open,"aria-required":o.required,"aria-autocomplete":o.autocomplete.type,"data-state":o.open?"open":"closed","aria-disabled":i,"aria-activedescendant":o.visuallyFocussedItem?.id,disabled:i,"data-disabled":i?"":void 0,"data-placeholder":o.textValue===void 0?"":void 0,value:o.textValue??"",...e,ref:l,onKeyDown:J(e.onKeyDown,u=>{if(["ArrowUp","ArrowDown","Home","End"].includes(u.key))o.open||d(),setTimeout(()=>{let h=n().filter(x=>!x.disabled&&x.isVisible).map(x=>x.ref.current);if(["ArrowUp","End"].includes(u.key)&&(h=h.slice().reverse()),["ArrowUp","ArrowDown"].includes(u.key)){const x=o.visuallyFocussedItem??n().find(v=>v.value===o.value)?.ref.current;if(x){let v=h.indexOf(x);v===h.length-1&&(v=-1),h=h.slice(v+1)}}if(["ArrowDown"].includes(u.key)&&o.autocomplete.type==="both"&&h.length>1){const[x,...v]=h,b=n().find(C=>C.ref.current===x).textValue;o.textValue===b&&(h=v)}o.focusFirst(h,n())}),u.preventDefault();else if(["Tab"].includes(u.key)&&o.open)u.preventDefault();else if(["Escape"].includes(u.key))o.open?o.onOpenChange(!1):(o.onValueChange(void 0),o.onTextValueChange("")),u.preventDefault();else if(Mr.includes(u.key)){if(o.visuallyFocussedItem){const m=n().find(h=>h.ref.current===o.visuallyFocussedItem);m&&(o.onValueChange(m.value),o.onTextValueChange(m.textValue),o.autocomplete.type==="both"&&o.onFilterValueChange(m.textValue),m.ref.current?.click())}else{const m=n().find(h=>h.type==="option"&&!h.disabled&&h.textValue===o.textValue);m&&(o.onValueChange(m.value),o.onTextValueChange(m.textValue),o.autocomplete.type==="both"&&o.onFilterValueChange(m.textValue),m.ref.current?.click())}o.onOpenChange(!1),u.preventDefault()}else o.onVisuallyFocussedItemChange(null)}),onChange:J(e.onChange,u=>{o.onTextValueChange(u.currentTarget.value),o.autocomplete.type==="both"&&o.onFilterValueChange(u.currentTarget.value)}),onKeyUp:J(e.onKeyUp,u=>{if(!o.open&&(o.isPrintableCharacter(u.key)||["Backspace"].includes(u.key))&&d(),setTimeout(()=>{if(o.autocomplete.type==="both"&&o.isPrintableCharacter(u.key)&&o.filterValue!==void 0){const m=o.filterValue,h=n().find(x=>s(x.textValue,m));h&&o.onTextValueChange(h.textValue)}}),o.autocomplete.type==="none"&&o.isPrintableCharacter(u.key)){const m=o.textValue??"",h=n().find(x=>s(x.textValue,m));h&&(o.onVisuallyFocussedItemChange(h.ref.current),h.ref.current?.scrollIntoView())}}),onBlur:J(e.onBlur,()=>{if(o.open)return;o.onVisuallyFocussedItemChange(null);const[u]=n().filter(h=>h.textValue===o.textValue&&h.type==="option");if(u){o.onValueChange(u.value),o.autocomplete.type==="both"&&o.onFilterValueChange(u.textValue);return}if(o.allowCustomValue){o.onValueChange(o.textValue),o.autocomplete.type==="both"&&o.onFilterValueChange(o.textValue);return}const[m]=n().filter(h=>h.value===o.value&&h.type==="option");m&&o.textValue!==""?(o.onTextValueChange(m.textValue),o.autocomplete.type==="both"&&o.onFilterValueChange(m.textValue)):(o.onValueChange(void 0),o.onTextValueChange(""))})})});S0.displayName="ComboboxTextInput";const R0=c.forwardRef((e,t)=>{const{children:o,...a}=e,n=je(y0),s=n.disabled,i=()=>{s||(n.onOpenChange(!0),n.trigger?.focus())};return r.jsx(oe.button,{"aria-hidden":!0,type:"button","aria-disabled":s,"aria-controls":n.contentId,"aria-expanded":n.open,disabled:s,"data-disabled":s?"":void 0,...a,tabIndex:-1,ref:t,onClick:J(a.onClick,()=>{n.trigger?.focus()}),onPointerDown:J(a.onPointerDown,l=>{l.button===0&&l.ctrlKey===!1&&(i(),l.preventDefault())}),onKeyDown:J(a.onKeyDown,l=>{Ar.includes(l.key)&&(i(),l.preventDefault())}),children:o||"▼"})});R0.displayName="ComboboxIcon";const Hr="ComboboxPortal",A0=e=>r.jsx(i0,{asChild:!0,...e});A0.displayName=Hr;const Xt="ComboboxContent",M0=c.forwardRef((e,t)=>{const o=je(Xt),{getItems:a}=Pe(void 0),[n,s]=c.useState();if(xe(()=>{s(new DocumentFragment)},[]),xe(()=>{o.open&&o.autocomplete.type==="none"&&setTimeout(()=>{a().find(l=>l.value===o.value)?.ref.current?.scrollIntoView({block:"nearest"})})},[a,o.autocomplete,o.value,o.open]),!o.open){const i=n;return i?_e.createPortal(r.jsx(ze.Slot,{scope:void 0,children:r.jsx("div",{children:e.children})}),i):null}return r.jsx(I0,{...e,ref:t})});M0.displayName=Xt;const Dr=10,I0=c.forwardRef((e,t)=>{const{onEscapeKeyDown:o,onPointerDownOutside:a,...n}=e,s=je(Xt),i=ae(t,d=>s.onContentChange(d)),{onOpenChange:l}=s;return Gt(),c.useEffect(()=>{const d=()=>{l(!1)};return window.addEventListener("blur",d),window.addEventListener("resize",d),()=>{window.removeEventListener("blur",d),window.removeEventListener("resize",d)}},[l]),r.jsx(Kt,{allowPinchZoom:!0,children:r.jsx(o0,{asChild:!0,onEscapeKeyDown:o,onPointerDownOutside:a,onFocusOutside:d=>{d.preventDefault()},onDismiss:()=>{s.onOpenChange(!1),s.trigger?.focus({preventScroll:!0})},children:r.jsx(T0,{role:"listbox",id:s.contentId,"data-state":s.open?"open":"closed",onContextMenu:d=>d.preventDefault(),...n,ref:i,style:{display:"flex",flexDirection:"column",outline:"none",...n.style}})})})});I0.displayName="ComboboxContentImpl";const T0=c.forwardRef((e,t)=>{const{align:o="start",collisionPadding:a=Dr,...n}=e;return r.jsx(r0,{...n,ref:t,align:o,collisionPadding:a,style:{boxSizing:"border-box",...n.style,"--radix-combobox-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-combobox-content-available-width":"var(--radix-popper-available-width)","--radix-combobox-content-available-height":"var(--radix-popper-available-height)","--radix-combobox-trigger-width":"var(--radix-popper-anchor-width)","--radix-combobox-trigger-height":"var(--radix-popper-anchor-height)"}})});T0.displayName="ComboboxPopperPosition";const V0="ComboboxViewport",L0=c.forwardRef((e,t)=>{const o=je(V0),a=ae(t,o.onViewportChange);return r.jsxs(r.Fragment,{children:[r.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-combobox-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-combobox-viewport]::-webkit-scrollbar{display:none}"}}),r.jsx(ze.Slot,{scope:void 0,children:r.jsx(oe.div,{"data-radix-combobox-viewport":"",role:"presentation",...e,ref:a,style:{position:"relative",flex:1,overflow:"auto",...e.style}})})]})});L0.displayName=V0;const gt="ComboboxItem",[Hn,Qt]=t0(gt),Jt=c.forwardRef((e,t)=>{const{value:o,disabled:a=!1,textValue:n,...s}=e,[i,l]=c.useState();xe(()=>{l(new DocumentFragment)},[]);const{onTextValueChange:d,textValue:f,...u}=je(gt),m=De(),[h,x]=c.useState(n??""),v=u.value===o,{startsWith:b,contains:C}=Zt(u.locale,{sensitivity:"base"}),$=c.useCallback(p=>{x(j=>j||(p?.textContent??"").trim())},[]);return c.useEffect(()=>{v&&f===void 0&&h!==""&&d(h)},[h,v,f,d]),u.autocomplete.type==="both"&&h&&u.filterValue&&!b(h,u.filterValue)||u.autocomplete.type==="list"&&u.autocomplete.filter==="startsWith"&&h&&f&&!b(h,f)||u.autocomplete.type==="list"&&u.autocomplete.filter==="contains"&&h&&f&&!C(h,f)?i?_e.createPortal(r.jsx(Hn,{textId:m,onTextValueChange:$,isSelected:v,textValue:h,children:r.jsx(ze.ItemSlot,{scope:void 0,value:o,textValue:h,disabled:a,type:"option",isVisible:!1,children:r.jsx(Ht,{ref:t,value:o,disabled:a,...s})})}),i):null:r.jsx(Hn,{textId:m,onTextValueChange:$,isSelected:v,textValue:h,children:r.jsx(ze.ItemSlot,{scope:void 0,value:o,textValue:h,disabled:a,type:"option",isVisible:!0,children:r.jsx(Ht,{ref:t,value:o,disabled:a,...s})})})});Jt.displayName=gt;const E0="ComboboxItemImpl",Ht=c.forwardRef((e,t)=>{const{value:o,disabled:a=!1,...n}=e,s=c.useRef(null),i=ae(t,s),{getItems:l}=Pe(void 0),{onTextValueChange:d,visuallyFocussedItem:f,...u}=je(gt),{isSelected:m,textValue:h,textId:x}=Qt(E0),v=()=>{a||(u.onValueChange(o),d(h),u.onOpenChange(!1),u.autocomplete.type==="both"&&u.onFilterValueChange(h),u.trigger?.focus({preventScroll:!0}))},b=c.useMemo(()=>f===l().find($=>$.ref.current===s.current)?.ref.current,[l,f]),C=De();return r.jsx(oe.div,{role:"option","aria-labelledby":x,"data-highlighted":b?"":void 0,"aria-selected":m&&b,"data-state":m?"checked":"unchecked","aria-disabled":a||void 0,"data-disabled":a?"":void 0,tabIndex:a?void 0:-1,...n,id:C,ref:i,onPointerUp:J(n.onPointerUp,v)})});Ht.displayName=E0;const H0="ComboboxItemText",D0=c.forwardRef((e,t)=>{const{className:o,style:a,...n}=e,s=Qt(H0),i=ae(t,s.onTextValueChange);return r.jsx(oe.span,{id:s.textId,...n,ref:i})});D0.displayName=H0;const B0="ComboboxItemIndicator",k0=c.forwardRef((e,t)=>{const{isSelected:o}=Qt(B0);return o?r.jsx(oe.span,{"aria-hidden":!0,...e,ref:t}):null});k0.displayName=B0;const Pt="ComboboxNoValueFound",z0=c.forwardRef((e,t)=>{const{textValue:o="",filterValue:a="",visible:n=!1,locale:s,autocomplete:i}=je(Pt),[l,d]=c.useState([]),{subscribe:f}=Pe(void 0),{startsWith:u,contains:m}=Zt(s,{sensitivity:"base"});return c.useEffect(()=>{const h=f(x=>{if(n){const v=x.filter(b=>b.type!=="create");d(v)}else d(x)});return()=>{h()}},[n,f]),i.type==="none"&&l.length>0||i.type==="list"&&i.filter==="startsWith"&&l.some(h=>u(h.textValue,o))||i.type==="both"&&l.some(h=>u(h.textValue,a))||i.type==="list"&&i.filter==="contains"&&l.some(h=>m(h.textValue,o))?null:r.jsx(oe.div,{...e,ref:t})});z0.displayName=Pt;const N0=c.forwardRef((e,t)=>{const{disabled:o=!1,...a}=e,n=je(Pt),{textValue:s,visuallyFocussedItem:i}=n,{getItems:l,subscribe:d}=Pe(void 0),f=c.useRef(null),[u,m]=c.useState(!1),h=ae(t,f),x=c.useMemo(()=>i===l().find(C=>C.ref.current===f.current)?.ref.current,[l,i]),v=De(),b=()=>{!o&&s&&(n.onValueChange(s),n.onTextValueChange(s),n.onOpenChange(!1),n.autocomplete.type==="both"&&n.onFilterValueChange(s),n.trigger?.focus({preventScroll:!0}))};return xe(()=>{const C=d($=>{m(!$.some(p=>p.textValue===s&&p.type!=="create"))});return l().length===0&&m(!0),()=>{C()}},[s,d,l]),(!s||!u)&&!n.visible?null:r.jsx(ze.ItemSlot,{scope:void 0,value:s??"",textValue:s??"",disabled:o,isVisible:!0,type:"create",children:r.jsx(oe.div,{role:"option",tabIndex:o?void 0:-1,"aria-disabled":o||void 0,"data-disabled":o?"":void 0,"data-highlighted":x?"":void 0,...a,id:v,ref:h,onPointerUp:J(a.onPointerUp,b)})})});N0.displayName="ComboboxCreateItem";const Br=Er,kr=j0,zr=S0,Nr=R0,Or=A0,Fr=M0,_r=L0,Wr=Jt,Ur=D0,qr=k0,Gr=z0,Kr=N0;function Yr(e,t){const o=Math.min(e.length,t.length);for(let a=0;a<o;a++)if(e[a]!==t[a])return a;return o}const ve=Object.freeze(Object.defineProperty({__proto__:null,ComboboxItem:Jt,Content:Fr,CreateItem:Kr,Icon:Nr,Item:Wr,ItemIndicator:qr,ItemText:Ur,NoValueFound:Gr,Portal:Or,Root:Br,TextInput:zr,Trigger:kr,Viewport:_r},Symbol.toStringTag,{value:"Module"}));function en(e){const t=c.useRef(e);return c.useEffect(()=>{t.current=e}),c.useMemo(()=>(...o)=>t.current?.(...o),[])}const Zr=[" ","Enter","ArrowUp","ArrowDown"],Xr=[" ","Enter"],et="Select",[ft,tt,Qr]=Xo(et),[We,Jr]=a0(et,[Qr,s0]),mt=s0(),[Pr,Ae]=We(et),[ea,ta]=We(et),tn=e=>{const{__scopeSelect:t,children:o,open:a,defaultOpen:n,onOpenChange:s,value:i,defaultValue:l,onValueChange:d,dir:f,disabled:u,required:m,multi:h=!1}=e,x=mt(t),[v,b]=c.useState(null),[C,$]=c.useState(null),[p,j]=c.useState(!1),y=e1(f),[S=!1,A]=ke({prop:a,defaultProp:n,onChange:s}),[R,N]=ke({prop:i,defaultProp:l,onChange(E){d&&(Array.isArray(E),d(E))}}),H=c.useRef(null),[k,_]=c.useState(new Set);return r.jsx(c0,{...x,children:r.jsx(Pr,{required:m,scope:t,trigger:v,onTriggerChange:b,valueNode:C,onValueNodeChange:$,valueNodeHasChildren:p,onValueNodeHasChildrenChange:j,contentId:De(),value:R,onValueChange:N,open:S,onOpenChange:A,dir:y,triggerPointerDownPosRef:H,disabled:u,multi:h,children:r.jsx(ft.Provider,{scope:t,children:r.jsx(ea,{scope:e.__scopeSelect,onNativeOptionAdd:c.useCallback(E=>{_(V=>new Set(V).add(E))},[]),onNativeOptionRemove:c.useCallback(E=>{_(V=>{const D=new Set(V);return D.delete(E),D})},[]),children:o})})})})};tn.displayName=et;const O0="SelectTrigger",nn=c.forwardRef((e,t)=>{const{__scopeSelect:o,...a}=e,n=mt(o),s=Ae(O0,o),i=s.disabled,l=ae(t,s.onTriggerChange),d=tt(o),[f,u,m]=Z0(x=>{const v=d().filter($=>!$.disabled),b=v.find($=>$.value===s.value),C=X0(v,x,b);if(C!==void 0&&!Array.isArray(C.value)){const $=s.multi?[C.value]:C.value;s.onValueChange($)}}),h=()=>{i||(s.onOpenChange(!0),m())};return r.jsx(n0,{asChild:!0,...n,children:r.jsx(oe.div,{role:"combobox","aria-controls":s.contentId,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed","data-disabled":i?"":void 0,"data-placeholder":s.value===void 0?"":void 0,tabIndex:i?void 0:0,...a,ref:l,onClick:J(a.onClick,x=>{x.currentTarget.focus()}),onPointerDown:J(a.onPointerDown,x=>{const v=x.target;v.hasPointerCapture(x.pointerId)&&v.releasePointerCapture(x.pointerId),(v.closest("button")??v.closest("div"))===x.currentTarget&&x.button===0&&x.ctrlKey===!1&&(h(),s.triggerPointerDownPosRef.current={x:Math.round(x.pageX),y:Math.round(x.pageY)},x.preventDefault())}),onKeyDown:J(a.onKeyDown,x=>{const v=f.current!=="",b=x.ctrlKey||x.altKey||x.metaKey,C=x.target;(C.closest("button")??C.closest("div"))===x.currentTarget&&(!b&&x.key.length===1&&u(x.key),!(v&&x.key===" ")&&Zr.includes(x.key)&&(h(),x.preventDefault()))})})})});nn.displayName=O0;const F0="SelectValue",on=c.forwardRef((e,t)=>{const{__scopeSelect:o,children:a,placeholder:n,...s}=e,i=Ae(F0,o),{onValueNodeHasChildrenChange:l}=i,d=a!==void 0,f=ae(t,i.onValueNodeChange),[u,m]=c.useState([]),h=tt(o);xe(()=>{l(d)},[l,d]),c.useLayoutEffect(()=>{if(Array.isArray(i.value)&&u.length!==i.value.length){const v=setTimeout(()=>{const b=h().filter(C=>Array.isArray(C.value)?!1:i.value?.includes(C.value));m(b)});return()=>{clearTimeout(v)}}},[i.value,h,u]);let x;if((i.value===void 0||i.value.length===0)&&n!==void 0)x=r.jsx("span",{children:n});else if(typeof a=="function")if(Array.isArray(i.value)){const v=i.value.map(b=>{const C=u.find($=>$.value===b);return C?a({value:b,textValue:C?.textValue}):null});x=v.every(b=>b===null)?n:v}else x=a(i.value);else x=a;return r.jsx(oe.span,{...s,ref:f,children:x||null})});on.displayName=F0;const na="SelectIcon",rn=c.forwardRef((e,t)=>{const{__scopeSelect:o,children:a,...n}=e;return r.jsx(oe.span,{"aria-hidden":!0,...n,ref:t,children:a||"▼"})});rn.displayName=na;const oa="SelectPortal",an=e=>r.jsx(i0,{asChild:!0,...e});an.displayName=oa;const Le="SelectContent",sn=c.forwardRef((e,t)=>{const o=Ae(Le,e.__scopeSelect),[a,n]=c.useState();if(xe(()=>{n(new DocumentFragment)},[]),!o.open){const s=a;return s?_e.createPortal(r.jsx(_0,{scope:e.__scopeSelect,children:r.jsx(ft.Slot,{scope:e.__scopeSelect,children:r.jsx("div",{children:e.children})})}),s):null}return r.jsx(W0,{...e,ref:t})});sn.displayName=Le;const Se=10,[_0,Me]=We(Le),ra="SelectContentImpl",W0=c.forwardRef((e,t)=>{const{__scopeSelect:o,position:a="item-aligned",onCloseAutoFocus:n,onEscapeKeyDown:s,onPointerDownOutside:i,side:l,sideOffset:d,align:f,alignOffset:u,arrowPadding:m,collisionBoundary:h,collisionPadding:x,sticky:v,hideWhenDetached:b,avoidCollisions:C,...$}=e,p=Ae(Le,o),[j,y]=c.useState(null),[S,A]=c.useState(null),R=ae(t,T=>y(T)),[N,H]=c.useState(null),[k,_]=c.useState(null),E=tt(o),[V,D]=c.useState(!1),U=c.useRef(!1);c.useEffect(()=>{if(j)return p0(j)},[j]),Gt();const K=c.useCallback(T=>{const[W,...Q]=E().map(q=>q.ref.current),[F]=Q.slice(-1),B=document.activeElement;for(const q of T)if(q===B||(q?.scrollIntoView({block:"nearest"}),q===W&&S&&(S.scrollTop=0),q===F&&S&&(S.scrollTop=S.scrollHeight),q?.focus(),document.activeElement!==B))return},[E,S]),G=c.useCallback(()=>K([N,j]),[K,N,j]);c.useEffect(()=>{V&&G()},[V,G]);const{onOpenChange:Y,triggerPointerDownPosRef:Z}=p;c.useEffect(()=>{if(j){let T={x:0,y:0};const W=F=>{T={x:Math.abs(Math.round(F.pageX)-(Z.current?.x??0)),y:Math.abs(Math.round(F.pageY)-(Z.current?.y??0))}},Q=F=>{T.x<=10&&T.y<=10?F.preventDefault():j.contains(F.target)||Y(!1),document.removeEventListener("pointermove",W),Z.current=null};return Z.current!==null&&(document.addEventListener("pointermove",W),document.addEventListener("pointerup",Q,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",W),document.removeEventListener("pointerup",Q,{capture:!0})}}},[j,Y,Z]),c.useEffect(()=>{const T=()=>Y(!1);return window.addEventListener("blur",T),window.addEventListener("resize",T),()=>{window.removeEventListener("blur",T),window.removeEventListener("resize",T)}},[Y]);const[te,X]=Z0(T=>{const W=E().filter(B=>!B.disabled),Q=W.find(B=>B.ref.current===document.activeElement),F=X0(W,T,Q);F&&setTimeout(()=>F.ref.current.focus())}),se=c.useCallback((T,W,Q)=>{const F=!U.current&&!Q;(p.value!==void 0&&p.value===W||F)&&(H(T),F&&(U.current=!0))},[p.value]),O=c.useCallback(()=>j?.focus(),[j]),re=c.useCallback((T,W,Q)=>{const F=!U.current&&!Q;(p.value!==void 0&&(Array.isArray(W)?W.every(q=>p.value?.includes(q)):p.value===W)||F)&&_(T)},[p.value]),ee=a==="popper"?Dt:U0,ue=ee===Dt?{side:l,sideOffset:d,align:f,alignOffset:u,arrowPadding:m,collisionBoundary:h,collisionPadding:x,sticky:v,hideWhenDetached:b,avoidCollisions:C}:{};return r.jsx(_0,{scope:o,content:j,viewport:S,onViewportChange:A,itemRefCallback:se,selectedItem:N,onItemLeave:O,itemTextRefCallback:re,focusSelectedItem:G,selectedItemText:k,position:a,isPositioned:V,searchRef:te,children:r.jsx(Kt,{as:Tt,allowPinchZoom:!0,children:r.jsx(qt,{asChild:!0,trapped:p.open,onMountAutoFocus:T=>{T.preventDefault()},onUnmountAutoFocus:J(n,T=>{p.trigger?.focus({preventScroll:!0}),document.getSelection()?.empty(),T.preventDefault()}),children:r.jsx(o0,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:s,onPointerDownOutside:i,onFocusOutside:T=>T.preventDefault(),onDismiss:()=>p.onOpenChange(!1),children:r.jsx(ee,{role:"listbox",id:p.contentId,"data-state":p.open?"open":"closed","aria-multiselectable":p.multi?"true":void 0,dir:p.dir,onContextMenu:T=>T.preventDefault(),...$,...ue,onPlaced:()=>D(!0),ref:R,style:{display:"flex",flexDirection:"column",outline:"none",...$.style},onKeyDown:J($.onKeyDown,T=>{const W=T.ctrlKey||T.altKey||T.metaKey;if(T.key==="Tab"&&T.preventDefault(),!W&&T.key.length===1&&X(T.key),["ArrowUp","ArrowDown","Home","End"].includes(T.key)){let F=E().filter(B=>!B.disabled).map(B=>B.ref.current);if(["ArrowUp","End"].includes(T.key)&&(F=F.slice().reverse()),["ArrowUp","ArrowDown"].includes(T.key)){const B=T.target,q=F.indexOf(B);F=F.slice(q+1)}setTimeout(()=>K(F)),T.preventDefault()}})})})})})})});W0.displayName=ra;const aa="SelectItemAlignedPosition",U0=c.forwardRef((e,t)=>{const{__scopeSelect:o,onPlaced:a,...n}=e,s=Ae(Le,o),i=Me(Le,o),[l,d]=c.useState(null),[f,u]=c.useState(null),m=ae(t,R=>u(R)),h=tt(o),x=c.useRef(!1),v=c.useRef(!0),{viewport:b,selectedItem:C,selectedItemText:$,focusSelectedItem:p}=i,j=c.useCallback(()=>{if(s.trigger&&s.valueNode&&l&&f&&b&&C&&$){const R=s.trigger.getBoundingClientRect(),N=f.getBoundingClientRect(),H=s.valueNode.getBoundingClientRect(),k=$.getBoundingClientRect();if(s.dir!=="rtl"){const B=k.left-N.left,q=H.left-B,le=R.left-q,de=R.width+le,P=Math.max(de,N.width),$e=window.innerWidth-Se,ye=En(q,[Se,$e-P]);l.style.minWidth=`${de}px`,l.style.left=`${ye}px`}else{const B=N.right-k.right,q=window.innerWidth-H.right-B,le=window.innerWidth-R.right-q,de=R.width+le,P=Math.max(de,N.width),$e=window.innerWidth-Se,ye=En(q,[Se,$e-P]);l.style.minWidth=`${de}px`,l.style.right=`${ye}px`}const _=h(),E=window.innerHeight-Se*2,V=b.scrollHeight,D=window.getComputedStyle(f),U=parseInt(D.borderTopWidth,10),K=parseInt(D.paddingTop,10),G=parseInt(D.borderBottomWidth,10),Y=parseInt(D.paddingBottom,10),Z=U+K+V+Y+G,te=Math.min(C.offsetHeight*5,Z),X=window.getComputedStyle(b),se=parseInt(X.paddingTop,10),O=parseInt(X.paddingBottom,10),re=R.top+R.height/2-Se,ee=E-re,ue=C.offsetHeight/2,T=C.offsetTop+ue,W=U+K+T,Q=Z-W;if(W<=re){const B=C===_[_.length-1].ref.current;l.style.bottom="0px";const q=f.clientHeight-b.offsetTop-b.offsetHeight,le=Math.max(ee,ue+(B?O:0)+q+G),de=W+le;l.style.height=`${de}px`}else{const B=C===_[0].ref.current;l.style.top="0px";const le=Math.max(re,U+b.offsetTop+(B?se:0)+ue)+Q;l.style.height=`${le}px`,b.scrollTop=W-re+b.offsetTop}l.style.margin=`${Se}px 0`,l.style.minHeight=`${te}px`,l.style.maxHeight=`${E}px`,a?.(),requestAnimationFrame(()=>x.current=!0)}},[h,s.trigger,s.valueNode,l,f,b,C,$,s.dir,a]);xe(()=>j(),[j]);const[y,S]=c.useState();xe(()=>{f&&S(window.getComputedStyle(f).zIndex)},[f]);const A=c.useCallback(R=>{R&&v.current===!0&&(j(),p?.(),v.current=!1)},[j,p]);return r.jsx(ia,{scope:o,contentWrapper:l,shouldExpandOnScrollRef:x,onScrollButtonChange:A,children:r.jsx("div",{ref:d,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:y},children:r.jsx(oe.div,{...n,ref:m,style:{boxSizing:"border-box",maxHeight:"100%",...n.style}})})})});U0.displayName=aa;const sa="SelectPopperPosition",Dt=c.forwardRef((e,t)=>{const{__scopeSelect:o,align:a="start",collisionPadding:n=Se,...s}=e,i=mt(o);return r.jsx(r0,{...i,...s,ref:t,align:a,collisionPadding:n,style:{boxSizing:"border-box",...s.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Dt.displayName=sa;const[ia,cn]=We(Le,{}),Bt="SelectViewport",ln=c.forwardRef((e,t)=>{const{__scopeSelect:o,...a}=e,n=Me(Bt,o),s=cn(Bt,o),i=ae(t,n.onViewportChange),l=c.useRef(0);return r.jsxs(r.Fragment,{children:[r.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),r.jsx(ft.Slot,{scope:o,children:r.jsx(oe.div,{"data-radix-select-viewport":"",role:"presentation",...a,ref:i,style:{position:"relative",flex:1,overflow:"auto",...a.style},onScroll:J(a.onScroll,d=>{const f=d.currentTarget,{contentWrapper:u,shouldExpandOnScrollRef:m}=s;if(m?.current&&u){const h=Math.abs(l.current-f.scrollTop);if(h>0){const x=window.innerHeight-Se*2,v=parseFloat(u.style.minHeight),b=parseFloat(u.style.height),C=Math.max(v,b);if(C<x){const $=C+h,p=Math.min(x,$),j=$-p;u.style.height=`${p}px`,u.style.bottom==="0px"&&(f.scrollTop=j>0?j:0,u.style.justifyContent="flex-end")}}}l.current=f.scrollTop})})})]})});ln.displayName=Bt;const q0="SelectGroup",[ca,la]=We(q0),dn=c.forwardRef((e,t)=>{const{__scopeSelect:o,...a}=e,n=De();return r.jsx(ca,{scope:o,id:n,children:r.jsx(oe.div,{role:"group","aria-labelledby":n,...a,ref:t})})});dn.displayName=q0;const G0="SelectLabel",hn=c.forwardRef((e,t)=>{const{__scopeSelect:o,...a}=e,n=la(G0,o);return r.jsx(oe.div,{id:n.id,...a,ref:t})});hn.displayName=G0;const ht="SelectItem",[da,K0]=We(ht),un=c.forwardRef((e,t)=>{const{__scopeSelect:o,value:a,disabled:n=!1,textValue:s,...i}=e,l=Ae(ht,o),d=Me(ht,o),f=typeof a=="string"?Array.isArray(l.value)?l.value.includes(a):l.value===a:a.every(p=>l.value?.includes(p)),u=Array.isArray(l.value)&&Array.isArray(a)&&a.some(p=>l.value?.includes(p)),[m,h]=c.useState(s??""),[x,v]=c.useState(!1),b=ae(t,p=>d.itemRefCallback?.(p,a,n)),C=De(),$=()=>{if(!n){let p=l.multi&&typeof a=="string"?[a]:a;u&&!f?l.onValueChange(p):Array.isArray(l.value)&&(p=Q0(a,l.value)),l.onValueChange(p),l.multi||l.onOpenChange(!1)}};if(!l.multi&&Array.isArray(a))throw new Error("You can only pass an array of values in multi selects");return r.jsx(da,{scope:o,value:a,disabled:n,textId:C,isSelected:f,isIntermediate:u,onItemTextChange:c.useCallback(p=>{h(j=>j||(p?.textContent??"").trim())},[]),children:r.jsx(ft.ItemSlot,{scope:o,value:a,disabled:n,textValue:m,children:r.jsx(oe.div,{role:"option","aria-labelledby":C,"data-highlighted":x?"":void 0,"aria-selected":l.multi?void 0:f&&x,"aria-checked":l.multi?f:void 0,"data-state":f?"checked":"unchecked","aria-disabled":n||void 0,"data-disabled":n?"":void 0,tabIndex:n?void 0:-1,...i,ref:b,onFocus:J(i.onFocus,()=>v(!0)),onBlur:J(i.onBlur,()=>v(!1)),onPointerUp:J(i.onPointerUp,$),onPointerMove:J(i.onPointerMove,p=>{n?d.onItemLeave?.():p.currentTarget.focus({preventScroll:!0})}),onPointerLeave:J(i.onPointerLeave,p=>{p.currentTarget===document.activeElement&&d.onItemLeave?.()}),onKeyDown:J(i.onKeyDown,p=>{d.searchRef?.current!==""&&p.key===" "||(Xr.includes(p.key)&&$(),p.key===" "&&p.preventDefault())})})})})});un.displayName=ht;const Ze="SelectItemText",gn=c.forwardRef((e,t)=>{const{__scopeSelect:o,className:a,style:n,...s}=e,i=Ae(Ze,o),l=Me(Ze,o),d=K0(Ze,o),f=ta(Ze,o),[u,m]=c.useState(null),h=ae(t,$=>m($),d.onItemTextChange,$=>l.itemTextRefCallback?.($,d.value,d.disabled)),x=u?.textContent,v=c.useMemo(()=>r.jsx("option",{value:d.value,disabled:d.disabled,children:x},Array.isArray(d.value)?d.value.join(";"):d.value),[d.disabled,d.value,x]),{onNativeOptionAdd:b,onNativeOptionRemove:C}=f;return xe(()=>(b(v),()=>C(v)),[b,C,v]),r.jsxs(r.Fragment,{children:[r.jsx(oe.span,{id:d.textId,...s,ref:h}),d.isSelected&&i.valueNode&&!i.valueNodeHasChildren?_e.createPortal(s.children,i.valueNode):null]})});gn.displayName=Ze;const Y0="SelectItemIndicator",fn=c.forwardRef((e,t)=>{const{__scopeSelect:o,children:a,...n}=e,s=K0(Y0,o);return typeof a=="function"?r.jsx(oe.span,{"aria-hidden":!0,...n,ref:t,children:a({isSelected:s.isSelected,isIntermediate:s.isIntermediate})}):s.isSelected?r.jsx(oe.span,{"aria-hidden":!0,...n,ref:t,children:a}):null});fn.displayName=Y0;const kt="SelectScrollUpButton",mn=c.forwardRef((e,t)=>{const o=Me(kt,e.__scopeSelect),a=cn(kt,e.__scopeSelect),[n,s]=c.useState(!1),i=ae(t,a.onScrollButtonChange);return xe(()=>{if(o.viewport&&o.isPositioned){const l=o.viewport,d=()=>{const f=l.scrollTop>0;s(f)};return d(),l.addEventListener("scroll",d),()=>l.removeEventListener("scroll",d)}},[o.viewport,o.isPositioned]),n?r.jsx(wn,{...e,ref:i,onAutoScroll:()=>{const{viewport:l,selectedItem:d}=o;l&&d&&(l.scrollTop-=d.offsetHeight)}}):null});mn.displayName=kt;const zt="SelectScrollDownButton",xn=c.forwardRef((e,t)=>{const o=Me(zt,e.__scopeSelect),a=cn(zt,e.__scopeSelect),[n,s]=c.useState(!1),i=ae(t,a.onScrollButtonChange);return xe(()=>{if(o.viewport&&o.isPositioned){const l=o.viewport,d=()=>{const f=l.scrollHeight-l.clientHeight,u=Math.ceil(l.scrollTop)<f;s(u)};return d(),l.addEventListener("scroll",d),()=>l.removeEventListener("scroll",d)}},[o.viewport,o.isPositioned]),n?r.jsx(wn,{...e,ref:i,onAutoScroll:()=>{const{viewport:l,selectedItem:d}=o;l&&d&&(l.scrollTop+=d.offsetHeight)}}):null});xn.displayName=zt;const wn=c.forwardRef((e,t)=>{const{__scopeSelect:o,onAutoScroll:a,...n}=e,s=Me("SelectScrollButton",o),i=c.useRef(null),l=tt(o),d=c.useCallback(()=>{i.current!==null&&(window.clearInterval(i.current),i.current=null)},[]);return c.useEffect(()=>()=>d(),[d]),xe(()=>{l().find(u=>u.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[l]),r.jsx(oe.div,{"aria-hidden":!0,...n,ref:t,style:{flexShrink:0,...n.style},onPointerMove:J(n.onPointerMove,()=>{s.onItemLeave?.(),i.current===null&&(i.current=window.setInterval(a,50))}),onPointerLeave:J(n.onPointerLeave,()=>{d()})})});wn.displayName="SelectScrollButtonImpl";const ha="SelectSeparator",vn=c.forwardRef((e,t)=>{const{__scopeSelect:o,...a}=e;return r.jsx(oe.div,{"aria-hidden":!0,...a,ref:t})});vn.displayName=ha;const Nt="SelectArrow",bn=c.forwardRef((e,t)=>{const{__scopeSelect:o,...a}=e,n=mt(o),s=Ae(Nt,o),i=Me(Nt,o);return s.open&&i.position==="popper"?r.jsx(Qo,{...n,...a,ref:t}):null});bn.displayName=Nt;const ua="BubbleSelect",ga=c.forwardRef((e,t)=>{const{value:o,...a}=e,n=c.useRef(null),s=ae(t,n),i=Jo(o),l=Ae(ua,void 0);c.useEffect(()=>{const f=n.current,u=window.HTMLSelectElement.prototype,h=Object.getOwnPropertyDescriptor(u,"value").set;if(i!==o&&h){const x=new Event("change",{bubbles:!0});h.call(f,o),f.dispatchEvent(x)}},[i,o]);let d=o;return l.multi&&!Array.isArray(o)&&(d=[]),r.jsx(Po,{asChild:!0,children:r.jsx("select",{...a,multiple:l.multi?!0:void 0,ref:s,defaultValue:d})})});ga.displayName="BubbleSelect";function Z0(e){const t=en(e),o=c.useRef(""),a=c.useRef(0),n=c.useCallback(i=>{const l=o.current+i;t(l),function d(f){o.current=f,window.clearTimeout(a.current),f!==""&&(a.current=window.setTimeout(()=>d(""),1e3))}(l)},[t]),s=c.useCallback(()=>{o.current="",window.clearTimeout(a.current)},[]);return c.useEffect(()=>()=>window.clearTimeout(a.current),[]),[o,n,s]}function X0(e,t,o){const n=t.length>1&&Array.from(t).every(f=>f===t[0])?t[0]:t,s=o?e.indexOf(o):-1;let i=fa(e,Math.max(s,0));n.length===1&&(i=i.filter(f=>f!==o));const d=i.find(f=>f.textValue.toLowerCase().startsWith(n.toLowerCase()));return d!==o?d:void 0}function fa(e,t){return e.map((o,a)=>e[(t+a)%e.length])}const Q0=(e,t=[])=>{if(Array.isArray(e))return e.reduce((a,n)=>Q0(n,a),t);const o=t.indexOf(e);return o===-1?[...t,e]:[...t.slice(0,o),...t.slice(o+1)]},ma=tn,xa=nn,wa=on,va=rn,ba=an,pa=sn,$a=ln,Ca=dn,ja=hn,ya=un,Sa=gn,Ra=fn,Aa=mn,Ma=xn,Ia=vn,Ta=bn,be=Object.freeze(Object.defineProperty({__proto__:null,Arrow:Ta,Content:pa,Group:Ca,Icon:va,Item:ya,ItemIndicator:Ra,ItemText:Sa,Label:ja,Portal:ba,Root:ma,ScrollDownButton:Ma,ScrollUpButton:Aa,Select:tn,SelectArrow:bn,SelectContent:sn,SelectGroup:dn,SelectIcon:rn,SelectItem:un,SelectItemIndicator:fn,SelectItemText:gn,SelectLabel:hn,SelectPortal:an,SelectScrollDownButton:xn,SelectScrollUpButton:mn,SelectSeparator:vn,SelectTrigger:nn,SelectValue:on,SelectViewport:ln,Separator:Ia,Trigger:xa,Value:wa,Viewport:$a,createSelectScope:Jr},Symbol.toStringTag,{value:"Module"}));function Ve(e,t,{checkForDefaultPrevented:o=!0}={}){return function(n){if(e?.(n),o===!1||!n.defaultPrevented)return t?.(n)}}const Va=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M16 2A12.014 12.014 0 0 0 4 14c0 3 1.57 6.883 4.201 10.375C10.85 27.894 13.764 30 16 30s5.151-2.101 7.799-5.625C26.43 20.875 28 17 28 14A12.014 12.014 0 0 0 16 2M8 14.5A1.5 1.5 0 0 1 9.5 13a4.5 4.5 0 0 1 4.5 4.5 1.5 1.5 0 0 1-1.5 1.5A4.5 4.5 0 0 1 8 14.5M18 25h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2m1.5-6a1.5 1.5 0 0 1-1.5-1.5 4.5 4.5 0 0 1 4.5-4.5 1.5 1.5 0 0 1 1.5 1.5 4.5 4.5 0 0 1-4.5 4.5"})})};c.forwardRef(Va);const La=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M28 6H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2v11a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V13a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-9 12h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2m9-7H4V8h24z"})})};c.forwardRef(La);const Ea=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M30.5 7v6a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1 0-3h2.137l-2.375-2.173-.047-.046a9.5 9.5 0 1 0-6.84 16.219H16a9.44 9.44 0 0 0 6.519-2.59 1.5 1.5 0 1 1 2.061 2.181A12.43 12.43 0 0 1 16 28.5h-.171a12.5 12.5 0 1 1 8.985-21.368L27.5 9.59V7a1.5 1.5 0 0 1 3 0"})})},Ha=c.forwardRef(Ea),yh=Ha,Da=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"m26.061 19.061-9 9a1.503 1.503 0 0 1-2.125 0l-9-9a1.503 1.503 0 1 1 2.125-2.125l6.439 6.439V5a1.5 1.5 0 1 1 3 0v18.375l6.439-6.44a1.502 1.502 0 1 1 2.125 2.125z"})})};c.forwardRef(Da);const Ba=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H8.625l6.44 6.439a1.502 1.502 0 1 1-2.125 2.125l-9-9a1.5 1.5 0 0 1 0-2.125l9-9a1.503 1.503 0 0 1 2.125 2.125L8.625 14.5H27a1.5 1.5 0 0 1 1.5 1.5"})})};c.forwardRef(Ba);const ka=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:s,viewBox:"0 0 16 16",stroke:i,ref:a,...o,children:r.jsx("path",{d:"M14.75 8a.75.75 0 0 1-.75.75H6.813l3.22 3.22a.751.751 0 1 1-1.063 1.062l-4.5-4.5a.75.75 0 0 1 0-1.063l4.5-4.5a.751.751 0 0 1 1.063 1.063L6.813 7.25H14a.75.75 0 0 1 .75.75M2.5 1.75a.75.75 0 0 0-.75.75v11a.75.75 0 0 0 1.5 0v-11a.75.75 0 0 0-.75-.75"})})};c.forwardRef(ka);const za=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:s,viewBox:"0 0 16 16",stroke:i,ref:a,...o,children:r.jsx("path",{d:"M11.53 7.47a.75.75 0 0 1 0 1.062l-4.5 4.5a.751.751 0 1 1-1.062-1.063l3.22-3.219H2a.75.75 0 1 1 0-1.5h7.188L5.969 4.03a.751.751 0 1 1 1.063-1.062zm1.97-5.72a.75.75 0 0 0-.75.75v11a.75.75 0 0 0 1.5 0v-11a.75.75 0 0 0-.75-.75"})})};c.forwardRef(za);const Na=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"m28.061 17.061-9 9a1.503 1.503 0 1 1-2.125-2.125l6.439-6.436H5a1.5 1.5 0 1 1 0-3h18.375l-6.436-6.44a1.503 1.503 0 0 1 2.125-2.125l9 9a1.5 1.5 0 0 1-.003 2.126"})})};c.forwardRef(Na);const Oa=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M26.061 15.061a1.5 1.5 0 0 1-2.125 0L17.5 8.625V27a1.5 1.5 0 1 1-3 0V8.625l-6.439 6.436a1.503 1.503 0 1 1-2.125-2.125l9-9a1.5 1.5 0 0 1 2.125 0l9 9a1.5 1.5 0 0 1 0 2.125"})})};c.forwardRef(Oa);const Fa=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M11 13.5H5A1.5 1.5 0 0 1 3.5 12V6a1.5 1.5 0 0 1 3 0v1.733C8.581 5.683 11.786 3.5 16 3.5c5.558 0 8.92 3.299 9.061 3.439a1.5 1.5 0 0 1-2.117 2.125C22.889 9.01 20.25 6.5 16 6.5c-3.625 0-6.367 2.21-8 4h3a1.5 1.5 0 1 1 0 3m16 5h-6a1.5 1.5 0 1 0 0 3h3c-1.625 1.79-4.375 4-8 4-4.25 0-6.889-2.511-6.944-2.565A1.5 1.5 0 0 0 6.94 25.06c.141.141 3.504 3.44 9.061 3.44 4.214 0 7.419-2.183 9.5-4.233V26a1.5 1.5 0 1 0 3 0v-6a1.5 1.5 0 0 0-1.5-1.5"})})};c.forwardRef(Fa);const _a=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M220 48v48a12 12 0 0 1-24 0V77l-39.51 39.52a12 12 0 0 1-17-17L179 60h-19a12 12 0 0 1 0-24h48a12 12 0 0 1 12 12M99.51 139.51 60 179v-19a12 12 0 0 0-24 0v48a12 12 0 0 0 12 12h48a12 12 0 0 0 0-24H77l39.52-39.51a12 12 0 0 0-17-17Z"})})};c.forwardRef(_a);const Wa=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M27.725 21.993C27.031 20.798 26 17.416 26 13a10 10 0 0 0-20 0c0 4.418-1.032 7.797-1.726 8.993A2 2 0 0 0 6 25h5.101a5 5 0 0 0 9.798 0H26a2 2 0 0 0 1.725-3.008M16 27a3 3 0 0 1-2.828-2h5.656A3 3 0 0 1 16 27"})})};c.forwardRef(Wa);const Ua=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M22.135 14.308A6.001 6.001 0 0 0 17.5 4.5H9A1.5 1.5 0 0 0 7.5 6v19A1.5 1.5 0 0 0 9 26.5h10a6.5 6.5 0 0 0 3.135-12.192M10.5 7.5h7a3 3 0 0 1 0 6h-7zm8.5 16h-8.5v-7H19a3.5 3.5 0 1 1 0 7"})})};c.forwardRef(Ua);const qa=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M27 4v20a1 1 0 0 1-1 1H9a2 2 0 0 0-2 2h17a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4h17a1 1 0 0 1 1 1"})})};c.forwardRef(qa);const Ga=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M19 14a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1m10-5v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v1h5a2 2 0 0 1 2 2M12 7h8V6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1zm15 7.201V9H5v5.201A23 23 0 0 0 16 17a23 23 0 0 0 11-2.799"})})};c.forwardRef(Ga);const Ka=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M9.5 8A1.5 1.5 0 0 1 11 6.5h16a1.5 1.5 0 0 1 0 3H11A1.5 1.5 0 0 1 9.5 8M27 14.5H11a1.5 1.5 0 1 0 0 3h16a1.5 1.5 0 1 0 0-3m0 8H11a1.5 1.5 0 1 0 0 3h16a1.5 1.5 0 1 0 0-3M5.5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4"})})};c.forwardRef(Ka);const Ya=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M26 4h-3V3a1 1 0 0 0-2 0v1H11V3a1 1 0 0 0-2 0v1H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 6H6V6h3v1a1 1 0 0 0 2 0V6h10v1a1 1 0 0 0 2 0V6h3z"})})},Za=c.forwardRef(Ya),Xa=Za,Qa=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M30 14h-1.35l-3.472-7.812A2 2 0 0 0 23.35 5H8.65a2 2 0 0 0-1.828 1.188L3.35 14H2a1 1 0 0 0 0 2h1v10a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-2h12v2a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V16h1a1 1 0 0 0 0-2m-20 6H8a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2m12 0a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z"})})};c.forwardRef(Qa);const Ja=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"m26.708 12.708-10 10a1 1 0 0 1-1.415 0l-10-10A1 1 0 0 1 6 11h20a1 1 0 0 1 .707 1.707"})})},Pa=c.forwardRef(Ja),Ee=Pa,es=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M26.924 20.383A1 1 0 0 1 26 21H6a1 1 0 0 1-.708-1.707l10-10a1 1 0 0 1 1.415 0l10 10a1 1 0 0 1 .217 1.09"})})};c.forwardRef(es);const ts=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M7 26a1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 0 1 0-2 3 3 0 0 1 3 3m-3-7a1 1 0 0 0 0 2 5 5 0 0 1 5 5 1 1 0 1 0 2 0 7.01 7.01 0 0 0-7-7m0-4a1 1 0 0 0 0 2 9.01 9.01 0 0 1 9 9 1 1 0 0 0 2 0A11.01 11.01 0 0 0 4 15M27 5H5a2 2 0 0 0-2 2v5a1 1 0 0 0 1 1 13.014 13.014 0 0 1 13 13 1 1 0 0 0 1 1h9a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2"})})};c.forwardRef(ts);const ns=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M25 3h-1a2 2 0 0 0-2 2v2h-3.5V5a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v2H10V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v5.586A1.98 1.98 0 0 0 5.586 12L7 13.414V27a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V13.414L26.414 12A1.98 1.98 0 0 0 27 10.586V5a2 2 0 0 0-2-2m-6 24h-6v-8a3 3 0 0 1 6 0z"})})};c.forwardRef(ns);const os=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-5-2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-3-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-3 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M25 24H7a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v13h17a1 1 0 0 1 0 2"})})};c.forwardRef(os);const rs=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M3.094 14.443a12.8 12.8 0 0 1 2.914-6.72 2 2 0 0 1 2.953-.138l3.459 3.533a1.98 1.98 0 0 1 .211 2.56 3.2 3.2 0 0 0-.462.968.5.5 0 0 1-.478.354h-8.1a.5.5 0 0 1-.497-.557m14.08-11.435A2 2 0 0 0 15 5v5.084a1.98 1.98 0 0 0 1.656 1.97 4 4 0 0 1 .677 7.72.51.51 0 0 0-.333.476v8.154a.5.5 0 0 0 .558.5A13.04 13.04 0 0 0 29 16.185C29.094 9.4 23.899 3.61 17.174 3.008M14.656 19.77a4 4 0 0 1-2.425-2.427.51.51 0 0 0-.475-.343H3.59a.5.5 0 0 0-.5.556A13.01 13.01 0 0 0 14.443 28.91a.5.5 0 0 0 .556-.5V20.25a.51.51 0 0 0-.343-.48"})})};c.forwardRef(rs);const as=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m0 2a11 11 0 0 1 8.984 4.659L16 14.845zm0 22a11 11 0 0 1-8.984-4.659l18.97-10.951A11 11 0 0 1 16 27"})})};c.forwardRef(as);const ss=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"m29.061 10.061-16 16a1.5 1.5 0 0 1-2.125 0l-7-7a1.504 1.504 0 0 1 2.125-2.125L12 22.875 26.939 7.939a1.502 1.502 0 1 1 2.125 2.125z"})})},is=c.forwardRef(ss),Sh=is,cs=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m5.708 10.708-7 7a1 1 0 0 1-1.415 0l-3-3a1 1 0 0 1 1.415-1.415L14 18.586l6.293-6.293a1 1 0 0 1 1.415 1.415"})})};c.forwardRef(cs);const ls=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M176.49 95.51a12 12 0 0 1 0 17l-56 56a12 12 0 0 1-17 0l-24-24a12 12 0 1 1 17-17L112 143l47.51-47.52a12 12 0 0 1 16.98.03M236 128A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84 84 0 1 0-84 84 84.09 84.09 0 0 0 84-84"})})};c.forwardRef(ls);const ds=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"m27.061 13.061-10 10a1.503 1.503 0 0 1-2.125 0l-10-10a1.503 1.503 0 1 1 2.125-2.125L16 19.875l8.939-8.94a1.502 1.502 0 1 1 2.125 2.125z"})})};c.forwardRef(ds);const hs=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M21.061 24.939a1.503 1.503 0 0 1-2.125 2.125l-10-10a1.5 1.5 0 0 1 0-2.125l10-10a1.503 1.503 0 0 1 2.125 2.125L12.125 16z"})})},us=c.forwardRef(hs),J0=us,gs=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"m23.061 17.061-10 10a1.503 1.503 0 0 1-2.125-2.125L19.875 16l-8.936-8.939a1.502 1.502 0 1 1 2.125-2.125l10 10a1.5 1.5 0 0 1-.003 2.125"})})},fs=c.forwardRef(gs),pn=fs,ms=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M27.061 21.061a1.503 1.503 0 0 1-2.125 0L16 12.125l-8.939 8.936a1.503 1.503 0 0 1-2.125-2.125l10-10a1.5 1.5 0 0 1 2.125 0l10 10a1.5 1.5 0 0 1 0 2.125"})})};c.forwardRef(ms);const xs=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m7 14h-7a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6h6a1 1 0 0 1 0 2"})})},ws=c.forwardRef(xs),vs=ws,bs=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M28 16a12 12 0 0 1-20.236 8.728 1.002 1.002 0 0 1 1.375-1.456 10 10 0 1 0-.21-14.343c-.441.446-.857.885-1.26 1.321l2.039 2.043A1 1 0 0 1 9 14H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1.707-.707L6.25 8.838c.402-.437.817-.875 1.258-1.32A12 12 0 0 1 28 16M16 9a1 1 0 0 0-1 1v6a1 1 0 0 0 .485.858l5 3a.999.999 0 0 0 1.486-1.1 1 1 0 0 0-.456-.616L17 15.434V10a1 1 0 0 0-1-1"})})};c.forwardRef(bs);const ps=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M20.008 5a11.01 11.01 0 0 0-9.847 6.084A10.9 10.9 0 0 0 9 15.966 1.023 1.023 0 0 1 8.071 17 1 1 0 0 1 7 16a13 13 0 0 1 .668-4.115.5.5 0 0 0-.594-.647A8.01 8.01 0 0 0 1 19c0 4.399 3.719 8 8.125 8H20a11.01 11.01 0 0 0 10.991-11.435C30.764 9.693 25.884 5 20.008 5"})})};c.forwardRef(ps);const $s=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M30.991 15.565C30.764 9.693 25.884 5 20.008 5a11.01 11.01 0 0 0-9.847 6.084A10.9 10.9 0 0 0 9 15.966 1.023 1.023 0 0 1 8.071 17 1 1 0 0 1 7 16a13 13 0 0 1 .668-4.115.5.5 0 0 0-.594-.647A8.01 8.01 0 0 0 1 19c0 4.399 3.719 8 8.125 8H20a11.01 11.01 0 0 0 10.991-11.435m-7.283 3.143a1 1 0 0 1-1.415 0L20 16.414V24a1 1 0 0 1-2 0v-7.586l-2.293 2.293a1 1 0 0 1-1.415-1.415l4-4a1 1 0 0 1 1.415 0l4 4a1 1 0 0 1 0 1.415"})})};c.forwardRef($s);const Cs=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M8.96 12.153 4.342 16l4.618 3.848a1.5 1.5 0 1 1-1.92 2.305l-6-5a1.5 1.5 0 0 1 0-2.305l6-5a1.5 1.5 0 0 1 1.92 2.304m22 2.694-6-5a1.5 1.5 0 1 0-1.92 2.306L27.658 16l-4.618 3.848a1.5 1.5 0 1 0 1.92 2.305l6-5a1.5 1.5 0 0 0 0-2.305M20.512 3.59a1.5 1.5 0 0 0-1.922.898l-8 22a1.5 1.5 0 0 0 2.82 1.024l8-22a1.5 1.5 0 0 0-.898-1.922"})})};c.forwardRef(Cs);const js=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M200 40h-32a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v80a16 16 0 0 0 16 16h8v64a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-93.66 21.66a8 8 0 0 1 11.32-11.32l24 24a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32-11.32L124.69 80Zm-64 24a8 8 0 0 1 0-11.32l24-24a8 8 0 0 1 11.32 11.32L59.31 80l18.35 18.34a8 8 0 0 1-11.32 11.32ZM200 200H56v-64h96a16 16 0 0 0 16-16V56h32Z"})})};c.forwardRef(js);const ys=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M26 10H4a1 1 0 0 0-1 1v6a12.04 12.04 0 0 0 4.068 9H4a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2h-3.067a12.1 12.1 0 0 0 3.375-5.011A5 5 0 0 0 31 16v-1a5 5 0 0 0-5-5m3 6a3 3 0 0 1-2.15 2.875Q27 17.944 27 17v-4.828A3 3 0 0 1 29 15zM14 7V3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0m4 0V3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0m-8 0V3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0"})})};c.forwardRef(ys);const Ss=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M29.743 13.401a1 1 0 0 0-.487-.675l-3.729-2.125-.015-4.202a1 1 0 0 0-.353-.76 14 14 0 0 0-4.59-2.584 1 1 0 0 0-.808.074L16 5.23l-3.765-2.106a1 1 0 0 0-.809-.075 14 14 0 0 0-4.585 2.594 1 1 0 0 0-.354.758L6.47 10.61 2.74 12.734a1 1 0 0 0-.486.675 13.3 13.3 0 0 0 0 5.195 1 1 0 0 0 .486.675l3.729 2.125.015 4.204a1 1 0 0 0 .353.76 14 14 0 0 0 4.59 2.583 1 1 0 0 0 .808-.073L16 26.768l3.765 2.107a1.013 1.013 0 0 0 .809.073 14 14 0 0 0 4.585-2.592 1 1 0 0 0 .354-.759l.018-4.206 3.729-2.125a1 1 0 0 0 .486-.675c.34-1.713.338-3.477-.003-5.19M16 21a5 5 0 1 1 0-10 5 5 0 0 1 0 10"})})},Rs=c.forwardRef(Ss),Rh=Rs,As=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M18.5 12V6a1.5 1.5 0 1 1 3 0v4.5H26a1.5 1.5 0 1 1 0 3h-6a1.5 1.5 0 0 1-1.5-1.5M12 18.5H6a1.5 1.5 0 1 0 0 3h4.5V26a1.5 1.5 0 1 0 3 0v-6a1.5 1.5 0 0 0-1.5-1.5m14 0h-6a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 1 0 3 0v-4.5H26a1.5 1.5 0 1 0 0-3m-14-14A1.5 1.5 0 0 0 10.5 6v4.5H6a1.5 1.5 0 1 0 0 3h6a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 12 4.5"})})};c.forwardRef(As);const Ms=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M22.5 17.5h-2v-3h2a5 5 0 1 0-5-5v2h-3v-2a5 5 0 1 0-5 5h2v3h-2a5 5 0 1 0 5 5v-2h3v2a5 5 0 1 0 5-5m-2-8a2 2 0 1 1 2 2h-2zm-13 0a2 2 0 0 1 4 0v2h-2a2 2 0 0 1-2-2m4 13a2 2 0 1 1-2-2h2zm3-8h3v3h-3zm8 10a2 2 0 0 1-2-2v-2h2a2 2 0 0 1 0 4"})})};c.forwardRef(Ms);const Is=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M30.5 24a1.5 1.5 0 0 1-1.5 1.5h-3.5V29a1.5 1.5 0 1 1-3 0v-3.5H8A1.5 1.5 0 0 1 6.5 24V9.5H3a1.5 1.5 0 0 1 0-3h3.5V3a1.5 1.5 0 0 1 3 0v19.5H29a1.5 1.5 0 0 1 1.5 1.5M13 9.5h9.5V19a1.5 1.5 0 1 0 3 0V8A1.5 1.5 0 0 0 24 6.5H13a1.5 1.5 0 0 0 0 3"})})};c.forwardRef(Is);const Ts=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M26.061 23.939a1.503 1.503 0 0 1-2.125 2.125L16 18.125l-7.939 7.936a1.503 1.503 0 1 1-2.125-2.125L13.875 16 5.939 8.061a1.503 1.503 0 1 1 2.125-2.125L16 13.875l7.939-7.94a1.502 1.502 0 1 1 2.125 2.125L18.125 16z"})})},Vs=c.forwardRef(Ts),Ue=Vs,Ls=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m4.708 16.293a1 1 0 0 1-1.415 1.415L16 17.414l-3.293 3.293a1 1 0 0 1-1.415-1.415L14.587 16l-3.293-3.293a1 1 0 1 1 1.415-1.415L16 14.587l3.293-3.293a1 1 0 0 1 1.415 1.415L17.414 16z"})})};c.forwardRef(Ls);const Es=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M30.48 9.524a1.51 1.51 0 0 0-1.668-.213l-6.276 3.125-5.24-8.704a1.514 1.514 0 0 0-2.592 0l-5.24 8.708L3.19 9.315a1.514 1.514 0 0 0-2.113 1.825l4.625 14.17a1 1 0 0 0 1.46.55C7.194 25.841 10.39 24 16 24s8.806 1.841 8.835 1.859a1 1 0 0 0 1.464-.549l4.625-14.166a1.51 1.51 0 0 0-.444-1.62M21.98 19.6a1 1 0 0 1-1.159.811 28.5 28.5 0 0 0-9.652 0 1 1 0 0 1-.348-1.97 30.6 30.6 0 0 1 10.348 0 1 1 0 0 1 .816 1.159z"})})};c.forwardRef(Es);const Hs=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M27.414 24a2 2 0 0 1 0 2.829l-.585.585a2 2 0 0 1-2.829 0l-6.906-6.905-2.735 6.292A1.98 1.98 0 0 1 12.533 28h-.098a1.98 1.98 0 0 1-1.801-1.375L4.1 6.615A1.994 1.994 0 0 1 6.615 4.1l20.01 6.534a2 2 0 0 1 .176 3.725l-6.292 2.735z"})})};c.forwardRef(Hs);const Ds=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M16 3C9.271 3 4 6.075 4 10v12c0 3.925 5.271 7 12 7s12-3.075 12-7V10c0-3.925-5.271-7-12-7m10 13c0 1.203-.985 2.429-2.701 3.365C21.366 20.419 18.774 21 16 21s-5.366-.581-7.299-1.635C6.985 18.429 6 17.203 6 16v-2.08C8.133 15.795 11.779 17 16 17s7.868-1.21 10-3.08zm-2.701 9.365C21.366 26.419 18.774 27 16 27s-5.366-.581-7.299-1.635C6.985 24.429 6 23.203 6 22v-2.08C8.133 21.795 11.779 23 16 23s7.868-1.21 10-3.08V22c0 1.203-.985 2.429-2.701 3.365"})})};c.forwardRef(Ds);const Bs=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M29 12a2 2 0 0 0-2-2h-4V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16a1 1 0 0 0 1.625.777L9 19.25V23a2 2 0 0 0 2 2h11.699l4.676 3.778A1 1 0 0 0 29 28zm-5.319 11.223a1 1 0 0 0-.625-.223H11v-4h10a2 2 0 0 0 2-2v-5h4v13.906z"})})};c.forwardRef(Bs);const ks=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M28.5 19v7a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 26v-7a1.5 1.5 0 0 1 3 0v6.5h19V19a1.5 1.5 0 1 1 3 0m-13.561 1.061a1.5 1.5 0 0 0 2.125 0l5-5a1.502 1.502 0 1 0-2.125-2.125L17.5 15.375V5a1.5 1.5 0 1 0-3 0v10.375l-2.439-2.436a1.502 1.502 0 1 0-2.125 2.125z"})})};c.forwardRef(ks);const zs=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M13.5 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m7 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-9 4.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4m9 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-9 8.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4m9 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4"})})};c.forwardRef(zs);const Ns=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M27 4H11a1 1 0 0 0-1 1v5H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-1 16h-4v-9a1 1 0 0 0-1-1h-9V6h14z"})})};c.forwardRef(Ns);const Os=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m11 13c.001 1.411-.27 2.81-.8 4.118l-5.587-3.437a2 2 0 0 0-.78-.279l-2.853-.385a2.01 2.01 0 0 0-2 .983h-1.09l-.475-.983a1.99 1.99 0 0 0-1.375-1.083l-1-.216.978-1.718h2.088c.338 0 .67-.087.966-.25l1.532-.845q.202-.113.375-.268l3.364-3.042a1.99 1.99 0 0 0 .407-2.458l-.045-.08A11.01 11.01 0 0 1 27 16M5 16a10.94 10.94 0 0 1 1.068-4.725l1.417 3.784a2 2 0 0 0 1.453 1.25l2.678.576.476.99a2.01 2.01 0 0 0 1.8 1.125h.186l-.904 2.029a2 2 0 0 0 .357 2.171l.018.018L16 25.742l-.242 1.25A11.014 11.014 0 0 1 5 16"})})};c.forwardRef(Os);const Fs=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:[r.jsx("path",{d:"M20.689 3.88A13 13 0 0 0 16 3a13 13 0 0 0-8.155 23.124l1.02-1.765A11 11 0 0 1 5 16a10.94 10.94 0 0 1 1.068-4.724l1.417 3.784a2 2 0 0 0 1.453 1.25l2.678.576.476.99q.113.226.275.418l1.169-2.025-.121-.25a1.99 1.99 0 0 0-1.375-1.084l-1-.217.978-1.717h2.088c.338 0 .67-.087.966-.25l.726-.4z"}),r.jsx("path",{fillRule:"evenodd",d:"m24 2.144 1.732 1-1.58 2.736q.54.435 1.036.932A13.01 13.01 0 0 1 29 16a13 13 0 0 1-17.69 12.124l-1.578 2.732-1.732-1zm-.86 5.49-4.936 8.549 1.628.22c.277.037.543.132.78.278l5.588 3.436c.53-1.308.801-2.706.8-4.117a11.01 11.01 0 0 0-3.86-8.367M13.92 23.6l-1.593 2.76a11 11 0 0 0 3.43.631l.242-1.25z",clipRule:"evenodd"})]})};c.forwardRef(Fs);const _s=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m-4.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m10.365 7.5C20.579 21.724 18.441 23 16 23s-4.579-1.275-5.865-3.5a1.001 1.001 0 0 1 1.477-1.31q.157.129.253.31C12.799 20.114 14.266 21 16 21s3.201-.887 4.135-2.5a1 1 0 1 1 1.73 1M20.5 15a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};c.forwardRef(_s);const Ws=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m-4.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m10 10.865a1 1 0 0 1-1.365-.365C19.201 20.886 17.734 20 16 20s-3.201.887-4.135 2.5a1.001 1.001 0 1 1-1.73-1C11.421 19.276 13.559 18 16 18s4.579 1.275 5.865 3.5a1 1 0 0 1-.365 1.365M20.5 15a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};c.forwardRef(Ws);const Us=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M27.5 6v5a1.5 1.5 0 1 1-3 0V7.5H21a1.5 1.5 0 0 1 0-3h5A1.5 1.5 0 0 1 27.5 6M11 24.5H7.5V21a1.5 1.5 0 0 0-3 0v5A1.5 1.5 0 0 0 6 27.5h5a1.5 1.5 0 1 0 0-3m15-5a1.5 1.5 0 0 0-1.5 1.5v3.5H21a1.5 1.5 0 1 0 0 3h5a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5m-15-15H6A1.5 1.5 0 0 0 4.5 6v5a1.5 1.5 0 0 0 3 0V7.5H11a1.5 1.5 0 0 0 0-3"})})};c.forwardRef(Us);const qs=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M28.5 13a1.5 1.5 0 1 1-3 0V8.625l-7.439 7.439a1.503 1.503 0 1 1-2.125-2.125L23.375 6.5H19a1.5 1.5 0 0 1 0-3h8A1.5 1.5 0 0 1 28.5 5zM23 16a1.5 1.5 0 0 0-1.5 1.5v8h-15v-15h8a1.5 1.5 0 1 0 0-3H6A2.5 2.5 0 0 0 3.5 10v16A2.5 2.5 0 0 0 6 28.5h16a2.5 2.5 0 0 0 2.5-2.5v-8.5A1.5 1.5 0 0 0 23 16"})})},Gs=c.forwardRef(qs),Ks=Gs,Ys=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M30.914 15.595c-.044-.099-1.103-2.447-3.457-4.801C24.322 7.657 20.36 6 16 6S7.679 7.657 4.542 10.794C2.19 13.148 1.125 15.5 1.086 15.595a1 1 0 0 0 0 .812c.044.1 1.103 2.447 3.456 4.8C7.68 24.344 11.64 26 16 26s8.321-1.657 11.458-4.792c2.353-2.354 3.412-4.702 3.456-4.8a1 1 0 0 0 0-.813M16 21a5 5 0 1 1 0-10 5 5 0 0 1 0 10"})})};c.forwardRef(Ys);const Zs=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M6.74 4.328a1 1 0 1 0-1.48 1.345l2.405 2.646c-4.54 2.786-6.493 7.081-6.579 7.276a1 1 0 0 0 0 .813c.044.098 1.103 2.446 3.456 4.8C7.68 24.343 11.64 26 16 26c2.24.013 4.459-.448 6.509-1.354l2.75 3.027a1 1 0 1 0 1.48-1.345zm11.125 15.21a4 4 0 0 1-5.209-5.73zm13.049-3.13c-.053.117-1.319 2.92-4.17 5.475a1 1 0 0 1-1.408-.072L12.675 7.884a1 1 0 0 1 .575-1.66A17 17 0 0 1 16 6c4.36 0 8.321 1.658 11.458 4.794 2.353 2.354 3.412 4.702 3.456 4.801a1 1 0 0 1 0 .813"})})};c.forwardRef(Zs);const Xs=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M17 15v12a1 1 0 0 1-2 0V15a1 1 0 0 1 2 0m8 9a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1m3-6h-2V5a1 1 0 0 0-2 0v13h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M7 20a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1m3-6H8V5a1 1 0 0 0-2 0v9H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m9-6h-2V5a1 1 0 0 0-2 0v3h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1"})})};c.forwardRef(Xs);const Qs=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"m26.48 16.851-7.474 7.559a1.97 1.97 0 0 1-1.4.585H9.415l-3.707 3.712a1.001 1.001 0 0 1-1.415-1.415l2.823-2.822L15.588 16h10.537a.5.5 0 0 1 .355.851m.607-13.03a8 8 0 0 0-10.737.518l-1.2 1.185a.5.5 0 0 0-.15.351v7.875l6.875-6.875a1 1 0 0 1 1.414 1.414L17.589 14h11.047a.5.5 0 0 0 .445-.27 8.01 8.01 0 0 0-1.994-9.909M7.854 20.904 13 15.758V8.845a.5.5 0 0 0-.851-.355L7.586 13A1.99 1.99 0 0 0 7 14.414v6.136a.5.5 0 0 0 .854.354"})})};c.forwardRef(Qs);const Js=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"m26.708 10.293-7-7A1 1 0 0 0 19 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V11a1 1 0 0 0-.293-.707M19 11V5.5l5.5 5.5z"})})};c.forwardRef(Js);const Ps=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"m213.66 82.34-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44ZM48 180c0 11 7.18 20 16 20a14.18 14.18 0 0 0 10.06-4.5 8.21 8.21 0 0 1 10.9-.91 8 8 0 0 1 .82 11.81A30.06 30.06 0 0 1 64 216c-17.64 0-32-16.15-32-36s14.36-36 32-36a30 30 0 0 1 21.39 9.19 8.26 8.26 0 0 1 .73 11.09 8 8 0 0 1-11.9.38A14.17 14.17 0 0 0 64 160c-8.82 0-16 9-16 20m103.81 16.31a20.82 20.82 0 0 1-9.19 15.23C137.43 215 131 216 125.13 216a61.1 61.1 0 0 1-15.13-2 8 8 0 1 1 4.3-15.41c4.38 1.2 14.95 2.7 19.55-.36.88-.59 1.83-1.52 2.14-3.93.35-2.67-.71-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.56 20.56 0 0 1 9-14.95c11.84-8 30.71-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.09 1.11 1.9 2.31 1.49 6.45 2.68 10.45 3.84 9.79 2.83 26.35 7.66 24.11 24.97M215.42 155l-19.89 55.68a8 8 0 0 1-15.06 0L160.58 155a8.21 8.21 0 0 1 4.5-10.45 8 8 0 0 1 10.45 4.76l12.47 34.9 12.47-34.9a8 8 0 0 1 10.45-4.76 8.23 8.23 0 0 1 4.5 10.45"})})};c.forwardRef(Ps);const ei=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"m26.708 10.293-7-7A1 1 0 0 0 19 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V11a1 1 0 0 0-.293-.707m-7 11a1 1 0 0 1-1.415 1.415L16 20.414l-2.293 2.293a1 1 0 0 1-1.415-1.415L14.587 19l-2.293-2.293a1 1 0 1 1 1.415-1.415L16 17.587l2.293-2.293a1 1 0 0 1 1.415 1.415L17.414 19zM19 11V5.5l5.5 5.5z"})})};c.forwardRef(ei);const ti=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M6 15h20a1 1 0 0 0 1-1v-3a1 1 0 0 0-.293-.707l-7-7A1 1 0 0 0 19 3H7a2 2 0 0 0-2 2v9a1 1 0 0 0 1 1m13-9.5 5.5 5.5H19zM28 19a1 1 0 0 1-1 1h-3v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1M8 18H6a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0v-1h1a3.5 3.5 0 1 0 0-7m0 5H7v-3h1a1.5 1.5 0 1 1 0 3m8-5h-2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2a4.5 4.5 0 1 0 0-9m0 7h-1v-5h1a2.5 2.5 0 0 1 0 5"})})};c.forwardRef(ti);const ni=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M44 120h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4m108-76 44 44h-44Zm4 164.53a8.18 8.18 0 0 1-8.25 7.47H120a8 8 0 0 1-8-8v-55.73a8.18 8.18 0 0 1 7.47-8.25 8 8 0 0 1 8.53 8v48h20a8 8 0 0 1 8 8.51m-61.49-51.88L77.83 180l16.68 23.35a8 8 0 0 1-13 9.3L68 193.76l-13.49 18.89a8 8 0 1 1-13-9.3L58.17 180l-16.68-23.35a8 8 0 0 1 2.3-11.46 8.19 8.19 0 0 1 10.88 2.38L68 166.24l13.49-18.89a8 8 0 0 1 13 9.3Zm121.28 39.66a20.81 20.81 0 0 1-9.18 15.23c-5.19 3.46-11.67 4.46-17.49 4.46a60.6 60.6 0 0 1-15.19-2 8 8 0 0 1 4.31-15.41c4.38 1.21 14.94 2.71 19.54-.35.89-.6 1.84-1.52 2.15-3.93.34-2.67-.72-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.12a20.58 20.58 0 0 1 8.95-14.94c11.84-8 30.72-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.48-1.17-15.22-2.56-19.82.56a4.54 4.54 0 0 0-2 3.67c-.11.9-.13 1.08 1.12 1.9 2.31 1.49 6.45 2.68 10.45 3.84 9.87 2.82 26.39 7.65 24.18 24.96"})})};c.forwardRef(ni);const oi=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M184 144h-16a8 8 0 0 0-8 8v55.73a8.17 8.17 0 0 0 7.47 8.25 8 8 0 0 0 8.53-8v-8h7.4c15.24 0 28.14-11.92 28.59-27.15A28 28 0 0 0 184 144m-.35 40H176v-24h8a12 12 0 0 1 12 13.16A12.25 12.25 0 0 1 183.65 184M136 152v55.73a8.17 8.17 0 0 1-7.47 8.25 8 8 0 0 1-8.53-8v-55.71a8.17 8.17 0 0 1 7.47-8.25A8 8 0 0 1 136 152m-40 56.53a8.17 8.17 0 0 1-8.27 7.47h-31.5a8.27 8.27 0 0 1-6-2.5 8 8 0 0 1-1.18-9.5l25.16-44H56.27a8.17 8.17 0 0 1-8.27-7.47 8 8 0 0 1 8-8.53h31.77a8.27 8.27 0 0 1 6 2.5A8 8 0 0 1 95 156l-25.21 44H88a8 8 0 0 1 8 8.53M213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44Z"})})};c.forwardRef(oi);const ri=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M25.5 16a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 1 1 0-3h16a1.5 1.5 0 0 1 1.5 1.5M29 8.5H3a1.5 1.5 0 0 0 0 3h26a1.5 1.5 0 1 0 0-3m-10 12h-6a1.5 1.5 0 1 0 0 3h6a1.5 1.5 0 1 0 0-3"})})};c.forwardRef(ri);const ai=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M27 9H16.414L13 5.586A1.98 1.98 0 0 0 11.586 5H5a2 2 0 0 0-2 2v18.078A1.926 1.926 0 0 0 4.924 27H27.11A1.89 1.89 0 0 0 29 25.111V11a2 2 0 0 0-2-2M5 7h6.586l2 2H5z"})})};c.forwardRef(ai);const si=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M27 9h-4.385q.075-.06.146-.125A3.7 3.7 0 0 0 24 6.196 4.08 4.08 0 0 0 19.805 2a3.7 3.7 0 0 0-2.68 1.239A6.9 6.9 0 0 0 16 5.049a6.9 6.9 0 0 0-1.125-1.81A3.7 3.7 0 0 0 12.195 2 4.08 4.08 0 0 0 8 6.196a3.7 3.7 0 0 0 1.239 2.679q.072.06.146.125H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v8a2 2 0 0 0 2 2h7.5a.5.5 0 0 0 .5-.5V15H5v-4h10v4h2v-4h10v4H17v11.5a.5.5 0 0 0 .5.5H25a2 2 0 0 0 2-2v-8a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2M10.564 7.375A1.7 1.7 0 0 1 10 6.125 2.076 2.076 0 0 1 12.074 4h.061a1.71 1.71 0 0 1 1.25.563c1.049 1.185 1.419 3.15 1.549 4.365-1.22-.13-3.184-.5-4.37-1.553m10.875 0c-1.186 1.05-3.155 1.42-4.375 1.55.148-1.314.561-3.237 1.561-4.361A1.7 1.7 0 0 1 19.875 4h.061A2.077 2.077 0 0 1 22 6.135a1.7 1.7 0 0 1-.564 1.24z"})})};c.forwardRef(si);const ii=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m9.796 8h-4.428a17.8 17.8 0 0 0-2.533-5.625A11.05 11.05 0 0 1 25.796 11M16 5.014c1.5 1.625 2.625 3.693 3.296 5.986h-6.592C13.375 8.707 14.5 6.641 16 5.014M12 16c0-1.005.084-2.009.25-3h7.5a18.2 18.2 0 0 1 0 6h-7.5a18 18 0 0 1-.25-3m.704 5h6.592c-.671 2.293-1.796 4.359-3.296 5.986-1.5-1.627-2.625-3.693-3.296-5.986m6.131 5.625A17.8 17.8 0 0 0 21.367 21h4.43a11.05 11.05 0 0 1-6.962 5.625M21.776 19a20.2 20.2 0 0 0 0-6h4.808a11 11 0 0 1 0 6z"})})};c.forwardRef(ii);const ci=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{fillRule:"evenodd",d:"M13.29 28.226 6.765 24.46a2.822 2.822 0 1 1-2.708-4.693v-7.532a2.824 2.824 0 1 1 2.708-4.693l6.525-3.767a2.824 2.824 0 1 1 5.42 0l6.524 3.766a2.822 2.822 0 1 1 2.71 4.693v7.533a2.824 2.824 0 1 1-2.71 4.694l-6.524 3.766A2.825 2.825 0 0 1 16 31.84a2.822 2.822 0 0 1-2.71-3.614M16 5.806q.413-.002.791-.113l8.531 14.776a2.8 2.8 0 0 0-.791 1.37H7.467a2.8 2.8 0 0 0-.79-1.369L15.21 5.693q.377.11.791.112M7.468 23.178l-.033.12 6.526 3.767A2.81 2.81 0 0 1 16 26.195c.802 0 1.526.334 2.04.871l6.523-3.766-.032-.121zM5.397 12.233a2.824 2.824 0 0 0 2.038-3.532l6.526-3.767q.043.045.088.088L5.517 19.8l-.12-.032zM26.482 19.8q.06-.018.121-.033v-7.532a2.824 2.824 0 0 1-2.04-3.534L18.04 4.934q-.045.045-.089.088z",clipRule:"evenodd"})})};c.forwardRef(ci);const li=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M27 7v7.5a.5.5 0 0 1-.5.5H17V5.5a.5.5 0 0 1 .5-.5H25a2 2 0 0 1 2 2M14.5 5H7a2 2 0 0 0-2 2v7.5a.5.5 0 0 0 .5.5H15V5.5a.5.5 0 0 0-.5-.5m12 12H17v9.5a.5.5 0 0 0 .5.5H25a2 2 0 0 0 2-2v-7.5a.5.5 0 0 0-.5-.5M5 17.5V25a2 2 0 0 0 2 2h7.5a.5.5 0 0 0 .5-.5V17H5.5a.5.5 0 0 0-.5.5"})})};c.forwardRef(li);const di=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M10.5 6.5v5h-7A.5.5 0 0 1 3 11V8a2 2 0 0 1 2-2h5a.5.5 0 0 1 .5.5m2 19a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-5h-7zM3 21v3a2 2 0 0 0 2 2h5a.5.5 0 0 0 .5-.5v-5h-7a.5.5 0 0 0-.5.5m0-7v4a.5.5 0 0 0 .5.5h7v-5h-7a.5.5 0 0 0-.5.5m16-8h-6a.5.5 0 0 0-.5.5v5h7v-5A.5.5 0 0 0 19 6m9.5 7.5h-7v5h7a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5m-16 5h7v-5h-7zM27 6h-5a.5.5 0 0 0-.5.5v5h7a.5.5 0 0 0 .5-.5V8a2 2 0 0 0-2-2m1.5 14.5h-7v5a.5.5 0 0 0 .5.5h5a2 2 0 0 0 2-2v-3a.5.5 0 0 0-.5-.5"})})};c.forwardRef(di);const hi=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M28.791 17.633a3.04 3.04 0 0 0-2.326-.597C28.813 14.666 30 12.31 30 10c0-3.309-2.661-6-5.933-6A5.95 5.95 0 0 0 19.5 6.094 5.95 5.95 0 0 0 14.932 4C11.663 4 9 6.691 9 10c0 1.375.405 2.711 1.258 4.125a4 4 0 0 0-1.844 1.05L5.586 18H2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h13q.123 0 .242-.03l8-2a1 1 0 0 0 .15-.05l4.858-2.067.055-.025a3.074 3.074 0 0 0 .491-5.195zm-1.362 3.393-4.75 2.023L14.875 25H7v-5.586l2.829-2.828A1.98 1.98 0 0 1 11.242 16H17.5a1.5 1.5 0 0 1 0 3H14a1 1 0 0 0 0 2h4q.113 0 .224-.025l8.375-1.926.038-.01a1.075 1.075 0 0 1 .788 1.987z"})})};c.forwardRef(hi);const ui=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M28 10.5h-5.475l.951-5.231a1.5 1.5 0 1 0-2.952-.538L19.475 10.5h-4.95l.951-5.231a1.5 1.5 0 1 0-2.952-.538L11.475 10.5H6a1.5 1.5 0 0 0 0 3h4.93l-.909 5H4a1.5 1.5 0 0 0 0 3h5.475l-.951 5.231a1.5 1.5 0 0 0 1.207 1.75q.134.022.269.019a1.5 1.5 0 0 0 1.475-1.233l1.05-5.767h4.95l-.951 5.231a1.5 1.5 0 1 0 2.952.543l1.049-5.774H26a1.5 1.5 0 1 0 0-3h-4.93l.909-5H28a1.5 1.5 0 1 0 0-3m-9.979 8H13.07l.909-5h4.951z"})})};c.forwardRef(ui);const gi=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M31.5 22.5a5 5 0 0 1-5 5 4.94 4.94 0 0 1-3.571-1.45 1.5 1.5 0 0 1 2.142-2.1 1.94 1.94 0 0 0 1.429.55 2 2 0 0 0 0-4 1.94 1.94 0 0 0-1.429.55 1.5 1.5 0 0 1-2.551-1.3l1-6A1.5 1.5 0 0 1 25 12.5h5a1.5 1.5 0 1 1 0 3h-3.729l-.338 2.029q.283-.03.567-.029a5 5 0 0 1 5 5M18 5.5A1.5 1.5 0 0 0 16.5 7v6h-10V7a1.5 1.5 0 0 0-3 0v15a1.5 1.5 0 0 0 3 0v-6h10v6a1.5 1.5 0 1 0 3 0V7A1.5 1.5 0 0 0 18 5.5"})})};c.forwardRef(gi);const fi=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M32 22a1.5 1.5 0 0 1-1.5 1.5V26a1.5 1.5 0 1 1-3 0v-2.5H23a1.5 1.5 0 0 1-1.422-1.974l3-9a1.5 1.5 0 0 1 2.845.948L25.08 20.5H27.5V18a1.5 1.5 0 1 1 3 0v2.5A1.5 1.5 0 0 1 32 22M18 5.5A1.5 1.5 0 0 0 16.5 7v6h-10V7a1.5 1.5 0 0 0-3 0v15a1.5 1.5 0 0 0 3 0v-6h10v6a1.5 1.5 0 1 0 3 0V7A1.5 1.5 0 0 0 18 5.5"})})};c.forwardRef(fi);const mi=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M29.5 14v12a1.5 1.5 0 1 1-3 0v-9.198l-.668.448a1.503 1.503 0 0 1-1.665-2.5l3-2A1.5 1.5 0 0 1 29.5 14M18 5.5A1.5 1.5 0 0 0 16.5 7v6h-10V7a1.5 1.5 0 0 0-3 0v15a1.5 1.5 0 0 0 3 0v-6h10v6a1.5 1.5 0 1 0 3 0V7A1.5 1.5 0 0 0 18 5.5"})})};c.forwardRef(mi);const xi=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"m27.133 17.541 1.655-2.772a1.5 1.5 0 1 0-2.576-1.538l-4.03 6.75q-.018.029-.032.059a5 5 0 1 0 4.983-2.5zM26.5 24.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4M19.5 7v15a1.5 1.5 0 1 1-3 0v-6h-10v6a1.5 1.5 0 0 1-3 0V7a1.5 1.5 0 0 1 3 0v6h10V7a1.5 1.5 0 1 1 3 0"})})};c.forwardRef(xi);const wi=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M31.5 22.5a5 5 0 0 1-8.571 3.5 1.5 1.5 0 1 1 2.142-2.099A2 2 0 1 0 26.5 20.5a1.5 1.5 0 0 1-1.229-2.36l1.854-2.64H24a1.5 1.5 0 1 1 0-3h6a1.5 1.5 0 0 1 1.229 2.36l-2.293 3.275A5 5 0 0 1 31.5 22.5M18 5.5A1.5 1.5 0 0 0 16.5 7v6h-10V7a1.5 1.5 0 0 0-3 0v15a1.5 1.5 0 0 0 3 0v-6h10v6a1.5 1.5 0 1 0 3 0V7A1.5 1.5 0 0 0 18 5.5"})})};c.forwardRef(wi);const vi=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M19.5 7v15a1.5 1.5 0 1 1-3 0v-6h-10v6a1.5 1.5 0 0 1-3 0V7a1.5 1.5 0 0 1 3 0v6h10V7a1.5 1.5 0 1 1 3 0M30 24.5h-3l3.593-4.791a4.499 4.499 0 1 0-7.837-4.209 1.5 1.5 0 1 0 2.829 1q.076-.218.216-.402a1.5 1.5 0 1 1 2.394 1.807L22.8 25.1a1.5 1.5 0 0 0 1.2 2.4h6a1.5 1.5 0 1 0 0-3"})})};c.forwardRef(vi);const bi=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M29 17v7a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h2.956A10.964 10.964 0 0 0 16.081 6H16A11 11 0 0 0 5.045 16H8a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-7a13.014 13.014 0 0 1 22.236-9.167A12.93 12.93 0 0 1 29 17"})})};c.forwardRef(bi);const pi=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M30 11.75c0 8.75-12.974 15.833-13.526 16.125a1 1 0 0 1-.948 0C14.974 27.582 2 20.5 2 11.75A7.76 7.76 0 0 1 9.75 4c2.581 0 4.841 1.11 6.25 2.986C17.409 5.11 19.669 4 22.25 4A7.76 7.76 0 0 1 30 11.75"})})};c.forwardRef(pi);const $i=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M28 14.444V26a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V14.444a2 2 0 0 1 .646-1.473l10-9.435.014-.013a2 2 0 0 1 2.705.013l10 9.435A2 2 0 0 1 28 14.444"})})};c.forwardRef($i);const Ci=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-7.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M5 25v-3.5l6.5-6.5 10 10zm22 0h-2.671l-4.5-4.5 2.5-2.5L27 22.672z"})})};c.forwardRef(Ci);const ji=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M27 5H9a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M23 25H5V11h2v10a2 2 0 0 0 2 2h14zm4-4H9v-4.5l4.5-4.5 6.208 6.208a1 1 0 0 0 1.413 0L24.33 15 27 17.672z"})})};c.forwardRef(ji);const yi=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1 0-3h12a1.5 1.5 0 0 1 1.5 1.5M15 9.5h12a1.5 1.5 0 0 0 0-3H15a1.5 1.5 0 0 0 0 3m12 13H5a1.5 1.5 0 1 0 0 3h22a1.5 1.5 0 0 0 0-3m-18-4a1.5 1.5 0 0 0 1.061-2.561L6.125 12l3.936-3.94a1.503 1.503 0 1 0-2.125-2.125l-5 5a1.5 1.5 0 0 0 0 2.125l5 5A1.5 1.5 0 0 0 9 18.5"})})};c.forwardRef(yi);const Si=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1 0-3h12a1.5 1.5 0 0 1 1.5 1.5M15 9.5h12a1.5 1.5 0 0 0 0-3H15a1.5 1.5 0 0 0 0 3m12 13H5a1.5 1.5 0 0 0 0 3h22a1.5 1.5 0 1 0 0-3M3.939 18.06a1.5 1.5 0 0 0 2.125 0l5-5a1.5 1.5 0 0 0 0-2.125l-5-5a1.503 1.503 0 0 0-2.125 2.125L7.875 12l-3.936 3.939a1.5 1.5 0 0 0 0 2.122"})})};c.forwardRef(Si);const Ri=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m-.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M17 23a2 2 0 0 1-2-2v-5a1 1 0 0 1 0-2 2 2 0 0 1 2 2v5a1 1 0 0 1 0 2"})})};c.forwardRef(Ri);const Ai=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M25.5 7A1.5 1.5 0 0 1 24 8.5h-3.919l-5 15H18a1.5 1.5 0 1 1 0 3H8a1.5 1.5 0 1 1 0-3h3.919l5-15H14a1.5 1.5 0 0 1 0-3h10A1.5 1.5 0 0 1 25.5 7"})})};c.forwardRef(Ai);const Mi=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M20 2a10.01 10.01 0 0 0-9.511 13.098l-7.196 7.195A1 1 0 0 0 3 23v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 .707-.293l1.195-1.196A10 10 0 1 0 20 2m2.5 9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4"})})};c.forwardRef(Mi);const Ii=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M5 7h22v5H5zm22 18H14V14h13z"})})};c.forwardRef(Ii);const Ti=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M22 29a1 1 0 0 1-1 1H11a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1m5-16a10.94 10.94 0 0 1-4.205 8.651A2.03 2.03 0 0 0 22 23.25V24a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-.75a2 2 0 0 0-.779-1.582A10.95 10.95 0 0 1 5 13.06C4.967 7.104 9.782 2.143 15.735 2A11 11 0 0 1 27 13m-4.014-1.168a7.2 7.2 0 0 0-5.82-5.818 1 1 0 1 0-.332 1.972c2.071.349 3.829 2.106 4.18 4.182a1 1 0 0 0 1.972-.335"})})};c.forwardRef(Ti);const Vi=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"m21.731 14.683-14 15a1 1 0 0 1-1.711-.875l1.832-9.167L.65 16.936a1 1 0 0 1-.375-1.625l14-15a1 1 0 0 1 1.71.875l-1.837 9.177 7.204 2.7a1 1 0 0 1 .375 1.62z"})})};c.forwardRef(Vi);const Li=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M17.046 23.441a1.5 1.5 0 0 1 0 2.125l-.742.743a7.502 7.502 0 1 1-10.61-10.61l3.015-3.014A7.5 7.5 0 0 1 19 12.375a1.506 1.506 0 0 1-2 2.25 4.5 4.5 0 0 0-6.171.184l-3.013 3.01a4.5 4.5 0 0 0 6.365 6.365l.743-.743a1.5 1.5 0 0 1 2.122 0m9.26-17.75a7.51 7.51 0 0 0-10.61 0l-.742.743a1.503 1.503 0 1 0 2.125 2.125l.742-.743a4.5 4.5 0 0 1 6.365 6.365l-3.014 3.015a4.5 4.5 0 0 1-6.172.179 1.506 1.506 0 1 0-2 2.25 7.5 7.5 0 0 0 10.288-.304l3.014-3.014a7.51 7.51 0 0 0 .004-10.613z"})})};c.forwardRef(Li);const Ei=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 1 1 0-3h22a1.5 1.5 0 0 1 1.5 1.5M5 9.5h22a1.5 1.5 0 0 0 0-3H5a1.5 1.5 0 0 0 0 3m22 13H5a1.5 1.5 0 1 0 0 3h22a1.5 1.5 0 1 0 0-3"})})};c.forwardRef(Ei);const Hi=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M3.5 8A1.5 1.5 0 0 1 5 6.5h22a1.5 1.5 0 0 1 0 3H5A1.5 1.5 0 0 1 3.5 8M5 17.5h22a1.5 1.5 0 1 0 0-3H5a1.5 1.5 0 1 0 0 3m13 5H5a1.5 1.5 0 1 0 0 3h13a1.5 1.5 0 1 0 0-3m11 0h-1.5V21a1.5 1.5 0 1 0-3 0v1.5H23a1.5 1.5 0 1 0 0 3h1.5V27a1.5 1.5 0 1 0 3 0v-1.5H29a1.5 1.5 0 1 0 0-3"})})};c.forwardRef(Hi);const Di=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M28 64a12 12 0 0 1 12-12h176a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12m12 76h64a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24m80 40H40a12 12 0 0 0 0 24h80a12 12 0 0 0 0-24m120.49 20.49a12 12 0 0 1-17 0l-18.08-18.08a44 44 0 1 1 17-17l18.08 18.07a12 12 0 0 1 0 17.01M184 164a20 20 0 1 0-20-20 20 20 0 0 0 20 20"})})};c.forwardRef(Di);const Bi=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M17.5 4v4a1.5 1.5 0 1 1-3 0V4a1.5 1.5 0 1 1 3 0m4.156 7.844a1.5 1.5 0 0 0 1.062-.44l2.828-2.829a1.503 1.503 0 1 0-2.125-2.125l-2.825 2.833a1.5 1.5 0 0 0 1.06 2.56M28 14.5h-4a1.5 1.5 0 1 0 0 3h4a1.5 1.5 0 1 0 0-3m-5.282 6.096a1.501 1.501 0 0 0-2.451 1.638c.075.182.186.348.326.487l2.828 2.829a1.503 1.503 0 0 0 2.125-2.125zM16 22.5a1.5 1.5 0 0 0-1.5 1.5v4a1.5 1.5 0 1 0 3 0v-4a1.5 1.5 0 0 0-1.5-1.5m-6.717-1.904-2.83 2.829A1.503 1.503 0 0 0 8.58 25.55l2.829-2.829a1.503 1.503 0 0 0-2.125-2.125M9.5 16A1.5 1.5 0 0 0 8 14.5H4a1.5 1.5 0 1 0 0 3h4A1.5 1.5 0 0 0 9.5 16m-.925-9.546A1.503 1.503 0 0 0 6.45 8.579l2.833 2.825a1.503 1.503 0 0 0 2.125-2.125z"})})},ki=c.forwardRef(Bi),P0=ki,zi=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M26 10h-4V7a6 6 0 1 0-12 0v3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2M16 20.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M20 10h-8V7a4 4 0 1 1 8 0z"})})};c.forwardRef(zi);const Ni=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M31 19a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 1 1 2 0v2h2a1 1 0 0 1 1 1M7 9h2v2a1 1 0 1 0 2 0V9h2a1 1 0 0 0 0-2h-2V5a1 1 0 0 0-2 0v2H7a1 1 0 0 0 0 2m16 15h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 0 0 0-2m4.414-14L10 27.414a2 2 0 0 1-2.828 0l-2.587-2.585a2 2 0 0 1 0-2.829L22 4.586a2 2 0 0 1 2.829 0l2.585 2.585a2 2 0 0 1 0 2.829M26 8.586 23.414 6l-4 4L22 12.586z"})})};c.forwardRef(Ni);const Oi=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M28 6H4a1 1 0 0 0-1 1v17a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1M12.339 16 5 22.726V9.274zm1.48 1.356 1.5 1.381a1 1 0 0 0 1.352 0l1.5-1.38L25.421 24H6.571zM19.66 16 27 9.273v13.455z"})})};c.forwardRef(Oi);const Fi=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{fillRule:"evenodd",d:"M11 7q0 .432-.088.838L16 10.382l5.088-2.544a4 4 0 1 1 .895 1.789L18.236 11.5l3.747 1.873a4 4 0 1 1 0 5.253L18.236 20.5l3.747 1.874a4 4 0 1 1-.895 1.788L16 21.618l-5.088 2.544Q11 24.567 11 25a4 4 0 1 1-.983-2.626l3.747-1.874-3.747-1.873a4 4 0 1 1 0-5.253l3.747-1.874-3.747-1.874A4 4 0 1 1 11 7M9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0m2.236 8h9.528L16 12.618zM9 25a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2-7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M27 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4m2-11a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-11 3.382L20.764 17h-9.528z",clipRule:"evenodd"})})};c.forwardRef(Fi);const _i=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{fillRule:"evenodd",d:"M14.8 8.254a4 4 0 1 0-1.082 1.682l7.483 4.81a4 4 0 0 0-.075.254H10.874A4.002 4.002 0 0 0 3 16a4 4 0 0 0 7.874 1h10.252q.033.128.075.254l-7.484 4.81a4 4 0 1 0 1.082 1.682l7.484-4.81a4 4 0 1 0 0-5.871zM11 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0m16 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4",clipRule:"evenodd"})})};c.forwardRef(_i);const Wi=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{fillRule:"evenodd",d:"M18.842 3.227a1 1 0 1 0-.445 1.95l1.747.399L9.6 12.959a4 4 0 1 0 0 6.081l10.546 7.385-1.748.399a1 1 0 1 0 .445 1.95l3.945-.9a1 1 0 0 0 .77-1.1l-.503-4.014a1 1 0 0 0-1.985.248l.223 1.779-10.545-7.384a4 4 0 0 0 .127-.403h14.712l-1.293 1.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-1.414 1.414L25.586 15H10.874a4 4 0 0 0-.127-.403l10.544-7.383-.222 1.778a1 1 0 0 0 1.984.249l.503-4.015a1 1 0 0 0-.77-1.099zM9 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0",clipRule:"evenodd"})})};c.forwardRef(Wi);const Ui=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M27 6H5a2 2 0 0 0-2 2v20a1.98 1.98 0 0 0 1.156 1.813 1.986 1.986 0 0 0 2.141-.299L10.312 26H27a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M10.5 17.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};c.forwardRef(Ui);const qi=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M10 16V8a6 6 0 1 1 12 0v8a6 6 0 1 1-12 0m16 0a1 1 0 0 0-2 0 8 8 0 0 1-16 0 1 1 0 1 0-2 0 10.014 10.014 0 0 0 9 9.95V29a1 1 0 0 0 2 0v-3.05A10.014 10.014 0 0 0 26 16"})})};c.forwardRef(qi);const Gi=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 1 1 0-3h22a1.5 1.5 0 0 1 1.5 1.5"})})},Ki=c.forwardRef(Gi),Yi=Ki,Zi=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m5 14H11a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2"})})};c.forwardRef(Zi);const Xi=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M26 5H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3M20 27h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2"})})};c.forwardRef(Xi);const Qi=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M29.443 18.776a13.1 13.1 0 0 1-4.626 6.614A13 13 0 0 1 4 15a12.9 12.9 0 0 1 2.61-7.815 13.1 13.1 0 0 1 6.614-4.625 1 1 0 0 1 1.25 1.25 11.01 11.01 0 0 0 13.725 13.725 1 1 0 0 1 1.25 1.25z"})})};c.forwardRef(Qi);const Ji=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M18 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0M7.5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4m17 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4"})})};c.forwardRef(Ji);const Pi=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M10.939 8.061a1.5 1.5 0 0 1 0-2.125l4-4a1.5 1.5 0 0 1 2.125 0l4 4a1.503 1.503 0 1 1-2.125 2.125L17.5 6.625V12a1.5 1.5 0 1 1-3 0V6.625l-1.439 1.436a1.5 1.5 0 0 1-2.122 0m8 15.875L17.5 25.375V20a1.5 1.5 0 1 0-3 0v5.375l-1.439-1.44a1.504 1.504 0 0 0-2.125 2.125l4 4a1.5 1.5 0 0 0 2.125 0l4-4a1.502 1.502 0 1 0-2.125-2.125zm11.125-9-4-4a1.503 1.503 0 0 0-2.125 2.125l1.436 1.439H20a1.5 1.5 0 0 0 0 3h5.375l-1.44 1.439a1.503 1.503 0 0 0 2.125 2.125l4-4a1.5 1.5 0 0 0 .001-2.125zM6.625 17.5H12a1.5 1.5 0 1 0 0-3H6.625l1.44-1.439a1.503 1.503 0 1 0-2.125-2.125l-4 4a1.5 1.5 0 0 0 0 2.125l4 4a1.503 1.503 0 0 0 2.125-2.125z"})})};c.forwardRef(Pi);const ec=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M26.615 3.214a.99.99 0 0 0-.857-.183l-16 4a1 1 0 0 0-.758.97v13.762a4.5 4.5 0 1 0 2 3.737V13.781l14-3.5v7.482a4.5 4.5 0 1 0 2 3.737V4a1 1 0 0 0-.385-.786"})})};c.forwardRef(ec);const tc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H14.5a1.5 1.5 0 1 1 0-3H27a1.5 1.5 0 0 1 1.5 1.5m-14-6.5H27a1.5 1.5 0 0 0 0-3H14.5a1.5 1.5 0 0 0 0 3m12.5 13H14.5a1.5 1.5 0 1 0 0 3H27a1.5 1.5 0 1 0 0-3M5.5 7.414V13a1.5 1.5 0 0 0 3 0V5a1.5 1.5 0 0 0-2.17-1.341l-2 1a1.5 1.5 0 0 0 1.17 2.75zm4.966 12.107a3.46 3.46 0 0 0-1.4-2.329 3.61 3.61 0 0 0-4.954.683 3.5 3.5 0 0 0-.52.942 1.5 1.5 0 0 0 2.818 1.027.5.5 0 0 1 .072-.125.6.6 0 0 1 .813-.103.48.48 0 0 1 .201.325.45.45 0 0 1-.096.347l-.016.02-3.585 4.794A1.5 1.5 0 0 0 5 27.5h4a1.5 1.5 0 1 0 0-3H8l1.785-2.389a3.43 3.43 0 0 0 .681-2.59"})})};c.forwardRef(tc);const nc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{fillRule:"evenodd",d:"M17.2 8.254a4 4 0 1 1 1.082 1.682l-7.482 4.81q.04.125.074.254h10.252A4.002 4.002 0 0 1 29 16a4 4 0 0 1-7.874 1H10.874q-.033.128-.075.254l7.484 4.81a4 4 0 1 1-1.082 1.682l-7.484-4.81a4 4 0 1 1 0-5.871zM21 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4m2-11a2 2 0 1 0 4 0 2 2 0 0 0-4 0M7 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4",clipRule:"evenodd"})})};c.forwardRef(nc);const oc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{fillRule:"evenodd",d:"M10.874 17A4.002 4.002 0 0 1 3 16a4 4 0 0 1 7.874-1h10.252A4.002 4.002 0 0 1 29 16a4 4 0 0 1-7.874 1zM7 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4m18 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4",clipRule:"evenodd"})})};c.forwardRef(oc);const rc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{fillRule:"evenodd",d:"M28.924 16.384c-.05.12-.124.231-.217.324l-4 4a1 1 0 0 1-1.632-.324 1 1 0 0 1 .217-1.09L25.585 17H10.875A4.002 4.002 0 0 1 3 16a4 4 0 0 1 7.874-1h14.712l-2.294-2.293a1 1 0 0 1 1.415-1.415l4 4a1 1 0 0 1 .217 1.09M7 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4",clipRule:"evenodd"})})};c.forwardRef(rc);const ac=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M29 4a1 1 0 0 0-1-1c-5.51 0-11.164 6.214-14.304 10.329A7.5 7.5 0 0 0 4 20.5c0 3.86-2.443 5.591-2.559 5.671A1 1 0 0 0 2 28h9.5a7.5 7.5 0 0 0 7.171-9.696C22.788 15.164 29 9.51 29 4M15.553 14.194a48 48 0 0 1 1.26-1.569 9.5 9.5 0 0 1 2.562 2.561q-.738.618-1.569 1.262a7.6 7.6 0 0 0-2.254-2.254m5.337-.335a11.6 11.6 0 0 0-2.75-2.75c3.973-4.316 6.969-5.625 8.738-5.989-.357 1.77-1.672 4.766-5.988 8.739"})})};c.forwardRef(ac);const sc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M31 13v6.25a2.01 2.01 0 0 1-1.45 1.922L17 24.75V29a1 1 0 0 1-2 0v-4.25a2.01 2.01 0 0 1 1.45-1.922L29 19.25V13h-2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3H2a1 1 0 0 1 0-2h2V8a2 2 0 0 1 2-2h19a2 2 0 0 1 2 2v3h2a2 2 0 0 1 2 2"})})};c.forwardRef(sc);const ic=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M25.096 6.736A12.9 12.9 0 0 0 16 3h-.134A13 13 0 0 0 3 16c0 5.375 3.323 9.883 8.67 11.771A4 4 0 0 0 17 24a2 2 0 0 1 2-2h5.776a3.976 3.976 0 0 0 3.9-3.11c.224-.984.332-1.99.324-3a12.9 12.9 0 0 0-3.904-9.154M10.5 21a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0-7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5.5-3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};c.forwardRef(ic);const cc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M28.925 5.543v.018L21.65 29.554A1.985 1.985 0 0 1 19.728 31a1.98 1.98 0 0 1-1.803-1.144l-4.464-9.423a.5.5 0 0 1 .099-.568l7.158-7.159a1 1 0 0 0-1.414-1.413l-7.169 7.157a.5.5 0 0 1-.567.099l-9.376-4.441A2.05 2.05 0 0 1 1 12.17a1.99 1.99 0 0 1 1.446-1.815L26.44 3.08h.018a2 2 0 0 1 2.468 2.463"})})};c.forwardRef(cc);const lc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"m26.56 17.061-10.257 10.25a7.501 7.501 0 0 1-10.607-10.61l12.27-12.236a5 5 0 0 1 7.07 7.074l-.021.02L13.04 23.086a1.503 1.503 0 0 1-2.121-.041 1.5 1.5 0 0 1 .041-2.121L22.924 9.409a2 2 0 1 0-2.838-2.82L7.816 18.82a4.5 4.5 0 1 0 6.366 6.364l10.258-10.25a1.503 1.503 0 0 1 2.125 2.125z"})})};c.forwardRef(lc);const dc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M3.5 8A1.5 1.5 0 0 1 5 6.5h22a1.5 1.5 0 0 1 0 3H5A1.5 1.5 0 0 1 3.5 8M5 14.5h16a1.5 1.5 0 1 0 0-3H5a1.5 1.5 0 1 0 0 3m22 2H5a1.5 1.5 0 1 0 0 3h22a1.5 1.5 0 1 0 0-3m-6 5H5a1.5 1.5 0 1 0 0 3h16a1.5 1.5 0 1 0 0-3"})})};c.forwardRef(dc);const hc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"m28.414 9.171-5.585-5.586a2 2 0 0 0-2.829 0L4.586 19A1.98 1.98 0 0 0 4 20.414V26a2 2 0 0 0 2 2h5.586A1.98 1.98 0 0 0 13 27.414L28.414 12a2 2 0 0 0 0-2.829M24 13.585 18.414 8l3-3L27 10.585z"})})},uc=c.forwardRef(hc),Ah=uc,gc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M28.985 21.885A7.03 7.03 0 0 1 22 28c-9.925 0-18-8.075-18-18a7.03 7.03 0 0 1 6.115-6.985 2 2 0 0 1 2.078 1.19l2.64 5.894v.015a2 2 0 0 1-.16 1.886 1 1 0 0 1-.07.096L12 15.181c.936 1.903 2.926 3.875 4.854 4.814l3.042-2.589q.045-.037.094-.07a2 2 0 0 1 1.896-.175l.017.008 5.888 2.639a2 2 0 0 1 1.194 2.077"})})};c.forwardRef(gc);const fc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"m29.416 13-6.683 6.706c.57 1.584.806 4.236-1.65 7.5a2 2 0 0 1-1.458.794h-.141a2 2 0 0 1-1.415-.586l-6.033-6.04-5.328 5.333a1 1 0 1 1-1.415-1.415l5.332-5.328-6.037-6.038a2 2 0 0 1 .162-2.972c3.178-2.564 6.219-2.06 7.55-1.643L19 2.587a2 2 0 0 1 2.829 0l7.586 7.585A2 2 0 0 1 29.416 13"})})};c.forwardRef(fc);const mc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M16 2A11.013 11.013 0 0 0 5 13c0 9.413 10 16.521 10.426 16.819a1 1 0 0 0 1.148 0C17 29.52 27 22.413 27 13A11.01 11.01 0 0 0 16 2m0 7a4 4 0 1 1 0 8 4 4 0 0 1 0-8"})})};c.forwardRef(mc);const xc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M30 17v4a1 1 0 0 1-1.196.98L19.5 20.125v2.966l2.207 2.206A1 1 0 0 1 22 26v3a1 1 0 0 1-1.375.929L16 28.078l-4.625 1.85A1 1 0 0 1 10 29v-3a1 1 0 0 1 .293-.707l2.207-2.207v-2.961L3.196 21.98A1 1 0 0 1 2 21v-4a1 1 0 0 1 .553-.895l9.947-4.972V5.5a3.5 3.5 0 1 1 7 0v5.633l9.948 4.972A1 1 0 0 1 30 17"})})};c.forwardRef(xc);const wc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M25.676 18.884a7.6 7.6 0 0 1-3.978 1.107 9 9 0 0 1-3.42-.707A6.94 6.94 0 0 0 17 23.314V27a1 1 0 0 1-1.066 1A1.023 1.023 0 0 1 15 26.969v-1.555l-4.828-4.828A6.6 6.6 0 0 1 7.93 21a5.73 5.73 0 0 1-2.99-.834C2.216 18.511.75 14.702 1.034 9.974a1 1 0 0 1 .94-.94c4.728-.28 8.537 1.182 10.187 3.906a5.75 5.75 0 0 1 .806 3.56.5.5 0 0 1-.86.304l-2.4-2.513a1 1 0 0 0-1.415 1.414l6.736 6.906q.01-.146.026-.291a8.57 8.57 0 0 1 2.33-4.933l6.323-6.682a1 1 0 0 0-1.413-1.415l-6.125 6.477a.5.5 0 0 1-.848-.217c-.592-2.185-.331-4.36.8-6.228 2.233-3.685 7.428-5.657 13.898-5.277a1 1 0 0 1 .94.94c.375 6.471-1.598 11.666-5.283 13.899"})})};c.forwardRef(wc);const vc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M30 16a1.97 1.97 0 0 1-.95 1.689L11.04 28.706a2 2 0 0 1-2.767-.688A2 2 0 0 1 8 27.016V4.984a1.98 1.98 0 0 1 1.015-1.728 2 2 0 0 1 2.025.038L29.05 14.31A1.97 1.97 0 0 1 30 16"})})};c.forwardRef(vc);const bc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5h-9.5V27a1.5 1.5 0 1 1-3 0v-9.5H5a1.5 1.5 0 1 1 0-3h9.5V5a1.5 1.5 0 1 1 3 0v9.5H27a1.5 1.5 0 0 1 1.5 1.5"})})},pc=c.forwardRef(bc),Mh=pc,$c=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.016 13.016 0 0 0 16 3m5 14h-4v4a1 1 0 0 1-2 0v-4h-4a1 1 0 0 1 0-2h4v-4a1 1 0 0 1 2 0v4h4a1 1 0 0 1 0 2"})})};c.forwardRef($c);const Cc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M27 5H17V3a1 1 0 0 0-2 0v2H5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h4.92l-2.701 3.375a1 1 0 0 0 1.562 1.25L12.48 24h7.04l3.699 4.625a1 1 0 1 0 1.562-1.25L22.08 24H27a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M13 18a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0zm4 0a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0zm4 0a1 1 0 0 1-2 0v-7a1 1 0 0 1 2 0z"})})};c.forwardRef(Cc);const jc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M30.414 17 18 4.586A1.98 1.98 0 0 0 16.586 4H5a1 1 0 0 0-1 1v11.586A1.98 1.98 0 0 0 4.586 18L17 30.414a2 2 0 0 0 2.829 0l10.585-10.585a2 2 0 0 0 0-2.829M10.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};c.forwardRef(jc);const yc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M20.723 28H26a2 2 0 0 0 2-2v-4.706a1 1 0 0 0-1.383-.919 2.9 2.9 0 0 1-1.117.221c-1.654 0-3-1.387-3-3.091s1.346-3.091 3-3.091c.383 0 .763.075 1.117.221A1 1 0 0 0 28 13.706V9a2 2 0 0 0-2-2h-4.527a4.5 4.5 0 1 0-8.945 0H8a2 2 0 0 0-2 2v4.028a4.5 4.5 0 1 0 0 8.945V26a2 2 0 0 0 2 2h5.278"})})};c.forwardRef(yc);const Sc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M18 22.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M29.5 16A13.5 13.5 0 1 1 16 2.5 13.515 13.515 0 0 1 29.5 16m-3 0A10.5 10.5 0 1 0 16 26.5 10.51 10.51 0 0 0 26.5 16M16 8c-3.033 0-5.5 2.242-5.5 5v.5a1.5 1.5 0 1 0 3 0V13c0-1.102 1.125-2 2.5-2s2.5.898 2.5 2-1.125 2-2.5 2a1.5 1.5 0 0 0-1.5 1.5v1a1.5 1.5 0 0 0 2.966.32C19.79 17.235 21.5 15.296 21.5 13c0-2.758-2.468-5-5.5-5"})})};c.forwardRef(Sc);const Rc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M14.5 9v11a6.006 6.006 0 0 1-6 6 1 1 0 0 1 0-2 4 4 0 0 0 4-4v-1H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h7.5a2 2 0 0 1 2 2M27 7h-7.5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2H27v1a4 4 0 0 1-4 4 1 1 0 0 0 0 2 6.006 6.006 0 0 0 6-6V9a2 2 0 0 0-2-2"})})};c.forwardRef(Rc);const Ac=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M27 5v23a1 1 0 0 1-2 0v-6h-6a1 1 0 0 1-1-1c.046-2.395.349-4.779.902-7.11 1.223-5.061 3.54-8.454 6.704-9.809a1 1 0 0 1 1.394.92m-12.014-.164a.999.999 0 1 0-1.972.33L13.986 11H11V5a1 1 0 0 0-2 0v6H6.014l.972-5.835a1 1 0 1 0-1.972-.329l-1 6A1 1 0 0 0 4 11a6.01 6.01 0 0 0 5 5.915V28a1 1 0 1 0 2 0V16.915A6.01 6.01 0 0 0 16 11q0-.083-.014-.164z"})})};c.forwardRef(Ac);const Mc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M19 28a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1m8.953-8.521-1.546 6.954a2 2 0 0 1-3.188 1.138l-3.405-2.57h-7.625L8.78 27.57a2 2 0 0 1-3.189-1.138l-1.545-6.954a2.01 2.01 0 0 1 .415-1.714l3.57-4.282c.12-1.574.482-3.12 1.072-4.584 1.612-4.043 4.5-6.579 5.671-7.481a2 2 0 0 1 2.45 0c1.167.902 4.059 3.438 5.671 7.48.59 1.465.952 3.01 1.072 4.585l3.57 4.282a2.01 2.01 0 0 1 .415 1.714m-17.404 4.25q-2.014-3.666-2.445-7.209L6 19.045 7.545 26l.022-.016zM17.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m8.5 6.545-2.104-2.525q-.428 3.535-2.445 7.211l2.982 2.25.022.017z"})})};c.forwardRef(Mc);const Ic=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M19.716 14.141a1 1 0 0 1 .261-1.391l8.458-5.788a1 1 0 0 1 1.125 1.652L21.101 14.4a1 1 0 0 1-1.39-.261zm10.109 10.634a1 1 0 0 1-1.39.261L17 17.211l-5.315 3.636a4.5 4.5 0 1 1-1.125-1.65L15.229 16l-4.673-3.198a4.5 4.5 0 1 1 1.125-1.65l17.875 12.233a1 1 0 0 1 .269 1.39M9 22.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m0-13a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"})})};c.forwardRef(Ic);const Tc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M225.86 102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28 23.51 138.44 16 128 16s-18.27 7.51-25.18 14.14c-3.94 3.77-8 7.67-11.57 9.14-3.25 1.36-8.69 1.44-13.94 1.52-9.76.15-20.82.31-28.51 8s-7.8 18.75-8 28.51c-.08 5.25-.16 10.67-1.52 13.94-1.47 3.56-5.37 7.63-9.14 11.57C23.51 109.72 16 117.56 16 128s7.51 18.27 14.14 25.18c3.77 3.94 7.67 8 9.14 11.57 1.36 3.27 1.44 8.69 1.52 13.94.15 9.76.31 20.82 8 28.51s18.75 7.85 28.51 8c5.25.08 10.67.16 13.94 1.52 3.56 1.47 7.63 5.37 11.57 9.14 6.9 6.63 14.74 14.14 25.18 14.14s18.27-7.51 25.18-14.14c3.94-3.77 8-7.67 11.57-9.14 3.27-1.36 8.69-1.44 13.94-1.52 9.76-.15 20.82-.31 28.51-8s7.85-18.75 8-28.51c.08-5.25.16-10.67 1.52-13.94 1.47-3.56 5.37-7.63 9.14-11.57 6.63-6.9 14.14-14.74 14.14-25.18s-7.51-18.27-14.14-25.18m-52.2 6.84-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32"})})};c.forwardRef(Tc);const Vc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M29.061 26.939 23.125 21A11.515 11.515 0 1 0 21 23.125l5.941 5.942a1.503 1.503 0 0 0 2.125-2.125zM5.5 14a8.5 8.5 0 1 1 8.5 8.5A8.51 8.51 0 0 1 5.5 14"})})},Lc=c.forwardRef(Vc),Ec=Lc,Hc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M26 5H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M26 17H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m-3.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};c.forwardRef(Hc);const Dc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M28 7v7.346c0 11.202-9.477 14.918-11.375 15.549a1.94 1.94 0 0 1-1.25 0C13.475 29.264 4 25.548 4 14.346V7a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2"})})};c.forwardRef(Dc);const Bc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"m30.949 7.653-6.47-3.528A1 1 0 0 0 24 4h-4a1 1 0 0 0-1 1 3 3 0 0 1-6 0 1 1 0 0 0-1-1H8a1 1 0 0 0-.48.125L1.051 7.653a1.97 1.97 0 0 0-.824 2.657l2.41 4.601A2.05 2.05 0 0 0 4.458 16H7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V16h2.543a2.05 2.05 0 0 0 1.822-1.089l2.409-4.601a1.97 1.97 0 0 0-.825-2.658M4.459 14a.08.08 0 0 1-.051-.016L2.01 9.408 7 6.685V14zm23.134-.018a.07.07 0 0 1-.052.018H25V6.685l4.99 2.723z"})})};c.forwardRef(Bc);const kc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M12 27a2 2 0 1 1-4 0 2 2 0 0 1 4 0m11-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4m5.805-16.594A1 1 0 0 0 28 8H6.04L5.026 4.45A2.01 2.01 0 0 0 3.103 3H1a1 1 0 0 0 0 2h2.103l4.522 15.824A3.01 3.01 0 0 0 10.509 23h12.014a2.99 2.99 0 0 0 2.867-2.117l3.566-11.59a1 1 0 0 0-.151-.887"})})};c.forwardRef(kc);const zc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M14.5 27a1.5 1.5 0 0 1-1.5 1.5H6A2.5 2.5 0 0 1 3.5 26V6A2.5 2.5 0 0 1 6 3.5h7a1.5 1.5 0 0 1 0 3H6.5v19H13a1.5 1.5 0 0 1 1.5 1.5m13.561-12.061-5-5a1.503 1.503 0 0 0-2.125 2.125l2.439 2.436H13a1.5 1.5 0 1 0 0 3h10.375l-2.44 2.439a1.503 1.503 0 0 0 2.125 2.125l5-5a1.5 1.5 0 0 0 .001-2.125"})})};c.forwardRef(zc);const Nc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M4 10a1 1 0 0 1 1-1h4.646a3.5 3.5 0 0 1 6.708 0H27a1 1 0 1 1 0 2H16.354a3.5 3.5 0 0 1-6.708 0H5a1 1 0 0 1-1-1m23 11h-2.646a3.5 3.5 0 0 0-6.708 0H5a1 1 0 0 0 0 2h12.646a3.5 3.5 0 0 0 6.708 0H27a1 1 0 1 0 0-2"})})};c.forwardRef(Nc);const Oc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M26 18a1.97 1.97 0 0 1-1.302 1.867l-6.457 2.375-2.375 6.452a1.99 1.99 0 0 1-3.735 0L9.75 22.25l-6.452-2.375a1.99 1.99 0 0 1 0-3.735l6.456-2.375 2.375-6.451a1.99 1.99 0 0 1 3.735 0l2.375 6.456 6.451 2.375A1.97 1.97 0 0 1 26 18M19 6h2v2a1 1 0 0 0 2 0V6h2a1 1 0 1 0 0-2h-2V2a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2m11 4h-1V9a1 1 0 1 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2"})})};c.forwardRef(Oc);const Fc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M15 7v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2m10-2h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M13 17H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m12 0h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2"})})};c.forwardRef(Fc);const _c=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:[r.jsx("path",{d:"M27.5 21.136 16 27.843 4.5 21.136a1 1 0 0 0-1 1.728l12 7a1 1 0 0 0 1.008 0l12-7a1 1 0 1 0-1.008-1.728"}),r.jsx("path",{d:"M27.5 15.136 16 21.843 4.5 15.136a1 1 0 0 0-1 1.728l12 7a1 1 0 0 0 1.008 0l12-7a1 1 0 1 0-1.008-1.728"}),r.jsx("path",{d:"m3.5 10.864 12 7a1 1 0 0 0 1.008 0l12-7a1 1 0 0 0 0-1.728l-12-7a1 1 0 0 0-1.008 0l-12 7a1 1 0 0 0 0 1.728"})]})};c.forwardRef(_c);const Wc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"m29.313 14.298-5.638 4.92 1.689 7.325a2 2 0 0 1-2.98 2.167l-6.389-3.875L9.62 28.71a2 2 0 0 1-2.98-2.168l1.686-7.317-5.638-4.928a2 2 0 0 1 1.138-3.507l7.433-.644 2.901-6.92a1.994 1.994 0 0 1 3.68 0l2.91 6.92 7.43.644a2 2 0 0 1 1.139 3.508z"})})};c.forwardRef(Wc);const Uc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M29 19a4 4 0 1 0-4.991 3.875A1 1 0 0 0 24 23a4 4 0 0 1-4 4h-3a4 4 0 0 1-4-4v-5.065c3.934-.5 7-3.934 7-8.039V5a2 2 0 0 0-2-2h-2a1 1 0 1 0 0 2h2v4.896c0 3.323-2.656 6.061-5.92 6.104A6 6 0 0 1 6 10V5h2a1 1 0 0 0 0-2H6a2 2 0 0 0-2 2v5a8 8 0 0 0 7 7.936V23a6.006 6.006 0 0 0 6 6h3a6.006 6.006 0 0 0 6-6 1 1 0 0 0-.009-.125A4 4 0 0 0 29 19m-4 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2"})})};c.forwardRef(Uc);const qc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16"})})};c.forwardRef(qc);const Gc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M29 12a1 1 0 0 0-.038-.275L27.17 5.45A2.01 2.01 0 0 0 25.25 4H6.75a2.01 2.01 0 0 0-1.919 1.45L3.04 11.725A1 1 0 0 0 3 12v2a5 5 0 0 0 2 4v8a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-8a5 5 0 0 0 2-4zm-18 2a3 3 0 0 1-4.39 2.657 1 1 0 0 0-.228-.132A3 3 0 0 1 5 14v-1h6zm8 0a3 3 0 0 1-6 0v-1h6zm8 0a3 3 0 0 1-1.384 2.525q-.12.051-.225.131A3 3 0 0 1 21 14v-1h6z"})})};c.forwardRef(Gc);const Kc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5h-3.767A5.19 5.19 0 0 1 24.5 21c0 1.806-.976 3.54-2.679 4.756C20.25 26.881 18.18 27.5 16 27.5s-4.25-.619-5.821-1.744C8.476 24.54 7.5 22.806 7.5 21a1.5 1.5 0 0 1 3 0c0 1.898 2.519 3.5 5.5 3.5s5.5-1.602 5.5-3.5c0-1.595-1.163-2.523-4.419-3.5H5a1.5 1.5 0 1 1 0-3h22a1.5 1.5 0 0 1 1.5 1.5M9.389 12.5a1.5 1.5 0 0 0 1.5-1.5c0-2 2.197-3.5 5.111-3.5 2.17 0 3.921.831 4.685 2.223a1.5 1.5 0 0 0 2.625-1.446C22.016 5.914 19.281 4.5 16 4.5c-4.625 0-8.111 2.794-8.111 6.5a1.5 1.5 0 0 0 1.5 1.5"})})};c.forwardRef(Kc);const Yc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M15 5V2a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0m1 3a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8m-8.707.707a1 1 0 1 0 1.414-1.415l-2-2a1 1 0 1 0-1.414 1.415zm0 14.586-2 2a1 1 0 1 0 1.414 1.415l2-2a1 1 0 1 0-1.415-1.415M24 9a1 1 0 0 0 .707-.293l2-2a1 1 0 0 0-1.415-1.414l-2 2A1 1 0 0 0 24 9m.707 14.293a1 1 0 1 0-1.415 1.415l2 2a1 1 0 0 0 1.415-1.415zM6 16a1 1 0 0 0-1-1H2a1 1 0 0 0 0 2h3a1 1 0 0 0 1-1m10 10a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1m14-11h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2"})})};c.forwardRef(Yc);const Zc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M27 8h-8.586l4.293-4.292a1 1 0 0 0-1.415-1.415L16 7.586l-5.292-5.293a1 1 0 1 0-1.415 1.415L13.586 8H5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2m0 17h-7V10h7zm-2-10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"})})};c.forwardRef(Zc);const Xc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"m29.978 19.625-1.5-12A3 3 0 0 0 25.5 5H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h5.383l4.722 9.448A1 1 0 0 0 15 30a5 5 0 0 0 5-5v-2h7a3 3 0 0 0 2.977-3.375M9 18H4V7h5z"})})};c.forwardRef(Xc);const Qc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M29.25 10.015A3 3 0 0 0 27 9h-7V7a5 5 0 0 0-5-5 1 1 0 0 0-.895.553L9.383 12H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h21.5a3 3 0 0 0 2.977-2.625l1.5-12a3 3 0 0 0-.727-2.36M4 14h5v11H4z"})})};c.forwardRef(Qc);const Jc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M23 3H9a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h1l-1.8 2.4a1 1 0 0 0 1.6 1.2l2.7-3.6h7l2.7 3.6a1 1 0 0 0 1.6-1.2L22 27h1a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4M10.5 23a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m4.5-8H7v-5h8zm6.5 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m3.5-8h-8v-5h8z"})})};c.forwardRef(Jc);const Pc=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M27 6h-5V5a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v1H5a1 1 0 0 0 0 2h1v18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h1a1 1 0 1 0 0-2M14 21a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0zm6 0a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0zm0-15h-8V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"})})},e2=c.forwardRef(Pc),Ih=e2,t2=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"m23.54 2.267-3.711 3.377c1.7.52 3.298 1.397 4.653 2.631 4.684 4.266 4.684 11.184 0 15.45q-5.184 4.72-16.021 6.008l3.71-3.377a12.2 12.2 0 0 1-4.653-2.63c-4.684-4.267-4.712-11.16 0-15.45q5.184-4.721 16.021-6.01m-7.54 8.4c-3.314 0-6 2.388-6 5.333s2.686 5.333 6 5.333 6-2.387 6-5.333c0-2.945-2.686-5.333-6-5.333"})})};c.forwardRef(t2);const n2=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M25.5 28a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 1 1 0-3h16a1.5 1.5 0 0 1 1.5 1.5M16 24.5a8.51 8.51 0 0 0 8.5-8.5V7a1.5 1.5 0 1 0-3 0v9a5.5 5.5 0 0 1-11 0V7a1.5 1.5 0 1 0-3 0v9a8.51 8.51 0 0 0 8.5 8.5"})})};c.forwardRef(n2);const o2=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M28.5 19v7a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 26v-7a1.5 1.5 0 0 1 3 0v6.5h19V19a1.5 1.5 0 1 1 3 0m-16.439-7.939L14.5 8.625V19a1.5 1.5 0 1 0 3 0V8.625l2.439 2.44a1.503 1.503 0 0 0 2.125-2.125l-5-5a1.5 1.5 0 0 0-2.125 0l-5 5a1.503 1.503 0 1 0 2.125 2.125z"})})};c.forwardRef(o2);const r2=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M28.866 27.5A1 1 0 0 1 28 28H4a1 1 0 0 1-.865-1.5c1.904-3.291 4.838-5.651 8.261-6.77a9 9 0 1 1 9.208 0c3.424 1.119 6.357 3.479 8.261 6.77a1 1 0 0 1 .001 1"})})};c.forwardRef(r2);const a2=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M19.44 3.101a1 1 0 0 0-1.054.11L9.656 10H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.656l8.73 6.789A1 1 0 0 0 20 28V4a1 1 0 0 0-.56-.899M28.414 16l2.293-2.292a1.001 1.001 0 0 0-1.415-1.415L27 14.586l-2.293-2.293a1 1 0 1 0-1.415 1.415L25.587 16l-2.293 2.293a1 1 0 0 0 1.415 1.415L27 17.414l2.293 2.294a1 1 0 0 0 1.415-1.415z"})})};c.forwardRef(a2);const s2=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M19.439 3.101a1 1 0 0 0-1.053.11L9.656 10H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.656l8.73 6.789A1.001 1.001 0 0 0 20 28V4a1 1 0 0 0-.561-.899M9 20H4v-8h5zm15.75-7.305a5 5 0 0 1 0 6.61 1 1 0 0 1-1.5-1.322 3 3 0 0 0 0-3.966 1 1 0 0 1 1.5-1.322M31 16a10 10 0 0 1-2.546 6.668 1 1 0 0 1-1.49-1.334 8 8 0 0 0 0-10.666.998.998 0 0 1 .407-1.624 1 1 0 0 1 1.083.29A9.98 9.98 0 0 1 31 16"})})};c.forwardRef(s2);const i2=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M15 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0m11 11c-3.58 0-5.226-1.662-6.969-3.421a25 25 0 0 0-1.375-1.323C13.031 8.24 5.63 15.098 5.316 15.391a1 1 0 0 0 1.369 1.458 20.5 20.5 0 0 1 3.815-2.724c1.723-.922 3.174-1.279 4.338-1.072L8.082 28.6a1 1 0 0 0 1.835.798l4.2-9.659L18 22.515V29a1 1 0 1 0 2 0v-7a1 1 0 0 0-.419-.814l-4.65-3.321L16.61 14c.33.305.657.634 1 .98C19.381 16.774 21.586 19 26 19a1 1 0 0 0 0-2"})})};c.forwardRef(i2);const c2=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m-1 7a1 1 0 0 1 2 0v7a1 1 0 0 1-2 0zm1 13a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};c.forwardRef(c2);const l2=({fill:e="currentColor",stroke:t,...o},a)=>{const{colors:n}=g(),s=e&&e in n?n[e]:e,i=t&&t in n?n[t]:t;return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:s,stroke:i,ref:a,...o,children:r.jsx("path",{d:"m31.316 24.949-3 1a1 1 0 0 1-1.211-.5l-3.724-7.45H13a1 1 0 0 1-1-1v-3.707A7 7 0 0 0 14 27c3.239 0 6.261-2.256 7.031-5.25a1 1 0 1 1 1.938.5C21.96 26.162 18.19 29 14 29a9 9 0 0 1-2-17.774V8.851a3.5 3.5 0 1 1 2 0V11h7a1 1 0 0 1 0 2h-7v3h10a1 1 0 0 1 .894.552l3.612 7.225 2.178-.726a1 1 0 1 1 .632 1.898"})})};c.forwardRef(l2);const nt=(e,t)=>{const o=c.createContext(t),a=s=>{const{children:i,...l}=s,d=c.useMemo(()=>l,Object.values(l));return r.jsx(o.Provider,{value:d,children:i})};function n(s){const i=c.useContext(o);if(i)return i;if(t!==void 0)return t;throw new Error(`\`${s}\` must be used within \`${e}\``)}return a.displayName=`${e}Provider`,[a,n]};function d2(e,t){return typeof e=="string"?!1:t in e}function dt(e,t,o){return e&&t&&d2(e,t)?e[t]:o}const Dn={padding:["padding-block-start","padding-inline-end","padding-block-end","padding-inline-start"],paddingTop:"padding-block-start",paddingRight:"padding-inline-end",paddingBottom:"padding-block-end",paddingLeft:"padding-inline-start",margin:["margin-block-start","margin-inline-end","margin-block-end","margin-inline-start"],marginLeft:"margin-inline-start",marginRight:"margin-inline-end",marginTop:"margin-block-start",marginBottom:"margin-block-end",borderRadius:"border-radius",borderStyle:"border-style",borderWidth:"border-width",borderColor:"border-color",fontSize:"font-size",fontWeight:"font-weight",lineHeight:"line-height",zIndex:"z-index",boxShadow:"box-shadow",pointerEvents:"pointer-events",textAlign:"text-align",textTransform:"text-transform",textDecoration:"text-decoration",flexGrow:"flex-grow",flexShrink:"flex-shrink",flexBasis:"flex-basis",minWidth:"min-width",maxWidth:"max-width",minHeight:"min-height",maxHeight:"max-height",flexDirection:"flex-direction",flexWrap:"flex-wrap",justifyContent:"justify-content",alignItems:"align-items"},h2=e=>{const[t,o,a,n]=e,s=o??t;return[t,s,a??t,n??s]};function u2(e,t){switch(e){case"gap":case"padding":case"margin":case"paddingTop":case"paddingLeft":case"paddingRight":case"paddingBottom":case"marginTop":case"marginLeft":case"marginRight":case"marginBottom":case"left":case"right":case"top":case"bottom":case"width":case"maxWidth":case"minWidth":case"height":case"maxHeight":case"minHeight":case"borderRadius":case"borderWidth":return t.spaces;case"color":case"background":case"borderColor":return t.colors;case"fontSize":return t.fontSizes;case"fontWeight":return t.fontWeights;case"lineHeight":return t.lineHeights;case"zIndex":return t.zIndices;case"boxShadow":return t.shadows;default:return null}}const xt=(e,t)=>{const o=Object.entries(e).reduce((a,n)=>{const[s,i]=n,l=u2(s,t),d=Object.prototype.hasOwnProperty.call(Dn,s)?Dn[s]:s;return d&&(i||i===0)&&(typeof i=="object"&&!Array.isArray(i)?Object.entries(i).forEach(([f,u])=>{a[f]={...a[f],...Bn(d,u,l)}}):a.initial={...a.initial,...Bn(d,i,l)}),a},{initial:{},small:{},medium:{},large:{}});return Object.entries(o).reduce((a,[n,s])=>{if(s&&Object.keys(s).length>0){const i=Object.entries(s).reduce((l,[d,f])=>(l.push(`${d}: ${f};`),l),[]).join(`
`);n==="initial"?a.push(i):a.push(`${t.breakpoints[n]}{ ${i} }`)}return a},[]).join(`
`)},Bn=(e,t,o)=>{if(Array.isArray(e)&&Array.isArray(t)){const a=h2(t);return e.reduce((n,s,i)=>(n[s]=dt(o,a[i],a[i]),n),{})}else return Array.isArray(e)&&!Array.isArray(t)?e.reduce((a,n)=>(a[n]=dt(o,t,t),a),{}):!Array.isArray(e)&&!Array.isArray(t)?{[e]:dt(o,t,t)}:(console.warn("You've passed an array of values to a property that does not support it. Please check the property and value you're passing."),{})},he=c.forwardRef,I=he((e,t)=>{const{background:o,basis:a,borderColor:n,color:s,flex:i,fontSize:l,grow:d,hasRadius:f,padding:u,paddingBottom:m,paddingLeft:h,paddingRight:x,paddingTop:v,margin:b,marginLeft:C,marginBottom:$,marginRight:p,marginTop:j,shadow:y,shrink:S,lineHeight:A,fontWeight:R,width:N,minWidth:H,maxWidth:k,height:_,minHeight:E,maxHeight:V,top:D,left:U,bottom:K,right:G,borderRadius:Y,borderStyle:Z,borderWidth:te,tag:X,pointerEvents:se,display:O,position:re,zIndex:ee,overflow:ue,cursor:T,transition:W,transform:Q,animation:F,textAlign:B,textTransform:q,...le}=e,de=X||"div",P={$background:o,$basis:a,$borderColor:n,$color:s,$flex:i,$fontSize:l,$grow:d,$hasRadius:f,$padding:u,$paddingBottom:m,$paddingLeft:h,$paddingRight:x,$paddingTop:v,$margin:b,$marginLeft:C,$marginBottom:$,$marginRight:p,$marginTop:j,$shadow:y,$shrink:S,$lineHeight:A,$fontWeight:R,$width:N,$minWidth:H,$maxWidth:k,$height:_,$minHeight:E,$maxHeight:V,$top:D,$left:U,$bottom:K,$right:G,$borderRadius:Y,$borderStyle:Z,$borderWidth:te,$pointerEvents:se,$display:O,$position:re,$zIndex:ee,$overflow:ue,$cursor:T,$transition:W,$transform:Q,$animation:F,$textAlign:B,$textTransform:q};return r.jsx(g2,{as:de,ref:t,...P,...le})}),g2=w.div`
  ${({theme:e,...t})=>xt({padding:t.$padding,paddingTop:t.$paddingTop,paddingBottom:t.$paddingBottom,paddingLeft:t.$paddingLeft,paddingRight:t.$paddingRight,margin:t.$margin,marginTop:t.$marginTop,marginBottom:t.$marginBottom,marginLeft:t.$marginLeft,marginRight:t.$marginRight,top:t.$top,left:t.$left,bottom:t.$bottom,right:t.$right,width:t.$width,minWidth:t.$minWidth,maxWidth:t.$maxWidth,height:t.$height,minHeight:t.$minHeight,maxHeight:t.$maxHeight,color:t.$color,background:t.$background,fontSize:t.$fontSize,fontWeight:t.$fontWeight,lineHeight:t.$lineHeight,borderRadius:t.$hasRadius?e.borderRadius:t.$borderRadius,borderStyle:t.$borderColor&&!t.$borderStyle?"solid":t.$borderStyle,borderWidth:t.$borderColor&&!t.$borderWidth?"1px":t.$borderWidth,borderColor:t.$borderColor,zIndex:t.$zIndex,boxShadow:t.$shadow,display:t.$display,pointerEvents:t.$pointerEvents,cursor:t.$cursor,textAlign:t.$textAlign,textTransform:t.$textTransform,transition:t.$transition,transform:t.$transform,animation:t.$animation,position:t.$position,overflow:t.$overflow,flex:t.$flex,flexShrink:t.$shrink,flexGrow:t.$grow,flexBasis:t.$basis},e)};
`,M=he((e,t)=>{const{className:o,alignItems:a,direction:n,inline:s,gap:i,justifyContent:l,wrap:d,...f}=e,u={$alignItems:a,$direction:n,$gap:i,$justifyContent:l,$wrap:d,$inline:s};return r.jsx(f2,{className:o,ref:t,...u,...f})}),f2=w(I)`
  ${({theme:e,$display:t="flex",$alignItems:o="center",$direction:a="row",...n})=>xt({gap:n.$gap,alignItems:o,justifyContent:n.$justifyContent,flexWrap:n.$wrap,flexDirection:a,display:n.$inline?"inline-flex":t},e)};
`,m2="alpha",x2="beta",w2="delta",v2="epsilon",kn="omega",b2="pi",p2="sigma",eo=L`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,$2=({$variant:e=kn,theme:t})=>{switch(e){case m2:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[5]};
        line-height: ${t.lineHeights[2]};
      `;case x2:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[4]};
        line-height: ${t.lineHeights[1]};
      `;case w2:return`
        font-weight: ${t.fontWeights.semiBold};
        font-size: ${t.fontSizes[3]};
        line-height: ${t.lineHeights[2]};
      `;case v2:return`
        font-size: ${t.fontSizes[3]};
        line-height: ${t.lineHeights[6]};
      `;case kn:return`
        font-size: ${t.fontSizes[2]};
        line-height: ${t.lineHeights[4]};
      `;case b2:return`
        font-size: ${t.fontSizes[1]};
        line-height: ${t.lineHeights[3]};
      `;case p2:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[0]};
        line-height: ${t.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${t.fontSizes[2]};
      `}},z=he((e,t)=>{const{ellipsis:o,textColor:a="currentcolor",textDecoration:n,textTransform:s,variant:i,lineHeight:l,fontWeight:d,fontSize:f,...u}=e,m={$ellipsis:o,$textColor:a,$textDecoration:n,$textTransform:s,$variant:i,$lineHeight:l,$fontWeight:d,$fontSize:f};return r.jsx(C2,{ref:t,tag:"span",...m,...u})}),C2=w(I)`
  ${$2}
  ${({$ellipsis:e})=>e?eo:""}

  ${({theme:e,...t})=>xt({color:t.$textColor,textDecoration:t.$textDecoration,textTransform:t.$textTransform,lineHeight:t.$lineHeight,fontWeight:t.$fontWeight,fontSize:t.$fontSize},e)}
`,[j2,$n]=nt("Accordion"),y2=c.forwardRef(({children:e,size:t="S",...o},a)=>r.jsx(S2,{ref:a,$size:t,collapsible:!0,...o,type:"single",children:r.jsx(j2,{size:t,children:e})})),S2=w(j1)`
  background-color: ${e=>e.theme.colors.neutral0};

  ${e=>e.$size==="S"?L`
        border-radius: ${t=>t.theme.borderRadius};
        border: solid 1px ${t=>t.theme.colors.neutral200};
      `:L``}
`,R2=c.forwardRef((e,t)=>{const{size:o}=$n("Item");return r.jsx(A2,{$size:o,"data-size":o,ref:t,...e})}),A2=w(y1)`
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
`,M2=c.forwardRef(({caretPosition:e="left",description:t,icon:o,iconProps:a,children:n,...s},i)=>{const{size:l}=$n("Trigger");return r.jsxs(no,{$caretPosition:e,$size:l,ref:i,...s,children:[e==="left"?r.jsx(ut,{$size:l,children:r.jsx(Ee,{width:l==="S"?"1.2rem":"1.6rem",height:l==="S"?"1.2rem":"1.6rem"})}):null,r.jsxs(M,{tag:"span",gap:2,overflow:"hidden",children:[o&&l==="S"?r.jsx(to,{children:r.jsx(o,{...a})}):null,r.jsxs(M,{alignItems:"flex-start",direction:"column",tag:"span",ref:i,overflow:"hidden",children:[r.jsx(z,{fontWeight:l==="S"?"bold":void 0,ellipsis:!0,variant:l==="M"?"delta":void 0,textAlign:"left",width:"100%",children:n}),t&&l==="M"?r.jsx(z,{textAlign:"left",children:t}):null]})]}),e==="right"?r.jsx(ut,{$size:l,children:r.jsx(Ee,{width:l==="S"?"1.2rem":"1.6rem",height:l==="S"?"1.2rem":"1.6rem"})}):null]})}),to=w(I)`
  color: ${e=>e.theme.colors.neutral500};
  display: flex;

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.color};
  }
`,ut=w(M).attrs(e=>({...e,tag:"span"}))`
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
`,no=w(C1)`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.$caretPosition==="left"?"flex-start":"space-between"};
  width: 100%;
  gap: ${e=>e.theme.spaces[4]};
  padding-inline: ${e=>e.$size==="S"?e.theme.spaces[4]:e.theme.spaces[6]};
  padding-block: ${e=>e.$size==="S"?e.theme.spaces[3]:e.theme.spaces[6]};
  cursor: pointer;
  color: ${e=>e.theme.colors.neutral800};
  overflow: hidden;

  &[data-disabled] {
    cursor: default;
    color: ${e=>e.theme.colors.neutral600};
  }

  &[data-state='open'] > ${ut} {
    transform: rotate(180deg);
  }

  /* we remove the default focus because the entire item should have the focus style and the default would be hidden. */
  &:focus-visible {
    outline: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.color};
  }
`,I2=c.forwardRef((e,t)=>{const{size:o}=$n("Trigger");return r.jsx(oo,{$size:o,...e,ref:t})}),oo=w(M).attrs(e=>({...e,tag:"span"}))`
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
`,T2=c.forwardRef(({variant:e="primary",...t},o)=>r.jsx(V2,{$variant:e,ref:o,...t})),V2=w(S1)`
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

      & > ${no} {
        color: ${e=>e.theme.colors.primary600};

        & ${to} {
          color: ${e=>e.theme.colors.primary600};
        }

        & ${ut} {
          background-color: ${e=>e.theme.colors.primary200};
        }
      }

      & > ${oo} > button {
        color: ${e=>e.theme.colors.primary600};
      }
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.backgroundColor};
  }
`,L2=c.forwardRef((e,t)=>r.jsx(D2,{ref:t,...e})),E2=ie`
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
`,H2=ie`
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
`,D2=w(R1)`
  overflow: hidden;

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation: ${E2} ${e=>e.theme.motion.timings[320]}
        ${e=>e.theme.motion.easings.authenticMotion};
    }

    &[data-state='closed'] {
      animation: ${H2} ${e=>e.theme.motion.timings[320]}
        ${e=>e.theme.motion.easings.authenticMotion};
    }
  }
`,Th=Object.freeze(Object.defineProperty({__proto__:null,Actions:I2,Content:L2,Header:T2,Item:R2,Root:y2,Trigger:M2},Symbol.toStringTag,{value:"Module"})),wt=L`
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
`,qe=({tag:e,...t})=>{const o=e||"span";return r.jsx(B2,{...t,as:o})},B2=w.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`,Qe=({children:e,label:t})=>{const o=c.Children.only(e);return r.jsxs(r.Fragment,{children:[c.cloneElement(o,{"aria-hidden":"true",focusable:"false"}),r.jsx(qe,{children:t})]})};Qe.displayName="AccessibleIcon";const Ot=({theme:e,$variant:t})=>t==="danger"?e.colors.danger700:t==="success"?e.colors.success700:t==="warning"?e.colors.warning700:e.colors.primary700;w(I)`
  ${wt};
`;w(M)`
  svg {
    height: 100%;
    width: 100%;

    path {
      fill: ${Ot};
    }
  }
`;w(I)`
  & a > span {
    color: ${Ot};
  }

  svg path {
    fill: ${Ot};
  }
`;function Ce({prop:e,defaultProp:t,onChange:o=()=>{}}){const[a,n]=ro({defaultProp:t,onChange:o}),s=e!==void 0,i=s?e:a,l=g0(o),d=c.useCallback(f=>{if(s){const m=typeof f=="function"?f(e):f;m!==e&&l(m)}else n(f)},[s,e,n,l]);return[i,d]}function ro({defaultProp:e,onChange:t}){const o=c.useState(e),[a]=o,n=c.useRef(a),s=g0(t);return c.useEffect(()=>{n.current!==a&&(s(a),n.current=a)},[a,n,s]),o}const zn={easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)"},Nn={120:"120ms"};`${Nn[120]}${zn.easeOutQuad}`,`${Nn[120]}${zn.easeOutQuad}`;const ne={overlayFadeIn:ie`
    from {
      opacity: 0;
    }
    to {
      opacity: 0.2;
    }
  `,modalPopIn:ie`
    from {
      transform:translate(-50%, -50%)  scale(0.8);
      opacity: 0;
    }
    to {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  `,modalPopOut:ie`
    from {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    to {
      transform:translate(-50%, -50%)  scale(0.8);
      opacity: 0;
    }
  `,popIn:ie`
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  `,popOut:ie`
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(0.8);
      opacity: 0;
    }
  `,slideDownIn:ie`
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,slideDownOut:ie`
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-10px);
    }
  `,slideUpIn:ie`
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,slideUpOut:ie`
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(10px);
    }
  `,fadeIn:ie`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `,fadeOut:ie`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  `},Je=32,On=2;c.forwardRef(({onLoadingStatusChange:e,delayMs:t=600,src:o,alt:a,fallback:n,preview:s=!1,...i},l)=>{const[d,f]=Ce({onChange:e}),[u,m]=c.useState(!1),h=s&&d==="loaded",x=v=>{h&&m(v)};return r.jsxs(l0,{onOpenChange:x,children:[r.jsx(d0,{asChild:!0,children:r.jsxs(Ft,{ref:l,...i,children:[h?r.jsx(k2,{width:"100%",height:"100%",position:"absolute",background:"neutral0",zIndex:"overlay",style:{opacity:u?.4:0}}):null,r.jsx(z2,{src:o,alt:a,onLoadingStatusChange:f}),r.jsx(I1,{delayMs:t,children:r.jsx(z,{fontWeight:"bold",textTransform:"uppercase",children:n})})]})}),h?r.jsx(h0,{children:r.jsx(N2,{side:"top",sideOffset:4,children:r.jsx(O2,{src:o,alt:a})})}):null]})});const ao=L`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  overflow: hidden;
  border-radius: 50%;
`,so=L`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`,Ft=w(T1)`
  position: relative;
  z-index: 0;
  ${ao}
  width: ${Je/10}rem;
  height: ${Je/10}rem;
  /* TODO: we should get the user email & hash it to turn it into a hex-value so different emails can consistently get a different background */
  background-color: ${e=>e.theme.colors.primary600};
  color: ${e=>e.theme.colors.neutral0};
`,k2=w(I)`
  @media (prefers-reduced-motion: no-preference) {
    transition: opacity ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,z2=w(V1)`
  ${so}
`,N2=w(u0)`
  ${ao}
  width: ${Je*On/10}rem;
  height: ${Je*On/10}rem;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${ne.fadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,O2=w.img`
  ${so}
`;c.forwardRef((e,t)=>r.jsx(F2,{...e,ref:t,tag:"div"}));const F2=w(M)`
  & > ${Ft} + ${Ft} {
    margin-left: -${Je/10/2}rem;
  }
`,_2=({active:e=!1,size:t="M",textColor:o="neutral600",backgroundColor:a="neutral150",children:n,minWidth:s=5,...i})=>{const l=t==="S"?1:2;return r.jsx(W2,{inline:!0,alignItems:"center",justifyContent:"center",minWidth:s,paddingLeft:l,paddingRight:l,background:e?"primary200":a,$size:t,...i,children:r.jsx(z,{variant:"sigma",textColor:e?"primary600":o,lineHeight:"1rem",children:n})})},W2=w(M)`
  border-radius: ${({theme:e,$size:t})=>t==="S"?"2px":e.borderRadius};
  ${({$size:e,theme:t})=>e==="S"?L`
        padding-block: 0.3rem;
        padding-inline ${t.spaces[1]}
      `:L`
      padding-block: 0.7rem;
      padding-inline ${t.spaces[2]}
    `};
`,ot=he(({href:e,disabled:t=!1,isExternal:o=!1,...a},n)=>r.jsx(U2,{tag:"a",ref:n,target:o?"_blank":void 0,rel:o?"noreferrer noopener":void 0,href:e,tabIndex:t?-1:void 0,"aria-disabled":t,pointerEvents:t?"none":void 0,cursor:t?void 0:"pointer",...a})),U2=w(I)`
  text-decoration: none;

  &:visited {
    color: inherit;
  }
`,io=()=>r.jsx(I,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:r.jsx(z,{variant:"pi",textColor:"neutral500",children:"/"})});io.displayName="Divider";const q2=w(M)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  & > *:first-child {
    margin-left: ${({theme:e})=>`calc(-1*${e.spaces[2]})`};
  }
`,G2=c.forwardRef(({label:e,children:t,...o},a)=>{const n=c.Children.toArray(t);return r.jsx(I,{"aria-label":e,tag:"nav",...o,ref:a,children:r.jsx(q2,{tag:"ol",children:c.Children.map(n,(s,i)=>{const l=n.length>1&&i+1<n.length;return r.jsxs(M,{inline:!0,tag:"li",children:[s,l&&r.jsx(io,{})]})})})})});G2.displayName="Breadcrumbs";const K2=c.forwardRef(({children:e,isCurrent:t=!1,...o},a)=>r.jsx(I,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,ref:a,children:r.jsx(z,{variant:"pi",textColor:"neutral800",fontWeight:t?"bold":"regular","aria-current":t,...o,children:e})}));K2.displayName="Crumb";const Y2=w(ot)`
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
`,Z2=c.forwardRef(({children:e,...t},o)=>r.jsx(Y2,{ref:o,...t,children:e}));Z2.displayName="CrumbLink";const Ne=e=>e.replaceAll(":","");function X2(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function co(...e){return t=>e.forEach(o=>X2(o,t))}function ge(...e){return c.useCallback(co(...e),e)}const Q2=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Oe=Q2()?c.useEffect:c.useLayoutEffect,J2=w1.useId||(()=>{});let P2=0;const pe=e=>{const[t,o]=c.useState(J2());return Oe(()=>{e||o(a=>a??String(P2++))},[e]),e?.toString()??(t||"")},rt=(e,t,{selectorToWatch:o,skipWhen:a=!1})=>{const n=en(t);c.useEffect(()=>{if(a||!e.current)return;const s={root:e.current,rootMargin:"0px"},i=f=>{f.forEach(u=>{u.isIntersecting&&e.current&&e.current.scrollHeight>e.current.clientHeight&&n(u)})},l=new IntersectionObserver(i,s),d=e.current.querySelector(o);return d&&l.observe(d),()=>{l.disconnect()}},[a,n,o,e])},Cn="success-light",jn="danger-light",vt="default",at="tertiary",st="secondary",lo="danger",ho="success",bt="ghost",yn=[Cn,jn],el=[vt,at,st,lo,ho,bt,...yn],tl=["XS","S","M","L"],we=e=>e===Cn||e===jn?`${e.substring(0,e.lastIndexOf("-"))}`:e===at?"neutral":e===vt||e===st||el.every(t=>t!==e)?"primary":`${e}`,uo=({theme:e})=>L`
    border: 1px solid ${e.colors.neutral200};
    background: ${e.colors.neutral150};
    color: ${e.colors.neutral600};
    cursor: default;
  `,go=({theme:e,$variant:t})=>[...yn,st].includes(t)?L`
      background-color: ${e.colors.neutral0};
    `:t===at?L`
      background-color: ${e.colors.neutral100};
    `:t===bt?L`
      background-color: ${e.colors.neutral100};
    `:t===vt?L`
      border: 1px solid ${e.colors.buttonPrimary500};
      background: ${e.colors.buttonPrimary500};
    `:L`
    border: 1px solid ${e.colors[`${we(t)}500`]};
    background: ${e.colors[`${we(t)}500`]};
  `,fo=({theme:e,$variant:t})=>[...yn,st].includes(t)?L`
      background-color: ${e.colors.neutral0};
      border: 1px solid ${e.colors[`${we(t)}600`]};
      color: ${e.colors[`${we(t)}600`]};
    `:t===at||t===bt?L`
      background-color: ${e.colors.neutral150};
    `:L`
    border: 1px solid ${e.colors[`${we(t)}600`]};
    background: ${e.colors[`${we(t)}600`]};
  `,mo=({theme:e,$variant:t})=>{switch(t){case jn:case Cn:case st:return L`
        border: 1px solid ${e.colors[`${we(t)}200`]};
        background: ${e.colors[`${we(t)}100`]};
        color: ${e.colors[`${we(t)}700`]};
      `;case at:return L`
        border: 1px solid ${e.colors.neutral200};
        background: ${e.colors.neutral0};
        color: ${e.colors.neutral800};
      `;case bt:return L`
        border: 1px solid transparent;
        background: transparent;
        color: ${e.colors.neutral800};

        svg {
          fill: ${e.colors.neutral500};
        }
      `;case ho:case lo:return L`
        border: 1px solid ${e.colors[`${we(t)}600`]};
        background: ${e.colors[`${we(t)}600`]};
        color: ${e.colors.neutral0};
      `;default:return L`
        border: 1px solid ${e.colors.buttonPrimary600};
        background: ${e.colors.buttonPrimary600};
        color: ${e.colors.buttonNeutral0};
      `}},_t=he(({variant:e=vt,startIcon:t,endIcon:o,disabled:a=!1,children:n,onClick:s,size:i=tl[1],loading:l=!1,fullWidth:d=!1,...f},u)=>{const m=a||l,h=x=>{!m&&s&&s(x)};return r.jsxs(rl,{ref:u,"aria-disabled":m,disabled:m,$size:i,$variant:e,tag:"button",onClick:h,hasRadius:!0,gap:2,inline:!0,alignItems:"center",justifyContent:"center",width:d?"100%":void 0,paddingLeft:4,paddingRight:4,cursor:"pointer",...f,children:[(t||l)&&r.jsx(M,{tag:"span","aria-hidden":!0,children:l?r.jsx(ol,{}):t}),r.jsx(z,{variant:i==="S"?"pi":void 0,fontWeight:"bold",children:n}),o&&r.jsx(M,{tag:"span","aria-hidden":!0,children:o})]})}),nl=ie`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,ol=w(P0)`
  animation: ${nl} 2s infinite linear;
  will-change: transform;
`,rl=w(M)`
  height: ${({theme:e,$size:t})=>e.sizes.button[t]};
  text-decoration: none;
  ${mo}

  &:hover {
    ${go}
  }

  &:active {
    ${fo}
  }

  &[aria-disabled='true'] {
    ${uo}
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      ${e=>e.theme.transitions.backgroundColor},
      ${e=>e.theme.transitions.color},
      border-color ${e=>e.theme.motion.timings[200]} ${e=>e.theme.motion.easings.easeOutQuad};
  }
`,xo=c.forwardRef(({children:e,description:t,label:o,defaultOpen:a,open:n,onOpenChange:s,delayDuration:i=500,disableHoverableContent:l,...d},f)=>!o&&!t?e:r.jsxs(l0,{defaultOpen:a,open:n,onOpenChange:s,delayDuration:i,disableHoverableContent:l,children:[r.jsx(d0,{asChild:!0,children:e}),r.jsx(h0,{children:r.jsx(al,{ref:f,sideOffset:8,...d,children:r.jsx(z,{variant:"pi",fontWeight:"bold",children:o||t})})})]})),al=w(u0)`
  background-color: ${e=>e.theme.colors.neutral900};
  color: ${e=>e.theme.colors.neutral0};
  padding-inline: ${e=>e.theme.spaces[2]};
  padding-block: ${e=>e.theme.spaces[2]};
  border-radius: ${e=>e.theme.borderRadius};
  z-index: ${e=>e.theme.zIndices.tooltip};
  will-change: opacity;
  transform-origin: var(--radix-tooltip-content-transform-origin);

  @media (prefers-reduced-motion: no-preference) {
    animation: ${ne.fadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,Fe=he(({label:e,background:t,children:o,disabled:a=!1,onClick:n,size:s="S",variant:i="tertiary",withTooltip:l=!0,...d},f)=>{const u=h=>{!a&&n&&n(h)},m=r.jsx(Xe,{"aria-disabled":a,background:a?"neutral150":t,tag:"button",display:"inline-flex",justifyContent:"center",hasRadius:!0,cursor:"pointer",...d,ref:f,$size:s,onClick:u,$variant:i,children:r.jsx(Qe,{label:e,children:o})});return l?r.jsx(xo,{label:e,children:m}):m}),Xe=w(M)`
  text-decoration: none;

  ${e=>{switch(e.$size){case"XS":return L`
          padding-block: 0.25rem;
          padding-inline: 0.25rem;
        `;case"S":return L`
          padding-block: 0.7rem;
          padding-inline: 0.7rem;
        `;case"M":return L`
          padding-block: 0.9rem;
          padding-inline: 0.9rem;
        `;case"L":return L`
          padding-block: 1.1rem;
          padding-inline: 1.1rem;
        `}}}
  ${mo}
  ${e=>e.$variant==="tertiary"?L`
          color: ${e.theme.colors.neutral500};
        `:""}

  &:hover {
    ${go}
    ${e=>e.$variant==="tertiary"?L`
            color: ${e.theme.colors.neutral600};
          `:""}
  }

  &:active {
    ${fo}
  }

  &[aria-disabled='true'] {
    ${uo}
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      ${e=>e.theme.transitions.backgroundColor},
      ${e=>e.theme.transitions.color},
      border-color ${e=>e.theme.motion.timings[200]} ${e=>e.theme.motion.easings.easeOutQuad};
  }
`;w(M)`
  & ${Xe}:first-child {
    border-radius: ${({theme:e})=>`${e.borderRadius} 0 0 ${e.borderRadius}`};
  }

  & ${Xe}:last-child {
    border-radius: ${({theme:e})=>`0 ${e.borderRadius} ${e.borderRadius} 0`};
  }

  & ${Xe} {
    border-radius: 0;

    & + ${Xe} {
      border-left: none;
    }
  }
`;const sl=he(({children:e,href:t,disabled:o=!1,startIcon:a,endIcon:n,isExternal:s=!1,...i},l)=>r.jsxs(il,{ref:l,href:t,disabled:o,isExternal:s,...i,children:[a,r.jsx(z,{textColor:o?"neutral600":"primary600",children:e}),n,t&&!n&&s&&r.jsx(Ks,{})]})),il=w(ot)`
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

    svg path {
      fill: ${({theme:e})=>e.colors.primary500};
    }
  }

  &:active {
    color: ${({theme:e})=>e.colors.primary700};
  }

  ${wt};
`,cl=z1,ll=c.forwardRef(({label:e,endIcon:t=r.jsx(Ee,{width:"1.2rem",height:"1.2rem","aria-hidden":!0}),tag:o=_t,icon:a,...n},s)=>{const i={...n,ref:s,type:"button"};return r.jsx(L1,{asChild:!0,disabled:i.disabled,children:o===Fe?r.jsx(Fe,{label:e,variant:"tertiary",...i,children:a}):r.jsx(_t,{endIcon:t,variant:"ghost",...i})})}),dl=c.forwardRef(({children:e,intersectionId:t,onCloseAutoFocus:o,popoverPlacement:a="bottom-start",...n},s)=>{const[i,l]=a.split("-");return r.jsx(f0,{children:r.jsx(hl,{align:l,side:i,loop:!0,onCloseAutoFocus:o,asChild:!0,children:r.jsxs(wo,{ref:s,direction:"column",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,marginTop:1,marginBottom:1,alignItems:"flex-start",position:"relative",overflow:"auto",...n,children:[e,r.jsx(I,{id:t,width:"100%",height:"1px"})]})})})}),wo=w(M)`
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
  z-index: ${e=>e.theme.zIndices.popover};

  &::-webkit-scrollbar {
    display: none;
  }
`,hl=w(E1)`
  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${ne.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${ne.slideDownIn};
      }
    }
  }
`,vo=({theme:e})=>L`
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
`,ul=w(M)`
  ${vo}
`;w(sl)`
  /* We include this here again because typically when people use OptionLink they provide an as prop which cancels the Box props */
  color: ${({theme:e,color:t})=>dt(e.colors,t,void 0)};
  text-decoration: none;

  &:hover {
    color: unset;
  }

  /* TODO: do we need this? */
  svg > path,
  &:focus-visible svg > path {
    fill: currentColor;
  }

  ${vo}
`;const gl=w(I)`
  /* Negative horizontal margin to compensate Menu.Content's padding */
  margin: ${({theme:e})=>e.spaces[1]} -${({theme:e})=>e.spaces[1]};
  width: calc(100% + ${({theme:e})=>e.spaces[2]});
  /* Hide separator if there's nothing above in the menu */
  &:first-child {
    display: none;
  }
`;c.forwardRef((e,t)=>r.jsx(H1,{...e,asChild:!0,children:r.jsx(gl,{height:"1px",shrink:0,background:"neutral150",ref:t})}));c.forwardRef((e,t)=>r.jsx(D1,{asChild:!0,children:r.jsx(fl,{ref:t,variant:"sigma",textColor:"neutral600",...e})}));const fl=w(z)`
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
`;c.forwardRef(({disabled:e=!1,...t},o)=>r.jsx(B1,{asChild:!0,disabled:e,children:r.jsxs(ml,{ref:o,color:"neutral800",tag:"button",type:"button",background:"transparent",borderStyle:"none",gap:5,...t,children:[r.jsx(z,{children:t.children}),r.jsx(pn,{fill:"neutral500",height:"1.2rem",width:"1.2rem"})]})}));const ml=w(ul)`
  &[data-state='open'] {
    background-color: ${({theme:e})=>e.colors.primary100};
  }
`;c.forwardRef((e,t)=>r.jsx(f0,{children:r.jsx(k1,{sideOffset:8,asChild:!0,children:r.jsx(wo,{ref:t,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",overflow:"auto",...e})})}));const xl=cl,wl=ll,vl=dl,bl=c.forwardRef(({children:e,onOpen:t,onClose:o,popoverPlacement:a,onReachEnd:n,...s},i)=>{const l=c.useRef(null),d=ge(i,l),f=c.useRef(null),[u,m]=c.useState(!1),h=C=>{n&&n(C)},x=C=>{C&&typeof t=="function"?t():!C&&typeof o=="function"&&o(),m(C)},v=pe(),b=`intersection-${Ne(v)}`;return rt(f,h,{selectorToWatch:`#${b}`,skipWhen:!u}),r.jsxs(xl,{onOpenChange:x,children:[r.jsx(wl,{ref:d,...s,children:s.label}),r.jsx(vl,{ref:f,intersectionId:b,popoverPlacement:a,children:e})]})}),pl=w(bl)`
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  height: unset;

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral200};
  }
`,$l=c.forwardRef(({children:e,...t},o)=>r.jsx(pl,{ref:o,endIcon:null,size:"S",...t,children:e}));$l.displayName="CrumbSimpleMenu";const bo=c.createContext({id:""}),Cl=()=>c.useContext(bo);c.forwardRef(({id:e,...t},o)=>{const a=pe(e),n=c.useMemo(()=>({id:a}),[a]);return r.jsx(bo.Provider,{value:n,children:r.jsx(I,{ref:o,id:e,tabIndex:0,hasRadius:!0,background:"neutral0",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",shadow:"tableShadow",tag:"article","aria-labelledby":`${a}-title`,...t})})});const jl=c.forwardRef(({position:e,...t},o)=>r.jsx(yl,{ref:o,$position:e,...t,direction:"row",gap:2})),yl=w(M)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  right: ${({$position:e,theme:t})=>{if(e==="end")return t.spaces[3]}};
  left: ${({$position:e,theme:t})=>{if(e==="start")return t.spaces[3]}};
`;w.img`
  // inline flows is based on typography and displays an extra white space below the image
  // switch to block is required in order to make the img stick the bottom of the container
  // addition infos: https://stackoverflow.com/questions/5804256/image-inside-div-has-extra-space-below-the-image
  margin: 0;
  padding: 0;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;w.div`
  display: flex;
  justify-content: center;
  height: ${({$size:e})=>e==="S"?"8.8rem":"16.4rem"};
  width: 100%;
  background: repeating-conic-gradient(${({theme:e})=>e.colors.neutral100} 0% 25%, transparent 0% 50%) 50% / 20px
    20px;
  border-top-left-radius: ${({theme:e})=>e.borderRadius};
  border-top-right-radius: ${({theme:e})=>e.borderRadius};
`;w.div`
  margin-left: auto;
  flex-shrink: 0;
`;w(_2)`
  margin-left: ${({theme:e})=>e.spaces[1]};
`;const Sl=({fill:e,...t})=>{const{colors:o}=g();return r.jsx(I,{tag:"svg",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:e?o[e]:void 0,...t,children:r.jsx("path",{d:"M29.0613 10.0613L13.0613 26.0613C12.9219 26.2011 12.7563 26.3121 12.574 26.3878C12.3917 26.4635 12.1962 26.5024 11.9988 26.5024C11.8013 26.5024 11.6059 26.4635 11.4235 26.3878C11.2412 26.3121 11.0756 26.2011 10.9363 26.0613L3.93626 19.0613C3.79673 18.9217 3.68605 18.7561 3.61053 18.5738C3.53502 18.3915 3.49615 18.1961 3.49615 17.9988C3.49615 17.8014 3.53502 17.606 3.61053 17.4237C3.68605 17.2414 3.79673 17.0758 3.93626 16.9363C4.07579 16.7967 4.24143 16.686 4.42374 16.6105C4.60604 16.535 4.80143 16.4962 4.99876 16.4962C5.19608 16.4962 5.39147 16.535 5.57378 16.6105C5.75608 16.686 5.92173 16.7967 6.06126 16.9363L12 22.875L26.9388 7.93876C27.2205 7.65697 27.6027 7.49866 28.0013 7.49866C28.3998 7.49866 28.782 7.65697 29.0638 7.93876C29.3455 8.22055 29.5039 8.60274 29.5039 9.00126C29.5039 9.39977 29.3455 9.78197 29.0638 10.0638L29.0613 10.0613Z"})})},Fn=c.forwardRef(({defaultChecked:e,checked:t,onCheckedChange:o,...a},n)=>{const s=c.useRef(null),[i,l]=Ce({defaultProp:e,prop:t,onChange:o}),d=ge(s,n);return r.jsx(Rl,{ref:d,checked:i,onCheckedChange:l,...a,children:r.jsxs(Al,{forceMount:!0,children:[i===!0?r.jsx(Sl,{width:"1.6rem",fill:"neutral0"}):null,i==="indeterminate"?r.jsx(Yi,{fill:"neutral0"}):null]})})}),Rl=w(A1)`
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
    z-index: -1;
    min-width: 44px;
    min-height: 44px;
  }
`,Al=w(M1)`
  display: inline-flex;
  pointer-events: auto !important;
  width: 100%;
  height: 100%;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  &[data-disabled] {
    cursor: not-allowed;
  }
`,Sn=c.forwardRef(({children:e,...t},o)=>{const a=pe(t.id);return e?r.jsxs(M,{gap:2,children:[r.jsx(Fn,{id:a,...t}),r.jsx(z,{tag:"label",textColor:"neutral800",htmlFor:a,children:e})]}):r.jsx(Fn,{ref:o,...t})});c.forwardRef((e,t)=>{const{id:o}=Cl();return r.jsx(jl,{position:"start",children:r.jsx(Sn,{"aria-labelledby":`${o}-title`,...e,ref:t})})});w(I)`
  word-break: break-all;
`;w(M)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`;const ce={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",END:"End",HOME:"Home",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown"},Ml=w(I)`
  grid-template-columns: auto 1fr auto;
  grid-template-areas: 'startAction slides endAction';
`,Il=w(M)`
  grid-area: slides;
`,_n=w(I)`
  grid-area: ${({$area:e})=>e};

  &:focus svg path,
  &:hover svg path {
    fill: ${({theme:e})=>e.colors.neutral900};
  }
`,Tl=c.forwardRef(({actions:e,children:t,label:o,nextLabel:a,onNext:n,onPrevious:s,previousLabel:i,secondaryLabel:l,selectedSlide:d,...f},u)=>{const m=c.useRef(null),h=c.useRef(null),x=c.Children.map(t,(b,C)=>c.cloneElement(b,{selected:C===d})),v=b=>{switch(b.key){case ce.RIGHT:{b.preventDefault(),h?.current&&h.current.focus(),n&&n();break}case ce.LEFT:{b.preventDefault(),m?.current&&m.current.focus(),s&&s();break}}};return r.jsx(I,{ref:u,...f,onKeyDown:v,children:r.jsxs(I,{padding:2,borderColor:"neutral200",hasRadius:!0,background:"neutral100",children:[r.jsxs(Ml,{tag:"section","aria-roledescription":"carousel","aria-label":o,display:"grid",position:"relative",children:[x&&x.length>1&&r.jsxs(r.Fragment,{children:[r.jsx(_n,{tag:"button",onClick:s,$area:"startAction",ref:m,type:"button",children:r.jsx(Qe,{label:i,children:r.jsx(J0,{width:"1.6rem",height:"1.6rem",fill:"neutral600"})})}),r.jsx(_n,{tag:"button",onClick:n,$area:"endAction",ref:h,type:"button",children:r.jsx(Qe,{label:a,children:r.jsx(pn,{width:"1.6rem",height:"1.6rem",fill:"neutral600"})})})]}),r.jsx(Il,{"aria-live":"polite",paddingLeft:2,paddingRight:2,width:"100%",overflow:"hidden",children:x}),e]}),l&&r.jsx(I,{paddingTop:2,paddingLeft:4,paddingRight:4,children:r.jsx(xo,{label:l,children:r.jsx(M,{justifyContent:"center",children:r.jsx(z,{variant:"pi",textColor:"neutral600",ellipsis:!0,children:l})})})})]})})}),Ie=(e="&")=>({theme:t,$hasError:o=!1})=>L`
    outline: none;
    box-shadow: none;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${e}:focus-within {
      border: 1px solid ${o?t.colors.danger600:t.colors.primary600};
      box-shadow: ${o?t.colors.danger600:t.colors.primary600} 0px 0px 0px 2px;
    }
  `,[Vl,fe]=nt("Field",{}),He=c.forwardRef(({children:e,name:t,error:o=!1,hint:a,id:n,required:s=!1,...i},l)=>{const d=pe(n),[f,u]=c.useState();return r.jsx(Vl,{name:t,id:d,error:o,hint:a,required:s,labelNode:f,setLabelNode:u,children:r.jsx(M,{direction:"column",alignItems:"stretch",gap:1,ref:l,...i,children:e})})}),Rn=c.forwardRef(({children:e,action:t,...o},a)=>{const{id:n,required:s,setLabelNode:i}=fe("Label"),l=ge(a,i);return e?r.jsxs(Ll,{ref:l,variant:"pi",textColor:"neutral800",fontWeight:"bold",...o,id:`${n}-label`,htmlFor:n,tag:"label",ellipsis:!0,children:[e,s&&r.jsx(z,{"aria-hidden":!0,lineHeight:"1em",textColor:"danger600",children:"*"}),t&&r.jsx(El,{marginLeft:1,children:t})]}):null}),Ll=w(z)`
  display: flex;
`,El=w(M)`
  line-height: 0;
  color: ${({theme:e})=>e.colors.neutral500};
`,pt=c.forwardRef(({endAction:e,startAction:t,disabled:o=!1,onChange:a,hasError:n,required:s,className:i,size:l="M",...d},f)=>{const{id:u,error:m,hint:h,name:x,required:v}=fe("Input");let b;m?b=`${u}-error`:h&&(b=`${u}-hint`);const C=!!m,$=c.useRef(null),p=c.useRef(null),j=ge(p,f),y=S=>{!o&&a&&a(S)};return c.useLayoutEffect(()=>{if($.current&&p.current){const S=$.current.offsetWidth,A=p.current;if(A){const R=S+8+16;A.style.paddingRight=`${R}px`}}},[e]),r.jsxs(Bl,{gap:2,justifyContent:"space-between",$hasError:C||n,$disabled:o,$size:l,$hasLeftAction:!!t,$hasRightAction:!!e,className:i,children:[t,r.jsx(Hl,{id:u,name:x,ref:j,$size:l,"aria-describedby":b,"aria-invalid":C||n,"aria-disabled":o,disabled:o,"data-disabled":o?"":void 0,onChange:y,"aria-required":v||s,$hasLeftAction:!!t,$hasRightAction:!!e,...d}),e&&r.jsx(Dl,{ref:$,children:e})]})}),Hl=w.input`
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

  &::placeholder {
    color: ${({theme:e})=>e.colors.neutral600};
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

  ${e=>{switch(e.$size){case"S":return L`
          padding-inline-start: ${e.$hasLeftAction?0:e.theme.spaces[4]};
          padding-inline-end: ${e.$hasRightAction?0:e.theme.spaces[4]};
          padding-block: ${e.theme.spaces[1]};
        `;default:return L`
          padding-inline-start: ${e.$hasLeftAction?0:e.theme.spaces[4]};
          padding-inline-end: ${e.$hasRightAction?0:e.theme.spaces[4]};
          padding-block: ${e.theme.spaces[2]};
        `}}}
`,Dl=w(M)`
  position: absolute;
  right: ${({theme:e})=>e.spaces[4]};
  top: 50%;
  transform: translateY(-50%);
`,Bl=w(M)`
  border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  padding-inline-start: ${({$hasLeftAction:e,theme:t})=>e?t.spaces[4]:0};
  position: relative;

  ${Ie()}
  ${({theme:e,$disabled:t})=>t?L`
          color: ${e.colors.neutral600};
          background: ${e.colors.neutral150};
        `:void 0};
`,po=()=>{const{id:e,hint:t,error:o}=fe("Hint");return!t||o?null:r.jsx(z,{variant:"pi",tag:"p",id:`${e}-hint`,textColor:"neutral600",children:t})},$o=()=>{const{id:e,error:t}=fe("Error");return!t||typeof t!="string"?null:r.jsx(z,{variant:"pi",tag:"p",id:`${e}-error`,textColor:"danger600","data-strapi-field-error":!0,children:t})},kl=c.forwardRef(({label:e,children:t,...o},a)=>r.jsx(zl,{justifyContent:"unset",background:"transparent",borderStyle:"none",...o,type:"button",tag:"button",ref:a,children:r.jsx(Qe,{label:e,children:t})})),zl=w(M)`
  font-size: 1.6rem;
  padding: 0;
`,Vh=Object.freeze(Object.defineProperty({__proto__:null,Action:kl,Error:$o,Hint:po,Input:pt,Label:Rn,Root:He,useField:fe},Symbol.toStringTag,{value:"Module"}));c.forwardRef(({actions:e,children:t,error:o,hint:a,label:n,labelAction:s,nextLabel:i,onNext:l,onPrevious:d,previousLabel:f,required:u,secondaryLabel:m,selectedSlide:h,id:x,...v},b)=>{const C=pe(x);return r.jsx(He,{hint:a,error:o,id:C,required:u,children:r.jsxs(M,{direction:"column",alignItems:"stretch",gap:1,children:[n&&r.jsx(Rn,{action:s,children:n}),r.jsx(Tl,{ref:b,actions:e,label:n,nextLabel:i,onNext:l,onPrevious:d,previousLabel:f,secondaryLabel:m,selectedSlide:h,id:C,...v,children:t}),r.jsx(po,{}),r.jsx($o,{})]})})});w(I)`
  ${eo}
`;w(M)`
  display: ${({$selected:e})=>e?"flex":"none"};
`;const $t=c.forwardRef(({children:e,viewportRef:t,...o},a)=>r.jsxs(Nl,{ref:a,...o,children:[r.jsx(Ol,{ref:t,children:e}),r.jsx(Wn,{orientation:"vertical",children:r.jsx(Un,{})}),r.jsx(Wn,{orientation:"horizontal",children:r.jsx(Un,{})})]})),Nl=w(v1)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
`,Ol=w(b1)`
  min-width: 100%;
`,Wn=w(p1)`
  display: flex;
  /* ensures no selection */
  user-select: none;
  /* disable browser handling of all panning and zooming gestures on touch devices */
  touch-action: none;

  &[data-orientation='vertical'] {
    width: 0.4rem;
    margin: 0.4rem;
  }

  &[data-orientation='horizontal'] {
    flex-direction: column;
    height: 0.4rem;
    margin: 0.4rem;
  }
`,Un=w($1)`
  position: relative;
  flex: 1;
  background-color: ${e=>e.theme.colors.neutral150};
  border-radius: 0.4rem;

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
`,Fl="data:image/svg+xml,%3csvg%20width='63'%20height='63'%20viewBox='0%200%2063%2063'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M42.5563%2011.9816C39.484%2010.3071%2035.8575%209.29097%2032.3354%209.13521C28.6443%208.92888%2024.8295%209.72318%2021.3336%2011.4129C20.9123%2011.5901%2020.5376%2011.8101%2020.1722%2012.0249L20.0108%2012.1179C19.8774%2012.1951%2019.7441%2012.2724%2019.608%2012.3536C19.3253%2012.5146%2019.0492%2012.6744%2018.7544%2012.8792C18.5463%2013.0329%2018.3395%2013.1759%2018.1301%2013.323C17.5658%2013.7208%2016.9868%2014.1317%2016.4983%2014.5979C14.8476%2015.9524%2013.5571%2017.6075%2012.6071%2018.9214C10.4365%2022.1566%209.08622%2025.9567%208.80702%2029.6143L8.7764%2030.1588C8.73328%2030.9196%208.68476%2031.7057%208.75353%2032.4555C8.76648%2032.6084%208.7661%2032.7638%208.77506%2032.914C8.78895%2033.229%208.80152%2033.5373%208.846%2033.8672L9.07396%2035.4221C9.09756%2035.5764%209.1198%2035.7413%209.1633%2035.9263L9.65919%2037.9272L10.138%2039.2823C10.2729%2039.6673%2010.4158%2040.0751%2010.6%2040.43C12.0292%2043.637%2014.1425%2046.4578%2016.7063%2048.585C19.0508%2050.5296%2021.824%2052.0023%2024.7491%2052.8452L26.2371%2053.2376C26.3781%2053.2693%2026.4926%2053.2889%2026.6031%2053.3058L26.7775%2053.3311C27.0052%2053.3636%2027.2195%2053.3986%2027.4445%2053.435C27.8598%2053.5076%2028.2672%2053.5748%2028.7079%2053.6183L30.5641%2053.7229C30.9516%2053.7249%2031.3352%2053.7068%2031.7081%2053.6874C31.9039%2053.681%2032.0984%2053.6681%2032.3288%2053.662C34.5253%2053.4772%2036.5106%2053.0634%2038.0516%2052.4652C38.1769%2052.4171%2038.3008%2052.3796%2038.4234%2052.3355C38.6727%2052.2499%2038.9259%2052.167%2039.1432%2052.0599L40.8591%2051.2626L42.5702%2050.266C42.9009%2050.0682%2043.0205%2049.6414%2042.8282%2049.2984C42.632%2048.9526%2042.2034%2048.8308%2041.8634%2049.0166L40.1792%2049.9218L38.4995%2050.6224C38.3169%2050.6953%2038.121%2050.7534%2037.9224%2050.8155C37.7838%2050.8489%2037.6518%2050.8983%2037.5012%2050.9408C36.0711%2051.435%2034.2445%2051.7425%2032.244%2051.8346C32.0442%2051.8383%2031.8471%2051.8379%2031.654%2051.8403C31.3051%2051.8414%2030.9602%2051.8451%2030.6392%2051.8305L28.9177%2051.6725C28.5476%2051.619%2028.1695%2051.5427%2027.7848%2051.4678C27.5639%2051.4167%2027.3376%2051.3737%2027.1299%2051.3374L26.9529%2051.2987C26.8704%2051.2834%2026.7772%2051.2667%2026.7333%2051.2543L25.3466%2050.8322C22.7651%2049.9789%2020.33%2048.5729%2018.2942%2046.7557C16.1056%2044.7951%2014.3339%2042.2335%2013.1742%2039.3582C12.0276%2036.6013%2011.5988%2033.2792%2011.9716%2030.0076C12.3145%2027.0213%2013.3948%2024.1635%2015.1858%2021.5083C15.3034%2021.3339%2015.421%2021.1596%2015.5212%2021.0196C16.4309%2019.8688%2017.5408%2018.5589%2018.9483%2017.496C19.3367%2017.1525%2019.7862%2016.856%2020.2611%2016.5478C20.4878%2016.4009%2020.7079%2016.2553%2020.8907%2016.1306C21.0974%2016.0048%2021.3188%2015.8831%2021.5348%2015.7694C21.6761%2015.6975%2021.8162%2015.619%2021.9388%2015.5576L22.1002%2015.4646C22.4002%2015.3037%2022.6749%2015.1546%2022.9908%2015.039L24.1186%2014.5715C24.3399%2014.4844%2024.5718%2014.4159%2024.7997%2014.3447C24.953%2014.2982%2025.0982%2014.2635%2025.2635%2014.2078C25.786%2014.0182%2026.3283%2013.9112%2026.9105%2013.7965C27.117%2013.7571%2027.3302%2013.7163%2027.5608%2013.6585C27.7553%2013.611%2027.9737%2013.5969%2028.2082%2013.5762C28.364%2013.5603%2028.5172%2013.5483%2028.6318%2013.5333C28.7876%2013.5173%2028.9342%2013.5066%2029.0927%2013.4867C29.3285%2013.4555%2029.5456%2013.4347%2029.7494%2013.4337C30.0237%2013.44%2030.2994%2013.4357%2030.5777%2013.4274C31.0811%2013.421%2031.5579%2013.4197%2032.0318%2013.4914C34.9664%2013.7352%2037.7144%2014.6085%2040.2052%2016.0868C42.3489%2017.3655%2044.2716%2019.1525%2045.7607%2021.264C47.0255%2023.0628%2047.9756%2025.0528%2048.4928%2027.0393C48.572%2027.3176%2048.6299%2027.5931%2048.6839%2027.8659C48.7154%2028.0428%2048.7563%2028.2145%2048.7892%2028.3636C48.8037%2028.4541%2048.8208%2028.5406%2048.8445%2028.6258C48.8749%2028.7443%2048.8986%2028.864%2048.9116%2028.9651L48.9793%2029.6047C48.9922%2029.7748%2049.0132%2029.9331%2049.0301%2030.0887C49.0668%2030.3268%2049.0889%2030.5608%2049.0964%2030.7561L49.1083%2031.9001C49.1312%2032.3307%2049.089%2032.7116%2049.0522%2033.0673C49.0384%2033.2598%2049.0126%2033.4443%2049.0123%2033.5824C48.9961%2033.6926%2048.9918%2033.7935%2048.9836%2033.8917C48.9753%2034.0072%2048.9724%2034.1148%2048.9414%2034.2554L48.5449%2036.3059C48.3134%2037.8623%2049.3793%2039.3365%2050.9488%2039.5822C52.0417%2039.7601%2053.1536%2039.2819%2053.7711%2038.3664C54.0063%2038.0176%2054.1604%2037.6257%2054.2227%2037.2064L54.5217%2035.2574C54.5514%2035.0756%2054.572%2034.83%2054.5846%2034.5791L54.6028%2034.2338C54.6098%2034.0598%2054.6223%2033.8779%2054.6347%2033.6788C54.6734%2033.1052%2054.7163%2032.4479%2054.6619%2031.8058L54.5867%2030.4289C54.5622%2030.0952%2054.5097%2029.76%2054.4559%2029.4181C54.431%2029.2572%2054.4048%2029.0896%2054.3826%2028.9074L54.2687%2028.104C54.2332%2027.9244%2054.1804%2027.7273%2054.1329%2027.5396L54.0643%2027.2454C54.0195%2027.071%2053.9773%2026.8927%2053.9338%2026.7076C53.8455%2026.3309%2053.7479%2025.9422%2053.613%2025.5571C52.84%2023.0292%2051.5383%2020.5194%2049.8338%2018.2799C47.8544%2015.682%2045.3333%2013.5087%2042.5563%2011.9816Z'%20fill='%234945FF'/%3e%3c/svg%3e",_l=c.forwardRef(({children:e,small:t=!1,...o},a)=>r.jsxs("div",{role:"alert","aria-live":"assertive",ref:a,...o,children:[r.jsx(qe,{children:e}),r.jsx(Ul,{src:Fl,"aria-hidden":!0,$small:t})]})),Wl=ie`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,Ul=w.img`
  animation: ${Wl} 1s infinite linear;
  will-change: transform;
  ${({$small:e,theme:t})=>e&&`width: ${t.spaces[6]}; height: ${t.spaces[6]};`}
`,ql=c.forwardRef(({allowCustomValue:e,autocomplete:t,children:o,className:a,clearLabel:n="Clear",creatable:s=!1,creatableDisabled:i=!1,creatableStartIcon:l,createMessage:d=O=>`Create "${O}"`,defaultFilterValue:f,defaultTextValue:u,defaultOpen:m=!1,open:h,onOpenChange:x,disabled:v=!1,hasError:b,id:C,filterValue:$,hasMoreItems:p=!1,isPrintableCharacter:j,loading:y=!1,loadingMessage:S="Loading content...",name:A,noOptionsMessage:R=()=>"No results found",onChange:N,onClear:H,onCreateOption:k,onFilterValueChange:_,onInputChange:E,onTextValueChange:V,onLoadMore:D,placeholder:U="Select or enter a value",required:K=!1,size:G="M",startIcon:Y,textValue:Z,value:te,...X},se)=>{const[O,re]=Ce({prop:h,defaultProp:m,onChange:x}),[ee,ue]=Ce({prop:Z,defaultProp:e&&!u?te:u,onChange:V}),[T,W]=Ce({prop:$,defaultProp:f,onChange:_}),Q=c.useRef(null),F=c.useRef(null),B=ge(F,se),q=c.useRef(null),le=me=>{H&&!v&&(ue(""),W(""),H(me),F.current.focus())},de=me=>{re(me)},P=me=>{ue(me)},$e=me=>{W(me)},ye=me=>{E&&E(me)},Uo=me=>{N&&N(me)},qo=me=>{D&&p&&!y&&D(me)},Vn=()=>{k&&ee&&s!=="visible"?k(ee):k&&s==="visible"&&(k(),re(!1))},Go=pe(),Ln=`intersection-${Ne(Go)}`;rt(Q,qo,{selectorToWatch:`#${Ln}`,skipWhen:!O});const{error:jt,...it}=fe("Combobox"),Ko=!!jt||b,yt=it.id??C,Yo=it.name??A,Zo=it.required||K;let St;return jt?St=`${yt}-error`:it.hint&&(St=`${yt}-hint`),r.jsxs(ve.Root,{autocomplete:t||(s===!0?"list":"both"),onOpenChange:de,open:O,onTextValueChange:P,textValue:ee,allowCustomValue:!!s||e,disabled:v,required:Zo,value:te,onValueChange:Uo,filterValue:T,onFilterValueChange:$e,isPrintableCharacter:j,visible:s==="visible",children:[r.jsxs(Gl,{$hasError:Ko,$size:G,className:a,children:[r.jsxs(M,{flex:"1",tag:"span",gap:3,children:[Y?r.jsx(M,{flex:"0 0 1.6rem",tag:"span","aria-hidden":!0,children:Y}):null,r.jsx(Kl,{placeholder:U,id:yt,"aria-invalid":!!jt,onChange:ye,ref:B,name:Yo,"aria-describedby":St,...X})]}),r.jsxs(M,{tag:"span",gap:3,children:[ee&&H?r.jsx(Fe,{size:"XS",variant:"ghost",onClick:le,"aria-disabled":v,"aria-label":n,label:n,ref:q,children:r.jsx(Ue,{})}):null,r.jsx(Yl,{children:r.jsx(Ee,{fill:"neutral500"})})]})]}),r.jsx(ve.Portal,{children:r.jsx(Zl,{sideOffset:4,children:r.jsxs(ve.Viewport,{ref:Q,children:[r.jsxs(Ql,{children:[o,s!==!0&&!y?r.jsx(ve.NoValueFound,{asChild:!0,children:r.jsx(Wt,{$hasHover:!1,children:r.jsx(z,{children:R(ee??"")})})}):null,y?r.jsx(M,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2,children:r.jsx(_l,{small:!0,children:S})}):null,r.jsx(I,{id:Ln,width:"100%",height:"1px"})]}),s?r.jsx(Xl,{onPointerUp:Vn,onClick:Vn,disabled:i,asChild:!0,children:r.jsx(Wt,{children:r.jsxs(M,{gap:2,children:[l&&r.jsx(I,{tag:"span","aria-hidden":!0,display:"inline-flex",children:l}),r.jsx(z,{children:d(ee??"")})]})})}):null]})})})]})}),Gl=w(ve.Trigger)`
  position: relative;
  border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spaces[4]};

  ${e=>{switch(e.$size){case"S":return L`
          padding-inline-start: ${({theme:t})=>t.spaces[4]};
          padding-inline-end: ${({theme:t})=>t.spaces[3]};
          padding-block: ${({theme:t})=>t.spaces[1]};
        `;default:return L`
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

  ${({theme:e,$hasError:t})=>Ie()({theme:e,$hasError:t})};
`,Kl=w(ve.TextInput)`
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

  &::placeholder {
    color: ${({theme:e})=>e.colors.neutral600};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,Yl=w(ve.Icon)`
  border: none;
  background: transparent;
  padding: 0;
  color: ${({theme:e})=>e.colors.neutral600};
  display: flex;

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,Zl=w(ve.Content)`
  background: ${({theme:e})=>e.colors.neutral0};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};
  width: var(--radix-combobox-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({theme:e})=>e.zIndices.popover};

  &:focus-visible {
    outline: ${({theme:e})=>`2px solid ${e.colors.primary600}`};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    /* The select can't animate out yet, watch https://github.com/radix-ui/primitives/issues/1893, or take a look and solve it yourself. */
    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${ne.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${ne.slideDownIn};
      }
    }
  }
`,Xl=w(ve.CreateItem)`
  && {
    border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
    background: ${({theme:e})=>e.colors.neutral0};
    cursor: pointer;
    padding: ${({theme:e})=>e.spaces[1]};
    position: sticky;
    bottom: 0;
    left: 0;
  }
  &&:hover,
  &&[data-highlighted] {
    background: ${({theme:e})=>e.colors.neutral0};
  }
  &&[data-disabled] {
    color: ${({theme:e})=>e.colors.neutral600};
    background: ${({theme:e})=>e.colors.neutral150};
    cursor: not-allowed;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  &&[data-disabled]:hover {
    background: ${({theme:e})=>e.colors.neutral150};
    color: ${({theme:e})=>e.colors.neutral600};
  }
  && > div {
    padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
  }
  && > div:hover,
  &&[data-highlighted] > div {
    background-color: ${({theme:e})=>e.colors.primary100};
  }
  &&[data-disabled] > div:hover {
    background: ${({theme:e})=>e.colors.neutral150};
  }
`,Ql=w($t)`
  padding: ${({theme:e})=>e.spaces[1]};
`,Jl=c.forwardRef(({children:e,value:t,disabled:o,textValue:a,...n},s)=>r.jsx(ve.ComboboxItem,{asChild:!0,value:t,disabled:o,textValue:a,children:r.jsx(Wt,{ref:s,...n,children:r.jsx(ve.ItemText,{asChild:!0,children:r.jsx(z,{children:e})})})})),Wt=w.div`
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
`,Pl=n1,ed=c.forwardRef((e,t)=>r.jsx(i1,{...e,asChild:!0,ref:t})),td=c.forwardRef((e,t)=>r.jsxs(d1,{children:[r.jsx(nd,{}),r.jsx(od,{ref:t,...e})]})),nd=w(m1)`
  background-color: ${e=>e.theme.colors.neutral800};
  position: fixed;
  inset: 0;
  z-index: ${e=>e.theme.zIndices.overlay};
  opacity: 0.2;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${ne.overlayFadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,od=w(x1)`
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
      animation-name: ${ne.modalPopIn};
    }

    &[data-state='closed'] {
      animation-duration: ${e=>e.theme.motion.timings[120]};
      animation-timing-function: ${e=>e.theme.motion.easings.easeOutQuad};
      animation-name: ${ne.modalPopOut};
    }
  }
`,rd=c.forwardRef(({children:e,...t},o)=>r.jsx(c1,{asChild:!0,children:r.jsx(ad,{tag:"h2",variant:"beta",ref:o,padding:6,fontWeight:"bold",...t,children:e})})),ad=w(z)`
  display: flex;
  justify-content: center;
  border-bottom: solid 1px ${e=>e.theme.colors.neutral150};
`,sd=c.forwardRef(({children:e,icon:t,...o},a)=>r.jsx(M,{ref:a,gap:2,direction:"column",paddingTop:8,paddingBottom:8,paddingLeft:6,paddingRight:6,...o,children:typeof e=="string"?r.jsxs(r.Fragment,{children:[t?c.cloneElement(t,{width:24,height:24}):null,r.jsx(Co,{children:e})]}):e})),Co=c.forwardRef((e,t)=>r.jsx(l1,{asChild:!0,children:r.jsx(z,{ref:t,variant:"omega",...e,tag:"p"})})),id=c.forwardRef((e,t)=>r.jsx(cd,{ref:t,gap:2,padding:4,justifyContent:"space-between",...e,tag:"footer"})),cd=w(M)`
  border-top: solid 1px ${e=>e.theme.colors.neutral150};
  flex: 1;
`,ld=c.forwardRef((e,t)=>r.jsx(h1,{...e,asChild:!0,ref:t})),dd=c.forwardRef((e,t)=>r.jsx(u1,{...e,asChild:!0,ref:t})),Lh=Object.freeze(Object.defineProperty({__proto__:null,Action:dd,Body:sd,Cancel:ld,Content:td,Description:Co,Footer:id,Header:rd,Root:Pl,Trigger:ed},Symbol.toStringTag,{value:"Module"}));function Re(e,t){const o=c.useRef(null);return t&&o.current&&hd(t,o.current)&&(t=o.current),o.current=t??null,c.useMemo(()=>new br(e,t),[e,t])}function hd(e,t){if(e===t)return!0;const o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(const n of o)if(t[n]!==e[n])return!1;return!0}const An={Log:"live-region-log",Status:"live-region-status",Alert:"live-region-alert"},qn=e=>{const t=document.querySelector(`#${An.Log}`);t&&(t.innerText=e)},Gn=e=>{const t=document.querySelector(`#${An.Status}`);t&&(t.innerText=e)},Kn=e=>{const t=document.querySelector(`#${An.Alert}`);t&&(t.innerText=e)},Eh=()=>(c.useEffect(()=>()=>{qn(""),Kn(""),Gn("")},[]),{notifyLog:qn,notifyAlert:Kn,notifyStatus:Gn});N1`
${L`
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

  *:has(> :disabled:not(button)) {
    cursor: not-allowed !important;
  }

  [aria-disabled='true']:not(button) {
    cursor: not-allowed !important;
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
`;const Yn="en-EN",ud=()=>typeof navigator>"u"?Yn:navigator.language?navigator.language:Yn,[Hh,Ct]=nt("StrapiDesignSystem",{locale:ud()}),gd=q1,jo=c.forwardRef(({container:e=globalThis?.document?.body,...t},o)=>e?_e.createPortal(r.jsx(I,{ref:o,...t}),e):null);jo.displayName="Portal";const fd=c.forwardRef(({onClear:e,clearLabel:t="Clear",startIcon:o,disabled:a,hasError:n,children:s,id:i,size:l="M",withTags:d,...f},u)=>{const m=c.useRef(null),h=b=>{e&&!a&&(e(b),m.current.focus())},{labelNode:x}=fe("SelectTrigger"),v=ge(m,u);return r.jsx(be.Trigger,{asChild:!0,children:r.jsxs(xd,{"aria-disabled":a,$hasError:n,ref:v,alignItems:"center",justifyContent:"space-between",position:"relative",overflow:"hidden",hasRadius:!0,background:a?"neutral150":"neutral0",gap:4,cursor:"default","aria-labelledby":x?`${i}-label`:void 0,$size:l,$withTags:d,...f,children:[r.jsxs(M,{flex:"1",tag:"span",gap:3,children:[o&&r.jsx(M,{tag:"span","aria-hidden":!0,children:o}),s]}),r.jsxs(M,{tag:"span",gap:3,children:[e?r.jsx(md,{tag:"button",hasRadius:!0,background:"transparent",role:"button",tabIndex:0,onClick:h,"aria-disabled":a,"aria-label":t,title:t,cursor:"pointer",children:r.jsx(Ue,{})}):null,r.jsx(wd,{children:r.jsx(Ee,{})})]})]})})}),md=w(I)`
  border: none;
  display: flex;

  svg {
    height: 1.1rem;
    width: 1.1rem;
  }

  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,xd=w(M)`
  border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  ${e=>{switch(e.$size){case"S":return L`
          padding-block: ${e.theme.spaces[1]};
          padding-inline-start: ${e.$withTags?e.theme.spaces[1]:e.theme.spaces[4]};
          padding-inline-end: ${e.theme.spaces[3]};
        `;default:return L`
          padding-block: ${e.$withTags?"0.3rem":e.theme.spaces[2]};
          padding-inline-start: ${e.$withTags?e.theme.spaces[1]:e.theme.spaces[4]};
          padding-inline-end: ${e.theme.spaces[3]};
        `}}}
  cursor: pointer;

  &[aria-disabled='true'] {
    color: ${e=>e.theme.colors.neutral500};
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:e,$hasError:t})=>Ie()({theme:e,$hasError:t})};
`,wd=w(be.Icon)`
  display: flex;
  & > svg {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,vd=c.forwardRef(({children:e,placeholder:t,...o},a)=>r.jsx(bd,{ref:a,ellipsis:!0,...o,children:r.jsx(pd,{placeholder:t,children:e})})),bd=w(z)`
  flex: 1;
  font-size: 1.4rem;
  line-height: 2.2rem;
`,pd=w(be.Value)`
  display: flex;
  gap: ${({theme:e})=>e.spaces[1]};
  flex-wrap: wrap;
`,$d=c.forwardRef((e,t)=>r.jsx(Cd,{ref:t,...e,children:r.jsx($t,{children:e.children})})),Cd=w(be.Content)`
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
        animation-name: ${ne.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${ne.slideDownIn};
      }
    }
  }
`,jd=w(be.Viewport)`
  padding: ${({theme:e})=>e.spaces[1]};
`,yd=c.forwardRef((e,t)=>r.jsx(Rd,{ref:t,...e})),Sd=L`
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
    cursor: pointer;
  }
`,Rd=w(be.Item)`
  ${Sd}

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary100};
    cursor: pointer;
  }

  &[data-state='checked'] {
    font-weight: bold;
    color: ${({theme:e})=>e.colors.primary600};
    font-weight: bold;
  }
`,yo=be.Root,So=fd,Ro=vd,Ao=be.Portal,Mo=$d,Io=jd,Mn=yd,To=be.ItemIndicator,Vo=be.ItemText,Ad=be.Group,Zn=c.forwardRef(({children:e,clearLabel:t="Clear",customizeContent:o,disabled:a,hasError:n,id:s,name:i,onChange:l,onClear:d,onCloseAutoFocus:f,onReachEnd:u,placeholder:m,required:h,size:x,startIcon:v,value:b,...C},$)=>{const[p,j]=c.useState(),[y,S]=c.useState(!1),A=X=>{S(X)},R=X=>{d&&d(X),l||j("")},N=X=>{l?l(typeof b=="number"?Number(X):X):j(X)},H=c.useRef(null),k=pe(),_=`intersection-${Ne(k)}`;rt(H,X=>{u&&u(X)},{selectorToWatch:`#${_}`,skipWhen:!y});const{error:V,required:D,...U}=fe("SingleSelect"),K=!!V||n,G=U.id??s,Y=U.name??i;let Z;V?Z=`${G}-error`:U.hint&&(Z=`${G}-hint`);const te=(typeof b<"u"&&b!==null?b.toString():p)??"";return r.jsxs(yo,{onOpenChange:A,disabled:a,required:D??h,onValueChange:N,value:te,...C,children:[r.jsx(So,{ref:$,id:G,name:Y,startIcon:v,hasError:K,disabled:a,clearLabel:t,onClear:te&&d?R:void 0,"aria-label":C["aria-label"],"aria-describedby":Z??C["aria-describedby"],size:x,children:r.jsx(Ro,{placeholder:m,textColor:te?"neutral800":"neutral600",children:te&&o?o(te):void 0})}),r.jsx(Ao,{children:r.jsx(Mo,{position:"popper",sideOffset:4,onCloseAutoFocus:f,children:r.jsxs(Io,{ref:H,children:[e,r.jsx(I,{id:_,width:"100%",height:"1px"})]})})})]})}),Xn=c.forwardRef(({value:e,startIcon:t,children:o,...a},n)=>r.jsxs(Mn,{ref:n,value:e.toString(),...a,children:[t&&r.jsx(M,{tag:"span","aria-hidden":!0,children:t}),r.jsx(z,{lineHeight:"20px",width:"100%",children:r.jsx(Vo,{children:o})})]})),Md=200,Qn=15,[Id,Ge]=nt("DatePicker"),Td=c.forwardRef(({calendarLabel:e,className:t,initialDate:o,locale:a,maxDate:n,minDate:s,monthSelectLabel:i="Month",onChange:l,value:d,yearSelectLabel:f="Year",hasError:u,id:m,name:h,disabled:x=!1,required:v=!1,onClear:b,clearLabel:C="Clear",size:$="M",...p},j)=>{const y=Vt(),S=Ct("DatePicker"),A=a??S.locale,R=Re(A,{day:"2-digit",month:"2-digit",year:"numeric"}),[N,H]=c.useState(!1),[k,_]=c.useState(null),[E,V]=c.useState(null),[D,U]=c.useState(null),[K,G]=c.useState(),[Y,Z]=Ce({defaultProp:o?Te(o):void 0,prop:d?Te(d):void 0,onChange(P){l&&l(P?.toDate(y))}}),[te,X]=c.useMemo(()=>{const P=o?Te(o):Yt("UTC"),$e=s?Te(s):P.set({day:1,month:1,year:P.year-Md});let ye=n?Te(n):P.set({day:31,month:12,year:P.year+Qn});return ye.compare($e)<0&&(ye=$e.set({day:31,month:12,year:$e.year+Qn})),[$e,ye]},[s,n,o]),[se,O]=c.useState(Vd({currentValue:Y,minDate:te,maxDate:X})),re=pe(),ee=c.useRef(null),ue=P=>{b&&!x&&(G(""),Z(void 0),b(P),E?.focus())},T=c.useCallback(P=>{P&&Y&&O(Y),H(P)},[Y]);Oe(()=>{if(d){const P=Te(d);G(R.format(P.toDate(y))),O(P)}else G("")},[d,R,y]),Oe(()=>{if(o&&K===void 0){const P=Te(o);G(R.format(P.toDate(y)))}},[o,K,R,y]);const{error:W,...Q}=fe("Combobox"),F=!!W||u,B=Q.id??m,q=Q.name??h,le=Q.required||v;let de;return W?de=`${B}-error`:Q.hint&&(de=`${B}-hint`),r.jsxs(Id,{calendarDate:se,content:D,contentId:re,disabled:x,locale:A,minDate:te,maxDate:X,open:N,onCalendarDateChange:O,onContentChange:U,onOpenChange:T,onTextInputChange:V,onTextValueChange:G,onTriggerChange:_,onValueChange:Z,onClear:b,required:le,textInput:E,textValue:K,timeZone:y,trigger:k,value:Y,children:[r.jsxs(Ed,{className:t,hasError:F,size:$,children:[r.jsx(Xa,{fill:"neutral500","aria-hidden":!0}),r.jsx(Bd,{ref:j,"aria-describedby":de,id:B,name:q,...p}),K&&b?r.jsx(Fe,{size:"XS",variant:"ghost",onClick:ue,"aria-disabled":x,"aria-label":C,label:C,ref:ee,children:r.jsx(Ue,{})}):null]}),r.jsx(jo,{children:r.jsx(Od,{label:e,children:r.jsx(qd,{monthSelectLabel:i,yearSelectLabel:f})})})]})}),Jn=e=>!!e.match(/^[^a-zA-Z]*$/),Vd=({currentValue:e,minDate:t,maxDate:o})=>{const a=Yt("UTC");return e||(Lt(t,a)===t&&Et(o,a)===o?a:Lt(t,a)===a?t:Et(o,a)===a?o:a)},Ld="DatePickerTrigger",Ed=c.forwardRef(({hasError:e,size:t,...o},a)=>{const n=Ge(Ld),s=ge(a,l=>n.onTriggerChange(l)),i=()=>{n.disabled||n.onOpenChange(!0)};return r.jsx(qt,{asChild:!0,trapped:n.open,onMountAutoFocus:l=>{l.preventDefault()},onUnmountAutoFocus:l=>{document.getSelection()?.empty(),l.preventDefault()},children:r.jsx(Hd,{ref:s,$hasError:e,$size:t,$hasOnClear:!!n.onClear,...o,hasRadius:!0,gap:3,overflow:"hidden",background:n.disabled?"neutral150":"neutral0",onClick:Ve(o.onClick,()=>{n.textInput?.focus()}),onPointerDown:Ve(o.onPointerDown,l=>{const d=l.target;d.hasPointerCapture(l.pointerId)&&d.releasePointerCapture(l.pointerId),(d.closest("button")??d.closest("div"))===l.currentTarget&&l.button===0&&l.ctrlKey===!1&&(i(),n.textInput?.focus())})})})}),Hd=w(M)`
  min-width: ${({$hasOnClear:e})=>e?"160px":"130px"};
  border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  ${e=>{switch(e.$size){case"S":return L`
          padding-block: ${e.theme.spaces[1]};
          padding-inline: ${e.theme.spaces[3]};
        `;default:return L`
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

  ${({theme:e,$hasError:t})=>Ie()({theme:e,$hasError:t})};
`,Dd="DatePickerTextInput",Bd=c.forwardRef(({placeholder:e,...t},o)=>{const a=Ge(Dd),{onTextValueChange:n,textValue:s,onTextInputChange:i,onOpenChange:l,disabled:d,locale:f}=a,u=ge(o,$=>i($)),m=()=>{d||l(!0)},h=Re(f,{year:"numeric",month:"2-digit",day:"2-digit"}),[x,v,b]=c.useMemo(()=>{const $=h.formatToParts(new Date),p=$.filter(S=>S.type==="year"||S.type==="month"||S.type==="day"),j=p.map(S=>{switch(S.type){case"day":return"DD";case"month":return"MM";case"year":return"YYYY";default:return""}}),y=$.find(S=>S.type==="literal")?.value??"";return[j,y,p]},[h]),C=x.map($=>`\\d{${$.length}}`).join(`\\${v}`);return r.jsx(zd,{role:"combobox",type:"text",inputMode:"numeric",ref:u,"aria-autocomplete":"none","aria-controls":a.contentId,"aria-disabled":a.disabled,"aria-expanded":a.open,"aria-required":a.required,"aria-haspopup":"dialog","data-state":a.open?"open":"closed",disabled:d,"data-disabled":d?"":void 0,pattern:C,placeholder:e??x.join(v),...t,value:s??"",onBlur:Ve(t.onBlur,()=>{if(!a.textValue){a.onValueChange(void 0);return}a.onTextValueChange(h.format(a.calendarDate.toDate(a.timeZone))),a.onValueChange(a.calendarDate)}),onChange:Ve(t.onChange,$=>{if(Jn($.target.value)){const p=$.target.value.split(v),[j,y,S]=b.map((V,D)=>{const U=p[D];return{...V,value:U}}).sort((V,D)=>V.type==="year"?1:D.type==="year"?-1:V.type==="month"?1:D.type==="month"?-1:0).map(V=>V.value),A=a.calendarDate.year;let R=a.calendarDate.year;if(S){const V=S.length===1?`0${S}`:S;R=S.length<3?Number(`${A}`.slice(0,4-V.length)+V):Number(V)}S&&S.length<3&&R>a.maxDate.year&&(R-=100);const N=a.calendarDate.set({year:R}),H=N.calendar.getMonthsInYear(N),k=N.set({month:y&&Number(y)<=H?Number(y):void 0}),_=k.calendar.getDaysInMonth(k),E=k.set({day:j&&Number(j)<=_?Number(j):void 0});a.onCalendarDateChange(kd(E,a.minDate,a.maxDate)),a.onTextValueChange($.target.value)}}),onKeyDown:Ve(t.onKeyDown,$=>{if(!a.open&&(Jn($.key)||["ArrowDown","Backspace"].includes($.key)))m();else if(["Tab"].includes($.key)&&a.open)$.preventDefault();else if(["Escape"].includes($.key))a.open?a.onOpenChange(!1):(a.onValueChange(void 0),a.onTextValueChange("")),$.preventDefault();else if(a.open&&["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes($.key))switch($.preventDefault(),$.key){case"ArrowDown":{const p=a.calendarDate.add({weeks:1});if(a.maxDate&&p.compare(a.maxDate)>0)return;a.onCalendarDateChange(p);return}case"ArrowRight":{const p=a.calendarDate.add({days:1});if(a.maxDate&&p.compare(a.maxDate)>0)return;a.onCalendarDateChange(p);return}case"ArrowUp":{const p=a.calendarDate.subtract({weeks:1});if(a.minDate&&p.compare(a.minDate)<0)return;a.onCalendarDateChange(p);return}case"ArrowLeft":{const p=a.calendarDate.subtract({days:1});if(a.minDate&&p.compare(a.minDate)<0)return;a.onCalendarDateChange(p)}}else a.open&&["Enter"].includes($.key)&&($.preventDefault(),n(h.format(a.calendarDate.toDate(a.timeZone))),a.onValueChange(a.calendarDate),a.onOpenChange(!1))})})});function kd(e,t,o){return t&&(e=Et(e,t)),o&&(e=Lt(e,o)),e}const zd=w.input`
  width: 100%;
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: ${({theme:e})=>e.colors.neutral800};
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: ${({theme:e})=>e.colors.neutral600};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,Nd="DatePickerContent",Od=c.forwardRef((e,t)=>{const[o,a]=c.useState(),n=Ge(Nd);if(Oe(()=>{a(new DocumentFragment)},[]),!n.open){const s=o;return s?_e.createPortal(r.jsx("div",{children:e.children}),s):null}return r.jsx(_d,{...e,ref:t})}),Fd="DatePickerContent",_d=c.forwardRef((e,t)=>{const{label:o="Choose date",...a}=e,{onOpenChange:n,...s}=Ge(Fd),{x:i,y:l,refs:d,strategy:f,placement:u}=O1({strategy:"fixed",placement:"bottom-start",middleware:[F1({mainAxis:4}),_1(),W1()],elements:{reference:s.trigger},whileElementsMounted:U1});c.useEffect(()=>{const h=()=>{n(!1)};return window.addEventListener("blur",h),window.addEventListener("resize",h),()=>{window.removeEventListener("blur",h),window.removeEventListener("resize",h)}},[n]);const m=ge(t,h=>s.onContentChange(h),d.setFloating);return Gt(),r.jsx(Kt,{allowPinchZoom:!0,children:r.jsx(gd,{asChild:!0,onFocusOutside:h=>{h.preventDefault()},onDismiss:()=>{n(!1)},children:r.jsx(Wd,{ref:m,"data-state":s.open?"open":"closed","data-side":u.includes("top")?"top":"bottom",onContextMenu:h=>h.preventDefault(),id:s.contentId,role:"dialog","aria-modal":"true","aria-label":o,style:{left:i,top:l,position:f},hasRadius:!0,background:"neutral0",padding:1,...a})})})}),Wd=w(I)`
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  z-index: ${({theme:e})=>e.zIndices.popover};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${ne.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${ne.slideDownIn};
      }
    }
  }
`,Ud="DatePickerCalendar",qd=c.forwardRef(({monthSelectLabel:e,yearSelectLabel:t,...o},a)=>{const{locale:n,timeZone:s,minDate:i,maxDate:l,calendarDate:d,onCalendarDateChange:f}=Ge(Ud),u=G1(d),m=c.useMemo(()=>{const j=i.year,y=l.year;return[...Array(y-j+1).keys()].map(S=>(j+S).toString())},[i,l]),h=Re(n,{month:"long"}),x=c.useMemo(()=>[...Array(d.calendar.getMonthsInYear(d)).keys()].map(j=>h.format(d.set({month:j+1}).toDate(s))),[d,h,s]),v=Re(n,{weekday:"short"}),b=c.useMemo(()=>{const j=m0(Yt(s),n);return[...new Array(7).keys()].map(y=>{const A=j.add({days:y}).toDate(s);return v.format(A)})},[s,n,v]),C=j=>{if(typeof j=="number")return;const y=d.set({month:x.indexOf(j)+1});f(y)},$=j=>{if(typeof j=="number")return;const y=d.set({year:parseInt(j,10)});f(y)},p=Gd(u,n);return r.jsxs(M,{ref:a,direction:"column",alignItems:"stretch",padding:4,...o,children:[r.jsxs(Kd,{justifyContent:"flex-start",paddingBottom:4,paddingLeft:2,paddingRight:2,gap:2,children:[r.jsx(He,{children:r.jsx(Zn,{"aria-label":e,value:x[d.month-1],onChange:C,children:x.map(j=>r.jsx(Xn,{value:j,children:j},j))})}),r.jsx(He,{children:r.jsx(Zn,{value:d.year.toString(),"aria-label":t,onChange:$,children:m.map(j=>r.jsx(Xn,{value:j,children:j},j))})})]}),r.jsxs("table",{role:"grid",children:[r.jsx("thead",{"aria-hidden":!0,children:r.jsx("tr",{"aria-rowindex":0,children:b.map((j,y)=>r.jsx(Yd,{"aria-colindex":y,children:j},j))})}),r.jsx("tbody",{children:[...new Array(6).keys()].map(j=>r.jsx("tr",{"aria-rowindex":j+2,children:p(j).map((y,S)=>y?r.jsx(Qd,{"aria-colindex":S+1,date:y,startDate:u,disabled:i.compare(y)>0||y.compare(l)>0},y.toString()):r.jsx(Lo,{"aria-colindex":S+1},S+1))},j))})]})]})}),Gd=(e,t)=>o=>{let a=e.add({weeks:o});const n=[];a=m0(a,t);const s=K1(a,t);for(let i=0;i<s;i++)n.push(null);for(;n.length<7;){n.push(a);const i=a.add({days:1});if(x0(a,i))break;a=i}for(;n.length<7;)n.push(null);return n},Kd=w(M)`
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
`,Yd=c.forwardRef(({children:e,...t},o)=>r.jsx(Zd,{tag:"th",role:"gridcell",ref:o,...t,height:"2.4rem",width:"3.2rem",children:r.jsx(z,{variant:"pi",fontWeight:"bold",color:"neutral800",children:e.slice(0,2)})})),Zd=w(I)`
  border-radius: ${({theme:e})=>e.borderRadius};
  text-transform: capitalize;
`,Xd="DatePickerCalendarCell",Qd=c.forwardRef(({date:e,startDate:t,disabled:o,...a},n)=>{const{timeZone:s,locale:i,calendarDate:l,onValueChange:d,onOpenChange:f,onTextValueChange:u,onCalendarDateChange:m}=Ge(Xd),h=x0(l,e),x=Re(i,{weekday:"long",day:"numeric",month:"long",year:"numeric"}),v=c.useMemo(()=>x.format(e.toDate(s)),[x,e,s]),b=Re(i,{day:"numeric",calendar:e.calendar.identifier}),C=c.useMemo(()=>b.formatToParts(e.toDate(s)).find(S=>S.type==="day").value,[b,e,s]),$=Re(i,{day:"2-digit",month:"2-digit",year:"numeric"}),p=Y1(t),j=e.compare(t)<0||e.compare(p)>0;let y="neutral900";return h?y="primary600":j&&(y="neutral600"),r.jsx(Lo,{tag:"td",role:"gridcell",ref:n,"aria-selected":h,...a,hasRadius:!0,"aria-label":v,tabIndex:h?0:-1,background:h?"primary100":"neutral0",cursor:"pointer",onPointerDown:Ve(a.onPointerDown,S=>{S.preventDefault(),m(e),d(e),u($.format(e.toDate(s))),f(!1)}),"aria-disabled":o,children:r.jsx(z,{variant:"pi",textColor:y,children:C})})}),Lo=w(I)`
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
`,Te=e=>{const t=e.toISOString(),o=Z1(t,"UTC");return X1(o)},Mt=e=>!!e.match(/^[^a-zA-Z]*$/);function Jd(e=""){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}const Pd=w(ql)`
  min-width: ${({onClear:e})=>e?"160px":"130px"};
`,e5=c.forwardRef(({step:e=15,value:t,defaultValue:o,onChange:a,...n},s)=>{const i=Ct("TimePicker"),[l,d]=c.useState(""),[f,u]=Ce({prop:t,defaultProp:o,onChange:a}),m=Re(i.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}),h=c.useMemo(()=>{const y=m.formatToParts(new Date),{value:S}=y.find(A=>A.type==="literal");return S},[m]),x=c.useMemo(()=>{const y=60/e;return[...Array(24).keys()].flatMap(S=>[...Array(y).keys()].map(A=>m.format(new Date(0,0,0,S,A*e))))},[e,m]),v=y=>{(!y||Mt(y))&&d(y)},b=y=>{const[S,A]=y.split(h);if(!S&&!A)return;const R=Number(S??"0"),N=Number(A??"0");if(!(R>23||N>59))return m.format(new Date(0,0,0,R,N))},C=y=>{const S=b(y.target.value);S?(d(S),u(S)):d(f)},$=y=>{if(typeof y<"u"){const S=b(y);u(S)}else u(y)};c.useEffect(()=>{const y=typeof t>"u"?"":t;Mt(y)&&d(y)},[t,d]);const j=`\\d{2}${Jd(h)}\\d{2}`;return r.jsx(Pd,{...n,ref:s,value:f,onChange:$,isPrintableCharacter:Mt,allowCustomValue:!0,placeholder:`--${h}--`,autocomplete:"none",startIcon:r.jsx(vs,{fill:"neutral500"}),inputMode:"numeric",pattern:j,textValue:l,onTextValueChange:v,onBlur:C,children:x.map(y=>r.jsx(Jl,{value:y,children:y},y))})});c.forwardRef(({clearLabel:e="clear",dateLabel:t="Choose date",timeLabel:o="Choose time",disabled:a=!1,hasError:n,onChange:s,onClear:i,required:l=!1,step:d,value:f,initialDate:u,size:m,...h},x)=>{const v=c.useRef(null),[b,C]=Ce({defaultProp:u?Ke(u,!1):void 0,prop:f?Ke(f,!1):f??void 0,onChange(V){s&&s(V?.toDate(Vt()))}}),$=Ct("DateTimePicker"),p=Re($.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}),j=b?p.format(b.toDate(Vt())):"",y=V=>{let D=V?Ke(V):void 0;if(!(D&&b&&D.compare(b)===0)){if(j&&D){const[U,K]=j.split(":");D=D.set({hour:parseInt(U,10),minute:parseInt(K,10)})}C(D)}},S=V=>{if(!V)return;const[D,U]=V.split(":"),K=b?b.set({hour:parseInt(D,10),minute:parseInt(U,10)}):Ke(new Date).set({hour:parseInt(D,10),minute:parseInt(U,10)});C(K)},A=V=>{C(void 0),i&&i(V)},R=()=>{const V=b?b.set({hour:0,minute:0}):Ke(new Date);C(V)},N=ge(v,x),{error:H,id:k,labelNode:_}=fe("DateTimePicker"),E=!!H||n;return r.jsxs(M,{"aria-labelledby":_?`${k}-label`:void 0,role:"group",flex:"1",gap:1,wrap:"wrap",children:[r.jsx(He,{flex:"1",children:r.jsx(Td,{...h,size:m,value:b?.toDate("UTC"),onChange:y,required:l,onClear:i?A:void 0,clearLabel:`${e} date`,disabled:a,ref:N,"aria-label":t})}),r.jsx(He,{flex:"1",children:r.jsx(e5,{size:m,hasError:E,value:j,onChange:S,onClear:i&&j!==void 0&&j!=="00:00"?R:void 0,clearLabel:`${e} time`,required:l,disabled:a,step:d,"aria-label":o})})]})});const Ke=(e,t=!0)=>{const o=e.toISOString();let a=Q1(o);return t&&(a=a.set({hour:0,minute:0})),J1(a)},t5=c.forwardRef((e,t)=>r.jsx(n5,{ref:t,background:"neutral150",...e,"data-orientation":"horizontal",role:"separator",tag:"div"})),n5=w(I)`
  height: 1px;
  border: none;
  /* If contained in a Flex parent we want to prevent the Divider to shink */
  flex-shrink: 0;
`,o5=w(I)`
  svg {
    height: 8.8rem;
  }
`,Dh=c.forwardRef(({icon:e,content:t,action:o,hasRadius:a=!0,shadow:n="tableShadow"},s)=>r.jsxs(M,{ref:s,alignItems:"center",direction:"column",padding:11,background:"neutral0",hasRadius:a,shadow:n,children:[e?r.jsx(o5,{paddingBottom:6,"aria-hidden":!0,children:e}):null,r.jsx(I,{paddingBottom:4,children:r.jsx(z,{variant:"delta",tag:"p",textAlign:"center",textColor:"neutral600",children:t})}),o]})),Eo=w0.define(),Ho=w0.define(),r5=v0.mark({attributes:{style:"background-color: yellow; color: black"}}),a5=P1.define({create(){return v0.none},update(e,t){return e=e.map(t.changes),t.effects.forEach(o=>{o.is(Eo)?e=e.update({add:o.value,sort:!0}):o.is(Ho)&&(e=e.update({filter:o.value}))}),e},provide:e=>er.decorations.from(e)});c.forwardRef(({hasError:e,required:t,id:o,value:a="",disabled:n=!1,onChange:s=()=>null,...i},l)=>{const d=c.useRef(),f=c.useRef(),u=c.useRef(),{error:m,...h}=fe("JsonInput"),x=!!m||e,v=h.id??o,b=h.required||t;let C;m?C=`${v}-error`:h.hint&&(C=`${v}-hint`);const $=H=>{const k=f.current?.doc;if(k){const{text:_,to:E}=k.line(H),V=E-_.trimStart().length;E>V&&u.current?.dispatch({effects:Eo.of([r5.range(V,E)])})}},p=()=>{const H=f.current?.doc;if(H){const k=H.length||0;u.current?.dispatch({effects:Ho.of((_,E)=>E<=0||_>=k)})}},j=({state:H,view:k})=>{u.current=k,f.current=H,p();const E=pr()(k);E.length&&$(H.doc.lineAt(E[0].from).number)},y=(H,k)=>{j(k),s(H)},S=(H,k)=>{u.current=H,f.current=k,j({view:H,state:k})},{setContainer:A,view:R}=tr({value:a,onCreateEditor:S,container:d.current,editable:!n,extensions:[nr(),a5],onChange:y,theme:"dark",basicSetup:{lineNumbers:!0,bracketMatching:!0,closeBrackets:!0,indentOnInput:!0,syntaxHighlighting:!0,highlightSelectionMatches:!0,tabSize:2}}),N=ge(d,A);return c.useImperativeHandle(l,()=>({...R?.dom,focus(){R&&R.focus()},scrollIntoView(H){R&&R.dom.scrollIntoView(H)}}),[R]),r.jsx(s5,{ref:N,$disabled:n,$hasError:x,alignItems:"stretch",fontSize:2,hasRadius:!0,"aria-required":b,id:v,"aria-describedby":C,...i})});const s5=w(M)`
  line-height: ${({theme:e})=>e.lineHeights[2]};

  .cm-editor {
    /** 
     * Hard coded since the color is the same between themes,
     * theme.colors.neutral800 changes between themes 
     */
    background-color: #32324d;
    width: 100%;
    outline: none;
    cursor: ${({$disabled:e})=>e?"not-allowed":"text"};
  }

  .cm-scroller {
    border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
    /* inputFocusStyle will receive hasError prop */
    ${Ie()}
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
`,Bh=he(({disabled:e,...t},o)=>r.jsx(_t,{ref:o,tag:ot,tabIndex:e?-1:void 0,disabled:e,...t})),i5=w(I)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,kh=({labelledBy:e="main-content-title",...t})=>r.jsx(i5,{"aria-labelledby":e,tag:"main",id:"main-content",tabIndex:-1,...t});w(I)`
  text-decoration: none;

  &:focus {
    left: ${({theme:e})=>e.spaces[3]};
    top: ${({theme:e})=>e.spaces[3]};
  }
`;const c5=(e,t)=>`${e}${Math.floor(t*255).toString(16).padStart(2,"0")}`,l5=t1,d5=c.forwardRef((e,t)=>r.jsx(o1,{...e,asChild:!0,ref:t})),h5=c.forwardRef((e,t)=>r.jsx(a1,{children:r.jsx(u5,{children:r.jsx(g5,{ref:t,...e})})})),u5=w(g1)`
  background: ${e=>c5(e.theme.colors.neutral800,.2)};
  position: fixed;
  inset: 0;
  z-index: ${e=>e.theme.zIndices.overlay};
  will-change: opacity;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${ne.overlayFadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,g5=w(f1)`
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

  > form {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation-duration: ${e=>e.theme.motion.timings[200]};
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};
      animation-name: ${ne.modalPopIn};
    }

    &[data-state='closed'] {
      animation-duration: ${e=>e.theme.motion.timings[120]};
      animation-timing-function: ${e=>e.theme.motion.easings.easeOutQuad};
      animation-name: ${ne.modalPopOut};
    }
  }
`,Do=c.forwardRef((e,t)=>r.jsx(s1,{...e,asChild:!0,ref:t})),f5=c.forwardRef(({children:e,closeLabel:t="Close modal",...o},a)=>r.jsxs(m5,{ref:a,padding:4,paddingLeft:5,paddingRight:5,background:"neutral100",justifyContent:"space-between",...o,tag:"header",children:[e,r.jsx(Do,{children:r.jsx(Fe,{withTooltip:!1,label:t,children:r.jsx(Ue,{})})})]})),m5=w(M)`
  border-bottom: solid 1px ${e=>e.theme.colors.neutral150};
`,x5=c.forwardRef((e,t)=>r.jsx(r1,{asChild:!0,children:r.jsx(z,{tag:"h2",variant:"omega",fontWeight:"bold",ref:t,...e})})),w5=c.forwardRef(({children:e,...t},o)=>r.jsx(v5,{ref:o,...t,children:e})),v5=w($t)`
  padding-inline: ${e=>e.theme.spaces[7]};

  & > div {
    padding-block: ${e=>e.theme.spaces[8]};
    /* Add negative margin and padding to avoid cropping the box shadow when the inputs are focused */
    margin: 0 -2px 0 -2px;
    padding-left: 2px;
    padding-right: 2px;

    & > div {
      // the scroll area component applies a display: table to the child, which we don't want.
      display: block !important;
    }
  }
`,b5=c.forwardRef((e,t)=>r.jsx(p5,{ref:t,padding:4,paddingLeft:5,paddingRight:5,background:"neutral100",justifyContent:"space-between",...e,tag:"footer"})),p5=w(M)`
  border-top: solid 1px ${e=>e.theme.colors.neutral150};
  flex: 1;
`,zh=Object.freeze(Object.defineProperty({__proto__:null,Body:w5,Close:Do,Content:h5,Footer:b5,Header:f5,Root:l5,Title:x5,Trigger:d5},Symbol.toStringTag,{value:"Module"})),$5="";c.forwardRef(({startAction:e,locale:t,onValueChange:o,value:a,step:n=1,disabled:s=!1,...i},l)=>{const d=Ct("NumberInput"),f=t||d.locale,u=c.useRef(new or(f,{style:"decimal"})),m=c.useRef(new rr(f,{maximumFractionDigits:20})),[h,x]=C5({prop(A){const R=String(a);return isNaN(Number(R))||R!==A&&A!==""?A:m.current.format(Number(a))},defaultProp:$5,onChange(A){const R=u.current.parse(A??"");o(isNaN(R)?void 0:R)}}),v=A=>{x(String(A))},b=({target:{value:A}})=>{u.current.isValidPartialNumber(A)&&v(A)},$=(A=>{const R=A.toString();return R.includes(".")?R.split(".")[1].length:0})(n),p=()=>{if(!h){v(n);return}const A=u.current.parse(h),R=isNaN(A)?n:A+n,N=parseFloat(R.toFixed($));v(m.current.format(N))},j=()=>{if(!h){v(-n);return}const A=u.current.parse(h),R=isNaN(A)?-n:A-n,N=parseFloat(R.toFixed($));v(m.current.format(N))},y=A=>{if(!s)switch(A.key){case ce.DOWN:{A.preventDefault(),j();break}case ce.UP:{A.preventDefault(),p();break}}},S=()=>{if(h){const A=u.current.parse(h),R=isNaN(A)?"":m.current.format(A);v(R)}};return r.jsx(pt,{ref:l,startAction:e,disabled:s,type:"text",inputMode:"decimal",onChange:b,onKeyDown:y,onBlur:S,value:h,endAction:r.jsxs(M,{direction:"column",children:[r.jsx(Pn,{disabled:s,"aria-hidden":!0,$reverse:!0,onClick:p,tabIndex:-1,type:"button","data-testid":"ArrowUp",children:r.jsx(Ee,{fill:"neutral500"})}),r.jsx(Pn,{disabled:s,"aria-hidden":!0,onClick:j,tabIndex:-1,type:"button","data-testid":"ArrowDown",children:r.jsx(Ee,{fill:"neutral500"})})]}),...i})});const Pn=w.button`
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
`;function C5({prop:e,defaultProp:t,onChange:o=()=>{}}){const[a,n]=ro({defaultProp:t,onChange:o}),s=e!==void 0,i=e instanceof Function?e(a):e,l=s?i:a,d=en(o),f=c.useCallback(u=>{if(s){const h=typeof u=="function"?u(i):u;h!==i&&(d(h),n(u))}else n(u)},[s,i,n,d]);return[l,f]}const j5=c.createContext({activePage:1,pageCount:1}),In=()=>c.useContext(j5);he(({children:e,...t},o)=>{const{activePage:a}=In(),n=a===1;return r.jsxs(ko,{ref:o,"aria-disabled":n,tabIndex:n?-1:void 0,...t,children:[r.jsx(qe,{children:e}),r.jsx(J0,{"aria-hidden":!0})]})});he(({children:e,...t},o)=>{const{activePage:a,pageCount:n}=In(),s=a===n;return r.jsxs(ko,{ref:o,"aria-disabled":s,tabIndex:s?-1:void 0,...t,children:[r.jsx(qe,{children:e}),r.jsx(pn,{"aria-hidden":!0})]})});const Bo=w(ot)`
  padding: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({$active:e,theme:t})=>e?t.shadows.filterShadow:void 0};
  text-decoration: none;
  display: flex;

  ${wt}
`,ko=w(Bo)`
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
`;he(({number:e,children:t,...o},a)=>{const{activePage:n}=In(),s=n===e;return r.jsxs(y5,{ref:a,...o,"aria-current":s,$active:s,children:[r.jsx(qe,{children:t}),r.jsx(z,{"aria-hidden":!0,fontWeight:s?"bold":void 0,lineHeight:"revert",variant:"pi",children:e})]})});const y5=w(Bo)`
  color: ${({theme:e,$active:t})=>t?e.colors.primary700:e.colors.neutral800};
  background: ${({theme:e,$active:t})=>t?e.colors.neutral0:void 0};

  &:hover {
    box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  }
`;c.forwardRef((e,t)=>r.jsx(ar,{...e,asChild:!0,ref:t}));c.forwardRef((e,t)=>r.jsx(sr,{children:r.jsx(S5,{sideOffset:4,side:"bottom",align:"start",...e,ref:t})}));const S5=w(ir)`
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
        animation-name: ${ne.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${ne.slideDownIn};
      }
    }

    &[data-state='closed'] {
      animation-timing-function: ${e=>e.theme.motion.easings.easeOutQuad};

      &[data-side='top'] {
        animation-name: ${ne.slideUpOut};
      }

      &[data-side='bottom'] {
        animation-name: ${ne.slideDownOut};
      }
    }
  }
`;c.forwardRef(({children:e,intersectionId:t,onReachEnd:o,...a},n)=>{const s=c.useRef(null),i=ge(s,n),l=pe();return rt(s,o??(()=>{}),{selectorToWatch:`#${Ne(l)}`,skipWhen:!t||!o}),r.jsxs(R5,{ref:i,...a,children:[e,t&&o&&r.jsx(I,{id:Ne(l),width:"100%",height:"1px"})]})});const R5=w($t)`
  height: 20rem;
`;c.forwardRef(({size:e="M",value:t,...o},a)=>r.jsx(A5,{ref:a,$size:e,...o,children:r.jsx(M5,{style:{transform:`translate3D(-${100-(t??0)}%, 0, 0)`}})}));const A5=w(cr)`
  position: relative;
  overflow: hidden;
  width: ${e=>e.$size==="S"?"7.8rem":"10.2rem"};
  height: ${e=>e.$size==="S"?"0.4rem":"0.8rem"};
  background-color: ${e=>e.theme.colors.neutral600};
  border-radius: ${e=>e.theme.borderRadius};

  /* Fix overflow clipping in Safari */
  /* https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0 */
  transform: translateZ(0);
`,M5=w(lr)`
  background-color: ${({theme:e})=>e.colors.neutral0};
  border-radius: ${({theme:e})=>e.borderRadius};
  width: 100%;
  height: 100%;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${e=>e.theme.motion.timings[320]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`;c.forwardRef((e,t)=>r.jsx(I5,{ref:t,...e}));const I5=w(dr)`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spaces[3]};
`;c.forwardRef(({children:e,id:t,...o},a)=>{const n=pe(t);return r.jsxs(M,{gap:2,children:[r.jsx(T5,{id:n,ref:a,...o,children:r.jsx(V5,{})}),r.jsx(z,{tag:"label",htmlFor:n,children:e})]})});const T5=w(hr)`
  background: ${e=>e.theme.colors.neutral0};
  width: 2rem;
  height: 2rem;
  flex: 0 0 2rem;
  border-radius: 50%;
  border: 1px solid ${e=>e.theme.colors.neutral300};
  position: relative;
  cursor: pointer;
  z-index: 0;

  @media (prefers-reduced-motion: no-preference) {
    transition: border-color ${e=>e.theme.motion.timings[120]}
      ${e=>e.theme.motion.easings.easeOutQuad};
  }

  &[data-state='checked'] {
    border: 1px solid ${e=>e.theme.colors.primary600};
  }

  &[data-disabled] {
    cursor: not-allowed;
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
`,V5=w(ur)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &[data-state='checked'] {
    @media (prefers-reduced-motion: no-preference) {
      animation: ${ne.popIn} ${e=>e.theme.motion.timings[200]};
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
`,L5=e=>{const t=e.querySelector('[tabindex="0"]');t&&t.focus()},zo=c.createContext({rowIndex:0,colIndex:0,setTableValues(){throw new Error("setTableValues must be initialized via the RawTableContext.Provider")}}),E5=()=>c.useContext(zo),H5=c.forwardRef(({colCount:e,rowCount:t,jumpStep:o=3,initialCol:a=0,initialRow:n=0,...s},i)=>{const l=c.useRef(null),d=c.useRef(!1),f=ge(l,i),[u,m]=c.useState(n),[h,x]=c.useState(a),v=c.useCallback(({colIndex:$,rowIndex:p})=>{x($),m(p)},[]);c.useEffect(()=>{d.current&&L5(l.current),d.current||(d.current=!0)},[h,u]);const b=$=>{switch($.key){case ce.RIGHT:{$.preventDefault(),x(p=>p<e-1?p+1:p);break}case ce.LEFT:{$.preventDefault(),x(p=>p>0?p-1:p);break}case ce.UP:{$.preventDefault(),m(p=>p>0?p-1:p);break}case ce.DOWN:{$.preventDefault(),m(p=>p<t-1?p+1:p);break}case ce.HOME:{$.preventDefault(),$.ctrlKey&&m(0),x(0);break}case ce.END:{$.preventDefault(),$.ctrlKey&&m(t-1),x(e-1);break}case ce.PAGE_DOWN:{$.preventDefault(),m(p=>p+o<t?p+o:t-1);break}case ce.PAGE_UP:{$.preventDefault(),m(p=>p-o>0?p-o:0);break}}},C=c.useMemo(()=>({rowIndex:u,colIndex:h,setTableValues:v}),[h,u,v]);return r.jsx(zo.Provider,{value:C,children:r.jsx("table",{role:"grid",ref:f,"aria-rowcount":t,"aria-colcount":e,onKeyDown:b,...s})})}),Ye=(e,t)=>[...e.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')].filter(n=>!n.hasAttribute("disabled")),It=e=>e.filter(t=>t.tagName==="INPUT"?t.type!=="checkbox"&&t.type!=="radio":!1),No=c.forwardRef(({coords:e={col:0,row:0},tag:t="td",...o},a)=>{const n=c.useRef(null),s=ge(a,n),{rowIndex:i,colIndex:l,setTableValues:d}=E5(),[f,u]=c.useState(!1),m=v=>{const b=Ye(n.current);if(b.length===0||b.length===1&&It(b).length===0)return;if(b.length>1&&!b.find($=>$.tagName!=="BUTTON")){v.preventDefault();const $=b.findIndex(p=>p===document.activeElement);if(v.key===ce.RIGHT){const p=b[$+1];p&&(v.stopPropagation(),p.focus())}else if(v.key===ce.LEFT){const p=b[$-1];p&&(v.stopPropagation(),p.focus())}return}const C=v.key===ce.ENTER;if(C&&!f)u(!0);else if((v.key===ce.ESCAPE||C)&&f){if(C&&document.activeElement?.tagName==="A")return;u(!1),n.current.focus()}else f&&v.stopPropagation()},h=i===e.row-1&&l===e.col-1;Oe(()=>{const v=Ye(n.current);v.length===0||v.length===1&&It(v).length!==0||v.length>1&&v.find(b=>b.tagName!=="BUTTON")?(n.current.setAttribute("tabIndex",!f&&h?"0":"-1"),v.forEach((b,C)=>{b.setAttribute("tabIndex",f?"0":"-1"),f&&C===0&&b.focus()})):v.forEach(b=>{b.setAttribute("tabIndex",h?"0":"-1")})},[f,h]);const x=c.useCallback(()=>{const v=Ye(n.current);v.length>=1&&(It(v).length!==0||!v.find(b=>b.tagName!=="BUTTON"))&&u(!0),d({rowIndex:e.row-1,colIndex:e.col-1})},[e,d]);return Oe(()=>{const v=n.current;return Ye(v).forEach(C=>{C.addEventListener("focus",x)}),()=>{Ye(v).forEach($=>{$.removeEventListener("focus",x)})}},[x]),r.jsx(I,{role:"gridcell",tag:t,ref:s,onKeyDown:m,...o})}),D5=e=>r.jsx(No,{...e,tag:"th"}),B5=({children:e,...t})=>{const o=c.Children.toArray(e).map(a=>c.isValidElement(a)?c.cloneElement(a,{"aria-rowindex":1}):a);return r.jsx("thead",{...t,children:o})},k5=({children:e,...t})=>{const o=c.Children.toArray(e).map((a,n)=>c.isValidElement(a)?c.cloneElement(a,{"aria-rowindex":n+2}):a);return r.jsx("tbody",{...t,children:o})},z5=({children:e,...t})=>{const o=c.Children.toArray(e).map((a,n)=>c.isValidElement(a)?c.cloneElement(a,{"aria-colindex":n+1,coords:{col:n+1,row:t["aria-rowindex"]}}):a);return r.jsx(I,{tag:"tr",...t,children:o})},N5=w(Ue)`
  font-size: 0.5rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,Oo=w(Ec)`
  font-size: 1rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,O5=w.div`
  border-radius: ${({theme:e})=>e.borderRadius};
  border: 1px solid ${({theme:e})=>e.colors.neutral150}

  &:focus-within {
    ${Oo} {
      fill: ${({theme:e})=>e.colors.primary600};
    }
  }
`,F5=w(pt)`
  border: 1px solid ${({theme:e})=>e.colors.neutral150}
  height: 16px;
  padding: 0 0 0 8px;
  color: ${({theme:e})=>e.colors.neutral800};
  
  &:hover {
    button {
      cursor: pointer;
    }
  }

  ${Ie()}
`;c.forwardRef(({name:e,children:t,value:o="",onClear:a,clearLabel:n="Clear",...s},i)=>{const l=c.useRef(null),d=o.length>0,f=m=>{a(m),l.current.focus()},u=co(i,l);return r.jsx(O5,{children:r.jsxs(He,{name:e,children:[r.jsx(qe,{children:r.jsx(Rn,{children:t})}),r.jsx(F5,{size:"S",ref:u,value:o,startAction:r.jsx(Oo,{"aria-hidden":!0}),endAction:d?r.jsx(Fe,{onClick:f,onMouseDown:m=>{m.preventDefault()},label:n,size:"XS",variant:"ghost",type:"button",children:r.jsx(N5,{})}):void 0,...s})]})})});const _5=w(I)`
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
`,W5=({children:e,icon:t,label:o,disabled:a=!1,onClick:n,...s})=>{const i=l=>{a||!n||n(l)};return r.jsxs(M,{inline:!0,background:a?"neutral200":"primary100",color:a?"neutral700":"primary600",paddingLeft:3,paddingRight:1,borderColor:a?"neutral300":"primary200",hasRadius:!0,height:"3.2rem",...s,children:[r.jsx(U5,{$disabled:a,variant:"pi",fontWeight:"bold",children:e}),r.jsx(_5,{tag:"button",disabled:a,"aria-disabled":a,"aria-label":o,padding:2,onClick:i,$iconAction:!!n,children:t})]})},U5=w(z)`
  color: inherit;
  border-right: 1px solid ${({theme:e,$disabled:t})=>t?e.colors.neutral300:e.colors.primary200};
  padding-right: ${({theme:e})=>e.spaces[2]};
`;c.forwardRef(({children:e,clearLabel:t="Clear",customizeContent:o,disabled:a,hasError:n,id:s,name:i,onChange:l,onClear:d,onCloseAutoFocus:f,onReachEnd:u,placeholder:m,required:h,size:x,startIcon:v,value:b,withTags:C,...$},p)=>{const j=c.useRef(null),[y,S]=c.useState(),[A,R]=c.useState(!1),N=O=>{l?l(O):S(O)},H=O=>()=>{const re=Array.isArray(b)?b.filter(ee=>ee!==O):(y??[]).filter(ee=>ee!==O);l?l(re):S(re)},k=O=>{R(O)},_=pe(),E=`intersection-${Ne(_)}`;rt(j,O=>{u&&u(O)},{selectorToWatch:`#${E}`,skipWhen:!A});const D=typeof b<"u"&&b!==null?b:y,U=O=>O&&typeof O=="object"&&O.value?r.jsx(W5,{tabIndex:-1,disabled:a,icon:r.jsx(Ue,{width:`${14/16}rem`,height:`${14/16}rem`}),onClick:H(O.value),children:O.textValue},O.value):null,{error:K,...G}=fe("MultiSelect"),Y=!!K||n,Z=G.id??s,te=G.name??i,X=G.required??h;let se;return K?se=`${Z}-error`:G.hint&&(se=`${Z}-hint`),r.jsxs(yo,{onOpenChange:k,disabled:a,required:X,onValueChange:N,value:D,...$,multi:!0,children:[r.jsx(So,{ref:p,id:Z,name:te,"aria-label":$["aria-label"],"aria-describedby":se??$["aria-describedby"],startIcon:v,hasError:Y,disabled:a,clearLabel:t,onClear:D?.length?d:void 0,withTags:!!(C&&(D?.length??!1)),size:x,children:r.jsx(Ro,{placeholder:m,textColor:D?.length?"neutral800":"neutral600",children:D?.length?C?U:o?o(D):void 0:void 0})}),r.jsx(Ao,{children:r.jsx(Mo,{position:"popper",sideOffset:4,onCloseAutoFocus:f,children:r.jsxs(Io,{ref:j,children:[e,r.jsx(I,{id:E,width:"100%",height:"1px"})]})})})]})});const q5=c.forwardRef(({value:e,children:t,startIcon:o,...a},n)=>r.jsxs(Mn,{ref:n,value:e.toString(),...a,children:[o&&r.jsx(I,{tag:"span","aria-hidden":!0,children:o}),r.jsx(To,{children:({isSelected:s,isIntermediate:i})=>r.jsx(Sn,{checked:i?"indeterminate":s})}),r.jsx(z,{children:r.jsx(Vo,{children:t})})]}));c.forwardRef(({children:e,label:t,startIcon:o,values:a=[],...n},s)=>r.jsxs(Ad,{ref:s,children:[r.jsxs(Mn,{value:a,...n,children:[o&&r.jsx(I,{tag:"span","aria-hidden":!0,children:o}),r.jsx(To,{children:({isSelected:i,isIntermediate:l})=>r.jsx(Sn,{checked:l?"indeterminate":i})}),r.jsx(z,{children:t})]}),e]}));w(q5)`
  padding-left: ${({theme:e})=>e.spaces[7]};
`;const G5="23.2rem";c.forwardRef(({...e},t)=>r.jsx(K5,{ref:t,...e,tag:"nav"}));const K5=w(I)`
  width: ${G5};
  background: ${({theme:e})=>e.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
  z-index: 1;
`;w(t5)`
  width: 2.4rem;
  background-color: ${({theme:e})=>e.colors.neutral200};
`;he(({active:e,children:t,icon:o=null,withBullet:a=!1,isSubSectionChild:n=!1,...s},i)=>r.jsxs(Y5,{background:"neutral100",paddingLeft:n?9:7,paddingBottom:2,paddingTop:2,ref:i,...s,children:[r.jsxs(M,{children:[o?r.jsx(Z5,{children:o}):r.jsx(Ut,{$active:e}),r.jsx(z,{paddingLeft:2,children:t})]}),a&&r.jsx(M,{paddingRight:4,children:r.jsx(Ut,{$active:!0})})]}));const Ut=w.span`
  width: 0.4rem;
  height: 0.4rem;
  background-color: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.neutral600};
  border-radius: 50%;
`,Y5=w(ot)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:e})=>e.colors.neutral800};
  svg > * {
    fill: ${({theme:e})=>e.colors.neutral600};
  }

  &.active {
    ${({theme:e})=>L`
        background-color: ${e.colors.primary100};
        border-right: 2px solid ${e.colors.primary600};
        color: ${e.colors.primary700};
        font-weight: 500;
      `}

    ${Ut} {
      background-color: ${({theme:e})=>e.colors.primary600};
    }
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,Z5=w.div`
  svg {
    height: 1.6rem;
    width: 1.6rem;
  }
`;w.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`;w(I)`
  & > svg {
    height: 0.4rem;
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`;c.forwardRef(({visibleLabels:e,onLabel:t="On",offLabel:o="Off",onCheckedChange:a,checked:n,defaultChecked:s,disabled:i,...l},d)=>{const[f,u]=Ce({prop:n,defaultProp:s}),m=h=>{u(h)};return r.jsxs(M,{gap:3,children:[r.jsx(X5,{ref:d,onCheckedChange:Ve(a,m),checked:f,disabled:i,...l,children:r.jsx(Q5,{})}),e?r.jsx(J5,{"aria-hidden":!0,"data-disabled":i,"data-state":f?"checked":"unchecked",children:f?t:o}):null]})});const X5=w(gr)`
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
`,Q5=w(fr)`
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
`,J5=w(z)`
  color: ${e=>e.theme.colors.danger600};

  &[data-state='checked'] {
    color: ${e=>e.theme.colors.success600};
  }

  &[data-disabled='true'] {
    color: ${({theme:e})=>e.colors.neutral500};
  }
`,[P5,Tn]=nt("Tabs");c.forwardRef(({disabled:e=!1,variant:t="regular",hasError:o,...a},n)=>r.jsx(P5,{disabled:e,hasError:o,variant:t,children:r.jsx(eh,{ref:n,...a})}));const eh=w(mr)`
  width: 100%;
  position: relative;
`;c.forwardRef((e,t)=>{const{variant:o}=Tn("List");return r.jsx(th,{ref:t,...e,$variant:o})});const th=w(xr)`
  display: flex;
  align-items: ${e=>e.$variant==="regular"?"flex-end":"unset"};
  position: relative;
  z-index: 0;
`;c.forwardRef(({children:e,disabled:t,...o},a)=>{const{disabled:n,variant:s,hasError:i}=Tn("Trigger"),l=n===!0||n===o.value||t,d=i===o.value;return r.jsxs(nh,{ref:a,...o,$hasError:d,$variant:s,disabled:l,children:[r.jsx(_o,{fontWeight:"bold",variant:s==="simple"?"sigma":void 0,children:e}),s==="simple"?r.jsx(Fo,{}):null]})});const Fo=w.span`
  display: block;
  width: 100%;
  background-color: currentColor;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  height: 0.2rem;
`,_o=w(z)``,nh=w(wr)`
  position: relative;
  color: ${e=>e.$hasError?e.theme.colors.danger600:e.theme.colors.neutral600};
  cursor: pointer;
  z-index: 0;

  ${e=>e.$variant==="simple"?L`
        padding-block: ${t=>t.theme.spaces[4]};
        padding-inline: ${t=>t.theme.spaces[4]};

        & > ${_o} {
          line-height: 1.2rem;
        }

        &[data-state='active'] {
          color: ${e.$hasError?e.theme.colors.danger600:e.theme.colors.primary700};

          & > ${Fo} {
            opacity: 1;
          }
        }
      `:L`
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
`;c.forwardRef((e,t)=>{const{variant:o}=Tn("Content");return r.jsx(oh,{$variant:o,ref:t,...e})});const oh=w(vr)`
  ${e=>e.$variant==="simple"?L``:L`
        position: relative;
        z-index: 1;
        background-color: ${t=>t.theme.colors.neutral0};
      `}
`,rh=w(I)`
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
`,ah=w(H5)`
  width: 100%;
  white-space: nowrap;
`,sh=w(I)`
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
`,ih=w(I)`
  overflow-x: auto;
`,Nh=c.forwardRef(({footer:e,...t},o)=>{const a=c.useRef(null),[n,s]=c.useState(),i=l=>{const d=l.target.scrollWidth-l.target.clientWidth;if(l.target.scrollLeft===0){s("right");return}if(l.target.scrollLeft===d){s("left");return}l.target.scrollLeft>0&&s("both")};return c.useEffect(()=>{a.current.scrollWidth>a.current.clientWidth&&s("right")},[]),r.jsxs(rh,{shadow:"tableShadow",hasRadius:!0,background:"neutral0",children:[r.jsx(sh,{$overflowing:n,position:"relative",children:r.jsx(ih,{ref:a,onScroll:i,paddingLeft:6,paddingRight:6,children:r.jsx(ah,{ref:o,...t})})}),e]})}),ch=w(k5)`
  & tr:last-of-type {
    border-bottom: none;
  }
`,Oh=({children:e,...t})=>r.jsx(ch,{...t,children:e}),lh=w(B5)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Fh=({children:e,...t})=>r.jsx(lh,{...t,children:e}),dh=w(z5)`
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
`,_h=e=>r.jsx(dh,{...e}),Wo=w(No)`
  vertical-align: middle;
  text-align: left;
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`,Wh=c.forwardRef(({children:e,action:t,...o},a)=>r.jsx(Wo,{color:"neutral600",as:D5,ref:a,...o,children:r.jsxs(M,{children:[e,t]})})),Uh=c.forwardRef(({children:e,...t},o)=>r.jsx(Wo,{color:"neutral800",ref:o,...t,children:e}));w(I)`
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
`;w(I)`
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
  display: block;
  width: 100%;
  border: none;
`;he(({children:e,startIcon:t,endIcon:o,disabled:a=!1,loading:n=!1,...s},i)=>{const l=a||n;return r.jsxs(gh,{ref:i,disabled:l,"aria-disabled":l,tag:"button",type:"button",gap:2,...s,children:[n?r.jsx(uh,{"aria-hidden":!0,children:r.jsx(P0,{})}):t,r.jsx(z,{variant:"pi",children:e}),o]})});const hh=ie`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,uh=w.span`
  display: flex;
  animation: ${hh} 2s infinite linear;
  will-change: transform;
`,gh=w(M)`
  border: none;
  background-color: transparent;
  color: ${e=>e.theme.colors.primary600};
  cursor: pointer;

  &[aria-disabled='true'] {
    pointer-events: none;
    color: ${e=>e.theme.colors.neutral600};
  }

  ${wt}
`,fh=c.forwardRef((e,t)=>r.jsx(pt,{ref:t,...e}));fh.displayName="TextInput";const qh=c.forwardRef(({disabled:e,hasError:t,id:o,name:a,required:n,...s},i)=>{const{error:l,...d}=fe("Textarea"),f=!!l||t,u=d.id??o,m=d.name??a,h=d.required||n;let x;return l?x=`${u}-error`:d.hint&&(x=`${u}-hint`),r.jsx(mh,{borderColor:f?"danger600":"neutral200",$hasError:f,hasRadius:!0,children:r.jsx(xh,{"aria-invalid":f,"aria-required":h,tag:"textarea",background:e?"neutral150":"neutral0",color:e?"neutral600":"neutral800",disabled:e,fontSize:2,hasRadius:!0,ref:i,lineHeight:4,padding:4,width:"100%",height:"100%",id:u,name:m,"aria-describedby":x,...s})})}),mh=w(I)`
  height: 10.5rem;
  ${Ie()}
`,xh=w(I)`
  border: none;
  resize: none;

  &::placeholder {
    color: ${({theme:e})=>e.colors.neutral600};
    font-size: ${({theme:e})=>e.fontSizes[2]};
    opacity: 1;
  }

  &:focus-within {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }
`,Gh=c.forwardRef(({offLabel:e,onLabel:t,disabled:o,hasError:a,required:n,id:s,name:i,checked:l,onChange:d,...f},u)=>{const[m=!1,h]=Ce({prop:l}),x=m!==null&&!m,{error:v,...b}=fe("Toggle"),C=!!v||a,$=b.id??s,p=b.name??i,j=b.required||n;let y;return v?y=`${$}-error`:b.hint&&(y=`${$}-hint`),r.jsxs(wh,{position:"relative",hasRadius:!0,padding:1,background:o?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral200",wrap:"wrap",cursor:o?"not-allowed":"pointer",$hasError:C,children:[r.jsx(e0,{hasRadius:!0,flex:"1 1 50%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,justifyContent:"center",background:o&&x?"neutral200":x?"neutral0":"transparent",borderColor:o&&x?"neutral300":x?"neutral200":o?"neutral150":"neutral100",children:r.jsx(z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:o?"neutral700":x?"danger700":"neutral600",children:e})}),r.jsx(e0,{hasRadius:!0,flex:"1 1 50%",paddingLeft:3,paddingRight:3,justifyContent:"center",background:o&&m?"neutral200":m?"neutral0":"transparent",borderColor:o&&m?"neutral300":m?"neutral200":o?"neutral150":"neutral100",children:r.jsx(z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:o?"neutral700":m?"primary600":"neutral600",children:t})}),r.jsx(vh,{...f,id:$,name:p,ref:u,onChange:S=>{h(S.currentTarget.checked),d?.(S)},type:"checkbox","aria-required":j,disabled:o,"aria-disabled":o,checked:!!m,"aria-describedby":y})]})}),wh=w(M)`
  ${Ie()}
`,e0=w(M)`
  padding-block: 0.6rem;
`,vh=w.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 0;
  width: 100%;
`,bh=he((e,t)=>{const{gap:o=0,gridCols:a=12,...n}=e;return r.jsx(ph,{ref:t,$gap:o,$gridCols:a,...n})}),ph=w(I)`
  display: grid;
  grid-template-columns: repeat(${({$gridCols:e})=>e}, 1fr);
  ${({theme:e,$gap:t})=>xt({gap:t},e)}
`,$h=he(({col:e,s:t,xs:o,m:a,...n},s)=>r.jsx(Ch,{ref:s,$col:e,$s:t,$xs:o,$m:a,...n})),Ch=w(M)`
  grid-column: span ${({$xs:e})=>e??12};
  max-width: 100%;

  ${({theme:e})=>e.breakpoints.small} {
    grid-column: span ${({$s:e,$xs:t})=>e??t??12};
  }

  ${({theme:e})=>e.breakpoints.medium} {
    grid-column: span ${({$m:e,$s:t,$xs:o})=>e??t??o??12};
  }

  ${({theme:e})=>e.breakpoints.large} {
    grid-column: span ${({$col:e,$m:t,$s:o,$xs:a})=>e??t??o??a??12};
  }
`,Kh=Object.freeze(Object.defineProperty({__proto__:null,Item:$h,Root:bh},Symbol.toStringTag,{value:"Module"}));export{Th as A,_t as B,K2 as C,Lh as D,Dh as E,Sh as F,Kh as G,Fe as I,sl as L,zh as M,z as T,qe as V,I as a,M as b,Vh as c,Gh as d,fh as e,G2 as f,Sr as g,Nh as h,Fh as i,_h as j,Wh as k,Oh as l,Uh as m,Ah as n,yh as o,Sn as p,Rh as q,kh as r,qh as s,Ih as t,Eh as u,Zt as v,Bh as w,Mh as x};
