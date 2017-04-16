var chatController= require("./src/chatAppFlux/controller/chats");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('index');
});

router.get('/api', function(req, res, next) {
  res.send('POST request to the api')
});

router.post('/api/chats/sendMessage', function(req, res) {
  return chatController.create(req,res);
});

module.exports = router;
