[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=17857619)
<div align="center">

# 3D Printer Security 
[![Report Issue on Jira](https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software)](https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/DT/issues)
[![Deploy Docs](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml)
[![Documentation Website Link](https://img.shields.io/badge/-Documentation%20Website-brightgreen)](https://applebaumian.github.io/tu-cis-4398-docs-template/)


</div>


## Authors

Ellie Fiera, Rafael Rodriguez, Sami Jafri, Sergiy Pliss, Shafiq Rahman, and Christopher Christmas.

## Release Date

01-27-25 
Verion 1.0.0


## Project Abstract

3D Printer G-CODE Validation and Security Application

The increasing accessibility of 3D printing has revolutionized manufacturing and prototyping or re-producing a part in a remote location.
However, with the widespread use of printing 3D parts,
there is a growing risk of maliciously altered or error-prone G-CODE files
that could damage the equipment while printing a parts,
or result in injury or fire.
This project aims to develop an application to scan G-CODE files for potential threats or errors,
ensuring safer and more reliable 3D printing.
The application will analyze G-CODE files to identify issues such as out-of-bound commands,
excessive temperature settings, user error, or malicious codes.
It will also create an alert for the client to take proper action to remediate
and then successfully print the part with success check for bad G-CODE and suggest corrective measures.
The application will flag the G-CODE if the files are error-prone, or malicious.
The application will provide a summary to the client via the front end application.
The project’s goals include:
1.	Enhancing 3D printer safety by mitigating the risks of hardware damage or prevent or stop malicious code from running on the 3D printer.
2.	Streamlining the printing process by catching common errors before execution will increase productivity and prevent downtime.
3.	Providing a user-friendly interface for reviewing identified issues with actionable suggestions for resolution.
This application has the potential to be a vital tool for 3D printing enthusiasts and professionals, ensuring higher print reliability, prevent downtime, and safer operation.


## High Level Requirement

The application will have a frontend and backend program with the frontend graphical UI.
It will be used after CURA completed slicing a file into g-code.
The g-code file will be accessed by the frontend application
and sent to the backend g-code scanning application to be submitted for printing.
The backend application will scan that newly created G-CODE and alert the user to halt or continue based on the scan.

## Conceptual Design

The application facets will be developed by our front end team and backend team.
It will be compatible for devices running on any modern network.
The designed application functionality includes scanning for incorrect temperature ranges out of bound commands,
unnecessary commands to disable limit switches,
and including to prevent malicious code from colliding the print head into the part. The job of the software will be to stop the print job from being executed on the printer.

## Background Summary

In government and military computer usage policies, USB drives for storage are highly regulated.
This makes using USB drive scanning before printing makes it impracticable.
Therefore, all agencies under this umbrella use secure networks for printing and communication. To ensure compaitbility and functionality the G-code scanning application will have network capability.

1.	Seamless integration with all networked devices where 3D printing security is in high demand.
2.	Future scalability to handle multiple files and print multiple jobs sent to more than one printer.
3.	Ability of additions for new features, without major architectural changes. 

See the following link for more informaiton on how others are addressing 3D printing security.   
https://asmedigitalcollection.asme.org/computingengineering/article-abstract/21/4/041007/1089710/A-Blockchain-Based-G-Code-Protection-Approach-for?redirectedFrom=fulltext


## Required Resources

This project will require the following resources. 
- 3d Printer
- Raspberry Pie
- Dedicated Temple provided computer
- Remote vpn access to computer for working remotely to test code.
- A camera pointed at the 3d Printer for remote testing.

## Collaborators

[//]: # ( readme: collaborators -start )
<table>
<tr>
    <td align="center">
        <a href="https://github.com/ApplebaumIan">
            <img src="https://avatars.githubusercontent.com/u/9451941?v=4" width="100;" alt="ApplebaumIan"/>
            <br />
            <sub><b>Ian Tyler Applebaum</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/leighflagg">
            <img src="https://avatars.githubusercontent.com/u/77810293?v=4" width="100;" alt="leighflagg"/>
            <br />
            <sub><b>Null</b></sub>
        </a>
    <td align="center">
        <a href="https://github.com/leighflagg">
            <img src="https://avatars.githubusercontent.com/shafiq9018" width="100;" alt="leighflagg"/>
            <br />
            <sub><b>Shafiq Rahman</b></sub>
        </a>
    <td align="center">
        <a href="https://github.com/leighflagg">
            <img src="https://avatars.githubusercontent.com/efiera" width="100;" alt="leighflagg"/>
            <br />
            <sub><b>Ellie Fiera</b></sub>
        </a>
    <td align="center">
        <a href="https://github.com/leighflagg">
            <img src="https://avatars.githubusercontent.com/RRodriguez26" width="100;" alt="leighflagg"/>
            <br />
            <sub><b>Rafael Perez</b></sub>
        </a>
    <td align="center">
        <a href="https://github.com/leighflagg">
            <img src="https://avatars.githubusercontent.com/Stapletonchris" width="100;" alt="leighflagg"/>
            <br />
            <sub><b>Christopher Luckie Christmas</b></sub>
        </a>
    <td align="center">
        <a href="https://github.com/leighflagg">
            <img src="https://avatars.githubusercontent.com/sh-jafri" width="100;" alt="leighflagg"/>
            <br />
            <sub><b>Sami Jafri</b></sub>
        </a>
    <td align="center">
        <a href="https://github.com/leighflagg">
            <img src="https://avatars.githubusercontent.com/sergiyPliss" width="100;" alt="leighflagg"/>
            <br />
            <sub><b>Sergiy Pliss</b></sub>
        </a>
</table>

[//]: # ( readme: collaborators -end )
