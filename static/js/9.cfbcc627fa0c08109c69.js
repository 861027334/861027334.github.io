webpackJsonp([9],{ZyBZ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"creditDefaultSwap",data:function(){return{title:"信用违约互换",isLoading:!1,activeNames:[0,1,2,3,4],list:[{title:"超AAA",value:[1,2,3,4]},{title:"普通AAA",value:[1,2,3,4]},{title:"AA+",value:[1]},{title:"AA",value:[1,2,3,4]}]}},methods:{onClickLeft:function(){this.$router.back()},onRefresh:function(){var t=this;setTimeout(function(){t.$toast("刷新成功"),t.isLoading=!1,t.count++},500)}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m_collapse"},[a("van-nav-bar",{attrs:{title:t.title,"left-text":"返回","left-arrow":"",fixed:""},on:{"click-left":t.onClickLeft}}),t._v(" "),a("section",{staticClass:"van-doc-demo-section"},[a("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[a("van-row",{staticClass:"m_title"},[a("van-col",{attrs:{span:"8",offset:"8"}},[t._v("买价(bp)")]),t._v(" "),a("van-col",{attrs:{span:"8"}},[t._v("卖价(bp)")])],1),t._v(" "),a("van-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},t._l(t.list,function(e,n){return a("van-collapse-item",{attrs:{title:e.title,name:n}},t._l(e.value,function(e){return a("van-row",{staticClass:"m_item"},[a("van-col",{attrs:{span:"8"}},[t._v("0.5Y")]),t._v(" "),a("van-col",{attrs:{span:"8"}},[t._v("32.00")]),t._v(" "),a("van-col",{attrs:{span:"8"}},[t._v("32.00")])],1)}),1)}),1)],1)],1)],1)},staticRenderFns:[]};var i=a("VU/8")(n,s,!1,function(t){a("gdDF")},"data-v-3cd043ea",null);e.default=i.exports},gdDF:function(t,e){}});
//# sourceMappingURL=9.cfbcc627fa0c08109c69.js.map