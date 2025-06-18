import{r as i,cP as Xo,cB as _o,cF as re,j as o,cH as oe,cC as er,cD as Zt,cE as J,cG as pe,cW as Ne,cN as Le,cX as tr,cI as $e,cO as Hn,cQ as or,cT as Un,cY as qn,cZ as rr,cR as It,cJ as Gt,cK as Ht,cL as nr,cM as ar,cS as Fo,cU as Qn,cV as Yn,eP as ir,k as g,c$ as F,eQ as sr,cx as ie,ds as Jn,dt as Kn,eR as Fe,dr as Xn,du as _n,dv as ea,d0 as lr,d1 as cr,dy as ta,d2 as dr,dz as oa,dA as ra,d5 as ur,dB as na,dC as fr,dD as aa,dE as ia,dF as sa,dG as la,eS as Ut,dH as ca,dI as da,eT as ua,dw as fa,dx as ha,eU as hr,eV as We,da as pa,dd as ma,dj as ga,dk as xa,db as ba,dc as wa,de as va,df as Ca,dJ as ya,dm as ja,dn as Sa,dp as Ra,dq as ka,dK as Tt,dL as qt,eW as Ia,dM as Mt,dN as At,dO as Ta,dP as Ma,dQ as Aa,dR as Da,dS as Fa,dT as Ea,dU as La,dV as pr,dW as Pa,dX as mr,dY as Na,dZ as za,d_ as Oa,eX as Ba,d$ as Va,e0 as $a,e1 as gr,e2 as xr,e3 as Wa,e4 as Za,e5 as Ga,e6 as Ha,d6 as Ua,d8 as qa,dg as Qa,dh as Ya,d9 as Ja,d7 as Ka,e7 as Xa,e8 as _a,e9 as ei,ea as ti,eb as oi,ec as ri,ed as ni,ee as ai,ef as ii,eg as si,eY as li,eh as ci,ei as di,ej as ui,ek as fi,el as hi,em as pi,di as br,dl as mi,c_ as gi,en as xi,eo as bi,R as wi,Q as Eo,P as vi,a as Qt,eZ as Ci,B as yi}from"./strapi-C9nOTXTf.js";var ji=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Pe=new WeakMap,st=new WeakMap,lt={},jt=0,wr=function(e){return e&&(e.host||wr(e.parentNode))},Si=function(e,t){return t.map(function(r){if(e.contains(r))return r;var n=wr(r);return n&&e.contains(n)?n:(console.error("aria-hidden",r,"in not contained inside",e,". Doing nothing"),null)}).filter(function(r){return!!r})},Ri=function(e,t,r,n){var a=Si(t,Array.isArray(e)?e:[e]);lt[r]||(lt[r]=new WeakMap);var s=lt[r],c=[],l=new Set,d=new Set(a),p=function(h){!h||l.has(h)||(l.add(h),p(h.parentNode))};a.forEach(p);var f=function(h){!h||d.has(h)||Array.prototype.forEach.call(h.children,function(u){if(l.has(u))f(u);else try{var x=u.getAttribute(n),b=x!==null&&x!=="false",w=(Pe.get(u)||0)+1,C=(s.get(u)||0)+1;Pe.set(u,w),s.set(u,C),c.push(u),w===1&&b&&st.set(u,!0),C===1&&u.setAttribute(r,"true"),b||u.setAttribute(n,"true")}catch(v){console.error("aria-hidden: cannot operate on ",u,v)}})};return f(t),l.clear(),jt++,function(){c.forEach(function(h){var u=Pe.get(h)-1,x=s.get(h)-1;Pe.set(h,u),s.set(h,x),u||(st.has(h)||h.removeAttribute(n),st.delete(h)),x||h.removeAttribute(r)}),jt--,jt||(Pe=new WeakMap,Pe=new WeakMap,st=new WeakMap,lt={})}},vr=function(e,t,r){r===void 0&&(r="data-aria-hidden");var n=Array.from(Array.isArray(e)?e:[e]),a=ji(e);return a?(n.push.apply(n,Array.from(a.querySelectorAll("[aria-live]"))),Ri(n,a,r,"aria-hidden")):function(){return null}};function ki(e){const t=`${e}CollectionProvider`,[r,n]=Xo(t),[a,s]=r(t,{collectionRef:{current:null},itemMap:new Map,listeners:new Set}),c=x=>{const{scope:b,children:w}=x,C=i.useRef(null),v=i.useRef(new Map).current,m=i.useRef(new Set).current;return o.jsx(a,{scope:b,itemMap:v,collectionRef:C,listeners:m,children:w})};c.displayName=t;const l=`${e}CollectionSlot`,d=i.forwardRef((x,b)=>{const{scope:w,children:C}=x,v=s(l,w),m=re(b,v.collectionRef);return o.jsx(It,{ref:m,children:C})});d.displayName=l;const p=`${e}CollectionItemSlot`,f="data-radix-collection-item",h=i.forwardRef((x,b)=>{const{scope:w,children:C,...v}=x,m=i.useRef(null),y=re(b,m),j=s(p,w);return i.useEffect(()=>{const S=Array.from(j.itemMap.values());return j.itemMap.set(m,{ref:m,...v}),j.listeners.forEach(R=>R(Array.from(j.itemMap.values()),S)),()=>{const R=Array.from(j.itemMap.values());j.itemMap.delete(m),j.listeners.forEach(I=>I(Array.from(j.itemMap.values()),R))}}),o.jsx(It,{[f]:"",ref:y,children:C})});h.displayName=p;function u(x){const b=s(`${e}CollectionConsumer`,x),w=i.useCallback(()=>{const v=b.collectionRef.current;if(!v)return[];const m=Array.from(v.querySelectorAll(`[${f}]`));return Array.from(b.itemMap.values()).sort((S,R)=>m.indexOf(S.ref.current)-m.indexOf(R.ref.current))},[b.collectionRef,b.itemMap]),C=i.useCallback(v=>(b.listeners.add(v),()=>b.listeners.delete(v)),[b.listeners]);return{getItems:w,subscribe:C}}return[{Provider:c,Slot:d,ItemSlot:h},u,n]}const St=new Map;function Ii(e,t){const r=e+(t?Object.entries(t).sort((a,s)=>a[0]<s[0]?-1:1).join():"");if(St.has(r))return St.get(r);const n=new Intl.Collator(e,t);return St.set(r,n),n}function Yt(e,t){const r=Ii(e,{usage:"search",...t});return{startsWith(n,a){return a.length===0?!0:(n=n.normalize("NFC"),a=a.normalize("NFC"),r.compare(n.slice(0,a.length),a)===0)},endsWith(n,a){return a.length===0?!0:(n=n.normalize("NFC"),a=a.normalize("NFC"),r.compare(n.slice(-a.length),a)===0)},contains(n,a){if(a.length===0)return!0;n=n.normalize("NFC"),a=a.normalize("NFC");let s=0;const c=a.length;for(;s+c<=n.length;s++){const l=n.slice(s,s+c);if(r.compare(a,l)===0)return!0}return!1}}}const Ti=e=>{const t=i.useRef();return i.useEffect(()=>{t.current=e}),t.current},Mi=[" ","Enter","ArrowUp","ArrowDown"],Ai=["Enter"],Di=e=>!!(e.length===1&&e.match(/\S| /)),Cr="Combobox",[ze,Xe]=ki(Cr),[Fi,je]=_o(Cr),Ei=({children:e})=>o.jsx(rr,{children:o.jsx(ze.Provider,{scope:void 0,children:e})}),Li=e=>typeof e=="string"?e==="none"?{type:e,filter:void 0}:{type:e,filter:"startsWith"}:e,Pi=e=>{const{allowCustomValue:t=!1,autocomplete:r="none",children:n,open:a,defaultOpen:s,onOpenChange:c,value:l,defaultValue:d,onValueChange:p,disabled:f,required:h=!1,locale:u="en-EN",onTextValueChange:x,textValue:b,defaultTextValue:w,filterValue:C,defaultFilterValue:v,onFilterValueChange:m,isPrintableCharacter:y=Di}=e,[j,S]=i.useState(null),[R,I]=i.useState(null),[O,z]=i.useState(null),[N,$]=i.useState(null),[L=!1,A]=Ne({prop:a,defaultProp:s,onChange:c}),[E,G]=Ne({prop:l,defaultProp:d,onChange:p}),[H,Z]=Ne({prop:b,defaultProp:t&&!w?l:w,onChange:x}),[X,Q]=Ne({prop:C,defaultProp:v,onChange:m}),ee=Le(),U=i.useCallback((B,te)=>{const ae=te.map(P=>P.ref.current),[de,...M]=ae,[W]=M.slice(-1),Y=N??te.find(P=>P.value===E)?.ref.current;for(const P of B){if(P===Y)return;if(P?.scrollIntoView({block:"nearest"}),P===de&&R&&(R.scrollTop=0),P===W&&R&&(R.scrollTop=R.scrollHeight),$(P),r==="both"){const V=te.find(q=>q.ref.current===P);V&&Z(V.textValue)}if(P!==Y)return}},[r,Z,R,N,E]),ne=Li(r);return i.useEffect(()=>{r!=="both"&&$(null)},[H,r]),i.useEffect(()=>{if(O&&j)return vr([O,j])},[O,j]),o.jsx(Ei,{children:o.jsx(Fi,{allowCustomValue:t,autocomplete:ne,required:h,trigger:j,onTriggerChange:S,contentId:ee,value:E,onValueChange:G,open:L,onOpenChange:A,disabled:f,locale:u,focusFirst:U,textValue:H,onTextValueChange:Z,onViewportChange:I,onContentChange:z,visuallyFocussedItem:N,filterValue:X,onFilterValueChange:Q,onVisuallyFocussedItemChange:$,isPrintableCharacter:y,children:n})})},yr="ComboboxTrigger",jr=i.forwardRef((e,t)=>{const{...r}=e,n=je(yr),a=()=>{n.disabled||n.onOpenChange(!0)};return o.jsx(er,{asChild:!0,children:o.jsx(Zt,{asChild:!0,trapped:n.open,onMountAutoFocus:s=>{s.preventDefault()},onUnmountAutoFocus:s=>{n.trigger?.focus({preventScroll:!0}),document.getSelection()?.empty(),s.preventDefault()},children:o.jsx("div",{ref:t,"data-disabled":n.disabled?"":void 0,...r,onClick:J(r.onClick,s=>{if(n.disabled){s.preventDefault();return}n.trigger?.focus()}),onPointerDown:J(r.onPointerDown,s=>{if(n.disabled){s.preventDefault();return}const c=s.target;c.hasPointerCapture(s.pointerId)&&c.releasePointerCapture(s.pointerId),(c.closest("button")??c.closest("div"))===s.currentTarget&&s.button===0&&s.ctrlKey===!1&&(a(),n.trigger?.focus())})})})})});jr.displayName=yr;const Sr="ComboboxInput",Rr=i.forwardRef((e,t)=>{const r=je(Sr),n=i.useRef(null),{getItems:a}=Xe(void 0),{startsWith:s}=Yt(r.locale,{sensitivity:"base"}),c=r.disabled,l=re(n,t,r.onTriggerChange),d=()=>{c||r.onOpenChange(!0)},p=Ti(r.filterValue);return pe(()=>{const f=setTimeout(()=>{if(r.textValue===""||r.textValue===void 0||r.filterValue===""||r.filterValue===void 0)return;const h=a().find(x=>x.type==="option"&&s(x.textValue,r.textValue)),u=Ji(p??"",r.filterValue);h&&!r.visuallyFocussedItem&&u===r.filterValue.length&&n.current?.setSelectionRange(r.filterValue.length,r.textValue.length)});return()=>clearTimeout(f)},[r.textValue,r.filterValue,s,r.visuallyFocussedItem,a,p]),o.jsx("input",{type:"text",role:"combobox","aria-controls":r.contentId,"aria-expanded":r.open,"aria-required":r.required,"aria-autocomplete":r.autocomplete.type,"data-state":r.open?"open":"closed","aria-disabled":c,"aria-activedescendant":r.visuallyFocussedItem?.id,disabled:c,"data-disabled":c?"":void 0,"data-placeholder":r.textValue===void 0?"":void 0,value:r.textValue??"",...e,ref:l,onKeyDown:J(e.onKeyDown,f=>{if(["ArrowUp","ArrowDown","Home","End"].includes(f.key))r.open||d(),setTimeout(()=>{let u=a().filter(x=>!x.disabled&&x.isVisible).map(x=>x.ref.current);if(["ArrowUp","End"].includes(f.key)&&(u=u.slice().reverse()),["ArrowUp","ArrowDown"].includes(f.key)){const x=r.visuallyFocussedItem??a().find(b=>b.value===r.value)?.ref.current;if(x){let b=u.indexOf(x);b===u.length-1&&(b=-1),u=u.slice(b+1)}}if(["ArrowDown"].includes(f.key)&&r.autocomplete.type==="both"&&u.length>1){const[x,...b]=u,w=a().find(C=>C.ref.current===x).textValue;r.textValue===w&&(u=b)}r.focusFirst(u,a())}),f.preventDefault();else if(["Tab"].includes(f.key)&&r.open)f.preventDefault();else if(["Escape"].includes(f.key))r.open?r.onOpenChange(!1):(r.onValueChange(void 0),r.onTextValueChange("")),f.preventDefault();else if(Ai.includes(f.key)){if(r.visuallyFocussedItem){const h=a().find(u=>u.ref.current===r.visuallyFocussedItem);h&&(r.onValueChange(h.value),r.onTextValueChange(h.textValue),r.autocomplete.type==="both"&&r.onFilterValueChange(h.textValue),h.ref.current?.click())}else{const h=a().find(u=>u.type==="option"&&!u.disabled&&u.textValue===r.textValue);h&&(r.onValueChange(h.value),r.onTextValueChange(h.textValue),r.autocomplete.type==="both"&&r.onFilterValueChange(h.textValue),h.ref.current?.click())}r.onOpenChange(!1),f.preventDefault()}else r.onVisuallyFocussedItemChange(null)}),onChange:J(e.onChange,f=>{r.onTextValueChange(f.currentTarget.value),r.autocomplete.type==="both"&&r.onFilterValueChange(f.currentTarget.value)}),onKeyUp:J(e.onKeyUp,f=>{if(!r.open&&(r.isPrintableCharacter(f.key)||["Backspace"].includes(f.key))&&d(),setTimeout(()=>{if(r.autocomplete.type==="both"&&r.isPrintableCharacter(f.key)&&r.filterValue!==void 0){const h=r.filterValue,u=a().find(x=>s(x.textValue,h));u&&r.onTextValueChange(u.textValue)}}),r.autocomplete.type==="none"&&r.isPrintableCharacter(f.key)){const h=r.textValue??"",u=a().find(x=>s(x.textValue,h));u&&(r.onVisuallyFocussedItemChange(u.ref.current),u.ref.current?.scrollIntoView())}}),onBlur:J(e.onBlur,()=>{if(r.open)return;r.onVisuallyFocussedItemChange(null);const[f]=a().filter(u=>u.textValue===r.textValue&&u.type==="option");if(f){r.onValueChange(f.value),r.autocomplete.type==="both"&&r.onFilterValueChange(f.textValue);return}if(r.allowCustomValue){r.onValueChange(r.textValue),r.autocomplete.type==="both"&&r.onFilterValueChange(r.textValue);return}const[h]=a().filter(u=>u.value===r.value&&u.type==="option");h&&r.textValue!==""?(r.onTextValueChange(h.textValue),r.autocomplete.type==="both"&&r.onFilterValueChange(h.textValue)):(r.onValueChange(void 0),r.onTextValueChange(""))})})});Rr.displayName="ComboboxTextInput";const kr=i.forwardRef((e,t)=>{const{children:r,...n}=e,a=je(Sr),s=a.disabled,c=()=>{s||(a.onOpenChange(!0),a.trigger?.focus())};return o.jsx(oe.button,{"aria-hidden":!0,type:"button","aria-disabled":s,"aria-controls":a.contentId,"aria-expanded":a.open,disabled:s,"data-disabled":s?"":void 0,...n,tabIndex:-1,ref:t,onClick:J(n.onClick,()=>{a.trigger?.focus()}),onPointerDown:J(n.onPointerDown,l=>{l.button===0&&l.ctrlKey===!1&&(c(),l.preventDefault())}),onKeyDown:J(n.onKeyDown,l=>{Mi.includes(l.key)&&(c(),l.preventDefault())}),children:r||"▼"})});kr.displayName="ComboboxIcon";const Ni="ComboboxPortal",Ir=e=>o.jsx(tr,{asChild:!0,...e});Ir.displayName=Ni;const Jt="ComboboxContent",Tr=i.forwardRef((e,t)=>{const r=je(Jt),{getItems:n}=Xe(void 0),[a,s]=i.useState();if(pe(()=>{s(new DocumentFragment)},[]),pe(()=>{r.open&&r.autocomplete.type==="none"&&setTimeout(()=>{n().find(l=>l.value===r.value)?.ref.current?.scrollIntoView({block:"nearest"})})},[n,r.autocomplete,r.value,r.open]),!r.open){const c=a;return c?$e.createPortal(o.jsx(ze.Slot,{scope:void 0,children:o.jsx("div",{children:e.children})}),c):null}return o.jsx(Mr,{...e,ref:t})});Tr.displayName=Jt;const zi=10,Mr=i.forwardRef((e,t)=>{const{onEscapeKeyDown:r,onPointerDownOutside:n,...a}=e,s=je(Jt),c=re(t,d=>s.onContentChange(d)),{onOpenChange:l}=s;return Gt(),i.useEffect(()=>{const d=()=>{l(!1)};return window.addEventListener("blur",d),window.addEventListener("resize",d),()=>{window.removeEventListener("blur",d),window.removeEventListener("resize",d)}},[l]),o.jsx(Ht,{allowPinchZoom:!0,children:o.jsx(nr,{asChild:!0,onEscapeKeyDown:r,onPointerDownOutside:n,onFocusOutside:d=>{d.preventDefault()},onDismiss:()=>{s.onOpenChange(!1),s.trigger?.focus({preventScroll:!0})},children:o.jsx(Ar,{role:"listbox",id:s.contentId,"data-state":s.open?"open":"closed",onContextMenu:d=>d.preventDefault(),...a,ref:c,style:{display:"flex",flexDirection:"column",outline:"none",...a.style}})})})});Mr.displayName="ComboboxContentImpl";const Ar=i.forwardRef((e,t)=>{const{align:r="start",collisionPadding:n=zi,...a}=e;return o.jsx(ar,{...a,ref:t,align:r,collisionPadding:n,style:{boxSizing:"border-box",...a.style,"--radix-combobox-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-combobox-content-available-width":"var(--radix-popper-available-width)","--radix-combobox-content-available-height":"var(--radix-popper-available-height)","--radix-combobox-trigger-width":"var(--radix-popper-anchor-width)","--radix-combobox-trigger-height":"var(--radix-popper-anchor-height)"}})});Ar.displayName="ComboboxPopperPosition";const Dr="ComboboxViewport",Fr=i.forwardRef((e,t)=>{const r=je(Dr),n=re(t,r.onViewportChange);return o.jsxs(o.Fragment,{children:[o.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-combobox-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-combobox-viewport]::-webkit-scrollbar{display:none}"}}),o.jsx(ze.Slot,{scope:void 0,children:o.jsx(oe.div,{"data-radix-combobox-viewport":"",role:"presentation",...e,ref:n,style:{position:"relative",flex:1,overflow:"auto",...e.style}})})]})});Fr.displayName=Dr;const ft="ComboboxItem",[Lo,Kt]=_o(ft),Xt=i.forwardRef((e,t)=>{const{value:r,disabled:n=!1,textValue:a,...s}=e,[c,l]=i.useState();pe(()=>{l(new DocumentFragment)},[]);const{onTextValueChange:d,textValue:p,...f}=je(ft),h=Le(),[u,x]=i.useState(a??""),b=f.value===r,{startsWith:w,contains:C}=Yt(f.locale,{sensitivity:"base"}),v=i.useCallback(m=>{x(y=>y||(m?.textContent??"").trim())},[]);return i.useEffect(()=>{b&&p===void 0&&u!==""&&d(u)},[u,b,p,d]),f.autocomplete.type==="both"&&u&&f.filterValue&&!w(u,f.filterValue)||f.autocomplete.type==="list"&&f.autocomplete.filter==="startsWith"&&u&&p&&!w(u,p)||f.autocomplete.type==="list"&&f.autocomplete.filter==="contains"&&u&&p&&!C(u,p)?c?$e.createPortal(o.jsx(Lo,{textId:h,onTextValueChange:v,isSelected:b,textValue:u,children:o.jsx(ze.ItemSlot,{scope:void 0,value:r,textValue:u,disabled:n,type:"option",isVisible:!1,children:o.jsx(Dt,{ref:t,value:r,disabled:n,...s})})}),c):null:o.jsx(Lo,{textId:h,onTextValueChange:v,isSelected:b,textValue:u,children:o.jsx(ze.ItemSlot,{scope:void 0,value:r,textValue:u,disabled:n,type:"option",isVisible:!0,children:o.jsx(Dt,{ref:t,value:r,disabled:n,...s})})})});Xt.displayName=ft;const Er="ComboboxItemImpl",Dt=i.forwardRef((e,t)=>{const{value:r,disabled:n=!1,...a}=e,s=i.useRef(null),c=re(t,s),{getItems:l}=Xe(void 0),{onTextValueChange:d,visuallyFocussedItem:p,...f}=je(ft),{isSelected:h,textValue:u,textId:x}=Kt(Er),b=()=>{n||(f.onValueChange(r),d(u),f.onOpenChange(!1),f.autocomplete.type==="both"&&f.onFilterValueChange(u),f.trigger?.focus({preventScroll:!0}))},w=i.useMemo(()=>p===l().find(v=>v.ref.current===s.current)?.ref.current,[l,p]),C=Le();return o.jsx(oe.div,{role:"option","aria-labelledby":x,"data-highlighted":w?"":void 0,"aria-selected":h&&w,"data-state":h?"checked":"unchecked","aria-disabled":n||void 0,"data-disabled":n?"":void 0,tabIndex:n?void 0:-1,...a,id:C,ref:c,onPointerUp:J(a.onPointerUp,b)})});Dt.displayName=Er;const Lr="ComboboxItemText",Pr=i.forwardRef((e,t)=>{const{className:r,style:n,...a}=e,s=Kt(Lr),c=re(t,s.onTextValueChange);return o.jsx(oe.span,{id:s.textId,...a,ref:c})});Pr.displayName=Lr;const Nr="ComboboxItemIndicator",zr=i.forwardRef((e,t)=>{const{isSelected:r}=Kt(Nr);return r?o.jsx(oe.span,{"aria-hidden":!0,...e,ref:t}):null});zr.displayName=Nr;const _t="ComboboxNoValueFound",Or=i.forwardRef((e,t)=>{const{textValue:r="",filterValue:n="",locale:a,autocomplete:s}=je(_t),[c,l]=i.useState([]),{subscribe:d}=Xe(void 0),{startsWith:p,contains:f}=Yt(a,{sensitivity:"base"});return i.useEffect(()=>{const h=d(u=>{l(u)});return()=>{h()}},[d]),s.type==="none"&&c.length>0||s.type==="list"&&s.filter==="startsWith"&&c.some(h=>p(h.textValue,r))||s.type==="both"&&c.some(h=>p(h.textValue,n))||s.type==="list"&&s.filter==="contains"&&c.some(h=>f(h.textValue,r))?null:o.jsx(oe.div,{...e,ref:t})});Or.displayName=_t;const Br=i.forwardRef((e,t)=>{const{disabled:r=!1,...n}=e,a=je(_t),{textValue:s,visuallyFocussedItem:c}=a,{getItems:l,subscribe:d}=Xe(void 0),p=i.useRef(null),[f,h]=i.useState(!1),u=re(t,p),x=i.useMemo(()=>c===l().find(C=>C.ref.current===p.current)?.ref.current,[l,c]),b=Le(),w=()=>{!r&&s&&(a.onValueChange(s),a.onTextValueChange(s),a.onOpenChange(!1),a.autocomplete.type==="both"&&a.onFilterValueChange(s),a.trigger?.focus({preventScroll:!0}))};return pe(()=>{const C=d(v=>{h(!v.some(m=>m.textValue===s&&m.type!=="create"))});return l().length===0&&h(!0),()=>{C()}},[s,d,l]),!s||!f?null:o.jsx(ze.ItemSlot,{scope:void 0,value:s??"",textValue:s??"",disabled:r,isVisible:!0,type:"create",children:o.jsx(oe.div,{role:"option",tabIndex:r?void 0:-1,"aria-disabled":r||void 0,"data-disabled":r?"":void 0,"data-highlighted":x?"":void 0,...n,id:b,ref:u,onPointerUp:J(n.onPointerUp,w)})})});Br.displayName="ComboboxCreateItem";const Oi=Pi,Bi=jr,Vi=Rr,$i=kr,Wi=Ir,Zi=Tr,Gi=Fr,Hi=Xt,Ui=Pr,qi=zr,Qi=Or,Yi=Br;function Ji(e,t){const r=Math.min(e.length,t.length);for(let n=0;n<r;n++)if(e[n]!==t[n])return n;return r}const xe=Object.freeze(Object.defineProperty({__proto__:null,ComboboxItem:Xt,Content:Zi,CreateItem:Yi,Icon:$i,Item:Hi,ItemIndicator:qi,ItemText:Ui,NoValueFound:Qi,Portal:Wi,Root:Oi,TextInput:Vi,Trigger:Bi,Viewport:Gi},Symbol.toStringTag,{value:"Module"}));function eo(e){const t=i.useRef(e);return i.useEffect(()=>{t.current=e}),i.useMemo(()=>(...r)=>t.current?.(...r),[])}const Ki=[" ","Enter","ArrowUp","ArrowDown"],Xi=[" ","Enter"],_e="Select",[ht,et,_i]=Hn(_e),[Ze,es]=Xo(_e,[_i,or]),pt=or(),[ts,Ie]=Ze(_e),[os,rs]=Ze(_e),to=e=>{const{__scopeSelect:t,children:r,open:n,defaultOpen:a,onOpenChange:s,value:c,defaultValue:l,onValueChange:d,dir:p,disabled:f,required:h,multi:u=!1}=e,x=pt(t),[b,w]=i.useState(null),[C,v]=i.useState(null),[m,y]=i.useState(!1),j=qn(p),[S=!1,R]=Ne({prop:n,defaultProp:a,onChange:s}),[I,O]=Ne({prop:c,defaultProp:l,onChange(L){d&&(Array.isArray(L),d(L))}}),z=i.useRef(null),[N,$]=i.useState(new Set);return o.jsx(rr,{...x,children:o.jsx(ts,{required:h,scope:t,trigger:b,onTriggerChange:w,valueNode:C,onValueNodeChange:v,valueNodeHasChildren:m,onValueNodeHasChildrenChange:y,contentId:Le(),value:I,onValueChange:O,open:S,onOpenChange:R,dir:j,triggerPointerDownPosRef:z,disabled:f,multi:u,children:o.jsx(ht.Provider,{scope:t,children:o.jsx(os,{scope:e.__scopeSelect,onNativeOptionAdd:i.useCallback(L=>{$(A=>new Set(A).add(L))},[]),onNativeOptionRemove:i.useCallback(L=>{$(A=>{const E=new Set(A);return E.delete(L),E})},[]),children:r})})})})};to.displayName=_e;const Vr="SelectTrigger",oo=i.forwardRef((e,t)=>{const{__scopeSelect:r,...n}=e,a=pt(r),s=Ie(Vr,r),c=s.disabled,l=re(t,s.onTriggerChange),d=et(r),[p,f,h]=Yr(x=>{const b=d().filter(v=>!v.disabled),w=b.find(v=>v.value===s.value),C=Jr(b,x,w);if(C!==void 0&&!Array.isArray(C.value)){const v=s.multi?[C.value]:C.value;s.onValueChange(v)}}),u=()=>{c||(s.onOpenChange(!0),h())};return o.jsx(er,{asChild:!0,...a,children:o.jsx(oe.div,{role:"combobox","aria-controls":s.contentId,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed","data-disabled":c?"":void 0,"data-placeholder":s.value===void 0?"":void 0,tabIndex:c?void 0:0,...n,ref:l,onClick:J(n.onClick,x=>{x.currentTarget.focus()}),onPointerDown:J(n.onPointerDown,x=>{const b=x.target;b.hasPointerCapture(x.pointerId)&&b.releasePointerCapture(x.pointerId),(b.closest("button")??b.closest("div"))===x.currentTarget&&x.button===0&&x.ctrlKey===!1&&(u(),s.triggerPointerDownPosRef.current={x:Math.round(x.pageX),y:Math.round(x.pageY)},x.preventDefault())}),onKeyDown:J(n.onKeyDown,x=>{const b=p.current!=="",w=x.ctrlKey||x.altKey||x.metaKey,C=x.target;(C.closest("button")??C.closest("div"))===x.currentTarget&&(!w&&x.key.length===1&&f(x.key),!(b&&x.key===" ")&&Ki.includes(x.key)&&(u(),x.preventDefault()))})})})});oo.displayName=Vr;const $r="SelectValue",ro=i.forwardRef((e,t)=>{const{__scopeSelect:r,children:n,placeholder:a,...s}=e,c=Ie($r,r),{onValueNodeHasChildrenChange:l}=c,d=n!==void 0,p=re(t,c.onValueNodeChange),[f,h]=i.useState([]),u=et(r);pe(()=>{l(d)},[l,d]),i.useLayoutEffect(()=>{if(Array.isArray(c.value)&&f.length!==c.value.length){const b=setTimeout(()=>{const w=u().filter(C=>Array.isArray(C.value)?!1:c.value?.includes(C.value));h(w)});return()=>{clearTimeout(b)}}},[c.value,u,f]);let x;if((c.value===void 0||c.value.length===0)&&a!==void 0)x=o.jsx("span",{children:a});else if(typeof n=="function")if(Array.isArray(c.value)){const b=c.value.map(w=>{const C=f.find(v=>v.value===w);return C?n({value:w,textValue:C?.textValue}):null});x=b.every(w=>w===null)?a:b}else x=n(c.value);else x=n;return o.jsx(oe.span,{...s,ref:p,children:x||null})});ro.displayName=$r;const ns="SelectIcon",no=i.forwardRef((e,t)=>{const{__scopeSelect:r,children:n,...a}=e;return o.jsx(oe.span,{"aria-hidden":!0,...a,ref:t,children:n||"▼"})});no.displayName=ns;const as="SelectPortal",ao=e=>o.jsx(tr,{asChild:!0,...e});ao.displayName=as;const Ee="SelectContent",io=i.forwardRef((e,t)=>{const r=Ie(Ee,e.__scopeSelect),[n,a]=i.useState();if(pe(()=>{a(new DocumentFragment)},[]),!r.open){const s=n;return s?$e.createPortal(o.jsx(Wr,{scope:e.__scopeSelect,children:o.jsx(ht.Slot,{scope:e.__scopeSelect,children:o.jsx("div",{children:e.children})})}),s):null}return o.jsx(Zr,{...e,ref:t})});io.displayName=Ee;const Re=10,[Wr,Te]=Ze(Ee),is="SelectContentImpl",Zr=i.forwardRef((e,t)=>{const{__scopeSelect:r,position:n="item-aligned",onCloseAutoFocus:a,onEscapeKeyDown:s,onPointerDownOutside:c,side:l,sideOffset:d,align:p,alignOffset:f,arrowPadding:h,collisionBoundary:u,collisionPadding:x,sticky:b,hideWhenDetached:w,avoidCollisions:C,...v}=e,m=Ie(Ee,r),[y,j]=i.useState(null),[S,R]=i.useState(null),I=re(t,M=>j(M)),[O,z]=i.useState(null),[N,$]=i.useState(null),L=et(r),[A,E]=i.useState(!1),G=i.useRef(!1);i.useEffect(()=>{if(y)return vr(y)},[y]),Gt();const H=i.useCallback(M=>{const[W,...Y]=L().map(q=>q.ref.current),[P]=Y.slice(-1),V=document.activeElement;for(const q of M)if(q===V||(q?.scrollIntoView({block:"nearest"}),q===W&&S&&(S.scrollTop=0),q===P&&S&&(S.scrollTop=S.scrollHeight),q?.focus(),document.activeElement!==V))return},[L,S]),Z=i.useCallback(()=>H([O,y]),[H,O,y]);i.useEffect(()=>{A&&Z()},[A,Z]);const{onOpenChange:X,triggerPointerDownPosRef:Q}=m;i.useEffect(()=>{if(y){let M={x:0,y:0};const W=P=>{M={x:Math.abs(Math.round(P.pageX)-(Q.current?.x??0)),y:Math.abs(Math.round(P.pageY)-(Q.current?.y??0))}},Y=P=>{M.x<=10&&M.y<=10?P.preventDefault():y.contains(P.target)||X(!1),document.removeEventListener("pointermove",W),Q.current=null};return Q.current!==null&&(document.addEventListener("pointermove",W),document.addEventListener("pointerup",Y,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",W),document.removeEventListener("pointerup",Y,{capture:!0})}}},[y,X,Q]),i.useEffect(()=>{const M=()=>X(!1);return window.addEventListener("blur",M),window.addEventListener("resize",M),()=>{window.removeEventListener("blur",M),window.removeEventListener("resize",M)}},[X]);const[ee,U]=Yr(M=>{const W=L().filter(V=>!V.disabled),Y=W.find(V=>V.ref.current===document.activeElement),P=Jr(W,M,Y);P&&setTimeout(()=>P.ref.current.focus())}),ne=i.useCallback((M,W,Y)=>{const P=!G.current&&!Y;(m.value!==void 0&&m.value===W||P)&&(z(M),P&&(G.current=!0))},[m.value]),B=i.useCallback(()=>y?.focus(),[y]),te=i.useCallback((M,W,Y)=>{const P=!G.current&&!Y;(m.value!==void 0&&(Array.isArray(W)?W.every(q=>m.value?.includes(q)):m.value===W)||P)&&$(M)},[m.value]),ae=n==="popper"?Ft:Gr,de=ae===Ft?{side:l,sideOffset:d,align:p,alignOffset:f,arrowPadding:h,collisionBoundary:u,collisionPadding:x,sticky:b,hideWhenDetached:w,avoidCollisions:C}:{};return o.jsx(Wr,{scope:r,content:y,viewport:S,onViewportChange:R,itemRefCallback:ne,selectedItem:O,onItemLeave:B,itemTextRefCallback:te,focusSelectedItem:Z,selectedItemText:N,position:n,isPositioned:A,searchRef:ee,children:o.jsx(Ht,{as:It,allowPinchZoom:!0,children:o.jsx(Zt,{asChild:!0,trapped:m.open,onMountAutoFocus:M=>{M.preventDefault()},onUnmountAutoFocus:J(a,M=>{m.trigger?.focus({preventScroll:!0}),document.getSelection()?.empty(),M.preventDefault()}),children:o.jsx(nr,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:M=>M.preventDefault(),onDismiss:()=>m.onOpenChange(!1),children:o.jsx(ae,{role:"listbox",id:m.contentId,"data-state":m.open?"open":"closed","aria-multiselectable":m.multi?"true":void 0,dir:m.dir,onContextMenu:M=>M.preventDefault(),...v,...de,onPlaced:()=>E(!0),ref:I,style:{display:"flex",flexDirection:"column",outline:"none",...v.style},onKeyDown:J(v.onKeyDown,M=>{const W=M.ctrlKey||M.altKey||M.metaKey;if(M.key==="Tab"&&M.preventDefault(),!W&&M.key.length===1&&U(M.key),["ArrowUp","ArrowDown","Home","End"].includes(M.key)){let P=L().filter(V=>!V.disabled).map(V=>V.ref.current);if(["ArrowUp","End"].includes(M.key)&&(P=P.slice().reverse()),["ArrowUp","ArrowDown"].includes(M.key)){const V=M.target,q=P.indexOf(V);P=P.slice(q+1)}setTimeout(()=>H(P)),M.preventDefault()}})})})})})})});Zr.displayName=is;const ss="SelectItemAlignedPosition",Gr=i.forwardRef((e,t)=>{const{__scopeSelect:r,onPlaced:n,...a}=e,s=Ie(Ee,r),c=Te(Ee,r),[l,d]=i.useState(null),[p,f]=i.useState(null),h=re(t,I=>f(I)),u=et(r),x=i.useRef(!1),b=i.useRef(!0),{viewport:w,selectedItem:C,selectedItemText:v,focusSelectedItem:m}=c,y=i.useCallback(()=>{if(s.trigger&&s.valueNode&&l&&p&&w&&C&&v){const I=s.trigger.getBoundingClientRect(),O=p.getBoundingClientRect(),z=s.valueNode.getBoundingClientRect(),N=v.getBoundingClientRect();if(s.dir!=="rtl"){const V=N.left-O.left,q=z.left-V,fe=I.left-q,le=I.width+fe,K=Math.max(le,O.width),ve=window.innerWidth-Re,Se=Fo(q,[Re,ve-K]);l.style.minWidth=`${le}px`,l.style.left=`${Se}px`}else{const V=O.right-N.right,q=window.innerWidth-z.right-V,fe=window.innerWidth-I.right-q,le=I.width+fe,K=Math.max(le,O.width),ve=window.innerWidth-Re,Se=Fo(q,[Re,ve-K]);l.style.minWidth=`${le}px`,l.style.right=`${Se}px`}const $=u(),L=window.innerHeight-Re*2,A=w.scrollHeight,E=window.getComputedStyle(p),G=parseInt(E.borderTopWidth,10),H=parseInt(E.paddingTop,10),Z=parseInt(E.borderBottomWidth,10),X=parseInt(E.paddingBottom,10),Q=G+H+A+X+Z,ee=Math.min(C.offsetHeight*5,Q),U=window.getComputedStyle(w),ne=parseInt(U.paddingTop,10),B=parseInt(U.paddingBottom,10),te=I.top+I.height/2-Re,ae=L-te,de=C.offsetHeight/2,M=C.offsetTop+de,W=G+H+M,Y=Q-W;if(W<=te){const V=C===$[$.length-1].ref.current;l.style.bottom="0px";const q=p.clientHeight-w.offsetTop-w.offsetHeight,fe=Math.max(ae,de+(V?B:0)+q+Z),le=W+fe;l.style.height=`${le}px`}else{const V=C===$[0].ref.current;l.style.top="0px";const fe=Math.max(te,G+w.offsetTop+(V?ne:0)+de)+Y;l.style.height=`${fe}px`,w.scrollTop=W-te+w.offsetTop}l.style.margin=`${Re}px 0`,l.style.minHeight=`${ee}px`,l.style.maxHeight=`${L}px`,n?.(),requestAnimationFrame(()=>x.current=!0)}},[u,s.trigger,s.valueNode,l,p,w,C,v,s.dir,n]);pe(()=>y(),[y]);const[j,S]=i.useState();pe(()=>{p&&S(window.getComputedStyle(p).zIndex)},[p]);const R=i.useCallback(I=>{I&&b.current===!0&&(y(),m?.(),b.current=!1)},[y,m]);return o.jsx(cs,{scope:r,contentWrapper:l,shouldExpandOnScrollRef:x,onScrollButtonChange:R,children:o.jsx("div",{ref:d,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:j},children:o.jsx(oe.div,{...a,ref:h,style:{boxSizing:"border-box",maxHeight:"100%",...a.style}})})})});Gr.displayName=ss;const ls="SelectPopperPosition",Ft=i.forwardRef((e,t)=>{const{__scopeSelect:r,align:n="start",collisionPadding:a=Re,...s}=e,c=pt(r);return o.jsx(ar,{...c,...s,ref:t,align:n,collisionPadding:a,style:{boxSizing:"border-box",...s.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Ft.displayName=ls;const[cs,so]=Ze(Ee,{}),Et="SelectViewport",lo=i.forwardRef((e,t)=>{const{__scopeSelect:r,...n}=e,a=Te(Et,r),s=so(Et,r),c=re(t,a.onViewportChange),l=i.useRef(0);return o.jsxs(o.Fragment,{children:[o.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),o.jsx(ht.Slot,{scope:r,children:o.jsx(oe.div,{"data-radix-select-viewport":"",role:"presentation",...n,ref:c,style:{position:"relative",flex:1,overflow:"auto",...n.style},onScroll:J(n.onScroll,d=>{const p=d.currentTarget,{contentWrapper:f,shouldExpandOnScrollRef:h}=s;if(h?.current&&f){const u=Math.abs(l.current-p.scrollTop);if(u>0){const x=window.innerHeight-Re*2,b=parseFloat(f.style.minHeight),w=parseFloat(f.style.height),C=Math.max(b,w);if(C<x){const v=C+u,m=Math.min(x,v),y=v-m;f.style.height=`${m}px`,f.style.bottom==="0px"&&(p.scrollTop=y>0?y:0,f.style.justifyContent="flex-end")}}}l.current=p.scrollTop})})})]})});lo.displayName=Et;const Hr="SelectGroup",[ds,us]=Ze(Hr),co=i.forwardRef((e,t)=>{const{__scopeSelect:r,...n}=e,a=Le();return o.jsx(ds,{scope:r,id:a,children:o.jsx(oe.div,{role:"group","aria-labelledby":a,...n,ref:t})})});co.displayName=Hr;const Ur="SelectLabel",uo=i.forwardRef((e,t)=>{const{__scopeSelect:r,...n}=e,a=us(Ur,r);return o.jsx(oe.div,{id:a.id,...n,ref:t})});uo.displayName=Ur;const dt="SelectItem",[fs,qr]=Ze(dt),fo=i.forwardRef((e,t)=>{const{__scopeSelect:r,value:n,disabled:a=!1,textValue:s,...c}=e,l=Ie(dt,r),d=Te(dt,r),p=typeof n=="string"?Array.isArray(l.value)?l.value.includes(n):l.value===n:n.every(m=>l.value?.includes(m)),f=Array.isArray(l.value)&&Array.isArray(n)&&n.some(m=>l.value?.includes(m)),[h,u]=i.useState(s??""),[x,b]=i.useState(!1),w=re(t,m=>d.itemRefCallback?.(m,n,a)),C=Le(),v=()=>{if(!a){let m=l.multi&&typeof n=="string"?[n]:n;f&&!p?l.onValueChange(m):Array.isArray(l.value)&&(m=Kr(n,l.value)),l.onValueChange(m),l.multi||l.onOpenChange(!1)}};if(!l.multi&&Array.isArray(n))throw new Error("You can only pass an array of values in multi selects");return o.jsx(fs,{scope:r,value:n,disabled:a,textId:C,isSelected:p,isIntermediate:f,onItemTextChange:i.useCallback(m=>{u(y=>y||(m?.textContent??"").trim())},[]),children:o.jsx(ht.ItemSlot,{scope:r,value:n,disabled:a,textValue:h,children:o.jsx(oe.div,{role:"option","aria-labelledby":C,"data-highlighted":x?"":void 0,"aria-selected":l.multi?void 0:p&&x,"aria-checked":l.multi?p:void 0,"data-state":p?"checked":"unchecked","aria-disabled":a||void 0,"data-disabled":a?"":void 0,tabIndex:a?void 0:-1,...c,ref:w,onFocus:J(c.onFocus,()=>b(!0)),onBlur:J(c.onBlur,()=>b(!1)),onPointerUp:J(c.onPointerUp,v),onPointerMove:J(c.onPointerMove,m=>{a?d.onItemLeave?.():m.currentTarget.focus({preventScroll:!0})}),onPointerLeave:J(c.onPointerLeave,m=>{m.currentTarget===document.activeElement&&d.onItemLeave?.()}),onKeyDown:J(c.onKeyDown,m=>{d.searchRef?.current!==""&&m.key===" "||(Xi.includes(m.key)&&v(),m.key===" "&&m.preventDefault())})})})})});fo.displayName=dt;const Qe="SelectItemText",ho=i.forwardRef((e,t)=>{const{__scopeSelect:r,className:n,style:a,...s}=e,c=Ie(Qe,r),l=Te(Qe,r),d=qr(Qe,r),p=rs(Qe,r),[f,h]=i.useState(null),u=re(t,v=>h(v),d.onItemTextChange,v=>l.itemTextRefCallback?.(v,d.value,d.disabled)),x=f?.textContent,b=i.useMemo(()=>o.jsx("option",{value:d.value,disabled:d.disabled,children:x},Array.isArray(d.value)?d.value.join(";"):d.value),[d.disabled,d.value,x]),{onNativeOptionAdd:w,onNativeOptionRemove:C}=p;return pe(()=>(w(b),()=>C(b)),[w,C,b]),o.jsxs(o.Fragment,{children:[o.jsx(oe.span,{id:d.textId,...s,ref:u}),d.isSelected&&c.valueNode&&!c.valueNodeHasChildren?$e.createPortal(s.children,c.valueNode):null]})});ho.displayName=Qe;const Qr="SelectItemIndicator",po=i.forwardRef((e,t)=>{const{__scopeSelect:r,children:n,...a}=e,s=qr(Qr,r);return typeof n=="function"?o.jsx(oe.span,{"aria-hidden":!0,...a,ref:t,children:n({isSelected:s.isSelected,isIntermediate:s.isIntermediate})}):s.isSelected?o.jsx(oe.span,{"aria-hidden":!0,...a,ref:t,children:n}):null});po.displayName=Qr;const Lt="SelectScrollUpButton",mo=i.forwardRef((e,t)=>{const r=Te(Lt,e.__scopeSelect),n=so(Lt,e.__scopeSelect),[a,s]=i.useState(!1),c=re(t,n.onScrollButtonChange);return pe(()=>{if(r.viewport&&r.isPositioned){const l=r.viewport,d=()=>{const p=l.scrollTop>0;s(p)};return d(),l.addEventListener("scroll",d),()=>l.removeEventListener("scroll",d)}},[r.viewport,r.isPositioned]),a?o.jsx(xo,{...e,ref:c,onAutoScroll:()=>{const{viewport:l,selectedItem:d}=r;l&&d&&(l.scrollTop-=d.offsetHeight)}}):null});mo.displayName=Lt;const Pt="SelectScrollDownButton",go=i.forwardRef((e,t)=>{const r=Te(Pt,e.__scopeSelect),n=so(Pt,e.__scopeSelect),[a,s]=i.useState(!1),c=re(t,n.onScrollButtonChange);return pe(()=>{if(r.viewport&&r.isPositioned){const l=r.viewport,d=()=>{const p=l.scrollHeight-l.clientHeight,f=Math.ceil(l.scrollTop)<p;s(f)};return d(),l.addEventListener("scroll",d),()=>l.removeEventListener("scroll",d)}},[r.viewport,r.isPositioned]),a?o.jsx(xo,{...e,ref:c,onAutoScroll:()=>{const{viewport:l,selectedItem:d}=r;l&&d&&(l.scrollTop+=d.offsetHeight)}}):null});go.displayName=Pt;const xo=i.forwardRef((e,t)=>{const{__scopeSelect:r,onAutoScroll:n,...a}=e,s=Te("SelectScrollButton",r),c=i.useRef(null),l=et(r),d=i.useCallback(()=>{c.current!==null&&(window.clearInterval(c.current),c.current=null)},[]);return i.useEffect(()=>()=>d(),[d]),pe(()=>{l().find(f=>f.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[l]),o.jsx(oe.div,{"aria-hidden":!0,...a,ref:t,style:{flexShrink:0,...a.style},onPointerMove:J(a.onPointerMove,()=>{s.onItemLeave?.(),c.current===null&&(c.current=window.setInterval(n,50))}),onPointerLeave:J(a.onPointerLeave,()=>{d()})})});xo.displayName="SelectScrollButtonImpl";const hs="SelectSeparator",bo=i.forwardRef((e,t)=>{const{__scopeSelect:r,...n}=e;return o.jsx(oe.div,{"aria-hidden":!0,...n,ref:t})});bo.displayName=hs;const Nt="SelectArrow",wo=i.forwardRef((e,t)=>{const{__scopeSelect:r,...n}=e,a=pt(r),s=Ie(Nt,r),c=Te(Nt,r);return s.open&&c.position==="popper"?o.jsx(Un,{...a,...n,ref:t}):null});wo.displayName=Nt;const ps="BubbleSelect",ms=i.forwardRef((e,t)=>{const{value:r,...n}=e,a=i.useRef(null),s=re(t,a),c=Qn(r),l=Ie(ps,void 0);i.useEffect(()=>{const p=a.current,f=window.HTMLSelectElement.prototype,u=Object.getOwnPropertyDescriptor(f,"value").set;if(c!==r&&u){const x=new Event("change",{bubbles:!0});u.call(p,r),p.dispatchEvent(x)}},[c,r]);let d=r;return l.multi&&!Array.isArray(r)&&(d=[]),o.jsx(Yn,{asChild:!0,children:o.jsx("select",{...n,multiple:l.multi?!0:void 0,ref:s,defaultValue:d})})});ms.displayName="BubbleSelect";function Yr(e){const t=eo(e),r=i.useRef(""),n=i.useRef(0),a=i.useCallback(c=>{const l=r.current+c;t(l),function d(p){r.current=p,window.clearTimeout(n.current),p!==""&&(n.current=window.setTimeout(()=>d(""),1e3))}(l)},[t]),s=i.useCallback(()=>{r.current="",window.clearTimeout(n.current)},[]);return i.useEffect(()=>()=>window.clearTimeout(n.current),[]),[r,a,s]}function Jr(e,t,r){const a=t.length>1&&Array.from(t).every(p=>p===t[0])?t[0]:t,s=r?e.indexOf(r):-1;let c=gs(e,Math.max(s,0));a.length===1&&(c=c.filter(p=>p!==r));const d=c.find(p=>p.textValue.toLowerCase().startsWith(a.toLowerCase()));return d!==r?d:void 0}function gs(e,t){return e.map((r,n)=>e[(t+n)%e.length])}const Kr=(e,t=[])=>{if(Array.isArray(e))return e.reduce((n,a)=>Kr(a,n),t);const r=t.indexOf(e);return r===-1?[...t,e]:[...t.slice(0,r),...t.slice(r+1)]},xs=to,bs=oo,ws=ro,vs=no,Cs=ao,ys=io,js=lo,Ss=co,Rs=uo,ks=fo,Is=ho,Ts=po,Ms=mo,As=go,Ds=bo,Fs=wo,be=Object.freeze(Object.defineProperty({__proto__:null,Arrow:Fs,Content:ys,Group:Ss,Icon:vs,Item:ks,ItemIndicator:Ts,ItemText:Is,Label:Rs,Portal:Cs,Root:xs,ScrollDownButton:As,ScrollUpButton:Ms,Select:to,SelectArrow:wo,SelectContent:io,SelectGroup:co,SelectIcon:no,SelectItem:fo,SelectItemIndicator:po,SelectItemText:ho,SelectLabel:uo,SelectPortal:ao,SelectScrollDownButton:go,SelectScrollUpButton:mo,SelectSeparator:bo,SelectTrigger:oo,SelectValue:ro,SelectViewport:lo,Separator:Ds,Trigger:bs,Value:ws,Viewport:js,createSelectScope:es},Symbol.toStringTag,{value:"Module"}));function De(e,t,{checkForDefaultPrevented:r=!0}={}){return function(a){if(e?.(a),r===!1||!a.defaultPrevented)return t?.(a)}}const tt=(e,t)=>{const r=i.createContext(t),n=s=>{const{children:c,...l}=s,d=i.useMemo(()=>l,Object.values(l));return o.jsx(r.Provider,{value:d,children:c})};function a(s){const c=i.useContext(r);if(c)return c;if(t!==void 0)return t;throw new Error(`\`${s}\` must be used within \`${e}\``)}return n.displayName=`${e}Provider`,[n,a]};function Es(e,t){return typeof e=="string"?!1:t in e}function ct(e,t,r){return e&&t&&Es(e,t)?e[t]:r}const Po={padding:["padding-block-start","padding-inline-end","padding-block-end","padding-inline-start"],paddingTop:"padding-block-start",paddingRight:"padding-inline-end",paddingBottom:"padding-block-end",paddingLeft:"padding-inline-start",margin:["margin-block-start","margin-inline-end","margin-block-end","margin-inline-start"],marginLeft:"margin-inline-start",marginRight:"margin-inline-end",marginTop:"margin-block-start",marginBottom:"margin-block-end",borderRadius:"border-radius",borderStyle:"border-style",borderWidth:"border-width",borderColor:"border-color",fontSize:"font-size",fontWeight:"font-weight",lineHeight:"line-height",zIndex:"z-index",boxShadow:"box-shadow",pointerEvents:"pointer-events",textAlign:"text-align",textTransform:"text-transform",textDecoration:"text-decoration",flexGrow:"flex-grow",flexShrink:"flex-shrink",flexBasis:"flex-basis",minWidth:"min-width",maxWidth:"max-width",minHeight:"min-height",maxHeight:"max-height",flexDirection:"flex-direction",flexWrap:"flex-wrap",justifyContent:"justify-content",alignItems:"align-items"},Ls=e=>{const[t,r,n,a]=e,s=r??t;return[t,s,n??t,a??s]};function Ps(e,t){switch(e){case"gap":case"padding":case"margin":case"paddingTop":case"paddingLeft":case"paddingRight":case"paddingBottom":case"marginTop":case"marginLeft":case"marginRight":case"marginBottom":case"left":case"right":case"top":case"bottom":case"width":case"maxWidth":case"minWidth":case"height":case"maxHeight":case"minHeight":case"borderRadius":case"borderWidth":return t.spaces;case"color":case"background":case"borderColor":return t.colors;case"fontSize":return t.fontSizes;case"fontWeight":return t.fontWeights;case"lineHeight":return t.lineHeights;case"zIndex":return t.zIndices;case"boxShadow":return t.shadows;default:return null}}const mt=(e,t)=>{const r=Object.entries(e).reduce((n,a)=>{const[s,c]=a,l=Ps(s,t),d=Object.prototype.hasOwnProperty.call(Po,s)?Po[s]:s;return d&&(c||c===0)&&(typeof c=="object"&&!Array.isArray(c)?Object.entries(c).forEach(([p,f])=>{n[p]={...n[p],...No(d,f,l)}}):n.initial={...n.initial,...No(d,c,l)}),n},{initial:{},small:{},medium:{},large:{}});return Object.entries(r).reduce((n,[a,s])=>{if(s&&Object.keys(s).length>0){const c=Object.entries(s).reduce((l,[d,p])=>(l.push(`${d}: ${p};`),l),[]).join(`
`);a==="initial"?n.push(c):n.push(`${t.breakpoints[a]}{ ${c} }`)}return n},[]).join(`
`)},No=(e,t,r)=>{if(Array.isArray(e)&&Array.isArray(t)){const n=Ls(t);return e.reduce((a,s,c)=>(a[s]=ct(r,n[c],n[c]),a),{})}else return Array.isArray(e)&&!Array.isArray(t)?e.reduce((n,a)=>(n[a]=ct(r,t,t),n),{}):!Array.isArray(e)&&!Array.isArray(t)?{[e]:ct(r,t,t)}:(console.warn("You've passed an array of values to a property that does not support it. Please check the property and value you're passing."),{})},ce=i.forwardRef,k=ce((e,t)=>{const{background:r,basis:n,borderColor:a,color:s,flex:c,fontSize:l,grow:d,hasRadius:p,padding:f,paddingBottom:h,paddingLeft:u,paddingRight:x,paddingTop:b,margin:w,marginLeft:C,marginBottom:v,marginRight:m,marginTop:y,shadow:j,shrink:S,lineHeight:R,fontWeight:I,width:O,minWidth:z,maxWidth:N,height:$,minHeight:L,maxHeight:A,top:E,left:G,bottom:H,right:Z,borderRadius:X,borderStyle:Q,borderWidth:ee,tag:U,pointerEvents:ne,display:B,position:te,zIndex:ae,overflow:de,cursor:M,transition:W,transform:Y,animation:P,textAlign:V,textTransform:q,...fe}=e,le=U||"div",K={$background:r,$basis:n,$borderColor:a,$color:s,$flex:c,$fontSize:l,$grow:d,$hasRadius:p,$padding:f,$paddingBottom:h,$paddingLeft:u,$paddingRight:x,$paddingTop:b,$margin:w,$marginLeft:C,$marginBottom:v,$marginRight:m,$marginTop:y,$shadow:j,$shrink:S,$lineHeight:R,$fontWeight:I,$width:O,$minWidth:z,$maxWidth:N,$height:$,$minHeight:L,$maxHeight:A,$top:E,$left:G,$bottom:H,$right:Z,$borderRadius:X,$borderStyle:Q,$borderWidth:ee,$pointerEvents:ne,$display:B,$position:te,$zIndex:ae,$overflow:de,$cursor:M,$transition:W,$transform:Y,$animation:P,$textAlign:V,$textTransform:q};return o.jsx(Ns,{as:le,ref:t,...K,...fe})}),Ns=g.div`
  ${({theme:e,...t})=>mt({padding:t.$padding,paddingTop:t.$paddingTop,paddingBottom:t.$paddingBottom,paddingLeft:t.$paddingLeft,paddingRight:t.$paddingRight,margin:t.$margin,marginTop:t.$marginTop,marginBottom:t.$marginBottom,marginLeft:t.$marginLeft,marginRight:t.$marginRight,top:t.$top,left:t.$left,bottom:t.$bottom,right:t.$right,width:t.$width,minWidth:t.$minWidth,maxWidth:t.$maxWidth,height:t.$height,minHeight:t.$minHeight,maxHeight:t.$maxHeight,color:t.$color,background:t.$background,fontSize:t.$fontSize,fontWeight:t.$fontWeight,lineHeight:t.$lineHeight,borderRadius:t.$hasRadius?e.borderRadius:t.$borderRadius,borderStyle:t.$borderColor&&!t.$borderStyle?"solid":t.$borderStyle,borderWidth:t.$borderColor&&!t.$borderWidth?"1px":t.$borderWidth,borderColor:t.$borderColor,zIndex:t.$zIndex,boxShadow:t.$shadow,display:t.$display,pointerEvents:t.$pointerEvents,cursor:t.$cursor,textAlign:t.$textAlign,textTransform:t.$textTransform,transition:t.$transition,transform:t.$transform,animation:t.$animation,position:t.$position,overflow:t.$overflow,flex:t.$flex,flexShrink:t.$shrink,flexGrow:t.$grow,flexBasis:t.$basis},e)};
`,T=ce((e,t)=>{const{className:r,alignItems:n,direction:a,inline:s,gap:c,justifyContent:l,wrap:d,...p}=e,f={$alignItems:n,$direction:a,$gap:c,$justifyContent:l,$wrap:d,$inline:s};return o.jsx(zs,{className:r,ref:t,...f,...p})}),zs=g(k)`
  ${({theme:e,$display:t="flex",$alignItems:r="center",$direction:n="row",...a})=>mt({gap:a.$gap,alignItems:r,justifyContent:a.$justifyContent,flexWrap:a.$wrap,flexDirection:n,display:a.$inline?"inline-flex":t},e)};
`,Os="alpha",Bs="beta",Vs="delta",$s="epsilon",zo="omega",Ws="pi",Zs="sigma",Xr=F`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Gs=({$variant:e=zo,theme:t})=>{switch(e){case Os:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[5]};
        line-height: ${t.lineHeights[2]};
      `;case Bs:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[4]};
        line-height: ${t.lineHeights[1]};
      `;case Vs:return`
        font-weight: ${t.fontWeights.semiBold};
        font-size: ${t.fontSizes[3]};
        line-height: ${t.lineHeights[2]};
      `;case $s:return`
        font-size: ${t.fontSizes[3]};
        line-height: ${t.lineHeights[6]};
      `;case zo:return`
        font-size: ${t.fontSizes[2]};
        line-height: ${t.lineHeights[4]};
      `;case Ws:return`
        font-size: ${t.fontSizes[1]};
        line-height: ${t.lineHeights[3]};
      `;case Zs:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[0]};
        line-height: ${t.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${t.fontSizes[2]};
      `}},D=ce((e,t)=>{const{ellipsis:r,textColor:n="currentcolor",textDecoration:a,textTransform:s,variant:c,lineHeight:l,fontWeight:d,fontSize:p,...f}=e,h={$ellipsis:r,$textColor:n,$textDecoration:a,$textTransform:s,$variant:c,$lineHeight:l,$fontWeight:d,$fontSize:p};return o.jsx(Hs,{ref:t,tag:"span",...h,...f})}),Hs=g(k)`
  ${Gs}
  ${({$ellipsis:e})=>e?Xr:""}

  ${({theme:e,...t})=>mt({color:t.$textColor,textDecoration:t.$textDecoration,textTransform:t.$textTransform,lineHeight:t.$lineHeight,fontWeight:t.$fontWeight,fontSize:t.$fontSize},e)}
`,[Us,vo]=tt("Accordion");i.forwardRef(({children:e,size:t="S",...r},n)=>o.jsx(qs,{ref:n,$size:t,collapsible:!0,...r,type:"single",children:o.jsx(Us,{size:t,children:e})}));const qs=g(Jn)`
  background-color: ${e=>e.theme.colors.neutral0};

  ${e=>e.$size==="S"?F`
        border-radius: ${t=>t.theme.borderRadius};
        border: solid 1px ${t=>t.theme.colors.neutral200};
      `:F``}
`;i.forwardRef((e,t)=>{const{size:r}=vo("Item");return o.jsx(Qs,{$size:r,"data-size":r,ref:t,...e})});const Qs=g(Kn)`
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
`;i.forwardRef(({caretPosition:e="left",description:t,icon:r,iconProps:n,children:a,...s},c)=>{const{size:l}=vo("Trigger");return o.jsxs(en,{$caretPosition:e,$size:l,ref:c,...s,children:[e==="left"?o.jsx(ut,{$size:l,children:o.jsx(Fe,{width:l==="S"?"1.2rem":"1.6rem",height:l==="S"?"1.2rem":"1.6rem"})}):null,o.jsxs(T,{tag:"span",gap:2,children:[r&&l==="S"?o.jsx(_r,{children:o.jsx(r,{...n})}):null,o.jsxs(T,{alignItems:"flex-start",direction:"column",tag:"span",ref:c,children:[o.jsx(D,{fontWeight:l==="S"?"bold":void 0,ellipsis:!0,variant:l==="M"?"delta":void 0,textAlign:"left",children:a}),t&&l==="M"?o.jsx(D,{textAlign:"left",children:t}):null]})]}),e==="right"?o.jsx(ut,{$size:l,children:o.jsx(Fe,{width:l==="S"?"1.2rem":"1.6rem",height:l==="S"?"1.2rem":"1.6rem"})}):null]})});const _r=g(k)`
  color: ${e=>e.theme.colors.neutral500};
  display: flex;

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.color};
  }
`,ut=g(T).attrs(e=>({...e,tag:"span"}))`
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
`,en=g(Xn)`
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
`;i.forwardRef((e,t)=>{const{size:r}=vo("Trigger");return o.jsx(tn,{$size:r,...e,ref:t})});const tn=g(T).attrs(e=>({...e,tag:"span"}))`
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
`;i.forwardRef(({variant:e="primary",...t},r)=>o.jsx(Ys,{$variant:e,ref:r,...t}));const Ys=g(_n)`
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

      & > ${en} {
        color: ${e=>e.theme.colors.primary600};

        & ${_r} {
          color: ${e=>e.theme.colors.primary600};
        }

        & ${ut} {
          background-color: ${e=>e.theme.colors.primary200};
        }
      }

      & > ${tn} > button {
        color: ${e=>e.theme.colors.primary600};
      }
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.backgroundColor};
  }
`;i.forwardRef((e,t)=>o.jsx(Xs,{ref:t,...e}));const Js=ie`
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
`,Ks=ie`
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
`,Xs=g(ea)`
  overflow: hidden;

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation: ${Js} ${e=>e.theme.motion.timings[320]}
        ${e=>e.theme.motion.easings.authenticMotion};
    }

    &[data-state='closed'] {
      animation: ${Ks} ${e=>e.theme.motion.timings[320]}
        ${e=>e.theme.motion.easings.authenticMotion};
    }
  }
`,gt=F`
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
`,Ge=({tag:e,...t})=>{const r=e||"span";return o.jsx(_s,{...t,as:r})},_s=g.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`,Je=({children:e,label:t})=>{const r=i.Children.only(e);return o.jsxs(o.Fragment,{children:[i.cloneElement(r,{"aria-hidden":"true",focusable:"false"}),o.jsx(Ge,{children:t})]})};Je.displayName="AccessibleIcon";const zt=({theme:e,$variant:t})=>t==="danger"?e.colors.danger700:t==="success"?e.colors.success700:t==="warning"?e.colors.warning700:e.colors.primary700;g(k)`
  ${gt};
`;g(T)`
  svg {
    height: 100%;
    width: 100%;

    path {
      fill: ${zt};
    }
  }
`;g(k)`
  & a > span {
    color: ${zt};
  }

  svg path {
    fill: ${zt};
  }
`;function ye({prop:e,defaultProp:t,onChange:r=()=>{}}){const[n,a]=on({defaultProp:t,onChange:r}),s=e!==void 0,c=s?e:n,l=br(r),d=i.useCallback(p=>{if(s){const h=typeof p=="function"?p(e):p;h!==e&&l(h)}else a(p)},[s,e,a,l]);return[c,d]}function on({defaultProp:e,onChange:t}){const r=i.useState(e),[n]=r,a=i.useRef(n),s=br(t);return i.useEffect(()=>{a.current!==n&&(s(n),a.current=n)},[n,a,s]),r}const Oo={easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)"},Bo={120:"120ms"};`${Bo[120]}${Oo.easeOutQuad}`,`${Bo[120]}${Oo.easeOutQuad}`;const _={overlayFadeIn:ie`
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
  `},Ke=32,Vo=2;i.forwardRef(({onLoadingStatusChange:e,delayMs:t=600,src:r,alt:n,fallback:a,preview:s=!1,...c},l)=>{const[d,p]=ye({onChange:e}),[f,h]=i.useState(!1),u=s&&d==="loaded",x=b=>{u&&h(b)};return o.jsxs(lr,{onOpenChange:x,children:[o.jsx(cr,{asChild:!0,children:o.jsxs(Ot,{ref:l,...c,children:[u?o.jsx(el,{width:"100%",height:"100%",position:"absolute",background:"neutral0",zIndex:"overlay",style:{opacity:f?.4:0}}):null,o.jsx(tl,{src:r,alt:n,onLoadingStatusChange:p}),o.jsx(ta,{delayMs:t,children:o.jsx(D,{fontWeight:"bold",textTransform:"uppercase",children:a})})]})}),u?o.jsx(dr,{children:o.jsx(ol,{side:"top",sideOffset:4,children:o.jsx(rl,{src:r,alt:n})})}):null]})});const rn=F`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  overflow: hidden;
  border-radius: 50%;
`,nn=F`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`,Ot=g(oa)`
  position: relative;
  z-index: 0;
  ${rn}
  width: ${Ke/10}rem;
  height: ${Ke/10}rem;
  /* TODO: we should get the user email & hash it to turn it into a hex-value so different emails can consistently get a different background */
  background-color: ${e=>e.theme.colors.primary600};
  color: ${e=>e.theme.colors.neutral0};
`,el=g(k)`
  @media (prefers-reduced-motion: no-preference) {
    transition: opacity ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,tl=g(ra)`
  ${nn}
`,ol=g(ur)`
  ${rn}
  width: ${Ke*Vo/10}rem;
  height: ${Ke*Vo/10}rem;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${_.fadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,rl=g.img`
  ${nn}
`;i.forwardRef((e,t)=>o.jsx(nl,{...e,ref:t,tag:"div"}));const nl=g(T)`
  & > ${Ot} + ${Ot} {
    margin-left: -${Ke/10/2}rem;
  }
`,al=({active:e=!1,size:t="M",textColor:r="neutral600",backgroundColor:n="neutral150",children:a,minWidth:s=5,...c})=>{const l=t==="S"?1:2;return o.jsx(il,{inline:!0,alignItems:"center",justifyContent:"center",minWidth:s,paddingLeft:l,paddingRight:l,background:e?"primary200":n,$size:t,...c,children:o.jsx(D,{variant:"sigma",textColor:e?"primary600":r,lineHeight:"1rem",children:a})})},il=g(T)`
  border-radius: ${({theme:e,$size:t})=>t==="S"?"2px":e.borderRadius};
  ${({$size:e,theme:t})=>e==="S"?F`
        padding-block: 0.3rem;
        padding-inline ${t.spaces[1]}
      `:F`
      padding-block: 0.7rem;
      padding-inline ${t.spaces[2]}
    `};
`,ot=ce(({href:e,disabled:t=!1,isExternal:r=!1,...n},a)=>o.jsx(sl,{tag:"a",ref:a,target:r?"_blank":void 0,rel:r?"noreferrer noopener":void 0,href:e,tabIndex:t?-1:void 0,"aria-disabled":t,pointerEvents:t?"none":void 0,cursor:t?void 0:"pointer",...n})),sl=g(k)`
  text-decoration: none;

  &:visited {
    color: inherit;
  }
`,an=()=>o.jsx(k,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:o.jsx(D,{variant:"pi",textColor:"neutral500",children:"/"})});an.displayName="Divider";const ll=g(T)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  & > *:first-child {
    margin-left: ${({theme:e})=>`calc(-1*${e.spaces[2]})`};
  }
`,cl=i.forwardRef(({label:e,children:t,...r},n)=>{const a=i.Children.toArray(t);return o.jsx(k,{"aria-label":e,tag:"nav",...r,ref:n,children:o.jsx(ll,{tag:"ol",children:i.Children.map(a,(s,c)=>{const l=a.length>1&&c+1<a.length;return o.jsxs(T,{inline:!0,tag:"li",children:[s,l&&o.jsx(an,{})]})})})})});cl.displayName="Breadcrumbs";const dl=i.forwardRef(({children:e,isCurrent:t=!1,...r},n)=>o.jsx(k,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,ref:n,children:o.jsx(D,{variant:"pi",textColor:"neutral800",fontWeight:t?"bold":"regular","aria-current":t,...r,children:e})}));dl.displayName="Crumb";const ul=g(ot)`
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
`,fl=i.forwardRef(({children:e,...t},r)=>o.jsx(ul,{ref:r,...t,children:e}));fl.displayName="CrumbLink";const Oe=e=>e.replaceAll(":","");function hl(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function sn(...e){return t=>e.forEach(r=>hl(r,t))}function ue(...e){return i.useCallback(sn(...e),e)}const pl=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Be=pl()?i.useEffect:i.useLayoutEffect,ml=mi.useId||(()=>{});let gl=0;const we=e=>{const[t,r]=i.useState(ml());return Be(()=>{e||r(n=>n??String(gl++))},[e]),e?.toString()??(t||"")},rt=(e,t,{selectorToWatch:r,skipWhen:n=!1})=>{const a=eo(t);i.useEffect(()=>{if(n||!e.current)return;const s={root:e.current,rootMargin:"0px"},c=p=>{p.forEach(f=>{f.isIntersecting&&e.current&&e.current.scrollHeight>e.current.clientHeight&&a(f)})},l=new IntersectionObserver(c,s),d=e.current.querySelector(r);return d&&l.observe(d),()=>{l.disconnect()}},[n,a,r,e])},Co="success-light",yo="danger-light",xt="default",nt="tertiary",at="secondary",ln="danger",cn="success",bt="ghost",jo=[Co,yo],xl=[xt,nt,at,ln,cn,bt,...jo],bl=["XS","S","M","L"],ge=e=>e===Co||e===yo?`${e.substring(0,e.lastIndexOf("-"))}`:e===nt?"neutral":e===xt||e===at||xl.every(t=>t!==e)?"primary":`${e}`,dn=({theme:e})=>F`
    border: 1px solid ${e.colors.neutral200};
    background: ${e.colors.neutral150};
    color: ${e.colors.neutral600};
    cursor: default;
  `,un=({theme:e,$variant:t})=>[...jo,at].includes(t)?F`
      background-color: ${e.colors.neutral0};
    `:t===nt?F`
      background-color: ${e.colors.neutral100};
    `:t===bt?F`
      background-color: ${e.colors.neutral100};
    `:t===xt?F`
      border: 1px solid ${e.colors.buttonPrimary500};
      background: ${e.colors.buttonPrimary500};
    `:F`
    border: 1px solid ${e.colors[`${ge(t)}500`]};
    background: ${e.colors[`${ge(t)}500`]};
  `,fn=({theme:e,$variant:t})=>[...jo,at].includes(t)?F`
      background-color: ${e.colors.neutral0};
      border: 1px solid ${e.colors[`${ge(t)}600`]};
      color: ${e.colors[`${ge(t)}600`]};
    `:t===nt||t===bt?F`
      background-color: ${e.colors.neutral150};
    `:F`
    border: 1px solid ${e.colors[`${ge(t)}600`]};
    background: ${e.colors[`${ge(t)}600`]};
  `,hn=({theme:e,$variant:t})=>{switch(t){case yo:case Co:case at:return F`
        border: 1px solid ${e.colors[`${ge(t)}200`]};
        background: ${e.colors[`${ge(t)}100`]};
        color: ${e.colors[`${ge(t)}700`]};
      `;case nt:return F`
        border: 1px solid ${e.colors.neutral200};
        background: ${e.colors.neutral0};
        color: ${e.colors.neutral800};
      `;case bt:return F`
        border: 1px solid transparent;
        background: transparent;
        color: ${e.colors.neutral800};

        svg {
          fill: ${e.colors.neutral500};
        }
      `;case cn:case ln:return F`
        border: 1px solid ${e.colors[`${ge(t)}600`]};
        background: ${e.colors[`${ge(t)}600`]};
        color: ${e.colors.neutral0};
      `;default:return F`
        border: 1px solid ${e.colors.buttonPrimary600};
        background: ${e.colors.buttonPrimary600};
        color: ${e.colors.buttonNeutral0};
      `}},Bt=ce(({variant:e=xt,startIcon:t,endIcon:r,disabled:n=!1,children:a,onClick:s,size:c=bl[1],loading:l=!1,fullWidth:d=!1,...p},f)=>{const h=n||l,u=x=>{!h&&s&&s(x)};return o.jsxs(Cl,{ref:f,"aria-disabled":h,disabled:h,$size:c,$variant:e,tag:"button",onClick:u,hasRadius:!0,gap:2,inline:!0,alignItems:"center",justifyContent:"center",width:d?"100%":void 0,paddingLeft:4,paddingRight:4,cursor:"pointer",...p,children:[(t||l)&&o.jsx(T,{tag:"span","aria-hidden":!0,children:l?o.jsx(vl,{}):t}),o.jsx(D,{variant:c==="S"?"pi":void 0,fontWeight:"bold",children:a}),r&&o.jsx(T,{tag:"span","aria-hidden":!0,children:r})]})}),wl=ie`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,vl=g(sr)`
  animation: ${wl} 2s infinite linear;
  will-change: transform;
`,Cl=g(T)`
  height: ${({theme:e,$size:t})=>e.sizes.button[t]};
  text-decoration: none;
  ${hn}

  &:hover {
    ${un}
  }

  &:active {
    ${fn}
  }

  &[aria-disabled='true'] {
    ${dn}
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      ${e=>e.theme.transitions.backgroundColor},
      ${e=>e.theme.transitions.color},
      border-color ${e=>e.theme.motion.timings[200]} ${e=>e.theme.motion.easings.easeOutQuad};
  }
`,pn=i.forwardRef(({children:e,description:t,label:r,defaultOpen:n,open:a,onOpenChange:s,delayDuration:c=500,disableHoverableContent:l,...d},p)=>!r&&!t?e:o.jsxs(lr,{defaultOpen:n,open:a,onOpenChange:s,delayDuration:c,disableHoverableContent:l,children:[o.jsx(cr,{asChild:!0,children:e}),o.jsx(dr,{children:o.jsx(yl,{ref:p,sideOffset:8,...d,children:o.jsx(D,{variant:"pi",fontWeight:"bold",children:r||t})})})]})),yl=g(ur)`
  background-color: ${e=>e.theme.colors.neutral900};
  color: ${e=>e.theme.colors.neutral0};
  padding-inline: ${e=>e.theme.spaces[2]};
  padding-block: ${e=>e.theme.spaces[2]};
  border-radius: ${e=>e.theme.borderRadius};
  z-index: ${e=>e.theme.zIndices.tooltip};
  will-change: opacity;
  transform-origin: var(--radix-tooltip-content-transform-origin);

  @media (prefers-reduced-motion: no-preference) {
    animation: ${_.fadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,Vt=ce(({label:e,background:t,children:r,disabled:n=!1,onClick:a,size:s="S",variant:c="tertiary",withTooltip:l=!0,...d},p)=>{const f=u=>{!n&&a&&a(u)},h=o.jsx(Ye,{"aria-disabled":n,background:n?"neutral150":t,tag:"button",display:"inline-flex",justifyContent:"center",hasRadius:!0,cursor:"pointer",...d,ref:p,$size:s,onClick:f,$variant:c,children:o.jsx(Je,{label:e,children:r})});return l?o.jsx(pn,{label:e,children:h}):h}),Ye=g(T)`
  text-decoration: none;

  ${e=>{switch(e.$size){case"XS":return F`
          padding-block: 0.25rem;
          padding-inline: 0.25rem;
        `;case"S":return F`
          padding-block: 0.7rem;
          padding-inline: 0.7rem;
        `;case"M":return F`
          padding-block: 0.9rem;
          padding-inline: 0.9rem;
        `;case"L":return F`
          padding-block: 1.1rem;
          padding-inline: 1.1rem;
        `}}}
  ${hn}
  ${e=>e.$variant==="tertiary"?F`
          color: ${e.theme.colors.neutral500};
        `:""}

  &:hover {
    ${un}
    ${e=>e.$variant==="tertiary"?F`
            color: ${e.theme.colors.neutral600};
          `:""}
  }

  &:active {
    ${fn}
  }

  &[aria-disabled='true'] {
    ${dn}
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      ${e=>e.theme.transitions.backgroundColor},
      ${e=>e.theme.transitions.color},
      border-color ${e=>e.theme.motion.timings[200]} ${e=>e.theme.motion.easings.easeOutQuad};
  }
`;g(T)`
  & ${Ye}:first-child {
    border-radius: ${({theme:e})=>`${e.borderRadius} 0 0 ${e.borderRadius}`};
  }

  & ${Ye}:last-child {
    border-radius: ${({theme:e})=>`0 ${e.borderRadius} ${e.borderRadius} 0`};
  }

  & ${Ye} {
    border-radius: 0;

    & + ${Ye} {
      border-left: none;
    }
  }
`;const mn=ce(({children:e,href:t,disabled:r=!1,startIcon:n,endIcon:a,isExternal:s=!1,...c},l)=>o.jsxs(jl,{ref:l,href:t,disabled:r,isExternal:s,...c,children:[n,o.jsx(D,{textColor:r?"neutral600":"primary600",children:e}),a,t&&!a&&s&&o.jsx(ir,{})]})),jl=g(ot)`
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

  ${gt};
`,Sl=da,Rl=i.forwardRef(({label:e,endIcon:t=o.jsx(Fe,{width:"1.2rem",height:"1.2rem","aria-hidden":!0}),tag:r=Bt,icon:n,...a},s)=>{const c={...a,ref:s,type:"button"};return o.jsx(na,{asChild:!0,disabled:c.disabled,children:r===Vt?o.jsx(Vt,{label:e,variant:"tertiary",...c,children:n}):o.jsx(Bt,{endIcon:t,variant:"ghost",...c})})}),kl=i.forwardRef(({children:e,intersectionId:t,onCloseAutoFocus:r,popoverPlacement:n="bottom-start",...a},s)=>{const[c,l]=n.split("-");return o.jsx(fr,{children:o.jsx(Il,{align:l,side:c,loop:!0,onCloseAutoFocus:r,asChild:!0,children:o.jsxs(gn,{ref:s,direction:"column",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,marginTop:1,marginBottom:1,alignItems:"flex-start",position:"relative",overflow:"auto",...a,children:[e,o.jsx(k,{id:t,width:"100%",height:"1px"})]})})})}),gn=g(T)`
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`,Il=g(aa)`
  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${_.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${_.slideDownIn};
      }
    }
  }
`,xn=({theme:e})=>F`
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
`,Tl=g(T)`
  ${xn}
`;g(mn)`
  /* We include this here again because typically when people use OptionLink they provide an as prop which cancels the Box props */
  color: ${({theme:e,color:t})=>ct(e.colors,t,void 0)};
  text-decoration: none;

  &:hover {
    color: unset;
  }

  /* TODO: do we need this? */
  svg > path,
  &:focus-visible svg > path {
    fill: currentColor;
  }

  ${xn}
`;const Ml=g(k)`
  /* Negative horizontal margin to compensate Menu.Content's padding */
  margin: ${({theme:e})=>e.spaces[1]} -${({theme:e})=>e.spaces[1]};
  width: calc(100% + ${({theme:e})=>e.spaces[2]});
  /* Hide separator if there's nothing above in the menu */
  &:first-child {
    display: none;
  }
`;i.forwardRef((e,t)=>o.jsx(ia,{...e,asChild:!0,children:o.jsx(Ml,{height:"1px",shrink:0,background:"neutral150",ref:t})}));i.forwardRef((e,t)=>o.jsx(sa,{asChild:!0,children:o.jsx(Al,{ref:t,variant:"sigma",textColor:"neutral600",...e})}));const Al=g(D)`
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
`;i.forwardRef(({disabled:e=!1,...t},r)=>o.jsx(la,{asChild:!0,disabled:e,children:o.jsxs(Dl,{ref:r,color:"neutral800",tag:"button",type:"button",background:"transparent",borderStyle:"none",gap:5,...t,children:[o.jsx(D,{children:t.children}),o.jsx(Ut,{fill:"neutral500",height:"1.2rem",width:"1.2rem"})]})}));const Dl=g(Tl)`
  &[data-state='open'] {
    background-color: ${({theme:e})=>e.colors.primary100};
  }
`;i.forwardRef((e,t)=>o.jsx(fr,{children:o.jsx(ca,{sideOffset:8,asChild:!0,children:o.jsx(gn,{ref:t,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",overflow:"auto",...e})})}));const Fl=Sl,El=Rl,Ll=kl,Pl=i.forwardRef(({children:e,onOpen:t,onClose:r,popoverPlacement:n,onReachEnd:a,...s},c)=>{const l=i.useRef(null),d=ue(c,l),p=i.useRef(null),[f,h]=i.useState(!1),u=C=>{a&&a(C)},x=C=>{C&&typeof t=="function"?t():!C&&typeof r=="function"&&r(),h(C)},b=we(),w=`intersection-${Oe(b)}`;return rt(p,u,{selectorToWatch:`#${w}`,skipWhen:!f}),o.jsxs(Fl,{onOpenChange:x,children:[o.jsx(El,{ref:d,...s,children:s.label}),o.jsx(Ll,{ref:p,intersectionId:w,popoverPlacement:n,children:e})]})}),Nl=g(Pl)`
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  height: unset;

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral200};
  }
`,zl=i.forwardRef(({children:e,...t},r)=>o.jsx(Nl,{ref:r,endIcon:null,size:"S",...t,children:e}));zl.displayName="CrumbSimpleMenu";const bn=i.createContext({id:""}),Ol=()=>i.useContext(bn);i.forwardRef(({id:e,...t},r)=>{const n=we(e),a=i.useMemo(()=>({id:n}),[n]);return o.jsx(bn.Provider,{value:a,children:o.jsx(k,{ref:r,id:e,tabIndex:0,hasRadius:!0,background:"neutral0",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",shadow:"tableShadow",tag:"article","aria-labelledby":`${n}-title`,...t})})});const Bl=i.forwardRef(({position:e,...t},r)=>o.jsx(Vl,{ref:r,$position:e,...t,direction:"row",gap:2})),Vl=g(T)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  right: ${({$position:e,theme:t})=>{if(e==="end")return t.spaces[3]}};
  left: ${({$position:e,theme:t})=>{if(e==="start")return t.spaces[3]}};
`;g.img`
  // inline flows is based on typography and displays an extra white space below the image
  // switch to block is required in order to make the img stick the bottom of the container
  // addition infos: https://stackoverflow.com/questions/5804256/image-inside-div-has-extra-space-below-the-image
  margin: 0;
  padding: 0;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;g.div`
  display: flex;
  justify-content: center;
  height: ${({$size:e})=>e==="S"?"8.8rem":"16.4rem"};
  width: 100%;
  background: repeating-conic-gradient(${({theme:e})=>e.colors.neutral100} 0% 25%, transparent 0% 50%) 50% / 20px
    20px;
  border-top-left-radius: ${({theme:e})=>e.borderRadius};
  border-top-right-radius: ${({theme:e})=>e.borderRadius};
`;g.div`
  margin-left: auto;
  flex-shrink: 0;
`;g(al)`
  margin-left: ${({theme:e})=>e.spaces[1]};
`;const $l=({fill:e,...t})=>{const{colors:r}=gi();return o.jsx(k,{tag:"svg",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:e?r[e]:void 0,...t,children:o.jsx("path",{d:"M29.0613 10.0613L13.0613 26.0613C12.9219 26.2011 12.7563 26.3121 12.574 26.3878C12.3917 26.4635 12.1962 26.5024 11.9988 26.5024C11.8013 26.5024 11.6059 26.4635 11.4235 26.3878C11.2412 26.3121 11.0756 26.2011 10.9363 26.0613L3.93626 19.0613C3.79673 18.9217 3.68605 18.7561 3.61053 18.5738C3.53502 18.3915 3.49615 18.1961 3.49615 17.9988C3.49615 17.8014 3.53502 17.606 3.61053 17.4237C3.68605 17.2414 3.79673 17.0758 3.93626 16.9363C4.07579 16.7967 4.24143 16.686 4.42374 16.6105C4.60604 16.535 4.80143 16.4962 4.99876 16.4962C5.19608 16.4962 5.39147 16.535 5.57378 16.6105C5.75608 16.686 5.92173 16.7967 6.06126 16.9363L12 22.875L26.9388 7.93876C27.2205 7.65697 27.6027 7.49866 28.0013 7.49866C28.3998 7.49866 28.782 7.65697 29.0638 7.93876C29.3455 8.22055 29.5039 8.60274 29.5039 9.00126C29.5039 9.39977 29.3455 9.78197 29.0638 10.0638L29.0613 10.0613Z"})})},$o=i.forwardRef(({defaultChecked:e,checked:t,onCheckedChange:r,...n},a)=>{const s=i.useRef(null),[c,l]=ye({defaultProp:e,prop:t,onChange:r}),d=ue(s,a);return o.jsx(Wl,{ref:d,checked:c,onCheckedChange:l,...n,children:o.jsxs(Zl,{forceMount:!0,children:[c===!0?o.jsx($l,{width:"1.6rem",fill:"neutral0"}):null,c==="indeterminate"?o.jsx(ua,{fill:"neutral0"}):null]})})}),Wl=g(fa)`
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
`,Zl=g(ha)`
  display: inline-flex;
  pointer-events: auto !important;
  width: 100%;
  height: 100%;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`,So=i.forwardRef(({children:e,...t},r)=>{const n=we(t.id);return e?o.jsxs(T,{gap:2,children:[o.jsx($o,{id:n,...t}),o.jsx(D,{tag:"label",textColor:"neutral800",htmlFor:n,children:e})]}):o.jsx($o,{ref:r,...t})});i.forwardRef((e,t)=>{const{id:r}=Ol();return o.jsx(Bl,{position:"start",children:o.jsx(So,{"aria-labelledby":`${r}-title`,...e,ref:t})})});g(k)`
  word-break: break-all;
`;g(T)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`;const se={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",END:"End",HOME:"Home",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown"},Gl=g(k)`
  grid-template-columns: auto 1fr auto;
  grid-template-areas: 'startAction slides endAction';
`,Hl=g(T)`
  grid-area: slides;
`,Wo=g(k)`
  grid-area: ${({$area:e})=>e};

  &:focus svg path,
  &:hover svg path {
    fill: ${({theme:e})=>e.colors.neutral900};
  }
`,Ul=i.forwardRef(({actions:e,children:t,label:r,nextLabel:n,onNext:a,onPrevious:s,previousLabel:c,secondaryLabel:l,selectedSlide:d,...p},f)=>{const h=i.useRef(null),u=i.useRef(null),x=i.Children.map(t,(w,C)=>i.cloneElement(w,{selected:C===d})),b=w=>{switch(w.key){case se.RIGHT:{w.preventDefault(),u?.current&&u.current.focus(),a&&a();break}case se.LEFT:{w.preventDefault(),h?.current&&h.current.focus(),s&&s();break}}};return o.jsx(k,{ref:f,...p,onKeyDown:b,children:o.jsxs(k,{padding:2,borderColor:"neutral200",hasRadius:!0,background:"neutral100",children:[o.jsxs(Gl,{tag:"section","aria-roledescription":"carousel","aria-label":r,display:"grid",position:"relative",children:[x&&x.length>1&&o.jsxs(o.Fragment,{children:[o.jsx(Wo,{tag:"button",onClick:s,$area:"startAction",ref:h,type:"button",children:o.jsx(Je,{label:c,children:o.jsx(hr,{width:"1.6rem",height:"1.6rem",fill:"neutral600"})})}),o.jsx(Wo,{tag:"button",onClick:a,$area:"endAction",ref:u,type:"button",children:o.jsx(Je,{label:n,children:o.jsx(Ut,{width:"1.6rem",height:"1.6rem",fill:"neutral600"})})})]}),o.jsx(Hl,{"aria-live":"polite",paddingLeft:2,paddingRight:2,width:"100%",overflow:"hidden",children:x}),e]}),l&&o.jsx(k,{paddingTop:2,paddingLeft:4,paddingRight:4,children:o.jsx(pn,{label:l,children:o.jsx(T,{justifyContent:"center",children:o.jsx(D,{variant:"pi",textColor:"neutral600",ellipsis:!0,children:l})})})})]})})}),Me=(e="&")=>({theme:t,$hasError:r=!1})=>F`
    outline: none;
    box-shadow: none;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${e}:focus-within {
      border: 1px solid ${r?t.colors.danger600:t.colors.primary600};
      box-shadow: ${r?t.colors.danger600:t.colors.primary600} 0px 0px 0px 2px;
    }
  `,[ql,me]=tt("Field",{}),Ve=i.forwardRef(({children:e,name:t,error:r=!1,hint:n,id:a,required:s=!1,...c},l)=>{const d=we(a),[p,f]=i.useState();return o.jsx(ql,{name:t,id:d,error:r,hint:n,required:s,labelNode:p,setLabelNode:f,children:o.jsx(T,{direction:"column",alignItems:"stretch",gap:1,ref:l,...c,children:e})})}),wn=i.forwardRef(({children:e,action:t,...r},n)=>{const{id:a,required:s,setLabelNode:c}=me("Label"),l=ue(n,c);return e?o.jsxs(Ql,{ref:l,variant:"pi",textColor:"neutral800",fontWeight:"bold",...r,id:`${a}-label`,htmlFor:a,tag:"label",ellipsis:!0,children:[e,s&&o.jsx(D,{"aria-hidden":!0,lineHeight:"1em",textColor:"danger600",children:"*"}),t&&o.jsx(Yl,{marginLeft:1,children:t})]}):null}),Ql=g(D)`
  display: flex;
`,Yl=g(T)`
  line-height: 0;
  color: ${({theme:e})=>e.colors.neutral500};
`,Ro=i.forwardRef(({endAction:e,startAction:t,disabled:r=!1,onChange:n,hasError:a,required:s,className:c,size:l="M",...d},p)=>{const{id:f,error:h,hint:u,name:x,required:b}=me("Input");let w;h?w=`${f}-error`:u&&(w=`${f}-hint`);const C=!!h,v=i.useRef(null),m=i.useRef(null),y=ue(m,p),j=S=>{!r&&n&&n(S)};return i.useLayoutEffect(()=>{if(v.current&&m.current){const S=v.current.offsetWidth,R=m.current;if(R){const I=S+8+16;R.style.paddingRight=`${I}px`}}},[e]),o.jsxs(Xl,{gap:2,justifyContent:"space-between",$hasError:C||a,$disabled:r,$size:l,$hasLeftAction:!!t,$hasRightAction:!!e,className:c,children:[t,o.jsx(Jl,{id:f,name:x,ref:y,$size:l,"aria-describedby":w,"aria-invalid":C||a,"aria-disabled":r,disabled:r,"data-disabled":r?"":void 0,onChange:j,"aria-required":b||s,$hasLeftAction:!!t,$hasRightAction:!!e,...d}),e&&o.jsx(Kl,{ref:v,children:e})]})}),Jl=g.input`
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

  ${e=>{switch(e.$size){case"S":return F`
          padding-inline-start: ${e.$hasLeftAction?0:e.theme.spaces[4]};
          padding-inline-end: ${e.$hasRightAction?0:e.theme.spaces[4]};
          padding-block: ${e.theme.spaces[1]};
        `;default:return F`
          padding-inline-start: ${e.$hasLeftAction?0:e.theme.spaces[4]};
          padding-inline-end: ${e.$hasRightAction?0:e.theme.spaces[4]};
          padding-block: ${e.theme.spaces[2]};
        `}}}
`,Kl=g(T)`
  position: absolute;
  right: ${({theme:e})=>e.spaces[4]};
  top: 50%;
  transform: translateY(-50%);
`,Xl=g(T)`
  border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  padding-inline-start: ${({$hasLeftAction:e,theme:t})=>e?t.spaces[4]:0};
  position: relative;

  ${Me()}
  ${({theme:e,$disabled:t})=>t?F`
          color: ${e.colors.neutral600};
          background: ${e.colors.neutral150};
        `:void 0};
`,_l=()=>{const{id:e,hint:t,error:r}=me("Hint");return!t||r?null:o.jsx(D,{variant:"pi",tag:"p",id:`${e}-hint`,textColor:"neutral600",children:t})},ec=()=>{const{id:e,error:t}=me("Error");return!t||typeof t!="string"?null:o.jsx(D,{variant:"pi",tag:"p",id:`${e}-error`,textColor:"danger600","data-strapi-field-error":!0,children:t})},tc=i.forwardRef(({label:e,children:t,...r},n)=>o.jsx(oc,{justifyContent:"unset",background:"transparent",borderStyle:"none",...r,type:"button",tag:"button",ref:n,children:o.jsx(Je,{label:e,children:t})})),oc=g(T)`
  font-size: 1.6rem;
  padding: 0;
`;i.forwardRef(({actions:e,children:t,error:r,hint:n,label:a,labelAction:s,nextLabel:c,onNext:l,onPrevious:d,previousLabel:p,required:f,secondaryLabel:h,selectedSlide:u,id:x,...b},w)=>{const C=we(x);return o.jsx(Ve,{hint:n,error:r,id:C,required:f,children:o.jsxs(T,{direction:"column",alignItems:"stretch",gap:1,children:[a&&o.jsx(wn,{action:s,children:a}),o.jsx(Ul,{ref:w,actions:e,label:a,nextLabel:c,onNext:l,onPrevious:d,previousLabel:p,secondaryLabel:h,selectedSlide:u,id:C,...b,children:t}),o.jsx(_l,{}),o.jsx(ec,{})]})})});g(k)`
  ${Xr}
`;const rc="data:image/svg+xml,%3csvg%20width='63'%20height='63'%20viewBox='0%200%2063%2063'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M42.5563%2011.9816C39.484%2010.3071%2035.8575%209.29097%2032.3354%209.13521C28.6443%208.92888%2024.8295%209.72318%2021.3336%2011.4129C20.9123%2011.5901%2020.5376%2011.8101%2020.1722%2012.0249L20.0108%2012.1179C19.8774%2012.1951%2019.7441%2012.2724%2019.608%2012.3536C19.3253%2012.5146%2019.0492%2012.6744%2018.7544%2012.8792C18.5463%2013.0329%2018.3395%2013.1759%2018.1301%2013.323C17.5658%2013.7208%2016.9868%2014.1317%2016.4983%2014.5979C14.8476%2015.9524%2013.5571%2017.6075%2012.6071%2018.9214C10.4365%2022.1566%209.08622%2025.9567%208.80702%2029.6143L8.7764%2030.1588C8.73328%2030.9196%208.68476%2031.7057%208.75353%2032.4555C8.76648%2032.6084%208.7661%2032.7638%208.77506%2032.914C8.78895%2033.229%208.80152%2033.5373%208.846%2033.8672L9.07396%2035.4221C9.09756%2035.5764%209.1198%2035.7413%209.1633%2035.9263L9.65919%2037.9272L10.138%2039.2823C10.2729%2039.6673%2010.4158%2040.0751%2010.6%2040.43C12.0292%2043.637%2014.1425%2046.4578%2016.7063%2048.585C19.0508%2050.5296%2021.824%2052.0023%2024.7491%2052.8452L26.2371%2053.2376C26.3781%2053.2693%2026.4926%2053.2889%2026.6031%2053.3058L26.7775%2053.3311C27.0052%2053.3636%2027.2195%2053.3986%2027.4445%2053.435C27.8598%2053.5076%2028.2672%2053.5748%2028.7079%2053.6183L30.5641%2053.7229C30.9516%2053.7249%2031.3352%2053.7068%2031.7081%2053.6874C31.9039%2053.681%2032.0984%2053.6681%2032.3288%2053.662C34.5253%2053.4772%2036.5106%2053.0634%2038.0516%2052.4652C38.1769%2052.4171%2038.3008%2052.3796%2038.4234%2052.3355C38.6727%2052.2499%2038.9259%2052.167%2039.1432%2052.0599L40.8591%2051.2626L42.5702%2050.266C42.9009%2050.0682%2043.0205%2049.6414%2042.8282%2049.2984C42.632%2048.9526%2042.2034%2048.8308%2041.8634%2049.0166L40.1792%2049.9218L38.4995%2050.6224C38.3169%2050.6953%2038.121%2050.7534%2037.9224%2050.8155C37.7838%2050.8489%2037.6518%2050.8983%2037.5012%2050.9408C36.0711%2051.435%2034.2445%2051.7425%2032.244%2051.8346C32.0442%2051.8383%2031.8471%2051.8379%2031.654%2051.8403C31.3051%2051.8414%2030.9602%2051.8451%2030.6392%2051.8305L28.9177%2051.6725C28.5476%2051.619%2028.1695%2051.5427%2027.7848%2051.4678C27.5639%2051.4167%2027.3376%2051.3737%2027.1299%2051.3374L26.9529%2051.2987C26.8704%2051.2834%2026.7772%2051.2667%2026.7333%2051.2543L25.3466%2050.8322C22.7651%2049.9789%2020.33%2048.5729%2018.2942%2046.7557C16.1056%2044.7951%2014.3339%2042.2335%2013.1742%2039.3582C12.0276%2036.6013%2011.5988%2033.2792%2011.9716%2030.0076C12.3145%2027.0213%2013.3948%2024.1635%2015.1858%2021.5083C15.3034%2021.3339%2015.421%2021.1596%2015.5212%2021.0196C16.4309%2019.8688%2017.5408%2018.5589%2018.9483%2017.496C19.3367%2017.1525%2019.7862%2016.856%2020.2611%2016.5478C20.4878%2016.4009%2020.7079%2016.2553%2020.8907%2016.1306C21.0974%2016.0048%2021.3188%2015.8831%2021.5348%2015.7694C21.6761%2015.6975%2021.8162%2015.619%2021.9388%2015.5576L22.1002%2015.4646C22.4002%2015.3037%2022.6749%2015.1546%2022.9908%2015.039L24.1186%2014.5715C24.3399%2014.4844%2024.5718%2014.4159%2024.7997%2014.3447C24.953%2014.2982%2025.0982%2014.2635%2025.2635%2014.2078C25.786%2014.0182%2026.3283%2013.9112%2026.9105%2013.7965C27.117%2013.7571%2027.3302%2013.7163%2027.5608%2013.6585C27.7553%2013.611%2027.9737%2013.5969%2028.2082%2013.5762C28.364%2013.5603%2028.5172%2013.5483%2028.6318%2013.5333C28.7876%2013.5173%2028.9342%2013.5066%2029.0927%2013.4867C29.3285%2013.4555%2029.5456%2013.4347%2029.7494%2013.4337C30.0237%2013.44%2030.2994%2013.4357%2030.5777%2013.4274C31.0811%2013.421%2031.5579%2013.4197%2032.0318%2013.4914C34.9664%2013.7352%2037.7144%2014.6085%2040.2052%2016.0868C42.3489%2017.3655%2044.2716%2019.1525%2045.7607%2021.264C47.0255%2023.0628%2047.9756%2025.0528%2048.4928%2027.0393C48.572%2027.3176%2048.6299%2027.5931%2048.6839%2027.8659C48.7154%2028.0428%2048.7563%2028.2145%2048.7892%2028.3636C48.8037%2028.4541%2048.8208%2028.5406%2048.8445%2028.6258C48.8749%2028.7443%2048.8986%2028.864%2048.9116%2028.9651L48.9793%2029.6047C48.9922%2029.7748%2049.0132%2029.9331%2049.0301%2030.0887C49.0668%2030.3268%2049.0889%2030.5608%2049.0964%2030.7561L49.1083%2031.9001C49.1312%2032.3307%2049.089%2032.7116%2049.0522%2033.0673C49.0384%2033.2598%2049.0126%2033.4443%2049.0123%2033.5824C48.9961%2033.6926%2048.9918%2033.7935%2048.9836%2033.8917C48.9753%2034.0072%2048.9724%2034.1148%2048.9414%2034.2554L48.5449%2036.3059C48.3134%2037.8623%2049.3793%2039.3365%2050.9488%2039.5822C52.0417%2039.7601%2053.1536%2039.2819%2053.7711%2038.3664C54.0063%2038.0176%2054.1604%2037.6257%2054.2227%2037.2064L54.5217%2035.2574C54.5514%2035.0756%2054.572%2034.83%2054.5846%2034.5791L54.6028%2034.2338C54.6098%2034.0598%2054.6223%2033.8779%2054.6347%2033.6788C54.6734%2033.1052%2054.7163%2032.4479%2054.6619%2031.8058L54.5867%2030.4289C54.5622%2030.0952%2054.5097%2029.76%2054.4559%2029.4181C54.431%2029.2572%2054.4048%2029.0896%2054.3826%2028.9074L54.2687%2028.104C54.2332%2027.9244%2054.1804%2027.7273%2054.1329%2027.5396L54.0643%2027.2454C54.0195%2027.071%2053.9773%2026.8927%2053.9338%2026.7076C53.8455%2026.3309%2053.7479%2025.9422%2053.613%2025.5571C52.84%2023.0292%2051.5383%2020.5194%2049.8338%2018.2799C47.8544%2015.682%2045.3333%2013.5087%2042.5563%2011.9816Z'%20fill='%234945FF'/%3e%3c/svg%3e",nc=i.forwardRef(({children:e,small:t=!1,...r},n)=>o.jsxs("div",{role:"alert","aria-live":"assertive",ref:n,...r,children:[o.jsx(Ge,{children:e}),o.jsx(ic,{src:rc,"aria-hidden":!0,$small:t})]})),ac=ie`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,ic=g.img`
  animation: ${ac} 1s infinite linear;
  will-change: transform;
  ${({$small:e,theme:t})=>e&&`width: ${t.spaces[6]}; height: ${t.spaces[6]};`}
`,sc=i.forwardRef(({allowCustomValue:e,autocomplete:t,children:r,className:n,clearLabel:a="clear",creatable:s=!1,createMessage:c=U=>`Create "${U}"`,defaultFilterValue:l,defaultTextValue:d,defaultOpen:p=!1,open:f,onOpenChange:h,disabled:u=!1,hasError:x,id:b,filterValue:w,hasMoreItems:C=!1,isPrintableCharacter:v,loading:m=!1,loadingMessage:y="Loading content...",name:j,noOptionsMessage:S=()=>"No results found",onChange:R,onClear:I,onCreateOption:O,onFilterValueChange:z,onInputChange:N,onTextValueChange:$,onLoadMore:L,placeholder:A="Select or enter a value",required:E=!1,size:G="M",startIcon:H,textValue:Z,value:X,...Q},ee)=>{const[U,ne]=ye({prop:f,defaultProp:p,onChange:h}),[B,te]=ye({prop:Z,defaultProp:e&&!d?X:d,onChange:$}),[ae,de]=ye({prop:w,defaultProp:l,onChange:z}),M=i.useRef(null),W=i.useRef(null),Y=ue(W,ee),P=i.useRef(null),V=he=>{I&&!u&&(te(""),de(""),I(he),W.current.focus())},q=he=>{ne(he)},fe=he=>{te(he)},le=he=>{de(he)},K=he=>{N&&N(he)},ve=he=>{R&&R(he)},Se=he=>{L&&C&&!m&&L(he)},Ao=()=>{O&&B&&O(B)},$n=we(),Do=`intersection-${Oe($n)}`;rt(M,Se,{selectorToWatch:`#${Do}`,skipWhen:!U});const{error:vt,...it}=me("Combobox"),Wn=!!vt||x,Ct=it.id??b,Zn=it.name??j,Gn=it.required||E;let yt;return vt?yt=`${Ct}-error`:it.hint&&(yt=`${Ct}-hint`),o.jsxs(xe.Root,{autocomplete:t||(s?"list":"both"),onOpenChange:q,open:U,onTextValueChange:fe,textValue:B,allowCustomValue:s||e,disabled:u,required:Gn,value:X,onValueChange:ve,filterValue:ae,onFilterValueChange:le,isPrintableCharacter:v,children:[o.jsxs(cc,{$hasError:Wn,$size:G,className:n,children:[o.jsxs(T,{flex:"1",tag:"span",gap:3,children:[H?o.jsx(T,{flex:"0 0 1.6rem",tag:"span","aria-hidden":!0,children:H}):null,o.jsx(dc,{placeholder:A,id:Ct,"aria-invalid":!!vt,onChange:K,ref:Y,name:Zn,"aria-describedby":yt,...Q})]}),o.jsxs(T,{tag:"span",gap:3,children:[B&&I?o.jsx(lc,{tag:"button",hasRadius:!0,background:"transparent",type:"button",padding:0,color:"neutral600",borderStyle:"none",onClick:V,"aria-disabled":u,"aria-label":a,title:a,ref:P,children:o.jsx(We,{})}):null,o.jsx(uc,{children:o.jsx(Fe,{fill:"neutral500"})})]})]}),o.jsx(xe.Portal,{children:o.jsx(fc,{sideOffset:4,children:o.jsxs(hc,{ref:M,children:[r,s?o.jsx(xe.CreateItem,{onPointerUp:Ao,onClick:Ao,asChild:!0,children:o.jsx($t,{children:o.jsx(D,{children:c(B??"")})})}):null,!s&&!m?o.jsx(xe.NoValueFound,{asChild:!0,children:o.jsx($t,{$hasHover:!1,children:o.jsx(D,{children:S(B??"")})})}):null,m?o.jsx(T,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2,children:o.jsx(nc,{small:!0,children:y})}):null,o.jsx(k,{id:Do,width:"100%",height:"1px"})]})})})]})}),lc=g(k)`
  padding: 0;
`,cc=g(xe.Trigger)`
  position: relative;
  border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spaces[4]};

  ${e=>{switch(e.$size){case"S":return F`
          padding-inline-start: ${({theme:t})=>t.spaces[4]};
          padding-inline-end: ${({theme:t})=>t.spaces[3]};
          padding-block: ${({theme:t})=>t.spaces[1]};
        `;default:return F`
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

  ${({theme:e,$hasError:t})=>Me()({theme:e,$hasError:t})};
`,dc=g(xe.TextInput)`
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
`,uc=g(xe.Icon)`
  border: none;
  background: transparent;
  padding: 0;
  color: ${({theme:e})=>e.colors.neutral600};
  display: flex;

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,fc=g(xe.Content)`
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
        animation-name: ${_.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${_.slideDownIn};
      }
    }
  }
`,hc=g(xe.Viewport)`
  padding: ${({theme:e})=>e.spaces[1]};
`,pc=i.forwardRef(({children:e,value:t,disabled:r,textValue:n,...a},s)=>o.jsx(xe.ComboboxItem,{asChild:!0,value:t,disabled:r,textValue:n,children:o.jsx($t,{ref:s,...a,children:o.jsx(xe.ItemText,{asChild:!0,children:o.jsx(D,{children:e})})})})),$t=g.div`
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
`;i.forwardRef((e,t)=>o.jsx(pa,{...e,asChild:!0,ref:t}));i.forwardRef((e,t)=>o.jsxs(ma,{children:[o.jsx(mc,{}),o.jsx(gc,{ref:t,...e})]}));const mc=g(ga)`
  background-color: ${e=>e.theme.colors.neutral800};
  position: fixed;
  inset: 0;
  z-index: ${e=>e.theme.zIndices.overlay};
  opacity: 0.2;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${_.overlayFadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,gc=g(xa)`
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
      animation-name: ${_.modalPopIn};
    }

    &[data-state='closed'] {
      animation-duration: ${e=>e.theme.motion.timings[120]};
      animation-timing-function: ${e=>e.theme.motion.easings.easeOutQuad};
      animation-name: ${_.modalPopOut};
    }
  }
`;i.forwardRef(({children:e,...t},r)=>o.jsx(ba,{asChild:!0,children:o.jsx(xc,{tag:"h2",variant:"beta",ref:r,padding:6,fontWeight:"bold",...t,children:e})}));const xc=g(D)`
  display: flex;
  justify-content: center;
  border-bottom: solid 1px ${e=>e.theme.colors.neutral150};
`;i.forwardRef(({children:e,icon:t,...r},n)=>o.jsx(T,{ref:n,gap:2,direction:"column",paddingTop:8,paddingBottom:8,paddingLeft:6,paddingRight:6,...r,children:typeof e=="string"?o.jsxs(o.Fragment,{children:[t?i.cloneElement(t,{width:24,height:24}):null,o.jsx(bc,{children:e})]}):e}));const bc=i.forwardRef((e,t)=>o.jsx(wa,{asChild:!0,children:o.jsx(D,{ref:t,variant:"omega",...e,tag:"p"})}));i.forwardRef((e,t)=>o.jsx(wc,{ref:t,gap:2,padding:4,justifyContent:"space-between",...e,tag:"footer"}));const wc=g(T)`
  border-top: solid 1px ${e=>e.theme.colors.neutral150};
  flex: 1;
`;i.forwardRef((e,t)=>o.jsx(va,{...e,asChild:!0,ref:t}));i.forwardRef((e,t)=>o.jsx(Ca,{...e,asChild:!0,ref:t}));function ke(e,t){const r=i.useRef(null);return t&&r.current&&vc(t,r.current)&&(t=r.current),r.current=t??null,i.useMemo(()=>new xi(e,t),[e,t])}function vc(e,t){if(e===t)return!0;const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(const a of r)if(t[a]!==e[a])return!1;return!0}ya`
${F`
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
`;const Zo="en-EN",Cc=()=>typeof navigator>"u"?Zo:navigator.language?navigator.language:Zo,[v1,wt]=tt("StrapiDesignSystem",{locale:Cc()}),yc=Ea,vn=i.forwardRef(({container:e=globalThis?.document?.body,...t},r)=>e?$e.createPortal(o.jsx(k,{ref:r,...t}),e):null);vn.displayName="Portal";const ko=i.forwardRef(({children:e,viewportRef:t,...r},n)=>o.jsxs(jc,{ref:n,...r,children:[o.jsx(Sc,{ref:t,children:e}),o.jsx(Go,{orientation:"vertical",children:o.jsx(Ho,{})}),o.jsx(Go,{orientation:"horizontal",children:o.jsx(Ho,{})})]})),jc=g(ja)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
`,Sc=g(Sa)`
  min-width: 100%;
  padding-inline: 4px;
`,Go=g(Ra)`
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
`,Ho=g(ka)`
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
`,Rc=i.forwardRef(({onClear:e,clearLabel:t="Clear",startIcon:r,disabled:n,hasError:a,children:s,id:c,size:l="M",withTags:d,...p},f)=>{const h=i.useRef(null),u=w=>{e&&!n&&(e(w),h.current.focus())},{labelNode:x}=me("SelectTrigger"),b=ue(h,f);return o.jsx(be.Trigger,{asChild:!0,children:o.jsxs(Ic,{"aria-disabled":n,$hasError:a,ref:b,alignItems:"center",justifyContent:"space-between",position:"relative",overflow:"hidden",hasRadius:!0,background:n?"neutral150":"neutral0",gap:4,cursor:"default","aria-labelledby":x?`${c}-label`:void 0,$size:l,$withTags:d,...p,children:[o.jsxs(T,{flex:"1",tag:"span",gap:3,children:[r&&o.jsx(T,{tag:"span","aria-hidden":!0,children:r}),s]}),o.jsxs(T,{tag:"span",gap:3,children:[e?o.jsx(kc,{tag:"button",hasRadius:!0,background:"transparent",role:"button",tabIndex:0,onClick:u,"aria-disabled":n,"aria-label":t,title:t,cursor:"pointer",children:o.jsx(We,{})}):null,o.jsx(Tc,{children:o.jsx(Fe,{})})]})]})})}),kc=g(k)`
  border: none;
  display: flex;

  svg {
    height: 1.1rem;
    width: 1.1rem;
  }

  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,Ic=g(T)`
  border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  ${e=>{switch(e.$size){case"S":return F`
          padding-block: ${e.theme.spaces[1]};
          padding-inline-start: ${e.$withTags?e.theme.spaces[1]:e.theme.spaces[4]};
          padding-inline-end: ${e.theme.spaces[3]};
        `;default:return F`
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

  ${({theme:e,$hasError:t})=>Me()({theme:e,$hasError:t})};
`,Tc=g(be.Icon)`
  display: flex;
  & > svg {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,Mc=i.forwardRef(({children:e,placeholder:t,...r},n)=>o.jsx(Ac,{ref:n,ellipsis:!0,...r,children:o.jsx(Dc,{placeholder:t,children:e})})),Ac=g(D)`
  flex: 1;
  font-size: 1.4rem;
  line-height: 2.2rem;
`,Dc=g(be.Value)`
  display: flex;
  gap: ${({theme:e})=>e.spaces[1]};
  flex-wrap: wrap;
`,Fc=i.forwardRef((e,t)=>o.jsx(Ec,{ref:t,...e,children:o.jsx(ko,{children:e.children})})),Ec=g(be.Content)`
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
        animation-name: ${_.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${_.slideDownIn};
      }
    }
  }
`,Lc=g(be.Viewport)`
  padding: ${({theme:e})=>e.spaces[1]};
`,Pc=i.forwardRef((e,t)=>o.jsx(zc,{ref:t,...e})),Nc=F`
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
`,zc=g(be.Item)`
  ${Nc}

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary100};
  }

  &[data-state='checked'] {
    font-weight: bold;
    background-color: ${({theme:e})=>e.colors.primary100};
    color: ${({theme:e})=>e.colors.primary600};
    font-weight: bold;
  }
`,Cn=be.Root,yn=Rc,jn=Mc,Sn=be.Portal,Rn=Fc,kn=Lc,Io=Pc,In=be.ItemIndicator,Tn=be.ItemText,Oc=be.Group,Uo=i.forwardRef(({children:e,clearLabel:t="Clear",customizeContent:r,disabled:n,hasError:a,id:s,name:c,onChange:l,onClear:d,onCloseAutoFocus:p,onReachEnd:f,placeholder:h,required:u,size:x,startIcon:b,value:w,...C},v)=>{const[m,y]=i.useState(),[j,S]=i.useState(!1),R=U=>{S(U)},I=U=>{d&&d(U),l||y("")},O=U=>{l?l(typeof w=="number"?Number(U):U):y(U)},z=i.useRef(null),N=we(),$=`intersection-${Oe(N)}`;rt(z,U=>{f&&f(U)},{selectorToWatch:`#${$}`,skipWhen:!j});const{error:A,required:E,...G}=me("SingleSelect"),H=!!A||a,Z=G.id??s,X=G.name??c;let Q;A?Q=`${Z}-error`:G.hint&&(Q=`${Z}-hint`);const ee=(typeof w<"u"&&w!==null?w.toString():m)??"";return o.jsxs(Cn,{onOpenChange:R,disabled:n,required:E??u,onValueChange:O,value:ee,...C,children:[o.jsx(yn,{ref:v,id:Z,name:X,startIcon:b,hasError:H,disabled:n,clearLabel:t,onClear:ee&&d?I:void 0,"aria-label":C["aria-label"],"aria-describedby":Q??C["aria-describedby"],size:x,children:o.jsx(jn,{placeholder:h,textColor:ee?"neutral800":"neutral600",children:ee&&r?r(ee):void 0})}),o.jsx(Sn,{children:o.jsx(Rn,{position:"popper",sideOffset:4,onCloseAutoFocus:p,children:o.jsxs(kn,{ref:z,children:[e,o.jsx(k,{id:$,width:"100%",height:"1px"})]})})})]})}),qo=i.forwardRef(({value:e,startIcon:t,children:r,...n},a)=>o.jsxs(Io,{ref:a,value:e.toString(),...n,children:[t&&o.jsx(T,{tag:"span","aria-hidden":!0,children:t}),o.jsx(D,{lineHeight:"20px",width:"100%",children:o.jsx(Tn,{children:r})})]})),Bc=200,Qo=15,[Vc,He]=tt("DatePicker"),$c=i.forwardRef(({calendarLabel:e,className:t,initialDate:r,locale:n,maxDate:a,minDate:s,monthSelectLabel:c="Month",onChange:l,value:d,yearSelectLabel:p="Year",hasError:f,id:h,name:u,disabled:x=!1,required:b=!1,onClear:w,clearLabel:C="Clear",size:v="M",...m},y)=>{const j=Tt(),S=wt("DatePicker"),R=n??S.locale,I=ke(R,{day:"2-digit",month:"2-digit",year:"numeric"}),[O,z]=i.useState(!1),[N,$]=i.useState(null),[L,A]=i.useState(null),[E,G]=i.useState(null),[H,Z]=i.useState(),[X,Q]=ye({defaultProp:r?Ae(r):void 0,prop:d?Ae(d):void 0,onChange(K){l&&l(K?.toDate(j))}}),[ee,U]=i.useMemo(()=>{const K=r?Ae(r):qt("UTC"),ve=s?Ae(s):K.set({day:1,month:1,year:K.year-Bc});let Se=a?Ae(a):K.set({day:31,month:12,year:K.year+Qo});return Se.compare(ve)<0&&(Se=ve.set({day:31,month:12,year:ve.year+Qo})),[ve,Se]},[s,a,r]),[ne,B]=i.useState(Wc({currentValue:X,minDate:ee,maxDate:U})),te=we(),ae=i.useRef(null),de=K=>{w&&!x&&(Z(""),Q(void 0),w(K),L?.focus())},M=i.useCallback(K=>{K&&X&&B(X),z(K)},[X]);Be(()=>{if(d){const K=Ae(d);Z(I.format(K.toDate(j))),B(K)}else Z("")},[d,I,j]),Be(()=>{if(r&&H===void 0){const K=Ae(r);Z(I.format(K.toDate(j)))}},[r,H,I,j]);const{error:W,...Y}=me("Combobox"),P=!!W||f,V=Y.id??h,q=Y.name??u,fe=Y.required||b;let le;return W?le=`${V}-error`:Y.hint&&(le=`${V}-hint`),o.jsxs(Vc,{calendarDate:ne,content:E,contentId:te,disabled:x,locale:R,minDate:ee,maxDate:U,open:O,onCalendarDateChange:B,onContentChange:G,onOpenChange:M,onTextInputChange:A,onTextValueChange:Z,onTriggerChange:$,onValueChange:Q,required:fe,textInput:L,textValue:H,timeZone:j,trigger:N,value:X,children:[o.jsxs(Gc,{className:t,hasError:P,size:v,children:[o.jsx(Ia,{fill:"neutral500","aria-hidden":!0}),o.jsx(Qc,{ref:y,"aria-describedby":le,id:V,name:q,...m}),H&&w?o.jsx(Uc,{tag:"button",hasRadius:!0,background:"transparent",type:"button",onClick:de,"aria-disabled":x,"aria-label":C,title:C,ref:ae,children:o.jsx(We,{})}):null]}),o.jsx(vn,{children:o.jsx(Xc,{label:e,children:o.jsx(r0,{monthSelectLabel:c,yearSelectLabel:p})})})]})}),Yo=e=>!!e.match(/^[^a-zA-Z]*$/),Wc=({currentValue:e,minDate:t,maxDate:r})=>{const n=qt("UTC");return e||(Mt(t,n)===t&&At(r,n)===r?n:Mt(t,n)===n?t:At(r,n)===n?r:n)},Zc="DatePickerTrigger",Gc=i.forwardRef(({hasError:e,size:t,...r},n)=>{const a=He(Zc),s=ue(n,l=>a.onTriggerChange(l)),c=()=>{a.disabled||a.onOpenChange(!0)};return o.jsx(Zt,{asChild:!0,trapped:a.open,onMountAutoFocus:l=>{l.preventDefault()},onUnmountAutoFocus:l=>{document.getSelection()?.empty(),l.preventDefault()},children:o.jsx(Hc,{ref:s,$hasError:e,$size:t,...r,hasRadius:!0,gap:3,overflow:"hidden",background:a.disabled?"neutral150":"neutral0",onClick:De(r.onClick,()=>{a.textInput?.focus()}),onPointerDown:De(r.onPointerDown,l=>{const d=l.target;d.hasPointerCapture(l.pointerId)&&d.releasePointerCapture(l.pointerId),(d.closest("button")??d.closest("div"))===l.currentTarget&&l.button===0&&l.ctrlKey===!1&&(c(),a.textInput?.focus())})})})}),Hc=g(T)`
  border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  ${e=>{switch(e.$size){case"S":return F`
          padding-block: ${e.theme.spaces[1]};
          padding-inline: ${e.theme.spaces[3]};
        `;default:return F`
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

  ${({theme:e,$hasError:t})=>Me()({theme:e,$hasError:t})};
`,Uc=g(k)`
  border: none;
  color: ${({theme:e})=>e.colors.neutral600};
  padding: 0;
  cursor: pointer;
`,qc="DatePickerTextInput",Qc=i.forwardRef(({placeholder:e,...t},r)=>{const n=He(qc),{onTextValueChange:a,textValue:s,onTextInputChange:c,onOpenChange:l,disabled:d,locale:p}=n,f=ue(r,v=>c(v)),h=()=>{d||l(!0)},u=ke(p,{year:"numeric",month:"2-digit",day:"2-digit"}),[x,b,w]=i.useMemo(()=>{const v=u.formatToParts(new Date),m=v.filter(S=>S.type==="year"||S.type==="month"||S.type==="day"),y=m.map(S=>{switch(S.type){case"day":return"DD";case"month":return"MM";case"year":return"YYYY";default:return""}}),j=v.find(S=>S.type==="literal")?.value??"";return[y,j,m]},[u]),C=x.map(v=>`\\d{${v.length}}`).join(`\\${b}`);return o.jsx(Jc,{role:"combobox",type:"text",inputMode:"numeric",ref:f,"aria-autocomplete":"none","aria-controls":n.contentId,"aria-disabled":n.disabled,"aria-expanded":n.open,"aria-required":n.required,"aria-haspopup":"dialog","data-state":n.open?"open":"closed",disabled:d,"data-disabled":d?"":void 0,pattern:C,placeholder:e??x.join(b),...t,value:s??"",onBlur:De(t.onBlur,()=>{if(!n.textValue){n.onValueChange(void 0);return}n.onTextValueChange(u.format(n.calendarDate.toDate(n.timeZone))),n.onValueChange(n.calendarDate)}),onChange:De(t.onChange,v=>{if(Yo(v.target.value)){const m=v.target.value.split(b),[y,j,S]=w.map((A,E)=>{const G=m[E];return{...A,value:G}}).sort((A,E)=>A.type==="year"?1:E.type==="year"?-1:A.type==="month"?1:E.type==="month"?-1:0).map(A=>A.value),R=n.calendarDate.year;let I=n.calendarDate.year;if(S){const A=S.length===1?`0${S}`:S;I=S.length<3?Number(`${R}`.slice(0,4-A.length)+A):Number(A)}S&&S.length<3&&I>n.maxDate.year&&(I-=100);const O=n.calendarDate.set({year:I}),z=O.calendar.getMonthsInYear(O),N=O.set({month:j&&Number(j)<=z?Number(j):void 0}),$=N.calendar.getDaysInMonth(N),L=N.set({day:y&&Number(y)<=$?Number(y):void 0});n.onCalendarDateChange(Yc(L,n.minDate,n.maxDate)),n.onTextValueChange(v.target.value)}}),onKeyDown:De(t.onKeyDown,v=>{if(!n.open&&(Yo(v.key)||["ArrowDown","Backspace"].includes(v.key)))h();else if(["Tab"].includes(v.key)&&n.open)v.preventDefault();else if(["Escape"].includes(v.key))n.open?n.onOpenChange(!1):(n.onValueChange(void 0),n.onTextValueChange("")),v.preventDefault();else if(n.open&&["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(v.key))switch(v.preventDefault(),v.key){case"ArrowDown":{const m=n.calendarDate.add({weeks:1});if(n.maxDate&&m.compare(n.maxDate)>0)return;n.onCalendarDateChange(m);return}case"ArrowRight":{const m=n.calendarDate.add({days:1});if(n.maxDate&&m.compare(n.maxDate)>0)return;n.onCalendarDateChange(m);return}case"ArrowUp":{const m=n.calendarDate.subtract({weeks:1});if(n.minDate&&m.compare(n.minDate)<0)return;n.onCalendarDateChange(m);return}case"ArrowLeft":{const m=n.calendarDate.subtract({days:1});if(n.minDate&&m.compare(n.minDate)<0)return;n.onCalendarDateChange(m)}}else n.open&&["Enter"].includes(v.key)&&(v.preventDefault(),a(u.format(n.calendarDate.toDate(n.timeZone))),n.onValueChange(n.calendarDate),n.onOpenChange(!1))})})});function Yc(e,t,r){return t&&(e=At(e,t)),r&&(e=Mt(e,r)),e}const Jc=g.input`
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
`,Kc="DatePickerContent",Xc=i.forwardRef((e,t)=>{const[r,n]=i.useState(),a=He(Kc);if(Be(()=>{n(new DocumentFragment)},[]),!a.open){const s=r;return s?$e.createPortal(o.jsx("div",{children:e.children}),s):null}return o.jsx(e0,{...e,ref:t})}),_c="DatePickerContent",e0=i.forwardRef((e,t)=>{const{label:r="Choose date",...n}=e,{onOpenChange:a,...s}=He(_c),{x:c,y:l,refs:d,strategy:p,placement:f}=Ta({strategy:"fixed",placement:"bottom-start",middleware:[Ma({mainAxis:4}),Aa(),Da()],elements:{reference:s.trigger},whileElementsMounted:Fa});i.useEffect(()=>{const u=()=>{a(!1)};return window.addEventListener("blur",u),window.addEventListener("resize",u),()=>{window.removeEventListener("blur",u),window.removeEventListener("resize",u)}},[a]);const h=ue(t,u=>s.onContentChange(u),d.setFloating);return Gt(),o.jsx(Ht,{allowPinchZoom:!0,children:o.jsx(yc,{asChild:!0,onFocusOutside:u=>{u.preventDefault()},onDismiss:()=>{a(!1)},children:o.jsx(t0,{ref:h,"data-state":s.open?"open":"closed","data-side":f.includes("top")?"top":"bottom",onContextMenu:u=>u.preventDefault(),id:s.contentId,role:"dialog","aria-modal":"true","aria-label":r,style:{left:c,top:l,position:p},hasRadius:!0,background:"neutral0",padding:1,...n})})})}),t0=g(k)`
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  z-index: ${({theme:e})=>e.zIndices.popover};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${_.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${_.slideDownIn};
      }
    }
  }
`,o0="DatePickerCalendar",r0=i.forwardRef(({monthSelectLabel:e,yearSelectLabel:t,...r},n)=>{const{locale:a,timeZone:s,minDate:c,maxDate:l,calendarDate:d,onCalendarDateChange:p}=He(o0),f=La(d),h=i.useMemo(()=>{const y=c.year,j=l.year;return[...Array(j-y+1).keys()].map(S=>(y+S).toString())},[c,l]),u=ke(a,{month:"long"}),x=i.useMemo(()=>[...Array(d.calendar.getMonthsInYear(d)).keys()].map(y=>u.format(d.set({month:y+1}).toDate(s))),[d,u,s]),b=ke(a,{weekday:"short"}),w=i.useMemo(()=>{const y=pr(qt(s),a);return[...new Array(7).keys()].map(j=>{const R=y.add({days:j}).toDate(s);return b.format(R)})},[s,a,b]),C=y=>{if(typeof y=="number")return;const j=d.set({month:x.indexOf(y)+1});p(j)},v=y=>{if(typeof y=="number")return;const j=d.set({year:parseInt(y,10)});p(j)},m=n0(f,a);return o.jsxs(T,{ref:n,direction:"column",alignItems:"stretch",padding:4,...r,children:[o.jsxs(a0,{justifyContent:"flex-start",paddingBottom:4,paddingLeft:2,paddingRight:2,gap:2,children:[o.jsx(Ve,{children:o.jsx(Uo,{"aria-label":e,value:x[d.month-1],onChange:C,children:x.map(y=>o.jsx(qo,{value:y,children:y},y))})}),o.jsx(Ve,{children:o.jsx(Uo,{value:d.year.toString(),"aria-label":t,onChange:v,children:h.map(y=>o.jsx(qo,{value:y,children:y},y))})})]}),o.jsxs("table",{role:"grid",children:[o.jsx("thead",{"aria-hidden":!0,children:o.jsx("tr",{"aria-rowindex":0,children:w.map((y,j)=>o.jsx(i0,{"aria-colindex":j,children:y},y))})}),o.jsx("tbody",{children:[...new Array(6).keys()].map(y=>o.jsx("tr",{"aria-rowindex":y+2,children:m(y).map((j,S)=>j?o.jsx(c0,{"aria-colindex":S+1,date:j,startDate:f,disabled:c.compare(j)>0||j.compare(l)>0},j.toString()):o.jsx(Mn,{"aria-colindex":S+1},S+1))},y))})]})]})}),n0=(e,t)=>r=>{let n=e.add({weeks:r});const a=[];n=pr(n,t);const s=Pa(n,t);for(let c=0;c<s;c++)a.push(null);for(;a.length<7;){a.push(n);const c=n.add({days:1});if(mr(n,c))break;n=c}for(;a.length<7;)a.push(null);return a},a0=g(T)`
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
`,i0=i.forwardRef(({children:e,...t},r)=>o.jsx(s0,{tag:"th",role:"gridcell",ref:r,...t,height:"2.4rem",width:"3.2rem",children:o.jsx(D,{variant:"pi",fontWeight:"bold",color:"neutral800",children:e.slice(0,2)})})),s0=g(k)`
  border-radius: ${({theme:e})=>e.borderRadius};
  text-transform: capitalize;
`,l0="DatePickerCalendarCell",c0=i.forwardRef(({date:e,startDate:t,disabled:r,...n},a)=>{const{timeZone:s,locale:c,calendarDate:l,onValueChange:d,onOpenChange:p,onTextValueChange:f,onCalendarDateChange:h}=He(l0),u=mr(l,e),x=ke(c,{weekday:"long",day:"numeric",month:"long",year:"numeric"}),b=i.useMemo(()=>x.format(e.toDate(s)),[x,e,s]),w=ke(c,{day:"numeric",calendar:e.calendar.identifier}),C=i.useMemo(()=>w.formatToParts(e.toDate(s)).find(S=>S.type==="day").value,[w,e,s]),v=ke(c,{day:"2-digit",month:"2-digit",year:"numeric"}),m=Na(t),y=e.compare(t)<0||e.compare(m)>0;let j="neutral900";return u?j="primary600":y&&(j="neutral600"),o.jsx(Mn,{tag:"td",role:"gridcell",ref:a,"aria-selected":u,...n,hasRadius:!0,"aria-label":b,tabIndex:u?0:-1,background:u?"primary100":"neutral0",cursor:"pointer",onPointerDown:De(n.onPointerDown,S=>{S.preventDefault(),h(e),d(e),f(v.format(e.toDate(s))),p(!1)}),"aria-disabled":r,children:o.jsx(D,{variant:"pi",textColor:j,children:C})})}),Mn=g(k)`
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
`,Ae=e=>{const t=e.toISOString(),r=za(t,"UTC");return Oa(r)},Rt=e=>!!e.match(/^[^a-zA-Z]*$/),d0=i.forwardRef(({step:e=15,value:t,defaultValue:r,onChange:n,...a},s)=>{const c=wt("TimePicker"),[l,d]=i.useState(""),[p,f]=ye({prop:t,defaultProp:r,onChange:n}),h=ke(c.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}),u=i.useMemo(()=>{const m=h.formatToParts(new Date),{value:y}=m.find(j=>j.type==="literal");return y},[h]),x=i.useMemo(()=>{const m=60/e;return[...Array(24).keys()].flatMap(y=>[...Array(m).keys()].map(j=>h.format(new Date(0,0,0,y,j*e))))},[e,h]),b=m=>{(!m||Rt(m))&&d(m)},w=m=>{const[y,j]=m.split(u);if(!y&&!j)return;const S=Number(y??"0"),R=Number(j??"0");if(!(S>23||R>59))return h.format(new Date(0,0,0,S,R))},C=m=>{const y=w(m.target.value);y?(d(y),f(y)):d(p)},v=m=>{if(typeof m<"u"){const y=w(m);f(y)}else f(m)};return i.useEffect(()=>{const m=typeof t>"u"?"":t;Rt(m)&&d(m)},[t,d]),o.jsx(sc,{...a,ref:s,value:p,onChange:v,isPrintableCharacter:Rt,allowCustomValue:!0,placeholder:`--${u}--`,autocomplete:"none",startIcon:o.jsx(Ba,{fill:"neutral500"}),inputMode:"numeric",pattern:`\\d{2}\\${u}\\d{2}`,textValue:l,onTextValueChange:b,onBlur:C,children:x.map(m=>o.jsx(pc,{value:m,children:m},m))})}),u0=g($c)`
  flex: 1 1 70%;
  min-width: 120px;
`,f0=g(d0)`
  flex: 1 1 30%;
  min-width: 140px;
`;i.forwardRef(({clearLabel:e="clear",dateLabel:t="Choose date",timeLabel:r="Choose time",disabled:n=!1,hasError:a,onChange:s,onClear:c,required:l=!1,step:d,value:p,initialDate:f,size:h,...u},x)=>{const b=i.useRef(null),[w,C]=ye({defaultProp:f?Ue(f,!1):void 0,prop:p?Ue(p,!1):p??void 0,onChange(A){s&&s(A?.toDate(Tt()))}}),v=wt("DateTimePicker"),m=ke(v.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}),y=w?m.format(w.toDate(Tt())):"",j=A=>{let E=A?Ue(A):void 0;if(!(E&&w&&E.compare(w)===0)){if(y&&E){const[G,H]=y.split(":");E=E.set({hour:parseInt(G,10),minute:parseInt(H,10)})}C(E)}},S=A=>{if(!A)return;const[E,G]=A.split(":"),H=w?w.set({hour:parseInt(E,10),minute:parseInt(G,10)}):Ue(new Date).set({hour:parseInt(E,10),minute:parseInt(G,10)});C(H)},R=A=>{C(void 0),c&&c(A)},I=()=>{const A=w?w.set({hour:0,minute:0}):Ue(new Date);C(A)},O=ue(b,x),{error:z,id:N,labelNode:$}=me("DateTimePicker"),L=!!z||a;return o.jsxs(T,{"aria-labelledby":$?`${N}-label`:void 0,role:"group",flex:"1",gap:1,children:[o.jsx(Ve,{children:o.jsx(u0,{...u,size:h,value:w?.toDate("UTC"),onChange:j,required:l,onClear:c?R:void 0,clearLabel:`${e} date`,disabled:n,ref:O,"aria-label":t})}),o.jsx(Ve,{children:o.jsx(f0,{size:h,hasError:L,value:y,onChange:S,onClear:c&&y!==void 0&&y!=="00:00"?I:void 0,clearLabel:`${e} time`,required:l,disabled:n,step:d,"aria-label":r})})]})});const Ue=(e,t=!0)=>{const r=e.toISOString();let n=Va(r);return t&&(n=n.set({hour:0,minute:0})),$a(n)},h0=i.forwardRef((e,t)=>o.jsx(p0,{ref:t,background:"neutral150",...e,"data-orientation":"horizontal",role:"separator",tag:"div"})),p0=g(k)`
  height: 1px;
  border: none;
  /* If contained in a Flex parent we want to prevent the Divider to shink */
  flex-shrink: 0;
`,m0=g(k)`
  svg {
    height: 8.8rem;
  }
`;i.forwardRef(({icon:e,content:t,action:r,hasRadius:n=!0,shadow:a="tableShadow"},s)=>o.jsxs(T,{ref:s,alignItems:"center",direction:"column",padding:11,background:"neutral0",hasRadius:n,shadow:a,children:[e?o.jsx(m0,{paddingBottom:6,"aria-hidden":!0,children:e}):null,o.jsx(k,{paddingBottom:4,children:o.jsx(D,{variant:"delta",tag:"p",textAlign:"center",textColor:"neutral600",children:t})}),r]}));const An=gr.define(),Dn=gr.define(),g0=xr.mark({attributes:{style:"background-color: yellow; color: black"}}),x0=Wa.define({create(){return xr.none},update(e,t){return e=e.map(t.changes),t.effects.forEach(r=>{r.is(An)?e=e.update({add:r.value,sort:!0}):r.is(Dn)&&(e=e.update({filter:r.value}))}),e},provide:e=>Za.decorations.from(e)});i.forwardRef(({hasError:e,required:t,id:r,value:n="",disabled:a=!1,onChange:s=()=>null,...c},l)=>{const d=i.useRef(),p=i.useRef(),f=i.useRef(),{error:h,...u}=me("JsonInput"),x=!!h||e,b=u.id??r,w=u.required||t;let C;h?C=`${b}-error`:u.hint&&(C=`${b}-hint`);const v=z=>{const N=p.current?.doc;if(N){const{text:$,to:L}=N.line(z),A=L-$.trimStart().length;L>A&&f.current?.dispatch({effects:An.of([g0.range(A,L)])})}},m=()=>{const z=p.current?.doc;if(z){const N=z.length||0;f.current?.dispatch({effects:Dn.of(($,L)=>L<=0||$>=N)})}},y=({state:z,view:N})=>{f.current=N,p.current=z,m();const L=bi()(N);L.length&&v(z.doc.lineAt(L[0].from).number)},j=(z,N)=>{y(N),s(z)},S=(z,N)=>{f.current=z,p.current=N,y({view:z,state:N})},{setContainer:R,view:I}=Ga({value:n,onCreateEditor:S,container:d.current,editable:!a,extensions:[Ha(),x0],onChange:j,theme:"dark",basicSetup:{lineNumbers:!0,bracketMatching:!0,closeBrackets:!0,indentOnInput:!0,syntaxHighlighting:!0,highlightSelectionMatches:!0,tabSize:2}}),O=ue(d,R);return i.useImperativeHandle(l,()=>({...I?.dom,focus(){I&&I.focus()},scrollIntoView(z){I&&I.dom.scrollIntoView(z)}}),[I]),o.jsx(b0,{ref:O,$hasError:x,alignItems:"stretch",fontSize:2,hasRadius:!0,"aria-required":w,id:b,"aria-describedby":C,...c})});const b0=g(T)`
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
    ${Me()}
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
`,Fn=ce(({disabled:e,...t},r)=>o.jsx(Bt,{ref:r,tag:ot,tabIndex:e?-1:void 0,disabled:e,...t}));g(k)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`;g(k)`
  text-decoration: none;

  &:focus {
    left: ${({theme:e})=>e.spaces[3]};
    top: ${({theme:e})=>e.spaces[3]};
  }
`;const w0=(e,t)=>`${e}${Math.floor(t*255).toString(16).padStart(2,"0")}`;i.forwardRef((e,t)=>o.jsx(Ua,{...e,asChild:!0,ref:t}));i.forwardRef((e,t)=>o.jsx(qa,{children:o.jsx(v0,{children:o.jsx(C0,{ref:t,...e})})}));const v0=g(Qa)`
  background: ${e=>w0(e.theme.colors.neutral800,.2)};
  position: fixed;
  inset: 0;
  z-index: ${e=>e.theme.zIndices.overlay};

  @media (prefers-reduced-motion: no-preference) {
    animation: ${_.overlayFadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,C0=g(Ya)`
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
      animation-name: ${_.modalPopIn};
    }

    &[data-state='closed'] {
      animation-duration: ${e=>e.theme.motion.timings[120]};
      animation-timing-function: ${e=>e.theme.motion.easings.easeOutQuad};
      animation-name: ${_.modalPopOut};
    }
  }
`,y0=i.forwardRef((e,t)=>o.jsx(Ja,{...e,asChild:!0,ref:t}));i.forwardRef(({children:e,closeLabel:t="Close modal",...r},n)=>o.jsxs(j0,{ref:n,padding:4,paddingLeft:5,paddingRight:5,background:"neutral100",justifyContent:"space-between",...r,tag:"header",children:[e,o.jsx(y0,{children:o.jsx(Vt,{withTooltip:!1,label:t,children:o.jsx(We,{})})})]}));const j0=g(T)`
  border-bottom: solid 1px ${e=>e.theme.colors.neutral150};
`;i.forwardRef((e,t)=>o.jsx(Ka,{asChild:!0,children:o.jsx(D,{tag:"h2",variant:"omega",fontWeight:"bold",ref:t,...e})}));i.forwardRef(({children:e,...t},r)=>o.jsx(S0,{ref:r,...t,children:e}));const S0=g(ko)`
  padding-inline: ${e=>e.theme.spaces[8]};

  & > div {
    padding-block: ${e=>e.theme.spaces[8]};

    & > div {
      // the scroll area component applies a display: table to the child, which we don't want.
      display: block !important;
    }
  }
`;i.forwardRef((e,t)=>o.jsx(R0,{ref:t,padding:4,paddingLeft:5,paddingRight:5,background:"neutral100",justifyContent:"space-between",...e,tag:"footer"}));const R0=g(T)`
  border-top: solid 1px ${e=>e.theme.colors.neutral150};
  flex: 1;
`,k0="";i.forwardRef(({startAction:e,locale:t,onValueChange:r,value:n,step:a=1,disabled:s=!1,...c},l)=>{const d=wt("NumberInput"),p=t||d.locale,f=i.useRef(new Xa(p,{style:"decimal"})),h=i.useRef(new _a(p,{maximumFractionDigits:20})),[u,x]=I0({prop(R){const I=String(n);return isNaN(Number(I))||I!==R&&R!==""?R:h.current.format(Number(n))},defaultProp:k0,onChange(R){const I=f.current.parse(R??"");r(isNaN(I)?void 0:I)}}),b=R=>{x(String(R))},w=({target:{value:R}})=>{f.current.isValidPartialNumber(R)&&b(R)},v=(R=>{const I=R.toString();return I.includes(".")?I.split(".")[1].length:0})(a),m=()=>{if(!u){b(a);return}const R=f.current.parse(u),I=isNaN(R)?a:R+a,O=parseFloat(I.toFixed(v));b(h.current.format(O))},y=()=>{if(!u){b(-a);return}const R=f.current.parse(u),I=isNaN(R)?-a:R-a,O=parseFloat(I.toFixed(v));b(h.current.format(O))},j=R=>{if(!s)switch(R.key){case se.DOWN:{R.preventDefault(),y();break}case se.UP:{R.preventDefault(),m();break}}},S=()=>{if(u){const R=f.current.parse(u),I=isNaN(R)?"":h.current.format(R);b(I)}};return o.jsx(Ro,{ref:l,startAction:e,disabled:s,type:"text",inputMode:"decimal",onChange:w,onKeyDown:j,onBlur:S,value:u,endAction:o.jsxs(T,{direction:"column",children:[o.jsx(Jo,{disabled:s,"aria-hidden":!0,$reverse:!0,onClick:m,tabIndex:-1,type:"button","data-testid":"ArrowUp",children:o.jsx(Fe,{fill:"neutral500"})}),o.jsx(Jo,{disabled:s,"aria-hidden":!0,onClick:y,tabIndex:-1,type:"button","data-testid":"ArrowDown",children:o.jsx(Fe,{fill:"neutral500"})})]}),...c})});const Jo=g.button`
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
`;function I0({prop:e,defaultProp:t,onChange:r=()=>{}}){const[n,a]=on({defaultProp:t,onChange:r}),s=e!==void 0,c=e instanceof Function?e(n):e,l=s?c:n,d=eo(r),p=i.useCallback(f=>{if(s){const u=typeof f=="function"?f(c):f;u!==c&&(d(u),a(f))}else a(f)},[s,c,a,d]);return[l,p]}const T0=i.createContext({activePage:1,pageCount:1}),To=()=>i.useContext(T0);ce(({children:e,...t},r)=>{const{activePage:n}=To(),a=n===1;return o.jsxs(Ln,{ref:r,"aria-disabled":a,tabIndex:a?-1:void 0,...t,children:[o.jsx(Ge,{children:e}),o.jsx(hr,{"aria-hidden":!0})]})});ce(({children:e,...t},r)=>{const{activePage:n,pageCount:a}=To(),s=n===a;return o.jsxs(Ln,{ref:r,"aria-disabled":s,tabIndex:s?-1:void 0,...t,children:[o.jsx(Ge,{children:e}),o.jsx(Ut,{"aria-hidden":!0})]})});const En=g(ot)`
  padding: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({$active:e,theme:t})=>e?t.shadows.filterShadow:void 0};
  text-decoration: none;
  display: flex;

  ${gt}
`,Ln=g(En)`
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
`;ce(({number:e,children:t,...r},n)=>{const{activePage:a}=To(),s=a===e;return o.jsxs(M0,{ref:n,...r,"aria-current":s,$active:s,children:[o.jsx(Ge,{children:t}),o.jsx(D,{"aria-hidden":!0,fontWeight:s?"bold":void 0,lineHeight:"revert",variant:"pi",children:e})]})});const M0=g(En)`
  color: ${({theme:e,$active:t})=>t?e.colors.primary700:e.colors.neutral800};
  background: ${({theme:e,$active:t})=>t?e.colors.neutral0:void 0};

  &:hover {
    box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  }
`;i.forwardRef((e,t)=>o.jsx(ei,{...e,asChild:!0,ref:t}));i.forwardRef((e,t)=>o.jsx(ti,{children:o.jsx(A0,{sideOffset:4,side:"bottom",align:"start",...e,ref:t})}));const A0=g(oi)`
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
        animation-name: ${_.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${_.slideDownIn};
      }
    }

    &[data-state='closed'] {
      animation-timing-function: ${e=>e.theme.motion.easings.easeOutQuad};

      &[data-side='top'] {
        animation-name: ${_.slideUpOut};
      }

      &[data-side='bottom'] {
        animation-name: ${_.slideDownOut};
      }
    }
  }
`;i.forwardRef(({children:e,intersectionId:t,onReachEnd:r,...n},a)=>{const s=i.useRef(null),c=ue(s,a),l=we();return rt(s,r??(()=>{}),{selectorToWatch:`#${Oe(l)}`,skipWhen:!t||!r}),o.jsxs(D0,{ref:c,...n,children:[e,t&&r&&o.jsx(k,{id:Oe(l),width:"100%",height:"1px"})]})});const D0=g(ko)`
  height: 20rem;
`;i.forwardRef(({size:e="M",value:t,...r},n)=>o.jsx(F0,{ref:n,$size:e,...r,children:o.jsx(E0,{style:{transform:`translate3D(-${100-(t??0)}%, 0, 0)`}})}));const F0=g(ri)`
  position: relative;
  overflow: hidden;
  width: ${e=>e.$size==="S"?"7.8rem":"10.2rem"};
  height: ${e=>e.$size==="S"?"0.4rem":"0.8rem"};
  background-color: ${e=>e.theme.colors.neutral600};
  border-radius: ${e=>e.theme.borderRadius};

  /* Fix overflow clipping in Safari */
  /* https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0 */
  transform: translateZ(0);
`,E0=g(ni)`
  background-color: ${({theme:e})=>e.colors.neutral0};
  border-radius: ${({theme:e})=>e.borderRadius};
  width: 100%;
  height: 100%;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${e=>e.theme.motion.timings[320]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`;i.forwardRef((e,t)=>o.jsx(L0,{ref:t,...e}));const L0=g(ai)`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spaces[3]};
`;i.forwardRef(({children:e,id:t,...r},n)=>{const a=we(t);return o.jsxs(T,{gap:2,children:[o.jsx(P0,{id:a,ref:n,...r,children:o.jsx(N0,{})}),o.jsx(D,{tag:"label",htmlFor:a,children:e})]})});const P0=g(ii)`
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
`,N0=g(si)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &[data-state='checked'] {
    @media (prefers-reduced-motion: no-preference) {
      animation: ${_.popIn} ${e=>e.theme.motion.timings[200]};
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
`,z0=e=>{const t=e.querySelector('[tabindex="0"]');t&&t.focus()},Pn=i.createContext({rowIndex:0,colIndex:0,setTableValues(){throw new Error("setTableValues must be initialized via the RawTableContext.Provider")}}),O0=()=>i.useContext(Pn),B0=i.forwardRef(({colCount:e,rowCount:t,jumpStep:r=3,initialCol:n=0,initialRow:a=0,...s},c)=>{const l=i.useRef(null),d=i.useRef(!1),p=ue(l,c),[f,h]=i.useState(a),[u,x]=i.useState(n),b=i.useCallback(({colIndex:v,rowIndex:m})=>{x(v),h(m)},[]);i.useEffect(()=>{d.current&&z0(l.current),d.current||(d.current=!0)},[u,f]);const w=v=>{switch(v.key){case se.RIGHT:{v.preventDefault(),x(m=>m<e-1?m+1:m);break}case se.LEFT:{v.preventDefault(),x(m=>m>0?m-1:m);break}case se.UP:{v.preventDefault(),h(m=>m>0?m-1:m);break}case se.DOWN:{v.preventDefault(),h(m=>m<t-1?m+1:m);break}case se.HOME:{v.preventDefault(),v.ctrlKey&&h(0),x(0);break}case se.END:{v.preventDefault(),v.ctrlKey&&h(t-1),x(e-1);break}case se.PAGE_DOWN:{v.preventDefault(),h(m=>m+r<t?m+r:t-1);break}case se.PAGE_UP:{v.preventDefault(),h(m=>m-r>0?m-r:0);break}}},C=i.useMemo(()=>({rowIndex:f,colIndex:u,setTableValues:b}),[u,f,b]);return o.jsx(Pn.Provider,{value:C,children:o.jsx("table",{role:"grid",ref:p,"aria-rowcount":t,"aria-colcount":e,onKeyDown:w,...s})})}),qe=(e,t)=>[...e.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')].filter(a=>!a.hasAttribute("disabled")),kt=e=>e.filter(t=>t.tagName==="INPUT"?t.type!=="checkbox"&&t.type!=="radio":!1),Nn=i.forwardRef(({coords:e={col:0,row:0},tag:t="td",...r},n)=>{const a=i.useRef(null),s=ue(n,a),{rowIndex:c,colIndex:l,setTableValues:d}=O0(),[p,f]=i.useState(!1),h=b=>{const w=qe(a.current);if(w.length===0||w.length===1&&kt(w).length===0)return;if(w.length>1&&!w.find(v=>v.tagName!=="BUTTON")){b.preventDefault();const v=w.findIndex(m=>m===document.activeElement);if(b.key===se.RIGHT){const m=w[v+1];m&&(b.stopPropagation(),m.focus())}else if(b.key===se.LEFT){const m=w[v-1];m&&(b.stopPropagation(),m.focus())}return}const C=b.key===se.ENTER;if(C&&!p)f(!0);else if((b.key===se.ESCAPE||C)&&p){if(C&&document.activeElement?.tagName==="A")return;f(!1),a.current.focus()}else p&&b.stopPropagation()},u=c===e.row-1&&l===e.col-1;Be(()=>{const b=qe(a.current);b.length===0||b.length===1&&kt(b).length!==0||b.length>1&&b.find(w=>w.tagName!=="BUTTON")?(a.current.setAttribute("tabIndex",!p&&u?"0":"-1"),b.forEach((w,C)=>{w.setAttribute("tabIndex",p?"0":"-1"),p&&C===0&&w.focus()})):b.forEach(w=>{w.setAttribute("tabIndex",u?"0":"-1")})},[p,u]);const x=i.useCallback(()=>{const b=qe(a.current);b.length>=1&&(kt(b).length!==0||!b.find(w=>w.tagName!=="BUTTON"))&&f(!0),d({rowIndex:e.row-1,colIndex:e.col-1})},[e,d]);return Be(()=>{const b=a.current;return qe(b).forEach(C=>{C.addEventListener("focus",x)}),()=>{qe(b).forEach(v=>{v.removeEventListener("focus",x)})}},[x]),o.jsx(k,{role:"gridcell",tag:t,ref:s,onKeyDown:h,...r})}),V0=e=>o.jsx(Nn,{...e,tag:"th"}),$0=({children:e,...t})=>{const r=i.Children.toArray(e).map(n=>i.isValidElement(n)?i.cloneElement(n,{"aria-rowindex":1}):n);return o.jsx("thead",{...t,children:r})},W0=({children:e,...t})=>{const r=i.Children.toArray(e).map((n,a)=>i.isValidElement(n)?i.cloneElement(n,{"aria-rowindex":a+2}):n);return o.jsx("tbody",{...t,children:r})},Z0=({children:e,...t})=>{const r=i.Children.toArray(e).map((n,a)=>i.isValidElement(n)?i.cloneElement(n,{"aria-colindex":a+1,coords:{col:a+1,row:t["aria-rowindex"]}}):n);return o.jsx(k,{tag:"tr",...t,children:r})},G0=g(We)`
  font-size: 0.5rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,zn=g(li)`
  font-size: 1rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,H0=g.div`
  border-radius: ${({theme:e})=>e.borderRadius};
  border: 1px solid ${({theme:e})=>e.colors.neutral150}

  &:focus-within {
    ${zn} {
      fill: ${({theme:e})=>e.colors.primary600};
    }
  }
`,U0=g(Ro)`
  border: 1px solid ${({theme:e})=>e.colors.neutral150}
  height: 16px;
  padding: 0 0 0 8px;
  color: ${({theme:e})=>e.colors.neutral800};

  &::placeholder {
    color: ${({theme:e})=>e.colors.neutral500};
  }

  &:hover {
    button {
      cursor: pointer;
    }
  }

  ${Me()}
`;i.forwardRef(({name:e,children:t,value:r="",onClear:n,clearLabel:a,...s},c)=>{const l=i.useRef(null),d=r.length>0,p=h=>{n(h),l.current.focus()},f=sn(c,l);return o.jsx(H0,{children:o.jsxs(Ve,{name:e,children:[o.jsx(Ge,{children:o.jsx(wn,{children:t})}),o.jsx(U0,{size:"S",ref:f,value:r,startAction:o.jsx(zn,{"aria-hidden":!0}),endAction:d?o.jsx(tc,{label:a,onClick:p,onMouseDown:h=>{h.preventDefault()},children:o.jsx(G0,{})}):void 0,...s})]})})});const q0=g(k)`
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
`,Q0=({children:e,icon:t,label:r,disabled:n=!1,onClick:a,...s})=>{const c=l=>{n||!a||a(l)};return o.jsxs(T,{inline:!0,background:n?"neutral200":"primary100",color:n?"neutral700":"primary600",paddingLeft:3,paddingRight:1,borderColor:n?"neutral300":"primary200",hasRadius:!0,height:"3.2rem",...s,children:[o.jsx(Y0,{$disabled:n,variant:"pi",fontWeight:"bold",children:e}),o.jsx(q0,{tag:"button",disabled:n,"aria-disabled":n,"aria-label":r,padding:2,onClick:c,$iconAction:!!a,children:t})]})},Y0=g(D)`
  color: inherit;
  border-right: 1px solid ${({theme:e,$disabled:t})=>t?e.colors.neutral300:e.colors.primary200};
  padding-right: ${({theme:e})=>e.spaces[2]};
`;i.forwardRef(({children:e,clearLabel:t="Clear",customizeContent:r,disabled:n,hasError:a,id:s,name:c,onChange:l,onClear:d,onCloseAutoFocus:p,onReachEnd:f,placeholder:h,required:u,size:x,startIcon:b,value:w,withTags:C,...v},m)=>{const y=i.useRef(null),[j,S]=i.useState(),[R,I]=i.useState(!1),O=B=>{l?l(B):S(B)},z=B=>()=>{const te=Array.isArray(w)?w.filter(ae=>ae!==B):(j??[]).filter(ae=>ae!==B);l?l(te):S(te)},N=B=>{I(B)},$=we(),L=`intersection-${Oe($)}`;rt(y,B=>{f&&f(B)},{selectorToWatch:`#${L}`,skipWhen:!R});const E=typeof w<"u"&&w!==null?w:j,G=B=>B&&typeof B=="object"&&B.value?o.jsx(Q0,{tabIndex:-1,disabled:n,icon:o.jsx(We,{width:`${14/16}rem`,height:`${14/16}rem`}),onClick:z(B.value),children:B.textValue},B.value):null,{error:H,...Z}=me("MultiSelect"),X=!!H||a,Q=Z.id??s,ee=Z.name??c,U=Z.required??u;let ne;return H?ne=`${Q}-error`:Z.hint&&(ne=`${Q}-hint`),o.jsxs(Cn,{onOpenChange:N,disabled:n,required:U,onValueChange:O,value:E,...v,multi:!0,children:[o.jsx(yn,{ref:m,id:Q,name:ee,"aria-label":v["aria-label"],"aria-describedby":ne??v["aria-describedby"],startIcon:b,hasError:X,disabled:n,clearLabel:t,onClear:E?.length?d:void 0,withTags:!!(C&&(E?.length??!1)),size:x,children:o.jsx(jn,{placeholder:h,textColor:E?.length?"neutral800":"neutral600",children:E?.length?C?G:r?r(E):void 0:void 0})}),o.jsx(Sn,{children:o.jsx(Rn,{position:"popper",sideOffset:4,onCloseAutoFocus:p,children:o.jsxs(kn,{ref:y,children:[e,o.jsx(k,{id:L,width:"100%",height:"1px"})]})})})]})});const J0=i.forwardRef(({value:e,children:t,startIcon:r,...n},a)=>o.jsxs(Io,{ref:a,value:e.toString(),...n,children:[r&&o.jsx(k,{tag:"span","aria-hidden":!0,children:r}),o.jsx(In,{children:({isSelected:s,isIntermediate:c})=>o.jsx(So,{checked:c?"indeterminate":s})}),o.jsx(D,{children:o.jsx(Tn,{children:t})})]}));i.forwardRef(({children:e,label:t,startIcon:r,values:n=[],...a},s)=>o.jsxs(Oc,{ref:s,children:[o.jsxs(Io,{value:n,...a,children:[r&&o.jsx(k,{tag:"span","aria-hidden":!0,children:r}),o.jsx(In,{children:({isSelected:c,isIntermediate:l})=>o.jsx(So,{checked:l?"indeterminate":c})}),o.jsx(D,{children:t})]}),e]}));g(J0)`
  padding-left: ${({theme:e})=>e.spaces[7]};
`;const K0="23.2rem";i.forwardRef(({...e},t)=>o.jsx(X0,{ref:t,...e,tag:"nav"}));const X0=g(k)`
  width: ${K0};
  background: ${({theme:e})=>e.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
  z-index: 1;
`;g(h0)`
  width: 2.4rem;
  background-color: ${({theme:e})=>e.colors.neutral200};
`;ce(({active:e,children:t,icon:r=null,withBullet:n=!1,isSubSectionChild:a=!1,...s},c)=>o.jsxs(_0,{background:"neutral100",paddingLeft:a?9:7,paddingBottom:2,paddingTop:2,ref:c,...s,children:[o.jsxs(T,{children:[r?o.jsx(ed,{children:r}):o.jsx(Wt,{$active:e}),o.jsx(D,{paddingLeft:2,children:t})]}),n&&o.jsx(T,{paddingRight:4,children:o.jsx(Wt,{$active:!0})})]}));const Wt=g.span`
  width: 0.4rem;
  height: 0.4rem;
  background-color: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.neutral600};
  border-radius: 50%;
`,_0=g(ot)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:e})=>e.colors.neutral800};
  svg > * {
    fill: ${({theme:e})=>e.colors.neutral600};
  }

  &.active {
    ${({theme:e})=>F`
        background-color: ${e.colors.primary100};
        border-right: 2px solid ${e.colors.primary600};
        color: ${e.colors.primary700};
        font-weight: 500;
      `}

    ${Wt} {
      background-color: ${({theme:e})=>e.colors.primary600};
    }
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,ed=g.div`
  svg {
    height: 1.6rem;
    width: 1.6rem;
  }
`;g.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`;g(k)`
  & > svg {
    height: 0.4rem;
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`;i.forwardRef(({visibleLabels:e,onLabel:t="On",offLabel:r="Off",onCheckedChange:n,checked:a,defaultChecked:s,disabled:c,...l},d)=>{const[p,f]=ye({prop:a,defaultProp:s}),h=u=>{f(u)};return o.jsxs(T,{gap:3,children:[o.jsx(td,{ref:d,onCheckedChange:De(n,h),checked:p,disabled:c,...l,children:o.jsx(od,{})}),e?o.jsx(rd,{"aria-hidden":!0,"data-disabled":c,"data-state":p?"checked":"unchecked",children:p?t:r}):null]})});const td=g(ci)`
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
`,od=g(di)`
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
`,rd=g(D)`
  color: ${e=>e.theme.colors.danger600};

  &[data-state='checked'] {
    color: ${e=>e.theme.colors.success600};
  }

  &[data-disabled='true'] {
    color: ${({theme:e})=>e.colors.neutral500};
  }
`,[nd,Mo]=tt("Tabs");i.forwardRef(({disabled:e=!1,variant:t="regular",hasError:r,...n},a)=>o.jsx(nd,{disabled:e,hasError:r,variant:t,children:o.jsx(ad,{ref:a,...n})}));const ad=g(ui)`
  width: 100%;
  position: relative;
`;i.forwardRef((e,t)=>{const{variant:r}=Mo("List");return o.jsx(id,{ref:t,...e,$variant:r})});const id=g(fi)`
  display: flex;
  align-items: ${e=>e.$variant==="regular"?"flex-end":"unset"};
  position: relative;
  z-index: 0;
`;i.forwardRef(({children:e,disabled:t,...r},n)=>{const{disabled:a,variant:s,hasError:c}=Mo("Trigger"),l=a===!0||a===r.value||t,d=c===r.value;return o.jsxs(sd,{ref:n,...r,$hasError:d,$variant:s,disabled:l,children:[o.jsx(Bn,{fontWeight:"bold",variant:s==="simple"?"sigma":void 0,children:e}),s==="simple"?o.jsx(On,{}):null]})});const On=g.span`
  display: block;
  width: 100%;
  background-color: currentColor;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  height: 0.2rem;
`,Bn=g(D)``,sd=g(hi)`
  position: relative;
  color: ${e=>e.$hasError?e.theme.colors.danger600:e.theme.colors.neutral600};
  cursor: pointer;
  z-index: 0;

  ${e=>e.$variant==="simple"?F`
        padding-block: ${t=>t.theme.spaces[4]};
        padding-inline: ${t=>t.theme.spaces[4]};

        & > ${Bn} {
          line-height: 1.2rem;
        }

        &[data-state='active'] {
          color: ${e.$hasError?e.theme.colors.danger600:e.theme.colors.primary700};

          & > ${On} {
            opacity: 1;
          }
        }
      `:F`
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
`;i.forwardRef((e,t)=>{const{variant:r}=Mo("Content");return o.jsx(ld,{$variant:r,ref:t,...e})});const ld=g(pi)`
  ${e=>e.$variant==="simple"?F``:F`
        position: relative;
        z-index: 1;
        background-color: ${t=>t.theme.colors.neutral0};
      `}
`,cd=g(k)`
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
`,dd=g(B0)`
  width: 100%;
  white-space: nowrap;
`,ud=g(k)`
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
`,fd=g(k)`
  overflow-x: auto;
`;i.forwardRef(({footer:e,...t},r)=>{const n=i.useRef(null),[a,s]=i.useState(),c=l=>{const d=l.target.scrollWidth-l.target.clientWidth;if(l.target.scrollLeft===0){s("right");return}if(l.target.scrollLeft===d){s("left");return}l.target.scrollLeft>0&&s("both")};return i.useEffect(()=>{n.current.scrollWidth>n.current.clientWidth&&s("right")},[]),o.jsxs(cd,{shadow:"tableShadow",hasRadius:!0,background:"neutral0",children:[o.jsx(ud,{$overflowing:a,position:"relative",children:o.jsx(fd,{ref:n,onScroll:c,paddingLeft:6,paddingRight:6,children:o.jsx(dd,{ref:r,...t})})}),e]})});g(W0)`
  & tr:last-of-type {
    border-bottom: none;
  }
`;g($0)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`;g(Z0)`
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
`;const Vn=g(Nn)`
  vertical-align: middle;
  text-align: left;
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`;i.forwardRef(({children:e,action:t,...r},n)=>o.jsx(Vn,{color:"neutral600",as:V0,ref:n,...r,children:o.jsxs(T,{children:[e,t]})}));i.forwardRef(({children:e,...t},r)=>o.jsx(Vn,{color:"neutral800",ref:r,...t,children:e}));g(k)`
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
`;g(k)`
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
  display: block;
  width: 100%;
  border: none;
`;ce(({children:e,startIcon:t,endIcon:r,disabled:n=!1,loading:a=!1,...s},c)=>{const l=n||a;return o.jsxs(md,{ref:c,disabled:l,"aria-disabled":l,tag:"button",type:"button",gap:2,...s,children:[a?o.jsx(pd,{"aria-hidden":!0,children:o.jsx(sr,{})}):t,o.jsx(D,{variant:"pi",children:e}),r]})});const hd=ie`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,pd=g.span`
  display: flex;
  animation: ${hd} 2s infinite linear;
  will-change: transform;
`,md=g(T)`
  border: none;
  background-color: transparent;
  color: ${e=>e.theme.colors.primary600};
  cursor: pointer;

  &[aria-disabled='true'] {
    pointer-events: none;
    color: ${e=>e.theme.colors.neutral600};
  }

  ${gt}
`,gd=i.forwardRef((e,t)=>o.jsx(Ro,{ref:t,...e}));gd.displayName="TextInput";i.forwardRef(({disabled:e,hasError:t,id:r,name:n,required:a,...s},c)=>{const{error:l,...d}=me("Textarea"),p=!!l||t,f=d.id??r,h=d.name??n,u=d.required||a;let x;return l?x=`${f}-error`:d.hint&&(x=`${f}-hint`),o.jsx(xd,{borderColor:p?"danger600":"neutral200",$hasError:p,hasRadius:!0,children:o.jsx(bd,{"aria-invalid":p,"aria-required":u,tag:"textarea",background:e?"neutral150":"neutral0",color:e?"neutral600":"neutral800",disabled:e,fontSize:2,hasRadius:!0,ref:c,lineHeight:4,padding:4,width:"100%",height:"100%",id:f,name:h,"aria-describedby":x,...s})})});const xd=g(k)`
  height: 10.5rem;
  ${Me()}
`,bd=g(k)`
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
`;i.forwardRef(({offLabel:e,onLabel:t,disabled:r,hasError:n,required:a,id:s,name:c,checked:l,onChange:d,...p},f)=>{const[h=!1,u]=ye({prop:l}),x=h!==null&&!h,{error:b,...w}=me("Toggle"),C=!!b||n,v=w.id??s,m=w.name??c,y=w.required||a;let j;return b?j=`${v}-error`:w.hint&&(j=`${v}-hint`),o.jsxs(wd,{position:"relative",hasRadius:!0,padding:1,background:r?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral200",wrap:"wrap",cursor:r?"not-allowed":"pointer",$hasError:C,children:[o.jsx(Ko,{hasRadius:!0,flex:"1 1 50%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,justifyContent:"center",background:r&&x?"neutral200":x?"neutral0":"transparent",borderColor:r&&x?"neutral300":x?"neutral200":r?"neutral150":"neutral100",children:o.jsx(D,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:r?"neutral700":x?"danger700":"neutral600",children:e})}),o.jsx(Ko,{hasRadius:!0,flex:"1 1 50%",paddingLeft:3,paddingRight:3,justifyContent:"center",background:r&&h?"neutral200":h?"neutral0":"transparent",borderColor:r&&h?"neutral300":h?"neutral200":r?"neutral150":"neutral100",children:o.jsx(D,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:r?"neutral700":h?"primary600":"neutral600",children:t})}),o.jsx(vd,{...p,id:v,name:m,ref:f,onChange:S=>{u(S.currentTarget.checked),d?.(S)},type:"checkbox","aria-required":y,disabled:r,"aria-disabled":r,checked:!!h,"aria-describedby":j})]})});const wd=g(T)`
  ${Me()}
`,Ko=g(T)`
  padding-block: 0.6rem;
`,vd=g.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 0;
  width: 100%;
`;ce((e,t)=>{const{gap:r=0,gridCols:n=12,...a}=e;return o.jsx(Cd,{ref:t,$gap:r,$gridCols:n,...a})});const Cd=g(k)`
  display: grid;
  grid-template-columns: repeat(${({$gridCols:e})=>e}, 1fr);
  ${({theme:e,$gap:t})=>mt({gap:t},e)}
`;ce(({col:e,s:t,xs:r,m:n,...a},s)=>o.jsx(yd,{ref:s,$col:e,$s:t,$xs:r,$m:n,...a}));const yd=g(T)`
  grid-column: span ${({$xs:e})=>e??12};
  max-width: 100%;

  ${({theme:e})=>e.breakpoints.small} {
    grid-column: span ${({$s:e,$xs:t})=>e??t??12};
  }

  ${({theme:e})=>e.breakpoints.medium} {
    grid-column: span ${({$m:e,$s:t,$xs:r})=>e??t??r??12};
  }

  ${({theme:e})=>e.breakpoints.large} {
    grid-column: span ${({$col:e,$m:t,$s:r,$xs:n})=>e??t??r??n??12};
  }
`,jd=(e,t)=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,ref:t,...e,children:[o.jsx("rect",{width:31,height:23,x:.5,y:4.5,fill:"#EAF5FF",stroke:"#B8E1FF",rx:2.5}),o.jsx("path",{fill:"#0C75AF",d:"M14.75 11.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3.5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2M13.75 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4.5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-4.5 4.25a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4.5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"})]});i.forwardRef(jd);const Sd=(e,t)=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,ref:t,...e,children:[o.jsx("rect",{width:31,height:23,x:.5,y:4.5,fill:"#EAFBE7",stroke:"#C6F0C2",rx:2.5}),o.jsx("path",{fill:"#328048",d:"M19 11.5h-6a4.5 4.5 0 1 0 0 9h6a4.5 4.5 0 1 0 0-9m0 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"})]});i.forwardRef(Sd);const Rd=(e,t)=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,ref:t,...e,children:[o.jsx("path",{fill:"#D9822F",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4z"}),o.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M17.143 18.659v2.912l6.856-3.878v-2.815L17.143 11v2.906l4.16 2.38zm-2.287 0-4.16-2.374 4.16-2.38V11L8 14.877v2.816l6.856 3.878z",clipRule:"evenodd"})]});i.forwardRef(Rd);const kd=(e,t)=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,ref:t,...e,children:[o.jsx("rect",{width:31,height:23,x:.5,y:4.5,fill:"#4945FF",stroke:"#4945FF",rx:2.5}),o.jsx("path",{fill:"#fff",d:"M14.328 14.54v-.083c-.04-.937-.75-1.559-1.787-1.559-1.535 0-2.725 1.57-2.725 3.65 0 1.302.71 2.104 1.846 2.104.961 0 1.787-.545 2.063-1.37h1.752c-.37 1.78-1.922 2.935-3.967 2.935-2.121 0-3.504-1.395-3.504-3.545 0-3.123 1.951-5.344 4.646-5.344 1.94 0 3.41 1.283 3.41 2.96 0 .087 0 .163-.011.251zM20.053 20H18.27l1.489-6.943h-2.532l.311-1.512h6.844l-.31 1.512H21.54z"})]});i.forwardRef(kd);const Id=(e,t)=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,ref:t,...e,children:[o.jsx("rect",{width:31,height:23,x:.5,y:4.5,fill:"#F6F6F9",stroke:"#DCDCE4",rx:2.5}),o.jsx("path",{fill:"#666687",d:"M20.5 17.5c-.358 0-.71.085-1.029.25l-1.337-1.04q.11-.326.116-.67l.647-.214a2.25 2.25 0 1 0-.637-1.37l-.486.162A2.25 2.25 0 0 0 16 13.75c-.062 0-.117 0-.176.008l-.278-.625A2.25 2.25 0 1 0 14 13.75c.063 0 .117 0 .176-.008l.278.625a2.24 2.24 0 0 0-.537 2.482l-1.33 1.182a2.25 2.25 0 1 0 .996 1.12l1.33-1.182a2.25 2.25 0 0 0 2.3-.075l1.224.954A2.25 2.25 0 1 0 20.5 17.5m0-4a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m-7.25-2a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0m-1.75 9.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5M15.25 16a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0m5.25 4.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5"})]});i.forwardRef(Id);const Td=(e,t)=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,ref:t,...e,children:[o.jsx("rect",{width:31,height:23,x:.5,y:4.5,fill:"#FDF4DC",stroke:"#FAE7B9",rx:2.5}),o.jsx("path",{fill:"#D9822F",d:"M21 10h-1.5v-.5a.5.5 0 0 0-1 0v.5h-5v-.5a.5.5 0 0 0-1 0v.5H11a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1m0 3H11v-2h1.5v.5a.5.5 0 0 0 1 0V11h5v.5a.5.5 0 0 0 1 0V11H21z"})]});i.forwardRef(Td);const Md=(e,t)=>o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,ref:t,...e,children:o.jsx("path",{fill:"#5865F2",d:"M27.107 5.911a26.5 26.5 0 0 0-6.602-2.031 18 18 0 0 0-.845 1.72 24.6 24.6 0 0 0-7.327 0 18 18 0 0 0-.846-1.72A26.7 26.7 0 0 0 4.88 5.916C.702 12.098-.43 18.126.136 24.068a26.6 26.6 0 0 0 8.097 4.065 19.6 19.6 0 0 0 1.734-2.796c-.947-.354-1.86-.79-2.73-1.304.228-.166.452-.337.669-.504a19.02 19.02 0 0 0 16.188 0q.33.271.67.504c-.872.515-1.788.952-2.736 1.306a19.4 19.4 0 0 0 1.734 2.794 26.5 26.5 0 0 0 8.102-4.062c.665-6.892-1.135-12.864-4.757-18.16M10.684 20.414c-1.578 0-2.882-1.433-2.882-3.194 0-1.762 1.259-3.207 2.877-3.207 1.619 0 2.912 1.445 2.885 3.207s-1.271 3.194-2.88 3.194m10.632 0c-1.581 0-2.88-1.433-2.88-3.194 0-1.762 1.259-3.207 2.88-3.207s2.904 1.445 2.877 3.207-1.269 3.194-2.877 3.194"})});i.forwardRef(Md);const Ad=(e,t)=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,ref:t,...e,children:[o.jsx("path",{fill:"#231F20",d:"M15.659.302C7.158.302 0 7.194 0 15.698v15.943l15.656-.015c8.501 0 15.396-7.158 15.396-15.66 0-8.5-6.901-15.664-15.393-15.664"}),o.jsx("path",{fill:"#FFF9AE",d:"M15.81 6.261a9.546 9.546 0 0 0-8.39 14.09l-1.726 5.554 6.2-1.4A9.541 9.541 0 1 0 15.82 6.26z"}),o.jsx("path",{fill:"#00AEEF",d:"M23.381 9.999a9.54 9.54 0 0 1-11.487 14.49l-6.2 1.419 6.312-.746A9.54 9.54 0 0 0 23.381 10"}),o.jsx("path",{fill:"#00A94F",d:"M21.624 8.239a9.54 9.54 0 0 1-9.91 15.61l-6.02 2.059 6.2-1.404a9.54 9.54 0 0 0 9.73-16.265"}),o.jsx("path",{fill:"#F15D22",d:"M7.991 20.562A9.542 9.542 0 0 1 23.387 9.994 9.543 9.543 0 0 0 7.42 20.35l-1.726 5.555z"}),o.jsx("path",{fill:"#E31B23",d:"M7.42 20.35A9.543 9.543 0 0 1 21.624 8.238 9.543 9.543 0 0 0 6.832 20.202l-1.135 5.706z"})]});i.forwardRef(Ad);const Dd=(e,t)=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,ref:t,...e,children:[o.jsx("rect",{width:31,height:23,x:.5,y:4.5,fill:"#F6F6F9",stroke:"#DCDCE4",rx:2.5}),o.jsx("path",{fill:"#666687",d:"M23.75 16a3.75 3.75 0 0 1-6.402 2.652l-.03-.033-3.742-4.225a2.25 2.25 0 1 0 0 3.212l.193-.218a.75.75 0 1 1 1.125.994l-.21.237-.03.033a3.75 3.75 0 1 1 0-5.304l.03.033 3.742 4.225a2.25 2.25 0 1 0 0-3.212l-.193.218a.751.751 0 1 1-1.125-.995l.21-.236.03-.033A3.75 3.75 0 0 1 23.75 16"})]});i.forwardRef(Dd);const Fd=(e,t)=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,ref:t,...e,children:[o.jsx("rect",{width:31,height:23,x:.5,y:4.5,fill:"#FCECEA",stroke:"#F5C0B8",rx:2.5}),o.jsx("path",{fill:"#D02B20",d:"M16 9.25a6.75 6.75 0 0 0 0 13.5c1.392 0 2.856-.42 3.915-1.125a.75.75 0 1 0-.83-1.25c-.813.54-1.994.875-3.085.875A5.25 5.25 0 1 1 21.25 16c0 .58-.104 1.067-.293 1.372-.165.265-.375.378-.707.378s-.542-.113-.707-.378c-.187-.305-.293-.791-.293-1.372v-2.5a.75.75 0 0 0-1.468-.216 3.25 3.25 0 1 0 .554 4.973c.433.637 1.09.993 1.914.993 1.542 0 2.5-1.245 2.5-3.25A6.76 6.76 0 0 0 16 9.25m0 8.5a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5"})]});i.forwardRef(Fd);const Ed=(e,t)=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 217 121",ref:t,...e,children:[o.jsxs("g",{clipPath:"url(#EmptyData_svg__a)",children:[o.jsx("path",{stroke:"#EEEEFA",strokeDasharray:"3.93 4.91",strokeLinecap:"round",strokeWidth:.982,d:"M1.158 99.652h215.018M1.158 80.015h215.018M1.158 59.397h215.018M1.158 38.779h215.018M1.158 20.124h215.018"}),o.jsx("path",{fill:"#D9D8FF",fillOpacity:.8,fillRule:"evenodd",d:"M182.63 25.086c4.112 0 7.446 3.279 7.446 7.323s-3.334 7.324-7.446 7.324h-42.545c4.112 0 7.445 3.279 7.445 7.323s-3.333 7.324-7.445 7.324h23.4c4.112 0 7.445 3.278 7.445 7.323 0 4.044-3.333 7.323-7.445 7.323h-10.821c-5.185 0-9.388 3.28-9.388 7.324q0 2.847 3.162 5.314c1.968 1.536 4.676 1.736 6.861 2.943 2.27 1.255 3.804 3.646 3.804 6.39 0 4.044-3.333 7.323-7.445 7.323H61.376c-4.112 0-7.446-3.279-7.446-7.323s3.334-7.324 7.446-7.324H19.894c-4.112 0-7.445-3.279-7.445-7.323s3.333-7.324 7.445-7.324H62.44c4.112 0 7.445-3.278 7.445-7.323s-3.334-7.324-7.446-7.324H35.85c-4.112 0-7.446-3.278-7.446-7.323 0-4.044 3.334-7.323 7.446-7.323h42.545c-4.112 0-7.445-3.28-7.445-7.324s3.333-7.323 7.445-7.323zm0 29.294c4.112 0 7.446 3.278 7.446 7.323 0 4.044-3.334 7.323-7.446 7.323s-7.445-3.278-7.445-7.323 3.333-7.324 7.445-7.324",clipRule:"evenodd"}),o.jsx("rect",{width:27,height:79.036,x:109.403,y:33.133,fill:"#fff",stroke:"#7B79FF",strokeWidth:2.455,rx:4.173}),o.jsx("rect",{width:27,height:102.6,x:74.058,y:9.57,fill:"#fff",stroke:"#7B79FF",strokeWidth:2.455,rx:4.173}),o.jsx("rect",{width:27,height:58.418,x:39.203,y:53.26,fill:"#fff",stroke:"#7B79FF",strokeWidth:2.455,rx:4.173}),o.jsx("rect",{width:27,height:55.473,x:144.748,y:56.697,fill:"#fff",stroke:"#7B79FF",strokeWidth:2.455,rx:4.173}),o.jsx("rect",{width:21.6,height:53.018,x:41.903,y:55.961,fill:"#EEEEFA",rx:1.964}),o.jsx("rect",{width:21.6,height:73.636,x:112.103,y:35.833,fill:"#EEEEFA",rx:1.964})]}),o.jsx("defs",{children:o.jsx("clipPath",{id:"EmptyData_svg__a",children:o.jsx("path",{fill:"#fff",d:"M.667.797h216v120h-216z"})})})]});i.forwardRef(Ed);const Ld=(e,t)=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 217 121",ref:t,...e,children:[o.jsxs("g",{clipPath:"url(#EmptyDocuments_svg__a)",opacity:.84,children:[o.jsx("path",{fill:"#D9D8FF",fillOpacity:.8,fillRule:"evenodd",d:"M189.917 20.442a7.583 7.583 0 0 1 0 15.167h-43.334a7.584 7.584 0 1 1 0 15.167h23.834a7.583 7.583 0 0 1 0 15.166h-11.022c-5.281 0-9.562 3.396-9.562 7.584q0 2.934 3.19 5.479c2.017 1.608 4.824 1.818 7.065 3.097a7.584 7.584 0 0 1-3.755 14.174H66.417a7.583 7.583 0 1 1 0-15.167h-42.25a7.583 7.583 0 0 1 0-15.167H67.5a7.583 7.583 0 0 0 0-15.166H40.417a7.583 7.583 0 0 1 0-15.167H83.75a7.583 7.583 0 0 1 0-15.167zm0 30.334a7.583 7.583 0 0 1 0 15.166 7.584 7.584 0 0 1 0-15.166",clipRule:"evenodd"}),o.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"m133.228 20.443 10.077 73.496.905 7.373a4.33 4.33 0 0 1-3.773 4.829l-63.44 7.79a4.334 4.334 0 0 1-4.83-3.773l-9.766-79.547a2.167 2.167 0 0 1 1.886-2.414l.023-.003 5.263-.59zm-59.4 6.683 4.97-.557z",clipRule:"evenodd"}),o.jsx("path",{stroke:"#7B79FF",strokeWidth:2.5,d:"m73.829 27.126 4.97-.557m54.429-6.126 10.077 73.496.905 7.373a4.33 4.33 0 0 1-3.773 4.829l-63.44 7.79a4.334 4.334 0 0 1-4.83-3.773l-9.766-79.547a2.167 2.167 0 0 1 1.886-2.414l.023-.003 5.263-.59z"}),o.jsx("path",{fill:"#F0F0FF",fillRule:"evenodd",d:"m130.485 25.068 9.121 66.607.821 6.683c.264 2.152-1.246 4.109-3.373 4.37l-56.812 6.976c-2.128.261-4.066-1.272-4.33-3.425l-8.83-71.908a2.166 2.166 0 0 1 1.887-2.414l7.028-.863",clipRule:"evenodd"}),o.jsx("path",{fill:"#fff",fillRule:"evenodd",stroke:"#7B79FF",strokeWidth:2.5,d:"M135.998 6.63H86.645a2.97 2.97 0 0 0-2.107.872 2.97 2.97 0 0 0-.873 2.107v82.333c0 .823.334 1.568.873 2.107a2.97 2.97 0 0 0 2.106.872h63.917a2.97 2.97 0 0 0 2.107-.872 2.97 2.97 0 0 0 .872-2.107V24.164a2.98 2.98 0 0 0-.873-2.108L138.104 7.502a2.98 2.98 0 0 0-2.106-.872Z",clipRule:"evenodd"}),o.jsx("path",{stroke:"#7B79FF",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M136.478 7.879v12.563a3.25 3.25 0 0 0 3.25 3.25h8.595M95.311 78.942h28.167m-28.167-55.25h28.167zm0 13h46.583zm0 14.084h46.583zm0 14.083h46.583z"})]}),o.jsx("defs",{children:o.jsx("clipPath",{id:"EmptyDocuments_svg__a",children:o.jsx("path",{fill:"#fff",d:"M.667.797h216v120h-216z"})})})]});i.forwardRef(Ld);const Pd=(e,t)=>o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 193 121",ref:t,...e,children:o.jsxs("g",{opacity:.88,children:[o.jsx("path",{fill:"#DBDBFA",fillRule:"evenodd",d:"M160.947 53.823a4 4 0 0 0-.15-.281c-3.5-5.96-7.289-11.263-11.52-15.858h18.096c4.445 0 8.048 3.613 8.048 8.07 0 4.456-3.603 8.069-8.048 8.069zm-8.493 16.139c-11.562 11.57-31.953 19.597-55.21 19.597-31.435 0-54.384-16.705-55.701-35.736H29.409c-4.445 0-8.048 3.613-8.048 8.07 0 4.456 3.603 8.069 8.048 8.069h11.697c5.604 0 10.148 3.612 10.148 8.069q0 3.786-4.98 6.963c-.942.601-2.034.876-3.123 1.15-.33.083-.658.166-.983.257a8.07 8.07 0 0 0-5.86 7.768c0 4.457 3.602 8.07 8.047 8.07h95.425c4.445 0 8.048-3.613 8.048-8.07 0-4.456-3.603-8.069-8.048-8.069h44.839c4.444 0 8.048-3.613 8.048-8.07 0-4.456-3.604-8.068-8.048-8.068zM68.723 21.546H8.715c-4.445 0-8.048 3.613-8.048 8.07 0 4.456 3.603 8.068 8.048 8.068h37.314c4.606-6.843 12.5-12.477 22.694-16.138M.667 61.892c0-4.456 3.603-8.069 8.048-8.069 4.444 0 8.047 3.613 8.047 8.07 0 4.456-3.603 8.069-8.047 8.069S.667 66.349.667 61.892",clipRule:"evenodd"}),o.jsx("path",{stroke:"#7B79FF",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"m158.091 49.212 1.446 2.131"}),o.jsx("path",{fill:"#fff",d:"M154.862 59.69c-45.683-57.683-95.639-25.812-117.374.01-1.404 1.668-1.426 4.117-.15 5.882 47.31 65.454 96.71 29.044 117.704-.133 1.24-1.722 1.138-4.094-.18-5.758"}),o.jsx("path",{fill:"#7B79FF",fillRule:"evenodd",d:"M113.536 28.091c-9.141-2.486-18.085-2.558-26.571-.94-21.301 4.058-39.458 18.707-50.43 31.742-1.794 2.132-1.798 5.217-.206 7.42C48.246 82.798 60.36 92.962 72.218 98.41q1.186.544 2.367 1.027l1.206-2.209a57 57 0 0 1-2.53-1.09c-11.366-5.222-23.168-15.052-34.905-31.291-.961-1.33-.92-3.143.092-4.345 10.764-12.787 28.453-26.985 48.985-30.897 7.905-1.506 16.271-1.495 24.869.745zm-28.277 71.966c7.097 1.397 13.98 1.155 20.536-.279 20.46-4.474 37.826-20.593 48.237-35.062.899-1.25.84-3.007-.146-4.252-10.728-13.547-21.653-22.062-32.351-26.854l1.201-2.2c11.026 4.98 22.21 13.738 33.11 27.502 1.649 2.083 1.795 5.069.215 7.265-10.584 14.708-28.416 31.382-49.732 36.044-7.115 1.556-14.607 1.77-22.323.131z",clipRule:"evenodd"}),o.jsx("path",{stroke:"#7B79FF",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M127.159 22.08c13.23 6.32 21.864 14.378 27.624 21.78M34.068 48.642C53.002 23.337 89.197 8.3 117.953 18.635"}),o.jsx("ellipse",{cx:94.98,cy:66.505,fill:"#F0F0FF",rx:18.395,ry:18.444}),o.jsx("path",{fill:"#7B79FF",fillRule:"evenodd",d:"M104.76 44.362a24 24 0 0 0-9.776-2.067c-13.334 0-24.144 10.838-24.144 24.208 0 8.428 4.296 15.85 10.813 20.186l1.203-2.204c-5.741-3.903-9.516-10.498-9.516-17.982 0-11.995 9.696-21.708 21.644-21.708 3.045 0 5.944.631 8.574 1.77zM91.95 87.999q1.488.211 3.034.212c11.947 0 21.643-9.713 21.643-21.708a21.66 21.66 0 0 0-5.222-14.142l1.272-2.33a24.16 24.16 0 0 1 6.45 16.472c0 13.37-10.809 24.207-24.143 24.207-1.47 0-2.908-.131-4.305-.383z",clipRule:"evenodd"}),o.jsx("path",{fill:"#fff",stroke:"#7B79FF",strokeWidth:2.5,d:"M116.729 54.977c0 4.406-3.562 7.972-7.948 7.972s-7.948-3.566-7.948-7.972 3.562-7.972 7.948-7.972 7.948 3.566 7.948 7.972Z"}),o.jsx("path",{fill:"#fff",d:"M110.472 33.635c1.275-2.324 4.078-3.019 6.296-1.56 2.264 1.49 3.053 4.654 1.751 7.027l-31.287 57.05c-1.275 2.324-4.079 3.018-6.296 1.559-2.265-1.49-3.053-4.653-1.751-7.027z"}),o.jsx("rect",{width:3.668,height:134.376,fill:"#7B79FF",rx:1.834,transform:"matrix(.82817 .56048 -.47918 .87772 127.181 .797)"})]})});i.forwardRef(Pd);const Nd=(e,t)=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 217 121",ref:t,...e,children:[o.jsx("g",{clipPath:"url(#EmptyPictures_svg__a)",children:o.jsxs("g",{clipPath:"url(#EmptyPictures_svg__b)",opacity:.88,children:[o.jsx("path",{fill:"#D9D8FF",fillOpacity:.8,fillRule:"evenodd",d:"M119.667 28.797a7 7 0 1 1 0 14h64a7 7 0 1 1 0 14h22a7 7 0 1 1 0 14h-19a7 7 0 1 0 0 14h6a7 7 0 1 1 0 14h-52a7 7 0 0 1-1.5-.161 7 7 0 0 1-1.5.16h-91a7 7 0 0 1 0-14h-39a7 7 0 1 1 0-14h40a7 7 0 0 0 0-14h-25a7 7 0 1 1 0-14h40a7 7 0 1 1 0-14zm90 56a7 7 0 1 1 0 14 7 7 0 0 1 0-14",clipRule:"evenodd"}),o.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"m74.497 103.07-8.622 1.422a4 4 0 0 1-4.518-3.404L50.224 21.866a4 4 0 0 1 3.404-4.518l78.231-10.994a4 4 0 0 1 4.518 3.404c.474 3.377 2.408 16.468 2.571 17.63",clipRule:"evenodd"}),o.jsx("path",{fill:"#F0F0FF",fillRule:"evenodd",d:"m72.472 99.51-3.696.525a3.62 3.62 0 0 1-4.096-3.085l-9.996-71.925a3.646 3.646 0 0 1 3.097-4.107L128.82 10.82a3.62 3.62 0 0 1 4.096 3.085l.859 6.18 9.206 66.599c.306 2.212-1.22 4.257-3.408 4.566l-.07.01z",clipRule:"evenodd"}),o.jsx("path",{stroke:"#7B79FF",strokeLinecap:"round",strokeWidth:2.5,d:"m69.945 103.92-4.07.572a4 4 0 0 1-4.518-3.405L50.223 21.866a4 4 0 0 1 3.405-4.518l78.231-10.994a4 4 0 0 1 4.518 3.404l.956 6.808M138.167 21.177l.5 3.12"}),o.jsx("path",{fill:"#fff",fillRule:"evenodd",stroke:"#7B79FF",strokeWidth:2.5,d:"m165.078 31.096-78.567-8.258a2.74 2.74 0 0 0-2.018.598 2.74 2.74 0 0 0-1.005 1.85l-8.362 79.561a2.748 2.748 0 0 0 2.447 3.023l78.568 8.258a2.74 2.74 0 0 0 2.018-.598 2.74 2.74 0 0 0 1.004-1.85l8.362-79.562a2.74 2.74 0 0 0-.597-2.018 2.74 2.74 0 0 0-1.85-1.004Z",clipRule:"evenodd"}),o.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"m93.657 31.382 62.655 6.585a3 3 0 0 1 2.67 3.297l-5.54 52.71a3 3 0 0 1-3.298 2.67L87.49 90.059a3 3 0 0 1-2.67-3.297l5.54-52.71a3 3 0 0 1 3.297-2.67",clipRule:"evenodd"}),o.jsx("path",{fill:"#F0F0FF",fillRule:"evenodd",d:"m93.407 74.676 9.798-6.609a4 4 0 0 1 5.167.595l7.174 7.722a1 1 0 0 0 1.362.097l15.34-12.43a4 4 0 0 1 5.877.936l9.981 15.438 1.433 2.392-.686 8.124a1 1 0 0 1-1.107.91l-56.963-6.329a1 1 0 0 1-.885-1.085l.755-8.199z",clipRule:"evenodd"}),o.jsx("path",{stroke:"#7B79FF",strokeWidth:2.5,d:"m156.181 39.21-62.655-6.585c-.48-.05-.936.099-1.284.38a1.75 1.75 0 0 0-.64 1.178l-5.54 52.71c-.05.48.1.936.381 1.284s.697.588 1.177.639l62.655 6.585c.481.05.936-.099 1.284-.38s.589-.697.639-1.177l5.54-52.71a1.74 1.74 0 0 0-.38-1.284 1.74 1.74 0 0 0-1.177-.64Z",clipRule:"evenodd"}),o.jsx("path",{fill:"#F0F0FF",stroke:"#7B79FF",strokeWidth:2.5,d:"M105.071 56.714a6 6 0 1 0 1.254-11.936 6 6 0 0 0-1.254 11.936Z"}),o.jsx("path",{stroke:"#7B79FF",strokeLinecap:"round",strokeWidth:2.5,d:"m91.396 76.222 11.809-8.155a4 4 0 0 1 5.167.594l7.174 7.723a1 1 0 0 0 1.362.096l15.34-12.43a4 4 0 0 1 5.877.936l11.064 17.556"})]})}),o.jsxs("defs",{children:[o.jsx("clipPath",{id:"EmptyPictures_svg__a",children:o.jsx("path",{fill:"#fff",d:"M.667.797h216v120h-216z"})}),o.jsx("clipPath",{id:"EmptyPictures_svg__b",children:o.jsx("path",{fill:"#fff",d:"M.667.797h216v120h-216z"})})]})]});i.forwardRef(Nd);const zd=(e,t)=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,ref:t,...e,children:[o.jsx("rect",{width:31,height:23,x:.5,y:4.5,fill:"#F6ECFC",stroke:"#E0C1F4",rx:2.5}),o.jsx("path",{fill:"#9736E8",d:"M12.75 12a.75.75 0 0 1 .75-.75h8a.75.75 0 1 1 0 1.5h-8a.75.75 0 0 1-.75-.75m8.75 3.25h-8a.75.75 0 1 0 0 1.5h8a.75.75 0 1 0 0-1.5m0 4h-8a.75.75 0 1 0 0 1.5h8a.75.75 0 1 0 0-1.5M10.75 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2"})]});i.forwardRef(zd);const Od=(e,t)=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,ref:t,...e,children:[o.jsx("path",{fill:"#1977F3",d:"M32 16c0-8.836-7.164-16-16-16S0 7.164 0 16c0 7.985 5.85 14.605 13.5 15.807v-11.18H9.437V16H13.5v-3.526c0-4.01 2.39-6.226 6.044-6.226 1.75 0 3.582.313 3.582.313V10.5h-2.018c-1.987 0-2.608 1.233-2.608 2.5V16h4.437l-.709 4.626H18.5v11.18C26.15 30.607 32 23.989 32 16"}),o.jsx("path",{fill:"#FEFEFE",d:"M22.228 20.626 22.937 16H18.5v-3.002c0-1.264.619-2.5 2.608-2.5h2.018V6.562s-1.832-.313-3.582-.313c-3.654 0-6.044 2.214-6.044 6.226V16H9.437v4.626H13.5v11.18Q14.724 32 16 32c.85 0 1.685-.068 2.5-.194v-11.18z"})]});i.forwardRef(Od);const Bd=(e,t)=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,ref:t,...e,children:[o.jsx("path",{fill:"#9736E8",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4z"}),o.jsx("path",{fill:"#fff",d:"M18.037 11.774a28.6 28.6 0 0 0-2.948 2.706c-1.995 2.109-3.55 4.093-4.761 6.06-.289.469-.574.945-.855 1.418a9 9 0 0 0-.463 1.536c-.074.37.275.68.577.395.312-.299.587-.64.851-.985.467-.608.906-1.237 1.342-1.867 3.37.242 7.27-2.048 8.933-4.857a.2.2 0 0 0 .017-.167.18.18 0 0 0-.114-.118c-.809-.27-1.798-.44-2.207-.462-.017 0-.034-.014-.037-.035a.04.04 0 0 1 .024-.043c1.113-.58 1.924-.647 2.877-.505.07.01.134-.046.16-.114.095-.217.356-.87.537-1.404a.2.2 0 0 0-.087-.239c-.71-.384-1.656-.643-2.035-.682-.017 0-.03-.018-.034-.036a.04.04 0 0 1 .024-.043c1.1-.483 1.485-.497 2.364-.302.087.018.17-.05.19-.142.433-1.714.574-3.197.608-3.68a.2.2 0 0 0-.057-.157.18.18 0 0 0-.148-.05c-2.444.356-4.403.865-6.093 1.55-.057.022-.11.072-.11.136.144.551-.242 1.209-.845 1.703a.04.04 0 0 1-.044.018.05.05 0 0 1-.027-.043c.004-.046.158-.665.067-1.116-.013-.064-.033-.125-.084-.16a.17.17 0 0 0-.17-.014c-7.924 3.811-5.922 10.098-5.922 10.098q.015.004.03.007c.895-1.86 1.904-3.232 3.49-5.035 1.178-1.337 2.331-2.425 3.525-3.325.75-.565 2.448-1.738 3.51-2.144a.3.3 0 0 1 .105-.021c.097 0 .177.064.2.16a.26.26 0 0 1-.046.228z"})]});i.forwardRef(Bd);const Vd=(e,t)=>o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,ref:t,...e,children:o.jsx("path",{fill:"#24292F",fillRule:"evenodd",d:"M15.952 0C7.132 0 0 7.184 0 16.07c0 7.105 4.57 13.118 10.908 15.247.792.16 1.083-.346 1.083-.772 0-.372-.027-1.65-.027-2.98-4.437.958-5.361-1.916-5.361-1.916-.713-1.862-1.77-2.34-1.77-2.34-1.452-.985.106-.985.106-.985 1.61.106 2.456 1.65 2.456 1.65 1.426 2.447 3.724 1.755 4.648 1.33.132-1.038.555-1.757 1.004-2.156-3.54-.372-7.263-1.756-7.263-7.929 0-1.756.634-3.193 1.637-4.31-.158-.399-.713-2.049.16-4.257 0 0 1.346-.426 4.383 1.65 1.3-.352 2.641-.531 3.988-.533 1.347 0 2.72.187 3.988.532 3.038-2.075 4.385-1.65 4.385-1.65.871 2.21.316 3.859.158 4.258 1.03 1.117 1.637 2.554 1.637 4.31 0 6.173-3.723 7.53-7.289 7.93.581.505 1.083 1.463 1.083 2.98 0 2.154-.026 3.884-.026 4.416 0 .426.29.932 1.082.772 6.34-2.13 10.908-8.142 10.908-15.246C31.904 7.184 24.748 0 15.952 0",clipRule:"evenodd"})}),$d=i.forwardRef(Vd),Wd=$d,Zd=(e,t)=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,ref:t,...e,children:[o.jsx("path",{fill:"#AC73E6",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4z"}),o.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M15.027 13.839c-3.19-.836-6.305-1.064-10.18-.608-1.215.152-1.063 1.975.076 2.203.304.836.456 2.355.912 3.267.987 2.279 5.622 1.975 7.369.835 1.14-.683 1.443-2.279 1.9-3.494.227-.684 1.595-.684 1.822 0 .38 1.215.76 2.81 1.9 3.494 1.747 1.14 6.381 1.444 7.369-.835.456-.912.607-2.431.911-3.267 1.14-.228 1.216-2.051.076-2.203-3.874-.456-6.989-.228-10.18.608-.455.075-1.519.075-1.975 0",clipRule:"evenodd"})]});i.forwardRef(Zd);const Gd=(e,t)=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,ref:t,...e,children:[o.jsx("path",{fill:"#4945FF",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4z"}),o.jsx("path",{fill:"#fff",d:"M15.733 8c.343 0 .678.108.963.31s.507.49.639.826c.13.337.165.707.098 1.064a1.9 1.9 0 0 1-.474.942 1.7 1.7 0 0 1-.887.504 1.64 1.64 0 0 1-1.002-.105 1.76 1.76 0 0 1-.778-.678A1.9 1.9 0 0 1 14 9.841a1.9 1.9 0 0 1 .508-1.302c.325-.345.766-.539 1.225-.539M20 24h-8v-2.265h2.933v-6.23H12.8v-2.266h4.267v8.496H20z"})]});i.forwardRef(Gd);const Hd=(e,t)=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,ref:t,...e,children:[o.jsx("rect",{width:31,height:23,x:.5,y:4.5,fill:"#EAF5FF",stroke:"#B8E1FF",rx:2.5}),o.jsx("path",{fill:"#0C75AF",d:"M11.425 15.468a2.2 2.2 0 0 1-.36.532q.22.24.36.532c.325.67.325 1.457.325 2.218 0 1.621.115 2 1.25 2a.75.75 0 1 1 0 1.5c-1.196 0-2.012-.431-2.425-1.282-.325-.67-.325-1.457-.325-2.218 0-1.621-.115-2-1.25-2a.75.75 0 1 1 0-1.5c1.135 0 1.25-.379 1.25-2 0-.76 0-1.547.325-2.218.413-.85 1.229-1.282 2.425-1.282a.75.75 0 1 1 0 1.5c-1.135 0-1.25.379-1.25 2 0 .76 0 1.547-.325 2.218M23 15.25c-1.135 0-1.25-.379-1.25-2 0-.76 0-1.547-.325-2.218-.413-.85-1.229-1.282-2.425-1.282a.75.75 0 1 0 0 1.5c1.135 0 1.25.379 1.25 2 0 .76 0 1.547.325 2.218q.142.292.363.532a2.2 2.2 0 0 0-.36.532c-.328.67-.328 1.457-.328 2.218 0 1.621-.115 2-1.25 2a.75.75 0 1 0 0 1.5c1.196 0 2.012-.431 2.425-1.282.325-.67.325-1.457.325-2.218 0-1.621.115-2 1.25-2a.75.75 0 1 0 0-1.5"})]});i.forwardRef(Hd);const Ud=(e,t)=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,ref:t,...e,children:[o.jsx("rect",{width:31,height:23,x:.5,y:4.5,fill:"#EAF5FF",stroke:"#B8E1FF",rx:2.5}),o.jsx("path",{fill:"#0C75AF",d:"M9.75 12a.75.75 0 0 1 .75-.75h11a.75.75 0 1 1 0 1.5h-11a.75.75 0 0 1-.75-.75m.75 3.25h8a.75.75 0 1 0 0-1.5h-8a.75.75 0 1 0 0 1.5m11 1h-11a.75.75 0 1 0 0 1.5h11a.75.75 0 1 0 0-1.5m-3 2.5h-8a.75.75 0 1 0 0 1.5h8a.75.75 0 1 0 0-1.5"})]});i.forwardRef(Ud);const qd=(e,t)=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,ref:t,...e,children:[o.jsx("rect",{width:31,height:23,x:.5,y:4.5,fill:"#F6ECFC",stroke:"#E0C1F4",rx:2.5}),o.jsx("path",{fill:"#9736E8",d:"M21.5 10.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-3.75 3a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m-7.25 7v-1.75l3.25-3.25 5 5zm11 0h-1.336l-2.25-2.25 1.25-1.25 2.336 2.336z"})]});i.forwardRef(qd);const Qd=(e,t)=>o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,ref:t,...e,children:o.jsx("path",{fill:"#32324D",d:"M18.05 16.007c0 5.019-4.04 9.087-9.025 9.087-4.984 0-9.025-4.07-9.025-9.087C0 10.99 4.04 6.92 9.025 6.92s9.025 4.069 9.025 9.087M27.95 16.007c0 4.724-2.02 8.555-4.512 8.555s-4.513-3.831-4.513-8.555 2.02-8.555 4.513-8.555 4.512 3.83 4.512 8.555M32 16.007c0 4.231-.71 7.664-1.587 7.664s-1.587-3.432-1.587-7.664.71-7.664 1.587-7.664c.876 0 1.587 3.432 1.587 7.664"})});i.forwardRef(Qd);const Yd=(e,t)=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,ref:t,...e,children:[o.jsx("rect",{width:31,height:23,x:.5,y:4.5,fill:"#FCECEA",stroke:"#F5C0B8",rx:2.5}),o.jsx("path",{fill:"#D02B20",d:"M8.68 20v-6.22h-.096l-1.902 1.322V13.64l2.004-1.392h1.616V20zm3.733 0v-1.09l2.498-2.466c1.09-1.058 1.385-1.45 1.385-1.992v-.017c0-.66-.45-1.122-1.192-1.122-.757 0-1.278.505-1.278 1.24v.028h-1.499l-.005-.022c0-1.488 1.16-2.508 2.857-2.508 1.595 0 2.713.913 2.713 2.25v.016c0 .881-.457 1.612-1.87 2.917l-1.434 1.337v.124h3.416V20zm9.974.172c-1.75 0-2.906-.94-3.013-2.326l-.005-.07h1.552l.005.06c.07.601.623 1.03 1.461 1.03.827 0 1.37-.461 1.37-1.116v-.011c0-.741-.553-1.15-1.493-1.15h-.887v-1.154h.865c.817 0 1.343-.43 1.343-1.059v-.01c0-.645-.446-1.042-1.209-1.042-.762 0-1.273.413-1.337 1.058l-.005.048H19.54l.005-.064c.113-1.386 1.203-2.288 2.83-2.288 1.665 0 2.74.838 2.74 2.073v.01c0 .967-.71 1.596-1.617 1.784v.032c1.155.107 1.907.773 1.907 1.826v.011c0 1.407-1.209 2.358-3.019 2.358"})]});i.forwardRef(Yd);const Jd=(e,t)=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,ref:t,...e,children:[o.jsx("rect",{width:31,height:23,x:.5,y:4.5,fill:"#FDF4DC",stroke:"#FAE7B9",rx:2.5}),o.jsx("path",{fill:"#D9822F",d:"M21 13h-2v-1.5a3 3 0 0 0-6 0V13h-2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1m-5 5.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5M18 13h-4v-1.5a2 2 0 0 1 4 0z"})]});i.forwardRef(Jd);const Kd=(e,t)=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,ref:t,...e,children:[o.jsx("path",{fill:"#66B7F1",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4z"}),o.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M12 10.921a.5.5 0 0 1 .773-.419l8.582 5.579a.5.5 0 0 1 0 .838l-8.582 5.579a.5.5 0 0 1-.773-.42z",clipRule:"evenodd"})]});i.forwardRef(Kd);const Xd=(e,t)=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,ref:t,...e,children:[o.jsx("path",{fill:"#FF4500",d:"M16 0C7.164 0 0 7.164 0 16a15.95 15.95 0 0 0 4.686 11.314L1.64 30.36c-.605.605-.177 1.639.678 1.639H16c8.836 0 16-7.164 16-16S24.836 0 16 0"}),o.jsx("path",{fill:"#fff",d:"M19.255 7.545a2.668 2.668 0 0 0 5.261-.614 2.666 2.666 0 0 0-5.277-.54 4.307 4.307 0 0 0-3.84 4.277v.013c-2.345.099-4.487.767-6.187 1.82a3.736 3.736 0 1 0-3.869 6.34c.124 4.338 4.85 7.826 10.664 7.826s10.547-3.492 10.664-7.833a3.737 3.737 0 0 0-1.602-7.111c-.857 0-1.645.288-2.275.773-1.715-1.061-3.88-1.729-6.25-1.817v-.01a3.16 3.16 0 0 1 2.71-3.121zM9.062 17.829c.063-1.355.963-2.395 2.01-2.395 1.045 0 1.845 1.098 1.783 2.454-.063 1.354-.844 1.847-1.891 1.847S9 19.184 9.062 17.829m11.883-2.395c1.047 0 1.947 1.04 2.009 2.395s-.855 1.906-1.902 1.906-1.828-.491-1.89-1.848c-.063-1.355.735-2.453 1.783-2.453m-1.245 5.53c.196.02.321.224.245.406a4.268 4.268 0 0 1-7.875 0 .296.296 0 0 1 .245-.406c1.15-.116 2.394-.18 3.692-.18 1.3 0 2.542.064 3.693.18"})]});i.forwardRef(Xd);const _d=(e,t)=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,ref:t,...e,children:[o.jsx("rect",{width:31,height:23,x:.5,y:4.5,fill:"#F0F0FF",stroke:"#D9D8FF",rx:2.5}),o.jsx("path",{fill:"#4945FF",d:"M16.523 19.72a.75.75 0 0 1 0 1.063l-.371.371a3.751 3.751 0 1 1-5.305-5.305l1.507-1.507a3.75 3.75 0 0 1 5.146-.155.753.753 0 0 1-1 1.126 2.25 2.25 0 0 0-3.086.091l-1.506 1.505a2.25 2.25 0 0 0 3.183 3.183l.37-.371a.747.747 0 0 1 1.062 0m4.63-8.874a3.755 3.755 0 0 0-5.305 0l-.371.37a.751.751 0 1 0 1.062 1.063l.372-.37a2.25 2.25 0 1 1 3.182 3.182l-1.507 1.507a2.25 2.25 0 0 1-3.086.09.755.755 0 0 0-1.211.315.75.75 0 0 0 .211.81 3.75 3.75 0 0 0 5.144-.152l1.507-1.507a3.756 3.756 0 0 0 .002-5.307z"})]});i.forwardRef(_d);const e1=(e,t)=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,ref:t,...e,children:[o.jsx("rect",{width:31,height:23,x:.5,y:4.5,fill:"#0C75AF",stroke:"#0C75AF",rx:2.5}),o.jsx("path",{fill:"#fff",d:"M8.523 17.586h1.711c.123.727.844 1.195 1.758 1.195.95 0 1.606-.445 1.606-1.107 0-.492-.352-.797-1.266-1.084l-.879-.276c-1.248-.386-1.963-1.218-1.963-2.308 0-1.547 1.418-2.678 3.328-2.678 1.858 0 3.164 1.078 3.217 2.62h-1.67c-.105-.71-.744-1.184-1.617-1.184-.826 0-1.459.433-1.459 1.03 0 .47.34.815 1.137 1.067l.867.27c1.436.451 2.086 1.154 2.086 2.297 0 1.675-1.418 2.789-3.516 2.789-1.922 0-3.234-.99-3.34-2.631M20.107 20h-1.78l1.487-6.943h-2.53l.31-1.512h6.843l-.31 1.512h-2.531z"})]});i.forwardRef(e1);const t1=(e,t)=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,ref:t,...e,children:[o.jsx("path",{fill:"#4945FF",d:"M0 11.093c0-5.23 0-7.844 1.625-9.468C3.249 0 5.864 0 11.093 0h9.814c5.23 0 7.844 0 9.468 1.625C32 3.249 32 5.864 32 11.093v9.814c0 5.23 0 7.844-1.625 9.468C28.751 32 26.136 32 20.907 32h-9.814c-5.23 0-7.844 0-9.468-1.625C0 28.751 0 26.136 0 20.907z"}),o.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M22.08 9.707H11.307V15.2H16.8v5.493h5.493V9.92a.213.213 0 0 0-.213-.213",clipRule:"evenodd"}),o.jsx("path",{fill:"#fff",d:"M16.8 15.2h-.213v.213h.213z"}),o.jsx("path",{fill:"#9593FF",d:"M11.307 15.2h5.28c.117 0 .213.096.213.213v5.28h-5.28a.213.213 0 0 1-.213-.213zM16.8 20.693h5.493l-5.31 5.312a.107.107 0 0 1-.183-.076zM11.307 15.2H6.07a.107.107 0 0 1-.076-.182l5.312-5.311z"})]});i.forwardRef(t1);const o1=(e,t)=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,ref:t,...e,children:[o.jsx("rect",{width:31,height:23,x:.5,y:4.5,fill:"#EAFBE7",stroke:"#C6F0C2",rx:2.5}),o.jsx("path",{fill:"#328048",d:"M13.679 11.18a.75.75 0 0 0-1.358 0l-4 8.5a.75.75 0 0 0 1.357.64l.974-2.07h4.695l.974 2.07a.75.75 0 1 0 1.358-.64zm-2.32 5.57 1.64-3.489 1.643 3.489zm9.14-3c-.865 0-1.547.241-2.027.717a.749.749 0 1 0 1.056 1.063c.188-.187.516-.283.972-.283.584 0 1.074.323 1.21.757a3 3 0 0 0-1.21-.254c-1.516 0-2.75 1.121-2.75 2.5s1.234 2.5 2.75 2.5c.479.001.95-.114 1.375-.336A.75.75 0 0 0 23.25 20v-3.75c0-1.379-1.234-2.5-2.75-2.5m0 5.5c-.687 0-1.25-.449-1.25-1s.563-1 1.25-1 1.25.449 1.25 1-.562 1-1.25 1"})]});i.forwardRef(o1);const r1=(e,t)=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,ref:t,...e,children:[o.jsx("rect",{width:31,height:23,x:.5,y:4.5,fill:"#F0F0FF",stroke:"#D9D8FF",rx:2.5}),o.jsx("path",{fill:"#4945FF",d:"M18 9a5.005 5.005 0 0 0-4.756 6.549l-3.598 3.597a.5.5 0 0 0-.146.354V22a.5.5 0 0 0 .5.5h2.5a.5.5 0 0 0 .5-.5v-1h1a.5.5 0 0 0 .5-.5v-1h1a.5.5 0 0 0 .354-.146l.597-.598A5 5 0 1 0 18 9m1.25 4.75a1 1 0 1 1 0-2 1 1 0 0 1 0 2"})]});i.forwardRef(r1);const n1=(e,t)=>o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,ref:t,...e,children:o.jsxs("g",{fillRule:"evenodd",clipRule:"evenodd",children:[o.jsx("path",{fill:"#FAFAFA",d:"M6.566 6.533c.064.092 1.557 2.264 3.317 4.828l3.617 5.268c.23.334.418.614.418.622s-.086.114-.19.234-.4.462-.654.76l-3.258 3.787c-1.153 1.34-1.32 1.534-2.197 2.556-.47.546-.919 1.068-1 1.16s-.146.177-.146.189c0 .014.295.021.83.021h.83l.911-1.062 1.1-1.279a888 888 0 0 0 2.243-2.61c.043-.048.377-.437.744-.864s.676-.787.689-.8l.431-.502a9 9 0 0 1 .424-.478c.009 0 1.164 1.672 2.567 3.717l2.608 3.797.055.08h2.846c2.34.001 2.843-.004 2.834-.027-.01-.025-1.373-2.013-4.87-7.103-2.517-3.665-2.852-4.157-2.843-4.182.01-.024.353-.425 2.607-3.049l1.779-2.07c.062-.07.388-.45.724-.84l1.96-2.283c.027-.035-.02-.038-.814-.038h-.842l-.375.437a1174 1174 0 0 1-2.23 2.594c-.084.096-.506.586-.938 1.09a129 129 0 0 1-1.004 1.167c-.186.22-.374.44-1.239 1.442-.38.44-.399.459-.43.418-.02-.023-1.132-1.64-2.473-3.594L12.16 6.366H6.45zm2.228 1.165 1.186 1.7c1.196 1.71 5.895 8.436 8.917 12.763a421 421 0 0 0 1.783 2.54c.02.022.301.026 1.314.022l1.287-.005-3.37-4.823-5.963-8.534-2.593-3.712-1.3-.005-1.3-.006z"}),o.jsx("path",{fill:"#040404",d:"M0 16v16l16.005-.005 16.006-.006.005-15.994L32.022 0H0zm.01.01c0 8.8.003 12.4.006 8s.003-11.6 0-16-.005-.8-.005 8m6.556-9.477c.064.092 1.557 2.264 3.317 4.828l3.617 5.268c.23.334.418.614.418.622s-.086.114-.19.234-.399.462-.654.76l-2.014 2.34-1.244 1.447c-1.153 1.34-1.32 1.534-2.197 2.556-.469.546-.918 1.068-1 1.16-.08.092-.146.177-.146.189 0 .014.295.021.83.021h.83l.911-1.062c.502-.585.996-1.16 1.1-1.279a888 888 0 0 0 2.243-2.61c.043-.048.377-.437.744-.864l.689-.8.431-.502a9 9 0 0 1 .424-.478c.009 0 1.164 1.672 2.567 3.717l2.608 3.797.056.08h2.845c2.34.001 2.843-.004 2.834-.027-.01-.025-1.373-2.013-4.87-7.103-2.517-3.665-2.852-4.157-2.842-4.182.009-.024.352-.425 2.606-3.049l1.78-2.07.723-.84 1.96-2.283c.027-.035-.02-.038-.814-.038h-.842l-.375.437a1129 1129 0 0 1-2.23 2.594c-.084.096-.506.586-.938 1.09a129 129 0 0 1-1.004 1.167c-.186.22-.374.44-1.239 1.442-.38.44-.399.459-.43.418-.02-.023-1.132-1.64-2.473-3.594L12.16 6.366H6.45zm2.228 1.165 1.186 1.7 8.918 12.763a416 416 0 0 0 1.782 2.54c.02.022.301.026 1.314.022l1.287-.005-3.37-4.823-5.963-8.534-2.593-3.712-1.3-.005-1.3-.006z"})]})});i.forwardRef(n1);const Ce=e=>`${Ci}.${e}`,a1=()=>o.jsx("svg",{width:"142",height:"74",viewBox:"0 0 142 74",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsxs("g",{opacity:"0.88",children:[o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.50177 8.21597C3.2423 8.21597 0.599976 10.8653 0.599976 14.1334C0.599976 17.4016 3.2423 20.0509 6.50177 20.0509H40.2263C36.9669 20.0509 34.3245 22.7002 34.3245 25.9684C34.3245 29.2365 36.9669 31.8858 40.2263 31.8858H21.6778C18.4183 31.8858 15.776 34.5352 15.776 37.8033C15.776 41.0714 18.4183 43.7207 21.6778 43.7207H30.2556C34.3654 43.7207 37.697 46.3701 37.697 49.6382C37.697 51.3602 36.6436 52.9534 34.5369 54.4177C33.3426 55.2478 31.828 55.4312 30.4754 55.9657C28.2859 56.8308 26.7365 58.9705 26.7365 61.4731C26.7365 64.7413 29.3788 67.3906 32.6383 67.3906H102.617C105.876 67.3906 108.519 64.7413 108.519 61.4731C108.519 58.205 105.876 55.5557 102.617 55.5557H135.498C138.758 55.5557 141.4 52.9063 141.4 49.6382C141.4 46.3701 138.758 43.7207 135.498 43.7207H101.774C98.5142 43.7207 95.8718 41.0714 95.8718 37.8033C95.8718 34.5352 98.5142 31.8858 101.774 31.8858H122.851C126.111 31.8858 128.753 29.2365 128.753 25.9684C128.753 22.7002 126.111 20.0509 122.851 20.0509H89.1269C92.3864 20.0509 95.0287 17.4016 95.0287 14.1334C95.0287 10.8653 92.3864 8.21597 89.1269 8.21597H6.50177ZM6.50177 31.8858C3.2423 31.8858 0.599976 34.5352 0.599976 37.8033C0.599976 41.0714 3.2423 43.7207 6.50177 43.7207C9.76124 43.7207 12.4036 41.0714 12.4036 37.8033C12.4036 34.5352 9.76124 31.8858 6.50177 31.8858Z",fill:"#DBDBFA"}),o.jsx("path",{d:"M73.6731 73V39.8706",stroke:"white",strokeWidth:"2",strokeLinecap:"round"}),o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M50.6061 9.64246C44.2424 9.64246 39.0829 14.802 39.0829 21.1657C39.0829 21.3861 39.103 21.6007 39.116 21.8197C39.1016 22.0818 39.0829 22.3469 39.0829 22.6061C33.3371 25.3602 29 31.9069 29 38.6739C29 48.0582 36.6774 55.7355 46.0616 55.7355H53.487L56.9785 11.5668C55.1535 10.3526 52.9626 9.64246 50.6061 9.64246Z",fill:"#F1F1FE"}),o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M99.4633 24.0465C99.2977 11.5164 89.1025 1 76.5334 1L90.8165 55.7355H96.5364C105.274 55.7355 112.423 48.5868 112.423 39.8507C112.423 32.1143 106.814 25.4308 99.4633 24.0465Z",fill:"#DEDDFE"}),o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M95.2638 24.0465C95.0982 11.5164 84.9029 1 72.3339 1C64.3267 1 63.3991 3.40404 59.2493 9.64245C57.4228 8.42819 57.2845 9.64245 54.928 9.64245C48.5629 9.64245 43.4048 14.802 43.4048 21.1657C43.4048 21.3861 43.4249 21.6007 43.4379 21.8197C43.4235 22.0818 43.4048 22.3469 43.4048 22.6061C37.659 25.3602 33.3219 31.9069 33.3219 38.6739C33.3219 48.0582 40.9993 55.7355 50.3835 55.7355H57.8089H86.617H92.3369C101.074 55.7355 108.223 48.5868 108.223 39.8507C108.223 32.1143 102.614 25.4308 95.2638 24.0465Z",fill:"white"}),o.jsx("path",{d:"M99.6256 24.0466C99.6256 24.0466 95.9741 23.5064 92.4192 24.0466",stroke:"#8A88FE",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M39.1237 21.1657C39.1237 14.802 44.2832 9.64246 50.6469 9.64246C57.0107 9.64246 62.1702 14.802 62.1702 21.1657",stroke:"#8A88FE",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M90.9784 55.7355H96.6997C105.436 55.7355 112.584 48.5868 112.584 39.8507C112.584 32.1143 106.976 25.4308 99.6251 24.0465C99.4609 11.5164 89.2657 1 76.6953 1C68.688 1 61.1705 5.32843 57.0193 11.5668C55.1943 10.3526 53.0034 9.64245 50.6469 9.64245C44.2832 9.64245 39.1236 14.802 39.1236 21.1657C39.1236 21.3861 39.1438 21.6007 39.1568 21.8197C39.1424 22.0818 39.1236 22.3469 39.1236 22.6061C33.3778 25.3602 29.0408 31.9069 29.0408 38.6739C29.0408 48.0582 36.7182 55.7355 46.1024 55.7355H53.5277",stroke:"#8A88FE",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M72.2531 71.58V38.4506",stroke:"#8A88FE",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M72.2531 38.4506L83.7763 49.9739",stroke:"#8A88FE",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M60.7297 49.9739L72.253 38.4506",stroke:"#8A88FE",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),i1=g(k)`
  svg {
    height: 8.8rem;
  }
`,s1=()=>{const{formatMessage:e}=Qt();return o.jsx(k,{padding:4,hasRadius:!0,children:o.jsxs(T,{alignItems:"center",direction:"column",padding:11,hasRadius:!0,children:[o.jsx(i1,{paddingBottom:6,"aria-hidden":!0,children:o.jsx(a1,{})}),o.jsx(k,{paddingBottom:4,children:o.jsx(D,{variant:"beta",tag:"p",textAlign:"center",textColor:"neutral1000",children:e({id:Ce("Homepage.cloudBox.title"),defaultMessage:"Deploy to Strapi Cloud"})})}),o.jsx(D,{variant:"epsilon",tag:"p",textAlign:"center",textColor:"neutral600",children:e({id:Ce("Homepage.cloudBox.subTitle"),defaultMessage:"Enjoy a Strapi-optimized stack including database, email provider, and CDN."})}),o.jsx(k,{marginTop:4,children:o.jsx(Fn,{variant:"default",endIcon:o.jsx(ir,{}),href:"https://cloud.strapi.io/login?utm_campaign=Strapi%20Cloud%20Plugin&utm_source=In-Product&utm_medium=CTA",isExternal:!0,target:"_blank",children:e({id:Ce("Homepage.cloudBox.buttonText"),defaultMessage:"Deploy to Strapi Cloud"})})})]})})},l1=()=>o.jsxs("svg",{width:"160",height:"88",viewBox:"0 0 160 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("g",{clipPath:"url(#clip0_7_368)",children:o.jsxs("g",{opacity:"0.84",children:[o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M139.583 14.4069C142.655 14.4069 145.145 16.8967 145.145 19.968C145.145 23.0394 142.655 25.5292 139.583 25.5292H107.806C110.877 25.5292 113.367 28.019 113.367 31.0903C113.367 34.1616 110.877 36.6514 107.806 36.6514H125.283C128.355 36.6514 130.845 39.1412 130.845 42.2125C130.845 45.2838 128.355 47.7736 125.283 47.7736H117.201C113.328 47.7736 110.189 50.2634 110.189 53.3347C110.189 54.5054 110.708 55.6126 111.747 56.6565C113.567 58.4852 116.602 58.5506 118.564 60.2255C119.759 61.2455 120.517 62.7627 120.517 64.4569C120.517 67.5283 118.027 70.0181 114.956 70.0181H49.0167C45.9454 70.0181 43.4556 67.5283 43.4556 64.4569C43.4556 61.3856 45.9454 58.8958 49.0167 58.8958H18.0334C14.9621 58.8958 12.4723 56.406 12.4723 53.3347C12.4723 50.2634 14.9621 47.7736 18.0334 47.7736H49.8112C52.8825 47.7736 55.3723 45.2838 55.3723 42.2125C55.3723 39.1412 52.8825 36.6514 49.8112 36.6514H29.9501C26.8788 36.6514 24.389 34.1616 24.389 31.0903C24.389 28.019 26.8788 25.5292 29.9501 25.5292H61.7279C58.6565 25.5292 56.1667 23.0394 56.1667 19.968C56.1667 16.8967 58.6565 14.4069 61.7279 14.4069H139.583ZM139.583 36.6514C142.655 36.6514 145.145 39.1412 145.145 42.2125C145.145 45.2838 142.655 47.7736 139.583 47.7736C136.512 47.7736 134.022 45.2838 134.022 42.2125C134.022 39.1412 136.512 36.6514 139.583 36.6514Z",fill:"#D9D8FF",fillOpacity:"0.8"}),o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M81.0546 42.3195C75.781 37.0459 75.781 28.4165 81.0546 23.1428L92.2419 11.9555C97.5155 6.68192 106.145 6.68192 111.419 11.9555C116.692 17.2291 116.692 25.8586 111.419 31.1334L100.231 42.3195C94.9576 47.5931 86.3282 47.5931 81.0546 42.3195Z",fill:"white"}),o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M78.1614 42.3195C72.8878 37.0459 72.8878 28.4165 78.1614 23.1428L89.3487 11.9555C94.6223 6.68192 103.252 6.68192 108.525 11.9555C113.799 17.2291 113.799 25.8586 108.525 31.1334L97.3381 42.3195C92.0644 47.5931 83.435 47.5931 78.1614 42.3195Z",fill:"#D9D8FF"}),o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M78.2876 42.3195C73.014 37.0459 73.014 28.4165 78.2876 23.1428L89.4749 11.9555C94.7485 6.68192 99.9778 6.68192 105.251 11.9555C110.526 17.2291 110.526 25.8586 105.251 31.1334L94.0653 42.3195C88.7917 47.5931 83.5612 47.5931 78.2876 42.3195Z",fill:"#F0F0FF"}),o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M108.965 11.9555C111.829 14.8193 113.124 18.6721 112.878 22.4399C112.671 20.0398 111.375 17.6386 108.965 15.2287C103.691 9.95511 95.062 9.95511 89.7884 15.2287L78.601 26.416C76.1912 28.8259 74.895 31.2272 74.6878 33.6272C74.4423 29.8594 75.7373 26.0066 78.601 23.1428L89.7884 11.9555C95.062 6.68192 103.691 6.68192 108.965 11.9555Z",fill:"white"}),o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M78.1192 45.6809C72.8456 40.4073 64.2162 40.4073 58.9426 45.6809L47.7553 56.8682C42.4816 62.1418 42.4816 70.7713 47.7553 76.0449C53.0289 81.3185 61.6583 81.3185 66.9319 76.0449L78.1192 64.8588C83.3928 59.584 83.3928 50.9545 78.1192 45.6809Z",fill:"white"}),o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M78.1192 42.7884C72.8456 37.5148 64.2162 37.5148 58.9426 42.7884L56.5685 45.1613C57.0692 45.8384 56.8595 46.9829 55.9518 47.2555C56.0887 47.5823 56.0887 47.9708 55.863 48.3704C54.9923 49.912 53.8108 51.1848 52.4172 52.2639C51.9127 52.6537 51.2763 52.7634 50.7448 52.407C50.5364 52.7264 50.1997 52.9632 49.7002 52.9632C49.4079 52.9632 49.1834 52.867 48.991 52.7388L47.7553 53.9758C42.4816 59.2494 42.4816 67.8788 47.7553 73.1524C53.0289 78.426 61.6583 78.426 66.9319 73.1524L78.1192 61.9663C83.3928 56.6915 83.3928 48.0621 78.1192 42.7884Z",fill:"#D9D8FF"}),o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M78.1192 42.915C72.8456 37.6414 64.2162 37.6414 58.9426 42.915L56.4106 45.4457C56.8595 46.2326 56.5105 47.4906 55.3278 47.4906C55.2945 47.4906 55.2735 47.4745 55.2427 47.4733C55.4634 48.0752 55.2155 48.7115 54.6901 49.0815C53.6566 49.8067 53.0535 51.0585 52.1853 51.9551C51.7931 52.3609 51.3294 52.4226 50.9224 52.2894C50.7177 52.6298 50.3748 52.8863 49.8543 52.8863C49.5768 52.8863 49.361 52.7999 49.1736 52.6828L47.7553 54.1011C43.398 58.4584 43.398 65.5227 47.7553 69.8788C53.0289 75.1524 61.6583 75.1524 66.9319 69.8788L78.1192 58.6927C82.4765 54.3354 82.4765 47.271 78.1192 42.915Z",fill:"#F0F0FF"}),o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M47.7553 73.5916C50.619 76.4553 54.4718 77.7503 58.2396 77.5048C55.8396 77.2976 53.4383 76.0014 51.0285 73.5916C45.7548 68.3179 45.7548 59.6885 51.0285 54.4137L62.2158 43.2276C64.6256 40.8177 67.0269 39.5215 69.4269 39.3143C65.6579 39.0689 61.8063 40.3638 58.9426 43.2276L47.7553 54.4137C42.4816 59.6885 42.4816 68.3179 47.7553 73.5916Z",fill:"white"}),o.jsx("path",{d:"M103.041 36.617L97.3392 42.3198C92.0656 47.5922 83.4349 47.5922 78.1613 42.3198C72.8877 37.0462 72.8877 28.4155 78.1613 23.1419L89.3486 11.9546C94.6222 6.68223 103.252 6.68223 108.525 11.9546C113.056 16.4858 113.694 23.4934 110.441 28.7226",stroke:"#7B79FF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M56.3043 45L58.9843 42.32C64.2579 37.0464 72.8874 37.0464 78.161 42.32C83.4346 47.5936 83.4346 56.2243 78.161 61.4979L66.9749 72.684C61.7013 77.9576 53.0706 77.9576 47.797 72.684C42.5234 67.4104 42.5234 58.7809 47.797 53.5061L48.9045 52.3998",stroke:"#7B79FF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M89.6695 30.8114L66.6536 53.8274",stroke:"#7B79FF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M53.7086 48.6992C53.7086 49.3799 53.156 49.9325 52.4752 49.9325C51.7945 49.9325 51.2419 49.3799 51.2419 48.6992C51.2419 48.0184 51.7945 47.4659 52.4752 47.4659C53.156 47.4659 53.7086 48.0184 53.7086 48.6992Z",fill:"#7B79FF"}),o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M107.974 32.6662C107.974 33.3469 107.421 33.8995 106.741 33.8995C106.06 33.8995 105.507 33.3469 105.507 32.6662C105.507 31.9854 106.06 31.4328 106.741 31.4328C107.421 31.4328 107.974 31.9854 107.974 32.6662Z",fill:"#7B79FF"})]})}),o.jsx("defs",{children:o.jsx("clipPath",{id:"clip0_7_368",children:o.jsx("rect",{width:"158.4",height:"88",fill:"white",transform:"translate(0.800049)"})})})]}),c1=g(k)`
  svg {
    height: 8.8rem;
  }
`,d1=g(Fn)`
  background-color: #000000;
  color: #ffffff;
  border: none;

  & svg > path {
    fill: ${({theme:e})=>e.colors.neutral0};
  }

  &:hover {
    background-color: #32324d !important;
    border: none !important;
  }
`,u1=()=>{const{formatMessage:e}=Qt();return o.jsx(k,{padding:4,children:o.jsxs(T,{alignItems:"center",direction:"column",padding:11,children:[o.jsx(c1,{paddingBottom:6,"aria-hidden":!0,children:o.jsx(l1,{})}),o.jsx(k,{paddingBottom:4,children:o.jsx(D,{variant:"beta",tag:"p",textAlign:"center",textColor:"neutral1000",children:e({id:Ce("Homepage.githubBox.title.not-versioned"),defaultMessage:"Push your project on GitHub"})})}),o.jsx(D,{variant:"epsilon",tag:"p",textAlign:"center",textColor:"neutral600",children:e({id:Ce("Homepage.githubBox.subTitle.not-versioned"),defaultMessage:"Your project has to be versioned on GitHub before deploying on Strapi Cloud."})}),o.jsx(k,{marginTop:4,children:o.jsx(d1,{isExternal:!0,startIcon:o.jsx(Wd,{}),href:"https://github.com/new",target:"_blank",children:e({id:Ce("Homepage.githubBox.buttonText"),defaultMessage:"Upload to GitHub"})})})]})})};var f1="data:image/svg+xml,%3csvg width='148' height='148' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg opacity='.8' fill-rule='evenodd' clip-rule='evenodd'%3e %3cpath opacity='.15' d='M110.81 37H73.97V74.1h36.84V37Z' fill='url(%23a)'/%3e %3cpath opacity='.07' d='M36.84 0H0v37.08h36.84V0Z' fill='url(%23b)'/%3e %3cpath opacity='.07' d='M73.92 73.95H37.08v37.08h36.84V73.95Z' fill='url(%23c)'/%3e %3cpath opacity='.07' d='M147.99 110.92h-37.3V148H148v-37.08Z' fill='url(%23d)'/%3e %3cpath opacity='.15' d='M73.83 37H36.84L73.83 0v37Z' fill='url(%23e)'/%3e %3cpath opacity='.15' d='M110.6 111.02v-37h36.98l-36.99 37Z' fill='url(%23f)'/%3e %3cpath opacity='.4' d='M73.83 0v37h36.98v37.01h37V3a3 3 0 0 0-3-3H73.82Z' fill='url(%23g)'/%3e %3c/g%3e %3cdefs%3e %3clinearGradient id='a' x1='91.31' y1='83.31' x2='118.24' y2='56.59' gradientUnits='userSpaceOnUse'%3e %3cstop stop-color='%237A92FF'/%3e %3cstop offset='1' stop-color='%233253EA'/%3e %3c/linearGradient%3e %3clinearGradient id='b' x1='40.99' y1='13.88' x2='.01' y2='11.64' gradientUnits='userSpaceOnUse'%3e %3cstop stop-color='%23A8B8FF'/%3e %3cstop offset='1' stop-color='%233253EA'/%3e %3c/linearGradient%3e %3clinearGradient id='c' x1='54.41' y1='120.25' x2='81.35' y2='93.52' gradientUnits='userSpaceOnUse'%3e %3cstop stop-color='%23A8B8FF'/%3e %3cstop offset='1' stop-color='%233253EA'/%3e %3c/linearGradient%3e %3clinearGradient id='d' x1='128.24' y1='157.22' x2='155.17' y2='130.17' gradientUnits='userSpaceOnUse'%3e %3cstop stop-color='%23A8B8FF'/%3e %3cstop offset='1' stop-color='%233253EA'/%3e %3c/linearGradient%3e %3clinearGradient id='e' x1='54.24' y1='46.21' x2='81.12' y2='19.38' gradientUnits='userSpaceOnUse'%3e %3cstop stop-color='%237A92FF'/%3e %3cstop offset='1' stop-color='%233253EA'/%3e %3c/linearGradient%3e %3clinearGradient id='f' x1='126.28' y1='74.05' x2='124.94' y2='111.07' gradientUnits='userSpaceOnUse'%3e %3cstop stop-color='%237A92FF'/%3e %3cstop offset='1' stop-color='%233253EA'/%3e %3c/linearGradient%3e %3clinearGradient id='g' x1='73.37' y1='36.87' x2='132.87' y2='66.74' gradientUnits='userSpaceOnUse'%3e %3cstop stop-color='%237A92FF'/%3e %3cstop offset='1' stop-color='%233858EA'/%3e %3c/linearGradient%3e %3c/defs%3e%3c/svg%3e",h1="data:image/png;base64,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",p1="data:image/png;base64,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";const m1=g(k)`
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: 15rem;
  }
`,g1=g(k)`
  position: absolute;
  top: 400px;
  right: 0;

  img {
    width: 15rem;
  }
`,x1=g(k)`
  position: absolute;
  top: 150px;
  left: 56px;

  img {
    width: 15rem;
  }
`,b1=()=>{const{formatMessage:e}=Qt();return o.jsxs(k,{paddingLeft:10,paddingRight:10,children:[o.jsx(g1,{children:o.jsx("img",{alt:"right-side-cloud","aria-hidden":!0,src:p1})}),o.jsx(x1,{children:o.jsx("img",{alt:"left-side-cloud","aria-hidden":!0,src:h1})}),o.jsx(m1,{children:o.jsx("img",{alt:"strapi-corner-ornament","aria-hidden":!0,src:f1})}),o.jsxs(k,{paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:10,children:[o.jsx(T,{justifyContent:"space-between",alignItems:"center",direction:"column",children:o.jsx(T,{minWidth:0,children:o.jsx(D,{tag:"h1",variant:"alpha",children:e({id:Ce("Homepage.title"),defaultMessage:"Fully-managed Cloud Hosting for your Strapi Project"})})})}),o.jsx(T,{alignItems:"center",direction:"column",children:o.jsx(D,{variant:"epsilon",textColor:"neutral600",tag:"p",children:e({id:Ce("Homepage.subTitle"),defaultMessage:"Follow this 2 steps process to get Everything You Need to Run Strapi in Production."})})})]}),o.jsxs(k,{padding:10,children:[o.jsxs(yi.Grid,{size:"M",children:[o.jsx(u1,{}),o.jsx(s1,{})]}),o.jsxs(k,{padding:6,borderRadius:8,hasRadius:!0,background:"neutral0",borderColor:"neutral200",children:[o.jsx(k,{paddingBottom:2,children:o.jsx(D,{variant:"delta",fontWeight:"bold",textColor:"neutral1000",tag:"p",children:e({id:Ce("Homepage.textBox.label.versioned"),defaultMessage:"Try Strapi Cloud for Free!"})})}),o.jsxs(D,{variant:"epsilon",textColor:"neutral1000",tag:"p",children:[e({id:Ce("Homepage.textBox.text.versioned"),defaultMessage:"Strapi Cloud offers a 14 days free trial for you to experiment with your project on the cloud including all features."})," ",o.jsx(mn,{href:"https://strapi.io/cloud?utm_campaign=Strapi%20Cloud%20Plugin&utm_source=In-Product&utm_medium=CTA",children:"Learn more"})]})]})]})]})},C1=()=>o.jsx("div",{children:o.jsxs(wi,{children:[o.jsx(Eo,{index:!0,element:o.jsx(b1,{})}),o.jsx(Eo,{path:"*",element:o.jsx(vi.Error,{})})]})});export{C1 as App};
