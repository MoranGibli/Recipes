(this.webpackJsonphw2=this.webpackJsonphw2||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),a=n(3),c=n.n(a),s=(n(14),n.p,n(15),n(0));function o(e){var t=e.recipes.map((function(t){return Object(s.jsx)(l,{img:t.img,name:t.name,text:t.text,func:t.func,btn:t.btn,prepare:e.prepare,recipe:t})}));return Object(s.jsx)("div",{className:"recipesDiv",children:t})}function l(e){return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("img",{className:"card-img-top",src:e.img}),Object(s.jsx)("h3",{children:e.name}),Object(s.jsx)("p",{children:e.text}),Object(s.jsx)("button",{type:"button",onClick:function(){return e.prepare(e.recipe)},className:"btn",children:e.btn})]})}var d=n(8),p=n(6),h=n(4),u=n(5),b=n(9),j=n(7),m=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).prepareDish=function(e){var t=Object(p.a)(r.state.recipes),n=Object(d.a)({},e);n.btn="eat!"===n.btn?"Prepare Dish":"eat!",t=t.map((function(t){return t===e?n:t})),r.setState({recipes:t})},r.state={recipes:[{img:"https://www.burger-il.com/wp-content/uploads/2019/06/biet-haburger-981.jpg",name:"Hamburger",text:"A hamburger (or burger for short) is a food, typically considered a sandwich, consisting of one or more cooked patties\u2014usually ground meat, typically beef\u2014placed inside a sliced bread roll or bun. ",func:"btnClick",btn:"Prepare Dish"},{img:"https://d3o5sihylz93ps.cloudfront.net/wp-content/uploads/2019/08/13182108/%D7%A1%D7%99%D7%99%D7%9E%D7%9F-185.jpg",name:"Pizza",text:"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients",func:"btnClick",btn:"Prepare Dish"},{img:"https://img.mako.co.il/2020/05/18/HALUMI_IMG_6007_c.jpg",name:"Salad",text:"Salad is a dish consisting of mixed pieces of food, typically with at least one raw ingredient. They are often dressed, and typically served at room temperature or chilled, though some can be served warm.",func:"btnClick",btn:"Prepare Dish"}]},r}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.recipes.filter((function(e){return"Prepare Dish"===e.btn})),t=this.state.recipes.filter((function(e){return"eat!"===e.btn}));return Object(s.jsxs)("div",{children:[e.length>0?Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{className:"header",children:"Recipes"}),Object(s.jsx)("h3",{className:"header",children:"Recipes made"}),Object(s.jsx)(o,{recipes:e,prepare:this.prepareDish})]}):null,t.length>0?Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{className:"header",children:"Ready to EAT!"}),Object(s.jsxs)("h3",{className:"header",children:["Recipes made:",t.length]}),Object(s.jsx)(o,{recipes:t,prepare:this.prepareDish})]}):null]})}}]),n}(r.Component);var f=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(m,{})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),a(e),c(e)}))};c.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.e1f92066.chunk.js.map