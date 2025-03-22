---
sidebar_position: 5
---

# System Architecture / Logical Structure #

![img_2.png](images/logicalStruc.png)
Diagram A


**Component Description**

•	Backend G-Code Parser Pre-Print Scanner

•	Frontend User Interface

•	All devices are networking

•	Diagram A shows a risk introduction

•	The exclamation mark is a response action from the backend scanning application

•	The red X shows that a file was damaged or compromised

•	Inside the scanner diagram we can see the backend application communicating with OctoPrint



**Diagram A:**
Depicts the risk introduced to a file and how the backend application picks up the mistake
and rejects the G-Code alerting the user to stop printing and supply a new or correct document.

**Component Overview**

•	The diagram shows a logical process of client and hardware interaction as well as a third-party risk shown to demonstrate how the application will block the print to avoid downtime or damage.

•	Please see the high-level view of the components in the diagram above.
We can see
that there are two major software components which make up the G-Code Pre-Print Scanning design. The frontend and the backend apps are
running seamlessly on the network without any use of external USB drives.

•	Data flow on the network shows that the print job is sent via the frontend app to the printer and the app will direct the file to the backend app for a complete security scan. Once the data has been approved and safe an alert will be sent to the client giving them the opportunity to print or stop.

**Interface and APIs in Diagram A**
The interface inside the left surrounded diagram labeled "G-Code Backend Scanner" shows HTTP Web services running on some hardware. The important component of that diagram is the G-Code scanner service running on the shown hardware. Note: This hardware can be a personal choice of Windows, OS X, Rasberry Pi etc.


**OctoPrint API Integration:**

As we delve into the low-level view of the OctoPrint, we will examine the features provided by the REST API services.
REST API General information is obtained by visiting their website. There is a wealth of information available as well as plugins to handle API keys so that clients can implement their own solution.

https://docs.octoprint.org/en/master/api/general.html

This document will not go into details of any code unless deemed necessary for some unclear workflows.

**Choice of Architecture:**

The architecture of the project is a scaled down layered architecture pattern, with three layers. The pattern was selected for its simplicity and to better organise workflow during sprints, as the layers could be separated into smaller atomized tasks.

The layers are separated into the UI layer, the application layer, and the data layer. The UI layer works autonomously and only relays information to the user, and thus could be developed independently. The application layer is where the g-code files are scanned, and only needs to share an agreed on format for data in order to be integrated into the project. If there were more integration between the layers, another design pattern would have been considered. 

The components are static and communication is bidirectional over a local network only. For this reason no networking was considered, thus networking related patterns could not be used. 

**Scalability:**

The components can be scaled horizontally by adding more printers. There is little need for vertical scaling, as the computations are simple and one computer can handle a large amount of printers. Since printers are a physical object, and communication is local the number of printers is limited by the amount of physical space. An aircraft carrier needs a small amount of printers thus scalability is possible but unnecessary. 


