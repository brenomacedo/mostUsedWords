const { ipcMain } = require('electron')
const pathsToRows = require('./pathsToRows')
const prepareData = require('./prepareData')
const groupWords = require('./groupWords')
ipcMain.on('process-subtitle', (event, paths) => {
    pathsToRows(paths)
        .then(rows => prepareData(rows))
        .then(words => groupWords(words))
        .then(groupedWords => {
            event.reply('process-subtitle', groupedWords)
        })

    
})