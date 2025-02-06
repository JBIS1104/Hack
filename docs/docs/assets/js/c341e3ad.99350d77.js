"use strict";(self.webpackChunkmodlib_docs=self.webpackChunkmodlib_docs||[]).push([[871],{6579:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var n=i(6540),o=i(6297),s=i(6486),r=i(4848);const d=e=>{let{speed:t,direction:i,items:d}=e;const l=120,[p,a]=(0,n.useState)((()=>{const e=[...d,...d,...d].slice(0,Math.max(4,d.length)),t="down"===i?[...e].reverse():e;return"up"===i?[{id:0,position:0,content:t[0]},{id:1,position:l,content:t[1]},{id:2,position:240,content:t[2]},{id:3,position:360,content:t[3]}]:[{id:0,position:l,content:t[t.length-2]},{id:1,position:240,content:t[t.length-1]},{id:2,position:0,content:t[t.length-3]},{id:3,position:-120,content:t[t.length-4]}]}));return(0,n.useEffect)((()=>{const e=setInterval((()=>{a((e=>{const t=e.map((e=>({...e,position:"up"===i?(e.position-l+480)%480:(e.position+l)%480}))),n=Math.max(...t.map((e=>e.id)))+1,o=d[n%d.length];return"up"===i?(t.push({id:n,position:360,content:o}),t.slice(1)):(t.push({id:n,position:-120,content:o}),t.filter((e=>e.position<360)))}))}),t);return()=>clearInterval(e)}),[t,l,i,d]),(0,r.jsxs)("div",{style:{height:"340px",position:"relative",overflow:"hidden",width:"100px"},children:[(0,r.jsx)(o.N,{children:p.map((e=>(0,r.jsx)(s.P.div,{initial:{top:"up"===i?e.position+l:e.position-l},animate:{top:e.position},exit:{top:"up"===i?-100:360},transition:{duration:.5,ease:"easeInOut"},style:{position:"absolute",left:"50%",transform:"translateX(-50%)",width:"100px",height:"100px",backgroundColor:"#f0f0f0",borderRadius:"10px",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px",fontWeight:"bold"},children:e.content},e.id)))}),(0,r.jsx)("div",{style:{position:"absolute",top:"120px",left:"50%",transform:"translateX(-50%)",width:"100px",height:"100px",border:"1px solid orange",borderRadius:"10px",boxShadow:"0 0 20px rgba(255, 165, 0, 0.5)",pointerEvents:"none",backgroundColor:"rgba(255, 255, 255, 0)"}})]})},l=()=>(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center",gap:"10px"},children:[{title:"Devices",speed:4e3,direction:"up",items:["AiCamera","AiCamera","AiCamera"]},{title:"Models",speed:1500,direction:"down",items:["Nanodet","SSDMobilenet","DeeplabV3Plus"]},{title:"Apps",speed:3e3,direction:"up",items:["Annotator","Tracker","Matcher","Area","Heatmap"]}].map(((e,t)=>(0,r.jsx)(n.Fragment,{children:(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"10px"},children:[(0,r.jsx)("div",{style:{textAlign:"center",fontWeight:"bold"},children:e.title}),(0,r.jsx)(d,{speed:e.speed,direction:e.direction,items:e.items})]})},t)))});const p=function(){return(0,r.jsx)("div",{className:"flex items-center justify-center h-screen",children:(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsxs)("h1",{className:"font-bold text-center",children:["Application Module Library",(0,r.jsx)("br",{}),"Enabling rapid prototyping",(0,r.jsx)("br",{})]}),(0,r.jsx)("div",{style:{padding:"50px"}}),(0,r.jsx)(l,{})]})})}}}]);