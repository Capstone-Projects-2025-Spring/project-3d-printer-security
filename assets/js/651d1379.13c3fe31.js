"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3579],{4529:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=i(4848),t=i(8453);const a={sidebar_position:5},o="Use-case descriptions",r={id:"requirements/use-case-descriptions",title:"Use-case descriptions",description:"Use Case One: Navigating to Instruction Page",source:"@site/docs/requirements/use-case-descriptions.md",sourceDirName:"requirements",slug:"/requirements/use-case-descriptions",permalink:"/project-3d-printer-security/docs/requirements/use-case-descriptions",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2025-Spring/project-3d-printer-security/edit/main/documentation/docs/requirements/use-case-descriptions.md",tags:[],version:"current",lastUpdatedBy:"Ellie Fiera",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Features and Requirements",permalink:"/project-3d-printer-security/docs/requirements/features-and-requirements"},next:{title:"System Architecture",permalink:"/project-3d-printer-security/docs/category/system-architecture"}},l={},c=[{value:"Use Case One: Navigating to Instruction Page",id:"use-case-one-navigating-to-instruction-page",level:2},{value:"Use Case Two: Inserting A Valid File",id:"use-case-two-inserting-a-valid-file",level:2},{value:"Use Case Three: Inserting An Invalid File",id:"use-case-three-inserting-an-invalid-file",level:2},{value:"Use Case Four: Cancellation",id:"use-case-four-cancellation",level:2},{value:"Use Case Five: Progress Visuals",id:"use-case-five-progress-visuals",level:2},{value:"Use Case Six: Auto-Approve warnings",id:"use-case-six-auto-approve-warnings",level:2},{value:"Use case Seven: Adding new Modules",id:"use-case-seven-adding-new-modules",level:2}];function d(e){const n={em:"em",h1:"h1",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"use-case-descriptions",children:"Use-case descriptions"}),"\n",(0,s.jsx)(n.h2,{id:"use-case-one-navigating-to-instruction-page",children:"Use Case One: Navigating to Instruction Page"}),"\n",(0,s.jsx)(n.mermaid,{value:'sequenceDiagram\n  actor NavyMember\n  NavyMember->>HomePage: Navy Member clicks on "?"\n  activate HomePage\n  HomePage->>InstructionsPage: openInstruction()\n  activate InstructionsPage\n  InstructionsPage->>InstructionsPage: Click Section One\n  InstructionsPage->>InstructionsPage: Click Section Two\n  InstructionsPage->>InstructionsPage: Click Section Three\n  InstructionsPage--\x3e>HomePage: Click on the "X" icon\n  deactivate InstructionsPage\n  deactivate HomePage'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"As a Navy member, I would like to see instructions on how to use the application so I can be able to learn how to use it."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"On the initial page, on the bottom right corner, there is a question mark icon. A user will click it."}),"\n",(0,s.jsx)(n.li,{children:"From that, click a new tab opens with instructions on how to use the application."}),"\n",(0,s.jsx)(n.li,{children:"Navy member will be able to click on the sections provided on the left side. While the full instruction is on the right side."}),"\n",(0,s.jsx)(n.li,{children:'To exit, click on the "X" icon on the top right of the page to exit. Returns to the main page.'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"use-case-two-inserting-a-valid-file",children:"Use Case Two: Inserting A Valid File"}),"\n",(0,s.jsx)(n.mermaid,{value:'sequenceDiagram\n  actor NavyMember\n  NavyMember->>HomePage: User clicks on "G-code Scan" module\n  activate HomePage\n  HomePage->>Module: openModule(object)\n  activate Module\n  Module->>GCodeScan: File is inserted\n  activate GCodeScan\n  GCodeScan->>GCodeScan: Scan file for validity\n  GCodeScan--\x3e>Module: Returns true\n  deactivate GCodeScan\n  Module->>Module: Enable Pre-Print form\n  Module->>Module: Submit Pre-Print form by pressing "Go"\n  deactivate Module\n  deactivate HomePage\n'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"As a Navy member, I would like to scan the file so I can prevent malicious parts of the code from doing unexpected actions."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Open G-code scan module."}),"\n",(0,s.jsx)(n.li,{children:'In the middle of the page, drag the file into the box that says "insert file here."'}),"\n",(0,s.jsx)(n.li,{children:"Insert g-code file, box turns green."}),"\n",(0,s.jsx)(n.li,{children:"A pre-print form gets enabled to adjust any potential warning the Navy member would not mind skipping."}),"\n",(0,s.jsx)(n.li,{children:'Navy member clicks on a green "Go" button.'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"use-case-three-inserting-an-invalid-file",children:"Use Case Three: Inserting An Invalid File"}),"\n",(0,s.jsx)(n.mermaid,{value:'sequenceDiagram\n  actor NavyMember\n  NavyMember->>HomePage: User clicks on "G-code Scan" module\n  activate HomePage\n  HomePage->>Module: openModule(object)\n  activate Module\n  Module->>GCodeScan: File is inserted\n  activate GCodeScan\n  GCodeScan->>GCodeScan: Scan file for validity (isValid())\n  GCodeScan--\x3e>Module: Returns false\n  deactivate GCodeScan\n  Module->>Module: Modal pops up alerting user\n  Module->>Module: User press "Retry"\n  deactivate Module\n  deactivate HomePage'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"As a Navy member, I would like to have invalid files rejected so that invalid files do not get processed."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'In the middle of the page, drag the file into the box that says "insert file here."'}),"\n",(0,s.jsx)(n.li,{children:"Insert non-g-code file, box turns red."}),"\n",(0,s.jsx)(n.li,{children:"A red modal appears reaffirming that a valid file must be dragged to the box."}),"\n",(0,s.jsx)(n.li,{children:'Navy member clicks on a grey "Retry" button.'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"use-case-four-cancellation",children:"Use Case Four: Cancellation"}),"\n",(0,s.jsx)(n.mermaid,{value:'sequenceDiagram\n  actor NavyMember\n  NavyMember->>HomePage: User clicks on "G-code Scan" module\n  activate HomePage\n  HomePage->>Module: openModule(object)\n  activate Module\n  Module->>GCodeScan: File is inserted\n  activate GCodeScan\n  GCodeScan->>GCodeScan: Scan file for validity\n  GCodeScan--\x3e>Module: Returns true\n  deactivate GCodeScan\n  Module->>Module: Enable Pre-Print form\n  Module->>Module: Submit Pre-Print form by pressing "Go"\n  Module->>GCodeScan: Scan the file\n  activate GCodeScan\n  Module->>GCodeScan: Cancel the process (click "stop")\n  Module->>Module: User clicks "Yes" to be sure\n  Module-XGCodeScan: Cancel the process (click "stop")\n  deactivate GCodeScan\n  deactivate Module\n  deactivate HomePage'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["_As a Navy member, ",(0,s.jsx)(n.em,{children:"I would like to cancel on-going process so that the application stop scanning and prevent any malfunctioning."})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Insert valid file."}),"\n",(0,s.jsx)(n.li,{children:"Submit pre-print form."}),"\n",(0,s.jsx)(n.li,{children:'Navy member clicks on a red "stop" button.'}),"\n",(0,s.jsx)(n.li,{children:'A pop-up appears asking if the user sure they want to stop the process, user have the option of either "Yes" or "No, proceed."'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"use-case-five-progress-visuals",children:"Use Case Five: Progress Visuals"}),"\n",(0,s.jsx)(n.mermaid,{value:'sequenceDiagram\n  actor NavyMember\n  NavyMember->>HomePage: User clicks on "G-code Scan" module\n  activate HomePage\n  HomePage->>Module: openModule(object)\n  activate Module\n  Module->>GCodeScan: File is inserted\n  activate GCodeScan\n  GCodeScan->>GCodeScan: Scan file for validity\n  GCodeScan--\x3e>Module: Returns true\n  Module->>Module: Submit Pre-Print form by pressing "Go"\n  Module->>GCodeScan: Scan the file\n  GCodeScan->>GCodeScan: Stage 1 Pass Successfully\n  GCodeScan--\x3e>Module: Turn stage 1 Progress Bubble green\n  GCodeScan->>GCodeScan: Stage 2-3 Pass Succesfully\n  GCodeScan--\x3e>Module: Turn stage 2-3 Progress Bubble green\n  deactivate GCodeScan\n  Module--\x3e>HomePage: Click "Finish"\n  deactivate Module\n  deactivate HomePage'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"As a Navy member, I would like to see the progress in which it is taking step-by-step so I can make sure it is going smoothly."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"After submitting G-code file, the page will change to the progress page."}),"\n",(0,s.jsxs)(n.li,{children:["Depending on the amount of stage, Navy member will see green as in has passed, yellow as a warning, or red as an alert.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Green: Navy member does not have to do anything, this stage have passed."}),"\n",(0,s.jsx)(n.li,{children:"Yellow: Navy member will have to decide to progress or not based on on Navy member's approval."}),"\n",(0,s.jsx)(n.li,{children:"Red: Navy member will have no choice but to fix issues identified by the application."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"If all stages passed, the file will be sent to the printer, or back to the USB drive based on Navy member choice of injection."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"use-case-six-auto-approve-warnings",children:"Use Case Six: Auto-Approve warnings"}),"\n",(0,s.jsx)(n.mermaid,{value:'sequenceDiagram\n  actor NavyMember\n  NavyMember->>HomePage: User clicks on "G-code Scan" module\n  activate HomePage\n  HomePage->>Module: openModule(object)\n  activate Module\n  Module->>GCodeScan: File is inserted\n  activate GCodeScan\n  GCodeScan->>GCodeScan: Scan file for validity\n  GCodeScan--\x3e>Module: Returns false\n  deactivate GCodeScan\n  Module->>Module: Modal pops up alerting User\n  Module->>Module: User selects to auto approve warnings in pre print\n  Module->>Module: Submit pre print form by pressing "Go"\n  deactivate Module\n  deactivate HomePage'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"As a Navy member, I would like to auto-approve all of the process warnings so I can 3D print faster."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"On the pre-print form, there\u2019s a red box at the very bottom of the form before the submit button."}),"\n",(0,s.jsx)(n.li,{children:"Navy member hover over and a tooltip appears, warning of potential risk of having to proceed with all of warning it finds."}),"\n",(0,s.jsx)(n.li,{children:'Navy member clicks on either "Yes, Proceed" or "No."'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"use-case-seven-adding-new-modules",children:"Use case Seven: Adding new Modules"}),"\n",(0,s.jsx)(n.mermaid,{value:'sequenceDiagram\n  actor NavyMember\n  NavyMember->>HomePage: Navy Member is in main page\n  activate HomePage\n  create participant Module\n  HomePage->>Module: User click "Add new module"\n  activate Module\n  Module->>Module: User inserts title of the new module\n  Module->>Module: User inserts python code into file dropdown\n  Module->>Module: User clicks green "Add" button to complete\n  Module--\x3e>HomePage: New Module added to HomePage\n  deactivate Module\n  deactivate HomePage'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"As a Navy member, I would like to submit a new module in which it adds new way of scanning."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'On the main page, user clicks "Add new module" into a box with a plus icon.'}),"\n",(0,s.jsx)(n.li,{children:"User will insert title of the module in the title field."}),"\n",(0,s.jsx)(n.li,{children:"User will then insert python code into the file dropdown in which it will publish the code."}),"\n",(0,s.jsx)(n.li,{children:'User will click a green "add" button to officially submit.'}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var s=i(6540);const t={},a=s.createContext(t);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);