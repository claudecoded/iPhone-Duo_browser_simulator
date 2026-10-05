<img width="1280" height="274" alt="image" src="https://github.com/user-attachments/assets/4c446ca6-a54e-4a08-8795-bba1d7d9cb07" />

# iPhone Duo - Advanced Interactive Simulator 

An interactive, responsive, and fully customizable web-based clone of the **iPhone Duo**. This simulator features a simulated 3D mechanical folding hinge, dynamic hardware coloring, wallpaper customization, and independent dual-screen multitasking powered by live `iframe` application sandboxing.

NOTE: this project is just an prototype. If you found bugs on it, please tell me to fix it.

---
No specialized development environment or Node.js installations are required to run this project. It runs completely standalone as a pure static web interface.

---

## 🚀 How to Run the Simulator

As a user, you can experience and interact with this simulator using one of the two incredibly simple methods below:

### Method 1: Run Locally on Your Computer (No Installation)
1. **Download the Code**: Download or copy the contents of the `index.html` file from this repository.
2. **Create a Local File**: Open your system's default text editor (such as **Notepad** on Windows or **TextEdit** on macOS).
3. **Paste & Save**: Paste the complete code inside the editor. Click *Save As*, select *All Files (*.*)* as the file type, name the file exactly `index.html`, and save it to your Desktop.
4. **Launch**: Double-click your newly created `index.html` file. It will immediately open and run perfectly inside your web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari).

### Method 2: Access Live via GitHub Pages
If the repository administrator has enabled GitHub Pages, you can interact with the live deployment instantly by visiting the public deployment URL assigned to this repository.

---

## 🛠️ Main Features & Interaction Guide

Once the simulator is active on your screen, you can use the interactive **iPhone Duo Studio** control panel on the right side to modify everything in real-time:

* 📱 **Dual-Screen Multitasking**: Both the left and right display modules operate completely independent of each other. You can launch built-in applications on one screen while keeping the other screen on the Home dashboard.
* 🎨 **Device Color Shell**: Instantly switch the phone's outer chassis and frame material color accents between Graphite Zinc, Silver, Ocean Blue, or Deep Crimson.
* 📐 **Fold Mechanism Angle**: Use the dynamic geometric slider to transition the physical hinge from a completely flat 180° orientation down to a 100° angled L-Shape laptop flex stance.
* 🖼️ **Display Backgrounds**: Dynamically swap the system wallpaper graphics across both active display monitors simultaneously.
* 🌐 **Inject Custom Real Websites**: Type any valid web URL into the left or right controller inputs and press **Go** to load live external web platforms straight into that screen's ecosystem.

---

## 🔒 Important Notice Regarding Web Embeds

This simulator utilizes highly secure `iframe` sandboxing containers to pull in external websites. Please note that several major production platforms (such as *Google, YouTube, Facebook, and Instagram*) explicitly deploy strict security protocols known as **`X-Frame-Options`** or **`Content-Security-Policy`**. 

These protocols tell web browsers to block their site from being loaded inside an external iframe container to prevent clickjacking attacks. For the best user experience when testing custom URLs, we highly recommend using light, standard, or open-source documentation domains (like Wikipedia, OpenStreetMap, or specialized mobile web tools).
