const cron = require('node-cron');
const syncDB = require('./syncDB');

const cronSync = () => {
    syncDB()
    cron.schedule( process.env.CRON_INTERVAL , () => {
        syncDB()
    })
}

module.exports = cronSync;