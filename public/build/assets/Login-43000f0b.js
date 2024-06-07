import{B as k,p as w,C as x,b as n,h as b,T as y,c,d as i,g as o,u as s,Z as v,t as V,m as u,f as r,i as B,j as p,x as C,k as $}from"./app-d8ea3ead.js";import{_ as N}from"./GuestLayout-0e9ae46d.js";import{_ as f,a as _,b as g}from"./TextInput-37b1bc87.js";import{_ as q}from"./PrimaryButton-6f1dee2a.js";import"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js";import"./ApplicationLogo-39161510.js";import"./_plugin-vue_export-helper-c27b6911.js";const S=["value"],U={__name:"Checkbox",props:{checked:{type:[Array,Boolean],required:!0},value:{default:null}},emits:["update:checked"],setup(l,{emit:e}){const d=l,m=k({get(){return d.checked},set(t){e("update:checked",t)}});return(t,a)=>w((n(),b("input",{type:"checkbox",value:l.value,"onUpdate:modelValue":a[0]||(a[0]=h=>m.value=h),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"},null,8,S)),[[x,m.value]])}},L={key:0,class:"mb-4 font-medium text-sm text-green-600"},P=["onSubmit"],R={class:"mt-4"},j={class:"block mt-4"},D={class:"flex items-center"},E=r("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),F={class:"flex items-center justify-end mt-4"},Z={__name:"Login",props:{canResetPassword:{type:Boolean},status:{type:String}},setup(l){const e=y({email:"",password:"",remember:!1}),d=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(m,t)=>(n(),c(N,null,{default:i(()=>[o(s(v),{title:"Log in"}),l.status?(n(),b("div",L,V(l.status),1)):u("",!0),r("form",{onSubmit:$(d,["prevent"])},[r("div",null,[o(f,{for:"email",value:"Email"}),o(_,{id:"email",type:"email",class:"mt-1 block w-full form-control form-control-sm",modelValue:s(e).email,"onUpdate:modelValue":t[0]||(t[0]=a=>s(e).email=a),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(g,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),r("div",R,[o(f,{for:"password",value:"Password"}),o(_,{id:"password",type:"password",class:"mt-1 block w-full form-control form-control-sm",modelValue:s(e).password,"onUpdate:modelValue":t[1]||(t[1]=a=>s(e).password=a),required:"",autocomplete:"current-password"},null,8,["modelValue"]),o(g,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),r("div",j,[r("label",D,[o(U,{name:"remember",checked:s(e).remember,"onUpdate:checked":t[2]||(t[2]=a=>s(e).remember=a)},null,8,["checked"]),E])]),r("div",F,[l.canResetPassword?(n(),c(s(B),{key:0,href:m.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900",style:{color:"rgba(0, 0, 0, 0.743)"}},{default:i(()=>[p(" Forgot your password? ")]),_:1},8,["href"])):u("",!0),o(q,{class:C(["ml-auto",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:i(()=>[p(" LOG IN ")]),_:1},8,["class","disabled"])])],40,P)]),_:1}))}};export{Z as default};