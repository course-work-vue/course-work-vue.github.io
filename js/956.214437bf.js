"use strict";(self["webpackChunkvue_3_authentication_jwt"]=self["webpackChunkvue_3_authentication_jwt"]||[]).push([[956],{7956:function(e,t,i){i.r(t),i.d(t,{default:function(){return P}});var a=i(3396),l=i(9242);const r=e=>((0,a.dD)("data-v-e8ab16e4"),e=e(),(0,a.Cn)(),e),n={class:"col col-xs-9 col-lg-12 mt-4 list"},s={class:"col col-12"},d={class:"col col-12"},o=r((()=>(0,a._)("i",{class:"material-icons-outlined"},"add",-1))),u={class:"col col-6 float-end d-inline-flex align-items-center mb-2"},c=["disabled"],h=r((()=>(0,a._)("i",{class:"material-icons-outlined"},"close",-1))),m={style:{height:"95vh"}},f={class:"h-100 pt-5"};function p(e,t,i,r,p,g){const v=(0,a.up)("ag-grid-vue");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("div",s,[(0,a._)("div",d,[(0,a._)("button",{onClick:t[0]||(t[0]=(...e)=>g.navigateToAddStudent&&g.navigateToAddStudent(...e)),class:"btn btn-primary float-start",type:"button"},[o,(0,a.Uk)("Добавить студента")]),(0,a._)("div",u,[(0,a._)("button",{onClick:t[1]||(t[1]=(...e)=>g.clearFilters&&g.clearFilters(...e)),disabled:!p.filters,class:"btn btn-sm btn-primary text-nowrap mx-2",type:"button"},[h,(0,a.Uk)("Очистить фильтры")],8,c),(0,a.wy)((0,a._)("input",{class:"form-control",type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>p.quickFilterValue=e),id:"filter-text-box",onInput:t[3]||(t[3]=e=>r.onFilterTextBoxChanged()),placeholder:"Поиск..."},null,544),[[l.nr,p.quickFilterValue]])])])]),(0,a._)("div",m,[(0,a._)("div",f,[(0,a.Wm)(v,{class:"ag-theme-alpine",style:{width:"100%",height:"100%"},columnDefs:r.columnDefs.value,rowData:r.rowData.value,defaultColDef:r.defaultColDef,rowSelection:"multiple",animateRows:"true",includeHiddenColumnsInQuickFilter:"true",onCellClicked:r.cellWasClicked,onGridReady:r.onGridReady,onFirstDataRendered:g.onFirstDataRendered,onFilterChanged:g.onFilterChanged,pagination:!0,paginationPageSize:r.paginationPageSize},null,8,["columnDefs","rowData","defaultColDef","onCellClicked","onGridReady","onFirstDataRendered","onFilterChanged","paginationPageSize"])])])])}i(7658);var g=i(6732),v=i(4870);const b=e=>((0,a.dD)("data-v-1b3cee9c"),e=e(),(0,a.Cn)(),e),_={class:"krasivsk"},k=b((()=>(0,a._)("i",{class:"material-icons-outlined"},"visibility",-1)));function C(e,t,i,l,r,n){return(0,a.wg)(),(0,a.iD)("div",_,[(0,a._)("button",{onClick:t[0]||(t[0]=(...e)=>n.onClick&&n.onClick(...e)),class:"btn btn-primary btn-sm"},[k,(0,a.Uk)("Детали")])])}var F={props:["params"],computed:{},methods:{onClick(){this.$router.push(`/students/${this.params.data.student_id}`)}}},D=i(89);const y=(0,D.Z)(F,[["render",C],["__scopeId","data-v-1b3cee9c"]]);var w=y,A=i(7139);const x=["href"];function S(e,t,i,l,r,n){return(0,a.wg)(),(0,a.iD)("a",{href:"/students/"+this.params.data.student_id},(0,A.zw)(this.params.data.student_id),9,x)}var N={props:["params"],computed:{},methods:{}};const q=(0,D.Z)(N,[["render",S],["__scopeId","data-v-84d4269a"]]);var R=q,W=i(5124),T={name:"App",components:{AgGridVue:g.n,ButtonCell:w,StudentHref:R},setup(){const e=(0,v.iH)(null),t=(0,v.iH)(),i=60,l=i=>{e.value=i.api,t.value=i.columnApi},r=()=>{},n=(0,v.qj)({}),s=(0,v.qj)({value:[{sortable:!1,filter:!1,headerName:"Действия",headerClass:"text-center",cellRenderer:"ButtonCell",cellRendererParams:{onClick:r,label:"View Details"},maxWidth:120,resizable:!1},{field:"full_name",headerName:"ФИО",minWidth:250},{field:"course",headerName:"Курс",maxWidth:129},{field:"group_name",headerName:"Группа",maxWidth:129},{field:"enrollment_order",headerName:"Приказ о зачислении",minWidth:200,hide:!0},{field:"formatted_enrolled_date",filter:"agDateColumnFilter",filterParams:V,headerName:"Дата зачисления",minWidth:170,hide:!0},{field:"formatted_date_of_birth",filter:"agDateColumnFilter",filterParams:V,headerName:"Дата рождения",minWidth:170,hide:!0}]}),d={sortable:!0,filter:!0,flex:1,resizable:!0,minWidth:150};(0,a.bv)((()=>{}));const o=()=>{e.value.setQuickFilter(document.getElementById("filter-text-box").value)};return{onGridReady:l,columnDefs:s,rowData:n,defaultColDef:d,cellWasClicked:e=>{console.log("cell was clicked",e)},deselectRows:()=>{e.value.deselectAll()},onFilterTextBoxChanged:o,paginationPageSize:i,navigateToStudent:r}},data(){return{quickFilterValue:"",filters:!1}},methods:{async loadStudentsData(){try{const e=await W.Z.getAllFormattedStudents();this.rowData.value=Array.isArray(e.data)?e.data:[e.data],this.loading=!1}catch(e){console.error("Error loading students data:",e)}},navigateToAddStudent(){this.$router.push("/addStudent")},onFirstDataRendered(e){this.gridApi=e.api,this.columnApi=e.columnApi;const t=this.$route.query.filterModel;if(t){const e=JSON.parse(t);this.gridApi.setFilterModel(e),this.filters=!0}const i=this.$route.query.quickFilter;if(i){const e=JSON.parse(i);this.gridApi.setQuickFilter(e),this.quickFilterValue=e,this.filters=!0}},onFilterChanged(){this.filters=!1;const e=this.gridApi.getQuickFilter(),t=this.gridApi.getFilterModel(),i={};e&&(i.quickFilter=JSON.stringify(e),this.filters=!0),t&&Object.keys(t).length>0&&(i.filterModel=JSON.stringify(t),this.filters=!0),this.$router.push({query:i})},clearFilters(){this.gridApi.setFilterModel(),this.gridApi.setQuickFilter(),this.quickFilterValue="",this.filters=!1}},created(){this.loadStudentsData()}},V={comparator:(e,t)=>{var i=t;if(null==i)return-1;var a=i.split("/"),l=new Date(Number(a[2]),Number(a[1])-1,Number(a[0]));return e.getTime()===l.getTime()?0:l<e?-1:l>e?1:0}};const z=(0,D.Z)(T,[["render",p],["__scopeId","data-v-e8ab16e4"]]);var P=z}}]);
//# sourceMappingURL=956.214437bf.js.map