"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3374],{2496:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=i(4848),r=i(8453);const s={sidebar_position:1},o="System Overview",a={id:"requirements/system-overview",title:"System Overview",description:"Project Abstract",source:"@site/docs/requirements/system-overview.md",sourceDirName:"requirements",slug:"/requirements/system-overview",permalink:"/project-3d-printer-security/docs/requirements/system-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2025-Spring/project-3d-printer-security/edit/main/documentation/docs/requirements/system-overview.md",tags:[],version:"current",lastUpdatedBy:"Rafael Perez",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Requirements Specification",permalink:"/project-3d-printer-security/docs/category/requirements-specification"},next:{title:"System Block Diagram",permalink:"/project-3d-printer-security/docs/requirements/system-block-diagram"}},l={},c=[{value:"Project Abstract",id:"project-abstract",level:2},{value:"Project Goals:",id:"project-goals",level:3},{value:"Conceptual Design",id:"conceptual-design",level:2},{value:"Key Features:",id:"key-features",level:3},{value:"Background",id:"background",level:2}];function d(e){const n={h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"system-overview",children:"System Overview"}),"\n",(0,t.jsx)(n.h2,{id:"project-abstract",children:"Project Abstract"}),"\n",(0,t.jsx)(n.p,{children:"The increasing accessibility of 3D printing has revolutionized manufacturing and prototyping,\nenabling the reproduction of parts in remote locations.\nHowever, with the widespread use of 3D printing,\nthere is a growing risk of maliciously altered or error-prone G-CODE files that could damage equipment,\nresult in injury, or even cause fires."}),"\n",(0,t.jsxs)(n.p,{children:["This project aims\nto develop a ",(0,t.jsx)(n.strong,{children:"distributable plugin for OctoPrint"})," that scans G-CODE files for potential threats or errors,\nensuring safer and more reliable 3D printing.\nThe plugin will analyze G-CODE files to identify issues such as out-of-bounds commands,\nexcessive temperature settings, user errors, or malicious code.\nIt will also act as a stopping point where clients can follow best practices for successful prints\nand can learn to take corrective measures to avoid future mistakes.\nThe plugin will provide a small summary to the client,\nindicating whether the file is ",(0,t.jsx)(n.strong,{children:"safe, problematic, or potentially malicious"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"project-goals",children:"Project Goals:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Enhance 3D printer safety by mitigating the risks of hardware damage or accidents."}),"\n",(0,t.jsx)(n.li,{children:"Streamline the printing process by detecting common errors before execution."}),"\n",(0,t.jsxs)(n.li,{children:["Provide a user-friendly interface within ",(0,t.jsx)(n.strong,{children:"OctoPrint"}),", allowing users to review identified issues with actionable suggestions for resolution."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This plugin will serve as a vital tool for 3D printing enthusiasts and professionals, ensuring higher print reliability, reduced downtime, and safer operation."}),"\n",(0,t.jsx)(n.h2,{id:"conceptual-design",children:"Conceptual Design"}),"\n",(0,t.jsxs)(n.p,{children:["The application will be a ",(0,t.jsx)(n.strong,{children:"plugin integrated within OctoPrint"}),", appearing as a dedicated feature tab. It will automatically analyze G-CODE files after slicing is completed in ",(0,t.jsx)(n.strong,{children:"CURA or PRUSA"})," and before the print job is executed. The plugin will provide users with a dropdown menu to select the file for scanning and will generate a ",(0,t.jsx)(n.strong,{children:"Pass"})," or ",(0,t.jsx)(n.strong,{children:"Warnings"})," result before printing."]}),"\n",(0,t.jsx)(n.h3,{id:"key-features",children:"Key Features:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"OctoPrint Integration:"})," Runs as a native plugin inside OctoPrint."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Automated Scanning:"})," Analyzes G-CODE files received via:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Direct network transfer to OctoPrint."}),"\n",(0,t.jsx)(n.li,{children:"Network storage is accessible by OctoPrint."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"G-CODE Analysis:"})," The scanner will check for:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Temperature Range Validation:"})," Ensuring the temperature settings for the hotend and heated bed are within safe limits."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Shutdown Confirmation:"})," Verifying that the heated bed turns off is within guidelines."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Printer Model & Boundaries:"})," Ensuring the X, Y, and Z axis movements are within the printer\u2019s limits."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Checklist Feature:"})," Users will be provided with a ",(0,t.jsx)(n.strong,{children:"file scan report"})," so they can re-slice following the recommended printer guidelines."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Future features and enhancements can be added to improve safety and usability."}),"\n",(0,t.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,t.jsxs)(n.p,{children:["This document proposes a ",(0,t.jsx)(n.strong,{children:"plugin-based software solution for OctoPrint"})," that scans G-CODE files for potential threats,\nensuring safer 3D printing.\nThe accessibility of 3D printing has transformed manufacturing, prototyping, and on-site part reproduction.\nHowever, as 3D printing adoption increases,\nso do the risks associated with maliciously modified or erroneous G-CODE files.\nThe G-Code security scanner plugin for OctoPrint will serve all typs of users in any environment."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(6540);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);