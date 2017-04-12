require('babel-register');
var router=require('./routes.js');
var path=require('path');
const express = require('express');
const app = express();
var mongoose=require('./src/database.js');
mongoose.connect();
app.use(express.static(path.join(__dirname, 'public')));
// Import routes
app.use('/', router);
app.listen(process.env.PORT || 3000);



