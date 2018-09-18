const app = require('express').Router();
module.exports = app;

app.use('/email', require('./email'));