---
sidebar_position: 4
---

# Requirements / Features

**Basic system requirements of different components.**

- This application design requires a **network** to be fully operational.
- The application requires **very low RAM and CPU overhead**, making it capable of running on any modern system. See development environment for hardware requirements.
- **Networking paradigm:** Seamless communication between components.
- **Frontend application:** GUI-based interface for monitoring warnings before printing.
- **Backend application:** Handles G-Code scanning and warns the client to take precautions before printing.
- **3D-printer interface:** A hardware component running both client and/or backend code for interacting with printers.
- Other features can be included in future enhancements, such as **multiple printer** and or **multiple print job handling**.

**Not required**
- **Database:** The application will not require a database. However, it will provide a success/failure report message to the client.
