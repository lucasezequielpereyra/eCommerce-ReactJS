(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){},103:function(e,t,c){},104:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){},108:function(e,t,c){"use strict";c.r(t);var n=c(3),r=c.n(n),a=c(65),s=c.n(a),i=(c(76),c(16)),o=c(18),j=c(111),u=c(21),l=c(2),d=c.n(l),b=c(6),O=c(38),m=c(8),h=c(14),x=c(66),p=c(11),f=Object(x.a)({apiKey:"AIzaSyAjAnBn7Qzmzeq5MfqRfjF8F6h_tlEOshY",authDomain:"buyco-7ded1.firebaseapp.com",projectId:"buyco-7ded1",storageBucket:"buyco-7ded1.appspot.com",messagingSenderId:"667175097852",appId:"1:667175097852:web:94f15f916f0e0075e10e79"}),g=Object(p.g)(f),v=c(34),y=c.n(v),N=c(1),w=Object(n.createContext)(),k=function(){return Object(n.useContext)(w)},I=function(e){var t=e.children,c=Object(n.useState)(JSON.parse(localStorage.getItem("cart"))?JSON.parse(localStorage.getItem("cart")):[]),r=Object(h.a)(c,2),a=r[0],s=r[1],i=function(){var e=0;return a.map((function(t){return e+=t.price*t.quantity})),e},o=function(){var e=Object(b.a)(d.a.mark((function e(t,c,n,r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)(Object(p.b)(g,"orders"),{buyer:{name:t,phone:c,mail:n,id:r},items:a,date:Object(p.k)(),total:i()});case 2:localStorage.clear();case 3:case"end":return e.stop()}}),e)})));return function(t,c,n,r){return e.apply(this,arguments)}}(),j=function(){var e=Object(b.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],c=Object(p.j)(Object(p.b)(g,"orders"),Object(p.i)("date","desc"),Object(p.h)(1)),e.next=4,Object(p.f)(c);case 4:return e.sent.forEach((function(e){t.push(e.id)})),e.abrupt("return",y()({title:"Compra Exitosa",text:"La compra fue realizada con exito, el id es ".concat(t[0]),icon:"success",button:"Volver"}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(b.a)(d.a.mark((function e(t,c){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(p.d)(g,"products",t),e.next=3,Object(p.l)(n,{stock:c});case 3:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}();return Object(N.jsx)(w.Provider,{value:{cart:a,addProduct:function(e,t){if(n=e.id,a.some((function(e){return e.id===n}))){var c=a.map((function(c){return c.id===e.id?Object(m.a)(Object(m.a)({},c),{},{quantity:c.quantity+t}):c}));s(c)}else s((function(c){return[].concat(Object(O.a)(c),[Object(m.a)(Object(m.a)({},e),{},{quantity:t})])}));var n},removeProduct:function(e){s(a.filter((function(t){return t.id!==e}))),1===a.length&&localStorage.clear()},cleanCart:function(){return s([])},totalProducts:function(){var e=0;return a.map((function(t){return e+=t.quantity})),e},totalPrice:i,newOrder:o,lastOrder:j,updateItemStock:u,setLocalStorage:function(){localStorage.setItem("cart",JSON.stringify(a))}},children:t})},S=c(67),C=(c(84),function(){var e=k(),t=e.totalProducts,c=e.setLocalStorage;return Object(N.jsx)("div",{className:"cart-widget",children:t()>0&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(i.b,{to:"/cart",className:"widget",children:[Object(N.jsx)(S.a,{})," ",t()]}),c(),"  "]})})}),E=c.p+"static/media/logo.6d585fae.png",A=(c(89),function(){var e=Object(u.b)().isAuthenticated;return Object(N.jsxs)("div",{className:"header-container",children:[Object(N.jsx)("div",{className:"logo",children:Object(N.jsx)(i.c,{to:"/",children:Object(N.jsx)("img",{className:"logo-img",src:E,alt:"Logo BUYCO"})})}),Object(N.jsxs)(j.a,{className:"justify-content-end",children:[Object(N.jsx)(j.a.Item,{className:"nav-item",children:Object(N.jsx)(i.c,{className:"nav-link",to:"/",children:"Inicio"})}),e?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(j.a.Item,{className:"nav-item",children:Object(N.jsx)(i.c,{className:"nav-link",to:"/profile",children:"PERFIL"})}),Object(N.jsx)(j.a.Item,{className:"nav-item",children:Object(N.jsx)(i.c,{className:"nav-link",to:"/logout",children:"LOGOUT"})})]}):Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(j.a.Item,{className:"nav-item",children:Object(N.jsx)(i.c,{className:"nav-link",to:"/login",children:"LOGIN"})})}),Object(N.jsx)(C,{})]})]})}),F=(c(93),function(e){var t=e.category;return Object(N.jsxs)("div",{className:"category",children:["- ",t.name]})}),P=(c(94),function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],r=t[1],a=function(){var e=Object(b.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],c=Object(p.j)(Object(p.b)(g,"categories")),e.next=4,Object(p.f)(c);case 4:e.sent.forEach((function(e){t.push(Object(m.a)(Object(m.a)({},e.data()),{},{id:e.id}))})),r(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){a()}),[]),Object(N.jsxs)("div",{className:"categories-container",children:[Object(N.jsx)("h3",{children:"Categorias "}),c.map((function(e){return Object(N.jsx)(i.b,{className:"link",to:"/category/".concat(e.key),children:Object(N.jsx)(F,{category:e},e.id)},e.id)}))]})}),T=c(112),L=(c(95),function(e){var t=e.product;return Object(N.jsx)("div",{className:"item-producto",children:Object(N.jsx)(i.b,{className:"link",to:"/product/".concat(t.id),children:Object(N.jsxs)(T.a,{style:{width:"20rem",marginBottom:"1rem"},children:[Object(N.jsx)(T.a.Title,{className:"item-name",children:t.name}),Object(N.jsx)(T.a.Img,{variant:"top",src:t.pictureUrl}),Object(N.jsx)(T.a.Body,{children:Object(N.jsx)(T.a.Text,{children:Object(N.jsxs)("span",{className:"price-span",children:["u$s ",t.price]})})})]})})})}),V=c(109),B=(c(96),function(e){var t=e.catId,c=Object(n.useState)([]),r=Object(h.a)(c,2),a=r[0],s=r[1],i=function(){var e=Object(b.a)(d.a.mark((function e(t){var c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=[],n={},n=void 0===t?Object(p.j)(Object(p.b)(g,"products")):Object(p.j)(Object(p.b)(g,"products"),Object(p.m)("categoryId","==",t)),e.next=5,Object(p.f)(n);case 5:e.sent.forEach((function(e){c.push(Object(m.a)(Object(m.a)({},e.data()),{},{id:e.id}))})),s(c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i(t)}),[t]),Object(N.jsx)("div",{className:"productos-container container-lg",children:0===a.length?Object(N.jsx)(V.a,{className:"container-lg",animation:"grow"}):a.map((function(e){return Object(N.jsx)(L,{product:e},e.id)}))})}),U=function(){var e=Object(o.f)().id;return Object(N.jsxs)("div",{className:"productos-container container-lg",children:[Object(N.jsx)(P,{}),Object(N.jsx)(B,{catId:e})]})},q=c(110),z=c(61),W=Object(n.createContext)(),$=function(){return Object(n.useContext)(W)},R=function(e){var t=e.children,c=Object(u.b)().user,r=Object(n.useState)([]),a=Object(h.a)(r,2),s=a[0],i=a[1],o=function(){var e=Object(b.a)(d.a.mark((function e(t,c){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)(Object(p.b)(g,"wishOrders"),{userId:t,item:c});case 2:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),j=function(){var e=Object(b.a)(d.a.mark((function e(t,c,n){var r,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],a=Object(p.j)(Object(p.b)(g,"wishOrders"),Object(p.m)("userId","==",t)),e.next=4,Object(p.f)(a);case 4:e.sent.forEach((function(e){r.push(e.data())})),r.length>0?(s=!1,r.map((function(e){e.userId===t&&e.item.id===c.id&&(y()({title:"Advertencia",text:"El producto ".concat(c.name," ya se encuentra agregado a la lista de deseos"),icon:"warning",button:"OK"}),s=!0)})),s||(y()({title:"Listo!",text:"El producto ".concat(c.name," se agrego correctamente a la lista de deseos"),icon:"success",button:"OK"}),o(t,c))):(y()({title:"Listo!",text:"El producto ".concat(c.name," se agrego correctamente a la lista de deseos"),icon:"success",button:"OK"}),o(t,c));case 7:case"end":return e.stop()}}),e)})));return function(t,c,n){return e.apply(this,arguments)}}(),l=function(){var e=Object(b.a)(d.a.mark((function e(t){var c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=[],n=Object(p.j)(Object(p.b)(g,"wishOrders"),Object(p.m)("userId","==",t.sub)),e.next=4,Object(p.f)(n);case 4:e.sent.forEach((function(e){c.push(Object(m.a)(Object(m.a)({},e.data()),{},{id:e.id}))})),i(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.c)(Object(p.d)(g,"wishOrders",t.id));case 2:l(c);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)(W.Provider,{value:{wish:s,addwWishList:j,deleteWishProduct:O,getWishesByUser:l},children:t})},D=(c(97),function(e){var t=e.product,c=e.onAdd,r=e.isAuthenticated,a=e.userInfo,s=Object(n.useState)(1),i=Object(h.a)(s,2),o=i[0],j=i[1],u=$().addwWishList;return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("span",{className:"contador-container",children:[Object(N.jsx)(z.a,{className:"buttonMinus",onClick:function(){o>1?j(o-1):y()({title:"Error",text:"Cantidad minima de productos superada!",icon:"error",button:"Volver"})}}),o,Object(N.jsx)(z.b,{className:"buttonPlus",onClick:function(){return e=t.stock,void(o<e?j(o+1):y()({title:"Error",text:"Cantidad maxima de productos superada!",icon:"error",button:"Volver"}));var e}}),0===t.stock?Object(N.jsx)(q.a,{className:"custom-btn",disabled:!0,children:"Agregar"}):Object(N.jsx)(q.a,{className:"custom-btn",onClick:function(){return c(o)},children:"Agregar"}),r&&Object(N.jsx)(q.a,{variant:"secondary",onClick:function(){return u(a.sub,t)},children:"Agregar a Lista"})]})})}),J=(c(98),function(e){var t=e.product,c=Object(u.b)(),r=c.user,a=c.isAuthenticated,s=Object(n.useState)(0),o=Object(h.a)(s,2),j=o[0],l=o[1],d=k().addProduct;return Object(N.jsx)("div",{className:"item-producto",children:Object(N.jsxs)(T.a,{className:"card-producto",children:[Object(N.jsx)(T.a.Title,{className:"item-name",children:t.name}),Object(N.jsx)(T.a.Img,{className:"img-detail",variant:"top",src:t.pictureUrl}),Object(N.jsx)(T.a.Body,{children:Object(N.jsxs)(T.a.Text,{children:[Object(N.jsx)("span",{className:"description-span",children:Object(N.jsx)("span",{children:t.description})}),Object(N.jsx)("span",{className:"stock-span",children:"STOCK: ".concat(t.stock-j)}),Object(N.jsx)("span",{children:0===j?Object(N.jsx)(D,{product:t,onAdd:function(e){e>0?(l(e),d(t,e)):alert("Debe ingresar una cantidad mayor a 0")},isAuthenticated:a,userInfo:r}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(i.b,{to:"/",children:Object(N.jsx)(q.a,{style:{margin:"1rem",backgroundColor:"rgba(28,105,181,1)"},children:"Seguir Comprando"})}),Object(N.jsx)(i.b,{to:"/cart",children:Object(N.jsx)(q.a,{variant:"secondary",style:{margin:"1rem"},children:"Terminar Compra"})})]})}),Object(N.jsxs)("span",{className:"price-span",children:["$",t.price]})]})})]})})}),G=function(){var e=Object(n.useState)({}),t=Object(h.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),s=Object(h.a)(a,2),i=s[0],j=s[1],u=Object(o.f)().id,l=function(){var e=Object(b.a)(d.a.mark((function e(t){var c,n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(p.d)(g,"products",t),e.next=3,Object(p.e)(c);case 3:n=e.sent,a={},n.exists()?(a=n.id,r(Object(m.a)(Object(m.a)({},n.data()),{},{id:a})),j(!0)):alert("ocurri\xf3 un error");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l(u)}),[u]),Object(N.jsx)("div",{className:"detail-container",children:!1===i?Object(N.jsx)(V.a,{animation:"grow"}):Object(N.jsx)(J,{product:c})})},K=(c(99),function(){return Object(N.jsx)("footer",{children:Object(N.jsx)("h5",{children:"BuyCO APP - Coder House"})})}),M=(c(100),function(){return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(U,{})})}),Z=c(50),H=(c(101),function(e){var t=e.item,c=k().removeProduct;return Object(N.jsxs)("div",{className:"cart-item container",children:[Object(N.jsx)("img",{src:t.pictureUrl,alt:"Imagen Producto"}),Object(N.jsx)("span",{style:{color:"rgba(28,105,181,1)",fontWeight:"bold"},children:t.name}),Object(N.jsxs)("span",{children:["u$s",t.price]}),Object(N.jsxs)("span",{children:["Cantidad: ",t.quantity]}),Object(N.jsx)("span",{children:Object(N.jsx)("button",{onClick:function(){return c(t.id)},children:Object(N.jsx)(Z.a,{size:32,color:"rgba(28,105,181,1)"})})})]})}),Q=c(32),Y=(c(102),function(){var e=k(),t=e.newOrder,c=e.lastOrder,n=e.cart,r=e.updateItemStock,a=e.cleanCart,s=Object(u.b)(),o=s.isAuthenticated,j=s.user;return Object(N.jsx)("div",{className:"form-container",children:Object(N.jsx)(Q.d,{initialValues:{name:"",phone:"",mail:"",mailVerif:""},validate:function(e){var t={};return e.name?/^[a-zA-Z\xc0-\xff\s]{1,40}$/.test(e.name)||(t.name="El nombre solo puede contener letras y espacios"):t.name="Por favor ingresa un nombre",e.phone?/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/.test(e.phone)||(t.phone="El formato de telefono ingresado es incorrecto."):t.phone="Por favor ingresa un telefono",e.mail?/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(e.mail)||(t.mail="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."):t.mail="Por favor ingresa un correo electronico",e.mailVerif?e.mailVerif!==e.mail&&(t.mailVerif="Los correo electronicos deben coincidir"):t.mailVerif="Por favor repite el correo electronico",t},onSubmit:function(e,s){s.resetForm;t(e.name,e.phone,e.mail,j.sub),n.map((function(e){return r(e.id,e.stock-e.quantity)})),c(),a()},children:function(e){var t=e.errors;return Object(N.jsxs)(Q.c,{className:"formulario",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("label",{htmlFor:"name",children:"Nombre"}),Object(N.jsx)(Q.b,{type:"text",id:"name",name:"name",placeholder:"Ingrese su nombre completo.."}),Object(N.jsx)(Q.a,{name:"name",component:function(){return Object(N.jsxs)("div",{className:"error",children:[" ",t.name," "]})}})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("label",{htmlFor:"phone",children:"Telefono"}),Object(N.jsx)(Q.b,{type:"tel",id:"phone",name:"phone",placeholder:"11xxxxxxxx (11 + 8digits) / 54911xxxxxxxx (54911 + 8digits) "}),Object(N.jsx)(Q.a,{name:"phone",component:function(){return Object(N.jsxs)("div",{className:"error",children:[" ",t.phone," "]})}})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("label",{htmlFor:"mail",children:"Correo"}),Object(N.jsx)(Q.b,{type:"email",id:"mail",name:"mail",placeholder:"mail@mail.com"}),Object(N.jsx)(Q.a,{name:"mail",component:function(){return Object(N.jsxs)("div",{className:"error",children:[" ",t.mail," "]})}})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("label",{htmlFor:"mailVerif",children:"Repetir Correo"}),Object(N.jsx)(Q.b,{type:"email",id:"mailVerif",name:"mailVerif",placeholder:"mail@mail.com"}),Object(N.jsx)(Q.a,{name:"mailVerif",component:function(){return Object(N.jsxs)("div",{className:"error",children:[" ",t.mailVerif," "]})}})]}),".",o?Object(N.jsx)("button",{type:"submit",children:"Realizar Compra"}):Object(N.jsx)(i.b,{to:"login",children:Object(N.jsx)("button",{children:"INGRESAR PARA CONTINUAR"})})]})}})})}),_=(c(103),function(){var e=k(),t=e.cart,c=e.totalPrice;return Object(N.jsxs)("div",{className:"cart-container",children:[Object(N.jsx)("h3",{style:{color:"rgb(12, 81, 172)",textTransform:"uppercase",marginBottom:"4rem"},children:"Tu Carrito"}),t.length>0?Object(N.jsxs)(N.Fragment,{children:[t.map((function(e){return Object(N.jsx)(H,{item:e},e.id)})),Object(N.jsxs)("div",{className:"price-container",children:["Carrito: u$s",c()]}),Object(N.jsx)(Y,{})]}):Object(N.jsx)("div",{className:"cartEmpty-container",children:Object(N.jsx)(i.b,{to:"/",style:{textDecoration:"none",textTransform:"uppercase"},children:Object(N.jsx)("h3",{children:"Agregar productos"})})})]})}),X=function(){return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(_,{})})},ee=function(){var e=Object(u.b)().loginWithRedirect;return Object(N.jsx)(N.Fragment,{children:e()})},te=function(){var e=Object(u.b)().logout;return Object(N.jsx)(N.Fragment,{children:e()})},ce=(c(104),function(e){var t=e.ord,c=e.date,n=e.total,r=c.toDate().toString();return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("span",{className:"fecha",children:r}),t.map((function(e){return Object(N.jsxs)("div",{className:"order-item container",children:[Object(N.jsx)("img",{src:e.pictureUrl,alt:"Imagen Producto"}),Object(N.jsx)("span",{style:{color:"rgba(28,105,181,1)",fontWeight:"bold"},children:e.name}),Object(N.jsxs)("span",{children:["u$s",e.price]}),Object(N.jsxs)("span",{children:["Cantidad: ",e.quantity]})]},e.id)})),Object(N.jsxs)("span",{className:"total",children:["Total Compra: u$s",n]})]})}),ne=function(e){var t=e.userInfo,c=Object(n.useState)([]),r=Object(h.a)(c,2),a=r[0],s=r[1];return Object(n.useEffect)((function(){(function(){var e=Object(b.a)(d.a.mark((function e(){var c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=[],n=Object(p.j)(Object(p.b)(g,"orders"),Object(p.m)("buyer.id","==",t.sub)),e.next=4,Object(p.f)(n);case 4:e.sent.forEach((function(e){c.push(Object(m.a)(Object(m.a)({},e.data()),{},{id:e.id}))})),s(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t.sub]),Object(N.jsx)(N.Fragment,{children:a.length>0?Object(N.jsx)("div",{style:{marginBottom:"3rem"},children:a.map((function(e){return Object(N.jsx)(ce,{ord:e.items,date:e.date,total:e.total},e.id)}))}):Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("h2",{style:{color:"rgba(28,105,181,1)",userSelect:"none"},children:"El usuario no tiene compras"})})})},re=(c(105),function(e){var t=e.wish,c=$().deleteWishProduct;return Object(N.jsxs)("div",{className:"wish-item container",children:[Object(N.jsx)(i.b,{to:"/product/".concat(t.item.id),children:Object(N.jsx)("img",{src:t.item.pictureUrl,alt:"Imagen Producto"})}),Object(N.jsx)("span",{style:{color:"rgba(28,105,181,1)",fontWeight:"bold"},children:Object(N.jsx)(i.b,{to:"/product/".concat(t.item.id),style:{textDecoration:"none",color:"rgba(28,105,181,1)"},children:t.item.name})}),Object(N.jsxs)("span",{children:["u$s",t.item.price]}),Object(N.jsx)("span",{children:Object(N.jsx)("button",{onClick:function(){return c(t)},children:Object(N.jsx)(Z.a,{size:32,color:"rgba(28,105,181,1)"})})})]})}),ae=function(e){var t=e.userInfo,c=$(),r=c.getWishesByUser,a=c.wish;return Object(n.useEffect)((function(){r(t)}),[]),Object(N.jsx)(N.Fragment,{children:a.length>0?Object(N.jsxs)("div",{className:"wish-container",children:[Object(N.jsx)("h2",{style:{color:"rgba(28,105,181,1)",userSelect:"none"},children:"Productos Guardados"}),a.map((function(e){return Object(N.jsx)(re,{wish:e},e.id)}))]}):Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("h2",{style:{color:"rgba(28,105,181,1)",userSelect:"none"},children:"El usuario no posee productos en la lista de deseos"})})})},se=(c(106),function(){var e=Object(u.b)().user,t=Object(n.useState)(!1),c=Object(h.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)(!1),i=Object(h.a)(s,2),o=i[0],j=i[1];return Object(N.jsxs)("div",{className:"profile-container",children:[Object(N.jsxs)("div",{className:"header",style:{marginTop:"1rem"},children:[Object(N.jsxs)("h1",{children:["Bienvenido ",Object(N.jsx)("span",{style:{color:"rgba(28,105,181,1)"},children:e.nickname}),"! "]}),Object(N.jsx)(q.a,{className:"button-profile",onClick:function(){return a(!r),void j(!1)},children:"Mis Compras"}),Object(N.jsx)(q.a,{className:"button-profile",onClick:function(){return j(!o),void a(!1)},children:"Mi Lista"})]}),r&&Object(N.jsx)(ne,{userInfo:e}),o&&Object(N.jsx)(ae,{userInfo:e})]})}),ie=function(){var e=Object(u.b)().isAuthenticated;return Object(N.jsx)(N.Fragment,{children:e?Object(N.jsx)(se,{userInfo:!0}):Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("h3",{style:{color:"rgba(28,105,181,1)",marginTop:"1rem",userSelect:"none"},children:"Debe Loguearse para ver esta pagina"})})})};var oe=function(){return Object(N.jsx)(I,{children:Object(N.jsx)(R,{children:Object(N.jsx)(i.a,{children:Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)(A,{}),Object(N.jsxs)(o.c,{children:[Object(N.jsx)(o.a,{path:"/",exact:!0,component:M}),Object(N.jsx)(o.a,{path:"/cart",exact:!0,component:X}),Object(N.jsx)(o.a,{path:"/category/:id",component:U}),Object(N.jsx)(o.a,{path:"/product/:id",component:G}),Object(N.jsx)(o.a,{path:"/login",exact:!0,component:ee}),Object(N.jsx)(o.a,{path:"/logout",exact:!0,component:te}),Object(N.jsx)(o.a,{path:"/profile",exact:!0,component:ie})]}),Object(N.jsx)(K,{})]})})})})};c(107);s.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(u.a,{domain:"dev-hoc5sg-x.us.auth0.com",clientId:"4sAvFVO9Qp4GWq54DScTXEH9cPxJ6UJs",redirectUri:window.location.origin,children:Object(N.jsx)(oe,{})})}),document.getElementById("root"))},76:function(e,t,c){},84:function(e,t,c){},89:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[108,1,2]]]);
//# sourceMappingURL=main.9c918367.chunk.js.map