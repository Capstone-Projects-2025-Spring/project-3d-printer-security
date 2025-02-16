---
sidebar_position: 3
---

# Octo Print Overview #



---

# 🖧 OctoPrint Overview

OctoPrint allows full control over every aspect of a 3D printer and its capabilities. Users typically interact with OctoPrint via a web browser, but our implementation will integrate it through the OctoPrint API to manage print jobs and monitor progress from a networked backend application.

### 🔗 System Integration
-  The backend application will interact with the OctoPrint API to control print jobs and monitor prints.
-  The frontend application will not directly connect to OctoPrint. However it will send the files to the backend application for scanning and approving the prints.
-  However, clients with appropriate privileges may be granted access to OctoPrint’s web interface for real-time monitoring.
-  The frontend application will be the primary interface for users to submit print jobs and interact with the system.

This approach ensures secure, structured, and controlled access to 3D printing management, enhancing workflow efficiency and fast availability for the next print.