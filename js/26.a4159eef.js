"use strict";(globalThis["webpackChunkq_spell"]=globalThis["webpackChunkq_spell"]||[]).push([[26],{5026:(e,t,l)=>{l.r(t),l.d(t,{default:()=>_});var a=l(9835);const s={class:"q-pa-md"},n={class:"q-pa-md"},o={class:"btn-group"};function u(e,t,l,u,r,m){const i=(0,a.up)("q-input"),d=(0,a.up)("q-btn"),c=(0,a.up)("q-form"),p=(0,a.up)("router-link"),h=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(h,{class:"flex flex-center"},{default:(0,a.w5)((()=>[(0,a._)("div",s,[(0,a.Wm)(c,{onSubmit:e.submit,onReset:e.reset,class:"q-gutter-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{filled:"",modelValue:e.name,"onUpdate:modelValue":t[0]||(t[0]=t=>e.name=t),label:"您的大名/法名 *",hint:"","lazy-rules":"",rules:[e=>e&&e.length>0||"請輪入"]},null,8,["modelValue","rules"]),(0,a.Wm)(i,{filled:"",type:"text",modelValue:e.say,"onUpdate:modelValue":t[1]||(t[1]=t=>e.say=t),label:"您今天念了什麼咒 *","lazy-rules":"",rules:[e=>e&&e.length>0||"請輪入"]},null,8,["modelValue","rules"]),(0,a._)("div",null,[(0,a.Wm)(d,{label:"登入!",type:"submit",color:"primary"}),(0,a.Wm)(d,{label:"重設",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])])),_:1},8,["onSubmit","onReset"])]),(0,a._)("div",n,[(0,a._)("div",o,[(0,a.Wm)(p,{class:"btn",to:"/light"},{default:(0,a.w5)((()=>[(0,a.Uk)("光明真言")])),_:1}),(0,a.Wm)(p,{class:"btn",to:"/ten"},{default:(0,a.w5)((()=>[(0,a.Uk)("十小咒")])),_:1}),(0,a.Wm)(p,{class:"btn",to:"/dabei"},{default:(0,a.w5)((()=>[(0,a.Uk)("大悲咒")])),_:1}),(0,a.Wm)(p,{class:"btn",to:"/lengyan"},{default:(0,a.w5)((()=>[(0,a.Uk)("楞嚴咒")])),_:1}),(0,a.Wm)(p,{class:"btn",to:"/three"},{default:(0,a.w5)((()=>[(0,a.Uk)("三皈依")])),_:1}),(0,a.Wm)(p,{class:"btn",to:"/bell"},{default:(0,a.w5)((()=>[(0,a.Uk)("叩鐘")])),_:1}),(0,a.Wm)(p,{class:"btn",to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("回首頁")])),_:1})])])])),_:1})}l(9665);var r=l(9187);l(9550);const m=(0,a.aZ)({name:"IndexPage",data(){return{showA:!1,showB:!0,showC:!0,name:"",date:(new Date).getFullYear()+"/"+parseInt(1+(new Date).getMonth())+"/"+(new Date).getDate(),say:"",spells:[],loading:!1}},methods:{st(e){var t=[...e];return t.sort((function(e,t){return t.time-e.time})),t},submit(){r.Z.firestore().collection("spells").add({name:this.name,date:this.date,time:(new Date).getTime(),say:this.say}),this.getData()},reset(){this.name="",this.say=""},getData(){console.log("aaa"),this.loading=!0,this.spells=[];let e=r.Z.firestore().collection("spells");e.get().then((e=>{e.forEach((e=>{this.spells.push(e.data())})),this.loading=!1})).catch((e=>console.error(e)))}},mounted(){this.getData()}});var i=l(1639),d=l(9885),c=l(7065),p=l(2857),h=l(8326),b=l(1169),g=l(9984),f=l.n(g);const w=(0,i.Z)(m,[["render",u]]),_=w;f()(m,"components",{QPage:d.Z,QBtn:c.Z,QIcon:p.Z,QForm:h.Z,QInput:b.Z})}}]);