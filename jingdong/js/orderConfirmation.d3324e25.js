"use strict";(self["webpackChunkjingdong"]=self["webpackChunkjingdong"]||[]).push([[32],{3229:function(e,t,c){c.d(t,{_G:function(){return r},aH:function(){return n},dO:function(){return d},jw:function(){return o},rs:function(){return i}});var a=c(65),s=c(2483);const n=()=>(0,s.yj)().params.id,r=()=>(0,a.oR)().state.cartList,d=()=>r()?.[n()]?.shopName,o=()=>r()?.[n()]?.productList,i=()=>{const e=(0,a.oR)(),t=(t,c,a,s)=>{e.commit("changeCartItemInfo",{shopId:t,productId:c,productInfo:a,num:s})},c=(t,c)=>{e.commit("changeShopName",{shopId:t,shopName:c})},s=(t,c)=>{e.commit("changeCartItemChecked",{shopId:t,productId:c})},n=t=>{e.commit("cleanCartProducts",{shopId:t})},r=(t,c)=>{e.commit("setCartItemChecked",{shopId:t,checked:c})};return{changeShopName:c,changeCartItemInfo:t,changeCartItemChecked:s,cleanCartProducts:n,setCartItemChecked:r}}},9912:function(e,t,c){c.r(t),c.d(t,{default:function(){return V}});var a=c(3396);const s={class:"wrapper"};function n(e,t,c,n,r,d){const o=(0,a.up)("TopArea"),i=(0,a.up)("ProductList"),_=(0,a.up)("Order");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a.Wm)(o),(0,a.Wm)(i),(0,a.Wm)(_)])}const r=e=>((0,a.dD)("data-v-57c3ebfd"),e=e(),(0,a.Cn)(),e),d={class:"top"},o=r((()=>(0,a._)("span",null,"确认订单",-1)));function i(e,t,c,s,n,r){return(0,a.wg)(),(0,a.iD)("div",d,[(0,a._)("span",{class:"iconfont",onClick:t[0]||(t[0]=(...e)=>s.handleBackClick&&s.handleBackClick(...e))},""),o])}var _=c(2483),l={name:"TopArea",setup(){const e=(0,_.tv)(),t=()=>{e.back()};return{handleBackClick:t}}},p=c(89);const u=(0,p.Z)(l,[["render",i],["__scopeId","data-v-57c3ebfd"]]);var f=u,m=c(7139);const v=e=>((0,a.dD)("data-v-3caf4ff6"),e=e(),(0,a.Cn)(),e),h={class:"content"},C=(0,a.uE)('<div class="receiver" data-v-3caf4ff6><div class="receiver__title" data-v-3caf4ff6>收货地址</div><div class="receiver__address" data-v-3caf4ff6>北京理工大学国防科技园2号楼10层</div><div class="receiver__info" data-v-3caf4ff6><span class="receiver__info__name" data-v-3caf4ff6>瑶妹（先生）</span><span class="receiver__info__phone" data-v-3caf4ff6>18911024266</span></div><div class="iconfont receiver__icon" data-v-3caf4ff6></div></div>',1),k={class:"product"},g={class:"product__title"},I=["src"],w={class:"product__item__detail"},O={class:"product__item__title"},b={class:"product__item__price"},D={class:"product__item__single"},y=v((()=>(0,a._)("span",{class:"product__item__yen"},"¥",-1))),N={class:"product__item__total"},j=v((()=>(0,a._)("span",{class:"product__item__yen"},"¥",-1)));function L(e,t,c,s,n,r){return(0,a.wg)(),(0,a.iD)("div",h,[C,(0,a._)("div",k,[(0,a._)("div",g,(0,m.zw)(s.shopName),1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.productList,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"product__item",key:e._id},[(0,a._)("img",{class:"product__item__img",src:e.imgUrl,alt:""},null,8,I),(0,a._)("div",w,[(0,a._)("div",O,(0,m.zw)(e.name),1),(0,a._)("div",b,[(0,a._)("span",D,[y,(0,a.Uk)((0,m.zw)(e.price)+" x "+(0,m.zw)(e.count),1)]),(0,a._)("span",N,[j,(0,a.Uk)((0,m.zw)((e.price*e.count).toFixed(2)),1)])])])])))),128))])])}var z=c(3229),P={name:"ProductList",setup(){const e=(0,z.dO)(),t=(0,z.jw)();return{shopName:e,productList:t}}};const S=(0,p.Z)(P,[["render",L],["__scopeId","data-v-3caf4ff6"]]);var T=S,H=c(9242);const Z=e=>((0,a.dD)("data-v-12f36b3e"),e=e(),(0,a.Cn)(),e),U={class:"order"},x={class:"order__price"},A={class:"order__price__number"},B=Z((()=>(0,a._)("div",{class:"tips__title"},"确认订单信息",-1))),W=Z((()=>(0,a._)("div",{class:"tips__desc"},"请尽快完成支付，否则将被取消",-1))),q={class:"tips__btns"};function F(e,t,c,s,n,r){const d=(0,a.up)("Toast");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",U,[(0,a._)("div",x,[(0,a.Uk)("实付金额 ¥"),(0,a._)("span",A,(0,m.zw)(s.price),1)]),(0,a._)("div",{class:"order__btn",onClick:t[0]||(t[0]=(...e)=>s.handleSubmitOrder&&s.handleSubmitOrder(...e))},"提交订单")]),s.tipsConfirm?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"mask",onClick:t[4]||(t[4]=(...e)=>s.handleCancelOrder&&s.handleCancelOrder(...e))},[(0,a._)("div",{class:"tips",onClick:t[3]||(t[3]=(0,H.iM)((()=>{}),["stop"]))},[B,W,(0,a._)("div",q,[(0,a._)("div",{class:"tips__btn",onClick:t[1]||(t[1]=(...e)=>s.handleCancelOrder&&s.handleCancelOrder(...e))},"取消订单"),(0,a._)("div",{class:"tips__btn",onClick:t[2]||(t[2]=(...e)=>s.handleConfirmOrder&&s.handleConfirmOrder(...e))},"确认支付")])])])):(0,a.kq)("",!0),s.toastInfo.show?((0,a.wg)(),(0,a.j4)(d,{key:1,message:s.toastInfo.message},null,8,["message"])):(0,a.kq)("",!0)],64)}c(7658);var R=c(4870),Y=c(6391),E=c(1090),G={name:"Order",components:{Toast:E.Z},setup(e,{emit:t}){const c=(0,_.tv)(),a=(0,z.aH)(),s=(0,z.jw)(),n=(0,R.iH)(!1);let r=0;for(const _ in s){const e=s[_];e.check&&(r+=e.price*e.count)}const{toastInfo:d,showToast:o}=(0,E.S)(),i=()=>{n.value=!0},l=()=>{n.value=!1},{cleanCartProducts:p}=(0,z.rs)(),u=async()=>{const e=(0,z.dO)(),t=[];for(const c in s){const e=s[c];t.push({id:Number(e._id),num:e.count})}try{const s=await(0,Y.v)("/api/order",{addressId:1,shopId:a,shopName:e,isCanceled:!1,products:t});if(0!==s.errno)return o(s.desc);p(a),c.push("/")}catch(n){o(n.message)}};return{price:r.toFixed(2),toastInfo:d,tipsConfirm:n,handleSubmitOrder:i,handleCancelOrder:l,handleConfirmOrder:u}}};const K=(0,p.Z)(G,[["render",F],["__scopeId","data-v-12f36b3e"]]);var M=K,J={name:"OrderConfirmation",components:{TopArea:f,ProductList:T,Order:M}};const Q=(0,p.Z)(J,[["render",n],["__scopeId","data-v-483e93cc"]]);var V=Q}}]);
//# sourceMappingURL=orderConfirmation.d3324e25.js.map