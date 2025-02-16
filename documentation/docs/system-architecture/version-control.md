---
sidebar_position: 4
---

# Version Control


---

### **1. The G-Code Pre-Print Scanning Software Version Control Example**
- The frontend and backend application will be hosted on **Github** and shared to the client or customer for keeping track of old and new versions.

---

### **Shown below is a diagram or mockup of the version control repository**


```

## Mockup Repository Structure

Below is the structured layout of the **G-Code Pre-Print Scanning Software**

📦 gcode-preprint-scanner/  
├── 📂 frontend/         # Web application (GUI)  
│   ├── src/            # Frontend source code  
│   ├── public/         # Static assets (HTML, CSS, JS)  
│   ├── package.json    # Node.js dependencies  
│   ├── README.md       # Frontend documentation  
│   └── tests/          # Frontend test cases  
├── 📂 backend/         # API, scanning engine, and OctoPrint integration  
│   ├── src/            # Backend source code  
│   ├── tests/          # Backend test cases  
│   ├── requirements.txt # Python dependencies  
│   ├── README.md       # Backend documentation  
│   └── config/         # Configuration files  
├── 📂 docs/            # Documentation and API references  
│   ├── architecture.md # System architecture overview  
│   ├── setup.md        # Setup and installation guide  
│   ├── README.md       # General project documentation  
├── .github/            # CI/CD workflows and GitHub Actions  
├── .gitignore          # Ignored files and directories  
├── 📂 builds/          # Precompiled binaries for different OS  
│   ├── Windows/        # Windows executable precompiled  
│   ├── macOS/          # macOS backend precompiled  
│   ├── Ubuntu/         # Ubuntu backend precompiled  
└── README.md           # Main project documentation  
```

- The above diagram is made with https://graphql.org/learn/