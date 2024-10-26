"use strict";(self.webpackChunkmy_strapi_project=self.webpackChunkmy_strapi_project||[]).push([[8533,8859],{38533:(z,R,e)=>{e.d(R,{ProtectedCreatePage:()=>ee});var s=e(92132),u=e(2129),M=e(12545),x=e(3001),U=e(68859),B=e(15126),K=e(63299),O=e(67014),h=e(59080),o=e(79275),_=e(14718),D=e(21272),j=e(82437),S=e(61535),v=e(5790),b=e(12083),T=e(35223),k=e(5409),H=e(74930),ae=e(2600),oe=e(48940),re=e(41286),Y=e(56336),ie=e(13426),de=e(84624),I=e(77965),le=e(54257),Q=e(71210),N=e(51187),X=e(39404),_e=e(58692),Ee=e(501),ce=e(57646),Z=e(23120),he=e(44414),J=e(25962),ge=e(14664),Me=e(42588),y=e(90325),p=e(62785),W=e(87443),Pe=e(41032),G=e(22957),me=e(93179),ue=e(73055),w=e(15747),De=e(85306),Oe=e(26509),ve=e(32058),fe=e(81185),Ce=e(82261),Ae=e(72810),q=e(18022),Te=e(27818),F=e(74544);const ee=()=>{const se=(0,M.j)(x.s);return(0,s.jsx)(u.kz,{permissions:se.settings?.webhooks.create,children:(0,s.jsx)(U.E,{})})}},68859:(z,R,e)=>{e.r(R),e.d(R,{E:()=>te,a:()=>F,b:()=>Se});var s=e(92132),u=e(21272),M=e(83997),x=e(8361),U=e(43064),B=e(46462),K=e(66809),O=e(84843),h=e(81621),o=e(98765),_=e(30893),D=e(379),j=e(4181),S=e(50215),v=e(94061),b=e(90151),T=e(68074),k=e(7537),H=e(18629),ae=e(76517),oe=e(80782),re=e(55356),Y=e(85963),ie=e(4198),de=e(38413),I=e(2129),le=e(71389),Q=e(17703),N=e(12545),X=e(27818),_e=e(3001),Ee=e(21610),ce=e(5194),Z=e(68802),he=e(84795),J=e(54514),ge=e(98052),Me=e(46270),y=e(61535),p=e(54894),W=e(12083),Pe=e(89032),G=e(79793),me=e(74544);const[ue,w]=(0,Pe.q)("WebhookEvent"),De=({children:t})=>{const{formatMessage:n}=(0,p.A)(),{collectionTypes:a,isLoading:E}=(0,X.u)(),r=u.useMemo(()=>a.some(i=>i.options?.draftAndPublish===!0),[a]),c=n({id:"Settings.webhooks.form.events",defaultMessage:"Events"});return(0,s.jsx)(ue,{isDraftAndPublish:r,children:(0,s.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:1,children:[(0,s.jsx)(x.d,{"aria-hidden":!0,children:c}),E&&(0,s.jsx)(U.a,{children:n({id:"Settings.webhooks.events.isLoading",defaultMessage:"Events loading"})}),(0,s.jsx)(Oe,{"aria-label":c,children:t})]})})},Oe=(0,G.Ay)(B.X)`
  tbody tr:nth-child(odd) {
    background: ${({theme:t})=>t.colors.neutral100};
  }

  thead th span {
    color: ${({theme:t})=>t.colors.neutral500};
  }

  td,
  th {
    padding-block-start: ${({theme:t})=>t.spaces[3]};
    padding-block-end: ${({theme:t})=>t.spaces[3]};
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr td:first-child {
    /**
     * Add padding to the start of the first column to avoid the checkbox appearing
     * too close to the edge of the table
     */
    padding-inline-start: ${({theme:t})=>t.spaces[2]};
  }
`,ve=t=>{const n=[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"}];return t&&(n.push({id:"app.utils.publish",defaultMessage:"Publish"}),n.push({id:"app.utils.unpublish",defaultMessage:"Unpublish"})),n},fe=({getHeaders:t=ve})=>{const{isDraftAndPublish:n}=w("Headers"),{formatMessage:a}=(0,p.A)(),E=t(n);return(0,s.jsx)(K.r,{children:(0,s.jsxs)(O.N,{children:[(0,s.jsx)(h.e,{children:(0,s.jsx)(o.s,{children:a({id:"Settings.webhooks.event.select",defaultMessage:"Select event"})})}),E.map(r=>["app.utils.publish","app.utils.unpublish"].includes(r?.id??"")?(0,s.jsx)(h.e,{title:a({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for content with draft & publish enabled"}),children:(0,s.jsx)(_.o,{variant:"sigma",textColor:"neutral600",children:a(r)})},r.id):(0,s.jsx)(h.e,{children:(0,s.jsx)(_.o,{variant:"sigma",textColor:"neutral600",children:a(r)})},r.id))]})})},Ce=({providedEvents:t})=>{const{isDraftAndPublish:n}=w("Body"),a=t||Ae(n),{values:E,handleChange:r}=(0,y.j7)(),c="events",i=E.events,m=[],f=i.reduce((d,l)=>{const P=l.split(".")[0];return d[P]||(d[P]=[]),d[P].push(l),d},{}),g=({target:{name:d,value:l}})=>{const P=new Set(i);l?P.add(d):P.delete(d),r({target:{name:c,value:Array.from(P)}})},C=({target:{name:d,value:l}})=>{const P=new Set(i);l?a[d].forEach(L=>{m.includes(L)||P.add(L)}):a[d].forEach(L=>P.delete(L)),r({target:{name:c,value:Array.from(P)}})};return(0,s.jsx)(D.f,{children:Object.entries(a).map(([d,l])=>(0,s.jsx)(q,{disabledEvents:m,name:d,events:l,inputValue:f[d],handleSelect:g,handleSelectAll:C},d))})},Ae=t=>{const n=["entry.create","entry.update","entry.delete"];return t&&n.push("entry.publish","entry.unpublish"),{entry:n,media:["media.create","media.update","media.delete"]}},q=({disabledEvents:t=[],name:n,events:a=[],inputValue:E=[],handleSelect:r,handleSelectAll:c})=>{const{formatMessage:i}=(0,p.A)(),m=a.filter(l=>!t.includes(l)),f=E.length>0,g=E.length===m.length,C=({target:{name:l}})=>{c({target:{name:l,value:!g}})},d=5;return(0,s.jsxs)(O.N,{children:[(0,s.jsx)(h.N,{children:(0,s.jsx)(j.S,{indeterminate:f&&!g,"aria-label":i({id:"global.select-all-entries",defaultMessage:"Select all entries"}),name:n,onChange:C,value:g,children:Te(n)})}),a.map(l=>(0,s.jsx)(h.N,{children:(0,s.jsx)(S.J,{disabled:t.includes(l),"aria-label":l,name:l,value:E.includes(l),onValueChange:P=>r({target:{name:l,value:P}})})},l)),a.length<d&&(0,s.jsx)(h.N,{colSpan:d-a.length})]})},Te=t=>t.replace(/-/g," ").split(" ").map(n=>n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()).join(" "),F={Root:De,Headers:fe,Body:Ce,Row:q},ee=()=>(0,s.jsxs)(F.Root,{children:[(0,s.jsx)(F.Headers,{}),(0,s.jsx)(F.Body,{})]}),se=()=>{const{formatMessage:t}=(0,p.A)(),{values:n,errors:a}=(0,y.j7)();return(0,s.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:1,children:[(0,s.jsx)(x.d,{children:t({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})}),(0,s.jsx)(v.a,{padding:8,background:"neutral100",hasRadius:!0,children:(0,s.jsx)(y.ED,{validateOnChange:!1,name:"headers",render:({push:E,remove:r})=>(0,s.jsxs)(b.x,{gap:4,children:[n.headers.map((c,i)=>{const m=a.headers?.[i],f=typeof m=="object"?m.key:void 0,g=typeof m=="object"?m.value:void 0;return(0,s.jsxs)(u.Fragment,{children:[(0,s.jsx)(T.E,{col:6,children:(0,s.jsx)(y.D0,{as:Ie,name:`headers.${i}.key`,"aria-label":`row ${i+1} key`,label:t({id:"Settings.webhooks.key",defaultMessage:"Key"}),error:f})}),(0,s.jsx)(T.E,{col:6,children:(0,s.jsxs)(M.s,{alignItems:"flex-end",children:[(0,s.jsx)(v.a,{style:{flex:1},children:(0,s.jsx)(y.D0,{as:k.k,name:`headers.${i}.value`,"aria-label":`row ${i+1} value`,label:t({id:"Settings.webhooks.value",defaultMessage:"Value"}),error:g})}),(0,s.jsx)(M.s,{paddingLeft:2,style:{alignSelf:"center"},paddingTop:g?0:5,children:(0,s.jsx)(I.yX,{disabled:n.headers.length===1,onClick:()=>r(i),label:t({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:i+1})})})]})})]},`${i}.${c.key}`)}),(0,s.jsx)(T.E,{col:12,children:(0,s.jsx)(H.Q,{type:"button",onClick:()=>{E({key:"",value:""})},startIcon:(0,s.jsx)(ce.A,{}),children:t({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"})})})]})})})]})},Ie=({name:t,onChange:n,value:a,...E})=>{const{values:{headers:r}}=(0,y.j7)(),[c,i]=u.useState([...ye]);u.useEffect(()=>{const g=ye.filter(C=>!r?.some(d=>d.key!==a&&d.key===C));i(g)},[r,a]);const m=g=>{n({target:{name:t,value:g}})},f=g=>{i(C=>[...C,g]),m(g)};return(0,s.jsx)(ae.nP,{...E,onClear:()=>m(""),onChange:m,onCreateOption:f,placeholder:"",value:a,children:c.map(g=>(0,s.jsx)(oe.j,{value:g,children:g},g))})},ye=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"],pe=({isPending:t,onCancel:n,response:a})=>{const{statusCode:E,message:r}=a??{},{formatMessage:c}=(0,p.A)();return(0,s.jsx)(v.a,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0,children:(0,s.jsxs)(b.x,{gap:4,style:{alignItems:"center"},children:[(0,s.jsx)(T.E,{col:3,children:(0,s.jsx)(_.o,{children:c({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"})})}),(0,s.jsx)(T.E,{col:3,children:(0,s.jsx)(Re,{isPending:t,statusCode:E})}),(0,s.jsx)(T.E,{col:6,children:t?(0,s.jsx)(M.s,{justifyContent:"flex-end",children:(0,s.jsx)("button",{onClick:n,type:"button",children:(0,s.jsxs)(M.s,{gap:2,alignItems:"center",children:[(0,s.jsx)(_.o,{textColor:"neutral400",children:c({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})}),(0,s.jsx)(V,{as:Z.A,color:"neutral400"})]})})}):(0,s.jsx)(xe,{statusCode:E,message:r})})]})})},V=G.Ay.svg(({theme:t,color:n})=>`
  width: ${12/16}rem;
  height: ${12/16}rem;


  ${n?(0,G.AH)`
          path {
            fill: ${t.colors[n]};
          }
        `:""}
`),Re=({isPending:t,statusCode:n})=>{const{formatMessage:a}=(0,p.A)();return t||!n?(0,s.jsxs)(M.s,{gap:2,alignItems:"center",children:[(0,s.jsx)(V,{as:he.A}),(0,s.jsx)(_.o,{children:a({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"})})]}):n>=200&&n<300?(0,s.jsxs)(M.s,{gap:2,alignItems:"center",children:[(0,s.jsx)(V,{as:J.A,color:"success700"}),(0,s.jsx)(_.o,{children:a({id:"Settings.webhooks.trigger.success",defaultMessage:"success"})})]}):n>=300?(0,s.jsxs)(M.s,{gap:2,alignItems:"center",children:[(0,s.jsx)(V,{as:Z.A,color:"danger700"}),(0,s.jsxs)(_.o,{children:[a({id:"Settings.error",defaultMessage:"error"})," ",n]})]}):null},xe=({statusCode:t,message:n})=>{const{formatMessage:a}=(0,p.A)();return t?t>=200&&t<300?(0,s.jsx)(M.s,{justifyContent:"flex-end",children:(0,s.jsx)(_.o,{textColor:"neutral600",ellipsis:!0,children:a({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"})})}):t>=300?(0,s.jsx)(M.s,{justifyContent:"flex-end",children:(0,s.jsx)(M.s,{maxWidth:(0,I.a8)(250),justifyContent:"flex-end",title:n,children:(0,s.jsx)(_.o,{ellipsis:!0,textColor:"neutral600",children:n})})}):null:null},Le=({handleSubmit:t,triggerWebhook:n,isCreating:a,isTriggering:E,triggerResponse:r,data:c})=>{const{formatMessage:i}=(0,p.A)(),[m,f]=u.useState(!1),g=(0,N.p)(ee,async()=>(await e.e(5964).then(e.bind(e,15964))).EventsTableEE),C=l=>Object.keys(l).length?Object.entries(l).map(([P,L])=>({key:P,value:L})):[{key:"",value:""}],d=(0,y.Wx)({initialValues:{name:c?.name||"",url:c?.url||"",headers:C(c?.headers||{}),events:c?.events||[]},async onSubmit(l,P){await t(l,P),P.resetForm({values:l})},validationSchema:Ke({formatMessage:i}),validateOnChange:!1,validateOnBlur:!1});return g?(0,s.jsx)(y.QI,{value:d,children:(0,s.jsxs)(I.lV,{children:[(0,s.jsx)(re.Q,{primaryAction:(0,s.jsxs)(M.s,{gap:2,children:[(0,s.jsx)(Y.$,{onClick:()=>{n(),f(!0)},variant:"tertiary",startIcon:(0,s.jsx)(ge.A,{}),disabled:a||E,size:"L",children:i({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})}),(0,s.jsx)(Y.$,{startIcon:(0,s.jsx)(J.A,{}),type:"submit",size:"L",disabled:!d.dirty,loading:d.isSubmitting,children:i({id:"global.save",defaultMessage:"Save"})})]}),title:a?i({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):c?.name,navigationAction:(0,s.jsx)(Ee.N,{as:le.k2,startIcon:(0,s.jsx)(Me.A,{}),to:"/settings/webhooks",children:i({id:"global.back",defaultMessage:"Back"})})}),(0,s.jsx)(ie.s,{children:(0,s.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:4,children:[m&&(0,s.jsx)(pe,{isPending:E,response:r,onCancel:()=>f(!1)}),(0,s.jsx)(v.a,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0,children:(0,s.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:6,children:[(0,s.jsxs)(b.x,{gap:6,children:[(0,s.jsx)(T.E,{col:6,children:(0,s.jsx)(y.D0,{as:k.k,name:"name",error:d.errors.name,label:i({id:"global.name",defaultMessage:"Name"}),required:!0})}),(0,s.jsx)(T.E,{col:12,children:(0,s.jsx)(y.D0,{as:k.k,name:"url",error:d.errors.url,label:i({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),required:!0})})]}),(0,s.jsx)(se,{}),(0,s.jsx)(g,{})]})})]})})]})}):null},Ue=/(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/,Be=/(^$)|((https?:\/\/.*)(d*)\/?(.*))/,Ke=({formatMessage:t})=>W.Ik().shape({name:W.Yj().required(t({id:"Settings.webhooks.validation.name.required",defaultMessage:"Name is required"})).matches(Ue,t({id:"Settings.webhooks.validation.name.regex",defaultMessage:"The name must start with a letter and only contain letters, numbers, spaces and underscores"})),url:W.Yj().required(t({id:"Settings.webhooks.validation.url.required",defaultMessage:"Url is required"})).matches(Be,t({id:"Settings.webhooks.validation.url.regex",defaultMessage:"The value must be a valid Url"})),headers:W.RZ(n=>{const a=W.YO();if(n.length===1){const{key:E,value:r}=n[0];if(!E&&!r)return a}return a.of(W.Ik().shape({key:W.Yj().required(t({id:"Settings.webhooks.validation.key",defaultMessage:"Key is required"})),value:W.Yj().required(t({id:"Settings.webhooks.validation.value",defaultMessage:"Value is required"}))}))}),events:W.YO()}),je=t=>({...t,headers:t.headers.reduce((n,{key:a,value:E})=>(a!==""&&(n[a]=E),n),{})}),te=()=>{const n=(0,Q.W5)("/settings/webhooks/:id")?.params.id,a=n==="create",{replace:E}=(0,Q.W6)(),r=(0,I.hN)(),{_unstableFormatAPIError:c,_unstableFormatValidationErrors:i}=(0,I.wq)(),m=u.useCallback(c,[]),{isLoading:f}=(0,X.u)(),[g,C]=u.useState(!1),[d,l]=u.useState(),{isLoading:P,webhooks:L,error:ne,createWebhook:be,updateWebhook:ke,triggerWebhook:$e}=(0,me.u)({id:n},{skip:a});u.useEffect(()=>{ne&&r({type:"warning",message:m(ne)})},[ne,r,m]);const Ne=async()=>{try{C(!0);const $=await $e(n);if("error"in $){r({type:"warning",message:c($.error)});return}l($.data)}catch{r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}finally{C(!1)}},Fe=async($,We)=>{try{if(a){const A=await be(je($));if("error"in A){(0,N.x)(A.error)&&A.error.name==="ValidationError"?We.setErrors(i(A.error)):r({type:"warning",message:c(A.error)});return}r({type:"success",message:{id:"Settings.webhooks.created"}}),E(`/settings/webhooks/${A.data.id}`)}else{const A=await ke({id:n,...je($)});if("error"in A){(0,N.x)(A.error)&&A.error.name==="ValidationError"?We.setErrors(i(A.error)):r({type:"warning",message:c(A.error)});return}r({type:"success",message:{id:"notification.form.success.fields"}})}}catch{r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}};if(P||f)return(0,s.jsx)(I.Bl,{});const[He]=L??[];return(0,s.jsxs)(de.g,{children:[(0,s.jsx)(I.x7,{name:"Webhooks"}),(0,s.jsx)(Le,{data:He,handleSubmit:Fe,triggerWebhook:Ne,isCreating:a,isTriggering:g,triggerResponse:d})]})},Se=Object.freeze(Object.defineProperty({__proto__:null,EditPage:te,ProtectedEditPage:()=>{const t=(0,N.j)(_e.s);return(0,s.jsx)(I.kz,{permissions:t.settings?.webhooks.update,children:(0,s.jsx)(te,{})})}},Symbol.toStringTag,{value:"Module"}))},27818:(z,R,e)=>{e.d(R,{u:()=>K});var s=e(21272),u=e(2129),M=e(12545);const x=M.n.injectEndpoints({endpoints:O=>({getComponents:O.query({query:()=>({url:"/content-manager/components",method:"GET"}),transformResponse:h=>h.data}),getContentTypes:O.query({query:()=>({url:"/content-manager/content-types",method:"GET"}),transformResponse:h=>h.data})}),overrideExisting:!1}),{useGetComponentsQuery:U,useGetContentTypesQuery:B}=x;function K(){const{_unstableFormatAPIError:O}=(0,u.wq)(),h=(0,u.hN)(),o=U(),_=B();s.useEffect(()=>{_.error&&h({type:"warning",message:O(_.error)})},[_.error,O,h]),s.useEffect(()=>{o.error&&h({type:"warning",message:O(o.error)})},[o.error,O,h]);const D=o.isLoading||_.isLoading,j=s.useMemo(()=>(_?.data??[]).filter(v=>v.kind==="collectionType"&&v.isDisplayed),[_?.data]),S=s.useMemo(()=>(_?.data??[]).filter(v=>v.kind!=="collectionType"&&v.isDisplayed),[_?.data]);return{isLoading:D,components:s.useMemo(()=>o?.data??[],[o?.data]),collectionTypes:j,singleTypes:S}}},74544:(z,R,e)=>{e.d(R,{u:()=>O});var s=e(12545);const u=s.n.injectEndpoints({endpoints:h=>({getWebhooks:h.query({query:o=>({url:`/admin/webhooks/${o?.id??""}`,method:"GET"}),transformResponse:o=>Array.isArray(o.data)?o.data:[o.data],providesTags:(o,_,D)=>typeof D=="object"&&"id"in D?[{type:"Webhook",id:D.id}]:[...o?.map(({id:j})=>({type:"Webhook",id:j}))??[],{type:"Webhook",id:"LIST"}]}),createWebhook:h.mutation({query:o=>({url:"/admin/webhooks",method:"POST",data:o}),transformResponse:o=>o.data,invalidatesTags:[{type:"Webhook",id:"LIST"}]}),updateWebhook:h.mutation({query:({id:o,..._})=>({url:`/admin/webhooks/${o}`,method:"PUT",data:_}),transformResponse:o=>o.data,invalidatesTags:(o,_,{id:D})=>[{type:"Webhook",id:D}]}),triggerWebhook:h.mutation({query:o=>({url:`/admin/webhooks/${o}/trigger`,method:"POST"}),transformResponse:o=>o.data}),deleteManyWebhooks:h.mutation({query:o=>({url:"/admin/webhooks/batch-delete",method:"POST",data:o}),transformResponse:o=>o.data,invalidatesTags:(o,_,{ids:D})=>D.map(j=>({type:"Webhook",id:j}))})}),overrideExisting:!1}),{useGetWebhooksQuery:M,useCreateWebhookMutation:x,useUpdateWebhookMutation:U,useTriggerWebhookMutation:B,useDeleteManyWebhooksMutation:K}=u,O=(h=void 0,o)=>{const{data:_,isLoading:D,error:j}=M(h,o),[S,{error:v}]=x(),[b,{error:T}]=U(),[k]=B(),[H]=K();return{webhooks:_,isLoading:D,error:j||v||T,createWebhook:S,updateWebhook:b,triggerWebhook:k,deleteManyWebhooks:H}}}}]);
