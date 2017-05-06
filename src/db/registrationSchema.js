"use strict";

var mongoose  = require('mongoose');
var Schema = mongoose.Schema;

var RegisterSchema = new Schema({
  id       : {type:String},
  username  : {type: String},
  password  : { type: String }
});

RegisterSchema.set('autoIndex', true);

module.exports = mongoose.model("register", RegisterSchema);

