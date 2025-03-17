---
sidebar_position: 4
---

# Requirements / Features

**Basic system requirements of different components part II.**

- The first requirement was to use OctoPrint as the interface between the client and 3d Printer/s.
- This application is design is constructed of a distributable plugin using the OctoPrint documentation. 
- The application requires **very low RAM and CPU overhead**, making it capable of running on any modern system. See development environment for hardware requirements.
- OctoPrint is already designed for network use and allows many features such as camera and 3d Viewing.
- **Frontend application:** Our plugin will be a GUI-based interface inside OctoPrint for scanning files for warnings before printing.
- **3D-printer interface:** A hardware component running OctoPrint and G-Code Security Plugin.
- Future enhancements include **multiple file scans** and or **multiple print job handling**.
- Text output inside OctoPrint will display a Fail Success report.

**Not required**
- **Database:** The application will not require a database. If this is required for keeping track of people that use the printer, it can be a future enhancement.