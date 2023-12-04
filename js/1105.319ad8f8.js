"use strict";(self["webpackChunkvue_3_authentication_jwt"]=self["webpackChunkvue_3_authentication_jwt"]||[]).push([[1105],{1105:function(e,s,t){t.r(s),t.d(s,{default:function(){return R}});var i=t(3396),n=t(9242),a=t(7139);const r={class:"mt-4 list"},o={class:"mb-3"},l={class:"col col-3 float-end"},c={key:0,class:"table"},u=(0,i._)("tbody",null,[(0,i._)("td",null,[(0,i._)("div",{class:"skeleton skeleton-animate"})]),(0,i._)("td",null,[(0,i._)("div",{class:"skeleton skeleton-animate"})]),(0,i._)("td",null,[(0,i._)("div",{class:"skeleton skeleton-animate"})]),(0,i._)("td",null,[(0,i._)("div",{class:"skeleton skeleton-animate"})]),(0,i._)("td",null,[(0,i._)("div",{class:"skeleton skeleton-animate"})]),(0,i._)("td",null,[(0,i._)("div",{class:"skeleton skeleton-animate"})])],-1),h=[u],d={key:1,class:"table"},p=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th",null,"Role Name"),(0,i._)("th",null,"Create"),(0,i._)("th",null,"Read"),(0,i._)("th",null,"Update"),(0,i._)("th",null,"Delete")])],-1),m=["onUpdate:modelValue"],g=["onUpdate:modelValue"],P=["onUpdate:modelValue"],_=["onUpdate:modelValue"],k={class:"float-start"},y={class:"pagination"},b=["onClick"];function v(e,s,t,u,v,f){return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("div",null,[(0,i._)("div",o,[(0,i._)("button",{onClick:s[0]||(s[0]=(...s)=>e.navigateToAddStudent&&e.navigateToAddStudent(...s)),class:"btn btn-primary",type:"button"},"Добавить студента"),(0,i._)("div",l,[(0,i.wy)((0,i._)("input",{class:"form-control","onUpdate:modelValue":s[1]||(s[1]=e=>v.searchQuery=e),onInput:s[2]||(s[2]=(...e)=>f.updateSearchQuery&&f.updateSearchQuery(...e)),placeholder:"Поиск..."},null,544),[[n.nr,v.searchQuery]])])]),v.loading?((0,i.wg)(),(0,i.iD)("table",c,h)):((0,i.wg)(),(0,i.iD)("table",d,[p,(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(f.groupedPermissions,((e,s)=>((0,i.wg)(),(0,i.iD)("tr",{key:s},[(0,i._)("td",null,(0,a.zw)(e[0].RoleName),1),(0,i._)("td",null,[(0,i.wy)((0,i._)("input",{type:"checkbox","onUpdate:modelValue":e=>v.rolePermissions[s][0]=e},null,8,m),[[n.e8,v.rolePermissions[s][0]]])]),(0,i._)("td",null,[(0,i.wy)((0,i._)("input",{type:"checkbox","onUpdate:modelValue":e=>v.rolePermissions[s][1]=e},null,8,g),[[n.e8,v.rolePermissions[s][1]]])]),(0,i._)("td",null,[(0,i.wy)((0,i._)("input",{type:"checkbox","onUpdate:modelValue":e=>v.rolePermissions[s][2]=e},null,8,P),[[n.e8,v.rolePermissions[s][2]]])]),(0,i._)("td",null,[(0,i.wy)((0,i._)("input",{type:"checkbox","onUpdate:modelValue":e=>v.rolePermissions[s][3]=e},null,8,_),[[n.e8,v.rolePermissions[s][3]]])])])))),128))])])),(0,i._)("button",{onClick:s[3]||(s[3]=(...e)=>f.savePermissions&&f.savePermissions(...e))},"Save Permissions"),(0,i._)("nav",k,[(0,i._)("ul",y,[(0,i._)("li",{class:(0,a.C_)(["page-item",{disabled:1===v.currentPage}])},[(0,i._)("button",{onClick:s[4]||(s[4]=(...e)=>f.prevPage&&f.prevPage(...e)),class:"page-link"},"Предыдущая страница")],2),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(f.pageRange,(e=>((0,i.wg)(),(0,i.iD)("li",{class:(0,a.C_)(["page-item",{active:e==v.currentPage}]),key:e},[(0,i._)("button",{onClick:s=>f.changePage(e),class:"page-link"},(0,a.zw)(e),9,b)],2)))),128)),(0,i._)("li",{class:(0,a.C_)(["page-item",{disabled:v.currentPage===f.totalPages}])},[(0,i._)("button",{onClick:s[5]||(s[5]=(...e)=>f.nextPage&&f.nextPage(...e)),class:"page-link"},"Следующая страница")],2)])])])])}t(7658);var f=t(5124),w={data(){return{permissions:[],currentPage:1,permissionsPerPage:10,maxPageButtons:3,loading:!0,searchQuery:"",rolePermissions:{}}},computed:{groupedPermissions(){const e=(this.currentPage-1)*this.permissionsPerPage,s=e+this.permissionsPerPage,t=this.filterpermissions(),i=t.slice(e,s),n={};return i.forEach((e=>{const s=e.RoleId;n[s]||(n[s]=[]),n[s].push(e),this.rolePermissions[s]||(this.rolePermissions[s]=[!1,!1,!1,!1]);const t=e.Operation;this.rolePermissions[s][t]=!0})),n},totalPages(){const e=this.filterpermissions();return Math.ceil(e.length/this.permissionsPerPage)},paginatedpermissions(){const e=(this.currentPage-1)*this.permissionsPerPage,s=e+this.permissionsPerPage,t=this.filterpermissions();return t.slice(e,s)},pageRange(){const e=this.totalPages,s=this.currentPage,t=this.maxPageButtons,i="...";if(e<=t)return Array.from({length:e},((e,s)=>s+1));const n=Math.floor(t/2);let a=Math.max(1,s-n),r=Math.min(e,a+t-1);r-a+1<t&&(a=r-t+1);const o=[];a>1&&o.push(1,i);for(let l=a;l<=r;l++)o.push(l);return r<e&&o.push(i,e),o}},methods:{savePermissions(){this.checkedPermissions=[],this.uncheckedPermissions=[],Object.keys(this.rolePermissions).forEach((e=>{this.rolePermissions[e].forEach(((s,t)=>{const i=this.permissions.find((s=>s.RoleId===parseInt(e)&&s.Operation===t));s&&!i?this.checkedPermissions.push({RoleId:parseInt(e),Operation:t}):!s&&i&&this.uncheckedPermissions.push(i)}))})),console.log("New Permissions to Insert:",this.checkedPermissions),console.log("Unchecked Permissions to Remove:",this.uncheckedPermissions)},async loadRightsTable(){const e=this.$route.params.table;try{const s=await f.Z.getPermissionByTable(e);this.permissions=s.data,this.loading=!1}catch(s){console.error("Ошибка во время загрузки:",s)}},filterpermissions(){const e=this.searchQuery.toLowerCase();return this.permissions.filter((s=>String(s.RoleName).toLowerCase().includes(e)))},updateSearchQuery(){const e={page:1};""!==this.searchQuery.trim()&&(e.search=this.searchQuery),this.currentPage=1,this.$router.replace({query:e})},changePage(e){const s={...this.$route.query,page:e};""!==this.searchQuery.trim()&&(s.search=this.searchQuery),this.$router.replace({query:s})},prevPage(){this.currentPage>1&&this.changePage(this.currentPage-1)},nextPage(){this.currentPage<this.totalPages&&this.changePage(this.currentPage+1)}},beforeRouteUpdate(e,s,t){this.searchQuery=e.query.search||"",this.currentPage=parseInt(e.query.page)||1,t()},created(){const e=this.$route.query;this.currentPage=parseInt(e.page)||1,this.searchQuery=e.search||"",this.loadRightsTable()}},C=t(89);const Q=(0,C.Z)(w,[["render",v]]);var R=Q}}]);
//# sourceMappingURL=1105.319ad8f8.js.map