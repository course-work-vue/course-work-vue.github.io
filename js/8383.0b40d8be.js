"use strict";(self["webpackChunkvue_3_authentication_jwt"]=self["webpackChunkvue_3_authentication_jwt"]||[]).push([[8383],{6069:function(e,t,l){l.d(t,{Z:function(){return c}});var i=l(3396);const a=e=>((0,i.dD)("data-v-1b3cee9c"),e=e(),(0,i.Cn)(),e),r={class:"krasivsk"},s=a((()=>(0,i._)("i",{class:"material-icons-outlined"},"visibility",-1)));function o(e,t,l,a,o,n){return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("button",{onClick:t[0]||(t[0]=(...e)=>n.onClick&&n.onClick(...e)),class:"btn btn-primary btn-sm"},[s,(0,i.Uk)("Детали")])])}l(7658);var n={props:["params"],computed:{},methods:{onClick(){this.$router.push(`/students/${this.params.data.student_id}`)}}},u=l(89);const d=(0,u.Z)(n,[["render",o],["__scopeId","data-v-1b3cee9c"]]);var c=d},6805:function(e,t,l){l.d(t,{Z:function(){return d}});var i=l(3396),a=l(7139);const r=["href"];function s(e,t,l,s,o,n){return(0,i.wg)(),(0,i.iD)("a",{href:"/students/"+this.params.data.student_id},(0,a.zw)(this.params.data.student_id),9,r)}var o={props:["params"],computed:{},methods:{}},n=l(89);const u=(0,n.Z)(o,[["render",s],["__scopeId","data-v-84d4269a"]]);var d=u},8383:function(e,t,l){l.r(t),l.d(t,{default:function(){return X}});var i=l(3396),a=l(7139),r=l(9242);const s=e=>((0,i.dD)("data-v-209bb673"),e=e(),(0,i.Cn)(),e),o={key:0},n={class:"col col-xs-9 col-lg-12 list"},u={class:"col col-12"},d={class:"d-inline-flex"},c={key:0},p=s((()=>(0,i._)("h1",null," Список всех студентов ",-1))),h=[p],g={key:1},m={key:2},f={class:"col col-12"},b=s((()=>(0,i._)("i",{class:"material-icons-outlined"},"add",-1))),_=s((()=>(0,i._)("button",{onclick:"location.href='http://195.93.252.168:5050/api/Students/Export'",class:"mx-2 btn btn-primary float-start",type:"button"},"Отчёт о формах обучения",-1))),v={class:"col col-6 float-end d-inline-flex align-items-center"},y=["disabled"],k=s((()=>(0,i._)("i",{class:"material-icons-outlined"},"close",-1))),C={class:"col col-6 float-start"},F={class:"form-group d-inline-flex align-items-center"},w=s((()=>(0,i._)("label",{class:"bigger form-label",for:"group_id"},"Фильтр по группе:",-1))),D=s((()=>(0,i._)("option",{selected:"selected",value:""}," Нет ",-1))),S=["value"],x={class:"col col-6 float-start"},V={class:"form-group d-inline-flex align-items-center"},q=s((()=>(0,i._)("label",{class:"bigger form-label",for:"subgroup_id"},"Фильтр по подгруппе:",-1))),A=s((()=>(0,i._)("option",{selected:"selected",value:""},"Нет",-1))),N=s((()=>(0,i._)("option",{value:"1"},"1",-1))),M=s((()=>(0,i._)("option",{value:"2"},"2",-1))),R=[A,N,M],W={style:{height:"90vh"}},T={class:"h-100 pt-5"};function Z(e,t,l,s,p,A){const N=(0,i.up)("ag-grid-vue");return e.loading?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("div",n,[(0,i._)("div",u,[(0,i._)("div",d,[p.spisok?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",c,h)),p.spisok?((0,i.wg)(),(0,i.iD)("h1",g," Список студентов "+(0,a.zw)(p.groupn)+" группы ",1)):(0,i.kq)("",!0),p.subg?((0,i.wg)(),(0,i.iD)("h1",m,", "+(0,a.zw)(p.subgn)+" подгруппы",1)):(0,i.kq)("",!0)]),(0,i._)("div",f,[(0,i._)("button",{onClick:t[0]||(t[0]=(...e)=>A.navigateToAddStudent&&A.navigateToAddStudent(...e)),class:"btn btn-primary float-start",type:"button"},[b,(0,i.Uk)("Добавить студента")]),_,(0,i._)("div",v,[(0,i._)("button",{onClick:t[1]||(t[1]=(...e)=>A.clearFilters&&A.clearFilters(...e)),disabled:!p.filters,class:"btn btn-sm btn-primary text-nowrap mx-2",type:"button"},[k,(0,i.Uk)("Очистить фильтры")],8,y),(0,i.wy)((0,i._)("input",{class:"form-control",type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>p.quickFilterValue=e),id:"filter-text-box",onInput:t[3]||(t[3]=e=>s.onFilterTextBoxChanged()),placeholder:"Поиск..."},null,544),[[r.nr,p.quickFilterValue]])])])]),(0,i._)("div",null,[(0,i._)("div",C,[(0,i._)("div",F,[w,(0,i.wy)((0,i._)("select",{class:"form-select",id:"group_id","onUpdate:modelValue":t[4]||(t[4]=e=>p.myValue=e),onChange:t[5]||(t[5]=e=>s.handleSelectChange(p.myValue))},[D,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(p.groups,(e=>((0,i.wg)(),(0,i.iD)("option",{key:e.id,value:e.text},(0,a.zw)(e.text),9,S)))),128))],544),[[r.bM,p.myValue]])])]),(0,i._)("div",x,[(0,i._)("div",V,[q,(0,i.wy)((0,i._)("select",{class:"form-select",id:"subgroup_id","onUpdate:modelValue":t[6]||(t[6]=e=>p.myValue4=e),onChange:t[7]||(t[7]=e=>s.handleSelectChange2(p.myValue4))},R,544),[[r.bM,p.myValue4]])])])]),(0,i._)("div",W,[(0,i._)("div",T,[(0,i.Wm)(N,{class:"ag-theme-alpine",style:{width:"100%",height:"100%"},columnDefs:s.columnDefs.value,rowData:s.rowData.value,defaultColDef:s.defaultColDef,rowSelection:"multiple",animateRows:"true",includeHiddenColumnsInQuickFilter:"true",onCellClicked:s.cellWasClicked,onGridReady:s.onGridReady,onFirstDataRendered:A.onFirstDataRendered,onFilterChanged:A.onFilterChanged},null,8,["columnDefs","rowData","defaultColDef","onCellClicked","onGridReady","onFirstDataRendered","onFilterChanged"])])])])]))}l(7658);var H=l(5708),O=l(6732),z=l(4870),G=l(6069),I=l(6805);const J=["href"];function $(e,t,l,r,s,o){return(0,i.wg)(),(0,i.iD)("a",{href:"#/courseworks?filterModel="+JSON.stringify({full_name:{filterType:"text",type:"equals",filter:this.params.data.full_name}})},(0,a.zw)(this.params.data.full_name),9,J)}var j={props:["params"],computed:{},methods:{}},B=l(89);const U=(0,B.Z)(j,[["render",$],["__scopeId","data-v-10d7501c"]]);var E=U,Q=l(5124),P=l(2483),K={name:"App",components:{AgGridVue:O.n,ButtonCell:G.Z,StudentHref:I.Z,StudentHref2:E,Form:H.l0,Field:H.gN,ErrorMessage:H.Bc},setup(){const e=(0,z.iH)(null),t=(0,z.iH)(),l=(0,P.yj)(),a=60,r=l=>{e.value=l.api,t.value=l.columnApi},s=()=>{},o=(0,z.qj)({}),n=(0,z.qj)({value:[{sortable:!1,filter:!1,headerName:"Действия",headerClass:"text-center",cellRenderer:"ButtonCell",cellRendererParams:{onClick:s,label:"View Details"},maxWidth:120,resizable:!1},{field:"full_name",headerName:"ФИО",minWidth:250,cellRenderer:"StudentHref2"},{field:"group_number",headerName:"Группа",maxWidth:129},{field:"subgroup",headerName:"Подгруппа",maxWidth:129},{field:"enrollment_order",headerName:"Приказ о зачислении",minWidth:200,hide:!0},{field:"formatted_enrolled_date",filter:"agDateColumnFilter",filterParams:L,headerName:"Дата зачисления",minWidth:170,hide:!0},{field:"formatted_date_of_birth",filter:"agDateColumnFilter",filterParams:L,headerName:"Дата рождения",minWidth:170,hide:!0}]}),u=t=>{const i=l.query.filterModel;if(i){const l=JSON.parse(i),a={subgroup:{type:"equals",filter:t}},r={...l,...a};console.log(r),e.value.setFilterModel(r)}else{const l={subgroup:{type:"equals",filter:t}};e.value.setFilterModel(l)}},d=e=>{console.log(e),u(e)},c=t=>{const i=l.query.filterModel;if(i){const l=JSON.parse(i),a={group_number:{type:"equals",filter:t}},r={...l,...a};console.log(r),e.value.setFilterModel(r)}else{const l={group_number:{type:"equals",filter:t}};e.value.setFilterModel(l)}},p=e=>{c(e)},h={sortable:!0,filter:!0,flex:1,resizable:!0,minWidth:150};(0,i.bv)((()=>{}));const g=()=>{e.value.setQuickFilter(document.getElementById("filter-text-box").value)};return{onGridReady:r,columnDefs:n,rowData:o,defaultColDef:h,cellWasClicked:e=>{console.log("cell was clicked",e)},deselectRows:()=>{e.value.deselectAll()},onFilterTextBoxChanged:g,paginationPageSize:a,navigateToStudent:s,restoreFromHardCoded:c,restoreFromHardCoded2:u,handleSelectChange:p,handleSelectChange2:d}},data(){return{quickFilterValue:"",filters:!1,groups:["Нет"],myValue:"",myValue4:"",spisok:!1,subg:!1,groupn:null,subgn:null}},methods:{async loadGroupsData(){try{const e=await Q.Z.getGroupsAsKOSTIL();console.log("aaaa"),console.log(e),this.groups=Array.isArray(e.data)?e.data:[e.data]}catch(e){console.error("Error loading students data:",e)}},async loadStudentsData(){try{const e=await Q.Z.getAllFormattedStudents();this.rowData.value=Array.isArray(e.data)?e.data:[e.data],this.loading=!1}catch(e){console.error("Error loading students data:",e)}},navigateToAddStudent(){this.groupn?this.$router.push("/addStudent/"+this.groupn):this.$router.push("/addStudent")},onFirstDataRendered(e){this.gridApi=e.api,this.columnApi=e.columnApi;const t=this.$route.query.filterModel;if(t){const e=JSON.parse(t);this.gridApi.setFilterModel(e),this.filters=!0,e.group_number&&(this.myValue=e.group_number.filter,this.groupn=e.group_number.filter,this.groupn&&(this.spisok=!0)),e.subgroup&&(this.myValue4=e.subgroup.filter,this.subgn=e.subgroup.filter,this.subgn&&(this.subg=!0))}const l=this.$route.query.quickFilter;if(l){const e=JSON.parse(l);this.gridApi.setQuickFilter(e),this.quickFilterValue=e,this.filters=!0}},onFilterChanged(){this.filters=!1;const e=this.gridApi.getQuickFilter(),t=this.gridApi.getFilterModel(),l={};e&&(l.quickFilter=JSON.stringify(e),this.filters=!0),t&&Object.keys(t).length>0?(l.filterModel=JSON.stringify(t),this.filters=!0,t.group_number?(this.myValue=t.group_number.filter,this.groupn=t.group_number.filter,this.groupn&&(this.spisok=!0)):this.spisok=!1,t.subgroup?(this.myValue4=t.subgroup.filter,this.subgn=t.subgroup.filter,this.subgn&&(this.subg=!0)):this.subg=!1):(this.spisok=!1,this.subg=!1),this.$router.push({query:l})},clearFilters(){this.gridApi.setFilterModel(),this.gridApi.setQuickFilter(),this.quickFilterValue="",this.myValue="",this.myValue4="",this.subg=!1,this.spisok=!1,this.filters=!1}},created(){this.loadGroupsData(),this.loadStudentsData()}},L={comparator:(e,t)=>{var l=t;if(null==l)return-1;var i=l.split("/"),a=new Date(Number(i[2]),Number(i[1])-1,Number(i[0]));return e.getTime()===a.getTime()?0:a<e?-1:a>e?1:0}};const Y=(0,B.Z)(K,[["render",Z],["__scopeId","data-v-209bb673"]]);var X=Y}}]);
//# sourceMappingURL=8383.0b40d8be.js.map