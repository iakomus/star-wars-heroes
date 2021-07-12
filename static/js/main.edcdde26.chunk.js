(this["webpackJsonpstar-wars-hero"]=this["webpackJsonpstar-wars-hero"]||[]).push([[0],{52:function(n,e,t){},53:function(n,e,t){"use strict";t.r(e);var r,o,a,c,i,d,l,u,b,s=t(0),h=t.n(s),g=t(23),j=t.n(g),p=t(38),f=t(16),m=t(22),x=t(6),O=t(8),k=t(7),y=k.c.h1(r||(r=Object(O.a)(["\n  padding: 10px 20px;\n  margin-top: 0;\n  background-color: ",";\n  color: ",";\n"])),(function(n){return n.theme.global.accent.background}),(function(n){return n.theme.global.accent.foreground})),v=k.c.div(o||(o=Object(O.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 0 20px;\n  margin: 20px 0;\n  overflow: auto;\n\n  > * {\n    max-width: 800px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n"]))),w=k.c.p(a||(a=Object(O.a)(["\n  line-height: 1.75;\n  padding: 0.5rem 0;\n  color: ",";\n\n  &:first-of-type {\n    margin-top: 2rem;\n  }\n"])),(function(n){return n.theme.global.foreground})),S=t(2),C=function(){return Object(S.jsxs)(v,{children:[Object(S.jsx)(y,{children:"Tech Challenge"}),Object(S.jsx)(w,{children:"Small Single App that shows all the information related to a character from the Star Wars Universe."}),Object(S.jsx)(w,{children:"Users can submit the name of a character they are looking for in order to see all the relevant information in a dedicated area."})]})},W=120,T=k.c.img(c||(c=Object(O.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: ","px;\n  height: ","px;\n  margin-top: ","px;\n  margin-left: ","px;\n  animation: spin 3s linear infinite;\n\n  @keyframes spin {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])),W,W,-60,-60),H=k.c.section(i||(i=Object(O.a)(["\n  article {\n    margin: 20px 0;\n    background-color: ",";\n    color: ",";\n\n    h1 {\n      margin-bottom: 0;\n    }\n\n    dl {\n      margin: 0;\n      dt,\n      dd {\n        display: inline-block;\n        width: 50%;\n        margin: 0;\n        padding: 10px 20px;\n        border-bottom-width: 1px;\n        border-bottom-style: solid;\n        border-bottom-color: ",";\n\n        &:last-of-type {\n          border-bottom: none;\n        }\n      }\n    }\n  }\n"])),(function(n){return n.theme.global.highlight.background}),(function(n){return n.theme.global.highlight.foreground}),(function(n){return n.theme.global.accent.background})),E=function(n){var e=n.result,t=e.loading,r=e.error,o=e.data;if(t){return Object(S.jsx)(T,{src:"".concat("/star-wars-hero","/logo512.png"),alt:"Logo"})}return r?Object(S.jsx)("pre",{children:r.message}):Object(S.jsx)(H,{children:((null===o||void 0===o?void 0:o.results)||[]).map((function(n){var e=n.name,t=n.gender,r=n.birth_year,o=n.height,a=n.mass,c=n.hair_color;return Object(S.jsxs)("article",{children:[Object(S.jsx)(y,{children:e}),Object(S.jsxs)("dl",{children:[Object(S.jsx)("dt",{children:"Gender"}),Object(S.jsx)("dd",{children:t}),Object(S.jsx)("dt",{children:"Birth Year"}),Object(S.jsx)("dd",{children:r}),Object(S.jsx)("dt",{children:"Height"}),Object(S.jsx)("dd",{children:o}),Object(S.jsx)("dt",{children:"Mass"}),Object(S.jsx)("dd",{children:a}),Object(S.jsx)("dt",{children:"Hair Colour"}),Object(S.jsx)("dd",{children:c})]})]},e)}))})},I=t(19),L=t(24),N=t(28),B=function(n){var e=Object(s.useState)(n),t=Object(I.a)(e,2),r=t[0],o=t[1];return[r,function(n){var e=n.target,t=e.name,r=e.value;t&&o((function(n){return Object(N.a)(Object(N.a)({},n),{},Object(L.a)({},t,r))}))},function(){return o(n)}]},D=t(29),M=t.n(D),z=t(37),A=t(56),J=t(25),U={loading:!1,error:null,data:void 0},_=Object(J.b)({name:"result",initialState:U,reducers:{setLoading:function(n,e){n.loading=e.payload},setError:function(n,e){n.error=e.payload},setData:function(n,e){n.data=e.payload}}}),q=_.actions,G=q.setLoading,P=q.setError,Y=q.setData,F=_.reducer,K=function(){var n=Object(z.a)(M.a.mark((function n(e){var t;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat("https://swapi.dev/api","/people/?search=").concat(e));case 2:if(!(t=n.sent).ok){n.next=5;break}return n.abrupt("return",t.json());case 5:throw new Error("Network error");case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),Q=function(n){var e=Object(A.a)(["hero",n],(function(){return K(n)}),{enabled:Boolean(n)}),t=e.isLoading,r=e.error,o=e.data,a=Object(f.b)();Object(s.useEffect)((function(){(t||r||o)&&(a(G(t)),a(P(r)),a(Y(o)))}),[t,r,o,a])},R={light:{global:{background:"#fafafa",foreground:"#383838",accent:{background:"#cdcdcd",foreground:"#404040"},highlight:{background:"#e4e4e4",foreground:"#494949"}},button:{borderWidth:"1px",borderStyle:"solid",primary:{background:"#aaa",borderColor:"#999",foreground:"#3d3d3d"}},input:{borderWidth:"1px",borderStyle:"solid",borderColor:"#999",background:"#e8e8e8",foreground:"#444",placeholder:"#999"}},dark:{global:{background:"#383838",foreground:"#fafafa",accent:{background:"#404040",foreground:"#cdcdcd"},highlight:{background:"#494949",foreground:"#e4e4e4"}},button:{borderWidth:"1px",borderStyle:"solid",primary:{background:"#3d3d3d",borderColor:"#333",foreground:"#aaa"}},input:{borderWidth:"1px",borderStyle:"solid",borderColor:"#333",background:"#999",foreground:"#0d0d0d",placeholder:"#555"}}},V="768px",X="2560px",Z={mobile:"(min-width: ".concat("375px",")"),tablet:"(min-width: ".concat(V,")"),desktop:"(min-width: ".concat(X,")")},$=k.c.form(d||(d=Object(O.a)(["\n  display: flex;\n  padding: 15px;\n  position: sticky;\n  top: 0;\n  background: ",";\n  transition: padding ",";\n\n  input {\n    width: 100%;\n    border-width: ",";\n    border-style: ",";\n    border-color: ",";\n    border-right: none;\n    color: ",";\n    background-color: ",";\n    outline: none;\n    padding: 5px 10px;\n\n    ::placeholder {\n      color: ",";\n    }\n  }\n\n  button {\n    border-width: ",";\n    border-style: ",";\n    border-color: ",";\n    background: ",";\n    color: ",";\n  }\n\n  @media "," {\n    padding: 40px 80px;\n  }\n"])),(function(n){return n.theme.global.accent.background}),"0.25s",(function(n){return n.theme.input.borderWidth}),(function(n){return n.theme.input.borderStyle}),(function(n){return n.theme.input.borderColor}),(function(n){return n.theme.input.foreground}),(function(n){return n.theme.input.background}),(function(n){return n.theme.input.placeholder}),(function(n){return n.theme.button.borderWidth}),(function(n){return n.theme.button.borderStyle}),(function(n){return n.theme.button.primary.borderColor}),(function(n){return n.theme.button.primary.background}),(function(n){return n.theme.button.primary.foreground}),Z.tablet),nn=function(){var n=B({search:""}),e=Object(I.a)(n,3),t=e[0].search,r=e[1],o=e[2],a=Object(s.useState)(""),c=Object(I.a)(a,2),i=c[0],d=c[1];Q(i);return Object(S.jsxs)($,{onSubmit:function(n){n.preventDefault(),d(t),o()},children:[Object(S.jsx)("input",{id:"searchInput","aria-label":"Search Input",type:"text",name:"search",value:t,onChange:r,placeholder:"Search for your favourite Star Wars Hero"}),Object(S.jsx)("button",{type:"submit",children:"search"})]})},en=function(){var n=Object(f.c)((function(n){return n.result.loading})),e=Object(f.c)((function(n){return n.result.error})),t=Object(f.c)((function(n){return n.result.data}));return Object(S.jsxs)(v,{children:[Object(S.jsx)(y,{children:"Search your Hero"}),Object(S.jsx)(nn,{}),Object(S.jsx)(E,{result:{loading:n,error:e,data:t}})]})},tn=k.c.main(l||(l=Object(O.a)(["\n  background: ",";\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n"])),(function(n){return n.theme.global.background})),rn=Object(J.a)({reducer:{result:F}}),on=Object(k.b)(u||(u=Object(O.a)(["\n  * {\n    box-sizing: border-box;\n  }\n  html, body, #root, main {\n    height:100%; \n  }\n  body { \n    font-family: 'Montserrat', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  button { \n    cursor: pointer;\n  }\n"]))),an=Object(s.createContext)({theme:"light",toggleTheme:function(){return console.log("default")}}),cn=function(n){var e=n.children,t=Object(s.useState)(localStorage.getItem("theme")||"light"),r=Object(I.a)(t,2),o=r[0],a=r[1],c={theme:o,toggleTheme:function(){a((function(n){var e="light"===n?"dark":"light";return localStorage.setItem("theme",e),e}))}};return Object(S.jsx)(an.Provider,{value:c,children:Object(S.jsx)(k.a,{theme:R[o],children:e})})},dn=k.c.nav(b||(b=Object(O.a)(["\n  background: ",";\n  color: ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 50px;\n\n  .logo {\n    padding: 5px;\n    &,\n    & img {\n      height: 100%;\n    }\n  }\n  a {\n    color: ",";\n    text-decoration: none;\n    align-items: center;\n    padding: 10px;\n    display: flex;\n  }\n\n  .menu {\n    display: flex;\n\n    a {\n      display: none;\n\n      &.active {\n        background-color: ",";\n      }\n\n      @media "," {\n        display: inline-block;\n      }\n    }\n\n    button {\n      border: none;\n      padding: 0;\n      margin: 0;\n      background: transparent;\n    }\n  }\n"])),(function(n){return n.theme.global.accent.background}),(function(n){return n.theme.global.accent.foreground}),(function(n){return n.theme.global.accent.foreground}),(function(n){return n.theme.global.background}),Z.tablet),ln=function(n){var e=n.routes,t=Object(s.useContext)(an),r=t.theme,o=t.toggleTheme,a="/star-wars-hero",c="".concat(a,"/").concat("light"===r?"mask-black.png":"mask-white.png");return Object(S.jsxs)(dn,{children:[Object(S.jsxs)(m.b,{className:"logo",exact:!0,to:"/",children:[Object(S.jsx)("img",{src:"".concat(a,"/logo256.png"),alt:"Logo"}),"Start Wars Heroes"]}),Object(S.jsxs)("div",{className:"menu",children:[e.map((function(n){var e=n.link,t=n.label;return Object(S.jsx)(m.b,{exact:!0,to:e,activeClassName:"active",children:t},e)})),Object(S.jsx)("button",{type:"button",onClick:o,children:Object(S.jsx)("img",{src:c,alt:"Toggle Theme to ".concat("light"===r?"dark":"light")})})]})]})},un=function(){return Object(S.jsx)(tn,{children:Object(S.jsx)(f.a,{store:rn,children:Object(S.jsxs)(m.a,{children:[Object(S.jsx)(on,{}),Object(S.jsx)(ln,{routes:[{link:"/",label:"Home"},{link:"/about",label:"About"}]}),Object(S.jsxs)(x.d,{children:[Object(S.jsx)(x.b,{exact:!0,path:"/",component:en}),Object(S.jsx)(x.b,{exact:!0,path:"/about",component:C}),Object(S.jsx)(x.b,{children:Object(S.jsx)(x.a,{to:"/"})})]})]})})})},bn=new(t(55).a)({defaultOptions:{queries:{staleTime:6e4}}}),sn=(t(51),t(52),Object(S.jsx)(h.a.StrictMode,{children:Object(S.jsx)(p.a,{client:bn,children:Object(S.jsx)(cn,{children:Object(S.jsx)(un,{})})})}));j.a.render(sn,document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.edcdde26.chunk.js.map