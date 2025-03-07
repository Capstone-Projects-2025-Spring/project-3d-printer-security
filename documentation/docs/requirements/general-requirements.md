---
sidebar_position: 3
---

# General Requirements

**Basic system requirements of different components.**

- This application design requires a **network** to be fully operational.
- The application will be a plugin and requires OctoPrint.
- The application requires **very low RAM and CPU overhead**, making it capable of running on any modern system. See development environment for hardware requirements.
- **Networking paradigm:** Seamless communication between components.
- **Frontend application:** GUI-based interface for scanning files for warnings before printing.
- **3D-printer interface:** A hardware component running OctoPrint and G-Code Security Plugin for file scanning.
- Other features can be included in future enhancements, such as **multiple file scans** and or **multiple print job handling**.

**Not required**
- **Database:** The application will not require a database. However, it will provide a success/failure report message in the UI.