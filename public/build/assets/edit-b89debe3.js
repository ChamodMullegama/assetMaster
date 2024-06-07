import{K as At,l as g,r as o,w as nt,o as St,a as Bt,b as l,c as Et,d as A,n as I,e as m,f as t,g as h,u as G,i as it,j as S,t as d,k as y,p as k,v as B,h as n,m as r,q as ct,s as E,F as x,x as c}from"./app-d8ea3ead.js";import{f as Mt,a as Nt,b as Dt,c as Vt,d as It,e as jt,H as Lt,I as Rt,J as Ut,A as Ot,L as $t}from"./AppLayout-a0a6f737.js";import{S as M}from"./sweetalert2.all-0277b68c.js";import{s as dt}from"./vue-multiselect.esm-0bbce239.js";import"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js";import"./_plugin-vue_export-helper-c27b6911.js";const Gt={class:"header pb-6"},Pt={class:"container-fluid"},Ht={class:"header-body row"},Yt={class:"col-lg-8 align-items-center py-4"},qt=t("h6",{class:"h2 text-maroon d-inline-block mb-0"}," Task Management",-1),Qt={"aria-label":"breadcrumb",class:"d-none d-md-block"},Ft={class:"breadcrumb breadcrumb-links breadcrumb-dark"},Jt={class:"breadcrumb-item"},Kt={class:"breadcrumb-item"},Xt={class:"breadcrumb-item active text-maroon","aria-current":"page"},zt=t("div",{class:"col-lg-4 text-right py-4"},null,-1),Wt={class:"row my-2 mx-2"},Zt=t("div",{class:"col-lg-2 col-md-2"},[t("div",{class:"nav-wrapper-loc"},[t("ul",{class:"nav nav-pills nav-fill flex-column",id:"tabs-icons-text",role:"tablist"},[t("li",{class:"mb-2 nav-item"},[t("a",{class:"nav-link active font-weight-400",id:"customer-data-tab","data-toggle":"tab",href:"#customer-data",role:"tab","aria-controls":"customer-data","aria-selected":"true"}," Basic Data")]),t("li",{class:"mb-2 nav-item"},[t("a",{class:"nav-link font-weight-400",id:"asset-data-tab","data-toggle":"tab",href:"#asset-data",role:"tab","aria-controls":"asset-data","aria-selected":"true"}," Task Assets")]),t("li",{class:"mb-2 nav-item"},[t("a",{class:"nav-link font-weight-400",id:"summery-data-tab","data-toggle":"tab",href:"#summery-data",role:"tab","aria-controls":"summery-data","aria-selected":"true"}," Summary")]),t("li",{hidden:""})])])],-1),te={class:"col-lg-10 col-md-10"},ee={class:"shadow card"},ae={class:"card-body"},se={class:"tab-content",id:"myTabContent"},oe={class:"tab-pane fade show active",id:"customer-data",role:"tabpanel"},le={class:""},ne=t("div",{class:"mt-2 mx-2"},[t("div",{class:"row mt-0"},[t("div",{class:"h3 col-12 text-dark"}," Basic Data ")])],-1),ie={class:"card-body px-2"},ce=["onSubmit"],de={class:"row mb-1"},re=t("div",{for:"title",class:"col-md-3 col-form-label"},"TITLE",-1),ue={class:"col-md-9"},_e=["disabled"],me={key:0,id:"title",class:"text-danger form-text text-error-msg error"},ve={class:"row mb-1"},he=t("div",{for:"location_id",class:"col-md-3 col-form-label"},"LOCATION",-1),pe={class:"col-md-9"},fe={key:0,id:"location_id",class:"text-danger form-text text-error-msg error"},ge={class:"row mb-1"},be=t("div",{for:"category_id",class:"col-md-3 col-form-label"},"CATEGORY",-1),ye={class:"col-md-9"},ke={key:0,id:"category_id",class:"text-danger form-text text-error-msg error"},xe={class:"row mb-1"},Ce=t("div",{for:"exp_date",class:"col-md-3 col-form-label"},"EXP DATE",-1),we={class:"col-md-9"},Te=["disabled"],Ae={key:0,id:"exp_date",class:"text-danger form-text text-error-msg error"},Se={class:"text-right mt-2"},Be=["onClick"],Ee=["onClick"],Me=["onClick"],Ne=["onClick"],De={key:4,type:"submit",class:"btn btn-round btn-outline-success btn-sm mb-0"},Ve={class:"tab-pane fade show",id:"asset-data",role:"tabpanel"},Ie={class:""},je={class:""},Le={class:"row mt-2 mx-0 pb-0"},Re={class:"col-lg-12 text-right py-1"},Ue=["onClick"],Oe={class:""},$e={class:"row"},Ge={class:"col-lg-12"},Pe={class:"row mb-2 mx-2"},He={class:"col-md-2 column__left___padding column__right___padding"},Ye=t("div",{for:"purchase_uom",class:"col-form-label"},"STATUS ",-1),qe={class:"col-md-3 column__left___padding column__right___padding"},Qe=t("div",{for:"purchase_uom",class:"col-form-label"},"QR CODE",-1),Fe={class:"col-md-3 column__left___padding column__right___padding"},Je=t("div",{for:"purchase_uom",class:"col-form-label"},"CATEGORY ",-1),Ke={class:"col-md-2 mt-4 column__left___padding"},Xe=["onClick"],ze=t("div",{class:"col-md-1 mt-4 column__left___padding"},null,-1),We={class:"col-md-1 mt-4 column__left___padding column__right___padding p-0"},Ze={class:"d-flex justify-content-end mt-2"},ta={class:"inline-block mx-2"},ea=["value","textContent"],aa={class:"row mx-2"},sa={class:"table-responsive"},oa={class:"table"},la={key:0,class:"badge badge-pill badge-info"},na={key:1,class:"badge badge-pill badge-success"},ia={key:2,class:"badge badge-pill badge-warning"},ca={key:3,class:"badge badge-pill badge-danger"},da={class:"flex mt-1 px-3 mx-1 card-footer table-footer align-items-center"},ra={class:"col-sm-12 col-md-6 p-0"},ua={class:"dataTables_info column__left___padding",id:"DataTables_Table_0_info",role:"status","aria-live":"polite"},_a={class:"col-sm-12 col-md-6 p-0"},ma={class:"dataTables_paginate paging_simple_numbers column__right___padding",id:"DataTables_Table_0_paginate"},va={"aria-label":"Page navigation",style:{float:"right"}},ha={class:"pagination"},pa=t("i",{class:"fa-solid fa-angles-left"},null,-1),fa=[pa],ga=["onClick"],ba=t("i",{class:"fa-solid fa-angles-right"},null,-1),ya=[ba],ka={class:"tab-pane fade show",id:"summery-data",role:"tabpanel"},xa={class:""},Ca={class:"row"},wa={class:"col-lg-12"},Ta={class:"row mb-2 mx-2"},Aa=t("div",{class:"col-md-11 mt-4 column__left___padding column__right___padding p-0"},null,-1),Sa={class:"col-md-1 column__left___padding column__right___padding p-0"},Ba={class:"d-flex justify-content-end mt-2"},Ea={class:"inline-block mx-2"},Ma=["value","textContent"],Na={class:"row mx-2"},Da={class:"table-responsive"},Va={class:"table"},Ia={class:"flex mt-1 px-3 mx-1 table-footer align-items-center"},ja={class:"col-sm-12 col-md-6 p-0"},La={class:"dataTables_info column__left___padding",id:"DataTables_Table_0_info",role:"status","aria-live":"polite"},Ra={class:"col-sm-12 col-md-6 p-0"},Ua={class:"dataTables_paginate paging_simple_numbers column__right___padding",id:"DataTables_Table_0_paginate"},Oa={"aria-label":"Page navigation",style:{float:"right"}},$a={class:"pagination"},Ga=t("i",{class:"fa-solid fa-angles-left"},null,-1),Pa=[Ga],Ha=["onClick"],Ya=t("i",{class:"fa-solid fa-angles-right"},null,-1),qa=[Ya],Qa={class:"modal fade",id:"newTaskAssetModal","data-backdrop":"static",tabindex:"-1",role:"dialog","aria-labelledby":"newTaskAssetModal","aria-hidden":"true"},Fa={class:"modal-dialog modal-dialog-centered modal-md",role:"document"},Ja={class:"modal-content"},Ka={class:"modal-header"},Xa=t("h5",{class:"modal-title font-weight-bolder breadcrumb-yellow text-gradient title_modal",id:"add_brandLabel"}," SCAN ASSET",-1),za={type:"button",class:"close btn","data-dismiss":"modal","aria-label":"Close"},Wa={"aria-hidden":"true"},Za={class:"modal-body pb-2 pt-0"},ts={class:""},es={class:""},as=["onSubmit"],ss={class:"row mb-1"},os=t("div",{for:"barcode",class:"col-md-3 col-form-label"},"QR Code",-1),ls={class:"col-md-9"},ns={key:0,id:"msg_barcode",class:"text-danger form-text text-error-msg error"},is=t("div",{class:"text-right mt-2"},[t("button",{type:"submit",class:"btn btn-round btn-outline-primary btn-sm mb-0"}," SCAN ")],-1),hs={__name:"edit",setup(cs){const{props:f}=At();g.add(Mt),g.add(Nt),g.add(Dt),g.add(Vt),g.add(It),g.add(jt),g.add(Lt),g.add(Rt),g.add(Ut);const j=o("text-start text-uppercase");o("text-center text-uppercase");const L=o("text-start");o("text-center");const rt=o("text-center"),ut=o("text-center"),P=o("text-right"),H=o("text-right"),K=o("cursor-pointer"),X=o(null),R=o(1);o(1);const z=o([25,50,100]);o([25,50,100]);const U=o(25),W=o(25),v=o({}),u=o({}),i=o({});o([]);const Z=o([]),_t=o(null),O=o(null),mt=o(null);o([]);const b=o({}),Y=o([]),tt=o([]);o(0),o(null);const N=o({}),D=o(null),vt=o([{value:4,name:"MISSING"},{value:3,name:"CHANGED"},{value:2,name:"SAME"},{value:1,name:"PENDING"}]),ht=o(null),p=o({}),_=o(null),q=()=>{p.value={},ht.value=null},C=e=>{if(q(),!(e.response&&e.response.data))return;const{message:s}=e.response.data;at(s)},et=e=>{M.fire({icon:"success",title:"Success",text:e,toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0})},at=e=>{M.fire({icon:"error",title:"Oops...",text:e,toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0})},V=async()=>{I(()=>{_.value.start()});try{const e=await m.get(route("task.asset.all",f.taskId),{params:{page:R.value,per_page:U.value,"filter[search]":X.value,search_asset_barcode:b.value.inventory_no,search_asset_category:b.value.category,search_asset_status:b.value.status}});Y.value=e.data.data,u.value=e.data.meta,I(()=>{_.value.finish()})}catch(e){C(e)}},pt=async()=>{_.value.start(),q();try{await m.post(route("task.update",f.taskId),i.value),et("Task updated successfully"),_.value.finish()}catch(e){C(e),_.value.finish()}},T=async e=>{R.value=e,V()},Q=()=>{R.value=1,V()},st=async()=>{V()};nt(()=>{const e=O.value;e&&(b.value.category=e.id,Q()),D.value&&(b.value.status=D.value.value,Q())});const ft=()=>{try{M.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#C00202",cancelButtonColor:"#6CA925",confirmButtonText:"Yes, delete it!"}).then(e=>{e.isConfirmed&&m.delete(route("task.delete",f.taskId)).then(s=>{window.location.href=route("task.index")})})}catch(e){C(e)}},gt=()=>{try{M.fire({title:"Are you sure?",text:"Do you want to reject this task ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#C00202",cancelButtonColor:"#6CA925",confirmButtonText:"Yes, Reject it!"}).then(e=>{e.isConfirmed&&m.delete(route("task.reject",f.taskId)).then(s=>{window.location.href=route("task.index")})})}catch(e){C(e)}},bt=()=>{try{M.fire({title:"Are you sure?",text:"Do you want to complete this task ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#C00202",cancelButtonColor:"#6CA925",confirmButtonText:"Yes, Complete it!"}).then(e=>{e.isConfirmed&&m.delete(route("task.complete",f.taskId)).then(s=>{window.location.href=route("task.index")})})}catch(e){C(e)}},yt=()=>{try{M.fire({title:"Are you sure?",text:"Do you want to re-open this task ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#C00202",cancelButtonColor:"#6CA925",confirmButtonText:"Yes, Re-Open it!"}).then(e=>{e.isConfirmed&&m.delete(route("task.reopen",f.taskId)).then(s=>{ot()})})}catch(e){C(e)}},ot=async()=>{try{const e=await m.get(route("task.get",f.taskId));if(i.value=e.data.data,i.value.category_id){const s=await m.get(route("category.get",i.value.category_id));_t.value=s.data.data}if(i.value.location_id){const s=await m.get(route("location.get",i.value.location_id));mt.value=s.data.data}}catch(e){console.error(e.message)}},F=async()=>{I(()=>{_.value.start()});try{const e=await m.get(route("task.asset.all",f.taskId));Y.value=e.data.data,u.value=e.data.meta,I(()=>{_.value.finish()})}catch(e){console.error(e.message),I(()=>{_.value.finish()})}},lt=async()=>{try{const e=await m.get(route("task.summery.all",f.taskId));tt.value=e.data.data,v.value=e.data.meta}catch(e){console.error(e.message)}},kt=async()=>{try{const e=await m.get(route("category.all"));Z.value=e.data.data}catch(e){console.error(e.message)}},xt=()=>{_.value.start(),N.value={},$("#newTaskAssetModal").modal("show"),_.value.finish()},Ct=async()=>{_.value.start(),q();try{const e=await m.post(route("task.asset.check",f.taskId),N.value);console.log(e.data),e.data?($("#newTaskAssetModal").modal("hide"),at("The asset is already scanned")):(await m.post(route("asset.task.store",N.value.barcode),i.value),F(),$("#newTaskAssetModal").modal("hide"),et("Asset scanned successfully"),F(),lt(),_.value.finish())}catch(e){C(e),_.value.finish()}},wt=()=>{b.value={},O.value=null,D.value=null,V()};return St(()=>{ot(),F(),lt(),kt()}),nt([X,R,U],()=>{V()}),(e,s)=>{const w=Bt("font-awesome-icon");return l(),Et(Ot,{title:"Task Management"},{header:A(()=>[t("div",Gt,[t("div",Pt,[t("div",Ht,[t("div",Yt,[qt,t("nav",Qt,[t("ol",Ft,[t("li",Jt,[h(G(it),{href:"/"},{default:A(()=>[h(w,{icon:"fa-solid fa-house",class:"text-maroon"})]),_:1})]),t("li",Kt,[h(G(it),{href:"/tasks",class:"text-maroon"},{default:A(()=>[S(" Task Management ")]),_:1})]),t("li",Xt,d(i.value.title),1)])])]),zt])])])]),content:A(()=>[t("div",Wt,[Zt,t("div",te,[t("div",ee,[t("div",ae,[t("div",se,[t("div",oe,[t("div",le,[ne,t("div",ie,[t("form",{role:"form text-left",onSubmit:y(pt,["prevent"]),enctype:"multipart/form-data"},[t("div",de,[re,t("div",ue,[k(t("input",{type:"text",class:"form-control form-control-sm",name:"title",id:"title","onUpdate:modelValue":s[0]||(s[0]=a=>i.value.title=a),placeholder:"Title",disabled:i.value.status!=0},null,8,_e),[[B,i.value.title]]),p.value.title?(l(),n("small",me,d(p.value.title),1)):r("",!0)])]),t("div",ve,[he,t("div",pe,[k(t("input",{type:"text",class:"form-control form-control-sm",name:"location_id",id:"location_id","onUpdate:modelValue":s[1]||(s[1]=a=>i.value.location_name=a),placeholder:"Location Name",disabled:""},null,512),[[B,i.value.location_name]]),p.value.location_id?(l(),n("small",fe,d(p.value.location_id),1)):r("",!0)])]),t("div",ge,[be,t("div",ye,[k(t("input",{type:"text",class:"form-control form-control-sm",name:"category_id",id:"category_id","onUpdate:modelValue":s[2]||(s[2]=a=>i.value.category_name=a),placeholder:"Category Name",disabled:""},null,512),[[B,i.value.category_name]]),p.value.category_id?(l(),n("small",ke,d(p.value.category_id),1)):r("",!0)])]),t("div",xe,[Ce,t("div",we,[k(t("input",{type:"date",class:"form-control form-control-sm",name:"exp_date",id:"exp_date","onUpdate:modelValue":s[3]||(s[3]=a=>i.value.exp_date=a),placeholder:"Code",disabled:i.value.status!=0},null,8,Te),[[B,i.value.exp_date]]),p.value.exp_date?(l(),n("small",Ae,d(p.value.exp_date),1)):r("",!0)])]),t("div",Se,[i.value.status==0&&e.can("delete_task")?(l(),n("a",{key:0,href:"javascript:void(0)",onClick:y(ft,["prevent"]),class:"btn btn-round btn-outline-danger btn-sm mb-0"},[h(w,{icon:"fa-solid fa-trash"}),S(" DELETE ")],8,Be)):r("",!0),i.value.status==0&&e.can("reject_task")?(l(),n("a",{key:1,href:"javascript:void(0)",onClick:y(gt,["prevent"]),class:"btn btn-round btn-outline-warning btn-sm mb-0"},[h(w,{icon:"fa-solid fa-xmark"}),S(" REJECT ")],8,Ee)):r("",!0),i.value.status==2&&e.can("reOpen_task")?(l(),n("a",{key:2,href:"javascript:void(0)",onClick:y(yt,["prevent"]),class:"btn btn-round btn-outline-info btn-sm mb-0"},[h(w,{icon:"fa-solid fa-rotate-left"}),S(" RE-OPEN ")],8,Me)):r("",!0),i.value.status==0&&e.can("complete_task")?(l(),n("a",{key:3,href:"javascript:void(0)",onClick:y(bt,["prevent"]),class:"btn btn-round btn-outline-info btn-sm mb-0"},[h(w,{icon:"fa-solid fa-check"}),S(" COMPLETE ")],8,Ne)):r("",!0),i.value.status==0&&e.can("update_task")?(l(),n("button",De,[h(w,{icon:"fa-solid fa-floppy-disk"}),S(" UPDATE ")])):r("",!0)])],40,ce)])])]),t("div",Ve,[t("div",Ie,[t("div",je,[t("div",Le,[t("div",Re,[i.value.status==0&&e.can("manual_scan_task")?(l(),n("a",{key:0,href:"javascript:void(0)",onClick:y(xt,["prevent"]),class:"btn btn-sm btn-neutral float-end text-maroon"}," MANUAL SCAN ",8,Ue)):r("",!0)])])]),t("div",Oe,[t("div",$e,[t("div",Ge,[t("div",Pe,[t("div",He,[Ye,h(G(dt),{modelValue:D.value,"onUpdate:modelValue":s[4]||(s[4]=a=>D.value=a),options:vt.value,showLabels:!1,"close-on-select":!0,"clear-on-select":!1,searchable:!0,placeholder:"Select Status",label:"name","track-by":"value"},null,8,["modelValue","options"])]),t("div",qe,[Qe,k(t("input",{type:"text",class:"form-control form-control-sm",name:"code",id:"code","onUpdate:modelValue":s[5]||(s[5]=a=>b.value.inventory_no=a),placeholder:"QR Code",onKeyup:Q},null,544),[[B,b.value.inventory_no]])]),t("div",Fe,[Je,h(G(dt),{modelValue:O.value,"onUpdate:modelValue":s[6]||(s[6]=a=>O.value=a),options:Z.value,showLabels:!1,"close-on-select":!0,"clear-on-select":!1,searchable:!0,placeholder:"Select Category",label:"name","track-by":"id"},null,8,["modelValue","options"])]),t("div",Ke,[t("a",{href:"javascript:void(0)",onClick:y(wt,["prevent"]),class:"btn btn-sm btn-ash float-end mt-2 pt-2"}," CLEAR ",8,Xe)]),ze,t("div",We,[t("div",Ze,[t("div",ta,[k(t("select",{class:"form-control form-control-sm per-page-entry",value:25,"onUpdate:modelValue":s[7]||(s[7]=a=>W.value=a),onChange:st},[(l(!0),n(x,null,E(z.value,a=>(l(),n("option",{key:a,value:a,textContent:d(a)},null,8,ea))),128))],544),[[ct,W.value]])])])])]),t("div",aa,[t("div",sa,[t("table",oa,[t("thead",null,[t("tr",null,[t("th",{class:c(rt.value),style:{width:"120px"}},"Status",2),t("th",{class:c(j.value)},"QR CODE",2),t("th",{class:c(j.value)},"Asset Name",2),t("th",{class:c(j.value)},"Category",2)])]),t("tbody",null,[(l(!0),n(x,null,E(Y.value,a=>(l(),n("tr",{key:a.id,class:c(K.value)},[t("td",{class:c(ut.value)},[a.status==0?(l(),n("span",la,"PENDING")):r("",!0),a.status==1?(l(),n("span",na,"SAME")):r("",!0),a.status==2?(l(),n("span",ia,"CHANGE")):r("",!0),a.status==3?(l(),n("span",ca,"MISSING")):r("",!0)],2),t("td",{class:c(L.value)},d(a.barcode),3),t("td",{class:c(L.value)},d(a.asset_name),3),t("td",{class:c(L.value)},d(a.category_name),3)],2))),128))])])])]),t("div",da,[t("div",ra,[t("div",ua," Showing "+d(u.value.from)+" to "+d(u.value.to)+" of "+d(u.value.total)+" entries ",1)]),t("div",_a,[t("div",ma,[t("nav",va,[t("ul",ha,[t("li",{class:c(["page-item",u.value.current_page==1?"disabled":""])},[t("a",{class:"page-link",href:"javascript:void(0)",onClick:s[8]||(s[8]=a=>T(u.value.current_page-1))},fa)],2),(l(!0),n(x,null,E(u.value.last_page,(a,J)=>(l(),n(x,null,[a==1||a==u.value.last_page||Math.abs(a-u.value.current_page)<5?(l(),n("li",{class:c(["page-item",u.value.current_page==a?"active":""]),key:J},[t("a",{class:"page-link",onClick:Tt=>T(a)},d(a),9,ga)],2)):r("",!0)],64))),256)),t("li",{class:c(["page-item",u.value.current_page==u.value.last_page?"disabled":""])},[t("a",{class:"page-link",href:"javascript:void(0)",onClick:s[9]||(s[9]=a=>T(u.value.current_page+1))},ya)],2)])])])])])])])])])]),t("div",ka,[t("div",xa,[t("div",Ca,[t("div",wa,[t("div",Ta,[Aa,t("div",Sa,[t("div",Ba,[t("div",Ea,[k(t("select",{class:"form-control form-control-sm per-page-entry",value:25,"onUpdate:modelValue":s[10]||(s[10]=a=>U.value=a),onChange:st},[(l(!0),n(x,null,E(z.value,a=>(l(),n("option",{key:a,value:a,textContent:d(a)},null,8,Ma))),128))],544),[[ct,U.value]])])])])]),t("div",Na,[t("div",Da,[t("table",Va,[t("thead",null,[t("tr",null,[t("th",{class:c(j.value)},"Category",2),t("th",{class:c(P.value)},"Total Assets",2),t("th",{class:c(P.value)},"Scanned Assets",2),t("th",{class:c(P.value)},"Balance",2)])]),t("tbody",null,[(l(!0),n(x,null,E(tt.value,a=>(l(),n("tr",{key:a.id,class:c(K.value)},[t("td",{class:c(L.value)},d(a.category_name),3),t("td",{class:c(H.value)},d(a.total_quantity),3),t("td",{class:c(H.value)},d(a.scanned_quantity),3),t("td",{class:c(H.value)},d(a.total_quantity-a.scanned_quantity),3)],2))),128))])])])]),t("div",Ia,[t("div",ja,[t("div",La," Showing "+d(v.value.from)+" to "+d(v.value.to)+" of "+d(v.value.total)+" entries ",1)]),t("div",Ra,[t("div",Ua,[t("nav",Oa,[t("ul",$a,[t("li",{class:c(["page-item",v.value.current_page==1?"disabled":""])},[t("a",{class:"page-link",href:"javascript:void(0)",onClick:s[11]||(s[11]=a=>T(v.value.current_page-1))},Pa)],2),(l(!0),n(x,null,E(v.value.last_page,(a,J)=>(l(),n(x,null,[a==1||a==v.value.last_page||Math.abs(a-v.value.current_page)<5?(l(),n("li",{class:c(["page-item",v.value.current_page==a?"active":""]),key:J},[t("a",{class:"page-link",onClick:Tt=>T(a)},d(a),9,Ha)],2)):r("",!0)],64))),256)),t("li",{class:c(["page-item",v.value.current_page==v.value.last_page?"disabled":""])},[t("a",{class:"page-link",href:"javascript:void(0)",onClick:s[12]||(s[12]=a=>T(v.value.current_page+1))},qa)],2)])])])])])])])])])])])])])])]),modals:A(()=>[t("div",Qa,[t("div",Fa,[t("div",Ja,[t("div",Ka,[Xa,t("button",za,[t("span",Wa,[h(w,{icon:"fa-solid fa-xmark"})])])]),t("div",Za,[t("div",ts,[t("div",es,[t("form",{role:"form text-left",onSubmit:y(Ct,["prevent"]),enctype:"multipart/form-data"},[t("div",ss,[os,t("div",ls,[k(t("input",{type:"text",class:"form-control form-control-sm",name:"barcode",id:"barcode","onUpdate:modelValue":s[13]||(s[13]=a=>N.value.barcode=a),placeholder:"QR Code",required:""},null,512),[[B,N.value.barcode]]),p.value.barcode?(l(),n("small",ns,d(p.value.barcode),1)):r("",!0)])]),is],40,as)])])])])])])]),loader:A(()=>[h($t,{ref_key:"loading_bar",ref:_},null,512)]),_:1})}}};export{hs as default};
