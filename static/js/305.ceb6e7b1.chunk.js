"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[305],{51798:function(e,a,n){n.d(a,{s:function(){return f}});var r=n.p+"static/media/hero-image-mob.2270523ebaf67963322a.png",t=n.p+"static/media/hero-image-tab.f95bf92e6942450910e7.png",s="BgImageWrapper_wrapper__OicMx",c="BgImageWrapper_imgDiv__PVV6A",i="BgImageWrapper_image__AXRfS",o="BgImageWrapper_decorationTab__6jLPS",l=(n(72791),"DecorativeTab_tabDiv__7XWar"),m="DecorativeTab_arrow__GAvDD",u="DecorativeTab_balanceDiv__5aGEI",d="DecorativeTab_balance__v-4ib",_="DecorativeTab_percentDiv__B-j1r";var h=n.p+"static/media/arrow.eff1945058dea01916f9db8bb673738a.svg",p=n(80184);function v(e){var a=e.className;return(0,p.jsxs)("div",{className:"".concat(l," ").concat(a),children:[(0,p.jsx)("div",{className:m,children:(0,p.jsx)("img",{src:h,alt:"arrow-icon"})}),(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{className:u,children:" Your balance "}),(0,p.jsx)("h3",{className:d,children:" $632.000"})]}),(0,p.jsx)("div",{className:_,children:" +1.29%"})]})}var x=n(11872),f=function(){var e=(0,x.Z)("(max-width: 767px)");return(0,p.jsxs)("div",{className:s,children:[(0,p.jsx)("div",{className:c,children:(0,p.jsx)("img",{className:i,src:e?r:t,alt:"person holding card"})}),(0,p.jsx)(v,{className:o})]})}},19894:function(e,a,n){n.d(a,{z:function(){return s}});var r={button:"Button_button__wiIYs",normal:"Button_normal__napcR",cover:"Button_cover__3JiED",cancel:"Button_cancel__wF8TH",typo:"Button_typo__PVTG3"},t=n(80184),s=function(e){var a=e.type,n=e.onclick,s=e.variant,c=e.className,i=void 0===c?"":c,o=e.children;return(0,t.jsx)("button",{type:a,className:"\n      ".concat(r[s]||r.normal," \n      ").concat(r.typo,"\n      ").concat(r.button,"\n      ").concat(i),onClick:n,children:o})}},89602:function(e,a,n){n.d(a,{I:function(){return m}});var r=n(29439),t=n(72791),s="Input_label__NXpCD",c="Input_input__E5rzA",i="Input_visible__hsj0z",o=n(62418),l=n(80184),m=function(e){var a=e.type,n=e.name,m=e.children,u=(0,t.useState)(!1),d=(0,r.Z)(u,2),_=d[0],h=d[1],p=(0,t.useState)(!1),v=(0,r.Z)(p,2),x=v[0],f=v[1],j=(0,t.useState)(""),g=(0,r.Z)(j,2),b=g[0],N=g[1],w=function(){return h(!_)},y=function(){N(""),f(!1)},I=function(e){var a=e.target.value;f(!!a),N(a)};return(0,l.jsx)("label",{className:s,children:"password"===a?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("input",{type:_?"text":a,name:n,placeholder:m,className:c,value:b,onChange:I}),(0,l.jsx)("span",{className:i,onClick:w,children:x&&(_?(0,l.jsx)(o.J,{icon:"eye"}):(0,l.jsx)(o.J,{icon:"eyeOff"}))})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("input",{type:a,placeholder:m,name:n,className:c,value:b,onChange:I}),(0,l.jsx)("span",{className:i,onClick:y,children:x&&(0,l.jsx)(o.J,{icon:"error"})})]})})}},11872:function(e,a,n){var r=n(29439),t=n(72791);a.Z=function(e){var a=(0,t.useState)(window.matchMedia(e).matches),n=(0,r.Z)(a,2),s=n[0],c=n[1];return(0,t.useEffect)((function(){var a=window.matchMedia(e),n=function(e){return c(e.matches)};return a.addEventListener("change",n),function(){return a.removeEventListener("change",n)}}),[e]),s}},30488:function(e,a,n){n.r(a),n.d(a,{default:function(){return b}});var r=n(33050),t="RegisterForm_form__Tv43W",s="RegisterForm_formHeader__NuyFN",c="RegisterForm_header__ugVkt",i="RegisterForm_subHeader__KQK6k",o="RegisterForm_button__B3hFq",l="RegisterForm_anchor__TPYJI",m="RegisterForm_regWrapper__bHg2o",u="RegisterForm_formContainer__C-4Cm",d=n(89602),_=n(19894),h=n(11087),p=n(94420),v=n(75822),x=n(51798),f=n(11872),j=n(80184),g=function(){var e=(0,p.I0)(),a=(0,f.Z)("(min-width: 1439px)");return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("div",{className:m,children:[(0,j.jsx)("div",{children:a?(0,j.jsx)(x.s,{}):null}),(0,j.jsxs)("div",{className:u,children:[(0,j.jsxs)("div",{className:s,children:[(0,j.jsx)("h3",{className:c,children:"Sign Up"}),(0,j.jsxs)("p",{className:i,children:["Step into a world of hassle-free expense management! Your journey",(0,j.jsx)("br",{}),"towards financial mastery begins here."]})]}),(0,j.jsxs)("form",{className:t,onSubmit:function(a){a.preventDefault();var n=a.currentTarget;e((0,v.z2)({name:n.elements.name.value,email:n.elements.email.value,password:n.elements.password.value})),n.reset(),console.log("what")},autoComplete:"off",children:[(0,j.jsx)(d.I,{type:"text",name:"name",children:"Name"}),(0,j.jsx)(d.I,{type:"email",name:"email",children:"Email"}),(0,j.jsx)(d.I,{type:"password",name:"password",children:"Password"}),(0,j.jsxs)("span",{className:o,children:[(0,j.jsx)(_.z,{type:"submit",variant:"cover",children:"Sign Up"}),(0,j.jsxs)("label",{className:i,children:["Already have an account? ",(0,j.jsx)(h.OL,{to:"/login",className:l,children:"Sign In"})]})]})]})]})]})})},b=function(){return(0,j.jsxs)(r.B6,{children:[(0,j.jsx)(r.ql,{children:(0,j.jsx)("title",{children:"Registration"})}),(0,j.jsx)(g,{})]})}}}]);
//# sourceMappingURL=305.ceb6e7b1.chunk.js.map