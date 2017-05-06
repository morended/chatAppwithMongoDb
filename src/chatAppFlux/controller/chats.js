"use strict";
var ChatSchema = require('../../db/chatSchema.js');
var RegisterSchema = require('../../db/registrationSchema.js');

exports.create = function(req,res) {
    var entry= new ChatSchema(req.query);
    entry
      .save()
      .then(function() {
        ChatSchema.find({},'id message', function(err, docs) {
          if (!err){
            res.send(docs);
          }
          else {
            throw err;
          }
        });
      });
};

exports.signup = function(req,res) {
    let registration= new RegisterSchema(req.query);
    registration
      .save()
      .then(function() {
        RegisterSchema.findOne('register.username','id', function(err, docs) {
          if (!err){
            res.send({success: true});
          }
          else {
            throw err;
          }
        });
      });
};

exports.signin = function(req,res) {
    RegisterSchema.findOne('register.username','id username password', function(err, result) {
      if (!err){
        if(result.password === req.password) {
          res.send({ authenticated: true});
        }
      }
      else {
        throw err;
      }
    });
};
