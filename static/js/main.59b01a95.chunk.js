(this["webpackJsonprouter-exercise-p2"]=this["webpackJsonprouter-exercise-p2"]||[]).push([[0],{20:function(e,a,t){e.exports=t.p+"static/media/billu.ae8da46c.jpg"},21:function(e,a,t){e.exports=t.p+"static/media/tillu.8aba2585.jpg"},22:function(e,a,t){e.exports=t.p+"static/media/gullu.c389e6b5.jpg"},24:function(e,a,t){e.exports=t(41)},33:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(19),l=t.n(r),s=(t(29),t(32),t(6)),i=t(9),m=t(10),o=t(12),u=t(11),p=(t(33),t(20)),d=t.n(p),v=t(21),b=t.n(v),E=t(22),g=t.n(E),f=function(e){var a=e.cats.map((function(e){return c.a.createElement("li",{className:"nav-item",key:e.name},c.a.createElement(s.c,{exact:!0,to:"/cats/".concat(e.name),className:"nav-link"},e.name))}));return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},c.a.createElement(s.b,{className:"navbar-brand",to:"/cats"},"Cat App"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(s.c,{exact:!0,to:"/",className:"nav-link"},"Home")),a)))},N=t(1),h=(t(38),function(e){var a=e.cats;return c.a.createElement("div",{className:"CatList"},c.a.createElement("h1",{className:"display-1 text-center"},"Cat List!"),c.a.createElement("div",{className:"row"},a.map((function(e){return c.a.createElement("div",{key:e.name,className:"Cat-box col-md-4 text-center"},c.a.createElement("img",{src:e.src,alt:e.name}),c.a.createElement("h3",null,c.a.createElement(s.b,{className:"underline",to:"/cats/".concat(e.name)},e.name)))}))))}),y=(t(39),function(e){var a=e.cat;return c.a.createElement("div",{className:"Cat row justify-content-center mt-4"},c.a.createElement("div",{className:"col-11 col-lg-5"},c.a.createElement("div",{className:"card Cat-card"},c.a.createElement("img",{className:"card-img-top",src:a.src,alt:a.name}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h2",{className:"card-title"},a.name),c.a.createElement("h4",{className:"card-subtitle text-muted"},a.age," years old")),c.a.createElement("ul",{className:"list-group list-group-flush"},a.facts.map((function(e,a){return c.a.createElement("li",{key:a,className:"list-group-item"},e)}))),c.a.createElement("div",{className:"card-body"},c.a.createElement(s.b,{className:"btn btn-info",to:"/"},"Go Back")))))}),x=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(N.d,null,c.a.createElement(N.b,{exact:!0,path:"/",render:function(){return c.a.createElement(h,{cats:e.props.cats})}}),c.a.createElement(N.b,{exact:!0,path:"/cats/:name",render:function(a){var t=a.match.params.name,n=e.props.cats.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}));return c.a.createElement(y,Object.assign({},a,{cat:n}))}}),c.a.createElement(N.a,{to:"/"}))}}]),t}(n.Component),k=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(f,{cats:this.props.cats}),c.a.createElement("div",{className:"container"},c.a.createElement(x,{cats:this.props.cats})))}}]),t}(n.Component);k.defaultProps={cats:[{name:"Billu",age:5,src:d.a,facts:["Billu loves eating popcorn.","Billu is a naughty cat.","Billu wants to cuddle with you!"]},{name:"Tillu",age:3,src:b.a,facts:["Tillu has soooo much energy!","Tillu is highly intelligent.","Tillu loves people more than other cats."]},{name:"Gullu",age:4,src:g.a,facts:["Gullu is not the brightest, he's super lazy.","Gullu does not like walks or exercise.","Gullu loves eating food."]}]};var j=k;t(40);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s.a,null,c.a.createElement(j,null))),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.59b01a95.chunk.js.map