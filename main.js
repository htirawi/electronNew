const {app, BrowserWindow, ipcMain} = require("electron");
const {download} = require("electron-dl");
let window;
process.env.NODE_ENV='production';
app.on("ready", () => {
    window = new BrowserWindow({
        width: 800,
        height: 600
    });
    window.loadURL(`file://${__dirname}/index.html`);
    ipcMain.on("download", (event, info) => {
        download(BrowserWindow.getFocusedWindow(), info.url, info.properties)
            .then(dl => window.webContents.send("download complete", dl.getSavePath()));
    });
});