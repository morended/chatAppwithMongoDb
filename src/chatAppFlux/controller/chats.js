"use strict";
var ChatSchema = require('../../db/chatSchema.js');

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
