"use strict";

const mongoose = require('mongoose');


module.exports = {
  connect: () => {
   
   internals.connect(); 
   console.log("db connected");
  },

  close: function () {
    console.log('Database disconnected.');
    return mongoose.connection.close()
  }
};

const internals = {
  connect: function () {
    const options = { server: { socketOptions: { keepAlive: 1 } } };
    return mongoose.connect('mongodb://localhost:27017/ChatFlux'); 
  }
};

