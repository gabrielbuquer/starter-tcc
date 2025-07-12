"use strict";exports.id=182,exports.ids=[182],exports.modules={3998:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{b:()=>r.b});var r=e(17710),i=t([r]);r=(i.then?(await i)():i)[0],o()}catch(t){o(t)}})},5784:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{v:()=>r.v});var r=e(97112),i=t([r]);r=(i.then?(await i)():i)[0],o()}catch(t){o(t)}})},6733:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{MH:()=>c,SX:()=>d,d_:()=>f,mP:()=>y});var r=e(63065),i=e(34120),n=e(66099),s=e(30973),l=t([s]);s=(l.then?(await l)():l)[0];let c=(0,i.Ay)("div")`
  ${({theme:t})=>(0,n.css)`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: ${t.spacing(0)};
    left: ${t.spacing(0)};
    bottom: ${t.spacing(0)};
    right: ${t.spacing(0)};
    z-index: 9;
    background-color: ${(0,s.zX)(t.palette.grey[100],.8)};
  `}
`,d=(0,i.Ay)("div")`
  ${({theme:t,isFullHeight:a})=>(0,n.css)`
    height: ${a?"100vh":"auto"};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: auto;
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: ${(0,s.zX)(t.palette.grey[100],.8)};
    z-index: 9;
  `}
`,f=(0,i.Ay)("div")`
  ${({theme:t,direction:a="column"})=>(0,n.css)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${t.palette.primary.main};
    position: relative;
    gap: ${t.spacing[200]};
    flex-direction: ${"column"===a?"column":"row"};
  `}
`,y=(0,i.Ay)(r.A)`
  ${({theme:t})=>(0,n.css)`
    width: ${t.spacing[500]};
    height: ${t.spacing[500]};
    will-change: transform;

    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }

    animation: rotation 1.5s infinite linear;
  `}
`;o()}catch(t){o(t)}})},6776:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{Ir:()=>m,Pc:()=>p,Wb:()=>h});var r=e(8732),i=e(14391),n=e(8839),s=e(30973),l=e(70145),c=e(73461),d=t([i,s,c]);[i,s,c]=d.then?(await d)():d;let f=(0,i.cssTransition)({enter:"animate__entering",exit:"animate__exiting"}),y=({message:t,button:a,closeToast:e})=>(0,r.jsxs)(c.mO,{children:[(0,r.jsxs)(c.$P,{children:[(0,r.jsx)(c.EY,{variant:"body1",children:t}),a&&(0,r.jsx)(c.X3,{onClick:a.action,children:a.text})]}),(0,r.jsx)(c.Jn,{onClick:e,children:(0,r.jsx)(n.A,{})})]}),p=({timeout:t,autoClose:a,icon:e,...o})=>(0,i.toast)((0,r.jsx)(y,{...o}),{transition:f,draggable:(0,s.fL)()||"ontouchstart"in window,autoClose:a||t,icon:!!e&&e,...o}),m=({componentId:t})=>{i.toast.dismiss(t)},h=()=>(0,r.jsx)(l.H,{children:(0,r.jsx)(c.y8,{position:"bottom-center",autoClose:4e3,closeButton:!1,closeOnClick:!1})});o()}catch(t){o(t)}})},12309:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{F6:()=>i.A,Xx:()=>r.X,aH:()=>r.A});var r=e(15312),i=e(67611),n=t([r,i]);[r,i]=n.then?(await n)():n,o()}catch(t){o(t)}})},13401:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{c:()=>r.c});var r=e(98400),i=t([r]);r=(i.then?(await i)():i)[0],o()}catch(t){o(t)}})},14104:(t,a,e)=>{e.d(a,{wi:()=>g,Y9:()=>m,gZ:()=>y,Mx:()=>b,mi:()=>d,Oy:()=>c});var o=e(8732),r=e(32770),i=e(34120),n=e(66099);let s=(0,i.Ay)("div")`
  ${({theme:t})=>(0,n.css)`
    background: ${t.palette.background.default};
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  `}
`;var l=e(72396);let c=(0,i.Ay)(l.A)`
  ${({theme:t})=>(0,n.css)`

  `}
`,d=(0,i.Ay)("div")`
  ${({theme:t,fullHeight:a=!0,centeredContent:e=!1})=>(0,n.css)`
    display: flex;
    flex-direction: column;
    width: 100vw;
    padding: 0 ${t.spacing(2)};

    ${a&&(0,n.css)`
      min-height: 85vmax;
    `}

    ${e&&(0,n.css)`
      align-items: center;
      justify-content: center;
    `}

    ${t.breakpoints.up("md")} {
      width: calc(100vw - ${t.spacing(6)});
      max-width: 1400px;
      ${a&&(0,n.css)`
        min-height: 80vh;
      `}
      margin: 0 auto;p
    }
  `}
`,f=(0,i.Ay)(c,{shouldForwardProp:t=>"hasMargin"!==t})`
  ${({theme:t,hasMargin:a})=>(0,n.css)`
    flex: 1;

    ${a&&(0,n.css)`
      padding-top: ${t.spacing(3)};
    `}
  `}
`,y=({children:t,testId:a,id:e,bgColor:r,fullHeight:i,centeredContent:n=!1,hasContainer:s=!1,hasMargin:l=!0})=>(0,o.jsx)(f,{id:e,"data-testid":a,as:"main",hasMargin:l,sx:{bgcolor:r},children:s?(0,o.jsx)(d,{fullHeight:i,centeredContent:n,children:t}):t}),p=(0,i.Ay)(c)`
  grid-column: 1 / -1;
  position: sticky;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
`,m=({children:t,testId:a,id:e,hasContainer:r=!1})=>(0,o.jsx)(p,{id:e,"data-testid":a,as:"header",children:r?(0,o.jsx)(d,{children:t}):t}),h=(0,i.Ay)(c,{shouldForwardProp:t=>"hasMargin"!==t})`
  margin-top: auto;
  ${({hasMargin:t})=>t&&(0,n.css)`
      margin-top: 52px;
    `}
`,g=({children:t,testId:a,id:e,hasContainer:r=!1,hasMargin:i=!0})=>(0,o.jsx)(h,{id:e,"data-testid":a,as:"div",hasMargin:i,children:r?(0,o.jsx)(d,{children:t}):t}),x=(0,r.createGlobalStyle)(["body{min-height:100vh;}"]);function b({children:t,testId:a,id:e}){return(0,o.jsxs)(s,{id:e,"data-testid":a,children:[(0,o.jsx)(x,{}),t]})}b.Header=m,b.Main=y,b.Footer=g},14195:(t,a,e)=>{e.d(a,{_:()=>r});var o=e(34120);let r=(0,o.Ay)("div")`
  display: block;
  min-height: 100vh;
  scroll-behavior: smooth;
`},15312:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{A:()=>c,X:()=>l});var r=e(8732),i=e(81321),n=e(6733),s=t([n,i]);[n,i]=s.then?(await s)():s;let l=({titleAlly:t="carregando o conte\xfado",text:a="Carregando",direction:e})=>(0,r.jsxs)(n.d_,{direction:e,children:[(0,r.jsx)(n.mP,{"aria-label":t}),(0,r.jsx)(i.A,{variant:"h3","aria-live":"polite","aria-atomic":"true",children:a})]}),c=({isFullScreen:t=!0,isFullHeight:a=!0})=>{let e=t?()=>(0,r.jsx)(n.MH,{children:(0,r.jsx)(l,{})}):()=>(0,r.jsx)(n.SX,{isFullHeight:a,children:(0,r.jsx)(l,{})});return(0,r.jsx)(e,{})};o()}catch(t){o(t)}})},16031:(t,a,e)=>{e.d(a,{r:()=>n});var o=e(8732),r=e(20059);let i={income:["#2c597b","#1e88e5","#1976d2","#1565c0","#0d47a1","#00acc1","#00838f","#006064","#5c6bc0","#3f51b5"],expense:["#c62828","#d32f2f","#b71c1c","#e53935","#f44336","#ef5350","#ff7043","#f4511e","#d84315","#bf360c"]},n=({data:t,type:a})=>(0,o.jsx)(r.PieChart,{series:[{arcLabel:t=>`R$ ${t.value}`,arcLabelMinAngle:35,arcLabelRadius:"60%",valueFormatter:t=>`R$ ${t.value}`,data:t}],viewBox:{x:60,y:0,width:500,height:250},width:500,height:250,colors:i[a],sx:{[`& .${r.pieArcLabelClasses.root}`]:{fill:"#FFF"}},margin:{top:16,bottom:16}})},16102:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{Ce:()=>r.Ce,EU:()=>n.E,Es:()=>r.Es,F6:()=>r.F6,IM:()=>n.I,Ir:()=>r.Ir,KK:()=>r.KK,Mx:()=>r.Mx,Od:()=>i.O,Oy:()=>r.Oy,Pc:()=>r.Pc,SG:()=>r.SG,Wb:()=>r.Wb,Xx:()=>r.Xx,Y9:()=>r.Y9,Yp:()=>r.Yp,a2:()=>r.a2,aH:()=>r.aH,az:()=>r.az,bH:()=>r.bH,bf:()=>r.bf,eu:()=>r.eu,gZ:()=>r.gZ,mi:()=>r.mi,n_:()=>r.n_,pU:()=>r.pU,rW:()=>r.rW,sj:()=>r.sj,v9:()=>r.v9,wi:()=>r.wi,yA:()=>r.yA});var r=e(20891),i=e(64841),n=e(51867),s=t([r,i]);[r,i]=s.then?(await s)():s,o()}catch(t){o(t)}})},16483:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{Y:()=>r.Y});var r=e(50708),i=t([r]);r=(i.then?(await i)():i)[0],o()}catch(t){o(t)}})},17348:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{K:()=>m});var r=e(8732),i=e(27159),n=e(16113),s=e(81321),l=e(58769),c=e(9561),d=e(41281),f=e(70650),y=e.n(f),p=t([i,n,s,l,c,d]);[i,n,s,l,c,d]=p.then?(await p)():p;let m=({open:t=!0,title:a,text:e,isLoading:o,cancelButtonText:f="Cancelar",successButtonText:p="Continuar",handleSuccess:m,handleCancel:h})=>(0,r.jsxs)(i.A,{open:t,onClose:h,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",style:{top:"10px"},children:[(0,r.jsx)(n.A,{id:"alert-dialog-title",children:(0,r.jsx)(s.A,{variant:"h4",component:"h3",children:a})}),(0,r.jsx)(l.A,{children:(0,r.jsx)(c.A,{id:"alert-dialog-description",children:(0,r.jsx)(s.A,{variant:"caption",component:"p",children:e})})}),(0,r.jsxs)(d.A,{style:{padding:"0 16px 16px 16px"},children:[(0,r.jsx)(y(),{onClick:h,children:f}),(0,r.jsx)(y(),{variant:"contained",loading:o,onClick:m,children:p})]})]});o()}catch(t){o(t)}})},17710:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{b:()=>p});var r=e(8732),i=e(82015),n=e.n(i),s=e(81851),l=e(46016),c=e(38018),d=e(75337),f=e(24527),y=t([d]);function p({items:t,onChange:a,renderItem:e}){let[o,y]=(0,i.useState)(null),p=(0,i.useMemo)(()=>t.find(t=>t.id===o?.id),[o,t]),m=(0,s.useSensors)((0,s.useSensor)(s.PointerSensor),(0,s.useSensor)(s.KeyboardSensor,{coordinateGetter:l.sortableKeyboardCoordinates}));return(0,r.jsxs)(s.DndContext,{sensors:m,onDragStart:({active:t})=>{y(t)},onDragEnd:({active:e,over:o})=>{if(o&&e.id!==o?.id){let r=t.findIndex(({id:t})=>t===e.id),i=t.findIndex(({id:t})=>t===o.id);a((0,l.arrayMove)(t,r,i))}y(null)},onDragCancel:()=>{y(null)},modifiers:[c.restrictToParentElement],children:[(0,r.jsx)(l.SortableContext,{items:t,children:(0,r.jsx)(f.B,{children:t.map((t,a)=>(0,r.jsx)(n().Fragment,{children:e(t,a)},t.id))})}),(0,r.jsx)(d.Xg,{children:p?e(p):null})]})}p.Item=(d=(y.then?(await y)():y)[0]).Uq,p.DragHandle=d.tk,o()}catch(t){o(t)}})},18751:(t,a,e)=>{e.d(a,{p:()=>r});var o=e(8732);let r=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, maximum-scale=1, minimum-scale=1, initial-scale=1, user-scalable=no, shrink-to-fit=no"}),(0,o.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge,chrome=1"}),(0,o.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico"})]})},20005:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{Ir:()=>r.Ir,Pc:()=>r.Pc,Wb:()=>r.Wb});var r=e(6776),i=t([r]);r=(i.then?(await i)():i)[0],o()}catch(t){o(t)}})},20710:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{n:()=>g});var r=e(8732),i=e(92141),n=e(27159),s=e(81321),l=e(57517),c=e(44642),d=e(74233),f=e.n(d),y=e(82015),p=e(38439),m=t([p,i,n,s,l]);function h(t){let a=(0,y.useRef)(null);return(0,r.jsx)(f(),{nodeRef:a,handle:"#draggable-dialog-title",cancel:'[class*="MuiDialogContent-root"]',children:(0,r.jsx)(i.A,{...t,ref:a})})}[p,i,n,s,l]=m.then?(await m)():m;let g=({open:t=!0,title:a,children:e,isDraggable:o=!1,fullWidth:i=!1,maxWidth:d="sm",onClose:f})=>(0,r.jsxs)(n.A,{open:t,PaperComponent:o?h:void 0,"aria-labelledby":"draggable-dialog-title",maxWidth:d,fullWidth:i,children:[(0,r.jsxs)(p.c,{isDraggable:o,children:[(0,r.jsx)(s.A,{variant:"h4",component:"p",id:"draggable-dialog-title",children:a}),(0,r.jsx)(l.A,{onClick:f,"aria-label":"close",children:(0,r.jsx)(c.A,{})})]}),(0,r.jsx)(p.C,{children:e})]});o()}catch(t){o(t)}})},20891:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{Ce:()=>g.C,Es:()=>m.E,F6:()=>w.F6,Ir:()=>v.Ir,KK:()=>y.K,Mx:()=>l.Mx,Oy:()=>l.Oy,Pc:()=>v.Pc,SG:()=>n.S,Wb:()=>v.Wb,Xx:()=>w.Xx,Y9:()=>l.Y9,Yp:()=>h.Y,a2:()=>_.a,aH:()=>w.aH,az:()=>c.a,bH:()=>x.b,bf:()=>b.b,eu:()=>s.e,gZ:()=>l.gZ,mi:()=>l.mi,n_:()=>f.n,pU:()=>i.p,rW:()=>p.r,sj:()=>r.s,v9:()=>u.v,wi:()=>l.wi,yA:()=>d.y});var r=e(70015),i=e(18751),n=e(42814),s=e(46239),l=e(14104),c=e(74929),d=e(58907),f=e(25682),y=e(41603),p=e(16031),m=e(59753),h=e(16483),g=e(71499),x=e(3998),b=e(49015),u=e(5784),v=e(20005),_=e(22827),w=e(12309),j=t([r,s,c,d,f,y,h,x,u,v,_,w]);[r,s,c,d,f,y,h,x,u,v,_,w]=j.then?(await j)():j,o()}catch(t){o(t)}})},22827:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{a:()=>r.a});var r=e(41012),i=t([r]);r=(i.then?(await i)():i)[0],o()}catch(t){o(t)}})},24527:(t,a,e)=>{e.d(a,{B:()=>i});var o=e(34120),r=e(66099);let i=(0,o.Ay)("div")`
  ${({theme:t})=>(0,r.css)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${t.spacing(2)};
    cursor: pointer;
    width: 100%;
  `}
`},25682:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{n:()=>r.n});var r=e(20710),i=t([r]);r=(i.then?(await i)():i)[0],o()}catch(t){o(t)}})},29182:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.r(a),e.d(a,{ActionDialog:()=>r.n_,Avatar:()=>r.eu,BarChart:()=>r.Es,Box:()=>r.az,CollapsibleTable:()=>r.bf,ConfirmationDialog:()=>r.KK,CustomLoader:()=>r.Xx,DesktopView:()=>r.EU,Footer:()=>r.wi,Header:()=>r.Y9,Loader:()=>r.aH,Main:()=>r.gZ,MainLayout:()=>r.Od,MetaTags:()=>r.pU,MobileView:()=>r.IM,MonetixProvider:()=>r.sj,MonthSelector:()=>r.a2,PageLayout:()=>r.Mx,PageLayoutContainerStyled:()=>r.mi,PageLayoutWrapperStyled:()=>r.Oy,PaginatedTable:()=>r.Yp,PasswordInput:()=>r.yA,PieChart:()=>r.rW,Preconnect:()=>r.SG,RouteLoader:()=>r.F6,SimpleTable:()=>r.v9,SnackBar:()=>r.Wb,SortableList:()=>r.bH,Video:()=>r.Ce,dismissSnackBar:()=>r.Ir,showSnackBar:()=>r.Pc});var r=e(16102),i=t([r]);r=(i.then?(await i)():i)[0],o()}catch(t){o(t)}})},32011:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{U:()=>r.U,t:()=>r.t});var r=e(48906),i=t([r]);r=(i.then?(await i)():i)[0],o()}catch(t){o(t)}})},38439:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{C:()=>d,c:()=>c});var r=e(34120),i=e(16113),n=e(66099),s=e(72396),l=t([i]);i=(l.then?(await l)():l)[0];let c=(0,r.Ay)(i.A,{shouldForwardProp:t=>"isDraggable"!==t})`
  ${({theme:t,isDraggable:a})=>(0,n.css)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${t.spacing(2)};
    cursor: ${a?"move":"default"};
  `}
`,d=(0,r.Ay)(s.A)`
  ${({theme:t})=>(0,n.css)`
    padding: ${t.spacing(2)};
    flex: 1 1 auto;
    -webkit-overflow-scrolling: touch;
    overflow-y: auto;
    padding: ${t.spacing(1)} ${t.spacing(3)} ${t.spacing(3)};
  `}
`;o()}catch(t){o(t)}})},41012:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{a:()=>g});var r=e(8732),i=e(50298),n=e.n(i),s=e(33146),l=e.n(s),c=e(1333),d=e.n(c),f=e(78396),y=e.n(f),p=e(82015),m=e(30973),h=t([m]);m=(h.then?(await h)():h)[0];let g=({lastMonths:t=12,fullWidth:a=!1,onChange:e})=>{let o=(0,p.useMemo)(()=>(0,m.PU)(t),[t]);return(0,r.jsxs)(d(),{sx:{minWidth:140},size:"small",fullWidth:a,children:[(0,r.jsx)(y(),{id:"month-select-label",children:"M\xeas"}),(0,r.jsx)(n(),{label:"M\xeas",labelId:"month-select-label",defaultValue:o[0].value,onChange:t=>{e?.(t.target.value)},fullWidth:a,children:o.map(t=>(0,r.jsx)(l(),{value:t.value,children:t.label},t.value))})]})};o()}catch(t){o(t)}})},41603:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{K:()=>r.K});var r=e(17348),i=t([r]);r=(i.then?(await i)():i)[0],o()}catch(t){o(t)}})},42814:(t,a,e)=>{e.d(a,{S:()=>i});var o=e(8732),r=e(82015);let i=({urlsList:t})=>(t.length>10&&console.warn("The web application should use maximum 10 pre-connect URLs for best performance. Please verify https://www.splunk.com/en_us/blog/learn/preconnect-resource-hints.html"),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("meta",{httpEquiv:"x-dns-prefetch-control",content:"on"}),t.map(t=>(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)("link",{rel:"preconnect",href:t}),(0,o.jsx)("link",{rel:"dns-prefetch",href:t})]},t))]}))},46239:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{e:()=>r.e});var r=e(99484),i=t([r]);r=(i.then?(await i)():i)[0],o()}catch(t){o(t)}})},48121:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{n:()=>l});var r=e(34120),i=e(69669),n=e(66099),s=t([i]);i=(s.then?(await s)():s)[0];let l=(0,r.Ay)(i.A)`
  ${()=>(0,n.css)`
    width: 40px;
    height: 40px;
  `};
`;o()}catch(t){o(t)}})},48906:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{U:()=>p,t:()=>m});var r=e(8732),i=e(82015),n=e(46016),s=e(65208),l=e(73029),c=e.n(l),d=e(34670),f=e(94139),y=t([f]);f=(y.then?(await y)():y)[0];let h=(0,i.createContext)({attributes:{},listeners:void 0,ref(){}});function p({children:t,id:a}){let{attributes:e,isDragging:o,listeners:l,setNodeRef:c,setActivatorNodeRef:d,transform:y,transition:p}=(0,n.useSortable)({id:a}),m=(0,i.useMemo)(()=>({attributes:e,listeners:l,ref:d}),[e,l,d]),g={opacity:o?.4:void 0,transform:s.CSS.Translate.toString(y),transition:p};return(0,r.jsx)(h.Provider,{value:m,children:(0,r.jsx)(f.U,{ref:c,style:g,children:t})})}function m(){let{attributes:t,listeners:a}=(0,i.useContext)(h);return(0,r.jsx)(c(),{...t,...a,children:(0,r.jsx)(d.A,{})})}o()}catch(t){o(t)}})},49015:(t,a,e)=>{e.d(a,{b:()=>T});var o=e(8732),r=e(82015),i=e(79631),n=e.n(i),s=e(73029),l=e.n(s),c=e(45384),d=e.n(c),f=e(99e3),y=e.n(f),p=e(84368),m=e.n(p),h=e(11887),g=e.n(h),x=e(18922),b=e.n(x),u=e(57322),v=e.n(u),_=e(81142),w=e.n(_),j=e(15501),$=e(72354);function k(t){let{row:a,columns:e}=t,[i,s]=(0,r.useState)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v(),{sx:{"& > *":{borderBottom:"unset"}},children:e.map((t,e)=>{let r=a[t.id];return(0,o.jsxs)(m(),{align:t.align,children:[0===e?(0,o.jsx)(l(),{"aria-label":"expand row",size:"small",onClick:()=>s(!i),style:{marginRight:"8px"},children:i?(0,o.jsx)($.A,{}):(0,o.jsx)(j.A,{})}):null,t.format&&"number"==typeof r?t.format(r):r]},t.id)})}),(0,o.jsx)(v(),{children:(0,o.jsx)(m(),{style:{padding:0},colSpan:6,children:(0,o.jsx)(n(),{in:i,timeout:"auto",unmountOnExit:!0,children:a.collapse})})})]})}function T({columns:t,rows:a}){return(0,o.jsx)(g(),{component:w(),children:(0,o.jsxs)(d(),{"aria-label":"collapsible table",children:[(0,o.jsx)(b(),{children:(0,o.jsx)(v(),{children:t.map(t=>(0,o.jsx)(m(),{align:t.align,style:{minWidth:t.minWidth},children:t.label},t.id))})}),(0,o.jsx)(y(),{children:a.map(a=>(0,o.jsx)(k,{row:a,columns:t},a.id))})]})})}},49346:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{O:()=>y});var r=e(8732),i=e(6812),n=e.n(i),s=e(20891),l=e(14195),c=t([s]);s=(c.then?(await c)():c)[0];let d=n()(()=>Promise.all([e.e(25),e.e(655),e.e(992)]).then(e.bind(e,90992)).then(({Header:t})=>t),{loadableGenerated:{modules:["../../libs/shared/ui/src/lib/layout/MainLayout/MainLayout.tsx -> ../../patterns/Header"]}}),f=n()(()=>e.e(458).then(e.bind(e,22458)).then(({Footer:t})=>t),{loadableGenerated:{modules:["../../libs/shared/ui/src/lib/layout/MainLayout/MainLayout.tsx -> ../../patterns/Footer"]}}),y=({children:t,bgColor:a,hasMargin:e=!0,hasContainer:o=!0,centeredContent:i=!1,simpleHeader:n=!1})=>(0,r.jsx)(l._,{children:(0,r.jsxs)(s.Mx,{id:"main-layout",testId:"main-layout",children:[(0,r.jsx)(s.Mx.Header,{id:"header",testId:"header",children:(0,r.jsx)(d,{simpleHeader:n})}),(0,r.jsx)(s.Mx.Main,{id:"main",testId:"main",bgColor:a,centeredContent:i,hasMargin:e,hasContainer:o,children:t}),(0,r.jsx)(s.Mx.Footer,{id:"footer",testId:"footer",hasMargin:e,children:(0,r.jsx)(f,{})})]})});o()}catch(t){o(t)}})},50708:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{Y:()=>g});var r=e(8732),i=e(92141),n=e(52937),s=e(94885),l=e(17957),c=e(92115),d=e(30621),f=e(4249),y=e(64209),p=e(12309),m=e(73905),h=t([p,i,n,s,l,c,d,f,y]);[p,i,n,s,l,c,d,f,y]=h.then?(await h)():h;let g=({columns:t,rows:a,actions:e,page:o,rowsPerPage:h=10,totalRows:g=0,loading:x=!1,onChangePage:b,onChangeRowsPerPage:u})=>(0,r.jsxs)(i.A,{sx:{width:"100%",overflow:"hidden",position:"relative"},children:[x&&(0,r.jsx)(p.aH,{isFullScreen:!1}),(0,r.jsxs)(n.A,{children:[(0,r.jsxs)(s.A,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,r.jsx)(l.A,{children:(0,r.jsx)(c.A,{children:t?.map(t=>r.jsx(d.A,{align:t.align,style:{minWidth:t.minWidth},children:t.label},t.id))})}),(0,r.jsx)(f.A,{children:a.map(a=>(0,r.jsx)(c.A,{hover:!0,role:"checkbox",tabIndex:-1,children:t?.map(t=>{let e=a[t.id];return r.jsx(d.A,{align:t.align,children:t.format&&"number"==typeof e?t.format(e):e},t.id)})},a.id))})]}),(0,r.jsxs)(m.G,{children:[e&&(0,r.jsx)(m.i,{children:e}),(0,r.jsx)(y.A,{rowsPerPageOptions:[],component:"div",count:g,rowsPerPage:h,page:o,labelRowsPerPage:"Linhas por p\xe1gina",labelDisplayedRows:({from:t,to:a,count:e})=>""+t+"-"+a+" de "+e,onPageChange:(t,a)=>{b?.(a)},onRowsPerPageChange:t=>{u?.(t)}})]})]})]});o()}catch(t){o(t)}})},51867:(t,a,e)=>{e.d(a,{E:()=>n,I:()=>s});var o=e(8732),r=e(52005),i=e(65140);let n=({children:t})=>{let a=(0,r.A)();return(0,i.A)(a.breakpoints.up("md"))?(0,o.jsx)(o.Fragment,{children:t}):null},s=({children:t})=>{let a=(0,r.A)();return(0,i.A)(a.breakpoints.down("md"))?(0,o.jsx)(o.Fragment,{children:t}):null}},58907:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{y:()=>r.y});var r=e(91732),i=t([r]);r=(i.then?(await i)():i)[0],o()}catch(t){o(t)}})},59753:(t,a,e)=>{e.d(a,{E:()=>n});var o=e(8732),r=e(81972),i=e(38608);let n=({series:t,dates:a,type:e="default"})=>{let n=(0,i.useTheme)();return(0,o.jsx)(r.BarChart,{series:t,colors:[n.palette.primary.light,n.palette.error.light],height:290,xAxis:[{scaleType:"band",data:a,valueFormatter:t=>`${t.getMonth()+1}/${t.getFullYear()}`}],yAxis:[{scaleType:"linear",valueFormatter:t=>`R$ ${t}`,disableTicks:!0,..."balance"===e?{colorMap:{type:"piecewise",thresholds:[0],colors:[n.palette.error.light,n.palette.primary.light]}}:{}}],margin:{top:20,bottom:30,left:80,right:20},borderRadius:4})}},60828:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{s:()=>b});var r=e(8732),i=e(27912),n=e.n(i),s=e(38608),l=e(4722),c=e(46401),d=e(18751),f=e(42814),y=e(13401),p=e(20005),m=e(12309),h=t([y,p,m]);[y,p,m]=h.then?(await h)():h;let g=["google.com"],x=(0,s.createTheme)({typography:{fontFamily:"var(--font-montserrat),Montserrat,sans-serif,Arial,-apple-system,BlinkMacSystemFont",h1:{fontSize:"32px",lineHeight:"34px"},h2:{fontSize:"24px",lineHeight:"26px"},h3:{fontSize:"20px",lineHeight:"22px"},h4:{fontSize:"16px",lineHeight:"18px"},h5:{fontSize:"14px",lineHeight:"16px"},h6:{fontSize:"12px",lineHeight:"14px"},body1:{fontSize:"16px",lineHeight:"18px"},body2:{fontSize:"12px",lineHeight:"14px"},caption:{fontSize:"14px",lineHeight:"16px"}},palette:{text:{primary:"#111",secondary:"#333"},primary:{main:"#2c597b",light:"#73a1c8"},background:{default:"#f2f4f8"}}}),b=({children:t,swrFallback:a})=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n(),{children:[(0,r.jsx)(d.p,{}),(0,r.jsx)(f.S,{urlsList:g})]}),(0,r.jsx)(l.SessionProvider,{children:(0,r.jsx)(y.c,{swrFallback:a,children:(0,r.jsxs)(s.ThemeProvider,{theme:x,children:[(0,r.jsx)(c.NextSeo,{titleTemplate:"%s | Monetix"}),t,(0,r.jsx)(p.Wb,{}),(0,r.jsx)(m.F6,{})]})})})]});o()}catch(t){o(t)}})},64841:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{O:()=>r.O});var r=e(89927),i=t([r]);r=(i.then?(await i)():i)[0],o()}catch(t){o(t)}})},67611:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{A:()=>c});var r=e(8732),i=e(48038),n=e(82015),s=e(15312),l=t([s]);s=(l.then?(await l)():l)[0];let c=()=>{let[t,a]=(0,n.useState)(!1),e=(0,i.useRouter)();return(0,n.useEffect)(()=>{let t=()=>{a(!0)},o=()=>{a(!1)};return e.events.on("routeChangeStart",t),e.events.on("routeChangeComplete",o),e.events.on("routeChangeError",o),()=>{e.events.off("routeChangeStart",t),e.events.off("routeChangeComplete",o),e.events.off("routeChangeError",o)}}),t?(0,r.jsx)(s.A,{}):void 0};o()}catch(t){o(t)}})},70015:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{s:()=>r.s});var r=e(60828),i=t([r]);r=(i.then?(await i)():i)[0],o()}catch(t){o(t)}})},70145:(t,a,e)=>{e.d(a,{H:()=>A});var o=e(66099),r=e(34120);let i=(0,o.keyframes)`
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
`,n=(0,o.keyframes)`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
`,s=(0,o.keyframes)`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,l=(0,o.keyframes)`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  to {
    transform: none;
  }
`,c=(0,o.keyframes)`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,d=(0,o.keyframes)`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`,f=(0,o.keyframes)`
  20% {
    transform: translate3d(0, -10px, 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`,y=(0,o.keyframes)`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  to {
    transform: none;
  }
`,p=(0,o.keyframes)`
  20% {
    transform: translate3d(0, 10px, 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,m=(0,o.keyframes)`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
`,h=(0,o.keyframes)`
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
`,g=(0,o.keyframes)`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    transform: perspective(400px);
  }
`,x=(0,o.keyframes)`
  from {
    transform: perspective(400px);
  }
  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }
  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,b=(0,o.keyframes)`
  from {
    transform: translate3d(110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`,u=(0,o.keyframes)`
  from {
    transform: translate3d(-110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`,v=(0,o.keyframes)`
  from {
    transform: translate3d(0, 110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`,_=(0,o.keyframes)`
  from {
    transform: translate3d(0, -110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`,w=(0,o.keyframes)`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(110%, 0, 0);
  }
`,j=(0,o.keyframes)`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(-110%, 0, 0);
  }
`,$=(0,o.keyframes)`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, 500px, 0);
  }
`,k=(0,o.keyframes)`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, -500px, 0);
  }
`,T=(0,o.keyframes)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,A=(0,r.Ay)("div")`
  ${({theme:t})=>(0,o.css)`
    .Toastify {
      --toastify-color-light: #fff;
      --toastify-color-dark: #121212;
      --toastify-color-info: #3498db;
      --toastify-color-success: #07bc0c;
      --toastify-color-warning: #f1c40f;
      --toastify-color-error: #e74c3c;
      --toastify-color-transparent: rgba(255, 255, 255, 0.7);
      --toastify-icon-color-info: var(--toastify-color-info);
      --toastify-icon-color-success: var(--toastify-color-success);
      --toastify-icon-color-warning: var(--toastify-color-warning);
      --toastify-icon-color-error: var(--toastify-color-error);
      --toastify-toast-width: 320px;
      --toastify-toast-background: #fff;
      --toastify-toast-min-height: 64px;
      --toastify-toast-max-height: 800px;
      --toastify-font-family: sans-serif;
      --toastify-z-index: 9999;
      --toastify-text-color-light: #757575;
      --toastify-text-color-dark: #fff;
      --toastify-text-color-info: #fff;
      --toastify-text-color-success: #fff;
      --toastify-text-color-warning: #fff;
      --toastify-text-color-error: #fff;
      --toastify-spinner-color: #616161;
      --toastify-spinner-color-empty-area: #e0e0e0;
      --toastify-color-progress-light: linear-gradient(
        to right,
        #4cd964,
        #5ac8fa,
        #007aff,
        #34aadc,
        #5856d6,
        #ff2d55
      );
      --toastify-color-progress-dark: #bb86fc;
      --toastify-color-progress-info: var(--toastify-color-info);
      --toastify-color-progress-success: var(--toastify-color-success);
      --toastify-color-progress-warning: var(--toastify-color-warning);
      --toastify-color-progress-error: var(--toastify-color-error);
    }

    .Toastify__toast-container {
      z-index: 9999;
      transform: translate3d(0, 0, var(--toastify-z-index) px);
      position: fixed;
      box-sizing: border-box;
      color: #fff;
    }
    .Toastify__toast-container--top-left {
      top: 1em;
      left: 1em;
    }
    .Toastify__toast-container--top-center {
      top: 1em;
      left: 50%;
      transform: translateX(-50%);
    }
    .Toastify__toast-container--top-right {
      top: 1em;
      right: 1em;
    }
    .Toastify__toast-container--bottom-left {
      bottom: 1em;
      left: 1em;
    }
    .Toastify__toast-container--bottom-center {
      bottom: 1em;
      left: 50%;
      transform: translateX(-50%);
    }
    .Toastify__toast-container--bottom-right {
      bottom: 1em;
      right: 1em;
    }

    .Toastify__toast {
      position: relative;
      min-height: var(--toastify-toast-min-height);
      box-sizing: border-box;
      margin-bottom: 1px;
      padding: 8px;
      border-radius: 4px;
      box-shadow:
        0 1px 10px 0 rgba(0, 0, 0, 0.1),
        0 2px 15px 0 rgba(0, 0, 0, 0.05);
      display: -ms-flexbox;
      display: flex;
      -ms-flex-pack: justify;
      justify-content: space-between;
      max-height: var(--toastify-toast-max-height);
      overflow: hidden;
      font-family: var(--toastify-font-family);
      cursor: pointer;
      direction: ltr;
      /* webkit only issue #791 */
      z-index: 0;
    }
    .Toastify__toast--rtl {
      direction: rtl;
    }
    .Toastify__toast-body {
      margin: auto 0;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      padding: 6px;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-align: center;
      align-items: center;
    }
    .Toastify__toast-body > div:last-child {
      -ms-flex: 1;
      flex: 1;
    }
    .Toastify__toast-icon {
      ${t.breakpoints.up("lg")} {
      }

      &:empty {
        width: 0;
        -webkit-margin-end: 0;
        margin-inline-end: 0;
      }

      -ms-flex-negative: 0;
      flex-shrink: 0;
      display: -ms-flexbox;
      display: flex;
    }

    .Toastify--animate {
      animation-fill-mode: both;
      animation-duration: 0.7s;
    }

    .Toastify--animate-icon {
      animation-fill-mode: both;
      animation-duration: 0.3s;
    }

    ${t.breakpoints.up("md")} {
      .Toastify__toast {
        margin-bottom: 0;
        border-radius: 0;
      }
    }
    .Toastify__toast-theme--dark {
      background: var(--toastify-color-dark);
      color: var(--toastify-text-color-dark);
    }
    .Toastify__toast-theme--light {
      background: var(--toastify-color-light);
      color: var(--toastify-text-color-light);
    }
    .Toastify__toast-theme--colored.Toastify__toast--default {
      background: var(--toastify-color-light);
      color: var(--toastify-text-color-light);
    }
    .Toastify__toast-theme--colored.Toastify__toast--info {
      color: var(--toastify-text-color-info);
      background: var(--toastify-color-info);
    }
    .Toastify__toast-theme--colored.Toastify__toast--success {
      color: var(--toastify-text-color-success);
      background: var(--toastify-color-success);
    }
    .Toastify__toast-theme--colored.Toastify__toast--warning {
      color: var(--toastify-text-color-warning);
      background: var(--toastify-color-warning);
    }
    .Toastify__toast-theme--colored.Toastify__toast--error {
      color: var(--toastify-text-color-error);
      background: var(--toastify-color-error);
    }

    .Toastify__progress-bar-theme--light {
      background: var(--toastify-color-progress-light);
    }
    .Toastify__progress-bar-theme--dark {
      background: var(--toastify-color-progress-dark);
    }
    .Toastify__progress-bar--info {
      background: var(--toastify-color-progress-info);
    }
    .Toastify__progress-bar--success {
      background: var(--toastify-color-progress-success);
    }
    .Toastify__progress-bar--warning {
      background: var(--toastify-color-progress-warning);
    }
    .Toastify__progress-bar--error {
      background: var(--toastify-color-progress-error);
    }
    .Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,
    .Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,
    .Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,
    .Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
      background: var(--toastify-color-transparent);
    }

    .Toastify__close-button {
      color: #fff;
      background: transparent;
      outline: none;
      border: none;
      padding: 0;
      cursor: pointer;
      opacity: 0.7;
      transition: 0.3s ease;
      -ms-flex-item-align: start;
      align-self: flex-start;
    }
    .Toastify__close-button--light {
      color: #000;
      opacity: 0.3;
    }
    .Toastify__close-button > svg {
      fill: currentColor;
      height: 16px;
      width: 14px;
    }
    .Toastify__close-button:hover,
    .Toastify__close-button:focus {
      opacity: 1;
    }

    .Toastify__progress-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 5px;
      z-index: var(--toastify-z-index);
      opacity: 0.7;
      transform-origin: left;
    }
    .Toastify__progress-bar--animated {
      animation: ${i} linear 1 forwards;
    }
    .Toastify__progress-bar--controlled {
      transition: transform 0.2s;
    }
    .Toastify__progress-bar--rtl {
      right: 0;
      left: initial;
      transform-origin: right;
    }

    .Toastify__spinner {
      width: 20px;
      height: 20px;
      box-sizing: border-box;
      border: 2px solid;
      border-radius: 100%;
      border-color: var(--toastify-spinner-color-empty-area);
      border-right-color: var(--toastify-spinner-color);
      animation: ${T} 0.65s linear infinite;
    }

    .Toastify__bounce-enter--top-left,
    .Toastify__bounce-enter--bottom-left {
      animation-name: ${l};
    }
    .Toastify__bounce-enter--top-right,
    .Toastify__bounce-enter--bottom-right {
      animation-name: ${n};
    }
    .Toastify__bounce-enter--top-center {
      animation-name: ${y};
    }
    .Toastify__bounce-enter--bottom-center {
      animation-name: ${d};
    }

    .Toastify__bounce-exit--top-left,
    .Toastify__bounce-exit--bottom-left {
      animation-name: ${c};
    }
    .Toastify__bounce-exit--top-right,
    .Toastify__bounce-exit--bottom-right {
      animation-name: ${s};
    }
    .Toastify__bounce-exit--top-center {
      animation-name: ${f};
    }
    .Toastify__bounce-exit--bottom-center {
      animation-name: ${p};
    }

    .Toastify__zoom-enter {
      animation-name: ${m};
    }

    .Toastify__zoom-exit {
      animation-name: ${h};
    }

    .Toastify__flip-enter {
      animation-name: ${g};
    }

    .Toastify__flip-exit {
      animation-name: ${x};
    }

    .Toastify__slide-enter--top-left,
    .Toastify__slide-enter--bottom-left {
      animation-name: ${u};
    }
    .Toastify__slide-enter--top-right,
    .Toastify__slide-enter--bottom-right {
      animation-name: ${b};
    }
    .Toastify__slide-enter--top-center {
      animation-name: ${_};
    }
    .Toastify__slide-enter--bottom-center {
      animation-name: ${v};
    }

    .Toastify__slide-exit--top-left,
    .Toastify__slide-exit--bottom-left {
      animation-name: ${j};
    }
    .Toastify__slide-exit--top-right,
    .Toastify__slide-exit--bottom-right {
      animation-name: ${w};
    }
    .Toastify__slide-exit--top-center {
      animation-name: ${k};
    }
    .Toastify__slide-exit--bottom-center {
      animation-name: ${$};
    }
  `}
`},71499:(t,a,e)=>{e.d(a,{C:()=>c});var o=e(8732),r=e(6812),i=e.n(r),n=e(32770);let s=e.n(n)()("div").withConfig({componentId:"sc-447365cb-0"})(["",";"],({theme:t})=>(0,n.css)(["display:flex;position:relative;aspect-ratio:16 / 9;max-width:100%;video{display:flex;object-fit:cover;object-position:center;}"])),l=i()(()=>Promise.resolve().then(e.t.bind(e,72769,23)),{loadableGenerated:{modules:["../../libs/shared/ui/src/lib/components/Video/Video.tsx -> react-player/youtube"]},ssr:!1}),c=({title:t,width:a="100%",height:e="100%",src:r,controls:i=!0,isAutoplay:n=!1})=>{let c=t=>{console.log("progress",t)};return(0,o.jsx)(s,{children:(0,o.jsx)(l,{"data-testid":"video-element",controls:i,url:r,progressInterval:200,playing:n,muted:!0,playsinline:!0,loop:!0,width:a,height:e,onProgress:t=>c(t.played),"aria-label":t})})}},73461:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{$P:()=>f,EY:()=>y,Jn:()=>m,X3:()=>p,mO:()=>d,y8:()=>c});var r=e(14391),i=e(34120),n=e(66099),s=e(81321),l=t([r,s]);[r,s]=l.then?(await l)():l;let c=(0,i.Ay)(r.ToastContainer)`
  ${({theme:t})=>(0,n.css)`
    width: 312px;
    max-width: calc(100vw - ${t.spacing[600]});
    ${t.breakpoints.up("lg")} {
      width: 456px;
    }
    padding: ${t.spacing[0]};

    .Toastify__progress-bar--default,
    .Toastify__progress-bar {
      background: ${t.palette.grey[800]};
    }
    .Toastify__toast-body {
      padding: ${t.spacing[0]};
      margin: ${t.spacing[0]};
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .Toastify__toast {
      padding: ${t.spacing(1)} ${t.spacing(2)};
      margin: ${t.spacing(1)};
      border-radius: ${t.spacing(.5)};
      box-shadow: ${t.shadows[10]};
      background-color: ${t.palette.grey[600]};
      cursor: default;
    }

    .Toastify__toast--success {
      background-color: ${t.palette.success.main};
      .Toastify__progress-bar--success {
        background-color: ${t.palette.success.dark};
      }
      .Toastify__toast-icon {
        color: ${t.palette.common.white};
      }
    }
    .Toastify__toast--error {
      background-color: ${t.palette.error.main};
      .Toastify__progress-bar--error {
        background-color: ${t.palette.error.dark};
      }
      .Toastify__toast-icon {
        color: ${t.palette.common.white};
      }
    }
    .Toastify__toast--warning {
      background-color: ${t.palette.warning.main};
      .Toastify__progress-bar--warning {
        background-color: ${t.palette.warning.dark};
      }
      .Toastify__toast-icon {
        color: ${t.palette.common.white};
      }
    }
    .Toastify__toast--info {
      background-color: ${t.palette.info.main};
      .Toastify__progress-bar--info {
        background-color: ${t.palette.info.dark};
      }
      .Toastify__toast-icon {
        color: ${t.palette.common.white};
      }
    }
    .animate__entering {
      animation: ${h({from:0,to:1})}
        0.6s linear both;
    }
    .animate__exiting {
      animation: ${g({from:1,to:0})}
        0.6s linear both;
    }
  `};
`,d=(0,i.Ay)("div")`
  ${({theme:t})=>(0,n.css)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    gap: ${t.spacing(1)};
  `}
`,f=(0,i.Ay)("div")`
  ${({theme:t})=>(0,n.css)`
    display: flex;
    justify-content: space-between;
    flex: 1;
    align-items: center;
    gap: ${t.spacing(1)};
  `}
`,y=(0,i.Ay)(s.A)`
  ${({theme:t})=>(0,n.css)`
    color: ${t.palette.common.white};
    font-family: ${t.typography.body1.fontFamily};
    font-size: ${t.typography.body1.fontSize};
    font-weight: ${t.typography.body1.fontWeight};
    line-height: ${t.typography.body1.lineHeight};
    text-align: left;
    text-decoration: none;
  `}
`,p=(0,i.Ay)("button")`
  ${({theme:t})=>(0,n.css)`
    border: none;
    background: none;
    text-decoration: underline;
    cursor: pointer;
    font-family: ${t.typography.body1.fontFamily};
    font-size: ${t.typography.body1.fontSize};
    font-weight: ${t.typography.body1.fontWeight};
    line-height: ${t.typography.body1.lineHeight};
  `}
`,m=(0,i.Ay)("button")`
  border: none;
  padding: 0;
  background: none;
  height: 24px;
  cursor: pointer;
  svg {
    color: ${({theme:t})=>t.palette.common.white};
  }
`,h=({from:t,to:a})=>(0,n.keyframes)`
  0% {
    opacity: ${t};
  }
  100% {
    opacity: ${a};
  }
`,g=({from:t,to:a})=>(0,n.keyframes)`
  0% {
    opacity: ${t};
  }
  100% {
    opacity: ${a};
  }
`;o()}catch(t){o(t)}})},73905:(t,a,e)=>{e.d(a,{G:()=>i,i:()=>n});var o=e(34120),r=e(66099);let i=(0,o.Ay)("div")`
  ${({theme:t})=>(0,r.css)`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: ${t.spacing(2)};
  `}
`,n=(0,o.Ay)("div")`
  ${({theme:t})=>(0,r.css)`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: ${t.spacing(1)};
  `}
`},74929:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{a:()=>r.a});var r=e(93476),i=t([r]);r=(i.then?(await i)():i)[0],o()}catch(t){o(t)}})},75337:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{Uq:()=>r.U,Xg:()=>i.X,tk:()=>r.t});var r=e(32011),i=e(78701),n=t([r]);r=(n.then?(await n)():n)[0],o()}catch(t){o(t)}})},78701:(t,a,e)=>{e.d(a,{X:()=>n});var o=e(8732),r=e(81851);let i={sideEffects:(0,r.defaultDropAnimationSideEffects)({styles:{active:{opacity:"0.4"}}})};function n({children:t}){return(0,o.jsx)(r.DragOverlay,{dropAnimation:i,children:t})}},89025:(t,a,e)=>{e.d(a,{V:()=>s,m:()=>n});var o=e(34120),r=e(66099),i=e(72396);let n=(0,o.Ay)(i.A)`
  ${({theme:t})=>(0,r.css)`
    display: flex;
    flex-direction: column;
    gap: ${t.spacing(1)};
    width: 100%;
  `};
`,s=(0,o.Ay)(i.A)`
  ${({theme:t})=>(0,r.css)`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: ${t.palette.common.white};
    border-radius: ${t.shape.borderRadius}px;
    box-shadow: 0 2px 5px #61616130;
    box-sizing: border-box;
  `};
`},89927:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{O:()=>r.O});var r=e(49346),i=t([r]);r=(i.then?(await i)():i)[0],o()}catch(t){o(t)}})},91732:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{y:()=>y});var r=e(8732),i=e(80856),n=e(60485),s=e(73749),l=e(2575),c=e(57517),d=e(82015),f=t([s,l,c]);[s,l,c]=f.then?(await f)():f;let y=(0,d.forwardRef)((t,a)=>{let[e,o]=(0,d.useState)(!1);return(0,r.jsx)(s.A,{...t,type:e?"text":"password",inputRef:a,slotProps:{input:{endAdornment:(0,r.jsx)(l.A,{position:"end",children:(0,r.jsx)(c.A,{"aria-label":e?"hide the password":"display the password",onClick:()=>o(t=>!t),edge:"end",children:e?(0,r.jsx)(i.A,{}):(0,r.jsx)(n.A,{})})})}}})});y.displayName="PasswordInput",o()}catch(t){o(t)}})},93476:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{a:()=>l});var r=e(8732),i=e(81321),n=e(89025),s=t([i]);i=(s.then?(await s)():s)[0];let l=({children:t,title:a})=>(0,r.jsxs)(n.m,{children:[a&&(0,r.jsx)(i.A,{variant:"h4",component:"h3",children:a}),(0,r.jsx)(n.V,{children:t})]});o()}catch(t){o(t)}})},94139:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{U:()=>l});var r=e(34120),i=e(92141),n=e(66099),s=t([i]);i=(s.then?(await s)():s)[0];let l=(0,r.Ay)(i.A)`
  ${({theme:t})=>(0,n.css)`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    align-items: center;
    padding: ${t.spacing(2)};
    width: 100%;
  `}
`;o()}catch(t){o(t)}})},97112:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{v:()=>y});var r=e(8732),i=e(52937),n=e(94885),s=e(17957),l=e(92115),c=e(30621),d=e(4249),f=t([i,n,s,l,c,d]);[i,n,s,l,c,d]=f.then?(await f)():f;let y=({columns:t,rows:a,hasTableHead:e=!1})=>(0,r.jsx)(i.A,{children:(0,r.jsxs)(n.A,{stickyHeader:!0,"aria-label":"sticky table",children:[e&&(0,r.jsx)(s.A,{children:(0,r.jsx)(l.A,{children:t.map(t=>(0,r.jsx)(c.A,{align:t.align,style:{minWidth:t.minWidth},children:t.label},t.id))})}),(0,r.jsx)(d.A,{children:a.map(a=>(0,r.jsx)(l.A,{hover:!0,role:"checkbox",tabIndex:-1,children:t.map(t=>{let e=a[t.id];return(0,r.jsx)(c.A,{align:t.align,style:{minWidth:t.minWidth},children:t.format&&"number"==typeof e?t.format(e):e},t.id)})},a.id))})]})});o()}catch(t){o(t)}})},98400:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{c:()=>s});var r=e(8732),i=e(14078),n=t([i]);i=(n.then?(await n)():n)[0];let s=({swrFallback:t,children:a})=>(0,r.jsx)(i.SWRConfig,{value:{fallback:t,revalidateOnFocus:!1,revalidateIfStale:!1},children:a});o()}catch(t){o(t)}})},99484:(t,a,e)=>{e.a(t,async(t,o)=>{try{e.d(a,{e:()=>s});var r=e(8732),i=e(48121),n=t([i]);i=(n.then?(await n)():n)[0];let s=({acronym:t})=>(0,r.jsx)(i.n,{children:t});o()}catch(t){o(t)}})}};