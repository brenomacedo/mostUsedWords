const { ipcMain } = require('electron')
ipcMain.on('process-subtitle', (event, arg) => {
    console.log(arg)
    event.reply('process-subtitle', 'pong')
    
})