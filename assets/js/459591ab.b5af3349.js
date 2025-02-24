"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[6123],{88755:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var t=r(74848),i=r(28453);const s={title:"Development Environment",sidebar_label:"Development Environment",sidebar_position:3},o="Development Environment",d={id:"system-architecture/development-environment",title:"Development Environment",description:"1. Overview",source:"@site/docs/system-architecture/development-environment.md",sourceDirName:"system-architecture",slug:"/system-architecture/development-environment",permalink:"/project-3d-printer-security/docs/system-architecture/development-environment",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2025-Spring/project-3d-printer-security/edit/main/documentation/docs/system-architecture/development-environment.md",tags:[],version:"current",lastUpdatedBy:"Sami Jafri",sidebarPosition:3,frontMatter:{title:"Development Environment",sidebar_label:"Development Environment",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/project-3d-printer-security/docs/system-architecture/introduction"},next:{title:"Octo Print Overview",permalink:"/project-3d-printer-security/docs/system-architecture/octo_print_overview"}},c={},l=[{value:"<strong>1. Overview</strong>",id:"1-overview",level:2},{value:"<strong>2. System Requirements</strong>",id:"2-system-requirements",level:2},{value:"<strong>2.1 Hardware Requirements</strong>",id:"21-hardware-requirements",level:3},{value:"<strong>2.2 Software Dev Dependencies</strong>",id:"22-software-dev-dependencies",level:3},{value:"<strong>Frontend (Web GUI)</strong>",id:"frontend-web-gui",level:4},{value:"<strong>Backend (API &amp; Scanning Engine)</strong>",id:"backend-api--scanning-engine",level:4},{value:"<strong>Development Tools</strong>",id:"development-tools",level:4},{value:"<strong>3. Setup Instructions</strong>",id:"3-setup-instructions",level:2},{value:"Configuring a Markdown Project with Add-ins in IntelliJ IDEA",id:"configuring-a-markdown-project-with-add-ins-in-intellij-idea",level:3},{value:"<strong>3.1 Cloning the Repository</strong>",id:"31-cloning-the-repository",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"development-environment",children:(0,t.jsx)(n.strong,{children:"Development Environment"})}),"\n",(0,t.jsx)(n.h2,{id:"1-overview",children:(0,t.jsx)(n.strong,{children:"1. Overview"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"G-Code Pre-Print Auditing System"})," is developed using a ",(0,t.jsx)(n.strong,{children:"structured and modular approach"}),", ensuring compatibility, maintainability, and security. This section outlines the development environment, including hardware, software dependencies, and setup instructions."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"2-system-requirements",children:(0,t.jsx)(n.strong,{children:"2. System Requirements"})}),"\n",(0,t.jsx)(n.h3,{id:"21-hardware-requirements",children:(0,t.jsx)(n.strong,{children:"2.1 Hardware Requirements"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Component"}),(0,t.jsx)(n.th,{children:"Minimum Specification"}),(0,t.jsx)(n.th,{children:"Recommended Specification"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Processor"}),(0,t.jsx)(n.td,{children:"Within 5 years"}),(0,t.jsx)(n.td,{children:"n/a"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"RAM"}),(0,t.jsx)(n.td,{children:"8GB"}),(0,t.jsx)(n.td,{children:"16GB or higher"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Storage"}),(0,t.jsx)(n.td,{children:"n/a"}),(0,t.jsx)(n.td,{children:"n/a"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OS Compatibility"}),(0,t.jsx)(n.td,{children:"Ubuntu 20.04+, Windows 10+, OS X 13+"}),(0,t.jsx)(n.td,{children:"Ubuntu 22.04+, Windows 11, OS X 13+"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Raspberry Pi ",(0,t.jsx)(n.strong,{children:"(Not Required)"})]}),(0,t.jsx)(n.td,{children:"Raspberry Pi 4"}),(0,t.jsx)(n.td,{children:"Raspberry Pi 4"})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"22-software-dev-dependencies",children:(0,t.jsx)(n.strong,{children:"2.2 Software Dev Dependencies"})}),"\n",(0,t.jsx)(n.p,{children:"The project requires the following software and libraries:"}),"\n",(0,t.jsx)(n.h4,{id:"frontend-web-gui",children:(0,t.jsx)(n.strong,{children:"Frontend (Web GUI)"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Node.js"})," ",(0,t.jsx)(n.code,{children:"v18.x+"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"React.js"})," ",(0,t.jsx)(n.code,{children:"v18+"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"CSS"})," ",(0,t.jsx)(n.code,{children:"For styling Frontend team can elaborate upon request."})]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"backend-api--scanning-engine",children:(0,t.jsx)(n.strong,{children:"Backend (API & Scanning Engine)"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Python"})," ",(0,t.jsx)(n.code,{children:"3.9+"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Pygcode"})," for G-Code parsing ",(0,t.jsx)(n.a,{href:"https://pypi.org/project/pygcode/",children:"https://pypi.org/project/pygcode/"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"OctoPrint REST API"})," for printer integration"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Python"})," socket / socketserver for file transfer"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"development-tools",children:(0,t.jsx)(n.strong,{children:"Development Tools"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Git"})," for version control"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Visual Studio Code / PyCharm"})," for coding"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Postman"})," for API testing"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Docker (Optional)"})," for future containerized development"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Docusaurus"})," for documentation"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"3-setup-instructions",children:(0,t.jsx)(n.strong,{children:"3. Setup Instructions"})}),"\n",(0,t.jsx)(n.h3,{id:"configuring-a-markdown-project-with-add-ins-in-intellij-idea",children:"Configuring a Markdown Project with Add-ins in IntelliJ IDEA"}),"\n",(0,t.jsx)(n.p,{children:"Configurations for IntelliJ and VS CODE vary drastically so this is upto the programmer and skill set to configure the IDE. Here is a suggested place to start."}),"\n",(0,t.jsx)(n.h2,{id:"31-cloning-the-repository",children:(0,t.jsx)(n.strong,{children:"3.1 Cloning the Repository"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/Capstone-Projects-2025-Spring/project-3d-printer-security.git\ncd project-3d-printer-security\n"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var t=r(96540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);