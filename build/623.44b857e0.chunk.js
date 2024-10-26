"use strict";(self.webpackChunkmy_strapi_project=self.webpackChunkmy_strapi_project||[]).push([[623],{66129:(h,i,t)=>{t.d(i,{A:()=>f});var e=t(68093),o=t.n(e),n=t(87438),m=t.n(n),l=m()(o());l.push([h.id,`.import{
  padding: 2rem;

}
.import-form{
  display: flex;
  flex-direction: column;
}
.import-error{
  color: red;
  margin-top: 6px;
  font-size: 14px;
}
.import-success{
  color: #0ad53a;
  margin-top: 6px;
  font-size: 14px;
}
import-lable-input{
  padding: .6rem 1.2rem;
  border: 1px solid 1       
}
.import-form-input{
  display: none;
}
.import-form-submit{
  min-width: 160px;
  padding:15px 24px;
  border-radius: 6px;
  transition: .6s ease all;
  border: 1px solid transparent;
  background-color: #4945ff;
  color: #fff;  
  font-weight: 600;
  width: max-content;
  cursor: pointer;
  /* min-width: ; */  
}
.import-form-submit:hover{
  background-color: #4845ffa9;
  /* border-color: #4945ff; */
  /* color: #000; */
}
.import-form-submit-wrap{
  width: max-content;
  margin-top: 32px;

}
.import-form-submit-wrap.loading {
  position: relative;
  pointer-events: none;

}

.import-form-submit-wrap.loading::after {
  content: '';
  position: absolute;
  top: 30%;
  right: 10px ;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`,""]);const f=l},30623:(h,i,t)=>{t.r(i),t.d(i,{default:()=>L});var e=t(92132),o=t(21272),n=t(17703),m=t(2129),l=t(69634),f=t(85072),E=t.n(f),S=t(97825),P=t.n(S),T=t(77659),D=t.n(T),M=t(55056),I=t.n(M),O=t(10540),C=t.n(O),B=t(41113),F=t.n(B),d=t(66129),r={};r.styleTagTransform=F(),r.setAttributes=I(),r.insert=D().bind(null,"head"),r.domAPI=P(),r.insertStyleElement=C();var U=E()(d.A,r);const H=d.A&&d.A.locals?d.A.locals:void 0,R=()=>{const[v,c]=(0,o.useState)(null),[x,a]=(0,o.useState)(""),[b,y]=(0,o.useState)(""),[p,A]=(0,o.useState)(!1),u=(0,o.useRef)(null),N=g=>{const s=g.target.files[0];s&&(s.size>5*1024*1024?(a("File is too large. Maximum file size is 5MB."),c(null)):(a(""),c(s)))},W=async g=>{if(g.preventDefault(),!v){a("Please select a file before submitting.");return}A(!0);try{const s=new FormData;s.append("files",v);const j=await fetch("/api/product-designs/import",{method:"POST",headers:{Authorization:"Bearer 1c330e26b8e2090711ee01f6b6fc56b955ccdf11800b97d5e0a6119e9f24416b2aaf89286a3e20182592ff983b86988e2fa7e15a78539875ec070a2187e9ece69f84df7ec4f6f849ceab6d57ff64efc8e0576f56599a6651629be7474221a1196cccbee35449afcd5a6fe3d0c97d41dd354a1340b2f5a9b4d182b92348847631"},body:s}),z=await j.json();if(j.ok)y("File imported successfully"),setTimeout(()=>{y(""),c(null),u.current&&(u.current.value="")},2e3);else{const K=z.message||"Failed to import file";a(K)}}catch(s){console.error("Error during file submission:",s),a("An error occurred during file submission")}finally{A(!1)}};return(0,e.jsx)("section",{className:"import",children:(0,e.jsx)("div",{className:"import-wrap",children:(0,e.jsxs)("form",{className:"import-form",onSubmit:W,children:[(0,e.jsx)("label",{htmlFor:"#file"}),(0,e.jsx)("input",{type:"file",id:"file",className:"import-form-inpu t",onChange:N,ref:u}),x&&(0,e.jsx)("p",{className:"import-error",children:x}),b&&(0,e.jsx)("p",{className:"import-success",children:b}),(0,e.jsx)("div",{className:`import-form-submit-wrap ${p?"loading":""}`,children:(0,e.jsx)("input",{type:"submit",value:p?"Importing...":"Import Product",className:"import-form-submit ",disabled:p})})]})})})},L=()=>(0,e.jsx)("div",{children:(0,e.jsxs)(n.dO,{children:[(0,e.jsx)(n.qh,{path:`/plugins/${l.A}`,component:R,exact:!0}),(0,e.jsx)(n.qh,{component:m.hH})]})})}}]);
