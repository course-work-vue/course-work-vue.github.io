"use strict";(self["webpackChunkvue_3_authentication_jwt"]=self["webpackChunkvue_3_authentication_jwt"]||[]).push([[8943],{8943:function(a,t,e){e.r(t),e.d(t,{default:function(){return P}});var o=e(6768),l=e(4232),s=e(5130);const n=a=>((0,o.Qi)("data-v-a19fa8fc"),a=a(),(0,o.jt)(),a),r={class:"col-md-12 list"},d={key:0},c={class:"form-group"},i=n((()=>(0,o.Lk)("label",{for:"listener_id"},"Слушатель",-1))),m=["value"],f={class:"form-group"},u=n((()=>(0,o.Lk)("label",{for:"payer_id"},"Законный представитель",-1))),p=["value"],v={class:"form-group d-inline-flex align-items-center float-none mb-2 col-5"},k=n((()=>(0,o.Lk)("label",{for:"contr_number"},"Номер договра",-1))),b={class:"form-group d-inline-flex align-items-center float-none mb-2 col-5"},g=n((()=>(0,o.Lk)("label",{for:"program_id"},"Программа",-1))),y=["value"],h={class:"form-group d-inline-flex align-items-center float-none mb-2 col-5"},_=["disabled"],C={class:"spinner-border spinner-border-sm"},x={key:1},V=(0,o.Fv)('<div class="form-group" data-v-a19fa8fc><label class="form-control skeleton-text skeleton-animate" data-v-a19fa8fc></label><input type="text" class="form-control skeleton skeleton-animate" data-v-a19fa8fc></div><div class="form-group" data-v-a19fa8fc><label class="form-control skeleton-text skeleton-animate" data-v-a19fa8fc></label><input type="text" class="form-control skeleton skeleton-animate" data-v-a19fa8fc></div><div class="form-group" data-v-a19fa8fc><label class="form-control skeleton-text skeleton-animate" data-v-a19fa8fc></label><input type="text" class="form-control skeleton skeleton-animate" data-v-a19fa8fc></div><div class="form-group" data-v-a19fa8fc><label class="form-control skeleton-text skeleton-animate" data-v-a19fa8fc></label><input type="text" class="form-control skeleton skeleton-animate" data-v-a19fa8fc></div><div class="form-group" data-v-a19fa8fc><label class="form-control skeleton-text skeleton-animate" data-v-a19fa8fc></label><input type="text" class="form-control skeleton skeleton-animate" data-v-a19fa8fc></div><div class="form-group" data-v-a19fa8fc><label class="form-control skeleton-text skeleton-animate" data-v-a19fa8fc></label><input type="text" class="form-control skeleton skeleton-animate" data-v-a19fa8fc></div><div class="form-group" data-v-a19fa8fc><label class="form-control skeleton-text skeleton-animate" data-v-a19fa8fc></label><input type="text" class="form-control skeleton skeleton-animate" data-v-a19fa8fc></div><div class="form-group" data-v-a19fa8fc><label class="form-control skeleton-text skeleton-animate" data-v-a19fa8fc></label><input type="text" class="form-control skeleton skeleton-animate" data-v-a19fa8fc></div><div class="form-group" data-v-a19fa8fc><label class="form-control skeleton-text skeleton-animate" data-v-a19fa8fc></label><input type="text" class="form-control skeleton skeleton-animate" data-v-a19fa8fc></div><div class="form-group" data-v-a19fa8fc><label class="form-control skeleton-text skeleton-animate" data-v-a19fa8fc></label><input type="text" class="form-control skeleton skeleton-animate" data-v-a19fa8fc></div><div class="form-group" data-v-a19fa8fc><label class="form-control skeleton-text skeleton-animate" data-v-a19fa8fc></label><input type="text" class="form-control skeleton skeleton-animate" data-v-a19fa8fc></div>',11),F=[V];function A(a,t,e,n,V,A){const L=(0,o.g2)("Select2"),w=(0,o.g2)("Field"),E=(0,o.g2)("ErrorMessage"),I=(0,o.g2)("router-link"),X=(0,o.g2)("Form");return(0,o.uX)(),(0,o.CE)("div",r,[V.contract?((0,o.uX)(),(0,o.CE)("div",d,[(0,o.bF)(X,{onSubmit:A.updateContract,"validation-schema":V.schema},{default:(0,o.k6)((({errors:a})=>[(0,o.Lk)("div",null,[(0,o.Lk)("div",c,[i,(0,o.bF)(L,{class:(0,l.C4)({"form-control is-invalid":a.listener_id}),modelValue:V.editedContract.listener_id,"onUpdate:modelValue":t[0]||(t[0]=a=>V.editedContract.listener_id=a),options:V.listeners,settings:{theme:"bootstrap-5",width:"100%"}},null,8,["class","modelValue","options"]),(0,o.bF)(w,{name:"listener_id",as:"select",modelValue:V.editedContract.listener_id,"onUpdate:modelValue":t[1]||(t[1]=a=>V.editedContract.listener_id=a),hidden:""},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(V.listeners,(a=>((0,o.uX)(),(0,o.CE)("option",{key:a.id,value:a.id},(0,l.v_)(a.text),9,m)))),128))])),_:1},8,["modelValue"]),(0,o.bF)(E,{name:"listener_id",class:"error-feedback"})]),(0,o.Lk)("div",f,[u,(0,o.bF)(L,{class:(0,l.C4)({"form-control is-invalid":a.payer_id}),modelValue:V.editedContract.payer_id,"onUpdate:modelValue":t[2]||(t[2]=a=>V.editedContract.payer_id=a),options:V.payers,settings:{theme:"bootstrap-5",width:"100%"}},null,8,["class","modelValue","options"]),(0,o.bF)(w,{name:"payer_id",as:"select",modelValue:V.editedContract.payer_id,"onUpdate:modelValue":t[3]||(t[3]=a=>V.editedContract.payer_id=a),hidden:""},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(V.payers,(a=>((0,o.uX)(),(0,o.CE)("option",{key:a.id,value:a.id},(0,l.v_)(a.text),9,p)))),128))])),_:1},8,["modelValue"]),(0,o.bF)(E,{name:"payer_id",class:"error-feedback"})]),(0,o.Lk)("div",v,[k,(0,o.bF)(w,{name:"contr_number",type:"text",value:"",class:(0,l.C4)(["form-control",{"is-invalid":a.contr_number}]),modelValue:V.editedContract.contr_number,"onUpdate:modelValue":t[4]||(t[4]=a=>V.editedContract.contr_number=a)},null,8,["class","modelValue"]),(0,o.bF)(E,{name:"contr_number",class:"error-feedback"})]),(0,o.Lk)("div",b,[g,(0,o.bF)(L,{class:(0,l.C4)({"form-control is-invalid":a.program_id}),modelValue:V.editedContract.program_id,"onUpdate:modelValue":t[5]||(t[5]=a=>V.editedContract.program_id=a),options:V.programs,settings:{theme:"bootstrap-5",width:"100%"}},null,8,["class","modelValue","options"]),(0,o.bF)(w,{name:"program_id",as:"select",modelValue:V.editedContract.program_id,"onUpdate:modelValue":t[6]||(t[6]=a=>V.editedContract.program_id=a),hidden:""},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(V.programs,(a=>((0,o.uX)(),(0,o.CE)("option",{key:a.id,value:a.id},(0,l.v_)(a.text),9,y)))),128))])),_:1},8,["modelValue"]),(0,o.bF)(E,{name:"program_id",class:"error-feedback"})]),(0,o.Lk)("div",h,[(0,o.Lk)("button",{class:"btn btn-primary btn-block float-start",disabled:V.loading},[(0,o.bo)((0,o.Lk)("span",C,null,512),[[s.aG,V.loading]]),(0,o.eW)(" Обновить договор ")],8,_),(0,o.Lk)("button",{type:"button",class:"btn btn-danger mx-2 float-end",onClick:t[7]||(t[7]=(...a)=>A.deleteContract&&A.deleteContract(...a))}," Удалить договор "),(0,o.bF)(I,{to:"/contracts",class:"btn btn-secondary ml-2 float-end"},{default:(0,o.k6)((()=>[(0,o.eW)("Отмена")])),_:1})])])])),_:1},8,["onSubmit","validation-schema"])])):((0,o.uX)(),(0,o.CE)("div",x,F)),a.message?((0,o.uX)(),(0,o.CE)("div",{key:2,class:(0,l.C4)(["alert",a.successful?"alert-success":"alert-danger"])},(0,l.v_)(a.message),3)):(0,o.Q3)("",!0)])}e(4114);var L=e(482),w=e(9041),E=e(619),I=e(7411),X={setup(){const a=(0,I.dj)();return{toast:a}},components:{Form:L.lV,Field:L.D0,ErrorMessage:L.Kw},data(){const a=w.Ik().shape({});return{schema:a,loading:!1,contract:null,editedContract:null,listeners:null,payers:null,programs:null}},methods:{async deleteContract(){try{this.loading=!0;const a=await E.A.deleteContractById(this.contract.id);a.data,this.loading=!1,this.toast.success("Успешно удалили!"),this.$router.push("/contracts")}catch(a){console.error("Ошибка загрузки данных",a)}},async loadContractDetail(){const a=this.$route.params.contractId;try{const t=await E.A.getContractById(a);this.contract=t.data,this.editedContract={...t.data}}catch(t){console.error("Error loading contract details:",t)}},async updateContract(){try{this.loading=!0;const a=await E.A.updateContractById(this.contract.id,this.editedContract.listener_id,this.editedContract.payer_id,this.editedContract.contr_number,this.editedContract.program_id);a.data,this.contract={...this.editedContract},this.loading=!1,this.toast.success("Успешно обновили!")}catch(a){console.error("Ошибка загрузки данных:",a)}},async loadListenersData(){try{const a=await E.A.getListenersAsIdText();this.listeners=Array.isArray(a.data)?a.data:[a.data]}catch(a){console.error("Ошибка загрузки данных:",a)}},async loadPayersData(){try{const a=await E.A.getPayersAsIdText();this.payers=Array.isArray(a.data)?a.data:[a.data]}catch(a){console.error("Ошибка загрузки данных:",a)}},async loadProgramsData(){try{const a=await E.A.getProgramsAsIdText();this.programs=Array.isArray(a.data)?a.data:[a.data]}catch(a){console.error("Ошибка загрузки данных:",a)}}},created(){this.loadContractDetail(),this.loadListenersData(),this.loadPayersData(),this.loadProgramsData()}},D=e(1241);const U=(0,D.A)(X,[["render",A],["__scopeId","data-v-a19fa8fc"]]);var P=U}}]);
//# sourceMappingURL=8943.c779c016.js.map