
const { BrowserWindow } = require('electron');


function createRootWindow() {
    const root = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true
        }
    });

    root.maximize();
    root.loadURL("http://localhost:3000");
}


module.exports = createRootWindow;
