const app = require('express').Router();

app.use('/email', require('./email'));

module.exports = app;