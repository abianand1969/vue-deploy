(function(e){function t(t){for(var a,r,c=t[0],l=t[1],s=t[2],u=0,m=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(m.length)m.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var l=n[r];0!==i[l]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},i={app:0},o=[];function r(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"49215f51"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=i[e]=[t,a]}));t.push(n[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=r(e);var s=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(u);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,n[1](s)}i[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-deploy/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0599":function(e,t,n){"use strict";n("9da6")},"09b8":function(e,t,n){},"35fd":function(e,t,n){"use strict";n("09b8")},3640:function(e,t,n){},"3c8b":function(e,t,n){"use strict";n("66d8")},4348:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),i={class:"prog"},o=Object(a["g"])("button",null,"Redirect",-1),r=Object(a["g"])("button",null,"GO Forward",-1);function c(e,t,n,c,l,s){var u=Object(a["A"])("Navbar"),d=Object(a["A"])("router-view"),m=Object(a["A"])("Footer");return Object(a["t"])(),Object(a["f"])(a["a"],null,[Object(a["j"])(u),Object(a["g"])("div",i,[o,Object(a["g"])("button",{onClick:t[0]||(t[0]=function(){return s.back&&s.back.apply(s,arguments)})},"Go Back"),r]),Object(a["j"])(d),Object(a["j"])(m)],64)}var l={class:"teal"},s={class:"nav-wrapper"},u=Object(a["g"])("a",{href:"#!",style:{"margin-left":"30px"},class:"brand-logo"},"SpanTech",-1),d=Object(a["g"])("a",{href:"#","data-target":"mobile-demo",class:"sidenav-trigger"},[Object(a["g"])("i",{class:"material-icons"},"menu")],-1),m={class:"right hide-on-med-and-down"},b=Object(a["g"])("i",{class:"material-icons left"},"home",-1),f=Object(a["i"])("Home"),h=Object(a["g"])("i",{class:"material-icons left"},"search",-1),g=Object(a["i"])("Search"),p=Object(a["g"])("i",{class:"material-icons left"},"login",-1),j=Object(a["i"])("Login"),O=Object(a["g"])("i",{class:"material-icons left"},"person_add",-1),v=Object(a["i"])("Signup"),y=Object(a["g"])("i",{class:"material-icons right"},"logout",-1),w=Object(a["i"])("Logout"),k={class:"sidenav",id:"mobile-demo"},S=Object(a["g"])("i",{class:"material-icons left"},"home",-1),A=Object(a["i"])("Home"),x=Object(a["g"])("i",{class:"material-icons left"},"search",-1),L=Object(a["i"])("Search"),C=Object(a["g"])("i",{class:"material-icons left"},"login",-1),N=Object(a["i"])("Login"),E=Object(a["g"])("i",{class:"material-icons left"},"person_add",-1),_=Object(a["i"])("Signup"),T=Object(a["g"])("i",{class:"material-icons right"},"logout",-1),D=Object(a["i"])("Logout");function H(e,t,n,i,o,r){var c=Object(a["A"])("router-link");return Object(a["t"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("nav",l,[Object(a["g"])("div",s,[u,d,Object(a["g"])("ul",m,[Object(a["g"])("li",null,[Object(a["j"])(c,{to:"/"},{default:Object(a["G"])((function(){return[b,f]})),_:1})]),Object(a["g"])("li",null,[Object(a["j"])(c,{to:"/search"},{default:Object(a["G"])((function(){return[h,g]})),_:1})]),Object(a["g"])("li",null,[!1===o.isLoggedin?(Object(a["t"])(),Object(a["d"])(c,{key:0,to:"/login"},{default:Object(a["G"])((function(){return[p,j]})),_:1})):Object(a["e"])("",!0)]),Object(a["g"])("li",null,[!1===o.isLoggedin?(Object(a["t"])(),Object(a["d"])(c,{key:0,to:"/signup"},{default:Object(a["G"])((function(){return[O,v]})),_:1})):Object(a["e"])("",!0)]),Object(a["g"])("li",null,[!0===o.isLoggedin?(Object(a["t"])(),Object(a["d"])(c,{key:0,to:"/login"},{default:Object(a["G"])((function(){return[y,w]})),_:1})):Object(a["e"])("",!0)])])])]),Object(a["g"])("ul",k,[Object(a["g"])("li",null,[Object(a["j"])(c,{to:"/"},{default:Object(a["G"])((function(){return[S,A]})),_:1})]),Object(a["g"])("li",null,[Object(a["j"])(c,{to:"/search"},{default:Object(a["G"])((function(){return[x,L]})),_:1})]),Object(a["g"])("li",null,[Object(a["j"])(c,{to:"/login"},{default:Object(a["G"])((function(){return[C,N]})),_:1})]),Object(a["g"])("li",null,[Object(a["j"])(c,{to:"/signup"},{default:Object(a["G"])((function(){return[E,_]})),_:1})]),Object(a["g"])("li",null,[Object(a["j"])(c,{to:"/login"},{default:Object(a["G"])((function(){return[T,D]})),_:1})])])],64)}document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".sidenav"),t={};M.Sidenav.init(e,t)}));var P={data:function(){return{isLoggedin:!1}},mounted:function(){this.isLoggedin=JSON.parse(localStorage.getItem("isLoggedin")),console.log(this.isLoggedin)}};n("0599");P.render=H;var q=P,G=Object(a["h"])('<nav><div class="nav-wrapper"><a href="#!" class="brand-logo">Logo</a><a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a><ul class="right hide-on-med-and-down"><li><a href="sass.html">Sass</a></li><li><a href="badges.html">Components</a></li><li><a href="collapsible.html">Javascript</a></li><li><a href="mobile.html">Mobile</a></li></ul></div></nav><ul class="sidenav" id="mobile-demo"><li><a href="sass.html">Sass</a></li><li><a href="badges.html">Components</a></li><li><a href="collapsible.html">Javascript</a></li><li><a href="mobile.html">Mobile</a></li></ul>',2);function I(e,t,n,a,i,o){return G}document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".sidenav"),t={};M.Sidenav.init(e,t)}));var U={};U.render=I;var V=U,F={class:"page-footer teal"},J=Object(a["h"])('<div class="container"><div class="row"><div class="col l6 s12"><h5 class="white-text">Footer Content</h5><p class="grey-text text-lighten-4"> You can use rows and columns here to organize your footer content. </p></div><div class="col l4 offset-l2 s12"><h5 class="white-text">Links</h5><ul><li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li><li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li><li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li><li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li></ul></div></div></div><div class="footer-copyright"><div class="container"> © 2014 Copyright Text <a class="grey-text text-lighten-4 right" href="#!">More Links</a></div></div>',2),$=[J];function z(e,t,n,i,o,r){return Object(a["t"])(),Object(a["f"])("footer",F,$)}var W={};W.render=z;var B=W,R={inject:["store"],components:{Navbar:q,SideNav:V,Footer:B},data:function(){return{sharedState:this.store.state}},mounted:function(){console.log(this.sharedState)},methods:{back:function(){this.$router.go(-1)}}};n("f913");R.render=c;var Y=R,K=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02"));Object(a["w"])("data-v-5154086a");var Q={class:"center"},X=Object(a["g"])("h1",{class:"zoom"},"Home Page",-1),Z=Object(a["g"])("h3",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eligendi aliquam provident labore reiciendis ipsam animi nihil suscipit eaque pariatur, nobis incidunt illum consequatur dicta harum, expedita debitis nemo atque voluptate, vitae est similique? Ea quaerat eligendi, corrupti beatae iste ut nulla laboriosam hic a pariatur est nam officia. Maiores optio labore, dolorum aliquam rem, totam dolores iusto quia repudiandae at nemo reiciendis delectus? Asperiores quia vero unde temporibus nobis eligendi a aperiam, voluptatum amet porro harum accusantium illum id fugit dolore officia totam voluptatibus libero delectus repellendus, non dolores? Est facilis facere, quas dolorum vero ea obcaecati nobis voluptas! ",-1);function ee(e,t,n,i,o,r){var c=Object(a["A"])("Carousel");return Object(a["t"])(),Object(a["f"])("div",Q,[Object(a["j"])(c),X,Z])}Object(a["u"])();var te={class:"carousel custom carousel-slider"},ne=Object(a["h"])('<a class="carousel-item" href="#one!"><img src="https://lorempixel.com/800/400/food/1"></a><a class="carousel-item" href="#two!"><img src="https://lorempixel.com/800/400/food/2"></a><a class="carousel-item" href="#three!"><img src="https://lorempixel.com/800/400/food/3"></a><a class="carousel-item" href="#four!"><img src="https://lorempixel.com/800/400/food/4"></a>',4),ae=[ne];function ie(e,t,n,i,o,r){return Object(a["t"])(),Object(a["f"])("div",te,ae)}M.Carousel.init({fullWidth:!0,indicators:!0});var oe={};n("828a");oe.render=ie;var re=oe;document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".carousel"),t={fullWidth:!0};M.Carousel.init(e,t)}));var ce={name:"Home",inject:["store"],data:function(){return{sharedState:this.store.state}},components:{Carousel:re},mounted:function(){console.log(this.sharedState.isAuthenticated)}};n("d24b");ce.render=ee,ce.__scopeId="data-v-5154086a";var le=ce,se={class:"signup container"},ue=Object(a["g"])("h3",{class:"center teal-text"},"Signup",-1),de={class:"field"},me=Object(a["g"])("label",null,"First Name:",-1),be={class:"field"},fe=Object(a["g"])("label",null,"Last Name:",-1),he={class:"field"},ge=Object(a["g"])("label",null,"Email:",-1),pe={class:"field"},je=Object(a["g"])("label",null,"Password:",-1),Oe=Object(a["g"])("div",{class:"center"},[Object(a["g"])("button",{class:"btn"},"Create Account")],-1);function ve(e,t,n,i,o,r){return Object(a["t"])(),Object(a["f"])("div",se,[Object(a["g"])("form",{class:"card-panel",onSubmit:t[4]||(t[4]=Object(a["I"])((function(){return r.handleSubmit&&r.handleSubmit.apply(r,arguments)}),["prevent"]))},[ue,Object(a["g"])("div",de,[me,Object(a["H"])(Object(a["g"])("input",{type:"text",id:"firstName","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.firstName=e})},null,512),[[a["E"],o.firstName]])]),Object(a["g"])("div",be,[fe,Object(a["H"])(Object(a["g"])("input",{type:"text",id:"lastName","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.lastName=e})},null,512),[[a["E"],o.lastName]])]),Object(a["g"])("div",he,[ge,Object(a["H"])(Object(a["g"])("input",{type:"email",id:"email","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.email=e})},null,512),[[a["E"],o.email]])]),Object(a["g"])("div",pe,[je,Object(a["H"])(Object(a["g"])("input",{type:"password",id:"password","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.password=e})},null,512),[[a["E"],o.password]])]),Oe],32)])}var ye={data:function(){return{firstName:"",lastName:"",email:null,password:null,uri:"http://localhost:3000/users"}},methods:{handleSubmit:function(){var e=this;console.log(this.firstName+"====="+this.lastName);var t={firstName:this.firstName,lastName:this.lastName,email:this.email,password:this.password};console.log(JSON.stringify(t)),fetch(this.uri,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){e.$router.push("/")})).catch((function(e){return console.log(e)}))}}};n("ce0d");ye.render=ve;var we=ye,ke={class:"signup container"},Se=Object(a["g"])("h3",{class:"center teal-text"},"Login",-1),Ae={class:"field"},xe=Object(a["g"])("label",null,"Email:",-1),Le={class:"field"},Ce=Object(a["g"])("label",null,"Password:",-1),Ne={key:0,class:"error"},Ee=Object(a["g"])("div",{class:"field center"},[Object(a["g"])("button",{class:"btn"},"Login")],-1);function Me(e,t,n,i,o,r){return Object(a["t"])(),Object(a["f"])("div",ke,[Object(a["g"])("form",{class:"card-panel",onSubmit:t[2]||(t[2]=Object(a["I"])((function(){return r.handleSubmit&&r.handleSubmit.apply(r,arguments)}),["prevent"]))},[Se,Object(a["g"])("div",Ae,[xe,Object(a["H"])(Object(a["g"])("input",{type:"email",id:"email","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.email=e})},null,512),[[a["E"],o.email]])]),Object(a["g"])("div",Le,[Ce,Object(a["H"])(Object(a["g"])("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.password=e})},null,512),[[a["E"],o.password]])]),""!==o.passworderror?(Object(a["t"])(),Object(a["f"])("div",Ne,Object(a["C"])(o.passworderror),1)):Object(a["e"])("",!0),Ee],32)])}n("99af");var _e={inject:["store"],data:function(){return{email:null,password:null,uri:"http://localhost:3000",emailerror:"",passworderror:"",sharedState:this.store.state}},methods:{handleSubmit:function(){var e=this;console.log(this.email+"---"+this.password),fetch("".concat(this.uri,"/users/?email=").concat(this.email,"&password=").concat(this.password),{method:"GET"}).then((function(e){return console.log(e),e.json()})).then((function(t){console.log(t),0!==t.length?(console.log("login success"),e.store.setIsAuthenticated(!0),e.$router.push("/dashboard"),localStorage.setItem("isLoggedin",!0)):(console.log("login failed"),e.emailerror="email not found",e.passworderror="Email or Password Not Matching, Try with Correct One",localStorage.setItem("isLoggedin",!1),e.$router.push("/login"))})).catch((function(e){return console.log(e)}))}},mounted:function(){localStorage.setItem("isLoggedin",!1),console.log(this.sharedState.isAuthenticated)}};n("35fd");_e.render=Me;var Te=_e,De={class:"center zoom"},He=Object(a["g"])("h1",{class:"zoom teal-text"},[Object(a["g"])("i",{class:"material-icons zoom"},"search"),Object(a["i"])("Search")],-1),Pe=[He];function qe(e,t,n,i,o,r){return Object(a["t"])(),Object(a["f"])("div",De,Pe)}var Ge={};n("6373");Ge.render=qe;var Ie=Ge,Ue={style:{"margin-top":"30px"}};function Ve(e,t,n,i,o,r){var c=Object(a["A"])("FilterAnimal"),l=Object(a["A"])("Viewanimal");return Object(a["t"])(),Object(a["f"])(a["a"],null,[Object(a["j"])(c,{onFilterChanged:t[0]||(t[0]=function(e){return o.selected=e}),selected:o.selected},null,8,["selected"]),Object(a["g"])("div",Ue,[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(r.filterAnimals,(function(e){return Object(a["t"])(),Object(a["f"])("div",{key:e.id},[Object(a["j"])(l,{animal:e,onDelete:r.handleDelete,onMarked:r.handleMarked},null,8,["animal","onDelete","onMarked"])])})),128))])],64)}n("4de4"),n("7db0"),n("4e82"),n("b0c0");var Fe={class:"actions"},Je={class:"icons"},$e=Object(a["g"])("span",{class:"material-icons"},"edit",-1),ze={key:0,class:"details"};function We(e,t,n,i,o,r){var c=Object(a["A"])("router-link");return Object(a["t"])(),Object(a["f"])("div",{class:Object(a["p"])(["animal",{marked:n.animal.marked}])},[Object(a["g"])("div",Fe,[Object(a["g"])("h3",{onClick:t[0]||(t[0]=function(e){return o.showDetails=!o.showDetails})},Object(a["C"])(n.animal.name),1),Object(a["g"])("div",Je,[Object(a["g"])("span",{class:"material-icons",onClick:t[1]||(t[1]=function(){return r.deleteAnimal&&r.deleteAnimal.apply(r,arguments)})}," delete "),Object(a["j"])(c,{to:{name:"Editanimal",params:{id:n.animal.id}}},{default:Object(a["G"])((function(){return[$e]})),_:1},8,["to"]),Object(a["g"])("span",{class:"material-icons",onClick:t[2]||(t[2]=function(){return r.markAnimal&&r.markAnimal.apply(r,arguments)})}," done ")])]),o.showDetails?(Object(a["t"])(),Object(a["f"])("div",ze,[Object(a["g"])("p",null,Object(a["C"])(n.animal.note),1)])):Object(a["e"])("",!0)],2)}var Be={props:["animal"],data:function(){return{showDetails:!1,uri:"http://localhost:3000/animals/"+this.animal.id}},methods:{toggleDetails:function(){this.showDetails=!this.showDetails},deleteAnimal:function(){var e=this;fetch(this.uri,{method:"DELETE"}).then((function(){e.$emit("delete",e.animal.id)})).catch((function(e){console.log(e)}))},markAnimal:function(){var e=this;fetch(this.uri,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({marked:!this.animal.marked})}).then((function(){e.$emit("marked",e.animal.id)})).catch((function(e){return console.log(e)}))}},computed:{}};n("3c8b");Be.render=We;var Re=Be,Ye={class:"navbar-fixed orange lighten-2"};function Ke(e,t,n,i,o,r){return Object(a["t"])(),Object(a["f"])("nav",Ye,[Object(a["g"])("button",{class:Object(a["p"])(["navbutton",{active:"all"===n.selected}]),onClick:t[0]||(t[0]=function(e){return r.changeFilter("all")})}," All ",2),Object(a["g"])("button",{class:Object(a["p"])(["navbutton",{active:"vaccinated"===n.selected}]),onClick:t[1]||(t[1]=function(e){return r.changeFilter("vaccinated")})}," Vaccinated ",2),Object(a["g"])("button",{class:Object(a["p"])(["navbutton",{active:"scheduled"===n.selected}]),onClick:t[2]||(t[2]=function(e){return r.changeFilter("scheduled")})}," Schduled ",2)])}var Qe={props:["selected"],methods:{changeFilter:function(e){this.$emit("filterChanged",e)}}};n("dfe5");Qe.render=Ke;var Xe=Qe,Ze={props:["id"],components:{Viewanimal:Re,FilterAnimal:Xe},data:function(){return{animals:[],uri:"http://localhost:3000/animals",selected:"all"}},methods:{handleDelete:function(e){this.animals=this.animals.filter((function(t){return t.id!==e}))},handleMarked:function(e){var t=this.animals.find((function(t){return t.id===e}));t.marked=!t.marked}},mounted:function(){var e=this;fetch(this.uri).then((function(t){return t.json().then((function(t){console.log(t),e.animals=t}))}))},computed:{filterAnimals:function(){return"vaccinated"===this.selected?this.animals.filter((function(e){return e.marked})):"scheduled"===this.selected?this.animals.filter((function(e){return!e.marked})):this.animals.sort((function(e,t){var n=e.name.toUpperCase(),a=t.name.toUpperCase();return n==a?0:n>a?1:-1}))}}};Ze.render=Ve;var et=Ze,tt=Object(a["g"])("label",null,"Animal Name:",-1),nt=Object(a["g"])("label",null,"Note:",-1),at=Object(a["g"])("button",null,"Add Animal",-1);function it(e,t,n,i,o,r){return Object(a["t"])(),Object(a["f"])("form",{onSubmit:t[2]||(t[2]=Object(a["I"])((function(){return r.addNewAnimal&&r.addNewAnimal.apply(r,arguments)}),["prevent"]))},[tt,Object(a["H"])(Object(a["g"])("input",{type:"text",id:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.name=e}),required:""},null,512),[[a["E"],o.name]]),nt,Object(a["H"])(Object(a["g"])("textarea",{cols:"30",rows:"10","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.note=e})},null,512),[[a["E"],o.note]]),at],32)}var ot={data:function(){return{name:"",note:"",marked:!1,uri:"http://localhost:3000/animals"}},methods:{addNewAnimal:function(){var e=this;console.log(this.name+"====="+this.note);var t={name:this.name,note:this.note,marked:this.marked};console.log(JSON.stringify(t)),fetch(this.uri,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){e.$router.push("/")})).catch((function(e){return console.log(e)}))}}};n("6007");ot.render=it;var rt=ot,ct=Object(a["g"])("label",null,"Animal Name:",-1),lt=Object(a["g"])("label",null,"Note:",-1),st=Object(a["g"])("button",null,"Update Animal",-1);function ut(e,t,n,i,o,r){return Object(a["t"])(),Object(a["f"])("form",{onSubmit:t[2]||(t[2]=Object(a["I"])((function(){return r.updateAnimal&&r.updateAnimal.apply(r,arguments)}),["prevent"]))},[ct,Object(a["H"])(Object(a["g"])("input",{type:"text",id:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.name=e}),required:""},null,512),[[a["E"],o.name]]),lt,Object(a["H"])(Object(a["g"])("textarea",{cols:"30",rows:"10","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.note=e})},null,512),[[a["E"],o.note]]),st],32)}var dt={props:["id"],data:function(){return{name:"",note:"",marked:!1,uri:"http://localhost:3000/animals/"+this.id}},methods:{updateAnimal:function(){var e=this,t={name:this.name,note:this.note,marked:this.marked};console.log(JSON.stringify(t)),fetch(this.uri,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){e.$router.push("/")})).catch((function(e){return console.log(e)}))}},mounted:function(){var e=this;fetch(this.uri,{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.name=t.name,e.note=t.note,e.marked=t.marked})).catch((function(e){return console.log(e)}))}};dt.render=ut;var mt=dt,bt=[{path:"/",name:"Home",component:le},{path:"/signup",name:"Signup",component:we},{path:"/login",name:"Login",component:Te},{path:"/search",name:"Search",component:Ie},{path:"/dashboard",name:"AnimalDashboard",component:et,meta:{isAuthenticated:!0}},{path:"/addanimal",name:"Addanimal",component:rt},{path:"/editanimal/:id",name:"Editanimal",component:mt,props:!0},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],ft=Object(K["a"])({history:Object(K["b"])("/vue-deploy/"),routes:bt});ft.beforeEach((function(e,t,n){if(e.matched.some((function(e){return e.meta.isAuthenticated}))){var a=localStorage.getItem("isLoggedin");"true"===a?n():n({name:"Login"})}else n()}));var ht=ft,gt={debug:!0,state:Object(a["x"])({isAuthenticated:!1}),setIsAuthenticated:function(e){this.debug&&console.log("setIsAuthenticated triggered with",e),this.state.isAuthenticated=e},clearLoggedin:function(){this.debug&&console.log("clearMessageAction triggered"),this.state.isAuthenticated=""}},pt=Object(a["c"])(Y);pt.provide("store",gt),pt.use(ht),pt.mount("#app")},6007:function(e,t,n){"use strict";n("63fc")},6373:function(e,t,n){"use strict";n("6863")},"63fc":function(e,t,n){},"66d8":function(e,t,n){},6863:function(e,t,n){},7814:function(e,t,n){},"828a":function(e,t,n){"use strict";n("be0c")},"9da6":function(e,t,n){},"9efd":function(e,t,n){},be0c:function(e,t,n){},ce0d:function(e,t,n){"use strict";n("4348")},d24b:function(e,t,n){"use strict";n("9efd")},dfe5:function(e,t,n){"use strict";n("3640")},f913:function(e,t,n){"use strict";n("7814")}});
//# sourceMappingURL=app.32cd6c16.js.map