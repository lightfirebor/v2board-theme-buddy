import{u as k,c as v}from"./User-BQkZ_jMv.js";import{h as g}from"./moment-BjLXg0w5.js";import{P as d}from"./Plan-BJnWljSG.js";import{z as b,r as c,b as w,D as a,E as o,F as p,g as u,O as C,G as I,a8 as B,L as r,H,R as D}from"./index-DakTmPQa.js";import{_ as O}from"./index-C64MW_cJ.js";import{B as V}from"./index-rYs2-27A.js";import"./User-5qaT54Wr.js";import"./styleChecker-g0E4e3OG.js";import"./index-eB15cg8q.js";import"./vnode-DLYruelZ.js";import"./collapseMotion-AmAYEiK0.js";import"./index-CYrGO4-s.js";import"./colors-DubEfa9I.js";import"./index-Bu9L_qpB.js";import"./omit-mP5ouVAS.js";import"./index-DESNhIjF.js";import"./index-EDEv-hsv.js";import"./CheckOutlined-0tT88R-Z.js";import"./isNumeric-DjvBa-1E.js";const Y={class:"ViewWrapper",style:{"box-shadow":"var(--shadow)"}},L={key:0,class:"flex whitespace-nowrap flex-col gap-1"},M=["onClick"],N=["onClick"],P={key:1,class:"flex items-center"},S={__name:"Layout",setup(E){const s=k(),n=c(!1),m=[{title:"订单号",dataIndex:"dh",width:270},{title:"商品",width:250,dataIndex:"name"},{title:"周期",width:150,dataIndex:"period"},{title:"订单金额",dataIndex:"money"},{title:"订单状态",dataIndex:"status",key:"status"},{title:"创建时间",dataIndex:"create_time",key:"4"},{title:"操作",key:"operation",fixed:"right"}],i=c([]);w(()=>{n.value=!0,s.Order=void 0,s.Set_Order().then(()=>{for(const t of s.Order)i.value.push({dh:t.trade_no,name:t.plan.name,period:d.prototype.Handel_name(t.period),money:(t.total_amount/100).toFixed(2),status:d.prototype.Handel_status(t.status),create_time:g(t.created_at*1e3).format("YYYY-MM-DD HH:mm:ss")})}).finally(()=>{n.value=!1})});const _=t=>{v({trade_no:t}).then(h=>{D.success("取消订单成功"),location.reload()})};return(t,h)=>{const f=V,y=O;return a(),o("div",Y,[p("div",null,[u(y,{columns:m,"data-source":i.value,loading:n.value,scroll:{x:1300,y:1e3}},{bodyCell:C(({column:l,record:e})=>[l.key==="operation"?(a(),o("div",L,[e.status[0]!==2?(a(),o("p",{key:0,class:"text-[var(--bg)] cursor-pointer",onClick:x=>I(B).push("/dashboard/checkout/"+e.dh)},"查看详情",8,M)):r("",!0),e.status[0]===0?(a(),o("p",{key:1,class:"text-[var(--bg)] cursor-pointer",onClick:x=>_(e.dh)},"取消订单",8,N)):r("",!0)])):l.key==="status"?(a(),o("div",P,[u(f,{status:e.status[2]},null,8,["status"]),p("p",null,H(e.status[1]),1)])):r("",!0)]),_:1},8,["data-source","loading"])])])}}},ot=b(S,[["__scopeId","data-v-4de3ba1c"]]);export{ot as default};
