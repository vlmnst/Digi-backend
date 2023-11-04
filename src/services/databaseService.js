const mongoose = require('mongoose');

const mongoURL = process.env.MONGO_URL;

const connectionDB = ( ) => {
    mongoose.connect(mongoURL)
.then( connection => console.log( 'Connected successully' ) )
.catch( console.log );
}

module.exports = connectionDB;