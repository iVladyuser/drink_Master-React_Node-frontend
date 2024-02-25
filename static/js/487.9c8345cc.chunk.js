"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[487],{9593:function(n,i,t){t.d(i,{D:function(){return l}});var e,r=t(168),a=t(6048),o=t.n(a),d=(0,t(5216).ZP)(o()).attrs({activeClassName:"active"})(e||(e=(0,r.Z)(["\n  padding: 14px 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 40px;\n\n  @media screen and (min-width: 768px) {\n    padding: 14px 24px;\n    margin-top: 80px;\n  }\n\n  li {\n    width: 27px;\n    height: 27px;\n    &:not(:nth-child(-n + 2)) {\n      margin-left: 24px;\n    }\n  }\n\n  li a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    font-size: 12px;\n    font-weight: 500;\n    line-height: 1.33;\n    color: #f3f3f3;\n    cursor: pointer;\n  }\n\n  li.previous {\n    margin-right: 48px;\n\n    @media screen and (min-width: 768px) {\n      margin-right: 40px;\n    }\n  }\n\n  li.next {\n    margin-left: 48px;\n\n    @media screen and (min-width: 768px) {\n      margin-left: 40px;\n    }\n  }\n\n  li.previous a,\n  li.next a,\n  li.break a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  li.active a {\n    background-color: #4070cd80;\n    color: #f3f3f3;\n  }\n\n  li.disabled a {\n    color: grey;\n  }\n\n  li.disable,\n  li.disabled a {\n    cursor: default;\n  }\n\n  li.disabled a svg {\n    &:hover,\n    &:focus,\n    &:active {\n      fill: #f3f3f34d;\n    }\n  }\n"]))),p=t(6041),x=t(184),l=function(n){var i=n.limit,t=n.currentPage,e=n.items,r=n.handlePageChange,a=n.pageRangeDisplayed,o=Math.ceil(e/i);return(0,x.jsx)("div",{children:(0,x.jsx)(d,{pageCount:o,onPageChange:function(n){var i=n.selected;r(i),window.scrollTo({top:0,behavior:"smooth"})},pageRangeDisplayed:a,previousLabel:(0,x.jsx)(p.myN,{}),nextLabel:(0,x.jsx)(p.S4p,{}),breakLabel:"...",forcePage:t,renderOnZeroPageCount:null,marginPagesDisplayed:1})})}},2450:function(n,i,t){t.d(i,{d:function(){return o}});t(2791);var e=t(4950);var r=t.p+"static/media/trash.12f4b4ba37b06a599d0812bf2754b491.svg",a=t(184),o=function(n){var i=n.drinks,t=n.onRemoveClick;return(0,a.jsx)(a.Fragment,{children:i.map((function(n){return(0,a.jsxs)(e.K0,{children:[(0,a.jsx)(e.zo,{src:n.drinkThumb,alt:n.drink}),(0,a.jsxs)(e.ZC,{children:[(0,a.jsx)(e.bx,{children:n.drink}),(0,a.jsx)(e.Cn,{children:"Alcoholic"===n.alcoholic?"Alcoholic":"Non-alcoholic"}),(0,a.jsx)(e.By,{children:n.description})]}),(0,a.jsxs)(e.YD,{children:[(0,a.jsx)(e.YJ,{children:"See More"}),(0,a.jsx)(e.Lc,{onClick:function(){return t(n._id)},children:(0,a.jsx)("img",{src:r,alt:"trash",style:{maxWidth:"24px"}})})]})]},n._id)}))})}},8527:function(n,i,t){t.d(i,{Z:function(){return s}});var e,r,a,o,d=t(168),p=t(5216),x=p.ZP.div(e||(e=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 188px;\n  margin-bottom: 260px;\n  margin-right: auto;\n  margin-left: auto;\n\n  @media (min-width: 768px) {\n    margin-top: 175px;\n    margin-bottom: 195px;\n  }\n\n  @media (min-width: 1440px) {\n    margin-top: 200px;\n    margin-bottom: 140px;\n  }\n"]))),l=(p.ZP.div(r||(r=(0,d.Z)(["\n  padding-top: 200px;\n  padding-bottom: 140px;\n  display: flex;\n"]))),p.ZP.img(a||(a=(0,d.Z)(["\n  width: 123px;\n  height: 156px;\n  flex-shrink: 0;\n\n  @media (min-width: 768px) {\n    width: 158px;\n    height: 201px;\n  }\n"])))),c=p.ZP.p(o||(o=(0,d.Z)(["\n  color: rgba(64, 112, 205, 0.1);\n  font-size: 120px;\n  font-weight: 600;\n  line-height: 1.02;\n\n  @media (min-width: 768px) {\n    font-size: 150px;\n    line-height: 0.82;\n  }\n\n  @media (min-width: 1440px) {\n    font-size: 200px;\n    line-height: 1;\n  }\n"]))),h=t.p+"static/media/error_blue_iced_tea_1.e030e098a362edbe46f7.png",g=t(184),s=function(){return(0,g.jsxs)(x,{children:[(0,g.jsx)(c,{children:"4"}),(0,g.jsx)(l,{src:h,alt:"404"}),(0,g.jsx)(c,{children:"4"})]})}},1193:function(n,i,t){t.r(i),t.d(i,{FavoriteDrinksPage:function(){return u}});var e=t(9439),r=t(2791),a=t(4420),o=t(2926),d=t(5515),p=t(8527),x=t(9593),l=t(5172),c=t(2796),h=t(2450),g=t(4950),s=t(6337),m=t(184),u=function(){var n=(0,a.I0)(),i=(0,a.v9)(o.Wg),t=(0,a.v9)(o.n8),u=(0,a.v9)(o.GI),f=(0,r.useState)(0),b=(0,e.Z)(f,2),w=b[0],Z=b[1];(0,r.useEffect)((function(){n((0,o.OT)())}),[n]);var v=i.length;return(0,m.jsxs)(l.o,{children:[(0,m.jsx)(c.V,{title:"Favorites"}),"loading"===t?(0,m.jsx)(s.a,{}):u?(0,m.jsx)(p.Z,{}):(0,m.jsxs)(m.Fragment,{children:[i.length>0?(0,m.jsx)(g.KT,{children:(0,m.jsx)(h.d,{drinks:i,onRemoveClick:function(i){n((0,o.r7)(i))}})}):(0,m.jsx)(d.K,{text:"You haven't added any favorite cocktails yet."}),(0,m.jsx)(x.D,{limit:11,currentPage:w,items:v,handlePageChange:function(n){Z(n)},pageRangeDisplayed:5})]})]})};i.default=u},4950:function(n,i,t){t.d(i,{By:function(){return P},Cn:function(){return k},K0:function(){return Z},KT:function(){return w},L6:function(){return b},Lc:function(){return C},W2:function(){return f},YD:function(){return _},YJ:function(){return z},ZC:function(){return j},bx:function(){return y},zo:function(){return v}});var e,r,a,o,d,p,x,l,c,h,g,s,m=t(168),u=t(5216),f=u.ZP.div(e||(e=(0,m.Z)(["\n  width: 320px;\n  padding-top: 80px;\n  padding-bottom: 56px;\n  margin-left: 20px;\n  position: relative;\n\n  @media (min-width: 768px) {\n    width: 768px;\n    padding: 140px 32px;\n  }\n\n  @media (min-width: 1440px) {\n    width: 1440px;\n    padding: 158px 100px;\n  }\n"]))),b=u.ZP.h1(r||(r=(0,m.Z)(["\n  width: 140x;\n  height: 38px;\n  left: 20px;\n  top: 80px;\n  color: rgb(243, 243, 243);\n  font-size: 32px;\n  font-weight: 600;\n  line-height: 38px;\n  text-align: left;\n  @media (min-width: 768px) {\n    font-size: 56px;\n  }\n  @media (min-width: 1440px) {\n    font-size: 64px;\n  }\n"]))),w=u.ZP.ul(a||(a=(0,m.Z)(["\n  padding: 0;\n  margin: 0;\n  margin-top: 40px;\n\n  @media (min-width: 768px) {\n    display: flex;\n    flex-wrap: wrap;\n    row-gap: 80px;\n    column-gap: 20px;\n    margin-top: 60px;\n  }\n\n  @media (min-width: 1280px) {\n    margin-top: 62px;\n  }\n"]))),Z=u.ZP.li(o||(o=(0,m.Z)(["\n  display: block;\n  padding: 0;\n  margin: 0 auto;\n  margin-bottom: 40px;\n  width: 100%;\n\n  @media (min-width: 375px) {\n    width: 335px;\n  }\n\n  @media (min-width: 768px) {\n    width: 342px;\n    margin-bottom: 0;\n  }\n\n  @media (min-width: 1280px) {\n    width: 400px;\n  }\n"]))),v=u.ZP.img(d||(d=(0,m.Z)(["\n  width: 100%;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  background: linear-gradient(\n    180deg,\n    rgba(10, 10, 17, 0.02) 51.18%,\n    rgba(10, 10, 17, 0.77) 97.66%\n  );\n\n  @media (min-width: 375px) {\n    height: 360px;\n  }\n\n  @media (min-width: 768px) {\n    height: 360px;\n  }\n\n  @media (min-width: 1280px) {\n    height: 400px;\n  }\n"]))),j=u.ZP.div(p||(p=(0,m.Z)(["\n  margin-bottom: 18px;\n"]))),y=u.ZP.h5(x||(x=(0,m.Z)(["\n  font-size: 18px;\n  line-height: 1.33;\n  margin-bottom: 4px;\n  color: rgb(243, 243, 243);\n"]))),k=u.ZP.p(l||(l=(0,m.Z)(["\n  color: #7a7a7a;\n  font-size: 14px;\n  line-height: 1.28;\n  margin-bottom: 18px;\n"]))),P=u.ZP.p(c||(c=(0,m.Z)(["\n  font-size: 14px;\n  line-height: 1.28;\n  margin-bottom: 18px;\n  color: rgb(243, 243, 243);\n"]))),z=u.ZP.button(h||(h=(0,m.Z)(["\n  padding: 14px 40px;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.28;\n  border: none;\n  outline: none;\n  border-radius: 42px;\n  background: rgb(22, 31, 55);\n  color: white;\n  cursor: pointer;\n"]))),C=u.ZP.button(g||(g=(0,m.Z)(["\n    display: flex;\n    width: 46px;\n    padding: 11px 32px;\n    -webkit-box-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    align-items: center;\n    gap: 10px;\n    border: none;\n    outline: none;\n    border-radius: 40px;\n    background: rgb(22, 31, 55);\n\n  }\n"]))),_=u.ZP.div(s||(s=(0,m.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 8px;\n"])))},5515:function(n,i,t){t.d(i,{K:function(){return g}});var e,r,a,o=t.p+"static/media/asr_blue_iced_tea_1.de44a32b5880ede6432b.png",d=t(168),p=t(7686),x=p.Z.div(e||(e=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 32px;\n  margin-top: 91px;\n\n  @media (min-width: 768px) {\n    margin-top: 100px;\n    margin-bottom: 60px;\n  }\n\n  @media (min-width: 1440px) {\n    margin-top: 67px;\n  }\n"]))),l=p.Z.img(r||(r=(0,d.Z)(["\n  width: 198px;\n  height: 247px;\n\n  margin-left: 0;\n  padding: 0;\n  text-align: center;\n\n  @media (min-width: 768px) {\n    width: 261px;\n    height: 326px;\n  }\n\n  @media (min-width: 1440px) {\n  }\n"]))),c=p.Z.p(a||(a=(0,d.Z)(["\n  width: 205px;\n  color: rgb(243, 243, 243);\n  text-align: center;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.28;\n\n  @media (min-width: 768px) {\n    width: 236px;\n    font-size: 16px;\n    line-height: 1.37;\n  }\n\n  @media (min-width: 1440px) {\n    margin-top: 27px;\n  }\n"]))),h=t(184),g=function(n){var i=n.text;return(0,h.jsxs)(x,{children:[(0,h.jsx)(l,{src:o,alt:"blue iced tea"}),(0,h.jsxs)(c,{children:[" ",i]})]})}},2796:function(n,i,t){t.d(i,{V:function(){return a}});var e=t(4950),r=t(184),a=function(n){var i=n.title;return(0,r.jsx)(e.L6,{children:i})}},5172:function(n,i,t){t.d(i,{o:function(){return a}});var e=t(4950),r=t(184),a=function(n){var i=n.children;return(0,r.jsx)(e.W2,{children:i})}}}]);
//# sourceMappingURL=487.9c8345cc.chunk.js.map