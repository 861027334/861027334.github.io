webpackJsonp([6],{"34io":function(i,t,e){i.exports=e.p+"static/img/gtja.b431d66.png"},"3ppv":function(i,t,e){i.exports=e.p+"static/img/zzzx.2e0c126.png"},"6vAW":function(i,t,e){i.exports=e.p+"static/img/zcx.9c51fb2.png"},TK2b:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"index",data:function(){return{isLogin:!1,isDisclaimer:!1,checked:!1,title:"旗舰店",timeShow:!0,count:"",timer:null,list:[{imageURL:e("6vAW"),name:"中诚信国际信用评级有限公司",path:"/mall/zcx"},{imageURL:e("3ppv"),name:"中债资信评估有限责任公司",path:"/mall/zzzx"},{imageURL:e("34io"),name:"国泰君安证劵",path:"/mall/gtja"}]}},methods:{onClickLeft:function(){this.isAndroid(),this.isiOS()},onClickRight:function(){this.$router.push("/mall/yygl")},toDetailPage:function(i){2===i?this.isLogin?(this.isDisclaimer=!0,this.getCode()):this.$dialog.confirm({title:"友情提示",message:"您还未登录或登录已超时，请先登录？"}).then(function(){nativeInterface.toapplogin()}).catch(function(){}):this.$router.push(this.list[i].path)},chooseText:function(){this.checked=!this.checked},getCode:function(){var i=this;this.timer||(this.count=10,this.timeShow=!1,this.timer=setInterval(function(){i.count>1&&i.count<=10?i.count--:(i.timeShow=!0,clearInterval(i.timer),i.timer=null)},1))},goTo:function(){!0===this.checked?this.$router.push(this.list[2].path):this.$toast("请勾选免责声明")},setupWebViewJavascriptBridge:function(i){if(window.WebViewJavascriptBridge)return i(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(i);window.WVJBCallbacks=[i];var t=document.createElement("iframe");t.style.display="none",t.src="wvjbscheme://__BRIDGE_LOADED__",document.documentElement.appendChild(t),setTimeout(function(){document.documentElement.removeChild(t)},0)},isAndroid:function(){var i=navigator.userAgent,t=(navigator.appVersion,i.indexOf("Android")>-1||i.indexOf("Linux")>-1);alert(t)},isiOS:function(){var i=navigator.userAgent,t=(navigator.appVersion,!!i.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/));alert(t)}},created:function(){var i="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyT2JqZWN0Ijp7InVzZXJJZCI6IjQ2MDE2IiwidXNlck5hbWUiOiLpn6nlv5flvawiLCJ1c2VyTWFpbCI6bnVsbCwidXNlclJlYWxOYW1lIjoi6Z-p5b-X5b2sIiwidXNlck9yZ0lkIjoiMTMzMjMiLCJ1c2VyT3JnTmFtZSI6IuWAuuadg-a1i-ivleaJv-mUgOWVhiIsInVzZXJSZW1vdGVJUCI6IjEwLjEwLjgwLjEwMSIsInVuaXF1ZUlkIjoiZmY4MDgwODE2OTQ3ZThiYzAxNjk3NGU5MDI5NTVkNjkiLCJzZXNzaW9uSWQiOm51bGwsImF0dHJpYnV0ZXMiOnsicm9sZUxpc3QiOiIxMjI0LDI0ODYsMTAyMyIsImxhc3RMb2dpbiI6IjIwMTktMDMtMTMgMTA6Mzc6MDEuNDUiLCJvcmdsaXN0IjoiMTMzMjMiLCJsYXN0SXAiOiIxMC4yLjM2LjEwNyIsInBjdGlkIjoiMTM3MjQiLCJvcmdDb2RlIjoiMTE0MyIsInJvbGVDb2RlIjoiMDIwMTAzLG9yZ19vcGVyLGFkZmZlMmQyYWE4OTQ5YjY5OGZhYWI1Mjk1Y2RjMGMwIiwibWVudXR5cGUiOm51bGwsIkVYVEVORF9VU0VSX0lEIjoiYTg4YzFkOWZhNDFjNDJmMmE2MmQyY2VmZTlmNmM2ZTYiLCJURU5BTlRfSUQiOiJkZWZhdWx0IiwicGFyZW50T3JnSWRzIjoiIiwibW9iaWxlIjoiMTgzMTAyNTIwMjEifX0sInN1YiI6ImE4OGMxZDlmYTQxYzQyZjJhNjJkMmNlZmU5ZjZjNmU2IiwiaWF0IjoxNTUyNDQ0NjIxLCJleHAiOjE1NTMwNDk0MjF9.S6owVxv-KsX1-WJcdBrrqz41Xh-xqLM8QVhcFymaAP-Q9OzBi36vJb9G_VBrwftuORpHbJLokNmeM2CQoc0O1ptrX3_p7irqcPT8hcCKd1T0Y0Ef9Ig3EXv6QepglpaNYwrWgjzDv7ylAeE6WxEQYS9ekS5Uq3lLhZQYt4RVXKY";this.isLogin=!0,sessionStorage.setItem("token",i)},mounted:function(){this.setupWebViewJavascriptBridge(function(i){i.registerHandler("Get",function(i,t){alert(i)})})}},s={render:function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[e("van-nav-bar",{attrs:{title:i.title,"left-text":"返回","left-arrow":"",fixed:""},on:{"click-left":i.onClickLeft}}),i._v(" "),e("div",{staticClass:"mall_list"},i._l(i.list,function(t,n){return e("div",{staticClass:"mall_item",on:{click:function(t){return i.toDetailPage(n)}}},[e("img",{attrs:{src:t.imageURL,alt:""}}),i._v(" "),e("div",{staticClass:"mall_item_name"},[i._v(i._s(t.name))])])}),0),i._v(" "),e("van-popup",{model:{value:i.isDisclaimer,callback:function(t){i.isDisclaimer=t},expression:"isDisclaimer"}},[e("div",{staticClass:"disclaimer"},[e("h5",{staticClass:"title"},[i._v("免责声明")]),i._v(" "),e("div",{staticClass:"textContent"},[e("p",[i._v("本报价板（结构金融-利率互换报价板和结构金融-信用违约互换报价版）为国泰君安证券股份有限公司（以下简称“国泰君安证券”）依法设立、运营的官方报价板。本报价板是机密的，只有经国泰君安证券认可的订阅者才能使用。")]),i._v(" "),e("p",[i._v("本报价板推送的信息仅限发布当日有效。本报价板所载的信息、材料或分析工具只提供给订阅者作参考之用，不是或不应被视为出售、购买或认购证券或其他金融工具的要约或要约邀请。在任何情况下，本报价板所载内容不构成任何投资建议，国泰君安证券也不对任何因使用本报价板所载任何内容所引致或可能引致的损失承担任何责任。订阅者不应以此取代自己的独立判断，应自主做出投资决策并自行承担所有投资风险。国泰君安证券也不因订阅者可订阅本报价板而视其为国泰君安证券的当然客户。")]),i._v(" "),e("p",[i._v("国泰君安证券对本报价板所载信息保留一切法律权利。订阅者如需对本报价板所载内容复制、转载给任一第三方的，应事先得到国泰君安证券的许可，并需注明出处，且不得对本报价板所载内容进行任何有悖原意的引用、删节和修改，如因侵权行为给国泰君安证券造成任何直接或间接损失的，国泰君安证券保留追究一切法律责任的权利。")])]),i._v(" "),e("div",{staticClass:"foot"},[e("div",{staticClass:"check"},[e("van-checkbox",{attrs:{"checked-color":"#DDA944"},model:{value:i.checked,callback:function(t){i.checked=t},expression:"checked"}}),i._v(" "),e("span",{on:{click:i.chooseText}},[i._v("勾选后表示您已经知悉国泰君安免责声明")])],1),i._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!i.timeShow,expression:"!timeShow"}],staticClass:"makeSure"},[i._v(i._s(i.count)+"s")]),i._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:i.timeShow,expression:"timeShow"}],staticClass:"makeSure"},[e("span",{class:!1===i.checked?"":"choosed",on:{click:i.goTo}},[i._v("确定")])])])])])],1)},staticRenderFns:[]};var a=e("VU/8")(n,s,!1,function(i){e("eGpM")},"data-v-1b99f605",null);t.default=a.exports},eGpM:function(i,t){}});
//# sourceMappingURL=6.4f8e69e4f875bc4e7486.js.map