---
title: Development Environment
sidebar_label: Development Environment
sidebar_position: 3
---


# **Development Environment**

## **1. Overview**
The **G-Code Pre-Print Auditing System** is developed using a **structured and modular approach**, ensuring compatibility, maintainability, and security. This section outlines the development environment, including hardware, software dependencies, and setup instructions.

---

## **2. System Requirements**

### **2.1 Hardware Requirements**
| Component                       | Minimum Specification                | Recommended Specification           |
|---------------------------------|--------------------------------------|-------------------------------------|
| Processor                       | Within 5 years                       | n/a                                 |
| RAM                             | 8GB                                  | 16GB or higher                      |
| Storage                         | n/a                                  | n/a                                 |
| OS Compatibility                | Ubuntu 20.04+, Windows 10+, OS X 13+ | Ubuntu 22.04+, Windows 11, OS X 13+ |
| Raspberry Pi **(Not Required)** | Raspberry Pi 4                       | Raspberry Pi 4                      |

---

### **2.2 Software Dev Dependencies**
The project requires the following software and libraries:

#### **Frontend (Web GUI)**
- **Node.js** `v18.x+`
- **React.js** `v18+`
- **CSS** `For styling Frontend team can elaborate upon request.`


#### **Backend (API & Scanning Engine)**
- **Python** `3.9+`
- **Pygcode** for G-Code parsing https://pypi.org/project/pygcode/
- **OctoPrint REST API** for printer integration
- **Python** socket / socketserver for file transfer

#### **Development Tools**
- **Git** for version control
- **Visual Studio Code / PyCharm** for coding
- **Postman** for API testing
- **Docker (Optional)** for future containerized development
- **Docusaurus** for documentation

---

## **3. Setup Instructions**

### Configuring a Markdown Project with Add-ins in IntelliJ IDEA ###

Configurations for IntelliJ and VS CODE vary drastically so this is upto the programmer and skill set to configure the IDE. Here is a suggested place to start.

## **3.1 Cloning the Repository** ##S
```sh
git clone https://github.com/Capstone-Projects-2025-Spring/project-3d-printer-security.git
cd project-3d-printer-security
