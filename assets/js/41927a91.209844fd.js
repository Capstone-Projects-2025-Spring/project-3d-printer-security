"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[7925],{994:(e,i,l)=>{l.r(i),l.d(i,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>o});var n=l(4848),s=l(8453);const c={sidebar_position:3},t="SecurityPlugin",r={id:"api-specification/security-plugin-design-document",title:"SecurityPlugin",description:"public class FileManager",source:"@site/docs/api-specification/security-plugin-design-document.md",sourceDirName:"api-specification",slug:"/api-specification/security-plugin-design-document",permalink:"/project-3d-printer-security/docs/api-specification/security-plugin-design-document",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2025-Spring/project-3d-printer-security/edit/main/documentation/docs/api-specification/security-plugin-design-document.md",tags:[],version:"current",lastUpdatedBy:"Shafiq Rahman",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"API Specification",permalink:"/project-3d-printer-security/docs/category/api-specification"},next:{title:"Test Procedures",permalink:"/project-3d-printer-security/docs/category/test-procedures"}},d={},o=[{value:"<code>public class FileManager</code>",id:"public-class-filemanager",level:2},{value:"<code>public list gcodequeue</code>",id:"public-list-gcodequeue",level:2},{value:"<code>public void __populate_queue()</code>",id:"public-void-__populate_queue",level:2},{value:"<code>public Bool has_files()</code>",id:"public-bool-has_files",level:2},{value:"<code>public String get_file()</code>",id:"public-string-get_file",level:2},{value:"<code>public class GcodeScanner</code>",id:"public-class-gcodescanner",level:2},{value:"<code>public dict scan_gcode(String gcode)</code>",id:"public-dict-scan_gcodestring-gcode",level:2},{value:"<code>public class Configuration</code>",id:"public-class-configuration",level:2},{value:"<code>public float __mfillament</code>",id:"public-float-__mfillament",level:2},{value:"<code>public float __mtemperature</code>",id:"public-float-__mtemperature",level:2},{value:"<code>public float max_fillament(fill:float = none)</code>",id:"public-float-max_fillamentfillfloat--none",level:2},{value:"<code>public float max_temperature(temp: float = none)</code>",id:"public-float-max_temperaturetemp-float--none",level:2},{value:"<code>public void save_config()</code>",id:"public-void-save_config",level:2},{value:"<code>public class Display</code>",id:"public-class-display",level:2},{value:"<code>public void display_YN(String message)</code>",id:"public-void-display_ynstring-message",level:2}];function a(e){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"securityplugin",children:"SecurityPlugin"}),"\n",(0,n.jsx)(i.h2,{id:"public-class-filemanager",children:(0,n.jsx)(i.code,{children:"public class FileManager"})}),"\n",(0,n.jsx)(i.p,{children:"File manager is a class that is responsible for all of the plugin\u2019s IO operations. It accesses submitted g-code files through a plugin hook and stores it in a queue for processing."}),"\n",(0,n.jsx)(i.h2,{id:"public-list-gcodequeue",children:(0,n.jsx)(i.code,{children:"public list gcodequeue"})}),"\n",(0,n.jsx)(i.p,{children:"This is the queue of g-code files submitted to octoprint by the user."}),"\n",(0,n.jsx)(i.h2,{id:"public-void-__populate_queue",children:(0,n.jsx)(i.code,{children:"public void __populate_queue()"})}),"\n",(0,n.jsx)(i.p,{children:"A method that adds new g-code files to the queue."}),"\n",(0,n.jsx)(i.h2,{id:"public-bool-has_files",children:(0,n.jsx)(i.code,{children:"public Bool has_files()"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Returns:"})," False if queue is empty,  True otherwise."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"public-string-get_file",children:(0,n.jsx)(i.code,{children:"public String get_file()"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Returns:"})," The first g-code file in the queue as a String."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"public-class-gcodescanner",children:(0,n.jsx)(i.code,{children:"public class GcodeScanner"})}),"\n",(0,n.jsx)(i.p,{children:"GcodeScanner is a class related to the scanning of g-code for pre specified criteria."}),"\n",(0,n.jsx)(i.h2,{id:"public-dict-scan_gcodestring-gcode",children:(0,n.jsx)(i.code,{children:"public dict scan_gcode(String gcode)"})}),"\n",(0,n.jsx)(i.p,{children:"This method receives a g-code as a string and scans it based on criteria from an included configuration file. If errors are found they are returned as a dict with the error code and the line at which they were found. If none are found it returns an empty dict. The error codes are as follows"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"1: Collision"}),"\n",(0,n.jsx)(i.li,{children:"2: Excessive filament predicted"}),"\n",(0,n.jsx)(i.li,{children:"3:  Excessive temperature predicted"}),"\n"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Parameters:"})," ",(0,n.jsx)(i.code,{children:"gcode"})," \u2014 Unformatted g-code as a String"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Returns:"})," ",(0,n.jsx)(i.code,{children:"dict"})," - dict with error codes and line, on which they were found."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"public-class-configuration",children:(0,n.jsx)(i.code,{children:"public class Configuration"})}),"\n",(0,n.jsx)(i.p,{children:"Configuration is a class responsible for reading and writing to the configuration file.The file has fields for maximum, permitted filament and maximum permitted temperature. The values are read, and stored in the class and are to be edited with their associated methods. Upon initialization it populates the values with values from the .cfg file."}),"\n",(0,n.jsx)(i.h2,{id:"public-float-__mfillament",children:(0,n.jsx)(i.code,{children:"public float __mfillament"})}),"\n",(0,n.jsx)(i.p,{children:"This is the maximum permited amount of filament."}),"\n",(0,n.jsx)(i.h2,{id:"public-float-__mtemperature",children:(0,n.jsx)(i.code,{children:"public float __mtemperature"})}),"\n",(0,n.jsx)(i.p,{children:"This is the maximum permited amount of temperature."}),"\n",(0,n.jsx)(i.h2,{id:"public-float-max_fillamentfillfloat--none",children:(0,n.jsx)(i.code,{children:"public float max_fillament(fill:float = none)"})}),"\n",(0,n.jsx)(i.p,{children:"This method returns maximum filament, if a parameter is specified it changes the current stored value to it."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Parameters:"})," ",(0,n.jsx)(i.code,{children:"fill"})," \u2014 New value for fillament."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Returns:"})," ",(0,n.jsx)(i.code,{children:"float"})," - Currently held value."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"public-float-max_temperaturetemp-float--none",children:(0,n.jsx)(i.code,{children:"public float max_temperature(temp: float = none)"})}),"\n",(0,n.jsx)(i.p,{children:"This method returns maximum temperature, if a parameter is specified it changes the current stored value to it."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Parameters:"})," ",(0,n.jsx)(i.code,{children:"temp"})," \u2014 New value for temperature."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Returns:"})," ",(0,n.jsx)(i.code,{children:"float"})," - Currently held value."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"public-void-save_config",children:(0,n.jsx)(i.code,{children:"public void save_config()"})}),"\n",(0,n.jsx)(i.p,{children:"This method saves the currently held values to the .cfg file, and should be called whenever they are changed."}),"\n",(0,n.jsx)(i.h2,{id:"public-class-display",children:(0,n.jsx)(i.code,{children:"public class Display"})}),"\n",(0,n.jsx)(i.p,{children:"This is a class that is responsible for displaying information using a plugin mixin. It is used for displaying warning messages."}),"\n",(0,n.jsx)(i.h2,{id:"public-void-display_ynstring-message",children:(0,n.jsx)(i.code,{children:"public void display_YN(String message)"})}),"\n",(0,n.jsx)(i.p,{children:"Displays the message on the UI as a popup, used for errors. Returns true if True is selected on the popup, returns False if no is selected."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Parameters:"})," ",(0,n.jsx)(i.code,{children:"message"})," \u2014 Message to be displayed."]}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,i,l)=>{l.d(i,{R:()=>t,x:()=>r});var n=l(6540);const s={},c=n.createContext(s);function t(e){const i=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),n.createElement(c.Provider,{value:i},e.children)}}}]);