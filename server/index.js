const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
require('dotenv').config();

app.use(require('body-parser').json());
app.use('/vendor', express.static(path.join(__dirname, '../node_modules')));
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/vendor', express.static(path.join(__dirname, '../client/public')));

app.use('/api', require('./routes'));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.listen(port, () => console.log(`** Listening on Port ${port} **`));