/********************************
 Reaktv
 ReactJS+Electron Framework

 (c)2016, Dr.Kameleon
 ********************************/

import { app, BrowserWindow } from "electron"

let mainWindow

function createWindow () {
    mainWindow = new BrowserWindow({width: 800, height: 600})

    mainWindow.loadURL(`file://${__dirname}/index.html`)
    mainWindow.webContents.openDevTools()

    BrowserWindow.addDevToolsExtension("/Users/drkameleon/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/0.15.4_0")
    mainWindow.on('closed', ()=> { mainWindow = null })
}

app.on('ready', createWindow)
app.on('window-all-closed', ()=> { if (process.platform !== 'darwin') app.quit() })
app.on('activate', ()=> { if (mainWindow === null) createWindow() })
