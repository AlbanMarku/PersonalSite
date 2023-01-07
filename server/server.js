const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config({ path: './.env' });

const app = express();
const port = process.env.PORT || 8080;
app.listen(port);

app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.use(express.json({ limit: '1mb', strict: true }));

console.log(`API server is listening on port:${port}`);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});

app.post('/sendMail', async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'meritakol@gmail.com',
        pass: 'rqrhespohaydmmol',
      },
    });

    const info = {
      from: '"personal site" <no-reply@example.com>',
      subject: 'CV response',
      to: 'meritakol@gmail.com',
      text: `You got a response from ${req.body.email}:\n${req.body.message}`,
    };

    transporter.sendMail(info, (err, feedback) => {
      if (err) console.log(err);
      else console.log(feedback);
    });

    console.log('done');
    res.send('Email sent');
  } catch (error) {
    console.log(error);
  }
});
