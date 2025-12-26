# Device-Manager
The Electron desktop application that can detect connected Serial / USB devices, display them in a user interface, and allow the user to manage them.

Functional Requirements

1. Device Detection
2. User Interface
3. Local Storage
4. Known vs New Devices
5. Electron Architecture
   
   Main Process:
     Runs main.js
     Manages OS-level functionality
     Handles IPC communication

   Preload:
    Bridge between Renderer and Main
    Exposes only safe functions to UI

   Renderer:
    Application UI(HTML/JS/CSS)
    Calls preload functions 

The application detects only Serial and serial-class USB devices. Storage devices are not detected.
