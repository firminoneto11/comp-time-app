
const { BrowserWindow, Menu } = require('electron');

// Creating a new menu with some functionalities
const mainMenu = Menu.buildFromTemplate([
    {
        label: "Actions",
        submenu: [
            { label: "Open Dev Tools", role: "toggleDevTools", accelerator: "F12" },
            { role: "quit", accelerator: "Alt+Q" }
        ]
    }
]);

// Setting the menu's application to be the just created menu
Menu.setApplicationMenu(mainMenu);


function createRootWindow() {
    const root = new BrowserWindow({
        width: 1920,
        height: 1080,
        backgroundColor: "#121212",  // For smooth loading
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true
        }
    });

    // const rootWc = root.webContents;

    root.maximize();
    root.loadURL("http://localhost:3000");
}


module.exports = createRootWindow;
