const path = require("path");
const {app , BrowserWindow, Menu} = require('electron');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1450,
        height: 800
    })

    Menu.setApplicationMenu(null)

    mainWindow.setIcon(path.join(__dirname, '/ic.png'))
    mainWindow.setTitle('Wordus App')

    //mainWindow.webContents.openDevTools()

    mainWindow.loadFile(`./public/index.html`)
}

app.whenReady().then(async () => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});