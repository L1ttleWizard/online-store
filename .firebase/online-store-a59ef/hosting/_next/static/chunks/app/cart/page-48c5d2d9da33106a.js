(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{1172:function(e,l,t){Promise.resolve().then(t.bind(t,1116))},4551:function(e,l,t){"use strict";t.d(l,{AM:function(){return n},Ux:function(){return r},gG:function(){return a},gu:function(){return i},rs:function(){return s}});let r=[{name:"home",url:"/"},{name:"products",url:"/#products"},{name:"blog",url:"#"},{name:"about",url:"#"},{name:"contact",url:"#"},{name:"styleguide",url:"#"}],a=[{name:"Red losve cup with the blue heart of the blue heart of the blue heart of the blue heart of the blue heart",id:3,img:{url:"img/red love cup.jpg",alt:"red love cup"},price:25,onSale:!0,salePrice:37},{name:"Black tea",id:4,img:{url:"img/black tea cup.jpg",alt:"black tea cup"},price:15,onSale:!0,salePrice:29},{name:"B&W Essentials Mug",id:5,img:{url:"img/b & w essentials mug.jpg",alt:"b&w essentials mug"},price:19,onSale:!1,salePrice:null},{name:"Winter Style Mug",id:6,img:{url:"img/winter style mug.jpg",alt:"Winter Style Mug"},price:25,onSale:!1,salePrice:null},{name:"Ceramic tea",id:7,img:{url:"img/ceramic tea.jpg",alt:"Ceramic Tea"},price:46,onSale:!1,salePrice:null},{name:"No Handle Bar Cup",id:8,img:{url:"img/no handle bar cup.jpg",alt:"No Handle Bar Cup"},price:34,onSale:!1,salePrice:null},{name:"Pink Premium Ceramic",id:2,img:{url:"img/pink premium ceramic.jpg",alt:"pink mug"},price:99,onSale:!1,salePrice:null},{name:"Summer Designer Cup",id:9,img:{url:"img/summer designer cup.jpg",alt:"Summer Designer Cup"},price:29,onSale:!1,salePrice:null}],s=[a[0],a[3]],n=[{url:"img/magazine big image.jpg",alt:"book"},{url:"img/magazine small image 1.jpg",alt:"mug"},{url:"img/magazine small image 2.jpg",alt:"mug-spoon"}],i={facebook:"#",twitter:"#",instagram:"#",pinterest:"#"}},1116:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return m}});var r=t(7437),a=t(2265),s=t(6054),n=t(4429);t(6691);var i=t(911),c=t(2510);let u=e=>{let{mug:l}=e,t=l.id,a=(0,s.I0)(),u=(0,s.v9)(e=>(0,n.Z)(e,t));return(0,r.jsx)("div",{className:"flex align-center  gap-x-28 justify-between flex-shrink mb-3 border-b-2 pb-3 border-gray",children:(0,r.jsxs)("div",{className:"flex flex-row gap-x-5 grow",children:[(0,r.jsx)("img",{src:l.img.url,alt:l.img.alt,className:"w-32 rounded-xl aspect-square h-32"}),(0,r.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,r.jsx)("p",{className:" font-medium align-top ",children:l.name}),!!u&&(0,r.jsx)("button",{className:"delete-cart",onClick:()=>{a(i.Uw.resetThis(t))},children:(0,r.jsx)(c._0w,{size:"1.5em",color:"gray"})})]}),(0,r.jsxs)("div",{className:"flex flex-col justify-start ml-auto",children:[(0,r.jsxs)("span",{className:"cost standard ".concat(l.onSale&&"text-red"),children:[l.price," ",(0,r.jsx)("span",{className:"font-sm ",children:"₽"})]}),l.onSale&&(0,r.jsxs)("span",{className:"cost-sale line-through decoration-red decoration-2",children:[l.salePrice," ",(0,r.jsx)("span",{className:"font-xs",children:"₽"})]}),(0,r.jsxs)("div",{className:" mt-auto",children:[!u&&(0,r.jsx)("button",{className:"add-cart",onClick:()=>a(i.Uw.increment(t)),children:"Add item to cart"}),!!u&&(0,r.jsxs)("div",{className:"flex flex-row gap-x-3 justify-between bg-gray rounded-md px-4 py-1 w-28",children:[(0,r.jsx)("button",{onClick:()=>a(i.Uw.decrement(t)),children:"-"}),(0,r.jsx)("div",{children:u}),(0,r.jsx)("button",{onClick:()=>a(i.Uw.increment(t)),children:"+"})]})]})]})]})})};t(6363);var o=t(2307),d=t(3408);function m(){let[e,l]=(0,a.useState)([]);(0,a.useLayoutEffect)(()=>{let e=(0,o.N8)(d.l),t=(0,o.iH)(e,"MoreProductsConfig");(0,o.jM)(t,e=>{let t=e.val();console.log(t),l(t)})},[]);let[t,n]=(0,a.useState)([]);(0,a.useLayoutEffect)(()=>{let e=(0,o.N8)(d.l),l=(0,o.iH)(e,"FeaturedMugsConfig");(0,o.jM)(l,e=>{let l=e.val();console.log(l),n(l)})},[]),console.log(e);let i=e.reduce((e,l)=>(e.includes(l)||e.push(l),e),[]);console.log(i);let c=(0,s.v9)(e=>e.cart),m=i.filter(e=>c.hasOwnProperty(e.id)),g=m.reduce((e,l)=>e+l.price*c[l.id],0),f=m.reduce((e,l)=>null!==l.salePrice?e+l.salePrice*c[l.id]:e+l.price*c[l.id],0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Cart"}),(0,r.jsxs)("div",{className:" lg:flex-row flex-col flex",children:[(0,r.jsx)("div",{children:m.map(e=>(0,r.jsx)(u,{mug:e},e.id))}),(0,r.jsxs)("div",{className:" lg:w-5/12 w-full ps-5 flex flex-col items-center",children:[(0,r.jsx)("button",{className:"bg-yellow p-3 cursor-pointer rounded-lg w-full text-center",children:"checkout"}),(0,r.jsxs)("div",{className:"flex flex-col  p-3 bg-gray mt-3 rounded-lg w-full text-xs  ",children:[(0,r.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,r.jsxs)("div",{children:["Всего ",m.length," товар-ов "]}),(0,r.jsxs)("div",{className:" font-bold",children:[f,"₽"]})]}),(0,r.jsxs)("div",{className:"flex flex-row justify-between mt-2",children:[(0,r.jsx)("div",{children:"Выгода:"}),(0,r.jsxs)("div",{className:"text-red",children:[g-f,"₽"]})]}),(0,r.jsxs)("div",{className:"flex flex-row text-xl font-semibold justify-between mt-4",children:[(0,r.jsx)("div",{className:"",children:"Итого"}),(0,r.jsxs)("div",{children:[g,"₽"]})]})]})]})]})]})}},3408:function(e,l,t){"use strict";t.d(l,{l:function(){return a}});var r=t(994);t(5073);let a=(0,r.ZF)({apiKey:"AIzaSyBg6ScXAAjQQOFJZzvGhJ1-YlUetAzBA5A",authDomain:"online-store-a59ef.firebaseapp.com",databaseURL:"https://online-store-a59ef-default-rtdb.europe-west1.firebasedatabase.app",projectId:"online-store-a59ef",storageBucket:"online-store-a59ef.appspot.com",messagingSenderId:"519718256661",appId:"1:519718256661:web:ab050f15f5d5da1a48ce1c",measurementId:"G-4VHPWPQ6QL"})},911:function(e,l,t){"use strict";t.d(l,{C$:function(){return n},Uw:function(){return i}});var r=t(9930);let a={},s=(0,r.oM)({name:"cart",initialState:a,reducers:{increment:(e,l)=>{let{payload:t}=l,r=e[t]||!1;e[t]=r+1},decrement:(e,l)=>{let{payload:t}=l,r=e[t];if(r){if(1===r){delete e[t];return}e[t]=r-1}},reset:()=>a,resetThis:(e,l)=>{let{payload:t}=l;delete e[t]}}}),n=s.reducer,i=s.actions},4429:function(e,l,t){"use strict";t.d(l,{Z:function(){return a}}),t(4551);let r=e=>e.cart,a=(e,l)=>r(e)[l]||!1}},function(e){e.O(0,[306,481,140,107,971,596,744],function(){return e(e.s=1172)}),_N_E=e.O()}]);