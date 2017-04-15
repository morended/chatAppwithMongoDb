require('babel-register');

const router = require('./routes.js');
const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('./src/database.js');

mongoose.connect();

app.use(express.static(path.join(__dirname, 'public')));
// Import routes
app.use('/', router);
app.listen(process.env.PORT || 3000);



