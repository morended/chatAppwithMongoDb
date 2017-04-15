"use strict";

var mongoose  = require('mongoose');
var Schema = mongoose.Schema;

var ChatSchema = new Schema({
  id       : {type:String},
  message  : {type: String},
  time     : { type: Date, default: Date.now }
});

ChatSchema.set('autoIndex', true);

module.exports = mongoose.model("chat", ChatSchema);


