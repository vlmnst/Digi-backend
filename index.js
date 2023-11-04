require('dotenv').config()
const connectionDB = require('./src/services/databaseService');
const app = require('./src')


connectionDB();

app.listen(process.env.PORT, ( ) => {
    console.log(`Escuchando en el puerto: ${process.env.PORT} `);
})