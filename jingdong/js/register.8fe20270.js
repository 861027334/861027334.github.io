"use strict";(self["webpackChunkjingdong"]=self["webpackChunkjingdong"]||[]).push([[685],{9528:function(e,s,n){n.r(s),n.d(s,{default:function(){return f}});var r=n(3396),a=n(9242);const o=e=>((0,r.dD)("data-v-28751c5e"),e=e(),(0,r.Cn)(),e),t={class:"wrapper"},p=o((()=>(0,r._)("img",{class:"wrapper__img",src:"http://www.dell-lee.com/imgs/vue3/user.png",alt:""},null,-1))),l={class:"wrapper__link"};function i(e,s,n,o,i,u){const c=(0,r.up)("Toast");return(0,r.wg)(),(0,r.iD)("div",t,[p,(0,r.wy)((0,r._)("input",{class:"wrapper__input",type:"text",placeholder:"请输入用户名","onUpdate:modelValue":s[0]||(s[0]=s=>e.username=s)},null,512),[[a.nr,e.username]]),(0,r.wy)((0,r._)("input",{class:"wrapper__input",type:"password",placeholder:"请输入密码","onUpdate:modelValue":s[1]||(s[1]=s=>e.password=s)},null,512),[[a.nr,e.password]]),(0,r.wy)((0,r._)("input",{class:"wrapper__input",type:"password",placeholder:"确认密码","onUpdate:modelValue":s[2]||(s[2]=s=>e.confirm=s)},null,512),[[a.nr,e.confirm]]),(0,r._)("div",{class:"wrapper__register",onClick:s[3]||(s[3]=(...e)=>o.handleRegister&&o.handleRegister(...e))},"注册"),(0,r._)("div",l,[(0,r._)("span",{onClick:s[4]||(s[4]=(...e)=>o.handleToLoginClick&&o.handleToLoginClick(...e))},"已有账号去登陆")]),o.toastInfo.show?((0,r.wg)(),(0,r.j4)(c,{key:0,message:o.toastInfo.message},null,8,["message"])):(0,r.kq)("",!0)])}n(7658);var u=n(4870),c=n(2483),d=n(6391),w=n(7010),g={name:"RegisterView",components:{Toast:w.Z},setup(){const e=(0,c.tv)(),s=(0,u.qj)({username:"",password:"",confirm:""}),{toastInfo:n,showToast:r}=(0,w.S)(),a=async()=>{if(!s.username)return r("用户名不能为空");if(!s.password)return r("密码不能为空");if(!s.confirm)return r("请确认密码");if(s.password!==s.confirm)return r("密码不一致");try{const n=await(0,d.v)("/api/user/register",{username:s.username,password:s.password});if(0!==n?.errno)return r(n.desc);e.push("/login")}catch(n){r(n.message)}},o=()=>{e.push("/login")};return{...(0,u.BK)(s),toastInfo:n,handleRegister:a,handleToLoginClick:o}}},m=n(89);const _=(0,m.Z)(g,[["render",i],["__scopeId","data-v-28751c5e"]]);var f=_}}]);
//# sourceMappingURL=register.8fe20270.js.map