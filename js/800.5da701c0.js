"use strict";(self["webpackChunkvue_3_authentication_jwt"]=self["webpackChunkvue_3_authentication_jwt"]||[]).push([[800],{800:function(t,e,s){s.r(e),s.d(e,{default:function(){return V}});var a=s(3396),l=s(7139);const i=t=>((0,a.dD)("data-v-2eecb442"),t=t(),(0,a.Cn)(),t),r={class:"col col-xs-9 col-lg-12 mt-4 offset-md-1"},o={class:"col col-10 align-self-end"},d={key:0,class:"table"},n=i((()=>(0,a._)("td",null,[(0,a._)("div",{class:"skeleton skeleton-animate"})],-1))),c=i((()=>(0,a._)("td",null,[(0,a._)("div",{class:"skeleton skeleton-animate"})],-1))),u=i((()=>(0,a._)("td",null,[(0,a._)("div",{class:"skeleton skeleton-animate"})],-1))),_=i((()=>(0,a._)("td",null,[(0,a._)("div",{class:"skeleton skeleton-animate"})],-1))),h=i((()=>(0,a._)("td",null,[(0,a._)("div",{class:"skeleton skeleton-animate"})],-1))),g=i((()=>(0,a._)("td",null,[(0,a._)("div",{class:"skeleton skeleton-animate"})],-1))),b=[n,c,u,_,h,g],k={key:1},y={class:"d-flex"},p={class:"table",id:"table_dirs"},w=i((()=>(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"Группа")])],-1))),v=["onClick"],D={key:0,class:"table skelet"},m=i((()=>(0,a._)("tr",null,null,-1))),j=i((()=>(0,a._)("td",null,[(0,a._)("div",{class:"skeleton skeleton-animate"})],-1))),f=i((()=>(0,a._)("td",null,[(0,a._)("div",{class:"skeleton skeleton-animate"})],-1))),A=i((()=>(0,a._)("td",null,[(0,a._)("div",{class:"skeleton skeleton-animate"})],-1))),C=[j,f,A],W={key:1,class:"table table-sm",id:"table_subject"},E=i((()=>(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"Предмет")])],-1))),Z=["onClick"],H={key:2,class:"table skelet"},K=i((()=>(0,a._)("tr",null,null,-1))),Y=i((()=>(0,a._)("td",null,[(0,a._)("div",{class:"skeleton skeleton-animate"})],-1))),T=i((()=>(0,a._)("td",null,[(0,a._)("div",{class:"skeleton skeleton-animate"})],-1))),G=i((()=>(0,a._)("td",null,[(0,a._)("div",{class:"skeleton skeleton-animate"})],-1))),S=[Y,T,G],z={key:3,class:"table",id:"table_group"},R=i((()=>(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"Группа")])],-1))),q=["onClick"],I={key:4,class:"table skelet"},$=i((()=>(0,a._)("td",null,[(0,a._)("div",{class:"skeleton skeleton-animate"})],-1))),x=i((()=>(0,a._)("td",null,[(0,a._)("div",{class:"skeleton skeleton-animate"})],-1))),F=i((()=>(0,a._)("td",null,[(0,a._)("div",{class:"skeleton skeleton-animate"})],-1))),L=[$,x,F],Q={key:5,class:"table table-sm",id:"table_teacher"},B=i((()=>(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"Преподаватель")])],-1))),P=["onClick"];function J(t,e,s,i,n,c){return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",o,[n.loading?((0,a.wg)(),(0,a.iD)("table",d,[(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.subjects,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t},b)))),128))])])):((0,a.wg)(),(0,a.iD)("div",k,[(0,a._)("div",y,[(0,a._)("table",p,[w,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(this.groups,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.group_id},[(0,a._)("th",{onClick:t=>{this.selected_group=e.group_id,c.findWl(e.group_id)},class:(0,l.C_)({"table-active":this.selected_group==e.group_id})},(0,l.zw)(t.dir.dir_code),11,v)])))),128))])]),n.s_loading?((0,a.wg)(),(0,a.iD)("table",D,[(0,a._)("tbody",null,[m,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.subjects,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t},C)))),128))])])):this.selected_dir>=0?((0,a.wg)(),(0,a.iD)("table",W,[E,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(this.subjects,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t.subject_id},[(0,a._)("th",{onClick:e=>{this.selected_subject=t.subject_id,this.loadTeachersData(t.subject_id),this.t_loading=!0},class:(0,l.C_)({"table-active":this.selected_subject==t.subject_id})},(0,l.zw)(t.subject_name),11,Z)])))),128))])])):(0,a.kq)("",!0),n.s_loading?((0,a.wg)(),(0,a.iD)("table",H,[(0,a._)("tbody",null,[K,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.subjects,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t},S)))),128))])])):this.selected_subject>=0?((0,a.wg)(),(0,a.iD)("table",z,[R,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(this.groups,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t.group_id},[(0,a._)("th",{onClick:e=>{this.selected_group=t.group_id,c.findWl(t.group_id)},class:(0,l.C_)({"table-active":this.selected_group==t.group_id,"text-success bold":-1!=this.findWl(t.group_id,this.selected_subject)})},(0,l.zw)(t.group_number),11,q)])))),128))])])):(0,a.kq)("",!0),n.t_loading?((0,a.wg)(),(0,a.iD)("table",I,[(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.subjects,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t},L)))),128))])])):this.selected_subject>=0?((0,a.wg)(),(0,a.iD)("table",Q,[B,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(this.teachers,((t,e)=>((0,a.wg)(),(0,a.iD)("tr",{key:t.teacher_id},[(0,a._)("th",{onClick:e=>{this.selected_teacher=t.teacher_id},class:(0,l.C_)({"table-active":this.selected_teacher==t.teacher_id,"table-success":this.findWl(this.selected_group,this.selected_subject)==t.teacher_id})},(0,l.zw)(t.last_name)+" "+(0,l.zw)(this.teacher_load[e].length)+"/5 час ",11,P)])))),128))])])):(0,a.kq)("",!0)]),(0,a._)("div",null,[(0,a._)("button",{class:"btn btn-primary btn-block",onClick:e[0]||(e[0]=(...t)=>c.saveRel&&c.saveRel(...t))},"Сохранить связь")])]))])])}s(7658);var M=s(5124),N={data(){return{dirs:[],groups:[],subjects:[],teachers:[],employment:[],wl:[],rels:[],teacher_load:[],selected_dir:-1,selected_group:-1,selected_subject:-1,selected_teacher:-1,saved_num:-1,saved_group:0,saved_subject:0,saved_teacher:0,saved:!1,t_loading:!0,s_loading:!0,wl_loading:!0,loading:!0,searchQuery:""}},methods:{async loadDirsData(){try{const t=await M.Z.getAllDirections();this.dirs=Array.isArray(t.data)?t.data:[t.data],this.loading=!1}catch(t){console.error("Error loading groups data:",t)}},async loadGroupsData(){try{const t=await M.Z.getAllGroups();this.groups=Array.isArray(t.data)?t.data:[t.data],this.loading=!1}catch(t){console.error("Error loading groups data:",t)}},async loadGroups(t){try{const e=await M.Z.getGroupByDir(t);this.groups=Array.isArray(e.data)?e.data:[e.data],this.s_loading=!1}catch(e){console.error("Error loading employments data:",e)}},async loadTeachersData(t){try{const e=await M.Z.getTeachersForSubject(t);this.teachers=Array.isArray(e.data)?e.data:[e.data],this.loadTeacherLoad(this.teachers),this.s_loading=!1}catch(e){console.error("Error loading teachers data:",e)}},async loadSubjectsData(){try{const t=await M.Z.getAllSubjects();this.subjects=Array.isArray(t.data)?t.data:[t.data],this.loading=!1}catch(t){console.error("Error loading subjects data:",t)}},async loadEmploymentData(){try{const t=await M.Z.getAllEmployments();this.employment=Array.isArray(t.data)?t.data:[t.data],this.loading=!1}catch(t){console.error("Error loading employments data:",t)}},async loadWorkloads(){try{const t=await M.Z.getAllWorkloads();this.wl=Array.isArray(t.data)?t.data:[t.data],this.wl_loading=!1}catch(t){console.error("Error loading employments data:",t)}},async loadTeacherLoad(t){try{var e=[];for(let a=0;a<t.length;a++){const l=t[a],i=await M.Z.getSubjectsForTeacher(l.teacher_id);var s=Array.isArray(i.data)?i.data:[i.data];"Пустой вывод."==s?e.push([]):e.push(s)}this.teacher_load=e,this.loading=!1,this.t_loading=!1}catch(a){console.error("Error loading employments data:",a)}},saveRel(){if(-1==this.findWl(this.selected_group,this.selected_subject))M.Z.addWorkload(this.selected_group,this.selected_subject,this.selected_teacher);else{if(this.findWl(this.selected_group,this.selected_subject)==this.selected_teacher)return void console.log("Такая запись уже есть");M.Z.editWorkload(this.findWlID(this.selected_group,this.selected_subject),this.selected_teacher)}this.loadTeachersData(this.selected_subject);while(1==this.loading&&1==this.wl_loading)this.findWl(this.selected_group,this.selected_subject);this.saved=!0},viewGroupDetail(t){this.$router.push(`/groups/${t}`)},viewRightsDetail(){this.$router.push("/Rights/groups")},contains(t,e){var s;for(s in e)if(e[s]===t)return!0;return!1},teachersForSub(t){var e=[];return this.employment.forEach((function(s){t==s.subject_id&&e.push(s)})),e},findWl(t,e){var s;for(s in this.wl)if(this.wl[s].group_id==t&&this.wl[s].subject_id==e)return this.wl[s].teacher_id;return this.s_loading=!1,-1},findWlID(t,e){var s;for(s in this.wl)if(this.wl[s].group_id==t&&this.wl[s].subject_id==e)return this.wl[s].wl_id;return this.s_loading=!1,-1},loadData(){this.loadDirsData(),this.loadGroupsData(),this.loadSubjectsData(),this.loadEmploymentData(),this.loadWorkloads()}},created(){const t=this.$route.query;this.currentPage=parseInt(t.page)||1,this.searchQuery=t.search||"",this.loadData()}},O=s(89);const U=(0,O.Z)(N,[["render",J],["__scopeId","data-v-2eecb442"]]);var V=U}}]);
//# sourceMappingURL=800.5da701c0.js.map