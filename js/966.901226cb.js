"use strict";(self["webpackChunkvue_3_authentication_jwt"]=self["webpackChunkvue_3_authentication_jwt"]||[]).push([[966],{4966:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var n=a(3396);const l=e=>((0,n.dD)("data-v-0a46d374"),e=e(),(0,n.Cn)(),e),i={class:"col col-xs-9 col-lg-12 mt-4 list"},r={class:"col col-12"},o={class:"mb-3 col col-12"},s=l((()=>(0,n._)("i",{class:"material-icons-outlined"},"add",-1))),d={class:"col col-3 float-end"},c={style:{height:"50vh"}},u={class:"h-100 pt-5"};function p(e,t,a,l,p,h){const m=(0,n.up)("ag-grid-vue");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",r,[(0,n._)("div",o,[(0,n._)("button",{onClick:t[0]||(t[0]=(...e)=>h.navigateToAddContract&&h.navigateToAddContract(...e)),class:"btn btn-primary float-start",type:"button"},[s,(0,n.Uk)("Добавить договор")]),(0,n._)("div",d,[(0,n._)("input",{class:"form-control",id:"filter-text-box",onInput:t[1]||(t[1]=e=>l.onFilterTextBoxChanged()),placeholder:"Поиск..."},null,32)])])]),(0,n._)("div",c,[(0,n._)("div",u,[(0,n.Wm)(m,{class:"ag-theme-alpine",style:{width:"100%",height:"100%"},columnDefs:l.columnDefs.value,rowData:l.rowData.value,defaultColDef:l.defaultColDef,rowSelection:"multiple",animateRows:"true",onCellClicked:l.cellWasClicked,onGridReady:l.onGridReady,onFirstDataRendered:h.onFirstDataRendered,onFilterChanged:h.onFilterChanged,pagination:!0,paginationPageSize:l.paginationPageSize},null,8,["columnDefs","rowData","defaultColDef","onCellClicked","onGridReady","onFirstDataRendered","onFilterChanged","paginationPageSize"])])])])}a(7658);var h=a(6732),m=a(4870);const f=e=>((0,n.dD)("data-v-530dbd74"),e=e(),(0,n.Cn)(),e),g={class:"krasivsk"},v=f((()=>(0,n._)("i",{class:"material-icons-outlined"},"visibility",-1)));function C(e,t,a,l,i,r){return(0,n.wg)(),(0,n.iD)("div",g,[(0,n._)("button",{onClick:t[0]||(t[0]=(...e)=>r.onClick&&r.onClick(...e)),class:"btn btn-primary btn-sm"},[v,(0,n.Uk)("Детали")])])}var _={props:["params"],computed:{},methods:{onClick(){this.$router.push(`/contracts/${this.params.data.id}`)}}},b=a(89);const D=(0,b.Z)(_,[["render",C],["__scopeId","data-v-530dbd74"]]);var y=D,k=a(5151),w=a(5124),A={name:"App",components:{AgGridVue:h.n,ButtonCell:y,GroupHref:k.Z},setup(){const e=(0,m.iH)(null),t=(0,m.iH)(),a=60,l=a=>{e.value=a.api,t.value=a.columnApi},i=()=>{},r=(0,m.qj)({}),o=(0,m.qj)({value:[{sortable:!1,filter:!1,headerName:"Действия",cellRenderer:"ButtonCell",cellRendererParams:{onClick:i,label:"View Details"},cellClass:"grid-cell-centered",maxWidth:120,resizable:!1},{field:"listener_full_name",headerName:"ФИО слушателя"},{field:"payer_full_name",headerName:"ФИО законного представителя"},{field:"contr_number",headerName:"Номер договора"},{field:"program_name",headerName:"Название курса"}]}),s={sortable:!0,filter:!0,flex:1,resizable:!0,minWidth:300};(0,n.bv)((()=>{}));const d=()=>{e.value.setQuickFilter(document.getElementById("filter-text-box").value)};return{onGridReady:l,columnDefs:o,rowData:r,defaultColDef:s,cellWasClicked:e=>{console.log("cell was clicked",e)},deselectRows:()=>{e.value.deselectAll()},onFilterTextBoxChanged:d,paginationPageSize:a,navigateToStudent:i}},methods:{async loadListenersData(){try{const e=await w.Z.getAllContracts();this.rowData.value=Array.isArray(e.data)?e.data:[e.data],this.loading=!1}catch(e){console.error("Error loading students data:",e)}},navigateToAddContract(){this.$router.push("/addContract")},onFirstDataRendered(e){this.gridApi=e.api,this.columnApi=e.columnApi;const t=this.$route.query.filterModel;if(t){const e=JSON.parse(t);this.gridApi.setFilterModel(e)}},onFilterChanged(){const e=this.gridApi.getFilterModel(),t={filterModel:JSON.stringify(e)};this.$router.push({query:t})}},created(){this.loadListenersData()}};const F=(0,b.Z)(A,[["render",p],["__scopeId","data-v-0a46d374"]]);var x=F},5151:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(3396),l=a(7139);const i=["href"];function r(e,t,a,r,o,s){return(0,n.wg)(),(0,n.iD)("a",{href:"#/students?filterModel="+JSON.stringify({group_name:{filterType:"text",type:"contains",filter:this.params.data.group_number}})},(0,l.zw)(this.params.data.group_number),9,i)}var o={props:["params"],computed:{},methods:{}},s=a(89);const d=(0,s.Z)(o,[["render",r],["__scopeId","data-v-ab160c4e"]]);var c=d}}]);
//# sourceMappingURL=966.901226cb.js.map