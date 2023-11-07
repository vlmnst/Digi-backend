require('dotenv').config()
const connectionDB = require('./src/services/databaseService');
const app = require('./src');
const cronSync = require('./src/cron/cron');



app.listen(process.env.PORT, async ( ) => {
    console.log(`Escuchando en el puerto: ${process.env.PORT} `);
    connectionDB();
    cronSync();
})