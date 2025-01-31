---
sidebar_position: 4
---

# Features and Requirements
## Functional Requirements
- Executable must run in background
-Executable must scan pre sliced 3d model for:
	-Malicious code
	-Corrupt sections 
-Executable must scan Cura generated g-code for:
- intersections in paths along all axes. 
- spikes in temperature of the print head.
- an excessive volume of filament.
-Executable file must have an associated configuration file that may be used to edit:
	-Maximum permitted filament.
	- Maximum temperature of the print head.
-There must be an additional executable file for the purpose of easily editing the configuration file.
-Executable must raise a flag on detection of suspicious g-code and ask for manual approval. 

## Nonfunctional Requirements
- Security program must exist in the form of an executable file.
-Executable must not impede normal function of its resident computer system. 
-Executable must launch directly from file, without additional input.
 -Executable must automatically detect files sent to and output by Cura.
