webpackJsonp([1],{"6e40":function(t,n){},KHeA:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("7+uW"),s=e("NYxO"),o="login",a="logout",r="signin",u={name:"app",computed:Object(s.b)(["islogin"]),methods:{logout:function(){this.$store.dispatch(a),this.$router.push({name:"home"})}}},l={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"page-header"},[e("h1",{staticClass:"head-text"},[t._v("Route Login Practice")]),t._v(" "),e("nav",[e("ul",[e("li",[e("router-link",{attrs:{to:{name:"home"}}},[t._v("Home")])],1),t._v(" "),t.islogin?t._e():e("li",[e("router-link",{attrs:{to:{name:"login"}}},[t._v("Login")])],1),t._v(" "),t.islogin?t._e():e("li",[e("router-link",{attrs:{to:{name:"signin"}}},[t._v("Signin")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:{name:"islogin"}}},[t._v("AmILogin?")])],1),t._v(" "),t.islogin?e("li",[e("a",{on:{click:function(n){t.logout()}}},[t._v("Logout")])]):t._e()])])]),t._v(" "),e("div",{staticClass:"container"},[e("router-view")],1)])},staticRenderFns:[]};var c,d,p=e("VU/8")(u,l,!1,function(t){e("nPXG")},null,null).exports,h=e("bOdI"),m=e.n(h),v=(c={},m()(c,o,function(t,n){t.islogin=!0,t.user.id=n.id,t.user.password=n.password}),m()(c,a,function(t){t.islogin=!1,t.user.id="",t.user.password=""}),m()(c,r,function(t,n){t.IDs.push({id:n.id,password:n.password}),t.islogin=!0,t.user.id=n.id,t.user.password=n.password}),c),f=(d={},m()(d,o,function(t,n){t.commit(o,n)}),m()(d,a,function(t){t.commit(a)}),m()(d,r,function(t,n){t.commit(r,n)}),d);i.a.use(s.a);var g=new s.a.Store({state:{IDs:[{id:"mungje",password:"password"},{id:"ninanung",password:"1004nmnm"}],islogin:!1,user:{id:"",password:""}},mutations:v,actions:f}),_=e("/ocq"),w=e("mtWM"),k=e.n(w),b="/api/login",C="/api/signin",y=function(t,n){return k.a.post(b,{id:t,password:n})},$=function(t,n){return k.a.post(C,{id:t,password:n})},x={name:"login",data:function(){return{id:"",password:""}},computed:Object(s.b)(["IDs"]),methods:{login:function(){var t=void 0;return y(this.id,this.password).then(function(n){t=n.data.error,n.data.words,console.log(n.data)}),"true"==t?(this.$store.dispatch(o,{id:this.id,password:this.password}),this.id="",this.password="",this.$router.push({name:"home"})):alert("Please check your ID and password")},cancel:function(){this.$router.push({name:"home"})}}},P={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"modal"},[e("div",{staticClass:"form"},[e("h1",{staticClass:"inputhead"},[t._v("Please Login")]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"input"},[e("label",[t._v("ID")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],staticClass:"id",attrs:{type:"text",placeholder:"ID",autofocus:""},domProps:{value:t.id},on:{keyup:[function(n){if(!("button"in n)&&t._k(n.keyCode,"esc",27,n.key))return null;t.cancel(n)},function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13,n.key))return null;t.login(n)}],input:function(n){n.target.composing||(t.id=n.target.value)}}})]),t._v(" "),e("div",{staticClass:"input"},[e("label",[t._v("Password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"password",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{keyup:[function(n){if(!("button"in n)&&t._k(n.keyCode,"esc",27,n.key))return null;t.cancel(n)},function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13,n.key))return null;t.login(n)}],input:function(n){n.target.composing||(t.password=n.target.value)}}})]),t._v(" "),e("div",{staticClass:"input"},[e("button",{on:{click:function(n){t.login()}}},[t._v("Login")]),t._v(" "),e("button",{on:{click:function(n){t.cancel()}}},[t._v("Cancel")])])])])},staticRenderFns:[]};var I=e("VU/8")(x,P,!1,function(t){e("6e40")},"data-v-483c6da3",null).exports,D={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("h1",[this._v("I'm Home!")])])}]},E=e("VU/8")({name:"home"},D,!1,null,null,null).exports,N={name:"login",data:function(){return{id:"",password:"",isWrong:!1}},computed:Object(s.b)(["IDs"]),watch:{id:function(){this.id.length>10&&(alert("ID can't be longer then 10 digits"),this.id.slice(0,-1))}},methods:{signin:function(){if(this.id.length<3)return alert("ID must be longer then 3 digits");var t="",n=void 0;return $(this.id,this.password).then(function(e){t=e.data.words,n=e.data.error,e.data.error?console.log(t):console.log(e.data)}),"true"==n?(this.$store.dispatch(r,{id:this.id,password:this.password}),this.id="",this.password="",this.$router.push({name:"home"})):alert(t)},cancel:function(){this.$router.push({name:"home"})}}},j={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"modal"},[e("div",{staticClass:"form"},[e("h1",{staticClass:"inputhead"},[t._v("Signin")]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"input"},[e("label",[t._v("ID")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],staticClass:"id",attrs:{type:"text",placeholder:"ID",autofocus:""},domProps:{value:t.id},on:{keyup:[function(n){if(!("button"in n)&&t._k(n.keyCode,"esc",27,n.key))return null;t.cancel(n)},function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13,n.key))return null;t.signin()}],input:function(n){n.target.composing||(t.id=n.target.value)}}})]),t._v(" "),e("div",{staticClass:"input"},[e("label",[t._v("Password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"password",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{keyup:[function(n){if(!("button"in n)&&t._k(n.keyCode,"esc",27,n.key))return null;t.cancel(n)},function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13,n.key))return null;t.signin()}],input:function(n){n.target.composing||(t.password=n.target.value)}}})]),t._v(" "),e("div",{staticClass:"input"},[e("button",{on:{click:function(n){t.signin()}}},[t._v("Signin")]),t._v(" "),e("button",{on:{click:function(n){t.cancel()}}},[t._v("Cancel")])])])])},staticRenderFns:[]};var F=e("VU/8")(N,j,!1,function(t){e("KHeA")},"data-v-70073009",null).exports,L={name:"islogin",data:function(){return{hello:""}},computed:Object(s.b)(["islogin","user"]),mounted:function(){this.islogin?this.hello="hello! "+this.user.id:this.hello="Pleas Login!"}},O={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("h1",[this._v(this._s(this.hello))])])},staticRenderFns:[]},R=e("VU/8")(L,O,!1,null,null,null).exports,H={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("h1",[this._v("404 Not Found!!!!!")]),this._v(" "),n("img",{attrs:{src:e("kvT1")}})])}]},U=e("VU/8")({name:"404"},H,!1,null,null,null).exports;i.a.use(_.a),i.a.config.productionTip=!1,i.a.prototype.$axios=k.a;var V=new _.a({mode:"history",routes:[{path:"/",component:E},{path:"/home",name:"home",component:E},{path:"/login",name:"login",component:I},{path:"/signin",name:"signin",component:F},{path:"/islogin",name:"islogin",component:R},{path:"*",component:U}]});new i.a({store:g,router:V,el:"#app",render:function(t){return t(p)}})},kvT1:function(t,n,e){t.exports=e.p+"static/img/404.224f7f0.jpg"},nPXG:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.f8a4efe588f7d65b1f4d.js.map