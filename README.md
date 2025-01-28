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

The increasing accessibility of 3D printing has revolutionized manufacturing and prototyping or re-producing a part in a remote location. However, with the widespread us of printing 3D parts, there is a growing risk of maliciously altered or error-prone G-CODE files that could damage other equipment using the printed parts, or result in injury or fire. This project aims to develop an application to scan G-CODE files for potential threats or errors, ensuring safer and more reliable 3D printing.
The application will analyze G-CODE files to identify issues such as out-of-bound commands, excessive temperature settings, user error, or malicious codes. It will also create a check list for the user to properly print the part with success check for bad G-CODE and suggest corrective measures. The application will flag the G-CODE if the files are un-safe, problematic, or malicious. The application will provide a summary to the user.
The project’s goals include:
1.	Enhancing 3D printer safety by mitigating the risks of hardware damage or accidents.
2.	Streamlining the printing process by catching common errors before execution.
3.	Providing a user-friendly interface for reviewing identified issues with actionable suggestions for resolution.
This application has the potential to be a vital tool for 3D printing enthusiasts and professionals, ensuring higher print reliability, reduced downtime, and safer operation.


## High Level Requirement

The app will be an executable program with a graphical UI. It will be launched after CURA has sliced and saved the file to the USB drive or the desired folder. The app will scan that newly created G-CODE and alert the user to halt or continue based on the scan.

## Conceptual Design

The application will be written in Java or Python and it will be portable and executable for windows, linux, mac etc. 

## Background

The background will contain a more detailed description of the product and a comparison to existing similar projects/products. A literature search should be conducted and the results listed. Proper citation of sources is required. If there are similar open-source products, you should state whether existing source will be used and to what extent. If there are similar closed-source/proprietary products, you should state how the proposed product will be similar and different.

I have found the following document that can shed light on types of work done for code protection.

https://asmedigitalcollection.asme.org/computingengineering/article-abstract/21/4/041007/1089710/A-Blockchain-Based-G-Code-Protection-Approach-for?redirectedFrom=fulltext


## Required Resources

Discuss what you need to develop this project. This includes background information you will need to acquire, hardware resources, and software resources. If these are not part of the standard Computer Science Department lab resources, these must be identified early and discussed with the instructor.

I am proposing the following:
- 3d Printer
- Dedicated Temple provided computer
- Remote vpn access to computer for working remotely to test code.
- Camera pointed at the 3d Printer for remote testing.

We can discuss these add / remove above per Professor Applebaum.

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
    </td></tr>
</table>

[//]: # ( readme: collaborators -end )
