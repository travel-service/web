(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[18],{115:function(n,e,t){"use strict";t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return o})),t.d(e,"d",(function(){return s}));t(0);var c=t(134),r=t(8),i=function(n){var e=n.children,t=Object(c.useMediaQuery)({query:"(max-width:768px)"});return Object(r.jsx)(r.Fragment,{children:t&&e})},a=function(n){var e=n.children,t=Object(c.useMediaQuery)({query:"(min-width:769px)"});return Object(r.jsx)(r.Fragment,{children:t&&e})},o=function(n){var e=n.children,t=Object(c.useMediaQuery)({query:"(min-width:1023px)"});return Object(r.jsx)(r.Fragment,{children:t&&e})},s=function(n){var e=n.children,t=Object(c.useMediaQuery)({query:"(max-width:1023px)"});return Object(r.jsx)(r.Fragment,{children:t&&e})}},116:function(n,e,t){"use strict";var c,r,i,a,o=t(19),s=(t(0),t(30)),d=t(20),j=t(8),l=Object(d.c)(s.b)(c||(c=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  ","\n"])),(function(n){return!n.auth&&Object(d.b)(r||(r=Object(o.a)(["\n      flex-direction: row;\n      "," {\n        width: 45px;\n        margin-bottom: 0px;\n        margin-right: 15px;\n      }\n\n      "," {\n        height: 15px;\n      }\n    "])),b,x)})),b=d.c.img(i||(i=Object(o.a)(["\n  width: 120px;\n  margin-bottom: 25px;\n"]))),x=d.c.img(a||(a=Object(o.a)(["\n  height: 30px;\n"])));e.a=function(n){var e=n.auth;return Object(j.jsxs)(l,{to:"/",auth:e,children:[Object(j.jsx)(b,{alt:"LogoImage",src:"/images/logoPaintingV2.png"}),Object(j.jsx)(x,{alt:"LogoLetter",src:"/images/logoLetterV2.png"})]})}},121:function(n,e,t){"use strict";var c,r,i,a,o,s,d,j,l,b,x,u=t(2),h=t.n(u),p=t(10),O=t(0),g=t(11),m=t(19),f=t(20),v=t(30),y=t(108),w=t(116),k=t(38),S=t(115),I=t(8),L=f.c.div(c||(c=Object(m.a)(["\n  width: 100%;\n  background-color: ",";\n"])),(function(n){return"landing"===n.type?k.a.landing:k.a.back2})),M=f.c.div(r||(r=Object(m.a)(["\n  max-width: 1200px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 30px;\n  margin: 0 auto;\n\n  @media screen and (max-width: 767px) {\n    display: block;\n  }\n"]))),_=f.c.div(i||(i=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),F=f.c.div(a||(a=Object(m.a)(["\n  display: flex;\n  @media screen and (max-width: 767px) {\n    display: block;\n    ","\n  }\n"])),(function(n){return!n.btnMenu&&Object(f.b)(o||(o=Object(m.a)(["\n        display: none;\n      "])))})),z=f.c.div(s||(s=Object(m.a)(["\n  display: none;\n  position: absolute;\n  z-index: 1;\n  background-color: ",";\n  top: 60px;\n  border-radius: 10px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n"])),k.a.back1),N=Object(f.c)(v.b)(d||(d=Object(m.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: black;\n  padding: 10px 20px;\n  font-size: 17px;\n  font-weight: 550;\n\n  text-decoration: none;\n  /* text-underline-position: under; */\n\n  @media screen and (max-width: 767px) {\n    font-size: 13px;\n    margin-left: 0px;\n    width: 100%;\n    text-align: center;\n    :hover {\n      transition: all 0.15s linear;\n      background-color: white;\n      border-radius: 10px;\n    }\n  }\n"]))),P=Object(f.c)(y.f)(j||(j=Object(m.a)(["\n  display: none;\n  @media screen and (max-width: 767px) {\n    display: block;\n    width: 30px;\n    height: 30px;\n    cursor: pointer;\n  }\n"]))),D=f.c.div(l||(l=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 17px;\n  font-weight: 550;\n  :hover {\n    "," {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n  }\n"])),z),q=Object(f.c)(v.b)(b||(b=Object(m.a)(["\n  width: 100%;\n  text-decoration: none;\n  font-size: 15px;\n  font-weight: 450;\n  color: black;\n  padding: 15px;\n  text-align: center;\n  :hover {\n    background: ",";\n    border-radius: 10px;\n  }\n"])),k.a.back2),C=f.c.img(x||(x=Object(m.a)(["\n  padding: 5px;\n  width: 45px;\n  height: 45px;\n  background-color: ",";\n  border-radius: 50%;\n"])),k.a.landingThumbnail),Q=function(n){var e=n.userState,t=n.onLogout,c=n.type,r=Object(O.useState)(!1),i=Object(g.a)(r,2),a=i[0],o=i[1];return Object(I.jsx)(L,{type:c,children:Object(I.jsxs)(M,{children:[Object(I.jsxs)(_,{children:[Object(I.jsx)(w.a,{}),Object(I.jsx)(P,{onClick:function(){o(!a)}})]}),Object(I.jsx)(F,{btnMenu:a,children:e?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(N,{to:"/canvas/directory",children:"\uc5ec\ud589\ubcf4\uad00\ud568"}),Object(I.jsx)(S.b,{children:Object(I.jsxs)(D,{children:[Object(I.jsx)(C,{src:"/images/face1.png",alt:""}),e.nickName,Object(I.jsxs)(z,{children:[Object(I.jsx)(q,{to:"/mypage/MyInfo",children:"\ub9c8\uc774\ud398\uc774\uc9c0"}),Object(I.jsx)(q,{to:"",onClick:t,children:"\ub85c\uadf8\uc544\uc6c3"})]})]})}),Object(I.jsxs)(S.a,{children:[Object(I.jsx)(N,{to:"/mypage/MyInfo",children:"\ub9c8\uc774\ud398\uc774\uc9c0"}),Object(I.jsx)(N,{to:"",onClick:t,children:"\ub85c\uadf8\uc544\uc6c3"})]}),Object(I.jsx)(N,{to:"/notice",children:"\uacf5\uc9c0\uc0ac\ud56d"})]}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(N,{to:"/signup",children:"\ud68c\uc6d0\uac00\uc785"}),Object(I.jsx)(N,{to:"/login",children:"\ub85c\uadf8\uc778"}),Object(I.jsx)(N,{to:"/notice",children:"\uacf5\uc9c0\uc0ac\ud56d"})]})})]})})},E=t(26),T=t(31);e.a=function(n){var e=n.type,t=Object(T.d)((function(n){return{userState:n.user.userState}})).userState,c=Object(T.c)(),r=function(){var n=Object(p.a)(h.a.mark((function n(){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c(Object(E.c)());case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(I.jsx)(Q,{userState:t,onLogout:r,type:e})}},250:function(n,e,t){"use strict";t.r(e);var c=t(0),r=t(5),i=t(2),a=t.n(i),o=t(10),s=t(11),d=t(19),j=t(20),l=t(38),b=t(4);function x(n,e){if(null==n)return{};var t,c,r=function(n,e){if(null==n)return{};var t,c,r={},i=Object.keys(n);for(c=0;c<i.length;c++)t=i[c],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(c=0;c<i.length;c++)t=i[c],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var u,h,p,O,g,m,f,v,y,w,k,S,I,L,M,_=t(8),F=j.c.div(u||(u=Object(d.a)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n  width: 1024px;\n  margin: 0 auto;\n\n  @media (max-width: 1024px) {\n    width: 768px;\n  }\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]))),z=function(n){var e=n.children,t=x(n,["children"]);return Object(_.jsx)(F,Object(b.a)(Object(b.a)({},t),{},{children:e}))},N=j.c.button(h||(h=Object(d.a)(["\n    border: none;\n    border-radius: 4px;\n    font-size: 1rem;\n    font-weight: bold;\n    padding: 0.25rem 1rem;\n    color: white;\n    outline: none;\n    cursor: pointer;\n    \n    a:visited {\n        color: white;\n    }\n    \n    background:",";\n        &:hover{\n            background:",";\n        }\n"])),l.a.gray[8],l.a.gray[6]),P=function(n){return Object(_.jsx)(N,Object(b.a)({},n))},D=t(30),q=t(9),C=t.n(q),Q=Object(j.c)(z)(p||(p=Object(d.a)(["\n  margin-top: 4rem;\n"]))),E=j.c.div(O||(O=Object(d.a)(["\n  border-bottom: 1px solid ",";\n  padding-bottom: 1rem;\n  margin-bottom: 1rem;\n  h1 {\n    font-size: 3rem;\n    line-height: 1.5;\n    margin: 0;\n  }\n"])),l.a.gray[2]),T=j.c.div(g||(g=Object(d.a)(["\n  margin-top: 1rem;\n  color: ",";\n\n  span + span:before {\n    color: ",";\n    padding-left: 0.25rem;\n    padding-right: 0.25rem;\n    content: '\\B7';\n  }\n"],["\n  margin-top: 1rem;\n  color: ",";\n\n  span + span:before {\n    color: ",";\n    padding-left: 0.25rem;\n    padding-right: 0.25rem;\n    content: '\\\\B7';\n  }\n"])),l.a.gray[6],l.a.gray[5]),B=j.c.div(m||(m=Object(d.a)(["\n  font-size: 1.3125rem;\n  color: ",";\n"])),l.a.gray[8]),H=j.c.div(f||(f=Object(d.a)(["\n  text-align: center;\n  border-bottom: 1px solid ",";\n"])),l.a.gray[5]),J=function(){var n=Object(c.useState)(""),e=Object(s.a)(n,2),t=e[0],i=e[1],d=Object(c.useState)(!1),j=Object(s.a)(d,2),l=j[0],b=j[1],x=Object(r.g)().numId,u=function(){var n=Object(o.a)(a.a.mark((function n(){var e;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return b(!0),n.prev=1,n.next=4,C.a.get("http://localhost:4000/notices");case 4:e=n.sent,i(e.data),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:b(!1);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}}();if(Object(c.useEffect)((function(){u()}),[]),l)return Object(_.jsx)(Q,{children:"Loading..."});if(!t)return null;var h=t.filter((function(n){return n.numId===Number(x)}));if(console.log(h),!h[0])return Object(_.jsxs)(_.Fragment,{children:[t&&console.log(t),Object(_.jsxs)(Q,{children:[Object(_.jsx)(H,{children:Object(_.jsx)("h1",{children:"\uacf5\uc9c0\uc0ac\ud56d"})}),Object(_.jsxs)(E,{children:[Object(_.jsx)("h2",{children:"\uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uacf5\uc9c0\uc0ac\ud56d \uc785\ub2c8\ub2e4."}),Object(_.jsxs)(T,{children:[Object(_.jsx)("span",{children:Object(_.jsx)("b",{children:"\uad00\ub9ac\uc790"})}),Object(_.jsx)("span",{children:(new Date).toLocaleDateString()}),Object(_.jsx)("span",{children:"null"})]})]}),Object(_.jsx)(B,{dangerouslySetInnerHTML:{__html:"<p>\uc874\uc7ac\ud558\uc9c0 <b>\uc54a\ub294</b> \uacf5\uc9c0\uc0ac\ud56d\uc785\ub2c8\ub2e4.</p>"}}),Object(_.jsx)(P,{children:Object(_.jsx)(D.b,{style:{textDecoration:"none",color:"white"},to:"/notice",children:"\ubaa9\ub85d\uc73c\ub85c \ub3cc\uc544\uac00\uae30"})})]})]});if(t&&h){var p=h[0],O=p.title,g=p.author,m=p.date,f=p.views,v=p.body;return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)(Q,{children:[Object(_.jsx)(H,{children:Object(_.jsx)("h1",{children:"\uacf5\uc9c0\uc0ac\ud56d"})}),Object(_.jsxs)(E,{children:[Object(_.jsx)("h2",{children:O}),Object(_.jsxs)(T,{children:[Object(_.jsx)("span",{children:Object(_.jsx)("b",{children:g})}),Object(_.jsx)("span",{children:m}),Object(_.jsx)("span",{children:f})]})]}),Object(_.jsx)(B,{dangerouslySetInnerHTML:{__html:v}}),Object(_.jsx)(P,{children:Object(_.jsx)(D.b,{style:{textDecoration:"none",color:"white"},to:"/notice",children:"\ubaa9\ub85d"})})]})})}},V=t(121),A=j.c.div(v||(v=Object(d.a)(["\n  height: 100%;\n  flex-direction: row;\n  background-color: #ffd0c0;\n"]))),G=function(n){var e=n.children;return Object(_.jsxs)(A,{children:[Object(_.jsx)(V.a,{type:"landing"}),e]})},K=function(){return Object(_.jsx)(G,{children:Object(_.jsx)(J,{})})},R=function(n){for(var e=n.postsPerPage,t=n.totalPosts,c=n.paginate,r=[],i=1;i<=Math.ceil(t/e);i++)r.push(i);return Object(_.jsx)("ul",{className:"pagination",children:r.map((function(n){return Object(_.jsx)("li",{className:"pagination_item",onClick:function(){return c(n)},children:n},n)}))})},U=Object(j.c)(z)(y||(y=Object(d.a)(["\n  margin-top: 3rem;\n"]))),W=j.c.div(w||(w=Object(d.a)(["\n  text-align: center;\n"]))),X=j.c.div(k||(k=Object(d.a)(["\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  &:first-child {\n    padding-top: 1rem;\n  }\n  & + & {\n    border-top: 1px solid ",";\n  }\n\n  h2 {\n    font-size: 2rem;\n    margin-bottom: 0;\n    margin-top: 0;\n    &:hover {\n      color: ",";\n    }\n  }\n  p {\n    margin-top: 1rem;\n  }\n"])),l.a.gray[2],l.a.gray[6]),Y=j.c.div(S||(S=Object(d.a)(["\n  padding: 3rem;\n  margin: 20px 20px;\n  min-height: 1rem;\n  text-align: center;\n  .list_tit {\n    color: #808000;\n  }\n  .list_grid {\n    display: grid;\n    grid-template-columns: 10% 60% 10% 10% 10%;\n  }\n  .list_data {\n    line-height: 40px;\n  }\n  .title {\n    text-align: left;\n  }\n"]))),Z=j.c.div(I||(I=Object(d.a)(["\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  background-color: #f6f6f6;\n  border-bottom: solid 1px #ababab;\n"]))),$=j.c.div(L||(L=Object(d.a)(["\n  .pagincon {\n    text-align: center;\n    max-width: 700px;\n    margin: 0 auto;\n  }\n  .pagincon li {\n    list-style: none;\n    padding: 10px;\n    margin: 1px;\n    border-radius: 30px;\n    border: 1px solid #dedede;\n  }\n  .pagination li {\n    display: inline-block;\n    background: none;\n    font-weight: bold;\n    overflow: hidden;\n    :hover {\n      background-color: #ffa8a8;\n      border: 1px solid #ffc9c9;\n    }\n  }\n"]))),nn=j.c.div(M||(M=Object(d.a)(["\n  .postnum {\n    display: flex;\n    padding: 10px;\n  }\n"]))),en=function(){var n=Object(c.useState)(""),e=Object(s.a)(n,2),t=e[0],r=e[1],i=Object(c.useState)(!1),d=Object(s.a)(i,2),j=d[0],l=d[1],b=Object(c.useState)(1),x=Object(s.a)(b,2),u=x[0],h=x[1],p=Object(c.useState)(5),O=Object(s.a)(p,1)[0],g=function(){var n=Object(o.a)(a.a.mark((function n(){var e;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l(!0),n.prev=1,n.next=4,C.a.get("http://localhost:4000/notices");case 4:e=n.sent,r(e.data.reverse()),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:l(!1);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}}();Object(c.useEffect)((function(){g()}),[]);var m=u*O,f=m-O,v=t.slice(f,m);return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(tn,{test:v,loading:j,postnum:t.length}),Object(_.jsx)($,{children:Object(_.jsx)("div",{className:"pagincon",children:Object(_.jsx)(R,{postsPerPage:O,totalPosts:t.length,paginate:function(n){return h(n)}})})})]})},tn=function(n){var e=n.test,t=n.loading,c=n.postnum;return t?Object(_.jsx)(X,{children:"Loading..."}):e?Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)(Y,{children:[Object(_.jsx)(nn,{children:Object(_.jsxs)("div",{className:"postnum",children:["\ucd1d ",Object(_.jsx)("b",{style:{color:"#808000 "},children:c}),"\uac74\uc758 \uae00\uc774 \ub4f1\ub85d\ub418\uc5c8\uc2b5\ub2c8\ub2e4."]})}),Object(_.jsx)(Z,{children:Object(_.jsxs)("div",{className:"list_grid list_tit",children:[Object(_.jsx)("div",{children:" \ubc88\ud638 "}),Object(_.jsx)("div",{children:" \uc81c\ubaa9 "}),Object(_.jsx)("div",{children:" \uc791\uc131\uc790 "}),Object(_.jsx)("div",{children:" \uc791\uc131\uc77c "}),Object(_.jsx)("div",{children:" \uc870\ud68c\uc218 "})]})}),e.map((function(n){return Object(_.jsx)(X,{children:Object(_.jsxs)("div",{className:"list_grid",children:[Object(_.jsx)("div",{children:n.numId}),Object(_.jsx)("div",{className:"title",children:Object(_.jsx)(D.b,{style:{textDecoration:"none",color:"black"},to:""+"/notice/".concat(n.numId),children:Object(_.jsx)("b",{children:n.title})})}),Object(_.jsx)("div",{children:n.author}),Object(_.jsx)("div",{children:n.date}),Object(_.jsx)("div",{children:n.views})]})},n.id)}))]})}):null},cn=function(){return Object(_.jsxs)(U,{children:[Object(_.jsx)(W,{children:Object(_.jsx)("h1",{children:"\uacf5\uc9c0\uc0ac\ud56d"})}),Object(_.jsx)(tn,{}),Object(_.jsx)(en,{})]})},rn=function(){return Object(_.jsx)(G,{children:Object(_.jsx)(cn,{})})};e.default=function(){return Object(_.jsxs)(r.c,{children:[Object(_.jsx)(r.a,{element:Object(_.jsx)(rn,{}),path:"/"}),Object(_.jsx)(r.a,{element:Object(_.jsx)(K,{}),path:"/:numId"})]})}}}]);
//# sourceMappingURL=18.7eeb4482.chunk.js.map