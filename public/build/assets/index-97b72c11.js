import{l as f,r as o,w as H,o as ie,a as ce,b as l,c as _e,d as x,n as w,e as L,f as e,g as m,u as I,i as ue,k,j as P,p as b,v as S,q as W,h as n,s as B,t as i,F as A,x as d,m as v}from"./app-d8ea3ead.js";import{f as me,a as ve,b as pe,c as he,d as fe,e as be,A as ge,L as ye}from"./AppLayout-a0a6f737.js";import{S as Y}from"./sweetalert2.all-0277b68c.js";import{s as z}from"./vue-multiselect.esm-0bbce239.js";import"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js";import"./_plugin-vue_export-helper-c27b6911.js";const xe={class:"header pb-6"},we={class:"container-fluid"},ke={class:"header-body row"},Ce={class:"col-lg-8 align-items-center py-4"},Ue=e("h6",{class:"h2 text-maroon d-inline-block mb-0"}," User Management",-1),Ee={"aria-label":"breadcrumb",class:"d-none d-md-block"},Te={class:"breadcrumb breadcrumb-links breadcrumb-dark"},Ve={class:"breadcrumb-item"},Se=e("li",{class:"breadcrumb-item active breadcrumb-yellow","aria-current":"page"}," User Management ",-1),Ae={class:"col-lg-4 text-right py-4"},Me=["onClick"],Ne={class:"row"},Le={class:"col-lg-12"},Ie={class:"card shadow"},Pe={class:"pb-3 filters-margin mx-2 text-sm card-body"},Be={class:"row mb-2 mx-1"},De={class:"col-md-3 column__left___padding column__right___padding"},Fe=e("div",{for:"purchase_uom",class:"col-form-label"},"ACCOUNT STATUS ",-1),Re={class:"col-md-3 column__left___padding column__right___padding"},$e=e("div",{for:"purchase_uom",class:"col-form-label"},"USER TYPE ",-1),je={class:"col-md-4 column__left___padding column__right___padding"},qe=e("div",{for:"purchase_uom",class:"col-form-label"},"NAME",-1),Oe={class:"col-md-1 mt-4 column__left___padding column__right___padding"},He=["onClick"],We={class:"col-md-1 mt-4 column__left___padding column__right___padding p-0"},Ye={class:"d-flex justify-content-end",style:{"margin-top":"10px"}},ze={class:"inline-block mx-2"},Ke=["value","textContent"],Xe={class:"row mx-4"},Ge={class:"table-responsive"},Je={class:"table"},Qe=["onClick"],Ze={key:0,class:"badge badge-danger"},es={key:1,class:"badge badge-success"},ss={key:0},ts={key:1},as={class:"flex mt-1 px-3 mx-1 card-footer table-footer align-items-center"},os={class:"col-sm-12 col-md-6 p-0"},ls={class:"dataTables_info column__left___padding",id:"DataTables_Table_0_info",role:"status","aria-live":"polite"},ns={class:"col-sm-12 col-md-6 p-0"},rs={class:"dataTables_paginate paging_simple_numbers column__right___padding",id:"DataTables_Table_0_paginate"},ds={"aria-label":"Page navigation",style:{float:"right"}},is={class:"pagination"},cs=e("i",{class:"fa-solid fa-angles-left"},null,-1),_s=[cs],us=["onClick"],ms=e("i",{class:"fa-solid fa-angles-right"},null,-1),vs=[ms],ps={class:"modal fade",id:"newUserModal","data-backdrop":"static",tabindex:"-1",role:"dialog","aria-labelledby":"newUserModal","aria-hidden":"true"},hs={class:"modal-dialog modal-dialog-centered modal-md",role:"document"},fs={class:"modal-content"},bs={class:"modal-header"},gs=e("h5",{class:"modal-title font-weight-bolder breadcrumb-yellow text-gradient title_modal",id:"add_brandLabel"}," NEW USER",-1),ys={type:"button",class:"close btn","data-dismiss":"modal","aria-label":"Close"},xs={"aria-hidden":"true"},ws={class:"modal-body p-3"},ks=["onSubmit"],Cs={class:"row mb-1"},Us=e("div",{for:"name",class:"col-md-3 col-form-label"},"NAME",-1),Es={class:"col-md-9"},Ts={key:0,id:"msg_name",class:"text-danger form-text text-error-msg error"},Vs={class:"row mb-1"},Ss=e("div",{for:"email",class:"col-md-3 col-form-label"},"EMAIL",-1),As={class:"col-md-9"},Ms={key:0,id:"msg_email",class:"text-danger form-text text-error-msg error"},Ns={class:"row mb-1"},Ls=e("div",{for:"password",class:"col-md-3 col-form-label"},"PASSWORD",-1),Is={class:"col-md-9"},Ps={key:0,id:"msg_password",class:"text-danger form-text text-error-msg error"},Bs={class:"row mb-1"},Ds=e("div",{for:"role",class:"col-md-3 col-form-label"},"ROLE",-1),Fs={class:"col-md-9"},Rs=e("option",{value:"1"},"Admin",-1),$s=e("option",{value:"2"},"Entry",-1),js=[Rs,$s],qs={key:0,id:"msg_role",class:"text-danger form-text text-error-msg error"},Os={class:"text-right mt-2"},Hs={type:"submit",class:"btn btn-round btn-outline-primary btn-sm mb-0"},Ws={class:"modal fade",id:"importCategories","data-backdrop":"static",tabindex:"-1",role:"dialog","aria-labelledby":"importCategories","aria-hidden":"true"},Ys={class:"modal-dialog modal-dialog-centered modal-md",role:"document"},zs={class:"modal-content"},Ks={class:"modal-header"},Xs=e("h5",{class:"modal-title font-weight-bolder breadcrumb-yellow text-gradient title_modal",id:"add_brandLabel"}," Import Categories ",-1),Gs={type:"button",class:"close btn","data-dismiss":"modal","aria-label":"Close"},Js={"aria-hidden":"true"},Qs={class:"p-1 modal-body"},Zs={class:"card-plain"},et={key:0,class:"m-2 card-body"},st={class:"mb-1 row"},tt=e("div",{for:"barcode",class:"col-md-12 col-form-label"}," EXCEL FILE ",-1),at={class:"col-md-12"},ot={class:"error"},lt={key:0,class:"mt-1 text-sm text-danger form-text text-error-msg error"},nt={class:"mt-2 text-right"},rt={type:"submit",class:"mb-0 btn btn-outline-primary btn-sm btn-round"},dt={key:1,class:"m-2 card-body"},it=e("div",{class:"loading"},[e("div",{class:"loading-text"},[e("div",{class:"spinner-border text-primary",role:"status"},[e("span",{class:"sr-only"},"Loading...")]),e("div",{class:"text-primary"},"Uploading...")])],-1),ct=[it],gt={__name:"index",setup(_t){f.add(me),f.add(ve),f.add(pe),f.add(he),f.add(fe),f.add(be);const C=o("text-start text-uppercase");o("text-center text-uppercase");const U=o("text-start");o("text-center");const K=o("text-center"),X=o("text-center"),G=o("cursor-pointer"),D=o(null),F=o(1),J=o([25,50,100]),E=o(25),r=o({}),_=o({}),M=o([]);o({});const Q=o(0),Z=o(null),p=o({}),g=o(null),ee=o([{value:2,name:"ACTIVE"},{value:1,name:"INACTIVE"}]),y=o(null),se=o([{value:2,name:"ENTRY"},{value:1,name:"ADMIN"}]),R=o(null),c=o({}),h=o(null),T=()=>{c.value={},R.value=null},j=t=>{if(T(),!(t.response&&t.response.data))return;const{message:a}=t.response.data;ae(a)},q=t=>{if(T(),!(t.response&&t.response.data))return;const{message:a,errors:u}=t.response.data;if(R.value=a,u)for(const s in u)c.value[s]=u[s][0]},te=t=>{Y.fire({icon:"success",title:"Success",text:t,toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0})},ae=t=>{Y.fire({icon:"error",title:"Oops...",text:t,toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0})},oe=async()=>{w(()=>{h.value.start()});try{const t=(await L.get(route("user.all"))).data;M.value=t.data,r.value=t.meta,w(()=>{h.value.finish()})}catch(t){q(t),w(()=>{h.value.finish()})}},V=async()=>{w(()=>{h.value.start()});try{const t=(await L.get(route("user.all"),{params:{page:F.value,per_page:E.value,"filter[search]":D.value,search_user_name:p.value.name,search_user_status:p.value.status,search_user_type:p.value.type}})).data;M.value=t.data,r.value=t.meta,w(()=>{h.value.finish()})}catch(t){j(t)}},N=()=>{V()};H(()=>{g.value&&(p.value.status=g.value.value,N()),y.value&&(p.value.type=y.value.value,N())});const le=()=>{p.value={},g.value=null,y.value=null,V()},ne=async()=>{T();try{await L.post(route("user.store"),_.value),V(),$("#newUserModal").modal("hide"),_.value={},te("User created successfully")}catch(t){j(t)}},re=async t=>{T();try{window.location.href=route("user.edit",t)}catch(a){q(a)}},de=()=>{h.value.start(),_.value={},$("#newUserModal").modal("show"),h.value.finish()};return ie(()=>{oe()}),H([D,F,E],()=>{V()}),(t,a)=>{const u=ce("font-awesome-icon");return l(),_e(ge,{title:"User Management"},{header:x(()=>[e("div",xe,[e("div",we,[e("div",ke,[e("div",Ce,[Ue,e("nav",Ee,[e("ol",Te,[e("li",Ve,[m(I(ue),{href:"/"},{default:x(()=>[m(u,{icon:"fa-solid fa-house",class:"text-maroon"})]),_:1})]),Se])])]),e("div",Ae,[e("a",{href:"javascript:void(0)",onClick:k(de,["prevent"]),class:"btn btn-sm btn-neutral float-end text-maroon"},[m(u,{icon:"fa-solid fa-circle-plus"}),P(" ADD NEW ")],8,Me)])])])])]),content:x(()=>[e("div",Ne,[e("div",Le,[e("div",Ie,[e("div",Pe,[e("div",null,[e("div",Be,[e("div",De,[Fe,m(I(z),{modelValue:g.value,"onUpdate:modelValue":a[0]||(a[0]=s=>g.value=s),options:ee.value,showLabels:!1,"close-on-select":!0,"clear-on-select":!1,searchable:!0,placeholder:"Select Account Status",label:"name","track-by":"value"},null,8,["modelValue","options"])]),e("div",Re,[$e,m(I(z),{modelValue:y.value,"onUpdate:modelValue":a[1]||(a[1]=s=>y.value=s),options:se.value,showLabels:!1,"close-on-select":!0,"clear-on-select":!1,searchable:!0,placeholder:"Select User Type",label:"name","track-by":"value"},null,8,["modelValue","options"])]),e("div",je,[qe,b(e("input",{type:"text",class:"form-control form-control-sm",name:"code",id:"code","onUpdate:modelValue":a[2]||(a[2]=s=>p.value.name=s),placeholder:"Name",onKeyup:N},null,544),[[S,p.value.name]])]),e("div",Oe,[e("a",{href:"javascript:void(0)",onClick:k(le,["prevent"]),class:"btn btn-sm btn-ash float-end mt-2 pt-2"}," CLEAR ",8,He)]),e("div",We,[e("div",Ye,[e("div",ze,[b(e("select",{class:"form-control form-control-sm per-page-entry",value:25,"onUpdate:modelValue":a[3]||(a[3]=s=>E.value=s),onChange:a[4]||(a[4]=(...s)=>t.perPageChange&&t.perPageChange(...s))},[(l(!0),n(A,null,B(J.value,s=>(l(),n("option",{key:s,value:s,textContent:i(s)},null,8,Ke))),128))],544),[[W,E.value]])])])])])])]),e("div",Xe,[e("div",Ge,[e("table",Je,[e("thead",null,[e("tr",null,[e("th",{class:d(K.value),style:{width:"120px"}},"STATUS",2),e("th",{class:d(C.value)},"User Type",2),e("th",{class:d(C.value)},"Name",2),e("th",{class:d(C.value)},"Email",2),e("th",{class:d(C.value)},"Contact Number",2)])]),e("tbody",null,[(l(!0),n(A,null,B(M.value,s=>(l(),n("tr",{key:s.id,class:d(G.value),onClick:k(O=>re(s.id),["prevent"])},[e("td",{class:d(X.value)},[s.deleted_at!=null?(l(),n("span",Ze,"INACTIVE")):v("",!0),s.deleted_at==null?(l(),n("span",es,"ACTIVE")):v("",!0)],2),e("td",{class:d(U.value)},[s.role==1?(l(),n("span",ss,"Admin")):v("",!0),s.role==2?(l(),n("span",ts,"Entry")):v("",!0)],2),e("td",{class:d(U.value)},i(s.name),3),e("td",{class:d(U.value)},i(s.email),3),e("td",{class:d(U.value)},i(s.telephone),3)],10,Qe))),128))])])])]),e("div",as,[e("div",os,[e("div",ls," Showing "+i(r.value.from)+" to "+i(r.value.to)+" of "+i(r.value.total)+" entries ",1)]),e("div",ns,[e("div",rs,[e("nav",ds,[e("ul",is,[e("li",{class:d(["page-item",r.value.current_page==1?"disabled":""])},[e("a",{class:"page-link",href:"javascript:void(0)",onClick:a[5]||(a[5]=s=>t.setPage(r.value.current_page-1))},_s)],2),(l(!0),n(A,null,B(r.value.last_page,(s,O)=>(l(),n(A,null,[s==1||s==r.value.last_page||Math.abs(s-r.value.current_page)<5?(l(),n("li",{class:d(["page-item",r.value.current_page==s?"active":""]),key:O},[e("a",{class:"page-link",onClick:ut=>t.setPage(s)},i(s),9,us)],2)):v("",!0)],64))),256)),e("li",{class:d(["page-item",r.value.current_page==r.value.last_page?"disabled":""])},[e("a",{class:"page-link",href:"javascript:void(0)",onClick:a[6]||(a[6]=s=>t.setPage(r.value.current_page+1))},vs)],2)])])])])])])])])]),modals:x(()=>[e("div",ps,[e("div",hs,[e("div",fs,[e("div",bs,[gs,e("button",ys,[e("span",xs,[m(u,{icon:"fa-solid fa-xmark"})])])]),e("div",ws,[e("form",{role:"form text-left",onSubmit:k(ne,["prevent"]),enctype:"multipart/form-data"},[e("div",Cs,[Us,e("div",Es,[b(e("input",{type:"text",class:"form-control form-control-sm",name:"name",id:"name","onUpdate:modelValue":a[7]||(a[7]=s=>_.value.name=s),placeholder:"Name",required:""},null,512),[[S,_.value.name]]),c.value.name?(l(),n("small",Ts,i(c.value.name),1)):v("",!0)])]),e("div",Vs,[Ss,e("div",As,[b(e("input",{type:"text",class:"form-control form-control-sm",name:"email",id:"email","onUpdate:modelValue":a[8]||(a[8]=s=>_.value.email=s),placeholder:"Email Address",required:""},null,512),[[S,_.value.email]]),c.value.email?(l(),n("small",Ms,i(c.value.email),1)):v("",!0)])]),e("div",Ns,[Ls,e("div",Is,[b(e("input",{type:"password",class:"form-control form-control-sm",name:"password",id:"password","onUpdate:modelValue":a[9]||(a[9]=s=>_.value.password=s),placeholder:"Password",required:""},null,512),[[S,_.value.password]]),c.value.password?(l(),n("small",Ps,i(c.value.password),1)):v("",!0)])]),e("div",Bs,[Ds,e("div",Fs,[b(e("select",{class:"form-control form-control-sm select-cal_type","onUpdate:modelValue":a[10]||(a[10]=s=>_.value.role=s),name:"type",id:"type"},js,512),[[W,_.value.role]]),c.value.role?(l(),n("small",qs,i(c.value.role),1)):v("",!0)])]),e("div",Os,[e("button",Hs,[m(u,{icon:"fa-solid fa-floppy-disk"}),P(" CREATE ")])])],40,ks)])])])]),e("div",Ws,[e("div",Ys,[e("div",zs,[e("div",Ks,[Xs,e("button",Gs,[e("span",Js,[m(u,{icon:"fa-solid fa-xmark"})])])]),e("div",Qs,[e("div",Zs,[Q.value==0?(l(),n("div",et,[e("form",{role:"form text-left",onSubmit:a[12]||(a[12]=k((...s)=>t.importCategoriesFile&&t.importCategoriesFile(...s),["prevent"])),enctype:"multipart/form-data"},[e("div",st,[tt,e("div",at,[e("input",{type:"file",ref:"file",class:"form-control form-control-sm",onInput:a[11]||(a[11]=s=>Z.value=s.target.files[0])},null,544),e("div",ot,[c.value.user_file?(l(),n("small",lt,i(c.value.user_file),1)):v("",!0)])])]),e("div",nt,[e("button",rt,[m(u,{icon:"fa-solid fa-floppy-disk"}),P(" SUBMIT ")])])],32)])):(l(),n("div",dt,ct))])])])])])]),loader:x(()=>[m(ye,{ref_key:"loading_bar",ref:h},null,512)]),_:1})}}};export{gt as default};
