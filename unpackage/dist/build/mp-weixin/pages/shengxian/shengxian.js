(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shengxian/shengxian"],{"138f":function(n,e,t){"use strict";(function(n){t("232c"),t("921b");u(t("66fd"));var e=u(t("88bd"));function u(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},3071:function(n,e,t){"use strict";var u,o=function(){var n=this,e=n.$createElement;n._self._c},r=[];t.d(e,"b",function(){return o}),t.d(e,"c",function(){return r}),t.d(e,"a",function(){return u})},"88bd":function(n,e,t){"use strict";t.r(e);var u=t("3071"),o=t("aeac");for(var r in o)"default"!==r&&function(n){t.d(e,n,function(){return o[n]})}(r);t("b288");var a,f=t("f0c5"),i=Object(f["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],a);e["default"]=i.exports},aeac:function(n,e,t){"use strict";t.r(e);var u=t("fa91"),o=t.n(u);for(var r in u)"default"!==r&&function(n){t.d(e,n,function(){return u[n]})}(r);e["default"]=o.a},b288:function(n,e,t){"use strict";var u=t("cf83"),o=t.n(u);o.a},cf83:function(n,e,t){},fa91:function(n,e,t){"use strict";(function(n,u){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(t("7c8b")),r=a(t("555e"));function a(n){return n&&n.__esModule?n:{default:n}}var f=function(){return t.e("components/good-item").then(t.bind(null,"9e34"))},i=function(){return t.e("components/pulldown-refresher").then(t.bind(null,"2c22"))},c={onShareAppMessage:function(n){return{title:"益百购物欢迎您！",path:"/pages/index/index"}},mixins:[o.default,r.default],components:{goodItem:f,pulldownRefresher:i},data:function(){return{navList:["蔬菜","水果","干货","冷冻","调料"],lists:[]}},mounted:function(){var e=this;n.$on("REFRESH3",function(){return e.$refs.pulldownRefresher.pulldown()})},methods:{refresh:function(){var e=this;n.showLoading({mask:!0,title:"加载中..."}),u.callFunction({name:"goodR",data:{type:3}}).then(function(t){var u=t.result;n.hideLoading(),e.lists=u,e.$refs.pulldownRefresher.pullup()})},addGood:function(n){this.$router.push("/add-good",{type:"2-"+(n+1)})}}};e.default=c}).call(this,t("543d")["default"],t("a9ff")["default"])}},[["138f","common/runtime","common/vendor"]]]);