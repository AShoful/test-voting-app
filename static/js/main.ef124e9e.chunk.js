(this["webpackJsonptest-voting-app"]=this["webpackJsonptest-voting-app"]||[]).push([[0],{146:function(e,t,n){e.exports=n.p+"static/media/one.507a0e33.png"},147:function(e,t,n){e.exports=n.p+"static/media/two.9c6efd85.png"},174:function(e,t,n){e.exports=n(356)},179:function(e,t,n){},28:function(e,t,n){e.exports={avatar:"Card_avatar__J_1JH",img:"Card_img__3uKiN",title:"Card_title__2t3FQ",counter:"Card_counter__3Vu5H",button:"Card_button__2YHzL"}},355:function(e,t,n){},356:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(48),o=n.n(c),i=(n(179),n(28)),u=n.n(i),l=function(e){var t=e.handle,n=e.url,a=e.counter,c=e.color,o=e.title;return r.a.createElement("div",{className:u.a.avatar},r.a.createElement("img",{className:u.a.img,src:n,alt:"img"}),r.a.createElement("div",{className:u.a.title},o),r.a.createElement("div",{className:u.a.counter},a),r.a.createElement("button",{onClick:t,className:u.a.button,style:{backgroundColor:"".concat(c)}}))},s=n(49),p=n(50),m=n(54),f=n(51),d=n(55),O=n(57),h=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.COLORS;return r.a.createElement(O.c,{width:400,height:400,margin:{top:50}},r.a.createElement(O.b,{data:t,cx:200,cy:150,labelLine:!1,outerRadius:140,innerRadius:100,dataKey:"value"},t.map((function(e,t){return r.a.createElement(O.a,{key:"cell-".concat(t),fill:n[t%n.length]})}))))}}]),t}(a.PureComponent);h.defaultProps={data:[{},{}],COLORS:["blue","yellow"]};var b=n(145);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e,t){var n=e,a=t,r=function(){};return{getState:function(){return a},dispatch:function(e){return a=n(a,e),r(),e},subscribe:function(e){r=e}}}((function(e,t){switch(t.type){case"ADD_COUNTER_ONE":return g({},e,{counterOne:e.counterOne+1});case"ADD_COUNTER_TWO":return g({},e,{counterTwo:e.counterTwo+1});default:return e}}),{counterOne:0,counterTwo:0});var w,y,E=n(146),j=n.n(E),C=n(147),N=n.n(C),P=n(82),k=n.n(P),D=["red","black"],T=(w=function(e){return e},y=function(e){return{handleOne:function(){return e({type:"ADD_COUNTER_ONE"})},handleTwo:function(){return e({type:"ADD_COUNTER_TWO"})}}},function(e){return function(t){function n(){var e,t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(f.a)(n)).call.apply(e,[this].concat(r)))).handleChange=function(){t.forceUpdate()},t}return Object(d.a)(n,t),Object(p.a)(n,[{key:"componentDidMount",value:function(){this.unsubscribe=_.subscribe(this.handleChange)}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){return r.a.createElement(e,Object.assign({},this.props,w(_.getState(),this.props),y(_.dispatch,this.props)))}}]),n}(r.a.Component)})((function(e){var t=e.counterOne,n=e.counterTwo,a=e.handleOne,c=e.handleTwo,o=t+n,i=[{name:"One",value:100*t/(0===o?1:o)},{name:"Two",value:100*n/(0===o?1:o)}];return r.a.createElement("div",{className:k.a.mainPage},r.a.createElement("div",{className:k.a.wrapper},r.a.createElement(l,{title:i[0].name,url:j.a,counter:t,handle:a,color:D[0]}),r.a.createElement(h,{data:i,COLORS:D}),r.a.createElement(l,{title:i[1].name,url:N.a,counter:n,handle:c,color:D[1]})))}));n(355);var R=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},82:function(e,t,n){e.exports={mainPage:"MainPage_mainPage__EoIMC",wrapper:"MainPage_wrapper__32Lcb"}}},[[174,1,2]]]);
//# sourceMappingURL=main.ef124e9e.chunk.js.map