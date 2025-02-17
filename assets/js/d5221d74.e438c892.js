"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[2360],{73662:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=i(74848),t=i(28453);const s={sidebar_position:6},c="File Handling and Processing",o={id:"system-architecture/file_handling_and_processing",title:"File Handling and Processing",description:"- Files are received as PDF documents containing the part.",source:"@site/docs/system-architecture/file_handling_and_processing.md",sourceDirName:"system-architecture",slug:"/system-architecture/file_handling_and_processing",permalink:"/project-3d-printer-security/docs/system-architecture/file_handling_and_processing",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2025-Spring/project-3d-printer-security/edit/main/documentation/docs/system-architecture/file_handling_and_processing.md",tags:[],version:"current",lastUpdatedBy:"Shafiq Rahman",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"System Architecture / Logical Structure",permalink:"/project-3d-printer-security/docs/system-architecture/system_architecture_and_logical_structure"},next:{title:"API Specification",permalink:"/project-3d-printer-security/docs/category/api-specification"}},a={},l=[{value:"\ud83d\udda8\ufe0f 3D Printer Interfacing",id:"\ufe0f-3d-printer-interfacing",level:2},{value:"\ud83c\udf9b\ufe0f User Interface",id:"\ufe0f-user-interface",level:2},{value:"\ud83c\udfd7\ufe0f Component Description",id:"\ufe0f-component-description",level:2}];function d(e){const n={br:"br",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"file-handling-and-processing",children:"File Handling and Processing"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Files are received as ",(0,r.jsx)(n.strong,{children:"PDF documents"})," containing the part."]}),"\n",(0,r.jsxs)(n.li,{children:["A ",(0,r.jsx)(n.strong,{children:"Cura slicer"})," on the computer slices the part and converts it to ",(0,r.jsx)(n.strong,{children:"G-Code"})," for printing."]}),"\n",(0,r.jsxs)(n.li,{children:["The file is then ",(0,r.jsx)(n.strong,{children:"opened in the frontend application"})," and sent for printing."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.strong,{children:"frontend application"})," sends it directly to the ",(0,r.jsx)(n.strong,{children:"backend application"}),", where it is scanned for integrity."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.strong,{children:"backend application"})," alerts the user with a ",(0,r.jsx)(n.strong,{children:"pass or fail status"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"The user takes action based on the result of the scan."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\ufe0f-3d-printer-interfacing",children:"\ud83d\udda8\ufe0f 3D Printer Interfacing"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The application ensures ",(0,r.jsx)(n.strong,{children:"seamless integration"})," with networked 3D printers."]}),"\n",(0,r.jsxs)(n.li,{children:["No ",(0,r.jsx)(n.strong,{children:"portable USB drives"})," are used, ensuring compliance with ",(0,r.jsx)(n.strong,{children:"military or government security policies"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\ufe0f-user-interface",children:"\ud83c\udf9b\ufe0f User Interface"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.strong,{children:"frontend application"})," serves as the ",(0,r.jsx)(n.strong,{children:"primary interaction point"})," for users."]}),"\n",(0,r.jsxs)(n.li,{children:["It provides ",(0,r.jsx)(n.strong,{children:"real-time alerts, file management, and print job monitoring"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h1,{id:"-revisiting-the-3d-printing-block-diagram",children:"\ud83d\udd04 Revisiting the 3D-Printing Block Diagram"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"img_3.png",src:i(8213).A+"",width:"839",height:"482"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Diagram B"})]}),"\n",(0,r.jsxs)(n.p,{children:["Diagram B presents a ",(0,r.jsx)(n.strong,{children:"high-level view"})," of the application components in a ",(0,r.jsx)(n.strong,{children:"typical network environment"}),".",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"USB drives are not used"})," in this scenario due to ",(0,r.jsx)(n.strong,{children:"security considerations"})," in ",(0,r.jsx)(n.strong,{children:"military or government environments"}),"."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\ufe0f-component-description",children:"\ud83c\udfd7\ufe0f Component Description"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\ud83d\udd25Firewall"})," \u2013 Basic standard dual firewall configuration."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\ud83d\udee0\ufe0f G-Code Security Scan Mechanism"})," \u2013 Backend application processes and verifies the G-Code before printing."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\ud83d\udcbb G-Code GUI Frontend"})," \u2013 Frontend application takes g-code and sends the G-Code for pre-print evaluation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u26a0\ufe0f G-Code Scan warning or alter"})," \u2013 Client receives an alert on the frontend app."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u2601\ufe0f1 Internet"})," \u2013 Access to the internet."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u2601\ufe0f2 Intranet"})," \u2013 Access inside the DMZ network."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\ud83d\udd041 Network Comm Device"})," \u2013 Network hub access inside the network."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\ud83d\udd042 Network Comm Device"})," \u2013 Network access traffic outbound through firewalls."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\ud83e\uddd1\u200d\ud83d\udd2c Parts Actor"})," \u2013 Requests part by supplying PDF file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\ud83e\uddd1\u200d\u2708\ufe0f Printing Actor"})," \u2013 Operator initiating a print job via frontend app."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\ud83d\udda5\ufe0f Local Server"})," \u2013 Local network server / file server."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8213:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/img_3-99dcea70b1490e4c83b765c899149c31.png"},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>o});var r=i(96540);const t={},s=r.createContext(t);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);