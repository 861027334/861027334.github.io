"use strict";(self["webpackChunkjingdong"]=self["webpackChunkjingdong"]||[]).push([[535],{5211:function(e,s,a){a.r(s),a.d(s,{default:function(){return k}});var n=a(3396),r=a(9242);const t=e=>((0,n.dD)("data-v-139a6066"),e=e(),(0,n.Cn)(),e),o={class:"wrapper"},l=t((()=>(0,n._)("img",{class:"wrapper__img",src:"http://www.dell-lee.com/imgs/vue3/user.png",alt:""},null,-1))),p={class:"wrapper__link"},u=t((()=>(0,n._)("span",null,"立即注册",-1))),i=t((()=>(0,n._)("span",{class:"wrapper__link__gap"},"|",-1))),d=t((()=>(0,n._)("span",null,"忘记密码",-1)));function c(e,s,a,t,c,w){const _=(0,n.up)("router-link"),g=(0,n.up)("Toast");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",o,[l,(0,n.wy)((0,n._)("input",{class:"wrapper__input",type:"text",placeholder:"请输入用户名","onUpdate:modelValue":s[0]||(s[0]=s=>e.username=s)},null,512),[[r.nr,e.username]]),(0,n.wy)((0,n._)("input",{class:"wrapper__input",type:"password",placeholder:"请输入密码","onUpdate:modelValue":s[1]||(s[1]=s=>e.password=s)},null,512),[[r.nr,e.password]]),(0,n._)("div",{class:"wrapper__login",onClick:s[2]||(s[2]=(...e)=>t.handleLogin&&t.handleLogin(...e))},"登录"),(0,n._)("div",p,[(0,n.Wm)(_,{to:"/register"},{default:(0,n.w5)((()=>[u])),_:1}),i,d])]),t.toastInfo.show?((0,n.wg)(),(0,n.j4)(g,{key:0,message:t.toastInfo.message},null,8,["message"])):(0,n.kq)("",!0)],64)}a(7658);var w=a(4870),_=a(2483),g=a(6391),m=a(1090),f={name:"Login",components:{Toast:m.Z},setup(){const e=(0,_.tv)(),s=(0,w.qj)({username:"",password:""}),{toastInfo:a,showToast:n}=(0,m.S)(),r=async()=>{if(!s.username)return n("用户名不能为空");if(!s.password)return n("密码不能为空");try{const a=await(0,g.v)("/api/user/login",{username:s.username,password:s.password});if(0!==a?.errno)return n(a.desc);localStorage.setItem("loginTime",(new Date).getTime()),e.push("/")}catch(a){n(a.message)}};return{...(0,w.BK)(s),toastInfo:a,handleLogin:r}}},h=a(89);const v=(0,h.Z)(f,[["render",c],["__scopeId","data-v-139a6066"]]);var k=v}}]);
//# sourceMappingURL=login.deee31fa.js.map