"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[902],{8767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=n(4848),i=n(8453);const a={sidebar_position:5},s="System Architecture / Logical Structure",o={id:"system-architecture/system_architecture_and_logical_structure",title:"System Architecture / Logical Structure",description:"img2.png",source:"@site/docs/system-architecture/system_architecture_and_logical_structure.md",sourceDirName:"system-architecture",slug:"/system-architecture/system_architecture_and_logical_structure",permalink:"/project-3d-printer-security/docs/system-architecture/system_architecture_and_logical_structure",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2025-Spring/project-3d-printer-security/edit/main/documentation/docs/system-architecture/system_architecture_and_logical_structure.md",tags:[],version:"current",lastUpdatedBy:"Rafael Perez",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Proposed Application Design",permalink:"/project-3d-printer-security/docs/system-architecture/proposed_app_design"},next:{title:"File Handling and Processing",permalink:"/project-3d-printer-security/docs/system-architecture/file_handling_and_processing"}},c={},d=[];function l(e){const t={a:"a",h1:"h1",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"system-architecture--logical-structure",children:"System Architecture / Logical Structure"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"img_2.png",src:n(5324).A+"",width:"757",height:"414"}),"\nDiagram A"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Component Description"})}),"\n",(0,r.jsx)(t.p,{children:"\u2022\tBackend G-Code Parser Pre-Print Scanner"}),"\n",(0,r.jsx)(t.p,{children:"\u2022\tFrontend User Interface"}),"\n",(0,r.jsx)(t.p,{children:"\u2022\tAll devices are networking"}),"\n",(0,r.jsx)(t.p,{children:"\u2022\tDiagram A shows a risk introduction"}),"\n",(0,r.jsx)(t.p,{children:"\u2022\tThe exclamation mark is a response action from the backend scanning application"}),"\n",(0,r.jsx)(t.p,{children:"\u2022\tThe red X shows that a file was damaged or compromised"}),"\n",(0,r.jsx)(t.p,{children:"\u2022\tInside the scanner diagram we can see the backend application communicating with OctoPrint"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Diagram A:"}),"\nDepicts the risk introduced to a file and how the backend application picks up the mistake\nand rejects the G-Code alerting the user to stop printing and supply a new or correct document."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Component Overview"})}),"\n",(0,r.jsx)(t.p,{children:"\u2022\tThe diagram shows a logical process of client and hardware interaction as well as a third-party risk shown to demonstrate how the application will block the print to avoid downtime or damage."}),"\n",(0,r.jsx)(t.p,{children:"\u2022\tPlease see the high-level view of the components in the diagram above.\nWe can see\nthat there are two major software components which make up the G-Code Pre-Print Scanning design. The frontend and the backend apps are\nrunning seamlessly on the network without any use of external USB drives."}),"\n",(0,r.jsx)(t.p,{children:"\u2022\tData flow on the network shows that the print job is sent via the frontend app to the printer and the app will direct the file to the backend app for a complete security scan. Once the data has been approved and safe an alert will be sent to the client giving them the opportunity to print or stop."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Interface and APIs in Diagram A"}),'\nThe interface inside the left surrounded diagram labeled "G-Code Backend Scanner" shows HTTP Web services running on some hardware. The important component of that diagram is the G-Code scanner service running on the shown hardware. Note: This hardware can be a personal choice of Windows, OS X, Rasberry Pi etc.']}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"OctoPrint API Integration:"})}),"\n",(0,r.jsx)(t.p,{children:"As we delve into the low-level view of the OctoPrint, we will examine the features provided by the REST API services.\nREST API General information is obtained by visiting their website. There is a wealth of information available as well as plugins to handle API keys so that clients can implement their own solution."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://docs.octoprint.org/en/master/api/general.html",children:"https://docs.octoprint.org/en/master/api/general.html"})}),"\n",(0,r.jsx)(t.p,{children:"This document will not go into details of any code unless deemed necessary for some unclear workflows."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Choice of Architecture:"})}),"\n",(0,r.jsx)(t.p,{children:"The architecture of the project is a scaled down layered architecture pattern, with three layers. The pattern was selected for its simplicity and to better organise workflow during sprints, as the layers could be separated into smaller atomized tasks."}),"\n",(0,r.jsx)(t.p,{children:"The layers are separated into the UI layer, the application layer, and the data layer. The UI layer works autonomously and only relays information to the user, and thus could be developed independently. The application layer is where the g-code files are scanned, and only needs to share an agreed on format for data in order to be integrated into the project. If there were more integration between the layers, another design pattern would have been considered."}),"\n",(0,r.jsx)(t.p,{children:"The components are static and communication is bidirectional over a local network only. For this reason no networking was considered, thus networking related patterns could not be used."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Scalability:"})}),"\n",(0,r.jsx)(t.p,{children:"The components can be scaled horizontally by adding more printers. There is little need for vertical scaling, as the computations are simple and one computer can handle a large amount of printers. Since printers are a physical object, and communication is local the number of printers is limited by the amount of physical space. An aircraft carrier needs a small amount of printers thus scalability is possible but unnecessary."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},5324:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/img_2-731a5e5a6a966e6682f477b46426294b.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(6540);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);