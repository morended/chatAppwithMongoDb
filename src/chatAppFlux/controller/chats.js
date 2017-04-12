  "use strict";
var ChatSchema = require('../../db/chats.js');

exports.create = function(req,res) {
    var entry=new ChatSchema(req.query);
    entry.save();

    ChatSchema.find({},'id message', function(err, docs) {
    if (!err){ 
    res.send(docs);
        console.log("hru");
        console.log(docs);
   
    } else {throw err;}
});
};
