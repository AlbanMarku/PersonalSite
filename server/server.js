const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const cors = require('cors');
// require('dotenv').config({ path: './.env' }); // rm to fix render bug

const app = express();
const port = process.env.PORT || 8080;
app.listen(port);

const { EMAIL } = process.env;
const { PASSWORD } = process.env;

app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.use(express.json({ limit: '1mb', strict: true }));
app.use(cors());

console.log(`API server is listening on port:${port}`);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});

app.post('/sendMail', async (req, res) => {
  res.header(
    'Access-Control-Allow-Origin',
    'https://frontend-whny.onrender.com'
  );
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: '"personal site" <no-reply@example.com>',
      subject: 'CV response',
      to: EMAIL,
      text: `You got a response from ${req.body.email}:\n${req.body.message}`,
    });

    console.log(info.messageId);
    res.json({ message: 'Email sent!' });
  } catch (error) {
    console.log(error);
    res.json({ message: 'oops. Something went wrong.' });
  }
});
