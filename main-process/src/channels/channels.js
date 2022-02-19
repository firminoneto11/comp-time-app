
const { ipcMain, app, dialog, BrowserWindow } = require('electron');


function bindChannels() {

    // quit-app handler
    ipcMain.handle('quit-app', () => {
        const answers = ['Yes', 'No'];
        dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
            title: "Quit",
            type: 'warning',
            message: "Are you really sure that you want to quit the app?",
            buttons: answers
        }).then(({ response: index }) => {
            const answer = answers[index];
            if (answer === 'Yes') {
                app.quit();
            }
        });
    });
}


module.exports = {
    bindChannels
}
