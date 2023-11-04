const mongoose = require('mongoose');

const connectionDB = ( ) => {
    mongoose.connect(process.env.MONGO_URL)
.then( connection => console.log( 'Connected successully' ) )
.catch( console.log );
}

module.exports = connectionDB;