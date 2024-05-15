"use strict";(self["webpackChunkvue_3_authentication_jwt"]=self["webpackChunkvue_3_authentication_jwt"]||[]).push([[4745],{4745:function(e,t,i){i.r(t),i.d(t,{default:function(){return N}});var a=i(6768),l=i(5130);const r=e=>((0,a.Qi)("data-v-70d15fc4"),e=e(),(0,a.jt)(),e),s={class:"col col-xs-9 col-lg-12 mt-4 list"},n={class:"col col-12"},o={class:"mb-3 col col-12"},c={class:"col col-6 float-end d-inline-flex align-items-center mb-2"},d=["disabled"],u=r((()=>(0,a.Lk)("i",{class:"material-icons-outlined"},"close",-1))),h={style:{height:"95vh"}},p={class:"h-100 pt-5"};function f(e,t,i,r,f,g){const m=(0,a.g2)("ag-grid-vue");return(0,a.uX)(),(0,a.CE)("div",s,[(0,a.Lk)("div",n,[(0,a.Lk)("div",o,[(0,a.Lk)("div",c,[(0,a.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>g.clearFilters&&g.clearFilters(...e)),disabled:!f.filters,class:"btn btn-sm btn-primary text-nowrap mx-2",type:"button"},[u,(0,a.eW)("Очистить фильтры")],8,d),(0,a.bo)((0,a.Lk)("input",{class:"form-control",type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>f.quickFilterValue=e),id:"filter-text-box",onInput:t[2]||(t[2]=e=>r.onFilterTextBoxChanged()),placeholder:"Поиск..."},null,544),[[l.Jo,f.quickFilterValue]])])])]),(0,a.Lk)("div",h,[(0,a.Lk)("div",p,[(0,a.bF)(m,{class:"ag-theme-alpine",style:{width:"100%",height:"100%"},columnDefs:r.columnDefs.value,rowData:r.rowData.value,defaultColDef:r.defaultColDef,rowSelection:"multiple",animateRows:"true",onCellClicked:r.cellWasClicked,onGridReady:r.onGridReady,onFirstDataRendered:g.onFirstDataRendered,onFilterChanged:g.onFilterChanged,pagination:!0,paginationPageSize:r.paginationPageSize},null,8,["columnDefs","rowData","defaultColDef","onCellClicked","onGridReady","onFirstDataRendered","onFilterChanged","paginationPageSize"])])])])}i(4114);var g=i(7277),m=i(144);const k=e=>((0,a.Qi)("data-v-4be919ea"),e=e(),(0,a.jt)(),e),v={class:"krasivsk"},b=k((()=>(0,a.Lk)("i",{class:"material-icons-outlined"},"visibility",-1)));function C(e,t,i,l,r,s){return(0,a.uX)(),(0,a.CE)("div",v,[(0,a.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>s.onClick&&s.onClick(...e)),class:"btn btn-primary btn-sm"},[b,(0,a.eW)("Детали")])])}var F={props:["params"],computed:{},methods:{onClick(){this.$router.push(`/teachers/${this.params.data.teacher_id}`)}}},y=i(1241);const A=(0,y.A)(F,[["render",C],["__scopeId","data-v-4be919ea"]]);var D=A,_=i(4232);const w=["href"];function x(e,t,i,l,r,s){return(0,a.uX)(),(0,a.CE)("a",{href:"#/tegrsus?filterModel="+JSON.stringify({teacher_id:{filterType:"text",type:"contains",filter:this.params.data.teacher_id}})},(0,_.v_)(this.params.data.full_name),9,w)}var R={props:["params"],computed:{},methods:{}};const T=(0,y.A)(R,[["render",x],["__scopeId","data-v-5123ca6e"]]);var q=T,L=i(619),S={name:"App",components:{AgGridVue:g.b,ButtonCell:D,TeacherHref:q},setup(){const e=(0,m.KR)(null),t=(0,m.KR)(),i=60,l=i=>{e.value=i.api,t.value=i.columnApi},r=()=>{},s=(0,m.Kh)({}),n=(0,m.Kh)({value:[{sortable:!1,filter:!1,headerName:"Действия",cellRenderer:"ButtonCell",cellRendererParams:{onClick:r,label:"View Details"},maxWidth:120,resizable:!1},{field:"full_name",headerName:"ФИО",cellRenderer:"TeacherHref"}]}),o={sortable:!0,filter:!0,flex:1,resizable:!0,minWidth:300};(0,a.sV)((()=>{}));const c=()=>{e.value.setQuickFilter(document.getElementById("filter-text-box").value)};return{onGridReady:l,columnDefs:n,rowData:s,defaultColDef:o,cellWasClicked:e=>{console.log("cell was clicked",e)},deselectRows:()=>{e.value.deselectAll()},onFilterTextBoxChanged:c,paginationPageSize:i,navigateToTegrsu:r}},data(){return{quickFilterValue:"",filters:!1}},methods:{async loadTeachersData(){try{const e=await L.A.getAllTeacherss();this.rowData.value=Array.isArray(e.data)?e.data:[e.data],this.loading=!1}catch(e){console.error("Error loading Teachers data:",e)}},navigateToAddTeacher(){this.$router.push("/addTeacher")},onFirstDataRendered(e){this.gridApi=e.api,this.columnApi=e.columnApi;const t=this.$route.query.filterModel;if(t){const e=JSON.parse(t);this.gridApi.setFilterModel(e),this.filters=!0}const i=this.$route.query.quickFilter;if(i){const e=JSON.parse(i);this.gridApi.setQuickFilter(e),this.quickFilterValue=e,this.filters=!0}},onFilterChanged(){this.filters=!1;const e=this.gridApi.getQuickFilter(),t=this.gridApi.getFilterModel(),i={};e&&(i.quickFilter=JSON.stringify(e),this.filters=!0),t&&Object.keys(t).length>0&&(i.filterModel=JSON.stringify(t),this.filters=!0),this.$router.push({query:i})},clearFilters(){this.gridApi.setFilterModel(),this.gridApi.setQuickFilter(),this.quickFilterValue="",this.filters=!1}},created(){this.loadTeachersData()}};const V=(0,y.A)(S,[["render",f],["__scopeId","data-v-70d15fc4"]]);var N=V}}]);
//# sourceMappingURL=4745.531672c9.js.map