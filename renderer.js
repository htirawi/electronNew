// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {ipcRenderer} = require("electron");

ipcRenderer.send("download", {
    url: "http://rbk.org/ito/a5.psd",
    properties: {directory: "C:\Users\Hussein\Desktop"}
});


ipcRenderer.on("download complete", (event, file) => {
    console.log(file); // Full file path
});