const cron = require('node-cron');
const syncDB = require('./syncDB');

const cronSync = () => {
    syncDB()
    cron.schedule( '*/5 * * * *' , () => {
        syncDB()
    })
}

module.exports = cronSync;