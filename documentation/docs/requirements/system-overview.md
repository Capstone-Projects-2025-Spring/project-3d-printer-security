---
sidebar_position: 1
---

# System Overview

## Project Abstract
The increasing accessibility of 3D printing has revolutionized manufacturing and prototyping,
enabling the reproduction of parts in remote locations.
However, with the widespread use of 3D printing,
there is a growing risk of maliciously altered or error-prone G-CODE files that could damage equipment,
result in injury, or even cause fires.

This project aims
to develop a **distributable plugin for OctoPrint** that scans G-CODE files for potential threats or errors,
ensuring safer and more reliable 3D printing.
The plugin will analyze G-CODE files to identify issues such as out-of-bounds commands,
excessive temperature settings, user errors, or malicious code.
It will also act as a stopping point where clients can follow best practices for successful prints
and can learn to take corrective measures to avoid future mistakes.
The plugin will provide a small summary to the client,
indicating whether the file is **safe, problematic, or potentially malicious**.

### Project Goals:
- Enhance 3D printer safety by mitigating the risks of hardware damage or accidents.
- Streamline the printing process by detecting common errors before execution.
- Provide a user-friendly interface within **OctoPrint**, allowing users to review identified issues with actionable suggestions for resolution.

This plugin will serve as a vital tool for 3D printing enthusiasts and professionals, ensuring higher print reliability, reduced downtime, and safer operation.

## Conceptual Design
The application will be a **plugin integrated within OctoPrint**, appearing as a dedicated feature tab. It will automatically analyze G-CODE files after slicing is completed in **CURA or PRUSA** and before the print job is executed. The plugin will provide users with a dropdown menu to select the file for scanning and will generate a **Pass** or **Warnings** result before printing.

### Key Features:
- **OctoPrint Integration:** Runs as a native plugin inside OctoPrint.
- **Automated Scanning:** Analyzes G-CODE files received via:
    - Direct network transfer to OctoPrint.
    - Network storage is accessible by OctoPrint.
- **G-CODE Analysis:** The scanner will check for:
    - **Temperature Range Validation:** Ensuring the temperature settings for the hotend and heated bed are within safe limits.
    - **Shutdown Confirmation:** Verifying that the heated bed turns off is within guidelines.
    - **Printer Model & Boundaries:** Ensuring the X, Y, and Z axis movements are within the printer’s limits.
- **Checklist Feature:** Users will be provided with a **file scan report** so they can re-slice following the recommended printer guidelines.

Future features and enhancements can be added to improve safety and usability.

## Background
This document proposes a **plugin-based software solution for OctoPrint** that scans G-CODE files for potential threats,
ensuring safer 3D printing.
The accessibility of 3D printing has transformed manufacturing, prototyping, and on-site part reproduction.
However, as 3D printing adoption increases,
so do the risks associated with maliciously modified or erroneous G-CODE files.
The G-Code security scanner plugin for OctoPrint will serve all typs of users in any environment. 
