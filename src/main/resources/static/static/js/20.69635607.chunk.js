(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[20],{255:function(n,e,t){"use strict";t.r(e);var c=t(11),i=t(19),r=t(0),o=t(20),s=t(119),a=t(110),l=t(137);var d,f,b,u,p,h,j=t(8),x=o.c.li(d||(d=Object(i.a)(["\n  list-style: none;\n  margin: 13px;\n  border: 1px solid #e5e7e8;\n  border-radius: 10px;\n  padding: 12px;\n  background: #ffffff;\n  width: 252px;\n  height: 134px;\n  display: flex;\n"]))),g=o.c.div(f||(f=Object(i.a)(["\n  cursor: pointer;\n  margin-left: 5px;\n  font-weight: bold;\n  .name {\n    font-weight: 800;\n    font-size: 13px;\n    line-height: 16px;\n  }\n  .address {\n    font-weight: 400;\n    font-size: 9px;\n    line-height: 11px;\n    color: #7e7e7e;\n    margin-top: 2px;\n    height: 35px;\n  }\n"]))),O=o.c.img(b||(b=Object(i.a)(["\n  width: 110px;\n  height: 110px;\n  border-radius: 10px;\n  cursor: pointer;\n"]))),m=o.c.div(u||(u=Object(i.a)(["\n  padding-left: 18px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n"]))),k=o.c.button(p||(p=Object(i.a)(["\n  width: 100px;\n  height: 25px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n  text-align: center;\n  z-index: 0;\n  background: #ffffff;\n  border: 1px solid #e5e7e8;\n  border-radius: 5px;\n  cursor: pointer;\n  :hover {\n    background: black;\n    color: white;\n    transition: 0.3s linear;\n  }\n  ","\n"])),(function(n){return n.status&&Object(o.b)(h||(h=Object(i.a)(["\n      background: black;\n      color: white;\n      :hover {\n        background: white;\n        color: black;\n        transition: 0.3s linear;\n      }\n    "])))})),v=function(n){var e=n.location,t=n.onClick,i=n.idx,o=n.isSelect,d=Object(r.useState)(!1),f=Object(c.a)(d,2),b=f[0],u=f[1],p=e.image,h=e.locationId,v=e.type,w=e.name,y=e.address1,S=function(n){var e=n.src,t=Object(r.useState)("/images/face3.png"),i=Object(c.a)(t,2),o=i[0],s=i[1],a=Object(r.useRef)(null);return Object(r.useEffect)((function(){var n;return a&&(n=new IntersectionObserver((function(t){Object(c.a)(t,1)[0].isIntersecting&&(s(e),n.unobserve(a.current))}),{threshold:[.25]})).observe(a.current),function(){n&&n.disconnect(a)}}),[a,o,e]),{imageSrc:o,imageRef:a}}({src:p}),z=S.imageSrc,C=S.imageRef,I=function(){u(!0),console.log(b)},R=Object(a.a)().setLatLng;return Object(j.jsx)(j.Fragment,{children:e&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(x,{children:[Object(j.jsx)("div",{onClick:function(){I(),R(h,v.type)},children:Object(j.jsx)(O,{src:z,ref:C,onError:function(n){return function(n){n.target.src="/images/face3.png"}(n)},alt:"img"})}),Object(j.jsxs)(m,{children:[Object(j.jsxs)(g,{onClick:function(){I(),R(h,v.type)},children:[Object(j.jsx)("div",{className:"name",children:w}),Object(j.jsx)("div",{className:"address",children:y})]}),Object(j.jsx)(k,{status:o,onClick:function(){return t(e,i)},children:o?"\ucde8\uc18c":"\uc120\ud0dd"})]})]}),Object(j.jsx)(s.a,{modalIsOpen:b,closeModal:function(){u(!1)},header:w,title:w,blockSelect:function(){return t(e,i)},isSel:o?"\ucde8\uc18c":"\uc120\ud0dd",children:Object(j.jsx)(l.a,{type:v.type,id:h})})]})})};e.default=Object(r.memo)(v)}}]);
//# sourceMappingURL=20.69635607.chunk.js.map