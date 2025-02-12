---
sidebar_position: 4
---

# Features and Requirements
## Functional Requirements
-Executable must scan Cura generated g-code for:
	-intersections in paths along all axes. 
	-spikes in temperature of the print head.
	-an excessive volume of filament.
- Executable must scan pre sliced 3d model for:
	-malicious code
	-corrupt sections
	-invalid files
-Executable must raise a flag on detection of suspicious g-code and ask for manual approval. 
- Executable file must have an associated configuration file that may be used to edit:
	- maximum permitted filament.
	- maximum temperature of the print head.
	- directory for scanning
- Executable must have a web-based UI that can:
	- change settings in associated configuration file.
	- show errors in the form of pop up messages.
	- show statistics related to g-code.
- Executable must connect to Octoprint via a Wi-Fi connection and send scanned files.
- Executable must receive diagnostic information from Octoprint and display them on the UI, including:
	- temperature of print head.
	- current layer.
	- dispensed filament.
- Security program must exist in the form of an executable file.

## Nonfunctional Requirements
- Executable should not impede normal function of its resident computer system. 
- Executable should run in background
- Executable should launch directly from file, without additional input.
