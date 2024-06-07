import{K as F,r as o,l as t,o as I,a as j,b as n,c as G,d as u,n as p,f as s,g as m,u as C,i as M,j as U,t as h,k as z,h as l,s as P,x as S,F as V,p as H,C as K,m as $}from"./app-d8ea3ead.js";import{f as q,G as J,a as O,b as Q,c as W,d as X,e as Y,A as Z,L as ss}from"./AppLayout-a0a6f737.js";import{S as es}from"./sweetalert2.all-0277b68c.js";import"./vue-multiselect.esm-0bbce239.js";import"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js";import"./_plugin-vue_export-helper-c27b6911.js";const as={class:"header pb-6"},os={class:"container-fluid"},ts={class:"header-body row"},ns={class:"col-lg-8 align-items-center py-4"},rs=s("h6",{class:"h2 text-dark d-inline-block mb-0"},"Role Management",-1),is={"aria-label":"breadcrumb",class:"d-none d-md-block"},ls={class:"breadcrumb breadcrumb-links breadcrumb-dark"},cs={class:"breadcrumb-item"},ds={class:"breadcrumb-item"},us={class:"breadcrumb-item active text-maroon","aria-current":"page"},ms={class:"row"},_s={class:"col-lg-12"},ps={class:"card shadow"},fs={class:"card-body pt-2 mt-3"},hs=["onSubmit"],vs={class:"mb-1 row"},bs={class:"card"},gs={class:"card-body"},ys={class:"card-title"},ks={key:0,class:"list-group-item mb-1"},ws={class:"form-check form-switch"},xs=["id","value"],Cs=["for"],Ms={class:"col-md-12"},Ps={class:"d-flex justify-content-end"},Ss={type:"submit",class:"btn btn-round btn-outline-primary btn-sm mr-1 mb-1"},Vs=s("span",null,"SAVE",-1),Ts={__name:"edit",setup(Rs){const{props:f}=F(),v=o([]),b=o([]),c=o([]),g=o({}),y=o(null),k=o({}),d=o(null),w=()=>{k.value={},y.value=null},R=e=>{if(w(),!(e.response&&e.response.data))return;const{message:_,errors:r}=e.response.data;if(y.value=_,r)for(const i in r)k.value[i]=r[i][0]},B=e=>{es.fire({icon:"success",title:"Success",text:e,toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0})};t.add(q),t.add(J),t.add(O),t.add(Q),t.add(W),t.add(X),t.add(Y);const x=async()=>{p(()=>{d.value.start()}),A(),N(),L(),E(),p(()=>{d.value.finish()})},E=async()=>{const e=(await axios.get(route("permission.group.all"))).data;v.value=e},L=async()=>{const e=(await axios.get(route("permission.list.all"))).data;b.value=e},A=async()=>{const e=(await axios.get(route("role.get",f.roleId))).data;g.value=e},D=async()=>{p(()=>{d.value.start()}),w();try{console.log(c.value),await axios.post(route("permission.role.update",f.roleId),{permissions:c.value}),B("Role Permission Updated Successfully"),x()}catch(e){R(e)}p(()=>{d.value.finish()})},N=async()=>{const e=(await axios.get(route("permission.role.all",f.roleId))).data;c.value=e};return I(()=>{x()}),(e,_)=>{const r=j("font-awesome-icon");return n(),G(Z,{title:"Role Management"},{header:u(()=>[s("div",as,[s("div",os,[s("div",ts,[s("div",ns,[rs,s("nav",is,[s("ol",ls,[s("li",cs,[m(C(M),{href:"/"},{default:u(()=>[m(r,{icon:"fa-solid fa-house",class:"text-maroon"})]),_:1})]),s("li",ds,[m(C(M),{href:"/role",class:"text-maroon"},{default:u(()=>[U(" Role Management ")]),_:1})]),s("li",us,h(g.value.name),1)])])])])])])]),content:u(()=>[s("div",ms,[s("div",_s,[s("div",ps,[s("div",fs,[s("form",{role:"form text-left",onSubmit:z(D,["prevent"])},[s("div",vs,[(n(!0),l(V,null,P(v.value,i=>(n(),l("div",{class:S(["mb-2 col-md-6",e.rowClass]),key:i.group_name},[s("div",bs,[s("div",gs,[s("h5",ys,h(i.group_name),1),(n(!0),l(V,null,P(b.value,a=>(n(),l("ul",{class:S(["list-group",e.list]),key:a.id},[a.group_name==i.group_name?(n(),l("li",ks,[s("div",ws,[H((n(),l("input",{class:"form-check-input mt-0",type:"checkbox","onUpdate:modelValue":_[0]||(_[0]=T=>c.value=T),id:a.name,key:a.name,value:a.name},null,8,xs)),[[K,c.value]]),s("label",{class:"form-check-label",for:a.name},h(a.name),9,Cs)])])):$("",!0)],2))),128))])])],2))),128)),s("div",Ms,[s("div",Ps,[s("button",Ss,[m(r,{icon:["fas","floppy-disk"]}),Vs])])])])],40,hs)])])])])]),loader:u(()=>[m(ss,{ref_key:"loading_bar",ref:d},null,512)]),_:1})}}};export{Ts as default};
