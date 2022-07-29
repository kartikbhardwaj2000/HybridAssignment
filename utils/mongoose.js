const mongoose = require('mongoose');
const { MONGO_URI } = require('../constants');

mongoose.connect(MONGO_URI, (err) => {
  if (err) {
    console.log('mongodb not connected');
    console.log(err);
    process.exit(1);
  }
  console.log('mongodb connection successfull');
});

module.exports = mongoose.connection;
