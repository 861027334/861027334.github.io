"use strict";(self["webpackChunkjingdong"]=self["webpackChunkjingdong"]||[]).push([[177],{7420:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(3396),s=a(7139);const o={class:"shop"},i=["src"],c={class:"shop__content__title"},l={class:"shop__content__tags"},r={class:"shop__content__tag"},d={class:"shop__content__tag"},m={class:"shop__content__tag"},_={class:"shop__content__highlight"};function p(e,t,a,p,u,g){return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("img",{class:"shop__img",src:a.item.imgUrl,alt:""},null,8,i),(0,n._)("div",{class:(0,s.C_)(["shop__content",{"shop__content--bordered":!a.hideBorder}])},[(0,n._)("div",c,(0,s.zw)(a.item.name),1),(0,n._)("div",l,[(0,n._)("span",r,"月售"+(0,s.zw)(a.item.sales),1),(0,n._)("span",d,"起送¥"+(0,s.zw)(a.item.expressLimit),1),(0,n._)("span",m,"基础运费¥"+(0,s.zw)(a.item.expressPrice),1)]),(0,n._)("div",_,(0,s.zw)(a.item.slogan),1)],2)])}var u={name:"ShopInfo",props:["item","hideBorder"]},g=a(89);const v=(0,g.Z)(u,[["render",p],["__scopeId","data-v-532fc664"]]);var w=v},8846:function(e,t,a){a.r(t),a.d(t,{default:function(){return B}});var n=a(3396);const s={class:"wrapper",ref:"homeElement"};function o(e,t,a,o,i,c){const l=(0,n.up)("StaticPart"),r=(0,n.up)("Nearby"),d=(0,n.up)("Docker");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",s,[(0,n.Wm)(l),(0,n.Wm)(r)],512),(0,n.Wm)(d)],64)}var i=a(7139);const c=e=>((0,n.dD)("data-v-94c8a418"),e=e(),(0,n.Cn)(),e),l=(0,n.uE)('<div class="location" data-v-94c8a418><span class="iconfont location__map" data-v-94c8a418></span> 北京理工大学国防科技园2号楼10层 <span class="iconfont location__bell" data-v-94c8a418></span></div><div class="search" data-v-94c8a418><span class="iconfont" data-v-94c8a418></span><input class="search__input" type="text" placeholder="山姆会员商店优惠商品" data-v-94c8a418></div><div class="banner" data-v-94c8a418><img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="" data-v-94c8a418></div>',3),r={class:"icons"},d=["src"],m={class:"icons__item__desc"},_=c((()=>(0,n._)("div",{class:"gap"},null,-1)));function p(e,t,a,s,o,c){return(0,n.wg)(),(0,n.iD)(n.HY,null,[l,(0,n._)("div",r,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.icons,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{key:t,class:"icons__item"},[(0,n._)("img",{class:"icons__item__img",src:e.imgUrl,alt:""},null,8,d),(0,n._)("p",m,(0,i.zw)(e.name),1)])))),128))]),_],64)}var u={name:"StaticPart",setup(){const e=[{imgUrl:"http://www.dell-lee.com/imgs/vue3/超市.png",name:"超市便利"},{imgUrl:"http://www.dell-lee.com/imgs/vue3/菜市场.png",name:"菜市场"},{imgUrl:"http://www.dell-lee.com/imgs/vue3/水果店.png",name:"水果店"},{imgUrl:"http://www.dell-lee.com/imgs/vue3/鲜花.png",name:"鲜花绿植"},{imgUrl:"http://www.dell-lee.com/imgs/vue3/医药健康.png",name:"医药健康"},{imgUrl:"http://www.dell-lee.com/imgs/vue3/家居.png",name:"家居时尚"},{imgUrl:"http://www.dell-lee.com/imgs/vue3/蛋糕.png",name:"烘培蛋糕"},{imgUrl:"http://www.dell-lee.com/imgs/vue3/签到.png",name:"签到"},{imgUrl:"http://www.dell-lee.com/imgs/vue3/大牌免运.png",name:"大牌免运"},{imgUrl:"http://www.dell-lee.com/imgs/vue3/红包.png",name:"红包套餐"}];return{icons:e}}},g=a(89);const v=(0,g.Z)(u,[["render",p],["__scopeId","data-v-94c8a418"]]);var w=v;const h=e=>((0,n.dD)("data-v-6baa4a8e"),e=e(),(0,n.Cn)(),e),f={class:"nearby"},b=h((()=>(0,n._)("div",{class:"nearby__title"},"附近店铺",-1)));function k(e,t,a,s,o,i){const c=(0,n.up)("ShopInfo"),l=(0,n.up)("router-link"),r=(0,n.up)("Toast");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",f,[b,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.nearbyList,(e=>((0,n.wg)(),(0,n.j4)(l,{key:e._id,to:`/shop/${e._id}`},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{item:e},null,8,["item"])])),_:2},1032,["to"])))),128))]),s.toastInfo.show?((0,n.wg)(),(0,n.j4)(r,{key:0,message:s.toastInfo.message},null,8,["message"])):(0,n.kq)("",!0)],64)}a(7658);var y=a(4870),D=a(6391),U=a(7420),I=a(1090),L={name:"Nearby",components:{Toast:I.Z,ShopInfo:U.Z},setup(){const e=(0,y.qj)({nearbyList:[]}),{toastInfo:t,showToast:a}=(0,I.S)(),n=async()=>{try{const t=await(0,D.U)("/api/shop/hot-list");if(0!==t?.errno)return a(t.desc);e.nearbyList.push(...t.data),e.nearbyList.push(...t.data),e.nearbyList.push(...t.data),e.nearbyList.push(...t.data)}catch(t){a(t.message)}};return n(),{...(0,y.BK)(e),toastInfo:t}}};const H=(0,g.Z)(L,[["render",k],["__scopeId","data-v-6baa4a8e"]]);var S=H;const Z={class:"docker"},x=["innerHTML"],z={class:"docker__title"};function T(e,t,a,s,o,c){const l=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",Z,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.dockerList,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{key:t,class:(0,i.C_)(["docker__item",{"docker__item--active":0===t}])},[(0,n.Wm)(l,{to:e.to},{default:(0,n.w5)((()=>[(0,n._)("div",{class:"iconfont",innerHTML:e.icon},null,8,x),(0,n._)("div",z,(0,i.zw)(e.title),1)])),_:2},1032,["to"])],2)))),128))])}var j={name:"Docker",setup(){const e=[{icon:"&#xe8b9;",title:"首页",to:"/"},{icon:"&#xe63b;",title:"购物车",to:"/cartList"},{icon:"&#xe63a;",title:"订单",to:""},{icon:"&#xe64d;",title:"我的",to:""}];return{dockerList:e}}};const C=(0,g.Z)(j,[["render",T],["__scopeId","data-v-f8144684"]]);var Y=C,W=a(2483),K={name:"Home",components:{StaticPart:w,Nearby:S,Docker:Y},setup(){const e=(0,y.iH)(null),t=(0,y.iH)(0);return(0,n.dl)((()=>{e.value.scrollTop=t.value,t.value=0})),(0,W.iS)((()=>{t.value=e.value.scrollTop})),{homeElement:e}}};const P=(0,g.Z)(K,[["render",o],["__scopeId","data-v-d004cd20"]]);var B=P}}]);
//# sourceMappingURL=home.0799679b.js.map