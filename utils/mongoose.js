const mongoose = require('mongoose');
const { mongoUri } = require('../constants');

mongoose.connect(mongoUri,(err) => {
    if(err)
    {
        console.log('mongodb not connected');
        console.log(err);
        process.exit(1);
    }
    console.log('mongodb connection successfull');
});

module.exports = mongoose.connection;