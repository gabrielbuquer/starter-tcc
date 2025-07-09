"use strict";exports.id=586,exports.ids=[586],exports.modules={4412:(e,a,t)=>{t.a(e,async(e,i)=>{try{t.d(a,{Lq:()=>n.Lq,UW:()=>n.UW,ai:()=>n.ai,gN:()=>n.gN,ly:()=>n.ly,z_:()=>n.z_});var n=t(25405),s=e([n]);n=(s.then?(await s)():s)[0],i()}catch(e){i(e)}})},5630:(e,a,t)=>{t.a(e,async(e,i)=>{try{t.d(a,{an:()=>h,qm:()=>x});var n=t(8732),s=t(82015),r=t(4722),c=t(29182),l=t(2e4),d=e([c,l]);[c,l]=d.then?(await d)():d;let o=(0,s.createContext)({}),h=({children:e,courseId:a})=>{let{data:t}=(0,r.useSession)(),{data:i,isLoading:d,mutate:h}=(0,l.UW)(t?.user?.id??"",a),x=(0,s.useMemo)(()=>i?.lessons,[i]),[p,y]=(0,s.useState)(0),[u,g]=(0,s.useState)(!1),m=(0,s.useMemo)(()=>p===(x?.length??0)-1,[p,x]),f=(0,s.useCallback)(e=>{let a=e<0?0:e>=(x?.length??0)?(x?.length??1)-1:e;y(a)},[x]),$=(0,s.useMemo)(()=>x?.[p]??null,[x,p]),{trigger:v,isMutating:j}=(0,l.gN)(t?.user?.id??"",$?.id??"");(0,s.useEffect)(()=>{if(x&&x.length>0&&0===p){let e=x.findIndex(e=>!e.endDate),a=-1!==e?e:x.length-1;y(a)}},[x]),(0,s.useEffect)(()=>{(async()=>{$&&!$.startDate&&(x.slice(0,p).some(e=>!e.endDate)?g(!0):(await v(),await h()))})()},[$]);let b=(0,s.useMemo)(()=>x?.every(e=>e.endDate)??!1,[x]),w=(0,s.useCallback)(async()=>{await v(),await h(),g(!1)},[v,h]);return(0,n.jsxs)(o.Provider,{value:{lessons:x,selectedLesson:$,isLoading:d,currentStep:p,isLastStep:m,isCourseFinished:b,setSelectedLesson:f,setConfirmationDialogOpen:g,updateCourse:h},children:[e,(0,n.jsx)(c.ConfirmationDialog,{title:"Iniciar li\xe7\xe3o",text:`Deseja iniciar a li\xe7\xe3o ${$?.name}? Voc\xea ainda tem uma li\xe7\xe3o anterior pendente.`,open:u,isLoading:j,cancelButtonText:"Ainda n\xe3o",successButtonText:"Iniciar li\xe7\xe3o",handleSuccess:w,handleCancel:()=>g(!1)})]})},x=()=>(0,s.useContext)(o);i()}catch(e){i(e)}})},6766:(e,a,t)=>{t.a(e,async(e,i)=>{try{t.d(a,{B:()=>o});var n=t(8732),s=t(81321),r=t(7191),c=t(2e4),l=t(55183),d=e([r,c,s]);[r,c,s]=d.then?(await d)():d;let o=()=>{let{data:e}=(0,c.LB)();return(0,n.jsxs)(l.mc,{children:[(0,n.jsx)(s.A,{variant:"h1",children:"Nossos cursos"}),(0,n.jsx)(l.Yr,{children:e?.map(e=>n.jsx(r.Z,{...e},e.id))})]})};i()}catch(e){i(e)}})},7191:(e,a,t)=>{t.a(e,async(e,i)=>{try{t.d(a,{Z:()=>n.Z});var n=t(88667),s=e([n]);n=(s.then?(await s)():s)[0],i()}catch(e){i(e)}})},8176:(e,a,t)=>{t.d(a,{U:()=>r,a:()=>s});var i=t(34120),n=t(66099);let s=(0,i.Ay)("div")`
  ${({theme:e})=>(0,n.css)`
    display: flex;
    align-items: center;
    gap: ${e.spacing(1)};
    padding: ${e.spacing(.6)} ${e.spacing(2)};
    box-sizing: border-box;
  `};
`,r=(0,i.Ay)("div")`
  ${({theme:e})=>(0,n.css)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: ${e.spacing(1)};
    width: 100%;
  `};
`},14505:(e,a,t)=>{t.a(e,async(e,i)=>{try{t.d(a,{LB:()=>d,Vf:()=>l});var n=t(14078),s=t(88742),r=e([n,s]);[n,s]=r.then?(await r)():r;let c=(0,s.zt)(),l=e=>{let a=e?{Authorization:`Bearer ${e}`}:{};return s.FH.get(c.COURSE_API,{headers:a}).then(e=>e.data)},d=()=>(0,n.default)(c.COURSE_API,l);i()}catch(e){i(e)}})},16833:(e,a,t)=>{t.a(e,async(e,i)=>{try{t.d(a,{o:()=>n.o});var n=t(76058),s=e([n]);n=(s.then?(await s)():s)[0],i()}catch(e){i(e)}})},19670:(e,a,t)=>{t.a(e,async(e,i)=>{try{t.d(a,{B:()=>n.B});var n=t(6766),s=e([n]);n=(s.then?(await s)():s)[0],i()}catch(e){i(e)}})},2e4:(e,a,t)=>{t.a(e,async(e,i)=>{try{t.d(a,{LB:()=>n.LB,Lq:()=>s.Lq,UW:()=>s.UW,Vf:()=>n.Vf,ai:()=>s.ai,gN:()=>s.gN,ly:()=>s.ly});var n=t(42091),s=t(4412),r=e([n,s]);[n,s]=r.then?(await r)():r,i()}catch(e){i(e)}})},21648:(e,a,t)=>{t.a(e,async(e,i)=>{try{t.d(a,{N:()=>o});var n=t(65542),s=t.n(n),r=t(16382),c=t.n(r),l=t(58894),d=e([l]);l=(d.then?(await d)():d)[0],console.log("NEXTAUTH_URL:",process.env.NEXTAUTH_URL);let o={providers:[c()({name:"Credentials",credentials:{username:{label:"Usu\xe1rio",type:"text"},password:{label:"Senha",type:"password"}},async authorize(e){try{let a=await (0,l.LN)({username:e?.username||"",password:e?.password||""});if(!a||!a.id)return null;return{id:a.id,name:a.name,email:a.email,type:a.type,birthDate:a.birthDate,classroom:a.classroom,accessToken:a.accessToken,refreshToken:a.refreshToken,accessTokenExpires:a.accessTokenExpires,refreshTokenExpires:a.refreshTokenExpires}}catch{return console.error("Error during authorization"),null}}})],callbacks:{async jwt({token:e,user:a}){if(a)return{...e,...a};if(new Date(e.accessTokenExpires)<new Date)try{let a=await (0,l.Be)(e.refreshToken);return{...e,...a}}catch(e){console.error("Error refreshing token:",e)}return e},session:async({session:e,token:a})=>(e.user={id:a.id,name:a.name,email:a.email,type:a.type,birthDate:a.birthDate,classroom:a.classroom,accessToken:a.accessToken,refreshToken:a.refreshToken,accessTokenExpires:a.accessTokenExpires,refreshTokenExpires:a.refreshTokenExpires},e)},pages:{signIn:"/monetix/login"},session:{strategy:"jwt"},secret:process.env.NEXTAUTH_SECRET};s()(o),i()}catch(e){i(e)}})},25405:(e,a,t)=>{t.a(e,async(e,i)=>{try{t.d(a,{Lq:()=>o,UW:()=>p,ai:()=>x,gN:()=>u,ly:()=>$,z_:()=>m});var n=t(72948),s=t(14078),r=t(88742),c=e([n,s,r]);[n,s,r]=c.then?(await c)():c;let l=(0,r.zt)(),d=(e,a)=>`${l.STUDENT_API}/${e}${l.COURSE_API}/${a}`,o=(e,a)=>`${l.STUDENT_API}/${e}${l.COURSER_API}/${a}`,h=(e,a)=>`${l.STUDENT_API}/${e}${l.LESSON_API}/${a}`,x=(e,a,t)=>{let i=t?{Authorization:`Bearer ${t}`}:{};return r.FH.get(o(e,a),{headers:i}).then(e=>e.data)},p=(e,a)=>{let t=e?`${o(e,a)}`:null;return(0,s.default)(t,()=>x(e,a))},y=(e,a)=>r.FH.patch(`${h(e,a)}/check`),u=(e,a)=>{let t=e?`${h(e,a)}/check`:null;return(0,n.default)(t,()=>y(e,a))},g=(e,a)=>r.FH.patch(`${h(e,a)}/finish`),m=(e,a)=>{let t=e?`${h(e,a)}/finish`:null;return(0,n.default)(t,()=>g(e,a))},f=(e,a)=>r.FH.patch(`${d(e,a)}/check`),$=(e,a)=>{let t=e?`${d(e,a)}/check`:null;return(0,n.default)(t,()=>f(e,a))};i()}catch(e){i(e)}})},30209:(e,a,t)=>{t.a(e,async(e,i)=>{try{t.d(a,{u:()=>x});var n=t(8732),s=t(82015),r=t(4722),c=t(56515),l=t(29182),d=t(5630),o=t(4412),h=e([l,d,o,c]);[l,d,o,c]=h.then?(await h)():h;let x=()=>{let{data:e}=(0,r.useSession)(),[a,t]=(0,s.useState)(!1),{selectedLesson:i,currentStep:h,isLastStep:x,isCourseFinished:p,setSelectedLesson:y,updateCourse:u}=(0,d.qm)(),{trigger:g,isMutating:m}=(0,o.z_)(e?.user?.id??"",i?.id??""),f=(0,s.useCallback)(()=>{t(!0)},[]),$=(0,s.useCallback)(async()=>{await g(),await u(),t(!1),x||y(h+1)},[g,u,x,y]);return(0,n.jsxs)(n.Fragment,{children:[i?.startDate&&!i?.endDate&&(0,n.jsx)(c.A,{variant:"contained",onClick:f,disabled:m,children:"Finalizar li\xe7\xe3o"}),p&&(0,n.jsx)(c.A,{variant:"contained",disabled:!0,children:"Curso finalizado"}),(0,n.jsx)(l.ConfirmationDialog,{title:"Finalizar li\xe7\xe3o",text:`Deseja finalizar a li\xe7\xe3o "${i?.name}"?`,open:a,isLoading:m,cancelButtonText:"Cancelar",successButtonText:"Finalizar",handleSuccess:$,handleCancel:()=>t(!1)})]})};i()}catch(e){i(e)}})},32447:(e,a,t)=>{t.a(e,async(e,i)=>{try{t.d(a,{R:()=>d});var n=t(8732),s=t(81321),r=t(82015),c=t(8176),l=e([s]);s=(l.then?(await l)():l)[0];let d=({title:e,content:a,icon:t})=>{let i=(0,r.isValidElement)(a);return(0,n.jsxs)(c.a,{children:[t,(0,n.jsxs)(c.U,{children:[(0,n.jsx)(s.A,{variant:"caption",children:e}),i?a:(0,n.jsx)(s.A,{variant:"body1",children:a})]})]})};i()}catch(e){i(e)}})},36484:(e,a,t)=>{t.a(e,async(e,i)=>{try{t.d(a,{u:()=>n.u});var n=t(30209),s=e([n]);n=(s.then?(await s)():s)[0],i()}catch(e){i(e)}})},38397:(e,a,t)=>{t.a(e,async(e,i)=>{try{t.d(a,{R:()=>n.R});var n=t(32447),s=e([n]);n=(s.then?(await s)():s)[0],i()}catch(e){i(e)}})},42091:(e,a,t)=>{t.a(e,async(e,i)=>{try{t.d(a,{LB:()=>n.LB,Vf:()=>n.Vf});var n=t(14505),s=e([n]);n=(s.then?(await s)():s)[0],i()}catch(e){i(e)}})},42389:(e,a,t)=>{t.a(e,async(e,i)=>{try{t.d(a,{B:()=>s.B,o:()=>n.o});var n=t(16833),s=t(19670),r=e([n,s]);[n,s]=r.then?(await r)():r,i()}catch(e){i(e)}})},46678:(e,a,t)=>{t.a(e,async(e,i)=>{try{t.d(a,{U:()=>n.U});var n=t(62846),s=e([n]);n=(s.then?(await s)():s)[0],i()}catch(e){i(e)}})},51382:(e,a,t)=>{t.d(a,{Vx:()=>l,Y9:()=>r,gZ:()=>c,mc:()=>s});var i=t(34120),n=t(66099);let s=(0,i.Ay)("div")`
  ${({theme:e})=>(0,n.css)`
    display: flex;
    flex-direction: column;
    gap: ${e.spacing(1)};
    width: 100%;
  `};
`,r=(0,i.Ay)("div")`
  ${({theme:e})=>(0,n.css)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: ${e.spacing(2)};
    border-bottom: 1px solid ${e.palette.divider};
  `};
`,c=(0,i.Ay)("div")`
  ${({theme:e})=>(0,n.css)`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: ${e.spacing(2)};
  `};
`,l=(0,i.Ay)("div")`
  ${({theme:e})=>(0,n.css)`
    display: flex;
    justify-content: center;
    align-items: center;
  `};
`},52331:(e,a,t)=>{t.d(a,{Yr:()=>r,mc:()=>s});var i=t(34120),n=t(66099);let s=(0,i.Ay)("div")`
  ${({theme:e})=>(0,n.css)`
    display: flex;
    flex-direction: column;
    gap: ${e.spacing(3)};
    width: 100%;
  `};
`,r=(0,i.Ay)("div")`
  ${({theme:e})=>(0,n.css)`
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: ${e.spacing(4)};

    ${e.breakpoints.down("lg")} {
      display: flex;
      flex-direction: column;
    }
  `};
`;(0,i.Ay)("aside")`
  ${({theme:e})=>(0,n.css)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${e.spacing(2)};
  `};
`,(0,i.Ay)("div")`
  ${({theme:e})=>(0,n.css)`
  `};
`},55183:(e,a,t)=>{t.d(a,{Yr:()=>r,mc:()=>s});var i=t(34120),n=t(66099);let s=(0,i.Ay)("div")`
  ${({theme:e})=>(0,n.css)`
    display: flex;
    flex-direction: column;
    gap: ${e.spacing(3)};
    width: 100%;
  `};
`,r=(0,i.Ay)("div")`
  ${({theme:e})=>(0,n.css)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${e.spacing(4)};

    ${e.breakpoints.down("lg")} {
      grid-template-columns: repeat(1, 1fr);
    }
  `};
`;(0,i.Ay)("aside")`
  ${({theme:e})=>(0,n.css)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${e.spacing(2)};
  `};
`,(0,i.Ay)("div")`
  ${({theme:e})=>(0,n.css)``};
`},62675:(e,a,t)=>{t.a(e,async(e,i)=>{try{t.d(a,{b:()=>u});var n=t(8732),s=t(92223),r=t.n(s),c=t(61906),l=t.n(c),d=t(65859),o=t(29182),h=t(5630),x=t(36484),p=t(76212),y=e([o,h,x]);[o,h,x]=y.then?(await y)():y;let u=()=>{let{lessons:e,selectedLesson:a,setSelectedLesson:t}=(0,h.qm)();return(0,n.jsxs)(p.mc,{children:[(0,n.jsx)(o.Box,{children:(0,n.jsx)(p.mO,{children:e?.map((e,i)=>n.jsxs(r(),{component:"button",selected:a?.id===e.id,onClick:()=>t(i),children:[n.jsx(l(),{primary:`${i+1} - ${e?.name}`}),n.jsx(p.j,{children:e?.endDate&&n.jsx(d.A,{color:"primary"})})]},e.id))})}),(0,n.jsx)(x.u,{})]})};i()}catch(e){i(e)}})},62846:(e,a,t)=>{t.a(e,async(e,i)=>{try{t.d(a,{U:()=>y});var n=t(8732),s=t(81321),r=t(57517),c=t(38034),l=t(4450),d=t(29182),o=t(5630),h=t(51382),x=e([d,o,s,r]);[d,o,s,r]=x.then?(await x)():x;let p=e=>({video:(0,n.jsx)(d.Video,{title:e?.name,src:e?.url}),pdf:(0,n.jsx)("iframe",{src:`${e?.url}`,width:"100%",height:"600px",title:e?.name,style:{border:"none"}}),form:(0,n.jsx)("iframe",{src:`${e?.url}`,width:"100%",height:"600px",title:e?.name,style:{border:"none"}})})[e?.type]||(0,n.jsx)(s.A,{children:"Tipo de conte\xfado n\xe3o suportado"}),y=()=>{let{lessons:e,currentStep:a,selectedLesson:t,setSelectedLesson:i}=(0,o.qm)();return(0,n.jsx)(d.Box,{children:(0,n.jsxs)(h.mc,{children:[(0,n.jsxs)(h.Y9,{children:[(0,n.jsxs)(s.A,{variant:"h4",component:"h1",children:[a+1," - ",t?.name]}),(0,n.jsxs)(h.Vx,{children:[(0,n.jsx)(r.A,{onClick:()=>i(a-1),disabled:a<=0,children:(0,n.jsx)(c.A,{})}),(0,n.jsx)(r.A,{onClick:()=>i(a+1),disabled:a===e?.length-1,children:(0,n.jsx)(l.A,{})})]})]}),(0,n.jsx)(h.gZ,{children:p(t)})]})})};i()}catch(e){i(e)}})},63195:(e,a,t)=>{t.a(e,async(e,i)=>{try{t.d(a,{B4:()=>n.B4,Lq:()=>n.Lq,Vf:()=>n.Vf,ai:()=>n.ai,an:()=>n.an,o5:()=>n.o5});var n=t(91263),s=e([n]);n=(s.then?(await s)():s)[0],i()}catch(e){i(e)}})},65122:(e,a,t)=>{t.d(a,{DG:()=>s,NU:()=>r,UE:()=>c});var i=t(8732),n=t(25163);let s="Ver curso",r="Indispon\xedvel",c={title:"Progresso",icon:(0,i.jsx)(n.A,{})}},76058:(e,a,t)=>{t.a(e,async(e,i)=>{try{t.d(a,{o:()=>h});var n=t(8732),s=t(29182),r=t(77951),c=t(46678),l=t(5630),d=t(52331),o=e([s,r,c,l]);[s,r,c,l]=o.then?(await o)():o;let h=()=>{let{isLoading:e}=(0,l.qm)();return e?(0,n.jsx)(s.Loader,{}):(0,n.jsx)(d.mc,{children:(0,n.jsxs)(d.Yr,{children:[(0,n.jsx)(c.U,{}),(0,n.jsx)(r.b,{})]})})};i()}catch(e){i(e)}})},76212:(e,a,t)=>{t.d(a,{j:()=>c,mO:()=>r,mc:()=>s});var i=t(34120),n=t(66099);let s=(0,i.Ay)("div")`
  ${({theme:e})=>(0,n.css)`
    display: flex;
    flex-direction: column;
    gap: ${e.spacing(2)};
    width: 100%;
  `};
`,r=(0,i.Ay)("div")`
  ${({theme:e})=>(0,n.css)`
    display: flex;
    flex-direction: column;
    gap: ${e.spacing(1)};
    width: 100%;
  `};
`,c=(0,i.Ay)("div")`
  ${({theme:e})=>(0,n.css)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${e.spacing(2.5)};
    height: ${e.spacing(2.5)};
    background-color: ${e.palette.grey[300]};
    border-radius: 50%;
  `};
`},77951:(e,a,t)=>{t.a(e,async(e,i)=>{try{t.d(a,{b:()=>n.b});var n=t(62675),s=e([n]);n=(s.then?(await s)():s)[0],i()}catch(e){i(e)}})},82044:(e,a,t)=>{t.d(a,{En:()=>o,QB:()=>d,YM:()=>r,az:()=>s,mj:()=>c,nP:()=>l});var i=t(34120),n=t(66099);let s=(0,i.Ay)("div")`
  ${({theme:e})=>(0,n.css)`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${e.palette.common.white};
    border-radius: ${e.shape.borderRadius}px;
    box-shadow: 0 2px 10px ${e.palette.grey[200]};
    box-sizing: border-box;
  `};
`,r=(0,i.Ay)("div")`
  ${({theme:e})=>(0,n.css)`
    display: flex;
    align-items: center;
    width: 100%;
    gap: ${e.spacing(1)};
    padding: ${e.spacing(2)};
    border-bottom: 1px solid ${e.palette.grey[200]};
    box-sizing: border-box;
  `};
`,c=(0,i.Ay)("div")`
  ${({theme:e})=>(0,n.css)`
    display: flex;
    flex-direction: column;
    gap: ${e.spacing(.5)};
  `};
`,l=(0,i.Ay)("div")`
  ${({theme:e})=>(0,n.css)`
    display: flex;
    align-items: center;
    width: 100%;
    gap: ${e.spacing(1)};
    padding: ${e.spacing(2)};
    border-bottom: 1px solid ${e.palette.grey[200]};
    box-sizing: border-box;
  `};
`,d=(0,i.Ay)("div")`
  ${({theme:e})=>(0,n.css)`
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid ${e.palette.grey[200]};
    box-sizing: border-box;
    padding: ${e.spacing(2)} 0;
    & > div {
      flex: 1;
      &:not(:last-child) {
        border-right: 1px solid ${e.palette.divider};
      }
    }
  `};
`,o=(0,i.Ay)("div")`
  ${({theme:e})=>(0,n.css)`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    padding: ${e.spacing(2)};
    box-sizing: border-box;
  `};
`},88667:(e,a,t)=>{t.a(e,async(e,i)=>{try{t.d(a,{Z:()=>m});var n=t(8732),s=t(81321),r=t(47131),c=t(56515),l=t(48038),d=t(4722),o=t(29182),h=t(88742),x=t(2e4),p=t(38397),y=t(82044),u=t(65122),g=e([o,h,x,p,s,r,c]);[o,h,x,p,s,r,c]=g.then?(await g)():g;let m=({id:e,name:a,description:t,progress:i,teacher:g,enabled:m})=>{let{push:f}=(0,l.useRouter)(),{data:$}=(0,d.useSession)(),{trigger:v}=(0,x.ly)($?.user?.id??"",e);return(0,n.jsxs)(y.az,{children:[(0,n.jsxs)(y.YM,{children:[(0,n.jsx)(o.Avatar,{acronym:(0,h.xB)(g.name)}),(0,n.jsxs)(y.mj,{children:[(0,n.jsx)(s.A,{variant:"caption",children:"Professor"}),g?.name&&(0,n.jsx)(s.A,{variant:"caption",children:g.name})]})]}),(0,n.jsx)(y.nP,{children:(0,n.jsx)(s.A,{variant:"h3",children:a})}),(0,n.jsx)(y.nP,{children:(0,n.jsx)(s.A,{variant:"body1",children:t})}),(0,n.jsx)(y.QB,{children:(0,n.jsx)(p.R,{title:`${u.UE.title} (${i??0}%)`,content:(0,n.jsx)(r.A,{variant:"determinate",value:i||0}),icon:u.UE.icon})}),(0,n.jsx)(y.En,{children:(0,n.jsx)(c.A,{variant:"contained",disabled:!m,onClick:()=>{i||v(),f(`/cursos/${e}`)},children:m?u.DG:u.NU})})]})};i()}catch(e){i(e)}})},91263:(e,a,t)=>{t.a(e,async(e,i)=>{try{t.d(a,{B4:()=>n.B,Lq:()=>s.Lq,Vf:()=>s.Vf,ai:()=>s.ai,an:()=>r.an,o5:()=>n.o});var n=t(42389),s=t(2e4),r=t(5630),c=e([n,s,r]);[n,s,r]=c.then?(await c)():c,i()}catch(e){i(e)}})}};