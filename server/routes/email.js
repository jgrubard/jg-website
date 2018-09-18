const app = require('express').Router();
const nodemailer = require('nodemailer');
require('dotenv').config();
module.exports = app;

app.post('/', (req, res, next) => {
  const { email, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 25,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  const mailOptions = {
    from: 'jgrubard@gmail.com',
    to: 'jgrubard@gmail.com',
    subject: 'WEBSITE MESSAGE FROM ' + email,
    text: message,
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });

  res.sendStatus(200);

});