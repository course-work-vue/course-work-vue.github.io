"use strict";(self["webpackChunkvue_3_authentication_jwt"]=self["webpackChunkvue_3_authentication_jwt"]||[]).push([[2096],{2096:function(e,a,t){t.r(a),t.d(a,{default:function(){return C}});var o=t(3396),i=t(7139),l=t(9242);const r=e=>((0,o.dD)("data-v-cfe1bab8"),e=e(),(0,o.Cn)(),e),s={class:"col-md-12 list"},d={key:0},n={class:"form-group d-inline-flex align-items-center mb-2 col-12"},c=r((()=>(0,o._)("label",{for:"group_id"},"Код направление:",-1))),f=["value"],u={class:"form-group d-inline-flex align-items-center mb-2 col-12"},m=r((()=>(0,o._)("label",{for:"prof_name"},"Название профиля:",-1))),p={class:"form-group mt-3"},b=["disabled"],_={class:"spinner-border spinner-border-sm"},g={key:1},h=(0,o.uE)('<div class="form-group" data-v-cfe1bab8><label class="form-control skeleton-text skeleton-animate" data-v-cfe1bab8></label><input type="text" class="form-control skeleton skeleton-animate" data-v-cfe1bab8></div><div class="form-group" data-v-cfe1bab8><label class="form-control skeleton-text skeleton-animate" data-v-cfe1bab8></label><input type="text" class="form-control skeleton skeleton-animate" data-v-cfe1bab8></div>',2),v=[h];function k(e,a,t,r,h,k){const y=(0,o.up)("Select2"),w=(0,o.up)("Field"),P=(0,o.up)("ErrorMessage"),D=(0,o.up)("router-link"),x=(0,o.up)("Form");return(0,o.wg)(),(0,o.iD)("div",s,[h.profile?((0,o.wg)(),(0,o.iD)("div",d,[(0,o.Wm)(x,{onSubmit:k.updateProfile,"validation-schema":h.schema},{default:(0,o.w5)((({errors:e})=>[(0,o._)("div",null,[(0,o._)("div",n,[c,(0,o.Wm)(y,{class:(0,i.C_)(["col-6",{"form-control is-invalid":e.group_id}]),modelValue:h.editedProfile.prof_dir_id,"onUpdate:modelValue":a[0]||(a[0]=e=>h.editedProfile.prof_dir_id=e),options:h.directions,settings:{theme:"bootstrap-5",width:"100%"}},null,8,["class","modelValue","options"]),(0,o.Wm)(w,{name:"group_id",as:"select",modelValue:h.editedProfile.prof_dir_id,"onUpdate:modelValue":a[1]||(a[1]=e=>h.editedProfile.prof_dir_id=e),hidden:""},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(h.directions,(e=>((0,o.wg)(),(0,o.iD)("option",{key:e.id,value:e.id},(0,i.zw)(e.text),9,f)))),128))])),_:1},8,["modelValue"]),(0,o.Wm)(P,{name:"group_id",class:"error-feedback"})]),(0,o._)("div",u,[m,(0,o.Wm)(w,{name:"prof_name",type:"text",class:(0,i.C_)(["form-control",{"is-invalid":e.subgroup}]),modelValue:h.editedProfile.prof_name,"onUpdate:modelValue":a[2]||(a[2]=e=>h.editedProfile.prof_name=e)},null,8,["class","modelValue"]),(0,o.Wm)(P,{name:"prof_name",class:"error-feedback"})]),(0,o._)("div",p,[(0,o._)("button",{class:"btn btn-primary btn-block float-end",disabled:h.loading},[(0,o.wy)((0,o._)("span",_,null,512),[[l.F8,h.loading]]),(0,o.Uk)(" Обновить профиль ")],8,b),(0,o.Wm)(D,{to:"/profiles",class:"btn btn-secondary ml-2 float-start"},{default:(0,o.w5)((()=>[(0,o.Uk)("Отмена")])),_:1})])])])),_:1},8,["onSubmit","validation-schema"])])):((0,o.wg)(),(0,o.iD)("div",g,v)),e.message?((0,o.wg)(),(0,o.iD)("div",{key:2,class:(0,i.C_)(["alert",e.successful?"alert-success":"alert-danger"])},(0,i.zw)(e.message),3)):(0,o.kq)("",!0)])}var y=t(5708),w=t(7629),P=t(5124),D=t(4677),x={setup(){const e=(0,D.pm)();return{toast:e}},components:{Form:y.l0,Field:y.gN,ErrorMessage:y.Bc},data(){const e=w.Ry().shape({});return{schema:e,loading:!1,profile:null,editedProfile:null,directions:null}},methods:{async loadProfilesData(){const e=this.$route.params.profileId;try{const a=await P.Z.getProfileById(e);this.profile=a.data,this.editedProfile={...a.data}}catch(a){console.error("Error:",a)}},async updateProfile(){try{this.loading=!0;const e=await P.Z.updateProfileById(this.profile.prof_id,this.editedProfile.prof_dir_id,this.editedProfile.prof_name);e.data,this.profile={...this.editedProfile},this.loading=!1,this.toast.success("Успешно обновили профиль!")}catch(e){console.error("Ошибка загрузки данных о профиле:",e)}},async loadDirectionsData(){try{const e=await P.Z.getDirectionsAsIdText();this.directions=Array.isArray(e.data)?e.data:[e.data],this.dataLoading=!1}catch(e){console.error("Error:",e)}}},created(){this.loadDirectionsData(),this.loadProfilesData()}},V=t(89);const W=(0,V.Z)(x,[["render",k],["__scopeId","data-v-cfe1bab8"]]);var C=W}}]);
//# sourceMappingURL=2096.e6d41f10.js.map