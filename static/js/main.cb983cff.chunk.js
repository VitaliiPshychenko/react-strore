(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,a){e.exports=a(58)},50:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(16),c=a.n(i),o=a(18),u=a(21),l=a(12),m=a(35),s=function(e){return{type:"add_item_to_cart",payload:e}};function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(a,!0).forEach(function(t){Object(m.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var f={products:[{title:"Product 1",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",price:"128",id:"15"},{title:"Product 2",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",price:"9",id:"26"},{title:"Product 3",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",price:"146",id:"23"},{title:"Product 4",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",price:"256",id:"74"},{title:"Product 5",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",price:"28",id:"89"}],cartItems:[]},b=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,a=arguments.length>1?arguments[1]:void 0,r=a.payload,n=t.products.find(function(e){return e.id===r}),i=t.cartItems.findIndex(function(e){return e.id===r}),c=t.cartItems[i];switch(a.type){case"add_item_to_cart":return e=c?p({},c,{count:+c.count+1,price:+c.price+ +n.price}):{id:n.id,title:n.title,count:1,price:+n.price},p({},t,-1===i?{cartItems:[].concat(Object(l.a)(t.cartItems),[e])}:{cartItems:[].concat(Object(l.a)(t.cartItems.slice(0,i)),[e],Object(l.a)(t.cartItems.slice(i+1)))});case"remove_item_from_cart":return 0===(e=c?p({},c,{count:+c.count-1,price:+c.price-+n.price}):{id:n.id,title:n.title,count:1,price:n.price}).count?p({},t,{cartItems:[].concat(Object(l.a)(t.cartItems.slice(0,i)),Object(l.a)(t.cartItems.slice(i+1)))}):p({},t,-1===i?{cartItems:[].concat(Object(l.a)(t.cartItems),[e])}:{cartItems:[].concat(Object(l.a)(t.cartItems.slice(0,i)),[e],Object(l.a)(t.cartItems.slice(i+1)))});case"remove_product_from_cart":return p({},t,{cartItems:[].concat(Object(l.a)(t.cartItems.slice(0,i)),Object(l.a)(t.cartItems.slice(i+1)))});default:return t}},E=(a(50),a(60)),v=a(63),O=a(64),g=a(61),y=a(65),I=a(66),q=a(17),x=function(e){var t=e.products,a=e.onAddedToCart;return n.a.createElement(E.a,null,n.a.createElement(v.a,{expand:"lg",className:"justify-content-between"},n.a.createElement(v.a.Brand,null,"React store"),n.a.createElement(q.b,{className:"cart",to:"/cart"})),n.a.createElement(O.a,{className:"flex-row flex-wrap"},t.map(function(e){var t=e.title,r=e.price,i=e.description,c=e.id;return n.a.createElement(g.a,{className:"mb-2",xs:4,key:e.id},n.a.createElement(O.a.Item,null,n.a.createElement(y.a.Body,null,n.a.createElement(y.a.Title,null,t),n.a.createElement(y.a.Text,null,"Price: ",r),n.a.createElement(y.a.Text,null,i),n.a.createElement(I.a,{variant:"primary",onClick:function(){return a(c)}},"Add to cart"))))})))},j=Object(o.b)(function(e){return{products:e.products}},function(e){return{onAddedToCart:function(t){return e(s(t))}}})(x),h=a(62),_=function(e){var t=e.cartItems,a=e.onIncrease,r=e.onDecrease,i=e.onRemove,c=t.reduce(function(e,t){return e+t.price},0);return n.a.createElement(E.a,null,n.a.createElement(q.b,{to:"/"},"Back to main page"),n.a.createElement(h.a,{striped:!0,bordered:!0,hover:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"#"),n.a.createElement("th",null,"Item"),n.a.createElement("th",null,"Count"),n.a.createElement("th",null,"Price"),n.a.createElement("th",null,"Remove"))),n.a.createElement("tbody",null,t.map(function(e,t){var c=e.title,o=e.price,u=e.count,l=e.id;return n.a.createElement("tr",{key:l},n.a.createElement("td",null,t+1),n.a.createElement("td",null,c),n.a.createElement("td",null,n.a.createElement(I.a,{variant:"secondary",className:"mr-1",onClick:function(){return r(l)}},"-"),u,n.a.createElement(I.a,{variant:"primary",className:"ml-1",onClick:function(){return a(l)}},"+")),n.a.createElement("td",null,o),n.a.createElement("td",null,n.a.createElement(I.a,{variant:"danger",onClick:function(){return i(l)}},"\xd7")))}))),n.a.createElement("p",null,"Total: ",c))},w=Object(o.b)(function(e){return{cartItems:e.cartItems}},function(e){return{onIncrease:function(t){return e(s(t))},onDecrease:function(t){return e({type:"remove_item_from_cart",payload:t})},onRemove:function(t){return e({type:"remove_product_from_cart",payload:t})}}})(_),P=a(13),D=Object(u.b)(b),k=function(){return n.a.createElement(o.a,{store:D},n.a.createElement(q.a,null,n.a.createElement(P.c,null,n.a.createElement(P.a,{path:"/",exact:!0,component:j}),n.a.createElement(P.a,{path:"/cart",exact:!0,component:w}))))};c.a.render(n.a.createElement(k,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.cb983cff.chunk.js.map