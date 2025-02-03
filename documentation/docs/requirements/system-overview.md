---
sidebar_position: 1
---

# System Overview

## Project Abstract
The increasing accessibility of 3D printing has revolutionized manufacturing and prototyping or re-producing a part in a remote location. However, with the widespread us of printing 3D parts, there is a growing risk of maliciously altered or error-prone G-CODE files that could damage other equipment using the printed parts, or result in injury or fire. This project aims to develop an application to scan G-CODE files for potential threats or errors, ensuring safer and more reliable 3D printing. The application will analyze G-CODE files to identify issues such as out-of-bound commands, excessive temperature settings, user error, or malicious codes. It will also create a check list for the user to properly print the part with success check for bad G-CODE and suggest corrective measures. The application will flag the G-CODE if the files are un-safe, problematic, or malicious. The application will provide a summary to the user. The project’s goals include:

- Enhancing 3D printer safety by mitigating the risks of hardware damage or accidents.
- Streamlining the printing process by catching common errors before execution.
- Providing a user-friendly interface for reviewing identified issues with actionable suggestions for resolution. This application has the potential to be a vital tool for 3D printing enthusiasts and professionals, ensuring higher print reliability, reduced downtime, and safer operation.

## Conceptual Design
The app will be an executable program with a graphical UI. It will be launched after CURA has sliced and saved the file to the USB drive or the desired folder. The app will scan that newly created G-CODE and alert the user to halt or continue based on the scan. The application will be written in Java or Python and it will be portable and executable for windows, linux, mac etc. The design will begin with scanning the for temperature range and temperature of hot plate to turn off after printing. The other variables will check for printer model and x,y,z are within limits. We can add more features such as a checklist for the user to make sure they have followed the correct steps to complete a successful print.

## Background
This document proposes a software solution that scans G-CODE files for threats to ensure safer 3D printing. The increasing accessibility of 3D printing has revolutionized manufacturing and prototyping or re-producing a part onsite. However, with the widespread of printing 3D parts, there is a growing risk of maliciously altered or error-prone G-CODE files that could damage other equipment using the printed parts, or result in injury or fire to the printer. This task aims to develop an application to scan G-CODE files for potential threats or errors, ensuring safer and more reliable 3D printing and user safety.
The application will analyze G-CODE files to identify issues such as out-of-bound commands, excessive temperature settings, user error, or other malicious or suspicious commands. The app will check for bad G-CODE and suggest corrective measures and if required create a checklist or instructions for the user to properly print the part with success. The application will flag the G-CODE if the files are unsafe, problematic, or malicious. The application will provide a summary to the person in charge of approving the print.