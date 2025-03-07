---
sidebar_position: 4
---

# Features and Requirements

## Functional Requirements
- The distributable plugin must run in OctoPrint.
- The executable must scan pre-sliced 3D models for:
	- Malicious code
	- Corrupt sections
- The plugin must scan **Cura-generated G-code** or **Prusa-generated G-code** for:
	- Crossing boundaries along all axes.
	- Spikes in temperature of the print head.
    - Spikes in temperature of the bed.
- The distributable plugin file must have an associated **source code** that allows editing of:
	- Maximum permitted filament usage.
	- Maximum temperature of the print head.
- The plugin must **raise a flag** upon detection of suspicious G-code and require **manual approval** before proceeding.

## Nonfunctional Requirements
- The security scan program should be in the form of a distributable **OctoPrint Plugin**.
- The plugin should **not impede** the normal function of its resident computer system.
- The plugin should launch **directly in OctoPrint** without any additional user input.
- The plugin should **scan and detect** errors after gcode output by Cura or Prusa.

---

This document defines the essential features and requirements for the **3D Printer Security** project, ensuring that scanned G-code files remain safe for use.
