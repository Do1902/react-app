(self.webpackChunkmy_react_app=self.webpackChunkmy_react_app||[]).push([[689],{5172:function(e,t,a){"use strict";a.d(t,{FP:function(){return h},Ou:function(){return m},PG:function(){return f}});var n=a(4165),r=a(1413),s=a(5861),c=a(5063),i=a(9455),o=a(276),l=a(1830),u=a.n(l),d=a(9704),p=a.n(d);function m(e,t,a){var n=(0,i.ad)(c.Z),r=(0,i.hJ)(n,"users"),s={email:e,name:t,pass:a,address:"None",sdt:"None",image:"None",favorites:[]};(0,i.ET)(r,s),window.Email&&window.Email.send({SecureToken:"b085a665-dbbf-4d88-87ac-584318c71ca8",To:e,From:"hanashop5924@gmail.com",Subject:"Create Account Successfully",Body:'\n      <!DOCTYPE html>\n<html lang="en">\n<head>\n  <title></title>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1" />\n  <style>\n    .banner img {\n      width: 220px;\n    }\n    .banner {\n      width: max-content;\n      margin: auto;\n    }\n    .container {\n      border: solid 1px darkgray;\n    }\n  </style>\n</head>\n<body>\n  <div className="container">\n    <div className="banner">\n      <img\n        src="https://firebasestorage.googleapis.com/v0/b/my-app-c7d1c.appspot.com/o/users%2Fadmin%40gmail.com?alt=media&token=09ba4815-926c-4477-ba7a-62f54a49e90e"\n        alt=""\n      />\n    </div>\n    <div style="text-align: center">\n      <h3>Hana Shop</h3>\n    </div>\n    <div style="text-align: center">\n      Ch\xfac m\u1eebng '.concat(t," \u0111\xe3 t\u1ea1o t\xe0i kho\u1ea3n th\xe0nh c\xf4ng t\u1ea1i shop!\n      <br />Email: ").concat(e," <br />Password: ").concat(a,"\n    </div>\n  </div>\n</body>\n</html>\n")})}function h(e,t){var a={email:e,pass:t},n=JSON.stringify(a),r=p().AES.encrypt(n,"hanashop5924").toString();localStorage.setItem("access_token",JSON.stringify(r))}function f(){return g.apply(this,arguments)}function g(){return(g=(0,s.Z)((0,n.Z)().mark((function e(){var t,a,s,l,d,m,h,f,g,x,v;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=JSON.parse(localStorage.getItem("access_token")))){e.next=34;break}return"hanashop5924",e.prev=3,a=p().AES.decrypt(t,"hanashop5924"),s=a.toString(p().enc.Utf8),l=JSON.parse(s),d=(0,i.ad)(c.Z),e.next=10,(0,i.PL)((0,i.IO)((0,i.hJ)(d,"users"),(0,i.ar)("email","==",l.email),(0,i.ar)("pass","==",l.pass)));case 10:if(m=e.sent,h=m.docs[0],"None"===(f=h.data()).image){e.next=22;break}return g=(0,o.cF)(c.Z),x=(0,o.iH)(g,"users/".concat(f.image)),e.next=18,(0,o.Jt)(x);case 18:v=e.sent,f=(0,r.Z)((0,r.Z)({},f),{},{image:v}),e.next=23;break;case 22:f=(0,r.Z)((0,r.Z)({},f),{},{image:"/assets/img/images.png"});case 23:return e.abrupt("return",f);case 26:return e.prev=26,e.t0=e.catch(3),u().fire({title:"Login session has expired",text:"Please log in again",icon:"error"}),console.log(e.t0),localStorage.removeItem("access_token"),e.abrupt("return",!1);case 32:e.next=35;break;case 34:return e.abrupt("return",!1);case 35:case"end":return e.stop()}}),e,null,[[3,26]])})))).apply(this,arguments)}},6671:function(e,t,a){"use strict";a.d(t,{E:function(){return p},Z:function(){return h}});var n=a(4165),r=a(5861),s=a(9704),c=a.n(s),i=a(1830),o=a.n(i),l=a(9085),u=(a(5462),a(9455)),d=a(5063);function p(e,t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)((0,n.Z)().mark((function e(t,a){var r,s,c,i,p;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=20;break}return r=l.Am.loading("\u0110ang x\u1eed l\xed..."),s=(0,u.ad)(d.Z),e.next=5,(0,u.PL)((0,u.IO)((0,u.hJ)(s,"users"),(0,u.ar)("email","==",t.email)));case 5:if(c=e.sent,i=c.docs[0],p=i.data(),-1!==p.favorites.findIndex((function(e){return parseInt(e)===parseInt(a)}))){e.next=15;break}return e.next=12,(0,u.r7)(i.ref,{favorites:(0,u.vr)(a)});case 12:l.Am.update(r,{render:"Th\xeam v\xe0o danh s\xe1ch y\xeau th\xedch th\xe0nh c\xf4ng",type:"success",isLoading:!1,autoClose:1e3,closeOnClick:!0}),e.next=18;break;case 15:return e.next=17,(0,u.r7)(i.ref,{favorites:(0,u.Ab)(a)});case 17:l.Am.update(r,{render:"X\xf3a kh\u1ecfi danh s\xe1ch y\xeau th\xedch th\xe0nh c\xf4ng",type:"success",isLoading:!1,autoClose:1e3,closeOnClick:!0});case 18:e.next=21;break;case 20:o().fire({title:"B\u1ea1n ch\u01b0a \u0111\u0103ng nh\u1eadp",text:"Vui l\xf2ng \u0111\u0103ng nh\u1eadp \u0111\u1ec3 th\xeam v\xe0o danh s\xe1ch y\xeau th\xedch",icon:"error"});case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t){var a=JSON.parse(localStorage.getItem("cart"))||null,n="hanashop5924";if(a)try{var r=c().AES.decrypt(a,n).toString(c().enc.Utf8),s=JSON.parse(r);if(s.length>0){var i=s.findIndex((function(t){return e.id===t.id}));if(-1===i){var u={id:e.id,quantity:t};s.push(u)}else s[i].quantity+=t;var d=JSON.stringify(s),p=c().AES.encrypt(d,n).toString();localStorage.setItem("cart",JSON.stringify(p)),(0,l.Am)("Add Success!",{type:"success",limit:3,position:"bottom-right",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0,theme:"light"})}}catch(g){console.log(g),o().fire({title:"Shopping Cart Unknown Error",text:"We Will Clear Your Cart",icon:"error"}),localStorage.removeItem("cart")}else{a=[];var m={id:e.id,quantity:t};a.push(m);var h=JSON.stringify(a),f=c().AES.encrypt(h,n).toString();localStorage.setItem("cart",JSON.stringify(f)),(0,l.Am)("Add Success!",{type:"success",limit:3,position:"bottom-right",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0,theme:"light"})}}},7262:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var n=a(4165),r=a(5861),s=a(9439),c=a(2791),i=a(7689),o=a(9455),l=a(6671),u=a(1087),d=a(184);var p=function(){return(0,d.jsxs)("div",{className:"page_404",children:[(0,d.jsx)("div",{className:"four_zero_four_bg",children:(0,d.jsx)("h1",{className:"text-center ",children:"404"})}),(0,d.jsxs)("div",{className:"contant_box_404",children:[(0,d.jsx)("h3",{className:"h2",children:"Look like you're lost"}),(0,d.jsx)("p",{children:"the page you are looking for not avaible!"}),(0,d.jsx)(u.rU,{to:"/",className:"link_404",children:"Go to Home"})]})]})},m=a(5063),h=(a(5462),a(276)),f=a(5172);var g=function(){var e=(0,i.UO)().id,t=(0,c.useState)(1),a=(0,s.Z)(t,2),u=a[0],g=a[1],x=(0,c.useState)(),v=(0,s.Z)(x,2),b=v[0],y=v[1],N=(0,c.useState)(null),j=(0,s.Z)(N,2),k=j[0],S=j[1];(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!JSON.parse(localStorage.getItem("access_token"))){e.next=8;break}return e.next=4,(0,f.PG)();case 4:t=e.sent,S(t),e.next=9;break;case 8:S(null);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,c.useEffect)((function(){var t=(0,o.ad)(m.Z);function a(){return(a=(0,r.Z)((0,n.Z)().mark((function a(){var r,s,c,i,l,u,d,p,f;return(0,n.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,o.PL)((0,o.IO)((0,o.hJ)(t,"products"),(0,o.ar)("id","==",parseInt(e))));case 2:if((r=a.sent).empty){a.next=21;break}return s=(0,h.cF)(m.Z),c=r.docs[0],i=c.data(),a.next=9,(0,o.PL)((0,o.IO)((0,o.hJ)(t,"category"),(0,o.ar)("id","==",parseInt(i.category))));case 9:return l=a.sent,u=l.docs[0],d=u.data(),p=(0,h.iH)(s,"images/".concat(i.image)),a.next=15,(0,h.Jt)(p);case 15:f=a.sent,i.image=f,i.category=d.name,y(i),a.next=22;break;case 21:y(-999);case 22:case"end":return a.stop()}}),a)})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()}),[e]);var Z,w=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,l.E)(k,t),e.next=3,(0,f.PG)();case 3:a=e.sent,S(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,d.jsxs)("div",{className:"ProductDetail",children:[void 0!==b&&-999!==b?(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("div",{className:"row mb-5",children:[(0,d.jsx)("div",{className:"col-md-8",children:(0,d.jsx)("div",{className:"row",children:(0,d.jsx)("div",{className:"col-md-12 mb-4",children:(0,d.jsx)("img",{alt:b.name,className:"img-thumbnail p-0 border-0",src:b.image})})})}),(0,d.jsx)("div",{className:"col-md-4",children:(0,d.jsx)("div",{className:"card",children:(0,d.jsxs)("div",{className:"card-body",children:[(0,d.jsx)("h1",{style:{fontWeight:"500",color:"darkgreen"},children:null===b||void 0===b?void 0:b.name}),(0,d.jsxs)("p",{className:"star m-0",children:[(0,d.jsx)("i",{className:"fas fa-star fa-sm"}),(0,d.jsx)("i",{className:"fas fa-star fa-sm"}),(0,d.jsx)("i",{className:"fas fa-star fa-sm"}),(0,d.jsx)("i",{className:"fas fa-star fa-sm"}),(0,d.jsx)("i",{className:"fas fa-star fa-sm"})]}),(0,d.jsxs)("ul",{className:"list-group list-group-flush mb-4",children:[(0,d.jsxs)("li",{className:"list-group-item pl-0 pr-0 pt-2 pb-2",children:["Brand: ",b.category]}),(0,d.jsxs)("li",{className:"list-group-item pl-0 pr-0 pt-2 pb-2",children:["Model: ",b.name]}),(0,d.jsx)("li",{className:"list-group-item pl-0 pr-0 pt-2 pb-2",children:"Availability: Pre-order"}),(0,d.jsxs)("li",{className:"list-group-item pl-0 pr-0 pt-2 pb-2",children:["Price: ",(Z=b.price,Z.toLocaleString("vi",{style:"currency",currency:"VND"}))]}),(0,d.jsx)("li",{className:"list-group-item pl-0 pr-0 pt-2 pb-2",children:"Structure: Coming soon"})]}),(0,d.jsxs)("div",{className:"quantity input-group mb-4",children:[(0,d.jsx)("input",{type:"number",className:"form-control text-center",placeholder:"Quantity",name:"quantity",inputMode:"numeric",step:"1",value:u,onChange:function(e){var t=e.target.value;g(t)},onBlur:function(){u<=0&&g(1),u>99&&g(99)}}),(0,d.jsx)("div",{className:"input-group-append",children:(0,d.jsx)("span",{className:"input-group-text",children:"Quantity"})})]}),(0,d.jsxs)("div",{className:"btn-group btn-group-lg",role:"group","aria-label":"Basic example",children:[(0,d.jsxs)("button",{type:"button",className:"btn btn-secondary",onClick:function(){return(0,l.Z)(b,u)},children:[(0,d.jsx)("i",{className:"fas fa-cart-plus"}),(0,d.jsx)("span",{children:"Add Cart"})]}),(0,d.jsx)("button",{type:"button",className:"btn btn-secondary button-heart",onClick:function(){return w(b.id)},children:(0,d.jsx)("i",{className:"fa fa-heart".concat(k&&k.favorites.includes(b.id)?" active":"")})})]})]})})})]})}):(0,d.jsx)("div",{children:-999!==b?(0,d.jsx)("div",{className:"d-flex justify-content-center mt-3",children:(0,d.jsx)("div",{className:"spinner-border text-primary",role:"status",children:(0,d.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):(0,d.jsx)("div",{className:"d-flex justify-content-center mt-3",children:(0,d.jsx)(p,{})})}),";"]})}},5063:function(e,t,a){"use strict";var n=(0,a(4702).ZF)({apiKey:"AIzaSyB3J50OmzdKaImIIhiXjArAFbsupexbqLc",authDomain:"my-app-c7d1c.firebaseapp.com",projectId:"my-app-c7d1c",storageBucket:"my-app-c7d1c.appspot.com",messagingSenderId:"226950561739",appId:"1:226950561739:web:fcd829cb3c9e4d0203004e",measurementId:"G-W9F7LZZQNT"});t.Z=n},2480:function(){}}]);
//# sourceMappingURL=689.1a39ca94.chunk.js.map