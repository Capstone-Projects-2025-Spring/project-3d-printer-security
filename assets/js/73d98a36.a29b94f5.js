"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[8934],{1407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var i=n(4848),o=n(8453);const s={sidebar_position:5},r="Proposed Application Design",a={id:"system-architecture/proposed_app_design",title:"Proposed Application Design",description:"The application will consist of two parts. There will be a frontend web-based application component and a backend application component running on the network. The backend application will be waiting for print jobs from the client / user. The front end GUI application will consist of Java scripting and web components, and the backend application will be completed in Python. As of this writing, we were proposing our application components to run on the customer's choice of hardware such as Windows, OS X or such hardware as the Raspberry Pie with network capability. The backend application will interface with OctoPrint API services installed on the choice of hardware.",source:"@site/docs/system-architecture/proposed_app_design.md",sourceDirName:"system-architecture",slug:"/system-architecture/proposed_app_design",permalink:"/project-3d-printer-security/docs/system-architecture/proposed_app_design",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2025-Spring/project-3d-printer-security/edit/main/documentation/docs/system-architecture/proposed_app_design.md",tags:[],version:"current",lastUpdatedBy:"Shafiq Rahman",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Version Control",permalink:"/project-3d-printer-security/docs/system-architecture/version-control"},next:{title:"System Architecture / Logical Structure",permalink:"/project-3d-printer-security/docs/system-architecture/system_architecture_and_logical_structure"}},c={},p=[];function l(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"proposed-application-design",children:"Proposed Application Design"}),"\n",(0,i.jsx)(t.p,{children:"The application will consist of two parts. There will be a frontend web-based application component and a backend application component running on the network. The backend application will be waiting for print jobs from the client / user. The front end GUI application will consist of Java scripting and web components, and the backend application will be completed in Python. As of this writing, we were proposing our application components to run on the customer's choice of hardware such as Windows, OS X or such hardware as the Raspberry Pie with network capability. The backend application will interface with OctoPrint API services installed on the choice of hardware."}),"\n",(0,i.jsx)(t.p,{children:"For this project, we will choose Windows-based hardware as our platform for the backend application and the frontend application will be Web based, therefore most popular OS should be able to load that component."}),"\n",(0,i.jsx)(t.p,{children:"Below is some sample code for transferring files in Python. This was an auto generated program when I did a search for file transfer or socket libraries."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-aiignore",children:'import socket\nimport os\n\ndef send_file(filename, host, port):\n    s = socket.socket()\n    s.connect((host, port))\n    filesize = os.path.getsize(filename)\n    s.send(f"{filename}{SEPARATOR}{filesize}".encode())\n    with open(filename, "rb") as f:\n        while True:\n            bytes_read = f.read(BUFFER_SIZE)\n            if not bytes_read:\n                break\n            s.sendall(bytes_read)\n    s.close()\n\ndef receive_file(host, port, save_path):\n    s = socket.socket()\n    s.bind((host, port))\n    s.listen(5)\n    client_socket, address = s.accept()\n    received = client_socket.recv(BUFFER_SIZE).decode()\n    filename, filesize = received.split(SEPARATOR)\n    filename = os.path.basename(filename)\n    filesize = int(filesize)\n    with open(os.path.join(save_path,filename), "wb") as f:\n        bytes_received = 0\n        while bytes_received < filesize:\n            l = client_socket.recv(BUFFER_SIZE)\n            f.write(l)\n            bytes_received += len(l)\n    client_socket.close()\n    s.close()\n\nSEPARATOR = "<SEPARATOR>"\nBUFFER_SIZE = 4096\n'})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(6540);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);