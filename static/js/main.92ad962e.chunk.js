(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{20:function(e,t,n){e.exports=n(35)},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(17),c=n.n(l),u=n(7),o=n(1),m=function(){return r.a.createElement("h1",null,"Home Page")},p=n(13),i=n(10),s=n.n(i),E=n(14),f=n(18);function d(){return(d=Object(f.a)(s.a.mark((function e(){var t,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://mate-academy.github.io/react_people-table/api/people.json");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,a=n.map((function(e){return Object(E.a)(Object(E.a)({},e),{},{mother:n.find((function(t){return e.motherName===t.name}))||"-",father:n.find((function(t){return e.fatherName===t.name}))||"-"})})),e.abrupt("return",a);case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}n(26);var h=function(e){var t=e.people;return r.a.createElement("table",{className:"PeopleTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"name"),r.a.createElement("td",null,"sex"),r.a.createElement("td",null,"born"),r.a.createElement("td",null,"died"),r.a.createElement("td",null,"mother"),r.a.createElement("td",null,"father"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{className:"Person"},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.sex),r.a.createElement("td",null,e.born),r.a.createElement("td",null,e.died),r.a.createElement("td",null,e.mother.name),r.a.createElement("td",null,e.father.name))}))))},b=(n(27),function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(!1),u=Object(p.a)(c,2),o=u[0],m=u[1];return Object(a.useEffect)((function(){(function(){return d.apply(this,arguments)})().then(l,m(!1)).catch((function(e){return m(!0)}))}),[]),r.a.createElement("div",{className:"PeoplePage"},r.a.createElement("h1",null,"People Page"),r.a.createElement("h2",null,"People table"),o?r.a.createElement("p",null,"Something is wrong, try load page later!"):r.a.createElement(h,{people:n}))}),v=function(){return r.a.createElement("h1",null,"Page not found")},j=(n(28),n(29),function(){return r.a.createElement("div",{className:"Navigation"},r.a.createElement(u.b,{to:"/home",activeClassName:"Active"},"Home"),r.a.createElement(u.b,{to:"/people",activeClassName:"Active"},"People"))}),P=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/home",component:m}),r.a.createElement(o.b,{path:"/people",component:b}),r.a.createElement(o.a,{from:"/",to:"home"}),r.a.createElement(o.b,{component:v})))};c.a.render(r.a.createElement(u.a,null,r.a.createElement(P,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.92ad962e.chunk.js.map