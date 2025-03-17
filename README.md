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

The increasing accessibility of 3D printing has revolutionized manufacturing of prototyping or re-producing a part virtually anywhere.
However, with the widespread use of printing 3D parts, there is a growing risk of maliciously altered or error-prone G-CODE files
that could damage the equipment, result in injury, or fire.

This project aims to develop a solution to mitigate these problems by:
- Scan G-CODE files for potential threats or errors.
- Ensuring a safer and more reliable 3D printing experience.
- Further Scan G-CODE of files to identify issues such as out-of-bound commands.
- Incorrect temperature settings and other user errors.

After scanning a g-code file, an alert with pass will allow the client to take action to halt printing depending on the scan result.
If the scan is approved, then it can be printed successfully.

This project’s goals include:
- Enhancing 3D printer safety by mitigating the risks of hardware damage by stopping malicious code from running on the 3D printer.
- Streamlining the printing process and increase productivity and prevent downtime.
- Providing a user-friendly interface to scan and print.
  This application has the potential to be a vital tool for 3D printing enthusiasts and professionals, ensuring higher print reliability, prevent downtime, and safer operation.

## High-Level Requirement

The application will provide a standard distributable plugin for OctoPrint. It will be available as a feature tab within OctoPrint and will be used after CURA or PRUSA has completed slicing a file into G-code.

The G-code file can either be:
- Sent to OctoPrint over the network, or
- Accessed by OctoPrint via network storage.

The client will be presented with a dropdown file selection interface to choose a G-code file for scanning. The scanner will analyze the file and return a **Pass** or **Warnings** status before printing.

## Conceptual Design

The team will develop the application as a plugin for OctoPrint.
OctoPrint can run on the network to receive a print job as well as provide web access to scan the file before printing.
The designed application functionality includes scanning for incorrect temperature ranges out of bound commands,
malicious commands to disable limit switches, and including to prevent malicious code from colliding the print head into the part. The job of the software will be to stop the print job from being executed on the printer.

## Background Summary

In government and military computer usage policies, USB drives for storage are highly regulated.
This makes using USB drive scanning before printing makes it impracticable.
Therefore, all agencies under this umbrella use secure networks for printing and communication. To ensure compatibility and functionality, the G-code scanning application will have network capability.

- Seamless integration with all networked devices where 3D printing security is in high demand.
- Future scalability to handle multiple files and print multiple jobs sent to more than one printer.
- Octoprint provides documentation for creating plugins for developers to enhance or upgrade features. 

Other information on addressing 3D printing security.   
https://asmedigitalcollection.asme.org/computingengineering/article-abstract/21/4/041007/1089710/A-Blockchain-Based-G-Code-Protection-Approach-for?redirectedFrom=fulltext

## Recommended Resources

The following resources will aid in the plugin development. 
- OctoPrint Plugin Documentation
- RaspBerry PI 4
- 3d Printer 
- Remote vpn access to computer for working remotely to test code (Optional).
- A camera pointed at the 3d Printer for remote testing (Optional).

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
    </td>
    <td align="center">
        <a href="https://github.com/shafiq9018">
            <img src="https://avatars.githubusercontent.com/shafiq9018" width="100;" alt="shafiq9018"/>
            <br />
            <sub><b>Shafiq Rahman</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/efiera">
            <img src="https://avatars.githubusercontent.com/efiera" width="100;" alt="efiera"/>
            <br />
            <sub><b>Ellie Fiera</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/RRodriguez26">
            <img src="https://avatars.githubusercontent.com/RRodriguez26" width="100;" alt="RRodriguez26"/>
            <br />
            <sub><b>Rafael Perez</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/Stapletonchris">
            <img src="https://avatars.githubusercontent.com/Stapletonchris" width="100;" alt="Stapletonchris"/>
            <br />
            <sub><b>Christopher Luckie Christmas</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/sh-jafri">
            <img src="https://avatars.githubusercontent.com/sh-jafri" width="100;" alt="sh-jafri"/>
            <br />
            <sub><b>Sami Jafri</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/sergiyPliss">
            <img src="https://avatars.githubusercontent.com/sergiyPliss" width="100;" alt="sergiyPliss"/>
            <br />
            <sub><b>Sergiy Pliss</b></sub>
        </a>
    </td>
</tr>
</table>

[//]: # ( readme: collaborators -end )
