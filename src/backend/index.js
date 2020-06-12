const { ipcMain } = require('electron')
const pathsToRows = require('./pathsToRows')
const prepareData = require('./prepareData')
ipcMain.on('process-subtitle', (event, paths) => {
    pathsToRows(paths).then(rows => console.log(rows)).then(() => {
        event.reply('process-subtitle', 'pong')
    })

    
})