# Device-Manager
The Electron desktop application that can detect connected Serial / USB devices, display them in a user interface, and allow the user to manage them.

# Functional Requirements

1. Device Detection
2. User Interface
3. Local Storage

   Device data is stored in devices.json

   **Path:** C:\Users\<USERNAME>\AppData\Roaming\Electron\devices.json
   
5. Known vs New Devices
6. Electron Architecture
   
   ***Main Process:***
   
     i) Runs main.js
   
     ii) Manages OS-level functionality
   
     iii) Handles IPC communication

   ***Preload:***
   
    i) Bridge between Renderer and Main
   
    ii) Exposes only safe functions to UI

   ***Renderer:***
   
    i) Application UI(HTML/JS/CSS)
   
    ii) Calls preload functions 

The application detects only Serial and serial-class USB devices. Storage devices are not detected.

**Setup:**
       
      git clone <your-repo>
   
      cd device-manager
   
      npm install

**Run the App:**

    npm start

#**Application User Interface**

<img width="1101" height="732" alt="App UI" src="https://github.com/user-attachments/assets/76c53e5f-8eb0-441e-a7f5-2687be033e46" />


📟 Device Manager – Electron Desktop Application








📌 Project Overview

Device Manager is an Electron-based desktop application that detects connected Serial and serial-class USB devices, displays them in a user-friendly interface, and manages device information using local JSON storage.

The application is designed with a secure Electron architecture using Main, Preload, and Renderer processes, ensuring safe IPC communication and clean separation of concerns.

✨ Key Features

🔍 Detects connected Serial & Serial-class USB devices

📋 Displays device details:

Port Name (e.g., COM3, /dev/ttyUSB0)

Vendor ID (VID)

Product ID (PID)

Connection Status

🔁 Refresh button to rescan connected devices

🆕 Differentiates between Known and New devices

💾 Stores device data locally in a JSON file

🚫 Does NOT detect USB storage devices (pen drives, HDDs)

📐 Functional Requirements
1️⃣ Device Detection

Detects all connected serial / serial-class USB devices

Automatically updates device list on refresh

2️⃣ User Interface

Clean and structured table-based UI

Status indicators for device connection

Easy-to-use refresh functionality

3️⃣ Local Storage

Device data is persisted in a local JSON file:

C:\Users\<USERNAME>\AppData\Roaming\Electron\devices.json

4️⃣ Known vs New Devices

Devices previously stored in devices.json → Known Devices

Newly detected devices → New Devices

5️⃣ Electron Architecture
🧠 Main Process

Executes main.js

Handles OS-level operations

Manages serial device detection

Handles IPC communication

🔐 Preload Script

Secure bridge between Main and Renderer

Exposes only safe APIs to the UI

🎨 Renderer Process

Manages application UI (HTML / CSS / JavaScript)

Interacts with Preload APIs for device data

⚠️ Device Support Note

⚠️ This application detects only Serial and serial-class USB devices
❌ USB storage devices such as pen drives or external hard disks are not detected

🛠️ Setup Instructions
🔹 Clone the Repository
git clone <your-repo>
cd device-manager

🔹 Install Dependencies
npm install

▶️ Run the Application
npm start

🖼️ Application User Interface
<img src="https://github.com/user-attachments/assets/76c53e5f-8eb0-441e-a7f5-2687be033e46" alt="Device Manager UI" width="100%" />
