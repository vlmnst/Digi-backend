const cron = require('node-cron');
const syncDB = require('./syncDB');

const cronSync = () => {
    syncDB()
    cron.schedule( '*/5 * * * *' , () => {
        console.log("aqui el corn")
        syncDB()
    })
}

module.exports = cronSync;