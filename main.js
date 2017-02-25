'use strict'
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

//require('crash-reporter').start()

let mainWindow = null

app.on('window-all-closed', function () {
  app.quit()
})

app.on('ready', function () {
  const Screen = electron.screen;
  const size = Screen.getPrimaryDisplay().size

  mainWindow = new BrowserWindow({
    x: 0,
    y: 0,
    width: size.width,
    height: size.height,
    frame: false,
    show: true,
    transparent: true,
    resizable: false,
    alwaysOnTop: true
  })
  mainWindow.maximize()

  mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.on('closed', function () {
    mainWindow = null
  })
})
