"use strict";(self.webpackChunkSpace_X_Project=self.webpackChunkSpace_X_Project||[]).push([[202],{202:function(e,n,t){t.r(n),t.d(n,{default:function(){return H}});var a=t(433),l=t(439),s=t(791),r=t(216),c=t(184),i=(0,r.zo)("button",{backgroundColor:"transparent",border:"2px solid white",padding:"4px 13px",color:"white",fontWeight:500,cursor:"pointer",textTransform:"uppercase",lineHeight:1.71,letterSpacing:"2px",transition:"background-color 0.2s linear, color 0.2s linear","&:hover":{backgroundColor:"white",color:"#11141f"}}),o=function(e){var n=e.className,t=e.text,a=e.onClick,l=e.type;return(0,c.jsx)(i,{className:n,onClick:a,type:l,children:t})},u=t(165),d=t(861),f=t(243);f.Z.defaults.baseURL="https://api.spacexdata.com/v4/";var h,p=function(){var e=(0,d.Z)((0,u.Z)().mark((function e(n){var t,a;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.Z.post("launches/query",{options:{page:n,limit:15,sort:{date_local:"desc"}}});case 2:return t=e.sent,a=t.data.docs,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=function(){var e=(0,d.Z)((0,u.Z)().mark((function e(n){var t,a,l,s;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=function(){var e={};return n.forEach((function(n){var t;switch(n.filterBy){case"rocketName":e.name=n.filterValue;break;case"isSuccess":e.success=null!==(t=n.filterValue)&&void 0!==t&&t}})),e},!n){e.next=10;break}return a=t(),e.next=5,f.Z.post("launches/query",{options:{limit:300,sort:{date_local:"desc"},populate:[{path:"rocket",select:{name:1}}]},query:{success:a.success}});case 5:if(l=e.sent,s=l.data.docs,!a.name){e.next=9;break}return e.abrupt("return",s.filter((function(e){var n,t;return null===(n=e.rocket)||void 0===n||null===(t=n.name)||void 0===t?void 0:t.includes(a.name)})));case 9:return e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,d.Z)((0,u.Z)().mark((function e(n){var t,a;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.Z.get("launches/".concat(n));case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x=["title","titleId"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},j.apply(this,arguments)}function g(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}function N(e,n){var t=e.title,a=e.titleId,l=g(e,x);return s.createElement("svg",j({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":a},l),t?s.createElement("title",{id:a},t):null,h||(h=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.15115 1.1515C1.37618 0.926537 1.68135 0.800158 1.99955 0.800158C2.31775 0.800158 2.62291 0.926537 2.84795 1.1515L7.99955 6.3031L13.1511 1.1515C13.2618 1.03689 13.3943 0.945471 13.5407 0.88258C13.6871 0.81969 13.8445 0.786586 14.0039 0.785202C14.1632 0.783817 14.3212 0.814179 14.4687 0.874516C14.6162 0.934853 14.7502 1.02396 14.8628 1.13663C14.9755 1.2493 15.0646 1.38328 15.1249 1.53076C15.1853 1.67823 15.2156 1.83625 15.2142 1.99558C15.2129 2.15492 15.1798 2.31238 15.1169 2.45879C15.054 2.60519 14.9626 2.73761 14.8479 2.8483L9.69635 7.9999L14.8479 13.1515C15.0665 13.3778 15.1875 13.6809 15.1848 13.9956C15.182 14.3102 15.0558 14.6112 14.8333 14.8337C14.6108 15.0562 14.3099 15.1824 13.9952 15.1851C13.6806 15.1878 13.3775 15.0669 13.1511 14.8483L7.99955 9.6967L2.84795 14.8483C2.62163 15.0669 2.3185 15.1878 2.00387 15.1851C1.68923 15.1824 1.38826 15.0562 1.16577 14.8337C0.943276 14.6112 0.817073 14.3102 0.814339 13.9956C0.811605 13.6809 0.932559 13.3778 1.15115 13.1515L6.30275 7.9999L1.15115 2.8483C0.926183 2.62327 0.799805 2.3181 0.799805 1.9999C0.799805 1.6817 0.926183 1.37654 1.15115 1.1515Z",fill:"#757575"})))}var b=s.forwardRef(N),C=(t.p,function(e){var n,t,a,r,i=e.launchId,u=e.onClose,d=(0,s.useState)(null),f=(0,l.Z)(d,2),h=f[0],p=f[1];(0,s.useEffect)((function(){i&&v(i).then((function(e){p(e)}))}),[i]);return(0,c.jsxs)("div",{className:"launch-modal",children:[(0,c.jsx)("div",{className:"launch-modal__image_container",children:(0,c.jsx)("img",{src:null===h||void 0===h||null===(n=h.links)||void 0===n||null===(t=n.patch)||void 0===t?void 0:t.large,alt:"large-launch-icon",className:"launch-modal__image"})}),(0,c.jsxs)("div",{className:"launch-modal__container",children:[(0,c.jsxs)("div",{className:"launch-modal__description",children:[(0,c.jsx)("h2",{className:"launch-modal__title",children:null===h||void 0===h?void 0:h.name}),(0,c.jsxs)("p",{className:"launch-modal__date",children:["Launch Date: ",null===h||void 0===h?void 0:h.date_utc]})]}),(0,c.jsxs)("div",{className:"launch-modal__statuses status",children:[(0,c.jsxs)("span",{className:"status__fairings",children:["Fairings Recovered: ","".concat(!(null!==h&&void 0!==h&&null!==(a=h.fairings)&&void 0!==a&&a.recovered)&&"Not"," Recovered")]}),(0,c.jsxs)("span",{className:"status__fairings",children:["Fairings Reused: ","".concat(!(null!==h&&void 0!==h&&null!==(r=h.fairings)&&void 0!==r&&r.reused)&&"Not"," Reused")]})]}),(0,c.jsx)("div",{className:"launch-modal__actions",children:(0,c.jsx)(o,{text:"Watch launch on YouTube",onClick:function(){var e;window.open(null===h||void 0===h||null===(e=h.links)||void 0===e?void 0:e.webcast,"_blank")}})})]}),(0,c.jsx)(b,{className:"launch-modal__close-icon",onClick:u})]})}),w=t(985),k=(0,r.zo)("div",{backgroundColor:"#18181a",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 15px 10px","> .launch-card-details":{display:"flex",flexDirection:"column",width:"100%"}}),Z=t(689),y=function(e){var n,t,a=e.launchCardData,l=(0,Z.s0)(),r=(0,Z.UO)(),i=(0,Z.TH)();(0,s.useEffect)((function(){r.id&&o(r.id)}),[r.id]);var o=function(e){w.Z.open({component:(0,c.jsx)(C,{launchId:e,onClose:u}),rootClassname:"launch-modal-root",onClose:u})},u=function(){var e;w.Z.close(),l(null!==(e=i.state)&&void 0!==e?e:"/")};return(0,c.jsxs)(k,{children:[(0,c.jsx)("img",{src:null===a||void 0===a||null===(n=a.links)||void 0===n||null===(t=n.patch)||void 0===t?void 0:t.small,alt:"space-card-icon",onClick:function(){l("/".concat(a.id)),r.id&&o(r.id)}}),(0,c.jsxs)("div",{className:"launch-card-details",children:[(0,c.jsx)("h3",{children:null===a||void 0===a?void 0:a.name}),null!==a&&void 0!==a&&a.details?(0,c.jsx)("p",{children:null===a||void 0===a?void 0:a.details}):(0,c.jsx)("p",{children:"No details yet"})]})]})},_=t(413),E=t(942),S=t(694),L=t.n(S),O=function(e){var n=e.name,t=e.value,a=e.onChange;return(0,c.jsxs)("label",{className:"switcher",children:[(0,c.jsx)("input",{name:n,checked:t,type:"checkbox",onChange:a,className:"switcher-input"}),(0,c.jsx)("span",{className:"switcher-slider"})]})},D="text-field",R="switch-field",F=(0,r.zo)("input",{padding:"10px 20px",border:"1px solid transparent","&:active":{border:"1px solid #1976d2"}}),T=function(e){var n=e.fields,t=e.className,a=e.setSpaceXData,r=e.setFilterData,i=e.resetFilters,u=e.filterData,d=(0,s.useState)(null),f=(0,l.Z)(d,2),h=f[0],p=f[1];(0,s.useEffect)((function(){m()}),[]);var m=function(){n&&n.forEach((function(e){p((0,E.Z)({},e.fieldName,null))}))},v=function(e){var n=e.target,t=n.value,a=n.name,l=n.type,s=n.checked;p("checkbox"!==l?(0,_.Z)((0,_.Z)({},h),{},(0,E.Z)({},a,t)):(0,_.Z)((0,_.Z)({},h),{},(0,E.Z)({},a,s)))};return(0,c.jsxs)("form",{className:L()("filter",t),onSubmit:function(e){e.preventDefault(),a([]),r(function(e){var n=[];return e.forEach((function(e){n.push({filterBy:e[0],filterValue:e[1]})})),n}(Object.entries(h)))},children:[(0,c.jsx)("div",{className:"filter-fields",children:n&&h&&n.map((function(e){var n,t;return(0,c.jsxs)(s.Fragment,{children:[e.fieldType===D&&(0,c.jsx)(F,{name:e.fieldName,value:null!==(n=h[e.fieldName])&&void 0!==n?n:"",placeholder:e.placeholder,onChange:v}),e.fieldType===R&&(0,c.jsxs)("div",{className:"switch ".concat(e.fieldName),children:[(0,c.jsx)("h3",{children:"Is Success Launch"}),u&&(0,c.jsx)("span",{children:h[e.fieldName]?(0,c.jsx)("span",{className:"is-success",children:"True"}):(0,c.jsx)("span",{className:"not-success",children:"False"})}),(0,c.jsx)(O,{name:e.fieldName,value:null!==(t=h[e.fieldName])&&void 0!==t&&t,onChange:v})]})]},e.fieldName)}))}),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o,{type:"submit",text:"Submit",className:"filter-submit"}),u&&(0,c.jsx)(o,{type:"button",onClick:function(){i(),m()},text:"Reset",className:"filter-reset"})]})]})},I=[{fieldName:"rocketName",value:"",placeholder:"Rocket Name",fieldType:D},{fieldName:"isSuccess",value:!1,fieldType:R}],P=function(){var e=(0,s.useState)([]),n=(0,l.Z)(e,2),t=n[0],r=n[1],i=(0,s.useState)(null),o=(0,l.Z)(i,2),u=o[0],d=o[1],f=(0,s.useState)(1),h=(0,l.Z)(f,2),v=h[0],x=h[1],j=(0,s.useState)(!1),g=(0,l.Z)(j,2),N=g[0],b=g[1];(0,s.useEffect)((function(){p(v).then((function(e){r([].concat((0,a.Z)(t),(0,a.Z)(e))),x(v+1),b(!1)}))}),[N]),(0,s.useEffect)((function(){u&&(r([]),window.removeEventListener("scroll",C),m(u).then((function(e){r([].concat((0,a.Z)(t),(0,a.Z)(e)))})))}),[u]);var C=(0,s.useCallback)((function(e){e.target.documentElement.scrollHeight-(e.target.documentElement.scrollTop+window.innerHeight)<200&&b(!0)}),[]);(0,s.useEffect)((function(){return window.addEventListener("scroll",C),function(){window.removeEventListener("scroll",C)}}),[]);return(0,c.jsxs)("div",{className:"launches",children:[(0,c.jsx)("h2",{className:"launches-title",children:"Launches"}),(0,c.jsx)(T,{fields:I,className:"launches-filter",setSpaceXData:r,setFilterData:d,resetFilters:function(){d(null),r([]),x(1),b(!0),window.addEventListener("scroll",C)},filterData:u}),(0,c.jsx)("div",{className:"launches-cards",children:t.map((function(e){return(0,c.jsx)(y,{launchCardData:e},e.id)}))})]})},H=function(){return(0,c.jsx)("section",{className:"launch-page",children:(0,c.jsx)(P,{})})}}}]);
//# sourceMappingURL=202.e3cf8d89.chunk.js.map